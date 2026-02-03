# @sb1/ffe-form-react

## Beskrivelse

Skjemaelementer for input, valg og meldinger. Bygger tilgjengelige skjemaer med etiketter, hjelpetekster og validering.

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
npm install @sb1/ffe-form-react
```

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
import { InputGroup, Input } from '@sb1/ffe-form-react';

function InputExample() {
    const [value, setValue] = useState('');
    const [error, setError] = useState<string | null>(null);

    return (
        <InputGroup
            label="Fullt navn"
            description="Skriv inn for- og etternavn"
            fieldMessage={error}
        >
            <Input
                value={value}
                onChange={e => setValue(e.target.value)}
                onBlur={() => setError(!value ? 'Obligatorisk' : null)}
            />
        </InputGroup>
    );
}
```

```tsx
import { InputGroup, TextField } from '@sb1/ffe-form-react';

<InputGroup label="Beløp">
    <TextField
        value={amount}
        onChange={e => setAmount(e.target.value)}
        suffix="kr"
        textRightAlign={true}
    />
</InputGroup>;
```

```tsx
import { InputGroup, TextArea } from '@sb1/ffe-form-react';

<InputGroup label="Beskrivelse">
    <TextArea value={text} onChange={e => setText(e.target.value)} rows={4} />
</InputGroup>;
```

```tsx
import { Checkbox } from '@sb1/ffe-form-react';

<Checkbox checked={accepted} onChange={e => setAccepted(e.target.checked)}>
    Jeg godtar vilkårene
</Checkbox>;
```

```tsx
import { RadioButtonInputGroup, RadioButton } from '@sb1/ffe-form-react';

<RadioButtonInputGroup
    label="Velg alternativ"
    name="my-group"
    selectedValue={selected}
    onChange={e => setSelected(e.target.value)}
>
    {inputProps => (
        <>
            <RadioButton {...inputProps} value="a">
                Alternativ A
            </RadioButton>
            <RadioButton {...inputProps} value="b">
                Alternativ B
            </RadioButton>
        </>
    )}
</RadioButtonInputGroup>;
```

```tsx
import { RadioButtonInputGroup, RadioSwitch } from '@sb1/ffe-form-react';

<RadioButtonInputGroup
    label="Er du over 18?"
    name="age"
    selectedValue={val}
    onChange={e => setVal(e.target.value)}
>
    {inputProps => (
        <RadioSwitch
            {...inputProps}
            leftLabel="Ja"
            leftValue="yes"
            rightLabel="Nei"
            rightValue="no"
        />
    )}
</RadioButtonInputGroup>;
```

## Dokumentasjon

Full dokumentasjon er tilgjengelig på https://sparebank1.github.io/designsystem/

## Tilleggskontekst

Dette er en del av SpareBank 1 FFE (Felles Front End) designsystem.
Alle komponenter følger SpareBank 1s designretningslinjer og tilgjengelighetsstandarder.
