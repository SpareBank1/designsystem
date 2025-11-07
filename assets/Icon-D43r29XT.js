import{j as e,M as t,C as i,a as d}from"./index-B18GPKYI.js";import{useMDXComponents as l}from"./index-DmqVK_gK.js";import{I as a,S as s,a as c,W as k,U as m}from"./Icon.stories-CSyxe8Dh.js";import{I as p}from"./InstallImport-fdi28Bc8.js";import"./iframe-C1rhN_4y.js";import"./index-DQDNmYQF.js";import"./index-CV7naf_y.js";import"./index-BuA_lF3S.js";import"./index-DgH-xKnr.js";import"./index-DrFu-skq.js";import"./index-D2FocPV0.js";import"./Heading-YepvjHrD.js";import"./Paragraph-7jO2Jnpx.js";const h=""+new URL("bytte-ikon-0--Bbvjd.png",import.meta.url).href,g=""+new URL("velger-tekststil-Cnzr0Gvc.png",import.meta.url).href,j=["@sb1/ffe-icons"];function o(r){const n={a:"a",br:"br",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",...l(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(t,{of:a}),`
`,e.jsx(n.h1,{id:"icon",children:"Icon"}),`
`,e.jsx(n.p,{children:"Ikoner skal gjøre det enkelt for kunden å navigere i de digitale flatene våre. Ikonene representerer funksjoner, verktøy eller handlinger og visualiserer funksjonalitet."}),`
`,e.jsxs(n.p,{children:["Ikonene vi bruker kommer fra ikonbiblioteket Material Symbols. ",e.jsx(n.a,{href:"https://design.sparebank1.no/profil/ikoner/",rel:"nofollow",children:"Les mer om ikonene"})," under profil."]}),`
`,e.jsx(p,{packageName:"@sb1/ffe-icons-react",dependencies:j}),`
`,e.jsx(n.h2,{id:"kode",children:"Kode"}),`
`,e.jsx(n.p,{children:"For å bruke et ikon i kode må du gjøre 3 ting:"}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:["Importere styling ",e.jsx(n.code,{children:"@import '@sb1/ffe-icons/less/ffe-icons';"})]}),`
`,e.jsxs(n.li,{children:["Importere ikonet ",e.jsx(n.code,{children:"import closeIcon from '@sb1/ffe-icons/icons/open/300/md/close.svg';"})]}),`
`,e.jsxs(n.li,{children:["Importere React-komponenten som skal holde ikonet ",e.jsx(n.code,{children:"import { Icon } from '@sb1/ffe-icons-react';"})]}),`
`]}),`
`,e.jsx(n.p,{children:"Sammen ser det slik ut:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{children:`import { Icon } from '@sb1/ffe-icons-react';
import closeIcon from '@sb1/ffe-icons/icons/open/300/md/close.svg'; //{open eller filled} / {vekt} / {størrelse} / {navn}
//@import '@sb1/ffe-icons/less/ffe-icons'; //I en css-fil 
.....
<Icon fileUrl={closeIcon} size="md" ariaLabel="lukk" />
`})}),`
`,e.jsxs(n.p,{children:["Det er viktig at du setter en ",e.jsx(n.code,{children:"size"}),"-prop som stemmer overens med SVG-størrelsen, slik at ikonet vises riktig."]}),`
`,e.jsxs(n.p,{children:['For å finne navnet på ikonet ("close" fra eksempelet) kan du enten finne ikonet via ',e.jsx(n.a,{href:"https://fonts.google.com/icons",rel:"nofollow",children:"Google Symbols"}),` eller se på navnet som er brukt på
ikonet i Figma, hvis du jobber ut i fra Figma-skisser.`,e.jsx("br",{})]}),`
`,e.jsxs(n.p,{children:["I ",e.jsx(n.code,{children:"ffe-icons"}),` finner du alle varianter av ikonene som SVG-filer.
`,e.jsx(n.code,{children:"Icon"}),"-komponenten tar inn en filbane eller ",e.jsx(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/Data_URLs",rel:"nofollow",children:"data-URL"}),`, og setter SVG-ikonet som en mask.
Det gjør at ikonet kan arve color-verdien fra et parent-element. Dersom du ønsker å legge inn ikoner som data-URL må man selv konvertere
ikonene til et passende format, for eksempel `,e.jsx(n.a,{href:"https://developer.mozilla.org/en-US/docs/Glossary/Base64",rel:"nofollow",children:"base64"}),"."]}),`
`,e.jsx(n.h3,{id:"ikonet-vises-ikke",children:"Ikonet vises ikke?"}),`
`,e.jsx(n.p,{children:`Hvis ikonet ikke vises, men i stedet blir en firkantet boks etter deploy, kan det skyldes at SVG-filen ikke blir
riktig håndtert av byggeverktøyet. To mulige løsninger er:`}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:["Legg til ",e.jsx(n.code,{children:"build.assetsInlineLimit: 0"})," i ",e.jsx(n.code,{children:"vite.config.ts"})," for å sikre at SVG-ikonene ikke blir inlinet som data-URL-er.",e.jsx(n.br,{}),`
`,"Merk at dette vil stoppe alt av assetinlining som Vite kan gjøre under bygg."]}),`
`,e.jsxs(n.li,{children:["Eller, legg til ",e.jsx(n.code,{children:"?no-inline"})," på slutten av importsti for hvert ikon du importerer, eksempelvis vil import se slik ut:"]}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{children:`import stacksIcon from "@sb1/ffe-icons/icons/open/500/sm/stacks.svg?no-inline"
`})}),`
`,e.jsx(n.h2,{id:"figma",children:"Figma"}),`
`,e.jsx(n.p,{children:"Når du bruker komponenter fra designsystem-biblioteket i Figma ligger ikonene tilgjengelig som en del av komponentene."}),`
`,e.jsxs(n.p,{children:[`For å bytte ikon klikker du deg bare inn på ikonet og skriver navnet på ikonet du vil ha. Du får oversikt over alle ikonene og navnene med plugin «Material Symbols»
i Figma eller på `,e.jsx(n.a,{href:"https://fonts.google.com/icons?icon.style=Rounded",rel:"nofollow",children:"https://fonts.google.com/icons?icon.style=Rounded"}),"."]}),`
`,e.jsx("img",{src:h,alt:"Hvordan man bytter ikon i Figma"}),`
`,e.jsx(n.p,{children:"Når du trenger et ikon utenfor komponentene lager du et nytt tekstelement, skriver navnet på ikonet, og velger en av tekststilene for ikoner under Text Styles."}),`
`,e.jsx("img",{src:g,alt:"Hvordan man velger tekststil for ikoner"}),`
`,e.jsx(n.h2,{id:"forhåndsvisning",children:"Forhåndsvisning"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"aria-hidden"})," settes automatisk til true, dersom du ikke sender med en verdi i ",e.jsx(n.code,{children:"ariaLabel"}),"."]}),`
`,e.jsx(i,{of:s}),`
`,e.jsx(d,{of:s}),`
`,e.jsx(n.h2,{id:"stil",children:"Stil"}),`
`,e.jsx(n.p,{children:"Vi bruker stilen «rounded». Den harmonerer godt med resten av den visuelle identiteten til SpareBank 1."}),`
`,e.jsx(n.h2,{id:"størrelser",children:"Størrelser"}),`
`,e.jsxs(n.p,{children:["Velg mellom størrelsene ",e.jsx(n.code,{children:"sm"}),", ",e.jsx(n.code,{children:"md"}),", ",e.jsx(n.code,{children:"lg"})," og ",e.jsx(n.code,{children:"xl"}),"."]}),`
`,e.jsx(i,{of:c}),`
`,e.jsx(n.h2,{id:"tykkelser",children:"Tykkelser"}),`
`,e.jsx(n.p,{children:"Velg mellom tykkelsene 300, 400 og 500. 300 er mest vanlig."}),`
`,e.jsx(i,{of:k}),`
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
`,e.jsx(i,{of:m})]})}function M(r={}){const{wrapper:n}={...l(),...r.components};return n?e.jsx(n,{...r,children:e.jsx(o,{...r})}):o(r)}export{M as default};
