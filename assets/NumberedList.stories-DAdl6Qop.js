import{R as e}from"./index-DQDNmYQF.js";import{c as i}from"./index-D2FocPV0.js";const l=({className:t,condensed:n,...o})=>e.createElement("ol",{className:i("ffe-numbered-list",{"ffe-numbered-list--condensed":n},t),...o});l.__docgenInfo={description:"",methods:[],displayName:"NumberedList",props:{condensed:{required:!1,tsType:{name:"boolean"},description:"Condensed modifier. Use in condensed designs"}}};const r=({className:t,...n})=>e.createElement("li",{className:i("ffe-numbered-list__item",t),...n});r.__docgenInfo={description:"",methods:[],displayName:"NumberedListItem"};const E=({className:t,...n})=>e.createElement("ol",{role:"list",className:i("ffe-stylized-numbered-list",t),...n});E.__docgenInfo={description:"",methods:[],displayName:"StylizedNumberedList"};const a=({className:t,children:n,...o})=>e.createElement("li",{className:i("ffe-stylized-numbered-list__item",t),...o},e.createElement("div",{className:"ffe-stylized-numbered-list__item-content"},n));a.__docgenInfo={description:"",methods:[],displayName:"StylizedNumberedListItem"};const g={title:"Komponenter/Lists/NumberedList",component:l,subcomponents:{NumberedListItem:r},tags:["autodocs"]},s={args:{},render:t=>e.createElement("div",null,e.createElement("h3",{className:"ffe-h4"},"Å bruke FFE er enkelt!"),e.createElement(l,{...t},e.createElement(r,null,"Installer pakken du vil bruke via NPM"),e.createElement(r,null,"Importer pakken i koden din"),e.createElement(r,null,"Profit!")))},d={args:{condensed:!0},render:t=>e.createElement("div",null,e.createElement("h3",{className:"ffe-h4"},"Å bruke FFE er enkelt!"),e.createElement(l,{...t},e.createElement(r,null,"Installer pakken du vil bruke via NPM"),e.createElement(r,null,"Importer pakken i koden din"),e.createElement(r,null,"Profit!")))},m={args:{},render:t=>e.createElement("div",null,e.createElement("h3",{className:"ffe-h4"},"Å bruke FFE er enkelt!"),e.createElement(E,{...t},e.createElement(a,null,"Installer pakken du vil bruke via NPM"),e.createElement(a,null,"Importer pakken i koden din"),e.createElement(a,null,"Profit!")))};var u,c,N;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {},
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
}`,...(N=(c=s.parameters)==null?void 0:c.docs)==null?void 0:N.source}}};var b,p,k;d.parameters={...d.parameters,docs:{...(b=d.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    condensed: true
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
}`,...(k=(p=d.parameters)==null?void 0:p.docs)==null?void 0:k.source}}};var f,I,L;m.parameters={...m.parameters,docs:{...(f=m.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {},
  render: args => <div>
            <h3 className="ffe-h4">Å bruke FFE er enkelt!</h3>
            <StylizedNumberedList {...args}>
                <StylizedNumberedListItem>
                    Installer pakken du vil bruke via NPM
                </StylizedNumberedListItem>
                <StylizedNumberedListItem>
                    Importer pakken i koden din
                </StylizedNumberedListItem>
                <StylizedNumberedListItem>Profit!</StylizedNumberedListItem>
            </StylizedNumberedList>
        </div>
}`,...(L=(I=m.parameters)==null?void 0:I.docs)==null?void 0:L.source}}};const h=["Standard","Condensed","Stylized"];export{d as Condensed,s as Standard,m as Stylized,h as __namedExportsOrder,g as default};
