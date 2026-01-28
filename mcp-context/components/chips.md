# @sb1/ffe-chips-react

## Beskrivelse

Chip-komponenter for å lage interaktive, kompakte elementer. Tilgjengelig i tre varianter: `Chip` (standard), `ChipRemovable` (med fjern-knapp) og `ChipSelectable` (kan velges/avvelges).

## Komponenter

Denne pakken eksporterer følgende komponenter:

- `Chip`
- `ChipRemovable`
- `ChipSelectable`

## Installasjon

Installer pakken og alle dens avhengigheter:

```bash
npm install @sb1/ffe-chips-react @sb1/ffe-chips @sb1/ffe-core @sb1/ffe-icons-react @sb1/ffe-icons
```

### Avhengigheter

Denne pakken er avhengig av:

- `@sb1/ffe-chips`
- `@sb1/ffe-core`
- `@sb1/ffe-icons-react`
- `@sb1/ffe-icons`

## CSS-import

I prosjektets hoved-CSS-fil, importer de nødvendige stilene:

```css
@import '@sb1/ffe-core/css/ffe.css';
@import '@sb1/ffe-chips/css/chip.css';
@import '@sb1/ffe-icons/css/ffe-icons.css';
```

Merk: Sørg for å importere `@sb1/ffe-core/css/ffe.css` først, da den inneholder grunnleggende stiler.

## API-referanse

### Chip Props

| Prop | Type | Påkrevd | Beskrivelse |
|------|------|---------|-------------|
| `size` | `'sm' | 'md' | 'lg'` | Ja | Size of chip |

### ChipRemovable Props

Ingen komponentspesifikke props utover native HTML-attributter.

### ChipSelectable Props

| Prop | Type | Påkrevd | Beskrivelse |
|------|------|---------|-------------|
| `isSelected` | `boolean` | Nei | Whether this chips is selected |

## Eksempler (fra README)

```tsx
import { Chip } from '@sb1/ffe-chips-react';

function MyComponent() {
    return (
        <div>
            <Chip onClick={() => console.log('Klikket')}>
                Klikk meg
            </Chip>
            <Chip as="a" href="/side">
                Som lenke
            </Chip>
        </div>
    );
}
```

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

## Dokumentasjon

Full dokumentasjon er tilgjengelig på https://design.sparebank1.no/

## Tilleggskontekst

Dette er en del av SpareBank 1 FFE (Felles Front End) designsystem.
Alle komponenter følger SpareBank 1s designretningslinjer og tilgjengelighetsstandarder.
