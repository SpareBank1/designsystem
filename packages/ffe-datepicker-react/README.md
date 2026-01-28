# @sb1/ffe-datepicker-react

## Installasjon

```bash
npm install --save @sb1/ffe-datepicker-react
```

## Bruk

Full dokumentasjon er tilgjengelig på https://design.sparebank1.no/komponenter/skjemaelementer/#datepicker.

Denne pakken er avhengig av `@sb1/ffe-form-react` og `@sb1/ffe-icons-react`.
Husk å importere less-filene fra disse pakkene.

## Beskrivelse

Komponenter for dato-inntasting og kalender i FFE. `DateInput` er feltet for manuell inntasting og parsing, `Calendar` viser datoer med tastaturnavigasjon, og `Datepicker` kombinerer input + kalender i én komponent.

## Eksempler

```tsx
import React from 'react';
import { Datepicker, DateInput, Calendar } from '@sb1/ffe-datepicker-react';

export function DatepickerDemo() {
    const [value, setValue] = React.useState('');
    return (
        <div>
            {/* Kombinert input + kalender */}
            <Datepicker value={value} onChange={setValue} label="Velg dato" />

            {/* Kun input-felt */}
            <DateInput
                value={value}
                onChange={setValue}
                label="Dato"
                placeholder="dd.mm.åååå"
            />

            {/* Frittstående kalender */}
            <Calendar
                selectedDate={new Date()}
                onDateSelected={d => console.log('Valgt', d)}
            />
        </div>
    );
}
```

## Krav

- ~~i18n~~
- ~~Vis kalender ved fokus~~
- ~~Håndter ulike input-formater (se simpledate.test.js)~~
- Valider ved blur på hele komponenten (både input og kalender)

### Tilgjengelighet (a11y)

Krav for full a11y-samsvar:

- https://www.w3.org/TR/wai-aria-practices/#datepicker

Eksempler:

- https://hanshillen.github.io/jqtest/#goto_datepicker

## Annet

Evaluerte implementasjoner:

- Pickaday (eller varianter av den): Ikke a11y-samsvarende. Mangler ARIA-roller og tastaturnavigasjon
- http://jquense.github.io/react-widgets/docs/#/datetime-picker: Mangler tastaturnavigasjon
- https://hacker0x01.github.io/react-datepicker/: Mangler tastaturnavigasjon

## Utvikling

For å starte en lokal utviklingsserver, kjør følgende fra designsystem-rotmappen:

```bash
npm install
npm run build
npm start
```

En lokal Storybook-instans med live reloading vil kjøre på http://localhost:6006/.

Eksempelimplementasjoner med de nyeste versjonene av alle komponentene er også tilgjengelige på https://sparebank1.github.io/designsystem.
