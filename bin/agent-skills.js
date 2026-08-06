#!/usr/bin/env node

import { mkdir, symlink, rm, access } from 'node:fs/promises';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const target = resolve(process.env.HOME || process.env.USERPROFILE, '.agents/skills');

const skills = {
  'frontend-product-design': 'frontend/product-design',
  'frontend-engineering': 'frontend/engineering',
  'frontend-review': 'frontend/review'
};

async function exists(path) {
  try { await access(path); return true; } catch { return false; }
}

async function install(name) {
  await mkdir(target, { recursive: true });
  const selected = name ? { [name]: skills[name] } : skills;

  for (const [skill, source] of Object.entries(selected)) {
    if (!source) {
      console.error(`unknown skill: ${skill}`);
      continue;
    }

    const dest = resolve(target, skill);
    if (await exists(dest)) {
      console.log(`skip ${skill}`);
      continue;
    }

    await symlink(resolve(root, source), dest, 'junction');
    console.log(`installed ${skill}`);
  }
}

async function remove() {
  for (const name of Object.keys(skills)) {
    const dest = resolve(target, name);
    if (await exists(dest)) {
      await rm(dest, { recursive: true, force: true });
      console.log(`removed ${name}`);
    }
  }
}

function list() {
  console.log(Object.keys(skills).join('\n'));
}

const [command = 'install', arg] = process.argv.slice(2);

if (command === 'install') await install(arg);
else if (command === 'remove') await remove();
else if (command === 'list') list();
else console.log('Usage: agent-skills install [skill] | remove | list');
