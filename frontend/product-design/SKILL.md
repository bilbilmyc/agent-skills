# Frontend Product Design Skill

## Purpose

Prevent AI agents from generating generic admin dashboard interfaces when building products.

This skill applies to:

- SaaS products
- AI applications
- content platforms
- consumer web applications
- developer tools

## Core Principle

Design the product experience before writing code.

Never start with:

- React components
- Tailwind classes
- UI libraries
- database models

Start with:

1. Product type
2. User intent
3. Primary user action
4. Information hierarchy
5. Interaction model

## Product Classification

### Content Product

Examples:

- news platform
- knowledge platform
- market intelligence
- documentation

Prefer:

- editorial layout
- typography hierarchy
- reading experience
- search and discovery
- content flow

Avoid:

- dashboard cards
- management tables
- sidebar navigation

### Management Product

Examples:

- admin console
- internal tools
- operations platform

Sidebar layouts may be appropriate.

## Forbidden Patterns

Never use these as default:

- left sidebar application shell
- dashboard homepage
- duplicated page title
- breadcrumb everywhere
- excessive cards
- CRUD table as primary experience
- default shadcn dashboard appearance

## Required Design Artifacts

For medium and large projects create:

- product-spec.md
- page-wireframe.html
- component-map.yaml
- design-review.md

## Skill Resource Types

This skill may contain:

- Markdown rules
- HTML wireframes
- YAML design schemas
- Python validation scripts
- Shell automation scripts
- JSON configuration examples

## Layout Rules

Prefer:

- top navigation
- content-first layout
- responsive composition
- whitespace
- strong typography

Reference products:

- Linear
- Notion
- Bloomberg
- The Information
- Arc Browser

## Responsive Design

Design for different screens.

Desktop:

- optimize information density
- use multi-column layouts when valuable

Mobile:

- prioritize content
- simplify navigation
- do not shrink desktop layouts

## Implementation Workflow

Before coding:

1. Define product purpose
2. Define user journey
3. Create HTML wireframe
4. Create YAML component map
5. Define design tokens
6. Implement components
7. Run visual review
