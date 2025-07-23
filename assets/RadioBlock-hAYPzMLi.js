import{j as e,M as a,S as s,C as l,a as d}from"./index-D8Iwegvh.js";import{useMDXComponents as i}from"./index-DmqVK_gK.js";import{R as p,S as n}from"./RadioBlock.stories-833Qd3FX.js";import"./iframe-Bq0-55nQ.js";import"./index-DQDNmYQF.js";import"./index-CGBZXJ9a.js";import"./index-DrriUsT5.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";import"./RadioBlock-CoQVuGh0.js";import"./index-QCImZZ3W.js";import"./RadioButtonInputGroup-BA93qp9c.js";import"./Tooltip-BmnhgMk7.js";import"./Icon-BqsuuMcG.js";import"./Collapse-BrKhsD1f.js";import"./ErrorFieldMessage-eNbkZ9Td.js";import"./BaseFieldMessage-Bp22b08z.js";function t(r){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...i(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{of:p}),`
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
