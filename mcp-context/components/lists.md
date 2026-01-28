# @sb1/ffe-lists-react

## Beskrivelse

Liste-komponenter for punktlister, nummererte lister, sjekklister og beskrivelseslister. Inkluderer også stylede varianter og detaljkort-lister.

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
npm install @sb1/ffe-lists-react @sb1/ffe-icons-react @sb1/ffe-lists @sb1/ffe-icons @sb1/ffe-core
```

### Avhengigheter

Denne pakken er avhengig av:

- `@sb1/ffe-icons-react`
- `@sb1/ffe-lists`
- `@sb1/ffe-icons`
- `@sb1/ffe-core`

## CSS-import

I prosjektets hoved-CSS-fil, importer de nødvendige stilene:

```css
@import '@sb1/ffe-core/css/ffe.css';
@import '@sb1/ffe-icons/css/ffe-icons.css';
@import '@sb1/ffe-lists/css/lists.css';
```

Merk: Sørg for å importere `@sb1/ffe-core/css/ffe.css` først, da den inneholder grunnleggende stiler.

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

function MyComponent() {
    return (
        <BulletList>
            <BulletListItem>Første punkt</BulletListItem>
            <BulletListItem>Andre punkt</BulletListItem>
            <BulletListItem>Tredje punkt</BulletListItem>
        </BulletList>
    );
}
```

```tsx
import { NumberedList, NumberedListItem } from '@sb1/ffe-lists-react';

function MyComponent() {
    return (
        <NumberedList>
            <NumberedListItem>Steg 1</NumberedListItem>
            <NumberedListItem>Steg 2</NumberedListItem>
            <NumberedListItem>Steg 3</NumberedListItem>
        </NumberedList>
    );
}
```

```tsx
import { CheckList, CheckListItem } from '@sb1/ffe-lists-react';

function MyComponent() {
    return (
        <CheckList>
            <CheckListItem>Inkludert i pakken</CheckListItem>
            <CheckListItem>Også inkludert</CheckListItem>
            <CheckListItem isCross>Ikke inkludert</CheckListItem>
        </CheckList>
    );
}
```

```tsx
import {
    DescriptionList,
    DescriptionListTerm,
    DescriptionListDescription,
} from '@sb1/ffe-lists-react';

function MyComponent() {
    return (
        <DescriptionList>
            <DescriptionListTerm>Kontonummer</DescriptionListTerm>
            <DescriptionListDescription>1234 56 78901</DescriptionListDescription>
            <DescriptionListTerm>Saldo</DescriptionListTerm>
            <DescriptionListDescription>10 000 kr</DescriptionListDescription>
        </DescriptionList>
    );
}
```

## Dokumentasjon

Full dokumentasjon er tilgjengelig på https://design.sparebank1.no/

## Tilleggskontekst

Dette er en del av SpareBank 1 FFE (Felles Front End) designsystem.
Alle komponenter følger SpareBank 1s designretningslinjer og tilgjengelighetsstandarder.
