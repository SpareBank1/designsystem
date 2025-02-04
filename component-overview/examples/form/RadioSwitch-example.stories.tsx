import type { Meta, StoryFn } from '@storybook/react';
import RadioSwitchExample from './RadioSwitch-example';

export default {
    title: 'Examples/Form/RadioSwitch/Interactive Example',
    component: RadioSwitchExample,
} as Meta<typeof RadioSwitchExample>;

export const Default: StoryFn<typeof RadioSwitchExample> = () => <RadioSwitchExample />;
