# @sb1/ffe-chart-donut-react

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

A local instance of `component-overview` with live reloading will run at http://localhost:1234/.

Example implementations using the latest versions of all components are also available at https://sparebank1.github.io/designsystem.
