Hvorvidt området er ekspandert eller ikke styres av konsumenten via property `isOpen`.

```js
const Collapse = require('.').default;

initialState = { isOpen: false };

<React.Fragment>
    <button onClick={() => setState(({ isOpen }) => ({ isOpen: !isOpen }))}>
        {state.isOpen ? 'Collapse' : 'Expand'}
    </button>
    <Collapse isOpen={state.isOpen}>
        <div>
            <p>Hello world</p>
            <p>Hello world</p>
        </div>
    </Collapse>
</React.Fragment>;
```

Et callback kan gis via property `onRest` som kjøres når transisjonen er ferdig.

```js
const Collapse = require('.').default;

initialState = { isOpen: false, rand: Math.random() };

const onRest = () => setState({ rand: Math.random() });

<React.Fragment>
    <button onClick={() => setState(({ isOpen }) => ({ isOpen: !isOpen }))}>
        {state.isOpen ? 'Collapse' : 'Expand'}
    </button>
    <Collapse isOpen={state.isOpen} onRest={onRest}>
        <div>
            <p>Hello world</p>
            <p>Hello world</p>
        </div>
    </Collapse>
    <p>This number will change on transition complete: {state.rand}</p>
</React.Fragment>;
```
