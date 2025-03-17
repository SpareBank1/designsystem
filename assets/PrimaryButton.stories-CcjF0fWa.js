import{R as e}from"./index-eCxJ45ll.js";import{P as t}from"./PrimaryButton-DkjQ1X0s.js";import{a as y,b as P,c as z}from"./IconExamples-DKeTo_Gz.js";import{I as o}from"./Icon-B88nEPeu.js";const B=a=>e.createElement("a",{...a},"Custom ",a.children),b={title:"Komponenter/Buttons/PrimaryButton",component:t,argTypes:{as:{options:["a","button","custom"],mapping:{"":"button",a:"a",button:"button",custom:B}},size:{options:["lg","md","sm"],control:{type:"radio"},description:"Størrelse på knappen, 'md' default"}}},r={args:{as:"button",ariaLoadingMessage:"Vennligst vent...",isLoading:!1},render:a=>e.createElement(t,{...a},"Primary Button")},n={args:{as:"button",ariaLoadingMessage:"Vennligst vent...",isLoading:!1},render:a=>e.createElement("div",{className:"ffe-button-display-group"},e.createElement(t,{...a,size:"lg"},"Stor knapp"),e.createElement(t,{...a},"Default knapp"),e.createElement(t,{...a,size:"sm"},"Liten knapp"))},s={args:{as:"button",ariaLoadingMessage:"Vennligst vent...",isLoading:!1,iconOnly:!0},render:a=>e.createElement("div",{className:"ffe-button-display-group"},e.createElement(t,{...a,size:"lg"},e.createElement(o,{fileUrl:y,size:"lg"})),e.createElement(t,{...a,size:"md"},e.createElement(o,{fileUrl:P,size:"md"})),e.createElement(t,{...a,size:"sm"},e.createElement(o,{fileUrl:z,size:"sm"})))};var i,m,c;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    as: 'button',
    ariaLoadingMessage: 'Vennligst vent...',
    isLoading: false
  },
  render: args => <PrimaryButton {...args}>Primary Button</PrimaryButton>
}`,...(c=(m=r.parameters)==null?void 0:m.docs)==null?void 0:c.source}}};var l,d,u;n.parameters={...n.parameters,docs:{...(l=n.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
}`,...(u=(d=n.parameters)==null?void 0:d.docs)==null?void 0:u.source}}};var g,p,f;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    as: 'button',
    ariaLoadingMessage: 'Vennligst vent...',
    isLoading: false,
    iconOnly: true
  },
  render: args => <div className="ffe-button-display-group">
            <PrimaryButton {...args} size="lg">
                <Icon fileUrl={addReactionIconLg} size="lg" />
            </PrimaryButton>
            <PrimaryButton {...args} size="md">
                <Icon fileUrl={addReactionIconMd} size="md" />
            </PrimaryButton>
            <PrimaryButton {...args} size="sm">
                <Icon fileUrl={addReactionIconSm} size="sm" />
            </PrimaryButton>
        </div>
}`,...(f=(p=s.parameters)==null?void 0:p.docs)==null?void 0:f.source}}};const L=["Standard","DifferentSizes","IconOnly"],M=Object.freeze(Object.defineProperty({__proto__:null,DifferentSizes:n,IconOnly:s,Standard:r,__namedExportsOrder:L,default:b},Symbol.toStringTag,{value:"Module"}));export{n as D,s as I,M as P,r as S};
