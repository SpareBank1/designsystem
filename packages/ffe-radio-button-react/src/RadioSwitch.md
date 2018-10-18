Radiobrytere brukes når brukeren skal gjøre et binært valg - typisk i formen
"ja eller nei", eller "av eller på".

```js
const { RadioButtonInputGroup } = require('.');

initialState = { selected: undefined };

<RadioButtonInputGroup
    label="Vil bilen bli kjørt av sjåfører under 23 år?"
    tooltip="Unge sjåfører har en statistisk høyere sjanse for å bulke bilen."
    name="under23"
    onChange={(e) => setState({ selected: e.target.value })}
    selectedValue={state.selected}
>
    {inputProps => (
        <RadioSwitch
            leftLabel="Ja"
            leftValue="true"
            rightLabel="Nei"
            rightValue="false"
            {...inputProps}
        />
    )}
</RadioButtonInputGroup>
```

Variant _dark_ for interne løsninger med mørk bakgrunn.

```js { "props": { "className": "sb1ds-example-dark" } }
const { RadioButtonInputGroup } = require('.');

initialState = { selected: undefined };

<RadioButtonInputGroup
    label="Røykfri siste 2 år?"
    tooltip="Røyk er ikke bra for deg!"
    name="non-smoker"                    
    onChange={(e) => setState({ selected: e.target.value })}
    selectedValue={state.selected}
    dark={true}
>
    {inputProps => (
        <RadioSwitch
            leftLabel="Ja"
            leftValue="true"
            rightLabel="Nei"
            rightValue="false"
            dark={true}
            {...inputProps}
        />
    )}
</RadioButtonInputGroup>
```

