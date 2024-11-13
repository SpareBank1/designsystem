import{R as a}from"./index-DJO9vBfz.js";import{p as d,f as i}from"./formatNumber-C9f3jMU7.js";import{N as p}from"./unicode-BkFkzGng.js";const u=(e,t={})=>{const{unit:l="km"}=t,o=d(e,"nb");return o===null?"":`${i(o,{locale:"nb"})}${p}${l}`},c=({unit:e,distance:t})=>a.createElement(a.Fragment,null,u(t,{unit:e})),f={title:"Komponenter/Formatters/formatDistance",component:c,argTypes:{unit:{control:"text"}}},r={args:{distance:"160 520"},render:e=>a.createElement(c,{...e})};var n,s,m;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    distance: '160 520'
  },
  render: args => <Demo {...args} />
}`,...(m=(s=r.parameters)==null?void 0:s.docs)==null?void 0:m.source}}};const g=["Standard"],N=Object.freeze(Object.defineProperty({__proto__:null,Standard:r,__namedExportsOrder:g,default:f},Symbol.toStringTag,{value:"Module"}));export{r as S,N as f};
