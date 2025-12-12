# @sb1/ffe-spinner-react

## Description

Det er mye som skjer i bakgrunnen i et system når innholdet lastes inn. Med spinnere kan vi kommunisere tydelig til brukeren at innholdet er i ferd med å vises snart. Det er best practice å benytte seg av spinnere dersom ventetiden varer lengre enn tre sekunder. Dersom siden bruker mer enn 10 sekunder på å laste inn innholdet, vurder å bruke en notifikasjon med forklarende tekst.

## Components

This package exports the following components:

- `Spinner`

## Installation

Install the package and all its dependencies:

```bash
npm install @sb1/ffe-spinner-react @sb1/ffe-spinner @sb1/ffe-core
```

### Dependencies

This package depends on:

- `@sb1/ffe-spinner`
- `@sb1/ffe-core`

## CSS Import

In your project's main CSS file, import the required styles:

```css
@import '@sb1/ffe-core/css/ffe.css';
@import '@sb1/ffe-spinner/css/spinner.css';
```

Note: Make sure to import `@sb1/ffe-core/css/ffe.css` first as it contains base styles.

## Basic Usage

```typescript
import { Spinner } from '@sb1/ffe-spinner-react';

function MyComponent() {
  return (
    <Spinner>
      {/* Component content */}
    </Spinner>
  );
}
```

## API Reference

### Spinner Props

| Prop          | Type                                                                                                                  | Required | Description |
| ------------- | --------------------------------------------------------------------------------------------------------------------- | -------- | ----------- | --- | --- |
| `immediate`   | `boolean`                                                                                                             | No       | -           |
| `large`       | `boolean`                                                                                                             | No       | -           |
| `loadingText` | `React.ReactNode`                                                                                                     | No       | -           |
| `locale`      | `'nb'                                                                                                                 | 'nn'     | 'en'`       | No  | -   |
| `https`       | `//sparebank1.github.io/designsystem/?path=/docs/introduksjon-changelog--docs#2025---februar---semantiske-farger) */` | Yes      | -           |
| `onColoredBg` | `never`                                                                                                               | No       | -           |

## Documentation

Full documentation is available at https://design.sparebank1.no/

## Additional Context

This is part of the SpareBank 1 FFE (Felles Front End) design system.
All components follow SpareBank 1's design guidelines and accessibility standards.
