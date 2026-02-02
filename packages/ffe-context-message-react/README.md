# @sb1/ffe-context-message-react

> **UTDATERT/DEPRECATED:** Bruk [ffe-messages-react](https://github.com/SpareBank1/designsystem/tree/develop/packages/ffe-messages-react) i stedet.

## Beskrivelse

React-komponenter for kontekstuelle meldinger (info, tips, suksess, feil).

## Installasjon

```bash
npm install @sb1/ffe-context-message-react @sb1/ffe-context-message
```

## Avhengigheter

```js
import '@sb1/ffe-context-message/less/context-message.less';
```

## Eksporterte komponenter

| Komponent               | Bruksomrade                       | ARIA role                        |
| ----------------------- | --------------------------------- | -------------------------------- |
| `ContextInfoMessage`    | Generell informasjon til brukeren | `group`                          |
| `ContextTipsMessage`    | Tips og anbefalinger              | `group`                          |
| `ContextSuccessMessage` | Bekreftelse pa vellykket handling | `group`                          |
| `ContextErrorMessage`   | Feilmeldinger og advarsler        | `alert` (standard) eller `group` |

## Grunnleggende bruk

```tsx
import {
    ContextInfoMessage,
    ContextTipsMessage,
    ContextSuccessMessage,
    ContextErrorMessage,
} from '@sb1/ffe-context-message-react';

<ContextInfoMessage>
    <p>Informasjonsmelding.</p>
</ContextInfoMessage>

<ContextErrorMessage headerText="Noe gikk galt">
    <p>Vennligst prov igjen senere.</p>
</ContextErrorMessage>
```

## Eksempler

### Med overskrift og lukkeknapp

```tsx
<ContextInfoMessage
    headerText="Viktig informasjon"
    showCloseButton={true}
    onCloseRest={() => console.log('Lukket')}
>
    <p>Denne meldingen kan lukkes.</p>
</ContextInfoMessage>
```

### Kompakt visning

```tsx
<ContextTipsMessage compact={true}>
    <p>Et kort tips i kompakt format.</p>
</ContextTipsMessage>
```

## TypeScript

Eksporterer typer: `ContextInfoMessageProps`, `ContextTipsMessageProps`, `ContextSuccessMessageProps`, `ContextErrorMessageProps`.

## Tilgjengelighet

- `ContextErrorMessage` bruker `role="alert"` som standard
- Lukkeknappen har `aria-label` basert pa valgt sprak
- Overskrifter rendres som semantiske heading-elementer

## Relaterte pakker

- [@sb1/ffe-context-message](https://github.com/SpareBank1/designsystem/tree/develop/packages/ffe-context-message) - CSS-stiler
- [@sb1/ffe-messages-react](https://github.com/SpareBank1/designsystem/tree/develop/packages/ffe-messages-react) - Nyere meldingskomponenter (anbefalt)
