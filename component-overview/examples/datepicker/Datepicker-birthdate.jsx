import { useState } from 'react';
import Datepicker from '@sb1/ffe-datepicker-react';

() => {
    const [date, setDate] = useState('');
    const now = new Date();

    const maxDate = `${now.getDate()}.${now.getMonth()+1}.${now.getFullYear()}`;

    return (
        <>
            <p>Skriv inn et fødselsdato med tosifret årstal og se om det blir tolket riktig.</p>
            <Datepicker
                inputProps={{ id: 'datepicker-birthday-example' }}
                label="Fødelsedato"
                language="nb"
                maxDate={maxDate}
                onChange={setDate}
                value={date}
            />
        </>
    );
};
