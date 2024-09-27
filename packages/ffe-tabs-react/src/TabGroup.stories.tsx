import React, { useState } from 'react';
import { TabGroup } from './TabGroup';
import { Tab } from './Tab';
import type { StoryObj, Meta } from '@storybook/react';

const meta: Meta<typeof TabGroup> = {
    title: 'components/tabs/TabGroup',
    component: TabGroup,
};
export default meta;

type Story = StoryObj<typeof TabGroup>;

export const Standard: Story = {
    args: {},
    render: args => (
        <TabGroup {...args}>
            <Tab>Dette er en tab</Tab>
            <Tab selected={true}>Dette er en valgt tab</Tab>
            <Tab>Dette er en annen tab</Tab>
        </TabGroup>
    ),
};

export const WithContent: Story = {
    args: {},
    render: function Render() {
        const loan = { house: 'house', car: 'car' };
        const [activeTabId, setActiveTabId] = useState(loan.house);

        return (
            <>
                <TabGroup>
                    <Tab
                        selected={activeTabId === loan.house}
                        onClick={() => setActiveTabId(loan.house)}
                        aria-controls={loan.house}
                    >
                        Huslån
                    </Tab>

                    <Tab
                        selected={activeTabId === loan.car}
                        onClick={() => setActiveTabId(loan.car)}
                        aria-controls={loan.car}
                    >
                        Billån
                    </Tab>
                </TabGroup>
                <div
                    id={loan.house}
                    style={{
                        display: activeTabId === loan.house ? 'block' : 'none',
                    }}
                >
                    Huslån
                </div>
                <div
                    id={loan.car}
                    style={{
                        display: activeTabId === loan.car ? 'block' : 'none',
                    }}
                >
                    Billån
                </div>
            </>
        );
    },
};

export const NoBreak: Story = {
    args: { noBreak: true },
    render: args => (
        <TabGroup {...args}>
            <Tab>Label</Tab>
            <Tab selected={true}>Label</Tab>
            <Tab>Label</Tab>
        </TabGroup>
    ),
};
