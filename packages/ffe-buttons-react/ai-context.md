# @sb1/ffe-buttons-react

## Description

@sb1/ffe-buttons-react

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

## Basic Usage

```typescript
import { ActionButton, BackButton, ButtonGroup, ... } from '@sb1/ffe-buttons-react';

function MyComponent() {
  return (
    <ActionButton onClick={() => console.log('clicked')}>
      Click me
    </ActionButton>
  );
}
```

## API Reference

### BackButton Props

| Prop   | Type            | Required | Description |
| ------ | --------------- | -------- | ----------- |
| `data` | `image/svg+xml` | Yes      | -           |

### BaseButton Props

Size of the button, default md. _/
size?: 'sm' | 'md' | 'lg';
/\*\* Using only an icon, no label _/
iconOnly?: boolean;
};
/\*\*
Internal component
@ignore

| Prop                 | Type           | Required  | Description |
| -------------------- | -------------- | --------- | ----------- | ---------- | ------- | --- | --- |
| `ariaLoadingMessage` | `string`       | No        | -           |
| `buttonType`         | `'action'      | 'primary' | 'secondary' | 'shortcut' | 'task'` | Yes | -   |
| `isDisabled`         | `boolean`      | No        | -           |
| `isLoading`          | `boolean`      | No        | -           |
| `leftIcon`           | `ReactElement` | No        | -           |
| `rightIcon`          | `ReactElement` | No        | -           |
| `size`               | `'sm'          | 'md'      | 'lg'`       | No         | -       |
| `iconOnly`           | `boolean`      | No        | -           |

### ButtonGroup Props

| Prop        | Type      | Required | Description |
| ----------- | --------- | -------- | ----------- |
| `thin`      | `boolean` | No       | -           |
| `inline`    | `boolean` | No       | -           |
| `ariaLabel` | `string`  | No       | -           |

### ExpandButton Props

| Prop         | Type      | Required | Description |
| ------------ | --------- | -------- | ----------- | --- | --- |
| `closeLabel` | `string`  | No       | -           |
| `isExpanded` | `boolean` | Yes      | -           |
| `size`       | `'sm'     | 'md'     | 'lg'`       | No  | -   |

### InlineBaseButton Props

Enum of supported prop types. Used internally only.
@ignore
/
buttonType: 'tertiary' | 'back' | 'expand';
/** Icon shown to the left of the label \*/
leftIcon?: ReactElement;
/** Icon shown to the right of the label _/
rightIcon?: ReactElement;
/\*\* Size of the button, default md. _/
size?: 'sm' | 'md' | 'lg';
/\*_ Using only an icon, no label _/
iconOnly?: boolean;
};

/\*\*
Internal component
@ignore

| Prop         | Type           | Required | Description |
| ------------ | -------------- | -------- | ----------- | --- | --- |
| `buttonType` | `'tertiary'    | 'back'   | 'expand'`   | Yes | -   |
| `leftIcon`   | `ReactElement` | No       | -           |
| `rightIcon`  | `ReactElement` | No       | -           |
| `size`       | `'sm'          | 'md'     | 'lg'`       | No  | -   |
| `iconOnly`   | `boolean`      | No       | -           |

### InlineExpandButton Props

| Prop         | Type      | Required | Description |
| ------------ | --------- | -------- | ----------- |
| `isExpanded` | `boolean` | Yes      | -           |

### ShortcutButton Props

| Prop   | Type            | Required | Description |
| ------ | --------------- | -------- | ----------- |
| `data` | `image/svg+xml` | Yes      | -           |

### TaskButton Props

| Prop   | Type           | Required | Description |
| ------ | -------------- | -------- | ----------- |
| `icon` | `ReactElement` | Yes      | -           |

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

## Documentation

Full documentation is available at https://design.sparebank1.no/

## Additional Context

This is part of the SpareBank 1 FFE (Felles Front End) design system.
All components follow SpareBank 1's design guidelines and accessibility standards.
