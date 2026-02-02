# @sb1/ffe-file-upload-react

## Beskrivelse

Filopplastingskomponent med dropzone, validering og filliste. Filer vises i tre tilstander:

- **Laster** - Viser skeleton
- **Ferdig** - Viser filnavn med slett-knapp
- **Feil** - Viser feilmelding

## Installasjon

```bash
npm install --save @sb1/ffe-file-upload-react
```

## Bruk

Avhengig av `@sb1/ffe-icons-react`, `@sb1/ffe-buttons-react` og `@sb1/ffe-form-react`. Husk å importere less-filene.

## Eksempler

### Grunnleggende eksempel

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

### Hjelpefunksjoner

```typescript
import { getFileContent, getUniqueFileName } from '@sb1/ffe-file-upload-react';

// Les filinnhold som base64 data URL
const content = await getFileContent(file);

// Generer unikt filnavn (legger til -1, -2 etc. ved duplikater)
const uniqueName = getUniqueFileName('dokument.pdf', existingFiles);
```

## Utvikling

```bash
npm install && npm run build && npm start
```

Storybook kjører på http://localhost:6006/
