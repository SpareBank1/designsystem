# @sb1/ffe-datepicker-react

## Beskrivelse

Komponenter for dato-inntasting og kalender. `Datepicker` kombinerer input-felt med kalender, `DateInput` er kun input-feltet for manuell inntasting, og `Calendar` er en frittstående kalenderkomponent.

## Installasjon

```bash
npm install --save @sb1/ffe-datepicker-react
```

## Bruk

Full dokumentasjon er tilgjengelig på https://sparebank1.github.io/designsystem/komponenter/skjemaelementer/#datepicker.

Denne pakken er avhengig av `@sb1/ffe-form-react` og `@sb1/ffe-icons-react`.
Husk å importere less-filene fra disse pakkene.

## Eksempler

### Datepicker (input + kalender)

`Datepicker` er hovedkomponenten for datovelging. Den kombinerer tre separate spin-knapper for dag, måned og år med en kalender-popup.

**Viktig**: Datepicker krever en `labelId`-prop som peker til en ekstern label-element for tilgjengelighet. Bruk `InputGroup` fra `@sb1/ffe-form-react` for å tilby label.

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

#### Datepicker Props

| Prop               | Type                                           | Påkrevd | Beskrivelse                                           |
| ------------------ | ---------------------------------------------- | ------- | ----------------------------------------------------- |
| `value`            | `string`                                       | Ja      | Datoverdi i format 'dd.mm.yyyy'                       |
| `onChange`         | `(date: string) => void`                       | Ja      | Callback når dato endres                              |
| `locale`           | `'nb' \| 'nn' \| 'en'`                         | Ja      | Språk for kalender og datoformat                      |
| `labelId`          | `string`                                       | Ja      | ID til label-elementet (for tilgjengelighet)          |
| `minDate`          | `string \| null`                               | Nei     | Tidligste tillatte dato ('dd.mm.yyyy')                |
| `maxDate`          | `string \| null`                               | Nei     | Seneste tillatte dato ('dd.mm.yyyy')                  |
| `disabledDates`    | `string[]`                                     | Nei     | Liste over datoer som skal deaktiveres ('dd.mm.yyyy') |
| `calendarAbove`    | `boolean`                                      | Nei     | Vis kalenderen over input-feltet                      |
| `fullWidth`        | `boolean`                                      | Nei     | Utvid til full bredde                                 |
| `dropdownCaption`  | `boolean`                                      | Nei     | Vis måned/år som nedtrekkslister i kalenderen         |
| `fieldMessage`     | `string \| null`                               | Nei     | Feilmelding som vises under feltet                    |
| `aria-invalid`     | `string`                                       | Nei     | Indikerer ugyldig tilstand                            |
| `aria-describedby` | `string`                                       | Nei     | ID til element som beskriver feltet                   |
| `onBlur`           | `(evt: React.FocusEvent<HTMLElement>) => void` | Nei     | Callback når fokus forlater feltet                    |
| `id`               | `string`                                       | Nei     | ID for datepicker-containeren                         |

#### Datepicker med validering

```tsx
import { useState } from 'react';
import { Datepicker } from '@sb1/ffe-datepicker-react';
import { InputGroup } from '@sb1/ffe-form-react';

function MyComponent() {
    const [value, setValue] = useState('');
    const [error, setError] = useState<string | null>(null);

    const handleChange = (date: string) => {
        setValue(date);
        // Valider dato og sett feilmelding om nødvendig
        if (!date) {
            setError('Dato er påkrevd');
        } else {
            setError(null);
        }
    };

    return (
        <InputGroup
            label="Fødselsdato"
            labelId="fodselsdato-label"
            aria-invalid={!!error}
            fieldMessage={error}
        >
            <Datepicker
                value={value}
                onChange={handleChange}
                locale="nb"
                labelId="fodselsdato-label"
                minDate="01.01.1900"
                maxDate="31.12.2024"
            />
        </InputGroup>
    );
}
```

#### Datepicker med deaktiverte datoer

```tsx
import { useState } from 'react';
import { Datepicker } from '@sb1/ffe-datepicker-react';
import { InputGroup } from '@sb1/ffe-form-react';

function MyComponent() {
    const [value, setValue] = useState('01.12.2024');

    // Deaktiver helligdager
    const disabledDates = [
        '24.12.2024',
        '25.12.2024',
        '31.12.2024',
        '01.01.2025',
    ];

    return (
        <InputGroup label="Velg leveringsdato" labelId="leveringsdato-label">
            <Datepicker
                value={value}
                onChange={setValue}
                locale="nb"
                labelId="leveringsdato-label"
                minDate="01.12.2024"
                maxDate="31.01.2025"
                disabledDates={disabledDates}
            />
        </InputGroup>
    );
}
```

#### Datepicker med nedtrekkslister for måned og år

Bruk `dropdownCaption` når brukeren må velge datoer langt frem eller tilbake i tid.

```tsx
import { useState } from 'react';
import { Datepicker } from '@sb1/ffe-datepicker-react';
import { InputGroup } from '@sb1/ffe-form-react';

function MyComponent() {
    const [value, setValue] = useState('15.05.2025');

    return (
        <InputGroup label="Fødselsdato" labelId="fodselsdato-dropdown-label">
            <Datepicker
                value={value}
                onChange={setValue}
                locale="nb"
                labelId="fodselsdato-dropdown-label"
                dropdownCaption={true}
                minDate="01.01.1920"
                maxDate="31.12.2030"
            />
        </InputGroup>
    );
}
```

