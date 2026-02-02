# @sb1/ffe-lists-react

## Beskrivelse

Liste-komponenter for punktlister, nummererte lister, sjekklister og beskrivelseslister. Inkluderer også stylede varianter og detaljkort-lister.

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

Full dokumentasjon er tilgjengelig på https://sparebank1.github.io/designsystem/komponenter/lister/.

## Eksempler

### Punktliste

Brukes for uordnede lister der rekkefølgen ikke er viktig.

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

**BulletList Props:**

| Prop        | Type                                   | Standard    | Beskrivelse                                              |
| ----------- | -------------------------------------- | ----------- | -------------------------------------------------------- |
| `condensed` | `boolean`                              | `undefined` | Reduserer avstanden mellom elementer for kompakte design |
| `className` | `string`                               | `undefined` | Ekstra CSS-klasser                                       |
| `...rest`   | `React.ComponentPropsWithoutRef<'ul'>` | -           | Alle standard HTML ul-attributter                        |

**BulletListItem Props:**

| Prop        | Type                                   | Standard    | Beskrivelse                       |
| ----------- | -------------------------------------- | ----------- | --------------------------------- |
| `className` | `string`                               | `undefined` | Ekstra CSS-klasser                |
| `children`  | `React.ReactNode`                      | -           | Innholdet i listepunktet          |
| `...rest`   | `React.ComponentPropsWithoutRef<'li'>` | -           | Alle standard HTML li-attributter |

### Nummerert liste

Brukes for ordnede lister der rekkefølgen er viktig, for eksempel steg i en prosess.

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

**Med condensed-variant:**

```tsx
<NumberedList condensed={true}>
    <NumberedListItem>Installer pakken via NPM</NumberedListItem>
    <NumberedListItem>Importer pakken i koden din</NumberedListItem>
    <NumberedListItem>Profit!</NumberedListItem>
</NumberedList>
```

**NumberedList Props:**

| Prop        | Type                                   | Standard    | Beskrivelse                                              |
| ----------- | -------------------------------------- | ----------- | -------------------------------------------------------- |
| `condensed` | `boolean`                              | `undefined` | Reduserer avstanden mellom elementer for kompakte design |
| `className` | `string`                               | `undefined` | Ekstra CSS-klasser                                       |
| `...rest`   | `React.ComponentPropsWithoutRef<'ol'>` | -           | Alle standard HTML ol-attributter                        |

**NumberedListItem Props:**

| Prop        | Type                                   | Standard    | Beskrivelse                       |
| ----------- | -------------------------------------- | ----------- | --------------------------------- |
| `className` | `string`                               | `undefined` | Ekstra CSS-klasser                |
| `children`  | `React.ReactNode`                      | -           | Innholdet i listepunktet          |
| `...rest`   | `React.ComponentPropsWithoutRef<'li'>` | -           | Alle standard HTML li-attributter |

### Stilisert nummerert liste

En visuelt fremhevet variant av nummerert liste med store, tydelige tall.

```tsx
import {
    StylizedNumberedList,
    StylizedNumberedListItem,
} from '@sb1/ffe-lists-react';

function MyComponent() {
    return (
        <StylizedNumberedList>
            <StylizedNumberedListItem>
                Installer pakken via NPM
            </StylizedNumberedListItem>
            <StylizedNumberedListItem>
                Importer pakken i koden din
            </StylizedNumberedListItem>
            <StylizedNumberedListItem>Profit!</StylizedNumberedListItem>
        </StylizedNumberedList>
    );
}
```

**StylizedNumberedList Props:**

| Prop        | Type                                   | Standard    | Beskrivelse                       |
| ----------- | -------------------------------------- | ----------- | --------------------------------- |
| `className` | `string`                               | `undefined` | Ekstra CSS-klasser                |
| `...rest`   | `React.ComponentPropsWithoutRef<'ol'>` | -           | Alle standard HTML ol-attributter |

**StylizedNumberedListItem Props:**

| Prop        | Type                                   | Standard    | Beskrivelse                       |
| ----------- | -------------------------------------- | ----------- | --------------------------------- |
| `className` | `string`                               | `undefined` | Ekstra CSS-klasser                |
| `children`  | `React.ReactNode`                      | -           | Innholdet i listepunktet          |
| `...rest`   | `React.ComponentPropsWithoutRef<'li'>` | -           | Alle standard HTML li-attributter |

### Sjekkliste

