# @sb1/ffe-message-box-react

## Beskrivelse

Foreldet pakke. Bruk `@sb1/ffe-messages-react` for system- og kontekstmeldinger, overskrifter, meldingslister og meldingsbokser. Se Messages-komponentdokumentasjonen for oppdaterte API-er og eksempler.

Denne pakken inneholder React-komponenter for meldingsbokser med ulike varianter: `SuccessMessage`, `ErrorMessage`, `InfoMessage` og `TipsMessage`. I tillegg eksporteres `InfoMessageList` og `InfoMessageListItem` for strukturert innhold.

## Foreldet pakke

Denne pakken er foreldet og vil bli fjernet fra designsystem-repoet.

Bruk de nye pakkene for meldinger, se [ffe-messages](https://github.com/SpareBank1/designsystem/tree/develop/packages/ffe-messages) og/eller [ffe-messages-react](https://github.com/SpareBank1/designsystem/tree/develop/packages/ffe-messages-react).

### Migrasjonsguide

Erstatt de gamle komponentene med tilsvarende fra `@sb1/ffe-messages-react`:

| Gammel komponent | Ny komponent                      | Eksempel                                      |
| ---------------- | --------------------------------- | --------------------------------------------- |
| `SuccessMessage` | `MessageBox` med `type="success"` | `<MessageBox type="success">...</MessageBox>` |
| `ErrorMessage`   | `MessageBox` med `type="error"`   | `<MessageBox type="error">...</MessageBox>`   |
| `InfoMessage`    | `MessageBox` med `type="info"`    | `<MessageBox type="info">...</MessageBox>`    |
| `TipsMessage`    | `MessageBox` med `type="tips"`    | `<MessageBox type="tips">...</MessageBox>`    |

## Eksporterte komponenter

```typescript
export { SuccessMessage, SuccessMessageProps } from './SuccessMessage';
export { ErrorMessage, ErrorMessageProps } from './ErrorMessage';
export { InfoMessage, InfoMessageProps } from './InfoMessage';
export { TipsMessage, TipsMessageProps } from './TipsMessage';
export {
    InfoMessageList,
    InfoMessageListProps,
    InfoMessageListItem,
    InfoMessageListItemProps,
} from './InfoMessageList';
```

## Props

### Felles props (BaseMessageProps)

Alle meldingskomponenter (`SuccessMessage`, `ErrorMessage`, `InfoMessage`, `TipsMessage`) arver fra `BaseMessageProps`:

| Prop           | Type                   | Standard            | Beskrivelse                                                                |
| -------------- | ---------------------- | ------------------- | -------------------------------------------------------------------------- |
| `title`        | `React.ReactNode`      | `undefined`         | Overskrift som vises i meldingsboksen                                      |
| `titleElement` | `string`               | `'h2'`              | HTML-element som brukes for overskriften (f.eks. `'h2'`, `'h3'`, `'span'`) |
| `icon`         | `React.ReactNode`      | Ikon basert på type | Egendefinert ikon (overstyrer standardikon)                                |
| `onColoredBg`  | `boolean`              | `false`             | Alternativ styling for bedre kontrast på farget bakgrunn                   |
| `ariaLabel`    | `string`               | Avhenger av locale  | Tilgjengelighetsmerkelapp for skjermlesere                                 |
| `role`         | `'alert' \| 'group'`   | `'group'`           | ARIA-rolle for meldingen                                                   |
| `locale`       | `'nb' \| 'nn' \| 'en'` | `'nb'`              | Sprak for innebygde tekster (aria-labels)                                  |
| `className`    | `string`               | `''`                | Ekstra CSS-klasser                                                         |
| `children`     | `React.ReactNode`      | `undefined`         | Innhold i meldingsboksen                                                   |

I tillegg aksepteres alle standard HTML `div`-attributter via spread props.

### ErrorMessageProps (ekstra)

| Prop    | Type      | Standard | Beskrivelse                                                                                                                         |
| ------- | --------- | -------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| `alert` | `boolean` | `true`   | Nar `true`, settes `role="alert"` for umiddelbar opplesing av skjermlesere. Sett til `false` for a unnga opplesing ved sidelasting. |

### InfoMessageListProps

| Prop       | Type                         | Beskrivelse                               |
| ---------- | ---------------------------- | ----------------------------------------- |
| `children` | `React.ReactNode` (required) | Listeinnhold (bruk `InfoMessageListItem`) |

### InfoMessageListItemProps

| Prop       | Type                         | Beskrivelse                            |
| ---------- | ---------------------------- | -------------------------------------- |
| `href`     | `string` (required)          | Lenke-URL for listelementet            |
| `children` | `React.ReactNode` (required) | Tekst eller innhold for listeelementet |

## Eksempler

### Grunnleggende bruk

```tsx
import { SuccessMessage, ErrorMessage, InfoMessage, TipsMessage } from '@sb1/ffe-message-box-react';

// Suksessmelding
<SuccessMessage title="Handling fullfort">
    Endringene dine er lagret.
</SuccessMessage>

// Feilmelding (med alert for skjermleser)
<ErrorMessage title="Noe gikk galt" alert={true}>
    Kunne ikke lagre endringene. Prov igjen senere.
</ErrorMessage>

// Feilmelding (uten alert, for sidelasting)
<ErrorMessage title="Valideringsfeil" alert={false}>
    Skjemaet inneholder feil.
</ErrorMessage>

// Informasjonsmelding
<InfoMessage title="Viktig informasjon">
    Husk a fullfor registreringen innen 7 dager.
</InfoMessage>

// Tipsmelding
<TipsMessage title="Visste du?">
    Du kan spare tid ved a bruke hurtigtaster.
</TipsMessage>
```

### Uten tittel

```tsx
<InfoMessage>Dette er en enkel infomelding uten overskrift.</InfoMessage>
```

### Med tilpasset overskriftselement

```tsx
<SuccessMessage title="Bekreftelse" titleElement="h3">
    Bestillingen er mottatt.
</SuccessMessage>
```

### Pa farget bakgrunn

```tsx
<InfoMessage title="Tips" onColoredBg={true}>
    Denne meldingen har alternativ styling for farget bakgrunn.
</InfoMessage>
```

### Med annen locale

```tsx
<ErrorMessage title="Error" locale="en">
    Something went wrong. Please try again.
</ErrorMessage>
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

### Med egendefinert ikon

```tsx
import { Icon } from '@sb1/ffe-icons-react';

<InfoMessage
    title="Egendefinert ikon"
    icon={<Icon fileUrl="custom_icon.svg" />}
>
    Denne meldingen bruker et egendefinert ikon.
</InfoMessage>;
```

## Tilgjengelighet

- Alle komponenter har innebygde `aria-label` basert pa `locale`-prop
- `ErrorMessage` bruker `role="alert"` som standard for umiddelbar opplesing (kan deaktiveres med `alert={false}`)
- Andre meldingstyper bruker `role="group"` som standard
- Bruk `titleElement` for a sikre riktig overskriftshierarki i dokumentet

## Avhengigheter

- `@sb1/ffe-icons-react` - For ikoner
- `@sb1/ffe-message-box` - For CSS-styling (ma importeres separat)

## CSS-import

```css
@import '@sb1/ffe-message-box/less/message-box.less';
```

Eller i JavaScript/TypeScript:

```typescript
import '@sb1/ffe-message-box/less/message-box.less';
```
