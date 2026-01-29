# @sb1/ffe-message-box-react

## Beskrivelse

Foreldet pakke. Bruk `@sb1/ffe-messages-react` for system- og kontekstmeldinger, overskrifter, meldingslister og meldingsbokser. Se Messages-komponentdokumentasjonen for oppdaterte API-er og eksempler.

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
npm install @sb1/ffe-message-box-react @sb1/ffe-icons-react @sb1/ffe-message-box @sb1/ffe-icons @sb1/ffe-core
```

### Avhengigheter

Denne pakken er avhengig av:

- `@sb1/ffe-icons-react`
- `@sb1/ffe-message-box`
- `@sb1/ffe-icons`
- `@sb1/ffe-core`

## CSS-import

I prosjektets hoved-CSS-fil, importer de nødvendige stilene:

```css
@import '@sb1/ffe-core/css/ffe.css';
@import '@sb1/ffe-icons/css/ffe-icons.css';
```

Merk: Sørg for å importere `@sb1/ffe-core/css/ffe.css` først, da den inneholder grunnleggende stiler.

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

## Dokumentasjon

Full dokumentasjon er tilgjengelig på https://sparebank1.github.io/designsystem/

## Tilleggskontekst

Dette er en del av SpareBank 1 FFE (Felles Front End) designsystem.
Alle komponenter følger SpareBank 1s designretningslinjer og tilgjengelighetsstandarder.
