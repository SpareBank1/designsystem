import React from 'react';
import { FileUpload, FileUploadProps } from './FileUpload';
import { render, screen, fireEvent } from '@testing-library/react';

const renderFileUpload = (props?: Partial<FileUploadProps<unknown>>) =>
    render(
        <FileUpload
            id="file-upload"
            label="label"
            title="title"
            infoText="infoText"
            uploadTitle="uploadTitle"
            uploadMicroText="uploadMicroText"
            uploadSubText="uploadSubText"
            files={{}}
            onFilesSelected={() => {}}
            onFileDeleted={() => {}}
            onFilesDropped={() => {}}
            {...props}
        />,
    );

describe('<FileUpload/>', () => {
    it('should have a button and input', () => {
        const { container } = renderFileUpload();
        expect(container.querySelector('#file-upload-button')).toBeTruthy();
        expect(container.querySelector('#file-upload')).toBeTruthy();
    });

    it('should render input label', () => {
        renderFileUpload();
        expect(
            screen.getByRole('button', { name: 'label' }),
        ).toBeInTheDocument();
    });

    it('should extract and return files when user finishes selecting files', () => {
        const onFilesSelected = jest.fn();
        const { container } = renderFileUpload({ onFilesSelected });
        const input = container.querySelector('input#file-upload') as Element;
        fireEvent.change(input);
        expect(onFilesSelected).toHaveBeenCalledTimes(1);
    });

    it('should remove file from files when delete button is clicked', () => {
        const onFileDeleted = jest.fn();
        // Do click on span inside button with event listener instead of actual button to catch nested clicks.
        const { container } = renderFileUpload({
            onFileDeleted,
            files: {
                fileToDelete: {
                    name: 'fileToDelete',
                },
            },
        });

        const deleteButton = container.querySelector(
            '.ffe-file-upload__file-item-delete-button-text',
        ) as Element;
        fireEvent.click(deleteButton);

        expect(onFileDeleted).toHaveBeenCalledWith({ name: 'fileToDelete' });
    });
});
