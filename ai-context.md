# SpareBank 1 FFE (Felles Front End) Design System - AI Context

## Overview

The FFE Design System is SpareBank 1's comprehensive component library for building consistent, accessible web applications. It provides React components with corresponding CSS styles following SpareBank 1's design guidelines.

## Architecture

The design system is organized into packages:

- **React packages** (ending in `-react`): Contain React components
- **CSS packages**: Contain standalone CSS (some React packages include their own CSS)
- **Core packages**: Provide foundational styles, icons, and utilities

### Key Packages

- `@sb1/ffe-core` and `@sb1/ffe-core-react`: Base styles, typography, spacing
- `@sb1/ffe-icons` and `@sb1/ffe-icons-react`: Icon library

**Note:** The grid package (`@sb1/ffe-grid-react`) is deprecated and should not be used. Use modern CSS Grid or Flexbox instead.

## Component Library

Below is a complete list of all React component packages in the FFE design system.

### Form & Input

#### @sb1/ffe-account-selector-react

**Components:** AccountSelector, AccountSelectorMulti

[View detailed documentation](./packages/ffe-account-selector-react/ai-context.md)

#### @sb1/ffe-datepicker-react

**Components:** Datepicker, getDatepickerByLabelText, DateInput, Calendar

[View detailed documentation](./packages/ffe-datepicker-react/ai-context.md)

#### @sb1/ffe-dropdown-react

Dropdown er en vanlig nedtrekksliste som kan brukes man når man har 5-10 valg å velge mellom. Har du mindre enn 5 valg, bruk `RadioButtons` istedenfor.

**Components:** Dropdown

[View detailed documentation](./packages/ffe-dropdown-react/ai-context.md)

#### @sb1/ffe-file-upload-react

En komponent for å laste opp filer, for eksempel Excel-ark eller annen dokumentasjon.

**Components:** FileUpload, getFileContent, getUniqueFileName

[View detailed documentation](./packages/ffe-file-upload-react/ai-context.md)

#### @sb1/ffe-form-react

Checkbox brukes der du har 4 eller færre valgalternativer, og du vil gi brukeren muligheten til å velge mer enn ett alternativ.

**Components:** ErrorFieldMessage, InfoFieldMessage, SuccessFieldMessage, Checkbox, Input, ...

[View detailed documentation](./packages/ffe-form-react/ai-context.md)

#### @sb1/ffe-searchable-dropdown-react

@sb1/ffe-searchable-dropdown-react

**Components:** SearchableDropdown, SearchableDropdownMultiSelect

[View detailed documentation](./packages/ffe-searchable-dropdown-react/ai-context.md)

### Buttons & Actions

#### @sb1/ffe-buttons-react

@sb1/ffe-buttons-react

**Components:** ActionButton, BackButton, ButtonGroup, ExpandButton, InlineExpandButton, ...

[View detailed documentation](./packages/ffe-buttons-react/ai-context.md)

### Layout & Structure

#### @sb1/ffe-accordion-react

Accordion brukes der du har mye informasjon som du ønsker å gjøre tilgjengelig for brukere, uten at alt er visuelt synlig samtidig. En accordion er bygget opp av en «header» og et «panel», og i SpareBank 1 er hele «headeren» klikkbar.

**Components:** Accordion, AccordionItem

[View detailed documentation](./packages/ffe-accordion-react/ai-context.md)

#### @sb1/ffe-cards-react

@sb1/ffe-cards-react

**Components:** CardBase, TextCard, IconCard, GroupCard, GroupCardElement, ...

[View detailed documentation](./packages/ffe-cards-react/ai-context.md)

#### @sb1/ffe-collapse-react

Komponent for å enkelt lage ekspanderbart område. Hvorvidt området er ekspandert eller ikke styres av konsumenten via property `isOpen`.

**Components:** Collapse

[View detailed documentation](./packages/ffe-collapse-react/ai-context.md)

#### @sb1/ffe-tabs-react

Faner kan være nyttige for å dele opp innholdet på siden i logiske «blokker» og forenkle navigasjonen for brukerne.

**Components:** Tab, TabGroup

[View detailed documentation](./packages/ffe-tabs-react/ai-context.md)

### Feedback & Messages

#### @sb1/ffe-context-message-react

**Components:** ContextInfoMessage, ContextTipsMessage, ContextSuccessMessage, ContextErrorMessage

[View detailed documentation](./packages/ffe-context-message-react/ai-context.md)

#### @sb1/ffe-feedback-react

Komponenten består av en tekst og tommel opp/ned-knapper som ved klikk viser et tilbakemeldingsskjema.

**Components:** Feedback

[View detailed documentation](./packages/ffe-feedback-react/ai-context.md)

#### @sb1/ffe-message-box-react

**Components:** SuccessMessage, ErrorMessage, InfoMessage, TipsMessage, InfoMessageList, ...

[View detailed documentation](./packages/ffe-message-box-react/ai-context.md)

#### @sb1/ffe-messages-react

@sb1/ffe-messages-react

**Components:** SystemMessage, ContextMessage, MessageBox, MessageHeader, MessageList, ...

[View detailed documentation](./packages/ffe-messages-react/ai-context.md)

#### @sb1/ffe-modals-react

Modalvindu brukes for å vise informasjon, bruksspesifikke funksjoner, meldinger eller bekreftelser som brukeren må respondere på før de kan fortsette å bruke nettsiden.

**Components:** Modal, ModalHandle, ModalBlock

[View detailed documentation](./packages/ffe-modals-react/ai-context.md)

#### @sb1/ffe-system-message-react

