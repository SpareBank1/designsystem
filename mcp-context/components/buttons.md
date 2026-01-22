# @sb1/ffe-buttons-react

## Description

Reaktive knapp-komponenter i FFE for handlinger med korrekt visuell hierarki og tilgjengelighetsstøtte. Bruk disse for å kommunisere prioritet (Action, Primary, Secondary, Tertiary), navigasjon (BackButton), utvidelse/visning (Expand/InlineExpand), grupperte knapper og snarveier.

## Components

This package exports the following components:

- `ActionButton`
- `BackButton`
- `ButtonGroup`
- `ExpandButton`
- `InlineExpandButton`
- `PrimaryButton`
- `SecondaryButton`
- `ShortcutButton`
- `TaskButton`
- `TertiaryButton`

## Installation

Install the package and all its dependencies:

```bash
npm install @sb1/ffe-buttons-react @sb1/ffe-buttons @sb1/ffe-icons-react @sb1/ffe-core @sb1/ffe-icons
```

### Dependencies

This package depends on:

- `@sb1/ffe-buttons`
- `@sb1/ffe-icons-react`
- `@sb1/ffe-core`
- `@sb1/ffe-icons`

## CSS Import

In your project's main CSS file, import the required styles:

```css
@import '@sb1/ffe-core/css/ffe.css';
@import '@sb1/ffe-buttons/css/buttons.css';
@import '@sb1/ffe-icons/css/ffe-icons.css';
```

Note: Make sure to import `@sb1/ffe-core/css/ffe.css` first as it contains base styles.

## API Reference

### ActionButton Props

No component-specific props beyond native HTML attributes.

### BackButton Props

No component-specific props beyond native HTML attributes.

### ButtonGroup Props

| Prop | Type | Required | Description |
|------|------|----------|-------------|
| `thin` | `boolean` | No | - |
| `inline` | `boolean` | No | - |
| `ariaLabel` | `string` | No | - |

### ExpandButton Props

| Prop | Type | Required | Description |
|------|------|----------|-------------|
| `closeLabel` | `string` | No | - |
| `isExpanded` | `boolean` | Yes | - |
| `size` | `'sm' | 'md' | 'lg'` | No | - |

### InlineExpandButton Props

| Prop | Type | Required | Description |
|------|------|----------|-------------|
| `isExpanded` | `boolean` | Yes | - |

### PrimaryButton Props

No component-specific props beyond native HTML attributes.

### SecondaryButton Props

No component-specific props beyond native HTML attributes.

### ShortcutButton Props

No component-specific props beyond native HTML attributes.

### TaskButton Props

| Prop | Type | Required | Description |
|------|------|----------|-------------|
| `icon` | `ReactElement` | Yes | - |

### TertiaryButton Props

No component-specific props beyond native HTML attributes.

## When to Use

Bruk av knapper

I SpareBank 1 har vi flere typer knapper og hvilken du skal bruke kommer an på situasjonen, og hvilke andre knapper som ligger i «nærheten». Felles for alle knappene er at de kan brukes i situasjoner der du vil gi brukerne muligheten til å utføre ulike typer handlinger i brukergrensesnittet.

Noen eksempler på scenarioer der knapper kan komme til nytte:

- Starte en prosess. F.eks. «Bli kunde», «Sjekk pris», «Meld skade»
- Gi en kommando til systemet. F.eks. «Skriv ut», «Last ned», «Betal», «Bestill»
- Beslutte noe. F.eks. «Kjøp», «Aksepter», «Overfør»
- Navigere i brukergrensesnittet. F.eks. «Neste», «Fortsett», «Søk»
- Endre modus eller visning. F.eks. «Redigér» for å gå til redigeringsmodus, «Vis flere» for å ekspandere en liste

Knapper skal brukes der kundene utfører en handling. Der de skal navigere til andre sider og sider utenfor løsningen brukes [lenker](/komponenter/typografi/) istedenfor. Når du vil at brukeren skal ta et valg er det best å bruke [radioknapper](/komponenter/skjemaelementer/) eller [checkboxer](/komponenter/skjemaelementer/), for å så bekrefte med en knapp.



Gjør sånn:

<CheckList>
    <CheckListItem>Knappen skal brukes til å utføre en handling</CheckListItem>
    <CheckListItem>
        Ha informativ og beskrivende tekst, ikon eller begge deler
    </CheckListItem>
    <CheckListItem>
        Bruk verb i imperiativ form (unntak: konvensjoner som «neste»)
    </CheckListItem>
    <CheckListItem>Ha så kort tekst som mulig</CheckListItem>
</CheckList>

## When NOT to Use

Ikke sånn:

<CheckList>
    <CheckListItem isCross={true}>Ha tekst som går over 2 linjer</CheckListItem>
    <CheckListItem isCross={true}>
        Gjem knappen eller sett den som disabled
    </CheckListItem>
    <CheckListItem isCross={true}>
        Ha flere primærknapper på en side
    </CheckListItem>
    <CheckListItem isCross={true}>
        Bruk knapp til å navigere utenfor løsningen (bruk lenke istedenfor)
    </CheckListItem>
    <CheckListItem isCross={true}>
        Bruk knapp til å la bruker ta valg (bruk checkbox/radioknapp istedenfor)
    </CheckListItem>
</CheckList>

## Manual Examples (from README)

```tsx
import React from 'react';
import {
	ActionButton,
	BackButton,
	ButtonGroup,
	ExpandButton,
	InlineExpandButton,
	PrimaryButton,
	SecondaryButton,
	ShortcutButton,
	TaskButton,
	TertiaryButton,
} from '@sb1/ffe-buttons-react';

export function ButtonsDemo() {
	const [expanded, setExpanded] = React.useState(false);

	return (
		<div>
			{/* Action: én per side, den viktigste handlingen */}
			<ActionButton onClick={() => alert('Send søknad')}>Send søknad</ActionButton>

			{/* Primary/Secondary/Tertiary: hierarki av handlinger */}
			<PrimaryButton onClick={() => alert('Lagre')}>Lagre</PrimaryButton>
			<SecondaryButton onClick={() => alert('Avbryt')}>Avbryt</SecondaryButton>
			<TertiaryButton onClick={() => alert('Mer info')}>Mer info</TertiaryButton>

			{/* BackButton: navigasjon bakover */}
			<BackButton onClick={() => window.history.back()}>Tilbake</BackButton>

			{/* Expand/InlineExpand: vis/skjul innhold */}
			<ExpandButton
				expanded={expanded}
				onClick={() => setExpanded(!expanded)}
			>
				{expanded ? 'Skjul detaljer' : 'Vis detaljer'}
			</ExpandButton>
			<InlineExpandButton
				expanded={expanded}
				onClick={() => setExpanded(!expanded)}
			>
				{expanded ? 'Skjul' : 'Vis'}
			</InlineExpandButton>

			{/* ButtonGroup: gruppering og mellomrom */}
			<ButtonGroup>
				<PrimaryButton>Fortsett</PrimaryButton>
				<SecondaryButton>Avbryt</SecondaryButton>
			</ButtonGroup>

			{/* Shortcut/Task: snarveier og oppgavehandlinger */}
			<ShortcutButton onClick={() => alert('Snarvei')}>Snarvei</ShortcutButton>
			<TaskButton onClick={() => alert('Start oppgave')}>Start oppgave</TaskButton>
		</div>
	);
}
```

## Documentation

Full documentation is available at https://design.sparebank1.no/

## Additional Context

This is part of the SpareBank 1 FFE (Felles Front End) design system.
All components follow SpareBank 1's design guidelines and accessibility standards.
