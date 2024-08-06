import { useState } from 'react';
import { Datepicker } from '@sb1/ffe-datepicker-react';
import { InputGroup } from '@sb1/ffe-form-react';

() => {
    const [date, setDate] = useState('');
    const now = new Date();

    const maxDate = `${now.getDate()}.${now.getMonth() + 1}.${now.getFullYear()}`;

    return (
        <InputGroup
            label="Fødselsdato"
            description="Skriv inn et fødselsdato med tosifret årstal og se om det blir tolket riktig."
        >
            <Datepicker
                locale="nb"
                maxDate={maxDate}
                onChange={setDate}
                value={date}
            />
        </InputGroup>
    );
};
