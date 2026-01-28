# @sb1/ffe-feedback-react

## Beskrivelse

React-komponent for å samle inn tilbakemeldinger fra brukere med skjemaer.

## Installasjon

```bash
npm install --save @sb1/ffe-feedback-react
```

## Bruk

Full dokumentasjon er ennå ikke tilgjengelig, men vil bli lagt til på https://design.sparebank1.no/komponenter.

Denne pakken er avhengig av `@sb1/ffe-buttons-react`, `@sb1/ffe-icons-react` og `@sb1/ffe-form-react`.
Husk å importere less-filene.

## Eksempler

```tsx
import { Feedback } from '@sb1/ffe-feedback-react';
import { useState } from 'react';

function MyComponent() {
    const [feedback, setFeedback] = useState('');

    return (
        <Feedback
            title="Hva synes du om denne siden?"
            onSubmit={value => {
                console.log('Feedback:', value);
                setFeedback(value);
            }}
            placeholder="Skriv din tilbakemelding her..."
            submitButtonText="Send inn"
        />
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
