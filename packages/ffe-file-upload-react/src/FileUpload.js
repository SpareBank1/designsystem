import React from 'react';
import { object, bool, func, string as stringType } from 'prop-types';
import FileItem from './FileItem';
import classNames from 'classnames';
import { SecondaryButton } from '@sb1/ffe-buttons-react';
import { Icon } from '@sb1/ffe-icons-react';

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
        this.props.onFilesDropped(event.dataTransfer.files);
    }

    onFileDeleted(event) {
        this.props.onFileDeleted(this.props.files[event.currentTarget.id]);
    }

    render() {
        const {
            id,
            label,
            files,
            cancelText,
            deleteText,
            multiple,
            title,
            infoText,
            infoSubText,
            uploadTitle,
            uploadMicroText,
            uploadSubText,
            accept,
        } = this.props;

        const downloadIcon =
            'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMjAiIHZpZXdCb3g9IjAgLTk2MCA5NjAgOTYwIiB3aWR0aD0iMjAiPjxwYXRoIGQ9Ik00NzkuOC0zNTcuNTM5cS02LjQzMSAwLTExLjk2MS0yLjMwOC01LjUzMS0yLjMwNy0xMC4xNDYtNi45MjNMMzM1LjMwOS00ODkuMTUzcS03LjkyMy03LjgzMi03LjgwNy0xOC4zMzguMTE1LTEwLjUwNyA4LjMyOS0xOC44MTUgOC43ODYtOC4zMDcgMTguODYyLTguMTE1IDEwLjA3Ny4xOTIgMTguMzg1IDguNWw4MC45MjMgODEuOTIzdi0zMjYuMDAxcTAtMTEuMDY5IDcuNDA0LTE4LjUzNCA3LjQwNS03LjQ2NiAxOC4zODQtNy40NjYgMTAuOTggMCAxOC41OTUgNy40NjYgNy42MTUgNy40NjUgNy42MTUgMTguNTM0djMyNi4wMDFsODEuOTIzLTgxLjkyM3E3LjU5LTcuOTIzIDE4LjAyNi03LjgwOCAxMC40MzUuMTE2IDE5LjIyMSA4LjQyMyA4LjIxNCA4LjMwOCA4LjAyMSAxOC41NzctLjE5MiAxMC4yNjktOC40OTkgMTguNTc2TDUwMi4zMDctMzY2Ljc3cS01LjAxNSA0LjYxNi0xMC41NDYgNi45MjMtNS41MyAyLjMwOC0xMS45NjEgMi4zMDhaTTI3Ni4wMjUtMjEyLjAwMXEtMjcuMDI0IDAtNDUuNTI0LTE4LjY1dC0xOC41LTQ1LjY1OHYtMzQuNDYxcTAtMTEuMDY5IDcuNDA1LTE4LjUzNCA3LjQwNS03LjQ2NSAxOC4zODQtNy40NjUgMTAuOTggMCAxOC41OTUgNy40NjVRMjY0LTMyMS44MzkgMjY0LTMxMC43N3YzNC40NjFxMCA0LjYxNiAzLjg0NiA4LjQ2MyAzLjg0NyAzLjg0NiA4LjQ2MyAzLjg0Nmg0MDcuMzgycTQuNjE2IDAgOC40NjMtMy44NDYgMy44NDYtMy44NDcgMy44NDYtOC40NjN2LTM0LjQ2MXEwLTExLjA2OSA3LjQwNS0xOC41MzQgNy40MDQtNy40NjUgMTguMzg0LTcuNDY1IDEwLjk3OSAwIDE4LjU5NCA3LjQ2NSA3LjYxNiA3LjQ2NSA3LjYxNiAxOC41MzR2MzQuNDYxcTAgMjcuMDA4LTE4LjY2MiA0NS42NTgtMTguNjYyIDE4LjY1LTQ1LjY4NiAxOC42NUgyNzYuMDI1WiIvPjwvc3ZnPg==';

        return (
            <div className="ffe-file-upload">
                <div className="ffe-file-upload__title">{title}</div>
                {Object.keys(files).length > 0 ? (
                    <div className="ffe-file-upload__file-items-section">
                        {Object.keys(files).map(file => (
                            <FileItem
                                key={file}
                                file={files[file]}
                                cancelText={cancelText}
                                deleteText={deleteText}
                                onFileDeleted={this.onFileDeleted}
                            />
                        ))}
                    </div>
                ) : (
                    <div className="ffe-file-upload__info-section">
                        <div className="ffe-file-upload__info-section-text">
                            {infoText}
                        </div>
                        <div className="ffe-file-upload__info-section-subtext">
                            {infoSubText}
                        </div>
                    </div>
                )}
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
                        className={classNames(
                            'ffe-file-upload__upload-section-border',
                            {
                                'ffe-file-upload__upload-section-border--hover': this
                                    .state.hover,
                            },
                        )}
                    >
                        <div className="ffe-file-upload__upload-section-title">
                            {uploadTitle}
                        </div>
                        <div className="ffe-file-upload__upload-section-microtext">
                            {uploadMicroText}
                        </div>
                        <SecondaryButton
                            leftIcon={<Icon fileUrl={downloadIcon} size="sm" />}
                            onClick={this.triggerUploadFileNativeHandler}
                            id={`${id}-button`}
                        >
                            <span id={`${id}-label`}>{label}</span>
                        </SecondaryButton>
                        <div className="ffe-file-upload__upload-section-subtext">
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
                    accept={accept || '*'}
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
     * Must be maintained outside of `FileUpload`. It is up to the implementation to deny or accept file types, sizes, etc,
     * and it is important that duplicates are not allowed.
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
    /** Title module */
    title: stringType.isRequired,
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
    /** Unique file type specifier that describes a type of file that may be selected by the user, e.g. ".pdf"
     *  See MDN for documentation on
     *  [Unique file type specifiers](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/file#unique_file_type_specifiers)
     */
    accept: stringType,
};

export default FileUpload;
