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
</ButtonGroup>;
```
