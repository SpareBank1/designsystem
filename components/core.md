# @sb1/ffe-core-react

## Beskrivelse

React-komponenter for typografi og grunnleggende tekstmønstre. Bruk for overskrifter, avsnitt, lenker og tekstinnhold med riktig stil og semantikk.

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
npm install @sb1/ffe-core-react
```

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
import {
    Heading1,
    Heading2,
    Heading3,
    Heading4,
    Heading5,
    Heading6,
    Paragraph,
    BodyText,
    SmallText,
    MicroText,
    EmphasizedText,
    StrongText,
    PreformattedText,
    LinkText,
    LinkIcon,
    DividerLine,
} from '@sb1/ffe-core-react';
```

```tsx
<Heading1>Sidetittel</Heading1>
<Heading2 lookLike={1}>Semantisk h2 som ser ut som h1</Heading2>
<Heading3 withBorder noMargin>Med understrek, uten margin</Heading3>
```

```tsx
<Paragraph lead>Ledende avsnitt med større skrift.</Paragraph>
<Paragraph>Standard brødtekst.</Paragraph>
```

```tsx
<BodyText>Brødtekst i en div.</BodyText>
<BodyText as="span">Brødtekst som span.</BodyText>
```

```tsx
<SmallText>Liten hjelpetekst</SmallText>
```

```tsx
<MicroText>Veldig liten tekst</MicroText>
<MicroText strong>Veldig liten, fet tekst</MicroText>
```

## Dokumentasjon

Full dokumentasjon er tilgjengelig på https://sparebank1.github.io/designsystem/

## Tilleggskontekst

Dette er en del av SpareBank 1 FFE (Felles Front End) designsystem.
Alle komponenter følger SpareBank 1s designretningslinjer og tilgjengelighetsstandarder.
