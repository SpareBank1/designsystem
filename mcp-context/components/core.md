# @sb1/ffe-core-react

## Description

React-komponenter for typografi og grunnleggende tekstmønstre i FFE. Bruk disse komponentene når du skal rendere overskrifter, avsnitt, lenker og annet tekstinnhold med riktig visuell stil, spacing og semantikk i tråd med SpareBank 1 sitt designsystem.

## Components

This package exports the following components:

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

## Installation

Install the package and all its dependencies:

```bash
npm install @sb1/ffe-core-react @sb1/ffe-core
```

### Dependencies

This package depends on:

- `@sb1/ffe-core`

## CSS Import

In your project's main CSS file, import the required styles:

```css
@import '@sb1/ffe-core/css/ffe.css';
```

Note: Make sure to import `@sb1/ffe-core/css/ffe.css` first as it contains base styles.

## API Reference

### BodyText Props

| Prop | Type | Required | Description |
|------|------|----------|-------------|
| `as` | `As` | No | - |

### DividerLine Props

No component-specific props beyond native HTML attributes.

### EmphasizedText Props

No component-specific props beyond native HTML attributes.

### Heading1 Props

| Prop | Type | Required | Description |
|------|------|----------|-------------|
| `error` | `boolean` | No | - |
| `inline` | `boolean` | No | - |
| `lookLike` | `HeadingLevel` | No | - |
| `noMargin` | `boolean` | No | - |
| `withBorder` | `boolean` | No | - |
| `textCenter` | `boolean` | No | - |

### Heading2 Props

| Prop | Type | Required | Description |
|------|------|----------|-------------|
| `error` | `boolean` | No | - |
| `inline` | `boolean` | No | - |
| `lookLike` | `HeadingLevel` | No | - |
| `noMargin` | `boolean` | No | - |
| `withBorder` | `boolean` | No | - |
| `textCenter` | `boolean` | No | - |

### Heading3 Props

| Prop | Type | Required | Description |
|------|------|----------|-------------|
| `error` | `boolean` | No | - |
| `inline` | `boolean` | No | - |
| `lookLike` | `HeadingLevel` | No | - |
| `noMargin` | `boolean` | No | - |
| `withBorder` | `boolean` | No | - |
| `textCenter` | `boolean` | No | - |

### Heading4 Props

| Prop | Type | Required | Description |
|------|------|----------|-------------|
| `error` | `boolean` | No | - |
| `inline` | `boolean` | No | - |
| `lookLike` | `HeadingLevel` | No | - |
| `noMargin` | `boolean` | No | - |
| `withBorder` | `boolean` | No | - |
| `textCenter` | `boolean` | No | - |

### Heading5 Props

| Prop | Type | Required | Description |
|------|------|----------|-------------|
| `error` | `boolean` | No | - |
| `inline` | `boolean` | No | - |
| `lookLike` | `HeadingLevel` | No | - |
| `noMargin` | `boolean` | No | - |
| `withBorder` | `boolean` | No | - |
| `textCenter` | `boolean` | No | - |

### Heading6 Props

| Prop | Type | Required | Description |
|------|------|----------|-------------|
| `error` | `boolean` | No | - |
| `inline` | `boolean` | No | - |
| `lookLike` | `HeadingLevel` | No | - |
| `noMargin` | `boolean` | No | - |
| `withBorder` | `boolean` | No | - |
| `textCenter` | `boolean` | No | - |

### LinkText Props

| Prop | Type | Required | Description |
|------|------|----------|-------------|
| `as` | `As` | No | - |

### LinkIcon Props

| Prop | Type | Required | Description |
|------|------|----------|-------------|
| `as` | `As` | No | - |

### MicroText Props

| Prop | Type | Required | Description |
|------|------|----------|-------------|
| `as` | `As` | No | - |

### Paragraph Props

| Prop | Type | Required | Description |
|------|------|----------|-------------|
| `lead` | `boolean` | No | - |
| `subLead` | `boolean` | No | - |
| `textCenter` | `boolean` | No | - |
| `textLeft` | `boolean` | No | - |
| `noMargin` | `boolean` | No | - |

### PreformattedText Props

No component-specific props beyond native HTML attributes.

### SmallText Props

| Prop | Type | Required | Description |
|------|------|----------|-------------|
| `as` | `As` | No | - |

### StrongText Props

No component-specific props beyond native HTML attributes.

## Manual Examples (from README)

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
            <LinkText href="https://sparebank1.no">Gå til SpareBank 1</LinkText>
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

## Documentation

Full documentation is available at https://design.sparebank1.no/

## Additional Context

This is part of the SpareBank 1 FFE (Felles Front End) design system.
All components follow SpareBank 1's design guidelines and accessibility standards.
