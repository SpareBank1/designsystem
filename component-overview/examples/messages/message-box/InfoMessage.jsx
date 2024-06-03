import { MessageBox, MessageHeader } from '@sb1/ffe-messages-react';
import { Paragraph } from '@sb1/ffe-core-react';

<MessageBox
    type="info"
    header={<MessageHeader>Du har ingen kort</MessageHeader>}
>
    <Paragraph>
        For å bruke denne tjenesten må du ha et debetkort eller kredittkort fra
        SpareBank 1.
    </Paragraph>
</MessageBox>;
