En komponent for å laste opp filer, for eksempel Excel-ark eller annen dokumentasjon.

```js
<FileUpload
    id="file-uploader"
    label="Last opp Excel-ark"
    selectedFiles={[]}
    onFileDeleted={f => console.log(f)}
    onFilesSelected={f => console.log(f)}
/>
```
