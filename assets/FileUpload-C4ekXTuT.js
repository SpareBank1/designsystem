import{j as e,M as s,C as t,a as d}from"./index-DWvKATFl.js";import{useMDXComponents as o}from"./index-CVdx34fM.js";import{F as a,S as i}from"./FileUpload.stories-D3bZOn2_.js";import"./iframe-01gEQZIt.js";import"./index-eCxJ45ll.js";import"./index-BhUHFDTH.js";import"./index-D3-0uUTW.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";import"./Icon-B88nEPeu.js";import"./index-DezCrw0f.js";import"./SecondaryButton-aa3aHmpA.js";import"./BaseButton-CEf8UDzm.js";import"./fixedForwardRef-BdaB0qYT.js";function l(r){const n={code:"code",h1:"h1",li:"li",ol:"ol",p:"p",pre:"pre",...o(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{of:a}),`
`,e.jsx(n.h1,{id:"fileupload",children:"FileUpload"}),`
`,e.jsx(n.p,{children:"En komponent for å laste opp filer, for eksempel Excel-ark eller annen dokumentasjon."}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsx(n.li,{children:"Brukeren velger filer i native filopplastingsview eller via 'drag and drop'"}),`
`,e.jsx(n.li,{children:"Browseren mottar event-callback, med info om filene, om at brukeren har valg filer for opplasting, men disse er enda ikke lastet opp"}),`
`,e.jsxs(n.li,{children:["Konsumenter av ",e.jsx(n.code,{children:"FileUpload"})," må selv starte nedlasting av valgte filer fra klientens filsystem (ved å bruke ",e.jsx(n.code,{children:"file-content.js"}),")"]}),`
`,e.jsxs(n.li,{children:["Konsumenter oppretter et objekt med info om filene og sender disse inn til ",e.jsx(n.code,{children:"FileUpload"})," som ",e.jsx(n.code,{children:"files"}),"."]}),`
`,e.jsx(n.li,{children:"Det er opp til konsumenten selv å avvise filer med feil størrelse eller type (se eksempel over)."}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"files"})," objektet er indeksert på navn med selve ",e.jsx(n.code,{children:"name"})," påkrevet, mens ",e.jsx(n.code,{children:"error"})," og ",e.jsx(n.code,{children:"document"})," er optional."]}),`
`,e.jsxs(n.li,{children:["Et eksempel på ",e.jsx(n.code,{children:"files"})," som inkluderer de 3 mulighetene:"]}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{children:`const files = {
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
`,e.jsx(t,{of:i}),`
`,e.jsx(d,{of:i})]})}function E(r={}){const{wrapper:n}={...o(),...r.components};return n?e.jsx(n,{...r,children:e.jsx(l,{...r})}):l(r)}export{E as default};
