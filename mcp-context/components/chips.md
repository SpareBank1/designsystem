# @sb1/ffe-chips-react

## Beskrivelse

Chip-komponenten brukes for å lage interaktive, kompakte elementer med valgfrie ikoner.

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
            <Chip size="md" onClick={() => console.log('Klikket')}>
                Klikk meg
            </Chip>
            <Chip size="lg" onClick={() => console.log('Stor chip')}>
                Stor chip
            </Chip>
        </div>
    );
}
```

```tsx
import { Chip } from '@sb1/ffe-chips-react';
import { Icon } from '@sb1/ffe-icons-react';

function MyComponent() {
    return (
        <div>
            <Chip
                size="md"
                leftIcon={
                    <Icon
                        fileUrl="icons/open/300/notifications.svg"
                        size="md"
                    />
                }
                onClick={() => console.log('Med venstre ikon')}
            >
                Med venstre ikon
            </Chip>
            <Chip
                size="md"
                rightIcon={
                    <Icon fileUrl="icons/open/300/close.svg" size="md" />
                }
                onClick={() => console.log('Med høyre ikon')}
            >
                Med høyre ikon
            </Chip>
        </div>
    );
}
```

```tsx
import { Chip } from '@sb1/ffe-chips-react';

function MyComponent() {
    return (
        <Chip as="a" href="/side" size="md">
            Naviger
        </Chip>
    );
}
```

```css
@import '~@sb1/ffe-chips/css/chip.css';
```

## Dokumentasjon

Full dokumentasjon er tilgjengelig på https://design.sparebank1.no/

## Tilleggskontekst

Dette er en del av SpareBank 1 FFE (Felles Front End) designsystem.
Alle komponenter følger SpareBank 1s designretningslinjer og tilgjengelighetsstandarder.
