# ffe-expandable-react

## Deprecation notice

Etter en del frem og tilbake i dette repoet, og at react-height har blitt tatt inn som dependency lener det seg mot å være mer hensiktsmessig å benytte seg av [react-collapse](https://github.com/nkbt/react-collapse).

Om dette er ønskelig for andre har vi satt sammen en enkel overgangs-oppskrift:

Gammelt:
```javascript
import Expandable from 'ffe-expandable-react';

const isOpen = false;
const RowFolded = element || string || array(element);
const RowExpanded = element || string || array(element);

<Expandable
    isOpen={ isOpen }
    expandTime={ expandTime }
    folded={ RowFolded }
    expanded={ RowExpanded }
/>
```
Ny:
```javascript
import Collapse from 'react-collapse';

const isOpen = false;
const RowFolded = element || string || array(element);
const RowExpanded = element || string || array(element);

{ RowFolded }
<Collapse
    isOpened={ isOpen }
>
    { RowExpanded }
</Collapse>
```
