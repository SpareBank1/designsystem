import{j as e,M as t,C as i,a}from"./index-BJKlsB_S.js";import{useMDXComponents as l}from"./index-DmqVK_gK.js";import{I as d,S as s,W as k,N as m,a as c,b as p,U as g}from"./Icon.stories-8wiiN1Tx.js";import{I as h}from"./InstallImport-Cuqz_-gK.js";import"./iframe-DLIj1iXk.js";import"./index-DQDNmYQF.js";import"./index-C8KIgodY.js";import"./index-DrriUsT5.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";import"./index-QCImZZ3W.js";import"./Heading-afd3onnD.js";import"./Paragraph-DEYlXMQQ.js";const f=""+new URL("bytte-ikon-0--Bbvjd.png",import.meta.url).href,j=""+new URL("velger-tekststil-Cnzr0Gvc.png",import.meta.url).href,v=""+new URL("velger-color-Dhefp0XG.png",import.meta.url).href;function o(r){const n={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...l(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(t,{of:d}),`
`,e.jsx(n.h1,{id:"icon",children:"Icon"}),`
`,e.jsx(n.p,{children:"Ikoner skal gjøre det enkelt for kunden å navigere i de digitale flatene våre. Ikonene representerer funksjoner, verktøy eller handlinger og visualiserer funksjonalitet."}),`
`,e.jsxs(n.p,{children:["Ikonene vi bruker kommer fra ikonbiblioteket Material Symbols. ",e.jsx(n.a,{href:"https://design.sparebank1.no/profil/ikoner/",rel:"nofollow",children:"Les mer om ikonene"})," under profil."]}),`
`,e.jsx(h,{packageName:"@sb1/ffe-icons-react",dependencies:["@sb1/ffe-icons"],stylingDependencies:["@sb1/ffe-icons/less/ffe-icons"]}),`
`,e.jsx(n.h2,{id:"figma",children:"Figma"}),`
`,e.jsx(n.p,{children:"Når du bruker komponenter fra designsystem-biblioteket i Figma ligger ikonene tilgjengelig som en del av komponentene."}),`
`,e.jsxs(n.p,{children:[`For å bytte ikon klikker du deg bare inn på ikonet og skriver navnet på ikonet du vil ha. Du får oversikt over alle ikonene og navnene med plugin «Material Symbols»
i Figma eller på `,e.jsx(n.a,{href:"https://fonts.google.com/icons?icon.style=Rounded",rel:"nofollow",children:"https://fonts.google.com/icons?icon.style=Rounded"}),"."]}),`
`,e.jsx("img",{src:f,alt:"Hvordan man bytter ikon i Figma"}),`
`,e.jsx(n.p,{children:"Når du trenger et ikon utenfor komponentene lager du et nytt tekstelement, skriver navnet på ikonet, og velger en av tekststilene for ikoner under Text Styles."}),`
`,e.jsx("img",{src:j,alt:"Hvordan man velger tekststil for ikoner"}),`
`,e.jsx(n.p,{children:"Bruk Color Styles for å bytte farge på ikonet."}),`
`,e.jsx("img",{src:v,alt:"Hvordan man velger color style for ikonet"}),`
`,e.jsx(n.h2,{id:"svg-implementasjon",children:"SVG-implementasjon"}),`
`,e.jsxs(n.p,{children:["Bruk pakkene ",e.jsx(n.code,{children:"ffe-icons"})," og ",e.jsx(n.code,{children:"ffe-icons-react"}),". I ",e.jsx(n.code,{children:"ffe-icons"}),` finner du alle varianter av ikonene som SVG-filer, i tillegg til styling-filene som brukes i React-komponenten.
SVG-filene er sortert på `,e.jsx(n.code,{children:"weight"}),", om de er fylt eller ikke, samt størrelse. Hvilken størrelse du skal bruke kan variere fra komponent til komponent."]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"Icon"}),"-komponenten tar inn en filbane eller ",e.jsx(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/Data_URLs",rel:"nofollow",children:"data-URL"}),", og setter SVG-ikonet som en mask. Det gjør at ikonet kan arve color-verdien fra et parent-element."]}),`
`,e.jsx(n.p,{children:`Filbane er anbefalt metode for å importere ikoner. På denne måten kan man i tillegg til selve ikonet spesifisere variant, vekt og størrelse i URL-en ikonet hentes fra.
For eksempel vil et åpent hjem-ikon med vekt 300 og størrelse md kunne tas i bruk slik:`}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{children:`import homeIcon from '@sb1/ffe-icons/icons/open/300/md/home.svg';

return <Icon fileUrl={homeIcon} size="md" ariaLabel="hjem" />;
`})}),`
`,e.jsxs(n.p,{children:["Dersom man ønsker å legge inn ikoner som data-URL må man selv konvertere ikonene til et passende format, for eksempel ",e.jsx(n.a,{href:"https://developer.mozilla.org/en-US/docs/Glossary/Base64",rel:"nofollow",children:"base64"}),"."]}),`
`,e.jsx(n.h2,{id:"forhåndsvisning",children:"Forhåndsvisning"}),`
`,e.jsx(i,{of:s}),`
`,e.jsx(a,{of:s}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"mask"})," fungerer på samme måte som bakgrunn. Det er derfor viktig at du setter en ",e.jsx(n.code,{children:"size"}),`-prop som stemmer overens med SVG-størrelsen, slik at ikonet vises riktig.
Setter du en verdi i `,e.jsx(n.code,{children:"size"})," som ikke stemmer overens med SVG-en, vil resultatet se slik ut:"]}),`
`,e.jsx(i,{of:k}),`
`,e.jsx(n.p,{children:"Dette er gjort med vilje for at man skal bli klar over at man bruker feil SVG, da linjetykkelsen varierer fra størrelse til størrelse."}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"aria-hidden"})," settes automatisk til true, dersom du ikke sender med en verdi i ",e.jsx(n.code,{children:"ariaLabel"}),":"]}),`
`,e.jsx(i,{of:m}),`
`,e.jsx(n.h2,{id:"stil",children:"Stil"}),`
`,e.jsx(n.p,{children:"Vi bruker stilen «rounded». Den harmonerer godt med resten av den visuelle identiteten til SpareBank 1."}),`
`,e.jsx(n.h2,{id:"størrelser",children:"Størrelser"}),`
`,e.jsx(n.p,{children:"Velg mellom tykkelsene 300, 400 og 500."}),`
`,e.jsx(i,{of:c}),`
`,e.jsx(n.h2,{id:"tykkelser",children:"Tykkelser"}),`
`,e.jsx(i,{of:p}),`
`,e.jsx(n.h2,{id:"farger",children:"Farger"}),`
`,e.jsxs(n.p,{children:["Ikon bruker ",e.jsx(n.code,{children:"--ffe-color-foreground-emphasis"})," som standard farge."]}),`
`,e.jsx(n.p,{children:"Du kan også velge fra de andre fargene i SpareBank 1-paletten."}),`
`,e.jsx(n.h2,{id:"universell-utforming",children:"Universell utforming"}),`
`,e.jsx(n.p,{children:`Løsningene våre blir brukt med ulike typer hjelpeteknologi. For at ikonene skal fungere godt med hjelpeteknologi som for
eksempel skjermlesere er det viktig at de enten har tektsbeskrivelse, eller er tilstrekkelig skjult for hjelpeteknolgi i
de tilfellene hvor det gir den beste brukeropplevelsen.`}),`
`,e.jsxs(n.p,{children:["Når ikonet skal presenteres av hjelpeteknologi legger du inn en beskrivende ",e.jsx(n.code,{children:"aria-label"})," gjennom ",e.jsx(n.code,{children:"ariaLabel"}),"-propertyen."]}),`
`,e.jsxs(n.p,{children:["Ikonene har ARIA ",e.jsx(n.code,{children:'role="graphics-symbol img"'}),", som gjør at de presenteres som grafikksymboler. ",e.jsx(n.code,{children:'"img"'}),` gjør at ikonene leses
opp som bilder i tilfeller hvor `,e.jsx(n.code,{children:'"graphics-symbol"'})," ikke støttes."]}),`
`,e.jsxs(n.p,{children:["Når ikonet skal skjules for hjelpeteknologi lar du være å sende med ariaLabel eller setter den til ",e.jsx(n.code,{children:"{null}"}),`·
Ikonet får da `,e.jsx(n.code,{children:'aria-hidden="true"'})," og vil ikke presenteres av hjelpeteknologi."]}),`
`,e.jsx(n.p,{children:`Eksempel på tilfelle hvor ikonet skjules: Ikonet ligger i en knapp. Knappeteksten eller aria-labelet til knappen er så
beskrivende for hva knappen gjør at aria-label på ikonet blir overflødig og bidrar til unødvendig støy med skjermlesere
og annen hjelpeteknologi.`}),`
`,e.jsx(i,{of:g})]})}function C(r={}){const{wrapper:n}={...l(),...r.components};return n?e.jsx(n,{...r,children:e.jsx(o,{...r})}):o(r)}export{C as default};
