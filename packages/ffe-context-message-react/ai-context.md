# @sb1/ffe-context-message-react

## Description

React component library for SpareBank 1 Design System.

## Components

This package exports the following components:

- `ContextInfoMessage`
- `ContextTipsMessage`
- `ContextSuccessMessage`
- `ContextErrorMessage`

## Installation

Install the package and all its dependencies:

```bash
npm install @sb1/ffe-context-message-react @sb1/ffe-collapse-react @sb1/ffe-context-message @sb1/ffe-icons-react @sb1/ffe-core @sb1/ffe-icons
```

### Dependencies

This package depends on:

- `@sb1/ffe-collapse-react`
- `@sb1/ffe-context-message`
- `@sb1/ffe-icons-react`
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
import { ContextInfoMessage, ContextTipsMessage, ContextSuccessMessage, ... } from '@sb1/ffe-context-message-react';

function MyComponent() {
  return (
    <ContextInfoMessage>
      {/* Component content */}
    </ContextInfoMessage>
  );
}
```

## API Reference

### ContextErrorMessage Props

| Prop    | Type      | Required | Description |
| ------- | --------- | -------- | ----------- |
| `alert` | `boolean` | No       | -           |

### ContextMessage Props

Renders a more compact version of the context message _/
compact?: boolean;
/\*\* ID for the children container _/
contentElementId?: string;
headerText?: string;
/** ID for the header container \*/
headerElementId?: string;
/** HTML element for the header _/
headerElement?: string;
icon: React.ReactNode;
/\*\* Decides the language of the aria-label for the close icon _/
locale?: 'nb' | 'nn' | 'en';
/** Provided by the wrapper component \*/
messageType: 'info' | 'tips' | 'success' | 'error';
/** Callback for when the context message has been closed (after the animation) \*/
onCloseRest?: () => void;
showCloseButton?: boolean;
/\*\* @deprecated as part of update to Semantic Colors

Use the `ffe-accent-color` class on the component or on the container of the component instead
[Read more in the upgrade guide](https://sparebank1.github.io/designsystem/?path=/docs/introduksjon-changelog--docs#2025---februar---semantiske-farger) \*/
onColoredBg?: never;
}

/\*\*
Base component for all four types of context messages.

_Should never be used directly!_
Please use one of the four versions exported from this package.

| Prop               | Type                                                                                                                  | Required | Description |
| ------------------ | --------------------------------------------------------------------------------------------------------------------- | -------- | ----------- | -------- | --- | --- |
| `compact`          | `boolean`                                                                                                             | No       | -           |
| `contentElementId` | `string`                                                                                                              | No       | -           |
| `headerText`       | `string`                                                                                                              | No       | -           |
| `headerElementId`  | `string`                                                                                                              | No       | -           |
| `headerElement`    | `string`                                                                                                              | No       | -           |
| `icon`             | `React.ReactNode`                                                                                                     | Yes      | -           |
| `locale`           | `'nb'                                                                                                                 | 'nn'     | 'en'`       | No       | -   |
| `messageType`      | `'info'                                                                                                               | 'tips'   | 'success'   | 'error'` | Yes | -   |
| `onCloseRest`      | `() => void`                                                                                                          | No       | -           |
| `showCloseButton`  | `boolean`                                                                                                             | No       | -           |
| `https`            | `//sparebank1.github.io/designsystem/?path=/docs/introduksjon-changelog--docs#2025---februar---semantiske-farger) */` | Yes      | -           |
| `onColoredBg`      | `never`                                                                                                               | No       | -           |

## Documentation

Full documentation is available at https://design.sparebank1.no/

## Additional Context

This is part of the SpareBank 1 FFE (Felles Front End) design system.
All components follow SpareBank 1's design guidelines and accessibility standards.
