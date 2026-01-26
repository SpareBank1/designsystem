# @sb1/ffe-spinner-react

## Description

Loading spinner component for indicating ongoing processes.

## Components

This package exports the following components:

- `Spinner`

## Installation

Install the package and all its dependencies:

```bash
npm install @sb1/ffe-spinner-react @sb1/ffe-spinner @sb1/ffe-core
```

### Dependencies

This package depends on:

- `@sb1/ffe-spinner`
- `@sb1/ffe-core`

## CSS Import

In your project's main CSS file, import the required styles:

```css
@import '@sb1/ffe-core/css/ffe.css';
@import '@sb1/ffe-spinner/css/spinner.css';
```

Note: Make sure to import `@sb1/ffe-core/css/ffe.css` first as it contains base styles.

## API Reference

### Spinner Props

| Prop | Type | Required | Description |
|------|------|----------|-------------|
| `immediate` | `boolean` | No | - |
| `large` | `boolean` | No | - |
| `loadingText` | `React.ReactNode` | No | - |
| `locale` | `'nb' | 'nn' | 'en'` | No | - |
| `onColoredBg` | `never` | No | - |

## Manual Examples (from README)

```tsx
import { Spinner } from '@sb1/ffe-spinner-react';

function MyComponent() {
    const [isLoading, setIsLoading] = useState(true);

    return (
        <div>
            {isLoading && <Spinner />}
            <Spinner size="large" />
            <Spinner size="small" ariaLabel="Laster innhold..." />
        </div>
    );
}
```

## Documentation

Full documentation is available at https://design.sparebank1.no/

## Additional Context

This is part of the SpareBank 1 FFE (Felles Front End) design system.
All components follow SpareBank 1's design guidelines and accessibility standards.
