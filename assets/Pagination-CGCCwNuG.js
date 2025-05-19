import{j as e,M as a,S as p,C as o,a as f}from"./index-DXfzjk-f.js";import{useMDXComponents as t}from"./index-DmqVK_gK.js";import{P as m,S as i,W as d,N as l,a as c}from"./Pagination.stories-ocTCJAs7.js";import{I as g}from"./InstallImport-ASIYyZgH.js";import"./iframe-BV_8x_UJ.js";import"./index-DQDNmYQF.js";import"./index-CGBZXJ9a.js";import"./index-DrriUsT5.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";import"./index-QCImZZ3W.js";import"./Paragraph-DEYlXMQQ.js";import"./SecondaryButton-C30B7eR2.js";import"./BaseButton-Cq48oYPw.js";import"./fixedForwardRef-Dm1tRvsG.js";import"./Icon-BqsuuMcG.js";import"./InputGroup-DOKvm3eQ.js";import"./Collapse-BrKhsD1f.js";import"./Input-DYak8_-P.js";import"./TableRow-D0Di_mB0.js";import"./StrongText-CC2QSDD4.js";import"./TableCaption-BRZwXCyz.js";import"./Heading-D_Y6r1eI.js";function r(s){const n={code:"code",h1:"h1",h2:"h2",p:"p",...t(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{of:m}),`
`,e.jsx(n.h1,{id:"pagination",children:"Pagination"}),`
`,e.jsx(n.p,{children:"Paginering benyttes til søkeresultater og lignende presentasjon av store mengder informasjon som ikke får plass på en enkelt side."}),`
`,e.jsx(n.p,{children:"For de fleste scenarioer anbefales det å bruke infinite scroll, men paginering kan benyttes hvis det vurderes som bedre basert på brukerfeedback."}),`
`,e.jsx(g,{packageName:"@sb1/ffe-pagination-react",dependencies:["@sb1/ffe-buttons-react","@sb1/ffe-core-react","@sb1/ffe-dropdown-react","@sb1/ffe-icons-react","@sb1/ffe-pagination","@sb1/ffe-buttons","@sb1/ffe-core","@sb1/ffe-icons","@sb1/ffe-form"],stylingDependencies:["@sb1/ffe-icons/less/ffe-icons","@sb1/ffe-form/less/form","@sb1/ffe-buttons/less/buttons","@sb1/ffe-pagination/less/pagination"]}),`
`,e.jsx(n.h2,{id:"kode",children:"Kode"}),`
`,e.jsx(p,{code:`
const paginationControls = usePagination(134, 10);

return (<Pagination
ariaLabel= {'Paginering'}
rowsPerPageOptions={[10, 20, 50, 100]}
paginationControls={paginationControls} />)
`}),`
`,e.jsx(n.h2,{id:"forhåndsvisning",children:"Forhåndsvisning"}),`
`,e.jsx(o,{of:i}),`
`,e.jsx(f,{of:i}),`
`,e.jsx(n.h2,{id:"paginering-med-tabelleksempel",children:"Paginering med tabelleksempel"}),`
`,e.jsx(o,{of:d}),`
`,e.jsx(n.h2,{id:"variasjoner",children:"Variasjoner"}),`
`,e.jsxs(n.p,{children:['Det originale eksempelet har tekstene "Neste" og "Forrige". Hvis man ikke ønsker tekst på knappene kan proppen ',e.jsx(n.code,{children:"noNavigationText"})," brukes."]}),`
`,e.jsx(o,{of:l}),`
`,e.jsxs(n.p,{children:["Og hvis man ikke ønsker å gi brukeren valg om størrelse på lista, kan man bruke ",e.jsx(n.code,{children:"showRowsPerPageText={false}"})," og la være å ha med ",e.jsx(n.code,{children:"rowsPerPageOptions"}),"."]}),`
`,e.jsx(o,{of:c})]})}function _(s={}){const{wrapper:n}={...t(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(r,{...s})}):r(s)}export{_ as default};
