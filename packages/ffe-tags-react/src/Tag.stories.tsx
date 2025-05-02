import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Tag } from './Tag';
import { Icon } from '@sb1/ffe-icons-react';

const meta: Meta<typeof Tag> = {
    title: 'Komponenter/Tags',
    component: Tag,
};
export default meta;

type Story = StoryObj<typeof Tag>;

export const Standard: Story = {
    args: {
        variant: 'info',
    },
    render: args => <Tag {...args}>Informasjon</Tag>,
};

const warning =
    'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMjAiIHZpZXdCb3g9IjAgLTk2MCA5NjAgOTYwIiB3aWR0aD0iMjAiPjxwYXRoIGQ9Ik0xMTEuOTEtMTQ0cS0xMC45MSAwLTE5LjEzLTQuOTVRODQuNTctMTUzLjkgODAtMTYycS01LTgtNC41LTE4dDUuNS0xOWwzNjgtNjE0cTUtOSAxMy41My0xMyA4LjUyLTQgMTcuNS00IDguOTcgMCAxNy40NyA0IDguNSA0IDEzLjUgMTNsMzY4IDYxNHE1IDkgNS41IDE5dC00LjUgMThxLTUgOC0xMyAxM3QtMTguOTEgNUgxMTEuOTFaTTE3NS0yMTZoNjEwTDQ4MC03MjQgMTc1LTIxNlptMzA0Ljc5LTQ4cTE1LjIxIDAgMjUuNzEtMTAuMjl0MTAuNS0yNS41cTAtMTUuMjEtMTAuMjktMjUuNzF0LTI1LjUtMTAuNXEtMTUuMjEgMC0yNS43MSAxMC4yOXQtMTAuNSAyNS41cTAgMTUuMjEgMTAuMjkgMjUuNzF0MjUuNSAxMC41Wm0wLTEyMHExNS4yMSAwIDI1LjcxLTEwLjM1VDUxNi00MjB2LTEyMHEwLTE1LjMtMTAuMjktMjUuNjVRNDk1LjQyLTU3NiA0ODAuMjEtNTc2dC0yNS43MSAxMC4zNVE0NDQtNTU1LjMgNDQ0LTU0MHYxMjBxMCAxNS4zIDEwLjI5IDI1LjY1UTQ2NC41OC0zODQgNDc5Ljc5LTM4NFptLjIxLTg2WiIvPjwvc3ZnPg==';

export const WithIcon: Story = {
    args: {
        variant: 'critical',
    },
    render: args => (
        <Tag {...args}>
            <Icon fileUrl={warning} size="sm" />
            Ikke betalt
        </Tag>
    ),
};

export const Emphasis: Story = {
    args: {
        type: 'emphasis',
    },
    render: args => {
        return (
            <div>
                <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                    <Tag {...args} variant="info">
                        Informasjon
                    </Tag>
                    <Tag {...args} variant="warning">
                        Advarsel
                    </Tag>
                    <Tag {...args} variant="critical">
                        Feilmelding
                    </Tag>
                    <Tag {...args} variant="success">
                        Bekreftelse
                    </Tag>
                    <Tag {...args} variant="neutral">
                        Nøytral
                    </Tag>
                    <Tag {...args} variant="tip">
                        Tips
                    </Tag>
                </div>
            </div>
        );
    },
};

export const Subtle: Story = {
    args: {
        type: 'subtle',
    },
    render: args => {
        return (
            <div>
                <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                    <Tag {...args} variant="info">
                        Informasjon
                    </Tag>
                    <Tag {...args} variant="warning">
                        Advarsel
                    </Tag>
                    <Tag {...args} variant="critical">
                        Feilmelding
                    </Tag>
                    <Tag {...args} variant="success">
                        Bekreftelse
                    </Tag>
                    <Tag {...args} variant="neutral">
                        Nøytral
                    </Tag>
                    <Tag {...args} variant="tip">
                        Tips
                    </Tag>
                </div>
            </div>
        );
    },
};
