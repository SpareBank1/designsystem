import{R as r,r as o}from"./index-DQDNmYQF.js";import{R as c}from"./RadioSwitch-K5izdMm8.js";import{R as h}from"./RadioButtonInputGroup-BA93qp9c.js";const S={title:"Komponenter/Form/RadioSwitch",component:c},R=e=>{const[t,i]=o.useState(e.selectedValue),s=o.useId();return r.createElement(h,{label:"Velg et alternativ",name:`radio-switch-demo${s}`,onChange:a=>i(a.target.value),selectedValue:t},a=>r.createElement(c,{...e,...a}))},V=e=>{const[t,i]=o.useState(e.selectedValue),s=o.useId();return r.createElement(h,{label:"Velg et alternativ",name:`radio-switch-invalid-demo${s}`,onChange:a=>i(a.target.value),selectedValue:t},a=>r.createElement(c,{...e,...a,"aria-invalid":"true"}))},n={args:{leftLabel:"Ja",leftValue:"true",rightLabel:"Nei",rightValue:"false",selectedValue:"true"},render:function(t){return r.createElement(R,{...t})}},l={args:{leftLabel:"Ja",leftValue:"true",rightLabel:"Nei",rightValue:"false"},render:function(t){return r.createElement(V,{...t})}};var d,u,m;n.parameters={...n.parameters,docs:{...(d=n.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    leftLabel: 'Ja',
    leftValue: 'true',
    rightLabel: 'Nei',
    rightValue: 'false',
    selectedValue: 'true'
  },
  render: function Render(args) {
    return <RadioSwitchWithGroup {...args} />;
  }
}`,...(m=(u=n.parameters)==null?void 0:u.docs)==null?void 0:m.source}}};var g,f,p;l.parameters={...l.parameters,docs:{...(g=l.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    leftLabel: 'Ja',
    leftValue: 'true',
    rightLabel: 'Nei',
    rightValue: 'false'
  },
  render: function Render(args) {
    return <RadioSwitchAriaInvalid {...args} />;
  }
}`,...(p=(f=l.parameters)==null?void 0:f.docs)==null?void 0:p.source}}};const b=["Standard","AriaInvalid"],L=Object.freeze(Object.defineProperty({__proto__:null,AriaInvalid:l,Standard:n,__namedExportsOrder:b,default:S},Symbol.toStringTag,{value:"Module"}));export{l as A,L as R,n as S};
