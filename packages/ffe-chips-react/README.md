# @sb1/ffe-chips-react

## Beskrivelse

Chip-komponenten brukes for å lage interaktive, kompakte elementer med valgfrie ikoner.

## Installasjon

```bash
npm install --save @sb1/ffe-chips-react
```

## Bruk

Full dokumentasjon er tilgjengelig på https://design.sparebank1.no/komponenter/chip/.

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

### Med ikoner

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

### Som lenke

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

### Importere CSS

```css
@import '~@sb1/ffe-chips/css/chip.css';
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
