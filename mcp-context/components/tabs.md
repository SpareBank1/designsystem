# @sb1/ffe-tabs-react

## Beskrivelse

Fanekomponenter for å organisere innhold i seksjoner der brukeren kan bytte mellom faner uten å forlate siden. `TabGroup` styrer valgt fane og tilhørende panel, `Tab` representerer hver fane.

## Komponenter

Denne pakken eksporterer følgende komponenter:

- `Tab`
- `TabGroup`

## Installasjon

Installer pakken og alle dens avhengigheter:

```bash
npm install @sb1/ffe-tabs-react @sb1/ffe-tabs @sb1/ffe-core
```

### Avhengigheter

Denne pakken er avhengig av:

- `@sb1/ffe-tabs`
- `@sb1/ffe-core`

## CSS-import

I prosjektets hoved-CSS-fil, importer de nødvendige stilene:

```css
@import '@sb1/ffe-core/css/ffe.css';
@import '@sb1/ffe-tabs/css/tabs.css';
```

Merk: Sørg for å importere `@sb1/ffe-core/css/ffe.css` først, da den inneholder grunnleggende stiler.

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

## Dokumentasjon

Full dokumentasjon er tilgjengelig på https://sparebank1.github.io/designsystem/

## Tilleggskontekst

Dette er en del av SpareBank 1 FFE (Felles Front End) designsystem.
Alle komponenter følger SpareBank 1s designretningslinjer og tilgjengelighetsstandarder.
