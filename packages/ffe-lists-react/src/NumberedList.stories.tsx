import React, { FunctionComponent } from 'react';
import { NumberedList } from './NumberedList';
import { NumberedListItem } from './NumberedListItem';
import type { Meta, StoryObj } from '@storybook/react';
import { StylizedNumberedList } from './StylizedNumberedList';
import { StylizedNumberedListItem } from './StylizedNumberedListItem';

const meta: Meta<typeof NumberedList> = {
    title: 'Komponenter/Lists/NumberedList',
    component: NumberedList,
    subcomponents: {
        NumberedListItem: NumberedListItem as FunctionComponent<unknown>,
    },
    tags: ['autodocs'],
};
export default meta;

type Story = StoryObj<typeof NumberedList>;

export const Standard: Story = {
    args: {},
    render: args => (
        <div>
            <h3 className="ffe-h4">Å bruke FFE er enkelt!</h3>
            <NumberedList {...args}>
                <NumberedListItem>
                    Installer pakken du vil bruke via NPM
                </NumberedListItem>
                <NumberedListItem>Importer pakken i koden din</NumberedListItem>
                <NumberedListItem>Profit!</NumberedListItem>
            </NumberedList>
        </div>
    ),
};

export const Condensed: Story = {
    args: {
        condensed: true,
    },
    render: args => (
        <div>
            <h3 className="ffe-h4">Å bruke FFE er enkelt!</h3>
            <NumberedList {...args}>
                <NumberedListItem>
                    Installer pakken du vil bruke via NPM
                </NumberedListItem>
                <NumberedListItem>Importer pakken i koden din</NumberedListItem>
                <NumberedListItem>Profit!</NumberedListItem>
            </NumberedList>
        </div>
    ),
};

export const Stylized: Story = {
    args: {},
    render: args => (
        <div>
            <h3 className="ffe-h4">Å bruke FFE er enkelt!</h3>
            <StylizedNumberedList {...args}>
                <StylizedNumberedListItem>
                    Installer pakken du vil bruke via NPM
                </StylizedNumberedListItem>
                <StylizedNumberedListItem>
                    Importer pakken i koden din
                </StylizedNumberedListItem>
                <StylizedNumberedListItem>Profit!</StylizedNumberedListItem>
            </StylizedNumberedList>
        </div>
    ),
};
