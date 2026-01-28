# @sb1/ffe-lists-react

## Beskrivelse

Liste-komponenter for punktlister, nummererte lister, sjekklister og beskrivelseslister. Inkluderer også stylede varianter og detaljkort-lister.

## Installasjon

```bash
npm install --save @sb1/ffe-lists-react
```

## Bruk

Full dokumentasjon er tilgjengelig på https://design.sparebank1.no/komponenter/lister/.

## Eksempler

### Punktliste

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

### Nummerert liste

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

### Sjekkliste

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

### Beskrivelsesliste

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
            <DescriptionListDescription>
                1234 56 78901
            </DescriptionListDescription>
            <DescriptionListTerm>Saldo</DescriptionListTerm>
            <DescriptionListDescription>10 000 kr</DescriptionListDescription>
        </DescriptionList>
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
