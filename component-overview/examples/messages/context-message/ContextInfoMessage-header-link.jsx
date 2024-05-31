import { Paragraph, LinkText } from '@sb1/ffe-core-react';
import { ContextMessage, MessageHeader } from '@sb1/ffe-messages-react';

<ContextMessage type="info" header={<MessageHeader>Til info</MessageHeader>}>
    <Paragraph>
        Nå har det kommet noe nytt og spennende fra SpareBank 1!
    </Paragraph>
    <LinkText href="#">Les mer om spennende nyhet</LinkText>
</ContextMessage>;
