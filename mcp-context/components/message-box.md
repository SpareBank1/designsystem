# @sb1/ffe-message-box-react

## Description

Deprecated package. Use `@sb1/ffe-messages-react` for system and context messages, headers, message lists, and message boxes. See the Messages component documentation for up-to-date APIs and examples.

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

## API Reference

### SuccessMessage Props

| Prop | Type | Required | Description |
|------|------|----------|-------------|
| `locale` | `'nb' | 'nn' | 'en'` | No | - |

### ErrorMessage Props

| Prop | Type | Required | Description |
|------|------|----------|-------------|
| `alert` | `boolean` | No | - |
| `locale` | `'nb' | 'nn' | 'en'` | No | - |

### InfoMessage Props

| Prop | Type | Required | Description |
|------|------|----------|-------------|
| `locale` | `'nb' | 'nn' | 'en'` | No | - |

### TipsMessage Props

| Prop | Type | Required | Description |
|------|------|----------|-------------|
| `locale` | `'nb' | 'nn' | 'en'` | No | - |

### InfoMessageList Props

| Prop | Type | Required | Description |
|------|------|----------|-------------|
| `children` | `NonNullable<React.ReactNode>` | Yes | - |

### InfoMessageListItem Props

No component-specific props beyond native HTML attributes.

## Documentation

Full documentation is available at https://design.sparebank1.no/

## Additional Context

This is part of the SpareBank 1 FFE (Felles Front End) design system.
All components follow SpareBank 1's design guidelines and accessibility standards.
