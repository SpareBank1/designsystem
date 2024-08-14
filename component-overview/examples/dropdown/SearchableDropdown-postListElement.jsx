import { InputGroup } from '@sb1/ffe-form-react';
import { SearchableDropdown } from '@sb1/ffe-searchable-dropdown-react';
import { useId } from 'react';

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
    const inputId = useId();
    const labelId = useId();

    return (
        <InputGroup label="Velg bedrift" labelId={labelId} inputId={inputId}>
            <SearchableDropdown
                id={inputId}
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
};
