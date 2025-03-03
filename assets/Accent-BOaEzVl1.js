import{j as e,M as a}from"./index-4XTN4PIi.js";import{useMDXComponents as r}from"./index-CVdx34fM.js";import"./iframe-QRwMi64e.js";import"./index-eCxJ45ll.js";import"./index-BhUHFDTH.js";import"./index-D3-0uUTW.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";function o(t){const n={a:"a",code:"code",h1:"h1",p:"p",pre:"pre",...r(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{title:"Design/Farger/Accent"}),`
`,e.jsx(n.h1,{id:"accent",children:"Accent"}),`
`,e.jsxs(n.p,{children:["Accent mode aktiveres med å legge klassen ",e.jsx(n.code,{children:"ffe-accent-mode"}),` på elementet eller på
containeren til elementet. Trenger en default mode inne i eccentmode kan en legge på klassen `,e.jsx(n.code,{children:".ffe-default-mode"}),"."]}),`
`,e.jsx(n.p,{children:"Noen vanlige eksempler på bruk av accent mode"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`// En komponent med accent mode
<PrimaryButton
    className="ffe-accent-mode">
    Primærknapp
</PrimaryButton>


// Flere komponenter med accent mode i samme område
<div
   className="ffe-accent-mode"
   style={{backgroundColor:"var(--ffe-color-background-default)"}}>
   <PrimaryButton>
      Primærknapp
   </PrimaryButton>
   <SecondaryButton>
      Sekundærknapp
   </SecondaryButton>
</div>


// En komponent med accent mode i et accentområde og en komponent med default mode
<div
   className="ffe-accent-mode"
   style={{backgroundColor:"var(--ffe-color-background-default)"}}>
   <PrimaryButton>
      Primærknapp
   </PrimaryButton>
   <SecondaryButton className="ffe-default-mode">
      Sekundærknapp
   </SecondaryButton>
</div>
`})}),`
`,e.jsxs(n.p,{children:["Se eksempelet ",e.jsx(n.a,{href:"",children:"på en slik side med en accent section"})," WIP"]})]})}function f(t={}){const{wrapper:n}={...r(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(o,{...t})}):o(t)}export{f as default};
