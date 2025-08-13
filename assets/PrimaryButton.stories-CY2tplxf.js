import{R as e}from"./index-DQDNmYQF.js";import{P as r}from"./PrimaryButton-CZj_A1Ft.js";import{a as b,b as z,c as L}from"./IconExamples-FQjkwCcj.js";import{I as i}from"./Icon-D_nm5xPy.js";const I=a=>e.createElement("a",{...a},"Custom ",a.children),S={title:"Komponenter/Buttons/PrimaryButton",component:r,argTypes:{as:{options:["a","button","custom"],mapping:{"":"button",a:"a",button:"button",custom:I}},size:{options:["lg","md","sm"],control:{type:"radio"},description:"Størrelse på knappen, 'md' default"}}},t={args:{ariaLoadingMessage:"Vennligst vent...",isLoading:!1},render:a=>e.createElement(r,{...a},"Primary Button")},n={args:{ariaLoadingMessage:"Vennligst vent...",isLoading:!1},render:a=>e.createElement(r,{...a,leftIcon:e.createElement(i,{fileUrl:b,size:"md"})},"Primary Button")},o={args:{ariaLoadingMessage:"Vennligst vent...",isLoading:!1},render:a=>e.createElement("div",{className:"storybook-button-display-group"},e.createElement(r,{...a,size:"lg"},"Stor knapp"),e.createElement(r,{...a},"Default knapp"),e.createElement(r,{...a,size:"sm"},"Liten knapp"))},s={args:{ariaLoadingMessage:"Vennligst vent...",isLoading:!1,iconOnly:!0},render:a=>e.createElement("div",{className:"storybook-button-display-group"},e.createElement(r,{...a,size:"lg","aria-label":"Stor primærknapp med ikon"},e.createElement(i,{fileUrl:z,size:"lg"})),e.createElement(r,{...a,size:"md","aria-label":"Vanlig primærknapp med ikon"},e.createElement(i,{fileUrl:b,size:"md"})),e.createElement(r,{...a,size:"sm","aria-label":"Liten primærknapp med ikon"},e.createElement(i,{fileUrl:L,size:"sm"})))};var m,l,d;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    ariaLoadingMessage: 'Vennligst vent...',
    isLoading: false
  },
  render: args => <PrimaryButton {...args}>Primary Button</PrimaryButton>
}`,...(d=(l=t.parameters)==null?void 0:l.docs)==null?void 0:d.source}}};var c,p,g;n.parameters={...n.parameters,docs:{...(c=n.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    ariaLoadingMessage: 'Vennligst vent...',
    isLoading: false
  },
  render: args => <PrimaryButton {...args} leftIcon={<Icon fileUrl={addReactionIconMd} size="md" />}>
            Primary Button
        </PrimaryButton>
}`,...(g=(p=n.parameters)==null?void 0:p.docs)==null?void 0:g.source}}};var u,y,f;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(f=(y=o.parameters)==null?void 0:y.docs)==null?void 0:f.source}}};var P,B,k;s.parameters={...s.parameters,docs:{...(P=s.parameters)==null?void 0:P.docs,source:{originalSource:`{
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
}`,...(k=(B=s.parameters)==null?void 0:B.docs)==null?void 0:k.source}}};const E=["Standard","WithIcon","DifferentSizes","IconOnly"],U=Object.freeze(Object.defineProperty({__proto__:null,DifferentSizes:o,IconOnly:s,Standard:t,WithIcon:n,__namedExportsOrder:E,default:S},Symbol.toStringTag,{value:"Module"}));export{o as D,s as I,U as P,t as S};
