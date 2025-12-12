# @sb1/ffe-system-message-react

## Description

React component library for SpareBank 1 Design System.

## Components

This package exports the following components:

- `SystemErrorMessage`
- `SystemInfoMessage`
- `SystemNewsMessage`
- `SystemSuccessMessage`

## Installation

Install the package and all its dependencies:

```bash
npm install @sb1/ffe-system-message-react @sb1/ffe-collapse-react @sb1/ffe-icons-react @sb1/ffe-system-message @sb1/ffe-core @sb1/ffe-icons
```

### Dependencies

This package depends on:

- `@sb1/ffe-collapse-react`
- `@sb1/ffe-icons-react`
- `@sb1/ffe-system-message`
- `@sb1/ffe-core`
- `@sb1/ffe-icons`

## CSS Import

In your project's main CSS file, import the required styles:

```css
@import '@sb1/ffe-core/css/ffe.css';
@import '@sb1/ffe-collapse-react/css/collapse.css';
@import '@sb1/ffe-icons/css/ffe-icons.css';
```

Note: Make sure to import `@sb1/ffe-core/css/ffe.css` first as it contains base styles.

## Basic Usage

```typescript
import { SystemErrorMessage, SystemInfoMessage, SystemNewsMessage, ... } from '@sb1/ffe-system-message-react';

function MyComponent() {
  return (
    <SystemErrorMessage>
      {/* Component content */}
    </SystemErrorMessage>
  );
}
```

## API Reference

### SystemErrorMessage Props

| Prop    | Type      | Required | Description |
| ------- | --------- | -------- | ----------- |
| `alert` | `boolean` | No       | -           |

### SystemMessage Props

| Prop          | Type              | Required | Description |
| ------------- | ----------------- | -------- | ----------- | ------- | --- | --- |
| `icon`        | `React.ReactNode` | No       | -           |
| `locale`      | `'en'             | 'nb'     | 'nn'`       | No      | -   |
| `onCloseRest` | `() => void`      | No       | -           |
| `onColoredBg` | `boolean`         | No       | -           |
| `modifier`    | `'error'          | 'info'   | 'success'   | 'news'` | Yes | -   |

## Documentation

Full documentation is available at https://design.sparebank1.no/

## Additional Context

This is part of the SpareBank 1 FFE (Felles Front End) design system.
All components follow SpareBank 1's design guidelines and accessibility standards.
