# @sb1/ffe-tags-react

## Beskrivelse

Tag-komponenten brukes for merking og kategorisering av innhold.

## Installasjon

```bash
npm install --save @sb1/ffe-tags-react
```

## Bruk

Full dokumentasjon: https://sparebank1.github.io/designsystem/komponenter/tag/

### Grunnleggende eksempel

```tsx
import { Tag } from '@sb1/ffe-tags-react';

<Tag variant="info">Info</Tag>
<Tag variant="success">Suksess</Tag>
<Tag variant="warning">Advarsel</Tag>
<Tag variant="critical">Kritisk</Tag>
<Tag variant="neutral">Nøytral</Tag>
<Tag variant="tip">Tips</Tag>
```

### Ulike typer

```tsx
<Tag type="emphasis" variant="info">Fremhevet</Tag>
<Tag type="subtle" variant="info">Subtil</Tag>
```

### Ulike størrelser

```tsx
<Tag size="sm">Liten</Tag>
<Tag size="md">Medium</Tag>
<Tag size="lg">Stor</Tag>
```

### Med ikon

```tsx
import { Tag } from '@sb1/ffe-tags-react';
import { Icon } from '@sb1/ffe-icons-react';

<Tag variant="critical">
    <Icon fileUrl={warningIconUrl} size="sm" />
    Ikke betalt
</Tag>;
```

### Importere CSS

```css
@import '@sb1/ffe-tags/css/tag.css';
```

### TypeScript

```tsx
import { Tag, type TagProps } from '@sb1/ffe-tags-react';
```

## Utvikling

Fra designsystem-rotmappen:

```bash
npm install && npm run build && npm start
```

Storybook kjører på http://localhost:6006/
