import{j as e,M as d,C as s,a as t}from"./index-BsznQKnB.js";import{useMDXComponents as i}from"./index-DmqVK_gK.js";import{I as a}from"./InstallImport-CMX0zQxy.js";import{M as k,S as l,D as m,C as p}from"./Modal.stories-IpUsO5GB.js";import"./iframe-BLTzOvKG.js";import"./index-DQDNmYQF.js";import"./index-1rxX2T2W.js";import"./index-CFFhkS_s.js";import"./index-DgH-xKnr.js";import"./index-DrFu-skq.js";import"./Heading-YepvjHrD.js";import"./index-D2FocPV0.js";import"./Paragraph-7jO2Jnpx.js";import"./SecondaryButton-Boh02aDD.js";import"./BaseButton-By4eKdy_.js";import"./fixedForwardRef-Dm1tRvsG.js";import"./Icon-D_nm5xPy.js";import"./ActionButton-BlMS1Zbi.js";import"./ButtonGroup-IFdd9JEN.js";const u=["@sb1/ffe-icons-react","@sb1/ffe-modals","@sb1/ffe-icons","@sb1/ffe-core"];function o(r){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(d,{of:k}),`
`,e.jsx(n.h1,{id:"modal",children:"Modal"}),`
`,e.jsx(n.p,{children:"Modalvindu brukes for å vise informasjon, bruksspesifikke funksjoner, meldinger eller bekreftelser som brukeren må respondere på før de kan fortsette å bruke nettsiden."}),`
`,e.jsx(a,{packageName:"@sb1/ffe-modals-react",dependencies:u}),`
`,e.jsx(n.h2,{id:"når-skal-komponenten-brukes",children:"Når skal komponenten brukes?"}),`
`,e.jsxs(n.p,{children:["Modalvinduer skal ",e.jsx(n.strong,{children:"IKKE"})," brukes i mobilapplikasjoner. I app anbefales det å bruke eksternt lag eller sheet der det anses som nødvendig."]}),`
`,e.jsx(n.p,{children:"Modalvinduer skal kun aktiveres av bruker ved brukers direkte interaksjon med en knapp på nettsiden, eller for å gi brukeren viktige informasjonsvarsler. Modalen vil da gi brukeren et nytt grensesnitt, men under samme kontekst som siden bruker var på ved aktivering."}),`
`,e.jsx(n.p,{children:"En modal skal alltid ha en heading nivå 2. Ikke bruk modalvinduer for funksjonelle prosesser med flere steg."}),`
`,e.jsxs(n.p,{children:["For å lukke eller åpne en modal brukes ",e.jsx(n.code,{children:"ModalHandle"}),". Innhold kan plasseres i en eller flere ",e.jsx(n.code,{children:"<ModalBlock/>"}),"."]}),`
`,e.jsx(n.h2,{id:"standard",children:"Standard"}),`
`,e.jsx(s,{of:l}),`
`,e.jsx(t,{of:l}),`
`,e.jsx(n.h2,{id:"dark-mode",children:"Dark mode"}),`
`,e.jsxs(n.p,{children:[`Modalen legger seg utenfor resten av sidens innhold og må derfor håndteres separat om man ønsker å støtte dark mode.
Legg til classen `,e.jsx(n.code,{children:"regard-color-scheme-preference"})," i ",e.jsx(n.code,{children:"className"})," på ",e.jsx(n.code,{children:"<Modal/>"})," der du ønsker at modalen skal følge brukerens fargepreferanse."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{children:`<Modal
    ariaLabelledby="modal-heading"
    className="regard-color-scheme-preference"
>
...
</Modal>
`})}),`
`,e.jsx(s,{of:m}),`
`,e.jsx(n.h2,{id:"tilpasset-bakgrunn",children:"Tilpasset bakgrunn"}),`
`,e.jsx(n.p,{children:"Her er et eksempel på en modal med en egen bakgrunnsfarge."}),`
`,e.jsx(s,{of:p}),`
`,e.jsx(n.h2,{id:"veiledning-for-bruk",children:"Veiledning for bruk"}),`
`,e.jsx(n.p,{children:"Modaler benyttes når vi ønsker å beholde brukerens navigasjonskontekst og bør aller helst bare benyttes i to hovedsituasjoner;"}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsx(n.li,{children:"Funksjonsmodal: For å tilby et lite knippe funksjoner (f.eks. filter eller datovelger) eller"}),`
`,e.jsx(n.li,{children:"Informasjonsmodal: til å gi informasjon (ren tekst, uten funksjon) som er for omfattende til å vise i en tooltip eller pop-over."}),`
`]}),`
`,e.jsx(n.p,{children:"Ikke bruk modalvinduer for funksjonelle prosesser med flere steg."}),`
`,e.jsx(n.h3,{id:"lukke-modal",children:"Lukke Modal"}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsx(n.li,{children:"Lukkefunksjon typ X-knapp"}),`
`,e.jsx(n.li,{children:"ESC-tast på tastaturet"}),`
`,e.jsx(n.li,{children:"Avbryt/lukk modal-knapp"}),`
`,e.jsx(n.li,{children:"Klikk utenfor modalvindu"}),`
`]}),`
`,e.jsx(n.p,{children:`Modaler skal alltid ha flere lukkefunksjoner. Klikk utenfor modalen skal behandles likt som klikk på ‘lukk’ (kryss eller knapp).
Ettersom modaler lett kan lukkes bør de ikke inneholde for mange funksjoner eller kritisk innhold. I slike tilfeller bør en egen
side vurderes. Funksjonelle prosesser over flere steg må aldri legges i en modal.`}),`
`,e.jsx(n.h3,{id:"informasjonsmodaler",children:"Informasjonsmodaler"}),`
`,e.jsx(n.p,{children:`Modaler med informasjon skal brukes på samme måte som tooltip eller pop-over, men i større format og med plass til mer tekst.
Teksten er oftest midtstilt, men kan også være venstrestilt i større modaler med mye tekst.
Informasjonsmodaler kan inneholde flere steg, men bør da ha knapper både for ‘Neste’ og for ‘Avbryt’.`}),`
`,e.jsx(n.h3,{id:"funksjonsmodaler",children:"Funksjonsmodaler"}),`
`,e.jsx(n.p,{children:`Modaler med funksjon må benyttes kun hvis det anses som nødvendig, og bare til enkle funksjoner som f.eks. innlogging, modusvalg,
filter eller dato/tidsvelger. Komplekse skjemaer med flere ulike typer input bør heller vises på egen side.
Knappene skal plasseres midtstilt i mindre modaler, og høyrestilt i større modaler. Knappen lengst til høyre skal være
primærknappen som aktiverer funksjonen (f.eks. «ok» eller «send inn).`}),`
`,e.jsx(n.h3,{id:"kontrollmodaler",children:"Kontrollmodaler"}),`
`,e.jsx(n.p,{children:"Modalvinduer som benyttes for å kontrollere eller varsle om handlinger/endringer. Eksempler på dette vil være:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Å kontrollere input og endringer: «er du sikker på at du vil endre telefonnummer?»"}),`
`,e.jsx(n.li,{children:"Varslinger om utlogging ved lengre perioder med inaktivitet"}),`
`]}),`
`,e.jsx(n.h2,{id:"universell-utforming",children:"Universell Utforming"}),`
`,e.jsxs(n.p,{children:["For å opprettholde dokumentstruktur med tanke på overskriftshierarki må modalvinduet benytte ",e.jsx(n.code,{children:"<h2/>"}),` som overskriftsnivå
for sin hovedoverskrift. Ikke tillat tastaturnavigasjon utenfor eller «bak» modalvinduet. Så lenge modalen er aktivert
vil tastaturnavigasjon måtte begrenses til selve modalen.`]})]})}function X(r={}){const{wrapper:n}={...i(),...r.components};return n?e.jsx(n,{...r,children:e.jsx(o,{...r})}):o(r)}export{X as default};
