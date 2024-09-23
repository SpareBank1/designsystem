import React from 'react';
import { FileUpload } from './FileUpload';
import type { StoryObj, Meta } from '@storybook/react';

const meta: Meta<typeof FileUpload> = {
    title: 'components/file-upload/FileUpload',
    component: FileUpload,
};
export default meta;

type Story = StoryObj<typeof FileUpload>;

export const Standard: Story = {
    args: {
        label: 'Velg filer',
        title: 'Dokumentasjon',
        infoText:
            'Det kan være vanskelig å estimere fremtiden, derfor kan du laste opp eventuelle filer som viser til fremtidig budsjett eller inntjening.',
        infoSubText:
            'Husk å ikke laste opp personsensitive opplysninger eller dokumenter som bedriften ikke vil dele.',
        uploadTitle: 'Dra filene hit',
        uploadMicroText: 'Eller',
        uploadSubText: 'PDF-filer, maks 50 MB',
        files: {},
        cancelText: 'Avbryt',
        deleteText: 'Slett',
        multiple: true,
    },
    render: args => <FileUpload {...args} />,
};
