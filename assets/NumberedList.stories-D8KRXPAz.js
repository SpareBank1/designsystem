import{R as e}from"./index-eCxJ45ll.js";import{c as l}from"./index-DezCrw0f.js";import{N as r}from"./NumberedListItem-JA59tpd9.js";const s=({className:t,condensed:o,...i})=>e.createElement("ol",{className:l("ffe-numbered-list",{"ffe-numbered-list--condensed":o},t),...i});s.__docgenInfo={description:"",methods:[],displayName:"NumberedList",props:{condensed:{required:!1,tsType:{name:"boolean"},description:"Condensed modifier. Use in condensed designs"}}};const b={title:"Komponenter/Lists/NumberedList",component:s,subcomponents:{NumberedListItem:r},tags:["autodocs"]},n={args:{condensed:!1},render:t=>e.createElement("div",null,e.createElement("h3",{className:"ffe-h4"},"Å bruke FFE er enkelt!"),e.createElement(s,{...t},e.createElement(r,null,"Installer pakken du vil bruke via NPM"),e.createElement(r,null,"Importer pakken i koden din"),e.createElement(r,null,"Profit!")))};var a,d,m;n.parameters={...n.parameters,docs:{...(a=n.parameters)==null?void 0:a.docs,source:{originalSource:`{
  args: {
    condensed: false
  },
  render: args => <div>
            <h3 className="ffe-h4">Å bruke FFE er enkelt!</h3>
            <NumberedList {...args}>
                <NumberedListItem>
                    Installer pakken du vil bruke via NPM
                </NumberedListItem>
                <NumberedListItem>Importer pakken i koden din</NumberedListItem>
                <NumberedListItem>Profit!</NumberedListItem>
            </NumberedList>
        </div>
}`,...(m=(d=n.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};const N=["Standard"];export{n as Standard,N as __namedExportsOrder,b as default};