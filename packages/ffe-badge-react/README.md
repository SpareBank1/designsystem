# @sb1/ffe-badge-react

## Beskrivelse

Badge-komponenten brukes for å vise små merkelapper eller tellere for notifikasjoner. Den viser antall uleste varsler, meldinger eller oppgaver, og plasseres vanligvis ved siden av tekst, et ikon, eller i en meny for å tiltrekke brukerens oppmerksomhet. Badge kan også brukes uten innhold som en visuell indikator på ny aktivitet.

Komponenten rendrer et `<span>`-element med CSS-klassen `ffe-badge`.

## Installasjon

```bash
npm install --save @sb1/ffe-badge-react
```

## Bruk

Full dokumentasjon er tilgjengelig på https://sparebank1.github.io/designsystem/komponenter/badge/.

### Importere CSS

CSS-stilene må importeres for at komponenten skal vises korrekt:

```css
@import '@sb1/ffe-badge/css/badge.css';
```

### Props

| Prop        | Type              | Påkrevd | Standardverdi | Beskrivelse                                                                        |
| ----------- | ----------------- | ------- | ------------- | ---------------------------------------------------------------------------------- |
| `children`  | `React.ReactNode` | Ja      | -             | Innholdet i badge, vanligvis et tall eller kort tekst. Utelat for indikator-modus. |
| `className` | `string`          | Nei     | `undefined`   | Ekstra CSS-klasse(r) som legges til komponenten.                                   |

Komponenten aksepterer også alle standard HTML-attributter for `<span>`-elementer via rest-props (f.eks. `id`, `aria-label`, `data-*`).

### CSS-klasser

Komponenten bruker følgende CSS-klasser:

- `ffe-badge` - Hovedklassen, alltid påført
- `ffe-badge--no-children` - Påført automatisk når `children` er tom/undefined (indikator-modus)

## Eksempler

### Standard badge med tall

Brukes for å vise antall uleste elementer:

```tsx
import { Badge } from '@sb1/ffe-badge-react';

function NotificationCount() {
    return <Badge>9</Badge>;
}
```

### Badge med kontekst

Badge plasseres vanligvis til høyre for teksten den gjelder:

```tsx
import { Badge } from '@sb1/ffe-badge-react';

function MessageHeader() {
    return (
        <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
            <span>Meldinger</span>
            <Badge>23</Badge>
        </div>
    );
}
```

### Indikator uten tall

Når Badge brukes uten children, vises den som en liten prikk for å indikere ny aktivitet. Denne plasseres typisk i hjørnet av et ikon:

```tsx
import { Badge } from '@sb1/ffe-badge-react';

function IconWithIndicator() {
    return (
        <div style={{ position: 'relative', display: 'inline-block' }}>
            <MyIcon />
            <Badge />
        </div>
    );
}
```

### Badge med egendefinert CSS-klasse

```tsx
import { Badge } from '@sb1/ffe-badge-react';

function CustomBadge() {
    return <Badge className="my-custom-badge">Ny</Badge>;
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
