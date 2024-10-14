import{R as e}from"./index-RYns6xqu.js";import{c as l}from"./index-Dejnh_W_.js";import{P as c}from"./PrimaryButton-C51bGnmP.js";import{S as d}from"./SecondaryButton-B8Z9mIXn.js";import{T as f}from"./TertiaryButton-BKvZmJf9.js";import"./BaseButton-zBeW6ZG8.js";import"./fixedForwardRef-BDE7qUSg.js";import"./InlineBaseButton-DcOWGW58.js";const o=({className:r,thin:s,inline:p,ariaLabel:u,...m})=>e.createElement("div",{className:l("ffe-button-group",{"ffe-button-group--thin":s},{"ffe-button-group--inline":p},r),...m,role:"group","aria-label":u});o.__docgenInfo={description:"",methods:[],displayName:"ButtonGroup",props:{thin:{required:!1,tsType:{name:"boolean"},description:"Applies the thin modifier to remove margins"},inline:{required:!1,tsType:{name:"boolean"},description:"Applies the inline modifier to make all child buttons inline"},ariaLabel:{required:!0,tsType:{name:"string"},description:"Label for the group of buttons"}}};const G={title:"components/buttons/ButtonGroup",component:o,tags:["autodocs"]},t={args:{ariaLabel:"Knappegruppe"},render:r=>e.createElement(o,{...r},e.createElement(d,null,"Forrige"),e.createElement(c,null,"Neste"),e.createElement(f,null,"Avbryt"))};var n,a,i;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    ariaLabel: 'Knappegruppe'
  },
  render: args => <ButtonGroup {...args}>
            <SecondaryButton>Forrige</SecondaryButton>
            <PrimaryButton>Neste</PrimaryButton>
            <TertiaryButton>Avbryt</TertiaryButton>
        </ButtonGroup>
}`,...(i=(a=t.parameters)==null?void 0:a.docs)==null?void 0:i.source}}};const N=["Standard"];export{t as Standard,N as __namedExportsOrder,G as default};
