Radioknapper skal grupperes med en felles overskrift som gir brukeren
konteksten de trenger for å gjøre valget under. Denne overskriften kan ofte
være et spørsmål:

```js
const { RadioButton } = require('.');
const { RadioBlock, RadioSwitch, Tooltip } = require('../../ffe-form-react');

initialState = {
    selected: 'red',
    showErrors: false,
};

<React.Fragment>
    <div className="ffe-button-group">
        <SecondaryButton
            onClick={() =>
                setState(prevState => ({
                    showErrors: !prevState.showErrors,
                }))
            }
        >
            Skru feilmeldinger av/på
        </SecondaryButton>
    </div>
    <RadioButtonInputGroup
        label="Hva er din favorittfarge?"
        inline={true}
        name="color"
        fieldMessage={state.showErrors ? 'Feil farge.' : null}
        tooltip={
            <Tooltip>Din favorittfarge er viktig for oss. Vår er blå!</Tooltip>
        }
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

    <RadioButtonInputGroup
        label="Hva er din favorittlukt?"
        inline={true}
        name="smell"
        fieldMessage={state.showErrors ? 'Feil lukt.' : null}
        selectedValue={state.selected}
        onChange={e => setState({ selected: e.target.value })}
    >
        {inputProps => (
            <React.Fragment>
                <RadioButton {...inputProps} value="grass">
                    Gress
                </RadioButton>
                <RadioButton {...inputProps} value="asphalt">
                    Asfalt
                </RadioButton>
                <RadioButton {...inputProps} value="pollen">
                    Pollen
                </RadioButton>
            </React.Fragment>
        )}
    </RadioButtonInputGroup>

    <RadioButtonInputGroup
        label="Velg ja eller nei"
        name="switch"
        fieldMessage={state.showErrors ? 'Feil valg' : null}
    >
        {inputProps => (
            <RadioSwitch
                leftLabel="Ja"
                leftValue={true}
                rightLabel="Nei"
                rightValue={false}
                {...inputProps}
            />
        )}
    </RadioButtonInputGroup>

    <RadioButtonInputGroup
        label="Velg ja eller nei"
        name="block1"
        selectedValue="yes"
        fieldMessage={state.showErrors ? 'Feil valg' : null}
    >
        {inputProps => (
            <React.Fragment>
                <RadioBlock {...inputProps} label="Ja" value="yes" />
                <RadioBlock
                    {...inputProps}
                    label="Nei"
                    showChildren={true}
                    value="no"
                >
                    Vil ikke!
                </RadioBlock>
            </React.Fragment>
        )}
    </RadioButtonInputGroup>
</React.Fragment>;
```

Default oppførsel er at det holdes av plass under inputfeltene for å vise en feilmelding uten at innholdet lengre ned endres. Dersom man ikke ønsker dette kan det skrus
av med å sette `extraMargin` prop til `false`.

```js
const { RadioButton } = require('.');
const { RadioBlock, RadioSwitch, Tooltip } = require('../../ffe-form-react');

initialState = {
    selected: 'red',
    showErrors: false,
};

<React.Fragment>
    <div className="ffe-button-group">
        <SecondaryButton
            onClick={() =>
                setState(prevState => ({
                    showErrors: !prevState.showErrors,
                }))
            }
        >
            Skru feilmeldinger av/på
        </SecondaryButton>
    </div>
    <RadioButtonInputGroup
        extraMargin={false}
        label="Hva er din favorittfarge?"
        inline={true}
        name="color"
        fieldMessage={state.showErrors ? 'Feil farge.' : null}
        tooltip={
            <Tooltip>Din favorittfarge er viktig for oss. Vår er blå!</Tooltip>
        }
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

    <RadioButtonInputGroup
        extraMargin={false}
        label="Hva er din favorittlukt?"
        inline={true}
        name="smell"
        fieldMessage={state.showErrors ? 'Feil lukt.' : null}
        selectedValue={state.selected}
        onChange={e => setState({ selected: e.target.value })}
    >
        {inputProps => (
            <React.Fragment>
                <RadioButton {...inputProps} value="grass">
                    Gress
                </RadioButton>
                <RadioButton {...inputProps} value="asphalt">
                    Asfalt
                </RadioButton>
                <RadioButton {...inputProps} value="pollen">
                    Pollen
                </RadioButton>
            </React.Fragment>
        )}
    </RadioButtonInputGroup>

    <RadioButtonInputGroup
        extraMargin={false}
        label="Velg ja eller nei"
        name="switch"
        fieldMessage={state.showErrors ? 'Feil valg' : null}
    >
        {inputProps => (
            <RadioSwitch
                leftLabel="Ja"
                leftValue={true}
                rightLabel="Nei"
                rightValue={false}
                {...inputProps}
            />
        )}
    </RadioButtonInputGroup>

    <RadioButtonInputGroup
        extraMargin={false}
        label="Velg ja eller nei"
        name="block2"
        selectedValue="yes"
        fieldMessage={state.showErrors ? 'Feil valg' : null}
    >
        {inputProps => (
            <React.Fragment>
                <RadioBlock {...inputProps} label="Ja" value="yes" />
                <RadioBlock
                    {...inputProps}
                    label="Nei"
                    showChildren={true}
                    value="no"
                >
                    Vil ikke!
                </RadioBlock>
            </React.Fragment>
        )}
    </RadioButtonInputGroup>
</React.Fragment>;
```

Variant _dark_ for interne løsninger med mørk bakgrunn.

```js { "props": { "className": "sb1ds-example-dark" } }
const { RadioButton } = require('.');
const { Tooltip } = require('../../ffe-form-react');

initialState = { selected: 'red' };

<RadioButtonInputGroup
    dark={true}
    label="Hva er din favorittfarge?"
    inline={true}
    name="color"
    fieldMessage={
        state.selected === 'yellow' ? 'Gult er ikke kult.' : undefined
    }
    tooltip={
        <Tooltip>Din favorittfarge er viktig for oss. Vår er blå!</Tooltip>
    }
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
</RadioButtonInputGroup>;
```
