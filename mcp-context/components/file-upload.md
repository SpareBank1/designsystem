# @sb1/ffe-file-upload-react

## Beskrivelse

Filopplastingsknapp med validering og liste over opplastede filer.

## Komponenter

Denne pakken eksporterer følgende komponenter:

- `FileUpload`
- `getFileContent`
- `getUniqueFileName`

## Installasjon

Installer pakken og alle dens avhengigheter:

```bash
npm install @sb1/ffe-file-upload-react @sb1/ffe-buttons-react @sb1/ffe-file-upload @sb1/ffe-form @sb1/ffe-icons-react @sb1/ffe-buttons @sb1/ffe-core @sb1/ffe-icons
```

### Avhengigheter

Denne pakken er avhengig av:

- `@sb1/ffe-buttons-react`
- `@sb1/ffe-file-upload`
- `@sb1/ffe-form`
- `@sb1/ffe-icons-react`
- `@sb1/ffe-buttons`
- `@sb1/ffe-core`
- `@sb1/ffe-icons`

## CSS-import

I prosjektets hoved-CSS-fil, importer de nødvendige stilene:

```css
@import '@sb1/ffe-core/css/ffe.css';
@import '@sb1/ffe-buttons/css/buttons.css';
@import '@sb1/ffe-file-upload/css/file-upload.css';
@import '@sb1/ffe-form/css/form.css';
@import '@sb1/ffe-icons/css/ffe-icons.css';
```

Merk: Sørg for å importere `@sb1/ffe-core/css/ffe.css` først, da den inneholder grunnleggende stiler.

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
import { FileUpload } from '@sb1/ffe-file-upload-react';
import { useState } from 'react';

function MyComponent() {
    const [files, setFiles] = useState([]);

    return (
        <FileUpload
            id="file-upload"
            label="Last opp dokument"
            accept=".pdf,.jpg,.png"
            multiple
            onFilesSelected={selectedFiles => {
                setFiles([...files, ...selectedFiles]);
            }}
            onFileDeleted={index => {
                setFiles(files.filter((_, i) => i !== index));
            }}
        />
    );
}
```

## Dokumentasjon

Full dokumentasjon er tilgjengelig på https://design.sparebank1.no/

## Tilleggskontekst

Dette er en del av SpareBank 1 FFE (Felles Front End) designsystem.
Alle komponenter følger SpareBank 1s designretningslinjer og tilgjengelighetsstandarder.
