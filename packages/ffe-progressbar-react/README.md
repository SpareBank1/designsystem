# @sb1/ffe-progressbar-react

## Beskrivelse

Fremdriftsindikator for å vise fremdrift i en oppgave. Komponenten wrapper det native HTML `<progress>`-elementet med SpareBank 1-styling.

## Installasjon

```bash
npm install --save @sb1/ffe-progressbar-react
```

## Bruk

Full dokumentasjon er tilgjengelig på https://sparebank1.github.io/designsystem/komponenter/progressbar/.

### Props

Komponenten utvider alle standard HTML progress-elementattributter (`React.ProgressHTMLAttributes<HTMLProgressElement>`).

| Prop         | Type      | Standard | Beskrivelse                                              |
| ------------ | --------- | -------- | -------------------------------------------------------- |
| `value`      | `number`  | -        | Nåværende fremdriftsverdi (arvet fra HTML progress)      |
| `max`        | `number`  | `1`      | Maksimal verdi for fremdriften (arvet fra HTML progress) |
| `success`    | `boolean` | `false`  | Viser progressbar med grønn suksess-tema                 |
| `className`  | `string`  | -        | Ekstra CSS-klasser                                       |
| `aria-label` | `string`  | -        | Beskrivende tekst for skjermlesere                       |

## Eksempler

### Grunnleggende bruk

```tsx
import { Progressbar } from '@sb1/ffe-progressbar-react';

function MyComponent() {
    return <Progressbar value={40} max={100} />;
}
```

### Suksess-tema (grønn)

Bruk `success`-propen for å vise en grønn progressbar, typisk for å indikere fullførte oppgaver.

```tsx
import { Progressbar } from '@sb1/ffe-progressbar-react';

function CompletedTask() {
    return <Progressbar value={100} max={100} success={true} />;
}
```

### Med tilgjengelighet (aria-label)

For skjermlesere bør du legge til `aria-label` som beskriver hva fremdriften gjelder. Skjermleseren vil lese opp label etterfulgt av prosent.

```tsx
import { Progressbar } from '@sb1/ffe-progressbar-react';

function LoanProgress() {
    return (
        <Progressbar
            value={2500}
            max={5000}
            aria-label="Nedbetaling av lån i prosent"
        />
    );
}
```

### Dynamisk oppdatering

```tsx
import { useState } from 'react';
import { Progressbar } from '@sb1/ffe-progressbar-react';

function FileUpload() {
    const [progress, setProgress] = useState(0);

    return (
        <Progressbar
            value={progress}
            max={100}
            aria-label="Filopplasting"
            success={progress === 100}
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
