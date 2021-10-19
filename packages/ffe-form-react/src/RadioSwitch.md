Radio-switcher brukes når brukeren skal ta stilling til enkle valg - typisk i formen "ja/nei", eller "av/på" og hvor du i tillegg har behov for en lagreknapp. Har du behov for mer enn 3 radio-switcher i en liste, skal du bruke radioknapper.

Radio-switcher uten defaultvalg.

```js
const { RadioButtonInputGroup } = require('.');

initialState = { selected: undefined };

<RadioButtonInputGroup
    label="Vil bilen bli kjørt av sjåfører under 23 år?"
    tooltip="Unge sjåfører har en statistisk høyere sjanse for å bulke bilen."
    name="radioButtonInputGroup"
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

Radio-switcher med defaultvalg.

```js
const { RadioButtonInputGroup } = require('.');

initialState = { selected: 'false' };

<RadioButtonInputGroup
    label="Vil bilen bli kjørt av sjåfører under 23 år?"
    tooltip="Unge sjåfører har en statistisk høyere sjanse for å bulke bilen."
    name="radioButtonInputGroupWithDefault"
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

Radio-switcher med feilmelding på brukerens valg

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

Radio-switcher med feilmelding der brukeren ikke har gjort et valg.

```js
const { RadioButtonInputGroup } = require('.');

initialState = { selected: undefined, fieldMessage: 'Du må gjøre et valg' };

<RadioButtonInputGroup
    label="Vil bilen bli kjørt av sjåfører under 23 år?"
    tooltip="Unge sjåfører har en statistisk høyere sjanse for å bulke bilen."
    name="radioButtonInputGroupWithFieldMessage"
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
