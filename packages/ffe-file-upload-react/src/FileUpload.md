En komponent for å laste opp filer, for eksempel Excel-ark eller annen dokumentasjon.

```js
initialState = { selectedFiles: [] };

const getFileContents = file =>
    new Promise(resolve => {
        // Get the file contents here using getFileContent
        // import { getFileContent } from '@sb1/ffe-file-upload-react';
        setTimeout(resolve, 300, 'Her kommer filinnholdet');
    });

const onFilesSelected = files => {
    Promise.all(Array.prototype.map.call(files, getFileContents))
        .then(selectedFilesContents =>
            Array.prototype.map.call(files, ({ name, type, size }, i) => ({
                name,
                type,
                size,
                content: selectedFilesContents[i],
            })),
        )
        .then(selectedFiles =>
            setState(prevState => ({
                selectedFiles: prevState.selectedFiles.concat(selectedFiles),
            })),
        );
};

const onFileDeleted = file => {
    setState(prevState => ({
        selectedFiles: prevState.selectedFiles.filter(
            f => f.name !== file.name,
        ),
    }));
};

<FileUpload
    id="file-uploader"
    label="Last opp Excel-ark"
    selectedFiles={state.selectedFiles}
    onFileDeleted={onFileDeleted}
    onFilesSelected={onFilesSelected}
/>;
```

Opplastingsprosessen er som følger:

1. Brukeren velger filer i native filopplastingsview
2. Browseren mottar event-callback, med info om filene, om at brukeren har valg filer for opplasting, men disse er enda
   ikke lastet opp
3. Konsumenter av `FileUpload` må selv starte nedlasting av valgte filer fra klientens filsystem (ved å bruke
   `file-content.js`)
4. Konsumenter oppretter en liste over filene og sender disse inn til `FileUpload` som `selectedFiles`.
