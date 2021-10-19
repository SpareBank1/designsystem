```js
const ButtonGroup = require('./ButtonGroup').default;

<React.Fragment>
    <div>
        <ButtonGroup thin={true}>
            <ActionButton onClick={f => f}>Action knapp</ActionButton>
            <ActionButton
                isLoading={true}
                onClick={f => f}
                ariaLoadingMessage="Vennligst vent..."
            >
                Action knapp
            </ActionButton>
        </ButtonGroup>
    </div>
</React.Fragment>;
```
