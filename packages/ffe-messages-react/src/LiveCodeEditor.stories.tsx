import type { StoryObj, Meta } from '@storybook/react';
import { SystemMessage } from './SystemMessage';
import { ContextMessage } from './ContextMessage';
import { MessageBox } from './MessageBox';
import { MessageHeader } from './MessageHeader';
import { MessageList } from './MessageList';
import { createLiveCodeStory } from '../../../.storybook/shared/LiveCodeEditor';

const meta: Meta<typeof SystemMessage> = {
    title: 'Komponenter/Messages/Live Code Editor',
    component: SystemMessage,
    parameters: {
        docs: {
            description: {
                component: 'Comprehensive live code editor for all message components in the FFE Messages package. Explore SystemMessage, ContextMessage, MessageBox, MessageHeader, and MessageList with interactive examples for notifications, alerts, feedback, and communication scenarios.',
            },
        },
    },
};

export default meta;

type Story = StoryObj<typeof SystemMessage>;

// Define simplified templates for message components
const messagesTemplates = {
    enkelt: {
        name: 'Enkelt',
        icon: '💬',
        code: `<div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
    <SystemMessage type="success">
        Operasjonen ble utført med suksess!
    </SystemMessage>
    
    <SystemMessage type="info">
        Her er noe nyttig informasjon for deg.
    </SystemMessage>
    
    <SystemMessage type="warning">
        Vær oppmerksom på denne advarselen.
    </SystemMessage>
    
    <SystemMessage type="error">
        Det oppstod en feil som må håndteres.
    </SystemMessage>
</div>`
    },
    types: {
        name: 'Meldingstyper',
        icon: '🎨',
        code: `<div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
    <div>
        <h4>SystemMessage varianter</h4>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <SystemMessage type="success">
                Kontoen din er opprettet og klar til bruk!
            </SystemMessage>
            
            <SystemMessage type="info">
                Ny funksjonalitet er tilgjengelig i innstillingene.
            </SystemMessage>
            
            <SystemMessage type="warning">
                Passordet ditt utløper om 7 dager.
            </SystemMessage>
            
            <SystemMessage type="error">
                Kunne ikke lagre endringene. Prøv igjen senere.
            </SystemMessage>
        </div>
    </div>
    
    <div>
        <h4>ContextMessage varianter</h4>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <ContextMessage type="success">
                Skjemaet ble sendt inn uten feil.
            </ContextMessage>
            
            <ContextMessage type="info">
                Alle felt må fylles ut før innsending.
            </ContextMessage>
            
            <ContextMessage type="warning">
                Noen felt inneholder advarsler.
            </ContextMessage>
            
            <ContextMessage type="error">
                Det er feil i skjemaet som må rettes.
            </ContextMessage>
        </div>
    </div>
</div>`
    }
};

export const LiveCodeEditor: Story = createLiveCodeStory(SystemMessage, {
    templates: messagesTemplates,
    additionalComponents: {
        ContextMessage,
        MessageBox,
        MessageHeader,
        MessageList
    },
    defaultTemplate: 'enkelt',
    title: 'Messages Live Code Editor',
    description: 'Comprehensive live code editor for all message components in the FFE Messages package. Explore SystemMessage, ContextMessage, MessageBox, MessageHeader, and MessageList with interactive examples for notifications, alerts, feedback, and communication scenarios.'
});
