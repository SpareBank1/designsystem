import{j as e,M as i,S as d,C as o,a as p}from"./index-CW2LEkdb.js";import{useMDXComponents as a}from"./index-DmqVK_gK.js";import{R as l,S as r,F as u,W as m,a as c}from"./RadioButtonInputGroup.stories-BUEoXOEL.js";import"./iframe-tj9w-RA9.js";import"./index-DQDNmYQF.js";import"./index-CV7naf_y.js";import"./index-BuA_lF3S.js";import"./index-DgH-xKnr.js";import"./index-DrFu-skq.js";import"./RadioButtonInputGroup-BnP6J3oD.js";import"./index-D2FocPV0.js";import"./Tooltip-Dx-tWuFa.js";import"./Icon-D_nm5xPy.js";import"./Collapse-BVkyKCdf.js";import"./ErrorFieldMessage-DIT7W522.js";import"./BaseFieldMessage-WVjH22u3.js";import"./RadioButton-CSvX_Fhn.js";import"./BaseRadioButton-DEpJzu7C.js";import"./RadioSwitch-BA-WvidG.js";import"./RadioBlock-MtxcmPo-.js";function s(t){const n={code:"code",h1:"h1",h2:"h2",p:"p",...a(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{of:l}),`
`,e.jsx(n.h1,{id:"radiobuttoninputgroup",children:"RadioButtonInputGroup"}),`
`,e.jsx(n.p,{children:`Brukes når kunden kan velge ett av få valg. Hvis valgene er korte og konsise, kan man ha dem ved siden av hverandre.
Har valgene litt mer tekst, så bør valgene komme under hverandre.
Default oppførsel er at det holdes av plass under inputfeltene for å vise en feilmelding uten at innholdet lengre ned endres.
Dersom man ikke ønsker dette kan det skrus av med å sette extraMargin prop til false.`}),`
`,e.jsx(n.h2,{id:"kode",children:"Kode"}),`
`,e.jsx(d,{code:`
<RadioButtonInputGroup
    {...args}
    selectedValue={selectedValue}
    onChange={e => setSelectedValue(e.target.value as Value)}
>
    {inputProps => (
        <>
            <RadioButton {...inputProps} value="grass">
                Gress
            </RadioButton>
            <RadioButton {...inputProps} value="asphalt">
                Asfalt
            </RadioButton>
            <RadioButton {...inputProps} value="pollen">
                Pollen
            </RadioButton>
        </>
    )}
</RadioButtonInputGroup>
`}),`
`,e.jsx(n.h2,{id:"forhåndsvisning",children:"Forhåndsvisning"}),`
`,e.jsx(o,{of:r}),`
`,e.jsx(p,{of:r}),`
`,e.jsxs(n.p,{children:["Med ",e.jsx(n.code,{children:"fieldMessage"})]}),`
`,e.jsx(o,{of:u}),`
`,e.jsxs(n.p,{children:["Med ",e.jsx(n.code,{children:"<RadioSwitch />"})]}),`
`,e.jsx(o,{of:m}),`
`,e.jsxs(n.p,{children:["Med ",e.jsx(n.code,{children:"<RadioBlock />"})]}),`
`,e.jsx(o,{of:c})]})}function X(t={}){const{wrapper:n}={...a(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(s,{...t})}):s(t)}export{X as default};
