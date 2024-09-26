import React from 'react';
import { CardBase } from './CardBase';
import type { StoryObj, Meta } from '@storybook/react';

const Custom: React.FC<React.ComponentProps<'div'>> = props => (
    <div {...props}>
        {`Custom `}
        {props.children}
    </div>
);

const meta: Meta<typeof CardBase<any>> = {
    title: 'components/cards/CardBase',
    component: CardBase,
    argTypes: {
        as: {
            options: ['span', 'div', 'custom'],
            mapping: {
                div: 'div',
                span: 'span',
                custom: Custom,
            },
        },
    },
};
export default meta;

type Story = StoryObj<typeof CardBase<any>>;

export const Standard: Story = {
    args: {
        as: 'div',
        shadow: true,
    },
    render: args => (
        <CardBase {...args}>Dette er basisen for alle kort</CardBase>
    ),
};
