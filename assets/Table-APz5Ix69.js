import{j as e}from"./jsx-runtime-DEdD30eg.js";import{useMDXComponents as t}from"./index-CcnH5Kt0.js";import{ae as l,af as s,ag as d}from"./index-hnqzLvIg.js";import{T as a,S as o,a as c,E as p}from"./Table.stories-CkQieecP.js";import"./index-RYns6xqu.js";import"./iframe-D-KuYr5w.js";import"../sb-preview/runtime.js";import"./index-BwmuJAIN.js";import"./index-D-8MO0q_.js";import"./index-ar2LJKLv.js";import"./index-DrFu-skq.js";import"./index-Dejnh_W_.js";import"./Icon-Dor7S2yd.js";import"./StrongText-BOJ27MaC.js";import"./Collapse-uqyevmtk.js";import"./formatNumber-DrzNqxdR.js";import"./TertiaryButton-ImkSfm1_.js";import"./fixedForwardRef-BS3MIlRH.js";function i(n){const r={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...t(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{of:a}),`
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
`,e.jsx(s,{of:p})]})}function X(n={}){const{wrapper:r}={...t(),...n.components};return r?e.jsx(r,{...n,children:e.jsx(i,{...n})}):i(n)}export{X as default};