Brukes for lister som viser hva som er inkludert/ikke inkludert, eller fordeler/ulemper.

```tsx
import { CheckList, CheckListItem } from '@sb1/ffe-lists-react';

function MyComponent() {
    return (
        <CheckList>
            <CheckListItem>Inkludert i pakken</CheckListItem>
            <CheckListItem>Også inkludert</CheckListItem>
            <CheckListItem isCross={true}>Ikke inkludert</CheckListItem>
        </CheckList>
    );
}
```

**Med to kolonner:**

```tsx
<CheckList columns={2}>
    <CheckListItem>Ferdige komponenter</CheckListItem>
    <CheckListItem>Likt design</CheckListItem>
    <CheckListItem>Høy utviklingshastighet</CheckListItem>
    <CheckListItem isCross={true}>Flere bugs</CheckListItem>
</CheckList>
```

**CheckList Props:**

| Prop        | Type                                   | Standard    | Beskrivelse                         |
| ----------- | -------------------------------------- | ----------- | ----------------------------------- |
| `columns`   | `1 \| 2 \| '1' \| '2'`                 | `1`         | Antall kolonner listen skal vises i |
| `className` | `string`                               | `undefined` | Ekstra CSS-klasser                  |
| `...rest`   | `React.ComponentPropsWithoutRef<'ul'>` | -           | Alle standard HTML ul-attributter   |

**CheckListItem Props:**

| Prop        | Type                                   | Standard    | Beskrivelse                                              |
| ----------- | -------------------------------------- | ----------- | -------------------------------------------------------- |
| `isCross`   | `boolean`                              | `false`     | Hvis `true`, vises et rodt kryss i stedet for gronn hake |
| `className` | `string`                               | `undefined` | Ekstra CSS-klasser                                       |
| `children`  | `React.ReactNode`                      | -           | Innholdet i listepunktet                                 |
| `...rest`   | `React.ComponentPropsWithoutRef<'li'>` | -           | Alle standard HTML li-attributter                        |

### Beskrivelsesliste

Brukes for term/definisjon-par, for eksempel personalia eller kontodetaljer.

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

**Horisontal variant:**

```tsx
<DescriptionList horizontal={true}>
    <DescriptionListTerm>Navn</DescriptionListTerm>
    <DescriptionListDescription>Ola Nordmann</DescriptionListDescription>
    <DescriptionListTerm>Adresse</DescriptionListTerm>
    <DescriptionListDescription>Husgata 14</DescriptionListDescription>
</DescriptionList>
```

**Med storrelse:**

```tsx
<DescriptionList horizontal={true} size="lg">
    <DescriptionListTerm>Navn</DescriptionListTerm>
    <DescriptionListDescription>Ola Nordmann</DescriptionListDescription>
</DescriptionList>
```

**DescriptionList Props:**

| Prop         | Type                                    | Standard    | Beskrivelse                              |
| ------------ | --------------------------------------- | ----------- | ---------------------------------------- |
| `size`       | `'md' \| 'lg'`                          | `undefined` | Storrelse pa teksten                     |
| `horizontal` | `boolean`                               | `undefined` | Viser term og beskrivelse pa samme linje |
| `className`  | `string`                                | `undefined` | Ekstra CSS-klasser                       |
| `...rest`    | `React.ComponentPropsWithoutRef<'div'>` | -           | Alle standard HTML div-attributter       |

**DescriptionListTerm Props:**

| Prop        | Type                                    | Standard    | Beskrivelse                        |
| ----------- | --------------------------------------- | ----------- | ---------------------------------- |
| `className` | `string`                                | `undefined` | Ekstra CSS-klasser                 |
| `children`  | `React.ReactNode`                       | -           | Term-teksten                       |
| `...rest`   | `React.ComponentPropsWithoutRef<'div'>` | -           | Alle standard HTML div-attributter |

**DescriptionListDescription Props:**

| Prop        | Type                                    | Standard    | Beskrivelse                        |
| ----------- | --------------------------------------- | ----------- | ---------------------------------- |
| `className` | `string`                                | `undefined` | Ekstra CSS-klasser                 |
| `children`  | `React.ReactNode`                       | -           | Beskrivelsesteksten                |
| `...rest`   | `React.ComponentPropsWithoutRef<'div'>` | -           | Alle standard HTML div-attributter |

### Beskrivelsesliste med flere kolonner

Automatisk flerspaltet variant som grupperer term/beskrivelse-par.

