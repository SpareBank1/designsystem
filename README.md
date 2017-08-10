# ffe-searchable-dropdown-react

React dropdown component with search.

## Install

```
$ npm install --save ffe-searchable-dropdown-react
```

## Usage

```javascript
import SearchableDropdown from 'ffe-searchable-dropdown-react';
```

styling: 
```
@import "npm://ffe-search-dropdown-react/less/search-dropdown";
```

## Available props

```
displayResetWhenInputHasValue: PropTypes.bool,
dropdownList: PropTypes.arrayOf(PropTypes.object).isRequired,
dropdownAttributes: PropTypes.array,  //will display these attributes for each item (no more than two)
initialInputValue: PropTypes.string,
noMatch: PropTypes.string.isRequired,
onInputChange: PropTypes.func.isRequired,
onReset: PropTypes.func.isRequired,
placeholder: PropTypes.string,
renderDropdownElement: PropTypes.func, //if you wish to customise the list items
searchAttributes: PropTypes.array.isRequired, 

```

## Development
```
npm install

npm run build 

npm start
```
Open
http://0.0.0.0:6060

## Examples

See [SearchableDropdown.md](src/SearchableDropdown.md)
