import{R as r,r as f}from"./index-DQDNmYQF.js";import{R as i}from"./RadioSwitch-BBYjSt2C.js";import{R as p}from"./RadioButtonInputGroup-XI03ZI0T.js";const h={title:"Komponenter/Form/RadioSwitch",component:i},S=e=>{const[t,o]=f.useState(e.selectedValue);return r.createElement(p,{label:"Velg et alternativ",name:"radio-switch-demo",onChange:a=>o(a.target.value),selectedValue:t},a=>r.createElement(i,{...e,...a}))},V=e=>{const[t,o]=f.useState(e.selectedValue);return r.createElement(p,{label:"Velg et alternativ",name:"radio-switch-invalid-demo",onChange:a=>o(a.target.value),selectedValue:t},a=>r.createElement(i,{...e,...a,"aria-invalid":"true"}))},n={args:{leftLabel:"Ja",leftValue:"true",rightLabel:"Nei",rightValue:"false",selectedValue:"true"},render:function(t){return r.createElement(S,{...t})}},l={args:{leftLabel:"Ja",leftValue:"true",rightLabel:"Nei",rightValue:"false",selectedValue:"true"},render:function(t){return r.createElement(V,{...t})}};var s,c,u;n.parameters={...n.parameters,docs:{...(s=n.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
}`,...(u=(c=n.parameters)==null?void 0:c.docs)==null?void 0:u.source}}};var d,m,g;l.parameters={...l.parameters,docs:{...(d=l.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    leftLabel: 'Ja',
    leftValue: 'true',
    rightLabel: 'Nei',
    rightValue: 'false',
    selectedValue: 'true'
  },
  render: function Render(args) {
    return <RadioSwitchAriaInvalid {...args} />;
  }
}`,...(g=(m=l.parameters)==null?void 0:m.docs)==null?void 0:g.source}}};const R=["Standard","AriaInvalid"],E=Object.freeze(Object.defineProperty({__proto__:null,AriaInvalid:l,Standard:n,__namedExportsOrder:R,default:h},Symbol.toStringTag,{value:"Module"}));export{l as A,E as R,n as S};
