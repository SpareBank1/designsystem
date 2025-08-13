import{R as e}from"./index-DQDNmYQF.js";import{c as D}from"./index-D2FocPV0.js";const o=({size:i,className:n,horizontal:u,...r})=>e.createElement("div",{role:"list",className:D("ffe-description-list",{"ffe-description-list--horizontal":u},{"ffe-description-list--md":i==="md"},{"ffe-description-list--lg":i==="lg"},n),...r});o.__docgenInfo={description:"",methods:[],displayName:"DescriptionList",props:{size:{required:!1,tsType:{name:"union",raw:"'md' | 'lg'",elements:[{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}]},description:""},horizontal:{required:!1,tsType:{name:"boolean"},description:"Displays dts and dds inline"}}};const t=({className:i,...n})=>e.createElement("div",{role:"term",className:D("ffe-description-list__term",i),...n});t.__docgenInfo={description:"",methods:[],displayName:"DescriptionListTerm"};const s=({className:i,...n})=>e.createElement("div",{role:"definition",className:D("ffe-description-list__description",i),...n});s.__docgenInfo={description:"",methods:[],displayName:"DescriptionListDescription"};const A=({children:i,className:n,...u})=>{const r=[];return e.Children.forEach(i,(a,c)=>{const L=c%2;L===0&&r.push([]),r[Math.floor(c/2)][L]=a}),e.createElement("div",{role:"list",className:D("ffe-description-list-multicol",n),...u},r.map((a,c)=>e.createElement("div",{className:"ffe-description-list-multicol__avoid-break",key:c},a[0],a[1])))};A.__docgenInfo={description:"",methods:[],displayName:"DescriptionListMultiCol"};const C={title:"Komponenter/Lists/DescriptionList",component:o,subcomponents:{DescriptionListTerm:t,DescriptionListDescription:s},tags:["autodocs"],argTypes:{size:{options:["md","lg","none"],mapping:{md:"md",lg:"lg",none:void 0}}}},l={args:{horizontal:!1},render:i=>e.createElement("div",null,e.createElement("h3",{className:"ffe-h4"},"Personalia"),e.createElement(o,{...i},e.createElement(t,null,"Navn"),e.createElement(s,null,"Navn Navnesen"),e.createElement(t,null,"Adresse"),e.createElement(s,null,"Husgata 14"),e.createElement(t,null,"Postnummer og sted"),e.createElement(s,null,"1337 Sandvika")))},m={args:{},render:i=>e.createElement("div",null,e.createElement("h3",{className:"ffe-h4"},"Personalia"),e.createElement(A,{...i},e.createElement(t,null,"Navn"),e.createElement(s,null,"Navn Navnesen"),e.createElement(t,null,"Adresse"),e.createElement(s,null,"Husgata 14"),e.createElement(t,null,"Postnummer"),e.createElement(s,null,"0362"),e.createElement(t,null,"Adresse"),e.createElement(s,null,"Oslo")))},p={args:{horizontal:!0},render:i=>e.createElement("div",null,e.createElement("h3",{className:"ffe-h4"},"Personalia"),e.createElement(o,{...i},e.createElement(t,null,"Navn"),e.createElement(s,null,"Navn Navnesen"),e.createElement(t,null,"Adresse"),e.createElement(s,null,"Husgata 14"),e.createElement(t,null,"Postnummer og sted"),e.createElement(s,null,"1337 Sandvika")))},d={args:{horizontal:!0,size:"lg"},render:i=>e.createElement("div",null,e.createElement("h3",{className:"ffe-h4"},"Personalia"),e.createElement(o,{...i},e.createElement(t,null,"Navn"),e.createElement(s,null,"Navn Navnesen"),e.createElement(t,null,"Adresse"),e.createElement(s,null,"Husgata 14"),e.createElement(t,null,"Postnummer og sted"),e.createElement(s,null,"1337 Sandvika")))};var g,v,f;l.parameters={...l.parameters,docs:{...(g=l.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    horizontal: false
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
}`,...(f=(v=l.parameters)==null?void 0:v.docs)==null?void 0:f.source}}};var E,N,h;m.parameters={...m.parameters,docs:{...(E=m.parameters)==null?void 0:E.docs,source:{originalSource:`{
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
}`,...(h=(N=m.parameters)==null?void 0:N.docs)==null?void 0:h.source}}};var T,P,_;p.parameters={...p.parameters,docs:{...(T=p.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    horizontal: true
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
}`,...(_=(P=p.parameters)==null?void 0:P.docs)==null?void 0:_.source}}};var z,H,S;d.parameters={...d.parameters,docs:{...(z=d.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    horizontal: true,
    size: 'lg'
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
}`,...(S=(H=d.parameters)==null?void 0:H.docs)==null?void 0:S.source}}};const M=["Standard","MultiColumn","Horizontal","HorizontalLarge"];export{p as Horizontal,d as HorizontalLarge,m as MultiColumn,l as Standard,M as __namedExportsOrder,C as default};
