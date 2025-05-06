import{R as e}from"./index-DQDNmYQF.js";import{f as p,C as m}from"./Chip-cFLlwyzA.js";import{c as u}from"./index-QCImZZ3W.js";import{I as h}from"./Icon-BqsuuMcG.js";const M="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMjAiIHZpZXdCb3g9IjAgLTk2MCA5NjAgOTYwIiB3aWR0aD0iMjAiPjxwYXRoIGQ9Im0zODktMzY5IDI5OS0yOTlxMTAuOTA5LTExIDI1LjQ1NS0xMVE3MjgtNjc5IDczOS02NjhxMTEgMTEgMTEgMjUuNTgyIDAgMTQuNTgzLTEwLjYwNyAyNS4xODhMNDE1LTI5MnEtMTAuOTA5IDExLTI1LjQ1NSAxMVEzNzUtMjgxIDM2NC0yOTJMMjIxLTQzNXEtMTEtMTEtMTEtMjUuNXQxMS0yNS41cTExLTExIDI1LjY2Ny0xMSAxNC42NjYgMCAyNS4zMzMgMTFsMTE3IDExN1oiLz48L3N2Zz4=";function g(t,c){const{className:n,isSelected:l,...d}=t;return e.createElement(m,{ref:c,leftIcon:e.createElement(h,{size:"sm",fileUrl:M}),className:u(n,{"ffe-chip--selected":l}),...d})}const s=p(g);s.__docgenInfo={description:"",methods:[],displayName:"ChipSelectable",props:{as:{required:!1,tsType:{name:"As"},description:""},size:{required:!0,tsType:{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}]},description:"Size of chip"},onColoredBg:{required:!1,tsType:{name:"never"},description:`@deprecated as part of update to Semantic Colors

Use the \`ffe-accent-color\` class on the component or on the container of the component instead
[Read more in the upgrade guide](https://sparebank1.github.io/designsystem/?path=/docs/introduksjon-changelog--docs#2025---februar---semantiske-farger)`},isSelected:{required:!1,tsType:{name:"boolean"},description:"Whether this chips is selected"}}};const E={title:"Komponenter/Chips/ChipSelectable",component:s},a={args:{as:"button",size:"sm"},render:t=>e.createElement("div",{className:"ffe-button-display-group"},e.createElement(s,{...t},"Chip"),e.createElement(s,{...t,isSelected:!0},"Selected Chip"))};var r,i,o;a.parameters={...a.parameters,docs:{...(r=a.parameters)==null?void 0:r.docs,source:{originalSource:`{
  args: {
    as: 'button',
    size: 'sm'
  },
  render: args => <div className="ffe-button-display-group">
            <ChipSelectable {...args}>Chip</ChipSelectable>
            <ChipSelectable {...args} isSelected={true}>
                Selected Chip
            </ChipSelectable>
        </div>
}`,...(o=(i=a.parameters)==null?void 0:i.docs)==null?void 0:o.source}}};const I=["Standard"];export{a as Standard,I as __namedExportsOrder,E as default};
