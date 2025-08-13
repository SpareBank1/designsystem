import{R as e}from"./index-DQDNmYQF.js";import{c as T}from"./index-D2FocPV0.js";import{P as s}from"./PrimaryButton-CZj_A1Ft.js";import{S as u}from"./SecondaryButton-BHi_K02X.js";import{T as i}from"./TertiaryButton-CQPQX3mi.js";const a=({className:r,thin:S,inline:E,ariaLabel:l,...h})=>e.createElement("div",{className:T("ffe-button-group",{"ffe-button-group--thin":S},{"ffe-button-group--inline":E},r),...h,role:"group","aria-label":l===""?void 0:l});a.__docgenInfo={description:"",methods:[],displayName:"ButtonGroup",props:{thin:{required:!1,tsType:{name:"boolean"},description:"Applies the thin modifier to remove margins"},inline:{required:!1,tsType:{name:"boolean"},description:"Applies the inline modifier to make all child buttons inline"},ariaLabel:{required:!1,tsType:{name:"string"},description:"Label for the group of buttons for users with screen reader"}}};const v={title:"Komponenter/Buttons/ButtonGroup",component:a},t={args:{},render:r=>e.createElement(a,{...r},e.createElement(u,null,"Forrige"),e.createElement(s,null,"Neste"),e.createElement(i,null,"Avbryt"))},n={args:{ariaLabel:"Knappegruppe"},render:r=>e.createElement(a,{...r},e.createElement(u,null,"Forrige"),e.createElement(s,null,"Neste"),e.createElement(i,null,"Avbryt"))},o={args:{thin:!0,ariaLabel:"Eksempel knappegruppe"},render:r=>e.createElement(a,{...r},e.createElement(u,null,"Forrige"),e.createElement(s,null,"Neste"),e.createElement(i,null,"Avbryt"))};var p,m,c;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {},
  render: args => <ButtonGroup {...args}>
            <SecondaryButton>Forrige</SecondaryButton>
            <PrimaryButton>Neste</PrimaryButton>
            <TertiaryButton>Avbryt</TertiaryButton>
        </ButtonGroup>
}`,...(c=(m=t.parameters)==null?void 0:m.docs)==null?void 0:c.source}}};var d,g,y;n.parameters={...n.parameters,docs:{...(d=n.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    ariaLabel: 'Knappegruppe'
  },
  render: args => <ButtonGroup {...args}>
            <SecondaryButton>Forrige</SecondaryButton>
            <PrimaryButton>Neste</PrimaryButton>
            <TertiaryButton>Avbryt</TertiaryButton>
        </ButtonGroup>
}`,...(y=(g=n.parameters)==null?void 0:g.docs)==null?void 0:y.source}}};var B,b,f;o.parameters={...o.parameters,docs:{...(B=o.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    thin: true,
    ariaLabel: 'Eksempel knappegruppe'
  },
  render: args => <ButtonGroup {...args}>
            <SecondaryButton>Forrige</SecondaryButton>
            <PrimaryButton>Neste</PrimaryButton>
            <TertiaryButton>Avbryt</TertiaryButton>
        </ButtonGroup>
}`,...(f=(b=o.parameters)==null?void 0:b.docs)==null?void 0:f.source}}};const A=["Standard","WithAriaLabel","Condensed"],F=Object.freeze(Object.defineProperty({__proto__:null,Condensed:o,Standard:t,WithAriaLabel:n,__namedExportsOrder:A,default:v},Symbol.toStringTag,{value:"Module"}));export{F as B,o as C,t as S,n as W};
