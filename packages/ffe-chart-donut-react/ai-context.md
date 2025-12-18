# @sb1/ffe-chart-donut-react

## Description

Diagram i SpareBank 1-drakt.

## Components

This package exports the following components:

- `ChartDonut`

## Installation

Install the package and all its dependencies:

```bash
npm install @sb1/ffe-chart-donut-react @sb1/ffe-core
```

### Dependencies

This package depends on:

- `@sb1/ffe-core`

## CSS Import

In your project's main CSS file, import the required styles:

```css
@import '@sb1/ffe-core/css/ffe.css';
@import '@sb1/ffe-chart-donut-react/css/ffe-chart-donut.css';
```

Note: Make sure to import `@sb1/ffe-core/css/ffe.css` first as it contains base styles.

## Basic Usage

```typescript
import { ChartDonut } from '@sb1/ffe-chart-donut-react';

function MyComponent() {
  return (
    <ChartDonut>
      {/* Component content */}
    </ChartDonut>
  );
}
```

## API Reference

### ChartDonut Props

| Prop         | Type              | Required | Description |
| ------------ | ----------------- | -------- | ----------- |
| `firstLabel` | `string`          | No       | -           |
| `lastLabel`  | `string`          | No       | -           |
| `label`      | `React.ReactNode` | No       | -           |
| `name`       | `string`          | Yes      | -           |
| `percentage` | `number`          | Yes      | -           |

## Documentation

Full documentation is available at https://design.sparebank1.no/

## Additional Context

This is part of the SpareBank 1 FFE (Felles Front End) design system.
All components follow SpareBank 1's design guidelines and accessibility standards.
