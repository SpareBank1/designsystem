import { InputGroup } from '@sb1/ffe-form-react';
import SearchableDropdown from '@sb1/ffe-searchable-dropdown-react';
import { useState } from 'react';

() => {
    const listWithThirtyThousandElements = new Array(30000)
        .fill(null)
        .map((_, i) => ({ organizationName: `Navn ${i}` }));

    const id = 'searchabledropdow-highCapacity';
    const labelId = `${id}-label`;
    const [selectedOption, setSelectedOption] = useState(null);
    return (
        <InputGroup label="Velg bedrift" labelId={labelId}>
            <SearchableDropdown
                id={id}
                labelledById={labelId}
                inputProps={{ placeholder: 'Velg' }}
                dropdownAttributes={['organizationName']}
                dropdownList={listWithThirtyThousandElements}
                noMatch={{ text: 'Søket ga ingen treff' }}
                onChange={item => setSelectedOption(item)}
                searchAttributes={['organizationName']}
                locale="nb"
                highCapacity={true}
            />
        </InputGroup>
    );
}
