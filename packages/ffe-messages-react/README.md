# @sb1/ffe-messages-react

## Beskrivelse

React-komponenter for meldinger som kommuniserer status, tips og varsler til brukeren.

### Komponentoversikt

| Komponent         | Bruksområde                                                                               |
| ----------------- | ----------------------------------------------------------------------------------------- |
| `SystemMessage`   | Globale statusmeldinger øverst på siden. Har alltid lukkeknapp.                           |
| `ContextMessage`  | Kontekstuell inline-melding i skjemaer eller seksjoner. Valgfri overskrift og lukkeknapp. |
| `MessageBox`      | Innrammet meldingsområde for varig informasjon. Ingen lukkeknapp.                         |
| `MessageHeader`   | Overskriftkomponent for bruk i meldinger.                                                 |
| `MessageList`     | Liste-container for flere meldingspunkter.                                                |
| `MessageListItem` | Enkelt listepunkt i en `MessageList`.                                                     |

### Type-verdier

**MessageType** (påkrevd): `'info'` | `'success'` | `'tips'` | `'warning'` | `'error'`

**Locale** (valgfri, standard `'nb'`): `'nb'` | `'nn'` | `'en'`

## Eksempler

### SystemMessage

```tsx
import { SystemMessage } from '@sb1/ffe-messages-react';

<SystemMessage type="success" onClose={() => console.log('Lukket')}>
    Kontoen ble oppdatert.
</SystemMessage>;
```

### ContextMessage

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

### MessageBox

```tsx
import { MessageBox, MessageHeader } from '@sb1/ffe-messages-react';

<MessageBox type="info" header={<MessageHeader as="h3">Viktig</MessageHeader>}>
    Husk å lagre endringer før du går videre.
</MessageBox>;
```

### MessageHeader

```tsx
import { MessageHeader } from '@sb1/ffe-messages-react';

<MessageHeader as="h3">Overskrift</MessageHeader>;
```

### MessageList og MessageListItem

```tsx
import { MessageList, MessageListItem } from '@sb1/ffe-messages-react';

<MessageList>
    <MessageListItem>E-postadresse er ugyldig</MessageListItem>
    <MessageListItem>Telefonnummer må ha 8 siffer</MessageListItem>
</MessageList>;
```

## Installasjon

```bash
npm install --save @sb1/ffe-messages-react
```

Krever CSS fra `@sb1/ffe-messages`:

```css
@import '@sb1/ffe-messages/css/messages.css';
```

## Bruk

Dokumentasjon: https://sparebank1.github.io/designsystem/

## Utvikling

```bash
npm install && npm run build && npm start
```

Storybook kjører på http://localhost:6006/.
