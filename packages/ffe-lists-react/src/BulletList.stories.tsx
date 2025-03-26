import React, { FunctionComponent } from 'react';
import { BulletList } from './BulletList';
import { BulletListItem } from './BulletListItem';
import type { StoryObj, Meta } from '@storybook/react';

const meta: Meta<typeof BulletList> = {
    title: 'Komponenter/Lists/BulletList',
    component: BulletList,
    subcomponents: {
        BulletListItem: BulletListItem as FunctionComponent<unknown>,
    },
    tags: ['autodocs'],
};
export default meta;

type Story = StoryObj<typeof BulletList>;

export const Standard: Story = {
    args: {},
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

export const Condensed: Story = {
    args: {
        condensed: true,
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
