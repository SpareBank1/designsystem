# @sb1/ffe-system-message-react

> **Denne pakken er foreldet** og vil bli fjernet fra designsystem-repoet.
>
> Bruk de nye pakkene for meldinger, se [ffe-messages](https://github.com/SpareBank1/designsystem/tree/develop/packages/ffe-messages) og/eller [ffe-messages-react](https://github.com/SpareBank1/designsystem/tree/develop/packages/ffe-messages-react).

## Installasjon

```bash
npm install @sb1/ffe-system-message-react
```

## Eksporterte komponenter

Pakken eksporterer fire meldingskomponenter for ulike formaal:

| Komponent              | Formaal                               |
| ---------------------- | ------------------------------------- |
| `SystemErrorMessage`   | Vise feilmeldinger til brukeren       |
| `SystemInfoMessage`    | Vise informasjonsmeldinger            |
| `SystemSuccessMessage` | Bekrefte at en handling var vellykket |
| `SystemNewsMessage`    | Vise nyheter eller oppdateringer      |

## Grunnleggende bruk

```tsx
import {
    SystemErrorMessage,
    SystemInfoMessage,
    SystemSuccessMessage,
    SystemNewsMessage,
} from '@sb1/ffe-system-message-react';

// Feilmelding
<SystemErrorMessage>
    Noe gikk galt. Vennligst prov igjen senere.
</SystemErrorMessage>

// Informasjonsmelding
<SystemInfoMessage>
    Vi oppdaterer systemet klokken 22:00.
</SystemInfoMessage>

// Suksessmelding
<SystemSuccessMessage>
    Endringene dine er lagret.
</SystemSuccessMessage>

// Nyhetsmelding
<SystemNewsMessage>
    Vi har lansert en ny funksjon!
</SystemNewsMessage>
```

## Props

Alle komponentene arver fra `React.ComponentPropsWithoutRef<'div'>`, som betyr at de aksepterer alle standard HTML div-attributter (f.eks. `className`, `id`, `data-testid`).

### Felles props for alle meldingskomponenter

| Prop          | Type                   | Standard | Beskrivelse                                                  |
| ------------- | ---------------------- | -------- | ------------------------------------------------------------ |
| `children`    | `React.ReactNode`      | -        | Innholdet i meldingen                                        |
| `locale`      | `'nb' \| 'nn' \| 'en'` | `'nb'`   | Spraak for tilgjengelighetstekster (lukkeknapp, aria-label)  |
| `onColoredBg` | `boolean`              | -        | Alternativ styling for bedre kontrast paa fargede bakgrunner |
| `onCloseRest` | `() => void`           | -        | Callback som kalles naar lukkanimasjonen er ferdig           |
| `icon`        | `React.ReactNode`      | -        | Egendefinert ikon (hver komponent har et standard-ikon)      |
| `className`   | `string`               | -        | Egendefinerte CSS-klasser                                    |

### SystemErrorMessage-spesifikke props

| Prop    | Type      | Standard | Beskrivelse                                                                                                                                       |
| ------- | --------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------- |
| `alert` | `boolean` | `true`   | Naar `true`, settes `role="alert"` som faar skjermlesere til aa lese meldingen umiddelbart. Sett til `false` for aa unngaa dette ved sidelasting. |

## TypeScript-typer

```tsx
import type {
    SystemErrorMessageProps,
    SystemInfoMessageProps,
    SystemSuccessMessageProps,
    SystemNewsMessageProps,
} from '@sb1/ffe-system-message-react';
```

## Avanserte eksempler

### Med egendefinert locale for engelsk

```tsx
<SystemInfoMessage locale="en">
    System maintenance scheduled for tonight.
</SystemInfoMessage>
```

### Med onCloseRest callback

```tsx
import { useState } from 'react';

function MyComponent() {
    const [showMessage, setShowMessage] = useState(true);

    return (
        showMessage && (
            <SystemSuccessMessage
                onCloseRest={() => {
                    setShowMessage(false);
                    console.log('Meldingen er lukket');
                }}
            >
                Operasjonen var vellykket!
            </SystemSuccessMessage>
        )
    );
}
```

### Feilmelding uten umiddelbar opplesning

```tsx
// Bruk alert={false} for aa unngaa at skjermlesere leser meldingen umiddelbart
<SystemErrorMessage alert={false}>
    Det oppstod en feil under lasting av data.
</SystemErrorMessage>
```

### Med alternativ bakgrunnsstyling

```tsx
<SystemInfoMessage onColoredBg={true}>
    Denne meldingen vises paa en farget bakgrunn.
</SystemInfoMessage>
```

## Avhengigheter

Denne pakken krever at disse peer dependencies er installert:

- `react` (>=17.0.0)
- `@sb1/ffe-system-message` (CSS-stilene)

```bash
npm install @sb1/ffe-system-message
```

Importer CSS i applikasjonen din:

```tsx
import '@sb1/ffe-system-message/less/ffe-system-message.less';
// eller
import '@sb1/ffe-system-message/css/ffe-system-message.css';
```

## Tilgjengelighet

- Komponentene har innebygd stoette for `aria-label` basert paa meldingstype og locale
- `SystemErrorMessage` bruker `role="alert"` som standard for aa varsle skjermlesere umiddelbart
- Lukkeknappen har lokalisert `aria-label` ("Lukk" paa norsk, "Close" paa engelsk)
- Meldingene kan lukkes med klikk paa lukkeknappen
