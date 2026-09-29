import{j as e,M as o,C as d,a}from"./index-CsABF5yZ.js";import{useMDXComponents as r}from"./index-DmqVK_gK.js";import{F as c,S as t}from"./Feedback.stories-BVK3PhG_.js";import{I as l}from"./InstallImport--FakQV9I.js";import"./iframe-BjxKeOn1.js";import"./index-DQDNmYQF.js";import"./index-DMkFJtLM.js";import"./index-CFFhkS_s.js";import"./index-DgH-xKnr.js";import"./index-DrFu-skq.js";import"./SecondaryButton-DBDUST9e.js";import"./BaseButton-DQM5pAH9.js";import"./fixedForwardRef-DqyCgkTx.js";import"./index-D2FocPV0.js";import"./Icon-C3s1OswO.js";import"./LinkText-DBBcDy9y.js";import"./Paragraph-j_y_RLec.js";import"./InputGroup-BOYEkbY1.js";import"./Collapse-D2HS3Sy-.js";import"./Checkbox-CaN_cHaR.js";import"./ButtonGroup-CbvUD8V9.js";import"./ActionButton-YHQylMjD.js";import"./TertiaryButton-BbKu_d3-.js";import"./Heading-D3oFbALb.js";const m=["@sb1/ffe-buttons-react","@sb1/ffe-core-react","@sb1/ffe-feedback","@sb1/ffe-form-react","@sb1/ffe-icons-react","@sb1/ffe-buttons","@sb1/ffe-core","@sb1/ffe-icons","@sb1/ffe-form","@sb1/ffe-collapse-react"];function i(s){const n={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...r(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:c}),`
`,e.jsx(n.h1,{id:"feedback",children:"Feedback"}),`
`,e.jsx(n.p,{children:"Komponenten består av en tekst og tommel opp/ned-knapper som ved klikk viser et tilbakemeldingsskjema."}),`
`,e.jsx(l,{packageName:"@sb1/ffe-feedback-react",dependencies:m}),`
`,e.jsx(n.h2,{id:"farger-og-layout",children:"Farger og layout"}),`
`,e.jsxs(n.p,{children:["Du kan velge bakgrunnsfarge ved å sende med ",e.jsx(n.code,{children:"bgColor"}),". Komponenten kan også brukes i kombinasjon med bølgen."]}),`
`,e.jsx(n.h2,{id:"contactlink",children:"contactLink"}),`
`,e.jsxs(n.p,{children:["Du kan endre lenken i teksten ved å sende med ",e.jsx(n.code,{children:"contactLink"}),"-prop og element som består av ",e.jsx(n.code,{children:"url"}),", ",e.jsx(n.code,{children:"linkText"})," og ",e.jsx(n.code,{children:"onClick"}),`.
Ved å bare sende inn `,e.jsx(n.code,{children:"onClick"}),` kan du overskrive hva som skjer når lenken blir trykket på.
Hvis du vil sende med din egen tekst kan du legge til `,e.jsx(n.code,{children:"linkText"}),"."]}),`
`,e.jsx(n.h2,{id:"isnative",children:"isNative"}),`
`,e.jsxs(n.p,{children:[`Standardtekstene spør hva du synes om «denne siden», noe som ikke passer inne i en hybrid app.
Sender du med `,e.jsx(n.code,{children:"isNative"})," bytter komponenten til tekster som omtaler appen i stedet:"]}),`
`,e.jsxs(n.p,{children:["| ",e.jsx(n.code,{children:"isNative={false}"})," (default)                                            | ",e.jsx(n.code,{children:"isNative={true}"}),`                                                 |
| ----------------------------------------------------------------------- | ----------------------------------------------------------------- |
| Hva synes du om denne siden?                                            | Hva synes du om denne delen av appen?                             |
| Svaret ditt blir brukt til å forbedre denne siden og blir ikke besvart. | Svaret ditt blir brukt til å forbedre appen og blir ikke besvart. |`]}),`
`,e.jsxs(n.p,{children:["Kjører appen din både i nettleser og i mobilbanken, kan du bruke ",e.jsx(n.code,{children:"checks.isNative()"}),` fra
Mobilbank Communication til å finne ut hvilken av dem det er. Se
`,e.jsxs(n.a,{href:"https://www.test.sparebank1.no/test/mbc-demo/static/docs/functions/checks.isNative.html",rel:"nofollow",children:["dokumentasjonen for ",e.jsx(n.code,{children:"checks.isNative"})]}),"."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`<Feedback
    isNative={checks.isNative()}
    onThumbClick={onThumbClick}
    onFeedbackSend={onFeedbackSend}
/>
`})}),`
`,e.jsxs(n.p,{children:["Sender du inn ",e.jsx(n.code,{children:"texts.feedbackNotSentHeading"})," vinner den fortsatt over begge variantene."]}),`
`,e.jsx(n.h2,{id:"forhåndsvisning",children:"Forhåndsvisning"}),`
`,e.jsx(d,{of:t}),`
`,e.jsx(a,{of:t})]})}function _(s={}){const{wrapper:n}={...r(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(i,{...s})}):i(s)}export{_ as default};
