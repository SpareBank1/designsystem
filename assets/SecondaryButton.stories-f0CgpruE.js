import{R as e}from"./index-DQDNmYQF.js";import{S as n}from"./SecondaryButton-Djc0LwPQ.js";import{a as k,b as y,c as f}from"./IconExamples-DKeTo_Gz.js";import{I as s}from"./Icon-BqsuuMcG.js";const b=a=>e.createElement("a",{...a},"Custom ",a.children),z={title:"Komponenter/Buttons/SecondaryButton",component:n,argTypes:{as:{options:["a","button","custom"],mapping:{"":"button",a:"a",button:"button",custom:b}},size:{options:["lg","md","sm"],control:{type:"radio"},description:"Størrelse på knappen, 'md' default"}}},r={args:{ariaLoadingMessage:"Vennligst vent...",isLoading:!1},render:a=>e.createElement(n,{...a},"Sekundærknapp")},t={args:{ariaLoadingMessage:"Vennligst vent...",isLoading:!1},render:a=>e.createElement("div",{className:"storybook-button-display-group"},e.createElement(n,{...a,size:"lg"},"Sekundærknapp"),e.createElement(n,{...a},"Sekundærknapp"),e.createElement(n,{...a,size:"sm"},"Sekundærknapp"))},o={args:{ariaLoadingMessage:"Vennligst vent...",isLoading:!1,iconOnly:!0},render:a=>e.createElement("div",{className:"storybook-button-display-group"},e.createElement(n,{...a,size:"lg","aria-label":"Stor sekundærknapp med ikon"},e.createElement(s,{fileUrl:k,size:"lg"})),e.createElement(n,{...a,size:"md","aria-label":"Vanlig sekundærknapp med ikon"},e.createElement(s,{fileUrl:y,size:"md"})),e.createElement(n,{...a,size:"sm","aria-label":"Liten sekundærknapp med ikon"},e.createElement(s,{fileUrl:f,size:"sm"})))};var i,d,c;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    ariaLoadingMessage: 'Vennligst vent...',
    isLoading: false
  },
  render: args => {
    return <SecondaryButton {...args}>Sekundærknapp</SecondaryButton>;
  }
}`,...(c=(d=r.parameters)==null?void 0:d.docs)==null?void 0:c.source}}};var l,m,p;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    ariaLoadingMessage: 'Vennligst vent...',
    isLoading: false
  },
  render: args => <div className="storybook-button-display-group">
            <SecondaryButton {...args} size="lg">
                Sekundærknapp
            </SecondaryButton>
            <SecondaryButton {...args}>Sekundærknapp</SecondaryButton>
            <SecondaryButton {...args} size="sm">
                Sekundærknapp
            </SecondaryButton>
        </div>
}`,...(p=(m=t.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};var u,g,S;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    ariaLoadingMessage: 'Vennligst vent...',
    isLoading: false,
    iconOnly: true
  },
  render: args => <div className="storybook-button-display-group">
            <SecondaryButton {...args} size="lg" aria-label="Stor sekundærknapp med ikon">
                <Icon fileUrl={addReactionIconLg} size="lg" />
            </SecondaryButton>
            <SecondaryButton {...args} size="md" aria-label="Vanlig sekundærknapp med ikon">
                <Icon fileUrl={addReactionIconMd} size="md" />
            </SecondaryButton>
            <SecondaryButton {...args} size="sm" aria-label="Liten sekundærknapp med ikon">
                <Icon fileUrl={addReactionIconSm} size="sm" />
            </SecondaryButton>
        </div>
}`,...(S=(g=o.parameters)==null?void 0:g.docs)==null?void 0:S.source}}};const B=["Standard","DifferentSizes","IconOnly"],M=Object.freeze(Object.defineProperty({__proto__:null,DifferentSizes:t,IconOnly:o,Standard:r,__namedExportsOrder:B,default:z},Symbol.toStringTag,{value:"Module"}));export{t as D,o as I,M as S,r as a};
