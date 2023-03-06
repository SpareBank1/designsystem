import { InputGroup } from '@sb1/ffe-form-react';
import { SearchableDropdown } from '@sb1/ffe-searchable-dropdown-react';



() => {
    const companies = [
        {
            organizationName: 'Bedriften',
            organizationNumber: '912602370',
            quantityUnprocessedMessages: 5,
        },
        {
            organizationName: 'Sønn & co',
            organizationNumber: '812602372',
            quantityUnprocessedMessages: 3,
        },
        {
            organizationName: 'Beslag skytter',
            organizationNumber: '812602552',
            quantityUnprocessedMessages: 1,
        },
    ];
    const id = 'searchabledropdow-default';
    const labelId = `${id}-label`;

    return (
        <InputGroup label="Velg bedrift" labelId={labelId}>
            <SearchableDropdown
                id={id}
                labelledById={labelId}
                inputProps={{ placeholder: 'Velg' }}
                dropdownAttributes={['organizationName']}
                dropdownList={companies}
                noMatch={{ text: 'Søket ga ingen treff' }}
                onChange={() => null}
                postListElement={<span>Some text describing the list</span>}
                searchAttributes={['organizationName']}
                locale="nb"
            />
        </InputGroup>
    );
}
