# @sb1/ffe-system-message-react

## Beskrivelse

React-komponentbibliotek for SpareBank 1 sitt designsystem.

## Komponenter

Denne pakken eksporterer følgende komponenter:

- `SystemErrorMessage`
- `SystemInfoMessage`
- `SystemNewsMessage`
- `SystemSuccessMessage`

## Installasjon

Installer pakken og alle dens avhengigheter:

```bash
npm install @sb1/ffe-system-message-react @sb1/ffe-collapse-react @sb1/ffe-icons-react @sb1/ffe-system-message @sb1/ffe-core @sb1/ffe-icons
```

### Avhengigheter

Denne pakken er avhengig av:

- `@sb1/ffe-collapse-react`
- `@sb1/ffe-icons-react`
- `@sb1/ffe-system-message`
- `@sb1/ffe-core`
- `@sb1/ffe-icons`

## CSS-import

I prosjektets hoved-CSS-fil, importer de nødvendige stilene:

```css
@import '@sb1/ffe-core/css/ffe.css';
@import '@sb1/ffe-collapse-react/css/collapse.css';
@import '@sb1/ffe-icons/css/ffe-icons.css';
```

Merk: Sørg for å importere `@sb1/ffe-core/css/ffe.css` først, da den inneholder grunnleggende stiler.

## API-referanse

### SystemErrorMessage Props

| Prop | Type | Påkrevd | Beskrivelse |
|------|------|---------|-------------|
| `alert` | `boolean` | Nei | When false, role is not set to alert, avoids message from being read up immediately after page load. Default value is true. |

### SystemInfoMessage Props

Ingen komponentspesifikke props utover native HTML-attributter.

### SystemNewsMessage Props

Ingen komponentspesifikke props utover native HTML-attributter.

### SystemSuccessMessage Props

Ingen komponentspesifikke props utover native HTML-attributter.

## Dokumentasjon

Full dokumentasjon er tilgjengelig på https://design.sparebank1.no/

## Tilleggskontekst

Dette er en del av SpareBank 1 FFE (Felles Front End) designsystem.
Alle komponenter følger SpareBank 1s designretningslinjer og tilgjengelighetsstandarder.
