# @sb1/ffe-messages-react

## Beskrivelse

React-komponenter for meldinger som kommuniserer status, tips og varsler til brukeren.

## Komponenter

Denne pakken eksporterer følgende komponenter:

- `SystemMessage`
- `ContextMessage`
- `MessageBox`
- `MessageHeader`
- `MessageList`
- `MessageListItem`

## Installasjon

Installer pakken og alle dens avhengigheter:

```bash
npm install @sb1/ffe-messages-react
```

## API-referanse

### SystemMessage Props

| Prop | Type | Påkrevd | Beskrivelse |
|------|------|---------|-------------|
| `type` | `MessageType` | Ja | info, success, tips, warning or error |
| `iconFileUrl` | `string` | Nei | url to svg icon to override default |
| `locale` | `Locale` | Nei | nn, nb or en |
| `onClose` | `() => void` | Nei | Called when closed |

### ContextMessage Props

| Prop | Type | Påkrevd | Beskrivelse |
|------|------|---------|-------------|
| `compact` | `boolean` | Nei | Renders a more compact version of the context message |
| `iconFileUrl` | `string` | Nei | url to svg icon to override default |
| `locale` | `Locale` | Nei | Decides the language of the aria-label for the close icon |
| `type` | `MessageType` | Ja | info, success, tips, warning or error |
| `onClose` | `() => void` | Nei | Called when closed |
| `closeButton` | `boolean` | Nei | Show close button |
| `header` | `React.ReactElement<MessageHeaderProps> | string` | Nei | The header |

### MessageBox Props

| Prop | Type | Påkrevd | Beskrivelse |
|------|------|---------|-------------|
| `iconFileUrl` | `string` | Nei | url to svg icon to override default |
| `header` | `React.ReactElement<MessageHeaderProps> | string` | Nei | The header |
| `type` | `MessageType` | Ja | info, success, tips, warning or error |
| `locale` | `Locale` | Nei | Decides the language of the aria-label for the close icon |

### MessageHeader Props

Ingen komponentspesifikke props utover native HTML-attributter.

### MessageList Props

Ingen komponentspesifikke props utover native HTML-attributter.

### MessageListItem Props

Ingen komponentspesifikke props utover native HTML-attributter.

## Eksempler (fra README)

```tsx
import { SystemMessage } from '@sb1/ffe-messages-react';

<SystemMessage type="success" onClose={() => console.log('Lukket')}>
    Kontoen ble oppdatert.
</SystemMessage>;
```

```tsx
import {
    ContextMessage,
    MessageList,
    MessageListItem,
} from '@sb1/ffe-messages-react';

<ContextMessage
    type="error"
    header="Feil i skjema"
    closeButton={true}
    compact={true}
    onClose={() => console.log('Lukket')}
>
    <MessageList>
        <MessageListItem>Personnummer mangler</MessageListItem>
        <MessageListItem>Adresse er ugyldig</MessageListItem>
    </MessageList>
</ContextMessage>;
```

```tsx
import { MessageBox, MessageHeader } from '@sb1/ffe-messages-react';

<MessageBox type="info" header={<MessageHeader as="h3">Viktig</MessageHeader>}>
    Husk å lagre endringer før du går videre.
</MessageBox>;
```

```tsx
import { MessageHeader } from '@sb1/ffe-messages-react';

<MessageHeader as="h3">Overskrift</MessageHeader>;
```

```tsx
import { MessageList, MessageListItem } from '@sb1/ffe-messages-react';

<MessageList>
    <MessageListItem>E-postadresse er ugyldig</MessageListItem>
    <MessageListItem>Telefonnummer må ha 8 siffer</MessageListItem>
</MessageList>;
```

## Dokumentasjon

Full dokumentasjon er tilgjengelig på https://sparebank1.github.io/designsystem/

## Tilleggskontekst

Dette er en del av SpareBank 1 FFE (Felles Front End) designsystem.
Alle komponenter følger SpareBank 1s designretningslinjer og tilgjengelighetsstandarder.
