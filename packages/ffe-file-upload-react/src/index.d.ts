import * as React from 'react';

export interface FileItem<T> {
    name: string;
    document?: T;
    error?: string;
}

export interface FileUploadProps<T> {
    id: string;
    label: string;
    files: Record<string, FileItem<T>>;
    onFilesSelected(fileList: FileList): void;
    onFilesDropped(fileList: FileList): void;
    onFileDeleted(file: FileItem<T>): void;
    multiple?: boolean;
    title: string;
    infoText: string;
    infoSubText?: string;
    cancelText?: string;
    deleteText?: string;
    uploadTitle: string;
    uploadMicroText: string;
    uploadSubText: string;
}
declare class FileUpload<T> extends React.Component<FileUploadProps<T>, any> {}

declare function getFileContent(file: File): Promise<string>;

export default FileUpload;
export { getFileContent };
