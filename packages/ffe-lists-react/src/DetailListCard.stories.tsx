import React from 'react';
import { DetailListCard } from './DetailListCard';
import { DetailListCardItem } from './DetailListCardItem';
import type { StoryObj, Meta } from '@storybook/react';

const meta: Meta<typeof DetailListCard> = {
    title: 'components/lists/DetailListCard',
    component: DetailListCard,
    subcomponents: { DetailListCardItem },
    tags: ['autodocs'],
};
export default meta;

type Story = StoryObj<typeof DetailListCard>;

export const Standard: Story = {
    args: {},
    render: args => (
        <div>
            <DetailListCard {...args}>
                <DetailListCardItem label="Kontonavn" value="Daglig konto" />
                <DetailListCardItem label="Kontotype" value="Brukskonto" />
                <DetailListCardItem label="Kontonummer" value="1234 45 34554" />
                <DetailListCardItem label="Kontoeier" value="Ola Nordmann" />
            </DetailListCard>
        </div>
    ),
};
