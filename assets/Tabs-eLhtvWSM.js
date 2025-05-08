import{j as e,C as t,a as d,M as p}from"./index-BJ38UV0C.js";import{useMDXComponents as a}from"./index-DmqVK_gK.js";import{I as c}from"./InstallImport-B16c5dr9.js";import{Standard as o,WithContent as h,NoBreak as m}from"./TabGroup.stories-Cu4vw8e1.js";import{C as i,a as s}from"./CheckListItem-o7Y4SA9X.js";import"./iframe-C2em-eWK.js";import"./index-DQDNmYQF.js";import"./index-C8KIgodY.js";import"./index-DrriUsT5.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";import"./Heading-afd3onnD.js";import"./index-QCImZZ3W.js";import"./Paragraph-DEYlXMQQ.js";import"./Icon-BqsuuMcG.js";function l(r){const n={code:"code",h1:"h1",h2:"h2",p:"p",...a(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h1,{id:"tabs",children:"Tabs"}),`
`,e.jsx(n.p,{children:"Faner kan være nyttige for å dele opp innholdet på siden i logiske «blokker» og forenkle navigasjonen for brukerne."}),`
`,e.jsx(n.h2,{id:"gjør-sånn",children:"Gjør sånn:"}),`
`,e.jsxs(i,{children:[e.jsx(s,{isCross:!1,children:e.jsx(n.p,{children:"Bruk faner når brukerne skal bytte mellom ulike views i samme kontekst"})}),e.jsx(s,{isCross:!1,children:e.jsx(n.p,{children:"Skriv korte og enkle fanenavn, helst ett til to ord"})}),e.jsx(s,{isCross:!1,children:e.jsx(n.p,{children:"Plasser alltid rekken med faner øverst i toppen av innholdet"})})]}),`
`,e.jsx(n.h2,{id:"ikke-sånn",children:"Ikke sånn:"}),`
`,e.jsx(i,{children:e.jsx(s,{isCross:!0,children:e.jsx(n.p,{children:`Gå for faner når brukerne trenger å se innhold fra flere av fanene
samtidig, eller sammenligne innholdet`})})}),`
`,e.jsx(c,{packageName:"@sb1/ffe-tabs-react",dependencies:["@sb1/ffe-tabs","@sb1/ffe-core"],stylingDependencies:["@sb1/ffe-tabs/less/tabs"]}),`
`,e.jsx(n.h2,{id:"tab-og-tabgroup",children:"Tab og TabGroup"}),`
`,e.jsxs(n.p,{children:["For å implementere faner i løsningen bruker du komponentene ",e.jsx(n.code,{children:"Tab"})," og ",e.jsx(n.code,{children:"TabGroup"}),`. Dette er knapper med fane-funksjonalitet, som grupperer innholdet slik
at én gruppe er synlig og resten skjult.`]}),`
`,e.jsxs(n.p,{children:["Faner skal alltid grupperes i en ",e.jsx(n.code,{children:"TabGroup"}),", og aktiv/valgt fane utheves ved å sende inn ",e.jsx(n.code,{children:"selected"}),"."]}),`
`,e.jsx(t,{of:o}),`
`,e.jsx(d,{of:o}),`
`,e.jsx(n.p,{children:"Under ser du et eksempel hvor innhold er knyttet til hver fane."}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"aria-controls"})," tilsvarer id på elementet som fanen kontrollerer, og er en obligatorisk property som må sendes med i ",e.jsx(n.code,{children:"Tab"}),"."]}),`
`,e.jsx(t,{of:h}),`
`,e.jsx(n.h2,{id:"nobreak",children:"noBreak"}),`
`,e.jsxs(n.p,{children:["Dersom du ønsker å sikre at fanene ikke brekker over flere linjer kan ",e.jsx(n.code,{children:"noBreak"}),"-propen sendes med til ",e.jsx(n.code,{children:"TabGroup"}),`.
Dette kan være nyttig i tilfeller der man har plass til alt på en linje, selv på mobil.`]}),`
`,e.jsx(t,{of:m}),`
`,e.jsx(p,{title:"Komponenter/Tabs"})]})}function B(r={}){const{wrapper:n}={...a(),...r.components};return n?e.jsx(n,{...r,children:e.jsx(l,{...r})}):l(r)}export{B as default};
