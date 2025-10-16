import{j as e,M as p,C as n,a as t}from"./index-_m4bSQz4.js";import{useMDXComponents as d}from"./index-DmqVK_gK.js";import{I as c}from"./InstallImport-CigU_8cF.js";import{Standard as i,Success as o,WithAria as a}from"./Progressbar.stories-DuJEVms3.js";import"./iframe-BvY95Tf6.js";import"./index-DQDNmYQF.js";import"./index-CV7naf_y.js";import"./index-BuA_lF3S.js";import"./index-DgH-xKnr.js";import"./index-DrFu-skq.js";import"./Heading-YepvjHrD.js";import"./index-D2FocPV0.js";import"./Paragraph-7jO2Jnpx.js";const g=["@sb1/ffe-core","@sb1/ffe-progressbar"];function l(s){const r={code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",...d(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(p,{title:"Komponenter/Progressbar/Progressbar"}),`
`,e.jsx(r.h1,{id:"progressbar",children:"Progressbar"}),`
`,e.jsx(r.p,{children:`Progressbar brukes for å vise fremgangen i en prosess.
Eksempler kan være: opplasting av filer, nedbetaling av lån, gjenværende dager til en gitt dato etc.`}),`
`,e.jsx(r.h2,{id:"universell-utforming",children:"Universell utforming"}),`
`,e.jsxs(r.p,{children:["For å gjøre progressbaren tilgjengelig for skjermlesere, bør man enten legge til ett ",e.jsx(r.code,{children:"aria-label"}),`-attributt som beskriver hva progressbaren viser.
Den vil da lese opp `,e.jsx(r.code,{children:"aria-label - value omregnet til prosent - Progressbar"}),'. F.eks i eksempelet "WithAria", så leser den ',e.jsx(r.code,{children:"nedbetaling av lån 50% prosessindikator"}),"."]}),`
`,e.jsx(c,{packageName:"@sb1/ffe-progressbar-react",dependencies:g}),`
`,e.jsx(r.h2,{id:"forhåndsvisning",children:"Forhåndsvisning"}),`
`,e.jsx(r.p,{children:"En standard progressbar viser fremdriften i en prosess ved å fylle opp en linje i takt med at prosenten øker."}),`
`,e.jsx(n,{of:i}),`
`,e.jsx(t,{of:i}),`
`,e.jsx(r.h3,{id:"success",children:"Success"}),`
`,e.jsxs(r.p,{children:["Noen ganger kan det passe bedre med en grønn progressbar. Da kan du bruke ",e.jsx(r.code,{children:"success"}),"."]}),`
`,e.jsx(n,{of:o}),`
`,e.jsx(t,{of:o}),`
`,e.jsx(r.h2,{id:"med-aria-label",children:"Med Aria-label"}),`
`,e.jsxs(r.p,{children:["For å gjøre progressbaren mer tilgjengelig, kan du legge til et ",e.jsx(r.code,{children:"aria-label"}),"-attributt som beskriver hva fremgangen gjelder. Dette gjør at skjermlesere kan formidle informasjonen til brukere med nedsatt syn. I eksempelet under er det lagt til et ",e.jsx(r.code,{children:"aria-label"})," for å forklare hva progressbaren viser."]}),`
`,e.jsx(n,{of:a}),`
`,e.jsx(t,{of:a})]})}function P(s={}){const{wrapper:r}={...d(),...s.components};return r?e.jsx(r,{...s,children:e.jsx(l,{...s})}):l(s)}export{P as default};
