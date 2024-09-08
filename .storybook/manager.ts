import { addons } from '@storybook/manager-api';
import { create } from '@storybook/theming/create';

const theme = create({
    base: 'light',
    fontBase: 'SpareBank1-regular, MuseoSans-500, arial, sans-serif',
    fontCode: 'monospace',

    brandTitle: 'SpareBank 1',
    brandUrl: 'https://design.sparebank1.no',
    brandImage: '/logo-sb1.svg',
    brandTarget: '_self',
});

addons.setConfig({
    theme,
});
