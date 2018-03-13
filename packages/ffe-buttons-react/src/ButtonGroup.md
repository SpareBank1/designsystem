For å plassere knapper ved siden av hverandre på riktig måte har vi en såkalt
knappegruppe. Denne sørger for å gi riktige marginer mellom knappene.

```js
<ButtonGroup>
    <PrimaryButton>
        Neste
    </PrimaryButton>
    <SecondaryButton
        element="a"
    >
        Avbryt
    </SecondaryButton>
</ButtonGroup>
```

Det finnes også en tynnere variant.

```js
<ButtonGroup thin={true}>
    <PrimaryButton>
        Neste
    </PrimaryButton>
    <SecondaryButton>
        Avbryt
    </SecondaryButton>
    <TertiaryButton
        element="a"
        href="#"
    >
        Til toppen av siden
    </TertiaryButton>
</ButtonGroup>
```

