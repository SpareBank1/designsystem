import{j as e,M as l,S as p,C as r,a as o}from"./index-B9ybg0th.js";import{useMDXComponents as d}from"./index-DmqVK_gK.js";import{R as c,S as t,A as s,W as h}from"./RadioSwitch.stories-C-wWydrP.js";import"./iframe-clYGiD5J.js";import"./index-DQDNmYQF.js";import"./index-CV7naf_y.js";import"./index-BuA_lF3S.js";import"./index-DgH-xKnr.js";import"./index-DrFu-skq.js";import"./RadioSwitch-BA-WvidG.js";import"./index-D2FocPV0.js";import"./BaseRadioButton-DEpJzu7C.js";import"./Tooltip-Dx-tWuFa.js";import"./Icon-D_nm5xPy.js";import"./Collapse-BVkyKCdf.js";import"./RadioButtonInputGroup-BnP6J3oD.js";import"./ErrorFieldMessage-DIT7W522.js";import"./BaseFieldMessage-WVjH22u3.js";function a(n){const i={code:"code",h1:"h1",h2:"h2",p:"p",...d(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{of:c}),`
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
`,e.jsx(r,{of:t}),`
`,e.jsx(o,{of:t}),`
`,e.jsx(i.h2,{id:"aria-invalid",children:"Aria-invalid"}),`
`,e.jsxs(i.p,{children:["Du kan merke at et felt er ugyldig ved å sette ",e.jsx(i.code,{children:'aria-invalid="true"'}),"."]}),`
`,e.jsx(r,{of:s}),`
`,e.jsx(o,{of:s}),`
`,e.jsx(i.h2,{id:"med-beskrivelse",children:"Med beskrivelse"}),`
`,e.jsxs(i.p,{children:["Du kan bruke ",e.jsx(i.code,{children:"description='tekst her'"})," på ",e.jsx(i.code,{children:"InputGroup"})," for å legge til en beskrivelse mellom label og RadioSwitch."]}),`
`,e.jsx(r,{of:h})]})}function B(n={}){const{wrapper:i}={...d(),...n.components};return i?e.jsx(i,{...n,children:e.jsx(a,{...n})}):a(n)}export{B as default};
