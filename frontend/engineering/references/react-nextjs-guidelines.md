# React and Next.js Engineering Guidelines

## Architecture

Prefer clear boundaries.

Avoid:
- giant page components
- unnecessary abstraction
- premature frameworks

## React

Separate:
- server data
- local state
- URL state
- global state

Do not add state libraries without a real requirement.

## Next.js

Prefer:
- Server Components by default
- Client Components only for interaction
- correct caching strategy
- SEO friendly rendering

## Responsive Engineering

Never hardcode a desktop canvas.

Prefer:
- fluid layouts
- CSS grid
- flexbox
- min/max constraints
