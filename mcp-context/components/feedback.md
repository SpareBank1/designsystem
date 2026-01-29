# @sb1/ffe-feedback-react

## Beskrivelse

React-komponent for å samle inn tilbakemeldinger fra brukere med skjemaer.

## Komponenter

Denne pakken eksporterer følgende komponenter:

- `Feedback`

## Installasjon

Installer pakken og alle dens avhengigheter:

```bash
npm install @sb1/ffe-feedback-react @sb1/ffe-buttons-react @sb1/ffe-core-react @sb1/ffe-feedback @sb1/ffe-form-react @sb1/ffe-icons-react @sb1/ffe-buttons @sb1/ffe-core @sb1/ffe-icons @sb1/ffe-form @sb1/ffe-collapse-react
```

### Avhengigheter

Denne pakken er avhengig av:

- `@sb1/ffe-buttons-react`
- `@sb1/ffe-core-react`
- `@sb1/ffe-feedback`
- `@sb1/ffe-form-react`
- `@sb1/ffe-icons-react`
- `@sb1/ffe-buttons`
- `@sb1/ffe-core`
- `@sb1/ffe-icons`
- `@sb1/ffe-form`
- `@sb1/ffe-collapse-react`

## CSS-import

I prosjektets hoved-CSS-fil, importer de nødvendige stilene:

```css
@import '@sb1/ffe-core/css/ffe.css';
@import '@sb1/ffe-buttons/css/buttons.css';
@import '@sb1/ffe-collapse-react/css/collapse.css';
@import '@sb1/ffe-feedback/css/feedback.css';
@import '@sb1/ffe-form/css/form.css';
@import '@sb1/ffe-icons/css/ffe-icons.css';
```

Merk: Sørg for å importere `@sb1/ffe-core/css/ffe.css` først, da den inneholder grunnleggende stiler.

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

## Dokumentasjon

Full dokumentasjon er tilgjengelig på https://sparebank1.github.io/designsystem/

## Tilleggskontekst

Dette er en del av SpareBank 1 FFE (Felles Front End) designsystem.
Alle komponenter følger SpareBank 1s designretningslinjer og tilgjengelighetsstandarder.
