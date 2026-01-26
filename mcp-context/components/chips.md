# @sb1/ffe-chips-react

## Description

Chip components for creating interactive, compact elements with optional icons.

## Components

This package exports the following components:

- `Chip`
- `ChipRemovable`
- `ChipSelectable`

## Installation

Install the package and all its dependencies:

```bash
npm install @sb1/ffe-chips-react @sb1/ffe-chips @sb1/ffe-core @sb1/ffe-icons-react @sb1/ffe-icons
```

### Dependencies

This package depends on:

- `@sb1/ffe-chips`
- `@sb1/ffe-core`
- `@sb1/ffe-icons-react`
- `@sb1/ffe-icons`

## CSS Import

In your project's main CSS file, import the required styles:

```css
@import '@sb1/ffe-core/css/ffe.css';
@import '@sb1/ffe-chips/css/chip.css';
@import '@sb1/ffe-icons/css/ffe-icons.css';
```

Note: Make sure to import `@sb1/ffe-core/css/ffe.css` first as it contains base styles.

## API Reference

### Chip Props

| Prop | Type | Required | Description |
|------|------|----------|-------------|
| `size` | `'sm' | 'md' | 'lg'` | Yes | - |
| `onColoredBg` | `never` | No | - |

### ChipRemovable Props

No component-specific props beyond native HTML attributes.

### ChipSelectable Props

| Prop | Type | Required | Description |
|------|------|----------|-------------|
| `isSelected` | `boolean` | No | - |

## Manual Examples (from README)

```tsx
import { Chip } from '@sb1/ffe-chips-react';

function MyComponent() {
    return (
        <div>
            <Chip size="md" onClick={() => console.log('Clicked')}>
                Click me
            </Chip>
            <Chip size="lg" onClick={() => console.log('Large chip')}>
                Large chip
            </Chip>
        </div>
    );
}
```

```tsx
import { Chip } from '@sb1/ffe-chips-react';
import { Icon } from '@sb1/ffe-icons-react';

function MyComponent() {
    return (
        <div>
            <Chip
                size="md"
                leftIcon={
                    <Icon
                        fileUrl="icons/open/300/notifications.svg"
                        size="md"
                    />
                }
                onClick={() => console.log('With left icon')}
            >
                With left icon
            </Chip>
            <Chip
                size="md"
                rightIcon={
                    <Icon fileUrl="icons/open/300/close.svg" size="md" />
                }
                onClick={() => console.log('With right icon')}
            >
                With right icon
            </Chip>
        </div>
    );
}
```

```tsx
import { Chip } from '@sb1/ffe-chips-react';

function MyComponent() {
    return (
        <Chip as="a" href="/page" size="md">
            Navigate
        </Chip>
    );
}
```

```css
@import '~@sb1/ffe-chips/css/chip.css';
```

## Documentation

Full documentation is available at https://design.sparebank1.no/

## Additional Context

This is part of the SpareBank 1 FFE (Felles Front End) design system.
All components follow SpareBank 1's design guidelines and accessibility standards.
