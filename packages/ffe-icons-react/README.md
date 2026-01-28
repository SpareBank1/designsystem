# @sb1/ffe-icons-react

## Installasjon

```bash
npm install --save @sb1/ffe-icons-react
```

## Bruk

Full dokumentasjon er tilgjengelig på https://design.sparebank1.no/komponenter/ikoner/.

## Beskrivelse

Ikonkomponenter for å vise vektorikoner konsistent i FFE. `Icon` støtter valg av ikonnavn, størrelse og dekorasjon, og integreres med ikonsettet i `@sb1/ffe-icons`.

Bruk ikoner for å understøtte mening, ikke erstatte tekst. Sett passende `aria-label` eller skjul dekorative ikoner fra skjermlesere.

## Eksempler

```tsx
import React from 'react';
import { Icon } from '@sb1/ffe-icons-react';

export function IconsDemo() {
    return (
        <div>
            {/* Standard ikon */}
            <Icon name="check" aria-label="Fullført" />

            {/* Dekorativt ikon (skjult fra skjermleser) */}
            <Icon name="arrow-right" aria-hidden />

            {/* Størrelse og farge styres via CSS-klasser */}
            <Icon
                name="info"
                className="ffe-icon--large ffe-text-color--vann"
                aria-label="Info"
            />
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
