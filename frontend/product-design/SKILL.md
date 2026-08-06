# Frontend Product Design Skill

## Purpose

Prevent AI agents from generating generic admin dashboard interfaces when building products.

Use this skill for:

- SaaS products
- AI tools
- content platforms
- consumer web applications
- product websites

## Core Principle

Design the product experience before writing components.

Do not start with:

- React components
- Tailwind classes
- UI libraries

Start with:

1. Product type
2. User intent
3. Primary user action
4. Information hierarchy

## Product Classification

Identify the product category first.

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

1. Define page purpose
2. Define user journey
3. Create wireframe
4. Define design tokens
5. Implement components
6. Review against this skill
