# @sb1/ffe-spinner-react

## Beskrivelse

Lasteindikator for pågående prosesser.

## Installasjon

```bash
npm install --save @sb1/ffe-spinner-react
```

## Bruk

Full dokumentasjon: https://sparebank1.github.io/designsystem/komponenter/spinner/

### Importering

```tsx
import { Spinner } from '@sb1/ffe-spinner-react';
import type { SpinnerProps } from '@sb1/ffe-spinner-react';
```

## Eksempler

### Grunnleggende bruk

```tsx
<Spinner />
<Spinner large={true} />
<Spinner immediate={true} />
```

### Med tekst

```tsx
<Spinner loadingText="Laster inn data..." />
```

### Betinget visning basert på lasting

```tsx
function DataLoader() {
    const [isLoading, setIsLoading] = useState(true);

    if (isLoading) {
        return <Spinner loadingText="Henter data..." />;
    }

    return <div>{/* Vis data her */}</div>;
}
```

## Utvikling

```bash
npm install
npm run build
npm start
```

Lokal Storybook kjører på http://localhost:6006/.
