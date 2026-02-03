# @sb1/ffe-datepicker-react

## Beskrivelse

Komponenter for dato-inntasting og kalender. `Datepicker` kombinerer input-felt med kalender, `DateInput` er kun input-feltet, og `Calendar` er en frittstående kalenderkomponent.

## Komponenter

Denne pakken eksporterer følgende komponenter:

- `Datepicker`
- `getDatepickerByLabelText`
- `DateInput`
- `Calendar`

## Installasjon

Installer pakken og alle dens avhengigheter:

```bash
npm install @sb1/ffe-datepicker-react
```

## API-referanse

### Datepicker Props

| Prop | Type | Påkrevd | Beskrivelse |
|------|------|---------|-------------|
| `value` | `string` | Ja | - |
| `locale` | `Locale` | Ja | - |

### getDatepickerByLabelText Props

Ingen komponentspesifikke props utover native HTML-attributter.

### DateInput Props

| Prop | Type | Påkrevd | Beskrivelse |
|------|------|---------|-------------|
| `ariaInvalid` | `string` | Ja | - |
| `value` | `string` | Ja | - |
| `locale` | `'nb' | 'nn' | 'en'` | Ja | - |

### Calendar Props

| Prop | Type | Påkrevd | Beskrivelse |
|------|------|---------|-------------|
| `calendarClassName` | `string` | Nei | - |
| `escKeyHandler` | `React.KeyboardEventHandler<HTMLDivElement>` | Nei | - |
| `locale` | `'nb' | 'nn' | 'en'` | Ja | - |
| `onDatePicked` | `(date: string) => void` | Ja | - |
| `selectedDate` | `string | null` | Nei | - |
| `focusOnMount` | `boolean` | Nei | - |
| `dropdownCaption` | `boolean` | Nei | Om måned- og år-dropdown skal vises i kalenderen |
| `minDate` | `string | null` | Nei | Tidligste tillatte dato (format: 'dd.mm.yyyy') - brukes kun til å bestemme år-intervall i dropdown |
| `maxDate` | `string | null` | Nei | Seneste tillatte dato (format: 'dd.mm.yyyy') - brukes kun til å bestemme år-intervall i dropdown |
| `disabledDates` | `string[]` | Nei | Array av datoer i format 'dd.mm.yyyy' som skal være deaktivert |

## Eksempler (fra README)

```tsx
import { useState } from 'react';
import { Datepicker } from '@sb1/ffe-datepicker-react';
import { InputGroup } from '@sb1/ffe-form-react';

function MyComponent() {
    const [value, setValue] = useState('01.12.2024');

    return (
        <InputGroup label="Velg dato" labelId="datepicker-label">
            <Datepicker
                value={value}
                onChange={setValue}
                locale="nb"
                labelId="datepicker-label"
            />
        </InputGroup>
    );
}
```

```tsx
import { useState } from 'react';
import { Datepicker } from '@sb1/ffe-datepicker-react';
import { InputGroup } from '@sb1/ffe-form-react';

function MyComponent() {
    const [value, setValue] = useState('');
    const [error, setError] = useState<string | null>(null);

    return (
        <InputGroup
            label="Fødselsdato"
            labelId="fodselsdato-label"
            aria-invalid={!!error}
            fieldMessage={error}
        >
            <Datepicker
                value={value}
                onChange={setValue}
                locale="nb"
                labelId="fodselsdato-label"
                minDate="01.01.1900"
                maxDate="31.12.2024"
                disabledDates={['24.12.2024', '25.12.2024']}
                dropdownCaption={true}
            />
        </InputGroup>
    );
}
```

```tsx
import { useState, ChangeEvent } from 'react';
import { DateInput } from '@sb1/ffe-datepicker-react';

function MyComponent() {
    const [value, setValue] = useState('');

    return (
        <div>
            <label htmlFor="date-input">Dato</label>
            <DateInput
                id="date-input"
                value={value}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                    setValue(e.target.value)
                }
                locale="nb"
                ariaInvalid="false"
            />
        </div>
    );
}
```

```tsx
import { useState } from 'react';
import { Calendar } from '@sb1/ffe-datepicker-react';

function MyComponent() {
    const [selectedDate, setSelectedDate] = useState<string | null>(
        '17.12.2024',
    );

    return (
        <Calendar
            selectedDate={selectedDate}
            onDatePicked={setSelectedDate}
            locale="nb"
            minDate="01.01.2024"
            maxDate="31.12.2025"
            disabledDates={['01.05.2025', '17.05.2025']}
        />
    );
}
```

## Dokumentasjon

Full dokumentasjon er tilgjengelig på https://sparebank1.github.io/designsystem/

## Tilleggskontekst

Dette er en del av SpareBank 1 FFE (Felles Front End) designsystem.
Alle komponenter følger SpareBank 1s designretningslinjer og tilgjengelighetsstandarder.
