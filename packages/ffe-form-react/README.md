# @sb1/ffe-form-react

React-modul for å bruke og lage FFE-skjemaelementer.

## Installasjon

```bash
npm install --save @sb1/ffe-form-react
```

## Bruk

Full dokumentasjon er tilgjengelig på https://sparebank1.github.io/designsystem/komponenter/skjemaelementer/.

Denne pakken er avhengig av `@sb1/ffe-icons-react`, `@sb1/ffe-collapse-react` og `@sb1/ffe-form`.
Husk å importere less-filene.

## Beskrivelse

Skjemaelementer og støttekomponenter for input, valg og meldinger i FFE. Bruk disse for å bygge tilgjengelige, konsistente skjemaer med riktige etiketter, hjelpetekster og validering.

### Eksporterte komponenter

| Komponent               | Beskrivelse                                                                 |
| ----------------------- | --------------------------------------------------------------------------- |
| `Input`                 | Enkel input-felt for tekst. Brukes vanligvis inne i InputGroup.             |
| `TextField`             | Input-felt med støtte for prefix og suffix. Brukes inne i InputGroup.       |
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
| `ErrorFieldMessage`     | Viser feilmelding med ikon. Brukes for validering.                          |
| `InfoFieldMessage`      | Viser informasjonsmelding med ikon.                                         |
| `SuccessFieldMessage`   | Viser suksessmelding med ikon.                                              |

## Eksempler

### Input med InputGroup (anbefalt mønster)

`InputGroup` er hovedkomponenten for å bygge skjemafelt. Den kombinerer label, input, beskrivelse, tooltip og feilmeldinger.

```tsx
import React, { useState } from 'react';
import { InputGroup, Input, ErrorFieldMessage } from '@sb1/ffe-form-react';

function InputExample() {
    const [value, setValue] = useState('');
    const [error, setError] = useState<string | null>(null);

    const handleBlur = () => {
        if (!value) {
            setError('Dette feltet er obligatorisk');
        } else {
            setError(null);
        }
    };

    return (
        <InputGroup
            label="Fullt navn"
            description="Skriv inn for- og etternavn"
            fieldMessage={error}
        >
            <Input
                value={value}
                onChange={e => setValue(e.target.value)}
                onBlur={handleBlur}
            />
        </InputGroup>
    );
}
```

**InputGroup props:**

- `label?: string | ReactElement` - Skjemaetikett (tekst eller Label-komponent)
- `description?: string | ReactElement` - Statisk hjelpetekst under label
- `tooltip?: string | boolean | ReactNode` - Klikkbar hjelpetekst-ikon
- `fieldMessage?: string | ReactElement | null` - Feilmelding (streng gir automatisk ErrorFieldMessage)
- `extraMargin?: boolean` - Reserver plass til feilmelding (default: true)
- `inputId?: string` - Custom id for input-elementet
- `labelId?: string` - Custom id for label-elementet
- `children` - Input-element eller funksjon som mottar extraProps

**Input props:**

- `inline?: boolean` - Vis input inline (default: false, som gir display: block)
- `textRightAlign?: boolean` - Høyrejuster tekst
- Alle standard HTML input-attributter (`value`, `onChange`, `type`, `placeholder`, etc.)

### InputGroup med flere barn (function-as-child)

Når du trenger flere elementer inne i InputGroup, bruk funksjon som child:

```tsx
import React from 'react';
import { InputGroup, Input } from '@sb1/ffe-form-react';

function MultipleInputsExample() {
    return (
        <InputGroup label="Adresse">
            {({
                id,
                'aria-invalid': ariaInvalid,
                'aria-describedby': ariaDescribedBy,
            }) => (
                <>
                    <Input
                        id={id}
                        aria-invalid={ariaInvalid}
                        aria-describedby={ariaDescribedBy}
                        placeholder="Gateadresse"
                    />
                    <div>Ekstra innhold her</div>
                </>
            )}
        </InputGroup>
    );
}
```

### TextField med prefix og suffix

`TextField` er en variant av Input som støtter visuell prefix og suffix.

```tsx
import React, { useState } from 'react';
import { InputGroup, TextField } from '@sb1/ffe-form-react';

function TextFieldExample() {
    const [amount, setAmount] = useState('');

    return (
        <InputGroup label="Beløp">
            <TextField
                value={amount}
                onChange={e => setAmount(e.target.value)}
                suffix="kr"
                textRightAlign={true}
            />
        </InputGroup>
    );
}
```

**TextField props:**

- `prefix?: string` - Tekst som vises foran input-feltet
- `suffix?: string` - Tekst som vises etter input-feltet
- `inline?: boolean` - Vis inline
- `textRightAlign?: boolean` - Høyrejuster tekst
- Alle standard HTML input-attributter

### TextArea

