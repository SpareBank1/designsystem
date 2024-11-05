import React from 'react';
import { Grid } from './Grid';
import { GridRow } from './GridRow';
import { GridCol } from './GridCol';
import type { StoryObj, Meta } from '@storybook/react';

const meta: Meta<typeof GridRow> = {
    title: 'Komponenter/Grid/GridRow',
    component: GridRow,
    argTypes: {
        as: { control: 'select', options: ['div', 'span'] },
    },
};
export default meta;

type Story = StoryObj<typeof GridRow>;

export const Standard: Story = {
    args: {
        margin: 'sm',
        padding: 'sm',
        sm: { margin: 'sm', padding: 'sm' },
        md: { margin: 'sm', padding: 'sm' },
        lg: { margin: 'sm', padding: 'sm' },
    },
    render: args => (
        <Grid>
            <GridRow {...args}>
                <GridCol>innehold</GridCol>
            </GridRow>
        </Grid>
    ),
};

export const RowBackground: Story = {
    args: { ...Standard.args, background: 'syrin-70', backgroundDark: 'natt' },
    render: args => (
        <Grid>
            <GridRow {...args}>
                <GridCol sm={12} lg={{ cols: 6, offset: 3 }}>
                    innehold
                </GridCol>
            </GridRow>
        </Grid>
    ),
};
