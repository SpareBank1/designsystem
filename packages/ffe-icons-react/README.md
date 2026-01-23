# @sb1/ffe-icons-react

## Install

```
npm install --save @sb1/ffe-icons-react
```

## Usage

Full documentation on icon usage is available at https://design.sparebank1.no/komponenter/ikoner/.

## Description

Ikonkomponenter for å vise vektorikoner konsistent i FFE. `Icon` støtter valg av ikonnavn, størrelse og dekorasjon, og integreres med ikonsettet i `@sb1/ffe-icons`.

Bruk ikoner for å understøtte mening, ikke erstatte tekst. Sett passende `aria-label` eller skjul dekorative ikoner fra skjermlesere.

## Examples

```tsx
import React from 'react';
import { Icon } from '@sb1/ffe-icons-react';

export function IconsDemo() {
    return (
        <div>
            {/* Standard ikon */}
            <Icon name="check" aria-label="Fullført" />

            {/* Dekorativt ikon (skjult fra skjermleser) */}
            <Icon name="arrow-right" aria-hidden />

            {/* Størrelse og farge styres via CSS-klasser */}
            <Icon
                name="info"
                className="ffe-icon--large ffe-text-color--vann"
                aria-label="Info"
            />
        </div>
    );
}
```

## Development

To start a local development server, run the following from the designsystem root folder:

```bash
npm install
npm run build
npm start
```

A local instance of `Storybook` with live reloading will run at http://localhost:6006/.

Example implementations using the latest versions of all components are also available at https://sparebank1.github.io/designsystem.