`TextArea` er et flerlinjet tekstfelt. Det har ingen egne props utover standard textarea-attributter.

```tsx
import React, { useState } from 'react';
import { InputGroup, TextArea } from '@sb1/ffe-form-react';

function TextAreaExample() {
    const [description, setDescription] = useState('');

    return (
        <InputGroup label="Beskrivelse">
            <TextArea
                value={description}
                onChange={e => setDescription(e.target.value)}
                rows={4}
                placeholder="Skriv en beskrivelse..."
            />
        </InputGroup>
    );
}
```

### Label (frittstående)

`Label` kan brukes frittstående når du ikke bruker InputGroup.

```tsx
import React from 'react';
import { Label, Input } from '@sb1/ffe-form-react';

function LabelExample() {
    return (
        <>
            <Label htmlFor="my-input">Feltetikett</Label>
            <Input id="my-input" />
        </>
    );
}
```

**Label props:**

- `htmlFor?: string` - ID til input-elementet labelen er knyttet til
- `as?: ElementType` - Rendre som annet element enn label (default: 'label')
- `block?: boolean` - Bruk display: block (default: inline-block)

### Checkbox

`Checkbox` rendrer en avkrysningsboks. Label angis som children.

```tsx
import React, { useState } from 'react';
import { Checkbox } from '@sb1/ffe-form-react';

function CheckboxExample() {
    const [accepted, setAccepted] = useState(false);

    return (
        <Checkbox
            checked={accepted}
            onChange={e => setAccepted(e.target.checked)}
        >
            Jeg godtar vilkårene
        </Checkbox>
    );
}
```

**Flere checkboxer i gruppe:**

```tsx
import React, { useState } from 'react';
import { InputGroup, Checkbox } from '@sb1/ffe-form-react';

function CheckboxGroupExample() {
    const [selected, setSelected] = useState<string[]>([]);

    const toggle = (value: string) => {
        setSelected(prev =>
            prev.includes(value)
                ? prev.filter(v => v !== value)
                : [...prev, value],
        );
    };

    return (
        <InputGroup
            label="Hvilke aviser leser du?"
            description="Velg en eller flere"
        >
            {() => (
                <>
                    <Checkbox
                        checked={selected.includes('vg')}
                        onChange={() => toggle('vg')}
                        inline={false}
                    >
                        VG
                    </Checkbox>
                    <Checkbox
                        checked={selected.includes('dagbladet')}
                        onChange={() => toggle('dagbladet')}
                        inline={false}
                    >
                        Dagbladet
                    </Checkbox>
                </>
            )}
        </InputGroup>
    );
}
```

**Checkbox props:**

- `checked?: boolean` - Om checkboxen er avkrysset
- `onChange?: ChangeEventHandler<HTMLInputElement>` - Callback ved endring
- `children: ReactNode | ((labelProps) => ReactNode)` - Label-tekst eller render-funksjon
- `inline?: boolean` - Vis inline (default: true)
- `noMargins?: boolean` - Fjern vertikale marginer
- `hiddenLabel?: boolean` - Skjul label visuelt (for skjermlesere)
- Alle standard HTML input-attributter (unntatt `children`)

### RadioButtonInputGroup med RadioButton

`RadioButtonInputGroup` wrapper en gruppe med radioknapper og håndterer felles tilstand.

```tsx
import React, { useState } from 'react';
import { RadioButtonInputGroup, RadioButton } from '@sb1/ffe-form-react';

function RadioButtonExample() {
    const [selected, setSelected] = useState<string>('option-a');

    return (
        <RadioButtonInputGroup
            label="Velg et alternativ"
            name="my-radio-group"
            selectedValue={selected}
            onChange={e => setSelected(e.target.value)}
        >
            {inputProps => (
                <>
                    <RadioButton {...inputProps} value="option-a">
                        Alternativ A
                    </RadioButton>
                    <RadioButton {...inputProps} value="option-b">
                        Alternativ B
                    </RadioButton>
                    <RadioButton {...inputProps} value="option-c">
                        Alternativ C
                    </RadioButton>
                </>
            )}
        </RadioButtonInputGroup>
    );
}
```

**RadioButtonInputGroup props:**

- `name: string` - Navn på radioknapp-gruppen (påkrevd)
- `label?: ReactNode` - Overskrift for gruppen
- `selectedValue?: string | null | undefined` - Valgt verdi
- `onChange?: ChangeEventHandler<HTMLInputElement>` - Callback ved endring
- `children: (inputProps) => ReactNode` - Funksjon som mottar props å spre på radioknappene
- `inline?: boolean` - Vis radioknapper inline
- `fieldMessage?: string | ReactElement | null` - Feilmelding
- `description?: ReactNode` - Statisk hjelpetekst
- `tooltip?: ReactNode` - Tooltip
- `extraMargin?: boolean` - Reserver plass til feilmelding (default: true)

