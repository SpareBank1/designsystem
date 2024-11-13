import{R as o}from"./index-DJO9vBfz.js";import{N as s}from"./unicode-BkFkzGng.js";const g=t=>{let r="";for(let e=0;e<t.length;e++){const f=(e+1)%4===0;r+=t[e].valueOf(),f&&e+1<t.length&&(r+=s)}return r},d=t=>{let r="";return t.length>0&&(r+=t.substring(0,4)),t.length>4&&(r+=s+t.substring(4,6)),t.length>6&&(r+=s+t.substring(6)),r},c=t=>t&&(t.length<=11?d(t):g(t)),l=({accountNumber:t})=>o.createElement(o.Fragment,null,c(t)),A={title:"Komponenter/Formatters/formatAccountNumber",component:l},n={args:{accountNumber:"90010012345"},render:t=>o.createElement(l,{...t})};var a,m,i;n.parameters={...n.parameters,docs:{...(a=n.parameters)==null?void 0:a.docs,source:{originalSource:`{
  args: {
    accountNumber: '90010012345'
  },
  render: args => <Demo {...args} />
}`,...(i=(m=n.parameters)==null?void 0:m.docs)==null?void 0:i.source}}};const h=["Standard"];export{n as Standard,h as __namedExportsOrder,A as default};
