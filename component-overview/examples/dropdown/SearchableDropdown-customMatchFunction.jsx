import { InputGroup } from '@sb1/ffe-form-react';
import { SearchableDropdown } from '@sb1/ffe-searchable-dropdown-react';
import { useId, useState } from 'react';

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
        {
            organizationName: 'Kaffekoppen',
            organizationNumber: '812602222',
            quantityUnprocessedMessages: 8,
        },
        {
            organizationName: 'Sats',
            organizationNumber: '809602772',
            quantityUnprocessedMessages: 2,
        },
    ];

    const inputId = useId();
    const labelId = useId();
    const [selectedOption, setSelectedOption] = useState(null);
    const cleanString = value => `${value}`.replace(/\s/g, '').toLowerCase();
    const searchMatcher = (inputValue, searchAttributes) => item => {
        const cleanedInputValue = cleanString(inputValue);
        return searchAttributes
            .map(searchAttribute => cleanString(item[searchAttribute]))
            .some(cleanedItemAttribute =>
                cleanedItemAttribute.includes(cleanedInputValue),
            );
    };
    return (
        <InputGroup label="Velg bedrift" labelId={labelId} inputId={inputId}>
            <SearchableDropdown
                id={inputId}
                labelledById={labelId}
                inputProps={{ placeholder: 'Velg' }}
                dropdownAttributes={['organizationName', 'organizationNumber']}
                dropdownList={companies}
                onChange={item => setSelectedOption(item)}
                searchAttributes={['organizationName', 'organizationNumber']}
                locale="nb"
                searchMatcher={searchMatcher}
            />
        </InputGroup>
    );
};
