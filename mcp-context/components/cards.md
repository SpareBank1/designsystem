# @sb1/ffe-cards-react

## Description

Kort-komponenter for presentasjon av innhold med visuelle elementer: tekstkort, ikon-kort, bilde/illustrasjon, grupperte kort og prikkede/stippled kort. `CardBase` er grunnlaget som spesialiserte kortvarianter bygger på.

## Components

This package exports the following components:

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

## Installation

Install the package and all its dependencies:

```bash
npm install @sb1/ffe-cards-react @sb1/ffe-cards @sb1/ffe-icons-react @sb1/ffe-core @sb1/ffe-icons
```

### Dependencies

This package depends on:

- `@sb1/ffe-cards`
- `@sb1/ffe-icons-react`
- `@sb1/ffe-core`
- `@sb1/ffe-icons`

## CSS Import

In your project's main CSS file, import the required styles:

```css
@import '@sb1/ffe-core/css/ffe.css';
@import '@sb1/ffe-cards/css/cards.css';
@import '@sb1/ffe-icons/css/ffe-icons.css';
```

Note: Make sure to import `@sb1/ffe-core/css/ffe.css` first as it contains base styles.

## API Reference

### CardBase Props

| Prop | Type | Required | Description |
|------|------|----------|-------------|
| `noMargin` | `boolean` | No | - |
| `textCenter` | `boolean` | No | - |
| `bgColor` | `BackgroundColor` | No | - |
| `bgDarkmodeColor` | `never` | No | - |
| `noPadding` | `boolean` | No | - |
| `appearance` | `'default' | 'accent'` | No | - |
| `children` | `WithCardActionProps['children'] | React.ReactNode` | Yes | - |

### TextCard Props

| Prop | Type | Required | Description |
|------|------|----------|-------------|
| `leftAlign` | `boolean` | No | - |
| `noMargin` | `boolean` | No | - |
| `appearance` | `'default' | 'accent'` | No | - |

### IconCard Props

| Prop | Type | Required | Description |
|------|------|----------|-------------|
| `icon` | `ReactElement` | No | - |
| `rightIcon` | `ReactElement` | No | - |
| `condensed` | `boolean` | No | - |
| `noMargin` | `boolean` | No | - |
| `appearance` | `'default' | 'accent'` | No | - |

### GroupCard Props

| Prop | Type | Required | Description |
|------|------|----------|-------------|
| `children` | `React.ReactNode` | Yes | - |
| `bgColor` | `BackgroundColor` | No | - |
| `bgDarkmodeColor` | `never` | No | - |
| `noMargin` | `boolean` | No | - |
| `appearance` | `'default' | 'accent'` | No | - |

### GroupCardElement Props

| Prop | Type | Required | Description |
|------|------|----------|-------------|
| `noPadding` | `boolean` | No | - |
| `noSeparator` | `boolean` | No | - |

### GroupCardTitle Props

| Prop | Type | Required | Description |
|------|------|----------|-------------|
| `noPadding` | `boolean` | No | - |
| `noSeparator` | `boolean` | No | - |

### GroupCardFooter Props

| Prop | Type | Required | Description |
|------|------|----------|-------------|
| `noPadding` | `boolean` | No | - |

### IllustrationCard Props

| Prop | Type | Required | Description |
|------|------|----------|-------------|
| `img` | `ReactElement` | Yes | - |
| `condensed` | `boolean` | No | - |
| `illustrationPosition` | `'right' | 'left'` | No | - |
| `noMargin` | `boolean` | No | - |
| `appearance` | `'default' | 'accent'` | No | - |

### ImageCard Props

| Prop | Type | Required | Description |
|------|------|----------|-------------|
| `imageSrc` | `string` | Yes | - |
| `imageAltText` | `string` | Yes | - |
| `noMargin` | `boolean` | No | - |
| `appearance` | `'default' | 'accent'` | No | - |

### StippledCard Props

| Prop | Type | Required | Description |
|------|------|----------|-------------|
| `condensed` | `boolean` | No | - |
| `img` | `Img` | No | - |
| `rightImg` | `Img` | No | - |
| `noMargin` | `boolean` | No | - |

## When to Use

Bruk av kort

Kortene skal hjelpe brukerne med å navigere seg til riktig side. De skal gi en kort og tydelig oppsummering av hva slags informasjon som finnes på undersiden.

## Manual Examples (from README)

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

## Documentation

Full documentation is available at https://design.sparebank1.no/

## Additional Context

This is part of the SpareBank 1 FFE (Felles Front End) design system.
All components follow SpareBank 1's design guidelines and accessibility standards.
