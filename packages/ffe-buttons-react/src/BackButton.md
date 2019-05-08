```js
<BackButton onClick={f => f}>Tilbake</BackButton>
```

Variant _dark_ for interne løsninger med mørk bakgrunn.

```js { "props": { "className": "sb1ds-example-dark" } }
const ButtonGroup = require('./ButtonGroup').default;

<React.Fragment>
    <div>
        <ButtonGroup thin={true}>
            <BackButton onClick={f => f} dark={true}>
                Tilbake
            </BackButton>
        </ButtonGroup>
    </div>
</React.Fragment>;
```
