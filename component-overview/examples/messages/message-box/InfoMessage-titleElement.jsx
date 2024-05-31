import { Paragraph } from '@sb1/ffe-core-react';
import { MessageBox, MessageHeader } from '@sb1/ffe-messages-react';

<MessageBox
    type="info"
    header={<MessageHeader as="h4">Tittelen her er h4</MessageHeader>}
>
    <Paragraph>
        Ved å bruke titleElement propertyen kan man endre HTML-elementet på
        tittelen.
    </Paragraph>
</MessageBox>;
