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

// Define comprehensive templates for all message components
const messagesTemplates = {
    simple: {
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
                ✅ Kontoen din er opprettet og klar til bruk!
            </SystemMessage>
            
            <SystemMessage type="info">
                ℹ️ Ny funksjonalitet er tilgjengelig i innstillingene.
            </SystemMessage>
            
            <SystemMessage type="warning">
                ⚠️ Passordet ditt utløper om 7 dager.
            </SystemMessage>
            
            <SystemMessage type="error">
                ❌ Kunne ikke lagre endringene. Prøv igjen senere.
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
    },
    interactive: {
        name: 'Interaktiv',
        icon: '⚡',
        code: `function InteractiveMessages() {
    const [messages, setMessages] = useState([]);
    const [messageText, setMessageText] = useState('');
    const [messageType, setMessageType] = useState('info');
    
    const addMessage = () => {
        if (!messageText.trim()) return;
        
        const newMessage = {
            id: Date.now(),
            text: messageText,
            type: messageType,
            timestamp: new Date().toLocaleTimeString()
        };
        
        setMessages(prev => [newMessage, ...prev]);
        setMessageText('');
    };
    
    const removeMessage = (id) => {
        setMessages(prev => prev.filter(msg => msg.id !== id));
    };
    
    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', maxWidth: '600px' }}>
            <div style={{ 
                padding: '16px', 
                backgroundColor: 'var(--ffe-color-background-subtle)', 
                borderRadius: '8px' 
            }}>
                <h4>Legg til ny melding</h4>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                    <input
                        type="text"
                        value={messageText}
                        onChange={(e) => setMessageText(e.target.value)}
                        placeholder="Skriv inn meldingstekst..."
                        style={{
                            padding: '8px 12px',
                            border: '1px solid var(--ffe-color-border-subtle)',
                            borderRadius: '4px'
                        }}
                    />
                    
                    <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                        <select
                            value={messageType}
                            onChange={(e) => setMessageType(e.target.value)}
                            style={{
                                padding: '8px',
                                border: '1px solid var(--ffe-color-border-subtle)',
                                borderRadius: '4px'
                            }}
                        >
                            <option value="success">Suksess</option>
                            <option value="info">Info</option>
                            <option value="warning">Advarsel</option>
                            <option value="error">Feil</option>
                        </select>
                        
                        <button
                            onClick={addMessage}
                            disabled={!messageText.trim()}
                            style={{
                                padding: '8px 16px',
                                backgroundColor: messageText.trim() ? 'var(--ffe-color-background-primary)' : 'var(--ffe-color-background-disabled)',
                                color: 'white',
                                border: 'none',
                                borderRadius: '4px',
                                cursor: messageText.trim() ? 'pointer' : 'not-allowed'
                            }}
                        >
                            Legg til
                        </button>
                    </div>
                </div>
            </div>
            
            <div>
                <h4>Aktive meldinger ({messages.length})</h4>
                {messages.length === 0 ? (
                    <SystemMessage type="info">
                        Ingen meldinger å vise. Legg til en melding ovenfor.
                    </SystemMessage>
                ) : (
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                        {messages.map(message => (
                            <div key={message.id} style={{ position: 'relative' }}>
                                <SystemMessage type={message.type}>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                        <span>{message.text}</span>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                                            <small style={{ opacity: 0.7 }}>{message.timestamp}</small>
                                            <button
                                                onClick={() => removeMessage(message.id)}
                                                style={{
                                                    background: 'none',
                                                    border: 'none',
                                                    fontSize: '16px',
                                                    cursor: 'pointer',
                                                    opacity: 0.7,
                                                    padding: '4px'
                                                }}
                                                title="Fjern melding"
                                            >
                                                ×
                                            </button>
                                        </div>
                                    </div>
                                </SystemMessage>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}

<InteractiveMessages />`
    },
    messageBox: {
        name: 'MessageBox',
        icon: '📦',
        code: `function MessageBoxDemo() {
    const [selectedMessage, setSelectedMessage] = useState(null);
    
    const messages = [
        {
            id: 1,
            type: 'success',
            title: 'Betaling fullført',
            content: 'Din betaling på 1 250 kr er behandlet og kvittering er sendt til din e-post.',
            action: 'Se kvittering'
        },
        {
            id: 2,
            type: 'warning',
            title: 'Kontoverifisering påkrevd',
            content: 'For å fortsette å bruke alle funksjoner må du verifisere kontoen din innen 3 dager.',
            action: 'Verifiser nå'
        },
        {
            id: 3,
            type: 'info',
            title: 'Nye funksjoner tilgjengelig',
            content: 'Vi har lansert nye funksjoner som kan gjøre hverdagen din enklere.',
            action: 'Utforsk'
        }
    ];
    
    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', maxWidth: '600px' }}>
            <h4>Velg en melding for å se detaljer</h4>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {messages.map(message => (
                    <MessageBox
                        key={message.id}
                        type={message.type}
                        onClick={() => setSelectedMessage(message)}
                        style={{
                            cursor: 'pointer',
                            transform: selectedMessage?.id === message.id ? 'scale(1.02)' : 'scale(1)',
                            transition: 'transform 0.2s ease'
                        }}
                    >
                        <MessageHeader>
                            {message.title}
                        </MessageHeader>
                        <p style={{ margin: '8px 0' }}>{message.content}</p>
                        <button
                            onClick={(e) => {
                                e.stopPropagation();
                                alert(\`Utfører: \${message.action}\`);
                            }}
                            style={{
                                padding: '8px 16px',
                                backgroundColor: 'var(--ffe-color-background-primary)',
                                color: 'white',
                                border: 'none',
                                borderRadius: '4px',
                                cursor: 'pointer',
                                marginTop: '8px'
                            }}
                        >
                            {message.action}
                        </button>
                    </MessageBox>
                ))}
            </div>
            
            {selectedMessage && (
                <div style={{ 
                    padding: '16px', 
                    backgroundColor: 'var(--ffe-color-background-subtle)', 
                    borderRadius: '8px',
                    marginTop: '16px'
                }}>
                    <h5>Valgt melding:</h5>
                    <p><strong>Type:</strong> {selectedMessage.type}</p>
                    <p><strong>Tittel:</strong> {selectedMessage.title}</p>
                </div>
            )}
        </div>
    );
}

<MessageBoxDemo />`
    },
    showcase: {
        name: 'Showcase',
        icon: '🏆',
        code: `function MessagesShowcase() {
    const [notifications] = useState([
        { id: 1, text: 'Ny melding fra kundeservice', read: false, time: '10:30' },
        { id: 2, text: 'Kontoutskrift for mars er klar', read: true, time: '09:15' },
        { id: 3, text: 'Påminnelse: Møte i morgen kl 14:00', read: false, time: '08:45' }
    ]);
    
    return (
        <div style={{ 
            padding: '24px', 
            backgroundColor: 'var(--ffe-color-background-subtle)', 
            borderRadius: '8px',
            maxWidth: '700px'
        }}>
            <div style={{ textAlign: 'center', marginBottom: '32px' }}>
                <h2 style={{ margin: '0 0 8px 0' }}>💬 Messages Showcase</h2>
                <p style={{ margin: 0, color: 'var(--ffe-color-text-subtle)' }}>
                    Utforsk alle meldingskomponenter i praktiske scenarioer
                </p>
            </div>
            
            <div style={{ 
                backgroundColor: 'white', 
                borderRadius: '8px', 
                padding: '24px'
            }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                    <div>
                        <h3>📊 System Dashboard</h3>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                            <SystemMessage type="success">
                                ✅ Alle systemer kjører normalt
                            </SystemMessage>
                            
                            <MessageBox type="info">
                                <MessageHeader>Planlagt vedlikehold</MessageHeader>
                                <p>Systemvedlikehold er planlagt til søndag 02:00-04:00.</p>
                            </MessageBox>
                        </div>
                    </div>
                    
                    <div>
                        <h3>🔔 Varselssenter</h3>
                        <MessageList>
                            {notifications.map(notification => (
                                <div
                                    key={notification.id}
                                    style={{
                                        padding: '12px 16px',
                                        backgroundColor: notification.read ? 'white' : 'var(--ffe-color-background-info-subtle)',
                                        border: '1px solid var(--ffe-color-border-subtle)',
                                        borderRadius: '4px',
                                        marginBottom: '8px',
                                        display: 'flex',
                                        justifyContent: 'space-between',
                                        alignItems: 'center'
                                    }}
                                >
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                                        <div style={{
                                            width: '8px',
                                            height: '8px',
                                            borderRadius: '50%',
                                            backgroundColor: notification.read ? 'transparent' : 'var(--ffe-color-background-primary)'
                                        }} />
                                        <span style={{
                                            fontWeight: notification.read ? 'normal' : 'bold'
                                        }}>
                                            {notification.text}
                                        </span>
                                    </div>
                                    <small style={{ color: 'var(--ffe-color-text-subtle)' }}>
                                        {notification.time}
                                    </small>
                                </div>
                            ))}
                        </MessageList>
                        
                        <ContextMessage type="info" style={{ marginTop: '16px' }}>
                            Du har {notifications.filter(n => !n.read).length} nye varsler siden sist besøk.
                        </ContextMessage>
                    </div>
                </div>
            </div>
        </div>
    );
}

<MessagesShowcase />`
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
    defaultTemplate: 'simple',
    title: 'Messages Live Code Editor',
    description: 'Comprehensive live code editor for all message components in the FFE Messages package. Explore SystemMessage, ContextMessage, MessageBox, MessageHeader, and MessageList with interactive examples for notifications, alerts, feedback, and communication scenarios.'
});
