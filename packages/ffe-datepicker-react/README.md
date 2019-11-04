# @sb1/ffe-datepicker-react

## Install

```
npm install --save @sb1/ffe-datepicker-react
```

## Usage

Run Styleguidist from the repository root to see live examples and documentation,
or see the markdown files next to the component code in `src/`.

## TypeScript definition files

This component supports TypeScript - please keep in mind updating `index.d.ts` if you change any
of the external methods or properties in this component.

## Requirements

-   ~~i18n~~
-   ~~Show calendar on focus~~
-   ~~Handle various input-formats (see simpledate.test.js)~~
-   Validate on blur on the whole component (both the input and the calendar)

### a11y

Requirements for full a11y-compliance:

-   https://www.w3.org/TR/wai-aria-practices/#datepicker

Examples:

-   https://hanshillen.github.io/jqtest/#goto_datepicker
-   http://www.oaa-accessibility.org/examplep/datepicker1/

## Other

Evaluated implementations:

-   Pickaday (or variants of it): Not a11y compliant. Lacks ARIA-roles and keyboard navigation
-   http://jquense.github.io/react-widgets/docs/#/datetime-picker : Lacks keyboard navigation
-   https://hacker0x01.github.io/react-datepicker/ : Lacks keyboard navigation
