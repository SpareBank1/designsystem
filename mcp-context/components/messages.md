# @sb1/ffe-messages-react

## Description

Unified message components for communicating status, tips, and alerts. Use `SystemMessage` for global status, `ContextMessage` for contextual inline feedback (with optional header and close button), and `MessageBox` for framed messages. Compose `MessageHeader` and `MessageList`/`MessageListItem` to structure content. Choose `type` (`info`, `success`, `tips`, `warning`, `error`) to control icon, color, and accessibility roles.

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

## API Reference

### SystemMessage Props

| Prop | Type | Required | Description |
|------|------|----------|-------------|
| `type` | `MessageType` | Yes | - |
| `iconFileUrl` | `string` | No | - |
| `locale` | `Locale` | No | - |
| `onClose` | `() => void` | No | - |
| `onColoredBg` | `never` | No | - |

### ContextMessage Props

| Prop | Type | Required | Description |
|------|------|----------|-------------|
| `compact` | `boolean` | No | - |
| `iconFileUrl` | `string` | No | - |
| `locale` | `Locale` | No | - |
| `type` | `MessageType` | Yes | - |
| `onClose` | `() => void` | No | - |
| `closeButton` | `boolean` | No | - |
| `header` | `React.ReactElement<MessageHeaderProps> | string` | No | - |

### MessageBox Props

| Prop | Type | Required | Description |
|------|------|----------|-------------|
| `iconFileUrl` | `string` | No | - |
| `header` | `React.ReactElement<MessageHeaderProps> | string` | No | - |
| `type` | `MessageType` | Yes | - |
| `locale` | `Locale` | No | - |
| `onColoredBg` | `never` | No | - |

### MessageHeader Props

No component-specific props beyond native HTML attributes.

### MessageList Props

No component-specific props beyond native HTML attributes.

### MessageListItem Props

No component-specific props beyond native HTML attributes.

## Manual Examples (from README)

```tsx
import {
    SystemMessage,
    ContextMessage,
    MessageBox,
    MessageHeader,
    MessageList,
    MessageListItem,
} from '@sb1/ffe-messages-react';

export function MessagesExamples() {
    return (
        <div>
            {/* SystemMessage: global status with close button */}
            <SystemMessage type="success" locale="nb" onClose={() => {}}>
                Kontoen ble oppdatert.
            </SystemMessage>

            {/* ContextMessage: inline message with header and optional close button */}
            <ContextMessage
                type="warning"
                header="Sjekk opplysningene"
                closeButton
                compact
            >
                <MessageList>
                    <MessageListItem>Personnummer mangler</MessageListItem>
                    <MessageListItem>Adresse er ugyldig</MessageListItem>
                </MessageList>
            </ContextMessage>

            {/* MessageBox: framed message area with header */}
            <MessageBox
                type="info"
                header={
                    <MessageHeader as="h3">Viktig informasjon</MessageHeader>
                }
            >
                Husk å lagre endringer før du går videre.
            </MessageBox>
        </div>
    );
}
```

## Documentation

Full documentation is available at https://design.sparebank1.no/

## Additional Context

This is part of the SpareBank 1 FFE (Felles Front End) design system.
All components follow SpareBank 1's design guidelines and accessibility standards.
