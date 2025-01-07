import{R as s}from"./index-ne9I_3bB.js";import{p as u,f as m}from"./formatNumber-C9f3jMU7.js";import{N as g}from"./unicode-BkFkzGng.js";const x=(e,o)=>{const{locale:r}=o,{prefix:a=`kr${g}`,postfix:n=",–"}={...o},c=u(e,r);if(typeof c=="number"&&c%1!==0){const i=[",–",",-"].includes(n)?"":n;return`${a}${m(e,{decimals:2,locale:r})}${i}`}return`${a}${m(e,{locale:r})}${n}`},d=({amount:e,postfix:o,prefix:r,locale:a})=>s.createElement(s.Fragment,null,x(e,{locale:a,postfix:o,prefix:r})),b={title:"Komponenter/Formatters/formatCurrency",component:d,argTypes:{prefix:{control:"text"},postfix:{control:"text"}}},t={args:{amount:"1000",locale:"nb"},render:e=>s.createElement(d,{...e})};var l,p,f;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    amount: '1000',
    locale: 'nb'
  },
  render: args => <Demo {...args} />
}`,...(f=(p=t.parameters)==null?void 0:p.docs)==null?void 0:f.source}}};const S=["Standard"],N=Object.freeze(Object.defineProperty({__proto__:null,Standard:t,__namedExportsOrder:S,default:b},Symbol.toStringTag,{value:"Module"}));export{t as S,N as f};
