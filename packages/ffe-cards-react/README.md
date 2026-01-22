# @sb1/ffe-cards-react

## Install

```bash
npm install --save @sb1/ffe-cards-react
```

## Usage

Full documentation on card usage is available at https://design.sparebank1.no/komponenter/kort/.

This package depends on `@sb1/ffe-icons-react`.
Make sure you import the less-files.

## Description

Kort-komponenter for presentasjon av innhold med visuelle elementer: tekstkort, ikon-kort, bilde/illustrasjon, grupperte kort og prikkede/stippled kort. `CardBase` er grunnlaget som spesialiserte kortvarianter bygger på.

## Examples

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

## Development

To start a local development server, run the following from the designsystem root folder:

```bash
npm install
npm run build
npm start
```

A local instance of `component-overview` with live reloading will run at http://localhost:1234/.

Example implementations using the latest versions of all components are also available at https://sparebank1.github.io/designsystem.
