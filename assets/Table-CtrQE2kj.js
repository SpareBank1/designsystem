import{j as e,M as l,C as s,a as d}from"./index-DOBxsM_z.js";import{useMDXComponents as t}from"./index-DmqVK_gK.js";import{T as a,S as o,a as c,E as p}from"./Table.stories-BVy-l5PQ.js";import"./iframe-C_P7L4d3.js";import"./index-DQDNmYQF.js";import"./index-C8KIgodY.js";import"./index-DrriUsT5.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";import"./index-QCImZZ3W.js";import"./Icon-BqsuuMcG.js";import"./StrongText-CC2QSDD4.js";import"./Collapse-BrKhsD1f.js";import"./formatNumber-DejPEPKF.js";import"./TertiaryButton-BEMXYxRk.js";import"./fixedForwardRef-Dm1tRvsG.js";function i(n){const r={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...t(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{of:a}),`
`,e.jsx(r.h1,{id:"table",children:"Table"}),`
`,e.jsxs(r.p,{children:[`Tabeller brukes når vi vil vise strukturert informasjon under en felles overskrift.
Tabeller må ha en overskrift, som settes med `,e.jsx(r.code,{children:"<TableCaption/>"}),". Husk også å bruke scope på kolonnene-overskrifter, f.eks: ",e.jsx(r.code,{children:'<TableHeaderCell scope="col"/>'}),"."]}),`
`,e.jsx(r.p,{children:"Slik ser det ut:"}),`
`,e.jsx(r.h2,{id:"forhåndsvisning",children:"Forhåndsvisning"}),`
`,e.jsx(s,{of:o}),`
`,e.jsx(d,{of:o}),`
`,e.jsx(r.h2,{id:"sortering",children:"Sortering"}),`
`,e.jsxs(r.p,{children:["Tabeller kan også lages sorterbare. Før å sortera brukes en funksjon som ",e.jsx(r.code,{children:"children"})," prop til ",e.jsx(r.code,{children:"<Table/>"}),". Denne funksjonen får valgt sorteringsnøkkel og sorteringsrekkefølge som input."]}),`
`,e.jsxs(r.ul,{children:[`
`,e.jsxs(r.li,{children:["Sorteringsnøkler defineres i utgangspunktet med ",e.jsx(r.code,{children:"sortKey"})," på kolonnene-overskriftene, f.eks: ",e.jsx(r.code,{children:'<TableHeaderCell sortKey="name" scope="col">'}),"."]}),`
`,e.jsx(r.li,{children:"Sorteringsrekkefølge defineres med sortOrder. Gyldige verdier er none, ascending eller descending."}),`
`]}),`
`,e.jsxs(r.p,{children:[e.jsx(r.code,{children:"sortOrder"})," vil oppdateres når brukeren klikker på de ulike overskriftene, og dataene sorteres i henhold til disse. Det er også mulig å sende inn en initiell sortering med ",e.jsx(r.code,{children:"initialSort"}),"."]}),`
`,e.jsx(s,{of:c}),`
`,e.jsx(r.h2,{id:"ekspanderbare-rader",children:"Ekspanderbare rader"}),`
`,e.jsx(r.p,{children:"Det er også mulig å lage ekspanderbare rader der det er hensiktsmessig."}),`
`,e.jsx(s,{of:p})]})}function E(n={}){const{wrapper:r}={...t(),...n.components};return r?e.jsx(r,{...n,children:e.jsx(i,{...n})}):i(n)}export{E as default};
