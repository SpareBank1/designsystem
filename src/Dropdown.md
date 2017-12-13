# Dropdown

```js
<Dropdown>
    <option value="jan">Januar</option>
    <option value="feb">Februar</option>
    <option value="mar">Mars</option>
</Dropdown>
```

Kan starte med en gitt verdi som valgt, i dette tilfellet Mars:

```js
<Dropdown defaultValue="mar">
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
