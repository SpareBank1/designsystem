import React, { Fragment } from 'react';
import { number, func, shape, string as stringType } from 'prop-types';

const FileItem = props => (
    <li key={props.index}>
        {// File is loading
        !props.file.content && !props.file.error && (
            <div className="ffe-file-upload__info-section__stencil">
                <div className="ffe-file-upload__info-section__stencil__info">
                    <div className="ffe-file-upload__info-section__stencil__info__background" />
                    <div className="ffe-file-upload__info-section__stencil__info__text">
                        {props.file.name}
                    </div>
                </div>
                <button
                    id={props.file.name}
                    className="ffe-file-upload__info-section__delete-button"
                    onClick={props.onFileDeleted}
                >
                    {props.cancelText}
                </button>
            </div>
        )}
        {// File finished loading
        props.file.content && (
            <Fragment>
                <button
                    id={props.file.name}
                    className="ffe-file-upload__info-section__delete-button"
                    onClick={props.onFileDeleted}
                >
                    {props.deleteText}
                </button>
                <div className="ffe-file-upload__info-section__filename">
                    {props.file.name}
                </div>
            </Fragment>
        )}
        {// File has error
        props.file.error && (
            <div className="ffe-file-upload__info-section__error">
                <div className="ffe-file-upload__info-section__error__icon ffe-field-error-message" />
                <button
                    id={props.file.name}
                    className="ffe-file-upload__info-section__delete-button"
                    onClick={props.onFileDeleted}
                >
                    {props.deleteText}
                </button>
                <div className="ffe-file-upload__info-section__error__info">
                    <div className="ffe-file-upload__info-section__error__info__filename">
                        {props.file.name}
                    </div>
                    <div className="ffe-file-upload__info-section__error__info__error-message">
                        {props.file.error}
                    </div>
                </div>
            </div>
        )}
    </li>
);

FileItem.propTypes = {
    /** shape of the file type */
    file: shape({
        name: stringType.isRequired,
        content: stringType,
        error: stringType,
    }).isRequired,
    index: number.isRequired,
    /**
     * Called when the user clicks the delete button for a given file. Is called with the `File`
     * object of the file in question.
     */
    onFileDeleted: func.isRequired,
    /** Label for the cancel button */
    cancelText: stringType,
    /** Label for the delete button */
    deleteText: stringType,
};

export default FileItem;
