import { useState, useRef } from 'react';
import { Datepicker } from '@sb1/ffe-datepicker-react';

() => {
    const [date, setDate] = useState('01.01.2016');
    const innerRef = useRef(date); //Optional ref to the input element

    return (
        <Datepicker
            inputProps={{ id: 'datepicker-example' }}
            label="Velg dato"
            locale="nb"
            maxDate="31.12.2016"
            minDate="01.01.2016"
            onChange={setDate}
            value={date}
            innerRef={innerRef}
        />
    );
}
