# @sb1/ffe-dropdown-react

## Beskrivelse

Nedtrekksliste for valg av ett alternativ fra en liste. Wrapper rundt HTML `<select>` som videresender alle standard attributter.

## Komponenter

Denne pakken eksporterer følgende komponenter:

- `Dropdown`

## Installasjon

Installer pakken og alle dens avhengigheter:

```bash
npm install @sb1/ffe-dropdown-react
```

## API-referanse

### Dropdown Props

| Prop | Type | Påkrevd | Beskrivelse |
|------|------|---------|-------------|
| `inline` | `boolean` | Nei | - |

## Eksempler (fra README)

```tsx
import { Dropdown } from '@sb1/ffe-dropdown-react';
import { InputGroup } from '@sb1/ffe-form-react';

function DropdownMedLabel() {
    const [value, setValue] = React.useState('jan');

    return (
        <InputGroup label="Velg måned">
            <Dropdown value={value} onChange={e => setValue(e.target.value)}>
                <option value="jan">Januar</option>
                <option value="feb">Februar</option>
                <option value="mar">Mars</option>
            </Dropdown>
        </InputGroup>
    );
}
```

```tsx
<InputGroup label="Antall">
    <Dropdown inline={true} defaultValue="1">
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
    </Dropdown>
</InputGroup>
```

```tsx
import { Dropdown } from '@sb1/ffe-dropdown-react';
import { InputGroup } from '@sb1/ffe-form-react';

function DropdownMedFeil() {
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

## Dokumentasjon

Full dokumentasjon er tilgjengelig på https://sparebank1.github.io/designsystem/

## Tilleggskontekst

Dette er en del av SpareBank 1 FFE (Felles Front End) designsystem.
Alle komponenter følger SpareBank 1s designretningslinjer og tilgjengelighetsstandarder.
