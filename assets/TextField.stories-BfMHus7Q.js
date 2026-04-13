import{R as e}from"./index-DQDNmYQF.js";import{c as d}from"./index-D2FocPV0.js";import{I as n}from"./InputGroup-DRKxpqN_.js";import{E as T}from"./ErrorFieldMessage-DIT7W522.js";const i=e.forwardRef(({className:t,inline:R,textRightAlign:_,prefix:l,suffix:o,...h},N)=>e.createElement("div",{className:d("ffe-text-field__wrapper","ffe-default-mode",{"ffe-text-field__wrapper--inline":R},t)},l&&e.createElement("div",{className:"ffe-text-field__prefix"},l),e.createElement("input",{className:d("ffe-text-field","ffe-default-mode",{"ffe-text-field--text-right-align":_}),ref:N,...h}),o&&e.createElement("div",{className:"ffe-text-field__suffix"},o)));i.__docgenInfo={description:"",methods:[],displayName:"TextField",props:{inline:{required:!1,tsType:{name:"boolean"},description:"Text fields default to `display: block;`. Set this to `true` to apply the inline modifier."},textRightAlign:{required:!1,tsType:{name:"boolean"},description:"Make the text right aligned"},prefix:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Add a prefix inside the input"},suffix:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Add a suffix inside the input"}},composes:["Omit"]};const S={title:"Komponenter/Form/TextField",component:i},r={args:{inline:!1,textRightAlign:!1},render:t=>e.createElement(n,{label:"Navn"},e.createElement(i,{...t}))},a={args:{inline:!1,textRightAlign:!1,prefix:"Prefix",suffix:"Suffix"},render:t=>e.createElement(n,{label:"Navn"},e.createElement(i,{...t}))},s={args:{...r.args},render:t=>e.createElement(n,{fieldMessage:e.createElement(T,null,"Feilmelding")},e.createElement(i,{...t}))};var f,p,c;r.parameters={...r.parameters,docs:{...(f=r.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    inline: false,
    textRightAlign: false
  },
  render: args => <InputGroup label="Navn">
            <TextField {...args} />
        </InputGroup>
}`,...(c=(p=r.parameters)==null?void 0:p.docs)==null?void 0:c.source}}};var m,u,g;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(F=(E=s.parameters)==null?void 0:E.docs)==null?void 0:F.source}}};const b=["Standard","WithAffixes","FieldMessage"],v=Object.freeze(Object.defineProperty({__proto__:null,FieldMessage:s,Standard:r,WithAffixes:a,__namedExportsOrder:b,default:S},Symbol.toStringTag,{value:"Module"}));export{s as F,r as S,v as T,a as W};