**Components:** SystemErrorMessage, SystemInfoMessage, SystemNewsMessage, SystemSuccessMessage

[View detailed documentation](./packages/ffe-system-message-react/ai-context.md)

### Navigation & Controls

#### @sb1/ffe-chips-react

Bruk Chips for elementer der brukeren trenger å filtrere eller organisere innhold.

**Components:** Chip, ChipRemovable, ChipSelectable

[View detailed documentation](./packages/ffe-chips-react/ai-context.md)

#### @sb1/ffe-pagination-react

Paginering benyttes til søkeresultater og lignende presentasjon av store mengder informasjon som ikke får plass på en enkelt side.

**Components:** Pagination, usePagination

[View detailed documentation](./packages/ffe-pagination-react/ai-context.md)

#### @sb1/ffe-tags-react

En Tag er en liten, fleksibel komponent som brukes til å kategorisere, merke eller gi ekstra kontekst til innhold.

**Components:** Tag

[View detailed documentation](./packages/ffe-tags-react/ai-context.md)

### Data Display

#### @sb1/ffe-chart-donut-react

Diagram i SpareBank 1-drakt.

**Components:** ChartDonut

[View detailed documentation](./packages/ffe-chart-donut-react/ai-context.md)

#### @sb1/ffe-lists-react

**Components:** BulletList, BulletListItem, CheckList, CheckListItem, NumberedList, ...

[View detailed documentation](./packages/ffe-lists-react/ai-context.md)

#### @sb1/ffe-progressbar-react

Progressbar brukes for å vise fremgangen i en prosess.

**Components:** Progressbar

[View detailed documentation](./packages/ffe-progressbar-react/ai-context.md)

#### @sb1/ffe-spinner-react

Det er mye som skjer i bakgrunnen i et system når innholdet lastes inn. Med spinnere kan vi kommunisere tydelig til brukeren at innholdet er i ferd med å vises snart. Det er best practice å benytte seg av spinnere dersom ventetiden varer lengre enn tre sekunder. Dersom siden bruker mer enn 10 sekunder på å laste inn innholdet, vurder å bruke en notifikasjon med forklarende tekst.

**Components:** Spinner

[View detailed documentation](./packages/ffe-spinner-react/ai-context.md)

#### @sb1/ffe-tables-react

Tabeller brukes når vi vil vise strukturert informasjon under en felles overskrift.

**Components:** Table, TableBody, TableDataCell, TableFoot, TableHead, ...

[View detailed documentation](./packages/ffe-tables-react/ai-context.md)

### Visual Elements

#### @sb1/ffe-badge-react

En Badge er en liten visuell indikator som viser antall uleste varsler, meldinger eller oppgaver.

**Components:** Badge

[View detailed documentation](./packages/ffe-badge-react/ai-context.md)

#### @sb1/ffe-icons-react

Ikoner skal gjøre det enkelt for kunden å navigere i de digitale flatene våre. Ikonene representerer funksjoner, verktøy eller handlinger og visualiserer funksjonalitet.

[View detailed documentation](./packages/ffe-icons-react/ai-context.md)

#### @sb1/ffe-shapes-react

@sb1/ffe-shapes-react

**Components:** Wave

[View detailed documentation](./packages/ffe-shapes-react/ai-context.md)

#### @sb1/ffe-symbols-react

**Components:** Symbol

[View detailed documentation](./packages/ffe-symbols-react/ai-context.md)

### Core & Utilities

#### @sb1/ffe-core-react

**Components:** BodyText, DividerLine, EmphasizedText, Heading1, Heading2, ...

[View detailed documentation](./packages/ffe-core-react/ai-context.md)

## Installation Guidelines

### Installing Components

When installing any FFE component:

1. Install the React package and all its FFE dependencies together
2. Import the required CSS files in your main stylesheet
3. Always import `@sb1/ffe-core/css/ffe.css` first (base styles)

Example:

```bash
npm install @sb1/ffe-buttons-react @sb1/ffe-buttons @sb1/ffe-icons-react @sb1/ffe-core @sb1/ffe-icons
```

```css
@import '@sb1/ffe-core/css/ffe.css';
@import '@sb1/ffe-buttons/css/buttons.css';
@import '@sb1/ffe-icons/css/ffe-icons.css';
```

## Design Principles

### Accessibility
- All components follow WCAG 2.1 AA standards
- Keyboard navigation is fully supported
- Screen reader compatibility is tested
- Proper ARIA attributes are included

### Consistency
- Components follow SpareBank 1's visual design language
- Naming conventions are consistent across the system
- Behavior patterns are predictable and standardized

### Best Practices
- Use semantic HTML elements
- Prefer composition over configuration
- Keep components focused and single-purpose
- Follow React best practices and patterns

## Common Patterns

### Button Hierarchy
- **ActionButton**: Highest priority call-to-action (one per page)
- **PrimaryButton**: High priority actions
- **SecondaryButton**: Medium priority actions
- **TertiaryButton**: Low priority actions

### Form Handling
- Use controlled components for form inputs
- Provide clear validation feedback
- Show error messages inline near the input
- Never disable buttons; show validation errors instead

### Modal Usage
- NOT for mobile applications (use sheets instead)
- Only for short, focused interactions
- Always provide multiple ways to close
- Never use for multi-step processes

## Quick Reference

For detailed information about a specific component:

1. Look up the component in the list above
2. Navigate to its package-specific ai-context.md file
3. Review installation, usage, and guidelines

## Additional Resources

- Official documentation: https://design.sparebank1.no/
- GitHub repository: https://github.com/SpareBank1/designsystem
- Component examples: https://sparebank1.github.io/designsystem
