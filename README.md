# ffe-formatters

JavaScript general use string formatters.

## Installation

Install this package via Yarn or npm like so:

```bash
yarn add ffe-formatters
# or
npm install --save ffe-formatters
```

## Usage

You can import formatters in two different ways. If your build chain does tree shaking
(through Webpack 2 or Rollup), you can import them like this:


```javascript
import { formatNumber, formatPercentage } from 'ffe-formatters';
```

If you don't that feature enabled, you should import them like this to avoid bundling
unneeded code:

```javascript
import formatNumber from 'ffe-formatters/lib/format-number';
import formatPercentage from 'ffe-formatters/lib/format-percentage';
```

You'll find a full overview over all the available formatters in the [`src/`-folder](src).

## Development

To develop locally, clone the repository and install the dependencies. Once you have, you have
the following commands available to you:

```bash
yarn test               # Runs all tests
yarn test:watch         # Starts the continuous test runner
yarn test:coverage      # Runs all tests with code coverage
```

## Contributing

For contributing guidelines, check the [contribution guidelines for ffe-core](***REMOVED***).
