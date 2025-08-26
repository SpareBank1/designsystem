import type { StoryObj, Meta } from '@storybook/react';
import { Input } from './Input';
import { TextArea } from './TextArea';
import { InputGroup } from './InputGroup';
import { Checkbox } from './Checkbox';
import { RadioButton } from './RadioButton';
import { ToggleSwitch } from './ToggleSwitch';
import { ErrorFieldMessage } from './message';
import { createLiveCodeStory } from '../../../.storybook/shared/LiveCodeEditor';

const meta: Meta<typeof Input> = {
    title: 'Komponenter/Form/Live Code Editor',
    component: Input,
    parameters: {
        docs: {
            description: {
                component: 'Interaktiv live code editor for alle Form komponenter. Test Input, TextArea, Checkbox, Dropdown og mer!',
            },
        },
    },
};

export default meta;

type Story = StoryObj<typeof Input>;

// Define comprehensive templates for all Form components
const formTemplates = {
    basicInputs: {
        name: 'Grunnleggende input',
        code: `<div>
    <InputGroup label="Navn">
        <Input placeholder="Skriv ditt navn" />
    </InputGroup>
    
    <InputGroup label="E-post">
        <Input type="email" placeholder="din@epost.no" />
    </InputGroup>
    
    <InputGroup label="Telefon">
        <Input type="tel" placeholder="+47 123 45 678" />
    </InputGroup>
</div>`
    },
    textArea: {
        name: 'TextArea',
        code: `<div style={{ display: 'flex', gap: '16px', flexDirection: 'column' }}>
    <InputGroup label="Kort beskrivelse">
        <TextArea 
            placeholder="Kort beskrivelse..."
            rows={3}
        />
    </InputGroup>
    
    <InputGroup 
        label="Detaljert beskrivelse"
        description="Beskriv så detaljert som mulig"
    >
        <TextArea 
            placeholder="Detaljert beskrivelse med mer plass..."
            rows={6}
        />
    </InputGroup>
</div>`
    },
    checkboxes: {
        name: 'Checkboxes',
        code: `<div style={{ display: 'flex', gap: '16px', flexDirection: 'column' }}>
    <fieldset style={{ border: 'none', padding: 0, margin: 0 }}>
        <legend style={{ fontWeight: 'bold', marginBottom: '12px' }}>Velg interesser:</legend>
        <div style={{ display: 'flex', gap: '12px', flexDirection: 'column' }}>
            <Checkbox>
                Sport og trening
            </Checkbox>
            <Checkbox>
                Musikk og kultur
            </Checkbox>
            <Checkbox>
                Teknologi
            </Checkbox>
            <Checkbox>
                Reise og opplevelser
            </Checkbox>
        </div>
    </fieldset>
    
    <InputGroup label="Godkjenninger">
        <div style={{ display: 'flex', gap: '8px', flexDirection: 'column' }}>
            <Checkbox>
                Jeg godtar vilkårene
            </Checkbox>
            <Checkbox>
                Jeg ønsker å motta nyhetsbrev
            </Checkbox>
        </div>
    </InputGroup>
</div>`
    },
    radioButtons: {
        name: 'Radio buttons',
        code: `<div style={{ display: 'flex', gap: '16px', flexDirection: 'column' }}>
    <fieldset style={{ border: 'none', padding: 0, margin: 0 }}>
        <legend style={{ fontWeight: 'bold', marginBottom: '12px' }}>Velg betalingsmåte:</legend>
        <div style={{ display: 'flex', gap: '12px', flexDirection: 'column' }}>
            <RadioButton name="payment" value="card">
                💳 Bankkort
            </RadioButton>
            <RadioButton name="payment" value="invoice">
                📄 Faktura
            </RadioButton>
            <RadioButton name="payment" value="vipps">
                📱 Vipps
            </RadioButton>
        </div>
    </fieldset>
    
    <fieldset style={{ border: 'none', padding: 0, margin: 0 }}>
        <legend style={{ fontWeight: 'bold', marginBottom: '12px' }}>Leveringsmåte:</legend>
        <div style={{ display: 'flex', gap: '12px', flexDirection: 'column' }}>
            <RadioButton name="delivery" value="home">
                🏠 Hjemlevering
            </RadioButton>
            <RadioButton name="delivery" value="pickup">
                🏪 Henting i butikk
            </RadioButton>
            <RadioButton name="delivery" value="post">
                📮 Postkontor
            </RadioButton>
        </div>
    </fieldset>
</div>`
    }
};

export const LiveCodeEditor: Story = createLiveCodeStory(Input, {
    templates: formTemplates,
    additionalComponents: {
        Input,
        TextArea,
        InputGroup,
        Checkbox,
        RadioButton,
        ToggleSwitch,
        ErrorFieldMessage
    },
    defaultTemplate: 'basicInputs',
    title: 'Form Components Live Code Editor',
    description: 'Interaktiv editor for alle Form komponenter. Test Input, TextArea, Checkbox, RadioButton, ToggleSwitch og mer i ett samlet grensesnitt!'
});
