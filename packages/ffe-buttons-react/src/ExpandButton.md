```js
initialState = { isExpanded: false };
<div>
    <ExpandButton
        isExpanded={state.isExpanded}
        onClick={() =>
            setState(prevState => ({ isExpanded: !prevState.isExpanded }))
        }
    >
        Vis mer
    </ExpandButton>
</div>;
```
