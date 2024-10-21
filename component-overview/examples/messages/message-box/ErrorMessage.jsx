import { Paragraph } from '@sb1/ffe-core-react';
import { MessageBox, MessageHeader } from '@sb1/ffe-messages-react';

<MessageBox
    type="error"
    header={<MessageHeader>Fikk ikke kalkulert pris</MessageHeader>}
>
    <Paragraph>
        Det ser ut til at vi har litt problemer med priskalkuleringstjenestene
        våre akkurat nå. Hvis problemet vedvarer, kan du ta kontakt med
        kundesupport, så hjelper vi deg.
    </Paragraph>
</MessageBox>;
