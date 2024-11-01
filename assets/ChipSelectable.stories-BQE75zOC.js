import{R as s}from"./index-DJO9vBfz.js";import{f,C as S}from"./Chip-B-mu3z2Y.js";import{c as b}from"./index-i5X67GZP.js";import{f as h,s as C}from"./spacing-enBt7HlE.js";function y(e,p){const{className:m,isSelected:g,...u}=e;return s.createElement(S,{ref:p,className:b(m,{"ffe-chip--selected":g}),...u})}const t=f(y);t.__docgenInfo={description:"",methods:[],displayName:"ChipSelectable",props:{as:{required:!1,tsType:{name:"As"},description:""},size:{required:!0,tsType:{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}]},description:"Size of chip"},onColoredBg:{required:!1,tsType:{name:"boolean"},description:"Adds alternative styling for better contrast on certain backgrounds"},isSelected:{required:!1,tsType:{name:"boolean"},description:"Whether this chips is selected"}}};const v={title:"components/chips/ChipSelectable",component:t},r={args:{as:"button",children:"Label",size:"sm"},render:e=>s.createElement(t,{...e})},a={args:{...r.args,onColoredBg:!0},decorators:[e=>s.createElement("div",{style:{background:h,padding:C}},s.createElement(e,null))],render:e=>s.createElement(t,{...e})};var n,o,l;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    as: 'button',
    children: 'Label',
    size: 'sm'
  },
  render: args => <ChipSelectable {...args} />
}`,...(l=(o=r.parameters)==null?void 0:o.docs)==null?void 0:l.source}}};var c,d,i;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    ...Standard.args,
    onColoredBg: true
  },
  decorators: [OnColoredBgStory => <div style={{
    background: fargeFjell,
    padding: spacingXs
  }}>
                <OnColoredBgStory />
            </div>],
  render: args => <ChipSelectable {...args} />
}`,...(i=(d=a.parameters)==null?void 0:d.docs)==null?void 0:i.source}}};const _=["Standard","OnColoredBg"],T=Object.freeze(Object.defineProperty({__proto__:null,OnColoredBg:a,Standard:r,__namedExportsOrder:_,default:v},Symbol.toStringTag,{value:"Module"}));export{T as C,r as S};
