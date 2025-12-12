# @sb1/ffe-messages-react

## Description

@sb1/ffe-messages-react

## Components

This package exports the following components:

- `SystemMessage`
- `ContextMessage`
- `MessageBox`
- `MessageHeader`
- `MessageList`
- `MessageListItem`

## Installation

Install the package and all its dependencies:

```bash
npm install @sb1/ffe-messages-react @sb1/ffe-icons-react @sb1/ffe-messages @sb1/ffe-icons @sb1/ffe-core
```

### Dependencies

This package depends on:

- `@sb1/ffe-icons-react`
- `@sb1/ffe-messages`
- `@sb1/ffe-icons`
- `@sb1/ffe-core`

## CSS Import

In your project's main CSS file, import the required styles:

```css
@import '@sb1/ffe-core/css/ffe.css';
@import '@sb1/ffe-icons/css/ffe-icons.css';
@import '@sb1/ffe-messages/css/messages.css';
```

Note: Make sure to import `@sb1/ffe-core/css/ffe.css` first as it contains base styles.

## Basic Usage

```typescript
import { SystemMessage, ContextMessage, MessageBox, ... } from '@sb1/ffe-messages-react';

function MyComponent() {
  return (
    <SystemMessage>
      {/* Component content */}
    </SystemMessage>
  );
}
```

## API Reference

### CloseButton Props

| Prop      | Type                      | Required | Description |
| --------- | ------------------------- | -------- | ----------- |
| `locale`  | `Locale`                  | Yes      | -           |
| `onClick` | `React.MouseEventHandler` | Yes      | -           |

### ContextMessage Props

| Prop          | Type                                    | Required | Description |
| ------------- | --------------------------------------- | -------- | ----------- | --- |
| `compact`     | `boolean`                               | No       | -           |
| `iconFileUrl` | `string`                                | No       | -           |
| `locale`      | `Locale`                                | No       | -           |
| `type`        | `MessageType`                           | Yes      | -           |
| `onClose`     | `() => void`                            | No       | -           |
| `closeButton` | `boolean`                               | No       | -           |
| `header`      | `React.ReactElement<MessageHeaderProps> | string`  | No          | -   |

### MessageBox Props

| Prop          | Type                                                                                                                  | Required | Description |
| ------------- | --------------------------------------------------------------------------------------------------------------------- | -------- | ----------- | --- |
| `iconFileUrl` | `string`                                                                                                              | No       | -           |
| `header`      | `React.ReactElement<MessageHeaderProps>                                                                               | string`  | No          | -   |
| `type`        | `MessageType`                                                                                                         | Yes      | -           |
| `locale`      | `Locale`                                                                                                              | No       | -           |
| `https`       | `//sparebank1.github.io/designsystem/?path=/docs/introduksjon-changelog--docs#2025---februar---semantiske-farger) */` | Yes      | -           |
| `onColoredBg` | `never`                                                                                                               | No       | -           |

### MessageCollapse Props

| Prop       | Type                 | Required | Description |
| ---------- | -------------------- | -------- | ----------- |
| `children` | `React.ReactElement` | Yes      | -           |
| `isClosed` | `boolean`            | Yes      | -           |

### MessageHeader Props

| Prop | Type                              | Required | Description |
| ---- | --------------------------------- | -------- | ----------- |
| `as` | `Comp = 'h2', className, ...rest` | Yes      | -           |

### MessageIcon Props

| Prop          | Type     | Required | Description |
| ------------- | -------- | -------- | ----------- |
| `iconFileUrl` | `string` | No       | -           |

### SystemMessage Props

| Prop          | Type                                                                                                                  | Required | Description |
| ------------- | --------------------------------------------------------------------------------------------------------------------- | -------- | ----------- |
| `type`        | `MessageType`                                                                                                         | Yes      | -           |
| `iconFileUrl` | `string`                                                                                                              | No       | -           |
| `locale`      | `Locale`                                                                                                              | No       | -           |
| `onClose`     | `() => void`                                                                                                          | No       | -           |
| `https`       | `//sparebank1.github.io/designsystem/?path=/docs/introduksjon-changelog--docs#2025---februar---semantiske-farger) */` | Yes      | -           |
| `onColoredBg` | `never`                                                                                                               | No       | -           |

## Documentation

Full documentation is available at https://design.sparebank1.no/

## Additional Context

This is part of the SpareBank 1 FFE (Felles Front End) design system.
All components follow SpareBank 1's design guidelines and accessibility standards.
