# @sb1/ffe-context-message-react

> **UTDATERT/DEPRECATED:** Denne pakken er utdatert og vil bli fjernet fra designsystem-repoet.
>
> Bruk de nye pakkene for meldinger:
>
> - [ffe-messages](https://github.com/SpareBank1/designsystem/tree/develop/packages/ffe-messages) (CSS)
> - [ffe-messages-react](https://github.com/SpareBank1/designsystem/tree/develop/packages/ffe-messages-react) (React komponenter)

## Beskrivelse

React-komponenter for kontekstuelle meldinger som informerer brukeren om tilstand, tips, suksess eller feil. Hver meldingstype har en unik visuell stil med passende ikon og farger.

## Installasjon

```bash
npm install @sb1/ffe-context-message-react @sb1/ffe-context-message
```

## Avhengigheter

Denne pakken krever at CSS fra `@sb1/ffe-context-message` er importert i prosjektet:

```css
@import '@sb1/ffe-context-message/less/context-message.less';
```

eller

```js
import '@sb1/ffe-context-message/less/context-message.less';
```

## Eksporterte komponenter

Pakken eksporterer fire meldingstyper:

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

// Informasjonsmelding
<ContextInfoMessage>
    <p>Dette er en informasjonsmelding til brukeren.</p>
</ContextInfoMessage>

// Tips-melding
<ContextTipsMessage headerText="Et nyttig tips">
    <p>Her er et tips som kan hjelpe deg videre.</p>
</ContextTipsMessage>

// Suksessmelding
<ContextSuccessMessage headerText="Vellykket!">
    <p>Handlingen ble utfort.</p>
</ContextSuccessMessage>

// Feilmelding
<ContextErrorMessage headerText="Noe gikk galt">
    <p>Vennligst prov igjen senere.</p>
</ContextErrorMessage>
```

## Props

### Felles props for alle meldingstyper

Alle komponenter arver fra `React.ComponentPropsWithoutRef<'div'>` og har dermed tilgang til standard div-attributter som `className`, `style`, `id`, etc.

| Prop               | Type                   | Standard    | Beskrivelse                                                     |
| ------------------ | ---------------------- | ----------- | --------------------------------------------------------------- |
| `children`         | `React.ReactNode`      | -           | Innholdet i meldingen                                           |
| `headerText`       | `string`               | `undefined` | Valgfri overskrift for meldingen                                |
| `headerElement`    | `string`               | `'h2'`      | HTML-element for overskriften (f.eks. `'h1'`, `'h3'`, `'span'`) |
| `headerElementId`  | `string`               | `undefined` | ID-attributt for overskriftselementet                           |
| `contentElementId` | `string`               | `undefined` | ID-attributt for innholdscontaineren                            |
| `compact`          | `boolean`              | `false`     | Rendrer en mer kompakt versjon av meldingen                     |
| `showCloseButton`  | `boolean`              | `false`     | Viser en lukkeknapp som lar brukeren skjule meldingen           |
| `onCloseRest`      | `() => void`           | `undefined` | Callback som kalles etter at lukkeanimasjonen er ferdig         |
| `locale`           | `'nb' \| 'nn' \| 'en'` | `'nb'`      | Sprak for aria-labels og skjermleser-tekst                      |
| `className`        | `string`               | `undefined` | Ekstra CSS-klasser som legges til rot-elementet                 |

### ContextErrorMessage-spesifikke props

| Prop    | Type      | Standard | Beskrivelse                                                                                                        |
| ------- | --------- | -------- | ------------------------------------------------------------------------------------------------------------------ |
| `alert` | `boolean` | `true`   | Når `true` brukes `role="alert"` som varsler skjermlesere umiddelbart. Sett til `false` for a bruke `role="group"` |

## Eksempler

### Med overskrift og lukkeknapp

```tsx
import { ContextInfoMessage } from '@sb1/ffe-context-message-react';

<ContextInfoMessage
    headerText="Viktig informasjon"
    showCloseButton={true}
    onCloseRest={() => console.log('Meldingen ble lukket')}
>
    <p>Denne meldingen kan lukkes av brukeren.</p>
</ContextInfoMessage>;
```

### Kompakt visning

```tsx
import { ContextTipsMessage } from '@sb1/ffe-context-message-react';

<ContextTipsMessage compact={true}>
    <p>Et kort tips i kompakt format.</p>
</ContextTipsMessage>;
```

### Tilpasset overskriftsniva

```tsx
import { ContextSuccessMessage } from '@sb1/ffe-context-message-react';

<ContextSuccessMessage
    headerText="Registrering fullfort"
    headerElement="h3"
    headerElementId="success-header"
>
    <p>Du er na registrert i systemet.</p>
</ContextSuccessMessage>;
```

### Feilmelding uten alert-rolle

```tsx
import { ContextErrorMessage } from '@sb1/ffe-context-message-react';

// Bruker role="group" i stedet for role="alert"
<ContextErrorMessage alert={false} headerText="Valideringsfeil">
    <p>Vennligst fyll ut alle obligatoriske felt.</p>
</ContextErrorMessage>;
```

### Med egendefinerte CSS-klasser

```tsx
import { ContextInfoMessage } from '@sb1/ffe-context-message-react';

<ContextInfoMessage
    className="min-egen-klasse min-egen-klasse--modifier"
    style={{ marginBottom: '1rem' }}
>
    <p>Melding med ekstra styling.</p>
</ContextInfoMessage>;
```

### Engelsk sprakstotte

```tsx
import { ContextInfoMessage } from '@sb1/ffe-context-message-react';

<ContextInfoMessage locale="en" showCloseButton={true}>
    <p>This message has English aria-labels for screen readers.</p>
</ContextInfoMessage>;
```

## TypeScript

Pakken eksporterer TypeScript-typer for alle komponenter:

```tsx
import {
    ContextInfoMessage,
    ContextInfoMessageProps,
    ContextTipsMessage,
    ContextTipsMessageProps,
    ContextSuccessMessage,
    ContextSuccessMessageProps,
    ContextErrorMessage,
    ContextErrorMessageProps,
} from '@sb1/ffe-context-message-react';

const MyComponent: React.FC<{ showError: boolean }> = ({ showError }) => {
    const commonProps: ContextInfoMessageProps = {
        compact: true,
        showCloseButton: true,
        locale: 'nb',
    };

    return showError ? (
        <ContextErrorMessage {...commonProps}>
            <p>En feil har oppstatt.</p>
        </ContextErrorMessage>
    ) : (
        <ContextInfoMessage {...commonProps}>
            <p>Alt er i orden.</p>
        </ContextInfoMessage>
    );
};
```

## Tilgjengelighet

- Alle meldingstyper har passende ARIA-attributter for skjermlesere
- `ContextErrorMessage` bruker `role="alert"` som standard for a varsle skjermlesere umiddelbart
- Lukkeknappen har en automatisk generert `aria-label` basert pa valgt sprak og eventuell overskrift
- Overskrifter rendres som semantiske heading-elementer (standard `<h2>`)

## Relaterte pakker

- [@sb1/ffe-context-message](https://github.com/SpareBank1/designsystem/tree/develop/packages/ffe-context-message) - CSS-stilene som denne pakken bruker
- [@sb1/ffe-messages-react](https://github.com/SpareBank1/designsystem/tree/develop/packages/ffe-messages-react) - Nyere meldingskomponenter (anbefalt)
