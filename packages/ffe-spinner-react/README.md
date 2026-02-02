# @sb1/ffe-spinner-react

## Beskrivelse

Lasteindikator for å vise pågående prosesser. Brukes til å gi visuell tilbakemelding til brukeren mens innhold lastes eller operasjoner pågår.

## Installasjon

```bash
npm install --save @sb1/ffe-spinner-react
```

## Bruk

Full dokumentasjon er tilgjengelig på https://sparebank1.github.io/designsystem/komponenter/spinner/.

### Importering

```tsx
import { Spinner } from '@sb1/ffe-spinner-react';
// For TypeScript: props-interface kan også importeres
import type { SpinnerProps } from '@sb1/ffe-spinner-react';
```

### Props

| Prop          | Type                              | Standard    | Beskrivelse                                                                                                                                |
| ------------- | --------------------------------- | ----------- | ------------------------------------------------------------------------------------------------------------------------------------------ |
| `large`       | `boolean`                         | `false`     | Setter spinneren til stor størrelse                                                                                                        |
| `immediate`   | `boolean`                         | `false`     | Viser spinneren umiddelbart uten forsinkelse                                                                                               |
| `loadingText` | `React.ReactNode`                 | `undefined` | Valgfri tekst eller React-element som vises ved siden av spinneren. Når satt, skjules spinner-ikonet for skjermlesere (aria-hidden="true") |
| `locale`      | `'nb' \| 'nn' \| 'en'`            | `'nb'`      | Språk for aria-label. Automatisk satt til "Vennligst vent" (nb), "Ver vennleg og vent" (nn), eller "Please wait" (en)                      |
| `className`   | `string`                          | `undefined` | Ekstra CSS-klasser for container-elementet                                                                                                 |
| `...rest`     | `ComponentPropsWithoutRef<'div'>` | -           | Alle standard div-attributter støttes (id, style, etc.)                                                                                    |

## Eksempler

### Grunnleggende bruk

```tsx
import { Spinner } from '@sb1/ffe-spinner-react';

function LoadingExample() {
    return <Spinner />;
}
```

### Stor spinner

```tsx
import { Spinner } from '@sb1/ffe-spinner-react';

function LargeSpinnerExample() {
    return <Spinner large={true} />;
}
```

### Med tekst

```tsx
import { Spinner } from '@sb1/ffe-spinner-react';
import { Paragraph } from '@sb1/ffe-core-react';

function SpinnerWithTextExample() {
    // Med ren tekst
    return <Spinner loadingText="Laster inn data..." />;
}

function SpinnerWithReactElementExample() {
    // Med React-element for mer kontroll over styling
    return <Spinner loadingText={<Paragraph>Vennligst vent</Paragraph>} />;
}
```

### Umiddelbar visning (uten forsinkelse)

```tsx
import { Spinner } from '@sb1/ffe-spinner-react';

function ImmediateSpinnerExample() {
    return <Spinner immediate={true} />;
}
```

### Med engelsk språk

```tsx
import { Spinner } from '@sb1/ffe-spinner-react';

function EnglishSpinnerExample() {
    // aria-label blir automatisk "Please wait"
    return <Spinner locale="en" />;
}
```

### Betinget visning basert på lasting

```tsx
import { useState, useEffect } from 'react';
import { Spinner } from '@sb1/ffe-spinner-react';

function ConditionalSpinnerExample() {
    const [isLoading, setIsLoading] = useState(true);
    const [data, setData] = useState(null);

    useEffect(() => {
        fetchData().then(result => {
            setData(result);
            setIsLoading(false);
        });
    }, []);

    if (isLoading) {
        return <Spinner loadingText="Henter data..." />;
    }

    return <div>{/* Vis data her */}</div>;
}
```

### Med egendefinerte attributter

```tsx
import { Spinner } from '@sb1/ffe-spinner-react';

function CustomAttributesExample() {
    return (
        <Spinner
            id="main-loader"
            className="custom-spinner-class"
            style={{ margin: '20px auto' }}
            data-testid="loading-spinner"
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
