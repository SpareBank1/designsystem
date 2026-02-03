# @sb1/ffe-tags-react

## Beskrivelse

Tag-komponenten brukes for merking og kategorisering av innhold.

## Komponenter

Denne pakken eksporterer følgende komponenter:

- `Tag`

## Installasjon

Installer pakken og alle dens avhengigheter:

```bash
npm install @sb1/ffe-tags-react
```

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

<Tag variant="info">Info</Tag>
<Tag variant="success">Suksess</Tag>
<Tag variant="warning">Advarsel</Tag>
<Tag variant="critical">Kritisk</Tag>
<Tag variant="neutral">Nøytral</Tag>
<Tag variant="tip">Tips</Tag>
```

```tsx
<Tag type="emphasis" variant="info">Fremhevet</Tag>
<Tag type="subtle" variant="info">Subtil</Tag>
```

```tsx
<Tag size="sm">Liten</Tag>
<Tag size="md">Medium</Tag>
<Tag size="lg">Stor</Tag>
```

```tsx
import { Tag } from '@sb1/ffe-tags-react';
import { Icon } from '@sb1/ffe-icons-react';

<Tag variant="critical">
    <Icon fileUrl={warningIconUrl} size="sm" />
    Ikke betalt
</Tag>;
```

```css
@import '@sb1/ffe-tags/css/tag.css';
```

```tsx
import { Tag, type TagProps } from '@sb1/ffe-tags-react';
```

## Dokumentasjon

Full dokumentasjon er tilgjengelig på https://sparebank1.github.io/designsystem/

## Tilleggskontekst

Dette er en del av SpareBank 1 FFE (Felles Front End) designsystem.
Alle komponenter følger SpareBank 1s designretningslinjer og tilgjengelighetsstandarder.
