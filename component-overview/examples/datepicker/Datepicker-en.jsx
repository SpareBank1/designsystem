import { useState } from 'react';
import Datepicker from '@sb1/ffe-datepicker-react';

() => {
    const [date, setDate] = useState('01.01.2016');

    return (
        <Datepicker
            inputProps={{ id: 'datepicker-example' }}
            label="Velg dato"
            language="en"
            maxDate="31.12.2016"
            minDate="01.01.2016"
            onChange={setDate}
            value={date}
        />
    );
}
