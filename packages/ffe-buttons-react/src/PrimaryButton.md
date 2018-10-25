```js
const ButtonGroup = require('./ButtonGroup').default;

<ButtonGroup thin={true}>
    <PrimaryButton onClick={f => f}>Primary knapp</PrimaryButton>
    <PrimaryButton
        isLoading={true}
        onClick={f => f}
        ariaLoadingMessage="Vennligst vent..."
    >
        Primary knapp
    </PrimaryButton>
</ButtonGroup>
```

Variant _dark_ for interne løsninger med mørk bakgrunn.

```js { "props": { "className": "sb1ds-example-dark" } }

<ButtonGroup thin={true}>
    <PrimaryButton onClick={f => f} dark={true}>Primary knapp</PrimaryButton>
</ButtonGroup>
```
