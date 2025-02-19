import{R as e}from"./index-eCxJ45ll.js";import{c as g}from"./index-DezCrw0f.js";import{f as C,W as E}from"./WithCardAction-D8xJ0iKc.js";import{C as G,T as b,S as R,a as N}from"./Title-Q79Fy4wU.js";import{b as c}from"./Heading-BYFfwx2T.js";import{P as T}from"./Paragraph-Qjq98ToE.js";function q({className:n,children:r,bgColor:o="primary",noMargin:l,...a},t){return e.createElement("div",{className:g("ffe-group-card",{"ffe-group-card--no-margin":l,[`ffe-group-card--bg-${o}`]:o},n),role:"group",...a,ref:t},r)}const u=C(q);u.__docgenInfo={description:"",methods:[],displayName:"GroupCard",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"The children of the GroupCard component"},bgColor:{required:!1,tsType:{name:"union",raw:"'primary' | 'secondary' | 'tertiary'",elements:[{name:"literal",value:"'primary'"},{name:"literal",value:"'secondary'"},{name:"literal",value:"'tertiary'"}]},description:"The background color of the whole groupcard element\n\nProperty has new values that work with dark and accent mode as part of the Semantic Color update\nPossible values: `primary` `secondary` `tertiary`\n[Read more in the upgrade guide](https://sparebank1.github.io/designsystem/?path=/docs/introduksjon-changelog--docs#2025---februar---semantiske-farger)",defaultValue:{value:"'primary'",computed:!1}},bgDarkmodeColor:{required:!1,tsType:{name:"never"},description:`@deprecated as part of update to Semantic Colors

Property is replaced by the updated values for \`bgColor\` that works on dark mode
[Read more in the upgrade guide](https://sparebank1.github.io/designsystem/?path=/docs/introduksjon-changelog--docs#2025---februar---semantiske-farger)`},noMargin:{required:!1,tsType:{name:"boolean"},description:"No margin on card"}},composes:["Omit"]};function v(n,r){const{className:o,noPadding:l=!1,noSeparator:a=!1,children:t,...s}=n;return e.createElement(E,{baseClassName:"ffe-group-card__element",className:g("ffe-group-card__element",o,{"ffe-group-card__element--no-padding":l,"ffe-group-card__element--no-separator":a}),...s,ref:r},({CardAction:k})=>typeof t=="function"?t({Text:N,Subtext:R,Title:b,CardName:G,CardAction:k}):t)}const d=C(v);d.__docgenInfo={description:"",methods:[],displayName:"GroupCardElement",props:{noPadding:{required:!1,tsType:{name:"boolean"},description:"No padding on the element"},noSeparator:{required:!1,tsType:{name:"boolean"},description:"Visible border between the elements"},children:{required:!0,tsType:{name:"union",raw:`| React.ReactNode
| ((cardRenderProps: CardRenderProps) => React.ReactNode)`,elements:[{name:"ReactReactNode",raw:"React.ReactNode"},{name:"unknown"}]},description:""}}};function x(n,r){const{className:o,noPadding:l=!1,children:a,...t}=n;return e.createElement(E,{baseClassName:"ffe-group-card__footer",className:g("ffe-group-card__footer",o,{"ffe-group-card__element--no-padding":l}),...t,ref:r},({CardAction:s})=>typeof a=="function"?a({Text:N,Subtext:R,Title:b,CardName:G,CardAction:s}):a)}const f=C(x);f.__docgenInfo={description:"",methods:[],displayName:"GroupCardFooter",props:{noPadding:{required:!1,tsType:{name:"boolean"},description:"No padding on the element"},children:{required:!0,tsType:{name:"union",raw:`| React.ReactNode
| ((cardRenderProps: CardRenderProps) => React.ReactNode)`,elements:[{name:"ReactReactNode",raw:"React.ReactNode"},{name:"unknown"}]},description:""}}};function j(n,r){const{className:o,noPadding:l=!1,noSeparator:a=!1,children:t,...s}=n;return e.createElement(E,{baseClassName:"ffe-group-card__title",className:g("ffe-group-card__title",o,{"ffe-group-card__element--no-padding":l,"ffe-group-card__element--no-separator":a}),...s,ref:r},({CardAction:k})=>typeof t=="function"?t({Text:N,Subtext:R,Title:b,CardName:G,CardAction:k}):t)}const h=C(j);h.__docgenInfo={description:"",methods:[],displayName:"GroupCardTitle",props:{noPadding:{required:!1,tsType:{name:"boolean"},description:"No padding on the element"},noSeparator:{required:!1,tsType:{name:"boolean"},description:"Visible border underneath title"},children:{required:!0,tsType:{name:"union",raw:`| React.ReactNode
| ((cardRenderProps: CardRenderProps) => React.ReactNode)`,elements:[{name:"ReactReactNode",raw:"React.ReactNode"},{name:"unknown"}]},description:""}}};const L={title:"Komponenter/Cards/GroupCard",component:u},p={args:{},render:n=>e.createElement(u,{...n},e.createElement(h,null,e.createElement(c,{lookLike:5},"Tittel på gruppe")),e.createElement(d,null,"Dette er et element i GroupCard"),e.createElement(d,null,"Dette er et element i GroupCard"),e.createElement(d,null,"Dette er et element i GroupCard"),e.createElement(f,null,({CardAction:r})=>e.createElement(r,{href:"https://design.sparebank1.no"},"Vis mer")))},i={args:{...p.args},render:n=>e.createElement(u,{...n},e.createElement(h,{noSeparator:!0},e.createElement(c,{lookLike:5},"Tittel på gruppe")),e.createElement(d,{noSeparator:!0},"Dette er et element i GroupCard en linje mellom elementene"),e.createElement(d,{noSeparator:!0},"Dette er et element i GroupCard en linje mellom elementene"),e.createElement(d,{noSeparator:!0},"Dette er et element i GroupCard en linje mellom elementene"),e.createElement(f,null,"Footer"))},m={args:{...p.args},render:n=>e.createElement(u,{...n},e.createElement(h,null,e.createElement(c,{lookLike:5},"Tittel på gruppe")),e.createElement(d,null,({CardAction:r,CardName:o,Title:l,Subtext:a,Text:t})=>e.createElement(e.Fragment,null,e.createElement(o,null,"Kortnavn"),e.createElement(l,null,e.createElement(r,{href:"https://design.sparebank1.no"},"Lenke men hele kortet er klikkbart")),e.createElement(a,null,"En liten undertekst"),e.createElement(t,null,"Her kan man ha tekst"))),e.createElement(d,null,({CardAction:r})=>e.createElement(e.Fragment,null,e.createElement(c,null,e.createElement(r,{as:"button"},"Knapp")),e.createElement(T,null,"Hele kortet er klikkbart"))),e.createElement(d,null,({CardAction:r})=>e.createElement(e.Fragment,null,e.createElement(c,null,e.createElement(r,{href:"https://design.sparebank1.no"},"Lenke")),e.createElement(T,null,"Hele kortet er klikkbart"))),e.createElement(f,null,({CardAction:r})=>e.createElement(r,{href:"https://design.sparebank1.no"},"Vis mer")))};var y,_,S;p.parameters={...p.parameters,docs:{...(y=p.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {},
  render: args => <GroupCard {...args}>
            <GroupCardTitle>
                <Heading2 lookLike={5}>Tittel på gruppe</Heading2>
            </GroupCardTitle>
            <GroupCardElement>Dette er et element i GroupCard</GroupCardElement>
            <GroupCardElement>Dette er et element i GroupCard</GroupCardElement>
            <GroupCardElement>Dette er et element i GroupCard</GroupCardElement>
            <GroupCardFooter>
                {({
        CardAction
      }: CardRenderProps) => <CardAction href="https://design.sparebank1.no">
                        Vis mer
                    </CardAction>}
            </GroupCardFooter>
        </GroupCard>
}`,...(S=(_=p.parameters)==null?void 0:_.docs)==null?void 0:S.source}}};var P,w,F;i.parameters={...i.parameters,docs:{...(P=i.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    ...Standard.args
  },
  render: args => <GroupCard {...args}>
            <GroupCardTitle noSeparator={true}>
                <Heading2 lookLike={5}>Tittel på gruppe</Heading2>
            </GroupCardTitle>
            <GroupCardElement noSeparator={true}>
                Dette er et element i GroupCard en linje mellom elementene
            </GroupCardElement>
            <GroupCardElement noSeparator={true}>
                Dette er et element i GroupCard en linje mellom elementene
            </GroupCardElement>
            <GroupCardElement noSeparator={true}>
                Dette er et element i GroupCard en linje mellom elementene
            </GroupCardElement>
            <GroupCardFooter>Footer</GroupCardFooter>
        </GroupCard>
}`,...(F=(w=i.parameters)==null?void 0:w.docs)==null?void 0:F.source}}};var A,H,D;m.parameters={...m.parameters,docs:{...(A=m.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    ...Standard.args
  },
  render: args => <GroupCard {...args}>
            <GroupCardTitle>
                <Heading2 lookLike={5}>Tittel på gruppe</Heading2>
            </GroupCardTitle>
            <GroupCardElement>
                {({
        CardAction,
        CardName,
        Title,
        Subtext,
        Text
      }: CardRenderProps) => <>
                        <CardName>Kortnavn</CardName>
                        <Title>
                            <CardAction href="https://design.sparebank1.no">
                                Lenke men hele kortet er klikkbart
                            </CardAction>
                        </Title>
                        <Subtext>En liten undertekst</Subtext>
                        <Text>Her kan man ha tekst</Text>
                    </>}
            </GroupCardElement>
            <GroupCardElement>
                {({
        CardAction
      }: CardRenderProps) => <>
                        <Heading2>
                            <CardAction as="button">Knapp</CardAction>
                        </Heading2>
                        <Paragraph>Hele kortet er klikkbart</Paragraph>
                    </>}
            </GroupCardElement>
            <GroupCardElement>
                {({
        CardAction
      }: CardRenderProps) => <>
                        <Heading2>
                            <CardAction href="https://design.sparebank1.no">
                                Lenke
                            </CardAction>
                        </Heading2>
                        <Paragraph>Hele kortet er klikkbart</Paragraph>
                    </>}
            </GroupCardElement>
            <GroupCardFooter>
                {({
        CardAction
      }: CardRenderProps) => <CardAction href="https://design.sparebank1.no">
                        Vis mer
                    </CardAction>}
            </GroupCardFooter>
        </GroupCard>
}`,...(D=(H=m.parameters)==null?void 0:H.docs)==null?void 0:D.source}}};const W=["Standard","NoSeparator","WithCardAction"],z=Object.freeze(Object.defineProperty({__proto__:null,NoSeparator:i,Standard:p,WithCardAction:m,__namedExportsOrder:W,default:L},Symbol.toStringTag,{value:"Module"}));export{z as G,i as N,p as S,m as W};
