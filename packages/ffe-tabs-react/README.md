## Install

```bash
npm install --save @sb1/ffe-tabs-react
```

## Usage

Full documentation on tabs usage is available at https://design.sparebank1.no/komponenter/faner/.

## Description

Fanekomponenter for å organisere innhold i seksjoner der brukeren kan bytte mellom faner uten å forlate siden. `TabGroup` styrer valgt fane og tilhørende panel, `Tab` representerer hver fane.

Bruk faner for parallelt, beslektet innhold som ikke krever ny side, og når antallet seksjoner er håndterbart.

## Examples

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

## Development

To start a local development server, run the following from the designsystem root folder:

```bash
npm install
npm run build
npm start
```

A local instance of `Storybook` with live reloading will run at http://localhost:6006/.

Example implementations using the latest versions of all components are also available at https://sparebank1.github.io/designsystem.
