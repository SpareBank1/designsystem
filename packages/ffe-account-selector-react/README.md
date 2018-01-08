# ffe-account-selector-react

A combobox with autocomplete. This package provides the selectors:

1. `<AccountSelector>` single account select)
2. `<AccountSelectorMulti>` (multiple account select)
3. `<BaseSelector>` (can be wrapped to create selectors with custom content)

`ffe-account-selector-react` requires `ffe-core` and `ffe-form` to be present in your CSS object model.

For styling the account-selector use:

```css
@import 'npm://ffe-account-selector-react/less/account-selector';
```

For custom components:

```css
@import 'npm://ffe-account-selector-react/less/base-selector';
```

## Upgrading from `nfe-ffe-account-selector-react`

The origin of this package is the `nfe-account-selector-react`. The main reason for the rewrite was difficulty in managing
focus in the `nfe-account-selector-react`. This caused the onFocus and onBlur events to fire incorrectly. This package also aims
to provide better separation between the different selectors (currently AccountSelector and AccountSelectorMulti).

The external api is mostly unchanged with some exceptions.

This component no longer holds the selected object in its internal state. It's the consuming components responsibility
to set the selected suggestion and the input field value. For example the component can be reset by passing the props:

```js
 value : "",
 selectedAccount : null
```

Styling has also been changed where `nfe-account-selector` has be renamed to `account-selector`

## Example

Run Styleguidist from the repository root to see live examples and documentation,
or see the markdown files next to the component code in `src/`.
