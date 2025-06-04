import{j as e,M as i,S as s,C as n,a as p}from"./index-C8r5a4Ae.js";import{useMDXComponents as a}from"./index-DmqVK_gK.js";import{G as m,S as t,N as l,W as c}from"./GroupCard.stories-D-6Zedkq.js";import"./iframe-Be7QQ9t1.js";import"./index-DQDNmYQF.js";import"./index-CGBZXJ9a.js";import"./index-DrriUsT5.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";import"./index-QCImZZ3W.js";import"./WithCardAction-BEfhMYaK.js";import"./Title-CmDdbz_O.js";import"./Heading-D_Y6r1eI.js";import"./Paragraph-DEYlXMQQ.js";function d(o){const r={code:"code",h1:"h1",h2:"h2",p:"p",...a(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{of:m}),`
`,e.jsx(r.h1,{id:"groupcard",children:"GroupCard"}),`
`,e.jsxs(r.p,{children:["GroupCard er et kort med en liste av elementer inni. Det kan bestå av ",e.jsx(r.code,{children:"GroupCardTitle"}),", ",e.jsx(r.code,{children:"GroupCardElement"})," og ",e.jsx(r.code,{children:"GroupCardFooter"}),", men trenger ikke alle."]}),`
`,e.jsx(r.h2,{id:"kode",children:"Kode"}),`
`,e.jsx(s,{code:`
<GroupCard>
    <GroupCardTitle>
        <Heading2 lookLike={5}>Tittel på gruppe</Heading2>
    </GroupCardTitle>
    <GroupCardElement>Dette er et element i GroupCard</GroupCardElement>
    <GroupCardElement>Dette er et element i GroupCard</GroupCardElement>
    <GroupCardElement>Dette er et element i GroupCard</GroupCardElement>
    <GroupCardFooter>
        {({ CardAction }: CardRenderProps) => (
            <CardAction href="https://design.sparebank1.no">
                Vis mer
            </CardAction>
        )}
    </GroupCardFooter>
</GroupCard>
`}),`
`,e.jsx(r.h2,{id:"forhåndsvisning",children:"Forhåndsvisning"}),`
`,e.jsx(n,{of:t}),`
`,e.jsx(p,{of:t}),`
`,e.jsxs(r.p,{children:[e.jsx(r.code,{children:"GroupCardElement"})," har linjer mellom elementene som standard, men det kan fjernes med ",e.jsx(r.code,{children:"noSeparator"}),"."]}),`
`,e.jsx(n,{of:l}),`
`,e.jsxs(r.p,{children:["Akkurat som med ",e.jsx(r.code,{children:"CardBase"}),", er ikke ",e.jsx(r.code,{children:"GroupCardElement"})," klikkbart som standard. Bruk ",e.jsx(r.code,{children:"CardAction"})," for å lage et klikkbart kort."]}),`
`,e.jsx(n,{of:c})]})}function v(o={}){const{wrapper:r}={...a(),...o.components};return r?e.jsx(r,{...o,children:e.jsx(d,{...o})}):d(o)}export{v as default};
