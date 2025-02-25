import{j as n,M as c,C as s,a}from"./index-DbS7gVzs.js";import{useMDXComponents as t}from"./index-CVdx34fM.js";import{A as d,S as r}from"./Accordion.stories-DMqyrI4_.js";import"./iframe-Rs9rB_Lv.js";import"./index-eCxJ45ll.js";import"./index-BhUHFDTH.js";import"./index-D3-0uUTW.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";import"./AccordionItem-B7HUufEr.js";import"./index-DezCrw0f.js";import"./Icon-B88nEPeu.js";import"./Collapse-CKwb5mfJ.js";function i(o){const e={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...t(),...o.components};return n.jsxs(n.Fragment,{children:[n.jsx(c,{of:d}),`
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
`,n.jsx(s,{of:r}),`
`,n.jsx(a,{of:r})]})}function v(o={}){const{wrapper:e}={...t(),...o.components};return e?n.jsx(e,{...o,children:n.jsx(i,{...o})}):i(o)}export{v as default};
