import{R as e}from"./index-DQDNmYQF.js";import{c as f}from"./index-QCImZZ3W.js";const l=({className:s,condensed:i,...g})=>e.createElement("ul",{className:f("ffe-bullet-list",{"ffe-bullet-list--condensed":i},s),...g});l.__docgenInfo={description:"",methods:[],displayName:"BulletList",props:{condensed:{required:!1,tsType:{name:"boolean"},description:"Condensed modifier. Use in condensed designs"}}};const t=({className:s,...i})=>e.createElement("li",{className:f("ffe-bullet-list__item",s),...i});t.__docgenInfo={description:"",methods:[],displayName:"BulletListItem"};const L={title:"Komponenter/Lists/BulletList",component:l,subcomponents:{BulletListItem:t},tags:["autodocs"]},n={args:{},render:s=>e.createElement("div",null,e.createElement("h3",{className:"ffe-h4"},"Våre forsikringer"),e.createElement(l,{...s},e.createElement(t,null,"Bilforsikring"),e.createElement(t,null,"Reiseforsikring"),e.createElement(t,null,"Innboforsikring")))},r={args:{condensed:!0},render:s=>e.createElement("div",null,e.createElement("h3",{className:"ffe-h4"},"Våre forsikringer"),e.createElement(l,{...s},e.createElement(t,null,"Bilforsikring"),e.createElement(t,null,"Reiseforsikring"),e.createElement(t,null,"Innboforsikring")))};var o,a,m;n.parameters={...n.parameters,docs:{...(o=n.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {},
  render: args => <div>
            <h3 className="ffe-h4">Våre forsikringer</h3>
            <BulletList {...args}>
                <BulletListItem>Bilforsikring</BulletListItem>
                <BulletListItem>Reiseforsikring</BulletListItem>
                <BulletListItem>Innboforsikring</BulletListItem>
            </BulletList>
        </div>
}`,...(m=(a=n.parameters)==null?void 0:a.docs)==null?void 0:m.source}}};var c,d,u;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    condensed: true
  },
  render: args => <div>
            <h3 className="ffe-h4">Våre forsikringer</h3>
            <BulletList {...args}>
                <BulletListItem>Bilforsikring</BulletListItem>
                <BulletListItem>Reiseforsikring</BulletListItem>
                <BulletListItem>Innboforsikring</BulletListItem>
            </BulletList>
        </div>
}`,...(u=(d=r.parameters)==null?void 0:d.docs)==null?void 0:u.source}}};const I=["Standard","Condensed"];export{r as Condensed,n as Standard,I as __namedExportsOrder,L as default};
