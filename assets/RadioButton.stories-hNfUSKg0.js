import{R as e,r as l}from"./index-DQDNmYQF.js";import{R as a}from"./RadioButton-hZDP9tlC.js";import{R as m}from"./RadioButtonInputGroup-BA93qp9c.js";const B={title:"Komponenter/Form/RadioButton",component:a},I=n=>{const[r,o]=l.useState(n.selectedValue),s=l.useId();return e.createElement(m,{label:"Velg kundetype",name:`radio-button-with-group-demo-${s}`,onChange:t=>o(t.target.value),selectedValue:r},t=>e.createElement(e.Fragment,null,e.createElement(a,{value:"bankkunde",...t},"Bankkunde"),e.createElement(a,{value:"bedriftskunde",...t},"Bedriftskunde")))},W=n=>{const[r,o]=l.useState(n.selectedValue),s=l.useId();return e.createElement(m,{label:"Velg betalingsfrekvens",name:`radio-button-inline-demo-${s}`,onChange:t=>o(t.target.value),selectedValue:r,inline:!0},t=>e.createElement(e.Fragment,null,e.createElement(a,{value:"monthly",...t},"Månedlig"),e.createElement(a,{value:"quarterly",...t},"Kvartalsvis"),e.createElement(a,{value:"yearly",...t},"Årlig")))},G=n=>{const[r,o]=l.useState(n.selectedValue),s=l.useId();return e.createElement(m,{label:"Velg faktureringstype",name:`radio-button-group-demo-${s}`,onChange:t=>o(t.target.value),selectedValue:r},t=>e.createElement(e.Fragment,null,e.createElement(a,{value:"monthly",tooltip:"Månedlig fakturering er enklest å planlegge for. Passer for deg som liker å planlegge litt etter hvert.",...t},"Månedlig fakturering"),e.createElement(a,{value:"quarterly",tooltip:"Kvartalsvis fakturering gir deg mer oversikt. Passer for deg som liker å planlegge godt.",...t},"Kvartalsvis fakturering")))},M=n=>{const[r,o]=l.useState(n.selectedValue),s=l.useId();return e.createElement(m,{label:"Velg faktureringstype",name:`radio-button-invalid-demo-${s}`,onChange:t=>o(t.target.value),selectedValue:r,fieldMessage:"Velg årlig fakturering"},t=>e.createElement(e.Fragment,null,e.createElement(a,{value:"monthly","aria-invalid":"true",...t},"Månedlig fakturering"),e.createElement(a,{value:"quarterly","aria-invalid":"true",...t},"Kvartalsvis fakturering")))},u={args:{selectedValue:"bankkunde"},render:function(r){return e.createElement(I,{...r})}},d={args:{selectedValue:"monthly"},render:function(r){return e.createElement(W,{...r})}},i={args:{selectedValue:"monthly"},render:function(r){return e.createElement(M,{...r})}},c={args:{selectedValue:"monthly"},render:function(r){return e.createElement(G,{...r})}};var g,p,v;u.parameters={...u.parameters,docs:{...(g=u.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    selectedValue: 'bankkunde'
  },
  render: function Render(args) {
    return <RadioButtonWithGroup {...args} />;
  }
}`,...(v=(p=u.parameters)==null?void 0:p.docs)==null?void 0:v.source}}};var f,k,R;d.parameters={...d.parameters,docs:{...(f=d.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    selectedValue: 'monthly'
  },
  render: function Render(args) {
    return <RadioButtonInlineWithGroup {...args} />;
  }
}`,...(R=(k=d.parameters)==null?void 0:k.docs)==null?void 0:R.source}}};var h,E,V;i.parameters={...i.parameters,docs:{...(h=i.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    selectedValue: 'monthly'
  },
  render: function Render(args) {
    return <RadioButtonAriaInvalid {...args} />;
  }
}`,...(V=(E=i.parameters)==null?void 0:E.docs)==null?void 0:V.source}}};var y,S,b;c.parameters={...c.parameters,docs:{...(y=c.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    selectedValue: 'monthly'
  },
  render: function Render(args) {
    return <RadioButtonWithGroupTooltip {...args} />;
  }
}`,...(b=(S=c.parameters)==null?void 0:S.docs)==null?void 0:b.source}}};const _=["Standard","Inline","AriaInvalid","WithTooltip"],T=Object.freeze(Object.defineProperty({__proto__:null,AriaInvalid:i,Inline:d,Standard:u,WithTooltip:c,__namedExportsOrder:_,default:B},Symbol.toStringTag,{value:"Module"}));export{i as A,d as I,T as R,u as S,c as W};
