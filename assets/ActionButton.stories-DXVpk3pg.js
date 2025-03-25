import{R as e}from"./index-DQDNmYQF.js";import{B as b}from"./BaseButton-BWQWHdxR.js";import{f as B}from"./fixedForwardRef-DqyCgkTx.js";import{a as k,b as z,c as L}from"./IconExamples-DKeTo_Gz.js";import{I as s}from"./Icon-BqsuuMcG.js";function S(t,A){return e.createElement(b,{...t,ref:A,buttonType:"action"})}const n=B(S);n.__docgenInfo={description:"",methods:[],displayName:"ActionButton"};const v=t=>e.createElement("a",{...t},"Custom ",t.children),y={title:"Komponenter/Buttons/ActionButton",component:n,argTypes:{as:{options:["a","button","custom"],mapping:{"":"a",a:"a",button:"button",custom:v}},size:{options:["lg","md","sm"],control:{type:"radio"},description:"Størrelse på knappen, 'md' default"}}},a={args:{as:"button",ariaLoadingMessage:"Vennligst vent...",isLoading:!1},render:t=>e.createElement("div",{className:"ffe-button-display-group"},e.createElement(n,{...t},"Actionknapp"))},o={args:{as:"button",ariaLoadingMessage:"Vennligst vent...",isLoading:!1},render:t=>e.createElement("div",{className:"ffe-button-display-group"},e.createElement(n,{...t,size:"lg"},"Stor Actionknapp"),e.createElement(n,{...t},"Actionknapp"),e.createElement(n,{...t,size:"sm"},"Liten Actionknapp"))},i={args:{as:"button",ariaLoadingMessage:"Vennligst vent...",isLoading:!1,iconOnly:!0},render:t=>e.createElement("div",{className:"ffe-button-display-group"},e.createElement(n,{...t,size:"lg","aria-label":"Stor actionknapp med ikon"},e.createElement(s,{fileUrl:k,size:"lg"})),e.createElement(n,{...t,size:"md","aria-label":"Vanlig actionknapp med ikon"},e.createElement(s,{fileUrl:z,size:"md"})),e.createElement(n,{...t,size:"sm","aria-label":"Liten actionknapp med ikon"},e.createElement(s,{fileUrl:L,size:"sm"})))};var r,c,l;a.parameters={...a.parameters,docs:{...(r=a.parameters)==null?void 0:r.docs,source:{originalSource:`{
  args: {
    as: 'button',
    ariaLoadingMessage: 'Vennligst vent...',
    isLoading: false
  },
  render: args => {
    return <div className="ffe-button-display-group">
                <ActionButton {...args}>Actionknapp</ActionButton>
            </div>;
  }
}`,...(l=(c=a.parameters)==null?void 0:c.docs)==null?void 0:l.source}}};var d,m,p;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    as: 'button',
    ariaLoadingMessage: 'Vennligst vent...',
    isLoading: false
  },
  render: args => {
    return <div className="ffe-button-display-group">
                <ActionButton {...args} size="lg">
                    Stor Actionknapp
                </ActionButton>
                <ActionButton {...args}>Actionknapp</ActionButton>
                <ActionButton {...args} size="sm">
                    Liten Actionknapp
                </ActionButton>
            </div>;
  }
}`,...(p=(m=o.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};var u,g,f;i.parameters={...i.parameters,docs:{...(u=i.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    as: 'button',
    ariaLoadingMessage: 'Vennligst vent...',
    isLoading: false,
    iconOnly: true
  },
  render: args => <div className="ffe-button-display-group">
            <ActionButton {...args} size="lg" aria-label="Stor actionknapp med ikon">
                <Icon fileUrl={addReactionIconLg} size="lg" />
            </ActionButton>
            <ActionButton {...args} size="md" aria-label="Vanlig actionknapp med ikon">
                <Icon fileUrl={addReactionIconMd} size="md" />
            </ActionButton>
            <ActionButton {...args} size="sm" aria-label="Liten actionknapp med ikon">
                <Icon fileUrl={addReactionIconSm} size="sm" />
            </ActionButton>
        </div>
}`,...(f=(g=i.parameters)==null?void 0:g.docs)==null?void 0:f.source}}};const E=["Standard","DifferentSizes","IconOnly"],N=Object.freeze(Object.defineProperty({__proto__:null,DifferentSizes:o,IconOnly:i,Standard:a,__namedExportsOrder:E,default:y},Symbol.toStringTag,{value:"Module"}));export{N as A,o as D,i as I,a as S};
