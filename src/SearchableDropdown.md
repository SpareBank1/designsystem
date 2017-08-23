The default:

```example
initialState = { inputValue: '' };
<SearchableDropdown
    dropdownList={mockDefaultExample.companies}
    placeholder="Velg"
    noMatch="Søket ga ingen treff"
    dropdownAttributes={['companyName']}
    searchAttributes={['companyName']}
    onSelect={(company) => setState({ inputValue: company.companyName })} 
    onInputChange={(value) => setState({ inputValue: value })}
    onReset={() => setState({ inputvalue: '' })}
    displayResetWhenInputHasValue = {true}
    inputValue={state.inputValue}
    inputId = "default"
/>
```

With listElements of two values

```example
initialState = { inputValue: '' };
<SearchableDropdown
    dropdownList={ mockTwoValueListElementExample.companies }
    placeholder="Velg"
    noMatch="Søket ga ingen treff"
    dropdownAttributes={['organizationName', 'organizationNumber']}
    searchAttributes={['organizationName', 'organizationNumber']}
    onSelect={(company) => setState({inputValue: company.organizationName})} 
    onInputChange={(value) => setState({inputValue: value})}
    onReset={() => setState({inputValue: ''})}
    displayResetWhenInputHasValue = {true}
    inputValue={state.inputValue}
    label = "Fund"
    inputId = "two values"
/>
```

with custom list element missing inputId for inputField

```example
initialState = { inputValue: mockCustomExample.companies[0].organizationName, 
                selectedCompanyName: mockCustomExample.companies[0].organizationName};
<SearchableDropdown
    dropdownList={ mockCustomExample.companies }
    noMatch="Søket ga ingen treff"
    searchAttributes={['organizationName', 'organizationNumber']}
    renderDropdownElement={mockCustomExample.renderItem("ulest")}
    inputValue={state.inputValue}
    onSelect={(company) => setState({inputValue: company.organizationName, selectedCompanyName:company.organizationName})} 
    onInputChange={(value) => setState({inputValue: value})}
    onReset={() => setState({inputValue: state.selectedCompanyName})}
     label = "Fund"
/>
```
