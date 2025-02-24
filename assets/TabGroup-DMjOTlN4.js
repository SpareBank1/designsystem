import{j as e,M as k,C as s,a as o}from"./index-attwhzka.js";import{useMDXComponents as p}from"./index-CVdx34fM.js";import{T as m,S as i,W as h,N as c}from"./TabGroup.stories-CPb9Mqfi.js";import{Standard as a,Selected as f}from"./Tab.stories-C7_PwX-2.js";import{C as l,a as t}from"./CheckListItem-Be1tutzc.js";import"./iframe-BZWxg4Mu.js";import"./index-eCxJ45ll.js";import"./index-SF9__3rG.js";import"./index-irJGEjIJ.js";import"./index-Cu4lwwaE.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";import"./index-DezCrw0f.js";import"./Tab-Bv5GtXxn.js";import"./Icon-B88nEPeu.js";function d(r){const n={code:"code",h1:"h1",h2:"h2",p:"p",...p(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(k,{of:m}),`
`,e.jsx(n.h1,{id:"tabgroup",children:"TabGroup"}),`
`,e.jsx(n.p,{children:"Faner kan være nyttige for å dele opp innholdet på siden i logiske «blokker» og forenkle navigasjonen for brukerne."}),`
`,e.jsx(n.h2,{id:"gjør-sånn",children:"Gjør sånn:"}),`
`,e.jsxs(l,{children:[e.jsx(t,{isCross:!1,children:"Bruk faner når brukerne skal bytte mellom ulike views i samme kontekst"}),e.jsx(t,{isCross:!1,children:"Skriv korte og enkle fanenavn, helst ett til to ord"}),e.jsx(t,{isCross:!1,children:"Plasser alltid rekken med faner øverst i toppen av innholdet"})]}),`
`,e.jsx(n.h2,{id:"ikke-sånn",children:"Ikke sånn:"}),`
`,e.jsx(l,{children:e.jsx(t,{isCross:!0,children:"Gå for faner når brukerne trenger å se innhold fra flere av fanene samtidig, eller sammenligne innholdet"})}),`
`,e.jsx(n.h2,{id:"tab-og-tabgroup",children:"Tab og TabGroup"}),`
`,e.jsxs(n.p,{children:["For å implementere faner i løsningen bruker du komponentene ",e.jsx(n.code,{children:"Tab"})," og ",e.jsx(n.code,{children:"TabGroup"}),`. Dette er knapper med fane-funksjonalitet, som grupperer innholdet slik
at én gruppe er synlig og resten skjult.`]}),`
`,e.jsx(n.p,{children:"Sånn ser en enkelt fane ut:"}),`
`,e.jsx(s,{of:a}),`
`,e.jsx(o,{of:a}),`
`,e.jsx(n.p,{children:"Aktiv/valgt fane kan vises ved å sende inn selected:"}),`
`,e.jsx(s,{of:f}),`
`,e.jsx(n.p,{children:"Fanene skal alltid grupperes i en TabGroup:"}),`
`,e.jsx(s,{of:i}),`
`,e.jsx(o,{of:i}),`
`,e.jsx(n.p,{children:"Under ser du et eksempel hvor innhold er knyttet til hver fane."}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"aria-controls"}),` tilsvarer id på elementet som fanen kontrollerer, og er en obligatorisk property som må sendes med i Tab.
Se nærmere på eksempelet for hvordan denne brukes i praksis, til å knytte knappen til elementet som vises når knappen er selected.`]}),`
`,e.jsx(s,{of:h}),`
`,e.jsx(n.h2,{id:"nobreak",children:"noBreak"}),`
`,e.jsx(n.p,{children:`noBreak er en property som kan sendes med til TabGroup, dersom du ønsker å sikre at fanene ikke brekker over flere linjer.
Dette kan være nyttig i tilfeller der man har plass til alt på en linje, selv på f.eks mobil.`}),`
`,e.jsx(s,{of:c})]})}function L(r={}){const{wrapper:n}={...p(),...r.components};return n?e.jsx(n,{...r,children:e.jsx(d,{...r})}):d(r)}export{L as default};
