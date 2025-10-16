import{j as e,M as t}from"./index-_m4bSQz4.js";import{useMDXComponents as s}from"./index-DmqVK_gK.js";import"./iframe-BvY95Tf6.js";import"./index-DQDNmYQF.js";import"./index-CV7naf_y.js";import"./index-BuA_lF3S.js";import"./index-DgH-xKnr.js";import"./index-DrFu-skq.js";function o(n){const r={code:"code",h1:"h1",h2:"h2",p:"p",...s(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(t,{title:"Design/Farger/Native"}),`
`,e.jsx(r.h1,{id:"farger-for-native",children:"Farger for Native"}),`
`,e.jsxs(r.p,{children:["Pakken ",e.jsx(r.code,{children:"@sb1/ffe-core"}),` inneholder fargetokens som tokens, css, less og js.
For å bruke disse fargene i native er det enkleste å bygge de til den relevante platformen.`]}),`
`,e.jsx(r.p,{children:"Scriptene som brukes for å bygge fargene til native ligger her: https://github.com/SpareBank1/designsystem/tree/develop/packages/ffe-core/scripts/build-colors/mobile"}),`
`,e.jsxs(r.p,{children:["For å bruke scriptet kan en bruke npx som lar en kjøre scripts fra pakker uten å installere de. Enten kjør det i root og legg til riktig path. eller kjør det i riktig mappe med path ",e.jsx(r.code,{children:"."}),"Paths=./android-test/colors"]}),`
`,e.jsxs(r.p,{children:[`Vi anbefaler at dere commiter scriptet dere bruker for å bygge fargene, slik at dere har kontroll på når fargene endrer seg.
I eksemplene under bruker vi `,e.jsx(r.code,{children:"@sb1/ffe-core@33.0.2"})," som er versjon ",e.jsx(r.code,{children:"33.0.2"})," av ",e.jsx(r.code,{children:"@sb1/ffe-core"}),". Ved å ha dette committet blir det enklere å spore når fargene endrer seg og å vite hvilken versjon en er på."]}),`
`,e.jsx(r.h2,{id:"android",children:"android"}),`
`,e.jsx(r.p,{children:e.jsx(r.code,{children:"npx @sb1/ffe-core@33.0.2 build-colors platform=android androidPaths=./android-test/colors"})}),`
`,e.jsx(r.h2,{id:"ios",children:"ios"}),`
`,e.jsx(r.p,{children:e.jsx(r.code,{children:"npx @sb1/ffe-core@33.0.2 build-colors platform=ios iosPaths=./test/ios/colors"})}),`
`,e.jsx(r.h2,{id:"json",children:"json"}),`
`,e.jsx(r.p,{children:e.jsx(r.code,{children:"npx @sb1/ffe-core@33.0.2 build-colors platform=json jsonPaths=./test/json/colors"})})]})}function j(n={}){const{wrapper:r}={...s(),...n.components};return r?e.jsx(r,{...n,children:e.jsx(o,{...n})}):o(n)}export{j as default};
