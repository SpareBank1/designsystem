import{R as e}from"./index-DQDNmYQF.js";import{A as a,a as n}from"./AccordionItem-CKrH22AY.js";const g={title:"Komponenter/Accordion",component:a},r={args:{headingLevel:2},parameters:{docs:{description:{story:"Dette eksempelet viser "}}},render:o=>e.createElement("div",{style:{backgroundColor:"var(--ffe-color-background-subtle)",padding:"var(--ffe-spacing-md)",borderRadius:"8px",border:"1px dashed var(--ffe-color-border-primary-subtle)"}},e.createElement(a,{...o},e.createElement(n,{heading:"Accordion med subtil bakgrunn"},"Denne accordionen vises på en subtil bakgrunn"),e.createElement(n,{heading:"Mer informasjon"},"Accordion-innholdet har standard bakgrunnsfarge"),e.createElement(n,{heading:"Ytterligere detaljer"},"Legg merke til kontrasten mellom den subtile container-bakgrunnen og standardbakgrunnen til det utvidede innholdet")))},t={args:{headingLevel:2},render:o=>e.createElement(a,{...o},e.createElement(n,{heading:"Tittel"},"Skjult innhold"),e.createElement(n,{heading:e.createElement("span",null,"Enda en tittel")},"Mer skjult innhold"),e.createElement(n,{heading:"En siste tittel"},"Enda mer innhold"))};var d,i,c;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    headingLevel: 2
  },
  parameters: {
    docs: {
      description: {
        story: 'Dette eksempelet viser '
      }
    }
  },
  render: args => <div style={{
    backgroundColor: 'var(--ffe-color-background-subtle)',
    padding: 'var(--ffe-spacing-md)',
    borderRadius: '8px',
    border: '1px dashed var(--ffe-color-border-primary-subtle)'
  }}>
            <Accordion {...args}>
                <AccordionItem heading="Accordion med subtil bakgrunn">
                    Denne accordionen vises på en subtil bakgrunn
                </AccordionItem>
                <AccordionItem heading="Mer informasjon">
                    Accordion-innholdet har standard bakgrunnsfarge
                </AccordionItem>
                <AccordionItem heading="Ytterligere detaljer">
                    Legg merke til kontrasten mellom den subtile
                    container-bakgrunnen og standardbakgrunnen til det utvidede
                    innholdet
                </AccordionItem>
            </Accordion>
        </div>
}`,...(c=(i=r.parameters)==null?void 0:i.docs)==null?void 0:c.source}}};var s,l,m;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    headingLevel: 2
  },
  render: args => <Accordion {...args}>
            <AccordionItem heading="Tittel">Skjult innhold</AccordionItem>
            <AccordionItem heading={<span>Enda en tittel</span>}>
                Mer skjult innhold
            </AccordionItem>
            <AccordionItem heading="En siste tittel">
                Enda mer innhold
            </AccordionItem>
        </Accordion>
}`,...(m=(l=t.parameters)==null?void 0:l.docs)==null?void 0:m.source}}};const u=["WithSubtleBackground","Standard"],h=Object.freeze(Object.defineProperty({__proto__:null,Standard:t,WithSubtleBackground:r,__namedExportsOrder:u,default:g},Symbol.toStringTag,{value:"Module"}));export{h as A,t as S,r as W};
