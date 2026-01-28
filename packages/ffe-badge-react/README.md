# @sb1/ffe-badge-react

## Beskrivelse

Badge-komponenten brukes for å vise små merkelapper eller teller for notifikasjoner.

## Installasjon

```bash
npm install --save @sb1/ffe-badge-react
```

## Bruk

Full dokumentasjon er tilgjengelig på https://design.sparebank1.no/komponenter/badge/.

### Importere CSS

```css
@import '@sb1/ffe-badge/css/badge.css';
```

## Eksempler

```tsx
import { Badge } from '@sb1/ffe-badge-react';

function MyComponent() {
    return (
        <div>
            <Badge>5</Badge>
            <Badge>Ny</Badge>
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
