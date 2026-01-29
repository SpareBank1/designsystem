# @sb1/ffe-symbols-react

## Beskrivelse

React-komponentbibliotek for SpareBank 1 sitt designsystem.

## Komponenter

Denne pakken eksporterer følgende komponenter:

- `Symbol`

## Installasjon

Installer pakken og alle dens avhengigheter:

```bash
npm install @sb1/ffe-symbols-react @sb1/ffe-symbols
```

### Avhengigheter

Denne pakken er avhengig av:

- `@sb1/ffe-symbols`

## API-referanse

### Symbol Props

| Prop | Type | Påkrevd | Beskrivelse |
|------|------|---------|-------------|
| `fill` | `boolean` | Nei | Fills the icon with color |
| `icon` | `SymbolName` | Ja | The name of the icon that should be shown |
| `size` | `'sm' | 'md' | 'lg' | 'xl'` | Nei | Size of the icon, default is the closest defined font-size |
| `weight` | `300 | 500` | Nei | Symbols stroke weight. This can affect overall size of symbol, 400 is default |
| `ariaLabel` | `React.ComponentProps<'span'>['aria-label'] | null` | Nei | Aria label text. If null/undefined, aria-hidden is automatically set to true |

## Dokumentasjon

Full dokumentasjon er tilgjengelig på https://sparebank1.github.io/designsystem/

## Tilleggskontekst

Dette er en del av SpareBank 1 FFE (Felles Front End) designsystem.
Alle komponenter følger SpareBank 1s designretningslinjer og tilgjengelighetsstandarder.