### DateInput (kun input-felt)

`DateInput` er et lavnivå-komponent som kun tilbyr et formatert input-felt for datoer. Det er en ren HTML input med datoformatering. For de fleste bruksområder bør du bruke `Datepicker` i stedet.

**Merk**: `DateInput` har ikke innebygget label - du må selv sørge for tilgjengelighet.

```tsx
import { useState, ChangeEvent } from 'react';
import { DateInput } from '@sb1/ffe-datepicker-react';

function MyComponent() {
    const [value, setValue] = useState('');

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value);
    };

    return (
        <div>
            <label htmlFor="date-input">Dato</label>
            <DateInput
                id="date-input"
                value={value}
                onChange={handleChange}
                locale="nb"
                ariaInvalid="false"
            />
        </div>
    );
}
```

#### DateInput Props

| Prop          | Type                                   | Påkrevd | Beskrivelse                                       |
| ------------- | -------------------------------------- | ------- | ------------------------------------------------- |
| `value`       | `string`                               | Ja      | Datoverdi som streng                              |
| `locale`      | `'nb' \| 'nn' \| 'en'`                 | Ja      | Språk for datoformat                              |
| `ariaInvalid` | `string`                               | Ja      | Indikerer ugyldig tilstand ('true' eller 'false') |
| `...rest`     | `React.ComponentPropsWithRef<'input'>` | Nei     | Alle standard HTML input-attributter              |

### Calendar (frittstående kalender)

`Calendar` er en frittstående kalenderkomponent som kan brukes når du trenger full kontroll over visningen. Datoer representeres som strenger i format 'dd.mm.yyyy'.

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
        />
    );
}
```

#### Calendar Props

| Prop                | Type                                         | Påkrevd | Beskrivelse                            |
| ------------------- | -------------------------------------------- | ------- | -------------------------------------- |
| `locale`            | `'nb' \| 'nn' \| 'en'`                       | Ja      | Språk for kalender                     |
| `onDatePicked`      | `(date: string) => void`                     | Ja      | Callback når dato velges               |
| `selectedDate`      | `string \| null`                             | Nei     | Valgt dato i format 'dd.mm.yyyy'       |
| `minDate`           | `string \| null`                             | Nei     | Tidligste tillatte dato ('dd.mm.yyyy') |
| `maxDate`           | `string \| null`                             | Nei     | Seneste tillatte dato ('dd.mm.yyyy')   |
| `disabledDates`     | `string[]`                                   | Nei     | Liste over datoer som skal deaktiveres |
| `dropdownCaption`   | `boolean`                                    | Nei     | Vis måned/år som nedtrekkslister       |
| `focusOnMount`      | `boolean`                                    | Nei     | Sett fokus når komponenten mountes     |
| `escKeyHandler`     | `React.KeyboardEventHandler<HTMLDivElement>` | Nei     | Handler for Escape-tasten              |
| `calendarClassName` | `string`                                     | Nei     | Egendefinert CSS-klasse                |

#### Calendar med begrensninger

```tsx
import { useState } from 'react';
import { Calendar } from '@sb1/ffe-datepicker-react';

function MyComponent() {
    const [selectedDate, setSelectedDate] = useState<string | null>(
        '15.01.2025',
    );

    return (
        <Calendar
            selectedDate={selectedDate}
            onDatePicked={setSelectedDate}
            locale="nb"
            minDate="01.01.2025"
            maxDate="31.12.2025"
            disabledDates={['01.05.2025', '17.05.2025', '25.12.2025']}
        />
    );
}
```

#### Calendar med nedtrekkslister

```tsx
import { useState } from 'react';
import { Calendar } from '@sb1/ffe-datepicker-react';

function MyComponent() {
    const [selectedDate, setSelectedDate] = useState<string | null>(
        '15.05.2025',
    );

    return (
        <Calendar
            selectedDate={selectedDate}
            onDatePicked={setSelectedDate}
            locale="nb"
            dropdownCaption={true}
            minDate="01.01.2020"
            maxDate="31.12.2030"
        />
    );
}
```

## Testing

Pakken eksporterer en hjelper for testing med React Testing Library:

```tsx
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {
    Datepicker,
    getDatepickerByLabelText,
} from '@sb1/ffe-datepicker-react';
import { InputGroup } from '@sb1/ffe-form-react';

test('kan sette dato', async () => {
    const user = userEvent.setup();
    const handleChange = jest.fn();

    render(
        <InputGroup label="Dato" labelId="test-label">
            <Datepicker
                value=""
                onChange={handleChange}
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

For å starte en lokal utviklingsserver, kjør følgende fra designsystem-rotmappen:

```bash
npm install
npm run build
npm start
```

En lokal Storybook-instans med live reloading vil kjøre på http://localhost:6006/.

Eksempelimplementasjoner med de nyeste versjonene av alle komponentene er også tilgjengelige på https://sparebank1.github.io/designsystem.
