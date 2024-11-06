import React from 'react';
import { ButtonGroup } from './ButtonGroup';
import { PrimaryButton } from './PrimaryButton';
import { SecondaryButton } from './SecondaryButton';
import { TertiaryButton } from './TertiaryButton';
import type { StoryObj, Meta } from '@storybook/react';

const meta: Meta<typeof ButtonGroup> = {
    title: 'Komponenter/Buttons/ButtonGroup',
    component: ButtonGroup,
};
export default meta;

type Story = StoryObj<typeof ButtonGroup>;

export const Standard: Story = {
    args: {
        ariaLabel: 'Knappegruppe',
    },
    render: args => (
        <ButtonGroup {...args}>
            <SecondaryButton>Forrige</SecondaryButton>
            <PrimaryButton>Neste</PrimaryButton>
            <TertiaryButton>Avbryt</TertiaryButton>
        </ButtonGroup>
    ),
};
