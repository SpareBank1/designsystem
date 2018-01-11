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

Opplastingsprosessen er som følger:
1. Brukeren velger filer i native filopplastingsview
2. Browseren mottar event-callback, med info om filene, om at brukeren har valg filer for opplasting, men disse er enda
ikke lastet opp
3. Konsumenter av `FileUpload` må selv starte nedlasting av valgte filer fra klientens filsystem (ved å bruke
`file-content.js`)
4. Konsumenter oppretter en liste over filene og sender disse inn til `FileUpload` som `selectedFiles`.
