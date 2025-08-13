import{R as e}from"./index-DQDNmYQF.js";import{c as _}from"./index-D2FocPV0.js";const a=({fileUrl:r,className:E,ariaLabel:t,size:j="md",style:x,...y})=>e.createElement("span",{role:"img","aria-label":t,"aria-hidden":!t,className:_("ffe-icons",`ffe-icons--${j}`,E),style:{maskImage:`url(${r})`,WebkitMaskImage:`url(${r})`,...x},...y});a.__docgenInfo={description:"",methods:[],displayName:"Icon",props:{fileUrl:{required:!0,tsType:{name:"string"},description:"The path to the svg-file og base64 string"},size:{required:!1,tsType:{name:"union",raw:"'sm' | 'md' | 'lg' | 'xl'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"},{name:"literal",value:"'xl'"}]},description:"Size of the icon, default is the closest defined font-size",defaultValue:{value:"'md'",computed:!1}},ariaLabel:{required:!1,tsType:{name:"ReactComponentProps['aria-label']",raw:"React.ComponentProps<'span'>['aria-label']"},description:"Aria label text. If null/undefined, aria-hidden is automatically set to true"}}};const N={title:"Komponenter/Icons/Icon",component:a},s={args:{size:"md",ariaLabel:"hjem",fileUrl:"./icons/open/300/md/house.svg"},render:r=>e.createElement(a,{...r})},n={args:{...s.args,ariaLabel:void 0},render:r=>e.createElement(a,{...r})},o={args:{...s.args,ariaLabel:void 0},render:r=>e.createElement(e.Fragment,null,e.createElement(a,{fileUrl:"./icons/open/300/sm/star.svg",size:"sm",ariaLabel:"sm stjerne"}),e.createElement(a,{fileUrl:"./icons/open/300/md/star.svg",size:"md",ariaLabel:"md stjerne"}),e.createElement(a,{fileUrl:"./icons/open/300/lg/star.svg",size:"lg",ariaLabel:"lg stjerne"}),e.createElement(a,{fileUrl:"./icons/open/300/xl/star.svg",size:"xl",ariaLabel:"xl stjerne"}))},l={args:{...s.args,ariaLabel:void 0},render:r=>e.createElement(e.Fragment,null,e.createElement(a,{fileUrl:"./icons/open/300/md/house.svg",size:"md",ariaLabel:"hus"}),e.createElement(a,{fileUrl:"./icons/open/400/md/house.svg",size:"md",ariaLabel:"hus"}),e.createElement(a,{fileUrl:"./icons/open/500/md/house.svg",size:"md",ariaLabel:"hus"}))},i={args:{...s.args,ariaLabel:void 0},render:r=>e.createElement(e.Fragment,null,e.createElement(a,{fileUrl:"./icons/open/300/md/house.svg",size:"md",ariaLabel:"hus"}),e.createElement(a,{fileUrl:"./icons/open/300/md/house.svg",size:"md"}))};var m,c,d;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    size: 'md',
    ariaLabel: 'hjem',
    fileUrl: './icons/open/300/md/house.svg'
  },
  render: args => <Icon {...args} />
}`,...(d=(c=s.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};var g,u,p;n.parameters={...n.parameters,docs:{...(g=n.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    ...Standard.args,
    ariaLabel: undefined
  },
  render: args => <Icon {...args} />
}`,...(p=(u=n.parameters)==null?void 0:u.docs)==null?void 0:p.source}}};var f,b,v;o.parameters={...o.parameters,docs:{...(f=o.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    ...Standard.args,
    ariaLabel: undefined
  },
  render: args => <>
            <Icon fileUrl="./icons/open/300/sm/star.svg" size="sm" ariaLabel="sm stjerne" />
            <Icon fileUrl="./icons/open/300/md/star.svg" size="md" ariaLabel="md stjerne" />
            <Icon fileUrl="./icons/open/300/lg/star.svg" size="lg" ariaLabel="lg stjerne" />
            <Icon fileUrl="./icons/open/300/xl/star.svg" size="xl" ariaLabel="xl stjerne" />
        </>
}`,...(v=(b=o.parameters)==null?void 0:b.docs)==null?void 0:v.source}}};var h,L,z;l.parameters={...l.parameters,docs:{...(h=l.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    ...Standard.args,
    ariaLabel: undefined
  },
  render: args => <>
            <Icon fileUrl="./icons/open/300/md/house.svg" size="md" ariaLabel="hus" />
            <Icon fileUrl="./icons/open/400/md/house.svg" size="md" ariaLabel="hus" />
            <Icon fileUrl="./icons/open/500/md/house.svg" size="md" ariaLabel="hus" />
        </>
}`,...(z=(L=l.parameters)==null?void 0:L.docs)==null?void 0:z.source}}};var U,I,S;i.parameters={...i.parameters,docs:{...(U=i.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: {
    ...Standard.args,
    ariaLabel: undefined
  },
  render: args => <>
            <Icon fileUrl="./icons/open/300/md/house.svg" size="md" ariaLabel="hus" />
            <Icon fileUrl="./icons/open/300/md/house.svg" size="md" />
        </>
}`,...(S=(I=i.parameters)==null?void 0:I.docs)==null?void 0:S.source}}};const T=["Standard","NoAriaLabel","Sizes","Weights","UniversellUtforming"],k=Object.freeze(Object.defineProperty({__proto__:null,NoAriaLabel:n,Sizes:o,Standard:s,UniversellUtforming:i,Weights:l,__namedExportsOrder:T,default:N},Symbol.toStringTag,{value:"Module"}));export{k as I,s as S,i as U,l as W,o as a};
