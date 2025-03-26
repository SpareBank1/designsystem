import React, { FunctionComponent } from 'react';
import { DescriptionList } from './DescriptionList';
import { DescriptionListTerm } from './DescriptionListTerm';
import { DescriptionListDescription } from './DescriptionListDescription';
import type { StoryObj, Meta } from '@storybook/react';
import { DescriptionListMultiCol } from './DescriptionListMultiCol';

const meta: Meta<typeof DescriptionList> = {
    title: 'Komponenter/Lists/DescriptionList',
    component: DescriptionList,
    subcomponents: {
        DescriptionListTerm: DescriptionListTerm as FunctionComponent<unknown>,
        DescriptionListDescription:
            DescriptionListDescription as FunctionComponent<unknown>,
    },
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

export const MultiColumn: Story = {
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

export const Horizontal: Story = {
    args: {
        horizontal: true,
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

export const HorizontalLarge: Story = {
    args: {
        horizontal: true,
        size: 'lg',
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
