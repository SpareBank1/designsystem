import{R as e,r as i}from"./index-DQDNmYQF.js";import{R as a}from"./RadioButton-hZDP9tlC.js";import{R as c}from"./RadioButtonInputGroup-BA93qp9c.js";const b={title:"Komponenter/Form/RadioButton",component:a},B=n=>{const[r,l]=i.useState(n.selectedValue);return e.createElement(c,{label:"Velg kundetype",name:"radio-button-demo",onChange:t=>l(t.target.value),selectedValue:r},t=>e.createElement(e.Fragment,null,e.createElement(a,{value:"bankkunde",...t},"Bankkunde"),e.createElement(a,{value:"bedriftskunde",...t},"Bedriftskunde")))},I=n=>{const[r,l]=i.useState(n.selectedValue);return e.createElement(c,{label:"Velg betalingsfrekvens",name:"radio-button-inline-demo",onChange:t=>l(t.target.value),selectedValue:r,inline:!0},t=>e.createElement(e.Fragment,null,e.createElement(a,{value:"monthly",...t},"Månedlig"),e.createElement(a,{value:"quarterly",...t},"Kvartalsvis"),e.createElement(a,{value:"yearly",...t},"Årlig")))},W=n=>{const[r,l]=i.useState(n.selectedValue);return e.createElement(c,{label:"Velg faktureringstype",name:"radio-button-tooltip-demo",onChange:t=>l(t.target.value),selectedValue:r},t=>e.createElement(e.Fragment,null,e.createElement(a,{value:"monthly",tooltip:"Månedlig fakturering er enklest å planlegge for. Passer for deg som liker å planlegge litt etter hvert.",...t},"Månedlig fakturering"),e.createElement(a,{value:"quarterly",tooltip:"Kvartalsvis fakturering gir deg mer oversikt. Passer for deg som liker å planlegge godt.",...t},"Kvartalsvis fakturering")))},G=n=>{const[r,l]=i.useState(n.selectedValue);return e.createElement(c,{label:"Velg faktureringstype",name:"radio-button-invalid-demo",onChange:t=>l(t.target.value),selectedValue:r,fieldMessage:"Velg årlig fakturering"},t=>e.createElement(e.Fragment,null,e.createElement(a,{value:"monthly","aria-invalid":"true",...t},"Månedlig fakturering"),e.createElement(a,{value:"quarterly","aria-invalid":"true",...t},"Kvartalsvis fakturering")))},o={args:{selectedValue:"bankkunde"},render:function(r){return e.createElement(B,{...r})}},s={args:{selectedValue:"monthly"},render:function(r){return e.createElement(I,{...r})}},u={args:{selectedValue:"monthly"},render:function(r){return e.createElement(G,{...r})}},d={args:{selectedValue:"monthly"},render:function(r){return e.createElement(W,{...r})}};var m,g,p;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    selectedValue: 'bankkunde'
  },
  render: function Render(args) {
    return <RadioButtonWithGroup {...args} />;
  }
}`,...(p=(g=o.parameters)==null?void 0:g.docs)==null?void 0:p.source}}};var v,f,k;s.parameters={...s.parameters,docs:{...(v=s.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    selectedValue: 'monthly'
  },
  render: function Render(args) {
    return <RadioButtonInlineWithGroup {...args} />;
  }
}`,...(k=(f=s.parameters)==null?void 0:f.docs)==null?void 0:k.source}}};var R,E,h;u.parameters={...u.parameters,docs:{...(R=u.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    selectedValue: 'monthly'
  },
  render: function Render(args) {
    return <RadioButtonAriaInvalid {...args} />;
  }
}`,...(h=(E=u.parameters)==null?void 0:E.docs)==null?void 0:h.source}}};var V,y,S;d.parameters={...d.parameters,docs:{...(V=d.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    selectedValue: 'monthly'
  },
  render: function Render(args) {
    return <RadioButtonWithGroupTooltip {...args} />;
  }
}`,...(S=(y=d.parameters)==null?void 0:y.docs)==null?void 0:S.source}}};const M=["Standard","Inline","AriaInvalid","WithTooltip"],K=Object.freeze(Object.defineProperty({__proto__:null,AriaInvalid:u,Inline:s,Standard:o,WithTooltip:d,__namedExportsOrder:M,default:b},Symbol.toStringTag,{value:"Module"}));export{u as A,s as I,K as R,o as S,d as W};
