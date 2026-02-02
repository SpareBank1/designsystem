# @sb1/ffe-tabs-react

## Installasjon

```bash
npm install --save @sb1/ffe-tabs-react
```

## Bruk

Full dokumentasjon: https://sparebank1.github.io/designsystem/komponenter/faner/

## Beskrivelse

Fanekomponenter for innhold i seksjoner. `TabGroup` styrer layout og tastaturnavigasjon, `Tab` representerer hver fane.

## Eksempler

### Grunnleggende bruk med tilstandshåndtering

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
        </>
    );
}
```

### Tilgjengelighet (a11y)

- `TabGroup` rendres som `<div role="tablist">` med tastaturnavigasjon
- `Tab` har automatisk `aria-selected` og `tabindex` basert på `selected`
- Bruk `aria-controls` for å koble fane til panel med `role="tabpanel"`

## Utvikling

```bash
npm install && npm run build && npm start
```

Lokal Storybook kjorer pa http://localhost:6006/
