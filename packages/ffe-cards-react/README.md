# @sb1/ffe-cards-react

## Installasjon

```bash
npm install --save @sb1/ffe-cards-react
```

## Bruk

Full dokumentasjon er tilgjengelig på https://sparebank1.github.io/designsystem/komponenter/kort/.

Denne pakken er avhengig av `@sb1/ffe-icons-react`.
Husk å importere less-filene.

## Beskrivelse

Kort-komponenter for presentasjon av innhold med visuelle elementer: tekstkort, ikon-kort, bilde/illustrasjon, grupperte kort og prikkede/stippled kort. `CardBase` er grunnlaget som spesialiserte kortvarianter bygger på.

Alle kort-komponenter bruker et render prop-moenster der innholdskomponenter (`Title`, `Text`, `Subtext`, `CardName`, `CardAction`) blir gitt som funksjonargumenter. Dette gir fleksibel innholdssammensetning med riktig styling.

## Eksporterte komponenter

Pakken eksporterer disse komponentene:

- `CardBase` - Grunnleggende kortkomponent for tilpasset innhold
- `TextCard` - Tekstkort uten visuelt element
- `IconCard` - Kort med ikon til venstre (og valgfritt til hoyre)
- `ImageCard` - Kort med bilde
- `IllustrationCard` - Kort med illustrasjon
- `StippledCard` - Kort med stiplet kant
- `GroupCard` - Container for grupperte kortelementer
- `GroupCardTitle` - Tittel for GroupCard
- `GroupCardElement` - Element i GroupCard
- `GroupCardFooter` - Footer for GroupCard

## Eksporterte TypeScript-typer

```tsx
import type {
    CardBaseProps,
    TextCardProps,
    IconCardProps,
    ImageCardProps,
    IllustrationCardProps,
    StippledCardProps,
    GroupCardProps,
    GroupCardElementProps,
    GroupCardTitleProps,
    GroupCardFooterProps,
    CardRenderProps,
    CardActionRenderProps,
} from '@sb1/ffe-cards-react';
```

## Eksempler

### Import

```tsx
import {
    CardBase,
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

Bruker render props for a tilby innholdskomponenter.

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

**Props for TextCard:**
| Prop | Type | Default | Beskrivelse |
|------|------|---------|-------------|
| `leftAlign` | `boolean` | `false` | Venstrejuster teksten |
| `noMargin` | `boolean` | `false` | Fjern margin |
| `appearance` | `'default' \| 'accent'` | `'default'` | Utseende i accent-kontekst |
| `as` | `ElementType` | `'div'` | HTML-element eller React-komponent |
| `children` | `ReactNode \| ((props: CardRenderProps) => ReactNode)` | - | Innhold eller render prop |

### IconCard

Tar et `icon`-element som prop, med valgfritt `rightIcon`.

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

**Props for IconCard:**
| Prop | Type | Default | Beskrivelse |
|------|------|---------|-------------|
| `icon` | `ReactElement` | - | Ikonelement til venstre |
| `rightIcon` | `ReactElement` | - | Valgfritt ikonelement til hoyre |
| `condensed` | `boolean` | `false` | Mindre ikon og mindre mellomrom |
| `noMargin` | `boolean` | `false` | Fjern margin |
| `appearance` | `'default' \| 'accent'` | `'default'` | Utseende i accent-kontekst |
| `as` | `ElementType` | `'div'` | HTML-element eller React-komponent |
| `children` | `ReactNode \| ((props: CardRenderProps) => ReactNode)` | - | Innhold eller render prop |

### ImageCard

Krever `imageSrc` og `imageAltText`.

```tsx
<ImageCard
    imageSrc="https://example.com/bilde.jpg"
    imageAltText="Beskrivelse av bildet"
>
    {({ CardName, Title, Subtext, Text }) => (
        <>
            <CardName>Kategori</CardName>
            <Title>Forsikring</Title>
            <Subtext>Trygghet for deg</Subtext>
            <Text>Les mer om vare forsikringsprodukter.</Text>
        </>
    )}
