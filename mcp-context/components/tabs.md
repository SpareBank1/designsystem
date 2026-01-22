# @sb1/ffe-tabs-react

## Description

Fanekomponenter for å organisere innhold i seksjoner der brukeren kan bytte mellom faner uten å forlate siden. `TabGroup` styrer valgt fane og tilhørende panel, `Tab` representerer hver fane.

## Components

This package exports the following components:

- `Tab`
- `TabGroup`

## Installation

Install the package and all its dependencies:

```bash
npm install @sb1/ffe-tabs-react @sb1/ffe-tabs @sb1/ffe-core
```

### Dependencies

This package depends on:

- `@sb1/ffe-tabs`
- `@sb1/ffe-core`

## CSS Import

In your project's main CSS file, import the required styles:

```css
@import '@sb1/ffe-core/css/ffe.css';
@import '@sb1/ffe-tabs/css/tabs.css';
```

Note: Make sure to import `@sb1/ffe-core/css/ffe.css` first as it contains base styles.

## API Reference

### Tab Props

| Prop | Type | Required | Description |
|------|------|----------|-------------|
| `selected` | `boolean` | No | - |

### TabGroup Props

| Prop | Type | Required | Description |
|------|------|----------|-------------|
| `noBreak` | `boolean` | No | - |
| `children` | `React.ReactElement<TabProps>[]` | Yes | - |

## Manual Examples (from README)

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

## Documentation

Full documentation is available at https://design.sparebank1.no/

## Additional Context

This is part of the SpareBank 1 FFE (Felles Front End) design system.
All components follow SpareBank 1's design guidelines and accessibility standards.
