import React from 'react';
import { Grid } from './Grid';
import { GridRow } from './GridRow';
import { GridCol } from './GridCol';
import type { StoryObj, Meta } from '@storybook/react';

const meta: Meta<typeof Grid> = {
    title: 'components/grid/Grid',
    component: Grid,
    tags: ['autodocs'],
    argTypes: {
        as: { control: 'select', options: ['div', 'span'] },
    },
};
export default meta;

type Story = StoryObj<typeof Grid>;

export const Standard: Story = {
    args: {
        sm: { gap: 'none' },
        md: { gap: 'none' },
        lg: 'none',
    },
    render: args => (
        <Grid {...args}>
            <GridRow>
                <GridCol sm="6">Litt innhold til venstre</GridCol>
                <GridCol sm="6">Litt innhold til høyre</GridCol>
            </GridRow>
        </Grid>
    ),
};
