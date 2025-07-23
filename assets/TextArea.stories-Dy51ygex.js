import{R as e}from"./index-DQDNmYQF.js";import{c as x}from"./index-QCImZZ3W.js";import{I as d}from"./InputGroup-0tyP-SwI.js";import{E as S}from"./ErrorFieldMessage-eNbkZ9Td.js";const n=e.forwardRef(({className:a,...o},k)=>e.createElement("textarea",{className:x("ffe-textarea","ffe-default-mode",a),ref:k,...o}));n.__docgenInfo={description:"",methods:[],displayName:"TextArea"};const v={title:"Komponenter/Form/TextArea",component:n},r={args:{},render:function(o){return e.createElement(d,{label:"Beskriv skaden"},e.createElement(n,{...o}))}},s={args:{...r.args},render:a=>e.createElement(d,{fieldMessage:e.createElement(S,null,"Feilmelding")},e.createElement(n,{...a}))},t={args:{...r.args},render:a=>e.createElement(d,{label:"Beskriv skaden",description:"Prøv å være så konkret som mulig"},e.createElement(n,{...a}))};var c,i,l;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {},
  render: function Render(args) {
    return <InputGroup label="Beskriv skaden">
                <TextArea {...args} />
            </InputGroup>;
  }
}`,...(l=(i=r.parameters)==null?void 0:i.docs)==null?void 0:l.source}}};var m,p,u;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    ...Standard.args
  },
  render: args => <InputGroup fieldMessage={<ErrorFieldMessage>Feilmelding</ErrorFieldMessage>}>
            <TextArea {...args} />
        </InputGroup>
}`,...(u=(p=s.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};var g,f,E;t.parameters={...t.parameters,docs:{...(g=t.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    ...Standard.args
  },
  render: args => <InputGroup label={'Beskriv skaden'} description='Prøv å være så konkret som mulig'>
            <TextArea {...args} />
        </InputGroup>
}`,...(E=(f=t.parameters)==null?void 0:f.docs)==null?void 0:E.source}}};const F=["Standard","FieldMessage","WithDescription"],b=Object.freeze(Object.defineProperty({__proto__:null,FieldMessage:s,Standard:r,WithDescription:t,__namedExportsOrder:F,default:v},Symbol.toStringTag,{value:"Module"}));export{s as F,r as S,b as T,t as W};
