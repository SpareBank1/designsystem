import React from 'react';
import { Grid } from './Grid';
import { GridRow } from './GridRow';
import { GridCol } from './GridCol';
import type { StoryObj, Meta } from '@storybook/react';

const meta: Meta<typeof Grid> = {
    title: 'Komponenter/Grid',
    component: Grid,
    argTypes: {
        as: { control: 'select', options: ['div', 'span'] },
    },
};
export default meta;

type Story = StoryObj<typeof Grid>;

export const Standard: Story = {
    args: {},
    render: args => (
        <Grid {...args}>
            <GridRow>
                <GridCol sm="6">Litt innhold til venstre</GridCol>
                <GridCol sm="6">Litt innhold til høyre</GridCol>
            </GridRow>
        </Grid>
    ),
};

export const Spacing: Story = {
    args: {},
    render: args => (
        <Grid gap="lg">
            <GridRow margin="5xl" padding="2xl" bgColor="secondary">
                <GridCol sm="6" md="4" lg="3" bgColor="tertiary">
                    Litt innhold
                </GridCol>
                <GridCol sm="6" md="4" lg="3" bgColor="tertiary">
                    Litt innhold
                </GridCol>
                <GridCol sm="6" md="4" lg="3" bgColor="tertiary">
                    Litt innhold
                </GridCol>
                <GridCol sm="6" md="4" lg="3" bgColor="tertiary">
                    Litt innhold
                </GridCol>
            </GridRow>
        </Grid>
    ),
};

export const Offset: Story = {
    args: {},
    render: () => (
        <Grid>
            <GridRow>
                <GridCol>
                    <h4>Eksempel med offset på alle skjermstørrelser</h4>
                </GridCol>
            </GridRow>
            <GridRow>
                <GridCol
                    sm={{ cols: 6, offset: 2 }}
                    md={{ cols: 4, offset: 4 }}
                    lg={{ cols: 4, offset: 2 }}
                >
                    <ul>
                        <li>Små skjermer: 6 kolonner med 2 kolonner offset</li>
                        <li>
                            Medium skjermer: 4 kolonner med 4 kolonner offset
                        </li>
                        <li>
                            Store skjermer: 4 kolonner med 2 kolonner offset
                        </li>
                    </ul>
                </GridCol>
            </GridRow>
            <GridRow>
                <GridCol>
                    <h4>Eksempel med offset kun på store skjermer</h4>
                </GridCol>
            </GridRow>
            <GridRow>
                <GridCol
                    sm={{ cols: 6 }}
                    md={{ cols: 4 }}
                    lg={{ cols: 4, offset: 2 }}
                >
                    <ul>
                        <li>Små skjermer: 6 kolonner, ingen offset</li>
                        <li>Medium skjermer: 4 kolonner, ingen offset</li>
                        <li>
                            Store skjermer: 4 kolonner med 2 kolonner offset
                        </li>
                    </ul>
                </GridCol>
            </GridRow>
        </Grid>
    ),
};
