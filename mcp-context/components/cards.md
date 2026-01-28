# @sb1/ffe-cards-react

## Beskrivelse

Kort-komponenter for presentasjon av innhold med visuelle elementer: tekstkort, ikon-kort, bilde/illustrasjon, grupperte kort og prikkede/stippled kort. `CardBase` er grunnlaget som spesialiserte kortvarianter bygger på.

## Komponenter

Denne pakken eksporterer følgende komponenter:

- `CardBase`
- `TextCard`
- `IconCard`
- `GroupCard`
- `GroupCardElement`
- `GroupCardTitle`
- `GroupCardFooter`
- `IllustrationCard`
- `ImageCard`
- `StippledCard`

## Installasjon

Installer pakken og alle dens avhengigheter:

```bash
npm install @sb1/ffe-cards-react @sb1/ffe-cards @sb1/ffe-icons-react @sb1/ffe-core @sb1/ffe-icons
```

### Avhengigheter

Denne pakken er avhengig av:

- `@sb1/ffe-cards`
- `@sb1/ffe-icons-react`
- `@sb1/ffe-core`
- `@sb1/ffe-icons`

## CSS-import

I prosjektets hoved-CSS-fil, importer de nødvendige stilene:

```css
@import '@sb1/ffe-core/css/ffe.css';
@import '@sb1/ffe-cards/css/cards.css';
@import '@sb1/ffe-icons/css/ffe-icons.css';
```

Merk: Sørg for å importere `@sb1/ffe-core/css/ffe.css` først, da den inneholder grunnleggende stiler.

## API-referanse

### CardBase Props

