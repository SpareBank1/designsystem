import React  from 'react';
import {
    array,
    bool,
    func,
    string as stringType
} from 'prop-types';

class FileUpload extends React.Component {
    constructor(props) {
        super(props);

        this.onFilesSelected = this.onFilesSelected.bind(this);
        this.onFileDeleted = this.onFileDeleted.bind(this);
        this.setFileInputElement = this.setFileInputElement.bind(this);
        this.triggerUploadFileNativeHandler = this.triggerUploadFileNativeHandler.bind(this);
    }

    setFileInputElement(element) {
        this.fileInputElement = element;
    }

    triggerUploadFileNativeHandler() {
        // clear file input to trigger onChange when uploading same filename
        if (this.fileInputElement) {
            this.fileInputElement.value = '';
        }
        this.fileInputElement.click();
    }

    onFilesSelected(event) {
        this.props.onFilesSelected(event.target.files);

    }

    onFileDeleted(event) {
        this.props.onFileDeleted(
            this.props.selectedFiles
                .find(file => file.name === event.target.id));
    }

    render() {
        const {
            label,
            selectedFilesHeaderLabel,
            selectedFiles,
            accept,
            multiple,
            errorMessage
        } = this.props;

        return (
            <div className="ffe-file-upload">
                <button
                    className="ffe-file-upload__button"
                    aria-invalid={ String(!!errorMessage) }
                    onClick={ this.triggerUploadFileNativeHandler }
                >
                    <span className="ffe-file-upload__button__label-icon" />{ label }
                </button>
                <input
                    id="file-upload"
                    type="file"
                    accept={ accept }
                    multiple={ multiple }
                    ref={ this.setFileInputElement }
                    onChange={ this.onFilesSelected }
                />

                { errorMessage && <div className="ffe-field-error-message">{ errorMessage }</div> }

                { selectedFiles && selectedFiles.length > 0 && <div>
                    <div className="ffe-file-upload__filename__title">{ selectedFilesHeaderLabel }</div>
                    <ul className="ffe-file-upload__selected-files">
                        { selectedFiles.map((file, index) => (
                            <li key={ index }>
                                <div className="ffe-file-upload__filename">{ file.name }</div>
                                <div className="ffe-file-upload__file-size">
                                    { `${Math.round(file.size / 1024)}kB` }
                                </div>
                                <button
                                    id={ file.name }
                                    className="ffe-file-upload__delete-button"
                                    onClick={ this.onFileDeleted }
                                />
                            </li>
                        )) }
                    </ul>
                </div>
                }
            </div>
        );
    }
}

FileUpload.propTypes = {
    label: stringType.isRequired,
    selectedFiles: array.isRequired,
    onFilesSelected: func.isRequired,
    onFileDeleted: func.isRequired,
    multiple: bool,
    accept: stringType,
    selectedFilesHeaderLabel: stringType,
    errorMessage: stringType,
};

export default FileUpload;
