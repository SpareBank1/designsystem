import{j as e,M as d,C as t,a}from"./index-CsABF5yZ.js";import{useMDXComponents as i}from"./index-DmqVK_gK.js";import{S as o,a as l,W as c,b as m,c as g,d as k}from"./SearchableDropdownMultiSelect.stories-BzsmuXpv.js";import"./iframe-BjxKeOn1.js";import"./index-DQDNmYQF.js";import"./index-DMkFJtLM.js";import"./index-CFFhkS_s.js";import"./index-DgH-xKnr.js";import"./index-DrFu-skq.js";import"./index-D2FocPV0.js";import"./ListBox-C59Vucjw.js";import"./index-DV_rwQs_.js";import"./Paragraph-j_y_RLec.js";import"./index-D9tCDUwu.js";import"./Icon-C3s1OswO.js";import"./ChipRemovable-DkAX6prY.js";import"./InputGroup-BOYEkbY1.js";import"./Collapse-D2HS3Sy-.js";import"./TertiaryButton-BbKu_d3-.js";import"./fixedForwardRef-DqyCgkTx.js";import"./ActionButton-YHQylMjD.js";import"./BaseButton-DQM5pAH9.js";function s(r){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...i(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(d,{of:o}),`
`,e.jsx(n.h1,{id:"searchabledropdownmultiselect",children:"SearchableDropdownMultiSelect"}),`
`,e.jsx(n.p,{children:"For nedtrekkslister der du kan velge å vise flere resultater samtidig (som for eksempel sparekontoer eller aksjefond)."}),`
`,e.jsx(n.p,{children:"I motsetning til reglene for SearchableDropdown og vanlig Dropdown er denne funksjonaliteten brukbar med så lite som to alternativer å velge mellom/kombinere."}),`
`,e.jsx(n.p,{children:"Dropdown multiselect skal kun brukes i situasjoner det gir mening å gi brukeren mulighet til å markere flere alternativer for sammenligning eller oppsamling."}),`
`,e.jsx(t,{of:l}),`
`,e.jsx(a,{of:l}),`
`,e.jsx(n.h2,{id:"med-beskrivelse",children:"Med beskrivelse"}),`
`,e.jsxs(n.p,{children:["Du kan bruke ",e.jsx(n.code,{children:"description='tekst her'"})," på ",e.jsx(n.code,{children:"InputGroup"})," for å legge til en beskrivelse mellom label og SearchableDropdownMultiSelect."]}),`
`,e.jsx(t,{of:c}),`
`,e.jsx(n.h2,{id:"velg-alle",children:"Velg alle"}),`
`,e.jsxs(n.p,{children:["Med ",e.jsx(n.code,{children:"showSelectAll"}),` får du en rad øverst i nedtrekkslisten som velger alt. Teksten
på raden er alltid «Velg alle» — checkboksen viser om alt, noe eller ingenting er
valgt, så teksten trenger ikke bytte for å si det samme.`]}),`
`,e.jsx(t,{of:m}),`
`,e.jsx(n.p,{children:"Ting å være klar over:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"onChange"})," får ",e.jsx(n.strong,{children:"kun det som endret seg"}),` — ikke hele utvalget. Klikker du raden
når noe fremdeles ikke er valgt, sender den de radene som ikke var valgt fra før
(`,e.jsx(n.code,{children:"actionType: 'selected'"}),`). Klikker du når alt allerede er valgt, sender den alle
synlige rader (`,e.jsx(n.code,{children:"actionType: 'removed'"}),")."]}),`
`,e.jsxs(n.li,{children:["Ved aktivt søk gjelder raden ",e.jsx(n.strong,{children:"bare treffene"}),", ikke hele listen."]}),`
`,e.jsx(n.li,{children:`Søketeksten beholdes etter at du har brukt raden, i motsetning til når du klikker
et enkelt alternativ. Da kan du toggle det samme settet treff flere ganger.`}),`
`,e.jsx(n.li,{children:`Raden er første rad i listen, så piltast ned én gang lander på «Velg alle» og to
ganger lander på det første alternativet.`}),`
`,e.jsxs(n.li,{children:["Bruker du ",e.jsx(n.code,{children:"maxRenderedDropdownElements"}),`, gjelder «Velg alle» kun de radene som
faktisk vises.`]}),`
`,e.jsx(n.li,{children:"Raden vises ikke når søket ikke gir treff."}),`
`,e.jsxs(n.li,{children:[`Checkboksen på raden har tre utseender: tom når ingenting er valgt, en strek når
noen — men ikke alle — av de synlige radene er valgt, og en hake når alle er.
Etiketten er alltid «Velg alle», uavhengig av tilstand, og strek-tilstanden er
dessuten kun visuell: raden er fortsatt `,e.jsx(n.code,{children:'aria-selected="false"'}),`. Hva som faktisk
er valgt annonseres per rad og som løpende antall.`]}),`
`]}),`
`,e.jsx(n.h3,{id:"egen-tekst",children:"Egen tekst"}),`
`,e.jsxs(n.p,{children:["Teksten kan overstyres med ",e.jsx(n.code,{children:"selectAllText"}),`. Overstyringen gjelder for alle
språk, så sender du inn en tekst må du selv håndtere `,e.jsx(n.code,{children:"locale"}),"."]}),`
`,e.jsx(t,{of:g}),`
`,e.jsx(n.h2,{id:"antall-valgte-i-stedet-for-chips",children:"Antall valgte i stedet for chips"}),`
`,e.jsxs(n.p,{children:["Med ",e.jsx(n.code,{children:"showNumberSelectedAfter"}),` byttes de enkelte chippene ut med én chip som
oppsummerer utvalget — «12 valgt» — så snart antallet valgte er høyere enn tallet
du sender inn. Sender du inn `,e.jsx(n.code,{children:"0"})," vises oppsummeringen alltid."]}),`
`,e.jsx(t,{of:k}),`
`,e.jsxs(n.p,{children:[`Oppsummeringschippen er én enhet, og fjerner hele utvalget: både krysset på chippen
og backspace i et tomt søkefelt tømmer den i én operasjon. `,e.jsx(n.code,{children:"onChange"}),` kalles én
gang med alle elementene som ble fjernet og `,e.jsx(n.code,{children:"'removed'"}),`. Under terskelen er det som
før — backspace fjerner den siste chippen, én av gangen.`]})]})}function K(r={}){const{wrapper:n}={...i(),...r.components};return n?e.jsx(n,{...r,children:e.jsx(s,{...r})}):s(r)}export{K as default};
