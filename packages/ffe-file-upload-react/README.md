# @sb1/ffe-file-upload-react

## Description

Upload file button with validation and list of uploaded files.

Filopplastingsknapp med validering og liste over opplastede filer.

_NB! `FileReader` is not supported in IE9 or below so this component will not work for older browsers(http://caniuse.com/#search=filereader)_

## Install

```
npm install --save @sb1/ffe-file-upload-react
```

## Usage

Full documentation on file upload usage is available at https://design.sparebank1.no/komponenter/skjemaelementer/#fileupload.

This package depends on `@sb1/ffe-icons-react`, `@sb1/ffe-buttons-react` and `@sb1/ffe-form-react`.
Make sure you import the less-files.

## Examples

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

## Development

To start a local development server, run the following from the designsystem root folder:

```bash
npm install
npm run build
npm start
```

A local instance of `Storybook` with live reloading will run at http://localhost:6006/.

Example implementations using the latest versions of all components are also available at https://sparebank1.github.io/designsystem.
