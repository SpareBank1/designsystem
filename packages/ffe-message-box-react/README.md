# @sb1/ffe-message-box-react

## Beskrivelse

Foreldet pakke. Bruk `@sb1/ffe-messages-react` i stedet.

Full dokumentasjon: https://sparebank1.github.io/designsystem/

## Foreldet pakke

Bruk de nye pakkene: [ffe-messages-react](https://github.com/SpareBank1/designsystem/tree/develop/packages/ffe-messages-react).

### Migrasjonsguide

| Gammel komponent | Ny komponent                      |
| ---------------- | --------------------------------- |
| `SuccessMessage` | `MessageBox` med `type="success"` |
| `ErrorMessage`   | `MessageBox` med `type="error"`   |
| `InfoMessage`    | `MessageBox` med `type="info"`    |
| `TipsMessage`    | `MessageBox` med `type="tips"`    |

## Eksporterte komponenter

```typescript
export { SuccessMessage, ErrorMessage, InfoMessage, TipsMessage } from './';
export { InfoMessageList, InfoMessageListItem } from './InfoMessageList';
```

## Eksempler

### Grunnleggende bruk

```tsx
import { SuccessMessage, ErrorMessage, InfoMessage, TipsMessage } from '@sb1/ffe-message-box-react';

<SuccessMessage title="Handling fullfort">
    Endringene dine er lagret.
</SuccessMessage>

<ErrorMessage title="Noe gikk galt" alert={true}>
    Kunne ikke lagre endringene.
</ErrorMessage>

<InfoMessage title="Viktig informasjon">
    Husk a fullfor registreringen innen 7 dager.
</InfoMessage>

<TipsMessage title="Visste du?">
    Du kan spare tid ved a bruke hurtigtaster.
</TipsMessage>
```

### Med lister

```tsx
import {
    InfoMessage,
    InfoMessageList,
    InfoMessageListItem,
} from '@sb1/ffe-message-box-react';

<InfoMessage title="Relaterte artikler">
    <InfoMessageList>
        <InfoMessageListItem href="/artikkel/1">
            Slik endrer du passord
        </InfoMessageListItem>
        <InfoMessageListItem href="/artikkel/2">
            Sikkerhetstips
        </InfoMessageListItem>
    </InfoMessageList>
</InfoMessage>;
```

## Tilgjengelighet

- Innebygde `aria-label` basert pa `locale`
- `ErrorMessage` bruker `role="alert"` som standard (deaktiver med `alert={false}`)
- Bruk `titleElement` for riktig overskriftshierarki

## Avhengigheter

- `@sb1/ffe-icons-react` - Ikoner
- `@sb1/ffe-message-box` - CSS-styling

## CSS-import

```typescript
import '@sb1/ffe-message-box/less/message-box.less';
```
