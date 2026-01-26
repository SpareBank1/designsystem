# @sb1/ffe-icons-react

## Description

Ikonkomponenter for å vise vektorikoner konsistent i FFE. `Icon` støtter valg av ikonnavn, størrelse og dekorasjon, og integreres med ikonsettet i `@sb1/ffe-icons`.

## Installation

Install the package and all its dependencies:

```bash
npm install @sb1/ffe-icons-react @sb1/ffe-icons
```

### Dependencies

This package depends on:

- `@sb1/ffe-icons`

## CSS Import

In your project's main CSS file, import the required styles:

```css
@import '@sb1/ffe-icons/css/ffe-icons.css';
```

Note: Make sure to import `@sb1/ffe-core/css/ffe.css` first as it contains base styles.

## Manual Examples (from README)

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

## Documentation

Full documentation is available at https://design.sparebank1.no/

## Additional Context

This is part of the SpareBank 1 FFE (Felles Front End) design system.
All components follow SpareBank 1's design guidelines and accessibility standards.
