import{R as e}from"./index-DQDNmYQF.js";import{T as t}from"./TertiaryButton-C7aKO4jv.js";import{b as T,a as k,c as b}from"./IconExamples-FQjkwCcj.js";import{I as i}from"./Icon-BqsuuMcG.js";const z=r=>e.createElement("a",{...r},"Custom ",r.children),B={title:"Komponenter/Buttons/TertiaryButton",component:t,argTypes:{as:{options:["a","button","custom"],mapping:{"":"button",a:"a",button:"button",custom:z}}}},a={args:{},render:r=>e.createElement(t,{...r},"Tertiærknapp")},n={args:{},render:r=>e.createElement("div",{className:"storybook-button-display-group"},e.createElement(t,{...r,size:"lg"},"Stor tertiærknapp"),e.createElement(t,{...r},"Tertiærknapp"),e.createElement(t,{...r,size:"sm"},"Liten tertiærknapp"))},o={args:{iconOnly:!0},render:r=>e.createElement("div",{className:"storybook-button-display-group"},e.createElement(t,{...r,size:"lg","aria-label":"Stor tertiærknapp med ikon"},e.createElement(i,{fileUrl:T,size:"lg"})),e.createElement(t,{...r,size:"md","aria-label":"Vanlig tertiærknapp med ikon"},e.createElement(i,{fileUrl:k,size:"md"})),e.createElement(t,{...r,size:"sm","aria-label":"Liten tertiærknapp med ikon"},e.createElement(i,{fileUrl:b,size:"sm"})))};var s,c,l;a.parameters={...a.parameters,docs:{...(s=a.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {},
  render: args => <TertiaryButton {...args}>Tertiærknapp</TertiaryButton>
}`,...(l=(c=a.parameters)==null?void 0:c.docs)==null?void 0:l.source}}};var m,p,d;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {},
  render: args => {
    return <div className="storybook-button-display-group">
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
    iconOnly: true
  },
  render: args => <div className="storybook-button-display-group">
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
}`,...(y=(g=o.parameters)==null?void 0:g.docs)==null?void 0:y.source}}};const f=["Standard","DifferentSizes","IconOnly"],v=Object.freeze(Object.defineProperty({__proto__:null,DifferentSizes:n,IconOnly:o,Standard:a,__namedExportsOrder:f,default:B},Symbol.toStringTag,{value:"Module"}));export{n as D,o as I,a as S,v as T};
