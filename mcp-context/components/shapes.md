# @sb1/ffe-shapes-react

## Description

React component library for SpareBank 1 Design System.

## Components

This package exports the following components:

- `Wave`

## Installation

Install the package and all its dependencies:

```bash
npm install @sb1/ffe-shapes-react @sb1/ffe-shapes @sb1/ffe-core
```

### Dependencies

This package depends on:

- `@sb1/ffe-shapes`
- `@sb1/ffe-core`

## CSS Import

In your project's main CSS file, import the required styles:

```css
@import '@sb1/ffe-core/css/ffe.css';
@import '@sb1/ffe-shapes/css/shapes.css';
```

Note: Make sure to import `@sb1/ffe-core/css/ffe.css` first as it contains base styles.

## API Reference

### Wave Props

| Prop | Type | Required | Description |
|------|------|----------|-------------|
| `position` | `string` | No | - |
| `flip` | `boolean` | No | - |
| `bgColor` | `Color` | No | - |
| `className` | `string` | No | - |
| `children` | `React.ReactNode` | No | - |

## Documentation

Full documentation is available at https://design.sparebank1.no/

## Additional Context

This is part of the SpareBank 1 FFE (Felles Front End) design system.
All components follow SpareBank 1's design guidelines and accessibility standards.
