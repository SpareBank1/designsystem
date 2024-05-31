import { MessageBox, MessageHeader } from '@sb1/ffe-messages-react';
import { Paragraph } from '@sb1/ffe-core-react';

<div style={{ backgroundColor: 'var(--ffe-farge-frost-30)', padding: '8px' }}>
    <MessageBox
        type="info"
        header={<MessageHeader>Du har ingen kort</MessageHeader>}
        onColoredBg={true}
    >
        <Paragraph>
            For å bruke denne tjenesten må du ha et debetkort eller kredittkort
            fra SpareBank 1.
        </Paragraph>
    </MessageBox>
</div>;
