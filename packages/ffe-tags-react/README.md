# @sb1/ffe-tags-react

## Beskrivelse

Tag-komponenten brukes for merking og kategorisering av innhold med ulike farger og størrelser.

## Installasjon

```bash
npm install --save @sb1/ffe-tags-react
```

## Bruk

Full dokumentasjon er tilgjengelig på https://sparebank1.github.io/designsystem/komponenter/tag/.

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

### Ulike typer

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

### Importere CSS

```css
@import '@sb1/ffe-tags/css/tag.css';
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
