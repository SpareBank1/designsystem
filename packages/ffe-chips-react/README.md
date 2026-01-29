# @sb1/ffe-chips-react

## Beskrivelse

Chip-komponenter for å lage interaktive, kompakte elementer. Tilgjengelig i tre varianter: `Chip` (standard), `ChipRemovable` (med fjern-knapp) og `ChipSelectable` (kan velges/avvelges).

## Installasjon

```bash
npm install --save @sb1/ffe-chips-react
```

## Bruk

Full dokumentasjon er tilgjengelig på https://sparebank1.github.io/designsystem/komponenter/chip/.

### Importere CSS

```css
@import '@sb1/ffe-chips/css/chip.css';
```

## Eksempler

### Standard Chip

```tsx
import { Chip } from '@sb1/ffe-chips-react';

function MyComponent() {
    return (
        <div>
            <Chip onClick={() => console.log('Klikket')}>Klikk meg</Chip>
            <Chip as="a" href="/side">
                Som lenke
            </Chip>
        </div>
    );
}
```

### ChipRemovable

```tsx
import { useState } from 'react';
import { ChipRemovable } from '@sb1/ffe-chips-react';

function MyComponent() {
    const [items, setItems] = useState(['Filter 1', 'Filter 2', 'Filter 3']);

    return (
        <div>
            {items.map(item => (
                <ChipRemovable
                    key={item}
                    onRemove={() => setItems(items.filter(i => i !== item))}
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
    const [selected, setSelected] = useState(false);

    return (
        <ChipSelectable
            selected={selected}
            onClick={() => setSelected(!selected)}
        >
            {selected ? 'Valgt' : 'Velg meg'}
        </ChipSelectable>
    );
}
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
