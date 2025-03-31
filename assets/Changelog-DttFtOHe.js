import{j as e,M as i}from"./index-CrGduDF3.js";import{useMDXComponents as t}from"./index-DmqVK_gK.js";import"./iframe-B4duk6ys.js";import"./index-DQDNmYQF.js";import"./index-C8KIgodY.js";import"./index-DrriUsT5.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";function s(r){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",ul:"ul",...t(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{title:"Introduksjon/Changelog"}),`
`,e.jsx(n.h1,{id:"changelog",children:"Changelog"}),`
`,e.jsx(n.p,{children:"Denne siden lister breaking changes og større endringer i designsystemet. For alle oppdateringer på en komponent kan en se historikken i hver enkelt komponent."}),`
`,e.jsx(n.p,{children:"F.eks: https://github.com/SpareBank1/designsystem/blob/develop/packages/ffe-core/CHANGELOG.md"}),`
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
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"bgColor"})," - endres fra ",e.jsx(n.code,{children:"'sand-30' | 'sand-70' | 'frost-30' | 'syrin-30' | 'syrin-70'"})," til ",e.jsx(n.code,{children:"'primary' | 'secondary' | 'tertiary'"})]}),`
`]}),`
`,e.jsxs(n.p,{children:["Variablene som var i komponentene av formen ",e.jsx(n.code,{children:"--ffe-v-"}),` fases ut. Disse var opprinnelig ment for å legge til rette for ekstern theming av systemet, noe som ikke lenger er et behov. Grunnen for utfasing er primært tekniske begrensninger med semantiske farger - det var rett og slett farger som ikke ble oppdatert riktig i enkelte kontekster og vi fant ikke noen annen vei rundt enn å redusere bruk av variabler.
Bruken av `,e.jsx(n.code,{children:"--ffe-v-"})," har og sklidd ut i senere tid generelt i systemet."]}),`
`,e.jsxs(n.p,{children:["Fargene i formatet ",e.jsx(n.code,{children:"--ffe-farge-"})," er fremdeles tilgjengelig, men vi anbefaler å bytte de ut med passende farger i formatet ",e.jsx(n.code,{children:"--ffe-color-"}),", som man finner på fargesiden. Disse er semantiske og vil fungere i alle kontekster."]}),`
`,e.jsxs(n.p,{children:["Farger i ",e.jsx(n.code,{children:"ffe-core/less/colors-deprecated.less"})," fjernes også. Dette er gamle Less-variabler på formatet ",e.jsx(n.code,{children:"@ffe-blue-royal"})]}),`
`,e.jsx(n.h4,{id:"tailwind",children:"Tailwind"}),`
`,e.jsxs(n.p,{children:["For de som bruker Tailwind kan en oppdatere importen fra ",e.jsx(n.code,{children:"@sb1/ffe-core/lib/colors"})," til ",e.jsx(n.code,{children:"@sb1/ffe-core/lib/senamticColors"}),"."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import * as colors from '@sb1/ffe-core/lib/senamticColors';
module.exports = {
    theme: {
        colors: {
            ...colors,
        },
    },
};
`})}),`
`,e.jsxs(n.p,{children:["Da blir fargene tilgjengelige i camelCase uten ",e.jsx(n.code,{children:"--ffe-color"}),". Feks ",e.jsx(n.code,{children:"--ffe-color-background-default"})," -> ",e.jsx(n.code,{children:"backgroundDefault"})]})]})}function h(r={}){const{wrapper:n}={...t(),...r.components};return n?e.jsx(n,{...r,children:e.jsx(s,{...r})}):s(r)}export{h as default};
