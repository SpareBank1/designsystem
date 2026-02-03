# @sb1/ffe-form-react

## Beskrivelse

Skjemaelementer for input, valg og meldinger. Bygger tilgjengelige skjemaer med etiketter, hjelpetekster og validering.

## Installasjon

```bash
npm install --save @sb1/ffe-form-react
```

## Bruk

Full dokumentasjon: https://sparebank1.github.io/designsystem/

Avhengigheter: `@sb1/ffe-icons-react`, `@sb1/ffe-collapse-react`. Importer CSS:

```css
@import url('@sb1/ffe-form/css/ffe-form.css');
@import url('@sb1/ffe-icons/css/ffe-icons.css');
@import url('@sb1/ffe-collapse/css/ffe-collapse.css');
```

### Eksporterte komponenter

| Komponent               | Beskrivelse                                                                 |
| ----------------------- | --------------------------------------------------------------------------- |
| `Input`                 | Enkel input-felt for tekst. Brukes inne i InputGroup.                       |
| `TextField`             | Input-felt med prefix og suffix. Brukes inne i InputGroup.                  |
| `TextArea`              | Flerlinjet tekstfelt. Brukes inne i InputGroup.                             |
| `InputGroup`            | Wrapper som kombinerer label, input, tooltip, beskrivelse og feilmeldinger. |
| `InputTextLike`         | Input-felt som ser ut som vanlig tekst (uten synlig ramme).                 |
| `Label`                 | Skjemaetikett for input-elementer.                                          |
| `Checkbox`              | Avkrysningsboks. Label angis som children.                                  |
| `RadioButton`           | Enkeltstående radioknapp. Brukes inne i RadioButtonInputGroup.              |
| `RadioButtonInputGroup` | Wrapper for en gruppe med radioknapper med felles label og validering.      |
| `RadioSwitch`           | To radioknapper side om side (venstre/høyre valg).                          |
| `RadioBlock`            | Radioknapp som stor blokk med plass til ekstra innhold.                     |
| `PhoneNumber`           | Kombinert felt for landskode og telefonnummer.                              |
| `ToggleSwitch`          | Av/på-bryter med label.                                                     |
| `Tooltip`               | Hjelpetekst-ikon som kan utvides ved klikk.                                 |
| `ErrorFieldMessage`     | Viser feilmelding med ikon.                                                 |
| `InfoFieldMessage`      | Viser informasjonsmelding med ikon.                                         |
| `SuccessFieldMessage`   | Viser suksessmelding med ikon.                                              |

## Eksempler

### Input med InputGroup (anbefalt mønster)

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

### TextField med prefix og suffix

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

### TextArea

```tsx
import { InputGroup, TextArea } from '@sb1/ffe-form-react';

<InputGroup label="Beskrivelse">
    <TextArea value={text} onChange={e => setText(e.target.value)} rows={4} />
</InputGroup>;
```

### Checkbox

```tsx
import { Checkbox } from '@sb1/ffe-form-react';

<Checkbox checked={accepted} onChange={e => setAccepted(e.target.checked)}>
    Jeg godtar vilkårene
</Checkbox>;
```

### RadioButtonInputGroup med RadioButton

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

### RadioSwitch

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

### RadioBlock

```tsx
import { RadioButtonInputGroup, RadioBlock } from '@sb1/ffe-form-react';

<RadioButtonInputGroup
    label="Velg abonnement"
    name="sub"
    selectedValue={sel}
    onChange={e => setSel(e.target.value)}
>
    {inputProps => (
        <>
            <RadioBlock {...inputProps} label="Standard" value="standard">
                <p>Grunnleggende funksjoner</p>
            </RadioBlock>
            <RadioBlock
                {...inputProps}
                label="Premium"
                value="premium"
                showChildren={true}
            >
                <p>Alle funksjoner</p>
            </RadioBlock>
        </>
    )}
</RadioButtonInputGroup>;
```

### PhoneNumber

```tsx
import { PhoneNumber } from '@sb1/ffe-form-react';

<PhoneNumber
    countryCodeInputProps={{
        value: code,
        onChange: e => setCode(e.target.value),
    }}
    numberInputProps={{ value: num, onChange: e => setNum(e.target.value) }}
    numberFieldMessage={error}
    locale="nb"
/>;
```

### ToggleSwitch

```tsx
import { ToggleSwitch } from '@sb1/ffe-form-react';

<ToggleSwitch checked={enabled} onChange={e => setEnabled(e.target.checked)}>
    Aktiver varsler
</ToggleSwitch>;
```

### Tooltip

```tsx
import { Label, Tooltip, Input } from '@sb1/ffe-form-react';

<Label htmlFor="account">
    Kontonummer
    <Tooltip>Kontonummeret finner du på kontoutskriften</Tooltip>
</Label>
<Input id="account" />
```

### Feilmeldinger (FieldMessage-komponenter)

```tsx
import { ErrorFieldMessage, InfoFieldMessage, SuccessFieldMessage } from '@sb1/ffe-form-react';

<ErrorFieldMessage>Dette feltet er obligatorisk</ErrorFieldMessage>
<InfoFieldMessage>Vi lagrer ikke sensitiv informasjon</InfoFieldMessage>
<SuccessFieldMessage>Endringene er lagret</SuccessFieldMessage>
```

### InputTextLike

```tsx
import { InputTextLike } from '@sb1/ffe-form-react';

<InputTextLike
    ariaLabel="Rediger tittel"
    defaultValue="Klikk for å redigere"
/>;
```

### Label (frittstående)

```tsx
import { Label, Input } from '@sb1/ffe-form-react';

<Label htmlFor="my-input">Feltetikett</Label>
<Input id="my-input" />
```

## Utvikling

```bash
npm install && npm run build && npm start
```

Lokal Storybook kjører på http://localhost:6006/.
