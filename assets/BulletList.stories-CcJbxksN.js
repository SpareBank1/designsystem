import{R as e}from"./index-DJO9vBfz.js";import{c as d}from"./index-i5X67GZP.js";import{B as t}from"./BulletListItem-Cc4SicLA.js";const r=({className:n,condensed:a,...m})=>e.createElement("ul",{className:d("ffe-bullet-list",{"ffe-bullet-list--condensed":a},n),...m});r.__docgenInfo={description:"",methods:[],displayName:"BulletList",props:{condensed:{required:!1,tsType:{name:"boolean"},description:"Condensed modifier. Use in condensed designs"}}};const p={title:"Komponenter/Lists/BulletList",component:r,subcomponents:{BulletListItem:t},tags:["autodocs"]},s={args:{condensed:!1},render:n=>e.createElement("div",null,e.createElement("h3",{className:"ffe-h4"},"Våre forsikringer"),e.createElement(r,{...n},e.createElement(t,null,"Bilforsikring"),e.createElement(t,null,"Reiseforsikring"),e.createElement(t,null,"Innboforsikring")))};var l,i,o;s.parameters={...s.parameters,docs:{...(l=s.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    condensed: false
  },
  render: args => <div>
            <h3 className="ffe-h4">Våre forsikringer</h3>
            <BulletList {...args}>
                <BulletListItem>Bilforsikring</BulletListItem>
                <BulletListItem>Reiseforsikring</BulletListItem>
                <BulletListItem>Innboforsikring</BulletListItem>
            </BulletList>
        </div>
}`,...(o=(i=s.parameters)==null?void 0:i.docs)==null?void 0:o.source}}};const g=["Standard"];export{s as Standard,g as __namedExportsOrder,p as default};
