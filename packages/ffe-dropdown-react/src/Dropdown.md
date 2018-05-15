Dropdown bruker man når man har 5-10 valg å velge mellom.

```js
<React.Fragment>
    <Label htmlFor="dropdown-example">
        Måned
    </Label>
    <Dropdown id="dropdown-example">
        <option value="jan">Januar</option>
        <option value="feb">Februar</option>
        <option value="mar">Mars</option>
    </Dropdown>
</React.Fragment>
```

Dersom skjemaet inneholder valideringsfeil vises det på denne måten:

```js
const { InputGroup } = require('../../ffe-form-react/src/');

<InputGroup
    label="Måned"
    fieldMessage="Du må velge måned"
>
    <Dropdown defaultValue="placeholder">
        <option value="placeholder" disabled>Velg måned</option>
        <option value="jan">Januar</option>
        <option value="feb">Februar</option>
        <option value="mar">Mars</option>
    </Dropdown>
</InputGroup>
```
