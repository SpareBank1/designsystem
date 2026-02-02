# @sb1/ffe-chips-react

## Beskrivelse

Chip-komponenter i tre varianter: `Chip` (standard), `ChipRemovable` (med fjern-knapp) og `ChipSelectable` (kan velges/avvelges).

## Installasjon

```bash
npm install --save @sb1/ffe-chips-react
```

## Bruk

Full dokumentasjon: https://sparebank1.github.io/designsystem/komponenter/chip/

### Importere CSS

```css
@import '@sb1/ffe-chips/css/chip.css';
```

## Eksempler

### Standard Chip

```tsx
import { Chip } from '@sb1/ffe-chips-react';
import { Icon } from '@sb1/ffe-icons-react';

<Chip size="sm" onClick={() => console.log('Klikket')}>
    Liten chip
</Chip>

// Som lenke
<Chip as="a" href="/side" size="sm">Gå til side</Chip>

// Med ikon
<Chip size="sm" leftIcon={<Icon size="sm" fileUrl="path/to/icon.svg" />}>
    Med ikon
</Chip>
```

### ChipRemovable

```tsx
import { useState } from 'react';
import { ChipRemovable } from '@sb1/ffe-chips-react';

function MyComponent() {
    const [items, setItems] = useState(['Filter 1', 'Filter 2']);

    return (
        <div style={{ display: 'flex', gap: '8px' }}>
            {items.map(item => (
                <ChipRemovable
                    key={item}
                    size="sm"
                    onClick={() => setItems(items.filter(i => i !== item))}
                >
                    {item}
                </ChipRemovable>
            ))}
        </div>
    );
}
```

### ChipSelectable

```tsx
import { useState } from 'react';
import { ChipSelectable } from '@sb1/ffe-chips-react';

function MyComponent() {
    const [isSelected, setIsSelected] = useState(false);

    return (
        <ChipSelectable
            size="sm"
            isSelected={isSelected}
            onClick={() => setIsSelected(!isSelected)}
        >
            {isSelected ? 'Valgt' : 'Velg meg'}
        </ChipSelectable>
    );
}
```

## TypeScript

Komponenter er generiske og støtter polymorfisme via `as`-propen. TypeScript infererer riktige props basert på elementtypen.

## Utvikling

```bash
npm install && npm run build && npm start
```

Lokal Storybook kjører på http://localhost:6006/
