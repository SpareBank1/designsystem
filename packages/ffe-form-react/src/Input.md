_The bread and butter_ av skjemaene våre.

Vi har tre varianter av inputfelt:

1. standard
2. inline
3. text-like

_Standard_ og _inline_ er mest relevant for utviklere. De ser helt like ut, men oppfører seg annerledes i samspillet
med andre elementer på siden, for eksempel [tooltip](#!/Tooltip).

```js
const { Input } = require('.');

<React.Fragment>
    <Label htmlFor="input-first-name">Fornavn</Label>
    <Input id="input-first-name" />
</React.Fragment>;
```

_Text-like_-varianten er designet for å kunne brukes som en del av en setning med et minimum av ramme rundt. Det er opp til en utvikler å sette bredden på dette elementet, siden det vil variere fra gang til gang hva man ønsker.

```js
const { Input } = require('.');

<p className="ffe-body-paragraph">
    Jeg er{' '}
    <Input
        aria-label="Skriv inn alder"
        style={{ width: '47px' }}
        textLike={true}
    />{' '}
    år gammel
</p>;
```

## Styr fokus med `ref`

Du kan få en referanse til input-feltet ved å sende inn en `ref`-prop. Brukes typisk til å fokusere et felt programmatisk.

```js
const { Input } = require('.');
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
                <Input ref={this.inputRef} placeholder="Trykk på knappen" />
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
const { Input } = require('.');

<React.Fragment>
    <Label htmlFor="first-name" dark={true}>
        Fornavn
    </Label>
    <Input id="first-name" dark={true} />
</React.Fragment>;
```
