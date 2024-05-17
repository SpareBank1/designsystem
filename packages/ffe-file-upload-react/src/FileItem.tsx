import React from 'react';
import { Icon } from '@sb1/ffe-icons-react';

export interface FileItemProps<Document> {
    /** Shape of the file type, name is required, error and document.content is optional */
    file: {
        name: string;
        document?: Document;
        error?: string;
    };
    /**
     * Called when the user clicks the delete button for a given file. Is called with the name of the file in question.
     */
    onFileDeleted: React.MouseEventHandler<HTMLButtonElement>;
    /** Label for the cancel button */
    cancelText?: string;
    /** Label for the delete button */
    deleteText?: string;
}

export function FileItem<Document>({
    file,
    onFileDeleted,
    cancelText,
    deleteText,
}: FileItemProps<Document>) {
    const closeIcon =
        'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgLTk2MCA5NjAgOTYwIiB3aWR0aD0iMjQiPjxwYXRoIGQ9Ik00ODAtNDM3Ljg0NyAyNzcuMDc2LTIzNC45MjRxLTguMzA3IDguMzA4LTIwLjg4NCA4LjUtMTIuNTc2LjE5My0yMS4yNjgtOC41LTguNjkzLTguNjkyLTguNjkzLTIxLjA3NnQ4LjY5My0yMS4wNzZMNDM3Ljg0Ny00ODAgMjM0LjkyNC02ODIuOTI0cS04LjMwOC04LjMwNy04LjUtMjAuODg0LS4xOTMtMTIuNTc2IDguNS0yMS4yNjggOC42OTItOC42OTMgMjEuMDc2LTguNjkzdDIxLjA3NiA4LjY5M0w0ODAtNTIyLjE1M2wyMDIuOTI0LTIwMi45MjNxOC4zMDctOC4zMDggMjAuODg0LTguNSAxMi41NzYtLjE5MyAyMS4yNjggOC41IDguNjkzIDguNjkyIDguNjkzIDIxLjA3NnQtOC42OTMgMjEuMDc2TDUyMi4xNTMtNDgwbDIwMi45MjMgMjAyLjkyNHE4LjMwOCA4LjMwNyA4LjUgMjAuODg0LjE5MyAxMi41NzYtOC41IDIxLjI2OC04LjY5MiA4LjY5My0yMS4wNzYgOC42OTN0LTIxLjA3Ni04LjY5M0w0ODAtNDM3Ljg0N1oiLz48L3N2Zz4=';

    const exclamationIcon =
        'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMjAiIHZpZXdCb3g9IjAgLTk2MCA5NjAgOTYwIiB3aWR0aD0iMjAiPjxwYXRoIGQ9Ik00ODAuMjExLTM4MC40MTNxLTE3LjM2MyAwLTI5LjUzNy0xMi4wMjRUNDM4LjUtNDIxLjkxM3YtMjY0cTAtMTcuNDUyIDExLjk2My0yOS40NzYgMTEuOTY0LTEyLjAyNCAyOS4zMjYtMTIuMDI0IDE3LjM2MyAwIDI5LjUzNyAxMi4wMjR0MTIuMTc0IDI5LjQ3NnYyNjRxMCAxNy40NTItMTEuOTYzIDI5LjQ3Ni0xMS45NjQgMTIuMDI0LTI5LjMyNiAxMi4wMjRabTAgMTQ3LjgyNnEtMTcuMzYzIDAtMjkuNTM3LTExLjk2My0xMi4xNzQtMTEuOTY0LTEyLjE3NC0yOS4zMjYgMC0xNy4zNjMgMTEuOTYzLTI5LjUzNyAxMS45NjQtMTIuMTc0IDI5LjMyNi0xMi4xNzQgMTcuMzYzIDAgMjkuNTM3IDExLjk2M1E1MjEuNS0yOTEuNjYgNTIxLjUtMjc0LjI5N3EwIDE3LjM2Mi0xMS45NjMgMjkuNTM2LTExLjk2NCAxMi4xNzQtMjkuMzI2IDEyLjE3NFoiLz48L3N2Zz4=';

    return (
        <li>
            {
                // File is loading
                !file.document && !file.error && (
                    <div className="ffe-file-upload__file-item-stencil">
                        <button
                            type="button"
                            id={file.name}
                            className="ffe-file-upload__file-item-delete-button"
                            onClick={onFileDeleted}
                        >
                            <span className="ffe-file-upload__file-item-delete-button-text">
                                {cancelText}
                            </span>
                            <Icon
                                fileUrl={closeIcon}
                                size="md"
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
                )
            }
            {
                // File finished loading without error
                file.document && !file.error && (
                    <div className="ffe-file-upload__file-item-loaded">
                        <button
                            type="button"
                            id={file.name}
                            className="ffe-file-upload__file-item-delete-button"
                            onClick={onFileDeleted}
                        >
                            <span className="ffe-file-upload__file-item-delete-button-text">
                                {deleteText}
                            </span>
                            <Icon
                                fileUrl={closeIcon}
                                size="md"
                                className="ffe-file-upload__file-item-delete-icon"
                            />
                        </button>
                        <div className="ffe-file-upload__file-item-filename">
                            {file.name}
                        </div>
                    </div>
                )
            }
            {
                // File has error
                file.error && (
                    <div
                        className="ffe-file-upload__file-item-error"
                        role="alert"
                    >
                        <div className="ffe-file-upload__file-item-error-icon">
                            <Icon fileUrl={exclamationIcon} size="sm" />
                        </div>
                        <button
                            type="button"
                            id={file.name}
                            className="ffe-file-upload__file-item-delete-button"
                            onClick={onFileDeleted}
                        >
                            <span className="ffe-file-upload__file-item-delete-button-text">
                                {deleteText}
                            </span>
                            <Icon
                                fileUrl={closeIcon}
                                size="md"
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
                )
            }
        </li>
    );
}
