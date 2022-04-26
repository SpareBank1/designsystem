import { InputGroup } from '@sb1/ffe-form-react';
import SearchableDropdown from '@sb1/ffe-searchable-dropdown-react';
import { useState } from 'react';
import { SmallText } from '@sb1/ffe-core-react';

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
    const id = 'searchabledropdow-customlistelembody';
    const labelId = `${id}-label`;
    const [selectedOption, setSelectedOption] = useState(null);
    const CustomListElementBody = ({ item, isHighlighted }) => {
        return (
            <div
                style={{
                    padding: '8px',
                    background: isHighlighted ? '#ff9100' : 'white',
                }}
            >
                <div>{item.organizationName}</div>
                <div
                    style={{ display: 'flex', justifyContent: 'space-between' }}
                >
                    <SmallText>{item.organizationNumber}</SmallText>
                    <SmallText>
                        {item.quantityUnprocessedMessages} ulest
                    </SmallText>
                </div>
            </div>
        );
    };
    return (
        <InputGroup label="Velg bedrift" labelId={labelId}>
            <SearchableDropdown
                id={id}
                labelId={labelId}
                inputProps={{ placeholder: 'Velg' }}
                dropdownAttributes={['organizationName', 'organizationNumber']}
                dropdownList={companies}
                noMatch={{ text: 'Søket ga ingen treff' }}
                onChange={item => setSelectedOption(item)}
                listElementBody={CustomListElementBody}
                searchAttributes={['organizationName', 'organizationNumber']}
                locale="nb"
            />
        </InputGroup>
    );
}
