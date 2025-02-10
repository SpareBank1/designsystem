import{R as u}from"./index-eCxJ45ll.js";import{R as a}from"./RadioButton-DM8HqcXj.js";const c={title:"Komponenter/Form/RadioButton",component:a},e={args:{inline:!1,onColoredBg:!1,labelProps:{},selectedValue:"bankkunde",value:"bankkunde",children:"Bankkunde"},render:function(n){return u.createElement(a,{...n})}},r={args:{...e.args,children:"Månedlig fakturering",tooltip:"Månedlig fakturering er enklest å planlegge for. Passer for deg som liker å planlegge litt etter hvert."},render:function(n){return u.createElement(a,{...n})}};var t,o,s;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
  args: {
    inline: false,
    onColoredBg: false,
    labelProps: {},
    selectedValue: 'bankkunde',
    value: 'bankkunde',
    children: 'Bankkunde'
  },
  render: function Render(args) {
    return <RadioButton {...args} />;
  }
}`,...(s=(o=e.parameters)==null?void 0:o.docs)==null?void 0:s.source}}};var l,d,i;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    ...Standard.args,
    children: 'Månedlig fakturering',
    tooltip: 'Månedlig fakturering er enklest å planlegge for. Passer for deg som liker å planlegge litt etter hvert.'
  },
  render: function Render(args) {
    return <RadioButton {...args} />;
  }
}`,...(i=(d=r.parameters)==null?void 0:d.docs)==null?void 0:i.source}}};const p=["Standard","ToolTip"],k=Object.freeze(Object.defineProperty({__proto__:null,Standard:e,ToolTip:r,__namedExportsOrder:p,default:c},Symbol.toStringTag,{value:"Module"}));export{k as R,e as S,r as T};
