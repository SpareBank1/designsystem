import type { StoryObj, Meta } from '@storybook/react';
import { Accordion } from './Accordion';
import { AccordionItem } from './AccordionItem';
import { createLiveCodeStory } from '../../../.storybook/shared/LiveCodeEditor';

const meta: Meta<typeof Accordion> = {
    title: 'Komponenter/Accordion/Live Code Editor (Shared)',
    component: Accordion,
    parameters: {
        docs: {
            description: {
                component: 'Eksempel på bruk av den delte live code editor komponenten.',
            },
        },
    },
};

export default meta;

type Story = StoryObj<typeof Accordion>;

// Define templates using the new structure
const accordionTemplates = {
    simple: {
        name: 'Enkelt',
        icon: '📝',
        code: `<Accordion headingLevel={2}>
    <AccordionItem heading="Enkelt eksempel">
        Dette er et enkelt accordion-eksempel som fungerer!
    </AccordionItem>
</Accordion>`
    },
    multiple: {
        name: 'Flere elementer',
        icon: '📚',
        code: `<Accordion headingLevel={2}>
    <AccordionItem heading="Første seksjon">
        Innhold i første seksjon.
    </AccordionItem>
    <AccordionItem heading="Andre seksjon" isOpen={true}>
        Denne er åpen som standard.
    </AccordionItem>
    <AccordionItem heading="Tredje seksjon">
        Mer innhold her.
    </AccordionItem>
</Accordion>`
    },
    interactive: {
        name: 'Interaktiv',
        icon: '⚡',
        code: `function InteractiveExample() {
    const [count, setCount] = useState(0);
    return (
        <Accordion headingLevel={2}>
            <AccordionItem heading="Interaktiv eksempel">
                <div>
                    <p>Du har klikket {count} ganger</p>
                    <button 
                        onClick={() => setCount(count + 1)}
                        style={{
                            padding: '8px 16px',
                            backgroundColor: '#007bff',
                            color: 'white',
                            border: 'none',
                            borderRadius: '4px',
                            cursor: 'pointer'
                        }}
                    >
                        Klikk meg
                    </button>
                </div>
            </AccordionItem>
        </Accordion>
    );
}

<InteractiveExample />`
    },
    styled: {
        name: 'Stylet',
        icon: '🎨',
        code: `<Accordion headingLevel={2}>
    <AccordionItem heading="Stylet eksempel">
        <div style={{ 
            padding: '16px', 
            backgroundColor: 'var(--ffe-color-background-subtle)', 
            borderRadius: '4px',
            border: '1px solid var(--ffe-color-border-primary-subtle)'
        }}>
            <h4 style={{ margin: '0 0 8px 0' }}>Du kan legge til HTML!</h4>
            <p style={{ margin: '0 0 12px 0' }}>Dette er et avansert eksempel med ffe-farger.</p>
            <button 
                onClick={() => alert('Knapp klikket!')}
                style={{
                    padding: '8px 16px',
                    backgroundColor: 'var(--ffe-color-background-primary)',
                    color: 'white',
                    border: 'none',
                    borderRadius: '4px',
                    cursor: 'pointer'
                }}
            >
                Klikk meg
            </button>
        </div>
    </AccordionItem>
</Accordion>`
    }
};

export const LiveCodeEditorShared: Story = createLiveCodeStory(Accordion, {
    templates: accordionTemplates,
    additionalComponents: {
        AccordionItem
    },
    defaultTemplate: 'simple',
    title: 'Accordion Live Code Editor',
    description: 'Interaktiv editor for Accordion komponenten med alle templates og funksjonalitet.'
}); 