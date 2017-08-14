The default:

```example
<SearchableDropdown
    dropdownList={mockDefaultExample.companies}
    placeholder="Velg"
    noMatch="Søket ga ingen treff"
    dropdownAttributes={['companyName']}
    searchAttributes={['companyName']}
    onSelect={mockDefaultExample.onSelect} 
    onInputChange={mockDefaultExample.onChange}
    onReset={mockDefaultExample.onReset}
    displayResetWhenInputHasValue = {true}
/>
```

With listElements of two values

```example
<SearchableDropdown
    dropdownList={ mockTwoValueListElementExample.companies }
    placeholder="Velg"
    noMatch="Søket ga ingen treff"
    dropdownAttributes={['organizationName', 'organizationNumber']}
    searchAttributes={['organizationName', 'organizationNumber']}
    onSelect={mockTwoValueListElementExample.onSelect} 
    onInputChange={mockTwoValueListElementExample.onChange}
    onReset={mockTwoValueListElementExample.onReset}
    displayResetWhenInputHasValue = {true}
/>
```

with custom list element

```example
<SearchableDropdown
    dropdownList={ mockCustomExample.companies }
    noMatch="Søket ga ingen treff"
    searchAttributes={['organizationName', 'organizationNumber']}
    renderDropdownElement={mockCustomExample.renderItem("ulest")}
    initialInputValue={mockCustomExample.initialInputValue}
    onSelect={mockCustomExample.onSelect} 
    onInputChange={mockCustomExample.onChange}
    onReset={mockCustomExample.onReset}
/>
```