</ImageCard>
```

**Props for ImageCard:**
| Prop | Type | Default | Beskrivelse |
|------|------|---------|-------------|
| `imageSrc` | `string` | **(required)** | URL til bildet |
| `imageAltText` | `string` | **(required)** | Alt-tekst for bildet |
| `noMargin` | `boolean` | `false` | Fjern margin |
| `appearance` | `'default' \| 'accent'` | `'default'` | Utseende i accent-kontekst |
| `as` | `ElementType` | `'div'` | HTML-element eller React-komponent |
| `children` | `ReactNode \| ((props: CardRenderProps) => ReactNode)` | - | Innhold eller render prop |

### IllustrationCard

Tar et `img`-element (typisk en SVG-illustrasjon).

```tsx
import illustrasjon from './illustrasjon.svg';

<IllustrationCard img={<img src={illustrasjon} alt="" />}>
    {({ CardName, Title, Text }) => (
        <>
            <CardName>Tjeneste</CardName>
            <Title>Finansieringsbevis</Title>
            <Text>For deg som skal kjope ny bolig.</Text>
        </>
    )}
</IllustrationCard>;
```

**Props for IllustrationCard:**
| Prop | Type | Default | Beskrivelse |
|------|------|---------|-------------|
| `img` | `ReactElement` | **(required)** | Illustrasjonselement (f.eks. `<img>`) |
| `condensed` | `boolean` | `false` | Mindre illustrasjon og mindre mellomrom |
| `illustrationPosition` | `'left' \| 'right'` | `'left'` | Plassering av illustrasjonen |
| `noMargin` | `boolean` | `false` | Fjern margin |
| `appearance` | `'default' \| 'accent'` | `'default'` | Utseende i accent-kontekst |
| `as` | `ElementType` | `'div'` | HTML-element eller React-komponent |
| `children` | `ReactNode \| ((props: CardRenderProps) => ReactNode)` | - | Innhold eller render prop |

### StippledCard

Kort med stiplet kant. Bruker `img`-prop med `{element, type}`-struktur.

```tsx
<StippledCard
    img={{
        type: 'icon',
        element: (
            <Icon fileUrl="./icons/open/300/xl/monitoring.svg" size="xl" />
        ),
    }}
>
    {({ CardName, Title, Subtext, Text }) => (
        <>
            <CardName>Konto</CardName>
            <Title>Sparekonto</Title>
            <Subtext>7 004,00 kr</Subtext>
            <Text>Din saldo.</Text>
        </>
    )}
</StippledCard>
```

**Props for StippledCard:**
| Prop | Type | Default | Beskrivelse |
|------|------|---------|-------------|
| `img` | `{ element: ReactNode, type: 'icon' \| 'custom' }` | - | Bilde/ikon til venstre |
| `rightImg` | `{ element: ReactNode, type: 'icon' \| 'custom' }` | - | Valgfritt bilde/ikon til hoyre |
| `condensed` | `boolean` | `false` | Kompakt visning |
| `noMargin` | `boolean` | `false` | Fjern margin |
| `as` | `ElementType` | `'div'` | HTML-element eller React-komponent |
| `children` | `ReactNode \| ((props: CardRenderProps) => ReactNode)` | - | Innhold eller render prop |

### GroupCard

Container for grupperte kortelementer med tittel, elementer og footer.

```tsx
import { Heading2 } from '@sb1/ffe-core-react';

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
    <GroupCardElement>
        {({ Title, Text }) => (
            <>
                <Title>Sparing</Title>
                <Text>Spar til fremtiden.</Text>
            </>
        )}
    </GroupCardElement>
    <GroupCardFooter>
        {({ CardAction }) => (
            <CardAction href="/tjenester">Se alle tjenester</CardAction>
        )}
    </GroupCardFooter>
