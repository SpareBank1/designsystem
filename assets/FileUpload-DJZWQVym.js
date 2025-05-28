import{j as e,M as s,C as t,a as d}from"./index-CwD-i52G.js";import{useMDXComponents as l}from"./index-DmqVK_gK.js";import{F as a,S as r}from"./FileUpload.stories-Crt4kwDv.js";import{I as p}from"./InstallImport-cLvEklRS.js";import"./iframe-COgSHNXk.js";import"./index-DQDNmYQF.js";import"./index-CGBZXJ9a.js";import"./index-DrriUsT5.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";import"./Icon-BqsuuMcG.js";import"./index-QCImZZ3W.js";import"./SecondaryButton-C30B7eR2.js";import"./BaseButton-Cq48oYPw.js";import"./fixedForwardRef-Dm1tRvsG.js";import"./Heading-D_Y6r1eI.js";import"./Paragraph-DEYlXMQQ.js";const c=["@sb1/ffe-buttons-react","@sb1/ffe-file-upload","@sb1/ffe-form","@sb1/ffe-icons-react","@sb1/ffe-buttons","@sb1/ffe-core","@sb1/ffe-icons"];function i(o){const n={code:"code",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",...l(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{of:a}),`
`,e.jsx(n.h1,{id:"fileupload",children:"FileUpload"}),`
`,e.jsx(n.p,{children:"En komponent for å laste opp filer, for eksempel Excel-ark eller annen dokumentasjon."}),`
`,e.jsx(p,{packageName:"@sb1/ffe-file-upload-react",dependencies:c}),`
`,e.jsx(n.h2,{id:"hvordan-bruke-komponenten",children:"Hvordan bruke komponenten"}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsx(n.li,{children:"Brukeren velger filer i native filopplastingsview eller via 'drag and drop'"}),`
`,e.jsx(n.li,{children:"Browseren mottar event-callback, med info om filene, om at brukeren har valg filer for opplasting, men disse er enda ikke lastet opp"}),`
`,e.jsxs(n.li,{children:["Konsumenter av ",e.jsx(n.code,{children:"FileUpload"})," må selv starte nedlasting av valgte filer fra klientens filsystem (ved å bruke ",e.jsx(n.code,{children:"file-content.js"}),")"]}),`
`,e.jsxs(n.li,{children:["Konsumenter oppretter et objekt med info om filene og sender disse inn til ",e.jsx(n.code,{children:"FileUpload"})," som ",e.jsx(n.code,{children:"files"}),"."]}),`
`,e.jsx(n.li,{children:"Det er opp til konsumenten selv å avvise filer med feil størrelse eller type (se eksempel over)."}),`
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
`,e.jsx(t,{of:r}),`
`,e.jsx(d,{of:r})]})}function D(o={}){const{wrapper:n}={...l(),...o.components};return n?e.jsx(n,{...o,children:e.jsx(i,{...o})}):i(o)}export{D as default};
