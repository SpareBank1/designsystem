# @sb1/ffe-tabs-react

## Installasjon

```bash
npm install --save @sb1/ffe-tabs-react
```

## Bruk

Full dokumentasjon er tilgjengelig på https://sparebank1.github.io/designsystem/komponenter/faner/.

## Beskrivelse

Fanekomponenter for å organisere innhold i seksjoner der brukeren kan bytte mellom faner uten å forlate siden. `TabGroup` styrer valgt fane og tilhørende panel, `Tab` representerer hver fane.

Bruk faner for parallelt, beslektet innhold som ikke krever ny side, og når antallet seksjoner er håndterbart.

## Eksempler

```tsx
import React from 'react';
import { TabGroup, Tab } from '@sb1/ffe-tabs-react';

export function TabsDemo() {
    const [active, setActive] = React.useState(0);
    return (
        <>
            <TabGroup activeTab={active} onChange={setActive}>
                <Tab id="tab-0">Oversikt</Tab>
                <Tab id="tab-1">Detaljer</Tab>
                <Tab id="tab-2">Historikk</Tab>
            </TabGroup>

            {active === 0 && <div>Innhold for oversikt</div>}
            {active === 1 && <div>Innhold for detaljer</div>}
            {active === 2 && <div>Innhold for historikk</div>}
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
