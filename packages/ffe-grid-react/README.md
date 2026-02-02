# @sb1/ffe-grid-react

## Beskrivelse

Grid-system for responsive layouts (foreldet - bruk CSS Grid eller Flexbox i stedet).

Pakken eksporterer tre komponenter som brukes sammen:

- `Grid` - Ytterste container som definerer grid-gapet
- `GridRow` - Rad-container med støtte for bakgrunnsfarge, margin og padding
- `GridCol` - Kolonne-container med responsiv bredde (12-kolonners system)

## Installasjon

```bash
npm install --save @sb1/ffe-grid-react
```

## Bruk

Full dokumentasjon er tilgjengelig på https://sparebank1.github.io/designsystem/komponenter/grid/.

### Import

```tsx
import { Grid, GridRow, GridCol } from '@sb1/ffe-grid-react';
import type {
    GridProps,
    GridRowProps,
    GridColProps,
} from '@sb1/ffe-grid-react';
```

### Grunnleggende eksempel

```tsx
<Grid>
    <GridRow>
        <GridCol sm={6}>Venstre kolonne (6 av 12)</GridCol>
        <GridCol sm={6}>Høyre kolonne (6 av 12)</GridCol>
    </GridRow>
</Grid>
```

### Responsiv layout med breakpoints

Bruk `sm`, `md` og `lg` props for å definere kolonnebredde på ulike skjermstørrelser:

```tsx
<Grid>
    <GridRow>
        <GridCol sm={12} md={6} lg={4}>
            Full bredde på mobil, halv på medium, 1/3 på store skjermer
        </GridCol>
        <GridCol sm={12} md={6} lg={4}>
            Full bredde på mobil, halv på medium, 1/3 på store skjermer
        </GridCol>
        <GridCol sm={12} md={12} lg={4}>
            Full bredde på mobil og medium, 1/3 på store skjermer
        </GridCol>
    </GridRow>
</Grid>
```

### Offset (forskyvning av kolonner)

Bruk objekt-syntaks for å sette både antall kolonner og offset:

```tsx
<Grid>
    <GridRow>
        <GridCol
            sm={{ cols: 10, offset: 1 }}
            md={{ cols: 8, offset: 2 }}
            lg={{ cols: 6, offset: 3 }}
        >
            Sentert innhold med økende marginer på større skjermer
        </GridCol>
    </GridRow>
</Grid>
```

### Grid med spacing

```tsx
<Grid gap="lg">
    <GridRow margin="md" padding="sm" bgColor="secondary">
        <GridCol sm={6} bgColor="tertiary">
            Kolonne 1
        </GridCol>
        <GridCol sm={6} bgColor="tertiary">
            Kolonne 2
        </GridCol>
    </GridRow>
</Grid>
```

### Responsiv spacing på GridRow

```tsx
<GridRow
    margin="sm"
    padding="xs"
    sm={{ margin: 'sm', padding: 'xs' }}
    md={{ margin: 'md', padding: 'sm' }}
    lg={{ margin: 'lg', padding: 'md' }}
>
    <GridCol sm={12}>Rad med responsiv margin og padding</GridCol>
</GridRow>
```

---

## Komponent-API

### Grid

Ytterste container-komponent.

| Prop        | Type                                              | Standard | Beskrivelse                                     |
| ----------- | ------------------------------------------------- | -------- | ----------------------------------------------- |
| `gap`       | `'none' \| '2xs' \| 'xs' \| 'sm' \| 'md' \| 'lg'` | -        | Intern gutter mellom kolonner                   |
| `sm`        | `Gap \| { gap?: Gap }`                            | -        | Gap-størrelse for små skjermer                  |
| `md`        | `Gap \| { gap?: Gap }`                            | -        | Gap-størrelse for medium skjermer               |
| `lg`        | `Gap \| { gap?: Gap }`                            | -        | Gap-størrelse for store skjermer                |
| `as`        | `ElementType`                                     | `'div'`  | HTML-element eller React-komponent å rendre som |
| `className` | `string`                                          | -        | Ekstra CSS-klasser                              |

**Gap-verdier:** `'none'`, `'2xs'`, `'xs'`, `'sm'`, `'md'`, `'lg'`

### GridRow

Rad-container som kan ha bakgrunnsfarge, margin og padding.

