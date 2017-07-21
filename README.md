# ffe-file-upload-react
Upload file button with validation and list of uploaded files. 

*NB! `FileReader` is not supported in IE9 or below so this component will not work for older browsers(http://caniuse.com/#search=filereader)*

## Install

```
$ npm install --save ffe-file-upload-react
```

## Usage

```javascript
import FileUpload from 'ffe-file-upload-react';

const Example = () => {
    return (
        <FileUpload
            label={ string }
            selectedFiles={ array }
            onFilesSelected={ function }
            onFileDeleted={ function }
            selectedFilesHeaderLabel={ string }
            errorMessage={ undefined || 'Wrong file format' }
        />
    );
}
```
The passed `onFilesSelected` function will be called with `FileList`-object containing the `File`-objects the user selected. 
* FileList - https://developer.mozilla.org/en-US/docs/Web/API/FileList
* File - https://developer.mozilla.org/en-US/docs/Web/API/File

## Examples
### Example with redux-saga
```javascript
//action.js
export const fraudFilesUploaded = (files) => ({ type: 'DOCUMENT_UPLOADED', files: files });
export const fraudFileRemoved = (file) => ({ type: 'DOCUMENT_REMOVED', file: file });
```
```javascript
//feature.js
...
<FileUpload
    ...
    onFilesSelected={ files => dispatch(fraudFilesUploaded(files)) }
    onFileDeleted={ file => dispatch(fraudFileRemoved(file)) }
    ...
/>
...
```
```javascript
//saga.js
import { getFileContent } from 'ffe-file-upload-react';

function* documentUploaded(action) {
    for (let i = 0; i < action.files.length; i++) {
        if (action.files[i].type !== 'application/pdf') {
            yield put({ type: 'DOCUMENT_VALIDATION_ERROR' });
            return;
        }
    }

    for (let i = 0; i < action.files.length; i++) {
        const content = yield call(getFileContent, action.files[i]);
        yield put({ type: 'DOCUMENT_ADDED', file: action.files[i], content });
    }
}

export function* documentUploadedSaga() {
    yield* takeEvery('DOCUMENT_UPLOADED', documentUploaded);
}
```
### Example with async await
```javascript
async function getContent(file) {
    return getFileContent(file);
}
```
```javascript
const onFilesSelected = async function(files) {
    for (let i = 0; i < files.length; i++) {
        const file = files[i];

        const fileContent = await getContent(file);
        // do something with fileContent
    }
    console.log(this.state);
}
```
```javascript
//feature.js
...
<FileUpload
    ...
    onFilesSelected={ onFilesSelected }
    ...
/>
...
```
