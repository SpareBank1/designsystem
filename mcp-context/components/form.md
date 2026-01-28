# @sb1/ffe-form-react

## Beskrivelse

Skjemaelementer og støttekomponenter for input, valg og meldinger i FFE. Bruk disse for å bygge tilgjengelige, konsistente skjemaer med riktige etiketter, hjelpetekster og validering.

## Komponenter

Denne pakken eksporterer følgende komponenter:

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

## Installasjon

Installer pakken og alle dens avhengigheter:

```bash
npm install @sb1/ffe-form-react @sb1/ffe-collapse-react @sb1/ffe-form @sb1/ffe-icons-react @sb1/ffe-core @sb1/ffe-buttons @sb1/ffe-icons
```

### Avhengigheter

Denne pakken er avhengig av:

- `@sb1/ffe-collapse-react`
- `@sb1/ffe-form`
- `@sb1/ffe-icons-react`
- `@sb1/ffe-core`
- `@sb1/ffe-buttons`
- `@sb1/ffe-icons`

## CSS-import

I prosjektets hoved-CSS-fil, importer de nødvendige stilene:

```css
@import '@sb1/ffe-core/css/ffe.css';
@import '@sb1/ffe-buttons/css/buttons.css';
@import '@sb1/ffe-collapse-react/css/collapse.css';
@import '@sb1/ffe-form/css/form.css';
@import '@sb1/ffe-icons/css/ffe-icons.css';
```

Merk: Sørg for å importere `@sb1/ffe-core/css/ffe.css` først, da den inneholder grunnleggende stiler.

## API-referanse

### ErrorFieldMessage Props

| Prop | Type | Påkrevd | Beskrivelse |
|------|------|---------|-------------|
| `role` | `BaseFieldMessageProps['role']` | Nei | - |

### InfoFieldMessage Props

| Prop | Type | Påkrevd | Beskrivelse |
|------|------|---------|-------------|
| `role` | `BaseFieldMessageProps['role']` | Nei | - |

### SuccessFieldMessage Props

| Prop | Type | Påkrevd | Beskrivelse |
|------|------|---------|-------------|
| `role` | `BaseFieldMessageProps['role']` | Nei | - |

### Checkbox Props

| Prop | Type | Påkrevd | Beskrivelse |
|------|------|---------|-------------|
| `noMargins` | `boolean` | Nei | Removes vertical margins from the checkbox |
| `hiddenLabel` | `boolean` | Nei | If you plan to render the checkbox without a visible label |
| `inline` | `boolean` | Nei | Display inline |
| `children` | `function` | Ja | - |

### Input Props

| Prop | Type | Påkrevd | Beskrivelse |
|------|------|---------|-------------|
| `textRightAlign` | `boolean` | Nei | Make the text right aligned |

### InputTextLike Props

| Prop | Type | Påkrevd | Beskrivelse |
|------|------|---------|-------------|
| `ariaLabel` | `string` | Ja | - |

### InputGroup Props

| Prop | Type | Påkrevd | Beskrivelse |
|------|------|---------|-------------|
| `inputId` | `string` | Nei | The id that will be used on the input child if you don't want a generated one |
| `labelId` | `string` | Nei | The id used on the label in this component. Could be necessary if your component needs a aria-labelledby. |
| `children` | `function` | Ja | Unless you only have one element in your `InputGroup` you will have to use the function-as-a-child pattern. |
| `extraMargin` | `boolean` | Nei | Reserve space for showing `fieldMessage`s so content below don't move vertically if an errormessage shows up. Note that this will only reserve space for one line of content, so keep messages short. |
| `fieldMessage` | `React.ComponentType` | Nei | Use the ErrorFieldMessage component if you need more flexibility in how the content is rendered. |
| `description` | `string | React.ReactElement` | Nei | To just render a static, always visible tooltip, use this. |
| `label` | `React.ComponentType` | Nei | Use the Label component if you need more flexibility in how the content is rendered. |
| `onTooltipToggle` | `TooltipProps['onClick']` | Nei | - |
| `tooltip` | `React.ReactNode` | Nei | Use the Tooltip component if you need more flexibility in how the content is rendered. |

### Label Props

| Prop | Type | Påkrevd | Beskrivelse |
|------|------|---------|-------------|
| `as` | `ElementType` | Nei | - |

### PhoneNumber Props

| Prop | Type | Påkrevd | Beskrivelse |
|------|------|---------|-------------|
| `numberInputProps` | `React.ComponentPropsWithoutRef<'input'>` | Nei | - |
| `countryCodeInputProps` | `React.ComponentPropsWithoutRef<'input'>` | Nei | - |
| `locale` | `'nn' | 'nb' | 'en'` | Nei | - |
| `countryCodeFieldMessage` | `React.ComponentType` | Nei | String or ErrorFieldMessage component with message |
| `numberFieldMessage` | `React.ComponentType` | Nei | String or ErrorFieldMessage component with message |
| `countryCodeAndNumberFieldMessage` | `React.ComponentType` | Nei | String or ErrorFieldMessage component with message, this should be set when both countryCode and number is in an invalid state. If both countryCodeFieldMessage and numberFieldMessage is set and not this prop, the component will throw an Error. |
| `className` | `string` | Nei | - |
| `extraMargin` | `boolean` | Nei | Reserve space for showing `fieldMessage`s so content below don't move vertically if an errormessage shows up. Note that this will only reserve space for one line of content, so keep messages short. |
| `isMobileNumber` | `boolean` | Nei | If True label is changed from "Phone number" to "Mobile number" |

