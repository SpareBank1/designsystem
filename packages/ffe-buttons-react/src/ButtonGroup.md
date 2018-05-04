For å plassere knapper ved siden av hverandre på riktig måte har vi en såkalt
knappegruppe. Denne sørger for å gi riktige marginer mellom knappene. Knapper i
grupper kan være vanlige knapper eller lenker til andre steder.

```js
<React.Fragment>
    <ButtonGroup>
        <ActionButton>
            Neste
        </ActionButton>
        <ActionButton element="a" href="#buttongroup">
            Lenke
        </ActionButton>
        <SecondaryButton>
            Avbryt
        </SecondaryButton>
        <SecondaryButton element="a" href="#buttongroup">
            Lenke
        </SecondaryButton>
        <TertiaryButton>
            Hopp over
        </TertiaryButton>
        <TertiaryButton element="a" href="#buttongroup">
            Lenke
        </TertiaryButton>
    </ButtonGroup>
    <ButtonGroup>
        <PrimaryButton>
            Neste
        </PrimaryButton>
        <PrimaryButton element="a" href="#buttongroup">
            Lenke
        </PrimaryButton>
        <SecondaryButton>
            Avbryt
        </SecondaryButton>
        <SecondaryButton element="a" href="#buttongroup">
            Lenke
        </SecondaryButton>
        <TertiaryButton>
            Hopp over
        </TertiaryButton>
        <TertiaryButton element="a" href="#buttongroup">
            Lenke
        </TertiaryButton>
    </ButtonGroup>
</React.Fragment>
```

Det finnes også en tynnere variant.

```js
<React.Fragment>
    <ButtonGroup thin={true}>
        <ActionButton>
            Neste
        </ActionButton>
        <ActionButton element="a" href="#buttongroup">
            Lenke
        </ActionButton>
        <SecondaryButton>
            Avbryt
        </SecondaryButton>
        <SecondaryButton element="a" href="#buttongroup">
            Lenke
        </SecondaryButton>
        <TertiaryButton>
            Hopp over
        </TertiaryButton>
        <TertiaryButton element="a" href="#buttongroup">
            Lenke
        </TertiaryButton>
    </ButtonGroup>
    <ButtonGroup thin={true}>
        <PrimaryButton>
            Neste
        </PrimaryButton>
        <PrimaryButton element="a" href="#buttongroup">
            Lenke
        </PrimaryButton>
        <SecondaryButton>
            Avbryt
        </SecondaryButton>
        <SecondaryButton element="a" href="#buttongroup">
            Lenke
        </SecondaryButton>
        <TertiaryButton>
            Hopp over
        </TertiaryButton>
        <TertiaryButton element="a" href="#buttongroup">
            Lenke
        </TertiaryButton>
    </ButtonGroup>
</React.Fragment>
```

Det finnes også en inline variant.

```js
<React.Fragment>
    <ButtonGroup inline={true}>
        <ActionButton>
            Neste
        </ActionButton>
        <ActionButton element="a" href="#buttongroup">
            Lenke
        </ActionButton>
        <SecondaryButton>
            Avbryt
        </SecondaryButton>
        <SecondaryButton element="a" href="#buttongroup">
            Lenke
        </SecondaryButton>
        <TertiaryButton>
            Hopp over
        </TertiaryButton>
        <TertiaryButton element="a" href="#buttongroup">
            Lenke
        </TertiaryButton>
    </ButtonGroup>
    <ButtonGroup inline={true}>
        <PrimaryButton>
            Neste
        </PrimaryButton>
        <PrimaryButton element="a" href="#buttongroup">
            Lenke
        </PrimaryButton>
        <SecondaryButton>
            Avbryt
        </SecondaryButton>
        <SecondaryButton element="a" href="#buttongroup">
            Lenke
        </SecondaryButton>
        <TertiaryButton>
            Hopp over
        </TertiaryButton>
        <TertiaryButton element="a" href="#buttongroup">
            Lenke
        </TertiaryButton>
    </ButtonGroup>
</React.Fragment>
```
