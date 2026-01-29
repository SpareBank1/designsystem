# @sb1/ffe-progressbar-react

## Beskrivelse

Fremdriftsindikator for å vise fremdrift i en oppgave.

## Installasjon

```bash
npm install --save @sb1/ffe-progressbar-react
```

## Bruk

Full dokumentasjon er tilgjengelig på https://sparebank1.github.io/designsystem/komponenter/progressbar/.

## Eksempler

```tsx
import { Progressbar } from '@sb1/ffe-progressbar-react';

function MyComponent() {
    return (
        <div>
            <Progressbar value={50} max={100} />
            <Progressbar value={75} max={100} ariaLabel="75% fullført" />
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
