# @sb1/ffe-badge-react

## Description

Badge component for displaying small labels or notification counts.

## Components

This package exports the following components:

- `Badge`

## Installation

Install the package and all its dependencies:

```bash
npm install @sb1/ffe-badge-react @sb1/ffe-badge @sb1/ffe-core
```

### Dependencies

This package depends on:

- `@sb1/ffe-badge`
- `@sb1/ffe-core`

## CSS Import

In your project's main CSS file, import the required styles:

```css
@import '@sb1/ffe-core/css/ffe.css';
@import '@sb1/ffe-badge/css/badge.css';
```

Note: Make sure to import `@sb1/ffe-core/css/ffe.css` first as it contains base styles.

## API Reference

### Badge Props

| Prop | Type | Required | Description |
|------|------|----------|-------------|
| `className` | `string` | No | - |
| `children` | `React.ReactNode` | Yes | - |

## Manual Examples (from README)

```tsx
import { Badge } from '@sb1/ffe-badge-react';

function MyComponent() {
    return (
        <div>
            <Badge>5</Badge>
            <Badge>Ny</Badge>
        </div>
    );
}
```

```tsx
import { Badge } from '@sb1/ffe-badge-react';

function MyComponent() {
    return <Badge className="my-custom-badge">Custom badge</Badge>;
}
```

```css
@import '~@sb1/ffe-badge/css/badge.css';
```

## Documentation

Full documentation is available at https://design.sparebank1.no/

## Additional Context

This is part of the SpareBank 1 FFE (Felles Front End) design system.
All components follow SpareBank 1's design guidelines and accessibility standards.
