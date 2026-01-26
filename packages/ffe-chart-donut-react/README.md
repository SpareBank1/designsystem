# @sb1/ffe-chart-donut-react

## Description

Donut chart component for visualizing data with circular graphs.

Ringdiagram-komponenten brukes for å visualisere data med sirkeldiagrammer.

## Install

```bash
npm install --save @sb1/ffe-chart-donut-react
```

## Usage

Full documentation on chart donut usage is available at https://design.sparebank1.no/komponenter/diagram/.

### Styling import

```css
@import 'path/to/node_modules/@sb1/ffe-chart-donut-react/less/ffe-chart-donut';
```

### Importing compiled CSS

If your project does not use Less, you can import the compiled styling:

```css
@import '~@sb1/ffe-chart-donut-react/css/ffe-chart-donut.css';
```

## Examples

```tsx
import { DonutChart } from '@sb1/ffe-chart-donut-react';

function MyComponent() {
    const data = [
        { label: 'Kategori A', value: 30, color: '#007272' },
        { label: 'Kategori B', value: 50, color: '#00C9C9' },
        { label: 'Kategori C', value: 20, color: '#CCFDEC' },
    ];

    return <DonutChart data={data} centerText="100%" centerSubText="Total" />;
}
```

## Theming with CSS custom properties

In order to support theming of components, this package contains styling that depends on a set of custom properties, defined in `less/theme.less`. These properties in turn depend on a base theme defined in `ffe-core`.

If your project uses the `ffe-core`, you're probably good to go. If not, make sure to import the core properties in `theme.less`:

```css
@import '~@sb1/ffe-core/less/theme';
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
