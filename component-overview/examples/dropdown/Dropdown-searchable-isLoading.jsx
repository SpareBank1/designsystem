import { InputGroup } from '@sb1/ffe-form-react';
import SearchableDropdown from '@sb1/ffe-searchable-dropdown-react';
import { useState } from 'react';

() => {
    const isLoading = true;
    const labelId = 'labelId1';
    const [selectedOption, setSelectedOption] = useState(null);
    return (
        <InputGroup label="Velg bedrift" labelId={labelId}>
            <SearchableDropdown
                labelId={labelId}
                inputProps={{ placeholder: 'Velg' }}
                dropdownList={[]}
                dropdownAttributes={['organizationName']}
                isLoading={isLoading}
                noMatch={
                    isLoading
                        ? { text: 'Laster bedrifter...' }
                        : { text: 'Søket ga ingen treff' }
                }
                onChange={item => setSelectedOption(item)}
                searchAttributes={['organizationName']}
                locale="nb"
            />
        </InputGroup>
    );
};
