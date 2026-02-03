# @sb1/ffe-feedback-react

## Beskrivelse

React-komponent for tilbakemeldinger. Viser thumbs up/down-velger, utvides til tekstfelt etter klikk, og viser bekreftelse ved innsending.

## Komponenter

Denne pakken eksporterer følgende komponenter:

- `Feedback`

## Installasjon

Installer pakken og alle dens avhengigheter:

```bash
npm install @sb1/ffe-feedback-react
```

## API-referanse

### Feedback Props

| Prop | Type | Påkrevd | Beskrivelse |
|------|------|---------|-------------|
| `headingLevel` | `HeadingLevel` | Nei | - |
| `headingLookLike` | `HeadingLevel` | Nei | - |
| `locale` | `Locale` | Nei | - |
| `onThumbClick` | `(thumb: Thumb) => void` | Ja | - |
| `onFeedbackSend` | `(feedbackText: string, consent?: boolean) => void` | Ja | - |
| `onFinish` | `() => void` | Nei | - |
| `bgColor` | `BgColor` | Nei | - |
| `contactLink` | `FeedbackExpandedProps['contactLink']` | Nei | - |
| `texts` | `object` | Nei | - |
| `className` | `string` | Nei | - |
| `includeConsent` | `boolean` | Nei | - |

## Eksempler (fra README)

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

## Dokumentasjon

Full dokumentasjon er tilgjengelig på https://sparebank1.github.io/designsystem/

## Tilleggskontekst

Dette er en del av SpareBank 1 FFE (Felles Front End) designsystem.
Alle komponenter følger SpareBank 1s designretningslinjer og tilgjengelighetsstandarder.
