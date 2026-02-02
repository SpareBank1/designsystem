# @sb1/ffe-symbols-react

## Foreldet pakke

Denne pakken er foreldet og vil bli fjernet fra designsystem-repoet.

For det nye ikonsettet, se [ffe-icons](https://github.com/SpareBank1/designsystem/tree/develop/packages/ffe-icons) og/eller [ffe-icons-react](https://github.com/SpareBank1/designsystem/tree/develop/packages/ffe-icons-react).

---

## Oversikt

React-komponent for Material Symbols-ikoner tilpasset SpareBank 1 sine behov. Denne komponenten bruker fontbaserte ikoner fra Google Material Symbols.

## Installasjon

```bash
npm install @sb1/ffe-symbols-react
```

## Avhengigheter

Denne pakken krever at CSS fra `@sb1/ffe-symbols` importeres:

```css
@import '@sb1/ffe-symbols/symbol.less';
```

eller

```css
@import '@sb1/ffe-symbols/ffe-symbol.css';
```

## Grunnleggende bruk

```tsx
import { Symbol } from '@sb1/ffe-symbols-react';

// Enkel bruk
<Symbol icon="home" />

// Med tilpasninger
<Symbol
    icon="account_balance"
    size="lg"
    weight={500}
    fill={true}
    ariaLabel="Konto"
/>
```

## API

### Symbol

React-komponent som rendrer et ikon som en `<span>` med Material Symbols-font.

#### Props

| Prop        | Type                                     | Standardverdi                | Beskrivelse                                                                                 |
| ----------- | ---------------------------------------- | ---------------------------- | ------------------------------------------------------------------------------------------- |
| `icon`      | `SymbolName`                             | **(obligatorisk)**           | Navnet på ikonet som skal vises. Se liste over tilgjengelige ikoner nedenfor.               |
| `size`      | `'sm' \| 'md' \| 'lg' \| 'xl'`           | Nærmeste definerte font-size | Størrelsen på ikonet. `sm`=20px, `md`=24px, `lg`=32px, `xl`=40px                            |
| `weight`    | `300 \| 500`                             | `300`                        | Tykkelsen på ikonets streker. 300 gir tynnere linjer, 500 gir tykkere.                      |
| `fill`      | `boolean`                                | `false`                      | Fyller ikonet med farge hvis `true`.                                                        |
| `ariaLabel` | `string \| null`                         | `undefined`                  | Tilgjengelighetstekst. Hvis ikke satt eller `null`, settes `aria-hidden="true"` automatisk. |
| `className` | `string`                                 | `undefined`                  | Ekstra CSS-klasse(r) som legges til på elementet.                                           |
| `...rest`   | `React.ComponentPropsWithoutRef<'span'>` | -                            | Alle andre span-attributter støttes, f.eks. `id`, `style`, `onClick`.                       |

### SymbolProps

TypeScript-interface for komponentens props:

```typescript
import { SymbolProps } from '@sb1/ffe-symbols-react';

interface SymbolProps extends React.ComponentPropsWithoutRef<'span'> {
    icon: SymbolName;
    size?: 'sm' | 'md' | 'lg' | 'xl';
    weight?: 300 | 500;
    fill?: boolean;
    ariaLabel?: string | null;
}
```

## Eksempler

### Størrelse

```tsx
<Symbol icon="star" size="sm" />  {/* 20px */}
<Symbol icon="star" size="md" />  {/* 24px */}
<Symbol icon="star" size="lg" />  {/* 32px */}
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
{/* Med beskrivende tekst for skjermlesere */}
<Symbol icon="search" ariaLabel="Søk" />

{/* Skjult for skjermlesere (f.eks. dekorativt ikon) */}
<Symbol icon="chevron_right" ariaLabel={null} />
<Symbol icon="chevron_right" />  {/* Samme resultat */}
```

### Med styling

```tsx
<Symbol
    icon="warning"
    size="lg"
    className="custom-icon-class"
    style={{ color: 'red' }}
/>
```

## Tilgjengelige ikonnavn

Ikonene kommer fra Google Material Symbols. Noen vanlige eksempler:

- Navigasjon: `home`, `menu`, `close`, `arrow_back`, `arrow_forward`, `chevron_left`, `chevron_right`
- Handlinger: `search`, `add`, `edit`, `delete`, `save`, `settings`, `refresh`
- Kommunikasjon: `email`, `phone`, `chat`, `notification`, `share`
- Bank/finans: `account_balance`, `credit_card`, `payments`, `savings`, `wallet`
- Status: `check_circle`, `error`, `warning`, `info`, `help`
- Personer: `person`, `group`, `account_circle`, `face`

For komplett liste over alle 3299 tilgjengelige ikonnavn, se `SymbolName`-typen i `@sb1/ffe-symbols-react/types/symbolNames.ts` eller bruk autocomplete i TypeScript-editoren.

Du kan også finne ikonnavn på [Google Fonts Material Symbols](https://fonts.google.com/icons?icon.style=Rounded).

## Genererte CSS-klasser

Komponenten genererer følgende CSS-klasser på `<span>`-elementet:

- `ffe-symbol` (alltid)
- `ffe-symbol--{weight}` eller `ffe-symbol--filled-{weight}` (basert på `fill` og `weight`)
- `ffe-symbol--{size}` (hvis `size` er angitt)

Eksempel på generert HTML:

```html
<span
    class="ffe-symbol ffe-symbol--filled-500 ffe-symbol--lg"
    role="graphics-symbol img"
    aria-label="Favoritt"
>
    favorite
</span>
```
