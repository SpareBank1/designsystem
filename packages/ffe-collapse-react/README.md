# @sb1/ffe-collapse-react

## Beskrivelse

React-komponent for å vise og skjule innhold med animasjon. Bruker CSS grid-animasjon for jevn overgang mellom åpent og lukket tilstand.

## Installasjon

```bash
npm install --save @sb1/ffe-collapse-react
```

## Bruk

Dokumentasjon: https://sparebank1.github.io/designsystem/komponenter/collapse/

### Importere CSS

```css
@import '@sb1/ffe-collapse-react/css/collapse.css';
```

Merk: CSS-variablene `--ffe-transition-duration` og `--ffe-ease` må være definert (tilgjengelig via `@sb1/ffe-core`).

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

### Med ExpandButton

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
                <p>Detaljert informasjon her</p>
            </Collapse>
        </div>
    );
}
```

## TypeScript

```typescript
import type { CollapseProps } from '@sb1/ffe-collapse-react';
```

## Utvikling

```bash
npm install && npm run build && npm start
```

Storybook kjører på http://localhost:6006/.
