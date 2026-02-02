# @sb1/ffe-feedback-react

## Beskrivelse

React-komponent for tilbakemeldinger. Viser thumbs up/down-velger, utvides til tekstfelt etter klikk, og viser bekreftelse ved innsending.

## Installasjon

```bash
npm install --save @sb1/ffe-feedback-react
```

## Bruk

Full dokumentasjon: https://sparebank1.github.io/designsystem/

Avhengig av `@sb1/ffe-buttons-react`, `@sb1/ffe-icons-react` og `@sb1/ffe-form-react`. Importer CSS:

```css
@import url('@sb1/ffe-buttons/css/ffe-buttons.css');
@import url('@sb1/ffe-icons/css/ffe-icons.css');
@import url('@sb1/ffe-form/css/ffe-form.css');
```

## Eksempler

### Grunnleggende bruk

```tsx
import { Feedback } from '@sb1/ffe-feedback-react';

function MinKomponent() {
    return (
        <Feedback
            onThumbClick={thumb => console.log('Valgt:', thumb)}
            onFeedbackSend={(text, consent) =>
                console.log('Tilbakemelding:', text)
            }
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
            onThumbClick={thumb =>
                analytics.track('feedback_thumb', { value: thumb })
            }
            onFeedbackSend={(text, consent) =>
                api.sendFeedback({ text, canContact: consent })
            }
            onFinish={() => console.log('Bruker avsluttet')}
            includeConsent={true}
            contactLink={{
                url: 'https://example.com/kontakt',
                linkText: 'Kontakt oss',
            }}
            bgColor="secondary"
            locale="en"
        />
    );
}
```

## Utvikling

```bash
npm install && npm run build && npm start
```

Lokal Storybook kjører på http://localhost:6006/.
