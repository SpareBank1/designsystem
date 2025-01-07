import{R as n}from"./index-ne9I_3bB.js";import{C as o}from"./Chip-DL8SQ9Vw.js";import{f as i,s as p}from"./spacing-enBt7HlE.js";const m={title:"Komponenter/Chips/Chip",component:o},e={args:{as:"button",children:"Label",size:"sm"},render:r=>n.createElement(o,{...r})},a={args:{...e.args,onColoredBg:!0},decorators:[r=>n.createElement("div",{style:{background:i,padding:p}},n.createElement(r,null))],render:r=>n.createElement(o,{...r})};var s,t,d;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    as: 'button',
    children: 'Label',
    size: 'sm'
  },
  render: args => <Chip {...args} />
}`,...(d=(t=e.parameters)==null?void 0:t.docs)==null?void 0:d.source}}};var c,l,g;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
  render: args => <Chip {...args} />
}`,...(g=(l=a.parameters)==null?void 0:l.docs)==null?void 0:g.source}}};const u=["Standard","OnColoredBg"],f=Object.freeze(Object.defineProperty({__proto__:null,OnColoredBg:a,Standard:e,__namedExportsOrder:u,default:m},Symbol.toStringTag,{value:"Module"}));export{f as C,e as S};
