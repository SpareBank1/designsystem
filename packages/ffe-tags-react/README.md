# @sb1/ffe-tags-react

## Beskrivelse

Tag-komponenten brukes for merking og kategorisering av innhold med ulike farger og størrelser. Komponenten rendrer et `<span>`-element med passende CSS-klasser.

## Installasjon

```bash
npm install --save @sb1/ffe-tags-react
```

## Bruk

Full dokumentasjon er tilgjengelig på https://sparebank1.github.io/designsystem/komponenter/tag/.

### Grunnleggende eksempel

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

### Props

| Prop        | Type                                                                   | Påkrevd | Standard     | Beskrivelse                                        |
| ----------- | ---------------------------------------------------------------------- | ------- | ------------ | -------------------------------------------------- |
| `children`  | `React.ReactNode`                                                      | Ja      | -            | Innholdet som vises i taggen                       |
| `variant`   | `'info' \| 'success' \| 'warning' \| 'critical' \| 'neutral' \| 'tip'` | Nei     | `'neutral'`  | Fargen på taggen                                   |
| `type`      | `'emphasis' \| 'subtle'`                                               | Nei     | `'emphasis'` | Bestemmer om taggen er fremhevet eller subtil      |
| `size`      | `'sm' \| 'md' \| 'lg'`                                                 | Nei     | `'md'`       | Størrelsen på taggen                               |
| `className` | `string`                                                               | Nei     | -            | Egendefinert CSS-klasse som legges til komponenten |

Komponenten videresender alle andre props til det underliggende `<span>`-elementet.

### Ulike typer

Bruk `type`-propen for å kontrollere om taggen skal være fremhevet (emphasis) eller subtil (subtle).

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

### Ulike størrelser

Bruk `size`-propen for å endre størrelsen på taggen.

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

### Med ikon

Taggen kan inneholde ikoner ved å bruke `Icon`-komponenten fra `@sb1/ffe-icons-react`.

```tsx
import { Tag } from '@sb1/ffe-tags-react';
import { Icon } from '@sb1/ffe-icons-react';

function MyComponent() {
    return (
        <Tag variant="critical">
            <Icon fileUrl={warningIconUrl} size="sm" />
            Ikke betalt
        </Tag>
    );
}
```

### Importere CSS

```css
@import '@sb1/ffe-tags/css/tag.css';
```

### TypeScript

Komponenten eksporterer TypeScript-typer som kan importeres:

```tsx
import { Tag, type TagProps } from '@sb1/ffe-tags-react';
```

## Utvikling

For å starte en lokal utviklingsserver, kjør følgende fra designsystem-rotmappen:

```bash
npm install
npm run build
npm start
```

En lokal Storybook-instans med live reloading vil kjøre på http://localhost:6006/.

Eksempelimplementasjoner med de nyeste versjonene av alle komponentene er også tilgjengelige på https://sparebank1.github.io/designsystem.
