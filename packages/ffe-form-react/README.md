# @sb1/ffe-form-react

React-modul for å bruke og lage FFE-skjemaelementer.

## Installasjon

```bash
npm install --save @sb1/ffe-form-react
```

## Bruk

Full dokumentasjon er tilgjengelig på https://sparebank1.github.io/designsystem/komponenter/skjemaelementer/.

Denne pakken er avhengig av `@sb1/ffe-icons-react`, `@sb1/ffe-collapse-react` og `@sb1/ffe-form-react`.
Husk å importere less-filene.

## Beskrivelse

Skjemaelementer og støttekomponenter for input, valg og meldinger i FFE. Bruk disse for å bygge tilgjengelige, konsistente skjemaer med riktige etiketter, hjelpetekster og validering.

## Eksempler

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

## Utvikling

For å starte en lokal utviklingsserver, kjør følgende fra designsystem-rotmappen:

```bash
npm install
npm run build
npm start
```

En lokal Storybook-instans med live reloading vil kjøre på http://localhost:6006/.

Eksempelimplementasjoner med de nyeste versjonene av alle komponentene er også tilgjengelige på https://sparebank1.github.io/designsystem.