**RadioButton props:**

- `value: string` - Verdien til radioknappen (påkrevd)
- `children: ReactNode` - Label-tekst
- `inline?: boolean` - Vis inline
- `tooltip?: string` - Tooltip for denne radioknappen
- Alle props fra inputProps + standard HTML input-attributter

### RadioSwitch

`RadioSwitch` er to radioknapper ved siden av hverandre for enkle ja/nei-valg.

```tsx
import React, { useState } from 'react';
import { RadioButtonInputGroup, RadioSwitch } from '@sb1/ffe-form-react';

function RadioSwitchExample() {
    const [selected, setSelected] = useState<string>('yes');

    return (
        <RadioButtonInputGroup
            label="Er du over 18 år?"
            name="age-verification"
            selectedValue={selected}
            onChange={e => setSelected(e.target.value)}
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
        </RadioButtonInputGroup>
    );
}
```

**RadioSwitch props:**

- `leftLabel: string` - Label for venstre valg (påkrevd)
- `leftValue: string` - Verdi for venstre valg (påkrevd)
- `rightLabel: string` - Label for høyre valg (påkrevd)
- `rightValue: string` - Verdi for høyre valg (påkrevd)
- `selectedValue?: string | null | undefined` - Valgt verdi
- `condensed?: boolean` - Kompakt visning
- `leftInnerRef?: Ref<HTMLInputElement>` - Ref til venstre input
- `rightInnerRef?: Ref<HTMLInputElement>` - Ref til høyre input
- Standard HTML input-attributter (unntatt `value`)

### RadioBlock

`RadioBlock` er en radioknapp som stor blokk med plass til ekstra innhold.

```tsx
import React, { useState } from 'react';
import { RadioButtonInputGroup, RadioBlock } from '@sb1/ffe-form-react';

function RadioBlockExample() {
    const [selected, setSelected] = useState<string>('standard');

    return (
        <RadioButtonInputGroup
            label="Velg abonnement"
            name="subscription"
            selectedValue={selected}
            onChange={e => setSelected(e.target.value)}
        >
            {inputProps => (
                <>
                    <RadioBlock
                        {...inputProps}
                        label="Standard"
                        value="standard"
                    >
                        <p>Grunnleggende funksjoner</p>
                    </RadioBlock>
                    <RadioBlock
                        {...inputProps}
                        label="Premium"
                        value="premium"
                        showChildren={true}
                    >
                        <p>Alle funksjoner inkludert</p>
                    </RadioBlock>
                </>
            )}
        </RadioButtonInputGroup>
    );
}
```

**RadioBlock props:**

- `name: string` - Navn på radioknapp-gruppen (påkrevd)
- `value: string` - Verdien til radioknappen (påkrevd)
- `label: ReactNode` - Synlig label (påkrevd)
- `selectedValue?: string | null | undefined` - Valgt verdi
- `checked?: boolean` - Alternativ til selectedValue
- `children?: ReactNode` - Ekstra innhold som vises når valgt
- `showChildren?: boolean` - Vis children alltid (ikke bare når valgt)
- `labelClass?: string` - Ekstra CSS-klasser på label
- Standard HTML input-attributter

### PhoneNumber

`PhoneNumber` er et kombinert felt for landskode og telefonnummer.

```tsx
import React, { useState } from 'react';
import { PhoneNumber } from '@sb1/ffe-form-react';

function PhoneNumberExample() {
    const [countryCode, setCountryCode] = useState('47');
    const [number, setNumber] = useState('');
    const [error, setError] = useState<string | null>(null);

    return (
        <PhoneNumber
            countryCodeInputProps={{
                value: countryCode,
                onChange: e => setCountryCode(e.target.value),
            }}
            numberInputProps={{
                value: number,
                onChange: e => setNumber(e.target.value),
            }}
            numberFieldMessage={error}
            locale="nb"
        />
    );
}
```

**PhoneNumber props:**

- `countryCodeInputProps?: ComponentPropsWithoutRef<'input'>` - Props til landskode-input
- `numberInputProps?: ComponentPropsWithoutRef<'input'>` - Props til telefonnummer-input
- `locale?: 'nb' | 'nn' | 'en'` - Språk for labels (default: 'nb')
- `isMobileNumber?: boolean` - Endre label til "Mobilnummer" (default: false)
- `countryCodeFieldMessage?: string | ReactElement` - Feilmelding for landskode
- `numberFieldMessage?: string | ReactElement` - Feilmelding for nummer
- `countryCodeAndNumberFieldMessage?: string | ReactElement` - Feilmelding når begge er feil
- `extraMargin?: boolean` - Reserver plass til feilmelding

**Ref-tilgang:**
PhoneNumber eksporterer `PhoneNumberHandle` for ref-tilgang:

