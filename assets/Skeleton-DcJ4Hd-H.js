import{j as e,M as d,C as s,a as o}from"./index-Cyle30Y4.js";import{useMDXComponents as a}from"./index-DmqVK_gK.js";import{I as m}from"./InstallImport-DXkD_31T.js";import{Standard as t}from"./Skeleton.stories-BXf_m2ZA.js";import{Standard as i}from"./SkeletonCircle.stories-CWQNsJY-.js";import{Standard as k}from"./SkeletonIconCardExample.stories-BlPLEndm.js";import"./iframe--OCoIXnN.js";import"./index-DQDNmYQF.js";import"./index-1rxX2T2W.js";import"./index-CFFhkS_s.js";import"./index-DgH-xKnr.js";import"./index-DrFu-skq.js";import"./Heading-YepvjHrD.js";import"./index-D2FocPV0.js";import"./Paragraph-7jO2Jnpx.js";import"./Skeleton-Len5f0hZ.js";import"./SkeletonCircle-BAvV3Ff2.js";const p=["@sb1/ffe-core","@sb1/ffe-skeleton"];function l(r){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",...a(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(d,{title:"Komponenter/Skeleton"}),`
`,e.jsx(n.h1,{id:"skeleton",children:"Skeleton"}),`
`,e.jsx(n.p,{children:`Skeleton kan brukes for å illustrere lastende innhold, og gi brukeren en indikasjon på at innhold er på vei, og hvor mye som kommer til å vises.
Skeleton bør kun brukes i situasjoner der innlastingstiden er lengre enn hva som oppleves som umiddelbart.`}),`
`,e.jsx(m,{packageName:"@sb1/ffe-skeleton-react",dependencies:p}),`
`,e.jsx(n.h2,{id:"universell-utforming",children:"Universell utforming"}),`
`,e.jsxs(n.p,{children:["For å sikre en bedre brukeropplevelse bør man sette ",e.jsx(n.code,{children:'aria-busy="true"'}),` på det elementet som representerer hele innholdet som lastes.
Det vil si at dersom man laster inn ett kort med flere skeleton-komponenter, bør `,e.jsx(n.code,{children:'aria-busy="true"'})," settes på kort-elementet, og ikke på hver enkelt skeleton-komponent."]}),`
`,e.jsx(n.h3,{id:"eksempel-på-bruk-i-iconcard-og-med-aria-busy",children:"Eksempel på bruk i IconCard og med aria-busy"}),`
`,e.jsx(s,{of:k}),`
`,e.jsx(n.h3,{id:"skeleton-1",children:"Skeleton"}),`
`,e.jsx(n.p,{children:`Skeleton-komponenten kan brukes til å vise lastende innhold i form av rektangler og streker.
Den kan for eksempel brukes til å illustrere lastende tekst og/eller bilder.`}),`
`,e.jsxs(n.p,{children:[`For å gi brukerne en god indikasjon på hva som kommer, bør størrelsen på Skeleton-komponenten tilpasses det innholdet som skal lastes inn.
Standardhøyden er `,e.jsx(n.code,{children:"1em"})," som tilsvarer høyden på standard brødtekst."]}),`
`,e.jsx(s,{of:t}),`
`,e.jsx(o,{of:t}),`
`,e.jsx(n.h3,{id:"skeletoncircle",children:"SkeletonCircle"}),`
`,e.jsxs(n.p,{children:[`SkeletonCircle-komponenten kan brukes til å vise lastende innhold i form av sirkler.
Den kan for eksempel brukes til å illustrere lastende illustrasjoner eller ikoner.
Komponenten finnes i de samme 4 størrelsene som `,e.jsx(n.code,{children:"ffe-icons"})," ikonene har."]}),`
`,e.jsx(s,{of:i}),`
`,e.jsx(o,{of:i})]})}function E(r={}){const{wrapper:n}={...a(),...r.components};return n?e.jsx(n,{...r,children:e.jsx(l,{...r})}):l(r)}export{E as default};
