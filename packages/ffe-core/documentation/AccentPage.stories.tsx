import { PrimaryButton } from '@sb1/ffe-buttons-react';
import { Heading1 } from '@sb1/ffe-core-react';
import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';

const meta: Meta = {
    title: 'Pages/Accent',
};
export default meta;

type Story = StoryObj;

export const Standard: Story = {
    render: () => (
        <div>
            <div>
                <Heading1>Test</Heading1>
                <PrimaryButton>Knapp</PrimaryButton>
            </div>
            <div
                className="ffe-accent-mode"
                style={{
                    backgroundColor: 'var(--ffe-color-background-default)',
                }}
            >
                <Heading1>Test</Heading1>
                <PrimaryButton>Knapp</PrimaryButton>
            </div>
            <div>
                <Heading1>Test</Heading1>
                <PrimaryButton>Knapp</PrimaryButton>
            </div>
        </div>
    ),
};
