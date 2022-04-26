import { Checkbox } from '@sb1/ffe-form-react';

<Checkbox
    name="clicked"
    onChange={e => alert(`Nå er jeg ${e.target.checked ? 'på' : 'av'}!`)}
>
    Trykk for å lære litt om meg
</Checkbox>
