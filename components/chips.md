# @sb1/ffe-chips-react

## Beskrivelse

Chip-komponenter i tre varianter: `Chip` (standard), `ChipRemovable` (med fjern-knapp) og `ChipSelectable` (kan velges/avvelges).

## Komponenter

Denne pakken eksporterer følgende komponenter:

- `Chip`
- `ChipRemovable`
- `ChipSelectable`

## Installasjon

Installer pakken og alle dens avhengigheter:

```bash
npm install @sb1/ffe-chips-react
```

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

## Dokumentasjon

Full dokumentasjon er tilgjengelig på https://sparebank1.github.io/designsystem/

## Tilleggskontekst

Dette er en del av SpareBank 1 FFE (Felles Front End) designsystem.
Alle komponenter følger SpareBank 1s designretningslinjer og tilgjengelighetsstandarder.
