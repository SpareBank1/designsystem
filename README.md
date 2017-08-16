# ffe-account-selector-react

A combobox with autocomplete. This package provides the selectors:

1. `<AccountSelector>` single account select)
2. `<AccountSelectorMulti>` (multiple account select)
3. `<BaseSelector>` (can be wrapped to create selectors with custom content)

`ffe-account-selector-react` requires `ffe-core` and `ffe-form` to be present in your CSS object model.


For styling the account-selector use:
```css
@import "npm://ffe-account-selector-react/less/account-selector";
```
For custom components:
```css
@import "npm://ffe-account-selector-react/less/base-selector";
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

To view live example `npm start`

## `<AccountSelector>` Props API

__value__
Sets the input field value.

__accounts (required)__
Array of account objects where "accountNumber" and "name" are required.

__onAccountSelected (required)__
function that receives the selected account object.

__id (required)__
The id of the component

__onChange__
function that receives the input field value when it is changed

__onBlur__
function that is called when the input field loses focus.

__onFocus__
function that is called when the input field gains focus.
 
__onReset__
function that is called when input field is reset.

__locale__
Either "nb", "nn" or "en". Defaults to "nb".

__placeholder__
Set the placeholder attribute of the input field.

__noMatches__
String to be shown in the suggestion list when input value doesn't match any of the accounts

__ariaInvalid__
boolean that marks input field as invalid. Defaults to false.

__suggestionsHeightMax__
number that specifies that max height in pixels of the suggestion list. Defaults to 300.

__showBalance__
boolean that shows the balance of the accounts. Defaults to true.


## `<AccountSelectorMulti>` Props API

//TODO docs


# Creating a custom selector

It is possible to create custom selector components my wrapping the base component. Check <AccountSelector> and <AccountSelectorMulti> 
for example usage.

## `<BaseSelector>` Props API

__suggestions (required)__
Array of objects

__shouldHideSuggestionsOnSelect (required)__
boolean that specifies if the suggestion list should be hidden when a suggestion is selected

__shouldHideSuggestionOnBlur (required)__
boolean that specifies if the suggestion list should be hidden when input field loses focus

__shouldSelectHighlightedOnTab (required)__
boolean that specifies if onSelect should be fired with the highlighted suggestion object when tabbing away from input field.

__shouldHideSuggestionsOnReset (required)__
boolean that specifies if suggestions should be hidden on reset.

__shouldShowSuggestionsOnFocus__
boolean that specifies if suggestions should be shown when input field receives focus. Defaults to true.

__value__
Sets the input field value.

__renderSuggestion__
function that receives a suggestion as input and returns a react component

__renderNoMatches__
function that returns a react component when no matches are found.

__filter__
function that is applied on the suggestions array.

__onSelect__
function that receives the selected suggestion object

__onChange__
function that receives the input field value when it is changed

__onBlur__
function that is called when the input field loses focus.

__onFocus__
function that is called when the input field gains focus.
 
__onReset__
function that is called when input field is reset.

__locale__
Either "nb", "nn" or "en". Defaults to "nb".

__placeholder__
Set the placeholder attribute of the input field.

__noMatches__
String to be shown in the suggestion list when input value doesn't match any of the accounts

__ariaInvalid__
boolean that marks input field as invalid. Defaults to false.

__suggestionsHeightMax__
number that specifies that max height in pixels of the suggestion list. Defaults to 300.

__onSuggestionListChange__
function that is called when the height of the suggestion list is changed.

