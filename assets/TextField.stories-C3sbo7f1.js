import{R as e}from"./index-DQDNmYQF.js";import{c as d}from"./index-D2FocPV0.js";import{I as n}from"./InputGroup-DRKxpqN_.js";import{E as b}from"./ErrorFieldMessage-DIT7W522.js";const i=e.forwardRef(({className:r,inline:_,textRightAlign:h,prefix:l,suffix:o,...T},S)=>e.createElement("div",{className:d("ffe-text-field__wrapper","ffe-default-mode",{"ffe-text-field__wrapper--inline":_},r)},l&&e.createElement("div",{className:"ffe-text-field__prefix"},l),e.createElement("input",{className:d("ffe-text-field","ffe-default-mode",{"ffe-text-field--text-right-align":h}),ref:S,...T}),o&&e.createElement("div",{className:"ffe-text-field__suffix"},o)));i.__docgenInfo={description:"",methods:[],displayName:"TextField",props:{inline:{required:!1,tsType:{name:"boolean"},description:"Text fields default to `display: block;`. Set this to `true` to apply the inline modifier."},textRightAlign:{required:!1,tsType:{name:"boolean"},description:"Make the text right aligned"},prefix:{required:!1,tsType:{name:"string"},description:"Add a prefix inside the input"},suffix:{required:!1,tsType:{name:"string"},description:"Add a suffix inside the input"}}};const N={title:"Komponenter/Form/TextField",component:i},t={args:{inline:!1,textRightAlign:!1},render:r=>e.createElement(n,{label:"Navn"},e.createElement(i,{...r}))},a={args:{inline:!1,textRightAlign:!1,prefix:"Prefix",suffix:"Suffix"},render:r=>e.createElement(n,{label:"Navn"},e.createElement(i,{...r}))},s={args:{...t.args},render:r=>e.createElement(n,{fieldMessage:e.createElement(b,null,"Feilmelding")},e.createElement(i,{...r}))};var f,p,c;t.parameters={...t.parameters,docs:{...(f=t.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    inline: false,
    textRightAlign: false
  },
  render: args => <InputGroup label="Navn">
            <TextField {...args} />
        </InputGroup>
}`,...(c=(p=t.parameters)==null?void 0:p.docs)==null?void 0:c.source}}};var m,u,g;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    inline: false,
    textRightAlign: false,
    prefix: 'Prefix',
    suffix: 'Suffix'
  },
  render: args => <InputGroup label="Navn">
            <TextField {...args} />
        </InputGroup>
}`,...(g=(u=a.parameters)==null?void 0:u.docs)==null?void 0:g.source}}};var x,E,F;s.parameters={...s.parameters,docs:{...(x=s.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    ...Standard.args
  },
  render: args => <InputGroup fieldMessage={<ErrorFieldMessage>Feilmelding</ErrorFieldMessage>}>
            <TextField {...args} />
        </InputGroup>
}`,...(F=(E=s.parameters)==null?void 0:E.docs)==null?void 0:F.source}}};const y=["Standard","WithAffixes","FieldMessage"],R=Object.freeze(Object.defineProperty({__proto__:null,FieldMessage:s,Standard:t,WithAffixes:a,__namedExportsOrder:y,default:N},Symbol.toStringTag,{value:"Module"}));export{s as F,t as S,R as T,a as W};
