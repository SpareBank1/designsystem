# @sb1/ffe-collapse-react

## Beskrivelse

React-komponent for å vise og skjule innhold med animasjon. Komponenten bruker CSS grid-animasjon for å gi en jevn overgang mellom åpent og lukket tilstand.

Komponenten wrapper innholdet i en `<div>` som animeres ved å endre `grid-template-rows` fra `0fr` til `1fr`, noe som gir en naturlig høydeanimasjon uten å måtte vite den faktiske høyden på innholdet.

## Installasjon

```bash
npm install --save @sb1/ffe-collapse-react
```

## Bruk

Full dokumentasjon er tilgjengelig på https://sparebank1.github.io/designsystem/komponenter/collapse/.

Komponenten krever tilhørende CSS for animasjoner. Importer stylingen på en av følgende måter:

### Importere kompilert CSS

```css
@import '@sb1/ffe-collapse-react/css/collapse.css';
```

### Importere Less (for prosjekter med Less)

```less
@import '@sb1/ffe-collapse-react/less/collapse.less';
```

Merk: CSS-variablene `--ffe-transition-duration` og `--ffe-ease` må være definert i prosjektet for at animasjonen skal fungere. Disse er typisk tilgjengelige via `@sb1/ffe-core`.

## Props

Komponenten utvider alle standard HTML div-attributter (`ComponentPropsWithRef<'div'>`).

| Prop        | Type                        | Påkrevd | Beskrivelse                                                                       |
| ----------- | --------------------------- | ------- | --------------------------------------------------------------------------------- |
| `isOpen`    | `boolean`                   | Ja      | Kontrollerer om innholdet er synlig. `true` viser innholdet, `false` skjuler det. |
| `onRest`    | `() => void`                | Nei     | Callback som kalles når animasjonen er ferdig (både ved åpning og lukking).       |
| `className` | `string`                    | Nei     | Ekstra CSS-klasser som legges til rot-elementet.                                  |
| `style`     | `React.CSSProperties`       | Nei     | Inline-stiler for rot-elementet.                                                  |
| `children`  | `React.ReactNode`           | Nei     | Innholdet som skal vises/skjules.                                                 |
| `ref`       | `React.Ref<HTMLDivElement>` | Nei     | Ref til rot-div-elementet.                                                        |

## Eksempler

### Grunnleggende bruk

```tsx
import { Collapse } from '@sb1/ffe-collapse-react';
import { useState } from 'react';

function BasicExample() {
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

### Med onRest-callback

```tsx
import { Collapse } from '@sb1/ffe-collapse-react';
import { useState } from 'react';

function CallbackExample() {
    const [isOpen, setIsOpen] = useState(false);

    const handleAnimationComplete = () => {
        console.log(
            `Animasjon ferdig. Innhold er nå ${isOpen ? 'synlig' : 'skjult'}`,
        );
    };

    return (
        <div>
            <button onClick={() => setIsOpen(!isOpen)}>Toggle innhold</button>
            <Collapse isOpen={isOpen} onRest={handleAnimationComplete}>
                <p>Innhold med animasjon-callback</p>
            </Collapse>
        </div>
    );
}
```

### Med ExpandButton fra ffe-buttons-react

```tsx
import { Collapse } from '@sb1/ffe-collapse-react';
import { ExpandButton } from '@sb1/ffe-buttons-react';
import { useState } from 'react';

function ExpandButtonExample() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div>
            <ExpandButton
                isExpanded={isOpen}
                onClick={() => setIsOpen(!isOpen)}
            >
                {isOpen ? 'Skjul' : 'Vis'} detaljer
            </ExpandButton>
            <Collapse isOpen={isOpen}>
                <div>
                    <p>Detaljert informasjon her</p>
                    <p>Mer innhold som kan vises</p>
                </div>
            </Collapse>
        </div>
    );
}
```

### Med ref og tilpasset className

```tsx
import { Collapse } from '@sb1/ffe-collapse-react';
import { useRef, useState } from 'react';

function RefExample() {
    const [isOpen, setIsOpen] = useState(false);
    const collapseRef = useRef<HTMLDivElement>(null);

    return (
        <div>
            <button onClick={() => setIsOpen(!isOpen)}>Toggle</button>
            <Collapse
                ref={collapseRef}
                isOpen={isOpen}
                className="min-tilpassede-klasse"
            >
                <p>Innhold med ref-tilgang</p>
            </Collapse>
        </div>
    );
}
```

## CSS-klasser

Komponenten bruker følgende CSS-klasser internt:

| Klasse                          | Beskrivelse                                                                             |
| ------------------------------- | --------------------------------------------------------------------------------------- |
| `.ffe-collapse`                 | Rot-elementet. Bruker CSS grid for animasjon.                                           |
| `.ffe-collapse--open`           | Legges til når `isOpen={true}`. Setter `grid-template-rows: 1fr`.                       |
| `.ffe-collapse--hidden`         | Legges til når innholdet er skjult. Setter `visibility: hidden`.                        |
| `.ffe-collapse__inner`          | Wrapper for innholdet. Har `overflow: hidden` under animasjon.                          |
| `.ffe-collapse__inner--visible` | Legges til når animasjonen er ferdig og innholdet er åpent. Setter `overflow: visible`. |

## TypeScript

Komponenten eksporterer følgende typer:

```typescript
import { Collapse, CollapseProps } from '@sb1/ffe-collapse-react';

// CollapseProps utvider ComponentPropsWithRef<'div'>
interface CollapseProps extends ComponentPropsWithRef<'div'> {
    isOpen: boolean;
    onRest?: () => void;
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
