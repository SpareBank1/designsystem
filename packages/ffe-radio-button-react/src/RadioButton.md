Radioknapper brukes når man kan velge et av få valg. Hvis valgene er korte og
konsise, kan man ha dem ved siden av hverandre:

```js
const { RadioButtonInputGroup } = require('.');
initialState = { selected: undefined };
<RadioButtonInputGroup
    inline={true}
    name="favoriteColor"
    onChange={e => setState({ selected: e.target.value })}
    selectedValue={state.selected}
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

Har valgene litt mer tekst, så bør valgene komme under hverandre:

```js
const { RadioButtonInputGroup } = require('.');
initialState = { selected: undefined };
<RadioButtonInputGroup
    name="customerType"
    onChange={e => setState({ selected: e.target.value })}
    selectedValue={state.selected}
>
    {inputProps => (
        <React.Fragment>
            <RadioButton {...inputProps} value="bank">
                Bankkunde
            </RadioButton>
            <RadioButton {...inputProps} value="insurance">
                Forsikringskunde
            </RadioButton>
            <RadioButton {...inputProps} value="both">
                Totalkunde
            </RadioButton>
            <RadioButton {...inputProps} value="none">
                Ikke kunde enda
            </RadioButton>
        </React.Fragment>
    )}
</RadioButtonInputGroup>
```

Noen valg kan være mer kompliserte, og ikke like selvforklarende. Da kan man
legge til en tipstekst:

```js
const { RadioButtonInputGroup } = require('.');
initialState = { selected: undefined };
<RadioButtonInputGroup
    name="invoice"
    onChange={e => setState({ selected: e.target.value })}
    selectedValue={state.selected}
>
    {inputProps => (
        <React.Fragment>
            <RadioButton
                {...inputProps}
                tooltip="Månedlig fakturering er enklest å planlegge for. Passer for deg som liker å planlegge litt etter hvert."
                value="monthly"
            >
                Månedlig fakturering
            </RadioButton>
            <RadioButton
                {...inputProps}
                tooltip="Årlig fakturering er for deg som har stell på økonomien. Her sparer du mest penger!"
                value="annually"
            >
                Årlig fakturering
            </RadioButton>
        </React.Fragment>
    )}
</RadioButtonInputGroup>
```
