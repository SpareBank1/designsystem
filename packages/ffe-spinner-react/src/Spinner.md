Den finnes i liten og stor versjon.

```jsx
<div>
    <Spinner /> Vennligst vent litt
</div>
```

```jsx
<div style={{ textAlign: 'center' }}>
    <Spinner large={true} />
    <p className="ffe-body-paragraph">Vennligst vent litt</p>
</div>
```

Husk også at de viktigste knappene våre har en innebygget spinner:

```js
<React.Fragment>
    <div>
        <ButtonGroup thin={true}>
            <ActionButton
                isLoading={true}
                onClick={f => f}
                ariaLoadingMessage="Vennligst vent..."
            >
                Action knapp
            </ActionButton>
            <PrimaryButton
                isLoading={true}
                onClick={f => f}
                ariaLoadingMessage="Vennligst vent..."
            >
                Primary knapp
            </PrimaryButton>
            <SecondaryButton
                isLoading={true}
                onClick={f => f}
                ariaLoadingMessage="Vennligst vent..."
            >
                Secondary knapp
            </SecondaryButton>
        </ButtonGroup>
    </div>
</React.Fragment>
```
