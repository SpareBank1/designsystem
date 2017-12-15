# Expand button

Default brukes for å ekspandere og vise innhold som ikke nødvendigvis trenger å ligge synlig på siden til enhver tid.
Skal brukes med beige bakgrunn på innholdet som blir vist. Det beige laget som ekspanderes er fullbredde, det går fra
kant til kant uavhengig av skjermstørrelse. Knappen er hvit (ikke transparent). Dark brukes for å ekspandere og vise
alt innhold i menyen “vis alle produkter”, eller for å vise hovedinnhold som for eksempel kalkulator. Skal brukes med
blå bakgrunn på innholdet som blir vist.


```js
<ExpandButton
    isExpanded={false}
    onClick={f => f}
>
    Vis mer
</ExpandButton>

<ExpandButton
    isExpanded={true}
    onClick={f => f}
>
    Vis mer
</ExpandButton>
```
