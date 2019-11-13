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
];
<HorizontalSelector
    options={options}
    selected={options[0]}
    label={'Antall barn'}
    description={'Velg hvor mange barn du har'}
    onChange={(field, value) => {
        // Handle value update
    }}
    field={'antallbarn'}
/>;
```
