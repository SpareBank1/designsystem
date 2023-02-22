# @sb1/ffe-collapse-react

React component for expand/collapse

## Install

```
npm install --save @sb1/ffe-collapse-react
```

## Usage

Full documentation on collapse usage is available at https://design.sparebank1.no/komponenter/collapse/.

Please note the component depends on transition styling for `height`.\
This can preferably be done by importing the less-file from the less-folder
in the package.\
Alternatively you can do it by adding style to the class
`.ffe-collapse-transition`\, adding it to your own class and provide the class
through the `className` property or by styling it directly through the `style` property.

## TypeScript definition files

This component does not yet have TypeScript definitions.

## Development

To start a local development server, run the following from the designsystem root folder:

```bash
npm install
npm run build
npm start
```

A local instance of `component-overview` with live reloading will run at http://localhost:1234/.

Example implementations using the latest versions of all components are also available at https://sparebank1.github.io/designsystem.
