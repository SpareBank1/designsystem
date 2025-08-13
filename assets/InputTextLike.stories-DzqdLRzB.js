import{R as e}from"./index-DQDNmYQF.js";import{c as f}from"./index-D2FocPV0.js";import{P as p}from"./Paragraph-7jO2Jnpx.js";const n=e.forwardRef(({className:r,ariaLabel:c,...g},u)=>e.createElement("input",{className:f("ffe-input-field","ffe-input-field--text-like",r),"aria-label":c,ref:u,...g}));n.__docgenInfo={description:"",methods:[],displayName:"InputTextLike",props:{ariaLabel:{required:!0,tsType:{name:"string"},description:""}}};const S={title:"Komponenter/Form/InputTextLike",component:n},a={args:{ariaLabel:"Skriv inn alder",style:{width:47}},render:r=>e.createElement(p,null,"Jeg er ",e.createElement(n,{...r})," år gammel")},t={args:{ariaLabel:"Skriv inn alder","aria-invalid":!0,style:{width:47}},render:r=>e.createElement(p,null,"Jeg er ",e.createElement(n,{...r})," år gammel")};var i,s,l;a.parameters={...a.parameters,docs:{...(i=a.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    ariaLabel: 'Skriv inn alder',
    style: {
      width: 47
    }
  },
  render: args => <Paragraph>
            Jeg er <InputTextLike {...args} /> år gammel
        </Paragraph>
}`,...(l=(s=a.parameters)==null?void 0:s.docs)==null?void 0:l.source}}};var o,d,m;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    ariaLabel: 'Skriv inn alder',
    'aria-invalid': true,
    style: {
      width: 47
    }
  },
  render: args => <Paragraph>
            Jeg er <InputTextLike {...args} /> år gammel
        </Paragraph>
}`,...(m=(d=t.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};const k=["Standard","AriaInvalid"],b=Object.freeze(Object.defineProperty({__proto__:null,AriaInvalid:t,Standard:a,__namedExportsOrder:k,default:S},Symbol.toStringTag,{value:"Module"}));export{t as A,b as I,a as S};
