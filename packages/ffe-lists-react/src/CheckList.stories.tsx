import React, { FunctionComponent } from 'react';
import { CheckList } from './CheckList';
import { CheckListItem } from './CheckListItem';
import type { StoryObj, Meta } from '@storybook/react';

const meta: Meta<typeof CheckList> = {
    title: 'Komponenter/Lists/CheckList',
    component: CheckList,
    subcomponents: {
        CheckListItem: CheckListItem as FunctionComponent<unknown>,
    },
    tags: ['autodocs'],
};
export default meta;

type Story = StoryObj<typeof CheckList>;

export const Standard: Story = {
    args: {},
    render: args => (
        <div>
            <h3 className="ffe-h4">Ved å bruke FFE får du</h3>
            <CheckList {...args}>
                <CheckListItem>
                    Massevis av ferdige, testede komponenter
                </CheckListItem>
                <CheckListItem>
                    Likt design som resten av SpareBank 1
                </CheckListItem>
                <CheckListItem>Høyere utviklingshastighet</CheckListItem>
                <CheckListItem isCross={true}>Flere bugs</CheckListItem>
            </CheckList>
        </div>
    ),
};

export const MultiColumn: Story = {
    args: {
        columns: '2',
    },
    render: args => (
        <div>
            <h3 className="ffe-h4">Ved å bruke FFE får du</h3>
            <CheckList {...args}>
                <CheckListItem>
                    Massevis av ferdige, testede komponenter
                </CheckListItem>
                <CheckListItem>
                    Likt design som resten av SpareBank 1
                </CheckListItem>
                <CheckListItem>Høyere utviklingshastighet</CheckListItem>
                <CheckListItem isCross={true}>Flere bugs</CheckListItem>
            </CheckList>
        </div>
    ),
};
