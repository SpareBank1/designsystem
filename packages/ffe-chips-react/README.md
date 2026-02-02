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

## Props

### Chip

| Prop        | Type                        | Påkrevd | Beskrivelse                                                                                       |
| ----------- | --------------------------- | ------- | ------------------------------------------------------------------------------------------------- |
| `size`      | `'sm' \| 'md' \| 'lg'`      | Ja      | Størrelse på chippen                                                                              |
| `as`        | `ElementType`               | Nei     | HTML-element eller React-komponent å rendre som. Standard: `'button'`                             |
| `leftIcon`  | `React.ReactNode`           | Nei     | Ikon på venstre side. Kan ikke brukes sammen med `rightIcon`                                      |
| `rightIcon` | `React.ReactNode`           | Nei     | Ikon på høyre side. Kan ikke brukes sammen med `leftIcon`                                         |
| `className` | `string`                    | Nei     | Ekstra CSS-klasser                                                                                |
| `children`  | `React.ReactNode`           | Nei     | Innholdet i chippen                                                                               |
| `ref`       | `ForwardedRef<HTMLElement>` | Nei     | React ref til det underliggende elementet                                                         |
| `...rest`   | -                           | -       | Alle andre props sendes videre til det underliggende elementet (f.eks. `onClick`, `href`, `type`) |

### ChipRemovable

Arver alle props fra `Chip`. Har et innebygd X-ikon på høyre side som indikerer at chippen kan fjernes. Bruk `onClick` for å håndtere fjerningen.

| Prop      | Type                   | Påkrevd | Beskrivelse                                                  |
| --------- | ---------------------- | ------- | ------------------------------------------------------------ |
| `size`    | `'sm' \| 'md' \| 'lg'` | Ja      | Størrelse på chippen                                         |
| `onClick` | `() => void`           | Nei     | Kalles når chippen klikkes (bruk denne for å fjerne chippen) |

### ChipSelectable

Arver alle props fra `Chip`. Har et innebygd avkrysningsikon på venstre side og støtter valgt/ikke-valgt tilstand.

| Prop         | Type                   | Påkrevd | Beskrivelse                                                         |
| ------------ | ---------------------- | ------- | ------------------------------------------------------------------- |
| `size`       | `'sm' \| 'md' \| 'lg'` | Ja      | Størrelse på chippen                                                |
| `isSelected` | `boolean`              | Nei     | Om chippen er valgt. Styrer visuell tilstand                        |
| `onClick`    | `() => void`           | Nei     | Kalles når chippen klikkes (bruk denne for å toggle valgt-tilstand) |

## Eksempler

### Standard Chip

```tsx
import { Chip } from '@sb1/ffe-chips-react';

function MyComponent() {
    return (
        <div style={{ display: 'flex', gap: '8px' }}>
            <Chip size="sm" onClick={() => console.log('Klikket')}>
                Liten chip
            </Chip>
            <Chip size="md" onClick={() => console.log('Klikket')}>
                Medium chip
            </Chip>
            <Chip size="lg" onClick={() => console.log('Klikket')}>
                Stor chip
            </Chip>
        </div>
    );
}
```

### Chip som lenke

Bruk `as`-propen for å rendre chippen som et annet element, f.eks. en lenke:

```tsx
import { Chip } from '@sb1/ffe-chips-react';

function MyComponent() {
    return (
        <Chip as="a" href="/side" size="sm">
            Gå til side
        </Chip>
    );
}
```

### Chip med ikon

Du kan legge til et ikon på venstre eller høyre side av chippen. Merk at du bare kan bruke enten `leftIcon` eller `rightIcon`, ikke begge samtidig.

```tsx
import { Chip } from '@sb1/ffe-chips-react';
import { Icon } from '@sb1/ffe-icons-react';

function MyComponent() {
    return (
        <div style={{ display: 'flex', gap: '8px' }}>
            <Chip
                size="sm"
                leftIcon={<Icon size="sm" fileUrl="path/to/icon.svg" />}
            >
                Med venstre ikon
            </Chip>
            <Chip
                size="sm"
                rightIcon={<Icon size="sm" fileUrl="path/to/icon.svg" />}
            >
                Med høyre ikon
            </Chip>
        </div>
    );
}
```

### ChipRemovable

`ChipRemovable` har et innebygd X-ikon og er ment for chips som kan fjernes av brukeren. Bruk `onClick` for å håndtere fjerning:

```tsx
import { useState } from 'react';
import { ChipRemovable } from '@sb1/ffe-chips-react';

function MyComponent() {
    const [items, setItems] = useState(['Filter 1', 'Filter 2', 'Filter 3']);

    const handleRemove = (itemToRemove: string) => {
        setItems(items.filter(item => item !== itemToRemove));
    };

    return (
        <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
            {items.map(item => (
                <ChipRemovable
                    key={item}
                    size="sm"
                    onClick={() => handleRemove(item)}
                >
                    {item}
                </ChipRemovable>
            ))}
        </div>
    );
}
```

### ChipSelectable

`ChipSelectable` støtter valgt/ikke-valgt tilstand. Den har et innebygd avkrysningsikon og bruker `isSelected`-propen for å styre visuell tilstand:

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

### Flere valgbare chips

Et vanlig mønster er å ha flere chips der brukeren kan velge en eller flere:

```tsx
import { useState } from 'react';
import { ChipSelectable } from '@sb1/ffe-chips-react';

type Category = 'bolig' | 'bil' | 'reise' | 'helse';

function CategoryFilter() {
    const [selectedCategories, setSelectedCategories] = useState<Set<Category>>(
        new Set(),
    );

    const toggleCategory = (category: Category) => {
        const newSet = new Set(selectedCategories);
        if (newSet.has(category)) {
            newSet.delete(category);
        } else {
            newSet.add(category);
        }
        setSelectedCategories(newSet);
    };

    const categories: { id: Category; label: string }[] = [
        { id: 'bolig', label: 'Bolig' },
        { id: 'bil', label: 'Bil' },
        { id: 'reise', label: 'Reise' },
        { id: 'helse', label: 'Helse' },
    ];

    return (
        <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
            {categories.map(({ id, label }) => (
                <ChipSelectable
                    key={id}
                    size="sm"
                    isSelected={selectedCategories.has(id)}
                    onClick={() => toggleCategory(id)}
                >
                    {label}
                </ChipSelectable>
            ))}
        </div>
    );
}
```

## TypeScript

Alle komponenter er generiske og støtter polymorfisme via `as`-propen. TypeScript vil automatisk inferere riktige props basert på elementtypen:

```tsx
import { Chip } from '@sb1/ffe-chips-react';

// Som button (standard) - onClick er tilgjengelig
<Chip size="sm" onClick={() => {}}>Knapp</Chip>

// Som anchor - href er tilgjengelig
<Chip as="a" size="sm" href="/side">Lenke</Chip>

// Med ref
import { useRef } from 'react';

function MyComponent() {
    const buttonRef = useRef<HTMLButtonElement>(null);
    const anchorRef = useRef<HTMLAnchorElement>(null);

    return (
        <>
            <Chip size="sm" ref={buttonRef}>Knapp</Chip>
            <Chip as="a" size="sm" href="/side" ref={anchorRef}>Lenke</Chip>
        </>
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
