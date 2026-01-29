# @sb1/ffe-core-react

## Beskrivelse

React-komponenter for typografi og grunnleggende tekstmønstre i FFE. Bruk disse komponentene når du skal rendere overskrifter, avsnitt, lenker og annet tekstinnhold med riktig visuell stil, spacing og semantikk i tråd med SpareBank 1 sitt designsystem.

## Komponenter

Denne pakken eksporterer følgende komponenter:

- `BodyText`
- `DividerLine`
- `EmphasizedText`
- `Heading1`
- `Heading2`
- `Heading3`
- `Heading4`
- `Heading5`
- `Heading6`
- `LinkText`
- `LinkIcon`
- `MicroText`
- `Paragraph`
- `PreformattedText`
- `SmallText`
- `StrongText`

## Installasjon

Installer pakken og alle dens avhengigheter:

```bash
npm install @sb1/ffe-core-react @sb1/ffe-core
```

### Avhengigheter

Denne pakken er avhengig av:

- `@sb1/ffe-core`

## CSS-import

I prosjektets hoved-CSS-fil, importer de nødvendige stilene:

```css
@import '@sb1/ffe-core/css/ffe.css';
```

Merk: Sørg for å importere `@sb1/ffe-core/css/ffe.css` først, da den inneholder grunnleggende stiler.

## API-referanse

### BodyText Props

| Prop | Type | Påkrevd | Beskrivelse |
|------|------|---------|-------------|
| `as` | `As` | Nei | - |

### DividerLine Props

Ingen komponentspesifikke props utover native HTML-attributter.

### EmphasizedText Props

Ingen komponentspesifikke props utover native HTML-attributter.

### Heading1 Props

| Prop | Type | Påkrevd | Beskrivelse |
|------|------|---------|-------------|
| `error` | `boolean` | Nei | - |
| `inline` | `boolean` | Nei | - |
| `lookLike` | `HeadingLevel` | Nei | - |
| `noMargin` | `boolean` | Nei | - |
| `withBorder` | `boolean` | Nei | - |
| `textCenter` | `boolean` | Nei | - |

### Heading2 Props

| Prop | Type | Påkrevd | Beskrivelse |
|------|------|---------|-------------|
| `error` | `boolean` | Nei | - |
| `inline` | `boolean` | Nei | - |
| `lookLike` | `HeadingLevel` | Nei | - |
| `noMargin` | `boolean` | Nei | - |
| `withBorder` | `boolean` | Nei | - |
| `textCenter` | `boolean` | Nei | - |

### Heading3 Props

| Prop | Type | Påkrevd | Beskrivelse |
|------|------|---------|-------------|
| `error` | `boolean` | Nei | - |
| `inline` | `boolean` | Nei | - |
| `lookLike` | `HeadingLevel` | Nei | - |
| `noMargin` | `boolean` | Nei | - |
| `withBorder` | `boolean` | Nei | - |
| `textCenter` | `boolean` | Nei | - |

### Heading4 Props

| Prop | Type | Påkrevd | Beskrivelse |
|------|------|---------|-------------|
| `error` | `boolean` | Nei | - |
| `inline` | `boolean` | Nei | - |
| `lookLike` | `HeadingLevel` | Nei | - |
| `noMargin` | `boolean` | Nei | - |
| `withBorder` | `boolean` | Nei | - |
| `textCenter` | `boolean` | Nei | - |

### Heading5 Props

| Prop | Type | Påkrevd | Beskrivelse |
|------|------|---------|-------------|
| `error` | `boolean` | Nei | - |
| `inline` | `boolean` | Nei | - |
| `lookLike` | `HeadingLevel` | Nei | - |
| `noMargin` | `boolean` | Nei | - |
| `withBorder` | `boolean` | Nei | - |
| `textCenter` | `boolean` | Nei | - |

### Heading6 Props

| Prop | Type | Påkrevd | Beskrivelse |
|------|------|---------|-------------|
| `error` | `boolean` | Nei | - |
| `inline` | `boolean` | Nei | - |
| `lookLike` | `HeadingLevel` | Nei | - |
| `noMargin` | `boolean` | Nei | - |
| `withBorder` | `boolean` | Nei | - |
| `textCenter` | `boolean` | Nei | - |

### LinkText Props

| Prop | Type | Påkrevd | Beskrivelse |
|------|------|---------|-------------|
| `as` | `As` | Nei | - |

### LinkIcon Props

| Prop | Type | Påkrevd | Beskrivelse |
|------|------|---------|-------------|
| `as` | `As` | Nei | - |

### MicroText Props

| Prop | Type | Påkrevd | Beskrivelse |
|------|------|---------|-------------|
| `as` | `As` | Nei | - |

### Paragraph Props

| Prop | Type | Påkrevd | Beskrivelse |
|------|------|---------|-------------|
| `lead` | `boolean` | Nei | Makes this paragraph a lead paragraph, typically used directly below a heading. |
| `subLead` | `boolean` | Nei | Makes this paragraph a sub-lead paragraph, typically used directly below a lead paragraph. |
| `textCenter` | `boolean` | Nei | Use if text alignment should override that of its container. |
| `textLeft` | `boolean` | Nei | Use if text alignment should override that of its container. |
| `noMargin` | `boolean` | Nei | Use if the paragraph should have no margin. |

### PreformattedText Props

Ingen komponentspesifikke props utover native HTML-attributter.

### SmallText Props

| Prop | Type | Påkrevd | Beskrivelse |
|------|------|---------|-------------|
| `as` | `As` | Nei | - |

### StrongText Props

Ingen komponentspesifikke props utover native HTML-attributter.

## Eksempler (fra README)

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

## Dokumentasjon

Full dokumentasjon er tilgjengelig på https://sparebank1.github.io/designsystem/

## Tilleggskontekst

Dette er en del av SpareBank 1 FFE (Felles Front End) designsystem.
Alle komponenter følger SpareBank 1s designretningslinjer og tilgjengelighetsstandarder.
