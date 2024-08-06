import { useState } from 'react';
import { Datepicker } from '@sb1/ffe-datepicker-react';
import { Grid, GridRow, GridCol } from '@sb1/ffe-grid-react';
import { InputGroup } from '@sb1/ffe-form-react';

() => {
    const [date1, setDate1] = useState('01.01.2016');
    const [date2, setDate2] = useState('02.01.2016');

    return (
        <Grid>
            <GridRow>
                <GridCol sm="5">
                    <InputGroup label="Velg dato 1">
                        <Datepicker
                            locale="en"
                            maxDate="31.12.2016"
                            minDate="01.01.2016"
                            onChange={setDate1}
                            value={date1}
                        />
                    </InputGroup>
                </GridCol>
                <GridCol sm="5">
                    <InputGroup label="Velg dato 2">
                        <Datepicker
                            locale="en"
                            maxDate="31.12.2016"
                            minDate="01.01.2016"
                            onChange={setDate2}
                            value={date2}
                        />
                    </InputGroup>
                </GridCol>
            </GridRow>
        </Grid>
    );
};
