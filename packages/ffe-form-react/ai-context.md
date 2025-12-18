# @sb1/ffe-form-react

## Description

Checkbox brukes der du har 4 eller færre valgalternativer, og du vil gi brukeren muligheten til å velge mer enn ett alternativ.

## Components

This package exports the following components:

- `ErrorFieldMessage`
- `InfoFieldMessage`
- `SuccessFieldMessage`
- `Checkbox`
- `Input`
- `InputTextLike`
- `InputGroup`
- `Label`
- `PhoneNumber`
- `PhoneNumberHandle`
- `RadioBlock`
- `RadioButton`
- `RadioButtonInputGroup`
- `RadioSwitch`
- `TextArea`
- `TextField`
- `Tooltip`
- `ToggleSwitch`

## Installation

Install the package and all its dependencies:

```bash
npm install @sb1/ffe-form-react @sb1/ffe-collapse-react @sb1/ffe-form @sb1/ffe-icons-react @sb1/ffe-core @sb1/ffe-buttons @sb1/ffe-icons
```

### Dependencies

This package depends on:

- `@sb1/ffe-collapse-react`
- `@sb1/ffe-form`
- `@sb1/ffe-icons-react`
- `@sb1/ffe-core`
- `@sb1/ffe-buttons`
- `@sb1/ffe-icons`

## CSS Import

In your project's main CSS file, import the required styles:

```css
@import '@sb1/ffe-core/css/ffe.css';
@import '@sb1/ffe-buttons/css/buttons.css';
@import '@sb1/ffe-collapse-react/css/collapse.css';
@import '@sb1/ffe-form/css/form.css';
@import '@sb1/ffe-icons/css/ffe-icons.css';
```

Note: Make sure to import `@sb1/ffe-core/css/ffe.css` first as it contains base styles.

## Basic Usage

```typescript
import { ErrorFieldMessage, InfoFieldMessage, SuccessFieldMessage, ... } from '@sb1/ffe-form-react';

function MyComponent() {
  const [value, setValue] = useState('');

  return (
    <ErrorFieldMessage
      value={value}
      onChange={(e) => setValue(e.target.value)}
      label="Input label"
    />
  );
}
```

## API Reference

### BaseRadioButton Props

| Prop            | Type                            | Required | Description |
| --------------- | ------------------------------- | -------- | ----------- |
| `labelProps`    | `React.ComponentProps<'label'>` | No       | -           |
| `selectedValue` | `SelectedRadioValue`            | No       | -           |
| `value`         | `string`                        | Yes      | -           |
| `tooltip`       | `string`                        | No       | -           |
| `tooltipProps`  | `TooltipProps`                  | No       | -           |

### Checkbox Props

| Prop          | Type      | Required | Description |
| ------------- | --------- | -------- | ----------- |
| `noMargins`   | `boolean` | No       | -           |
| `hiddenLabel` | `boolean` | No       | -           |
| `inline`      | `boolean` | No       | -           |
| `labelProps`  | `{`       | Yes      | -           |
| `className`   | `string`  | Yes      | -           |
| `htmlFor`     | `string`  | Yes      | -           |

### Input Props

| Prop             | Type      | Required | Description |
| ---------------- | --------- | -------- | ----------- |
| `display`        | `block`   | Yes      | -           |
| `inline`         | `boolean` | No       | -           |
| `textRightAlign` | `boolean` | No       | -           |

### InputGroup Props

| Prop          | Type                                                                                                                  | Required | Description |
| ------------- | --------------------------------------------------------------------------------------------------------------------- | -------- | ----------- |
| `inputId`     | `string`                                                                                                              | No       | -           |
| `labelId`     | `string`                                                                                                              | No       | -           |
| `extraProps`  | `ChildrenExtraProps) => React.ReactNode)`                                                                             | Yes      | -           |
| `extraMargin` | `boolean`                                                                                                             | No       | -           |
| `id`          | `string`                                                                                                              | Yes      | -           |
| `https`       | `//sparebank1.github.io/designsystem/?path=/docs/introduksjon-changelog--docs#2025---februar---semantiske-farger) */` | Yes      | -           |
| `onColoredBg` | `never`                                                                                                               | No       | -           |

### InputTextLike Props

| Prop        | Type     | Required | Description |
| ----------- | -------- | -------- | ----------- |
| `ariaLabel` | `string` | Yes      | -           |

### Label Props

| Prop          | Type                                                                                                                  | Required | Description |
| ------------- | --------------------------------------------------------------------------------------------------------------------- | -------- | ----------- |
| `as`          | `ElementType`                                                                                                         | No       | -           |
| `display`     | `inline-block`                                                                                                        | Yes      | -           |
| `display`     | `block`                                                                                                               | Yes      | -           |
| `block`       | `boolean`                                                                                                             | No       | -           |
| `https`       | `//sparebank1.github.io/designsystem/?path=/docs/introduksjon-changelog--docs#2025---februar---semantiske-farger) */` | Yes      | -           |
| `onColoredBg` | `never`                                                                                                               | No       | -           |

