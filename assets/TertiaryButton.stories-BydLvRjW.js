import{R as e}from"./index-DQDNmYQF.js";import{T as r}from"./TertiaryButton-C7aKO4jv.js";import{a as f,b as T,c as b}from"./IconExamples-DKeTo_Gz.js";import{I as i}from"./Icon-BqsuuMcG.js";const k=t=>e.createElement("a",{...t},"Custom ",t.children),z={title:"Komponenter/Buttons/TertiaryButton",component:r,argTypes:{as:{options:["a","button","custom"],mapping:{"":"button",a:"a",button:"button",custom:k}}}},a={args:{as:"button"},render:t=>e.createElement(r,{...t},"Tertiærknapp")},n={args:{as:"button"},render:t=>e.createElement("div",{className:"ffe-button-display-group"},e.createElement(r,{...t,size:"lg"},"Stor tertiærknapp"),e.createElement(r,{...t},"Tertiærknapp"),e.createElement(r,{...t,size:"sm"},"Liten tertiærknapp"))},o={args:{as:"button",iconOnly:!0},render:t=>e.createElement("div",{className:"ffe-button-display-group"},e.createElement(r,{...t,size:"lg","aria-label":"Stor tertiærknapp med ikon"},e.createElement(i,{fileUrl:f,size:"lg"})),e.createElement(r,{...t,size:"md","aria-label":"Vanlig tertiærknapp med ikon"},e.createElement(i,{fileUrl:T,size:"md"})),e.createElement(r,{...t,size:"sm","aria-label":"Liten tertiærknapp med ikon"},e.createElement(i,{fileUrl:b,size:"sm"})))};var s,c,l;a.parameters={...a.parameters,docs:{...(s=a.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    as: 'button'
  },
  render: args => <TertiaryButton {...args}>Tertiærknapp</TertiaryButton>
}`,...(l=(c=a.parameters)==null?void 0:c.docs)==null?void 0:l.source}}};var m,p,d;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    as: 'button'
  },
  render: args => {
    return <div className="ffe-button-display-group">
                <TertiaryButton {...args} size="lg">
                    Stor tertiærknapp
                </TertiaryButton>
                <TertiaryButton {...args}>Tertiærknapp</TertiaryButton>
                <TertiaryButton {...args} size="sm">
                    Liten tertiærknapp
                </TertiaryButton>
            </div>;
  }
}`,...(d=(p=n.parameters)==null?void 0:p.docs)==null?void 0:d.source}}};var u,g,y;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    as: 'button',
    iconOnly: true
  },
  render: args => <div className="ffe-button-display-group">
            <TertiaryButton {...args} size="lg" aria-label="Stor tertiærknapp med ikon">
                <Icon fileUrl={addReactionIconLg} size="lg" />
            </TertiaryButton>
            <TertiaryButton {...args} size="md" aria-label="Vanlig tertiærknapp med ikon">
                <Icon fileUrl={addReactionIconMd} size="md" />
            </TertiaryButton>
            <TertiaryButton {...args} size="sm" aria-label="Liten tertiærknapp med ikon">
                <Icon fileUrl={addReactionIconSm} size="sm" />
            </TertiaryButton>
        </div>
}`,...(y=(g=o.parameters)==null?void 0:g.docs)==null?void 0:y.source}}};const B=["Standard","DifferentSizes","IconOnly"],v=Object.freeze(Object.defineProperty({__proto__:null,DifferentSizes:n,IconOnly:o,Standard:a,__namedExportsOrder:B,default:z},Symbol.toStringTag,{value:"Module"}));export{n as D,o as I,a as S,v as T};
