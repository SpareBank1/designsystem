import{R as e}from"./index-DQDNmYQF.js";import{A as t,a as r}from"./AccordionItem-COGYfHED.js";const v={title:"Komponenter/Accordion",component:t},a={args:{headingLevel:2},parameters:{docs:{description:{story:"Dette eksempelet viser "}}},render:n=>e.createElement("div",{style:{backgroundColor:"var(--ffe-color-background-subtle)",padding:"var(--ffe-spacing-md)",borderRadius:"8px",border:"1px dashed var(--ffe-color-border-primary-subtle)"}},e.createElement(t,{...n},e.createElement(r,{heading:"Accordion med subtil bakgrunn"},"Denne accordionen vises på en subtil bakgrunn"),e.createElement(r,{heading:"Mer informasjon"},"Accordion-innholdet har standard bakgrunnsfarge"),e.createElement(r,{heading:"Ytterligere detaljer"},"Legg merke til kontrasten mellom den subtile container-bakgrunnen og standardbakgrunnen til det utvidede innholdet")))},o={args:{headingLevel:2},render:n=>e.createElement(t,{...n},e.createElement(r,{heading:"Tittel"},"Skjult innhold"),e.createElement(r,{heading:e.createElement("span",null,"Enda en tittel")},"Mer skjult innhold"),e.createElement(r,{heading:"En siste tittel"},"Enda mer innhold"))},d={args:{headingLevel:2},render:n=>e.createElement(t,{...n},e.createElement(r,{heading:"Mer informasjon",noPadding:!0},e.createElement("div",null,e.createElement("div",{style:{borderTop:"1px solid var(--ffe-color-border-primary-subtle)",padding:"var(--ffe-spacing-xs) var(--ffe-spacing-sm)"}},"Her er en liste med noe greier"),e.createElement("div",{style:{borderTop:"1px solid var(--ffe-color-border-primary-subtle)",padding:"var(--ffe-spacing-xs) var(--ffe-spacing-sm)"}},"Dette er elementer som skal visuelt skille seg fra hverandre"),e.createElement("div",{style:{borderTop:"1px solid var(--ffe-color-border-primary-subtle)",padding:"var(--ffe-spacing-xs) var(--ffe-spacing-sm)"}},"Dette er et eksempel"))))};var i,s,c;a.parameters={...a.parameters,docs:{...(i=a.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(c=(s=a.parameters)==null?void 0:s.docs)==null?void 0:c.source}}};var l,m,g;o.parameters={...o.parameters,docs:{...(l=o.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
}`,...(g=(m=o.parameters)==null?void 0:m.docs)==null?void 0:g.source}}};var p,f,u;d.parameters={...d.parameters,docs:{...(p=d.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    headingLevel: 2
  },
  render: args => <Accordion {...args}>
            <AccordionItem heading="Mer informasjon" noPadding>
                <div>
                    <div style={{
          borderTop: '1px solid var(--ffe-color-border-primary-subtle)',
          padding: 'var(--ffe-spacing-xs) var(--ffe-spacing-sm)'
        }}>
                        Her er en liste med noe greier
                    </div>
                    <div style={{
          borderTop: '1px solid var(--ffe-color-border-primary-subtle)',
          padding: 'var(--ffe-spacing-xs) var(--ffe-spacing-sm)'
        }}>
                        Dette er elementer som skal visuelt skille seg fra hverandre
                    </div>
                    <div style={{
          borderTop: '1px solid var(--ffe-color-border-primary-subtle)',
          padding: 'var(--ffe-spacing-xs) var(--ffe-spacing-sm)'
        }}>
                        Dette er et eksempel
                    </div>
                </div>
            </AccordionItem>
        </Accordion>
}`,...(u=(f=d.parameters)==null?void 0:f.docs)==null?void 0:u.source}}};const b=["WithSubtleBackground","Standard","noBodyPadding"],A=Object.freeze(Object.defineProperty({__proto__:null,Standard:o,WithSubtleBackground:a,__namedExportsOrder:b,default:v,noBodyPadding:d},Symbol.toStringTag,{value:"Module"}));export{A,o as S,a as W};
