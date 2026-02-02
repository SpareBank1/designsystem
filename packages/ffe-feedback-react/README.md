# @sb1/ffe-feedback-react

## Beskrivelse

React-komponent for å samle inn tilbakemeldinger fra brukere. Komponenten viser en thumbs up/down-velger, og etter at brukeren har klikket, utvides den til et tekstfelt for valgfri tilbakemelding.

**Brukerflyt:**

1. Brukeren ser et spørsmål med tommel opp/ned-knapper
2. Brukeren klikker på en tommel -> `onThumbClick` kalles
3. Komponenten utvides med et tekstfelt for valgfri tilbakemelding
4. Brukeren kan skrive tilbakemelding og trykke "Send" -> `onFeedbackSend` kalles
5. Komponenten viser en bekreftelse med en "high five"-animasjon

## Installasjon

```bash
npm install --save @sb1/ffe-feedback-react
```

## Bruk

Denne pakken er avhengig av `@sb1/ffe-buttons-react`, `@sb1/ffe-icons-react` og `@sb1/ffe-form-react`.
Husk å importere LESS-filene fra disse pakkene.

### Props

| Prop              | Type                                                        | Påkrevd | Default | Beskrivelse                                                                                   |
| ----------------- | ----------------------------------------------------------- | ------- | ------- | --------------------------------------------------------------------------------------------- |
| `onThumbClick`    | `(thumb: Thumb) => void`                                    | Ja      | -       | Kalles når brukeren klikker på tommel opp eller ned. `Thumb` er `'THUMB_UP' \| 'THUMB_DOWN'`. |
| `onFeedbackSend`  | `(feedbackText: string, consent?: boolean) => void`         | Ja      | -       | Kalles når brukeren sender inn tilbakemelding. Mottar teksten og eventuelt samtykke-status.   |
| `onFinish`        | `() => void`                                                | Nei     | -       | Kalles når brukeren avslutter uten å sende tilbakemelding (klikker "Avslutt").                |
| `locale`          | `'nb' \| 'nn' \| 'en'`                                      | Nei     | `'nb'`  | Språk for innebygde tekster.                                                                  |
| `headingLevel`    | `1 \| 2 \| 3 \| 4 \| 5 \| 6`                                | Nei     | `4`     | HTML-overskriftsnivå (h1-h6) for tilgjengelighet.                                             |
| `headingLookLike` | `1 \| 2 \| 3 \| 4 \| 5 \| 6`                                | Nei     | -       | Visuelt overskriftsnivå (kan være annerledes enn `headingLevel`).                             |
| `bgColor`         | `'primary' \| 'secondary' \| 'tertiary'`                    | Nei     | -       | Bakgrunnsfarge for komponenten.                                                               |
| `includeConsent`  | `boolean`                                                   | Nei     | `false` | Viser en avkrysningsboks for samtykke til kontakt.                                            |
| `contactLink`     | `{ url: string; linkText?: string; onClick?: (e) => void }` | Nei     | -       | Lenke til kontaktside, vises i det utvidede tilbakemeldingsskjemaet.                          |
| `texts`           | `{ feedbackNotSentHeading?: string }`                       | Nei     | -       | Overstyring av innebygde tekster.                                                             |
| `className`       | `string`                                                    | Nei     | -       | Ekstra CSS-klasse for rot-elementet.                                                          |

### Eksporterte typer

```typescript
import type { FeedbackProps, Thumb } from '@sb1/ffe-feedback-react';

// Thumb type for callback
type Thumb = 'THUMB_UP' | 'THUMB_DOWN';
```

## Eksempler

### Grunnleggende bruk

```tsx
import { Feedback } from '@sb1/ffe-feedback-react';

function MinKomponent() {
    const handleThumbClick = (thumb: 'THUMB_UP' | 'THUMB_DOWN') => {
        // Send tommel-valg til analytics eller backend
        console.log('Bruker klikket:', thumb);
    };

    const handleFeedbackSend = (feedbackText: string, consent?: boolean) => {
        // Send tilbakemelding til backend
        console.log('Tilbakemelding:', feedbackText);
        if (consent !== undefined) {
            console.log('Samtykke gitt:', consent);
        }
    };

    return (
        <Feedback
            onThumbClick={handleThumbClick}
            onFeedbackSend={handleFeedbackSend}
        />
    );
}
```

### Med bakgrunnsfarge og tilpasset overskrift

```tsx
import { Feedback } from '@sb1/ffe-feedback-react';

function TilbakemeldingMedBakgrunn() {
    return (
        <Feedback
            onThumbClick={thumb => console.log(thumb)}
            onFeedbackSend={text => console.log(text)}
            bgColor="secondary"
            headingLevel={2}
            texts={{
                feedbackNotSentHeading: 'Vil du se mer av slike endringer?',
            }}
        />
    );
}
```

### Med samtykke og kontaktlenke

```tsx
import { Feedback } from '@sb1/ffe-feedback-react';

function TilbakemeldingMedSamtykke() {
    return (
        <Feedback
            onThumbClick={thumb => {
                // Track initial feedback
                analytics.track('feedback_thumb', { value: thumb });
            }}
            onFeedbackSend={(text, consent) => {
                // Send to backend with consent info
                api.sendFeedback({ text, canContact: consent });
            }}
            onFinish={() => {
                // User cancelled without sending feedback
                console.log('Bruker avsluttet');
            }}
            includeConsent={true}
            contactLink={{
                url: 'https://example.com/kontakt',
                linkText: 'Kontakt oss',
                onClick: () => analytics.track('contact_link_clicked'),
            }}
        />
    );
}
```

### Med engelsk språk

```tsx
import { Feedback } from '@sb1/ffe-feedback-react';

function EnglishFeedback() {
    return (
        <Feedback
            locale="en"
            onThumbClick={thumb => console.log(thumb)}
            onFeedbackSend={text => console.log(text)}
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
