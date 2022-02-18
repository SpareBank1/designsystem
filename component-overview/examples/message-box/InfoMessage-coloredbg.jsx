import { InfoMessage } from '@sb1/ffe-message-box-react';
import { Paragraph } from '@sb1/ffe-core-react';

<div style={{ backgroundColor: 'var(--ffe-farge-frost-30)', padding: '8px' }}>
    <InfoMessage title="Du har ingen kort" onColoredBg={true}>
        <Paragraph>
            Denne tjenesten er kun tilgjengelig for deg med et debitkort eller
            kredittkort fra SpareBank 1.
        </Paragraph>
    </InfoMessage>
</div>;
