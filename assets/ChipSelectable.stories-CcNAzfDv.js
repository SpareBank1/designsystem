import{R as e}from"./index-DQDNmYQF.js";import{f as p,C as m}from"./Chip-cFLlwyzA.js";import{c as S}from"./index-QCImZZ3W.js";import{I as h}from"./Icon-BqsuuMcG.js";const u="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMjAiIHZpZXdCb3g9IjAgLTk2MCA5NjAgOTYwIiB3aWR0aD0iMjAiPjxwYXRoIGQ9Im0zODktMzY5IDI5OS0yOTlxMTAuOTA5LTExIDI1LjQ1NS0xMVE3MjgtNjc5IDczOS02NjhxMTEgMTEgMTEgMjUuNTgyIDAgMTQuNTgzLTEwLjYwNyAyNS4xODhMNDE1LTI5MnEtMTAuOTA5IDExLTI1LjQ1NSAxMVEzNzUtMjgxIDM2NC0yOTJMMjIxLTQzNXEtMTEtMTEtMTEtMjUuNXQxMS0yNS41cTExLTExIDI1LjY2Ny0xMSAxNC42NjYgMCAyNS4zMzMgMTFsMTE3IDExN1oiLz48L3N2Zz4=";function M(t,s){const{className:o,isSelected:a,...r}=t;return e.createElement(m,{ref:s,leftIcon:e.createElement(h,{size:"sm",fileUrl:u}),className:S(o,{"ffe-chip--selected":a}),...r})}const i=p(M);i.__docgenInfo={description:"",methods:[],displayName:"ChipSelectable",props:{as:{required:!1,tsType:{name:"As"},description:""},size:{required:!0,tsType:{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}]},description:"Size of chip"},onColoredBg:{required:!1,tsType:{name:"never"},description:`@deprecated as part of update to Semantic Colors

Use the \`ffe-accent-color\` class on the component or on the container of the component instead
[Read more in the upgrade guide](https://sparebank1.github.io/designsystem/?path=/docs/introduksjon-changelog--docs#2025---februar---semantiske-farger)`},isSelected:{required:!1,tsType:{name:"boolean"},description:"Whether this chips is selected"}}};const f={title:"Komponenter/Chips/ChipSelectable",component:i},c={args:{as:"button",size:"sm"},render:t=>{const[s,o]=e.useState(!1),[a,r]=e.useState(!0);return e.createElement("div",{className:"storybook-button-display-group"},e.createElement(i,{...t,isSelected:s,onClick:()=>o(!s)},"Chip"),e.createElement(i,{...t,isSelected:a,onClick:()=>r(!a)},"Selected Chip"))}};var l,n,d;c.parameters={...c.parameters,docs:{...(l=c.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    as: 'button',
    size: 'sm'
  },
  render: args => {
    const [chip1Selected, setChip1Selected] = React.useState(false);
    const [chip2Selected, setChip2Selected] = React.useState(true);
    return <div className="storybook-button-display-group">
                <ChipSelectable {...args} isSelected={chip1Selected} onClick={() => setChip1Selected(!chip1Selected)}>
                    Chip
                </ChipSelectable>
                <ChipSelectable {...args} isSelected={chip2Selected} onClick={() => setChip2Selected(!chip2Selected)}>
                    Selected Chip
                </ChipSelectable>
            </div>;
  }
}`,...(d=(n=c.parameters)==null?void 0:n.docs)==null?void 0:d.source}}};const E=["Standard"];export{c as Standard,E as __namedExportsOrder,f as default};
