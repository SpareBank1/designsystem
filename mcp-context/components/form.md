# @sb1/ffe-form-react

## Description

Skjemaelementer og støttekomponenter for input, valg og meldinger i FFE. Bruk disse for å bygge tilgjengelige, konsistente skjemaer med riktige etiketter, hjelpetekster og validering.

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

## API Reference

### ErrorFieldMessage Props

| Prop | Type | Required | Description |
|------|------|----------|-------------|
| `role` | `BaseFieldMessageProps['role']` | No | - |

### InfoFieldMessage Props

| Prop | Type | Required | Description |
|------|------|----------|-------------|
| `role` | `BaseFieldMessageProps['role']` | No | - |

### SuccessFieldMessage Props

| Prop | Type | Required | Description |
|------|------|----------|-------------|
| `role` | `BaseFieldMessageProps['role']` | No | - |

### Checkbox Props

| Prop | Type | Required | Description |
|------|------|----------|-------------|
| `noMargins` | `boolean` | No | - |
| `hiddenLabel` | `boolean` | No | - |
| `inline` | `boolean` | No | - |
| `className` | `string` | Yes | - |
| `htmlFor` | `string` | Yes | - |

### Input Props

| Prop | Type | Required | Description |
|------|------|----------|-------------|
| `inline` | `boolean` | No | - |
| `textRightAlign` | `boolean` | No | - |

### InputTextLike Props

| Prop | Type | Required | Description |
|------|------|----------|-------------|
| `ariaLabel` | `string` | Yes | - |

### InputGroup Props

| Prop | Type | Required | Description |
|------|------|----------|-------------|
| `inputId` | `string` | No | - |
| `labelId` | `string` | No | - |
| `extraMargin` | `boolean` | No | - |
| `id` | `string` | Yes | - |
| `onColoredBg` | `never` | No | - |

### Label Props

| Prop | Type | Required | Description |
|------|------|----------|-------------|
| `as` | `ElementType` | No | - |
| `block` | `boolean` | No | - |
| `onColoredBg` | `never` | No | - |

### PhoneNumber Props

| Prop | Type | Required | Description |
|------|------|----------|-------------|
| `numberInputProps` | `React.ComponentPropsWithoutRef<'input'>` | No | - |
| `countryCodeInputProps` | `React.ComponentPropsWithoutRef<'input'>` | No | - |
| `locale` | `'nn' | 'nb' | 'en'` | No | - |
| `countryCodeFieldMessage` | `string | React.ReactElement<{ id: string` | No | - |

### PhoneNumberHandle Props

No component-specific props beyond native HTML attributes.

### RadioBlock Props

| Prop | Type | Required | Description |
|------|------|----------|-------------|
| `checked` | `boolean` | No | - |
| `label` | `React.ReactNode` | Yes | - |
| `labelClass` | `string` | No | - |
| `name` | `string` | Yes | - |
| `selectedValue` | `SelectedRadioValue` | No | - |
| `showChildren` | `boolean` | No | - |
| `value` | `string` | Yes | - |

### RadioButton Props

| Prop | Type | Required | Description |
|------|------|----------|-------------|
| `inline` | `boolean` | No | - |
| `onColoredBg` | `never` | No | - |

### RadioButtonInputGroup Props

| Prop | Type | Required | Description |
|------|------|----------|-------------|
| `children` | `(inputProps: {` | Yes | - |
| `inline` | `boolean` | No | - |
| `name` | `string` | Yes | - |
| `onChange` | `React.ChangeEventHandler<HTMLInputElement>` | Yes | - |
| `selectedValue` | `SelectedRadioValue` | No | - |
| `onColoredBg` | `never` | No | - |

### RadioSwitch Props

