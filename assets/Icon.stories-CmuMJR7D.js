import{R as e}from"./index-eCxJ45ll.js";import{c as w}from"./index-DezCrw0f.js";const a=({fileUrl:r,className:_,ariaLabel:m,size:T="md",style:N,...W})=>e.createElement("span",{role:"img","aria-label":m,"aria-hidden":!m,className:w("ffe-icons",`ffe-icons--${T}`,_),style:{maskImage:`url(${r})`,WebkitMaskImage:`url(${r})`,...N},...W});a.__docgenInfo={description:"",methods:[],displayName:"Icon",props:{fileUrl:{required:!0,tsType:{name:"string"},description:"The path to the svg-file og base64 string"},size:{required:!1,tsType:{name:"union",raw:"'sm' | 'md' | 'lg' | 'xl'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"},{name:"literal",value:"'xl'"}]},description:"Size of the icon, default is the closest defined font-size",defaultValue:{value:"'md'",computed:!1}},weight:{required:!1,tsType:{name:"union",raw:"300 | 500",elements:[{name:"literal",value:"300"},{name:"literal",value:"500"}]},description:"Symbols stroke weight. This can affect overall size of symbol, 400 is default"},ariaLabel:{required:!1,tsType:{name:"ReactComponentProps['aria-label']",raw:"React.ComponentProps<'span'>['aria-label']"},description:"Aria label text. If null/undefined, aria-hidden is automatically set to true"}}};const k={title:"Komponenter/Icons/Icon",component:a},s={args:{size:"md",ariaLabel:"hjem",fileUrl:"./icons/open/300/md/house.svg"},render:r=>e.createElement(a,{...r})},n={args:{...s.args,size:"lg"},render:r=>e.createElement(a,{...r})},o={args:{...s.args,ariaLabel:void 0},render:r=>e.createElement(a,{...r})},l={args:{...s.args,ariaLabel:void 0},render:r=>e.createElement(e.Fragment,null,e.createElement(a,{fileUrl:"./icons/open/300/sm/star.svg",size:"sm",ariaLabel:"sm stjerne"}),e.createElement(a,{fileUrl:"./icons/open/300/md/star.svg",size:"md",ariaLabel:"md stjerne"}),e.createElement(a,{fileUrl:"./icons/open/300/lg/star.svg",size:"lg",ariaLabel:"lg stjerne"}),e.createElement(a,{fileUrl:"./icons/open/300/xl/star.svg",size:"xl",ariaLabel:"xl stjerne"}))},i={args:{...s.args,ariaLabel:void 0},render:r=>e.createElement(e.Fragment,null,e.createElement(a,{fileUrl:"./icons/open/300/md/house.svg",size:"md",ariaLabel:"hus"}),e.createElement(a,{fileUrl:"./icons/open/400/md/house.svg",size:"md",ariaLabel:"hus"}),e.createElement(a,{fileUrl:"./icons/open/500/md/house.svg",size:"md",ariaLabel:"hus"}))},t={args:{...s.args,ariaLabel:void 0},render:r=>e.createElement(e.Fragment,null,e.createElement(a,{fileUrl:"./icons/open/300/md/house.svg",size:"md",ariaLabel:"hus"}),e.createElement(a,{fileUrl:"./icons/open/300/md/house.svg",size:"md"}))};var c,d,g;s.parameters={...s.parameters,docs:{...(c=s.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    size: 'md',
    ariaLabel: 'hjem',
    fileUrl: './icons/open/300/md/house.svg'
  },
  render: args => <Icon {...args} />
}`,...(g=(d=s.parameters)==null?void 0:d.docs)==null?void 0:g.source}}};var u,p,f;n.parameters={...n.parameters,docs:{...(u=n.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    ...Standard.args,
    size: 'lg'
  },
  render: args => <Icon {...args} />
}`,...(f=(p=n.parameters)==null?void 0:p.docs)==null?void 0:f.source}}};var b,v,h;o.parameters={...o.parameters,docs:{...(b=o.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    ...Standard.args,
    ariaLabel: undefined
  },
  render: args => <Icon {...args} />
}`,...(h=(v=o.parameters)==null?void 0:v.docs)==null?void 0:h.source}}};var z,L,U;l.parameters={...l.parameters,docs:{...(z=l.parameters)==null?void 0:z.docs,source:{originalSource:`{
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
}`,...(U=(L=l.parameters)==null?void 0:L.docs)==null?void 0:U.source}}};var S,I,E;i.parameters={...i.parameters,docs:{...(S=i.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    ...Standard.args,
    ariaLabel: undefined
  },
  render: args => <>
            <Icon fileUrl="./icons/open/300/md/house.svg" size="md" ariaLabel="hus" />
            <Icon fileUrl="./icons/open/400/md/house.svg" size="md" ariaLabel="hus" />
            <Icon fileUrl="./icons/open/500/md/house.svg" size="md" ariaLabel="hus" />
        </>
}`,...(E=(I=i.parameters)==null?void 0:I.docs)==null?void 0:E.source}}};var j,x,y;t.parameters={...t.parameters,docs:{...(j=t.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    ...Standard.args,
    ariaLabel: undefined
  },
  render: args => <>
            <Icon fileUrl="./icons/open/300/md/house.svg" size="md" ariaLabel="hus" />
            <Icon fileUrl="./icons/open/300/md/house.svg" size="md" />
        </>
}`,...(y=(x=t.parameters)==null?void 0:x.docs)==null?void 0:y.source}}};const q=["Standard","WrongSize","NoAriaLabel","Sizes","Weights","UniversellUtforming"],F=Object.freeze(Object.defineProperty({__proto__:null,NoAriaLabel:o,Sizes:l,Standard:s,UniversellUtforming:t,Weights:i,WrongSize:n,__namedExportsOrder:q,default:k},Symbol.toStringTag,{value:"Module"}));export{F as I,o as N,s as S,t as U,n as W,l as a,i as b};
