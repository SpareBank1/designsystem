import{R as e}from"./index-DQDNmYQF.js";import{f as C,C as u}from"./Chip-CNtq77rR.js";import{c as f}from"./index-D2FocPV0.js";import{I as M}from"./Icon-D_nm5xPy.js";const g="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMjAiIHZpZXdCb3g9IjAgLTk2MCA5NjAgOTYwIiB3aWR0aD0iMjAiPjxwYXRoIGQ9Im0zODktMzY5IDI5OS0yOTlxMTAuOTA5LTExIDI1LjQ1NS0xMVE3MjgtNjc5IDczOS02NjhxMTEgMTEgMTEgMjUuNTgyIDAgMTQuNTgzLTEwLjYwNyAyNS4xODhMNDE1LTI5MnEtMTAuOTA5IDExLTI1LjQ1NSAxMVEzNzUtMjgxIDM2NC0yOTJMMjIxLTQzNXEtMTEtMTEtMTEtMjUuNXQxMS0yNS41cTExLTExIDI1LjY2Ny0xMSAxNC42NjYgMCAyNS4zMzMgMTFsMTE3IDExN1oiLz48L3N2Zz4=";function T(t,i){const{className:a,isSelected:s,...n}=t;return e.createElement(u,{ref:i,leftIcon:e.createElement(M,{size:"sm",fileUrl:g}),className:f(a,{"ffe-chip--selectable":!s,"ffe-chip--selected":s}),...n})}const c=C(T);c.__docgenInfo={description:"",methods:[],displayName:"ChipSelectable",props:{as:{required:!1,tsType:{name:"As"},description:""},size:{required:!0,tsType:{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}]},description:"Size of chip"},onColoredBg:{required:!1,tsType:{name:"never"},description:`@deprecated as part of update to Semantic Colors

Use the \`ffe-accent-color\` class on the component or on the container of the component instead
[Read more in the upgrade guide](https://sparebank1.github.io/designsystem/?path=/docs/introduksjon-changelog--docs#2025---februar---semantiske-farger)`},isSelected:{required:!1,tsType:{name:"boolean"},description:"Whether this chips is selected"}}};const b={title:"Komponenter/Chips/ChipSelectable",component:c},l={args:{as:"button",size:"sm"},render:t=>{const[i,a]=e.useState(!1),[s,n]=e.useState(!0),[p,h]=e.useState(!1),[r,m]=e.useState(!0);return e.createElement("div",{style:{display:"flex",gap:"8px",flexWrap:"wrap"}},e.createElement(c,{...t,isSelected:i,onClick:()=>a(!i)},"Chip"),e.createElement(c,{...t,isSelected:s,onClick:()=>n(!s)},"Selected Chip"),e.createElement(c,{...t,isSelected:p,onClick:()=>h(!p)},"Chip"),e.createElement(c,{...t,isSelected:r,onClick:()=>m(!r)},"Chip"))}};var d,o,S;l.parameters={...l.parameters,docs:{...(d=l.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    as: 'button',
    size: 'sm'
  },
  render: args => {
    const [chip1Selected, setChip1Selected] = React.useState(false);
    const [chip2Selected, setChip2Selected] = React.useState(true);
    const [chip3Selected, setChip3Selected] = React.useState(false);
    const [chip4Selected, setChip4Selected] = React.useState(true);
    return <div style={{
      display: 'flex',
      gap: '8px',
      flexWrap: 'wrap'
    }}>
                <ChipSelectable {...args} isSelected={chip1Selected} onClick={() => setChip1Selected(!chip1Selected)}>
                    Chip
                </ChipSelectable>
                <ChipSelectable {...args} isSelected={chip2Selected} onClick={() => setChip2Selected(!chip2Selected)}>
                    Selected Chip
                </ChipSelectable>
                <ChipSelectable {...args} isSelected={chip3Selected} onClick={() => setChip3Selected(!chip3Selected)}>
                    Chip
                </ChipSelectable>
                <ChipSelectable {...args} isSelected={chip4Selected} onClick={() => setChip4Selected(!chip4Selected)}>
                    Chip
                </ChipSelectable>
            </div>;
  }
}`,...(S=(o=l.parameters)==null?void 0:o.docs)==null?void 0:S.source}}};const y=["Standard"];export{l as Standard,y as __namedExportsOrder,b as default};
