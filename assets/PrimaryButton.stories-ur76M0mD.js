import{R as t}from"./index-eCxJ45ll.js";import{P as n}from"./PrimaryButton-B_XLJPjc.js";const d=e=>t.createElement("a",{...e},"Custom ",e.children),l={title:"Komponenter/Buttons/PrimaryButton",component:n,argTypes:{as:{options:["a","button","custom"],mapping:{"":"button",a:"a",button:"button",custom:d}},size:{options:["lg","md","sm"],control:{type:"radio"},description:"Størrelse på knappen, 'md' default"}}},a={args:{as:"button",ariaLoadingMessage:"Vennligst vent...",isLoading:!1},render:e=>t.createElement(n,{...e},"Primary Button")},r={args:{as:"button",ariaLoadingMessage:"Vennligst vent...",isLoading:!1},render:e=>t.createElement("div",{className:"ffe-button-display-group"},t.createElement(n,{...e,size:"lg"},"Stor knapp"),t.createElement(n,{...e},"Default knapp"),t.createElement(n,{...e,size:"sm"},"Liten knapp"))};var s,o,i;a.parameters={...a.parameters,docs:{...(s=a.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    as: 'button',
    ariaLoadingMessage: 'Vennligst vent...',
    isLoading: false
  },
  render: args => <PrimaryButton {...args}>Primary Button</PrimaryButton>
}`,...(i=(o=a.parameters)==null?void 0:o.docs)==null?void 0:i.source}}};var m,u,p;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(p=(u=r.parameters)==null?void 0:u.docs)==null?void 0:p.source}}};const c=["Standard","DifferentSizes"],y=Object.freeze(Object.defineProperty({__proto__:null,DifferentSizes:r,Standard:a,__namedExportsOrder:c,default:l},Symbol.toStringTag,{value:"Module"}));export{r as D,y as P,a as S};