### PhoneNumberHandle Props

Ingen komponentspesifikke props utover native HTML-attributter.

### RadioBlock Props

| Prop | Type | Påkrevd | Beskrivelse |
|------|------|---------|-------------|
| `checked` | `boolean` | Nei | Whether the radio block is selected |
| `label` | `React.ReactNode` | Ja | The always visible label of the radio block |
| `labelClass` | `string` | Nei | Additional class names applied to the label element |
| `name` | `string` | Ja | The name of the radio button set |
| `selectedValue` | `SelectedRadioValue` | Nei | The selected value of the radio button set |
| `showChildren` | `boolean` | Nei | Whether children are always visible |
| `value` | `string` | Ja | The value of the radio block |

### RadioButton Props

| Prop | Type | Påkrevd | Beskrivelse |
|------|------|---------|-------------|
| `inline` | `boolean` | Nei | Indicates whether the radio button is rendered inline or as a block |

### RadioButtonInputGroup Props

| Prop | Type | Påkrevd | Beskrivelse |
|------|------|---------|-------------|
| `children` | `function` | Ja | Function receiving props relevant to each radio button as an object argument. Expected to return a set of radio buttons, which should get these properties applied to them. |
| `className` | `string` | Nei | Additional class names applied to the fieldset |
| `description` | `React.ReactNode` | Nei | To just render a static, always visible tooltip, use this. |
| `extraMargin` | `boolean` | Nei | Reserve space for showing `fieldMessage`s so content below don't move vertically if an errormessage shows up. Note that this will only reserve space for one line of content, so keep messages short. |
| `fieldMessage` | `React.ComponentType` | Nei | String or ErrorFieldMessage component with message |
| `inline` | `boolean` | Nei | Indicates whether the radio buttons inside this radio button group is rendered inline or as a block. |
| `label` | `React.ReactNode` | Nei | The text describing the radio button set. Note that if you don't use this prop but provide your own label you should make sure your solution passes acessibility validation using a tool such as aXe DevTools. |
| `name` | `string` | Ja | The name of the radio button, required to avoid missing name |
| `onChange` | `React.ChangeEventHandler<HTMLInputElement>` | Nei | Change handler, receives value of selected radio button |
| `selectedValue` | `SelectedRadioValue` | Nei | The currently selected value |
| `tooltip` | `React.ReactNode` | Nei | String or Tooltip component with further detail about the radio button set |

### RadioSwitch Props

| Prop | Type | Påkrevd | Beskrivelse |
|------|------|---------|-------------|
| `className` | `string` | Nei | Additional class names applied to both radio buttons |
| `leftLabel` | `string` | Ja | The label of the choice to the left |
| `leftValue` | `string /** Ref-setting function, or ref created by useRef...` | Ja | The value of the choice to the left |
| `leftInnerRef` | `React.Ref<HTMLInputElement>` | Nei | Ref to left radio |
| `rightLabel` | `string` | Ja | The label of the choice to the right |
| `rightValue` | `string` | Ja | The value of the choice to the right |
| `rightInnerRef` | `React.Ref<HTMLInputElement>` | Nei | Ref to right radio |
| `selectedValue` | `SelectedRadioValue` | Nei | The selected value of the radio button set |
| `condensed` | `boolean` | Nei | Condensed modifier. Use in condensed designs |

### TextArea Props

Ingen komponentspesifikke props utover native HTML-attributter.

### TextField Props

| Prop | Type | Påkrevd | Beskrivelse |
|------|------|---------|-------------|
| `textRightAlign` | `boolean` | Nei | Make the text right aligned |
| `prefix` | `string` | Nei | Add a prefix inside the input |
| `suffix` | `string` | Nei | Add a suffix inside the input |

### Tooltip Props

| Prop | Type | Påkrevd | Beskrivelse |
|------|------|---------|-------------|
| `containerProps` | `React.ComponentPropsWithoutRef<'div'>` | Nei | - |
| `isOpen` | `boolean` | Nei | - |

### ToggleSwitch Props

| Prop | Type | Påkrevd | Beskrivelse |
|------|------|---------|-------------|
| `locale` | `'nb' | 'nn' | 'en'` | Nei | A second line of text in the label |
| `description` | `string` | Nei | On/Off text language |
| `onText` | `string` | Nei | Custom text to specify the on-option |
| `offText` | `string` | Nei | Custom text to specify the off-option |
| `hideOnOff` | `boolean` | Nei | Hide On & Off labels next to switch |
| `value` | `string` | Nei | Override the value attribute of the input with a custom one |

## Eksempler (fra README)

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

## Dokumentasjon

Full dokumentasjon er tilgjengelig på https://design.sparebank1.no/

## Tilleggskontekst

Dette er en del av SpareBank 1 FFE (Felles Front End) designsystem.
Alle komponenter følger SpareBank 1s designretningslinjer og tilgjengelighetsstandarder.
