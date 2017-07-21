import React from 'react';
import {assert} from 'chai';
import sinon from 'sinon';
import {shallow} from 'enzyme';
import FileUpload from './file-upload';

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
                    label="label"
                    selectedFiles={[]}
                    onFilesSelected={ onFilesSelected }
                    onFileDeleted={ onFileDeleted }
                />
            );
        });

        it('should have a button and input', () => {
            assert.isTrue(component.find('.ffe-file-upload__button').exists());
            assert.isTrue(component.find('#file-upload').exists());
        });

        it('should render input label', () => {
            assert.equal(component.find('.ffe-file-upload__button').text(), 'label');
        });

        it('should extract and return files when user finishes selecting files', () => {
            component.find('#file-upload').simulate('change', {
                target: {
                    files: [
                        {name: 'filename'}
                    ]
                }
            });

            assert.isTrue(onFilesSelected.calledOnce);
        });
    });

    describe('invalid state', () => {
        beforeEach(() => {
            component = shallow(
                <FileUpload
                    label="label"
                    selectedFiles={[]}
                    onFilesSelected={ onFilesSelected }
                    onFileDeleted={ onFileDeleted }
                    errorMessage="Wrong file format"
                />
            );
        });

        it('should render error message when invalid', () => {
            assert.equal(
                component.find('.ffe-field-error-message').text(),
                'Wrong file format'
            );
        });

        it('should set aria-invalid on button when invalid', () => {
            assert.isTrue(
                component
                    .find('.ffe-file-upload__button')
                    .props()['aria-invalid']
            );
        });
    });

    describe('after selecting files', () => {
        beforeEach(() => {
            component = shallow(
                <FileUpload
                    label="label"
                    selectedFilesHeaderLabel="files header"
                    selectedFiles={[
                        {name: 'file.pdf', size: 1024},
                        {name: 'image.jpg', size: 1024}
                    ]}
                    onFilesSelected={ onFilesSelected }
                    onFileDeleted={ onFileDeleted }
                />
            );
        });

        it('should render list of files', () => {
            const files = component.find('.ffe-file-upload__selected-files li');
            assert.isTrue(files.exists());
            assert.equal(2, files.length);

            files.forEach(file => {
                assert.isTrue(file.find('.ffe-file-upload__filename').exists());
                assert.match(file.find('.ffe-file-upload__filename').text(), /^\w+\.\w+$/);
                assert.isTrue(file.find('.ffe-file-upload__file-size').exists());
                assert.equal('1kB', file.find('.ffe-file-upload__file-size').text());
                assert.isTrue(file.find('.ffe-file-upload__delete-button').exists());
            });
        });

        it('should render file list header', () => {
            assert.equal(
                component.find('.ffe-file-upload__filename__title').text(),
                'files header'
            );
        });

        it('should call onFileDeleted when delete button is clicked', () => {
            const deletebuttons = component.find('.ffe-file-upload__delete-button');
            deletebuttons
                .first()
                .simulate('click', {
                    target: {
                        id: "file.pdf"
                    }
                });

            assert.isTrue(onFileDeleted.calledOnce);
        });
    });
});
