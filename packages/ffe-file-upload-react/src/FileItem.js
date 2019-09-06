import React from 'react';
import { number, func, shape, object, string as stringType } from 'prop-types';

const FileItem = props => (
    <li key={props.index}>
        {// File is loading
        !props.file.document && !props.file.error && (
            <div className="ffe-file-upload__info-section__stencil">
                <div className="ffe-file-upload__info-section__stencil__info">
                    <div className="ffe-file-upload__info-section__stencil__info__background" />
                    <div className="ffe-file-upload__info-section__stencil__info__text">
                        {props.file.name}
                    </div>
                </div>
                <button
                    type="button"
                    id={props.file.name}
                    className="ffe-file-upload__info-section__delete__button"
                    onClick={props.onFileDeleted}
                >
                    {props.cancelText}
                    <div
                        id={props.file.name}
                        className="ffe-file-upload__info-section__delete__icon"
                    />
                </button>
            </div>
        )}
        {// File finished loading
        props.file.document && (
            <div className="ffe-file-upload__info-section__loaded">
                <button
                    type="button"
                    id={props.file.name}
                    className="ffe-file-upload__info-section__delete__button"
                    onClick={props.onFileDeleted}
                >
                    {props.deleteText}
                    <div
                        id={props.file.name}
                        className="ffe-file-upload__info-section__delete__icon"
                    />
                </button>
                <div className="ffe-file-upload__info-section__filename">
                    {props.file.name}
                </div>
            </div>
        )}
        {// File has error
        props.file.error && (
            <div className="ffe-file-upload__info-section__error">
                <div className="ffe-file-upload__info-section__error__icon ffe-field-error-message" />
                <button
                    type="button"
                    id={props.file.name}
                    className="ffe-file-upload__info-section__delete__button"
                    onClick={props.onFileDeleted}
                >
                    {props.deleteText}
                    <div
                        id={props.file.name}
                        className="ffe-file-upload__info-section__delete__icon"
                    />
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
    /** Shape of the file type, name is required, error and document.content is optional */
    file: shape({
        name: stringType.isRequired,
        document: object,
        error: stringType,
    }).isRequired,
    index: number.isRequired,
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
