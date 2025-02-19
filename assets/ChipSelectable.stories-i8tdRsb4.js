import{R as o}from"./index-eCxJ45ll.js";import{f as p,C as m}from"./Chip--1SPWlJF.js";import{c as h}from"./index-DezCrw0f.js";function u(t,i){const{className:c,isSelected:l,...d}=t;return o.createElement(m,{ref:i,className:h(c,{"ffe-chip--selected":l}),...d})}const a=p(u);a.__docgenInfo={description:"",methods:[],displayName:"ChipSelectable",props:{as:{required:!1,tsType:{name:"As"},description:""},size:{required:!0,tsType:{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}]},description:"Size of chip"},onColoredBg:{required:!1,tsType:{name:"never"},description:`@deprecated as part of update to Semantic Colors

Use the \`ffe-accent-color\` class on the component or on the container of the component instead
[Read more in the upgrade guide](https://sparebank1.github.io/designsystem/?path=/docs/introduksjon-changelog--docs#2025---februar---semantiske-farger)`},isSelected:{required:!1,tsType:{name:"boolean"},description:"Whether this chips is selected"}}};const f={title:"Komponenter/Chips/ChipSelectable",component:a},e={args:{as:"button",children:"Label",size:"sm"},render:t=>o.createElement(a,{...t})};var r,s,n;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`{
  args: {
    as: 'button',
    children: 'Label',
    size: 'sm'
  },
  render: args => <ChipSelectable {...args} />
}`,...(n=(s=e.parameters)==null?void 0:s.docs)==null?void 0:n.source}}};const g=["Standard"],y=Object.freeze(Object.defineProperty({__proto__:null,Standard:e,__namedExportsOrder:g,default:f},Symbol.toStringTag,{value:"Module"}));export{y as C,e as S};
