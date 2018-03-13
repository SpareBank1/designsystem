Radioknapper skal grupperes med en felles overskrift som gir brukeren 
konteksten de trenger for å gjøre valget under. Denne overskriften kan ofte 
være et spørsmål:

```js
const { RadioButton } = require('.');
const { Tooltip } = require('../../ffe-form-react');

initialState = { selected: 'red' };

<RadioButtonInputGroup 
    label="Hva er din favorittfarge?"
    inline={true}
    name="color"
    fieldMessage={
        state.selected === 'yellow' ? 'Gult er ikke kult.' : undefined
    }
    tooltip={<Tooltip>Din favorittfarge er viktig for oss. Vår er blå!</Tooltip>}
    selectedValue={state.selected}
    onChange={e => setState({ selected: e.target.value })}
>
    {inputProps => (
        <React.Fragment>
            <RadioButton {...inputProps} value="red">
                Rød
            </RadioButton>
            <RadioButton {...inputProps} value="blue">
                Blå
            </RadioButton>
            <RadioButton {...inputProps} value="yellow">
                Gul
            </RadioButton>
        </React.Fragment>
    )}
</RadioButtonInputGroup>
```
