# @sb1/ffe-formatters

JavaScript general use string formatters.

## Installation

Install this package via npm like so:

```bash
npm install --save @sb1/ffe-formatters
```

## Usage

Full documentation on formatter usage is available at https://design.sparebank1.no/komponenter/formatering/.

Import the formatter(s) you need the following way:

```javascript
import formatNumber from '@sb1/ffe-formatters/lib/formatNumber';
import formatPercentage from '@sb1/ffe-formatters/lib/formatPercentage';
```

You'll find a full overview and documentation over all the available formatters [in src/](src).

## Development

To start a local development server, run the following from the designsystem root folder:

```bash
npm install
npm run build
npm start
```

A local instance of `component-overview` with live reloading will run at http://localhost:1234/.

Example implementations using the latest versions of all components are also available at https://sparebank1.github.io/designsystem.
