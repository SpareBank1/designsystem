import{R as e}from"./index-eCxJ45ll.js";import{B as m}from"./BaseButton-BscGCdZs.js";import{f as l}from"./fixedForwardRef-Cb2PomjO.js";function g(t,d){return e.createElement(m,{...t,ref:d,buttonType:"action"})}const n=l(g);n.__docgenInfo={description:"",methods:[],displayName:"ActionButton"};const f=t=>e.createElement("a",{...t},"Custom ",t.children),A={title:"Komponenter/Buttons/ActionButton",component:n,argTypes:{as:{options:["a","button","custom"],mapping:{"":"a",a:"a",button:"button",custom:f}},size:{options:["lg","md","sm"],control:{type:"radio"},description:"Størrelse på knappen, 'md' default"}}},o={args:{as:"button",ariaLoadingMessage:"Vennligst vent...",isLoading:!1},render:t=>e.createElement("div",{className:"ffe-button-display-group"},e.createElement(n,{...t},"Actionknapp"))},a={args:{as:"button",ariaLoadingMessage:"Vennligst vent...",isLoading:!1},render:t=>e.createElement("div",{className:"ffe-button-display-group"},e.createElement(n,{...t,size:"lg"},"Actionknapp"),e.createElement(n,{...t},"Actionknapp"),e.createElement(n,{...t,size:"sm"},"Actionknapp"))};var s,r,i;o.parameters={...o.parameters,docs:{...(s=o.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
}`,...(i=(r=o.parameters)==null?void 0:r.docs)==null?void 0:i.source}}};var c,p,u;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(u=(p=a.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};const B=["Standard","DifferentSizes"],y=Object.freeze(Object.defineProperty({__proto__:null,DifferentSizes:a,Standard:o,__namedExportsOrder:B,default:A},Symbol.toStringTag,{value:"Module"}));export{y as A,a as D,o as S};
