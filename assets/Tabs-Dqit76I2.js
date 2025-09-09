import{j as e,C as o,a as d,M as c}from"./index-C9jEw2JX.js";import{useMDXComponents as l}from"./index-DmqVK_gK.js";import{I as p}from"./InstallImport-BARy4zpl.js";import{Standard as i,WithContent as h,NoBreak as m}from"./TabGroup.stories-BrMSLQuf.js";import{C as t,a as s}from"./CheckListItem-IvnrmxDR.js";import"./iframe-M8lzFKV1.js";import"./index-DQDNmYQF.js";import"./index-CV7naf_y.js";import"./index-BuA_lF3S.js";import"./index-DgH-xKnr.js";import"./index-DrFu-skq.js";import"./Heading-YepvjHrD.js";import"./index-D2FocPV0.js";import"./Paragraph-7jO2Jnpx.js";import"./Icon-D_nm5xPy.js";const k=["@sb1/ffe-tabs","@sb1/ffe-core"];function a(r){const n={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...l(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h1,{id:"tabs",children:"Tabs"}),`
`,e.jsx(n.p,{children:"Faner kan være nyttige for å dele opp innholdet på siden i logiske «blokker» og forenkle navigasjonen for brukerne."}),`
`,e.jsx(n.h2,{id:"gjør-sånn",children:"Gjør sånn:"}),`
`,e.jsxs(t,{children:[e.jsx(s,{isCross:!1,children:e.jsx(n.p,{children:"Bruk faner når brukerne skal bytte mellom ulike views i samme kontekst"})}),e.jsx(s,{isCross:!1,children:e.jsx(n.p,{children:"Skriv korte og enkle fanenavn, helst ett til to ord"})}),e.jsx(s,{isCross:!1,children:e.jsx(n.p,{children:"Plasser alltid rekken med faner øverst i toppen av innholdet"})})]}),`
`,e.jsx(n.h2,{id:"ikke-sånn",children:"Ikke sånn:"}),`
`,e.jsx(t,{children:e.jsx(s,{isCross:!0,children:e.jsx(n.p,{children:`Gå for faner når brukerne trenger å se innhold fra flere av fanene
samtidig, eller sammenligne innholdet`})})}),`
`,e.jsx(p,{packageName:"@sb1/ffe-tabs-react",dependencies:k}),`
`,e.jsx(n.h2,{id:"tab-og-tabgroup",children:"Tab og TabGroup"}),`
`,e.jsxs(n.p,{children:["For å implementere faner i løsningen bruker du komponentene ",e.jsx(n.code,{children:"Tab"})," og ",e.jsx(n.code,{children:"TabGroup"}),`. Dette er knapper med fane-funksjonalitet, som grupperer innholdet slik
at én gruppe er synlig og resten skjult.`]}),`
`,e.jsxs(n.p,{children:["Faner skal alltid grupperes i en ",e.jsx(n.code,{children:"TabGroup"}),", og aktiv/valgt fane utheves ved å sende inn ",e.jsx(n.code,{children:"selected"}),"."]}),`
`,e.jsx(o,{of:i}),`
`,e.jsx(d,{of:i}),`
`,e.jsx(n.p,{children:"Under ser du et eksempel hvor innhold er knyttet til hver fane."}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"aria-controls"})," tilsvarer id på elementet som fanen kontrollerer, og er en obligatorisk property som må sendes med i ",e.jsx(n.code,{children:"Tab"}),"."]}),`
`,e.jsx(o,{of:h}),`
`,e.jsx(n.h2,{id:"nobreak",children:"noBreak"}),`
`,e.jsxs(n.p,{children:["Dersom du ønsker å sikre at fanene ikke brekker over flere linjer kan ",e.jsx(n.code,{children:"noBreak"}),"-propen sendes med til ",e.jsx(n.code,{children:"TabGroup"}),`.
Dette kan være nyttig i tilfeller der man har plass til alt på en linje, selv på mobil.`]}),`
`,e.jsx(o,{of:m}),`
`,e.jsx(c,{title:"Komponenter/Tabs"}),`
`,e.jsx(n.h2,{id:"kodeeksempel",children:"Kodeeksempel"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{children:`import { TabGroup } from './TabGroup';
import { Tab } from './Tab';
//...

const loan = { house: 'house', car: 'car' };
const [activeTabId, setActiveTabId] = useState(loan.house);

return (
    <>
        <TabGroup>
            <Tab
                selected={activeTabId === loan.house}
                onClick={() => setActiveTabId(loan.house)}
                aria-controls={loan.house}
            >
                Huslån
            </Tab>

            <Tab
                selected={activeTabId === loan.car}
                onClick={() => setActiveTabId(loan.car)}
                aria-controls={loan.car}
            >
                Billån
            </Tab>
        </TabGroup>
        {activeTabId === loan.house && (
            <div>
                Huslån
            </div>
        )}
        {activeTabId === loan.car && (
            <div>
                Billån
            </div>
        )}
    </>
);
`})})]})}function F(r={}){const{wrapper:n}={...l(),...r.components};return n?e.jsx(n,{...r,children:e.jsx(a,{...r})}):a(r)}export{F as default};
