# @sb1/ffe-datepicker-react

## Description

Komponenter for dato-inntasting og kalender i FFE. `DateInput` er feltet for manuell inntasting og parsing, `Calendar` viser datoer med tastaturnavigasjon, og `Datepicker` kombinerer input + kalender i én komponent.

## Components

This package exports the following components:

- `Datepicker`
- `getDatepickerByLabelText`
- `DateInput`
- `Calendar`

## Installation

Install the package and all its dependencies:

```bash
npm install @sb1/ffe-datepicker-react @sb1/ffe-datepicker @sb1/ffe-dropdown-react @sb1/ffe-form @sb1/ffe-form-react @sb1/ffe-icons-react @sb1/ffe-core @sb1/ffe-buttons @sb1/ffe-collapse-react @sb1/ffe-icons
```

### Dependencies

This package depends on:

- `@sb1/ffe-datepicker`
- `@sb1/ffe-dropdown-react`
- `@sb1/ffe-form`
- `@sb1/ffe-form-react`
- `@sb1/ffe-icons-react`
- `@sb1/ffe-core`
- `@sb1/ffe-buttons`
- `@sb1/ffe-collapse-react`
- `@sb1/ffe-icons`

## CSS Import

In your project's main CSS file, import the required styles:

```css
@import '@sb1/ffe-core/css/ffe.css';
@import '@sb1/ffe-buttons/css/buttons.css';
@import '@sb1/ffe-collapse-react/css/collapse.css';
@import '@sb1/ffe-datepicker/css/datepicker.css';
@import '@sb1/ffe-form/css/form.css';
@import '@sb1/ffe-icons/css/ffe-icons.css';
```

Note: Make sure to import `@sb1/ffe-core/css/ffe.css` first as it contains base styles.

## API Reference

### Datepicker Props

| Prop | Type | Required | Description |
|------|------|----------|-------------|
| `value` | `string` | Yes | - |
| `locale` | `Locale` | Yes | - |

### getDatepickerByLabelText Props

No component-specific props beyond native HTML attributes.

### DateInput Props

| Prop | Type | Required | Description |
|------|------|----------|-------------|
| `ariaInvalid` | `string` | Yes | - |
| `value` | `string` | Yes | - |
| `locale` | `'nb' | 'nn' | 'en'` | Yes | - |

### Calendar Props

| Prop | Type | Required | Description |
|------|------|----------|-------------|
| `calendarClassName` | `string` | No | - |
| `escKeyHandler` | `React.KeyboardEventHandler<HTMLDivElement>` | No | - |
| `locale` | `'nb' | 'nn' | 'en'` | Yes | - |
| `onDatePicked` | `(date: string) => void` | Yes | - |
| `selectedDate` | `string | null` | No | - |
| `focusOnMount` | `boolean` | No | - |
| `dropdownCaption` | `boolean` | No | - |
| `minDate` | `string | null` | No | - |
| `maxDate` | `string | null` | No | - |
| `disabledDates` | `string[]` | No | - |

## Manual Examples (from README)

```tsx
import React from 'react';
import { Datepicker, DateInput, Calendar } from '@sb1/ffe-datepicker-react';

export function DatepickerDemo() {
    const [value, setValue] = React.useState('');
    return (
        <div>
            {/* Kombinert input + kalender */}
            <Datepicker value={value} onChange={setValue} label="Velg dato" />

            {/* Kun input-felt */}
            <DateInput
                value={value}
                onChange={setValue}
                label="Dato"
                placeholder="dd.mm.åååå"
            />

            {/* Frittstående kalender */}
            <Calendar
                selectedDate={new Date()}
                onDateSelected={d => console.log('Valgt', d)}
            />
        </div>
    );
}
```

## Documentation

Full documentation is available at https://design.sparebank1.no/

## Additional Context

This is part of the SpareBank 1 FFE (Felles Front End) design system.
All components follow SpareBank 1's design guidelines and accessibility standards.