| Prop        | Type                                                          | Standard | Beskrivelse                                     |
| ----------- | ------------------------------------------------------------- | -------- | ----------------------------------------------- |
| `bgColor`   | `'primary' \| 'secondary' \| 'tertiary'`                      | -        | Bakgrunnsfarge                                  |
| `margin`    | `Margin`                                                      | -        | Vertikal margin (topp og bunn)                  |
| `padding`   | `Padding`                                                     | -        | Vertikal padding (topp og bunn)                 |
| `sm`        | `Margin \| Padding \| { margin?: Margin; padding?: Padding }` | -        | Størrelse for små skjermer                      |
| `md`        | `Margin \| Padding \| { margin?: Margin; padding?: Padding }` | -        | Størrelse for medium skjermer                   |
| `lg`        | `Margin \| Padding \| { margin?: Margin; padding?: Padding }` | -        | Størrelse for store skjermer                    |
| `as`        | `ElementType`                                                 | `'div'`  | HTML-element eller React-komponent å rendre som |
| `className` | `string`                                                      | -        | Ekstra CSS-klasser                              |

**Margin/Padding-verdier:** `'2xs'`, `'xs'`, `'sm'`, `'md'`, `'lg'`, `'xl'`, `'2xl'`, `'3xl'`, `'4xl'`, `'5xl'`

### GridCol

Kolonne-komponent med responsiv bredde basert på 12-kolonners system.

| Prop         | Type                                     | Standard                              | Beskrivelse                                     |
| ------------ | ---------------------------------------- | ------------------------------------- | ----------------------------------------------- |
| `sm`         | `0-12 \| { cols: 0-12; offset?: 0-12 }`  | `12` (hvis ingen breakpoints er satt) | Kolonnebredde for små skjermer                  |
| `md`         | `0-12 \| { cols: 0-12; offset?: 0-12 }`  | -                                     | Kolonnebredde for medium skjermer               |
| `lg`         | `0-12 \| { cols: 0-12; offset?: 0-12 }`  | -                                     | Kolonnebredde for store skjermer                |
| `bgColor`    | `'primary' \| 'secondary' \| 'tertiary'` | -                                     | Bakgrunnsfarge                                  |
| `center`     | `boolean`                                | `false`                               | Sentrer innhold vertikalt                       |
| `centerText` | `boolean`                                | `false`                               | Sentrer tekst horisontalt                       |
| `as`         | `ElementType`                            | `'div'`                               | HTML-element eller React-komponent å rendre som |
| `className`  | `string`                                 | -                                     | Ekstra CSS-klasser                              |

**Kolonneverdier:** Tall fra `0` til `12`, eller strenger `'0'` til `'12'`

**Merk:** Hvis ingen av `sm`, `md` eller `lg` er satt, får kolonnen automatisk `sm={12}` (full bredde).

---

## TypeScript-typer

```tsx
// Gap-verdier for Grid
type Gap = 'none' | '2xs' | 'xs' | 'sm' | 'md' | 'lg';

// Margin og Padding-verdier for GridRow
type Margin =
    | '2xs'
    | 'xs'
    | 'sm'
    | 'md'
    | 'lg'
    | 'xl'
    | '2xl'
    | '3xl'
    | '4xl'
    | '5xl';
type Padding =
    | '2xs'
    | 'xs'
    | 'sm'
    | 'md'
    | 'lg'
    | 'xl'
    | '2xl'
    | '3xl'
    | '4xl'
    | '5xl';

// Bakgrunnsfarge for GridRow og GridCol
type BackgroundColor = 'primary' | 'secondary' | 'tertiary';

// Kolonneverdier for GridCol (tall eller streng)
type ColumnsRange =
    | 0
    | 1
    | 2
    | 3
    | 4
    | 5
    | 6
    | 7
    | 8
    | 9
    | 10
    | 11
    | 12
    | '0'
    | '1'
    | '2'
    | '3'
    | '4'
    | '5'
    | '6'
    | '7'
    | '8'
    | '9'
    | '10'
    | '11'
    | '12';

// GridCol size modifier - enten bare antall kolonner eller objekt med offset
type SizeModifier =
    | ColumnsRange
    | { cols: ColumnsRange; offset?: ColumnsRange };
```

## DevTool: Grid overlay

For å lettere inspisere hvordan innholdet legger seg i kolonner, eller for å se hvordan gridden vil kunne passe inn på en eksisterende webside eksporteres det et separat util som vil lage en full-skjerm overlay med kolonner på en eksisterende side. Fra denne modulen eksporteres bare en funksjon som lager en fixed positioned div og det er opp til applikasjonen hvordan man ønsker å bruke den.

Et eksempel er

```javascript
import showGrid from '@sb1/ffe-grid-react/lib/show-grid';
window.showGrid = showGrid;
```

Funksjonen man importerer fra `ffe-grid-react/lib/show-grid` fungerer som en toggle.

## Utvikling

For å starte en lokal utviklingsserver, kjør følgende fra designsystem-rotmappen:

```bash
npm install
npm run build
npm start
```

En lokal Storybook-instans med live reloading vil kjøre på http://localhost:6006/.

Eksempelimplementasjoner med de nyeste versjonene av alle komponentene er også tilgjengelige på https://sparebank1.github.io/designsystem.
