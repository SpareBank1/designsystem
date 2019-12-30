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
        initialValue={companies[1]}
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

Variant _dark_ for interne løsninger med mørk bakgrunn.

```js { "props": { "className": "sb1ds-example-dark" } }
const { InputGroup, Label } = require('../../ffe-form-react');
const companies = require('../exampleData').companiesWithMessageCount;
const labelId = 'labelId5';
const inputId = 'inputId5';
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
