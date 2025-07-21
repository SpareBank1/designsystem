import{R as o}from"./index-DQDNmYQF.js";import{c as P}from"./index-QCImZZ3W.js";const r=({green:e=!1,className:b,...f})=>o.createElement("progress",{className:P("ffe-progressbar",{"ffe-progressbar--theme-green":e},b),...f});r.__docgenInfo={description:"",methods:[],displayName:"Progressbar",props:{green:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};const E={title:"Komponenter/Progressbar/Progressbar",component:r},a={args:{value:40,max:100},render:e=>o.createElement(r,{...e})},s={args:{value:40,max:100,green:!0},render:e=>o.createElement(r,{...e})},n={args:{value:2500,max:5e3,"aria-label":"Nedbetaling av lån i prosent"},render:e=>o.createElement(r,{...e})};var t,c,m;a.parameters={...a.parameters,docs:{...(t=a.parameters)==null?void 0:t.docs,source:{originalSource:`{
  args: {
    value: 40,
    max: 100
  },
  render: args => <Progressbar {...args}></Progressbar>
}`,...(m=(c=a.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};var g,l,d;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    value: 40,
    max: 100,
    green: true
  },
  render: args => <Progressbar {...args}></Progressbar>
}`,...(d=(l=s.parameters)==null?void 0:l.docs)==null?void 0:d.source}}};var p,i,u;n.parameters={...n.parameters,docs:{...(p=n.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    value: 2500,
    max: 5000,
    'aria-label': 'Nedbetaling av lån i prosent'
  },
  render: args => <Progressbar {...args}></Progressbar>
}`,...(u=(i=n.parameters)==null?void 0:i.docs)==null?void 0:u.source}}};const N=["Standard","Green","WithAria"];export{s as Green,a as Standard,n as WithAria,N as __namedExportsOrder,E as default};
