# @sb1/ffe-core-react

## Beskrivelse

React-komponenter for typografi og grunnleggende tekstmønstre. Bruk for overskrifter, avsnitt, lenker og tekstinnhold med riktig stil og semantikk.

Merk: `Wave` er deprecated, bruk varianten i `@sb1/ffe-shapes-react`.

## Installasjon

```bash
npm install --save @sb1/ffe-core-react
```

## Bruk

Dokumentasjon: https://sparebank1.github.io/designsystem/

### Importere CSS

```css
@import '@sb1/ffe-core/css/ffe.css';
```

## Eksempler

### Tilgjengelige komponenter

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

### Overskrifter (Heading1-Heading6)

```tsx
<Heading1>Sidetittel</Heading1>
<Heading2 lookLike={1}>Semantisk h2 som ser ut som h1</Heading2>
<Heading3 withBorder noMargin>Med understrek, uten margin</Heading3>
```

### Paragraph

```tsx
<Paragraph lead>Ledende avsnitt med større skrift.</Paragraph>
<Paragraph>Standard brødtekst.</Paragraph>
```

### BodyText

Brødtekst med polymorfisk `as`-prop. Standard: `div`.

```tsx
<BodyText>Brødtekst i en div.</BodyText>
<BodyText as="span">Brødtekst som span.</BodyText>
```

### SmallText

Liten tekst. Standard element: `span`.

```tsx
<SmallText>Liten hjelpetekst</SmallText>
```

### MicroText

Ekstra liten tekst. Standard element: `span`. Støtter `strong`-prop.

```tsx
<MicroText>Veldig liten tekst</MicroText>
<MicroText strong>Veldig liten, fet tekst</MicroText>
```

### Tekstformatering

```tsx
<EmphasizedText>Betont tekst (kursiv, rendrer em)</EmphasizedText>
<StrongText>Viktig tekst (fet, rendrer strong)</StrongText>
<PreformattedText>{`kode her`}</PreformattedText>
```

### LinkText

Tekstlenke med valgfri understreking. Standard element: `a`.

```tsx
<LinkText href="https://sparebank1.no">Gå til SpareBank 1</LinkText>
<LinkText as={Link} to="/dashboard">Med React Router</LinkText>
```

### LinkIcon

Lenke med pilikon. Standard element: `a`. Støtter `as`-prop.

```tsx
<LinkIcon href="/produkter">Se alle produkter</LinkIcon>
```

### DividerLine

Visuell skillelinje. Rendrer `<hr>` med `aria-hidden="true"`.

```tsx
<DividerLine />
```

## Utvikling

```bash
npm install
npm run build
npm start
```

Lokal Storybook på http://localhost:6006/.
