import{R as e}from"./index-DQDNmYQF.js";import{I as s}from"./Input-XcOPKIal.js";import{I as a}from"./InputGroup-DRKxpqN_.js";import{E as T}from"./ErrorFieldMessage-DIT7W522.js";const j={title:"Komponenter/Form/InputGroup",component:a},n={args:{label:"Navn"},render:r=>e.createElement(a,{...r},e.createElement(s,null))},t={args:{...n.args,extraMargin:!1},render:r=>e.createElement(a,{...r},e.createElement(s,null))},o={args:{...n.args,description:"Vi bruker telefonnummer for å sende deg kvittering på SMS"},render:r=>e.createElement(a,{...r},e.createElement(s,null))},p={args:{...n.args},render:r=>e.createElement(a,{...r},O=>e.createElement(e.Fragment,null,e.createElement(s,{...O}),e.createElement("div",null,"Annet innhold")))},l={args:{...n.args,fieldMessage:"Jeg er en string-fieldMessage som gir feilmelding"},render:r=>e.createElement(a,{...r},e.createElement(s,null))},g={args:{...n.args,fieldMessage:e.createElement(T,null,"Jeg er en ErrorFieldMessage-fieldMessage som gir feilmelding")},render:r=>e.createElement(a,{...r},e.createElement(s,null))},d={args:{...n.args,tooltip:"Jeg er en tooltip"},render:r=>e.createElement(a,{...r},e.createElement(s,null))};var i,u,c;n.parameters={...n.parameters,docs:{...(i=n.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    label: 'Navn'
  },
  render: args => <InputGroup {...args}>
            <Input />
        </InputGroup>
}`,...(c=(u=n.parameters)==null?void 0:u.docs)==null?void 0:c.source}}};var m,I,E;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    ...Standard.args,
    extraMargin: false
  },
  render: args => <InputGroup {...args}>
            <Input />
        </InputGroup>
}`,...(E=(I=t.parameters)==null?void 0:I.docs)==null?void 0:E.source}}};var M,f,S;o.parameters={...o.parameters,docs:{...(M=o.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    ...Standard.args,
    description: 'Vi bruker telefonnummer for å sende deg kvittering på SMS'
  },
  render: args => <InputGroup {...args}>
            <Input />
        </InputGroup>
}`,...(S=(f=o.parameters)==null?void 0:f.docs)==null?void 0:S.source}}};var G,F,v;p.parameters={...p.parameters,docs:{...(G=p.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    ...Standard.args
  },
  render: args => <InputGroup {...args}>
            {props => <>
                    <Input {...props} />
                    <div>Annet innhold</div>
                </>}
        </InputGroup>
}`,...(v=(F=p.parameters)==null?void 0:F.docs)==null?void 0:v.source}}};var b,h,x;l.parameters={...l.parameters,docs:{...(b=l.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    ...Standard.args,
    fieldMessage: 'Jeg er en string-fieldMessage som gir feilmelding'
  },
  render: args => <InputGroup {...args}>
            <Input />
        </InputGroup>
}`,...(x=(h=l.parameters)==null?void 0:h.docs)==null?void 0:x.source}}};var J,_,k;g.parameters={...g.parameters,docs:{...(J=g.parameters)==null?void 0:J.docs,source:{originalSource:`{
  args: {
    ...Standard.args,
    fieldMessage: <ErrorFieldMessage>
                Jeg er en ErrorFieldMessage-fieldMessage som gir feilmelding
            </ErrorFieldMessage>
  },
  render: args => <InputGroup {...args}>
            <Input />
        </InputGroup>
}`,...(k=(_=g.parameters)==null?void 0:_.docs)==null?void 0:k.source}}};var y,C,D;d.parameters={...d.parameters,docs:{...(y=d.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    ...Standard.args,
    tooltip: 'Jeg er en tooltip'
  },
  render: args => <InputGroup {...args}>
            <Input />
        </InputGroup>
}`,...(D=(C=d.parameters)==null?void 0:C.docs)==null?void 0:D.source}}};const A=["Standard","ExtraMarginFalse","Description","ManyChildren","FieldMessageString","FieldMessageComponent","WithTooltip"],z=Object.freeze(Object.defineProperty({__proto__:null,Description:o,ExtraMarginFalse:t,FieldMessageComponent:g,FieldMessageString:l,ManyChildren:p,Standard:n,WithTooltip:d,__namedExportsOrder:A,default:j},Symbol.toStringTag,{value:"Module"}));export{o as D,t as E,l as F,z as I,p as M,n as S,g as a};
