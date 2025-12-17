# @sb1/ffe-skeleton

## Install

```bash
npm install --save @sb1/ffe-skeleton
```

## Usage

Full documentation on skeleton usage is available at https://design.sparebank1.no/komponenter/skeleton/.

```less
@import 'path/to/node_modules/@sb1/ffe-skeleton/less/skeleton';
```

### Importing compiled CSS

If your project does not use Less, you can import the compiled styling:

```css
@import '~@sb1/ffe-skeleton/css/skeleton.css';
```

See also `@sb1/ffe-skeleton-react`.

## Development

To start a local development server, run the following from the designsystem root folder:

```bash
npm install
npm run build
npm start
```

A local instance of `component-overview` with live reloading will run at http://localhost:1234/.

Example implementations using the latest versions of all components are also available at https://sparebank1.github.io/designsystem.
