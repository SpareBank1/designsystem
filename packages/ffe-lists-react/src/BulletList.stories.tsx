import React from 'react';
import { BulletList } from './BulletList';
import { BulletListItem } from './BulletListItem';
import type { StoryObj, Meta } from '@storybook/react';

const meta: Meta<typeof BulletList> = {
    title: 'components/lists/BulletList',
    component: BulletList,
    subcomponents: { BulletListItem },
    tags: ['autodocs'],
};
export default meta;

type Story = StoryObj<typeof BulletList>;

export const Standard: Story = {
    args: {
        condensed: false,
    },
    render: args => (
        <div>
            <h3 className="ffe-h4">Våre forsikringer</h3>
            <BulletList {...args}>
                <BulletListItem>Bilforsikring</BulletListItem>
                <BulletListItem>Reiseforsikring</BulletListItem>
                <BulletListItem>Innboforsikring</BulletListItem>
            </BulletList>
        </div>
    ),
};
