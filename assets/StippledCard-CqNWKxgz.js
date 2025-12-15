import{j as e,M as d,S as a,C as o,a as m}from"./index-SjHHY1S2.js";import{useMDXComponents as s}from"./index-DmqVK_gK.js";import{S as l,a as i,W as p,b as c,C as x}from"./StippledCard.stories-kcnhuHwc.js";import"./iframe-7Qt2Zrkk.js";import"./index-DQDNmYQF.js";import"./index-1rxX2T2W.js";import"./index-CFFhkS_s.js";import"./index-DgH-xKnr.js";import"./index-DrFu-skq.js";import"./index-D2FocPV0.js";import"./WithCardAction-BvL5dv80.js";import"./Title-Rg7Vduii.js";import"./Icon-D_nm5xPy.js";function r(n){const t={code:"code",h1:"h1",h2:"h2",p:"p",...s(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(d,{of:l}),`
`,e.jsx(t.h1,{id:"stippledcard",children:"StippledCard"}),`
`,e.jsx(t.p,{children:`StippledCard er kort med en stiplet kantlinje. Den tilbyr alle underkomponenter (CardName, Title, Subtext, Text og CardAction)
og plasserer dem i gitt rekkefølge nedover i kortet, med teksten venstrestilt.
Kortet kan brukes i kombinasjon med ikoner eller illustrasjoner, eller uten noen av delene.`}),`
`,e.jsx(t.h2,{id:"kode",children:"Kode"}),`
`,e.jsx(a,{code:`
<StippledCard>
    {({ CardName, Title, Subtext, Text }) => (
        <>
            <CardName>CardName</CardName>
            <Title>Tittel</Title>
            <Subtext as="span">Subtext er grå</Subtext>
            <Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore et dolore
                magna aliqua. Ut enim ad minim veniam, quis nostrud
                exercitation ullamco laboris nisi ut aliquip ex ea
                commodo consequat.
            </Text>
        </>
    )}
</StippledCard>
`}),`
`,e.jsx(t.h2,{id:"forhåndsvisning",children:"Forhåndsvisning"}),`
`,e.jsx(o,{of:i}),`
`,e.jsx(m,{of:i}),`
`,e.jsx(t.p,{children:"Med icon:"}),`
`,e.jsx(o,{of:p}),`
`,e.jsx(t.p,{children:"Med illustrasjon:"}),`
`,e.jsx(o,{of:c}),`
`,e.jsxs(t.p,{children:["StippledCard kan gjøres mer kompakt med ",e.jsx(t.code,{children:"condensed"}),"-modifyeren."]}),`
`,e.jsx(o,{of:x})]})}function q(n={}){const{wrapper:t}={...s(),...n.components};return t?e.jsx(t,{...n,children:e.jsx(r,{...n})}):r(n)}export{q as default};
