import{R as n}from"./index-DQDNmYQF.js";import{B as m}from"./BaseButton-BWQWHdxR.js";import{f as l}from"./fixedForwardRef-DqyCgkTx.js";import{I as p}from"./Icon-BqsuuMcG.js";function f(e,o){const a={...e,ref:o},{icon:u,...d}=a;return n.createElement(m,{leftIcon:n.createElement("div",{"aria-hidden":"true"},u),...d,ref:a.ref,buttonType:"task"})}const r=l(f);r.__docgenInfo={description:"",methods:[],displayName:"TaskButton",props:{icon:{required:!0,tsType:{name:"ReactElement"},description:"icon element shown to the left of the label"}}};const g=e=>n.createElement("a",{...e},"Custom ",e.children),T={title:"Komponenter/Buttons/TaskButton",component:r,argTypes:{as:{options:["a","button","custom"],mapping:{"":"button",a:"a",button:"button",custom:g}}}},t={args:{},render:function(o){return n.createElement(r,{icon:n.createElement(p,{fileUrl:"./icons/open/300/md/add.svg",...o})},"Legg til bruker")}};var s,c,i;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {},
  render: function Render(args) {
    return <TaskButton icon={<Icon fileUrl="./icons/open/300/md/add.svg" {...args} />}>
                Legg til bruker
            </TaskButton>;
  }
}`,...(i=(c=t.parameters)==null?void 0:c.docs)==null?void 0:i.source}}};const b=["Standard"],_=Object.freeze(Object.defineProperty({__proto__:null,Standard:t,__namedExportsOrder:b,default:T},Symbol.toStringTag,{value:"Module"}));export{t as S,_ as T};
