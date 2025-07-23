import{j as e,M as a,C as s,a as o}from"./index-D8Iwegvh.js";import{useMDXComponents as d}from"./index-DmqVK_gK.js";import{T as c,S as i,a as p,E as m,D as t}from"./Table.stories-CtbCjSjd.js";import{I as f}from"./InstallImport-DdS34lTz.js";import"./iframe-Bq0-55nQ.js";import"./index-DQDNmYQF.js";import"./index-CGBZXJ9a.js";import"./index-DrriUsT5.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";import"./index-QCImZZ3W.js";import"./Icon-BqsuuMcG.js";import"./StrongText-CC2QSDD4.js";import"./Collapse-BrKhsD1f.js";import"./formatNumber-DejPEPKF.js";import"./TertiaryButton-BEMXYxRk.js";import"./fixedForwardRef-Dm1tRvsG.js";import"./Heading-D_Y6r1eI.js";import"./Paragraph-DEYlXMQQ.js";const k=["@sb1/ffe-collapse-react","@sb1/ffe-core-react","@sb1/ffe-icons-react","@sb1/ffe-tables","@sb1/ffe-core","@sb1/ffe-icons"];function l(n){const r={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...d(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{of:c}),`
`,e.jsx(r.h1,{id:"table",children:"Table"}),`
`,e.jsxs(r.p,{children:[`Tabeller brukes når vi vil vise strukturert informasjon under en felles overskrift.
Tabeller må ha en overskrift, som settes med `,e.jsx(r.code,{children:"<TableCaption/>"}),". Husk også å bruke scope på kolonnene-overskrifter, f.eks: ",e.jsx(r.code,{children:'<TableHeaderCell scope="col"/>'}),"."]}),`
`,e.jsx(f,{packageName:"@sb1/ffe-tables-react",dependencies:k}),`
`,e.jsx(r.h2,{id:"forhåndsvisning",children:"Forhåndsvisning"}),`
`,e.jsx(s,{of:i}),`
`,e.jsx(o,{of:i}),`
`,e.jsx(r.h2,{id:"sortering",children:"Sortering"}),`
`,e.jsxs(r.p,{children:["Tabeller kan også lages sorterbare. Før å sortera brukes en funksjon som ",e.jsx(r.code,{children:"children"})," prop til ",e.jsx(r.code,{children:"<Table/>"}),". Denne funksjonen får valgt sorteringsnøkkel og sorteringsrekkefølge som input."]}),`
`,e.jsxs(r.ul,{children:[`
`,e.jsxs(r.li,{children:["Sorteringsnøkler defineres i utgangspunktet med ",e.jsx(r.code,{children:"sortKey"})," på kolonnene-overskriftene, f.eks: ",e.jsx(r.code,{children:'<TableHeaderCell sortKey="name" scope="col">'}),"."]}),`
`,e.jsx(r.li,{children:"Sorteringsrekkefølge defineres med sortOrder. Gyldige verdier er none, ascending eller descending."}),`
`]}),`
`,e.jsxs(r.p,{children:[e.jsx(r.code,{children:"sortOrder"})," vil oppdateres når brukeren klikker på de ulike overskriftene, og dataene sorteres i henhold til disse. Det er også mulig å sende inn en initiell sortering med ",e.jsx(r.code,{children:"initialSort"}),"."]}),`
`,e.jsx(s,{of:p}),`
`,e.jsx(r.h2,{id:"ekspanderbare-rader",children:"Ekspanderbare rader"}),`
`,e.jsx(r.p,{children:"Det er også mulig å lage ekspanderbare rader der det er hensiktsmessig."}),`
`,e.jsx(s,{of:m}),`
`,e.jsx(r.h2,{id:"mobiltilpasning---forskjellige-breakpoints",children:"Mobiltilpasning - forskjellige breakpoints"}),`
`,e.jsxs(r.p,{children:[`Tabellen tilpasser seg mindre skjermstørrelser ved å sette header og tekst sammen.
Du kan justere når dette skjer ved å sende inn `,e.jsx(r.code,{children:"breakPoint?: 'none' | 'sm' | 'md'"}),` (merk stor P).
`,e.jsx(r.code,{children:"sm"})," er default."]}),`
`,e.jsx(s,{of:t}),`
`,e.jsx(o,{of:t})]})}function K(n={}){const{wrapper:r}={...d(),...n.components};return r?e.jsx(r,{...n,children:e.jsx(l,{...n})}):l(n)}export{K as default};
