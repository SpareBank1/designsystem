import{j as e,M as u,S as m,C as o,a as i}from"./index-B18GPKYI.js";import{useMDXComponents as p}from"./index-DmqVK_gK.js";import{R as h,S as r,W as s,I as a,A as d,a as k}from"./RadioButton.stories-97t5eJ6u.js";import"./iframe-C1rhN_4y.js";import"./index-DQDNmYQF.js";import"./index-CV7naf_y.js";import"./index-BuA_lF3S.js";import"./index-DgH-xKnr.js";import"./index-DrFu-skq.js";import"./RadioButton-CSvX_Fhn.js";import"./index-D2FocPV0.js";import"./BaseRadioButton-DEpJzu7C.js";import"./Tooltip-Dx-tWuFa.js";import"./Icon-D_nm5xPy.js";import"./Collapse-BVkyKCdf.js";import"./RadioButtonInputGroup-BnP6J3oD.js";import"./ErrorFieldMessage-DIT7W522.js";import"./BaseFieldMessage-WVjH22u3.js";function l(t){const n={code:"code",h1:"h1",h2:"h2",p:"p",...p(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(u,{of:h}),`
`,e.jsx(n.h1,{id:"radiobutton",children:"RadioButton"}),`
`,e.jsx(n.p,{children:`Brukes når kunden kan velge ett av få valg. Hvis valgene er korte og konsise, kan man ha dem ved siden av hverandre.
Har valgene litt mer tekst, så bør valgene komme under hverandre.`}),`
`,e.jsx(n.h2,{id:"kode",children:"Kode"}),`
`,e.jsx(m,{code:`
<RadioButtonInputGroup
    label="Velg kundetype"
    name="radio-button-demo"
    onChange={e => setSelected(e.target.value)}
    selectedValue={selected}
>
    {inputProps => (
        <>
            <RadioButton value="bankkunde" {...inputProps}>
                Bankkunde
            </RadioButton>
            <RadioButton value="bedriftskunde" {...inputProps}>
                Bedriftskunde
            </RadioButton>
        </>
    )}
</RadioButtonInputGroup>
`}),`
`,e.jsx(n.h2,{id:"forhåndsvisning",children:"Forhåndsvisning"}),`
`,e.jsx(o,{of:r}),`
`,e.jsx(i,{of:r}),`
`,e.jsx(n.h2,{id:"med-tipstekst",children:"Med tipstekst"}),`
`,e.jsx(n.p,{children:"Noen valg kan være mer kompliserte, og ikke like selvforklarende. Da kan man legge til en tipstekst:"}),`
`,e.jsx(o,{of:s}),`
`,e.jsx(i,{of:s}),`
`,e.jsx(n.h2,{id:"inline",children:"Inline"}),`
`,e.jsx(n.p,{children:"For korte og konsise valg som kan vises horisontalt:"}),`
`,e.jsx(o,{of:a}),`
`,e.jsx(i,{of:a}),`
`,e.jsx(n.h2,{id:"aria-invalid",children:"Aria-invalid"}),`
`,e.jsxs(n.p,{children:["Du kan merke at et felt er ugyldig ved å sette ",e.jsx(n.code,{children:'aria-invalid="true"'}),"."]}),`
`,e.jsx(o,{of:d}),`
`,e.jsx(i,{of:d}),`
`,e.jsx(n.h2,{id:"med-beskrivelse",children:"Med beskrivelse"}),`
`,e.jsxs(n.p,{children:["Du kan bruke ",e.jsx(n.code,{children:"description='tekst her'"})," på ",e.jsx(n.code,{children:"InputGroup"})," for å legge til en beskrivelse mellom label og Radio-knappene."]}),`
`,e.jsx(o,{of:k})]})}function P(t={}){const{wrapper:n}={...p(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(l,{...t})}):l(t)}export{P as default};
