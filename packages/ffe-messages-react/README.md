# @sb1/ffe-messages-react

## Description

Unified message components for communicating status, tips, and alerts. Use `SystemMessage` for global status, `ContextMessage` for contextual inline feedback (with optional header and close button), and `MessageBox` for framed messages. Compose `MessageHeader` and `MessageList`/`MessageListItem` to structure content. Choose `type` (`info`, `success`, `tips`, `warning`, `error`) to control icon, color, and accessibility roles.

## Examples

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

## Install

```
npm install --save @sb1/ffe-messages-react
```

## Usage

Full documentation on message box usage is available at https://design.sparebank1.no/komponenter/meldinger.

## Development

To start a local development server, run the following from the designsystem root folder:

```bash
npm install
npm run build
npm start
```

A local instance of `Storybook` with live reloading will run at http://localhost:6006/.

Example implementations using the latest versions of all components are also available at https://sparebank1.github.io/designsystem.
