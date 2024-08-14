import { InputGroup } from '@sb1/ffe-form-react';
import { SearchableDropdown } from '@sb1/ffe-searchable-dropdown-react';
import { useId, useState } from 'react';

() => {
    const isLoading = true;
    const inputId = useId();
    const labelId = useId();
    const [selectedOption, setSelectedOption] = useState(null);
    return (
        <InputGroup label="Velg bedrift" labelId={labelId} inputId={inputId}>
            <SearchableDropdown
                id={inputId}
                labelledById={labelId}
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
