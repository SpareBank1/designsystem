import{j as e,M as i}from"./index-D2qTTBrh.js";import{useMDXComponents as t}from"./index-DmqVK_gK.js";import"./iframe-Avnua1mK.js";import"./index-DQDNmYQF.js";import"./index-CGBZXJ9a.js";import"./index-DrriUsT5.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";function s(n){const r={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",ul:"ul",...t(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{title:"Introduksjon/Changelog"}),`
`,e.jsx(r.h1,{id:"changelog",children:"Changelog"}),`
`,e.jsx(r.p,{children:"Denne siden lister breaking changes og større endringer i designsystemet. For alle oppdateringer på en komponent kan en se historikken i hver enkelt komponent."}),`
`,e.jsx(r.p,{children:"F.eks: https://github.com/SpareBank1/designsystem/blob/develop/packages/ffe-core/CHANGELOG.md"}),`
`,e.jsx(r.h2,{id:"2025---juni---oppdatering-av-semantiske-farger",children:"2025 - Juni - Oppdatering av semantiske farger"}),`
`,e.jsx(r.h3,{id:"-fargene-i-det-semantiske-og-primitive-laget-er-ikke-lenger-tilgjengelige",children:"! Fargene i det semantiske og primitive laget er ikke lenger tilgjengelige"}),`
`,e.jsx(r.p,{children:`For å støtte flere platformer har vi endret måten vi bygger farger fra tokens på og i denne endringen har vi gått over fra å ha 3 lag med farger i CSS til kun 1 lag, context laget. Designmessig er det ikke endringer, men teknisk
er altså det semantiske og primitive laget ikke lenger tilgjengelig.`}),`
`,e.jsx(r.p,{children:"Fargene i det semantiske og primitive laget var aldri ment å brukes direkte men vi ser det er blitt gjort. Så se over om dere har brukt farger som starter på:"}),`
`,e.jsxs(r.ul,{children:[`
`,e.jsx(r.li,{children:e.jsx(r.code,{children:"--ffe-color-default-"})}),`
`,e.jsx(r.li,{children:e.jsx(r.code,{children:"--ffe-color-accent-"})}),`
`,e.jsx(r.li,{children:e.jsx(r.code,{children:"--ffe-color-speciality-"})}),`
`,e.jsx(r.li,{children:e.jsx(r.code,{children:"--ffe-color-vann-"})}),`
`,e.jsx(r.li,{children:e.jsx(r.code,{children:"--ffe-color-frost-"})}),`
`,e.jsx(r.li,{children:e.jsx(r.code,{children:"--ffe-color-sand-"})}),`
`,e.jsx(r.li,{children:e.jsx(r.code,{children:"--ffe-color-syrin-"})}),`
`,e.jsx(r.li,{children:e.jsx(r.code,{children:"--ffe-color-baer-"})}),`
`,e.jsx(r.li,{children:e.jsx(r.code,{children:"--ffe-color-skog-"})}),`
`,e.jsx(r.li,{children:e.jsx(r.code,{children:"--ffe-color-sol-"})}),`
`,e.jsx(r.li,{children:e.jsx(r.code,{children:"--ffe-color-gray-"})}),`
`,e.jsx(r.li,{children:e.jsx(r.code,{children:"--ffe-color-alpha-"})}),`
`]}),`
`,e.jsxs(r.p,{children:["Disse må skiftes ut med farger fra context laget som dere finner på ",e.jsx(r.a,{href:"https://sparebank1.github.io/designsystem/?path=/docs/design-farger-introduksjon--docs",rel:"nofollow",children:"siden om farger"})]}),`
`,e.jsx(r.h3,{id:"-variabler-som-er-fjernet",children:"! Variabler som er fjernet"}),`
`,e.jsx(r.h4,{id:"foreground",children:"Foreground"}),`
`,e.jsxs(r.p,{children:[e.jsx(r.code,{children:"--ffe-color-foreground-on-fill-default"})," erstattes med ",e.jsx(r.code,{children:"--ffe-color-foreground-inverse"})," ",e.jsx("br",{}),`
`,e.jsx(r.code,{children:"--ffe-color-foreground-on-fill-inverse"})," erstattes med ",e.jsx(r.code,{children:"--ffe-color-foreground-default"})]}),`
`,e.jsx(r.h4,{id:"fill",children:"Fill"}),`
`,e.jsxs(r.p,{children:[e.jsx(r.code,{children:"--ffe-color-fill-primary-hover"})," erstattes med ",e.jsx(r.code,{children:"--ffe-color-fill-primary-default-hover"})," ",e.jsx("br",{}),`
`,e.jsx(r.code,{children:"--ffe-color-fill-primary-pressed"})," erstattes med ",e.jsx(r.code,{children:"--ffe-color-fill-primary-default-pressed"})]}),`
`,e.jsx(r.h4,{id:"border",children:"Border"}),`
`,e.jsxs(r.p,{children:["Fjernet: ",e.jsx("br",{}),`
`,e.jsx(r.code,{children:"--ffe-color-border-secondary-*"})," ",e.jsx("br",{}),`
`,e.jsx(r.code,{children:"--ffe-color-border-tertiary-*"})]}),`
`,e.jsxs(r.p,{children:["bruk ",e.jsx("br",{}),`
`,e.jsx(r.code,{children:"--ffe-color-border-primary-default"})," ",e.jsx("br",{}),`
`,e.jsx(r.code,{children:"--ffe-color-border-primary-subtle"})," ",e.jsx("br",{}),`
`,e.jsx(r.code,{children:"--ffe-color-border-primary-emphasis"}),`
i stedet`]}),`
`,e.jsx(r.h3,{id:"-skjemaelementer---gul-border",children:"! Skjemaelementer - Gul border"}),`
`,e.jsx(r.p,{children:"Alle skjemaelementer har nå fått en gul focus-border. Komponentene blir nå lettere å se for brukere med nedsatt synsevne, og fokus-stilen fungerer på både hvit og blå bakgrunn (accent context)."}),`
`,e.jsxs(r.p,{children:["Alle skjemaelementer bruker også nå egne input-farger ",e.jsx("br",{}),`
`,e.jsx(r.code,{children:"--ffe-color-component-form-input-fill-default"})," ",e.jsx("br",{}),`
`,e.jsx(r.code,{children:"--ffe-color-component-form-input-foreground-default"})," ",e.jsx("br",{}),`
`,e.jsx(r.code,{children:"--ffe-color-component-form-input-foreground-subtle"})," ",e.jsx("br",{}),`
`,e.jsx(r.code,{children:"--ffe-color-component-form-input-border-active"})]}),`
`,e.jsx(r.p,{children:"Checkbox (Ved keyboard focus)"}),`
`,e.jsx("img",{width:"207",height:"81",alt:"image",src:"https://github.com/user-attachments/assets/5c8315c7-8712-4648-b49e-3c10a4952223"}),`
`,e.jsx(r.p,{children:"Input"}),`
`,e.jsx("img",{width:"457",height:"107",alt:"image",src:"https://github.com/user-attachments/assets/08cd9675-e285-431a-88a0-b5721d924b91"}),`
`,e.jsx(r.p,{children:"InputTextLike"}),`
`,e.jsx("img",{width:"212",height:"60",alt:"image",src:"https://github.com/user-attachments/assets/512fca5c-e2bf-4f16-9ff0-73d83f4e5084"}),`
`,e.jsx(r.p,{children:"Phonenumber"}),`
`,e.jsx("img",{width:"445",height:"96",alt:"image",src:"https://github.com/user-attachments/assets/e9d69563-a1ee-4cc9-9bc5-5c4fd83f72ce"}),`
`,e.jsx(r.p,{children:"RadioBlock (nytt design)"}),`
`,e.jsx("img",{width:"619",height:"365",alt:"image",src:"https://github.com/user-attachments/assets/8b651b7f-e30a-4573-b18f-875327497c92"}),`
`,e.jsx(r.p,{children:"RadioButton (ved keyboard focus)"}),`
`,e.jsx("img",{width:"442",height:"128",alt:"image",src:"https://github.com/user-attachments/assets/de6c2b5c-b556-4027-814c-a243a21ca5ab"}),`
`,e.jsx(r.p,{children:`RadioSwitch -(nytt design)
Nytt design`}),`
`,e.jsx("img",{width:"229",height:"86",alt:"image",src:"https://github.com/user-attachments/assets/2675343f-e77e-44f2-b373-092a726564ab"}),`
`,e.jsx(r.p,{children:"Textarea"}),`
`,e.jsx("img",{width:"454",height:"119",alt:"image",src:"https://github.com/user-attachments/assets/153b7402-b575-4265-982d-3a92aeeeeb83"}),`
`,e.jsx(r.p,{children:"Tooltip (ny farge)"}),`
`,e.jsx("img",{width:"40",height:"41",alt:"image",src:"https://github.com/user-attachments/assets/06fd0637-0f3d-4e31-abd1-a717641cee7e"}),`
`,e.jsxs(r.p,{children:["Obs: ",e.jsx(r.code,{children:"--ffe-color-border-interactive-focus"})," får ny farge, og kan ikke brukes til active-states lenger.  ",e.jsx("br",{}),`
`,e.jsx(r.code,{children:"component-input-border-active"})," kan brukes til det."]}),`
`,e.jsx(r.h3,{id:"label-og-button-label---tykkere-font",children:"Label og button label - tykkere font"}),`
`,e.jsx("img",{width:"144",height:"37",alt:"image",src:"https://github.com/user-attachments/assets/fe05eb9d-7926-45a3-a54e-10cf63c22410"}),`
`,e.jsx("img",{width:"177",height:"60",alt:"image",src:"https://github.com/user-attachments/assets/c1b8ef7e-da7e-440a-b87f-b8509a4dfb2e"}),`
`,e.jsx("br",{}),`
`,e.jsx("br",{}),`
`,e.jsx(r.h3,{id:"nye-fargevariabler",children:"Nye fargevariabler"}),`
`,e.jsxs(r.p,{children:["Vi har også lagt til flere farger. Det har blitt flere neutral-varianter:  ",e.jsx("br",{}),`
`,e.jsx(r.code,{children:"--ffe-color-surface-neutral-*"})," ",e.jsx("br",{}),`
`,e.jsx(r.code,{children:"--ffe-color-fill-neutral-default-*"}),"  ",e.jsx("br",{}),`
`,e.jsx(r.code,{children:"--ffe-color-fill-neutral-subtle-*"}),"  ",e.jsx("br",{}),`
`,e.jsx(r.code,{children:"--ffe-color-fill-neutral-extra-subtle-*"}),"  ",e.jsx("br",{}),`
i tillegg til input-variabler som nevnt over.`]}),`
`,e.jsx("br",{}),`
`,e.jsx(r.h2,{id:"2025---februar---semantiske-farger",children:"2025 - februar - Semantiske Farger"}),`
`,e.jsx(r.p,{children:"Vi har nå implementert semantiske farger i designsystemet. Vi oppsummerer derfor endringene på tvers av komponentene."}),`
`,e.jsx(r.h3,{id:"breaking-changes",children:"Breaking changes"}),`
`,e.jsx(r.p,{children:"Det er et sett med parametere som ikke lenger er i bruk da det løses med semantiske farger. Dette innebærer:"}),`
`,e.jsxs(r.ul,{children:[`
`,e.jsxs(r.li,{children:[e.jsx(r.code,{children:"bgDarkmodeColor"})," - blir nå løst med semantiske farger"]}),`
`,e.jsxs(r.li,{children:[e.jsx(r.code,{children:"onColoredBg"})," - erstattes med å sette klassen ",e.jsx(r.code,{children:"ffe-accent-color"})," på komponenten eller containeren til komponenten"]}),`
`]}),`
`,e.jsx(r.p,{children:"Flere av dagens komponenter støtter at en kan sette bakgrunnsfargen selv. Disse er oppdatert slik at det er nå mulig å velge mellom default + 2 farger, altså 3 farger totalt som fungerer på tvers av light, dark og accent modes."}),`
`,e.jsxs(r.ul,{children:[`
`,e.jsxs(r.li,{children:[e.jsx(r.code,{children:"bgColor"})," - endres fra ",e.jsx(r.code,{children:"'sand-30' | 'sand-70' | 'frost-30' | 'syrin-30' | 'syrin-70'"})," til ",e.jsx(r.code,{children:"'primary' | 'secondary' | 'tertiary'"})]}),`
`]}),`
`,e.jsxs(r.p,{children:["Variablene som var i komponentene av formen ",e.jsx(r.code,{children:"--ffe-v-"}),` fases ut. Disse var opprinnelig ment for å legge til rette for ekstern theming av systemet, noe som ikke lenger er et behov. Grunnen for utfasing er primært tekniske begrensninger med semantiske farger - det var rett og slett farger som ikke ble oppdatert riktig i enkelte kontekster og vi fant ikke noen annen vei rundt enn å redusere bruk av variabler.
Bruken av `,e.jsx(r.code,{children:"--ffe-v-"})," har og sklidd ut i senere tid generelt i systemet."]}),`
`,e.jsxs(r.p,{children:["Fargene i formatet ",e.jsx(r.code,{children:"--ffe-farge-"})," er fremdeles tilgjengelig, men vi anbefaler å bytte de ut med passende farger i formatet ",e.jsx(r.code,{children:"--ffe-color-"}),", som man finner på fargesiden. Disse er semantiske og vil fungere i alle kontekster."]}),`
`,e.jsxs(r.p,{children:["Farger i ",e.jsx(r.code,{children:"ffe-core/less/colors-deprecated.less"})," fjernes også. Dette er gamle Less-variabler på formatet ",e.jsx(r.code,{children:"@ffe-blue-royal"})]}),`
`,e.jsx(r.h4,{id:"tailwind",children:"Tailwind"}),`
`,e.jsxs(r.p,{children:["For de som bruker Tailwind kan en oppdatere importen fra ",e.jsx(r.code,{children:"@sb1/ffe-core/lib/colors"})," til ",e.jsx(r.code,{children:"@sb1/ffe-core/lib/semanticColorsTailwind"}),"."]}),`
`,e.jsx(r.pre,{children:e.jsx(r.code,{className:"language-tsx",children:`import * as colors from '@sb1/ffe-core/lib/semanticColorsTailwind';
module.exports = {
    theme: {
        colors: {
            ...colors,
        },
    },
};
`})}),`
`,e.jsxs(r.p,{children:["Da blir fargene tilgjengelige i kebab-case uten ",e.jsx(r.code,{children:"--ffe-color"}),". Feks ",e.jsx(r.code,{children:"--ffe-color-background-default"})," -> ",e.jsx(r.code,{children:"background-default"})]})]})}function m(n={}){const{wrapper:r}={...t(),...n.components};return r?e.jsx(r,{...n,children:e.jsx(s,{...n})}):s(n)}export{m as default};
