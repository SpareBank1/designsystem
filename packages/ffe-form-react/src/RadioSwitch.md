Radiobrytere brukes når brukeren skal gjøre et binært valg - typisk i formen
"ja eller nei", eller "av eller på".

Radiobryter uten defaultvalg.

```js
const { RadioButtonInputGroup } = require('.');

initialState = { selected: undefined };

<RadioButtonInputGroup
    label="Vil bilen bli kjørt av sjåfører under 23 år?"
    tooltip="Unge sjåfører har en statistisk høyere sjanse for å bulke bilen."
    name="under23"
    onChange={e => setState({ selected: e.target.value })}
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
</RadioButtonInputGroup>;
```

Radiobrytere med defaultvalg.

```js
const { RadioButtonInputGroup } = require('.');

initialState = { selected: 'false' };

<RadioButtonInputGroup
    label="Vil bilen bli kjørt av sjåfører under 23 år?"
    tooltip="Unge sjåfører har en statistisk høyere sjanse for å bulke bilen."
    name="under23"
    onChange={e => setState({ selected: e.target.value })}
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
</RadioButtonInputGroup>;
```

Radiobrytere med feilmelding på brukerens valg

```js
const { RadioButtonInputGroup } = require('.');

initialState = {
    selectedLeasing: 'true',
    selectedPant: 'true',
    fieldMessageLeasing:
        'Bilen kan ikke være leaset hvis du har billån med pant i bilen.',
};
<RadioButtonInputGroup
    label="Er bilen leaset?"
    name="hasLeasing"
    onChange={e => setState({ selectedLeasing: e.target.value })}
    selectedValue={state.selectedLeasing}
    fieldMessage={state.fieldMessageLeasing}
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
</RadioButtonInputGroup>;
```

Radiobrytere med feilmelding der brukeren ikke har gjort et valg.

```js
const { RadioButtonInputGroup } = require('.');

initialState = { selected: undefined, fieldMessage: 'Du må gjøre et valg' };

<RadioButtonInputGroup
    label="Vil bilen bli kjørt av sjåfører under 23 år?"
    tooltip="Unge sjåfører har en statistisk høyere sjanse for å bulke bilen."
    name="under23"
    onChange={e => setState({ selected: e.target.value })}
    selectedValue={state.selected}
    fieldMessage={state.fieldMessage}
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
</RadioButtonInputGroup>;
```

Variant _dark_ for interne løsninger med mørk bakgrunn.

```js { "props": { "className": "sb1ds-example-dark" } }
const { RadioButtonInputGroup } = require('.');

initialState = { selected: undefined };

<RadioButtonInputGroup
    label="Røykfri siste 2 år?"
    tooltip="Røyk er ikke bra for deg!"
    name="non-smoker"
    onChange={e => setState({ selected: e.target.value })}
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
</RadioButtonInputGroup>;
```
