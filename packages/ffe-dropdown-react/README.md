# @sb1/ffe-dropdown-react

React-implementasjon av nedtrekkslisten i FFE.

## Installasjon

```bash
npm install --save @sb1/ffe-dropdown-react
```

## Bruk

Full dokumentasjon er tilgjengelig på https://sparebank1.github.io/designsystem/komponenter/dropdown/.

Denne pakken er avhengig av `@sb1/ffe-form-react`.
Husk å importere less-filene fra disse pakkene.

## Beskrivelse

Enkel nedtrekksliste-komponent (`Dropdown`) for valg fra en liste. Brukes for korte, flate lister der brukeren skal velge ett alternativ.

Komponenten er en wrapper rundt HTML `<select>`-elementet og videresender alle standard HTML select-attributter.

### Props

Komponenten utvider `React.ComponentPropsWithoutRef<'select'>`, som betyr at alle standard HTML select-attributter er støttet.

| Prop           | Type                                          | Default | Beskrivelse                                                       |
| -------------- | --------------------------------------------- | ------- | ----------------------------------------------------------------- |
| `inline`       | `boolean`                                     | `false` | Rendrer dropdown i inline-modus med redusert bredde               |
| `className`    | `string`                                      | -       | Ekstra CSS-klasser som legges til komponenten                     |
| `value`        | `string`                                      | -       | Kontrollert verdi for dropdown                                    |
| `defaultValue` | `string`                                      | -       | Standard verdi for ukontrollert dropdown                          |
| `onChange`     | `(e: ChangeEvent<HTMLSelectElement>) => void` | -       | Callback som kalles ved endring                                   |
| `disabled`     | `boolean`                                     | `false` | Deaktiverer dropdown                                              |
| `aria-invalid` | `"true" \| "false"`                           | -       | Markerer dropdown som ugyldig for skjermlesere                    |
| `aria-label`   | `string`                                      | -       | Tilgjengelighetsetikett (bruk når dropdown ikke har synlig label) |
| `ref`          | `Ref<HTMLSelectElement>`                      | -       | Ref videresendes til `<select>`-elementet                         |
| `children`     | `ReactNode`                                   | -       | `<option>`-elementer som utgjør valgene                           |

## Eksempler

### Grunnleggende bruk med InputGroup (anbefalt)

Bruk alltid `InputGroup` fra `@sb1/ffe-form-react` for å gi dropdown en tilgjengelig label:

```tsx
import React from 'react';
import { Dropdown } from '@sb1/ffe-dropdown-react';
import { InputGroup } from '@sb1/ffe-form-react';

export function DropdownMedLabel() {
    const [value, setValue] = React.useState('jan');

    return (
        <InputGroup label="Velg måned">
            <Dropdown value={value} onChange={e => setValue(e.target.value)}>
                <option value="jan">Januar</option>
                <option value="feb">Februar</option>
                <option value="mar">Mars</option>
                <option value="apr">April</option>
                <option value="mai">Mai</option>
            </Dropdown>
        </InputGroup>
    );
}
```

### Kontrollert dropdown med onChange

```tsx
import React from 'react';
import { Dropdown } from '@sb1/ffe-dropdown-react';

export function KontrollertDropdown() {
    const [value, setValue] = React.useState('');

    return (
        <Dropdown
            value={value}
            onChange={e => setValue(e.target.value)}
            aria-label="Velg alternativ"
        >
            <option value="">Velg ...</option>
            <option value="a">Alternativ A</option>
            <option value="b">Alternativ B</option>
            <option value="c">Alternativ C</option>
        </Dropdown>
    );
}
```

### Inline-modus

Brukes når dropdown skal vises inline med annet innhold, med redusert bredde:

```tsx
import React from 'react';
import { Dropdown } from '@sb1/ffe-dropdown-react';
import { InputGroup } from '@sb1/ffe-form-react';

export function InlineDropdown() {
    return (
        <InputGroup label="Antall">
            <Dropdown inline={true} defaultValue="1">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
            </Dropdown>
        </InputGroup>
    );
}
```

### Validering med feilmelding

Bruk `InputGroup` med `fieldMessage` for å vise feilmeldinger:

```tsx
import React from 'react';
import { Dropdown } from '@sb1/ffe-dropdown-react';
import { InputGroup } from '@sb1/ffe-form-react';

export function DropdownMedFeil() {
    const [value, setValue] = React.useState('');
    const hasError = value === '';

    return (
        <InputGroup
            label="Velg måned"
            fieldMessage={hasError ? 'Du må velge en måned' : undefined}
        >
            {inputProps => (
                <Dropdown
                    {...inputProps}
                    value={value}
                    onChange={e => setValue(e.target.value)}
                    aria-invalid={hasError ? 'true' : undefined}
                >
                    <option value="">Velg ...</option>
                    <option value="jan">Januar</option>
                    <option value="feb">Februar</option>
                </Dropdown>
            )}
        </InputGroup>
    );
}
```

### Med beskrivelse

```tsx
import React from 'react';
import { Dropdown } from '@sb1/ffe-dropdown-react';
import { InputGroup } from '@sb1/ffe-form-react';

export function DropdownMedBeskrivelse() {
    return (
        <InputGroup
            label="Faktureringsmåned"
            description="Velg hvilken måned du vil motta faktura"
        >
            <Dropdown defaultValue="jan">
                <option value="jan">Januar</option>
                <option value="feb">Februar</option>
                <option value="mar">Mars</option>
            </Dropdown>
        </InputGroup>
    );
}
```

### Deaktivert dropdown

```tsx
import React from 'react';
import { Dropdown } from '@sb1/ffe-dropdown-react';
import { InputGroup } from '@sb1/ffe-form-react';

export function DeaktivertDropdown() {
    return (
        <InputGroup label="Måned (kan ikke endres)">
            <Dropdown disabled={true} defaultValue="jan">
                <option value="jan">Januar</option>
                <option value="feb">Februar</option>
            </Dropdown>
        </InputGroup>
    );
}
```

### Med ref

Komponenten videresender ref til det underliggende `<select>`-elementet:

```tsx
import React, { useRef, useEffect } from 'react';
import { Dropdown } from '@sb1/ffe-dropdown-react';

export function DropdownMedRef() {
    const selectRef = useRef<HTMLSelectElement>(null);

    useEffect(() => {
        // Fokuser dropdown ved montering
        selectRef.current?.focus();
    }, []);

    return (
        <Dropdown ref={selectRef} aria-label="Valg">
            <option value="a">A</option>
            <option value="b">B</option>
        </Dropdown>
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