| Prop | Type | Required | Description |
|------|------|----------|-------------|
| `className` | `string` | No | - |
| `leftLabel` | `string` | Yes | - |
| `leftValue` | `string /** Ref-setting function, or ref created by useRef, passed to the input element */` | Yes | - |
| `leftInnerRef` | `React.Ref<HTMLInputElement>` | No | - |
| `rightLabel` | `string` | Yes | - |
| `rightValue` | `string` | Yes | - |
| `rightInnerRef` | `React.Ref<HTMLInputElement>` | No | - |
| `selectedValue` | `SelectedRadioValue` | No | - |
| `condensed` | `boolean` | No | - |

### TextArea Props

No component-specific props beyond native HTML attributes.

### TextField Props

| Prop | Type | Required | Description |
|------|------|----------|-------------|
| `inline` | `boolean` | No | - |
| `textRightAlign` | `boolean` | No | - |
| `prefix` | `string` | No | - |
| `suffix` | `string` | No | - |

### Tooltip Props

| Prop | Type | Required | Description |
|------|------|----------|-------------|
| `containerProps` | `React.ComponentPropsWithoutRef<'div'>` | No | - |
| `isOpen` | `boolean` | No | - |
| `onColoredBg` | `never` | No | - |

### ToggleSwitch Props

| Prop | Type | Required | Description |
|------|------|----------|-------------|
| `locale` | `'nb' | 'nn' | 'en'` | No | - |
| `description` | `string` | No | - |
| `onText` | `string` | No | - |
| `offText` | `string` | No | - |
| `hideOnOff` | `boolean` | No | - |
| `value` | `string` | No | - |

## Manual Examples (from README)

```tsx
import React from 'react';
import {
    Checkbox,
    Input,
    InputTextLike,
    InputGroup,
    Label,
    PhoneNumber,
    RadioBlock,
    RadioButton,
    RadioButtonInputGroup,
    RadioSwitch,
    TextArea,
    TextField,
    Tooltip,
    ToggleSwitch,
    ErrorFieldMessage,
    InfoFieldMessage,
    SuccessFieldMessage,
} from '@sb1/ffe-form-react';

export function FormDemo() {
    const [value, setValue] = React.useState('');
    const [checked, setChecked] = React.useState(false);
    const [selected, setSelected] = React.useState('a');
    const [toggle, setToggle] = React.useState(false);

    return (
        <form>
            <Label htmlFor="felt">Feltetikett</Label>
            <Input
                id="felt"
                value={value}
                onChange={e => setValue(e.target.value)}
            />
            <ErrorFieldMessage>Dette feltet er obligatorisk</ErrorFieldMessage>

            <TextField
                label="Navn"
                value={value}
                onChange={e => setValue(e.target.value)}
                helpText="Skriv inn fullt navn"
            />

            <InputGroup label="Kontaktinformasjon">
                <PhoneNumber label="Telefon" onChange={() => {}} />
                <InputTextLike as="span">+47</InputTextLike>
            </InputGroup>

            <Checkbox
                checked={checked}
                onChange={e => setChecked(e.target.checked)}
            >
                Godta vilkår
            </Checkbox>

            <RadioButtonInputGroup label="Velg ett">
                <RadioButton
                    value="a"
                    checked={selected === 'a'}
                    onChange={() => setSelected('a')}
                >
                    Alternativ A
                </RadioButton>
                <RadioButton
                    value="b"
                    checked={selected === 'b'}
                    onChange={() => setSelected('b')}
                >
                    Alternativ B
                </RadioButton>
            </RadioButtonInputGroup>

            <RadioSwitch
                leftLabel="Av"
                rightLabel="På"
                checked={toggle}
                onChange={e => setToggle(e.target.checked)}
            />

            <TextArea label="Beskrivelse" rows={3} />

            <Tooltip content="Hjelpetekst">Hold over meg</Tooltip>

            <InfoFieldMessage>
                Vi lagrer ikke sensitiv informasjon
            </InfoFieldMessage>
            <SuccessFieldMessage>Lagret!</SuccessFieldMessage>
        </form>
    );
}
```

## Documentation

Full documentation is available at https://design.sparebank1.no/

## Additional Context

This is part of the SpareBank 1 FFE (Felles Front End) design system.
All components follow SpareBank 1's design guidelines and accessibility standards.
