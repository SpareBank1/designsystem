import{R as e}from"./index-DQDNmYQF.js";import{c as D}from"./index-QCImZZ3W.js";const l=({className:t,bgColor:r,children:o,...d})=>e.createElement("dl",{className:D("ffe-detail-list-card",t,{[`ffe-detail-list-card--bg-${r}`]:r}),...d},o);l.__docgenInfo={description:"",methods:[],displayName:"DetailListCard",props:{bgColor:{required:!1,tsType:{name:"union",raw:"'primary' | 'secondary' | 'tertiary'",elements:[{name:"literal",value:"'primary'"},{name:"literal",value:"'secondary'"},{name:"literal",value:"'tertiary'"}]},description:"Property has new values that work with dark and accent mode as part of the Semantic Color update\nPossible values: `primary` `secondary` `tertiary`\n[Read more in the upgrade guide](https://sparebank1.github.io/designsystem/?path=/docs/introduksjon-changelog--docs#2025---februar---semantiske-farger)"},bgDarkmodeColor:{required:!1,tsType:{name:"never"},description:`@deprecated as part of update to Semantic Colors

Property is replaced by the updated values for \`bgColor\` that works on dark mode
[Read more in the upgrade guide](https://sparebank1.github.io/designsystem/?path=/docs/introduksjon-changelog--docs#2025---februar---semantiske-farger)`}}};const a=({className:t,label:r,value:o,...d})=>e.createElement("div",{className:D("ffe-detail-list-card__item",t),...d},e.createElement("dt",{className:"ffe-detail-list-card__item-label"},e.isValidElement(r)?e.cloneElement(r,{...r.props}):r),e.createElement("dd",{className:"ffe-detail-list-card__item-value"},e.isValidElement(o)?e.cloneElement(o,{...o.props}):o));a.__docgenInfo={description:"",methods:[],displayName:"DetailListCardItem",props:{label:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Content of the label / left column"},value:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Content of the value / right column"}}};const E={title:"Komponenter/Lists/DetailListCard",component:l,subcomponents:{DetailListCardItem:a},tags:["autodocs"]},n={args:{},render:t=>e.createElement("div",null,e.createElement(l,{...t},e.createElement(a,{label:"Kontonavn",value:"Daglig konto"}),e.createElement(a,{label:"Kontotype",value:"Brukskonto"}),e.createElement(a,{label:"Kontonummer",value:"1234 45 34554"}),e.createElement(a,{label:"Kontoeier",value:"Ola Nordmann"})))},s={args:{bgColor:"secondary"},render:t=>e.createElement("div",null,e.createElement(l,{...t},e.createElement(a,{label:"Kontonavn",value:"Daglig konto"}),e.createElement(a,{label:"Kontotype",value:"Brukskonto"}),e.createElement(a,{label:"Kontonummer",value:"1234 45 34554"}),e.createElement(a,{label:"Kontoeier",value:"Ola Nordmann"})))},i={args:{bgColor:"tertiary"},render:t=>e.createElement("div",null,e.createElement(l,{...t},e.createElement(a,{label:"Kontonavn",value:"Daglig konto"}),e.createElement(a,{label:"Kontotype",value:"Brukskonto"}),e.createElement(a,{label:"Kontonummer",value:"1234 45 34554"}),e.createElement(a,{label:"Kontoeier",value:"Ola Nordmann"})))};var m,c,u;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {},
  render: args => <div>
            <DetailListCard {...args}>
                <DetailListCardItem label="Kontonavn" value="Daglig konto" />
                <DetailListCardItem label="Kontotype" value="Brukskonto" />
                <DetailListCardItem label="Kontonummer" value="1234 45 34554" />
                <DetailListCardItem label="Kontoeier" value="Ola Nordmann" />
            </DetailListCard>
        </div>
}`,...(u=(c=n.parameters)==null?void 0:c.docs)==null?void 0:u.source}}};var p,g,v;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    bgColor: 'secondary'
  },
  render: args => <div>
            <DetailListCard {...args}>
                <DetailListCardItem label="Kontonavn" value="Daglig konto" />
                <DetailListCardItem label="Kontotype" value="Brukskonto" />
                <DetailListCardItem label="Kontonummer" value="1234 45 34554" />
                <DetailListCardItem label="Kontoeier" value="Ola Nordmann" />
            </DetailListCard>
        </div>
}`,...(v=(g=s.parameters)==null?void 0:g.docs)==null?void 0:v.source}}};var b,y,C;i.parameters={...i.parameters,docs:{...(b=i.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    bgColor: 'tertiary'
  },
  render: args => <div>
            <DetailListCard {...args}>
                <DetailListCardItem label="Kontonavn" value="Daglig konto" />
                <DetailListCardItem label="Kontotype" value="Brukskonto" />
                <DetailListCardItem label="Kontonummer" value="1234 45 34554" />
                <DetailListCardItem label="Kontoeier" value="Ola Nordmann" />
            </DetailListCard>
        </div>
}`,...(C=(y=i.parameters)==null?void 0:y.docs)==null?void 0:C.source}}};const K=["Standard","SecondaryBg","TertiaryBg"];export{s as SecondaryBg,n as Standard,i as TertiaryBg,K as __namedExportsOrder,E as default};
