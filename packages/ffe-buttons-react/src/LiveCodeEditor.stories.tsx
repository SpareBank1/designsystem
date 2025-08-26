import { CardBase } from '@sb1/ffe-cards-react';
import { Icon } from '@sb1/ffe-icons-react';
import type { Meta, StoryObj } from '@storybook/react';
import { createLiveCodeStory } from '../../../.storybook/shared/LiveCodeEditor';
import { ActionButton } from './ActionButton';
import { ButtonGroup } from './ButtonGroup';
import { PrimaryButton } from './PrimaryButton';
import { SecondaryButton } from './SecondaryButton';
import { TertiaryButton } from './TertiaryButton';

const meta: Meta<typeof PrimaryButton> = {
    title: 'Komponenter/Buttons/Live Code Editor',
    component: PrimaryButton,
    parameters: {
        docs: {
            description: {
                component:
                    'Interaktiv live code editor for alle Button komponenter. Test PrimaryButton, SecondaryButton, ActionButton, TertiaryButton og mer!',
            },
        },
    },
};

export default meta;

type Story = StoryObj<typeof PrimaryButton>;

// Define comprehensive templates for all Button components
const buttonTemplates = {
    simple: {
        name: 'Enkelt',
        code: `<PrimaryButton>
    Klikk meg
</PrimaryButton>`,
    },
    variants: {
        name: 'Button typer',
        code: `<div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
    <PrimaryButton>Primary</PrimaryButton>
    <SecondaryButton>Secondary</SecondaryButton>
    <ActionButton>Action</ActionButton>
    <TertiaryButton>Tertiary</TertiaryButton>
</div>`,
    },
    sizes: {
        name: 'Størrelser',
        code: `<div style={{ display: 'flex', gap: '16px', flexDirection: 'column' }}>
    <div style={{ display: 'flex', gap: '12px', alignItems: 'center', flexWrap: 'wrap' }}>
        <PrimaryButton size="sm">Liten</PrimaryButton>
        <PrimaryButton size="md">Medium (default)</PrimaryButton>
        <PrimaryButton size="lg">Stor</PrimaryButton>
    </div>
    
    <div style={{ display: 'flex', gap: '12px', alignItems: 'center', flexWrap: 'wrap' }}>
        <SecondaryButton size="sm">Liten</SecondaryButton>
        <SecondaryButton size="md">Medium</SecondaryButton>
        <SecondaryButton size="lg">Stor</SecondaryButton>
    </div>
    
    <div style={{ display: 'flex', gap: '12px', alignItems: 'center', flexWrap: 'wrap' }}>
        <ActionButton size="sm">Liten</ActionButton>
        <ActionButton size="md">Medium</ActionButton>
        <ActionButton size="lg">Stor</ActionButton>
    </div>
</div>`,
    },
    states: {
        name: 'Tilstander',
        code: `<div style={{ display: 'flex', gap: '16px', flexDirection: 'column' }}>
    <div>
        <h4 style={{ margin: '0 0 12px 0' }}>Primary Button</h4>
        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
            <PrimaryButton>Normal</PrimaryButton>
            <PrimaryButton isDisabled>Deaktivert</PrimaryButton>
            <PrimaryButton isLoading>Laster...</PrimaryButton>
        </div>
    </div>
    
    <div>
        <h4 style={{ margin: '0 0 12px 0' }}>Secondary Button</h4>
        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
            <SecondaryButton>Normal</SecondaryButton>
            <SecondaryButton isDisabled>Deaktivert</SecondaryButton>
            <SecondaryButton isLoading>Laster...</SecondaryButton>
        </div>
    </div>
    
    <div>
        <h4 style={{ margin: '0 0 12px 0' }}>Action Button</h4>
        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
            <ActionButton>Normal</ActionButton>
            <ActionButton isDisabled>Deaktivert</ActionButton>
            <ActionButton isLoading>Laster...</ActionButton>
        </div>
    </div>
</div>`,
    },
    icons: {
        name: 'Med ikoner',
        code: `<div style={{ display: 'flex', gap: '16px', flexDirection: 'column' }}>
    <div>
        <h4 style={{ margin: '0 0 12px 0' }}>Ikoner til venstre</h4>
        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
            <PrimaryButton leftIcon={<Icon fileUrl="./icons/open/300/md/add.svg" size="sm" ariaLabel="send" />}>
                Send e-post
            </PrimaryButton>
            <SecondaryButton leftIcon={<Icon fileUrl="./icons/open/300/md/house.svg" size="sm" ariaLabel="åpne" />}>
                Åpne fil
            </SecondaryButton>
            <ActionButton leftIcon={<Icon fileUrl="./icons/open/300/md/star.svg" size="sm" ariaLabel="lagre" />}>
                Lagre
            </ActionButton>
        </div>
    </div>
    
    <div>
        <h4 style={{ margin: '0 0 12px 0' }}>Ikoner til høyre</h4>
        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
            <PrimaryButton rightIcon={<Icon fileUrl="./icons/open/300/md/expand_more.svg" size="sm" ariaLabel="neste" />}>
                Neste
            </PrimaryButton>
            <SecondaryButton rightIcon={<Icon fileUrl="./icons/open/300/md/add.svg" size="sm" ariaLabel="lenke" />}>
                Ekstern lenke
            </SecondaryButton>
            <ActionButton rightIcon={<Icon fileUrl="./icons/open/300/md/expand_more.svg" size="sm" ariaLabel="last ned" />}>
                Last ned
            </ActionButton>
        </div>
    </div>
    
    <div>
        <h4 style={{ margin: '0 0 12px 0' }}>Kun ikoner</h4>
        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
            <PrimaryButton iconOnly ariaLabel="Lukk">
                <Icon fileUrl="./icons/open/300/md/add.svg" size="sm" ariaLabel="lukk" />
            </PrimaryButton>
            <SecondaryButton iconOnly ariaLabel="Innstillinger">
                <Icon fileUrl="./icons/open/300/md/star.svg" size="sm" ariaLabel="innstillinger" />
            </SecondaryButton>
            <ActionButton iconOnly ariaLabel="Mer">
                <Icon fileUrl="./icons/open/300/md/expand_more.svg" size="sm" ariaLabel="mer" />
            </ActionButton>
        </div>
    </div>
</div>`,
    },
    buttonGroups: {
        name: 'Button grupper',
        code: `<div style={{ display: 'flex', gap: '24px', flexDirection: 'column' }}>
    <div>
        <h4 style={{ margin: '0 0 12px 0' }}>Standard gruppe</h4>
        <ButtonGroup>
            <PrimaryButton>Primær handling</PrimaryButton>
            <SecondaryButton>Sekundær handling</SecondaryButton>
            <TertiaryButton>Avbryt</TertiaryButton>
        </ButtonGroup>
    </div>
    
    <div>
        <h4 style={{ margin: '0 0 12px 0' }}>Verktøylinje</h4>
        <ButtonGroup>
            <ActionButton leftIcon={<Icon fileUrl="./icons/open/300/md/add.svg" size="sm" ariaLabel="rediger" />}>
                Rediger
            </ActionButton>
            <ActionButton leftIcon={<Icon fileUrl="./icons/open/300/md/star.svg" size="sm" ariaLabel="kopier" />}>
                Kopier
            </ActionButton>
            <ActionButton leftIcon={<Icon fileUrl="./icons/open/300/md/expand_more.svg" size="sm" ariaLabel="slett" />}>
                Slett
            </ActionButton>
        </ButtonGroup>
    </div>
    
    <div>
        <h4 style={{ margin: '0 0 12px 0' }}>Navigasjon</h4>
        <ButtonGroup>
            <SecondaryButton leftIcon={<Icon fileUrl="./icons/open/300/md/expand_more.svg" size="sm" ariaLabel="forrige" />}>
                Forrige
            </SecondaryButton>
            <SecondaryButton>
                Side 1 av 5
            </SecondaryButton>
            <SecondaryButton rightIcon={<Icon fileUrl="./icons/open/300/md/expand_more.svg" size="sm" ariaLabel="neste" />}>
                Neste
            </SecondaryButton>
        </ButtonGroup>
    </div>
</div>`,
    },
};

export const LiveCodeEditor: Story = createLiveCodeStory(PrimaryButton, {
    templates: buttonTemplates,
    additionalComponents: {
        PrimaryButton,
        SecondaryButton,
        ActionButton,
        TertiaryButton,
        ButtonGroup,
        CardBase,
        Icon,
    },
    defaultTemplate: 'simple',
    title: 'Button Components Live Code Editor',
});
