# @sb1/ffe-badge-react

## Beskrivelse

Badge viser små merkelapper eller tellere for notifikasjoner. Rendrer et `<span>`-element med CSS-klassen `ffe-badge`.

## Installasjon

```bash
npm install --save @sb1/ffe-badge-react
```

## Bruk

Full dokumentasjon: https://sparebank1.github.io/designsystem/komponenter/badge/

### Importere CSS

```css
@import '@sb1/ffe-badge/css/badge.css';
```

### CSS-klasser

- `ffe-badge` - Hovedklassen, alltid påført
- `ffe-badge--no-children` - Påført automatisk når `children` er tom (indikator-modus)

## Eksempler

### Standard badge med tall

```tsx
import { Badge } from '@sb1/ffe-badge-react';

function NotificationCount() {
    return <Badge>9</Badge>;
}
```

### Indikator uten tall

Uten children vises Badge som en liten prikk:

```tsx
import { Badge } from '@sb1/ffe-badge-react';

function IconWithIndicator() {
    return (
        <div style={{ position: 'relative', display: 'inline-block' }}>
            <MyIcon />
            <Badge />
        </div>
    );
}
```
