import React from 'react';
import type { StoryObj, Meta } from '@storybook/react';
import { ToggleSwitch } from './ToggleSwitch';

const meta: Meta<typeof ToggleSwitch> = {
    title: 'Komponenter/Form/ToggleSwitch',
    component: ToggleSwitch,
};
export default meta;

type Story = StoryObj<typeof ToggleSwitch>;

export const Standard: Story = {
    args: {
        children: 'Jeg vil gjerne ha reklame',
    },
    render: function Render(args) {
        const [checked, setChecked] = React.useState(true);
        return (
            <ToggleSwitch
                {...args}
                checked={checked}
                onChange={e => setChecked(e.target.checked)}
            />
        );
    },
};

export const HideOnOff: Story = {
    args: { ...Standard.args, hideOnOff: true },
    render: function Render(args) {
        const [checked, setChecked] = React.useState(true);
        return (
            <ToggleSwitch
                {...args}
                checked={checked}
                onChange={e => setChecked(e.target.checked)}
            />
        );
    },
};

export const Description: Story = {
    args: { ...Standard.args, description: 'Send meg spam' },
    render: function Render(args) {
        const [checked, setChecked] = React.useState(true);
        return (
            <ToggleSwitch
                {...args}
                checked={checked}
                onChange={e => setChecked(e.target.checked)}
            />
        );
    },
};
