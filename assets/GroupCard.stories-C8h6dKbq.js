import{R as e}from"./index-DQDNmYQF.js";import{c as k}from"./index-D2FocPV0.js";import{f,W as G}from"./WithCardAction-BvL5dv80.js";import{C as b,T as R,S as N,a as T}from"./Title-Rg7Vduii.js";import{a as g}from"./Heading-YepvjHrD.js";import{P as y}from"./Paragraph-7jO2Jnpx.js";function K(t,r){const{className:a,children:n,bgColor:d="primary",noMargin:l,appearance:s="default",as:p="div",...x}=t;return e.createElement(p,{className:k("ffe-group-card",{"ffe-group-card--no-margin":l,[`ffe-group-card--bg-${d}`]:d,"ffe-default-mode":s==="default"},a),role:p==="div"?"group":void 0,...x,ref:r},n)}const m=f(K);m.__docgenInfo={description:"",methods:[],displayName:"GroupCard",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"The children of the GroupCard component"},bgColor:{required:!1,tsType:{name:"union",raw:"'primary' | 'secondary' | 'tertiary'",elements:[{name:"literal",value:"'primary'"},{name:"literal",value:"'secondary'"},{name:"literal",value:"'tertiary'"}]},description:"The background color of the whole groupcard element\n\nProperty has new values that work with dark and accent mode as part of the Semantic Color update\nPossible values: `primary` `secondary` `tertiary`\n[Read more in the upgrade guide](https://sparebank1.github.io/designsystem/?path=/docs/introduksjon-changelog--docs#2025---februar---semantiske-farger)"},bgDarkmodeColor:{required:!1,tsType:{name:"never"},description:`@deprecated as part of update to Semantic Colors

Property is replaced by the updated values for \`bgColor\` that works on dark mode
[Read more in the upgrade guide](https://sparebank1.github.io/designsystem/?path=/docs/introduksjon-changelog--docs#2025---februar---semantiske-farger)`},noMargin:{required:!1,tsType:{name:"boolean"},description:"No margin on card"},appearance:{required:!1,tsType:{name:"union",raw:"'default' | 'accent'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'accent'"}]},description:"Avgjør utseende i kontekst accent. Hvis man ønsker et blått utseende i kontekst accent, velg appearance: 'accent'"}}};function W(t,r){const{className:a,noPadding:n=!1,noSeparator:d=!1,children:l,...s}=t;return e.createElement(G,{baseClassName:"ffe-group-card__element",className:k("ffe-group-card__element",a,{"ffe-group-card__element--no-padding":n,"ffe-group-card__element--no-separator":d}),...s,ref:r},({CardAction:p})=>typeof l=="function"?l({Text:T,Subtext:N,Title:R,CardName:b,CardAction:p}):l)}const o=f(W);o.__docgenInfo={description:"",methods:[],displayName:"GroupCardElement",props:{noPadding:{required:!1,tsType:{name:"boolean"},description:"No padding on the element"},noSeparator:{required:!1,tsType:{name:"boolean"},description:"Visible border between the elements"},children:{required:!0,tsType:{name:"union",raw:`| React.ReactNode
| ((cardRenderProps: CardRenderProps) => React.ReactNode)`,elements:[{name:"ReactReactNode",raw:"React.ReactNode"},{name:"unknown"}]},description:""}}};function V(t,r){const{className:a,noPadding:n=!1,children:d,...l}=t;return e.createElement(G,{baseClassName:"ffe-group-card__footer",className:k("ffe-group-card__footer",a,{"ffe-group-card__element--no-padding":n}),...l,ref:r},({CardAction:s})=>typeof d=="function"?d({Text:T,Subtext:N,Title:R,CardName:b,CardAction:s}):d)}const E=f(V);E.__docgenInfo={description:"",methods:[],displayName:"GroupCardFooter",props:{noPadding:{required:!1,tsType:{name:"boolean"},description:"No padding on the element"},children:{required:!0,tsType:{name:"union",raw:`| React.ReactNode
| ((cardRenderProps: CardRenderProps) => React.ReactNode)`,elements:[{name:"ReactReactNode",raw:"React.ReactNode"},{name:"unknown"}]},description:""}}};function I(t,r){const{className:a,noPadding:n=!1,noSeparator:d=!1,children:l,...s}=t;return e.createElement(G,{baseClassName:"ffe-group-card__title",className:k("ffe-group-card__title",a,{"ffe-group-card__element--no-padding":n,"ffe-group-card__element--no-separator":d}),...s,ref:r},({CardAction:p})=>typeof l=="function"?l({Text:T,Subtext:N,Title:R,CardName:b,CardAction:p}):l)}const h=f(I);h.__docgenInfo={description:"",methods:[],displayName:"GroupCardTitle",props:{noPadding:{required:!1,tsType:{name:"boolean"},description:"No padding on the element"},noSeparator:{required:!1,tsType:{name:"boolean"},description:"Visible border underneath title"},children:{required:!0,tsType:{name:"union",raw:`| React.ReactNode
| ((cardRenderProps: CardRenderProps) => React.ReactNode)`,elements:[{name:"ReactReactNode",raw:"React.ReactNode"},{name:"unknown"}]},description:""}}};const M=t=>e.createElement("div",{...t},"Custom ",t.children),O={title:"Komponenter/Cards/GroupCard",component:m,argTypes:{as:{options:["span","div","custom"],mapping:{div:"div",span:"span",custom:M}}}},i={args:{},render:t=>e.createElement(m,{...t},e.createElement(h,null,e.createElement(g,{lookLike:5},"Tittel på gruppe")),e.createElement(o,null,"Dette er et element i GroupCard"),e.createElement(o,null,"Dette er et element i GroupCard"),e.createElement(o,null,"Dette er et element i GroupCard"),e.createElement(E,null,({CardAction:r})=>e.createElement(r,{href:"https://design.sparebank1.no"},"Vis mer")))},c={args:{...i.args},render:t=>e.createElement(m,{...t},e.createElement(h,{noSeparator:!0},e.createElement(g,{lookLike:5},"Tittel på gruppe")),e.createElement(o,{noSeparator:!0},"Dette er et element i GroupCard en linje mellom elementene"),e.createElement(o,{noSeparator:!0},"Dette er et element i GroupCard en linje mellom elementene"),e.createElement(o,{noSeparator:!0},"Dette er et element i GroupCard en linje mellom elementene"),e.createElement(E,null,"Footer"))},u={args:{as:"ul"},render:t=>e.createElement(m,{...t},e.createElement(o,{as:"li"},({CardAction:r,CardName:a,Title:n})=>e.createElement(e.Fragment,null,e.createElement(a,null,"Kortnavn"),e.createElement(n,null,e.createElement(r,{href:"https://design.sparebank1.no"},"Lenke men hele kortet er klikkbart")))),e.createElement(o,{as:"li"},"Dette er ett ikke-klikkbart liste element i GroupCard"),e.createElement(o,{as:"li"},({CardAction:r,CardName:a,Title:n})=>e.createElement(e.Fragment,null,e.createElement(a,null,"Kortnavn"),e.createElement(n,null,e.createElement(r,{href:"https://design.sparebank1.no"},"Lenke men hele kortet er klikkbart")))),e.createElement(o,{as:"li"},({CardAction:r,CardName:a,Title:n})=>e.createElement(e.Fragment,null,e.createElement(a,null,"Kortnavn"),e.createElement(n,null,e.createElement(r,{href:"https://design.sparebank1.no"},"Lenke men hele kortet er klikkbart")))))},C={args:{...i.args},render:t=>e.createElement(m,{...t},e.createElement(h,null,e.createElement(g,{lookLike:5},"Tittel på gruppe")),e.createElement(o,null,({CardAction:r,CardName:a,Title:n,Subtext:d,Text:l})=>e.createElement(e.Fragment,null,e.createElement(a,null,"Kortnavn"),e.createElement(n,null,e.createElement(r,{href:"https://design.sparebank1.no"},"Lenke men hele kortet er klikkbart")),e.createElement(d,null,"En liten undertekst"),e.createElement(l,null,"Her kan man ha tekst"))),e.createElement(o,null,({CardAction:r})=>e.createElement(e.Fragment,null,e.createElement(g,null,e.createElement(r,{as:"button"},"Knapp")),e.createElement(y,null,"Hele kortet er klikkbart"))),e.createElement(o,null,({CardAction:r})=>e.createElement(e.Fragment,null,e.createElement(g,null,e.createElement(r,{href:"https://design.sparebank1.no"},"Lenke")),e.createElement(y,null,"Hele kortet er klikkbart"))),e.createElement(E,null,({CardAction:r})=>e.createElement(r,{href:"https://design.sparebank1.no"},"Vis mer")))};var _,S,A;i.parameters={...i.parameters,docs:{...(_=i.parameters)==null?void 0:_.docs,source:{originalSource:`{
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
}`,...(A=(S=i.parameters)==null?void 0:S.docs)==null?void 0:A.source}}};var P,v,w;c.parameters={...c.parameters,docs:{...(P=c.parameters)==null?void 0:P.docs,source:{originalSource:`{
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
}`,...(w=(v=c.parameters)==null?void 0:v.docs)==null?void 0:w.source}}};var F,H,L;u.parameters={...u.parameters,docs:{...(F=u.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    as: 'ul'
  },
  render: args => <GroupCard {...args}>
            <GroupCardElement as={'li'}>
                {({
        CardAction,
        CardName,
        Title
      }: CardRenderProps) => <>
                        <CardName>Kortnavn</CardName>
                        <Title>
                            <CardAction href="https://design.sparebank1.no">
                                Lenke men hele kortet er klikkbart
                            </CardAction>
                        </Title>
                    </>}
            </GroupCardElement>
            <GroupCardElement as={'li'}>
                Dette er ett ikke-klikkbart liste element i GroupCard
            </GroupCardElement>
            <GroupCardElement as={'li'}>
                {({
        CardAction,
        CardName,
        Title
      }: CardRenderProps) => <>
                        <CardName>Kortnavn</CardName>
                        <Title>
                            <CardAction href="https://design.sparebank1.no">
                                Lenke men hele kortet er klikkbart
                            </CardAction>
                        </Title>
                    </>}
            </GroupCardElement>
            <GroupCardElement as={'li'}>
                {({
        CardAction,
        CardName,
        Title
      }: CardRenderProps) => <>
                        <CardName>Kortnavn</CardName>
                        <Title>
                            <CardAction href="https://design.sparebank1.no">
                                Lenke men hele kortet er klikkbart
                            </CardAction>
                        </Title>
                    </>}
            </GroupCardElement>
        </GroupCard>
}`,...(L=(H=u.parameters)==null?void 0:H.docs)==null?void 0:L.source}}};var D,q,j;C.parameters={...C.parameters,docs:{...(D=C.parameters)==null?void 0:D.docs,source:{originalSource:`{
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
}`,...(j=(q=C.parameters)==null?void 0:q.docs)==null?void 0:j.source}}};const $=["Standard","NoSeparator","AsList","WithCardAction"],Y=Object.freeze(Object.defineProperty({__proto__:null,AsList:u,NoSeparator:c,Standard:i,WithCardAction:C,__namedExportsOrder:$,default:O},Symbol.toStringTag,{value:"Module"}));export{Y as G,c as N,i as S,C as W};
