import React from 'react';
import { func, shape, object, string as stringType } from 'prop-types';

const FileItem = ({ file, onFileDeleted, cancelText, deleteText }) => (
    <li>
        {// File is loading
        !file.document && !file.error && (
            <div className="ffe-file-upload__file-item-stencil">
                <button
                    type="button"
                    id={file.name}
                    className="ffe-file-upload__file-item-delete-button"
                    onClick={onFileDeleted}
                >
                    {cancelText}
                    <div
                        id={file.name}
                        className="ffe-file-upload__file-item-delete-icon"
                    />
                </button>
                <div className="ffe-file-upload__file-item-stencil-info">
                    <div className="ffe-file-upload__file-item-stencil-info-background" />
                    <div className="ffe-file-upload__file-item-stencil-info-filename">
                        {file.name}
                    </div>
                </div>
            </div>
        )}
        {// File finished loading without error
        file.document && !file.error && (
            <div className="ffe-file-upload__file-item-loaded">
                <button
                    type="button"
                    id={file.name}
                    className="ffe-file-upload__file-item-delete-button"
                    onClick={onFileDeleted}
                >
                    {deleteText}
                    <div
                        id={file.name}
                        className="ffe-file-upload__file-item-delete-icon"
                    />
                </button>
                <div className="ffe-file-upload__file-item-filename">
                    {file.name}
                </div>
            </div>
        )}
        {// File has error
        file.error && (
            <div className="ffe-file-upload__file-item-error">
                <div className="ffe-file-upload__file-item-error-icon ffe-field-message ffe-field-message--error" />
                <button
                    type="button"
                    id={file.name}
                    className="ffe-file-upload__file-item-delete-button"
                    onClick={onFileDeleted}
                >
                    {deleteText}
                    <div
                        id={file.name}
                        className="ffe-file-upload__file-item-delete-icon"
                    />
                </button>
                <div className="ffe-file-upload__file-item-error-info">
                    <div className="ffe-file-upload__file-item-error-filename">
                        {file.name}
                    </div>
                    <div className="ffe-file-upload__file-item-error-message">
                        {file.error}
                    </div>
                </div>
            </div>
        )}
    </li>
);

FileItem.propTypes = {
    /** Shape of the file type, name is required, error and document.content is optional */
    file: shape({
        name: stringType.isRequired,
        document: object,
        error: stringType,
    }).isRequired,
    /**
     * Called when the user clicks the delete button for a given file. Is called with the name of the file in question.
     */
    onFileDeleted: func.isRequired,
    /** Label for the cancel button */
    cancelText: stringType,
    /** Label for the delete button */
    deleteText: stringType,
};

export default FileItem;
