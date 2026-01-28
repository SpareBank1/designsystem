# @sb1/ffe-file-upload-react

## Beskrivelse

Filopplastingsknapp med validering og liste over opplastede filer.

_Merk: `FileReader` støttes ikke i IE9 eller eldre, så denne komponenten vil ikke fungere i eldre nettlesere (http://caniuse.com/#search=filereader)_

## Installasjon

```bash
npm install --save @sb1/ffe-file-upload-react
```

## Bruk

Full dokumentasjon er tilgjengelig på https://design.sparebank1.no/komponenter/skjemaelementer/#fileupload.

Denne pakken er avhengig av `@sb1/ffe-icons-react`, `@sb1/ffe-buttons-react` og `@sb1/ffe-form-react`.
Husk å importere less-filene.

## Eksempler

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

## Utvikling

For å starte en lokal utviklingsserver, kjør følgende fra designsystem-rotmappen:

```bash
npm install
npm run build
npm start
```

En lokal Storybook-instans med live reloading vil kjøre på http://localhost:6006/.

Eksempelimplementasjoner med de nyeste versjonene av alle komponentene er også tilgjengelige på https://sparebank1.github.io/designsystem.
