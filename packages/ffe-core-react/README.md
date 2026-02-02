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

### Tilgjengelige komponenter

```tsx
import {
    // Overskrifter
    Heading1,
    Heading2,
    Heading3,
    Heading4,
    Heading5,
    Heading6,
    // Avsnitt og brødtekst
    Paragraph,
    BodyText,
    SmallText,
    MicroText,
    // Tekstformatering
    EmphasizedText,
    StrongText,
    PreformattedText,
    // Lenker
    LinkText,
    LinkIcon,
    // Visuell skillelinje
    DividerLine,
    // Deprecated
    Wave,
} from '@sb1/ffe-core-react';

// TypeScript types
import type {
    HeadingProps,
    ParagraphProps,
    BodyTextProps,
    SmallTextProps,
    MicroTextProps,
    EmphasizedTextProps,
    StrongTextProps,
    PreformattedTextProps,
    LinkTextProp,
    LinkIconProp,
    DividerLineProps,
    WaveProps,
} from '@sb1/ffe-core-react';
```

### Overskrifter (Heading1-Heading6)

Alle overskriftskomponenter deler samme props-interface `HeadingProps`:

| Prop         | Type                         | Standard       | Beskrivelse                                 |
| ------------ | ---------------------------- | -------------- | ------------------------------------------- |
| `lookLike`   | `1 \| 2 \| 3 \| 4 \| 5 \| 6` | samme som nivå | Visuell stil uavhengig av semantisk nivå    |
| `error`      | `boolean`                    | `false`        | Viser overskrift i feiltilstand (rød farge) |
| `inline`     | `boolean`                    | `false`        | Gjør overskriften inline                    |
| `noMargin`   | `boolean`                    | `false`        | Fjerner margin                              |
| `withBorder` | `boolean`                    | `false`        | Legger til kantlinje under overskriften     |
| `textCenter` | `boolean`                    | `false`        | Midtstiller teksten                         |

```tsx
// Semantisk h1 med standard h1-styling
<Heading1>Sidetittel</Heading1>

// Semantisk h2 som ser ut som h1 visuelt
<Heading2 lookLike={1}>Stor overskrift</Heading2>

// Overskrift med kantlinje
<Heading3 withBorder>Med understrek</Heading3>

// Midtstilt overskrift uten margin
<Heading4 textCenter noMargin>Midtstilt</Heading4>

// Overskrift i feiltilstand
<Heading2 error>Noe gikk galt</Heading2>

// Inline overskrift
<Heading5 inline>Inline tittel</Heading5>
```

### Paragraph

Props-interface `ParagraphProps`:

| Prop         | Type      | Standard | Beskrivelse                                        |
| ------------ | --------- | -------- | -------------------------------------------------- |
| `lead`       | `boolean` | `false`  | Ledende avsnitt, brukes rett under hovedoverskrift |
| `subLead`    | `boolean` | `false`  | Sekundært ledende avsnitt, brukes under lead       |
| `textCenter` | `boolean` | `false`  | Midtstiller teksten                                |
| `textLeft`   | `boolean` | `false`  | Venstrestiller teksten (overstyrer container)      |
| `noMargin`   | `boolean` | `false`  | Fjerner margin                                     |

```tsx
// Ledende avsnitt (større skrift)
<Paragraph lead>
    Dette er hovedintroduksjonen til siden.
</Paragraph>

// Sekundært ledende avsnitt
<Paragraph subLead>
    Ytterligere introduksjon med litt mindre skrift.
</Paragraph>

// Vanlig avsnitt
<Paragraph>
    Standard brødtekst i et avsnitt.
</Paragraph>

// Midtstilt avsnitt uten margin
<Paragraph textCenter noMargin>
    Midtstilt tekst.
</Paragraph>
```

### BodyText

Brødtekst-komponent med polymorfisk `as`-prop. Standard element er `div`.

| Prop | Type          | Standard | Beskrivelse                        |
| ---- | ------------- | -------- | ---------------------------------- |
| `as` | `ElementType` | `'div'`  | HTML-element eller React-komponent |

```tsx
// Standard div
<BodyText>Brødtekst i en div.</BodyText>

// Som span
<BodyText as="span">Brødtekst som span.</BodyText>

// Som article
<BodyText as="article">Brødtekst i article-element.</BodyText>
```

### SmallText

Liten tekst for hjelpetekst eller sekundært innhold. Standard element er `span`.

| Prop | Type          | Standard | Beskrivelse                        |
| ---- | ------------- | -------- | ---------------------------------- |
| `as` | `ElementType` | `'span'` | HTML-element eller React-komponent |

```tsx
<SmallText>Liten hjelpetekst</SmallText>
<SmallText as="p">Liten tekst som avsnitt</SmallText>
```

### MicroText

Ekstra liten tekst for metadata eller tertiært innhold. Standard element er `span`.

