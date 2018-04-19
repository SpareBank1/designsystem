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
<React.Fragment>
    <Label htmlFor="dropdown-example-aria-invalid">
        Måned
    </Label>
    <Dropdown
        aria-invalid="true"
        id="dropdown-example-aria-invalid"
    >
        <option value="jan">Januar</option>
        <option value="feb">Februar</option>
        <option value="mar">Mars</option>
    </Dropdown>
</React.Fragment>
```
