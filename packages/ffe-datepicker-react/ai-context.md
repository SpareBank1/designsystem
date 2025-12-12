# @sb1/ffe-datepicker-react

## Description

React component library for SpareBank 1 Design System.

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

## Basic Usage

```typescript
import { Datepicker, getDatepickerByLabelText, DateInput, ... } from '@sb1/ffe-datepicker-react';

function MyComponent() {
  return (
    <Datepicker>
      {/* Component content */}
    </Datepicker>
  );
}
```

## Documentation

Full documentation is available at https://design.sparebank1.no/

## Additional Context

This is part of the SpareBank 1 FFE (Felles Front End) design system.
All components follow SpareBank 1's design guidelines and accessibility standards.
