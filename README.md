# ffe-datepicker-react

A React datepicker for ffe.
The package contains 3 modules. Example usage described below.

## Install

```
$ npm install --save ffe-datepicker-react
```

## Usage

### <Datepicker />
This will give you an input field and a calendar to pick dates from.
```javascript
import React from 'react';
import Datepicker from 'ffe-datepicker-react';

export default function Form() {
  return <form>
    <Datepicker
        value={ this.state.date }
        onChange={ this.onChange }
        label={ 'A label' }
        language="nb"
        minDate="01.01.2016"
        maxDate="31.12.2016"
        inputProps={ { className: 'customClass', id: 'custom-input-id' } }
        ariaInvalid={ false }
    />
  </form>
}
```
* value: the input field value. Can be used to set an initial date.
* onChange: will be called with the new date string, picked from the calendar. format: dd.mm.yyyy
* inputProps: props to set on the input field.
* ariaInvalid: signifies validation errors.
* label: Optional. Adds a lable formated by .ffe-form-label

### <DateInput />
Use only the input field
```javascript
import React from 'react';
import DateInput from 'ffe-datepicker-react';

export default function Form() {
  return <form>
    <DateInput
        onFocus={ this.onInputFocus }
        onChange={ (evt) => this.props.onChange(evt.target.value) }
        onKeyDown={ this.onInputKeydown }
        value={ this.props.value }
        inputProps={ this.props.inputProps }
        ariaInvalid={ false }
    />
  </form>
}
```

### <Calendar />
Use only the calendar
```javascript
import React from 'react';
import Calendar from 'ffe-datepicker-react';

export default function Form() {
  return <Calendar
            onDatePicked={ this.datePickedHandler }
            onBlurHandler={ this.blurHandler }
            language={ this.props.language }
            selectedDate={ this.props.value }
            minDate={ this.props.minDate }
            maxDate={ this.props.maxDate }
            calendarClassName="ffe-calendar"
        />
}
```

## Styles
You must also import the styles
```css
@import "node_modules/ffe-form/less/form.less";
@import "node_modules/ffe-datepicker-react/index.less";
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
- Validate on blur on the whole component (both the input and the calendar)

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
