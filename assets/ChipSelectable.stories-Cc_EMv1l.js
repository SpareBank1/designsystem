import{R as l}from"./index-ne9I_3bB.js";import{f as m,C as p}from"./Chip-C-kB24Q_.js";import{c as u}from"./index-B6-3w37c.js";function f(a,o){const{className:i,isSelected:c,...d}=a;return l.createElement(p,{ref:o,className:u(i,{"ffe-chip--selected":c}),...d})}const r=m(f);r.__docgenInfo={description:"",methods:[],displayName:"ChipSelectable",props:{as:{required:!1,tsType:{name:"As"},description:""},size:{required:!0,tsType:{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}]},description:"Size of chip"},isSelected:{required:!1,tsType:{name:"boolean"},description:"Whether this chips is selected"}}};const h={title:"Komponenter/Chips/ChipSelectable",component:r},e={args:{as:"button",children:"Label",size:"sm"},render:a=>l.createElement(r,{...a})};var s,t,n;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    as: 'button',
    children: 'Label',
    size: 'sm'
  },
  render: args => <ChipSelectable {...args} />
}`,...(n=(t=e.parameters)==null?void 0:t.docs)==null?void 0:n.source}}};const S=["Standard"],_=Object.freeze(Object.defineProperty({__proto__:null,Standard:e,__namedExportsOrder:S,default:h},Symbol.toStringTag,{value:"Module"}));export{_ as C,e as S};
