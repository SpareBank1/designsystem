import{R as e}from"./index-DQDNmYQF.js";import{P as r}from"./PrimaryButton-woHESu9v.js";import{a as f,b as k,c as b}from"./IconExamples-DKeTo_Gz.js";import{I as s}from"./Icon-BqsuuMcG.js";const P=a=>e.createElement("a",{...a},"Custom ",a.children),z={title:"Komponenter/Buttons/PrimaryButton",component:r,argTypes:{as:{options:["a","button","custom"],mapping:{"":"button",a:"a",button:"button",custom:P}},size:{options:["lg","md","sm"],control:{type:"radio"},description:"Størrelse på knappen, 'md' default"}}},t={args:{ariaLoadingMessage:"Vennligst vent...",isLoading:!1},render:a=>e.createElement(r,{...a},"Primary Button")},n={args:{ariaLoadingMessage:"Vennligst vent...",isLoading:!1},render:a=>e.createElement("div",{className:"storybook-button-display-group"},e.createElement(r,{...a,size:"lg"},"Stor knapp"),e.createElement(r,{...a},"Default knapp"),e.createElement(r,{...a,size:"sm"},"Liten knapp"))},o={args:{ariaLoadingMessage:"Vennligst vent...",isLoading:!1,iconOnly:!0},render:a=>e.createElement("div",{className:"storybook-button-display-group"},e.createElement(r,{...a,size:"lg","aria-label":"Stor primærknapp med ikon"},e.createElement(s,{fileUrl:f,size:"lg"})),e.createElement(r,{...a,size:"md","aria-label":"Vanlig primærknapp med ikon"},e.createElement(s,{fileUrl:k,size:"md"})),e.createElement(r,{...a,size:"sm","aria-label":"Liten primærknapp med ikon"},e.createElement(s,{fileUrl:b,size:"sm"})))};var i,m,l;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    ariaLoadingMessage: 'Vennligst vent...',
    isLoading: false
  },
  render: args => <PrimaryButton {...args}>Primary Button</PrimaryButton>
}`,...(l=(m=t.parameters)==null?void 0:m.docs)==null?void 0:l.source}}};var d,c,p;n.parameters={...n.parameters,docs:{...(d=n.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    ariaLoadingMessage: 'Vennligst vent...',
    isLoading: false
  },
  render: args => <div className="storybook-button-display-group">
            <PrimaryButton {...args} size="lg">
                Stor knapp
            </PrimaryButton>
            <PrimaryButton {...args}>Default knapp</PrimaryButton>
            <PrimaryButton {...args} size="sm">
                Liten knapp
            </PrimaryButton>
        </div>
}`,...(p=(c=n.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};var g,u,y;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    ariaLoadingMessage: 'Vennligst vent...',
    isLoading: false,
    iconOnly: true
  },
  render: args => <div className="storybook-button-display-group">
            <PrimaryButton {...args} size="lg" aria-label="Stor primærknapp med ikon">
                <Icon fileUrl={addReactionIconLg} size="lg" />
            </PrimaryButton>
            <PrimaryButton {...args} size="md" aria-label="Vanlig primærknapp med ikon">
                <Icon fileUrl={addReactionIconMd} size="md" />
            </PrimaryButton>
            <PrimaryButton {...args} size="sm" aria-label="Liten primærknapp med ikon">
                <Icon fileUrl={addReactionIconSm} size="sm" />
            </PrimaryButton>
        </div>
}`,...(y=(u=o.parameters)==null?void 0:u.docs)==null?void 0:y.source}}};const B=["Standard","DifferentSizes","IconOnly"],v=Object.freeze(Object.defineProperty({__proto__:null,DifferentSizes:n,IconOnly:o,Standard:t,__namedExportsOrder:B,default:z},Symbol.toStringTag,{value:"Module"}));export{n as D,o as I,v as P,t as S};
