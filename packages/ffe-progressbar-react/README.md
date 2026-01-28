# @sb1/ffe-progressbar-react

## Beskrivelse

Fremdriftsindikator for å vise fremdrift i en oppgave.

## Installasjon

```bash
npm install --save @sb1/ffe-progressbar-react
```

## Bruk

Full dokumentasjon er tilgjengelig på https://design.sparebank1.no/komponenter/progressbar/.

## Eksempler

```tsx
import { ProgressBar } from '@sb1/ffe-progressbar-react';

function MyComponent() {
    return (
        <div>
            <ProgressBar percentage={50} />
            <ProgressBar percentage={75} label="75% fullført" />
            <ProgressBar percentage={100} variant="success" />
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
