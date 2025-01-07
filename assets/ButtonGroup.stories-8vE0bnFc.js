import{R as e}from"./index-ne9I_3bB.js";import{c as m}from"./index-B6-3w37c.js";import{P as c}from"./PrimaryButton-B1j9kRP3.js";import{S as d}from"./SecondaryButton-Bwf5AV3W.js";import{T as f}from"./TertiaryButton-CDRqG9c6.js";const o=({className:r,thin:s,inline:p,ariaLabel:u,...l})=>e.createElement("div",{className:m("ffe-button-group",{"ffe-button-group--thin":s},{"ffe-button-group--inline":p},r),...l,role:"group","aria-label":u});o.__docgenInfo={description:"",methods:[],displayName:"ButtonGroup",props:{thin:{required:!1,tsType:{name:"boolean"},description:"Applies the thin modifier to remove margins"},inline:{required:!1,tsType:{name:"boolean"},description:"Applies the inline modifier to make all child buttons inline"},ariaLabel:{required:!0,tsType:{name:"string"},description:"Label for the group of buttons"}}};const g={title:"Komponenter/Buttons/ButtonGroup",component:o},t={args:{ariaLabel:"Knappegruppe"},render:r=>e.createElement(o,{...r},e.createElement(d,null,"Forrige"),e.createElement(c,null,"Neste"),e.createElement(f,null,"Avbryt"))};var n,a,i;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    ariaLabel: 'Knappegruppe'
  },
  render: args => <ButtonGroup {...args}>
            <SecondaryButton>Forrige</SecondaryButton>
            <PrimaryButton>Neste</PrimaryButton>
            <TertiaryButton>Avbryt</TertiaryButton>
        </ButtonGroup>
}`,...(i=(a=t.parameters)==null?void 0:a.docs)==null?void 0:i.source}}};const b=["Standard"],_=Object.freeze(Object.defineProperty({__proto__:null,Standard:t,__namedExportsOrder:b,default:g},Symbol.toStringTag,{value:"Module"}));export{_ as B,t as S};
