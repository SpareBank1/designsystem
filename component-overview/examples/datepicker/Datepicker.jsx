import { useState, useId } from 'react';
import { Datepicker } from '@sb1/ffe-datepicker-react';
import { InputGroup } from '@sb1/ffe-form-react';

() => {
    const [date, setDate] = useState('01.01.2016');
    const inputId = useId();

    return (
        <InputGroup label="Dato" inputId={inputId}>
            <Datepicker
                inputProps={{ id: inputId }}
                locale="nb"
                maxDate="31.12.2016"
                minDate="01.01.2016"
                onChange={setDate}
                value={date}
            />
        </InputGroup>
    );
};
