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

## Eksempler

```tsx
import React from 'react';
import { Dropdown } from '@sb1/ffe-dropdown-react';

export function DropdownDemo() {
    const [value, setValue] = React.useState('');
    return (
        <Dropdown
            value={value}
            onChange={e => setValue(e.target.value)}
            aria-label="Velg alternativ"
        >
            <option value="">Velg …</option>
            <option value="a">Alternativ A</option>
            <option value="b">Alternativ B</option>
            <option value="c">Alternativ C</option>
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
