import{j as e,M as a,S as p,C as r,a as m}from"./index-CiWMBaYK.js";import{useMDXComponents as t}from"./index-DmqVK_gK.js";import{P as d,S as s,W as c,N as l,a as f}from"./Pagination.stories-Casd94j4.js";import{I as g}from"./InstallImport-DvQyw6rJ.js";import"./iframe-B5I3k-Em.js";import"./index-DQDNmYQF.js";import"./index-CV7naf_y.js";import"./index-BuA_lF3S.js";import"./index-DgH-xKnr.js";import"./index-DrFu-skq.js";import"./index-D2FocPV0.js";import"./Paragraph-7jO2Jnpx.js";import"./Dropdown-DU2fHO9Y.js";import"./SecondaryButton-Boh02aDD.js";import"./BaseButton-By4eKdy_.js";import"./fixedForwardRef-Dm1tRvsG.js";import"./Icon-D_nm5xPy.js";import"./InputGroup-CsZXON4u.js";import"./Collapse-BVkyKCdf.js";import"./Input-D-am7U86.js";import"./TableRow-COtsrGey.js";import"./StrongText-DBVLKrPS.js";import"./TableCaption-DOqAlwvg.js";import"./Heading-YepvjHrD.js";const h=["@sb1/ffe-buttons-react","@sb1/ffe-core","@sb1/ffe-core-react","@sb1/ffe-dropdown-react","@sb1/ffe-icons-react","@sb1/ffe-pagination","@sb1/ffe-buttons","@sb1/ffe-icons","@sb1/ffe-form"];function i(o){const n={code:"code",h1:"h1",h2:"h2",p:"p",...t(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{of:d}),`
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
