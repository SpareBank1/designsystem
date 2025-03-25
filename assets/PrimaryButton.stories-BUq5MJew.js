import{R as e}from"./index-DQDNmYQF.js";import{P as r}from"./PrimaryButton-woHESu9v.js";import{a as y,b,c as P}from"./IconExamples-DKeTo_Gz.js";import{I as o}from"./Icon-BqsuuMcG.js";const z=a=>e.createElement("a",{...a},"Custom ",a.children),B={title:"Komponenter/Buttons/PrimaryButton",component:r,argTypes:{as:{options:["a","button","custom"],mapping:{"":"button",a:"a",button:"button",custom:z}},size:{options:["lg","md","sm"],control:{type:"radio"},description:"Størrelse på knappen, 'md' default"}}},t={args:{as:"button",ariaLoadingMessage:"Vennligst vent...",isLoading:!1},render:a=>e.createElement(r,{...a},"Primary Button")},n={args:{as:"button",ariaLoadingMessage:"Vennligst vent...",isLoading:!1},render:a=>e.createElement("div",{className:"ffe-button-display-group"},e.createElement(r,{...a,size:"lg"},"Stor knapp"),e.createElement(r,{...a},"Default knapp"),e.createElement(r,{...a,size:"sm"},"Liten knapp"))},s={args:{as:"button",ariaLoadingMessage:"Vennligst vent...",isLoading:!1,iconOnly:!0},render:a=>e.createElement("div",{className:"ffe-button-display-group"},e.createElement(r,{...a,size:"lg","aria-label":"Stor primærknapp med ikon"},e.createElement(o,{fileUrl:y,size:"lg"})),e.createElement(r,{...a,size:"md","aria-label":"Vanlig primærknapp med ikon"},e.createElement(o,{fileUrl:b,size:"md"})),e.createElement(r,{...a,size:"sm","aria-label":"Liten primærknapp med ikon"},e.createElement(o,{fileUrl:P,size:"sm"})))};var i,m,l;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    as: 'button',
    ariaLoadingMessage: 'Vennligst vent...',
    isLoading: false
  },
  render: args => <PrimaryButton {...args}>Primary Button</PrimaryButton>
}`,...(l=(m=t.parameters)==null?void 0:m.docs)==null?void 0:l.source}}};var d,c,p;n.parameters={...n.parameters,docs:{...(d=n.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    as: 'button',
    ariaLoadingMessage: 'Vennligst vent...',
    isLoading: false
  },
  render: args => <div className="ffe-button-display-group">
            <PrimaryButton {...args} size="lg">
                Stor knapp
            </PrimaryButton>
            <PrimaryButton {...args}>Default knapp</PrimaryButton>
            <PrimaryButton {...args} size="sm">
                Liten knapp
            </PrimaryButton>
        </div>
}`,...(p=(c=n.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};var u,g,f;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    as: 'button',
    ariaLoadingMessage: 'Vennligst vent...',
    isLoading: false,
    iconOnly: true
  },
  render: args => <div className="ffe-button-display-group">
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
}`,...(f=(g=s.parameters)==null?void 0:g.docs)==null?void 0:f.source}}};const k=["Standard","DifferentSizes","IconOnly"],v=Object.freeze(Object.defineProperty({__proto__:null,DifferentSizes:n,IconOnly:s,Standard:t,__namedExportsOrder:k,default:B},Symbol.toStringTag,{value:"Module"}));export{n as D,s as I,v as P,t as S};