```tsx
import {
    DescriptionListMultiCol,
    DescriptionListTerm,
    DescriptionListDescription,
} from '@sb1/ffe-lists-react';

function MyComponent() {
    return (
        <DescriptionListMultiCol>
            <DescriptionListTerm>Navn</DescriptionListTerm>
            <DescriptionListDescription>
                Ola Nordmann
            </DescriptionListDescription>
            <DescriptionListTerm>Adresse</DescriptionListTerm>
            <DescriptionListDescription>Husgata 14</DescriptionListDescription>
            <DescriptionListTerm>Postnummer</DescriptionListTerm>
            <DescriptionListDescription>0362</DescriptionListDescription>
            <DescriptionListTerm>Sted</DescriptionListTerm>
            <DescriptionListDescription>Oslo</DescriptionListDescription>
        </DescriptionListMultiCol>
    );
}
```

**DescriptionListMultiCol Props:**

| Prop        | Type                                    | Standard    | Beskrivelse                                                                     |
| ----------- | --------------------------------------- | ----------- | ------------------------------------------------------------------------------- |
| `className` | `string`                                | `undefined` | Ekstra CSS-klasser                                                              |
| `children`  | `React.ReactNode`                       | -           | Term/beskrivelse-par (bruker DescriptionListTerm og DescriptionListDescription) |
| `...rest`   | `React.ComponentPropsWithoutRef<'div'>` | -           | Alle standard HTML div-attributter                                              |

### Detaljkort-liste

Brukes for strukturert visning av label/verdi-par i et kortformat.

```tsx
import { DetailListCard, DetailListCardItem } from '@sb1/ffe-lists-react';

function MyComponent() {
    return (
        <DetailListCard>
            <DetailListCardItem label="Kontonavn" value="Daglig konto" />
            <DetailListCardItem label="Kontotype" value="Brukskonto" />
            <DetailListCardItem label="Kontonummer" value="1234 45 34554" />
            <DetailListCardItem label="Kontoeier" value="Ola Nordmann" />
        </DetailListCard>
    );
}
```

**Med bakgrunnsfarge:**

```tsx
<DetailListCard bgColor="secondary">
    <DetailListCardItem label="Kontonavn" value="Daglig konto" />
    <DetailListCardItem label="Kontonummer" value="1234 45 34554" />
</DetailListCard>
```

**Med appearance for accent-modus:**

```tsx
<DetailListCard appearance="accent" bgColor="tertiary">
    <DetailListCardItem label="Kontonavn" value="Daglig konto" />
    <DetailListCardItem label="Kontonummer" value="1234 45 34554" />
</DetailListCard>
```

**DetailListCard Props:**

| Prop         | Type                                     | Standard    | Beskrivelse                                                                   |
| ------------ | ---------------------------------------- | ----------- | ----------------------------------------------------------------------------- |
| `appearance` | `'default' \| 'accent'`                  | `'default'` | Utseende i kontekst accent. Velg `'accent'` for blatt utseende i accent-modus |
| `bgColor`    | `'primary' \| 'secondary' \| 'tertiary'` | `undefined` | Bakgrunnsfarge. Fungerer med dark mode og accent mode                         |
| `className`  | `string`                                 | `undefined` | Ekstra CSS-klasser                                                            |
| `children`   | `React.ReactNode`                        | -           | DetailListCardItem-elementer                                                  |
| `...rest`    | `React.ComponentPropsWithoutRef<'ul'>`   | -           | Alle standard HTML ul-attributter                                             |

**DetailListCardItem Props:**

| Prop        | Type                                  | Standard    | Beskrivelse                       |
| ----------- | ------------------------------------- | ----------- | --------------------------------- |
| `label`     | `React.ReactNode`                     | **Pakrevd** | Innholdet i label/venstre kolonne |
| `value`     | `React.ReactNode`                     | **Pakrevd** | Innholdet i verdi/hoyre kolonne   |
| `className` | `string`                              | `undefined` | Ekstra CSS-klasser                |
| `...rest`   | `React.HTMLAttributes<HTMLLIElement>` | -           | Alle standard HTML li-attributter |

## Utvikling

For a starte en lokal utviklingsserver, kjor folgende fra designsystem-rotmappen:

```bash
npm install
npm run build
npm start
```

En lokal Storybook-instans med live reloading vil kjore pa http://localhost:6006/.

Eksempelimplementasjoner med de nyeste versjonene av alle komponentene er ogsa tilgjengelige pa https://sparebank1.github.io/designsystem.
