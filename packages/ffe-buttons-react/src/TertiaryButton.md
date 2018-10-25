```js
const ButtonGroup = require('./ButtonGroup').default;

<ButtonGroup thin={true}>
    <TertiaryButton onClick={f => f}>Tertiærknapp</TertiaryButton>
</ButtonGroup>;
```

Variant _dark_ for interne løsninger med mørk bakgrunn.

```js { "props": { "className": "sb1ds-example-dark" } }
const ButtonGroup = require('./ButtonGroup').default;

<ButtonGroup thin={true}>
    <TertiaryButton onClick={f => f} dark={true}>Tertiærknapp</TertiaryButton>
</ButtonGroup>;
```
