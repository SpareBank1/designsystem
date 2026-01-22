# @sb1/ffe-modals-react

## Description

Modal-komponenter for korte, fokuserte interaksjoner i webapplikasjoner. Bruk modaler når du trenger å fange brukerens oppmerksomhet for en enkel oppgave, bekreftelse eller informasjon. Ikke bruk modaler på mobil—bruk ark/sheets.

## Components

This package exports the following components:

- `Modal`
- `ModalHandle`
- `ModalBlock`

## Installation

Install the package and all its dependencies:

```bash
npm install @sb1/ffe-modals-react @sb1/ffe-icons-react @sb1/ffe-modals @sb1/ffe-icons @sb1/ffe-core
```

### Dependencies

This package depends on:

- `@sb1/ffe-icons-react`
- `@sb1/ffe-modals`
- `@sb1/ffe-icons`
- `@sb1/ffe-core`

## CSS Import

In your project's main CSS file, import the required styles:

```css
@import '@sb1/ffe-core/css/ffe.css';
@import '@sb1/ffe-icons/css/ffe-icons.css';
@import '@sb1/ffe-modals/css/modal.css';
```

Note: Make sure to import `@sb1/ffe-core/css/ffe.css` first as it contains base styles.

## API Reference

### Modal Props

| Prop | Type | Required | Description |
|------|------|----------|-------------|
| `ariaLabelledby` | `string` | Yes | - |
| `locale` | `Locale` | No | - |
| `onClose` | `() => void` | No | - |
| `portalContainer` | `Parameters<typeof createPortal>[1]` | No | - |

### ModalHandle Props

No component-specific props beyond native HTML attributes.

### ModalBlock Props

No component-specific props beyond native HTML attributes.

## When to Use

Når skal komponenten brukes?

Modalvinduer skal **IKKE** brukes i mobilapplikasjoner. I app anbefales det å bruke eksternt lag eller sheet der det anses som nødvendig.

Modalvinduer skal kun aktiveres av bruker ved brukers direkte interaksjon med en knapp på nettsiden, eller for å gi brukeren viktige informasjonsvarsler. Modalen vil da gi brukeren et nytt grensesnitt, men under samme kontekst som siden bruker var på ved aktivering.

En modal skal alltid ha en heading nivå 2. Ikke bruk modalvinduer for funksjonelle prosesser med flere steg.

For å lukke eller åpne en modal brukes `ModalHandle`. Innhold kan plasseres i en eller flere `<ModalBlock/>`.

## Manual Examples (from README)

```tsx
import React, { useRef } from 'react';
import { Modal, ModalHandle, ModalBlock } from '@sb1/ffe-modals-react';

export function ModalDemo() {
	const modalRef = useRef<ModalHandle>(null);

	return (
		<div>
			<button onClick={() => modalRef.current?.open()}>Åpne modal</button>

			<Modal
				ref={modalRef}
				ariaLabelledby="modal-title"
				onClose={() => console.log('Closed')}
			>
				<h2 id="modal-title">Tittel</h2>
				<p>Innhold i modal.</p>
				<ModalBlock>
					<button onClick={() => modalRef.current?.close()}>Lukk</button>
				</ModalBlock>
			</Modal>
		</div>
	);
}
```

## Documentation

Full documentation is available at https://design.sparebank1.no/

## Additional Context

This is part of the SpareBank 1 FFE (Felles Front End) design system.
All components follow SpareBank 1's design guidelines and accessibility standards.
