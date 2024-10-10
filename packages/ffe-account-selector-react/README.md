# @sb1/ffe-account-selector-react

A combobox with autocomplete tailored for bank accounts.

## Install

```
npm install --save @sb1/ffe-account-selector-react
```

## Usage

Full documentation on account selector usage is available at https://design.sparebank1.no/komponenter/kontovelger/.

This package depends on `@sb1/ffe-form-react`, `@sb1/ffe-icons-react`, `@sb1/ffe-spinner-react` and `@sb1/ffe-searchable-dropdown-react`.
Make sure you import the less-files.

For styling the account-selector use:

```css
@import 'path/to/node_modules/@sb1/ffe-account-selector-react/less/account-selector';
```

For custom components:

```css
@import 'path/to/node_modules/@sb1/ffe-account-selector-react/less/base-selector';
```

## FFE less Dependencies:

```css
@import '~ffe-searchable-dropdown-react/less/searchable-dropdown';
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
