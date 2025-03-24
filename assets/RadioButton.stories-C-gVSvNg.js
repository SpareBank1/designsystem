import{R as e,r as c}from"./index-DQDNmYQF.js";import{R as a}from"./RadioButton-xf9fc-_r.js";import{R as i}from"./RadioButtonInputGroup-XI03ZI0T.js";const S={title:"Komponenter/Form/RadioButton",component:a},y=n=>{const[r,l]=c.useState(n.selectedValue);return e.createElement(i,{label:"Velg kundetype",name:"radio-button-demo",onChange:t=>l(t.target.value),selectedValue:r},t=>e.createElement(e.Fragment,null,e.createElement(a,{value:"bankkunde",...t},"Bankkunde"),e.createElement(a,{value:"bedriftskunde",...t},"Bedriftskunde")))},W=n=>{const[r,l]=c.useState(n.selectedValue);return e.createElement(i,{label:"Velg betalingsfrekvens",name:"radio-button-inline-demo",onChange:t=>l(t.target.value),selectedValue:r,inline:!0},t=>e.createElement(e.Fragment,null,e.createElement(a,{value:"monthly",...t},"Månedlig"),e.createElement(a,{value:"quarterly",...t},"Kvartalsvis"),e.createElement(a,{value:"yearly",...t},"Årlig")))},C=n=>{const[r,l]=c.useState(n.selectedValue);return e.createElement("div",{style:{background:"var(--ffe-color-surface-highlight)",padding:"2rem"}},e.createElement(i,{label:"Velg forsikringstype",name:"radio-button-colored-demo",onChange:t=>l(t.target.value),selectedValue:r},t=>e.createElement(e.Fragment,null,e.createElement(a,{value:"full",...t},"Fullkasko"),e.createElement(a,{value:"partial",...t},"Delkasko"),e.createElement(a,{value:"liability",...t},"Ansvar"))))},G=n=>{const[r,l]=c.useState(n.selectedValue);return e.createElement(i,{label:"Velg faktureringstype",name:"radio-button-tooltip-demo",onChange:t=>l(t.target.value),selectedValue:r},t=>e.createElement(e.Fragment,null,e.createElement(a,{value:"monthly",tooltip:"Månedlig fakturering er enklest å planlegge for. Passer for deg som liker å planlegge litt etter hvert.",...t},"Månedlig fakturering"),e.createElement(a,{value:"quarterly",tooltip:"Kvartalsvis fakturering gir deg mer oversikt. Passer for deg som liker å planlegge godt.",...t},"Kvartalsvis fakturering")))},o={args:{selectedValue:"bankkunde"},render:function(r){return e.createElement(y,{...r})}},s={args:{selectedValue:"monthly"},render:function(r){return e.createElement(W,{...r})}},u={args:{selectedValue:"full"},render:function(r){return e.createElement(C,{...r})}},d={args:{selectedValue:"monthly"},render:function(r){return e.createElement(G,{...r})}};var m,g,p;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    selectedValue: 'bankkunde'
  },
  render: function Render(args) {
    return <RadioButtonWithGroup {...args} />;
  }
}`,...(p=(g=o.parameters)==null?void 0:g.docs)==null?void 0:p.source}}};var f,k,v;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    selectedValue: 'monthly'
  },
  render: function Render(args) {
    return <RadioButtonInlineWithGroup {...args} />;
  }
}`,...(v=(k=s.parameters)==null?void 0:k.docs)==null?void 0:v.source}}};var E,R,h;u.parameters={...u.parameters,docs:{...(E=u.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    selectedValue: 'full'
  },
  render: function Render(args) {
    return <RadioButtonColoredBgWithGroup {...args} />;
  }
}`,...(h=(R=u.parameters)==null?void 0:R.docs)==null?void 0:h.source}}};var V,b,B;d.parameters={...d.parameters,docs:{...(V=d.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    selectedValue: 'monthly'
  },
  render: function Render(args) {
    return <RadioButtonWithGroupTooltip {...args} />;
  }
}`,...(B=(b=d.parameters)==null?void 0:b.docs)==null?void 0:B.source}}};const F=["Standard","Inline","ColoredBackground","WithTooltip"],K=Object.freeze(Object.defineProperty({__proto__:null,ColoredBackground:u,Inline:s,Standard:o,WithTooltip:d,__namedExportsOrder:F,default:S},Symbol.toStringTag,{value:"Module"}));export{u as C,s as I,K as R,o as S,d as W};
