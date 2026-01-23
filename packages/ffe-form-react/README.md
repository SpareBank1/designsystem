# @sb1/ffe-form-react

React module for using and creating FFE form elements.

## Install

```
npm install --save @sb1/ffe-form-react
```

## Usage

Full documentation on form usage is available at https://design.sparebank1.no/komponenter/skjemaelementer/.

This package depends on `@sb1/ffe-icons-react`, `@sb1/ffe-collapse-react` and `@sb1/ffe-form-react`.
Make sure you import the less-files.

## Description

Skjemaelementer og støttekomponenter for input, valg og meldinger i FFE. Bruk disse for å bygge tilgjengelige, konsistente skjemaer med riktige etiketter, hjelpetekster og validering.

## Examples

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

## Development

To start a local development server, run the following from the designsystem root folder:

```bash
npm install
npm run build
npm start
```

A local instance of `Storybook` with live reloading will run at http://localhost:6006/.

Example implementations using the latest versions of all components are also available at https://sparebank1.github.io/designsystem.
