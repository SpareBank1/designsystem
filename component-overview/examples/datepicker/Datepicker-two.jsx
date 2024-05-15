import { useState } from 'react';
import { Datepicker } from '@sb1/ffe-datepicker-react';
import { Grid, GridRow, GridCol } from '@sb1/ffe-grid-react';

() => {
    const [date1, setDate1] = useState('01.01.2016');
    const [date2, setDate2] = useState('02.01.2016');

    return (
        <Grid>
            <GridRow>
                <GridCol sm="5">
                    <Datepicker
                        inputProps={{ id: 'datepicker-1' }}
                        label="Velg dato"
                        locale="en"
                        maxDate="31.12.2016"
                        minDate="01.01.2016"
                        onChange={setDate1}
                        value={date1}
                    />
                </GridCol>
                <GridCol sm="5">
                    <Datepicker
                        inputProps={{ id: 'datepicker-2' }}
                        label="Velg dato"
                        locale="en"
                        maxDate="31.12.2016"
                        minDate="01.01.2016"
                        onChange={setDate2}
                        value={date2}
                    />
                </GridCol>
            </GridRow>
        </Grid>
    );
}
