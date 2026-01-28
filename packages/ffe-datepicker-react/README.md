# @sb1/ffe-datepicker-react

## Beskrivelse

Komponenter for dato-inntasting og kalender. `Datepicker` kombinerer input-felt med kalender, `DateInput` er kun input-feltet for manuell inntasting, og `Calendar` er en frittstående kalenderkomponent.

## Installasjon

```bash
npm install --save @sb1/ffe-datepicker-react
```

## Bruk

Full dokumentasjon er tilgjengelig på https://design.sparebank1.no/komponenter/skjemaelementer/#datepicker.

Denne pakken er avhengig av `@sb1/ffe-form-react` og `@sb1/ffe-icons-react`.
Husk å importere less-filene fra disse pakkene.

## Eksempler

### Datepicker (input + kalender)

```tsx
import { useState } from 'react';
import { Datepicker } from '@sb1/ffe-datepicker-react';

function MyComponent() {
    const [value, setValue] = useState('');

    return (
        <Datepicker
            value={value}
            onChange={setValue}
            locale="nb"
            label="Velg dato"
        />
    );
}
```

### DateInput (kun input-felt)

```tsx
import { useState } from 'react';
import { DateInput } from '@sb1/ffe-datepicker-react';

function MyComponent() {
    const [value, setValue] = useState('');

    return <DateInput value={value} onChange={setValue} label="Dato" />;
}
```

### Calendar (frittstående kalender)

```tsx
import { useState } from 'react';
import { Calendar } from '@sb1/ffe-datepicker-react';

function MyComponent() {
    const [selectedDate, setSelectedDate] = useState(new Date());

    return (
        <Calendar
            selectedDate={selectedDate}
            onDateSelected={setSelectedDate}
            locale="nb"
        />
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
