import{R as a}from"./index-eCxJ45ll.js";const o=e=>`00${e}`.slice(-2),p=e=>{const r=e instanceof Date?e:new Date(e),d=o(r.getDate()),l=o(r.getMonth()+1),g=r.getFullYear();return`${d}.${l}.${g}`},m=({timestamp:e})=>a.createElement(a.Fragment,null,p(e)),i={title:"Komponenter/Formatters/formatDate",component:m,argTypes:{timestamp:{control:"date"}}},t={args:{timestamp:new Date},render:e=>a.createElement(m,{...e})};var n,s,c;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    timestamp: new Date()
  },
  render: args => <Demo {...args} />
}`,...(c=(s=t.parameters)==null?void 0:s.docs)==null?void 0:c.source}}};const u=["Standard"],f=Object.freeze(Object.defineProperty({__proto__:null,Standard:t,__namedExportsOrder:u,default:i},Symbol.toStringTag,{value:"Module"}));export{t as S,f};
