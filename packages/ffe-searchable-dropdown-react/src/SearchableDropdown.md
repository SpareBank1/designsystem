The default:

```jsx
const companies = require('../exampleData').companies;
const initialState = { inputValue: '' };

<SearchableDropdown
    dropdownList={companies}
    placeholder="Velg"
    noMatch="Søket ga ingen treff"
    dropdownAttributes={['companyName']}
    searchAttributes={['companyName']}
    onSelect={company => setState({ inputValue: company.companyName })}
    onInputChange={value => setState({ inputValue: value })}
    onReset={() => setState({ inputvalue: '' })}
    displayResetWhenInputHasValue={true}
    inputValue={state.inputValue}
    inputId="default"
/>;
```

With listElements of two values

```jsx
const companies = require('../exampleData').companiesWithMessageCount;
const initialState = { inputValue: '' };

<SearchableDropdown
    dropdownList={companies}
    placeholder="Velg"
    noMatch="Søket ga ingen treff"
    dropdownAttributes={['organizationName', 'organizationNumber']}
    searchAttributes={['organizationName', 'organizationNumber']}
    onSelect={company => setState({ inputValue: company.organizationName })}
    onInputChange={value => setState({ inputValue: value })}
    onReset={() => setState({ inputValue: '' })}
    displayResetWhenInputHasValue={true}
    inputValue={state.inputValue}
    label="Fund"
    inputId="two values"
/>;
```

with custom list element missing inputId for inputField

```jsx
const companies = require('../exampleData').companiesWithMessageCount;
const initialState = {
    inputValue: companies[0].organizationName,
    selectedCompanyName: companies[0].organizationName,
};

const renderItem = unreadLabel => company => (
    <div style={{ cursor: 'pointer' }}>
        <a className="ffe-searchable-dropdown__item--header">
            {company.organizationName}
        </a>
        <div className="ffe-searchable-dropdown__item--details">
            {company.organizationNumber}
            {unreadLabel &&
                company.quantityUnprocessedMessages >= 1 && (
                    <span style={{ float: 'right' }}>
                        {' '}
                        {company.quantityUnprocessedMessages} {unreadLabel}
                    </span>
                )}
        </div>
    </div>
);

<SearchableDropdown
    dropdownList={companies}
    noMatch="Søket ga ingen treff"
    searchAttributes={['organizationName', 'organizationNumber']}
    renderDropdownElement={renderItem('ulest')}
    inputValue={state.inputValue}
    onSelect={company =>
        setState({
            inputValue: company.organizationName,
            selectedCompanyName: company.organizationName,
        })
    }
    onInputChange={value => setState({ inputValue: value })}
    onReset={() => setState({ inputValue: state.selectedCompanyName })}
/>;
```
