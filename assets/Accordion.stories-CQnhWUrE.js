import{R as e}from"./index-ne9I_3bB.js";import{A as c,a as t}from"./AccordionItem-CULETVil.js";const i={title:"Komponenter/Accordion/Accordion",component:c},n={args:{headingLevel:2},render:d=>e.createElement(c,{...d},e.createElement(t,{heading:"Tittel"},"Skjult innhold"),e.createElement(t,{heading:e.createElement("span",null,"Enda en tittel")},"Mer skjult innhold"),e.createElement(t,{heading:"En siste tittel"},"Enda mer innhold"))};var o,r,a;n.parameters={...n.parameters,docs:{...(o=n.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(a=(r=n.parameters)==null?void 0:r.docs)==null?void 0:a.source}}};const l=["Standard"],g=Object.freeze(Object.defineProperty({__proto__:null,Standard:n,__namedExportsOrder:l,default:i},Symbol.toStringTag,{value:"Module"}));export{g as A,n as S};
