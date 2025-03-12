import{j as e,M as k,C as s,a as o}from"./index-rj2CYAfu.js";import{useMDXComponents as p}from"./index-CVdx34fM.js";import{T as h,S as t,W as m,N as c}from"./TabGroup.stories-CPb9Mqfi.js";import{Standard as l,Selected as j}from"./Tab.stories-C7_PwX-2.js";import{C as a,a as i}from"./CheckListItem-Be1tutzc.js";import"./iframe-Cqf16ccE.js";import"./index-eCxJ45ll.js";import"./index-BhUHFDTH.js";import"./index-D3-0uUTW.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";import"./index-DezCrw0f.js";import"./Tab-Bv5GtXxn.js";import"./Icon-B88nEPeu.js";function d(r){const n={code:"code",h1:"h1",h2:"h2",p:"p",...p(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(k,{of:h}),`
`,e.jsx(n.h1,{id:"tabgroup",children:"TabGroup"}),`
`,e.jsx(n.p,{children:"Faner kan være nyttige for å dele opp innholdet på siden i logiske «blokker» og forenkle navigasjonen for brukerne."}),`
`,e.jsx(n.h2,{id:"gjør-sånn",children:"Gjør sånn:"}),`
`,e.jsxs(a,{children:[e.jsx(i,{isCross:!1,children:e.jsx(n.p,{children:"Bruk faner når brukerne skal bytte mellom ulike views i samme kontekst"})}),e.jsx(i,{isCross:!1,children:e.jsx(n.p,{children:"Skriv korte og enkle fanenavn, helst ett til to ord"})}),e.jsx(i,{isCross:!1,children:e.jsx(n.p,{children:"Plasser alltid rekken med faner øverst i toppen av innholdet"})})]}),`
`,e.jsx(n.h2,{id:"ikke-sånn",children:"Ikke sånn:"}),`
`,e.jsx(a,{children:e.jsx(i,{isCross:!0,children:e.jsx(n.p,{children:`Gå for faner når brukerne trenger å se innhold fra flere av fanene
samtidig, eller sammenligne innholdet`})})}),`
`,e.jsx(n.h2,{id:"tab-og-tabgroup",children:"Tab og TabGroup"}),`
`,e.jsxs(n.p,{children:["For å implementere faner i løsningen bruker du komponentene ",e.jsx(n.code,{children:"Tab"})," og ",e.jsx(n.code,{children:"TabGroup"}),`. Dette er knapper med fane-funksjonalitet, som grupperer innholdet slik
at én gruppe er synlig og resten skjult.`]}),`
`,e.jsx(n.p,{children:"Sånn ser en enkelt fane ut:"}),`
`,e.jsx(n.h2,{id:"forhåndsvisning",children:"Forhåndsvisning"}),`
`,e.jsx(s,{of:l}),`
`,e.jsx(o,{of:l}),`
`,e.jsx(n.p,{children:"Aktiv/valgt fane kan vises ved å sende inn selected:"}),`
`,e.jsx(s,{of:j}),`
`,e.jsx(n.p,{children:"Fanene skal alltid grupperes i en TabGroup:"}),`
`,e.jsx(s,{of:t}),`
`,e.jsx(o,{of:t}),`
`,e.jsx(n.p,{children:"Under ser du et eksempel hvor innhold er knyttet til hver fane."}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"aria-controls"}),` tilsvarer id på elementet som fanen kontrollerer, og er en obligatorisk property som må sendes med i Tab.
Se nærmere på eksempelet for hvordan denne brukes i praksis, til å knytte knappen til elementet som vises når knappen er selected.`]}),`
`,e.jsx(s,{of:m}),`
`,e.jsx(n.h2,{id:"nobreak",children:"noBreak"}),`
`,e.jsx(n.p,{children:`noBreak er en property som kan sendes med til TabGroup, dersom du ønsker å sikre at fanene ikke brekker over flere linjer.
Dette kan være nyttig i tilfeller der man har plass til alt på en linje, selv på f.eks mobil.`}),`
`,e.jsx(s,{of:c})]})}function B(r={}){const{wrapper:n}={...p(),...r.components};return n?e.jsx(n,{...r,children:e.jsx(d,{...r})}):d(r)}export{B as default};
