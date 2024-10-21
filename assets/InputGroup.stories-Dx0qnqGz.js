import{R as e}from"./index-RYns6xqu.js";import{I as s}from"./Input-DGkZwI8Q.js";import{I as a}from"./InputGroup-BFq-_jTx.js";import{E as C}from"./ErrorFieldMessage-Cp9m5qQ-.js";const J={title:"components/form/InputGroup",component:a},n={args:{label:"Navn"},render:r=>e.createElement(a,{...r},e.createElement(s,null))},t={args:{...n.args,extraMargin:!1},render:r=>e.createElement(a,{...r},e.createElement(s,null))},o={args:{...n.args,description:"Vi bruker telefonnummer for å sende deg kvittering på SMS"},render:r=>e.createElement(a,{...r},e.createElement(s,null))},g={args:{...n.args},render:r=>e.createElement(a,{...r},y=>e.createElement(e.Fragment,null,e.createElement(s,{...y}),e.createElement("div",null,"Annet innehold")))},d={args:{...n.args,fieldMessage:"Jeg er en string-fieldMessage som gir feilmelding"},render:r=>e.createElement(a,{...r},e.createElement(s,null))},l={args:{...n.args,fieldMessage:e.createElement(C,null,"Jeg er en ErrorFieldMessage-fieldMessage som gir feilmelding")},render:r=>e.createElement(a,{...r},e.createElement(s,null))};var p,i,u;n.parameters={...n.parameters,docs:{...(p=n.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    label: 'Navn'
  },
  render: args => <InputGroup {...args}>
            <Input />
        </InputGroup>
}`,...(u=(i=n.parameters)==null?void 0:i.docs)==null?void 0:u.source}}};var c,m,M;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    ...Standard.args,
    extraMargin: false
  },
  render: args => <InputGroup {...args}>
            <Input />
        </InputGroup>
}`,...(M=(m=t.parameters)==null?void 0:m.docs)==null?void 0:M.source}}};var f,E,I;o.parameters={...o.parameters,docs:{...(f=o.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    ...Standard.args,
    description: 'Vi bruker telefonnummer for å sende deg kvittering på SMS'
  },
  render: args => <InputGroup {...args}>
            <Input />
        </InputGroup>
}`,...(I=(E=o.parameters)==null?void 0:E.docs)==null?void 0:I.source}}};var S,G,F;g.parameters={...g.parameters,docs:{...(S=g.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    ...Standard.args
  },
  render: args => <InputGroup {...args}>
            {props => <>
                    <Input {...props} />
                    <div>Annet innehold</div>
                </>}
        </InputGroup>
}`,...(F=(G=g.parameters)==null?void 0:G.docs)==null?void 0:F.source}}};var v,b,x;d.parameters={...d.parameters,docs:{...(v=d.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    ...Standard.args,
    fieldMessage: 'Jeg er en string-fieldMessage som gir feilmelding'
  },
  render: args => <InputGroup {...args}>
            <Input />
        </InputGroup>
}`,...(x=(b=d.parameters)==null?void 0:b.docs)==null?void 0:x.source}}};var _,h,k;l.parameters={...l.parameters,docs:{...(_=l.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    ...Standard.args,
    fieldMessage: <ErrorFieldMessage>
                Jeg er en ErrorFieldMessage-fieldMessage som gir feilmelding
            </ErrorFieldMessage>
  },
  render: args => <InputGroup {...args}>
            <Input />
        </InputGroup>
}`,...(k=(h=l.parameters)==null?void 0:h.docs)==null?void 0:k.source}}};const D=["Standard","ExtraMarginFalse","Description","ManyChildren","FieldMessageString","FieldMessageComponent"],R=Object.freeze(Object.defineProperty({__proto__:null,Description:o,ExtraMarginFalse:t,FieldMessageComponent:l,FieldMessageString:d,ManyChildren:g,Standard:n,__namedExportsOrder:D,default:J},Symbol.toStringTag,{value:"Module"}));export{o as D,t as E,d as F,R as I,g as M,n as S,l as a};
