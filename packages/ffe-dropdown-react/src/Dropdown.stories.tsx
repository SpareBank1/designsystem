import React from 'react';
import { Dropdown } from './Dropdown';
import { InputGroup } from '@sb1/ffe-form-react';
import type { StoryObj, Meta } from '@storybook/react';

const meta: Meta<typeof Dropdown> = {
    title: 'Komponenter/Dropdown/Dropdown',
    component: Dropdown,
};
export default meta;

type Story = StoryObj<typeof Dropdown>;

export const Standard: Story = {
    args: {
        inline: false,
    },
    render: args => {
        return (
            <InputGroup label="Måned">
                <Dropdown {...args}>
                    <option value="jan">Januar</option>
                    <option value="feb">Februar</option>
                    <option value="mar">Mars</option>
                    <option value="apr">April</option>
                    <option value="mai">Mai</option>
                </Dropdown>
            </InputGroup>
        );
    },
};

export const AriaInvalid: Story = {
    args: {
        inline: false,
    },
    render: args => {
        return (
            <InputGroup label="Måned">
                {inputProps => (
                    <Dropdown
                        {...args}
                        {...inputProps}
                        aria-invalid="true"
                        test-id={'test'}
                    >
                        <option value="jan">Januar</option>
                        <option value="feb">Februar</option>
                        <option value="mar">Mars</option>
                        <option value="apr">April</option>
                        <option value="mai">Mai</option>
                    </Dropdown>
                )}
            </InputGroup>
        );
    },
};

export const WithDescription: Story = {
    args: {
        inline: false,
    },
    render: args => {
        return (
            <InputGroup 
                label="Måned"
                description='Velg en måned for fakturering'>
                <Dropdown {...args}>
                    <option value="jan">Januar</option>
                    <option value="feb">Februar</option>
                    <option value="mar">Mars</option>
                    <option value="apr">April</option>
                    <option value="mai">Mai</option>
                </Dropdown>
            </InputGroup>
        );
    },
};
