import{j as e,M as d,S as a,C as o,a as c}from"./index-gdNXk4Ne.js";import{useMDXComponents as i}from"./index-DmqVK_gK.js";import{I as m,S as r,C as l}from"./IconCard.stories-SLSZ9frO.js";import"./iframe-Bxi_MIaY.js";import"./index-DQDNmYQF.js";import"./index-CV7naf_y.js";import"./index-BuA_lF3S.js";import"./index-DgH-xKnr.js";import"./index-DrFu-skq.js";import"./IconCard-B2y4U-de.js";import"./index-D2FocPV0.js";import"./WithCardAction-BvL5dv80.js";import"./Title-Rg7Vduii.js";import"./Icon-D_nm5xPy.js";function s(t){const n={code:"code",h1:"h1",h2:"h2",p:"p",...i(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(d,{of:m}),`
`,e.jsx(n.h1,{id:"iconcard",children:"IconCard"}),`
`,e.jsx(n.p,{children:`Ikonkort er kort med en gitt maksbredde og et venstrestilt ikon. Den tilbyr alle underkomponenter
(CardName, Title, Subtext, Text og CardAction) og plasserer dem i gitt rekkefølge nedover i kortet,
med teksten venstrestilt, til høyre for ikonet.`}),`
`,e.jsx(n.h2,{id:"kode",children:"Kode"}),`
`,e.jsx(a,{code:`
<IconCard
    icon={<Icon fileUrl="./icons/open/300/xl/savings.svg" size="xl" />}
>
    {({ CardName, Title, Subtext, Text }) => (
        <>
            <CardName>Kortnavn</CardName>
            <Title>Tittel</Title>
            <Subtext>En liten undertekst</Subtext>
            <Text>Her kan man ha tekst</Text>
        </>
    )}
</IconCard>
`}),`
`,e.jsx(n.h2,{id:"forhåndsvisning",children:"Forhåndsvisning"}),`
`,e.jsx(o,{of:r}),`
`,e.jsx(c,{of:r}),`
`,e.jsxs(n.p,{children:["Kortet kan gjøres mer kompakt med ",e.jsx(n.code,{children:"condensed"}),"-modifyeren."]}),`
`,e.jsx(o,{of:l}),`
`,e.jsx(n.h2,{id:"ikonbruk",children:"Ikonbruk"}),`
`,e.jsxs(n.p,{children:["Ikonene som brukes i kortene skal være ha weight ",e.jsx(n.code,{children:"300"}),". Størrelsen er ",e.jsx(n.code,{children:"lg"})," i condensed-versjonen og ",e.jsx(n.code,{children:"xl"})," i den normale versjonen."]})]})}function M(t={}){const{wrapper:n}={...i(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(s,{...t})}):s(t)}export{M as default};
