# @sb1/ffe-shapes-react

## Description

Decorative shape components for visual interest.

## Components

This package exports the following components:

- `Wave`

## Installation

Install the package and all its dependencies:

```bash
npm install @sb1/ffe-shapes-react @sb1/ffe-shapes @sb1/ffe-core
```

### Dependencies

This package depends on:

- `@sb1/ffe-shapes`
- `@sb1/ffe-core`

## CSS Import

In your project's main CSS file, import the required styles:

```css
@import '@sb1/ffe-core/css/ffe.css';
@import '@sb1/ffe-shapes/css/shapes.css';
```

Note: Make sure to import `@sb1/ffe-core/css/ffe.css` first as it contains base styles.

## API Reference

### Wave Props

| Prop | Type | Required | Description |
|------|------|----------|-------------|
| `position` | `string` | No | - |
| `flip` | `boolean` | No | - |
| `bgColor` | `Color` | No | - |
| `className` | `string` | No | - |
| `children` | `React.ReactNode` | No | - |

## Manual Examples (from README)

```tsx
import { Circle, Triangle, Square } from '@sb1/ffe-shapes-react';

function MyComponent() {
    return (
        <div>
            <Circle size="large" color="blue" />
            <Triangle size="medium" />
            <Square size="small" color="green" />
        </div>
    );
}
```

## Documentation

Full documentation is available at https://design.sparebank1.no/

## Additional Context

This is part of the SpareBank 1 FFE (Felles Front End) design system.
All components follow SpareBank 1's design guidelines and accessibility standards.
