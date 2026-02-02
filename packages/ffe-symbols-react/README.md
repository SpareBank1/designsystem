# @sb1/ffe-symbols-react

## Foreldet pakke

Denne pakken er foreldet. Bruk [ffe-icons-react](https://github.com/SpareBank1/designsystem/tree/develop/packages/ffe-icons-react) i stedet.

---

## Oversikt

React-komponent for Material Symbols-ikoner (fontbasert).

## Installasjon

```bash
npm install @sb1/ffe-symbols-react
```

## Avhengigheter

```css
@import '@sb1/ffe-symbols/ffe-symbol.css';
```

## Grunnleggende bruk

```tsx
import { Symbol } from '@sb1/ffe-symbols-react';

<Symbol icon="home" />

<Symbol
    icon="account_balance"
    size="lg"
    weight={500}
    fill={true}
    ariaLabel="Konto"
/>
```

## Eksempler

### Størrelse

```tsx
<Symbol icon="star" size="sm" />  {/* 20px */}
<Symbol icon="star" size="xl" />  {/* 40px */}
```

### Vekt (tykkelse)

```tsx
<Symbol icon="home" weight={300} />  {/* Tynn */}
<Symbol icon="home" weight={500} />  {/* Tykk */}
```

### Fylt vs. ikke-fylt

```tsx
<Symbol icon="favorite" fill={false} />  {/* Omriss */}
<Symbol icon="favorite" fill={true} />   {/* Fylt */}
```

### Tilgjengelighet

```tsx
<Symbol icon="search" ariaLabel="Søk" />
<Symbol icon="chevron_right" />  {/* aria-hidden="true" */}
```

### Med styling

```tsx
<Symbol
    icon="warning"
    size="lg"
    className="custom-class"
    style={{ color: 'red' }}
/>
```

## Tilgjengelige ikonnavn

Vanlige eksempler: `home`, `menu`, `close`, `search`, `add`, `edit`, `delete`, `account_balance`, `credit_card`, `check_circle`, `error`, `warning`, `info`, `person`.

Komplett liste: Se `SymbolName`-typen eller [Google Material Symbols](https://fonts.google.com/icons?icon.style=Rounded).

## Genererte CSS-klasser

- `ffe-symbol` (alltid)
- `ffe-symbol--{weight}` eller `ffe-symbol--filled-{weight}`
- `ffe-symbol--{size}` (hvis angitt)
