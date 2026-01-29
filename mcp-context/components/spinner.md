# @sb1/ffe-spinner-react

## Beskrivelse

Lasteindikator for å vise pågående prosesser.

## Komponenter

Denne pakken eksporterer følgende komponenter:

- `Spinner`

## Installasjon

Installer pakken og alle dens avhengigheter:

```bash
npm install @sb1/ffe-spinner-react @sb1/ffe-spinner @sb1/ffe-core
```

### Avhengigheter

Denne pakken er avhengig av:

- `@sb1/ffe-spinner`
- `@sb1/ffe-core`

## CSS-import

I prosjektets hoved-CSS-fil, importer de nødvendige stilene:

```css
@import '@sb1/ffe-core/css/ffe.css';
@import '@sb1/ffe-spinner/css/spinner.css';
```

Merk: Sørg for å importere `@sb1/ffe-core/css/ffe.css` først, da den inneholder grunnleggende stiler.

## API-referanse

### Spinner Props

| Prop | Type | Påkrevd | Beskrivelse |
|------|------|---------|-------------|
| `immediate` | `boolean` | Nei | - |
| `large` | `boolean` | Nei | - |
| `loadingText` | `React.ReactNode` | Nei | - |
| `locale` | `'nb' | 'nn' | 'en'` | Nei | 'nb', 'nn', or 'en' |

## Eksempler (fra README)

```tsx
import { useState } from 'react';
import { Spinner } from '@sb1/ffe-spinner-react';

function MyComponent() {
    const [isLoading, setIsLoading] = useState(true);

    return (
        <div>
            {isLoading && <Spinner />}
            <Spinner size="large" />
            <Spinner size="small" ariaLabel="Laster innhold..." />
        </div>
    );
}
```

## Dokumentasjon

Full dokumentasjon er tilgjengelig på https://sparebank1.github.io/designsystem/

## Tilleggskontekst

Dette er en del av SpareBank 1 FFE (Felles Front End) designsystem.
Alle komponenter følger SpareBank 1s designretningslinjer og tilgjengelighetsstandarder.
