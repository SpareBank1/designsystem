import React from 'react';
import { TertiaryButton } from './TertiaryButton';
import type { Meta } from '@storybook/react';

const meta = {
    title: 'Komponenter/Buttons/TertiaryButton',
    component: TertiaryButton,
    parameters: {
        docs: {
            description: {
                component:
                    'TertiaryButton er den minst fremtredende knappen i designsystemet. Den brukes for mindre viktige handlinger eller når man ønsker en diskret knapp som ligner en lenke.',
            },
        },
    },
} as Meta<typeof TertiaryButton>;

export default meta;

export const Standard = () => <TertiaryButton>Tertiærknapp</TertiaryButton>;
