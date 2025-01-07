import{R as o}from"./index-ne9I_3bB.js";import{B as m}from"./BaseButton-Cb0lX_L4.js";import{f as l}from"./fixedForwardRef-C9iYCfWA.js";import{I as p}from"./Icon-D2PqKf0B.js";function f(t,n){const a={...t,ref:n},{icon:u,...d}=a;return o.createElement(m,{leftIcon:o.createElement("div",{"aria-hidden":"true"},u),...d,ref:a.ref,buttonType:"task"})}const r=l(f);r.__docgenInfo={description:"",methods:[],displayName:"TaskButton",props:{icon:{required:!0,tsType:{name:"ReactElement"},description:"icon element shown to the left of the label"}}};const g=t=>o.createElement("a",{...t},"Custom ",t.children),b={title:"Komponenter/Buttons/TaskButton",component:r,argTypes:{as:{options:["a","button","custom"],mapping:{"":"button",a:"a",button:"button",custom:g}}}},e={args:{as:"button"},render:function(n){return o.createElement(r,{icon:o.createElement(p,{fileUrl:"./icons/open/300/md/add.svg",...n})},"Legg til bruker")}};var s,c,i;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    as: 'button'
  },
  render: function Render(args) {
    return <TaskButton icon={<Icon fileUrl="./icons/open/300/md/add.svg" {...args} />}>
                Legg til bruker
            </TaskButton>;
  }
}`,...(i=(c=e.parameters)==null?void 0:c.docs)==null?void 0:i.source}}};const T=["Standard"],_=Object.freeze(Object.defineProperty({__proto__:null,Standard:e,__namedExportsOrder:T,default:b},Symbol.toStringTag,{value:"Module"}));export{e as S,_ as T};
