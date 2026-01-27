import{R as t}from"./index-DQDNmYQF.js";import{B as k}from"./BaseButton-C7ZIg8iM.js";import{f as B}from"./fixedForwardRef-DqyCgkTx.js";import{a as b,b as z,c as y}from"./IconExamples-DKeTo_Gz.js";import{I as r}from"./Icon-D_nm5xPy.js";function L(e,A){return t.createElement(k,{...e,ref:A,buttonType:"action"})}const n=B(L);n.__docgenInfo={description:"",methods:[],displayName:"ActionButton"};const S=e=>t.createElement("a",{...e},"Custom ",e.children),E={title:"Komponenter/Buttons/ActionButton",component:n,argTypes:{as:{options:["a","button","custom"],mapping:{"":"a",a:"a",button:"button",custom:S}},size:{options:["lg","md","sm"],control:{type:"radio"},description:"Størrelse på knappen, 'md' default"}}},o={args:{ariaLoadingMessage:"Vennligst vent...",isLoading:!1},render:e=>t.createElement(n,{...e,onClick:()=>{}},"Actionknapp")},a={args:{ariaLoadingMessage:"Vennligst vent...",isLoading:!1},render:e=>t.createElement("div",{className:"storybook-button-display-group"},t.createElement(n,{...e,size:"lg"},"Stor Actionknapp"),t.createElement(n,{...e},"Actionknapp"),t.createElement(n,{...e,size:"sm"},"Liten Actionknapp"))},i={args:{ariaLoadingMessage:"Vennligst vent...",isLoading:!1,iconOnly:!0},render:e=>t.createElement("div",{className:"storybook-button-display-group"},t.createElement(n,{...e,size:"lg","aria-label":"Stor actionknapp med ikon"},t.createElement(r,{fileUrl:b,size:"lg"})),t.createElement(n,{...e,size:"md","aria-label":"Vanlig actionknapp med ikon"},t.createElement(r,{fileUrl:z,size:"md"})),t.createElement(n,{...e,size:"sm","aria-label":"Liten actionknapp med ikon"},t.createElement(r,{fileUrl:y,size:"sm"})))};var s,c,l;o.parameters={...o.parameters,docs:{...(s=o.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    ariaLoadingMessage: 'Vennligst vent...',
    isLoading: false
  },
  render: args => {
    return <ActionButton {...args} onClick={() => {}}>
                Actionknapp
            </ActionButton>;
  }
}`,...(l=(c=o.parameters)==null?void 0:c.docs)==null?void 0:l.source}}};var d,m,p;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    ariaLoadingMessage: 'Vennligst vent...',
    isLoading: false
  },
  render: args => {
    return <div className="storybook-button-display-group">
                <ActionButton {...args} size="lg">
                    Stor Actionknapp
                </ActionButton>
                <ActionButton {...args}>Actionknapp</ActionButton>
                <ActionButton {...args} size="sm">
                    Liten Actionknapp
                </ActionButton>
            </div>;
  }
}`,...(p=(m=a.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};var g,u,f;i.parameters={...i.parameters,docs:{...(g=i.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    ariaLoadingMessage: 'Vennligst vent...',
    isLoading: false,
    iconOnly: true
  },
  render: args => <div className="storybook-button-display-group">
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
}`,...(f=(u=i.parameters)==null?void 0:u.docs)==null?void 0:f.source}}};const I=["Standard","DifferentSizes","IconOnly"],O=Object.freeze(Object.defineProperty({__proto__:null,DifferentSizes:a,IconOnly:i,Standard:o,__namedExportsOrder:I,default:E},Symbol.toStringTag,{value:"Module"}));export{O as A,a as D,i as I,o as S};
