```js
const { RadioButtonInputGroup } = require('.');
initialState = { selected: undefined };
<RadioButtonInputGroup
    inline={true}
    label="Hvor mange barn har du"
    name="antallBarn"
    onChange={e => setState({ selected: e.target.value })}
    selectedValue={state.selected}
>
    {inputProps => (
        <React.Fragment>
            <AmanRadioButton {...inputProps} value="1">
                1
            </AmanRadioButton>
            <AmanRadioButton {...inputProps} value="2">
                2
            </AmanRadioButton>
            <AmanRadioButton {...inputProps} value="3">
                3
            </AmanRadioButton>
        </React.Fragment>
    )}
</RadioButtonInputGroup>;
```
