import{R as t}from"./index-eCxJ45ll.js";import{S as r}from"./SecondaryButton-9gTcQMJo.js";const p=e=>t.createElement("a",{...e},"Custom ",e.children),l={title:"Komponenter/Buttons/SecondaryButton",component:r,argTypes:{as:{options:["a","button","custom"],mapping:{"":"button",a:"a",button:"button",custom:p}},size:{options:["lg","md","sm"],control:{type:"radio"},description:"Størrelse på knappen, 'md' default"}}},a={args:{as:"button",ariaLoadingMessage:"Vennligst vent...",isLoading:!1},render:e=>t.createElement("div",{className:"ffe-button-display-group"},t.createElement(r,{...e},"Sekundærknapp"))},n={args:{as:"button",ariaLoadingMessage:"Vennligst vent...",isLoading:!1},render:e=>t.createElement("div",{className:"ffe-button-display-group"},t.createElement(r,{...e,size:"lg"},"Sekundærknapp"),t.createElement(r,{...e},"Sekundærknapp"),t.createElement(r,{...e,size:"sm"},"Sekundærknapp"))};var o,s,d;a.parameters={...a.parameters,docs:{...(o=a.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    as: 'button',
    ariaLoadingMessage: 'Vennligst vent...',
    isLoading: false
  },
  render: args => {
    return <div className="ffe-button-display-group">
                <SecondaryButton {...args}>Sekundærknapp</SecondaryButton>
            </div>;
  }
}`,...(d=(s=a.parameters)==null?void 0:s.docs)==null?void 0:d.source}}};var i,u,c;n.parameters={...n.parameters,docs:{...(i=n.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    as: 'button',
    ariaLoadingMessage: 'Vennligst vent...',
    isLoading: false
  },
  render: args => <div className="ffe-button-display-group">
            <SecondaryButton {...args} size="lg">
                Sekundærknapp
            </SecondaryButton>
            <SecondaryButton {...args}>Sekundærknapp</SecondaryButton>
            <SecondaryButton {...args} size="sm">
                Sekundærknapp
            </SecondaryButton>
        </div>
}`,...(c=(u=n.parameters)==null?void 0:u.docs)==null?void 0:c.source}}};const m=["Standard","DifferentSizes"],f=Object.freeze(Object.defineProperty({__proto__:null,DifferentSizes:n,Standard:a,__namedExportsOrder:m,default:l},Symbol.toStringTag,{value:"Module"}));export{n as D,f as S,a};
