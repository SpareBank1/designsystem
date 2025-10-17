import{j as e,M as r,C as s,a}from"./index-gdNXk4Ne.js";import{useMDXComponents as o}from"./index-DmqVK_gK.js";import{F as d,S as i}from"./FileUpload.stories-DwasQloz.js";import{I as m}from"./InstallImport-Cg968xTQ.js";import"./iframe-Bxi_MIaY.js";import"./index-DQDNmYQF.js";import"./index-CV7naf_y.js";import"./index-BuA_lF3S.js";import"./index-DgH-xKnr.js";import"./index-DrFu-skq.js";import"./Icon-D_nm5xPy.js";import"./index-D2FocPV0.js";import"./SecondaryButton-Boh02aDD.js";import"./BaseButton-By4eKdy_.js";import"./fixedForwardRef-Dm1tRvsG.js";import"./InputGroup-CsZXON4u.js";import"./Collapse-BVkyKCdf.js";import"./Input-D-am7U86.js";import"./Checkbox--nJi1Rjz.js";import"./Heading-YepvjHrD.js";import"./Paragraph-7jO2Jnpx.js";const c=["@sb1/ffe-buttons-react","@sb1/ffe-file-upload","@sb1/ffe-form","@sb1/ffe-icons-react","@sb1/ffe-buttons","@sb1/ffe-core","@sb1/ffe-icons"];function l(t){const n={code:"code",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{of:d}),`
`,e.jsx(n.h1,{id:"fileupload",children:"FileUpload"}),`
`,e.jsx(n.p,{children:"En komponent for å laste opp filer, for eksempel Excel-ark eller annen dokumentasjon."}),`
`,e.jsx(m,{packageName:"@sb1/ffe-file-upload-react",dependencies:c}),`
`,e.jsx(n.h2,{id:"hvordan-bruke-komponenten",children:"Hvordan bruke komponenten"}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsx(n.li,{children:"Brukeren velger filer i native filopplastingsview eller via 'drag and drop'"}),`
`,e.jsx(n.li,{children:"Browseren mottar event-callback, med info om filene, om at brukeren har valg filer for opplasting, men disse er enda ikke lastet opp"}),`
`,e.jsxs(n.li,{children:["Du må selv starte nedlasting av valgte filer fra klientens filsystem (ved å bruke ",e.jsx(n.code,{children:"getFileContent.ts"}),")"]}),`
`,e.jsxs(n.li,{children:["Oppretter et objekt med info om filene og send disse inn til ",e.jsx(n.code,{children:"FileUpload"})," som ",e.jsx(n.code,{children:"files"}),"."]}),`
`,e.jsx(n.li,{children:"Du må selv å avvise filer med feil størrelse eller type."}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"files"})," objektet er indeksert på navn med selve ",e.jsx(n.code,{children:"name"})," påkrevet, mens ",e.jsx(n.code,{children:"error"})," og ",e.jsx(n.code,{children:"document"})," er optional."]}),`
`,e.jsxs(n.li,{children:["Et eksempel på ",e.jsx(n.code,{children:"files"})," som inkluderer de 3 mulighetene:"]}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ts",children:`const files = {
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
`})}),`
`,e.jsx(s,{of:i}),`
`,e.jsx(a,{of:i}),`
`,e.jsx(n.h2,{id:"eksempel",children:"Eksempel"}),`
`,e.jsxs(n.p,{children:["Her har vi lagt ved et eksempel på kode som kan brukes for å få en fungerende FileUpload.",e.jsx("br",{})]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Obs:"})," Hvis du tillater opplasting av flere filer (",e.jsx(n.code,{children:"multiple={true}"}),`), må du håndtere at
filnavnene blir unike. På iOS kan det oppstå en feil der bilder tatt med kamera får samme filnavn, noe som hindrer opplasting av flere
filer med identiske navn. Du kan bruke `,e.jsx(n.code,{children:"getUniqueFileName"}),"."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{children:`import { getFileContent } from './getFileContent';
import { getUniqueFileName } from './getUniqueFileName';
//...

const [uploadDuration, setUploadDuration] = useState(1);
const [uploadShouldFail, setUploadShouldFail] = useState(false);

const sendPostRequest = (url: string, file: any) =>
    new Promise((resolve, reject) => {
        console.log('POST', url, file);
        setTimeout(
            uploadShouldFail ? reject : resolve,
            uploadDuration * 1000,
        );
    });

const sendDeleteRequest = (url: string, file: any) => console.log('DELETE', url, file);

/**
    * State og event handler som knytter sammen API og FileUpload.
*/
const [attachments, setAttachments] = useState<Record<string, { name: string; document?: unknown; error?: string | undefined; }>>({});

const updateAttachment = (file: { name: string; document?: unknown; error?: string | undefined; }) =>
    setAttachments(prevState => ({
        ...prevState,
        [file.name]: file,
    }));

const uploadAttachments = (fileList: FileList | null) => {
    const files = Array.from(fileList || []) as File[];

    // Bygg en oversikt over unike filnavn for denne opplastingen
    const prevState = attachments;
    const uniqueNames: Record<string, string> = {};
    files.forEach(file => {
        uniqueNames[file.name] = getUniqueFileName(file.name, { ...prevState, ...uniqueNames });
    });

    // Add files to attachments with unique names
    setAttachments(prevState =>
        files.reduce<{ [key: string]: { name: string; document?: unknown; error?: string } }>(
            (acc, file) => {
                const newName = uniqueNames[file.name];
                return {
                    ...acc,
                    [newName]: { name: newName }
                };
            },
            prevState || {},
        ),
    );

    // Les filinnhold og last opp til backend med unikt navn
    for (const file of files) {
        const newName = uniqueNames[file.name];
        getFileContent(file)
            .then(content => {
                const attachment = { name: newName, document: { content } };
                return sendPostRequest('/upload', attachment).then(() => attachment);
            })
            .then(attachment => {
                updateAttachment(attachment);
            })
            .catch(() => {
                const attachment = { name: newName, error: 'It did not work' };
                updateAttachment(attachment);
            });
    }
};

const deleteAttachment = (file: { name: string; document?: unknown; error?: string | undefined; }) => {
    sendDeleteRequest('/delete', file);
    setAttachments(prevState => {
        const { ...nextState } = prevState;
        delete nextState[file.name];
        return nextState;
    });
};

const id = useId();

return (
    <>
        <InputGroup>
            <FileUpload
                {...args}
                id={id}
                files={attachments}
                onFilesSelected={fileList => uploadAttachments(fileList)}
                onFilesDropped={files => {
                    if (files) {
                        uploadAttachments(files);
                    }
                }}
                onFileDeleted={file => deleteAttachment(file)}
            />
        </InputGroup>
        <InputGroup label="Opplastningstid (sekunder)">
            <Input
                name="uploadDuration"
                value={uploadDuration}
                type="number"
                min={0}
                step={1}
                onChange={evt => setUploadDuration(Number(evt.target.value) || 0)}
            />
        </InputGroup>
        <InputGroup>
            <Checkbox
                name="uploadShouldFail"
                checked={uploadShouldFail}
                onChange={evt => setUploadShouldFail(evt.target.checked)}
            >
                Opplastning skal feile
            </Checkbox>
        </InputGroup>
    </>
);
`})})]})}function E(t={}){const{wrapper:n}={...o(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(l,{...t})}):l(t)}export{E as default};
