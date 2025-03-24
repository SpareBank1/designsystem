import{R as e}from"./index-DQDNmYQF.js";import{S as n}from"./SecondaryButton-BdySsNiw.js";import{a as f,b as y,c as b}from"./IconExamples-DKeTo_Gz.js";import{I as s}from"./Icon-BqsuuMcG.js";const z=a=>e.createElement("a",{...a},"Custom ",a.children),B={title:"Komponenter/Buttons/SecondaryButton",component:n,argTypes:{as:{options:["a","button","custom"],mapping:{"":"button",a:"a",button:"button",custom:z}},size:{options:["lg","md","sm"],control:{type:"radio"},description:"Størrelse på knappen, 'md' default"}}},t={args:{as:"button",ariaLoadingMessage:"Vennligst vent...",isLoading:!1},render:a=>e.createElement("div",{className:"ffe-button-display-group"},e.createElement(n,{...a},"Sekundærknapp"))},r={args:{as:"button",ariaLoadingMessage:"Vennligst vent...",isLoading:!1},render:a=>e.createElement("div",{className:"ffe-button-display-group"},e.createElement(n,{...a,size:"lg"},"Sekundærknapp"),e.createElement(n,{...a},"Sekundærknapp"),e.createElement(n,{...a,size:"sm"},"Sekundærknapp"))},o={args:{as:"button",ariaLoadingMessage:"Vennligst vent...",isLoading:!1,iconOnly:!0},render:a=>e.createElement("div",{className:"ffe-button-display-group"},e.createElement(n,{...a,size:"lg"},e.createElement(s,{fileUrl:f,size:"lg"})),e.createElement(n,{...a,size:"md"},e.createElement(s,{fileUrl:y,size:"md"})),e.createElement(n,{...a,size:"sm"},e.createElement(s,{fileUrl:b,size:"sm"})))};var i,d,c;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    as: 'button',
    ariaLoadingMessage: 'Vennligst vent...',
    isLoading: false
  },
  render: args => {
    return <div className="ffe-button-display-group">
                <SecondaryButton {...args}>Sekundærknapp</SecondaryButton>
            </div>;
  }
}`,...(c=(d=t.parameters)==null?void 0:d.docs)==null?void 0:c.source}}};var l,u,m;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    as: 'button',
    ariaLoadingMessage: 'Vennligst vent...',
    isLoading: false
  },
  render: args => <div className="ffe-button-display-group">
            <SecondaryButton {...args} size="lg">
                Sekundærknapp
            </SecondaryButton>
            <SecondaryButton {...args}>Sekundærknapp</SecondaryButton>
            <SecondaryButton {...args} size="sm">
                Sekundærknapp
            </SecondaryButton>
        </div>
}`,...(m=(u=r.parameters)==null?void 0:u.docs)==null?void 0:m.source}}};var g,p,S;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    as: 'button',
    ariaLoadingMessage: 'Vennligst vent...',
    isLoading: false,
    iconOnly: true
  },
  render: args => <div className="ffe-button-display-group">
            <SecondaryButton {...args} size="lg">
                <Icon fileUrl={addReactionIconLg} size="lg" />
            </SecondaryButton>
            <SecondaryButton {...args} size="md">
                <Icon fileUrl={addReactionIconMd} size="md" />
            </SecondaryButton>
            <SecondaryButton {...args} size="sm">
                <Icon fileUrl={addReactionIconSm} size="sm" />
            </SecondaryButton>
        </div>
}`,...(S=(p=o.parameters)==null?void 0:p.docs)==null?void 0:S.source}}};const k=["Standard","DifferentSizes","IconOnly"],M=Object.freeze(Object.defineProperty({__proto__:null,DifferentSizes:r,IconOnly:o,Standard:t,__namedExportsOrder:k,default:B},Symbol.toStringTag,{value:"Module"}));export{r as D,o as I,M as S,t as a};
