import{R as e}from"./index-DQDNmYQF.js";import{c as k}from"./index-QCImZZ3W.js";const n=({className:t,appearance:l="default",bgColor:r,children:d,...C})=>e.createElement("dl",{className:k("ffe-detail-list-card",t,{[`ffe-detail-list-card--bg-${r}`]:r,"ffe-default-mode":l==="default"}),...C},d);n.__docgenInfo={description:"",methods:[],displayName:"DetailListCard",props:{appearance:{required:!1,tsType:{name:"union",raw:"'default' | 'accent'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'accent'"}]},description:"Avgjør utseende i kontekst accent. Hvis man ønsker et blått utseende i kontekst accent, velg appearance: 'accent'",defaultValue:{value:"'default'",computed:!1}},bgColor:{required:!1,tsType:{name:"union",raw:"'primary' | 'secondary' | 'tertiary'",elements:[{name:"literal",value:"'primary'"},{name:"literal",value:"'secondary'"},{name:"literal",value:"'tertiary'"}]},description:"Property has new values that work with dark and accent mode as part of the Semantic Color update\nPossible values: `primary` `secondary` `tertiary`\n[Read more in the upgrade guide](https://sparebank1.github.io/designsystem/?path=/docs/introduksjon-changelog--docs#2025---februar---semantiske-farger)"},bgDarkmodeColor:{required:!1,tsType:{name:"never"},description:`@deprecated as part of update to Semantic Colors

Property is replaced by the updated values for \`bgColor\` that works on dark mode
[Read more in the upgrade guide](https://sparebank1.github.io/designsystem/?path=/docs/introduksjon-changelog--docs#2025---februar---semantiske-farger)`}}};const a=({className:t,label:l,value:r,...d})=>e.createElement("div",{className:k("ffe-detail-list-card__item",t),...d},e.createElement("dt",{className:"ffe-detail-list-card__item-label"},e.isValidElement(l)?e.cloneElement(l,{...l.props}):l),e.createElement("dd",{className:"ffe-detail-list-card__item-value"},e.isValidElement(r)?e.cloneElement(r,{...r.props}):r));a.__docgenInfo={description:"",methods:[],displayName:"DetailListCardItem",props:{label:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Content of the label / left column"},value:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Content of the value / right column"}}};const K={title:"Komponenter/Lists/DetailListCard",component:n,subcomponents:{DetailListCardItem:a},tags:["autodocs"]},o={args:{},render:t=>e.createElement("div",null,e.createElement(n,{...t},e.createElement(a,{label:"Kontonavn",value:"Daglig konto"}),e.createElement(a,{label:"Kontotype",value:"Brukskonto"}),e.createElement(a,{label:"Kontonummer",value:"1234 45 34554"}),e.createElement(a,{label:"Kontoeier",value:"Ola Nordmann"})))},s={args:{bgColor:"secondary"},render:t=>e.createElement("div",null,e.createElement(n,{...t},e.createElement(a,{label:"Kontonavn",value:"Daglig konto"}),e.createElement(a,{label:"Kontotype",value:"Brukskonto"}),e.createElement(a,{label:"Kontonummer",value:"1234 45 34554"}),e.createElement(a,{label:"Kontoeier",value:"Ola Nordmann"})))},i={args:{bgColor:"tertiary"},render:t=>e.createElement("div",null,e.createElement(n,{...t},e.createElement(a,{label:"Kontonavn",value:"Daglig konto"}),e.createElement(a,{label:"Kontotype",value:"Brukskonto"}),e.createElement(a,{label:"Kontonummer",value:"1234 45 34554"}),e.createElement(a,{label:"Kontoeier",value:"Ola Nordmann"})))};var m,c,u;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {},
  render: args => <div>
            <DetailListCard {...args}>
                <DetailListCardItem label="Kontonavn" value="Daglig konto" />
                <DetailListCardItem label="Kontotype" value="Brukskonto" />
                <DetailListCardItem label="Kontonummer" value="1234 45 34554" />
                <DetailListCardItem label="Kontoeier" value="Ola Nordmann" />
            </DetailListCard>
        </div>
}`,...(u=(c=o.parameters)==null?void 0:c.docs)==null?void 0:u.source}}};var p,g,v;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(v=(g=s.parameters)==null?void 0:g.docs)==null?void 0:v.source}}};var b,f,y;i.parameters={...i.parameters,docs:{...(b=i.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
}`,...(y=(f=i.parameters)==null?void 0:f.docs)==null?void 0:y.source}}};const L=["Standard","SecondaryBg","TertiaryBg"];export{s as SecondaryBg,o as Standard,i as TertiaryBg,L as __namedExportsOrder,K as default};
