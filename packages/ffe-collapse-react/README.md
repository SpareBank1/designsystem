# @sb1/ffe-collapse-react

## Beskrivelse

React-komponent for å vise og skjule innhold med animasjon.

## Installasjon

```bash
npm install --save @sb1/ffe-collapse-react
```

## Bruk

Full dokumentasjon er tilgjengelig på https://design.sparebank1.no/komponenter/collapse/.

Merk at komponenten er avhengig av overgangs-styling for `height`.
Dette kan gjøres ved å importere less-filen fra less-mappen i pakken.
Alternativt kan du legge til stil på klassen `.ffe-collapse-transition`, legge den til din egen klasse og sende klassen via `className`-propertyen, eller style den direkte via `style`-propertyen.

### Importere kompilert CSS

Hvis prosjektet ditt ikke bruker Less, kan du importere den kompilerte stylingen:

```css
@import '~@sb1/ffe-collapse-react/css/collapse.css';
```

## Eksempler

```tsx
import { Collapse } from '@sb1/ffe-collapse-react';
import { useState } from 'react';

function MyComponent() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div>
            <button onClick={() => setIsOpen(!isOpen)}>
                {isOpen ? 'Skjul' : 'Vis'} innhold
            </button>
            <Collapse isOpen={isOpen}>
                <p>Dette innholdet kan vises og skjules</p>
            </Collapse>
        </div>
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
