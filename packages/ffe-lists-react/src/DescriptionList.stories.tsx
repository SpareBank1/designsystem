import React from 'react';
import { DescriptionList } from './DescriptionList';
import { DescriptionListTerm } from './DescriptionListTerm';
import { DescriptionListDescription } from './DescriptionListDescription';
import type { StoryObj, Meta } from '@storybook/react';

const meta: Meta<typeof DescriptionList> = {
    title: 'components/lists/DescriptionList',
    component: DescriptionList,
    subcomponents: { DescriptionListTerm, DescriptionListDescription },
    tags: ['autodocs'],
    argTypes: {
        size: {
            options: ['md', 'lg', 'none'],
            mapping: {
                md: 'md',
                lg: 'lg',
                none: undefined,
            },
        },
    },
};
export default meta;

type Story = StoryObj<typeof DescriptionList>;

export const Standard: Story = {
    args: {
        horizontal: false,
        size: 'none',
    },
    render: args => (
        <div>
            <h3 className="ffe-h4">Personalia</h3>
            <DescriptionList {...args}>
                <DescriptionListTerm>Navn</DescriptionListTerm>
                <DescriptionListDescription>
                    Navn Navnesen
                </DescriptionListDescription>
                <DescriptionListTerm>Adresse</DescriptionListTerm>
                <DescriptionListDescription>
                    Husgata 14
                </DescriptionListDescription>
                <DescriptionListTerm>Postnummer og sted</DescriptionListTerm>
                <DescriptionListDescription>
                    1337 Sandvika
                </DescriptionListDescription>
            </DescriptionList>
        </div>
    ),
};
