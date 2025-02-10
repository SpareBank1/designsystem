import{R as e}from"./index-eCxJ45ll.js";import{c as d}from"./index-DezCrw0f.js";import{D as t}from"./DescriptionListTerm-Drd-O_zg.js";import{D as r}from"./DescriptionListDescription-BwJTOAgW.js";const n=({size:s,className:c,horizontal:m,...p})=>e.createElement("dl",{className:d("ffe-description-list",{"ffe-description-list--horizontal":m},{"ffe-description-list--md":s==="md"},{"ffe-description-list--lg":s==="lg"},c),...p});n.__docgenInfo={description:"",methods:[],displayName:"DescriptionList",props:{size:{required:!1,tsType:{name:"union",raw:"'md' | 'lg'",elements:[{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}]},description:""},horizontal:{required:!1,tsType:{name:"boolean"},description:"Displays dts and dds inline"}}};const L={title:"Komponenter/Lists/DescriptionList",component:n,subcomponents:{DescriptionListTerm:t,DescriptionListDescription:r},tags:["autodocs"],argTypes:{size:{options:["md","lg","none"],mapping:{md:"md",lg:"lg",none:void 0}}}},i={args:{horizontal:!1,size:"md"},render:s=>e.createElement("div",null,e.createElement("h3",{className:"ffe-h4"},"Personalia"),e.createElement(n,{...s},e.createElement(t,null,"Navn"),e.createElement(r,null,"Navn Navnesen"),e.createElement(t,null,"Adresse"),e.createElement(r,null,"Husgata 14"),e.createElement(t,null,"Postnummer og sted"),e.createElement(r,null,"1337 Sandvika")))};var a,o,l;i.parameters={...i.parameters,docs:{...(a=i.parameters)==null?void 0:a.docs,source:{originalSource:`{
  args: {
    horizontal: false,
    size: 'md'
  },
  render: args => <div>
            <h3 className="ffe-h4">Personalia</h3>
            <DescriptionList {...args}>
                <DescriptionListTerm>Navn</DescriptionListTerm>
                <DescriptionListDescription>
                    Navn Navnesen
                </DescriptionListDescription>
                <DescriptionListTerm>Adresse</DescriptionListTerm>
                <DescriptionListDescription>
                    Husgata 14
                </DescriptionListDescription>
                <DescriptionListTerm>Postnummer og sted</DescriptionListTerm>
                <DescriptionListDescription>
                    1337 Sandvika
                </DescriptionListDescription>
            </DescriptionList>
        </div>
}`,...(l=(o=i.parameters)==null?void 0:o.docs)==null?void 0:l.source}}};const v=["Standard"];export{i as Standard,v as __namedExportsOrder,L as default};
