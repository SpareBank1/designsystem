import React from 'react';
import { DescriptionListMultiCol } from './DescriptionListMultiCol';
import { DescriptionListTerm } from './DescriptionListTerm';
import { DescriptionListDescription } from './DescriptionListDescription';
import type { StoryObj, Meta } from '@storybook/react';

const meta: Meta<typeof DescriptionListMultiCol> = {
    title: 'components/lists/DescriptionListMultiCol',
    component: DescriptionListMultiCol,
    subcomponents: { DescriptionListTerm, DescriptionListDescription },
    tags: ['autodocs'],
};
export default meta;

type Story = StoryObj<typeof DescriptionListMultiCol>;

export const Standard: Story = {
    args: {},
    render: args => (
        <div>
            <h3 className="ffe-h4">Personalia</h3>
            <DescriptionListMultiCol {...args}>
                <DescriptionListTerm>Navn</DescriptionListTerm>
                <DescriptionListDescription>
                    Navn Navnesen
                </DescriptionListDescription>
                <DescriptionListTerm>Adresse</DescriptionListTerm>
                <DescriptionListDescription>
                    Husgata 14
                </DescriptionListDescription>
                <DescriptionListTerm>Postnummer</DescriptionListTerm>
                <DescriptionListDescription>0362</DescriptionListDescription>
                <DescriptionListTerm>Adresse</DescriptionListTerm>
                <DescriptionListDescription>Oslo</DescriptionListDescription>
            </DescriptionListMultiCol>
        </div>
    ),
};
