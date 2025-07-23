import React, { useId, useState } from 'react';
import { FileUpload } from './FileUpload';
import type { StoryObj, Meta } from '@storybook/react';
import { getFileContent } from './getFileContent';
import { getUniqueFileName } from './getUniqueFileName';
import { Checkbox, Input, InputGroup } from '@sb1/ffe-form-react';

const meta: Meta<typeof FileUpload> = {
    title: 'Komponenter/File-upload/FileUpload',
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

export const WithXHR: Story = {
    args: {
        ...Standard.args,
    },
    render: (args) => {
        /**
         * Fake API til et hypotetisk backend.
         *
         * Responstid og -status kan endres slik at man kan undersøke hvordan
         * FileUpload oppfører seg.
         */
        const [uploadDuration, setUploadDuration] = useState(1);
        const [uploadShouldFail, setUploadShouldFail] = useState(false);

        const sendPostRequest = (url: string, file: any) =>
            new Promise((resolve, reject) => {
                console.log('POST', url, file);
                setTimeout(
                    uploadShouldFail ? reject : resolve,
                    uploadDuration * 1000,
                );
            });

        const sendDeleteRequest = (url: string, file: any) => console.log('DELETE', url, file);

        /**
         * State og event handler som knytter sammen API og FileUpload.
         */
        const [attachments, setAttachments] = useState<Record<string, { name: string; document?: unknown; error?: string | undefined; }>>({});

        const updateAttachment = (file: { name: string; document?: unknown; error?: string | undefined; }) =>
            setAttachments(prevState => ({
                ...prevState,
                [file.name]: file,
            }));

        const uploadAttachments = (fileList: FileList | null) => {
            const files = Array.from(fileList || []) as File[];

            // Build a map of unique filenames for this batch
            const prevState = attachments;
            const uniqueNames: Record<string, string> = {};
            files.forEach(file => {
                uniqueNames[file.name] = getUniqueFileName(file.name, { ...prevState, ...uniqueNames });
            });

            // Add files to attachments with unique names
            setAttachments(prevState =>
                files.reduce<{ [key: string]: { name: string; document?: unknown; error?: string } }>(
                    (acc, file) => {
                        const newName = uniqueNames[file.name];
                        return {
                            ...acc,
                            [newName]: { name: newName }
                        };
                    },
                    prevState || {},
                ),
            );

            // Read file content and upload to backend using unique name
            for (const file of files) {
                const newName = uniqueNames[file.name];
                getFileContent(file)
                    .then(content => {
                        const attachment = { name: newName, document: { content } };
                        return sendPostRequest('/upload', attachment).then(() => attachment);
                    })
                    .then(attachment => {
                        updateAttachment(attachment);
                    })
                    .catch(() => {
                        const attachment = { name: newName, error: 'It did not work' };
                        updateAttachment(attachment);
                    });
            }
        };

        const deleteAttachment = (file: { name: string; document?: unknown; error?: string | undefined; }) => {
            sendDeleteRequest('/delete', file);
            setAttachments(prevState => {
                const { ...nextState } = prevState;
                delete nextState[file.name];
                return nextState;
            });
        };

        const id = useId();

        return (
            <>
                <InputGroup>
                    <FileUpload
                        {...args}
                        id={id}
                        files={attachments}
                        onFilesSelected={fileList => uploadAttachments(fileList)}
                        onFilesDropped={files => {
                            if (files) {
                                uploadAttachments(files);
                            }
                        }}
                        onFileDeleted={file => deleteAttachment(file)}
                    />
                </InputGroup>
                <InputGroup label="Opplastningstid (sekunder)">
                    <Input
                        name="uploadDuration"
                        value={uploadDuration}
                        type="number"
                        min={0}
                        step={1}
                        onChange={evt => setUploadDuration(Number(evt.target.value) || 0)}
                    />
                </InputGroup>
                <InputGroup>
                    <Checkbox
                        name="uploadShouldFail"
                        checked={uploadShouldFail}
                        onChange={evt => setUploadShouldFail(evt.target.checked)}
                    >
                        Opplastning skal feile
                    </Checkbox>
                </InputGroup>
            </>
        );
    }
};
