Dette er en numerisk, horisontal velger som ble bygd for å velge antall barn. Passer best til ha tall som verdier, tåler ikke større felt enn tall.

```js
const options = [
    {
        value: 0,
        label: '0',
    },
    {
        value: 1,
        label: '1',
    },
    {
        value: 2,
        label: '2',
    },
    {
        value: 3,
        label: '3',
    },
    {
        value: 4,
        label: '4',
    },
    {
        value: 5,
        label: '5+',
    },
];

initialState = {
    selectedValue: options[0],
};

const handleOnChange = val => {
    const i = options.findIndex(o => o.value === val);
    setState({
        selectedValue: options[i],
    });
};

<>
    <StepSelector
        options={options}
        initialSelected={state.selectedValue}
        label={'Antall barn'}
        name="antallBarnVelger"
        description={'Velg hvor mange barn du har'}
        onChange={value => {
            // Handle value update
            handleOnChange(value);
        }}
        field={'antallbarn'}
    />
    <p>Antall barn {state.selectedValue.value} </p>
</>;
```
