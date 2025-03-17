import{R as e}from"./index-eCxJ45ll.js";import{B}from"./BaseButton-D2L3TWsj.js";import{f as b}from"./fixedForwardRef-Cb2PomjO.js";import{a as z,b as v,c as y}from"./IconExamples-DKeTo_Gz.js";import{I as r}from"./Icon-B88nEPeu.js";function E(t,A){return e.createElement(B,{...t,ref:A,buttonType:"action"})}const n=b(E);n.__docgenInfo={description:"",methods:[],displayName:"ActionButton"};const I=t=>e.createElement("a",{...t},"Custom ",t.children),L={title:"Komponenter/Buttons/ActionButton",component:n,argTypes:{as:{options:["a","button","custom"],mapping:{"":"a",a:"a",button:"button",custom:I}},size:{options:["lg","md","sm"],control:{type:"radio"},description:"Størrelse på knappen, 'md' default"}}},a={args:{as:"button",ariaLoadingMessage:"Vennligst vent...",isLoading:!1},render:t=>e.createElement("div",{className:"ffe-button-display-group"},e.createElement(n,{...t},"Actionknapp"))},o={args:{as:"button",ariaLoadingMessage:"Vennligst vent...",isLoading:!1},render:t=>e.createElement("div",{className:"ffe-button-display-group"},e.createElement(n,{...t,size:"lg"},"Actionknapp"),e.createElement(n,{...t},"Actionknapp"),e.createElement(n,{...t,size:"sm"},"Actionknapp"))},s={args:{as:"button",ariaLoadingMessage:"Vennligst vent...",isLoading:!1,iconOnly:!0},render:t=>e.createElement("div",{className:"ffe-button-display-group"},e.createElement(n,{...t,size:"lg"},e.createElement(r,{fileUrl:z,size:"lg"})),e.createElement(n,{...t,size:"md"},e.createElement(r,{fileUrl:v,size:"md"})),e.createElement(n,{...t,size:"sm"},e.createElement(r,{fileUrl:y,size:"sm"})))};var i,c,d;a.parameters={...a.parameters,docs:{...(i=a.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(d=(c=a.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};var l,m,u;o.parameters={...o.parameters,docs:{...(l=o.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    as: 'button',
    ariaLoadingMessage: 'Vennligst vent...',
    isLoading: false
  },
  render: args => {
    return <div className="ffe-button-display-group">
                <ActionButton {...args} size="lg">
                    Actionknapp
                </ActionButton>
                <ActionButton {...args}>Actionknapp</ActionButton>
                <ActionButton {...args} size="sm">
                    Actionknapp
                </ActionButton>
            </div>;
  }
}`,...(u=(m=o.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};var p,g,f;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    as: 'button',
    ariaLoadingMessage: 'Vennligst vent...',
    isLoading: false,
    iconOnly: true
  },
  render: args => <div className="ffe-button-display-group">
            <ActionButton {...args} size="lg">
                <Icon fileUrl={addReactionIconLg} size="lg" />
            </ActionButton>
            <ActionButton {...args} size="md">
                <Icon fileUrl={addReactionIconMd} size="md" />
            </ActionButton>
            <ActionButton {...args} size="sm">
                <Icon fileUrl={addReactionIconSm} size="sm" />
            </ActionButton>
        </div>
}`,...(f=(g=s.parameters)==null?void 0:g.docs)==null?void 0:f.source}}};const S=["Standard","DifferentSizes","IconOnly"],O=Object.freeze(Object.defineProperty({__proto__:null,DifferentSizes:o,IconOnly:s,Standard:a,__namedExportsOrder:S,default:L},Symbol.toStringTag,{value:"Module"}));export{O as A,o as D,s as I,a as S};
