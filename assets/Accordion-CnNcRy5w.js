import{j as n,M as a,C as r,a as i}from"./index-BkAiODKC.js";import{useMDXComponents as c}from"./index-CVdx34fM.js";import{A as l,W as m,S as t}from"./Accordion.stories-C4ZGr4eu.js";import{Standard as s}from"./AccordionItem.stories-CxFbIwP1.js";import"./iframe-DgvVJ6F6.js";import"./index-eCxJ45ll.js";import"./index-BhUHFDTH.js";import"./index-D3-0uUTW.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";import"./AccordionItem-B7HUufEr.js";import"./index-DezCrw0f.js";import"./Icon-B88nEPeu.js";import"./Collapse-CKwb5mfJ.js";function d(o){const e={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...c(),...o.components};return n.jsxs(n.Fragment,{children:[n.jsx(a,{of:l}),`
`,n.jsx(e.h1,{id:"accordion",children:"Accordion"}),`
`,n.jsx(e.p,{children:"Accordion brukes der du har mye informasjon som du ønsker å gjøre tilgjengelig for brukere, uten at alt er visuelt synlig samtidig. En accordion er bygget opp av en «header» og et «panel», og i SpareBank 1 er hele «headeren» klikkbar."}),`
`,n.jsxs(e.p,{children:["En accordion er bygget opp av to komponenter: ",n.jsx(e.code,{children:"Accordion"})," og ",n.jsx(e.code,{children:"AccordionItem"}),". Accordion-komponenten legges rundt alle AccordionItem's, for å gruppere og sette samme overskriftsnivå på alle."]}),`
`,n.jsx(e.h2,{id:"installasjon",children:"Installasjon"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-bash",children:`npm install @sb1/ffe-accordion @sb1/ffe-accordion-react
`})}),`
`,n.jsx(e.p,{children:"I prosjektets hovedstylingsfil importer stylingen"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-less",children:`@import '@sb1/ffe-accordion/less/ffe-accordion';
`})}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`import { Accordion, AccordionItem } from '@sb1/ffe-accordion';

<Accordion {...args}>
    <AccordionItem heading="Tittel">Skjult innhold</AccordionItem>
    <AccordionItem heading={<span>Enda en tittel</span>}>
        Mer skjult innhold
    </AccordionItem>
    <AccordionItem heading="En siste tittel">Enda mer innhold</AccordionItem>
</Accordion>;
`})}),`
`,n.jsx(e.h2,{id:"med-subtil-bakgrunn",children:"Med subtil bakgrunn"}),`
`,n.jsx(r,{of:m}),`
`,n.jsx(e.h2,{id:"med-ingen-bakgrunn",children:"Med ingen bakgrunn"}),`
`,n.jsx(r,{of:t}),`
`,n.jsx(i,{of:t}),`
`,n.jsx(e.h1,{id:"accordionitem",children:"AccordionItem"}),`
`,n.jsxs(e.p,{children:["AccordionItem er hver enkel «header»- og «panel»-seksjon. De er lukket by default, men du kan velge at den skal være åpen fra start ved å sende med property ",n.jsx(e.code,{children:"defaultOpen"}),`.
Alle `,n.jsx(e.code,{children:"<AccordionItem />"}),"-komponenter har innebygget funksjonalitet for å styre åpning og lukking. Men om ønskelig kan du også overstyre dette. Et bruksområde kan være å lage en komponent som kun kan ha ett element åpent om gangen."]}),`
`,n.jsx(e.p,{children:"Bruker man isOpen-propen vil intern-logikk som styrer åpning og lukking være skrudd av."}),`
`,n.jsx(r,{of:s}),`
`,n.jsx(i,{of:s})]})}function S(o={}){const{wrapper:e}={...c(),...o.components};return e?n.jsx(e,{...o,children:n.jsx(d,{...o})}):d(o)}export{S as default};
