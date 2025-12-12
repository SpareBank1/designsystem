import React from 'react';
import { Skeleton } from './Skeleton';
import { SkeletonCircle } from './SkeletonCircle';
import type { StoryObj, Meta } from '@storybook/react';
import { CardBase, CardRenderProps, IconCard } from '@sb1/ffe-cards-react';

const meta: Meta<typeof Skeleton> = {
    title: 'Komponenter/Skeleton/SkeletonIconCardExample',
    component: Skeleton,
};
export default meta;

type Story = StoryObj<typeof Skeleton>;

export const Standard: Story = {
    args: {},
    render: function Render() {
        return (
            <IconCard icon={<SkeletonCircle size="xl" />} aria-busy={true}>
                {({ Title, Subtext, Text }: CardRenderProps) => (
                    <>
                        <Title>
                            <Skeleton width={'40%'} />
                        </Title>
                        <Subtext>
                            <Skeleton width={'25%'} height="0.75em" />
                        </Subtext>
                        <Text>
                            <Skeleton width={'10%'} />
                        </Text>
                    </>
                )}
            </IconCard>
        );
    },
};
