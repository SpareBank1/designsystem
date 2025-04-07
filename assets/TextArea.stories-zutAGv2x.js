import{R as e}from"./index-DQDNmYQF.js";import{c as g}from"./index-QCImZZ3W.js";import{I as p}from"./InputGroup-BjV8g-Q_.js";import{E as f}from"./ErrorFieldMessage-eNbkZ9Td.js";const s=e.forwardRef(({className:t,...n},u)=>e.createElement("textarea",{className:g("ffe-textarea",t),ref:u,...n}));s.__docgenInfo={description:"",methods:[],displayName:"TextArea"};const E={title:"Komponenter/Form/TextArea",component:s},r={args:{},render:function(n){return e.createElement(p,{label:"Beskriv skaden"},e.createElement(s,{...n}))}},a={args:{...r.args},render:t=>e.createElement(p,{fieldMessage:e.createElement(f,null,"Feilmelding")},e.createElement(s,{...t}))};var o,d,c;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {},
  render: function Render(args) {
    return <InputGroup label="Beskriv skaden">
                <TextArea {...args} />
            </InputGroup>;
  }
}`,...(c=(d=r.parameters)==null?void 0:d.docs)==null?void 0:c.source}}};var l,m,i;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    ...Standard.args
  },
  render: args => <InputGroup fieldMessage={<ErrorFieldMessage>Feilmelding</ErrorFieldMessage>}>
            <TextArea {...args} />
        </InputGroup>
}`,...(i=(m=a.parameters)==null?void 0:m.docs)==null?void 0:i.source}}};const x=["Standard","FieldMessage"],_=Object.freeze(Object.defineProperty({__proto__:null,FieldMessage:a,Standard:r,__namedExportsOrder:x,default:E},Symbol.toStringTag,{value:"Module"}));export{a as F,r as S,_ as T};
