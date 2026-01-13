import{j as e,M as a,S as s,C as m,a as d}from"./index-Cyle30Y4.js";import{useMDXComponents as r}from"./index-DmqVK_gK.js";import{I as l,S as i}from"./ImageCard.stories-ONQuOhcN.js";import"./iframe--OCoIXnN.js";import"./index-DQDNmYQF.js";import"./index-1rxX2T2W.js";import"./index-CFFhkS_s.js";import"./index-DgH-xKnr.js";import"./index-DrFu-skq.js";import"./index-D2FocPV0.js";import"./WithCardAction-BvL5dv80.js";import"./Title-Rg7Vduii.js";function o(n){const t={h1:"h1",h2:"h2",p:"p",...r(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{of:l}),`
`,e.jsx(t.h1,{id:"imagecard",children:"ImageCard"}),`
`,e.jsx(t.p,{children:`Bildekort er kort med en gitt maksbredde, minimumshøyde, og et topplasert bilde. Den tilbyr alle underkomponenter
(CardName, Title, Subtext, Text og CardAction) og plasserer dem i gitt rekkefølge nedover i kortet, med teksten midtstilt,
nedenfor bildet.`}),`
`,e.jsx(t.h2,{id:"kode",children:"Kode"}),`
`,e.jsx(s,{code:`
<ImageCard 
    imageSrc="https://design.sparebank1.no/assets/images/illustrations/illustration-1.svg"
    imageAltText="To jenter som går å snakker sammen"
>
    {({ CardName, Title, Subtext, Text }) => (
        <>
            <CardName>Kortnavn</CardName>
            <Title>Tittel</Title>
            <Subtext>En liten undertekst</Subtext>
            <Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore et dolore
                magna aliqua. Ut enim ad minim veniam, quis nostrud
                exercitation ullamco laboris nisi ut aliquip ex ea
                commodo consequat.
            </Text>
        </>
    )}
</ImageCard>
`}),`
`,e.jsx(t.h2,{id:"forhåndsvisning",children:"Forhåndsvisning"}),`
`,e.jsx(m,{of:i}),`
`,e.jsx(d,{of:i})]})}function S(n={}){const{wrapper:t}={...r(),...n.components};return t?e.jsx(t,{...n,children:e.jsx(o,{...n})}):o(n)}export{S as default};
