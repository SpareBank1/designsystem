import React from 'react';
import { spy } from 'sinon';

import FileUpload from '../src/FileUpload';

describe('<FileUpload/>', () => {
    let component;
    let onFilesSelected;
    let onFileDeleted;
    let onFilesDropped;

    beforeEach(() => {
        onFilesSelected = spy();
        onFileDeleted = spy();
        onFilesDropped = spy();
    });

    describe('initial state', () => {
        beforeEach(() => {
            component = shallow(
                <FileUpload
                    id="file-upload"
                    label="label"
                    title="title"
                    infoText="infoText"
                    uploadTitle="uploadTitle"
                    uploadMicroText="uploadMicroText"
                    uploadSubText="uploadSubText"
                    files={{}}
                    onFilesSelected={onFilesSelected}
                    onFileDeleted={onFileDeleted}
                    onFilesDropped={onFilesDropped}
                />,
            );
        });

        it('should have a button and input', () => {
            expect(component.find('#file-upload-button').exists()).toBe(true);
            expect(component.find('#file-upload').exists()).toBe(true);
        });

        it('should render input label', () => {
            expect(component.find('#file-upload-label').text()).toBe('label');
        });

        it('should add label as aria-label', () => {
            expect(component.find('#file-upload-label').text()).toBe('label');
        });

        it('should extract and return files when user finishes selecting files', () => {
            component.find('input#file-upload').simulate('change', {
                target: {
                    files: {
                        filename: {
                            name: 'filename',
                        },
                    },
                },
            });

            expect(onFilesSelected.calledOnce).toBe(true);
        });

        it('should remove file from files when delete button is clicked', () => {
            // Component needs to be mounted for this test because we must render children.
            component = mount(
                <FileUpload
                    id="file-upload"
                    label="label"
                    title="title"
                    infoText="infoText"
                    uploadTitle="uploadTitle"
                    uploadMicroText="uploadMicroText"
                    uploadSubText="uploadSubText"
                    files={{
                        fileToDelete: {
                            name: 'fileToDelete',
                        },
                    }}
                    onFilesSelected={onFilesSelected}
                    onFileDeleted={onFileDeleted}
                    onFilesDropped={onFilesDropped}
                />,
            );
            // Do click on span inside button with event listener instead of actual button to catch nested clicks.
            component
                .find('.ffe-file-upload__file-item-delete-button-text')
                .simulate('click');
            expect(onFileDeleted.calledWith({ name: 'fileToDelete' })).toBe(
                true,
            );
        });
    });
});
