# @sb1/ffe-shapes-react

## Beskrivelse

Dekorative form-komponenter for visuell interesse. Inneholder `Wave`-komponenten for bølgeformer som bakgrunnselementer.

## Installasjon

```bash
npm install --save @sb1/ffe-shapes-react
```

## Bruk

Full dokumentasjon er tilgjengelig på https://design.sparebank1.no/komponenter/shapes/.

## Eksempler

```tsx
import { Wave } from '@sb1/ffe-shapes-react';

function MyComponent() {
    return (
        <div style={{ position: 'relative' }}>
            <Wave color="frost-30" />
            <div style={{ position: 'relative', zIndex: 1 }}>
                Innhold over bølgen
            </div>
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
