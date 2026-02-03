# @sb1/ffe-progressbar-react

## Beskrivelse

Fremdriftsindikator som wrapper det native HTML `<progress>`-elementet med SpareBank 1-styling.

## Installasjon

```bash
npm install --save @sb1/ffe-progressbar-react
```

## Bruk

Full dokumentasjon: https://sparebank1.github.io/designsystem/

```css
@import '@sb1/ffe-progressbar/css/progressbar.css';
```

## Eksempler

### Grunnleggende bruk

```tsx
import { Progressbar } from '@sb1/ffe-progressbar-react';

function MyComponent() {
    return <Progressbar value={40} max={100} />;
}
```

### Med tilgjengelighet og suksess-tema

```tsx
import { Progressbar } from '@sb1/ffe-progressbar-react';

function LoanProgress() {
    return (
        <Progressbar
            value={5000}
            max={5000}
            aria-label="Nedbetaling av lån"
            success={true}
        />
    );
}
```

## Utvikling

```bash
npm install
npm run build
npm start
```

Storybook kjører på http://localhost:6006/
