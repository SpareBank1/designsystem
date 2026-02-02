# @sb1/ffe-cards-react

## Installasjon

```bash
npm install --save @sb1/ffe-cards-react
```

## Bruk

Avhengig av `@sb1/ffe-icons-react`. Husk a importere less-filene.

## Beskrivelse

Kort-komponenter for presentasjon av innhold. Alle bruker render prop-monster der innholdskomponenter (`Title`, `Text`, `Subtext`, `CardName`, `CardAction`) gis som funksjonargumenter.

## Eksporterte komponenter

- `CardBase` - Grunnleggende kortkomponent
- `TextCard` - Tekstkort uten visuelt element
- `IconCard` - Kort med ikon til venstre
- `ImageCard` - Kort med bilde
- `IllustrationCard` - Kort med illustrasjon
- `StippledCard` - Kort med stiplet kant
- `GroupCard`, `GroupCardTitle`, `GroupCardElement`, `GroupCardFooter` - Grupperte kort

## Eksempler

### Import

```tsx
import {
    TextCard,
    IconCard,
    ImageCard,
    IllustrationCard,
    StippledCard,
    GroupCard,
    GroupCardTitle,
    GroupCardElement,
    GroupCardFooter,
} from '@sb1/ffe-cards-react';
import { Icon } from '@sb1/ffe-icons-react';
```

### TextCard

```tsx
<TextCard>
    {({ CardName, Title, Subtext, Text }) => (
        <>
            <CardName>Kortnavn</CardName>
            <Title>Tittel</Title>
            <Subtext>En liten undertekst</Subtext>
            <Text>Beskrivende tekst her.</Text>
        </>
    )}
</TextCard>
```

### IconCard

```tsx
<IconCard icon={<Icon fileUrl="./icons/open/300/xl/savings.svg" size="xl" />}>
    {({ CardName, Title, Subtext, Text }) => (
        <>
            <CardName>Sparekonto</CardName>
            <Title>BSU</Title>
            <Subtext>Boligsparing for ungdom</Subtext>
            <Text>Spar til bolig med skattefradrag.</Text>
        </>
    )}
</IconCard>
```

### ImageCard

```tsx
<ImageCard imageSrc="https://example.com/bilde.jpg" imageAltText="Beskrivelse">
    {({ Title, Text }) => (
        <>
            <Title>Forsikring</Title>
            <Text>Les mer om vare forsikringsprodukter.</Text>
        </>
    )}
</ImageCard>
```

### IllustrationCard

```tsx
<IllustrationCard img={<img src={illustrasjon} alt="" />}>
    {({ Title, Text }) => (
        <>
            <Title>Finansieringsbevis</Title>
            <Text>For deg som skal kjope ny bolig.</Text>
        </>
    )}
</IllustrationCard>
```

### StippledCard

```tsx
<StippledCard
    img={{
        type: 'icon',
        element: (
            <Icon fileUrl="./icons/open/300/xl/monitoring.svg" size="xl" />
        ),
    }}
>
    {({ Title, Subtext, Text }) => (
        <>
            <Title>Sparekonto</Title>
            <Subtext>7 004,00 kr</Subtext>
            <Text>Din saldo.</Text>
        </>
    )}
</StippledCard>
```

### GroupCard

```tsx
<GroupCard>
    <GroupCardTitle>
        <Heading2 lookLike={5}>Tjenester</Heading2>
    </GroupCardTitle>
    <GroupCardElement>
        {({ Title, Text }) => (
            <>
                <Title>Betaling</Title>
                <Text>Betal regninger enkelt.</Text>
            </>
        )}
    </GroupCardElement>
    <GroupCardFooter>
        {({ CardAction }) => (
            <CardAction href="/tjenester">Se alle tjenester</CardAction>
        )}
    </GroupCardFooter>
</GroupCard>
```

### CardBase

```tsx
<CardBase bgColor="secondary" noMargin>
    Tilpasset innhold her.
</CardBase>
```

### Gjore kort klikkbare med CardAction

Bruk `CardAction` fra render props for a gjore hele kortet klikkbart:

```tsx
<TextCard>
    {({ Title, Text, CardAction }) => (
        <>
            <Title>
                <CardAction href="/destinasjon">Klikkbar tittel</CardAction>
            </Title>
            <Text>Hele kortet blir klikkbart.</Text>
        </>
    )}
</TextCard>
```

### Render Props-komponentene

| Komponent    | Beskrivelse               |
| ------------ | ------------------------- |
| `CardName`   | Liten tekst over tittelen |
| `Title`      | Hovedtittel               |
| `Text`       | Beskrivende tekst         |
| `Subtext`    | Sekundar tekst (gra)      |
| `CardAction` | Gjor kortet klikkbart     |

Alle stotter `as`-prop: `<Title as="h2">Tittel</Title>`

### Polymorfisme med as-prop

```tsx
<GroupCard as="ul">
    <GroupCardElement as="li">Element 1</GroupCardElement>
</GroupCard>
```

## Utvikling

```bash
npm install
npm run build
npm start
```

Lokal Storybook kjorer pa http://localhost:6006/.
