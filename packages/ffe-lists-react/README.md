# @sb1/ffe-lists-react

## Beskrivelse

Liste-komponenter for punktlister, nummererte lister, sjekklister og beskrivelseslister.

### Tilgjengelige komponenter

| Komponent                                                              | Beskrivelse                                 |
| ---------------------------------------------------------------------- | ------------------------------------------- |
| `BulletList`, `BulletListItem`                                         | Standard punktliste med kulepunkter         |
| `NumberedList`, `NumberedListItem`                                     | Nummerert liste (ordered list)              |
| `StylizedNumberedList`, `StylizedNumberedListItem`                     | Nummerert liste med visuelt fremhevede tall |
| `CheckList`, `CheckListItem`                                           | Sjekkliste med hake- eller kryssikoner      |
| `DescriptionList`, `DescriptionListTerm`, `DescriptionListDescription` | Beskrivelsesliste for term/definisjon-par   |
| `DescriptionListMultiCol`                                              | Beskrivelsesliste i flere kolonner          |
| `DetailListCard`, `DetailListCardItem`                                 | Kortbasert liste for detaljvisning          |

## Installasjon

```bash
npm install --save @sb1/ffe-lists-react
```

## Bruk

Full dokumentasjon: https://sparebank1.github.io/designsystem/komponenter/lister/

## Eksempler

### Punktliste

```tsx
import { BulletList, BulletListItem } from '@sb1/ffe-lists-react';

<BulletList>
    <BulletListItem>Første punkt</BulletListItem>
    <BulletListItem>Andre punkt</BulletListItem>
</BulletList>;
```

### Nummerert liste

```tsx
import { NumberedList, NumberedListItem } from '@sb1/ffe-lists-react';

<NumberedList condensed={true}>
    <NumberedListItem>Steg 1</NumberedListItem>
    <NumberedListItem>Steg 2</NumberedListItem>
</NumberedList>;
```

### Stilisert nummerert liste

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

### Sjekkliste

```tsx
import { CheckList, CheckListItem } from '@sb1/ffe-lists-react';

<CheckList columns={2}>
    <CheckListItem>Inkludert</CheckListItem>
    <CheckListItem isCross={true}>Ikke inkludert</CheckListItem>
</CheckList>;
```

### Beskrivelsesliste

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

### Beskrivelsesliste med flere kolonner

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

### Detaljkort-liste

```tsx
import { DetailListCard, DetailListCardItem } from '@sb1/ffe-lists-react';

<DetailListCard appearance="accent" bgColor="secondary">
    <DetailListCardItem label="Kontonavn" value="Daglig konto" />
    <DetailListCardItem label="Kontonummer" value="1234 45 34554" />
</DetailListCard>;
```

## Utvikling

```bash
npm install
npm run build
npm start
```

Lokal Storybook kjorer pa http://localhost:6006/.
