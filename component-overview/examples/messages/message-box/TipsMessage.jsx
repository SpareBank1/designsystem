import { MessageBox, MessageHeader } from '@sb1/ffe-messages-react';
import { Paragraph } from '@sb1/ffe-core-react';

<MessageBox
    type="tips"
    header={
        <MessageHeader>
            Reiseforsikringen dekker alt utenfor hjemmet!
        </MessageHeader>
    }
>
    <Paragraph>
        Reiseforsikringen gjelder ikke bare når du er på ferie. Les mer om hva
        som dekkes i vilkårene.
    </Paragraph>
</MessageBox>;
