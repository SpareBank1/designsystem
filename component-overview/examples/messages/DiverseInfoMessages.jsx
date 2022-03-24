import { ContextInfoMessage } from '@sb1/ffe-context-message-react';
import { InfoMessage } from '@sb1/ffe-message-box-react';
import { SystemInfoMessage } from '@sb1/ffe-system-message-react';
import { Paragraph } from '@sb1/ffe-core-react';

<>
    <h2 className="ffe-h2">InfoMessage</h2>

    <InfoMessage title="Du har ingen kort">
        <Paragraph>
            For å bruke denne tjenesten må du ha et debetkort eller kredittkort
            fra SpareBank 1.
        </Paragraph>
    </InfoMessage>

    <h2 className="ffe-h2">ContextInfoMessage</h2>

    <ContextInfoMessage>
        Nå har det kommet noe nytt og spennende fra SpareBank 1!
    </ContextInfoMessage>

    <h2 className="ffe-h2">SystemInfoMessage</h2>

    <SystemInfoMessage>
        Mobilbanken vil være utilgjengelig førstkommende fredag kl 19-20.
    </SystemInfoMessage>
</>;
