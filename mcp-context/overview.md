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

[View detailed documentation](./components/account-selector.md)

#### @sb1/ffe-datepicker-react

Komponenter for dato-inntasting og kalender i FFE. `DateInput` er feltet for manuell inntasting og parsing, `Calendar` viser datoer med tastaturnavigasjon, og `Datepicker` kombinerer input + kalender i én komponent.

**Components:** Datepicker, getDatepickerByLabelText, DateInput, Calendar

[View detailed documentation](./components/datepicker.md)

#### @sb1/ffe-dropdown-react

Enkel nedtrekksliste-komponent (`Dropdown`) for valg fra en liste. Brukes for korte, flate lister der brukeren skal velge ett alternativ.

**Components:** Dropdown

[View detailed documentation](./components/dropdown.md)

#### @sb1/ffe-file-upload-react

**Components:** FileUpload, getFileContent, getUniqueFileName

[View detailed documentation](./components/file-upload.md)

#### @sb1/ffe-form-react

Skjemaelementer og støttekomponenter for input, valg og meldinger i FFE. Bruk disse for å bygge tilgjengelige, konsistente skjemaer med riktige etiketter, hjelpetekster og validering.

**Components:** ErrorFieldMessage, InfoFieldMessage, SuccessFieldMessage, Checkbox, Input, ...

[View detailed documentation](./components/form.md)

#### @sb1/ffe-searchable-dropdown-react

Søkbar nedtrekksliste for store eller dynamiske lister. Tilgjengelig som enkeltvalg (`SearchableDropdown`) og flervalg (`SearchableDropdownMultiSelect`). Støtter tastaturnavigasjon, lastestatus, tom-liste og egendefinert render av elementer.

**Components:** SearchableDropdown, SearchableDropdownMultiSelect

[View detailed documentation](./components/searchable-dropdown.md)

### Buttons & Actions

#### @sb1/ffe-buttons-react

Reaktive knapp-komponenter i FFE for handlinger med korrekt visuell hierarki og tilgjengelighetsstøtte. Bruk disse for å kommunisere prioritet (Action, Primary, Secondary, Tertiary), navigasjon (BackButton), utvidelse/visning (Expand/InlineExpand), grupperte knapper og snarveier.

**Components:** ActionButton, BackButton, ButtonGroup, ExpandButton, InlineExpandButton, ...

[View detailed documentation](./components/buttons.md)

### Layout & Structure

#### @sb1/ffe-accordion-react

Kollapsbare seksjoner for å organisere innhold som kan åpnes og lukkes. `Accordion` håndterer gruppeatferd, mens `AccordionItem` representerer hver seksjon.

**Components:** Accordion, AccordionItem

[View detailed documentation](./components/accordion.md)

#### @sb1/ffe-cards-react

Kort-komponenter for presentasjon av innhold med visuelle elementer: tekstkort, ikon-kort, bilde/illustrasjon, grupperte kort og prikkede/stippled kort. `CardBase` er grunnlaget som spesialiserte kortvarianter bygger på.

**Components:** CardBase, TextCard, IconCard, GroupCard, GroupCardElement, ...

[View detailed documentation](./components/cards.md)

#### @sb1/ffe-collapse-react

**Components:** Collapse

[View detailed documentation](./components/collapse.md)

#### @sb1/ffe-tabs-react

Fanekomponenter for å organisere innhold i seksjoner der brukeren kan bytte mellom faner uten å forlate siden. `TabGroup` styrer valgt fane og tilhørende panel, `Tab` representerer hver fane.

**Components:** Tab, TabGroup

[View detailed documentation](./components/tabs.md)

### Feedback & Messages

#### @sb1/ffe-context-message-react

**Components:** ContextInfoMessage, ContextTipsMessage, ContextSuccessMessage, ContextErrorMessage

[View detailed documentation](./components/context-message.md)

#### @sb1/ffe-feedback-react

**Components:** Feedback

[View detailed documentation](./components/feedback.md)

#### @sb1/ffe-message-box-react

Deprecated package. Use `@sb1/ffe-messages-react` for system and context messages, headers, message lists, and message boxes. See the Messages component documentation for up-to-date APIs and examples.

**Components:** SuccessMessage, ErrorMessage, InfoMessage, TipsMessage, InfoMessageList, ...

[View detailed documentation](./components/message-box.md)

