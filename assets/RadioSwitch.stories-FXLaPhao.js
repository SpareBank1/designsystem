import{R as o,r as u}from"./index-DQDNmYQF.js";import{R as c}from"./RadioSwitch-BBYjSt2C.js";import{R as d}from"./RadioButtonInputGroup-XI03ZI0T.js";const m={title:"Komponenter/Form/RadioSwitch",component:c},p=t=>{const[r,i]=u.useState(t.selectedValue);return o.createElement(d,{label:"Velg et alternativ",name:"radio-switch-demo",onChange:a=>i(a.target.value),selectedValue:r},a=>o.createElement(c,{...t,...a}))},e={args:{leftLabel:"Ja",leftValue:"true",rightLabel:"Nei",rightValue:"false",selectedValue:"true"},render:function(r){return o.createElement(p,{...r})}};var n,l,s;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(s=(l=e.parameters)==null?void 0:l.docs)==null?void 0:s.source}}};const f=["Standard"],R=Object.freeze(Object.defineProperty({__proto__:null,Standard:e,__namedExportsOrder:f,default:m},Symbol.toStringTag,{value:"Module"}));export{R,e as S};
