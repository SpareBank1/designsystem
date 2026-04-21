import{j as e,M as a,S as p,C as r,a as m}from"./index-DS2EldHB.js";import{useMDXComponents as t}from"./index-DmqVK_gK.js";import{P as d,S as s,W as c,N as l,a as f}from"./Pagination.stories-DuXUJXTB.js";import{I as g}from"./InstallImport-C9z7tGHU.js";import"./iframe-Foi68yMA.js";import"./index-DQDNmYQF.js";import"./index-DMkFJtLM.js";import"./index-CFFhkS_s.js";import"./index-DgH-xKnr.js";import"./index-DrFu-skq.js";import"./index-D2FocPV0.js";import"./Paragraph-j_y_RLec.js";import"./Dropdown-Bz33sHZX.js";import"./SecondaryButton-BgGQzghk.js";import"./BaseButton-CXIlvryK.js";import"./fixedForwardRef-DqyCgkTx.js";import"./Icon-C3s1OswO.js";import"./InputGroup-BOYEkbY1.js";import"./Collapse-D2HS3Sy-.js";import"./Input-COhs6psf.js";import"./TableRow-BcL63Zqx.js";import"./StrongText-DKv1YCjQ.js";import"./TableCaption-_xuaj7Vl.js";import"./Heading-D3oFbALb.js";const h=["@sb1/ffe-buttons-react","@sb1/ffe-core","@sb1/ffe-core-react","@sb1/ffe-dropdown-react","@sb1/ffe-icons-react","@sb1/ffe-pagination","@sb1/ffe-buttons","@sb1/ffe-icons","@sb1/ffe-form"];function i(o){const n={code:"code",h1:"h1",h2:"h2",p:"p",...t(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{of:d}),`
`,e.jsx(n.h1,{id:"pagination",children:"Pagination"}),`
`,e.jsx(n.p,{children:"Paginering benyttes til søkeresultater og lignende presentasjon av store mengder informasjon som ikke får plass på en enkelt side."}),`
`,e.jsx(n.p,{children:"For de fleste scenarioer anbefales det å bruke infinite scroll, men paginering kan benyttes hvis det vurderes som bedre basert på brukerfeedback."}),`
`,e.jsx(g,{packageName:"@sb1/ffe-pagination-react",dependencies:h}),`
`,e.jsx(n.h2,{id:"kode",children:"Kode"}),`
`,e.jsx(p,{code:`
const paginationControls = usePagination(134, 10);

return (<Pagination
ariaLabel= {'Paginering'}
rowsPerPageOptions={[10, 20, 50, 100]}
paginationControls={paginationControls} />)
`}),`
`,e.jsx(n.h2,{id:"forhåndsvisning",children:"Forhåndsvisning"}),`
`,e.jsx(r,{of:s}),`
`,e.jsx(m,{of:s}),`
`,e.jsx(n.h2,{id:"paginering-med-tabelleksempel",children:"Paginering med tabelleksempel"}),`
`,e.jsx(r,{of:c}),`
`,e.jsx(n.h2,{id:"variasjoner",children:"Variasjoner"}),`
`,e.jsxs(n.p,{children:['Det originale eksempelet har tekstene "Neste" og "Forrige". Hvis man ikke ønsker tekst på knappene kan proppen ',e.jsx(n.code,{children:"noNavigationText"})," brukes."]}),`
`,e.jsx(r,{of:l}),`
`,e.jsxs(n.p,{children:["Og hvis man ikke ønsker å gi brukeren valg om størrelse på lista, kan man bruke ",e.jsx(n.code,{children:"showRowsPerPageText={false}"})," og la være å ha med ",e.jsx(n.code,{children:"rowsPerPageOptions"}),"."]}),`
`,e.jsx(r,{of:f})]})}function H(o={}){const{wrapper:n}={...t(),...o.components};return n?e.jsx(n,{...o,children:e.jsx(i,{...o})}):i(o)}export{H as default};
