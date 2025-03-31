import{R as e,r as i}from"./index-DQDNmYQF.js";import{R as n}from"./RadioButton-xf9fc-_r.js";import{R as m}from"./RadioButtonInputGroup-XI03ZI0T.js";const I={title:"Komponenter/Form/RadioButton",component:n},G=a=>{const[r,l]=i.useState(a.selectedValue);return e.createElement(m,{label:"Velg kundetype",name:"radio-button-demo",onChange:t=>l(t.target.value),selectedValue:r},t=>e.createElement(e.Fragment,null,e.createElement(n,{value:"bankkunde",...t},"Bankkunde"),e.createElement(n,{value:"bedriftskunde",...t},"Bedriftskunde")))},F=a=>{const[r,l]=i.useState(a.selectedValue);return e.createElement(m,{label:"Velg betalingsfrekvens",name:"radio-button-inline-demo",onChange:t=>l(t.target.value),selectedValue:r,inline:!0},t=>e.createElement(e.Fragment,null,e.createElement(n,{value:"monthly",...t},"Månedlig"),e.createElement(n,{value:"quarterly",...t},"Kvartalsvis"),e.createElement(n,{value:"yearly",...t},"Årlig")))},A=a=>{const[r,l]=i.useState(a.selectedValue);return e.createElement("div",{style:{background:"var(--ffe-color-surface-highlight)",padding:"2rem"}},e.createElement(m,{label:"Velg forsikringstype",name:"radio-button-colored-demo",onChange:t=>l(t.target.value),selectedValue:r},t=>e.createElement(e.Fragment,null,e.createElement(n,{value:"full",...t},"Fullkasko"),e.createElement(n,{value:"partial",...t},"Delkasko"),e.createElement(n,{value:"liability",...t},"Ansvar"))))},M=a=>{const[r,l]=i.useState(a.selectedValue);return e.createElement(m,{label:"Velg faktureringstype",name:"radio-button-tooltip-demo",onChange:t=>l(t.target.value),selectedValue:r},t=>e.createElement(e.Fragment,null,e.createElement(n,{value:"monthly",tooltip:"Månedlig fakturering er enklest å planlegge for. Passer for deg som liker å planlegge litt etter hvert.",...t},"Månedlig fakturering"),e.createElement(n,{value:"quarterly",tooltip:"Kvartalsvis fakturering gir deg mer oversikt. Passer for deg som liker å planlegge godt.",...t},"Kvartalsvis fakturering")))},_=a=>{const[r,l]=i.useState(a.selectedValue);return e.createElement(m,{label:"Velg faktureringstype",name:"radio-button-invalid-demo",onChange:t=>l(t.target.value),selectedValue:r,fieldMessage:"Velg årlig fakturering"},t=>e.createElement(e.Fragment,null,e.createElement(n,{value:"monthly","aria-invalid":"true",...t},"Månedlig fakturering"),e.createElement(n,{value:"quarterly","aria-invalid":"true",...t},"Kvartalsvis fakturering")))},o={args:{selectedValue:"bankkunde"},render:function(r){return e.createElement(G,{...r})}},s={args:{selectedValue:"monthly"},render:function(r){return e.createElement(F,{...r})}},u={args:{selectedValue:"monthly"},render:function(r){return e.createElement(_,{...r})}},d={args:{selectedValue:"full"},render:function(r){return e.createElement(A,{...r})}},c={args:{selectedValue:"monthly"},render:function(r){return e.createElement(M,{...r})}};var g,p,f;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    selectedValue: 'bankkunde'
  },
  render: function Render(args) {
    return <RadioButtonWithGroup {...args} />;
  }
}`,...(f=(p=o.parameters)==null?void 0:p.docs)==null?void 0:f.source}}};var v,k,E;s.parameters={...s.parameters,docs:{...(v=s.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    selectedValue: 'monthly'
  },
  render: function Render(args) {
    return <RadioButtonInlineWithGroup {...args} />;
  }
}`,...(E=(k=s.parameters)==null?void 0:k.docs)==null?void 0:E.source}}};var R,h,V;u.parameters={...u.parameters,docs:{...(R=u.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    selectedValue: 'monthly'
  },
  render: function Render(args) {
    return <RadioButtonAriaInvalid {...args} />;
  }
}`,...(V=(h=u.parameters)==null?void 0:h.docs)==null?void 0:V.source}}};var y,S,b;d.parameters={...d.parameters,docs:{...(y=d.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    selectedValue: 'full'
  },
  render: function Render(args) {
    return <RadioButtonColoredBgWithGroup {...args} />;
  }
}`,...(b=(S=d.parameters)==null?void 0:S.docs)==null?void 0:b.source}}};var B,W,C;c.parameters={...c.parameters,docs:{...(B=c.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    selectedValue: 'monthly'
  },
  render: function Render(args) {
    return <RadioButtonWithGroupTooltip {...args} />;
  }
}`,...(C=(W=c.parameters)==null?void 0:W.docs)==null?void 0:C.source}}};const K=["Standard","Inline","AriaInvalid","ColoredBackground","WithTooltip"],O=Object.freeze(Object.defineProperty({__proto__:null,AriaInvalid:u,ColoredBackground:d,Inline:s,Standard:o,WithTooltip:c,__namedExportsOrder:K,default:I},Symbol.toStringTag,{value:"Module"}));export{u as A,d as C,s as I,O as R,o as S,c as W};
