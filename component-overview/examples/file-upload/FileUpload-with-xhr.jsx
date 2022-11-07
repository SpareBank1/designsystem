import { useState } from 'react';
import FileUpload, { getFileContent } from '@sb1/ffe-file-upload-react';
import { InputGroup, Input, Checkbox } from '@sb1/ffe-form-react';

/**
 * Show case for å vise hvordan FileUpload-komponenten kan brukes.
 */
() => {
    /**
     * Fake API til et hypotetisk backend.
     *
     * Responstid og -status kan endres slik at man kan undersøke hvordan
     * FileUpload oppfører seg.
     */
    const [uploadDuration, setUploadDuration] = useState(1);
    const [uploadShouldFail, setUploadShouldFail] = useState(false);

    const sendPostRequest = (url, file) => new Promise((resolve, reject) => {
        console.log('POST', url, file);
        setTimeout(uploadShouldFail ? reject : resolve, uploadDuration * 1000);
    });

    const sendDeleteRequest = (url, file) => console.log('DELETE', url, file);


    /**
     * State og event handler som knytter sammen API og FileUpload.
     */
    const [attachments, setAttachments] = useState({});

    const updateAttachmet = file => setAttachments(prevState => {
        return {
            ...prevState,
            [file.name]: file
        };
    });

    const uploadAttachments = fileList => {
        const files = Array.from(fileList);

        // Legg til filene til `attachments` slik at det blir vist som at de blir lastet opp.
        setAttachments(prevState =>
            files.reduce((acc, file) => ({ ...acc, [file.name]: file }), prevState)
        );

        // Less inn data fra filene og last det opp til et backend.
        for (const file of files) {
            getFileContent(file)
                .then(content => { file.document = { content }; })
                .then(() => sendPostRequest('/upload', file))
                .then(() => {
                    updateAttachmet(file);
                })
                .catch(err => {
                    file.error = 'It did not work';
                    updateAttachmet(file);
                })
            ;
        }
    };

    const deleteAttachement = fileName => {
        sendDeleteRequest('/delete', fileName);
        setAttachments(prevState => {
            const { ...nextState } = prevState;
            delete nextState[fileName];
            return nextState;
        });
    };


    return (
        <>
        <InputGroup>
            <FileUpload
                id="ffe-file-upload-full-example"
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
                cancelText={'Avbryt'}
                deleteText={'Slett'}
                files={attachments}
                onFilesSelected={fileList =>
                    uploadAttachments(fileList)
                }
                onFilesDropped={dragEvent => {
                    if (dragEvent.dataTransfer) {
                        dragEvent.preventDefault();
                        uploadAttachments(dragEvent.dataTransfer.files);
                    }
                }}
                onFileDeleted={evt =>
                    deleteAttachement(evt.target.id)
                }
                multiple={true}
            />
        </InputGroup>
        <InputGroup label="Upload duration (seconds)">
            <Input
                name="uploadDuration"
                value={uploadDuration}
                type="number"
                min={0}
                step={1}
                onChange={evt => setUploadDuration(evt.target.value)}
            />
        </InputGroup>
        <InputGroup>
            <Checkbox
                name="uploadShouldFail"
                value={uploadShouldFail}
                onChange={evt => setUploadShouldFail(evt.target.checked)}
            >
                upload should fail
            </Checkbox>
        </InputGroup>
        </>
    );
};
