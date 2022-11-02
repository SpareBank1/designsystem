import FileUpload from '@sb1/ffe-file-upload-react';

() => {
    const files = {
        'progress.gif': {
            name: 'progress.gif'
        },
        'done.png': {
            name: 'done.png',
            document: 'whatever'
        },
        'fail.jpg': {
            name: 'fail.jpg',
            error: 'Det fungerte ikke'
        }
    };

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
            files={files}
            cancelText={'Avbryt'}
            deleteText={'Slett'}
            onFileDeleted={() => {}}
            onFilesSelected={() => {}}
            onFilesDropped={() => {}}
            multiple
        />
    );
};
