import{R as e}from"./index-RYns6xqu.js";import{B as m}from"./BaseButton-zBeW6ZG8.js";import{f as p}from"./fixedForwardRef-BDE7qUSg.js";import{I as l}from"./Icon-Dor7S2yd.js";import"./index-Dejnh_W_.js";function f(t,n){const a={...t,ref:n},{icon:u,...d}=a;return e.createElement(m,{leftIcon:e.createElement("div",{"aria-hidden":"true"},u),...d,ref:a.ref,buttonType:"task"})}const r=p(f);r.__docgenInfo={description:"",methods:[],displayName:"TaskButton",props:{icon:{required:!0,tsType:{name:"ReactElement"},description:"icon element shown to the left of the label"}}};const g=t=>e.createElement("a",{...t},"Custom ",t.children),R={title:"components/buttons/TaskButton",component:r,tags:["autodocs"],argTypes:{as:{options:["a","button","custom"],mapping:{"":"button",a:"a",button:"button",custom:g}}}},o={args:{as:"button"},render:function(n){return e.createElement(r,{icon:e.createElement(l,{fileUrl:"./icons/open/300/md/add.svg",...n})},"Legg til bruker")}};var s,c,i;o.parameters={...o.parameters,docs:{...(s=o.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    as: 'button'
  },
  render: function Render(args) {
    return <TaskButton icon={<Icon fileUrl="./icons/open/300/md/add.svg" {...args} />}>
                Legg til bruker
            </TaskButton>;
  }
}`,...(i=(c=o.parameters)==null?void 0:c.docs)==null?void 0:i.source}}};const E=["Standard"];export{o as Standard,E as __namedExportsOrder,R as default};
