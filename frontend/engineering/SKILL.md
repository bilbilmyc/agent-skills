# Frontend Engineering

## Purpose

Build maintainable frontend applications with correct engineering decisions.

## Rules

### Architecture

Prefer:
- clear component boundaries
- reusable components when they represent real concepts
- simple folder structure

Avoid:
- giant page components
- unnecessary abstraction
- premature frameworks

### React

Separate:
- server data
- local state
- URL state
- global state

Do not add state libraries unless required.

### Next.js

Prefer:
- Server Components by default
- client components only for interaction
- correct caching strategy
- SEO-friendly rendering

### Responsive Implementation

Never hardcode a desktop canvas.

Avoid:
- fixed width pages
- fixed height layouts
- pixel-perfect single viewport implementation

Prefer:
- CSS grid
- flex layouts
- min/max constraints
- fluid typography

### Quality

Check:
- performance
- accessibility
- loading states
- error handling
- maintainability