| Prop | Type | Påkrevd | Beskrivelse |
|------|------|---------|-------------|
| `noMargin` | `boolean` | Nei | No margin on card |
| `textCenter` | `boolean` | Nei | - |
| `bgColor` | `BackgroundColor` | Nei | Property has new values that work with dark and accent mode as part of the Semantic Color update Possible values: `primary` `secondary` `tertiary` [Read more in the upgrade guide](https://sparebank1.github.io/designsystem/?path=/docs/introduksjon-changelog--docs#2025---februar---semantiske-farger) |
| `noPadding` | `boolean` | Nei | - |
| `appearance` | `'default' | 'accent'` | Nei | Avgjør utseende i kontekst accent. Hvis man ønsker et blått utseende i kontekst accent, velg appearance: 'accent' |
| `children` | `WithCardActionProps['children'] | React.ReactNode` | Ja | - |

### TextCard Props

| Prop | Type | Påkrevd | Beskrivelse |
|------|------|---------|-------------|
| `leftAlign` | `boolean` | Nei | Left-aligned text on the card |
| `noMargin` | `boolean` | Nei | No margin on card |
| `appearance` | `'default' | 'accent'` | Nei | Avgjør utseende i kontekst accent. Hvis man ønsker et blått utseende i kontekst accent, velg appearance: 'accent' |
| `children` | `function` | Ja | Function that's passed available subcomponents as arguments, or regular children |

### IconCard Props

| Prop | Type | Påkrevd | Beskrivelse |
|------|------|---------|-------------|
| `icon` | `ReactElement` | Nei | Element of icon |
| `rightIcon` | `ReactElement` | Nei | - |
| `condensed` | `boolean` | Nei | Smaller icon and less space |
| `noMargin` | `boolean` | Nei | No margin on card |
| `appearance` | `'default' | 'accent'` | Nei | Avgjør utseende i kontekst accent. Hvis man ønsker et blått utseende i kontekst accent, velg appearance: 'accent' |
| `children` | `function` | Ja | - |

### GroupCard Props

| Prop | Type | Påkrevd | Beskrivelse |
|------|------|---------|-------------|
| `children` | `React.ReactNode` | Ja | The children of the GroupCard component |
| `bgColor` | `BackgroundColor` | Nei | The background color of the whole groupcard element Property has new values that work with dark and accent mode as part of the Semantic Color update Possible values: `primary` `secondary` `tertiary` [Read more in the upgrade guide](https://sparebank1.github.io/designsystem/?path=/docs/introduksjon-changelog--docs#2025---februar---semantiske-farger) |
| `noMargin` | `boolean` | Nei | No margin on card |
| `appearance` | `'default' | 'accent'` | Nei | Avgjør utseende i kontekst accent. Hvis man ønsker et blått utseende i kontekst accent, velg appearance: 'accent' |

### GroupCardElement Props

| Prop | Type | Påkrevd | Beskrivelse |
|------|------|---------|-------------|
| `noPadding` | `boolean` | Nei | No padding on the element |
| `noSeparator` | `boolean` | Nei | Visible border between the elements |
| `children` | `function` | Ja | - |

### GroupCardTitle Props

| Prop | Type | Påkrevd | Beskrivelse |
|------|------|---------|-------------|
| `noPadding` | `boolean` | Nei | No padding on the element |
| `noSeparator` | `boolean` | Nei | Visible border underneath title |
| `children` | `function` | Ja | - |

### GroupCardFooter Props

| Prop | Type | Påkrevd | Beskrivelse |
|------|------|---------|-------------|
| `noPadding` | `boolean` | Nei | No padding on the element |
| `children` | `function` | Ja | - |

### IllustrationCard Props

| Prop | Type | Påkrevd | Beskrivelse |
|------|------|---------|-------------|
| `img` | `ReactElement` | Ja | Element of illustration |
| `condensed` | `boolean` | Nei | Smaller illustration and less space |
| `illustrationPosition` | `'right' | 'left'` | Nei | Position illustration at left (default) or right of the card content |
| `noMargin` | `boolean` | Nei | No margin on card |
| `appearance` | `'default' | 'accent'` | Nei | Avgjør utseende i kontekst accent. Hvis man ønsker et blått utseende i kontekst accent, velg appearance: 'accent' |
| `children` | `function` | Ja | - |

### ImageCard Props

| Prop | Type | Påkrevd | Beskrivelse |
|------|------|---------|-------------|
| `imageSrc` | `string` | Ja | The src for the image |
| `imageAltText` | `string` | Ja | The alt text for the image |
| `noMargin` | `boolean` | Nei | No margin on card |
| `appearance` | `'default' | 'accent'` | Nei | Avgjør utseende i kontekst accent. Hvis man ønsker et blått utseende i kontekst accent, velg appearance: 'accent' |
| `children` | `function` | Ja | - |

### StippledCard Props

| Prop | Type | Påkrevd | Beskrivelse |
|------|------|---------|-------------|
| `condensed` | `boolean` | Nei | Smaller icon and less space |
| `img` | `Img` | Nei | Image to be rendered |
| `rightImg` | `Img` | Nei | - |
| `noMargin` | `boolean` | Nei | No margin on card |
| `children` | `function` | Ja | - |

## Når bør du bruke

Bruk av kort

Kortene skal hjelpe brukerne med å navigere seg til riktig side. De skal gi en kort og tydelig oppsummering av hva slags informasjon som finnes på undersiden.

## Eksempler (fra README)

```tsx
import React from 'react';
import {
    CardBase,
    TextCard,
    IconCard,
    ImageCard,
    IllustrationCard,
    GroupCard,
    GroupCardTitle,
    GroupCardElement,
    GroupCardFooter,
    StippledCard,
} from '@sb1/ffe-cards-react';

export function CardsDemo() {
    return (
        <div>
            <TextCard title="Sparing" subTitle="Kom i gang">
                Bygg buffer og kom i gang med sparing.
            </TextCard>

            <IconCard iconName="piggy" title="BSU">
                Spar til bolig med skattefradrag.
            </IconCard>

            <ImageCard imageUrl="/path/bilde.jpg" title="Forsikring" />

            <IllustrationCard illustrationName="umbrella" title="Trygghet" />

            <GroupCard>
                <GroupCardTitle>Tjenester</GroupCardTitle>
                <GroupCardElement>Betaling</GroupCardElement>
                <GroupCardElement>Sparing</GroupCardElement>
                <GroupCardFooter>Se alle</GroupCardFooter>
            </GroupCard>

            <StippledCard
                title="Fastrente"
                description="Forutsigbar avkastning"
            />

            <CardBase>Tilpasset innhold</CardBase>
        </div>
    );
}
```

## Dokumentasjon

Full dokumentasjon er tilgjengelig på https://design.sparebank1.no/

## Tilleggskontekst

Dette er en del av SpareBank 1 FFE (Felles Front End) designsystem.
Alle komponenter følger SpareBank 1s designretningslinjer og tilgjengelighetsstandarder.
