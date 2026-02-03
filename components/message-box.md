# @sb1/ffe-message-box-react

## Beskrivelse

Foreldet pakke. Bruk `@sb1/ffe-messages-react` i stedet.

## Komponenter

Denne pakken eksporterer følgende komponenter:

- `SuccessMessage`
- `ErrorMessage`
- `InfoMessage`
- `TipsMessage`
- `InfoMessageList`
- `InfoMessageListItem`

## Installasjon

Installer pakken og alle dens avhengigheter:

```bash
npm install @sb1/ffe-message-box-react
```

## API-referanse

### SuccessMessage Props

| Prop | Type | Påkrevd | Beskrivelse |
|------|------|---------|-------------|
| `locale` | `'nb' | 'nn' | 'en'` | Nei | - |

### ErrorMessage Props

| Prop | Type | Påkrevd | Beskrivelse |
|------|------|---------|-------------|
| `alert` | `boolean` | Nei | When false, role is not set to alert, avoids message from being read up immediately after page load. Default value is true. |
| `locale` | `'nb' | 'nn' | 'en'` | Nei | - |

### InfoMessage Props

| Prop | Type | Påkrevd | Beskrivelse |
|------|------|---------|-------------|
| `locale` | `'nb' | 'nn' | 'en'` | Nei | - |

### TipsMessage Props

| Prop | Type | Påkrevd | Beskrivelse |
|------|------|---------|-------------|
| `locale` | `'nb' | 'nn' | 'en'` | Nei | - |

### InfoMessageList Props

| Prop | Type | Påkrevd | Beskrivelse |
|------|------|---------|-------------|
| `children` | `NonNullable<React.ReactNode>` | Ja | - |

### InfoMessageListItem Props

Ingen komponentspesifikke props utover native HTML-attributter.

## Eksempler (fra README)

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

## Dokumentasjon

Full dokumentasjon er tilgjengelig på https://sparebank1.github.io/designsystem/

## Tilleggskontekst

Dette er en del av SpareBank 1 FFE (Felles Front End) designsystem.
Alle komponenter følger SpareBank 1s designretningslinjer og tilgjengelighetsstandarder.
