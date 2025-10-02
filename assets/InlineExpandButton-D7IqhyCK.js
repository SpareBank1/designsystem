import{j as n,M as r,C as i,a as d}from"./index-CEBi53RC.js";import{useMDXComponents as a}from"./index-DmqVK_gK.js";import{I as p,S as t}from"./InlineExpandButton.stories-BePY_RTb.js";import"./iframe-DiwqVHKV.js";import"./index-DQDNmYQF.js";import"./index-CV7naf_y.js";import"./index-BuA_lF3S.js";import"./index-DgH-xKnr.js";import"./index-DrFu-skq.js";import"./InlineBaseButton-CBnMDeqF.js";import"./fixedForwardRef-DqyCgkTx.js";import"./index-D2FocPV0.js";import"./Icon-D_nm5xPy.js";import"./Paragraph-7jO2Jnpx.js";import"./Collapse-BVkyKCdf.js";function s(o){const e={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...a(),...o.components};return n.jsxs(n.Fragment,{children:[n.jsx(r,{of:p}),`
`,n.jsx(e.h1,{id:"inlineexpandbutton",children:"InlineExpandButton"}),`
`,n.jsx(e.p,{children:"Samme som ExpandButton, bortsett fra at denne brukes når du vil ekspandere/kollapse en seksjon fra en linje med tekst."}),`
`,n.jsx(e.h2,{id:"forhåndsvisning",children:"Forhåndsvisning"}),`
`,n.jsx(i,{of:t}),`
`,n.jsx(d,{of:t}),`
`,n.jsx(e.h2,{id:"kodeeksempel",children:"Kodeeksempel"}),`
`,n.jsxs(e.p,{children:["Du kan bruke ",n.jsx(e.code,{children:"<Collapse />"})," for å få animert utvidelse og skjuling av innhold. Husk å importere stilene til collapse-komponenten for at animasjonen skal vises riktig."]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{children:`import { InlineExpandButton } from './InlineExpandButton';
import { Collapse } from '@sb1/ffe-collapse-react';
//...

const collapseId = useId();
const [isExpanded, setExpanded] = useState(false);

return (
    <>
        <Paragraph>
            Jeg samtykker til å ha det gøy
            <InlineExpandButton
                aria-controls={collapseId}
                aria-expanded={isExpanded}
                isExpanded={isExpanded}
                onClick={() => setExpanded(!isExpanded)}
            >
                {isExpanded ? 'Vis mindre' : 'Vis mer'}
            </InlineExpandButton>
        </Paragraph>

        <Collapse id={collapseId} isOpen={isExpanded} role="region">
            <div>
                <Paragraph>
                    Tekst
                </Paragraph>
            </div>
        </Collapse>
    </>
);
`})})]})}function M(o={}){const{wrapper:e}={...a(),...o.components};return e?n.jsx(e,{...o,children:n.jsx(s,{...o})}):s(o)}export{M as default};
