import React, { useRef, useState } from 'react';
import { FileItem, FileItemProps } from './FileItem';
import classNames from 'classnames';
import { SecondaryButton } from '@sb1/ffe-buttons-react';
import { Icon } from '@sb1/ffe-icons-react';

export interface FileUploadProps<Document> {
    /** ID for the input field. The ID is used as a base for the label ID as well. */
    id: string;
    /** Label for the button to trigger native upload handling. */
    label: string;
    /**
     * A map of files, indexed by file name (check file-shape on FileItem.js propTypes), that the user has uploaded.
     * Must be maintained outside of `FileUpload`. It is up to the implementation to deny or accept file types, sizes, etc,
     * and it is important that duplicates are not allowed.
     * */
    files: Record<string, FileItemProps<Document>['file']>;
    /**
     * Will be called with `FileList`-object containing the `File`-objects the user selected.
     * See MDN for documentation on
     * [FileList](https://developer.mozilla.org/en-US/docs/Web/API/FileList) and
     * [File](https://developer.mozilla.org/en-US/docs/Web/API/File).
     */
    onFilesSelected(fileList: FileList | null): void;
    /** Will be called when objects are dropped over the upload-section. */
    onFilesDropped(fileList: FileList | null): void;
    /**
     * Called when the user clicks the delete button for a given file. Is called with the `File`
     * object of the file in question.
     */
    onFileDeleted(file: FileItemProps<Document>['file']): void;
    /** Whether or not uploading multiple files at once via the native file handler is allowed*/
    multiple?: boolean;
    /** Title module */
    title: string;
    /** Text on the info-section */
    infoText: string;
    /** Subtext on the info-section */
    infoSubText?: string;
    /** Label for the cancel button */
    cancelText?: string;
    /** Label for the delete button */
    deleteText?: string;
    /** Title on the upload-section */
    uploadTitle: string;
    /** MicroText on the upload-section */
    uploadMicroText: string;
    /** SubText on the upload-section */
    uploadSubText: string;
    /** Unique file type specifier that describes a type of file that may be selected by the user, e.g. ".pdf"
     *  See MDN for documentation on
     *  [Unique file type specifiers](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/file#unique_file_type_specifiers)
     */
    accept?: string;
}

export function FileUpload<Document>({
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
    accept = '*',
    onFilesDropped,
    onFileDeleted,
    onFilesSelected,
}: FileUploadProps<Document>) {
    const [isHover, setIsHover] = useState(false);
    const fileInputElement = useRef<HTMLInputElement>(null);
    const downloadIcon =
        'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgLTk2MCA5NjAgOTYwIiB3aWR0aD0iMjQiPjxwYXRoIGQ9Ik00ODAtMzQzLjUzOXEtNy4yMzEgMC0xMy40NjEtMi4zMDgtNi4yMzEtMi4zMDctMTEuODQ2LTcuOTIzTDMzMC4zMDktNDc4LjE1M3EtOC45MjMtOC45MjMtOC44MDctMjAuODg0LjExNS0xMS45NjEgOC44MDctMjEuMjY5IDkuMzA4LTkuMzA3IDIxLjM4NC05LjYxNSAxMi4wNzctLjMwOCAyMS4zODUgOWw3Ni45MjMgNzYuOTIzdi0zMDYuMDAxcTAtMTIuNzY5IDguNjE1LTIxLjM4NCA4LjYxNS04LjYxNiAyMS4zODQtOC42MTZ0MjEuMzg0IDguNjE2cTguNjE1IDguNjE1IDguNjE1IDIxLjM4NHYzMDYuMDAxbDc2LjkyMy03Ni45MjNxOC45MjMtOC45MjMgMjEuMTkyLTguODA4IDEyLjI2OS4xMTYgMjEuNTc3IDkuNDIzIDguNjkyIDkuMzA4IDguOTk5IDIxLjA3Ny4zMDggMTEuNzY5LTguOTk5IDIxLjA3Nkw1MDUuMzA3LTM1My43N3EtNS42MTUgNS42MTYtMTEuODQ2IDcuOTIzLTYuMjMgMi4zMDgtMTMuNDYxIDIuMzA4Wk0yNTIuMzA5LTE4MC4wMDFxLTMwLjMwOCAwLTUxLjMwOC0yMXQtMjEtNTEuMzA4di03OC40NjFxMC0xMi43NjkgOC42MTYtMjEuMzg0IDguNjE1LTguNjE1IDIxLjM4NC04LjYxNXQyMS4zODQgOC42MTVRMjQwLTM0My41MzkgMjQwLTMzMC43N3Y3OC40NjFxMCA0LjYxNiAzLjg0NiA4LjQ2MyAzLjg0NyAzLjg0NiA4LjQ2MyAzLjg0Nmg0NTUuMzgycTQuNjE2IDAgOC40NjMtMy44NDYgMy44NDYtMy44NDcgMy44NDYtOC40NjN2LTc4LjQ2MXEwLTEyLjc2OSA4LjYxNS0yMS4zODR0MjEuMzg0LTguNjE1cTEyLjc2OSAwIDIxLjM4NCA4LjYxNSA4LjYxNiA4LjYxNSA4LjYxNiAyMS4zODR2NzguNDYxcTAgMzAuMzA4LTIxIDUxLjMwOHQtNTEuMzA4IDIxSDI1Mi4zMDlaIi8+PC9zdmc+';

    const handleFilesDropped = (event: React.DragEvent<HTMLDivElement>) => {
        event.preventDefault();
        setIsHover(false);
        onFilesDropped(event.dataTransfer.files);
    };

    const handleFileDeleted = (event: React.MouseEvent<HTMLButtonElement>) => {
        onFileDeleted(files[event.currentTarget.id]);
    };

    const triggerUploadFileNativeHandler = () => {
        // clear file input to trigger onChange when uploading same filename
        if (fileInputElement.current) {
            fileInputElement.current.value = '';
            fileInputElement.current.click();
        }
    };

    const handleFileSelected = (event: React.ChangeEvent<HTMLInputElement>) => {
        onFilesSelected(event.target.files);
    };

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
                            onFileDeleted={handleFileDeleted}
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
            {/* eslint-disable-next-line jsx-a11y/no-static-element-interactions */}
            <div
                className="ffe-file-upload__upload-section"
                onDrop={handleFilesDropped}
                onDragOver={event => {
                    event.preventDefault();
                    setIsHover(true);
                }}
                onDragLeave={() => setIsHover(false)}
            >
                <div
                    className={classNames(
                        'ffe-file-upload__upload-section-border',
                        {
                            'ffe-file-upload__upload-section-border--hover':
                                isHover,
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
                        tabIndex={0}
                        as="label"
                        htmlFor={id}
                        leftIcon={<Icon fileUrl={downloadIcon} size="md" />}
                        onClick={e => {
                            e.preventDefault();
                            triggerUploadFileNativeHandler();
                        }}
                        onKeyUp={e => {
                            if (e.key === 'Enter' || e.key === ' ') {
                                triggerUploadFileNativeHandler();
                            }
                        }}
                    >
                        {label}
                    </SecondaryButton>
                    <input
                        id={id}
                        type="file"
                        multiple={multiple}
                        ref={fileInputElement}
                        onChange={handleFileSelected}
                        accept={accept}
                    />
                    <div className="ffe-file-upload__upload-section-subtext">
                        {uploadSubText}
                    </div>
                </div>
            </div>
        </div>
    );
}