```tsx
const ref = useRef<PhoneNumberHandle>(null);
// ref.current?.country - landskode input
// ref.current?.number - telefonnummer input
```

### ToggleSwitch

`ToggleSwitch` er en av/på-bryter.

```tsx
import React, { useState } from 'react';
import { ToggleSwitch } from '@sb1/ffe-form-react';

function ToggleSwitchExample() {
    const [enabled, setEnabled] = useState(false);

    return (
        <ToggleSwitch
            checked={enabled}
            onChange={e => setEnabled(e.target.checked)}
        >
            Aktiver varsler
        </ToggleSwitch>
    );
}
```

**ToggleSwitch props:**

- `checked?: boolean` - Om bryteren er på
- `onChange?: ChangeEventHandler<HTMLInputElement>` - Callback ved endring
- `children?: ReactNode` - Hovedlabel
- `description?: string` - Andre linje med beskrivelse
- `locale?: 'nb' | 'nn' | 'en'` - Språk for Av/På-tekst (default: 'nb')
- `onText?: string` - Egendefinert "På"-tekst
- `offText?: string` - Egendefinert "Av"-tekst
- `hideOnOff?: boolean` - Skjul Av/På-labels
- `value?: string` - Override verdi-attributt (default: 'on')
- Standard HTML input-attributter

### Tooltip

`Tooltip` viser en hjelpetekst som kan utvides ved klikk.

```tsx
import React from 'react';
import { Label, Tooltip, Input } from '@sb1/ffe-form-react';

function TooltipExample() {
    return (
        <>
            <Label htmlFor="account">
                Kontonummer
                <Tooltip>
                    Kontonummeret finner du på kontoutskriften din
                </Tooltip>
            </Label>
            <Input id="account" />
        </>
    );
}
```

**Tooltip props:**

- `children?: ReactNode` - Hjelpetekst som vises når utvidet
- `isOpen?: boolean` - Initial tilstand (default: false)
- `onClick?: MouseEventHandler<HTMLButtonElement>` - Callback ved klikk
- `aria-label?: string` - Tilgjengelighets-label (default: 'Vis hjelpetekst')
- `aria-controls?: string` - ID til kontrollert element
- `tabIndex?: number` - Tab-rekkefølge
- `className?: string` - Ekstra CSS-klasser på tekstinnhold
- `containerProps?: ComponentPropsWithoutRef<'div'>` - Props til container-div

### Feilmeldinger (FieldMessage-komponenter)

Bruk feilmeldingskomponenter for å vise tilbakemeldinger til brukeren.

```tsx
import React from 'react';
import {
    ErrorFieldMessage,
    InfoFieldMessage,
    SuccessFieldMessage,
} from '@sb1/ffe-form-react';

function FieldMessageExamples() {
    return (
        <>
            <ErrorFieldMessage>Dette feltet er obligatorisk</ErrorFieldMessage>

            <InfoFieldMessage>
                Vi lagrer ikke sensitiv informasjon
            </InfoFieldMessage>

            <SuccessFieldMessage>Endringene er lagret</SuccessFieldMessage>
        </>
    );
}
```

**Felles props for alle FieldMessage-komponenter:**

- `children: ReactNode` - Meldingstekst
- `as?: ElementType` - Rendre som annet element (default: 'div')
- `role?: 'status' | 'alert' | 'none'` - ARIA-rolle (ErrorFieldMessage default: 'alert', andre: 'none')
- `id?: string` - ID for ARIA-kobling
- `className?: string` - Ekstra CSS-klasser

**Bruk med InputGroup:**

```tsx
<InputGroup
    label="E-post"
    fieldMessage={<ErrorFieldMessage>Ugyldig e-postadresse</ErrorFieldMessage>}
>
    <Input type="email" aria-invalid="true" />
</InputGroup>
```

### InputTextLike

`InputTextLike` er et input-felt som visuelt ser ut som vanlig tekst (ingen synlig ramme).

```tsx
import React from 'react';
import { InputTextLike } from '@sb1/ffe-form-react';

function InputTextLikeExample() {
    return (
        <InputTextLike
            ariaLabel="Rediger tittel"
            defaultValue="Klikk for å redigere"
        />
    );
}
```

**InputTextLike props:**

- `ariaLabel: string` - Tilgjengelighets-label (påkrevd)
- Alle standard HTML input-attributter

## Utvikling

For å starte en lokal utviklingsserver, kjør følgende fra designsystem-rotmappen:

```bash
npm install
npm run build
npm start
```

En lokal Storybook-instans med live reloading vil kjøre på http://localhost:6006/.

Eksempelimplementasjoner med de nyeste versjonene av alle komponentene er også tilgjengelige på https://sparebank1.github.io/designsystem.
