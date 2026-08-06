#!/usr/bin/env node

import { mkdir, symlink, access } from 'node:fs/promises';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const target = resolve(process.env.HOME || process.env.USERPROFILE, '.agents/skills');

const skills = {
  'frontend-product-design': 'frontend/product-design',
  'frontend-engineering': 'frontend/engineering',
  'frontend-review': 'frontend/review'
};

async function install() {
  await mkdir(target, { recursive: true });

  for (const [name, source] of Object.entries(skills)) {
    const dest = resolve(target, name);
    try {
      await access(dest);
      console.log(`skip ${name}`);
      continue;
    } catch {}

    await symlink(resolve(root, source), dest, 'junction');
    console.log(`installed ${name}`);
  }
}

const command = process.argv[2];

if (command === 'install' || !command) {
  await install();
} else if (command === 'list') {
  console.log(Object.keys(skills).join('\n'));
} else {
  console.log('Usage: agent-skills install | list');
}
