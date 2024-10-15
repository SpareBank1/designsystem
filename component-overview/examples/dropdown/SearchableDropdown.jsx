import { InputGroup } from '@sb1/ffe-form-react';
import {
    SearchableDropdown,
    MultiselectSearchableDropdown,
} from '@sb1/ffe-searchable-dropdown-react';
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
    ];

    const fruits = [
        { value: 'banan', label: 'Banan' },
        { value: 'eple', label: 'Eple' },
        { value: 'pære', label: 'Pære' },
        { value: 'appelsin', label: 'Appelsin' },
        { value: 'druer', label: 'Druer' },
        { value: 'mandarin', label: 'Mandarin' },
        // Add more options as needed
    ];
    const inputId = useId();
    const labelId = useId();
    const [selectedOption, setSelectedOption] = useState(null);

    const [selectedOptions, setSelectedOptions] = useState([]);

    const handleDropdownChange = optionss => {
        setSelectedOptions(optionss);
    };
    return (
        <>
            <InputGroup
                label="Velg bedrift"
                labelId={labelId}
                inputId={inputId}
            >
                <SearchableDropdown
                    id={inputId}
                    labelledById={labelId}
                    inputProps={{ placeholder: 'Velg' }}
                    dropdownAttributes={['organizationName']}
                    dropdownList={companies}
                    noMatch={{ text: 'Søket ga ingen treff' }}
                    onChange={item => setSelectedOption(item)}
                    searchAttributes={['organizationName']}
                    locale="nb"
                />
            </InputGroup>
            <InputGroup
                label="Velg frukt du liker best"
                labelId={labelId}
                inputId={inputId}
            >
                <MultiselectSearchableDropdown
                    dropdownList={fruits}
                    onChange={handleDropdownChange}
                    dropdownAttributes={['label']}
                    searchAttributes={['label']}
                />
            </InputGroup>
        </>
    );
};