### PhoneNumber Props

| Prop                      | Type                                      | Required                         | Description |
| ------------------------- | ----------------------------------------- | -------------------------------- | ----------- | --- | --- |
| `numberInputProps`        | `React.ComponentPropsWithoutRef<'input'>` | No                               | -           |
| `countryCodeInputProps`   | `React.ComponentPropsWithoutRef<'input'>` | No                               | -           |
| `locale`                  | `'nn'                                     | 'nb'                             | 'en'`       | No  | -   |
| `countryCodeFieldMessage` | `string                                   | React.ReactElement<{ id: string` | No          | -   |

### RadioBlock Props

| Prop            | Type                 | Required | Description |
| --------------- | -------------------- | -------- | ----------- |
| `checked`       | `boolean`            | No       | -           |
| `label`         | `React.ReactNode`    | Yes      | -           |
| `labelClass`    | `string`             | No       | -           |
| `name`          | `string`             | Yes      | -           |
| `selectedValue` | `SelectedRadioValue` | No       | -           |
| `showChildren`  | `boolean`            | No       | -           |
| `value`         | `string`             | Yes      | -           |

### RadioButton Props

| Prop          | Type                                                                                                                  | Required | Description |
| ------------- | --------------------------------------------------------------------------------------------------------------------- | -------- | ----------- |
| `inline`      | `boolean`                                                                                                             | No       | -           |
| `https`       | `//sparebank1.github.io/designsystem/?path=/docs/introduksjon-changelog--docs#2025---februar---semantiske-farger) */` | Yes      | -           |
| `onColoredBg` | `never`                                                                                                               | No       | -           |

### RadioButtonInputGroup Props

| Prop            | Type                                                                                                                  | Required | Description |
| --------------- | --------------------------------------------------------------------------------------------------------------------- | -------- | ----------- |
| `children`      | `(inputProps: {`                                                                                                      | Yes      | -           |
| `inline`        | `boolean`                                                                                                             | No       | -           |
| `name`          | `string`                                                                                                              | Yes      | -           |
| `onChange`      | `React.ChangeEventHandler<HTMLInputElement>`                                                                          | Yes      | -           |
| `selectedValue` | `SelectedRadioValue`                                                                                                  | No       | -           |
| `https`         | `//sparebank1.github.io/designsystem/?path=/docs/introduksjon-changelog--docs#2025---februar---semantiske-farger) */` | Yes      | -           |
| `onColoredBg`   | `never`                                                                                                               | No       | -           |

### RadioSwitch Props

| Prop            | Type                                                                                        | Required | Description |
| --------------- | ------------------------------------------------------------------------------------------- | -------- | ----------- |
| `className`     | `string`                                                                                    | No       | -           |
| `leftLabel`     | `string`                                                                                    | Yes      | -           |
| `leftValue`     | `string /** Ref-setting function, or ref created by useRef, passed to the input element */` | Yes      | -           |
| `leftInnerRef`  | `React.Ref<HTMLInputElement>`                                                               | No       | -           |
| `rightLabel`    | `string`                                                                                    | Yes      | -           |
| `rightValue`    | `string`                                                                                    | Yes      | -           |
| `rightInnerRef` | `React.Ref<HTMLInputElement>`                                                               | No       | -           |
| `selectedValue` | `SelectedRadioValue`                                                                        | No       | -           |
| `condensed`     | `boolean`                                                                                   | No       | -           |

### TextField Props

| Prop             | Type      | Required | Description |
| ---------------- | --------- | -------- | ----------- |
| `display`        | `block`   | Yes      | -           |
| `inline`         | `boolean` | No       | -           |
| `textRightAlign` | `boolean` | No       | -           |
| `prefix`         | `string`  | No       | -           |
| `suffix`         | `string`  | No       | -           |

### ToggleSwitch Props

| Prop          | Type      | Required | Description |
| ------------- | --------- | -------- | ----------- | --- | --- |
| `locale`      | `'nb'     | 'nn'     | 'en'`       | No  | -   |
| `description` | `string`  | No       | -           |
| `onText`      | `string`  | No       | -           |
| `offText`     | `string`  | No       | -           |
| `hideOnOff`   | `boolean` | No       | -           |
| `value`       | `string`  | No       | -           |

### Tooltip Props

| Prop             | Type                                                                                                                  | Required | Description |
| ---------------- | --------------------------------------------------------------------------------------------------------------------- | -------- | ----------- |
| `containerProps` | `React.ComponentPropsWithoutRef<'div'>`                                                                               | No       | -           |
| `isOpen`         | `boolean`                                                                                                             | No       | -           |
| `https`          | `//sparebank1.github.io/designsystem/?path=/docs/introduksjon-changelog--docs#2025---februar---semantiske-farger) */` | Yes      | -           |
| `onColoredBg`    | `never`                                                                                                               | No       | -           |

## Documentation

Full documentation is available at https://design.sparebank1.no/

## Additional Context

This is part of the SpareBank 1 FFE (Felles Front End) design system.
All components follow SpareBank 1's design guidelines and accessibility standards.
