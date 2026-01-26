# @sb1/ffe-tags-react

## Description

Tag components for labeling and categorizing content with different colors and sizes.

## Components

This package exports the following components:

- `Tag`

## Installation

Install the package and all its dependencies:

```bash
npm install @sb1/ffe-tags-react @sb1/ffe-core @sb1/ffe-icons-react @sb1/ffe-tags @sb1/ffe-icons
```

### Dependencies

This package depends on:

- `@sb1/ffe-core`
- `@sb1/ffe-icons-react`
- `@sb1/ffe-tags`
- `@sb1/ffe-icons`

## CSS Import

In your project's main CSS file, import the required styles:

```css
@import '@sb1/ffe-core/css/ffe.css';
@import '@sb1/ffe-icons/css/ffe-icons.css';
@import '@sb1/ffe-tags/css/tag.css';
```

Note: Make sure to import `@sb1/ffe-core/css/ffe.css` first as it contains base styles.

## API Reference

### Tag Props

| Prop | Type | Required | Description |
|------|------|----------|-------------|
| `type` | `'emphasis' | 'subtle'` | No | - |
| `className` | `string` | No | - |
| `variant` | `'info' | 'success' | 'warning' | 'critical' | 'neutral' | 'tip'` | No | - |
| `size` | `'sm' | 'md' | 'lg'` | No | - |
| `children` | `React.ReactNode` | Yes | - |

## Manual Examples (from README)

```tsx
import { Tag } from '@sb1/ffe-tags-react';

function MyComponent() {
    return (
        <div>
            <Tag variant="info">Info</Tag>
            <Tag variant="success">Success</Tag>
            <Tag variant="warning">Warning</Tag>
            <Tag variant="critical">Critical</Tag>
            <Tag variant="neutral">Neutral</Tag>
            <Tag variant="tip">Tip</Tag>
        </div>
    );
}
```

```tsx
import { Tag } from '@sb1/ffe-tags-react';

function MyComponent() {
    return (
        <div>
            <Tag type="emphasis" variant="info">
                Emphasized
            </Tag>
            <Tag type="subtle" variant="info">
                Subtle
            </Tag>
        </div>
    );
}
```

```tsx
import { Tag } from '@sb1/ffe-tags-react';

function MyComponent() {
    return (
        <div>
            <Tag size="sm" variant="neutral">
                Small
            </Tag>
            <Tag size="md" variant="neutral">
                Medium
            </Tag>
            <Tag size="lg" variant="neutral">
                Large
            </Tag>
        </div>
    );
}
```

```css
@import '~@sb1/ffe-tags/css/tag.css';
```

## Documentation

Full documentation is available at https://design.sparebank1.no/

## Additional Context

This is part of the SpareBank 1 FFE (Felles Front End) design system.
All components follow SpareBank 1's design guidelines and accessibility standards.
