# @sb1/ffe-spinner-react

## Beskrivelse

Lasteindikator for å vise pågående prosesser.

## Installasjon

```bash
npm install --save @sb1/ffe-spinner-react
```

## Bruk

Full dokumentasjon er tilgjengelig på https://design.sparebank1.no/komponenter/spinner/.

## Eksempler

```tsx
import { Spinner } from '@sb1/ffe-spinner-react';

function MyComponent() {
    const [isLoading, setIsLoading] = useState(true);

    return (
        <div>
            {isLoading && <Spinner />}
            <Spinner size="large" />
            <Spinner size="small" ariaLabel="Laster innhold..." />
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
