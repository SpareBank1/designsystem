import{R as n}from"./index-DQDNmYQF.js";import{c as P}from"./index-D2FocPV0.js";const r=({success:e=!1,className:b,...f})=>n.createElement("progress",{className:P("ffe-progressbar",{"ffe-progressbar--theme-success":e},b),...f});r.__docgenInfo={description:"",methods:[],displayName:"Progressbar",props:{success:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};const S={title:"Komponenter/Progressbar/Progressbar",component:r},s={args:{value:40,max:100},render:e=>n.createElement(r,{...e})},a={args:{value:40,max:100,success:!0},render:e=>n.createElement(r,{...e})},o={args:{value:2500,max:5e3,"aria-label":"Nedbetaling av lån i prosent"},render:e=>n.createElement(r,{...e})};var t,c,m;s.parameters={...s.parameters,docs:{...(t=s.parameters)==null?void 0:t.docs,source:{originalSource:`{
  args: {
    value: 40,
    max: 100
  },
  render: args => <Progressbar {...args}></Progressbar>
}`,...(m=(c=s.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};var l,d,g;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    value: 40,
    max: 100,
    success: true
  },
  render: args => <Progressbar {...args}></Progressbar>
}`,...(g=(d=a.parameters)==null?void 0:d.docs)==null?void 0:g.source}}};var p,u,i;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    value: 2500,
    max: 5000,
    'aria-label': 'Nedbetaling av lån i prosent'
  },
  render: args => <Progressbar {...args}></Progressbar>
}`,...(i=(u=o.parameters)==null?void 0:u.docs)==null?void 0:i.source}}};const E=["Standard","Success","WithAria"];export{s as Standard,a as Success,o as WithAria,E as __namedExportsOrder,S as default};
