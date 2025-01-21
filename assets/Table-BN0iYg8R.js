import{j as e,M as l,C as s,a as d}from"./index-JRrfKRAu.js";import{useMDXComponents as t}from"./index-LJFj7xbY.js";import{T as a,S as o,a as c,E as p}from"./Table.stories-BSopFk2F.js";import"./iframe-DeC1FzQG.js";import"./index-ne9I_3bB.js";import"./index-Cd5v2cQ1.js";import"./index-C9wxJjzh.js";import"./index-Cu4lwwaE.js";import"./index-NOh9rqHv.js";import"./index-ogSvIofg.js";import"./index-B6-3w37c.js";import"./Icon-D2PqKf0B.js";import"./StrongText-B0EPHRt2.js";import"./Collapse-BarxkNu_.js";import"./formatNumber-CxB3G9Kl.js";import"./TertiaryButton-wN2Uj3Lq.js";import"./fixedForwardRef-y8WbTsvC.js";function i(n){const r={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...t(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{of:a}),`
`,e.jsx(r.h1,{id:"table",children:"Table"}),`
`,e.jsxs(r.p,{children:[`Tabeller brukes når vi vil vise strukturert informasjon under en felles overskrift.
Tabeller må ha en overskrift, som settes med `,e.jsx(r.code,{children:"<TableCaption/>"}),". Husk også å bruke scope på kolonnene-overskrifter, f.eks: ",e.jsx(r.code,{children:'<TableHeaderCell scope="col"/>'}),"."]}),`
`,e.jsx(r.p,{children:"Slik ser det ut:"}),`
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
`,e.jsx(s,{of:p})]})}function H(n={}){const{wrapper:r}={...t(),...n.components};return r?e.jsx(r,{...n,children:e.jsx(i,{...n})}):i(n)}export{H as default};
