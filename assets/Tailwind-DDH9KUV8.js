import{j as e,M as o}from"./index-DFzfEbOU.js";import{useMDXComponents as i}from"./index-DmqVK_gK.js";import"./iframe-DwTYeN_P.js";import"./index-DQDNmYQF.js";import"./index-CV7naf_y.js";import"./index-BuA_lF3S.js";import"./index-DgH-xKnr.js";import"./index-DrFu-skq.js";function s(r){const n={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...i(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{title:"Design/Farger/Tailwind"}),`
`,e.jsx(n.h1,{id:"tailwind",children:"Tailwind"}),`
`,e.jsx(n.p,{children:`Vi anbefaler ikke å bruke Tailwind, men vet det er mange som gjør det.
Vi tilbyr derfor farge tokens for Tailwind også.`}),`
`,e.jsx(n.h2,{id:"versjon-4",children:"Versjon 4"}),`
`,e.jsxs(n.p,{children:["Tailwind versjon 4 bruker css layers per default. På grunn av hvilke ",e.jsx(n.a,{href:"https://design.sparebank1.no/grunnleggende/nettleserversjoner/",rel:"nofollow",children:"nettleserversjoner"})," vi må støtte i dag (sept 2025) støtter vi ikke CSS layers. Vi anbefaler å bruke Tailwind 4 med en måte som importerer fargene uten CSS layers, som du kan lese mer om her: ",e.jsx(n.a,{href:"https://github.com/tailwindlabs/tailwindcss/discussions/13188",rel:"nofollow",children:"tailwindlabs/tailwindcss#13188"}),`
Importer følgende css fil for å få semantiske farger i Tailwind versjon 4:`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-css",children:`@import '@sb1/ffe-core/css/colors-semantic-tailwind-4.css';
`})}),`
`,e.jsx(n.h2,{id:"versjon-3",children:"Versjon 3"}),`
`,e.jsxs(n.p,{children:["For å bruke semantiske farger med Tailwind Versjon 3 kan du importere fargene fra ",e.jsx(n.code,{children:"@sb1/ffe-core/lib/semanticColorsTailwind"}),"."]}),`
`,e.jsxs(n.p,{children:["Her et eksempel på hvordan et utsnitt av din ",e.jsx(n.code,{children:"tailwind.config.js"})," kan se ut for å sette opp til bruk av de semantske fagene"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import * as colors from '@sb1/ffe-core/lib/semanticColorsTailwind';
module.exports = {
    theme: {
        colors: {
            ...colors,
        },
    },
};
`})}),`
`,e.jsxs(n.p,{children:["Da blir fargene tilgjengelige i kebab-case uten ",e.jsx(n.code,{children:"--ffe-color"}),". Feks ",e.jsx(n.code,{children:"--ffe-color-background-default"})," -> ",e.jsx(n.code,{children:"background-default"})]})]})}function j(r={}){const{wrapper:n}={...i(),...r.components};return n?e.jsx(n,{...r,children:e.jsx(s,{...r})}):s(r)}export{j as default};
