import { Paragraph } from '@sb1/ffe-core-react';
import {
    SystemMessage,
    ContextMessage,
    MessageBox,
    MessageHeader,
} from '@sb1/ffe-messages-react';

<>
    <h2 className="ffe-h2">MessageBox type info</h2>

    <MessageBox
        type="info"
        header={<MessageHeader>Du har ingen kort</MessageHeader>}
    >
        <Paragraph>
            For å bruke denne tjenesten må du ha et debetkort eller kredittkort
            fra SpareBank 1.
        </Paragraph>
    </MessageBox>

    <h2 className="ffe-h2">ContextMessage type info</h2>

    <ContextMessage type="info">
        Nå har det kommet noe nytt og spennende fra SpareBank 1!
    </ContextMessage>

    <h2 className="ffe-h2">SystemMessage type info</h2>

    <SystemMessage type="info">
        Mobilbanken vil være utilgjengelig førstkommende fredag kl 19-20.
    </SystemMessage>
</>;
