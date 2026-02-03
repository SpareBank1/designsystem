# @sb1/ffe-tabs-react

## Beskrivelse

Fanekomponenter for innhold i seksjoner. `TabGroup` styrer layout og tastaturnavigasjon, `Tab` representerer hver fane.

## Komponenter

Denne pakken eksporterer følgende komponenter:

- `Tab`
- `TabGroup`

## Installasjon

Installer pakken og alle dens avhengigheter:

```bash
npm install @sb1/ffe-tabs-react
```

## API-referanse

### Tab Props

| Prop | Type | Påkrevd | Beskrivelse |
|------|------|---------|-------------|
| `selected` | `boolean` | Nei | - |

### TabGroup Props

| Prop | Type | Påkrevd | Beskrivelse |
|------|------|---------|-------------|
| `noBreak` | `boolean` | Nei | Applies the noBreak modifier to avoid it collapsing over multiple lines |
| `children` | `React.ReactElement<TabProps>[]` | Ja | The children of the TabGroup component |

## Eksempler (fra README)

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

## Dokumentasjon

Full dokumentasjon er tilgjengelig på https://sparebank1.github.io/designsystem/

## Tilleggskontekst

Dette er en del av SpareBank 1 FFE (Felles Front End) designsystem.
Alle komponenter følger SpareBank 1s designretningslinjer og tilgjengelighetsstandarder.
