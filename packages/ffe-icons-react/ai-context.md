# @sb1/ffe-icons-react

## Description

Ikoner skal gjøre det enkelt for kunden å navigere i de digitale flatene våre. Ikonene representerer funksjoner, verktøy eller handlinger og visualiserer funksjonalitet.

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

## API Reference

### Icon Props

| Prop        | Type                                         | Required | Description |
| ----------- | -------------------------------------------- | -------- | ----------- | ----- | --- | --- |
| `fileUrl`   | `string`                                     | Yes      | -           |
| `size`      | `'sm'                                        | 'md'     | 'lg'        | 'xl'` | No  | -   |
| `ariaLabel` | `React.ComponentProps<'span'>['aria-label']` | No       | -           |

## Documentation

Full documentation is available at https://design.sparebank1.no/

## Additional Context

This is part of the SpareBank 1 FFE (Felles Front End) design system.
All components follow SpareBank 1's design guidelines and accessibility standards.
