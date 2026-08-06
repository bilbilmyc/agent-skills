# Frontend Design Anti Patterns

## Admin Dashboard Leakage

Problem:

AI frequently converts product interfaces into admin dashboards.

Symptoms:

- permanent sidebar
- Dashboard title on every page
- card grids everywhere
- tables as default UI

## Component First Design

Bad:

"Create a page with cards and tables"

Good:

"Create a market intelligence reading experience where users discover information quickly"

## Generic SaaS Style

Avoid:

- purple gradients
- excessive rounded containers
- random statistics cards
- default template appearance

## Missing Product Context

Before implementation always identify:

- Who uses this?
- What is the main action?
- What information matters most?

The UI should optimize the user's goal, not the developer's component reuse.
