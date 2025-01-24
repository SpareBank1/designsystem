import{j as e,M as s,C as t,a as d}from"./index-o5kFfYEb.js";import{useMDXComponents as o}from"./index-LJFj7xbY.js";import{F as a,S as i}from"./FileUpload.stories-BlANl6x4.js";import"./iframe-BGUK-Uh1.js";import"./index-ne9I_3bB.js";import"./index-Cd5v2cQ1.js";import"./index-C9wxJjzh.js";import"./index-Cu4lwwaE.js";import"./index-NOh9rqHv.js";import"./index-ogSvIofg.js";import"./Icon-D2PqKf0B.js";import"./index-B6-3w37c.js";import"./SecondaryButton-bIAXmbwc.js";import"./BaseButton-CFhkAthh.js";import"./fixedForwardRef-y8WbTsvC.js";function l(r){const n={code:"code",h1:"h1",li:"li",ol:"ol",p:"p",pre:"pre",...o(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{of:a}),`
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
`,e.jsx(d,{of:i})]})}function M(r={}){const{wrapper:n}={...o(),...r.components};return n?e.jsx(n,{...r,children:e.jsx(l,{...r})}):l(r)}export{M as default};
