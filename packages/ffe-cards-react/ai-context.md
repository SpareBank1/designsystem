# @sb1/ffe-cards-react

## Description

@sb1/ffe-cards-react

## Components

This package exports the following components:

- `CardBase`
- `TextCard`
- `IconCard`
- `GroupCard`
- `GroupCardElement`
- `GroupCardTitle`
- `GroupCardFooter`
- `IllustrationCard`
- `ImageCard`
- `StippledCard`

## Installation

Install the package and all its dependencies:

```bash
npm install @sb1/ffe-cards-react @sb1/ffe-cards @sb1/ffe-icons-react @sb1/ffe-core @sb1/ffe-icons
```

### Dependencies

This package depends on:

- `@sb1/ffe-cards`
- `@sb1/ffe-icons-react`
- `@sb1/ffe-core`
- `@sb1/ffe-icons`

## CSS Import

In your project's main CSS file, import the required styles:

```css
@import '@sb1/ffe-core/css/ffe.css';
@import '@sb1/ffe-cards/css/cards.css';
@import '@sb1/ffe-icons/css/ffe-icons.css';
```

Note: Make sure to import `@sb1/ffe-core/css/ffe.css` first as it contains base styles.

## Basic Usage

```typescript
import { CardBase, TextCard, IconCard, ... } from '@sb1/ffe-cards-react';

function MyComponent() {
  return (
    <CardBase>
      {/* Component content */}
    </CardBase>
  );
}
```

## API Reference

### CardBase Props

| Prop              | Type                                                                                                                  | Required         | Description |
| ----------------- | --------------------------------------------------------------------------------------------------------------------- | ---------------- | ----------- | --- |
| `noMargin`        | `boolean`                                                                                                             | No               | -           |
| `textCenter`      | `boolean`                                                                                                             | No               | -           |
| `values`          | ``primary` `secondary` `tertiary``                                                                                    | Yes              | -           |
| `https`           | `//sparebank1.github.io/designsystem/?path=/docs/introduksjon-changelog--docs#2025---februar---semantiske-farger)`    | Yes              | -           |
| `bgColor`         | `BackgroundColor`                                                                                                     | No               | -           |
| `https`           | `//sparebank1.github.io/designsystem/?path=/docs/introduksjon-changelog--docs#2025---februar---semantiske-farger) */` | Yes              | -           |
| `bgDarkmodeColor` | `never`                                                                                                               | No               | -           |
| `noPadding`       | `boolean`                                                                                                             | No               | -           |
| `appearance`      | `'accent' */`                                                                                                         | Yes              | -           |
| `appearance`      | `'default'                                                                                                            | 'accent'`        | No          | -   |
| `children`        | `WithCardActionProps['children']                                                                                      | React.ReactNode` | Yes         | -   |

## When to Use

Bruk av kort

Kortene skal hjelpe brukerne med å navigere seg til riktig side. De skal gi en kort og tydelig oppsummering av hva slags informasjon som finnes på undersiden.

## Documentation

Full documentation is available at https://design.sparebank1.no/

## Additional Context

This is part of the SpareBank 1 FFE (Felles Front End) design system.
All components follow SpareBank 1's design guidelines and accessibility standards.
