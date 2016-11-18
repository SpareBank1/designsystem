# nfe-account-selector-react

A combobox with autocomplete.
This package consists of a base selector which can be wrapped to provide more specific features.
Out of the box there are 2 selectors provided.
1. account-selector (single account select). This was the default selector until 3.x release.
2. account-selector-multi (multiple account select)

## Install

```
$ npm install --save nfe-account-selector-react
```

`nfe-account-selector-react` depends on `ffe-core` and `ffe-form` being present and imported in your project.
More specifically, the CSS classes related to dropdowns in those packages should be in your CSS Object Model when using this component.

You must also import the styles
```css
@import "node_modules/nfe-account-selector-react/styles/account-selector.less";
```

## Upgrading from 2.x to 3.x
There are some major changes in 3.x and so, the API has changed, but just a little bit.

__accounts__
The account objects in the accounts array must contain a unique key "id". This could be the account number.

__onAccountSelected__
Called with the selected account object as parameter instead of the account number.

__onBlur__
Called with 2 parameters. The first is the selected account object or null if none is selected.
The second parameter is the input field value, e.g a user typed value or the selected account name.

__onChange__
Called with the input fields current value. It will no longer be called with the selected accounts account number.


## Usage AccountSelector
The AccountSelector is the default export of the package

```javascript
import AccountSelector from 'nfe-account-selector-react';

const accounts = [
{
    name: 'Tax account',
    id: '12345678912',
    balance: 66546.99,
    currencyCode: 'USD',
  },
]

<AccountSelector
    accounts={ accounts }
    onChange={ onChange }
    onAccountSelected={ onAccountSelected }
    onBlur={ onBlur }
    onFocus={ onFocus }
    locale="nb"
    ariaInvalid={false}
    placeholder="Select account"
    noMatches="No matches"
    id="custom-id"
    selectedAccount={ getAccount(accounts, value) }
    value={ value ? getAccount(accounts, value).name : '' }
/>
```

### Props API

__accounts (required)__
Array of account objects where only "name" and "id" is required props.

__onAccountSelected (required)__
callback who will receive the selected account object or null if selection is reset/removed.

__onChange__
callback who will receive a string value with the input fields current value

__onBlur__
callback with 2 parameters. The first is the selected account object or null if none is selected.
The second parameter is the input fields current value.

__onFocus__
called when the component gains focus

__locale__
Either "nb", "nn" or "en". Defaults to "nb" if not set.

__placeholder__
Set the placeholder attribute of the input field.

__noMatches__
String to be shown in the dropdown when input value doesn't match any of the accounts

__id__
The id attribute of the input field.

__ariaInvalid__
Mark input field as invalid. Defaults to false.

__selectedAccount__
Set the selected account object. Input field will be set with the correct value.

__value__
Sets the input field value.


## Reset Account Selector from parent component

```
class Parent extends Component {
    resetForm(){
        const {AccountSelectorRef} = this.refs;
        AccountSelectorRef.reset(giveFocus = true | false)
    }

    render(){
        return(
            <AccountSelector
                ref="AccountSelectorRef"
            />
        )
    }
}
```
## Example

To view live example `npm start`

## Creating a custom selector
It's possible to create a custom selector by writing a wrapper around the BaseSelector.


