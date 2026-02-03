# @sb1/ffe-lists-react

## Beskrivelse

Liste-komponenter for punktlister, nummererte lister, sjekklister og beskrivelseslister.

## Komponenter

Denne pakken eksporterer følgende komponenter:

- `BulletList`
- `BulletListItem`
- `CheckList`
- `CheckListItem`
- `NumberedList`
- `NumberedListItem`
- `StylizedNumberedList`
- `StylizedNumberedListItem`
- `DescriptionList`
- `DescriptionListMultiCol`
- `DescriptionListTerm`
- `DescriptionListDescription`
- `DetailListCard`
- `DetailListCardItem`

## Installasjon

Installer pakken og alle dens avhengigheter:

```bash
npm install @sb1/ffe-lists-react
```

## API-referanse

### BulletList Props

| Prop | Type | Påkrevd | Beskrivelse |
|------|------|---------|-------------|
| `condensed` | `boolean` | Nei | Condensed modifier. Use in condensed designs |

### BulletListItem Props

Ingen komponentspesifikke props utover native HTML-attributter.

### CheckList Props

| Prop | Type | Påkrevd | Beskrivelse |
|------|------|---------|-------------|
| `columns` | `1 | 2 | '1' | '2'` | Nei | - |

### CheckListItem Props

| Prop | Type | Påkrevd | Beskrivelse |
|------|------|---------|-------------|
| `isCross` | `boolean` | Nei | If true, render a red cross instead of a green checkmark |

### NumberedList Props

| Prop | Type | Påkrevd | Beskrivelse |
|------|------|---------|-------------|
| `condensed` | `boolean` | Nei | Condensed modifier. Use in condensed designs |

### NumberedListItem Props

Ingen komponentspesifikke props utover native HTML-attributter.

### StylizedNumberedList Props

Ingen komponentspesifikke props utover native HTML-attributter.

### StylizedNumberedListItem Props

Ingen komponentspesifikke props utover native HTML-attributter.

### DescriptionList Props

| Prop | Type | Påkrevd | Beskrivelse |
|------|------|---------|-------------|
| `size` | `'md' | 'lg'` | Nei | - |
| `horizontal` | `boolean` | Nei | Displays dts and dds inline |

### DescriptionListMultiCol Props

Ingen komponentspesifikke props utover native HTML-attributter.

### DescriptionListTerm Props

Ingen komponentspesifikke props utover native HTML-attributter.

### DescriptionListDescription Props

Ingen komponentspesifikke props utover native HTML-attributter.

### DetailListCard Props

| Prop | Type | Påkrevd | Beskrivelse |
|------|------|---------|-------------|
| `appearance` | `'default' | 'accent'` | Nei | Avgjør utseende i kontekst accent. Hvis man ønsker et blått utseende i kontekst accent, velg appearance: 'accent' |
| `bgColor` | `BackgroundColor` | Nei | Property has new values that work with dark and accent mode as part of the Semantic Color update Possible values: `primary` `secondary` `tertiary` [Read more in the upgrade guide](https://sparebank1.github.io/designsystem/?path=/docs/introduksjon-changelog--docs#2025---februar---semantiske-farger) |

### DetailListCardItem Props

| Prop | Type | Påkrevd | Beskrivelse |
|------|------|---------|-------------|
| `label` | `React.ReactNode` | Ja | Content of the label / left column |
| `value` | `React.ReactNode` | Ja | Content of the value / right column |

## Eksempler (fra README)

```tsx
import { BulletList, BulletListItem } from '@sb1/ffe-lists-react';

<BulletList>
    <BulletListItem>Første punkt</BulletListItem>
    <BulletListItem>Andre punkt</BulletListItem>
</BulletList>;
```

```tsx
import { NumberedList, NumberedListItem } from '@sb1/ffe-lists-react';

<NumberedList condensed={true}>
    <NumberedListItem>Steg 1</NumberedListItem>
    <NumberedListItem>Steg 2</NumberedListItem>
</NumberedList>;
```

```tsx
import {
    StylizedNumberedList,
    StylizedNumberedListItem,
} from '@sb1/ffe-lists-react';

<StylizedNumberedList>
    <StylizedNumberedListItem>Første steg</StylizedNumberedListItem>
    <StylizedNumberedListItem>Andre steg</StylizedNumberedListItem>
</StylizedNumberedList>;
```

```tsx
import { CheckList, CheckListItem } from '@sb1/ffe-lists-react';

<CheckList columns={2}>
    <CheckListItem>Inkludert</CheckListItem>
    <CheckListItem isCross={true}>Ikke inkludert</CheckListItem>
</CheckList>;
```

```tsx
import {
    DescriptionList,
    DescriptionListTerm,
    DescriptionListDescription,
} from '@sb1/ffe-lists-react';

<DescriptionList horizontal={true} size="lg">
    <DescriptionListTerm>Kontonummer</DescriptionListTerm>
    <DescriptionListDescription>1234 56 78901</DescriptionListDescription>
    <DescriptionListTerm>Saldo</DescriptionListTerm>
    <DescriptionListDescription>10 000 kr</DescriptionListDescription>
</DescriptionList>;
```

```tsx
import {
    DescriptionListMultiCol,
    DescriptionListTerm,
    DescriptionListDescription,
} from '@sb1/ffe-lists-react';

<DescriptionListMultiCol>
    <DescriptionListTerm>Navn</DescriptionListTerm>
    <DescriptionListDescription>Ola Nordmann</DescriptionListDescription>
    <DescriptionListTerm>Adresse</DescriptionListTerm>
    <DescriptionListDescription>Husgata 14</DescriptionListDescription>
</DescriptionListMultiCol>;
```

## Dokumentasjon

Full dokumentasjon er tilgjengelig på https://sparebank1.github.io/designsystem/

## Tilleggskontekst

Dette er en del av SpareBank 1 FFE (Felles Front End) designsystem.
Alle komponenter følger SpareBank 1s designretningslinjer og tilgjengelighetsstandarder.
