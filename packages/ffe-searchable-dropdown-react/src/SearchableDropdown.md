En komponent for å kunne søke igjennom en lenger liste med valg. Listen med valg har støtte for å vise flere attributter ved et element, for eksempel bedriftnavn og organisasjonsnummer.

Om du vet du har 10 valg eller færre er det bedre å bruke en vanlig [dropdown](#!/Dropdown).

Om du er ute etter en måte å vise kontoinformasjon finnes en skreddersydd [kontovelger](#!/Kontovelger).

Under vises et eksempel der vi viser ett attributt.

```js
const { InputGroup } = require('../../ffe-form-react');
const companies = require('../exampleData').companiesWithMessageCount;
const labelId = 'labelId1';

<InputGroup label="Velg bedrift" labelId={labelId}>
    <SearchableDropdown
        labelId={labelId}
        inputProps={{ placeholder: 'Velg' }}
        dropdownAttributes={['organizationName']}
        dropdownList={companies}
        noMatch={{ text: 'Søket ga ingen treff' }}
        onChange={item => setState({ item })}
        searchAttributes={['organizationName']}
        locale="nb"
    />
</InputGroup>;
```

Her er hvordan det kan se ut med to attributter.

```js
const { InputGroup } = require('../../ffe-form-react');
const companies = require('../exampleData').companiesWithMessageCount;
const labelId = 'labelId2';

<InputGroup label="Velg bedrift" labelId={labelId}>
    <SearchableDropdown
        labelId={labelId}
        inputProps={{ placeholder: 'Velg' }}
        dropdownAttributes={['organizationName', 'organizationNumber']}
        dropdownList={companies}
        noMatch={{ text: 'Søket ga ingen treff' }}
        onChange={item => setState({ item })}
        searchAttributes={['organizationName', 'organizationNumber']}
        locale="nb"
    />
</InputGroup>;
```

Du kan også bruke høyresiden av et listeelement til å vise annen informasjon, som under.

```js
const { InputGroup } = require('../../ffe-form-react');
const { SmallText } = require('../../ffe-core-react');
const companies = require('../exampleData').companiesWithMessageCount;
const labelId = 'labelId3';

const CustomListElementBody = ({ item, isHighlighted }) => {
    return (
        <div
            style={{
                padding: '8px',
                background: isHighlighted ? '#ff9100' : 'white',
            }}
        >
            <div>{item.organizationName}</div>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <SmallText>{item.organizationNumber}</SmallText>
                <SmallText>{item.quantityUnprocessedMessages} ulest</SmallText>
            </div>
        </div>
    );
};

<InputGroup label="Velg bedrift" labelId={labelId}>
    <SearchableDropdown
        labelId={labelId}
        inputProps={{ placeholder: 'Velg' }}
        dropdownAttributes={['organizationName', 'organizationNumber']}
        dropdownList={companies}
        noMatch={{ text: 'Søket ga ingen treff' }}
        onChange={item => setState({ item })}
        listElementBody={CustomListElementBody}
        searchAttributes={['organizationName', 'organizationNumber']}
        locale="nb"
    />
</InputGroup>;
```

Du kan også vise ekstra resultater om søket feiler, som under.

```js
const { InputGroup } = require('../../ffe-form-react');
const companies = require('../exampleData').companiesWithMessageCount;
const labelId = 'labelId4';

<InputGroup label="Velg bedrift" labelId={labelId}>
    <SearchableDropdown
        labelId={labelId}
        inputProps={{ placeholder: 'Velg' }}
        dropdownAttributes={['organizationName', 'organizationNumber']}
        dropdownList={companies}
        noMatch={{
            text: 'Søket ga ingen treff',
            dropdownList: companies.slice(1, 4),
        }}
        onChange={item => setState({ item })}
        searchAttributes={['organizationName', 'organizationNumber']}
        locale="nb"
    />
</InputGroup>;
```

Du kan sende inn en egen matcher-funksjon for søket, for eksempel hvis du vil ignorere mellomrom.

```js
const { InputGroup } = require('../../ffe-form-react');
const companies = require('../exampleData').companiesWithMessageCount;
const labelId = 'labelId4';

const cleanString = value => `${value}`.replace(/\s/g, '').toLowerCase();

const searchMatcher = (inputValue, searchAttributes) => item => {
    const cleanedInputValue = cleanString(inputValue);
    return searchAttributes
        .map(searchAttribute => cleanString(item[searchAttribute]))
        .some(cleanedItemAttribute =>
            cleanedItemAttribute.includes(cleanedInputValue),
        );
};

<InputGroup label="Velg bedrift" labelId={labelId}>
    <SearchableDropdown
        labelId={labelId}
        inputProps={{ placeholder: 'Velg' }}
        dropdownAttributes={['organizationName', 'organizationNumber']}
        dropdownList={companies}
        onChange={item => setState({ item })}
        searchAttributes={['organizationName', 'organizationNumber']}
        locale="nb"
        searchMatcher={searchMatcher}
    />
</InputGroup>;
```

Du kan sende inn et `selectedItem` for å programmatisk bestemme hvilket element som skal vises som valgt.

```js
const { InputGroup } = require('../../ffe-form-react');
const companies = require('../exampleData').companiesWithMessageCount;
const labelId = 'labelId5';

initialState = { item: companies[2] };

<InputGroup label="Velg bedrift" labelId={labelId}>
    <SearchableDropdown
        labelId={labelId}
        inputProps={{ placeholder: 'Velg' }}
        dropdownAttributes={['organizationName', 'organizationNumber']}
        dropdownList={companies}
        onChange={item => setState({ item })}
        searchAttributes={['organizationName', 'organizationNumber']}
        locale="nb"
        selectedItem={state.item}
    />
</InputGroup>;
```

Variant _dark_ for interne løsninger med mørk bakgrunn.

```js { "props": { "className": "sb1ds-example-dark" } }
const { InputGroup, Label } = require('../../ffe-form-react');
const companies = require('../exampleData').companiesWithMessageCount;
const labelId = 'labelId6';
const inputId = 'inputId6';
<div className="ffe-input-group">
    <Label htmlFor={inputId} dark={true} id={labelId}>
        Velg bedrift
    </Label>
    <SearchableDropdown
        id={inputId}
        labelId={labelId}
        inputProps={{ placeholder: 'Velg' }}
        dropdownAttributes={['organizationName']}
        dropdownList={companies}
        noMatch={{ text: 'Søket ga ingen treff' }}
        onChange={item => setState({ item })}
        searchAttributes={['organizationName']}
        dark={true}
        locale="nb"
    />
</div>;
```

Kan rendre titusenvis av valgalternativer uten ytelsesproblemer.

```js
const { InputGroup } = require('../../ffe-form-react');
const listWithThirtyThousandElements = require('../exampleData')
    .listWithThirtyThousandElements;
const labelId = 'labelId1';

<InputGroup label="Velg bedrift" labelId={labelId}>
    <SearchableDropdown
        labelId={labelId}
        inputProps={{ placeholder: 'Velg' }}
        dropdownAttributes={['organizationName']}
        dropdownList={listWithThirtyThousandElements}
        noMatch={{ text: 'Søket ga ingen treff' }}
        onChange={item => setState({ item })}
        searchAttributes={['organizationName']}
        locale="nb"
    />
</InputGroup>;
```

Du kan sende inn et `selectedItem` som ikke matcher noen av elementene i lista ved å sende inn proppen `allowCustomItem`.

```js
const { InputGroup } = require('../../ffe-form-react');
const companies = require('../exampleData').companiesWithMessageCount;
const labelId = 'labelId5';

initialState = {
    item: {
        organizationName: 'Kaffekoppene',
        organizationNumber: '812602221234',
        quantityUnprocessedMessages: 1,
    },
};

<InputGroup label="Velg bedrift" labelId={labelId}>
    <SearchableDropdown
        labelId={labelId}
        inputProps={{ placeholder: 'Velg' }}
        dropdownAttributes={['organizationName', 'organizationNumber']}
        dropdownList={companies}
        onChange={item => setState({ item })}
        searchAttributes={['organizationName', 'organizationNumber']}
        locale="nb"
        selectedItem={state.item}
        allowCustomItem
        noMatch={{
            dropdownList: [
                {
                    organizationName: 'Kaffekoppene',
                    organizationNumber: '812602221234',
                },
            ],
        }}
    />
</InputGroup>;
```