#### @sb1/ffe-messages-react

Unified message components for communicating status, tips, and alerts. Use `SystemMessage` for global status, `ContextMessage` for contextual inline feedback (with optional header and close button), and `MessageBox` for framed messages. Compose `MessageHeader` and `MessageList`/`MessageListItem` to structure content. Choose `type` (`info`, `success`, `tips`, `warning`, `error`) to control icon, color, and accessibility roles.

**Components:** SystemMessage, ContextMessage, MessageBox, MessageHeader, MessageList, ...

[View detailed documentation](./components/messages.md)

#### @sb1/ffe-modals-react

Modal-komponenter for korte, fokuserte interaksjoner i webapplikasjoner. Bruk modaler når du trenger å fange brukerens oppmerksomhet for en enkel oppgave, bekreftelse eller informasjon. Ikke bruk modaler på mobil—bruk ark/sheets.

**Components:** Modal, ModalHandle, ModalBlock

[View detailed documentation](./components/modals.md)

#### @sb1/ffe-system-message-react

**Components:** SystemErrorMessage, SystemInfoMessage, SystemNewsMessage, SystemSuccessMessage

[View detailed documentation](./components/system-message.md)

### Navigation & Controls

#### @sb1/ffe-chips-react

**Components:** Chip, ChipRemovable, ChipSelectable

[View detailed documentation](./components/chips.md)

#### @sb1/ffe-pagination-react

**Components:** Pagination, usePagination

[View detailed documentation](./components/pagination.md)

#### @sb1/ffe-tags-react

**Components:** Tag

[View detailed documentation](./components/tags.md)

### Data Display

#### @sb1/ffe-chart-donut-react

**Components:** ChartDonut

[View detailed documentation](./components/chart-donut.md)

#### @sb1/ffe-lists-react

Accessible list components for presenting items, steps, and key–value details. Use bullet, check, or numbered lists for sequences; use description lists for terms and definitions; and use `DetailListCard` for compact card-style summaries. Prefer lists when information benefits from scannability and structure rather than paragraph text.

**Components:** BulletList, BulletListItem, CheckList, CheckListItem, NumberedList, ...

[View detailed documentation](./components/lists.md)

#### @sb1/ffe-progressbar-react

**Components:** Progressbar

[View detailed documentation](./components/progressbar.md)

#### @sb1/ffe-spinner-react

**Components:** Spinner

[View detailed documentation](./components/spinner.md)

#### @sb1/ffe-tables-react

Komponenter for tabeller med semantiske deler (`Table`, `TableHead`, `TableBody`, `TableRow`, `TableHeaderCell`, `TableDataCell`, `TableFoot`, `TableCaption`) og utvidbare rader (`TableRowExpandable`). Brukes for strukturert visning av data i rader og kolonner.

**Components:** Table, TableBody, TableDataCell, TableFoot, TableHead, ...

[View detailed documentation](./components/tables.md)

### Visual Elements

#### @sb1/ffe-badge-react

**Components:** Badge

[View detailed documentation](./components/badge.md)

#### @sb1/ffe-icons-react

Ikonkomponenter for å vise vektorikoner konsistent i FFE. `Icon` støtter valg av ikonnavn, størrelse og dekorasjon, og integreres med ikonsettet i `@sb1/ffe-icons`.

[View detailed documentation](./components/icons.md)

#### @sb1/ffe-shapes-react

**Components:** Wave

[View detailed documentation](./components/shapes.md)

#### @sb1/ffe-symbols-react

**Components:** Symbol

[View detailed documentation](./components/symbols.md)

### Core & Utilities

#### @sb1/ffe-core-react

React-komponenter for typografi og grunnleggende tekstmønstre i FFE. Bruk disse komponentene når du skal rendere overskrifter, avsnitt, lenker og annet tekstinnhold med riktig visuell stil, spacing og semantikk i tråd med SpareBank 1 sitt designsystem.

**Components:** BodyText, DividerLine, EmphasizedText, Heading1, Heading2, ...

[View detailed documentation](./components/core.md)

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
2. Navigate to its component documentation in the components/ folder
3. Review installation, usage, and guidelines

## Additional Resources

- Official documentation: https://design.sparebank1.no/
- GitHub repository: https://github.com/SpareBank1/designsystem
- Component examples: https://sparebank1.github.io/designsystem
