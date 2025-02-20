import{j as e,M as i}from"./index-D4UobaES.js";import{useMDXComponents as s}from"./index-CVdx34fM.js";import"./iframe-C4f3kgU_.js";import"./index-eCxJ45ll.js";import"./index-SF9__3rG.js";import"./index-irJGEjIJ.js";import"./index-Cu4lwwaE.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";function t(r){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",ul:"ul",...s(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{title:"Introduksjon/Changelog"}),`
`,e.jsx(n.h1,{id:"changelog",children:"Changelog"}),`
`,e.jsx(n.p,{children:"Denne siden lister breaking changes og større endringer i designsystemet. For alle oppdateringer på en komponent kan en se historikken i hver enkelt komponent."}),`
`,e.jsx(n.p,{children:"Feks: https://github.com/SpareBank1/designsystem/blob/develop/packages/ffe-core/CHANGELOG.md"}),`
`,e.jsx(n.h2,{id:"2025---februar---semantiske-farger",children:"2025 - februar - Semantiske Farger"}),`
`,e.jsx(n.p,{children:"Vi har nå implementert semantiske farger i designsystemet. Vi oppsummerer derfor endringene på tvers av komponentene."}),`
`,e.jsx(n.h3,{id:"breaking-changes",children:"Breaking changes"}),`
`,e.jsx(n.p,{children:"Det er et sett med parametere som ikke lenger er i bruk da det løses med semantiske farger. Dette innebærer:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"bgDarkmodeColor"})," - blir nå løst med semantiske farger"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"onColoredBg"})," - erstattes med å sette klassen ",e.jsx(n.code,{children:"ffe-accent-color"})," på komponenten eller containeren til komponenten"]}),`
`]}),`
`,e.jsx(n.p,{children:"Flere av dagens komponenter støtter at en kan sette bakgrunnsfargen selv. Disse er oppdatert slik at det er nå mulig å velge mellom default + 2 farger, altså 3 farger totalt som fungerer på tvers av light, dark og accent modes."}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"bgColor"})," - endres fra ",e.jsx(n.code,{children:"'sand-30' | 'sand-70' | 'frost-30' | 'syrin-30' | 'syrin-70'"})," til ",e.jsx(n.code,{children:"'primary' | 'seccondary' | 'tertiery'"})]}),`
`]}),`
`,e.jsxs(n.p,{children:["Variablene som var i komponentene av formen ",e.jsx(n.code,{children:"--ffe-v-"}),` fases ut. Disse var for å legge til rette for ekstern teaming ev systemet som ikke lenger er et behov. Grunnen for utfasing er primært tekniske begresninger med semantiskefarger
det ble rett og slett farger som ikke ble oppdatert riktig i enkelte kontekster og vi fant ikke noen annen vei rundt enn å redusere nivået på variabler brukt.
Bruken av `,e.jsx(n.code,{children:"--ffe-v-"})," har og sklidd ut i senere tid generelt i systemet."]}),`
`,e.jsxs(n.p,{children:["Fargene på format ",e.jsx(n.code,{children:"--ffe-farge"})," er fremdeles tilgjengelig, men vi anbefaler å bytte ut med passende farger som funnet på fargesiden på formatet ",e.jsx(n.code,{children:"--ffe-color-"}),` da disse er semantiske
og vil fungere i alle kontekster.`]})]})}function h(r={}){const{wrapper:n}={...s(),...r.components};return n?e.jsx(n,{...r,children:e.jsx(t,{...r})}):t(r)}export{h as default};
