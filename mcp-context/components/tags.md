# @sb1/ffe-tags-react

## Beskrivelse

Tag-komponenten brukes for merking og kategorisering av innhold med ulike farger og størrelser.

## Komponenter

Denne pakken eksporterer følgende komponenter:

- `Tag`

## Installasjon

Installer pakken og alle dens avhengigheter:

```bash
npm install @sb1/ffe-tags-react @sb1/ffe-core @sb1/ffe-icons-react @sb1/ffe-tags @sb1/ffe-icons
```

### Avhengigheter

Denne pakken er avhengig av:

- `@sb1/ffe-core`
- `@sb1/ffe-icons-react`
- `@sb1/ffe-tags`
- `@sb1/ffe-icons`

## CSS-import

I prosjektets hoved-CSS-fil, importer de nødvendige stilene:

```css
@import '@sb1/ffe-core/css/ffe.css';
@import '@sb1/ffe-icons/css/ffe-icons.css';
@import '@sb1/ffe-tags/css/tag.css';
```

Merk: Sørg for å importere `@sb1/ffe-core/css/ffe.css` først, da den inneholder grunnleggende stiler.

## API-referanse

### Tag Props

| Prop | Type | Påkrevd | Beskrivelse |
|------|------|---------|-------------|
| `type` | `'emphasis' | 'subtle'` | Nei | Bestemmer taggens uttrykk, om den skal være fremhevet eller subtil |
| `className` | `string` | Nei | - |
| `variant` | `'info' | 'success' | 'warning' | 'critical' | 'neutral' |...` | Nei | Fargen på taggen. Info, suksess, advarsel, kritisk, nøytral eller tips |
| `size` | `'sm' | 'md' | 'lg'` | Nei | Størrelsen på taggen, standard er md |
| `children` | `React.ReactNode` | Ja | - |

## Eksempler (fra README)

```tsx
import { Tag } from '@sb1/ffe-tags-react';

function MyComponent() {
    return (
        <div>
            <Tag variant="info">Info</Tag>
            <Tag variant="success">Suksess</Tag>
            <Tag variant="warning">Advarsel</Tag>
            <Tag variant="critical">Kritisk</Tag>
            <Tag variant="neutral">Nøytral</Tag>
            <Tag variant="tip">Tips</Tag>
        </div>
    );
}
```

```tsx
import { Tag } from '@sb1/ffe-tags-react';

function MyComponent() {
    return (
        <div>
            <Tag type="emphasis" variant="info">
                Fremhevet
            </Tag>
            <Tag type="subtle" variant="info">
                Subtil
            </Tag>
        </div>
    );
}
```

```tsx
import { Tag } from '@sb1/ffe-tags-react';

function MyComponent() {
    return (
        <div>
            <Tag size="sm" variant="neutral">
                Liten
            </Tag>
            <Tag size="md" variant="neutral">
                Medium
            </Tag>
            <Tag size="lg" variant="neutral">
                Stor
            </Tag>
        </div>
    );
}
```

```css
@import '~@sb1/ffe-tags/css/tag.css';
```

## Dokumentasjon

Full dokumentasjon er tilgjengelig på https://design.sparebank1.no/

## Tilleggskontekst

Dette er en del av SpareBank 1 FFE (Felles Front End) designsystem.
Alle komponenter følger SpareBank 1s designretningslinjer og tilgjengelighetsstandarder.
