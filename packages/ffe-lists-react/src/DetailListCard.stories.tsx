import React, { FunctionComponent } from 'react';
import { DetailListCard } from './DetailListCard';
import { DetailListCardItem } from './DetailListCardItem';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof DetailListCard> = {
    title: 'Komponenter/Lists/DetailListCard',
    component: DetailListCard,
    subcomponents: {
        DetailListCardItem: DetailListCardItem as FunctionComponent<unknown>,
    },
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
