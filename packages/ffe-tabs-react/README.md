# @sb1/ffe-tabs-react

## Installasjon

```bash
npm install --save @sb1/ffe-tabs-react
```

## Bruk

Full dokumentasjon er tilgjengelig på https://sparebank1.github.io/designsystem/komponenter/faner/.

## Beskrivelse

Fanekomponenter for å organisere innhold i seksjoner der brukeren kan bytte mellom faner uten å forlate siden. `TabGroup` styrer layout og tastaturnavigasjon, `Tab` representerer hver enkelt fane.

Bruk faner for parallelt, beslektet innhold som ikke krever ny side, og når antallet seksjoner er håndterbart.

### Komponenter og props

#### TabGroup

Container-komponent som wrapper Tab-elementer og håndterer tastaturnavigasjon (piltaster venstre/høyre).

```typescript
interface TabGroupProps extends Omit<
    React.ComponentPropsWithoutRef<'div'>,
    'children'
> {
    /** Hindrer at fanene brytes over flere linjer */
    noBreak?: boolean;
    /** Array av Tab-komponenter */
    children: React.ReactElement<TabProps>[];
}
```

| Prop        | Type                       | Påkrevd | Beskrivelse                   |
| ----------- | -------------------------- | ------- | ----------------------------- |
| `noBreak`   | `boolean`                  | Nei     | Hindrer linjebryting av faner |
| `className` | `string`                   | Nei     | Egendefinerte CSS-klasser     |
| `children`  | `ReactElement<TabProps>[]` | Ja      | Array av Tab-komponenter      |

#### Tab

Enkelt fane-element som rendres som en `<button>` med `role="tab"`.

```typescript
interface TabProps extends React.ComponentPropsWithRef<'button'> {
    /** Markerer fanen som valgt */
    selected?: boolean;
}
```

| Prop            | Type         | Påkrevd | Beskrivelse                           |
| --------------- | ------------ | ------- | ------------------------------------- |
| `selected`      | `boolean`    | Nei     | Setter fanen som aktiv/valgt          |
| `onClick`       | `() => void` | Nei     | Handler for klikk på fanen            |
| `aria-controls` | `string`     | Nei     | ID til panelet som fanen kontrollerer |
| `className`     | `string`     | Nei     | Egendefinerte CSS-klasser             |
| `children`      | `ReactNode`  | Ja      | Tekst eller innhold i fanen           |

Tab arver alle standard HTML button-props.

## Eksempler

### Grunnleggende bruk med tilstandshåndtering

State må håndteres av foreldrekomponenten. Bruk `selected` prop for å markere aktiv fane og `onClick` for å håndtere fanebytte.

```tsx
import React, { useState } from 'react';
import { TabGroup, Tab } from '@sb1/ffe-tabs-react';

export function TabsDemo() {
    const [activeTab, setActiveTab] = useState<string>('oversikt');

    return (
        <>
            <TabGroup>
                <Tab
                    selected={activeTab === 'oversikt'}
                    onClick={() => setActiveTab('oversikt')}
                    aria-controls="panel-oversikt"
                >
                    Oversikt
                </Tab>
                <Tab
                    selected={activeTab === 'detaljer'}
                    onClick={() => setActiveTab('detaljer')}
                    aria-controls="panel-detaljer"
                >
                    Detaljer
                </Tab>
                <Tab
                    selected={activeTab === 'historikk'}
                    onClick={() => setActiveTab('historikk')}
                    aria-controls="panel-historikk"
                >
                    Historikk
                </Tab>
            </TabGroup>

            {activeTab === 'oversikt' && (
                <div id="panel-oversikt" role="tabpanel">
                    Innhold for oversikt
                </div>
            )}
            {activeTab === 'detaljer' && (
                <div id="panel-detaljer" role="tabpanel">
                    Innhold for detaljer
                </div>
            )}
            {activeTab === 'historikk' && (
                <div id="panel-historikk" role="tabpanel">
                    Innhold for historikk
                </div>
            )}
        </>
    );
}
```

### Med noBreak for å hindre linjebryting

Bruk `noBreak` prop på `TabGroup` for å hindre at fanene brytes over flere linjer.

```tsx
import React, { useState } from 'react';
import { TabGroup, Tab } from '@sb1/ffe-tabs-react';

export function NoBreakTabs() {
    const [activeTab, setActiveTab] = useState<string>('tab1');

    return (
        <TabGroup noBreak={true}>
            <Tab
                selected={activeTab === 'tab1'}
                onClick={() => setActiveTab('tab1')}
            >
                Første fane
            </Tab>
            <Tab
                selected={activeTab === 'tab2'}
                onClick={() => setActiveTab('tab2')}
            >
                Andre fane
            </Tab>
            <Tab
                selected={activeTab === 'tab3'}
                onClick={() => setActiveTab('tab3')}
            >
                Tredje fane
            </Tab>
        </TabGroup>
    );
}
```

### Tilgjengelighet (a11y)

Komponentene følger WAI-ARIA tabs-mønsteret:

- `TabGroup` rendres som `<div role="tablist">` og håndterer tastaturnavigasjon med piltaster
- `Tab` rendres som `<button role="tab">` med automatisk `aria-selected` og `tabindex` basert på `selected` prop
- Bruk `aria-controls` på Tab for å koble fanen til tilhørende panel
- Panel-elementet bør ha `role="tabpanel"` og `id` som matcher `aria-controls`

## Utvikling

For å starte en lokal utviklingsserver, kjør følgende fra designsystem-rotmappen:

```bash
npm install
npm run build
npm start
```

En lokal Storybook-instans med live reloading vil kjøre på http://localhost:6006/.

Eksempelimplementasjoner med de nyeste versjonene av alle komponentene er også tilgjengelige på https://sparebank1.github.io/designsystem.
