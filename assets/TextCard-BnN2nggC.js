import{j as e,M as a,S as s,C as d,a as m}from"./index-Vqu7shNF.js";import{useMDXComponents as i}from"./index-DmqVK_gK.js";import{T as x,S as n}from"./TextCard.stories-DOOCsFqC.js";import"./iframe-CWXGpjZB.js";import"./index-DQDNmYQF.js";import"./index-C8KIgodY.js";import"./index-DrriUsT5.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";import"./index-QCImZZ3W.js";import"./WithCardAction-BEfhMYaK.js";import"./Title-CmDdbz_O.js";function r(o){const t={h1:"h1",h2:"h2",p:"p",...i(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{of:x,parameters:{viewMode:"docs"}}),`
`,e.jsx(t.h1,{id:"textcard",children:"TextCard"}),`
`,e.jsx(t.p,{children:"Tekstkort er den enkleste korttypen. Den tilbyr alle underkomponenter (CardName, Title, Subtext, Text og CardAction) og plasserer dem i gitt rekkefølge nedover i kortet, med teksten midtstilt."}),`
`,e.jsx(t.h2,{id:"kode",children:"Kode"}),`
`,e.jsx(s,{code:`
<TextCard>
    {({ CardName, Title, Subtext, Text }) => (
        <>
            <CardName>Kortnavn</CardName>
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
</TextCard>
`}),`
`,e.jsx(t.h2,{id:"forhåndsvisning",children:"Forhåndsvisning"}),`
`,e.jsx(d,{of:n}),`
`,e.jsx(m,{of:n})]})}function b(o={}){const{wrapper:t}={...i(),...o.components};return t?e.jsx(t,{...o,children:e.jsx(r,{...o})}):r(o)}export{b as default};
