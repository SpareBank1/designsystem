Default brukes for å ekspandere og vise innhold som ikke nødvendigvis trenger å ligge synlig på siden til enhver tid.
Skal brukes med beige bakgrunn på innholdet som blir vist. Det beige laget som ekspanderes er fullbredde, det går fra
kant til kant uavhengig av skjermstørrelse. Knappen er hvit (ikke transparent). Dark brukes for å ekspandere og vise
alt innhold i menyen “vis alle produkter”, eller for å vise hovedinnhold som for eksempel kalkulator. Skal brukes med
blå bakgrunn på innholdet som blir vist.


```js
const { BlyantIkon, ForstorrelsesglassIkon } = require('../../ffe-icons-react');
initialState = { isExpanded: false };
<div>
    <ExpandButton
        isExpanded={state.isExpanded1}
        onClick={() => setState({ isExpanded1: !state.isExpanded1 })}
    >
        Vis mer
    </ExpandButton><br />
    <ExpandButton
        isExpanded={state.isExpanded2}
        onClick={() => setState({ isExpanded2: !state.isExpanded2 })}
        leftIcon={<BlyantIkon />}
    >
        Endre
    </ExpandButton><br />
    <ExpandButton
        isExpanded={state.isExpanded3}
        onClick={() => setState({ isExpanded3: !state.isExpanded3 })}
        rightIcon={<ForstorrelsesglassIkon />}
    >
        Enhance
    </ExpandButton>
</div>
```
