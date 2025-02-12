import React from 'react';
import { Grid } from './Grid';
import { GridRow } from './GridRow';
import { GridCol } from './GridCol';
import type { StoryObj, Meta } from '@storybook/react';

const meta: Meta<typeof GridCol> = {
    title: 'Komponenter/Grid/GridCol',
    component: GridCol,
    argTypes: {
        as: { control: 'select', options: ['div', 'span'] },
    },
};
export default meta;

type Story = StoryObj<typeof GridCol>;

export const Standard: Story = {
    args: {
        sm: 12,
        md: 12,
        lg: { cols: 6, offset: 3 },
    },
    render: args => (
        <Grid>
            <GridRow>
                <GridCol {...args}>innehold</GridCol>
            </GridRow>
        </Grid>
    ),
};

export const ColBackground: Story = {
    args: {
        sm: 12,
        md: 12,
        lg: { cols: 6, offset: 3 },
        bgColor: 'secondary',
    },
    render: args => (
        <Grid>
            <GridRow>
                <GridCol {...args}>innehold</GridCol>
            </GridRow>
        </Grid>
    ),
};
