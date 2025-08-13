import{R as a}from"./index-DQDNmYQF.js";import{I as t}from"./Input-XcOPKIal.js";import{I as m}from"./InputGroup-BBDrD5qR.js";import{E as g}from"./ErrorFieldMessage-DIT7W522.js";const c={title:"Komponenter/Form/Input",component:t},e={args:{inline:!1,textRightAlign:!1},render:n=>a.createElement(m,{label:"Navn"},a.createElement(t,{...n}))},r={args:{...e.args},render:n=>a.createElement(m,{fieldMessage:a.createElement(g,null,"Feilmelding")},a.createElement(t,{...n}))};var s,o,l;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    inline: false,
    textRightAlign: false
  },
  render: args => <InputGroup label="Navn">
            <Input {...args} />
        </InputGroup>
}`,...(l=(o=e.parameters)==null?void 0:o.docs)==null?void 0:l.source}}};var p,i,d;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    ...Standard.args
  },
  render: args => <InputGroup fieldMessage={<ErrorFieldMessage>Feilmelding</ErrorFieldMessage>}>
            <Input {...args} />
        </InputGroup>
}`,...(d=(i=r.parameters)==null?void 0:i.docs)==null?void 0:d.source}}};const u=["Standard","FieldMessage"],S=Object.freeze(Object.defineProperty({__proto__:null,FieldMessage:r,Standard:e,__namedExportsOrder:u,default:c},Symbol.toStringTag,{value:"Module"}));export{r as F,S as I,e as S};
