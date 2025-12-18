# @sb1/ffe-core-react

## Description

React component library for SpareBank 1 Design System.

## Components

This package exports the following components:

- `BodyText`
- `DividerLine`
- `EmphasizedText`
- `Heading1`
- `Heading2`
- `Heading3`
- `Heading4`
- `Heading5`
- `Heading6`
- `LinkText`
- `LinkIcon`
- `MicroText`
- `Paragraph`
- `PreformattedText`
- `SmallText`
- `StrongText`
- `Wave`

## Installation

Install the package and all its dependencies:

```bash
npm install @sb1/ffe-core-react @sb1/ffe-core
```

### Dependencies

This package depends on:

- `@sb1/ffe-core`

## CSS Import

In your project's main CSS file, import the required styles:

```css
@import '@sb1/ffe-core/css/ffe.css';
```

Note: Make sure to import `@sb1/ffe-core/css/ffe.css` first as it contains base styles.

## Basic Usage

```typescript
import { BodyText, DividerLine, EmphasizedText, ... } from '@sb1/ffe-core-react';

function MyComponent() {
  return (
    <BodyText>
      {/* Component content */}
    </BodyText>
  );
}
```

## API Reference

### Wave Props

Adds additional class _/
className?: string;
/\*\* Sets the mask-position property, setting a px/rem value will move the starting position of the wave _/
position?: string;
/** Rotate the wave 180 degrees :\*/
flip?: boolean;
/** Sets the color of the wave. Accepts ffe-color variables without the "ffe-farge-" bit of the name. _/
color: Color;
/\*\* Set the background color of the wave container. Accepts ffe-color variables without the "ffe-farge-" bit of the name. _/
bgColor?: Color;
/** Set the wave color in darkmode \*/
darkmodeColor?: ColorDarkMode;
/** Set the background color of wave container in darkmode \*/
bgDarkmodeColor?: ColorDarkMode;
children?: React.ReactNode;
}

/\*\*
@deprecated Use the Wave component in `ffe-shapes-react` instead.

| Prop              | Type              | Required | Description |
| ----------------- | ----------------- | -------- | ----------- |
| `className`       | `string`          | No       | -           |
| `position`        | `string`          | No       | -           |
| `degrees`         | `*/`              | Yes      | -           |
| `flip`            | `boolean`         | No       | -           |
| `color`           | `Color`           | Yes      | -           |
| `bgColor`         | `Color`           | No       | -           |
| `darkmodeColor`   | `ColorDarkMode`   | No       | -           |
| `bgDarkmodeColor` | `ColorDarkMode`   | No       | -           |
| `children`        | `React.ReactNode` | No       | -           |

## Documentation

Full documentation is available at https://design.sparebank1.no/

## Additional Context

This is part of the SpareBank 1 FFE (Felles Front End) design system.
All components follow SpareBank 1's design guidelines and accessibility standards.
