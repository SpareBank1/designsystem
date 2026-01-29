# @sb1/ffe-core-react

React-implementasjon av komponentene i `ffe-core`.

## Installasjon

```bash
npm install --save @sb1/ffe-core-react
```

## Bruk

Full dokumentasjon er tilgjengelig på:

- https://sparebank1.github.io/designsystem/komponenter/typografi/
- https://sparebank1.github.io/designsystem/profil/farger/
- https://sparebank1.github.io/designsystem/profil/spacing/

## Beskrivelse

React-komponenter for typografi og grunnleggende tekstmønstre i FFE. Bruk disse komponentene når du skal rendere overskrifter, avsnitt, lenker og annet tekstinnhold med riktig visuell stil, spacing og semantikk i tråd med SpareBank 1 sitt designsystem.

Når bør du bruke pakken:

- Sikre konsistent typografi, farger og spacing uten manuelle CSS-klasser.
- Bruke semantisk korrekte elementer med riktige varianter (f.eks. `Heading1`–`Heading6`, `Paragraph`, `LinkText`).
- Gjøre innholdet mer tilgjengelig og forutsigbart på tvers av apper.

Når bør du ikke bruke pakken:

- Layout og struktur
- Komplekse interaksjoner — bruk dedikerte komponentpakker (modals, knapper osv.).

Merk: `Wave` er tilgjengelig her, men er deprecated til fordel for varianten i `@sb1/ffe-shapes-react`.

## Eksempler

```tsx
import React from 'react';
import {
    BodyText,
    DividerLine,
    EmphasizedText,
    Heading1,
    Heading2,
    Heading3,
    Heading4,
    Heading5,
    Heading6,
    LinkText,
    LinkIcon,
    MicroText,
    Paragraph,
    PreformattedText,
    SmallText,
    StrongText,
    Wave,
} from '@sb1/ffe-core-react';

export function CoreTypographyDemo() {
    return (
        <>
            {/* Overskrifter */}
            <Heading1 lookLike={1}>Overskrift 1</Heading1>
            <Heading2>Overskrift 2</Heading2>

            {/* Avsnitt og brødtekst */}
            <Paragraph lead>Dette er et ledende avsnitt.</Paragraph>
            <Paragraph>
                Et vanlig avsnitt med <EmphasizedText>betoning</EmphasizedText>{' '}
                og <StrongText>sterk tekst</StrongText>.
            </Paragraph>
            <BodyText as="div">Brødtekst i en div-container.</BodyText>
            <SmallText>Hjelpetekst</SmallText>
            <MicroText>Ekstra liten tekst</MicroText>
            <MicroText strong>Ekstra liten, sterk tekst</MicroText>

            {/* Skillelinje */}
            <DividerLine />

            {/* Lenker */}
            <LinkText href="https://sparebank1.no">Gå til SpareBank 1</LinkText>
            <LinkText href="#" underline={false}>
                Lenke uten understrek
            </LinkText>
            <LinkIcon
                href="https://sparebank1.no"
                target="_blank"
                rel="noopener"
            >
                Lenke med ikon-stil
            </LinkIcon>

            {/* Preformatert tekst */}
            <PreformattedText>
                {`const sum = (a: number, b: number) => a + b;`}
            </PreformattedText>

            {/* Flere overskrifter/varianter */}
            <Heading3>Flere overskrifter</Heading3>
            <Heading4 withBorder>Med kantlinje</Heading4>
            <Heading5 textCenter>Midtstilt</Heading5>
            <Heading6 inline>Inline</Heading6>
        </>
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
