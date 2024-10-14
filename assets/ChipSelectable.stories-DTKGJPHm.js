import{R as a}from"./index-RYns6xqu.js";import{f as M,C as S}from"./Chip-CzlxOE0a.js";import{c as T}from"./index-Dejnh_W_.js";import{I as f}from"./Icon-Dor7S2yd.js";import{f as N,s as E}from"./spacing-enBt7HlE.js";const I="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMjAiIHZpZXdCb3g9IjAgLTk2MCA5NjAgOTYwIiB3aWR0aD0iMjAiPjxwYXRoIGQ9Im0zODktMzY5IDI5OS0yOTlxMTAuOTA5LTExIDI1LjQ1NS0xMVE3MjgtNjc5IDczOS02NjhxMTEgMTEgMTEgMjUuNTgyIDAgMTQuNTgzLTEwLjYwNyAyNS4xODhMNDE1LTI5MnEtMTAuOTA5IDExLTI1LjQ1NSAxMVEzNzUtMjgxIDM2NC0yOTJMMjIxLTQzNXEtMTEtMTEtMTEtMjUuNXQxMS0yNS41cTExLTExIDI1LjY2Ny0xMSAxNC42NjYgMCAyNS4zMzMgMTFsMTE3IDExN1oiLz48L3N2Zz4=";function b(e,g){const{className:p,isSelected:n,...u}=e;return a.createElement(S,{ref:g,leftIcon:n?a.createElement(f,{size:"sm",fileUrl:I}):null,className:T(p,{"ffe-chip--selected":n}),...u})}const s=M(b);s.__docgenInfo={description:"",methods:[],displayName:"ChipSelectable",props:{as:{required:!1,tsType:{name:"As"},description:""},size:{required:!0,tsType:{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}]},description:"Size of chip"},onColoredBg:{required:!1,tsType:{name:"boolean"},description:"Adds alternative styling for better contrast on certain backgrounds"},isSelected:{required:!1,tsType:{name:"boolean"},description:"Whether this chips is selected"}}};const y={title:"components/chips/ChipSelectable",component:s},r={args:{as:"button",children:"Label",size:"sm"},render:e=>a.createElement(s,{...e})},t={args:{...r.args,onColoredBg:!0},decorators:[e=>a.createElement("div",{style:{background:N,padding:E}},a.createElement(e,null))],render:e=>a.createElement(s,{...e})};var o,l,c;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    as: 'button',
    children: 'Label',
    size: 'sm'
  },
  render: args => <ChipSelectable {...args} />
}`,...(c=(l=r.parameters)==null?void 0:l.docs)==null?void 0:c.source}}};var i,d,m;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(m=(d=t.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};const C=["Standard","OnColoredBg"],O=Object.freeze(Object.defineProperty({__proto__:null,OnColoredBg:t,Standard:r,__namedExportsOrder:C,default:y},Symbol.toStringTag,{value:"Module"}));export{O as C,r as S};
