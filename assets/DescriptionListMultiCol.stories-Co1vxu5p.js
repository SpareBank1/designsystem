import{R as e}from"./index-ne9I_3bB.js";import{c as L}from"./index-B6-3w37c.js";import{D as t}from"./DescriptionListTerm-1o-dXzRh.js";import{D as s}from"./DescriptionListDescription-CCsct8hr.js";const a=({children:o,className:d,...u})=>{const c=[];return e.Children.forEach(o,(i,n)=>{const l=n%2;l===0&&c.push([]),c[Math.floor(n/2)][l]=i}),e.createElement("dl",{className:L("ffe-description-list-multicol",d),...u},c.map((i,n)=>e.createElement("div",{className:"ffe-description-list-multicol__avoid-break",key:n},i[0],i[1])))};a.__docgenInfo={description:"",methods:[],displayName:"DescriptionListMultiCol"};const h={title:"Komponenter/Lists/DescriptionListMultiCol",component:a,subcomponents:{DescriptionListTerm:t,DescriptionListDescription:s},tags:["autodocs"]},r={args:{},render:o=>e.createElement("div",null,e.createElement("h3",{className:"ffe-h4"},"Personalia"),e.createElement(a,{...o},e.createElement(t,null,"Navn"),e.createElement(s,null,"Navn Navnesen"),e.createElement(t,null,"Adresse"),e.createElement(s,null,"Husgata 14"),e.createElement(t,null,"Postnummer"),e.createElement(s,null,"0362"),e.createElement(t,null,"Adresse"),e.createElement(s,null,"Oslo")))};var m,p,D;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {},
  render: args => <div>
            <h3 className="ffe-h4">Personalia</h3>
            <DescriptionListMultiCol {...args}>
                <DescriptionListTerm>Navn</DescriptionListTerm>
                <DescriptionListDescription>
                    Navn Navnesen
                </DescriptionListDescription>
                <DescriptionListTerm>Adresse</DescriptionListTerm>
                <DescriptionListDescription>
                    Husgata 14
                </DescriptionListDescription>
                <DescriptionListTerm>Postnummer</DescriptionListTerm>
                <DescriptionListDescription>0362</DescriptionListDescription>
                <DescriptionListTerm>Adresse</DescriptionListTerm>
                <DescriptionListDescription>Oslo</DescriptionListDescription>
            </DescriptionListMultiCol>
        </div>
}`,...(D=(p=r.parameters)==null?void 0:p.docs)==null?void 0:D.source}}};const g=["Standard"];export{r as Standard,g as __namedExportsOrder,h as default};
