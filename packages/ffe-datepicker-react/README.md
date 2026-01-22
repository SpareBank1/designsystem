# @sb1/ffe-datepicker-react

## Install

```
npm install --save @sb1/ffe-datepicker-react
```

## Usage

Full documentation on datepicker usage is available at https://design.sparebank1.no/komponenter/skjemaelementer/#datepicker.

This package depends on `@sb1/ffe-form-react` and `@sb1/ffe-icons-react`.
Make sure you import the less-files from these packages.

## Description

Komponenter for dato-inntasting og kalender i FFE. `DateInput` er feltet for manuell inntasting og parsing, `Calendar` viser datoer med tastaturnavigasjon, og `Datepicker` kombinerer input + kalender i én komponent.

## Examples

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

## Requirements

- ~~i18n~~
- ~~Show calendar on focus~~
- ~~Handle various input-formats (see simpledate.test.js)~~
- Validate on blur on the whole component (both the input and the calendar)

### a11y

Requirements for full a11y-compliance:

- https://www.w3.org/TR/wai-aria-practices/#datepicker

Examples:

- https://hanshillen.github.io/jqtest/#goto_datepicker

## Other

Evaluated implementations:

- Pickaday (or variants of it): Not a11y compliant. Lacks ARIA-roles and keyboard navigation
- http://jquense.github.io/react-widgets/docs/#/datetime-picker : Lacks keyboard navigation
- https://hacker0x01.github.io/react-datepicker/ : Lacks keyboard navigation

## Development

To start a local development server, run the following from the designsystem root folder:

```bash
npm install
npm run build
npm start
```

A local instance of `component-overview` with live reloading will run at http://localhost:1234/.

Example implementations using the latest versions of all components are also available at https://sparebank1.github.io/designsystem.
