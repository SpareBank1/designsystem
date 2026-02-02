# @sb1/ffe-datepicker-react

## Beskrivelse

Komponenter for dato-inntasting og kalender. `Datepicker` kombinerer input-felt med kalender, `DateInput` er kun input-feltet, og `Calendar` er en frittstående kalenderkomponent.

## Installasjon

```bash
npm install --save @sb1/ffe-datepicker-react
```

## Bruk

Full dokumentasjon: https://sparebank1.github.io/designsystem/komponenter/skjemaelementer/#datepicker

Avhengig av `@sb1/ffe-form-react` og `@sb1/ffe-icons-react`. Husk å importere less-filene fra disse pakkene.

## Eksempler

### Datepicker (input + kalender)

Krever `labelId`-prop som peker til en ekstern label. Bruk `InputGroup` fra `@sb1/ffe-form-react`.

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

#### Datepicker med validering og begrensninger

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

### DateInput (kun input-felt)

Lavnivå-komponent som kun tilbyr et formatert input-felt. For de fleste bruksområder bør du bruke `Datepicker`.

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

### Calendar (frittstående kalender)

Frittstående kalenderkomponent. Datoer representeres som strenger i format 'dd.mm.yyyy'.

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

## Testing

```tsx
import { render } from '@testing-library/react';
import {
    Datepicker,
    getDatepickerByLabelText,
} from '@sb1/ffe-datepicker-react';
import { InputGroup } from '@sb1/ffe-form-react';

test('kan sette dato', async () => {
    render(
        <InputGroup label="Dato" labelId="test-label">
            <Datepicker
                value=""
                onChange={jest.fn()}
                locale="nb"
                labelId="test-label"
            />
        </InputGroup>,
    );

    const datepicker = getDatepickerByLabelText('Dato');
    // Bruk datepicker.day, datepicker.month, datepicker.year for å interagere med feltene
});
```

## Utvikling

```bash
npm install
npm run build
npm start
```

Storybook kjører på http://localhost:6006/. Dokumentasjon: https://sparebank1.github.io/designsystem
