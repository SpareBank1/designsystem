import{j as e,M as l,S as p,C as t,a as o}from"./index-Cb0fvPiG.js";import{useMDXComponents as d}from"./index-DmqVK_gK.js";import{R as m,S as r,A as a}from"./RadioSwitch.stories-R6XXO93B.js";import"./iframe-UhMVeFK3.js";import"./index-DQDNmYQF.js";import"./index-CGBZXJ9a.js";import"./index-DrriUsT5.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";import"./RadioSwitch-DTh7SSNA.js";import"./index-QCImZZ3W.js";import"./BaseRadioButton-DQ_ajsha.js";import"./Tooltip-BmnhgMk7.js";import"./Icon-BqsuuMcG.js";import"./Collapse-BrKhsD1f.js";import"./RadioButtonInputGroup-BA93qp9c.js";import"./ErrorFieldMessage-eNbkZ9Td.js";import"./BaseFieldMessage-Bp22b08z.js";function s(n){const i={code:"code",h1:"h1",h2:"h2",p:"p",...d(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{of:m}),`
`,e.jsx(i.h1,{id:"radioswitch",children:"RadioSwitch"}),`
`,e.jsx(i.p,{children:'Brukes når kunden skal ta stilling til enkle valg - typisk i formen "ja/nei", eller "av/på" og hvor du i tillegg har behov for en lagreknapp. Har du behov for mer enn 3 radio-switcher i en liste, skal du bruke radioknapper.'}),`
`,e.jsx(i.h2,{id:"kode",children:"Kode"}),`
`,e.jsx(p,{code:`
<RadioButtonInputGroup
    label="Velg et alternativ"
    name="radio-switch-demo"
    onChange={e => setSelected(e.target.value)}
    selectedValue={selected}
>
    {inputProps => <RadioSwitch {...inputProps} />}
</RadioButtonInputGroup>
`}),`
`,e.jsx(i.h2,{id:"forhåndsvisning",children:"Forhåndsvisning"}),`
`,e.jsx(t,{of:r}),`
`,e.jsx(o,{of:r}),`
`,e.jsx(i.h2,{id:"aria-invalid",children:"Aria-invalid"}),`
`,e.jsxs(i.p,{children:["Du kan merke at et felt er ugyldig ved å sette ",e.jsx(i.code,{children:'aria-invalid="true"'}),"."]}),`
`,e.jsx(t,{of:a}),`
`,e.jsx(o,{of:a})]})}function B(n={}){const{wrapper:i}={...d(),...n.components};return i?e.jsx(i,{...n,children:e.jsx(s,{...n})}):s(n)}export{B as default};
