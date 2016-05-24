# ffe-datepicker-react

## Install

```
$ npm install --save ffe-datepicker-react
```

## Usage

```javascript
import React from 'react';
import Datepicker { DateInput } from 'ffe-datepicker-react';

export default function Form() {
  return <form>
    <Datepicker
        value={ this.state.date }
        onChange={this.handleChange}
        language="nb"
        minDate="01.01.2016"
        maxDate="31.12.2016"
    >
        <DateInput
            value={this.state.date}
            onChange={(e) => this.handleChange(e.target.value)}
        />
    </Datepicker>
  </form>
}
```

## Example

To view live example `npm start`

## Still TODO

### Quality
- Full test-coverage
- Visual regression test
- ~~Better documentation
- ~~User-testing for a11y

### Functionality
- ~~Ironing out focus- and dismiss-kinks
- Extracting styles to own package
- ~~Finalize design (pending approval from design)
- Use date-format from existing solution
- ~~Some way of handling formatting errors when inputting date manually
- Pass max-width as a prop

### Nice-to-haves
- Extract simplecalendar to own module
- Inlined styles for easier reuse
- Full standalone with embedded micro-React
- Inline-datepicker (not attached to `<input />`-field)

## Requirements

- ~~i18n
- ~~Show calendar on focus
- Handle various input-formats (dd/mm yyyy, dd/mm, dd.mm.yyyy, dd.mm.yy etc)

### a11y

Requirements for full a11y-compliance:
- https://www.w3.org/TR/wai-aria-practices/#datepicker

Examples:
- https://hanshillen.github.io/jqtest/#goto_datepicker
- http://www.oaa-accessibility.org/examplep/datepicker1/

## Other

Evaluated implementations:
- Pickaday (or variants of it): Not a11y compliant. Lacks ARIA-roles and keyboard navigation
- http://jquense.github.io/react-widgets/docs/#/datetime-picker : Lacks keyboard navigation
- https://hacker0x01.github.io/react-datepicker/ : Lacks keyboard navigation
>>>>>>> Initial implementation
