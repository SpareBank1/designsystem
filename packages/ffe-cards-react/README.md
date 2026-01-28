# @sb1/ffe-cards-react

## Installasjon

```bash
npm install --save @sb1/ffe-cards-react
```

## Bruk

Full dokumentasjon er tilgjengelig på https://design.sparebank1.no/komponenter/kort/.

Denne pakken er avhengig av `@sb1/ffe-icons-react`.
Husk å importere less-filene.

## Beskrivelse

Kort-komponenter for presentasjon av innhold med visuelle elementer: tekstkort, ikon-kort, bilde/illustrasjon, grupperte kort og prikkede/stippled kort. `CardBase` er grunnlaget som spesialiserte kortvarianter bygger på.

## Eksempler

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

## Utvikling

For å starte en lokal utviklingsserver, kjør følgende fra designsystem-rotmappen:

```bash
npm install
npm run build
npm start
```

En lokal Storybook-instans med live reloading vil kjøre på http://localhost:6006/.

Eksempelimplementasjoner med de nyeste versjonene av alle komponentene er også tilgjengelige på https://sparebank1.github.io/designsystem.
