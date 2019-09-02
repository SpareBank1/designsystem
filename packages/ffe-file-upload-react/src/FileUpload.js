import React from 'react';
import { object, bool, func, string as stringType } from 'prop-types';
import FileItem from './FileItem';

class FileUpload extends React.Component {
    constructor(props) {
        super(props);

        this.onFilesSelected = this.onFilesSelected.bind(this);
        this.onFilesDropped = this.onFilesDropped.bind(this);
        this.onFileDeleted = this.onFileDeleted.bind(this);
        this.setFileInputElement = this.setFileInputElement.bind(this);
        this.triggerUploadFileNativeHandler = this.triggerUploadFileNativeHandler.bind(
            this,
        );

        this.state = { hover: false };
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

    onFilesDropped(event) {
        event.preventDefault();
        this.setState({ hover: false });
        this.props.onFilesDropped(event);
    }

    onFileDeleted(event) {
        this.props.onFileDeleted(this.props.files[event.target.id]);
    }

    render() {
        const {
            id,
            label,
            files,
            cancelText,
            deleteText,
            multiple,
            infoTitle,
            infoText,
            infoSubText,
            uploadTitle,
            uploadMicroText,
            uploadSubText,
            onFileDeleted,
        } = this.props;

        return (
            <div className="ffe-file-upload">
                <div className="ffe-file-upload__info-section">
                    <div className="ffe-file-upload__info-section__title">
                        {infoTitle}
                    </div>
                    {Object.keys(files).length > 0 ? (
                        <ul className="ffe-file-upload__info-section__selected-files">
                            {Object.keys(files).map((file, index) => (
                                <FileItem
                                    key={index}
                                    index={index}
                                    file={files[file]}
                                    cancelText={cancelText}
                                    deleteText={deleteText}
                                    onFileDeleted={onFileDeleted}
                                />
                            ))}
                        </ul>
                    ) : (
                        <>
                            <div className="ffe-file-upload__info-section__text">
                                {infoText}
                            </div>
                            <div className="ffe-file-upload__info-section__subtext">
                                {infoSubText}
                            </div>
                        </>
                    )}
                </div>
                <div
                    className="ffe-file-upload__upload-section"
                    role="presentation"
                    onDrop={this.onFilesDropped}
                    onDragOver={event => {
                        event.preventDefault();
                        this.setState({ hover: true });
                    }}
                    onDragLeave={() => this.setState({ hover: false })}
                >
                    <div
                        className={`ffe-file-upload__upload-section__border${
                            this.state.hover
                                ? ' ffe-file-upload__upload-section__border__hover'
                                : ''
                        }`}
                    >
                        <div className="ffe-file-upload__upload-section__title">
                            {uploadTitle}
                        </div>
                        <div className="ffe-file-upload__upload-section__microtext">
                            {uploadMicroText}
                        </div>
                        <button
                            className="ffe-file-upload__upload-section__button"
                            onClick={this.triggerUploadFileNativeHandler}
                        >
                            <span className="ffe-file-upload__upload-section__button__label-icon" />
                            <span id={`${id}-label`}>{label}</span>
                        </button>
                        <div className="ffe-file-upload__upload-section__subtext">
                            {uploadSubText}
                        </div>
                    </div>
                </div>
                <input
                    id={id}
                    type="file"
                    multiple={multiple}
                    ref={this.setFileInputElement}
                    onChange={this.onFilesSelected}
                    aria-labelledby={`${id}-label`}
                />
            </div>
        );
    }
}

FileUpload.propTypes = {
    /** ID for the input field. The ID is used as a base for the label ID as well. */
    id: stringType.isRequired,
    /** Label for the button to trigger native upload handling. */
    label: stringType.isRequired,
    /**
     * A map of files, indexed by file name (check file-shape on FileItem.js propTypes), that the user has uploaded.
     * Must be maintained outside of `FileUpload`. It is up to the implementation to deny or accept file types, sizes, etc.
     * */
    files: object.isRequired,
    /**
     * Will be called with `FileList`-object containing the `File`-objects the user selected.
     * See MDN for documentation on
     * [FileList](https://developer.mozilla.org/en-US/docs/Web/API/FileList) and
     * [File](https://developer.mozilla.org/en-US/docs/Web/API/File).
     */
    onFilesSelected: func.isRequired,
    /** Will be called when objects are dropped over the upload-section. */
    onFilesDropped: func.isRequired,
    /**
     * Called when the user clicks the delete button for a given file. Is called with the `File`
     * object of the file in question.
     */
    onFileDeleted: func.isRequired,
    /** Whether or not uploading multiple files at once via the native file handler is allowed*/
    multiple: bool,
    /** Title on the info-section */
    infoTitle: stringType.isRequired,
    /** Text on the info-section */
    infoText: stringType.isRequired,
    /** Subtext on the info-section */
    infoSubText: stringType,
    /** Label for the cancel button */
    cancelText: stringType,
    /** Label for the delete button */
    deleteText: stringType,
    /** Title on the upload-section */
    uploadTitle: stringType.isRequired,
    /** MicroText on the upload-section */
    uploadMicroText: stringType.isRequired,
    /** SubText on the upload-section */
    uploadSubText: stringType.isRequired,
};

export default FileUpload;
