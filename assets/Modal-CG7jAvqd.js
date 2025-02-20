import{j as e,M as t,C as s,a as d}from"./index-D4UobaES.js";import{useMDXComponents as i}from"./index-CVdx34fM.js";import{M as a,S as l,C as k}from"./Modal.stories-CHjjcCwL.js";import"./iframe-C4f3kgU_.js";import"./index-eCxJ45ll.js";import"./index-SF9__3rG.js";import"./index-irJGEjIJ.js";import"./index-Cu4lwwaE.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";import"./index-DezCrw0f.js";import"./Icon-B88nEPeu.js";import"./ActionButton-Dg03nuh2.js";import"./BaseButton-CEf8UDzm.js";import"./fixedForwardRef-BdaB0qYT.js";import"./Heading-BYFfwx2T.js";import"./Paragraph-Qjq98ToE.js";import"./ButtonGroup-C8Gx9PgT.js";import"./SecondaryButton-aa3aHmpA.js";function o(r){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...i(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(t,{of:a}),`
`,e.jsx(n.h1,{id:"modal",children:"Modal"}),`
`,e.jsx(n.p,{children:"Modalvindu brukes for å vise informasjon, bruksspesifikke funksjoner, meldinger eller bekreftelser som brukeren må respondere på før de kan fortsette å bruke nettsiden."}),`
`,e.jsx(n.h2,{id:"når-skal-komponenten-brukes",children:"Når skal komponenten brukes?"}),`
`,e.jsxs(n.p,{children:["Modalvinduer skal ",e.jsx(n.strong,{children:"IKKE"})," brukes i mobilapplikasjoner. I app anbefales det å bruke eksternt lag eller sheet der det anses som nødvendig."]}),`
`,e.jsx(n.p,{children:"Modalvinduer skal kun aktiveres av bruker ved brukers direkte interaksjon med en knapp på nettsiden, eller for å gi brukeren viktige informasjonsvarsler. Modalen vil da gi brukeren et nytt grensesnitt, men under samme kontekst som siden bruker var på ved aktivering."}),`
`,e.jsx(n.p,{children:"En modal skal alltid ha en heading nivå 2. Ikke bruk modalvinduer for funksjonelle prosesser med flere steg."}),`
`,e.jsxs(n.p,{children:["For å lukke eller åpne en modal brukes ",e.jsx(n.code,{children:"ModalHandle"}),". Innhold kan plasseres i en eller flere ",e.jsx(n.code,{children:"<ModalBlock/>"}),"."]}),`
`,e.jsx(n.h2,{id:"standard",children:"Standard"}),`
`,e.jsx(s,{of:l}),`
`,e.jsx(d,{of:l}),`
`,e.jsx(n.h2,{id:"tilpasset-bakgrunn",children:"Tilpasset bakgrunn"}),`
`,e.jsx(s,{of:k}),`
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
