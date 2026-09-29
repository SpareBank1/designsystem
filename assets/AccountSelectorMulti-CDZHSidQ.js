import{j as e,M as i,C as t,a as d}from"./index-CsABF5yZ.js";import{useMDXComponents as l}from"./index-DmqVK_gK.js";import{A as a,S as o,W as c,a as m}from"./AccountSelectorMulti.stories-Db8EutCm.js";import{I as p}from"./InstallImport--FakQV9I.js";import{d as h}from"./ffe-dependencies-LVhhU6Ic.js";import"./iframe-BjxKeOn1.js";import"./index-DQDNmYQF.js";import"./index-DMkFJtLM.js";import"./index-CFFhkS_s.js";import"./index-DgH-xKnr.js";import"./index-DrFu-skq.js";import"./texts-B-nd1AV0.js";import"./index-DV_rwQs_.js";import"./index-D2FocPV0.js";import"./index-D9tCDUwu.js";import"./Paragraph-j_y_RLec.js";import"./Icon-C3s1OswO.js";import"./formatNumber-CcQqimCo.js";import"./ChipRemovable-DkAX6prY.js";import"./InputGroup-BOYEkbY1.js";import"./Collapse-D2HS3Sy-.js";import"./TertiaryButton-BbKu_d3-.js";import"./fixedForwardRef-DqyCgkTx.js";import"./Heading-D3oFbALb.js";function s(r){const n={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",strong:"strong",ul:"ul",...l(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{of:a}),`
`,e.jsx(n.h1,{id:"accountselectormulti",children:"AccountSelectorMulti"}),`
`,e.jsx(n.p,{children:"Kontovelger med støtte for å velge flere kontoer på én gang."}),`
`,e.jsx(p,{packageName:"@sb1/ffe-account-selector-react",dependencies:h}),`
`,e.jsx(n.h2,{id:"forhåndsvisning",children:"Forhåndsvisning"}),`
`,e.jsx(t,{of:o}),`
`,e.jsx(d,{of:o}),`
`,e.jsx(n.h2,{id:"med-beskrivelse",children:"Med beskrivelse"}),`
`,e.jsxs(n.p,{children:["Du kan bruke ",e.jsx(n.code,{children:"description='tekst her'"})," på ",e.jsx(n.code,{children:"InputGroup"})," for å legge til en beskrivelse mellom label og AccountSelectorMulti."]}),`
`,e.jsx(t,{of:c}),`
`,e.jsx(n.h2,{id:"velg-alle",children:"Velg alle"}),`
`,e.jsxs(n.p,{children:["Med ",e.jsx(n.code,{children:"showSelectAll"}),` får du en rad øverst i nedtrekkslisten som velger alle kontoene.
Teksten på raden er alltid «Velg alle» — checkboksen viser om alle, noen eller
ingen kontoer er valgt. Teksten kan overstyres med `,e.jsx(n.code,{children:"selectAllText"}),`, og
overstyringen gjelder for alle språk.`]}),`
`,e.jsx(t,{of:m}),`
`,e.jsx(n.p,{children:"Ting å være klar over:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"onChange"})," får ",e.jsx(n.strong,{children:"kun kontoene som endret seg"})," — ikke hele utvalget."]}),`
`,e.jsxs(n.li,{children:["Ved aktivt søk gjelder raden ",e.jsx(n.strong,{children:"bare treffene"}),", ikke alle kontoene."]}),`
`,e.jsx(n.li,{children:`Søketeksten beholdes etter at du har brukt raden, så du kan toggle det samme
settet treff flere ganger.`}),`
`,e.jsx(n.li,{children:`Raden er første rad i listen, så piltast ned én gang lander på «Velg alle» og to
ganger lander på den første kontoen.`}),`
`,e.jsxs(n.li,{children:["Bruker du ",e.jsx(n.code,{children:"maxRenderedDropdownElements"}),`, gjelder «Velg alle» kun de radene som
faktisk vises.`]}),`
`]})]})}function B(r={}){const{wrapper:n}={...l(),...r.components};return n?e.jsx(n,{...r,children:e.jsx(s,{...r})}):s(r)}export{B as default};
