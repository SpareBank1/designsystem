import React, { useRef, useState } from 'react';
import { FileItem, FileItemProps } from './FileItem';
import classNames from 'classnames';
import { SecondaryButton } from '@sb1/ffe-buttons-react';
import { Icon } from '@sb1/ffe-icons-react';

/**
 * Generates a unique filename for iOS camera uploads, ensuring the name isn't too long
 * @param originalFile - Original File object
 * @returns A new File object with a unique, length-constrained name
 */
const generateUniqueFileName = (originalFile: File): File => {
    // Only handle 'image.jpg' from iOS camera
    if (originalFile.name !== 'image.jpg') {
        return originalFile;
    }

    // Use timestamp for uniqueness, no need for additional randomness
    const timestamp = new Date().getTime();
    const newName = `image_${timestamp}.jpg`;

    // Create a new File object with the unique name
    return new File([originalFile], newName, {
        type: originalFile.type,
        lastModified: originalFile.lastModified,
    });
};

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

/**
 * En komponent for opplasting av filer, som kan brukes til å håndtere dokumentopplasting i ulike formater.
 *
 * Filer kan lastes opp på to måter:
 * 1. Via den native filopplastingsdialogen i nettleseren
 * 2. Ved å dra og slippe filer direkte i opplastingssonen
 *
 * Filhåndteringsflyt:
 * 1. Brukeren velger filer via opplastingsdialog eller drag-and-drop
 * 2. Nettleseren sender event-callback med info om valgte filer
 * 3. Konsumenten må selv hente filinnholdet fra brukerens filsystem
 * 4. Konsumenten oppretter et objekt med filinformasjon som sendes til komponenten
 * 5. Validering av filstørrelse og type må håndteres av konsumenten
 *
 * Files-objektet er indeksert på filnavn og har følgende struktur:
 * @example
 * ```typescript
 * const files = {
 *     fileBeingUploaded: {
 *         name: 'fileBeingUploaded',
 *     },
 *     fileWithError: {
 *         name: 'fileWithError',
 *         error: 'Feil filtype',
 *     },
 *     fileUploaded: {
 *         name: 'fileUploaded',
 *         document: {
 *             content: '(data)',
 *         },
 *     },
 * };
 * ```
 *
 * Merk:
 * - Komponenten er tilstandsløs - all filhåndtering må gjøres i foreldrekomponenten
 * - Duplikate filnavn støttes ikke
 * - Ved opplasting fra iOS-kamera omdøpes filer automatisk med timestamp
 */
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
        const processedFiles = processFiles(event.dataTransfer.files);
        onFilesDropped(processedFiles);
    };

    const processFiles = (fileList: FileList | null): FileList | null => {
        if (!fileList) return null;

        const dataTransfer = new DataTransfer();
        Array.from(fileList).forEach(file => {
            const processedFile = generateUniqueFileName(file);
            dataTransfer.items.add(processedFile);
        });
        return dataTransfer.files;
    };

    const handleFileDeleted = (event: React.MouseEvent<HTMLButtonElement>) => {
        onFileDeleted(files[event.currentTarget.id]);
    };

    const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
        if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault();
            triggerUploadFileNativeHandler();
        }
    };

    const triggerUploadFileNativeHandler = () => {
        if (fileInputElement.current) {
            fileInputElement.current.value = '';
            fileInputElement.current.click();
        }
    };

    const handleFileSelected = (event: React.ChangeEvent<HTMLInputElement>) => {
        const processedFiles = processFiles(event.target.files);
        onFilesSelected(processedFiles);
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
            <div
                className="ffe-file-upload__upload-section"
                onDrop={handleFilesDropped}
                onDragOver={event => {
                    event.preventDefault();
                    setIsHover(true);
                }}
                onDragLeave={() => setIsHover(false)}
                role="button"
                tabIndex={0}
                onKeyDown={handleKeyDown}
                aria-label={label}
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
