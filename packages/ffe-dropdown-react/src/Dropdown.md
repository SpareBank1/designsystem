Dropdown bruker man når man har 5-10 valg å velge mellom.

```js
<Dropdown>
    <option value="jan">Januar</option>
    <option value="feb">Februar</option>
    <option value="mar">Mars</option>
</Dropdown>
```

Dersom skjemaet inneholder valideringsfeil vises det på denne måten:

```js
<Dropdown aria-invalid="true">
    <option value="jan">Januar</option>
    <option value="feb">Februar</option>
    <option value="mar">Mars</option>
</Dropdown>
```
