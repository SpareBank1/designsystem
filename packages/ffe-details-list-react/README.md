# @sb1/ffe-details-list-react

## Install

```
npm install --save @sb1/ffe-details-list-react
```

## Usage

Full documentation on details list usage is available at https://design.sparebank1.no/komponenter/detaljliste/.

Included less file to your imports:

```css
@import 'node_modules/@sb1/ffe-details-list-react/less/ffe-details-list-react';
```

This React component does not depend on the `@sb1/ffe-details-list` package,
which is deprecated and removed from the source code. The component uses the
`@sb1/ffe-grid`-package to attain the same design and behavior. This way, the
components can be used in connection to other `ffe-grid`-based components.

## Development

To start a local development server, run the following from the designsystem root folder:

```bash
npm install
npm run build
npm start
```

A local instance of `component-overview` with live reloading will run at http://localhost:1234/.

Example implementations using the latest versions of all components are also available at https://sparebank1.github.io/designsystem.
