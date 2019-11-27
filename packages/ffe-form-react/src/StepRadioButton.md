Dette er en numerisk, horisontal velger som ble bygd for å velge antall barn. Passer best til ha tall som verdier, tåler ikke større felt enn tall.

```js
const { RadioButtonInputGroup } = require('.');
initialState = { selected: undefined };
<RadioButtonInputGroup
    name="antallBarn"
    label="Hvor mange barn har du ?"
    description="Her kan du velge antall barn du skal ha"
    onChange={e => setState({ selected: e.target.value })}
    selectedValue={state.selected}
>
    {inputProps => (
        <>
            <StepRadioButton {...inputProps} value="1">
                1
            </StepRadioButton>
            <StepRadioButton {...inputProps} value="2">
                2
            </StepRadioButton>
            <StepRadioButton {...inputProps} value="3">
                3
            </StepRadioButton>
            <StepRadioButton {...inputProps} value="4">
                4
            </StepRadioButton>
        </>
    )}
</RadioButtonInputGroup>;
```
