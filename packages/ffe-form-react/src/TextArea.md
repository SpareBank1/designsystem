```js
<React.Fragment>
    <Label htmlFor="textarea-example">Beskriv skaden</Label>
    <TextArea
        defaultValue="Dette er et tekstfelt for lengre tekster."
        id="textarea-example"
        rows="8"
    />
</React.Fragment>
```

## Styr fokus med `ref`

Du kan få en referanse til textarea-feltet ved å sende inn en `ref`-prop. Brukes typisk til å fokusere et felt programmatisk.

```js
const { TextArea } = require('.');
const { ButtonGroup, PrimaryButton } = require('../../ffe-buttons-react');

class Example extends React.Component {
    constructor() {
        super();
        this.inputRef = React.createRef();
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
        this.inputRef.current.focus();
    }
    render() {
        return (
            <React.Fragment>
                <TextArea
                    ref={this.inputRef}
                    placeholder="Trykk på knappen for fokus"
                />
                <ButtonGroup>
                    <PrimaryButton onClick={this.handleClick}>
                        Klikk for å fokusere input
                    </PrimaryButton>
                </ButtonGroup>
            </React.Fragment>
        );
    }
}

<Example />;
```

Variant _dark_ for interne løsninger med mørk bakgrunn.

```js { "props": { "className": "sb1ds-example-dark" } }
<Label htmlFor="textarea-example" dark={true}>Beskriv skaden</Label>
<TextArea
    defaultValue="Dette er et tekstfelt for lengre tekster."
    id="textarea-example"
    rows="8"
    dark={true}
/>
```
