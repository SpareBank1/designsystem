En komponent for å laste opp filer, for eksempel Excel-ark eller annen dokumentasjon. Eksempel på implementasjon:

```js
import React from 'react';
import FileUpload from '@sb1/ffe-file-upload-react';
import { getFileContent } from '@sb1/ffe-file-upload-react';

class Example extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            attachments: {},
        };
    }

    onFilesSelected = fileList => {
        Array.from(fileList).forEach(file => this.initiateFileUpload(file));
    };

    onFilesDropped = event => {
        event.preventDefault();
        if (event.dataTransfer) {
            Array.from(event.dataTransfer.files).forEach(file =>
                this.initiateFileUpload(file),
            );
        }
    };

    updateAttachments = ref => {
        this.setState(prevState => ({
            attachments: {
                ...prevState.attachments,
                [ref.name]: ref,
            },
        }));
    };

    deleteAttachment = filename => {
        const attachments = this.state.attachments;
        delete attachments[filename];
        this.setState({ attachments: attachments });
    };

    maxUploadSizeInMB = 50;
    acceptedFileTypes = ['application/pdf'];

    initiateFileUpload = async file => {
        const ref = {
            name: file.name,
            size: file.size,
            type: file.type,
        };

        if (file.size > this.maxUploadSizeInMB * 1024 * 1024) {
            ref.error = 'Filen er for stor';
            this.updateAttachments(ref);
            return;
        } else if (!this.acceptedFileTypes.includes(file.type)) {
            ref.error = 'Feil filtype';
            this.updateAttachments(ref);
            return;
        }

        this.updateAttachments(ref);

        try {
            const fileContent = await getFileContent(file);
            const document = {}; // document can be uploaded to backend here including error message if rejected etc (set the string on ref.error)
            document.content = fileContent;
            ref.document = fileContent;
            this.updateAttachments(ref);
        } catch (err) {
            ref.error = 'Ukjent feil';
            this.updateAttachments(ref);
        }
    };

    render() {
        return (
            <FileUpload
                id="ffe-file-upload-example"
                label={'Velg filer'}
                title={'Dokumentasjon'}
                infoText={
                    'Det kan være vanskelig å estimere fremtiden, derfor kan du laste opp eventuelle filer som viser til fremtidig budsjett eller inntjening.'
                }
                infoSubText={
                    'Husk å ikke laste opp personsensitive opplysninger eller dokumenter som bedriften ikke vil dele.'
                }
                uploadTitle={'Dra filene hit'}
                uploadMicroText={'Eller'}
                uploadSubText={'PDF-filer, maks 50 MB'}
                files={this.state.attachments}
                cancelText={'Avbryt'}
                deleteText={'Slett'}
                onFileDeleted={e => this.deleteAttachment(e.target.id)}
                onFilesSelected={this.onFilesSelected}
                onFilesDropped={this.onFilesDropped}
                multiple
            />
        );
    }
}

export default Example;
```

Opplastingsprosessen er som følger:

1. Brukeren velger filer i native filopplastingsview eller via 'drag and drop'
2. Browseren mottar event-callback, med info om filene, om at brukeren har valg filer for opplasting, men disse er enda
   ikke lastet opp
3. Konsumenter av `FileUpload` må selv starte nedlasting av valgte filer fra klientens filsystem (ved å bruke
   `file-content.js`)
4. Konsumenter oppretter et objekt med info om filene og sender disse inn til `FileUpload` som `files`.
5. Det er opp til konsumenten selv å avvise filer med feil størrelse eller type (se eksempel over).
6. `files` objektet er indeksert på navn med selve `name` påkrevet, mens `error` og `document` er optional.
7. Et eksempel på `files` som inkluderer de 3 mulighetene:

```js
files = {
    fileBeingUploaded: {
        name: 'fileBeingUploaded',
    },
    fileWithError: {
        name: 'fileWithError',
        error: 'Feil filtype',
    },
    fileUploaded: {
        name: 'fileUploaded',
        document: {
            content: '(data)',
        },
    },
};
```
