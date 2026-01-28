# @sb1/ffe-datepicker-react

## Beskrivelse

Komponenter for dato-inntasting og kalender i FFE. `DateInput` er feltet for manuell inntasting og parsing, `Calendar` viser datoer med tastaturnavigasjon, og `Datepicker` kombinerer input + kalender i én komponent.

## Komponenter

Denne pakken eksporterer følgende komponenter:

- `Datepicker`
- `getDatepickerByLabelText`
- `DateInput`
- `Calendar`

## Installasjon

Installer pakken og alle dens avhengigheter:

```bash
npm install @sb1/ffe-datepicker-react @sb1/ffe-datepicker @sb1/ffe-dropdown-react @sb1/ffe-form @sb1/ffe-form-react @sb1/ffe-icons-react @sb1/ffe-core @sb1/ffe-buttons @sb1/ffe-collapse-react @sb1/ffe-icons
```

### Avhengigheter

Denne pakken er avhengig av:

- `@sb1/ffe-datepicker`
- `@sb1/ffe-dropdown-react`
- `@sb1/ffe-form`
- `@sb1/ffe-form-react`
- `@sb1/ffe-icons-react`
- `@sb1/ffe-core`
- `@sb1/ffe-buttons`
- `@sb1/ffe-collapse-react`
- `@sb1/ffe-icons`

## CSS-import

I prosjektets hoved-CSS-fil, importer de nødvendige stilene:

```css
@import '@sb1/ffe-core/css/ffe.css';
@import '@sb1/ffe-buttons/css/buttons.css';
@import '@sb1/ffe-collapse-react/css/collapse.css';
@import '@sb1/ffe-datepicker/css/datepicker.css';
@import '@sb1/ffe-form/css/form.css';
@import '@sb1/ffe-icons/css/ffe-icons.css';
```

Merk: Sørg for å importere `@sb1/ffe-core/css/ffe.css` først, da den inneholder grunnleggende stiler.

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

## Dokumentasjon

Full dokumentasjon er tilgjengelig på https://design.sparebank1.no/

## Tilleggskontekst

Dette er en del av SpareBank 1 FFE (Felles Front End) designsystem.
Alle komponenter følger SpareBank 1s designretningslinjer og tilgjengelighetsstandarder.
