# @sb1/ffe-grid-react

## Description

Vi bruker et grid til å styre layouten på sidene våre. På små skjermer er gridet på 4 kolonner, på mellomstore skjermer 6 kolonner og på store skjermer 12 kolonner.

## Components

This package exports the following components:

- `Grid`
- `GridRow`
- `GridCol`

## Installation

Install the package and all its dependencies:

```bash
npm install @sb1/ffe-grid-react @sb1/ffe-grid @sb1/ffe-core
```

### Dependencies

This package depends on:

- `@sb1/ffe-grid`
- `@sb1/ffe-core`

## CSS Import

In your project's main CSS file, import the required styles:

```css
@import '@sb1/ffe-core/css/ffe.css';
@import '@sb1/ffe-grid/css/ffe-grid.css';
```

Note: Make sure to import `@sb1/ffe-core/css/ffe.css` first as it contains base styles.

## Usage

Import the components you need:

```typescript
import { Grid, GridRow, GridCol } from '@sb1/ffe-grid-react';
```

## Documentation

Full documentation is available at https://design.sparebank1.no/

## Additional Context

This is part of the SpareBank 1 FFE (Felles Front End) design system.
All components follow SpareBank 1's design guidelines and accessibility standards.
