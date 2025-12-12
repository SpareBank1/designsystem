# @sb1/ffe-message-box-react

## Description

React component library for SpareBank 1 Design System.

## Components

This package exports the following components:

- `SuccessMessage`
- `ErrorMessage`
- `InfoMessage`
- `TipsMessage`
- `InfoMessageList`
- `InfoMessageListItem`

## Installation

Install the package and all its dependencies:

```bash
npm install @sb1/ffe-message-box-react @sb1/ffe-icons-react @sb1/ffe-message-box @sb1/ffe-icons @sb1/ffe-core
```

### Dependencies

This package depends on:

- `@sb1/ffe-icons-react`
- `@sb1/ffe-message-box`
- `@sb1/ffe-icons`
- `@sb1/ffe-core`

## CSS Import

In your project's main CSS file, import the required styles:

```css
@import '@sb1/ffe-core/css/ffe.css';
@import '@sb1/ffe-icons/css/ffe-icons.css';
```

Note: Make sure to import `@sb1/ffe-core/css/ffe.css` first as it contains base styles.

## Basic Usage

```typescript
import { SuccessMessage, ErrorMessage, InfoMessage, ... } from '@sb1/ffe-message-box-react';

function MyComponent() {
  return (
    <SuccessMessage>
      {/* Component content */}
    </SuccessMessage>
  );
}
```

## API Reference

### BaseMessage Props

| Prop           | Type              | Required | Description |
| -------------- | ----------------- | -------- | ----------- | ------- | --- | --- |
| `icon`         | `React.ReactNode` | No       | -           |
| `title`        | `React.ReactNode` | No       | -           |
| `titleElement` | `string`          | No       | -           |
| `type`         | `'success'        | 'error'  | 'tips'      | 'info'` | Yes | -   |
| `onColoredBg`  | `boolean`         | No       | -           |
| `ariaLabel`    | `string`          | No       | -           |
| `role`         | `'alert'          | 'group'` | No          | -       |

### ErrorMessage Props

| Prop     | Type      | Required | Description |
| -------- | --------- | -------- | ----------- | --- | --- |
| `alert`  | `boolean` | No       | -           |
| `locale` | `'nb'     | 'nn'     | 'en'`       | No  | -   |

### InfoMessage Props

| Prop     | Type  | Required | Description |
| -------- | ----- | -------- | ----------- | --- | --- |
| `locale` | `'nb' | 'nn'     | 'en'`       | No  | -   |

### InfoMessageList Props

| Prop       | Type                           | Required | Description |
| ---------- | ------------------------------ | -------- | ----------- |
| `children` | `NonNullable<React.ReactNode>` | Yes      | -           |

### SuccessMessage Props

| Prop     | Type  | Required | Description |
| -------- | ----- | -------- | ----------- | --- | --- |
| `locale` | `'nb' | 'nn'     | 'en'`       | No  | -   |

### TipsMessage Props

| Prop     | Type  | Required | Description |
| -------- | ----- | -------- | ----------- | --- | --- |
| `locale` | `'nb' | 'nn'     | 'en'`       | No  | -   |

## Documentation

Full documentation is available at https://design.sparebank1.no/

## Additional Context

This is part of the SpareBank 1 FFE (Felles Front End) design system.
All components follow SpareBank 1's design guidelines and accessibility standards.
