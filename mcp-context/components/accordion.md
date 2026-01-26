# @sb1/ffe-accordion-react

## Description

Kollapsbare seksjoner for å organisere innhold som kan åpnes og lukkes. `Accordion` håndterer gruppeatferd, mens `AccordionItem` representerer hver seksjon.

## Components

This package exports the following components:

- `Accordion`
- `AccordionItem`

## Installation

Install the package and all its dependencies:

```bash
npm install @sb1/ffe-accordion-react @sb1/ffe-accordion @sb1/ffe-collapse-react @sb1/ffe-icons-react @sb1/ffe-core @sb1/ffe-icons
```

### Dependencies

This package depends on:

- `@sb1/ffe-accordion`
- `@sb1/ffe-collapse-react`
- `@sb1/ffe-icons-react`
- `@sb1/ffe-core`
- `@sb1/ffe-icons`

## CSS Import

In your project's main CSS file, import the required styles:

```css
@import '@sb1/ffe-core/css/ffe.css';
@import '@sb1/ffe-accordion/css/ffe-accordion.css';
@import '@sb1/ffe-collapse-react/css/collapse.css';
@import '@sb1/ffe-icons/css/ffe-icons.css';
```

Note: Make sure to import `@sb1/ffe-core/css/ffe.css` first as it contains base styles.

## API Reference

### Accordion Props

| Prop | Type | Required | Description |
|------|------|----------|-------------|
| `headingLevel` | `1 | 2 | 3 | 4 | 5 | 6` | Yes | - |

### AccordionItem Props

| Prop | Type | Required | Description |
|------|------|----------|-------------|
| `heading` | `NonNullable<React.ReactNode>` | Yes | - |
| `children` | `NonNullable<React.ReactNode>` | Yes | - |
| `defaultOpen` | `boolean` | No | - |
| `isOpen` | `boolean` | No | - |
| `onToggleOpen` | `(isOpen: boolean) => void` | No | - |
| `ariaLabel` | `string` | No | - |
| `noPadding` | `boolean` | No | - |

## Manual Examples (from README)

```tsx
import React from 'react';
import { Accordion, AccordionItem } from '@sb1/ffe-accordion-react';

export function AccordionDemo() {
    const [open, setOpen] = React.useState<number | null>(0);
    return (
        <Accordion openItem={open} onChange={setOpen}>
            <AccordionItem title="Seksjon 1" id="acc-1">
                Innhold for seksjon 1
            </AccordionItem>
            <AccordionItem title="Seksjon 2" id="acc-2">
                Innhold for seksjon 2
            </AccordionItem>
            <AccordionItem title="Seksjon 3" id="acc-3">
                Innhold for seksjon 3
            </AccordionItem>
        </Accordion>
    );
}
```

## Documentation

Full documentation is available at https://design.sparebank1.no/

## Additional Context

This is part of the SpareBank 1 FFE (Felles Front End) design system.
All components follow SpareBank 1's design guidelines and accessibility standards.
