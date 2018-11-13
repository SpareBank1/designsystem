En komponent for å kunne søke igjennom en lenger liste med valg. Listen med valg har støtte for å vise flere attributter ved et element, for eksempel bedriftnavn og organisasjonsnummer.

Om du vet du har 10 valg eller færre er det bedre å bruke en vanlig [dropdown](#!/Dropdown).

Om du er ute etter en måte å vise kontoinformasjon finnes en skreddersydd [kontovelger](#!/Kontovelger).

Under vises et eksempel der vi viser ett attributt.

```jsx
const companies = require('../exampleData').companies;
const initialState = { inputValue: '' };

<SearchableDropdown
    displayResetWhenInputHasValue={true}
    dropdownAttributes={['companyName']}
    dropdownList={companies}
    inputId="searchable-dropdown-single-attribute"
    inputValue={state.inputValue}
    label="Velg bedrift"
    noMatch="Søket ga ingen treff"
    onInputChange={value => setState({ inputValue: value })}
    onReset={() => setState({ inputvalue: '' })}
    onSelect={company => setState({ inputValue: company.companyName })}
    placeholder="Velg"
    searchAttributes={['companyName']}
/>;
```

Her er hvordan det kan se ut med to attributter.

```jsx
const companies = require('../exampleData').companiesWithMessageCount;
const initialState = { inputValue: '' };

<SearchableDropdown
    displayResetWhenInputHasValue={true}
    dropdownAttributes={['organizationName', 'organizationNumber']}
    dropdownList={companies}
    inputId="searchable-dropdown-two-attributes"
    inputValue={state.inputValue}
    label="Velg bedrift"
    noMatch="Søket ga ingen treff"
    onInputChange={value => setState({ inputValue: value })}
    onReset={() => setState({ inputValue: '' })}
    onSelect={company => setState({ inputValue: company.organizationName })}
    placeholder="Velg"
    searchAttributes={['organizationName', 'organizationNumber']}
/>;
```

Du kan også bruke høyresiden av et listeelement til å vise annen informasjon, som under.

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
            {unreadLabel && company.quantityUnprocessedMessages >= 1 && (
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
    inputValue={state.inputValue}
    inputId="searchable-dropdown-custom-details"
    label="Velg bedrift"
    noMatch="Søket ga ingen treff"
    onInputChange={value => setState({ inputValue: value })}
    onReset={() => setState({ inputValue: state.selectedCompanyName })}
    onSelect={company =>
        setState({
            inputValue: company.organizationName,
            selectedCompanyName: company.organizationName,
        })
    }
    renderDropdownElement={renderItem('ulest')}
    searchAttributes={['organizationName', 'organizationNumber']}
/>;
```

Du kan også vise ekstra resultater om søket feiler, som under.

```jsx
const yrker = require('../exampleData').yrker;
const initialState = { inputValue: '' };

const noMatchExtra = {
    text: 'Finner ikke yrket. Søk på nytt eller velg en passende kategori:',
    items: yrker.slice(1, 4),
};

<SearchableDropdown
    displayResetWhenInputHasValue={true}
    dropdownAttributes={['beskrivelse']}
    dropdownList={yrker}
    inputId="searchable-dropdown-single-attribute"
    inputValue={state.inputValue}
    label="Velg yrke"
    noMatch={noMatchExtra}
    onInputChange={value => setState({ inputValue: value })}
    onReset={() => setState({ inputValue: '' })}
    onSelect={yrke => setState({ inputValue: yrke.beskrivelse })}
    placeholder="Velg"
    searchAttributes={['beskrivelse']}
/>;
```

Variant _dark_ for interne løsninger med mørk bakgrunn.

```js { "props": { "className": "sb1ds-example-dark" } }
const companies = require('../exampleData').companies;
const initialState = { inputValue: '' };

<SearchableDropdown
    dark={true}
    displayResetWhenInputHasValue={true}
    dropdownAttributes={['companyName']}
    dropdownList={companies}
    inputId="searchable-dropdown-single-attribute"
    inputValue={state.inputValue}
    label="Velg bedrift"
    noMatch="Søket ga ingen treff"
    onInputChange={value => setState({ inputValue: value })}
    onReset={() => setState({ inputvalue: '' })}
    onSelect={company => setState({ inputValue: company.companyName })}
    placeholder="Velg"
    searchAttributes={['companyName']}
/>;
```
