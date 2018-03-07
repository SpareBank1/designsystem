Radioblokker er noe vi bruker når vi ber brukeren om å ta valg som krever endel 
informasjon.

```js
const { RadioButtonInputGroup } = require('.');
initialState = { selected: 'you' };

<RadioButtonInputGroup 
    label="Hvem eier bilen du skal forsikre?"
    name="owner"
    onChange={e => setState({ selected: e.target.value })}
    selectedValue={state.selected}
>
    {inputProps => (
        <React.Fragment>
            <RadioBlock
                {...inputProps}
                label="Du"
                value="you"
            />
            <RadioBlock
                {...inputProps}
                label="Ektefelle, samboer eller registrert partner"
                value="partner"
            >
                Da må ektefelle, samboer eller registrert partner skrive inn 
                detaljene sine under.
            </RadioBlock>
            <RadioBlock
                {...inputProps}
                label="Leasingselskap"
                value="leasing-company"
            >
                Da må leasingselskapet gi deg noen detaljer som du må skrive
                inn under.
            </RadioBlock>
        </React.Fragment>
    )}
</RadioButtonInputGroup>
```
