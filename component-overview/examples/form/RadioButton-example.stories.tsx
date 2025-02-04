import type { Meta, StoryFn } from '@storybook/react';
import RadioButtonExample from './RadioButton-example';

export default {
    title: 'Examples/Form/RadioButton/Interactive Example',
    component: RadioButtonExample,
} as Meta<typeof RadioButtonExample>;

export const Default: StoryFn<typeof RadioButtonExample> = () => <RadioButtonExample />;
