import{j as e,M as d,C as r,a}from"./index-C9jEw2JX.js";import{useMDXComponents as i}from"./index-DmqVK_gK.js";import{E as l,S as o,D as p}from"./ExpandButton.stories-CURWGq_g.js";import"./iframe-M8lzFKV1.js";import"./index-DQDNmYQF.js";import"./index-CV7naf_y.js";import"./index-BuA_lF3S.js";import"./index-DgH-xKnr.js";import"./index-DrFu-skq.js";import"./index-D2FocPV0.js";import"./fixedForwardRef-DqyCgkTx.js";import"./Icon-D_nm5xPy.js";import"./Collapse-BVkyKCdf.js";import"./Paragraph-7jO2Jnpx.js";function t(s){const n={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...i(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(d,{of:l}),`
`,e.jsx(n.h1,{id:"expandbutton",children:"ExpandButton"}),`
`,e.jsx(n.p,{children:"Brukes i spesifikke situasjoner der du vil ekspandere/kollapse en seksjon."}),`
`,e.jsx(n.h2,{id:"forhåndsvisning",children:"Forhåndsvisning"}),`
`,e.jsx(r,{of:o}),`
`,e.jsx(a,{of:o}),`
`,e.jsx(n.h2,{id:"forskjellige-størrelser",children:"Forskjellige størrelser"}),`
`,e.jsxs(n.p,{children:["Primary Button tilbys i tre størrelser: ",e.jsx(n.code,{children:"sm"}),", ",e.jsx(n.code,{children:"md"})," og ",e.jsx(n.code,{children:"lg"}),". Standardstørrelsen er ",e.jsx(n.code,{children:"md"}),`. Du kan endre størrelsen ved å
sette `,e.jsx(n.code,{children:"size"}),"-propen til en av disse verdiene, altså ",e.jsx(n.code,{children:'size="sm"'}),". Hvis du ikke sender inn noe, er størrelsen md."]}),`
`,e.jsx(r,{of:p}),`
`,e.jsx(n.h2,{id:"kodeeksempel",children:"Kodeeksempel"}),`
`,e.jsxs(n.p,{children:["Du kan bruke ",e.jsx(n.code,{children:"<Collapse />"})," for å få animert utvidelse og skjuling av innhold. Husk å importere stilene til collapse-komponenten for at animasjonen skal vises riktig."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{children:`import { ExpandButton } from './ExpandButton';
import { Collapse } from '@sb1/ffe-collapse-react';
//...

const [isExpanded, setExpanded] = useState(false);
const collapseId = 'expand-button-collapse';

return (
    <>
        <ExpandButton
            isExpanded={isExpanded}
            onClick={() => setExpanded(!isExpanded)}
            aria-controls={collapseId}
        >
            Vis mer
        </ExpandButton>
        <Collapse id={collapseId} isOpen={isExpanded} role="region">
            <Paragraph>
                Tekst
            </Paragraph>
        </Collapse>
    </>
);
`})})]})}function M(s={}){const{wrapper:n}={...i(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(t,{...s})}):t(s)}export{M as default};
