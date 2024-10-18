# ffe-searchable-dropdown-react

React dropdown component with search.

## Install

```bash
npm install --save ffe-searchable-dropdown-react
```

## Usage

Full documentation on searchable dropdown usage is available at https://design.sparebank1.no/komponenter/dropdown/#searchabledropdown.

This package depends on `@sb1/ffe-form-react`, `@sb1/ffe-icons-react`, `@sb1/ffe-chips-react` and `@sb1/ffe-spinner-react`.
Make sure you import the less-files.

```javascript
import { SearchableDropdown } from '@sb1/ffe-searchable-dropdown-react';
```

styling:

```
@import "npm://ffe-searchable-dropdown-react/less/searchable-dropdown";
```

## FFE less Dependencies

```
@import "~ffe-core/less/colors";
```

## Available props

See propTypes in [SearchableDropdown.js](src/SearchableDropdown.js)

## Development

To start a local development server, run the following from the designsystem root folder:

```bash
npm install
npm run build
npm start
```

A local instance of `component-overview` with live reloading will run at http://localhost:1234/.

Example implementations using the latest versions of all components are also available at https://sparebank1.github.io/designsystem.
