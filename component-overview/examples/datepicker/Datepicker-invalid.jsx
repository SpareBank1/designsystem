import { useState } from 'react';
import { Datepicker } from '@sb1/ffe-datepicker-react';

() => {
    const [date, setDate] = useState('01.01.2016');

    return (
        <Datepicker
            aria-invalid="true"
            inputProps={{ id: 'datepicker-example-aria-invalid' }}
            label="Velg dato"
            locale="nn"
            maxDate="31.12.2016"
            minDate="01.01.2016"
            onChange={setDate}
            value={date}
        />
    );
}
