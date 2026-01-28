# @sb1/ffe-shapes-react

## Beskrivelse

Dekorative form-komponenter for visuell interesse. Inneholder `Wave`-komponenten for bølgeformer som bakgrunnselementer.

## Komponenter

Denne pakken eksporterer følgende komponenter:

- `Wave`

## Installasjon

Installer pakken og alle dens avhengigheter:

```bash
npm install @sb1/ffe-shapes-react @sb1/ffe-shapes @sb1/ffe-core
```

### Avhengigheter

Denne pakken er avhengig av:

- `@sb1/ffe-shapes`
- `@sb1/ffe-core`

## CSS-import

I prosjektets hoved-CSS-fil, importer de nødvendige stilene:

```css
@import '@sb1/ffe-core/css/ffe.css';
@import '@sb1/ffe-shapes/css/shapes.css';
```

Merk: Sørg for å importere `@sb1/ffe-core/css/ffe.css` først, da den inneholder grunnleggende stiler.

## API-referanse

### Wave Props

| Prop | Type | Påkrevd | Beskrivelse |
|------|------|---------|-------------|
| `position` | `string` | Nei | Sets the mask-position property, setting a px/rem value will move the starting position of the wave |
| `flip` | `boolean` | Nei | Rotate the wave 180 degrees : |
| `bgColor` | `Color` | Nei | Set the background color of the wave container. |
| `className` | `string` | Nei | Adds additional class |
| `children` | `React.ReactNode` | Nei | - |

## Eksempler (fra README)

```tsx
import { Wave } from '@sb1/ffe-shapes-react';

function MyComponent() {
    return (
        <div style={{ position: 'relative' }}>
            <Wave color="frost-30" />
            <div style={{ position: 'relative', zIndex: 1 }}>
                Innhold over bølgen
            </div>
        </div>
    );
}
```

## Dokumentasjon

Full dokumentasjon er tilgjengelig på https://design.sparebank1.no/

## Tilleggskontekst

Dette er en del av SpareBank 1 FFE (Felles Front End) designsystem.
Alle komponenter følger SpareBank 1s designretningslinjer og tilgjengelighetsstandarder.
