# @sb1/ffe-file-upload-react

## Beskrivelse

Filopplastingsknapp med validering og liste over opplastede filer. Komponenten viser en dropzone hvor brukere kan dra filer, eller klikke en knapp for å velge filer fra filsystemet.

Filer kan vises i tre tilstander:

- **Laster** - Filen lastes opp (viser skeleton/stencil)
- **Ferdig** - Filen er lastet opp (viser filnavn)
- **Feil** - Opplastingen feilet (viser feilmelding)

_Merk: `FileReader` støttes ikke i IE9 eller eldre, så denne komponenten vil ikke fungere i eldre nettlesere (http://caniuse.com/#search=filereader)_

## Installasjon

```bash
npm install --save @sb1/ffe-file-upload-react
```

## Bruk

Full dokumentasjon er tilgjengelig på https://sparebank1.github.io/designsystem/komponenter/skjemaelementer/#fileupload.

Denne pakken er avhengig av `@sb1/ffe-icons-react`, `@sb1/ffe-buttons-react` og `@sb1/ffe-form-react`.
Husk å importere less-filene.

### Props

Komponenten krever følgende props:

| Prop              | Type                                   | Påkrevd | Beskrivelse                                                |
| ----------------- | -------------------------------------- | ------- | ---------------------------------------------------------- |
| `id`              | `string`                               | Ja      | ID for input-feltet. Brukes også som base for label-ID.    |
| `label`           | `string`                               | Ja      | Tekst på knappen som åpner fil-velgeren.                   |
| `title`           | `string`                               | Ja      | Overskrift for hele filopplastingsseksjonen.               |
| `infoText`        | `string`                               | Ja      | Informasjonstekst som vises når ingen filer er lastet opp. |
| `uploadTitle`     | `string`                               | Ja      | Tittel i dropzone-seksjonen (f.eks. "Dra filene hit").     |
| `uploadMicroText` | `string`                               | Ja      | Liten tekst mellom tittel og knapp (f.eks. "Eller").       |
| `uploadSubText`   | `string`                               | Ja      | Undertekst i dropzone (f.eks. "PDF-filer, maks 50 MB").    |
| `files`           | `Record<string, FileItem>`             | Ja      | Objekt med opplastede filer, indeksert på filnavn.         |
| `onFilesSelected` | `(fileList: FileList \| null) => void` | Ja      | Kalles når bruker velger filer via fil-velgeren.           |
| `onFilesDropped`  | `(fileList: FileList \| null) => void` | Ja      | Kalles når bruker drar filer inn i dropzone.               |
| `onFileDeleted`   | `(file: FileItem) => void`             | Ja      | Kalles når bruker sletter en fil. Mottar fil-objektet.     |

Valgfrie props:

| Prop          | Type      | Standard | Beskrivelse                                       |
| ------------- | --------- | -------- | ------------------------------------------------- |
| `infoSubText` | `string`  | -        | Ekstra undertekst under `infoText`.               |
| `cancelText`  | `string`  | -        | Tekst på avbryt-knappen (vises under lasting).    |
| `deleteText`  | `string`  | -        | Tekst på slett-knappen (vises for ferdige filer). |
| `multiple`    | `boolean` | `false`  | Tillat opplasting av flere filer samtidig.        |
| `accept`      | `string`  | `"*"`    | Aksepterte filtyper (f.eks. `".pdf,.jpg,.png"`).  |

### FileItem-struktur

Hvert filobjekt i `files`-proppen må ha følgende struktur:

```typescript
interface FileItem<Document = unknown> {
    name: string; // Påkrevd: Filnavnet
    document?: Document; // Valgfritt: Dokumentdata (settes når opplasting er ferdig)
    error?: string; // Valgfritt: Feilmelding (vises hvis opplasting feilet)
}
```

Filtilstanden bestemmes slik:

- `!document && !error` -> Filen laster (viser skeleton)
- `document && !error` -> Filen er ferdig (viser filnavn med slett-knapp)
- `error` -> Filen har feil (viser feilmelding)

## Eksempler

### Grunnleggende eksempel

```tsx
import { FileUpload, FileUploadProps } from '@sb1/ffe-file-upload-react';
import { useState } from 'react';

// Definerer typen for dokumentdata
interface DocumentData {
    content: ArrayBuffer | string | null;
}

// Definerer typen for fil-objekter
type FileItem = {
    name: string;
    document?: DocumentData;
    error?: string;
};

function MyComponent() {
    const [files, setFiles] = useState<Record<string, FileItem>>({});

    const handleFilesSelected = (fileList: FileList | null) => {
        if (!fileList) return;

        // Legg til filer i "laster"-tilstand
        Array.from(fileList).forEach(file => {
            setFiles(prev => ({
                ...prev,
                [file.name]: { name: file.name },
            }));

            // Simuler opplasting
            setTimeout(() => {
                setFiles(prev => ({
                    ...prev,
                    [file.name]: {
                        name: file.name,
                        document: { content: 'uploaded' },
                    },
                }));
            }, 2000);
        });
    };

    const handleFileDeleted = (file: FileItem) => {
        setFiles(prev => {
            const next = { ...prev };
            delete next[file.name];
            return next;
        });
    };

    return (
        <FileUpload
            id="file-upload"
            label="Velg filer"
            title="Dokumentasjon"
            infoText="Last opp relevante dokumenter her."
            infoSubText="Husk å ikke laste opp personsensitive opplysninger."
            uploadTitle="Dra filene hit"
            uploadMicroText="Eller"
            uploadSubText="PDF-filer, maks 50 MB"
            files={files}
            onFilesSelected={handleFilesSelected}
            onFilesDropped={handleFilesSelected}
            onFileDeleted={handleFileDeleted}
            cancelText="Avbryt"
            deleteText="Slett"
            accept=".pdf,.jpg,.png"
            multiple={true}
        />
    );
}
```

### Komplett eksempel med filopplasting

```tsx
import {
    FileUpload,
    getFileContent,
    getUniqueFileName,
} from '@sb1/ffe-file-upload-react';
import { useState } from 'react';

interface DocumentData {
    content: ArrayBuffer | string | null;
}

type FileItem = {
    name: string;
    document?: DocumentData;
    error?: string;
};

function FileUploadWithBackend() {
    const [files, setFiles] = useState<Record<string, FileItem>>({});

    const uploadFiles = async (fileList: FileList | null) => {
        if (!fileList) return;

        const fileArray = Array.from(fileList);

        // Generer unike filnavn for alle filer i batchen
        const uniqueNames: Record<string, string> = {};
        fileArray.forEach(file => {
            uniqueNames[file.name] = getUniqueFileName(file.name, {
                ...files,
                ...uniqueNames,
            });
        });

        // Legg til alle filer i "laster"-tilstand
        setFiles(prev => {
            const next = { ...prev };
            fileArray.forEach(file => {
                const newName = uniqueNames[file.name];
                next[newName] = { name: newName };
            });
            return next;
        });

        // Last opp hver fil
        for (const file of fileArray) {
            const newName = uniqueNames[file.name];
            try {
                // Les filinnhold som base64
                const content = await getFileContent(file);

                // Send til backend (erstatt med faktisk API-kall)
                await fetch('/api/upload', {
                    method: 'POST',
                    body: JSON.stringify({ name: newName, content }),
                });

                // Marker fil som ferdig
                setFiles(prev => ({
                    ...prev,
                    [newName]: { name: newName, document: { content } },
                }));
            } catch (error) {
                // Marker fil med feil
                setFiles(prev => ({
                    ...prev,
                    [newName]: { name: newName, error: 'Opplasting feilet' },
                }));
            }
        }
    };

    const deleteFile = async (file: FileItem) => {
        // Slett fra backend hvis filen var lastet opp
        if (file.document) {
            await fetch('/api/delete', {
                method: 'DELETE',
                body: JSON.stringify({ name: file.name }),
            });
        }

        // Fjern fra state
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
            infoText="Legg ved relevant dokumentasjon for søknaden."
            uploadTitle="Dra filene hit"
            uploadMicroText="Eller"
            uploadSubText="PDF, JPG eller PNG, maks 50 MB per fil"
            files={files}
            onFilesSelected={uploadFiles}
            onFilesDropped={uploadFiles}
            onFileDeleted={deleteFile}
            cancelText="Avbryt"
            deleteText="Slett"
            accept=".pdf,.jpg,.jpeg,.png"
            multiple={true}
        />
    );
}
```

### Hjelpefunksjoner

Pakken eksporterer to hjelpefunksjoner:

#### getFileContent

Leser innholdet av en fil som base64 data URL:

```typescript
import { getFileContent } from '@sb1/ffe-file-upload-react';

const content: Promise<ArrayBuffer | string | null> = getFileContent(file);
```

#### getUniqueFileName

Genererer et unikt filnavn basert på eksisterende filer. Legger til `-1`, `-2`, etc. hvis navnet allerede eksisterer:

```typescript
import { getUniqueFileName } from '@sb1/ffe-file-upload-react';

const existingFiles = { 'dokument.pdf': { name: 'dokument.pdf' } };
const uniqueName = getUniqueFileName('dokument.pdf', existingFiles);
// Returnerer 'dokument-1.pdf'
```

## Utvikling

For å starte en lokal utviklingsserver, kjør følgende fra designsystem-rotmappen:

```bash
npm install
npm run build
npm start
```

En lokal Storybook-instans med live reloading vil kjøre på http://localhost:6006/.

Eksempelimplementasjoner med de nyeste versjonene av alle komponentene er også tilgjengelige på https://sparebank1.github.io/designsystem.