| Prop     | Type          | Standard | Beskrivelse                        |
| -------- | ------------- | -------- | ---------------------------------- |
| `as`     | `ElementType` | `'span'` | HTML-element eller React-komponent |
| `strong` | `boolean`     | `false`  | Gjør teksten fet                   |

```tsx
<MicroText>Veldig liten tekst</MicroText>
<MicroText strong>Veldig liten, fet tekst</MicroText>
<MicroText as="p">Mikrotekst som avsnitt</MicroText>
```

### Tekstformatering

```tsx
// Betont tekst (kursiv, rendrer <em>)
<EmphasizedText>Betont tekst</EmphasizedText>

// Sterk tekst (fet, rendrer <strong>)
<StrongText>Viktig tekst</StrongText>

// Preformatert tekst (rendrer <pre>)
<PreformattedText>
{`const greet = (name: string) => {
    return \`Hei, \${name}!\`;
};`}
</PreformattedText>
```

### LinkText

Tekstlenke med valgfri understreking. Standard element er `a`.

| Prop        | Type          | Standard | Beskrivelse                                                   |
| ----------- | ------------- | -------- | ------------------------------------------------------------- |
| `as`        | `ElementType` | `'a'`    | HTML-element eller React-komponent (f.eks. React Router Link) |
| `underline` | `boolean`     | `true`   | Vis understreking på lenken                                   |

```tsx
// Standard lenke med understreking
<LinkText href="https://sparebank1.no">
    Gå til SpareBank 1
</LinkText>

// Lenke uten understreking
<LinkText href="/side" underline={false}>
    Lenke uten strek
</LinkText>

// Med React Router
import { Link } from 'react-router-dom';
<LinkText as={Link} to="/dashboard">
    Gå til dashbord
</LinkText>

// Ekstern lenke med target og rel
<LinkText
    href="https://ekstern-side.no"
    target="_blank"
    rel="noopener noreferrer"
>
    Åpne i ny fane
</LinkText>
```

### LinkIcon

Lenke med ikonstil (viser pilikon). Standard element er `a`.

| Prop | Type          | Standard | Beskrivelse                        |
| ---- | ------------- | -------- | ---------------------------------- |
| `as` | `ElementType` | `'a'`    | HTML-element eller React-komponent |

```tsx
// Standard ikonlenke
<LinkIcon href="https://sparebank1.no">
    Se mer
</LinkIcon>

// Med React Router
import { Link } from 'react-router-dom';
<LinkIcon as={Link} to="/produkter">
    Se alle produkter
</LinkIcon>

// Ekstern lenke
<LinkIcon
    href="https://ekstern.no"
    target="_blank"
    rel="noopener noreferrer"
>
    Les mer på ekstern side
</LinkIcon>
```

### DividerLine

Visuell skillelinje. Rendrer `<hr>` med `aria-hidden="true"`.

```tsx
<DividerLine />

// Med ekstra className
<DividerLine className="min-ekstra-klasse" />
```

### Komplett eksempel

```tsx
import React from 'react';
import {
    Heading1,
    Heading2,
    Heading3,
    Paragraph,
    BodyText,
    SmallText,
    MicroText,
    EmphasizedText,
    StrongText,
    LinkText,
    LinkIcon,
    DividerLine,
    PreformattedText,
} from '@sb1/ffe-core-react';

export function TypografiDemo() {
    return (
        <article>
            {/* Hovedoverskrift */}
            <Heading1>Velkommen til SpareBank 1</Heading1>

            {/* Ledende avsnitt */}
            <Paragraph lead>
                Vi hjelper deg med økonomien din, enten du skal spare, låne
                eller forsikre det du er glad i.
            </Paragraph>

            <DividerLine />

            {/* Seksjon med overskrift */}
            <Heading2>Våre tjenester</Heading2>
            <Paragraph>
                Vi tilbyr et bredt spekter av{' '}
                <StrongText>finansielle tjenester</StrongText> tilpasset dine
                behov. Les mer om{' '}
                <EmphasizedText>personlig økonomi</EmphasizedText> i vår
                veiledning.
            </Paragraph>

            {/* Underseksjon */}
            <Heading3 withBorder>Spareprodukter</Heading3>
            <BodyText>
                Oppdag våre spareprodukter og finn det som passer for deg.
            </BodyText>
            <SmallText>Alle renter er oppgitt som nominell rente.</SmallText>

            {/* Lenker */}
            <nav>
                <LinkText href="/spare">Les om spareprodukter</LinkText>
                <LinkIcon href="/kontakt" target="_blank" rel="noopener">
                    Kontakt oss
                </LinkIcon>
            </nav>

            {/* Metadata */}
            <footer>
                <MicroText>Sist oppdatert: Januar 2024</MicroText>
                <MicroText strong>SpareBank 1</MicroText>
            </footer>
        </article>
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
