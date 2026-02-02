# @sb1/ffe-dropdown-react

## Beskrivelse

Nedtrekksliste for valg av ett alternativ fra en liste. Wrapper rundt HTML `<select>` som videresender alle standard attributter.

## Installasjon

```bash
npm install --save @sb1/ffe-dropdown-react
```

## Bruk

Full dokumentasjon: https://sparebank1.github.io/designsystem/

### Importere CSS

```css
@import '@sb1/ffe-form/css/form.css';
```

## Eksempler

### Grunnleggende bruk med InputGroup (anbefalt)

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

### Inline-modus

```tsx
<InputGroup label="Antall">
    <Dropdown inline={true} defaultValue="1">
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
    </Dropdown>
</InputGroup>
```

### Validering med feilmelding

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

## Utvikling

```bash
npm install
npm run build
npm start
```

Lokal Storybook kjører på http://localhost:6006/.
