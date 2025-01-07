import{R as a}from"./index-ne9I_3bB.js";import{N as n}from"./unicode-BkFkzGng.js";const i=(e,t={minDecimals:0,maxDecimals:2})=>typeof e!="number"?`${e.replace(".",",")}${n}%`:`${e.toLocaleString("nb-NO",{minimumFractionDigits:t.minDecimals,maximumFractionDigits:t.maxDecimals}).replace(".",",")}${n}%`,s=({amount:e,...t})=>a.createElement(a.Fragment,null,i(e,{...t})),l={title:"Komponenter/Formatters/formatPercentage",component:s,argTypes:{minDecimals:{control:"number"},maxDecimals:{control:"number"}}},r={args:{amount:"49"},render:e=>a.createElement(s,{...e})};var o,m,c;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    amount: '49'
  },
  render: args => <Demo {...args} />
}`,...(c=(m=r.parameters)==null?void 0:m.docs)==null?void 0:c.source}}};const g=["Standard"],f=Object.freeze(Object.defineProperty({__proto__:null,Standard:r,__namedExportsOrder:g,default:l},Symbol.toStringTag,{value:"Module"}));export{r as S,f};
