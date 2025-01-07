import{R as t}from"./index-ne9I_3bB.js";import{N as m}from"./unicode-BkFkzGng.js";const c=e=>!e||e.length!==11?e:`${e.substring(0,6)}${m}${e.substring(6,11)}`,s=({ssn:e})=>t.createElement(t.Fragment,null,c(e)),d={title:"Komponenter/Formatters/formatFodselsnummer",component:s},r={args:{ssn:"01010112345"},render:e=>t.createElement(s,{...e})};var o,n,a;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    ssn: '01010112345'
  },
  render: args => <Demo {...args} />
}`,...(a=(n=r.parameters)==null?void 0:n.docs)==null?void 0:a.source}}};const l=["Standard"],g=Object.freeze(Object.defineProperty({__proto__:null,Standard:r,__namedExportsOrder:l,default:d},Symbol.toStringTag,{value:"Module"}));export{r as S,g as f};
