#### Default

```js
<div>
    <h3 className="ffe-h4">Personalia</h3>
    <DescriptionList>
        <DescriptionListTerm>Navn</DescriptionListTerm>
        <DescriptionListDescription>Navn Navnesen</DescriptionListDescription>
        <DescriptionListTerm>Adresse</DescriptionListTerm>
        <DescriptionListDescription>Husgata 14</DescriptionListDescription>
        <DescriptionListTerm>Postnummer og sted</DescriptionListTerm>
        <DescriptionListDescription>1337 Sandvika</DescriptionListDescription>
    </DescriptionList>
</div>
```

#### Horizontal

```js
<div>
    <h3 className="ffe-h4">Personalia</h3>
    <DescriptionList horizontal={true}>
        <DescriptionListTerm>Navn</DescriptionListTerm>
        <DescriptionListDescription>Navn Navnesen</DescriptionListDescription>
        <DescriptionListTerm>Adresse</DescriptionListTerm>
        <DescriptionListDescription>Husgata 14</DescriptionListDescription>
        <DescriptionListTerm>Postnummer og sted</DescriptionListTerm>
        <DescriptionListDescription>1337 Sandvika</DescriptionListDescription>
    </DescriptionList>
</div>
```

##### Medium and large

```js
<div>
    <h3 className="ffe-h5">Medium</h3>
    <DescriptionList horizontal={true} medium={true}>
        <DescriptionListTerm>
            This is a very long term, so I might need some extra room
        </DescriptionListTerm>
        <DescriptionListDescription>
            Enlarging the term will of course be at the cost of space for the
            description
        </DescriptionListDescription>
    </DescriptionList>

    <h3 className="ffe-h5">Large</h3>
    <DescriptionList horizontal={true} large={true}>
        <DescriptionListTerm>
            This is a very long description, so I might need some extra room
        </DescriptionListTerm>
        <DescriptionListDescription>
            Enlarging the term will of course be at the cost of space for the
            description
        </DescriptionListDescription>
    </DescriptionList>
</div>
```
