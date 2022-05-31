import * as React from 'react';

export interface FileItem {
    name: string;
    document?: File;
    error?: string;
}

export interface FileUploadProps {
    id: string;
    label: string;
    files: Record<string, FileItem>;
    onFilesSelected(fileList: FileList): void;
    onFilesDropped(fileList: FileList): void;
    onFileDeleted(file: File): void;
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
declare class FileUpload extends React.Component<FileUploadProps, any> {}

declare function getFileContent(file: File): Promise<any>;

export default FileUpload;
export { getFileContent };
