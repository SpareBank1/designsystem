import React from 'react';
import sinon from 'sinon';
import { shallow } from 'enzyme';

import FileUpload from '../src/FileUpload';

describe('<FileUpload/>', () => {
    let component;
    let onFilesSelected;
    let onFileDeleted;

    beforeEach(() => {
        onFilesSelected = sinon.spy();
        onFileDeleted = sinon.spy();
    });

    describe('initial state', () => {
        beforeEach(() => {
            component = shallow(
                <FileUpload
                    id="file-upload"
                    label="label"
                    selectedFiles={[]}
                    onFilesSelected={onFilesSelected}
                    onFileDeleted={onFileDeleted}
                />,
            );
        });

        it('should have a button and input', () => {
            expect(component
                    .find('.ffe-file-upload__button')
                    .exists()).toBe(true);
            expect(component
                    .find('#file-upload')
                    .exists()).toBe(true);
        });

        it('should render input label', () => {
            expect(component
                    .find('.ffe-file-upload__button')
                    .text()).toBe('label');
        });

        it('should add label as aria-label', () => {
            expect(component
                    .find('#file-upload-label')
                    .text()).toBe('label');
        });

        it('should extract and return files when user finishes selecting files', () => {
            component.find('#file-upload').simulate('change', {
                target: {
                    files: [{ name: 'filename' }],
                },
            });

            expect(onFilesSelected.calledOnce).toBe(true);
        });
    });

    describe('invalid state', () => {
        beforeEach(() => {
            component = shallow(
                <FileUpload
                    id="file-upload"
                    label="label"
                    selectedFiles={[]}
                    onFilesSelected={onFilesSelected}
                    onFileDeleted={onFileDeleted}
                    errorMessage="Wrong file format"
                />,
            );
        });

        it('should render error message when invalid', () => {
            expect(component
                    .find('.ffe-field-error-message')
                    .text()).toBe('Wrong file format');
        });

        it('should set aria-invalid on button when invalid', () => {
            expect(component
                    .find('.ffe-file-upload__button')
                    .prop('aria-invalid')).toBe('true');
        });
    });

    describe('after selecting files', () => {
        beforeEach(() => {
            component = shallow(
                <FileUpload
                    id="file-upload"
                    label="label"
                    selectedFilesHeaderLabel="files header"
                    selectedFiles={[
                        { name: 'file.pdf', size: 1024 },
                        { name: 'image.jpg', size: 1024 },
                    ]}
                    onFilesSelected={onFilesSelected}
                    onFileDeleted={onFileDeleted}
                />,
            );
        });

        it('should render list of files', () => {
            const files = component.find('.ffe-file-upload__selected-files li');
            expect(files.exists()).toBe(true);
            expect(files).toHaveLength(2);

            files.forEach(file => {
                expect(file
                        .find('.ffe-file-upload__filename')
                        .exists()).toBe(true);
                expect(file
                        .find('.ffe-file-upload__filename')
                        .text()).toMatch(/^\w+\.\w+$/);
                expect(file
                        .find('.ffe-file-upload__file-size')
                        .exists()).toBe(true);
                expect(file
                        .find('.ffe-file-upload__file-size')
                        .text()).toBe('1kB');
                expect(file
                        .find('.ffe-file-upload__delete-button')
                        .exists()).toBe(true);
            });
        });

        it('should render file list header', () => {
            expect(component.find('.ffe-file-upload__filename__title').text()).toBe('files header');
        });

        it('should call onFileDeleted when delete button is clicked', () => {
            const deletebuttons = component.find(
                '.ffe-file-upload__delete-button',
            );
            deletebuttons.first().simulate('click', {
                target: {
                    id: 'file.pdf',
                },
            });

            expect(onFileDeleted.calledOnce).toBe(true);
        });
    });
});