</GroupCard>;
```

**Props for GroupCard:**
| Prop | Type | Default | Beskrivelse |
|------|------|---------|-------------|
| `bgColor` | `'primary' \| 'secondary' \| 'tertiary'` | `'primary'` | Bakgrunnsfarge |
| `noMargin` | `boolean` | `false` | Fjern margin |
| `appearance` | `'default' \| 'accent'` | `'default'` | Utseende i accent-kontekst |
| `as` | `ElementType` | `'div'` | HTML-element (f.eks. `'ul'` for liste) |

**Props for GroupCardElement:**
| Prop | Type | Default | Beskrivelse |
|------|------|---------|-------------|
| `noPadding` | `boolean` | `false` | Fjern padding |
| `noSeparator` | `boolean` | `false` | Fjern skillelinje mellom elementer |
| `as` | `ElementType` | `'div'` | HTML-element (f.eks. `'li'` for liste) |

**Props for GroupCardTitle:**
| Prop | Type | Default | Beskrivelse |
|------|------|---------|-------------|
| `noPadding` | `boolean` | `false` | Fjern padding |
| `noSeparator` | `boolean` | `false` | Fjern skillelinje under tittel |

**Props for GroupCardFooter:**
| Prop | Type | Default | Beskrivelse |
|------|------|---------|-------------|
| `noPadding` | `boolean` | `false` | Fjern padding |

### CardBase

Grunnleggende kortkomponent for tilpasset innhold.

```tsx
<CardBase bgColor="secondary" noMargin>
    Tilpasset innhold her.
</CardBase>
```

**Props for CardBase:**
| Prop | Type | Default | Beskrivelse |
|------|------|---------|-------------|
| `bgColor` | `'primary' \| 'secondary' \| 'tertiary'` | `'primary'` | Bakgrunnsfarge |
| `noMargin` | `boolean` | `false` | Fjern margin |
| `noPadding` | `boolean` | `false` | Fjern padding |
| `textCenter` | `boolean` | `false` | Sentrer tekst |
| `appearance` | `'default' \| 'accent'` | `'default'` | Utseende i accent-kontekst |
| `as` | `ElementType` | `'div'` | HTML-element eller React-komponent |
| `children` | `ReactNode \| ((props: CardActionRenderProps) => ReactNode)` | - | Innhold eller render prop |

### Gjore kort klikkbare med CardAction

Bruk `CardAction` fra render props for a gjore hele kortet klikkbart. Legg `CardAction` rundt et element (typisk `Title`) for a definere lenken.

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

`CardAction` kan ogsa brukes som knapp:

```tsx
<TextCard>
    {({ Title, Text, CardAction }) => (
        <>
            <Title>
                <CardAction as="button" onClick={() => console.log('Klikket!')}>
                    Knapp-tittel
                </CardAction>
            </Title>
            <Text>Hele kortet er klikkbart.</Text>
        </>
    )}
</TextCard>
```

**Props for CardAction:**
| Prop | Type | Default | Beskrivelse |
|------|------|---------|-------------|
| `as` | `ElementType` | `'a'` | HTML-element (`'a'`, `'button'`, etc.) |
| `href` | `string` | - | URL for lenker |
| `onClick` | `function` | - | Klikk-handler for knapper |

### Render Props-komponentene

Alle korttyper gir tilgang til disse subkomponentene via render props:

| Komponent    | Beskrivelse                               | Standard HTML-element |
| ------------ | ----------------------------------------- | --------------------- |
| `CardName`   | Liten tekst over tittelen                 | `<p>`                 |
| `Title`      | Hovedtittel                               | `<p>`                 |
| `Text`       | Beskrivende tekst                         | `<p>`                 |
| `Subtext`    | Sekundar tekst (gra)                      | `<p>`                 |
| `CardAction` | Klikkbar handling (gjor kortet klikkbart) | `<a>`                 |

Alle subkomponenter stotter `as`-prop for a endre HTML-element:

```tsx
<Title as="h2">Dette blir en h2</Title>
<Subtext as="span">Dette blir en span</Subtext>
```

### Polymorfisme med as-prop

Alle kortkomponenter stotter `as`-prop for a endre rot-elementet:

```tsx
// Som liste
<GroupCard as="ul">
    <GroupCardElement as="li">Element 1</GroupCardElement>
    <GroupCardElement as="li">Element 2</GroupCardElement>
</GroupCard>

// Som span
<TextCard as="span">
    {({ Title }) => <Title>Innhold</Title>}
</TextCard>
```

## Utvikling

For a starte en lokal utviklingsserver, kjor folgende fra designsystem-rotmappen:

```bash
npm install
npm run build
npm start
```

En lokal Storybook-instans med live reloading vil kjore pa http://localhost:6006/.

Eksempelimplementasjoner med de nyeste versjonene av alle komponentene er ogsa tilgjengelige pa https://sparebank1.github.io/designsystem.
