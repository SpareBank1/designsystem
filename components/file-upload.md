# @sb1/ffe-file-upload-react

## Beskrivelse

Filopplastingskomponent med dropzone, validering og filliste. Filer vises i tre tilstander:

## Komponenter

Denne pakken eksporterer følgende komponenter:

- `FileUpload`
- `getFileContent`
- `getUniqueFileName`

## Installasjon

Installer pakken og alle dens avhengigheter:

```bash
npm install @sb1/ffe-file-upload-react
```

## API-referanse

### FileUpload Props

| Prop | Type | Påkrevd | Beskrivelse |
|------|------|---------|-------------|
| `id` | `string` | Ja | ID for the input field. The ID is used as a base for the label ID as well. |
| `label` | `string` | Ja | Label for the button to trigger native upload handling. |
| `files` | `Record<string, FileItemProps<Document>['file']>` | Ja | A map of files, indexed by file name (check file-shape on FileItem.js propTypes), that the user has uploaded. Must be maintained outside of `FileUpload`. It is up to the implementation to deny or accept file types, sizes, etc, and it is important that duplicates are not allowed. |
| `multiple` | `boolean` | Nei | Whether or not uploading multiple files at once via the native file handler is allowed |
| `title` | `string` | Ja | Title module |
| `infoText` | `string` | Ja | Text on the info-section |
| `infoSubText` | `string` | Nei | Subtext on the info-section |
| `cancelText` | `string` | Nei | Label for the cancel button |
| `deleteText` | `string` | Nei | Label for the delete button |
| `uploadTitle` | `string` | Ja | Title on the upload-section |
| `uploadMicroText` | `string` | Ja | MicroText on the upload-section |
| `uploadSubText` | `string` | Ja | SubText on the upload-section |
| `accept` | `string` | Nei | Unique file type specifier that describes a type of file that may be selected by the user, e.g. ".pdf" See MDN for documentation on [Unique file type specifiers](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/file#unique_file_type_specifiers) |

### getFileContent Props

Ingen komponentspesifikke props utover native HTML-attributter.

### getUniqueFileName Props

Ingen komponentspesifikke props utover native HTML-attributter.

## Eksempler (fra README)

```tsx
import {
    FileUpload,
    getFileContent,
    getUniqueFileName,
} from '@sb1/ffe-file-upload-react';
import { useState } from 'react';

type FileItem = {
    name: string;
    document?: { content: unknown };
    error?: string;
};

function FileUploadExample() {
    const [files, setFiles] = useState<Record<string, FileItem>>({});

    const uploadFiles = async (fileList: FileList | null) => {
        if (!fileList) return;

        for (const file of Array.from(fileList)) {
            const name = getUniqueFileName(file.name, files);
            setFiles(prev => ({ ...prev, [name]: { name } }));

            try {
                const content = await getFileContent(file);
                // Erstatt med faktisk API-kall
                await fetch('/api/upload', {
                    method: 'POST',
                    body: JSON.stringify({ name, content }),
                });
                setFiles(prev => ({
                    ...prev,
                    [name]: { name, document: { content } },
                }));
            } catch {
                setFiles(prev => ({
                    ...prev,
                    [name]: { name, error: 'Opplasting feilet' },
                }));
            }
        }
    };

    const deleteFile = (file: FileItem) => {
        setFiles(prev => {
            const next = { ...prev };
            delete next[file.name];
            return next;
        });
    };

    return (
        <FileUpload
            id="dokumenter"
            label="Velg filer"
            title="Last opp dokumenter"
            infoText="Legg ved relevant dokumentasjon."
            uploadTitle="Dra filene hit"
            uploadMicroText="Eller"
            uploadSubText="PDF, JPG eller PNG, maks 50 MB"
            files={files}
            onFilesSelected={uploadFiles}
            onFilesDropped={uploadFiles}
            onFileDeleted={deleteFile}
            cancelText="Avbryt"
            deleteText="Slett"
            accept=".pdf,.jpg,.png"
            multiple={true}
        />
    );
}
```

```typescript
import { getFileContent, getUniqueFileName } from '@sb1/ffe-file-upload-react';

// Les filinnhold som base64 data URL
const content = await getFileContent(file);

// Generer unikt filnavn (legger til -1, -2 etc. ved duplikater)
const uniqueName = getUniqueFileName('dokument.pdf', existingFiles);
```

## Dokumentasjon

Full dokumentasjon er tilgjengelig på https://sparebank1.github.io/designsystem/

## Tilleggskontekst

Dette er en del av SpareBank 1 FFE (Felles Front End) designsystem.
Alle komponenter følger SpareBank 1s designretningslinjer og tilgjengelighetsstandarder.
