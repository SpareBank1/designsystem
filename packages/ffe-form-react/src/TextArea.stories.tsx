import React from 'react';
import type { StoryObj, Meta } from '@storybook/react';
import { TextArea } from './TextArea';
import { InputGroup } from './InputGroup';

const meta: Meta<typeof TextArea> = {
    title: 'components/form/TextArea',
    component: TextArea,
};
export default meta;

type Story = StoryObj<typeof TextArea>;

export const Standard: Story = {
    args: {},
    render: function Render(args) {
        return (
            <InputGroup label="Beskriv skaden">
                <TextArea {...args} />
            </InputGroup>
        );
    },
};
