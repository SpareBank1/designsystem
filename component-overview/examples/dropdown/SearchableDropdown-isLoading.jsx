import { InputGroup } from '@sb1/ffe-form-react';
import { SearchableDropdown } from '@sb1/ffe-searchable-dropdown-react';
import { useState } from 'react';

() => {
    const isLoading = true;
    const id = 'searchabledropdow-isLoading';
    const labelId = `${id}-label`;
    const [selectedOption, setSelectedOption] = useState(null);
    return (
        <InputGroup label="Velg bedrift" labelId={labelId}>
            <SearchableDropdown
                id={id}
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
}
