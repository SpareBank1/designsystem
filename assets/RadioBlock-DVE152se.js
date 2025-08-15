import{j as e,M as a,S as s,C as l,a as d}from"./index-Jov1O75e.js";import{useMDXComponents as i}from"./index-DmqVK_gK.js";import{R as p,S as n}from"./RadioBlock.stories-BfLKN62R.js";import"./iframe-Dp2ayTF_.js";import"./index-DQDNmYQF.js";import"./index-CV7naf_y.js";import"./index-BuA_lF3S.js";import"./index-DgH-xKnr.js";import"./index-DrFu-skq.js";import"./RadioBlock-MtxcmPo-.js";import"./index-D2FocPV0.js";import"./RadioButtonInputGroup-BnP6J3oD.js";import"./Tooltip-Dx-tWuFa.js";import"./Icon-D_nm5xPy.js";import"./Collapse-BVkyKCdf.js";import"./ErrorFieldMessage-DIT7W522.js";import"./BaseFieldMessage-WVjH22u3.js";function t(r){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...i(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{of:p}),`
`,e.jsx(o.h1,{id:"radioblock",children:"RadioBlock"}),`
`,e.jsx(o.p,{children:"Radioblokker brukes når vi ber brukeren om å ta valg som krever en del."}),`
`,e.jsx(o.h2,{id:"kode",children:"Kode"}),`
`,e.jsx(s,{code:`
<RadioButtonInputGroup
    label="Hvem eier bilen du skal forsikre?"
    name="owner"
    onChange={e => setSelected(e.target.value)}
    selectedValue={selected}
>
    {inputProps => (
        <>
            <RadioBlock
                {...inputProps}
                label="Ektefelle, samboer eller registrert partner"
                value="partner"
            >
                Da må ektefelle, samboer eller registrert partner
                skrive inn detaljene sine under.
            </RadioBlock>
            <RadioBlock
                {...inputProps}
                label="Du"
                value="you"
            >
                Da må du skrive inn detaljene dine under.
            </RadioBlock>
            <RadioBlock
                {...inputProps}
                label="Leasingselskap"
                value="leasing-company"
            >
                Da må leasingselskapet gi deg noen detaljer som du
                må skrive inn under.
            </RadioBlock>
        </>
    )}
</RadioButtonInputGroup>
`}),`
`,e.jsx(o.h2,{id:"forhåndsvisning",children:"Forhåndsvisning"}),`
`,e.jsx(l,{of:n}),`
`,e.jsx(d,{of:n}),`
`,e.jsx(o.pre,{children:e.jsx(o.code,{})})]})}function P(r={}){const{wrapper:o}={...i(),...r.components};return o?e.jsx(o,{...r,children:e.jsx(t,{...r})}):t(r)}export{P as default};
