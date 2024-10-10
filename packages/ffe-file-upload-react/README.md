# @sb1/ffe-file-upload-react

Upload file button with validation and list of uploaded files.

_NB! `FileReader` is not supported in IE9 or below so this component will not work for older browsers(http://caniuse.com/#search=filereader)_

## Install

```
npm install --save @sb1/ffe-file-upload-react
```

## Usage

Full documentation on file upload usage is available at https://design.sparebank1.no/komponenter/skjemaelementer/#fileupload.

This package depends on `@sb1/ffe-icons-react`, `@sb1/ffe-buttons-react` and `@sb1/ffe-form-react`.
Make sure you import the less-files.

## Development

To start a local development server, run the following from the designsystem root folder:

```bash
npm install
npm run build
npm start
```

A local instance of `component-overview` with live reloading will run at http://localhost:1234/.

Example implementations using the latest versions of all components are also available at https://sparebank1.github.io/designsystem.
