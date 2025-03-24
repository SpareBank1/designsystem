import{R as e}from"./index-DQDNmYQF.js";import{c as k}from"./index-QCImZZ3W.js";import{f,W as G}from"./WithCardAction-BEfhMYaK.js";import{C as b,T as R,S as N,a as T}from"./Title-CmDdbz_O.js";import{H as g}from"./Heading-DKfn0IwC.js";import{P as y}from"./Paragraph-DEYlXMQQ.js";function K(t,r){const{className:a,children:n,bgColor:d="primary",noMargin:l,as:s="div",...m}=t;return e.createElement(s,{className:k("ffe-group-card",{"ffe-group-card--no-margin":l,[`ffe-group-card--bg-${d}`]:d},a),role:s==="div"&&"group",...m,ref:r},n)}const p=f(K);p.__docgenInfo={description:"",methods:[],displayName:"GroupCard",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"The children of the GroupCard component"},bgColor:{required:!1,tsType:{name:"union",raw:"'primary' | 'secondary' | 'tertiary'",elements:[{name:"literal",value:"'primary'"},{name:"literal",value:"'secondary'"},{name:"literal",value:"'tertiary'"}]},description:"The background color of the whole groupcard element\n\nProperty has new values that work with dark and accent mode as part of the Semantic Color update\nPossible values: `primary` `secondary` `tertiary`\n[Read more in the upgrade guide](https://sparebank1.github.io/designsystem/?path=/docs/introduksjon-changelog--docs#2025---februar---semantiske-farger)"},bgDarkmodeColor:{required:!1,tsType:{name:"never"},description:`@deprecated as part of update to Semantic Colors

Property is replaced by the updated values for \`bgColor\` that works on dark mode
[Read more in the upgrade guide](https://sparebank1.github.io/designsystem/?path=/docs/introduksjon-changelog--docs#2025---februar---semantiske-farger)`},noMargin:{required:!1,tsType:{name:"boolean"},description:"No margin on card"}}};function j(t,r){const{className:a,noPadding:n=!1,noSeparator:d=!1,children:l,...s}=t;return e.createElement(G,{baseClassName:"ffe-group-card__element",className:k("ffe-group-card__element",a,{"ffe-group-card__element--no-padding":n,"ffe-group-card__element--no-separator":d}),...s,ref:r},({CardAction:m})=>typeof l=="function"?l({Text:T,Subtext:N,Title:R,CardName:b,CardAction:m}):l)}const o=f(j);o.__docgenInfo={description:"",methods:[],displayName:"GroupCardElement",props:{noPadding:{required:!1,tsType:{name:"boolean"},description:"No padding on the element"},noSeparator:{required:!1,tsType:{name:"boolean"},description:"Visible border between the elements"},children:{required:!0,tsType:{name:"union",raw:`| React.ReactNode
| ((cardRenderProps: CardRenderProps) => React.ReactNode)`,elements:[{name:"ReactReactNode",raw:"React.ReactNode"},{name:"unknown"}]},description:""}}};function W(t,r){const{className:a,noPadding:n=!1,children:d,...l}=t;return e.createElement(G,{baseClassName:"ffe-group-card__footer",className:k("ffe-group-card__footer",a,{"ffe-group-card__element--no-padding":n}),...l,ref:r},({CardAction:s})=>typeof d=="function"?d({Text:T,Subtext:N,Title:R,CardName:b,CardAction:s}):d)}const E=f(W);E.__docgenInfo={description:"",methods:[],displayName:"GroupCardFooter",props:{noPadding:{required:!1,tsType:{name:"boolean"},description:"No padding on the element"},children:{required:!0,tsType:{name:"union",raw:`| React.ReactNode
| ((cardRenderProps: CardRenderProps) => React.ReactNode)`,elements:[{name:"ReactReactNode",raw:"React.ReactNode"},{name:"unknown"}]},description:""}}};function V(t,r){const{className:a,noPadding:n=!1,noSeparator:d=!1,children:l,...s}=t;return e.createElement(G,{baseClassName:"ffe-group-card__title",className:k("ffe-group-card__title",a,{"ffe-group-card__element--no-padding":n,"ffe-group-card__element--no-separator":d}),...s,ref:r},({CardAction:m})=>typeof l=="function"?l({Text:T,Subtext:N,Title:R,CardName:b,CardAction:m}):l)}const h=f(V);h.__docgenInfo={description:"",methods:[],displayName:"GroupCardTitle",props:{noPadding:{required:!1,tsType:{name:"boolean"},description:"No padding on the element"},noSeparator:{required:!1,tsType:{name:"boolean"},description:"Visible border underneath title"},children:{required:!0,tsType:{name:"union",raw:`| React.ReactNode
| ((cardRenderProps: CardRenderProps) => React.ReactNode)`,elements:[{name:"ReactReactNode",raw:"React.ReactNode"},{name:"unknown"}]},description:""}}};const I=t=>e.createElement("div",{...t},"Custom ",t.children),M={title:"Komponenter/Cards/GroupCard",component:p,argTypes:{as:{options:["span","div","custom"],mapping:{div:"div",span:"span",custom:I}}}},i={args:{as:"div"},render:t=>e.createElement(p,{...t},e.createElement(h,null,e.createElement(g,{lookLike:5},"Tittel på gruppe")),e.createElement(o,null,"Dette er et element i GroupCard"),e.createElement(o,null,"Dette er et element i GroupCard"),e.createElement(o,null,"Dette er et element i GroupCard"),e.createElement(E,null,({CardAction:r})=>e.createElement(r,{href:"https://design.sparebank1.no"},"Vis mer")))},c={args:{...i.args},render:t=>e.createElement(p,{...t},e.createElement(h,{noSeparator:!0},e.createElement(g,{lookLike:5},"Tittel på gruppe")),e.createElement(o,{noSeparator:!0},"Dette er et element i GroupCard en linje mellom elementene"),e.createElement(o,{noSeparator:!0},"Dette er et element i GroupCard en linje mellom elementene"),e.createElement(o,{noSeparator:!0},"Dette er et element i GroupCard en linje mellom elementene"),e.createElement(E,null,"Footer"))},u={args:{as:"ul"},render:t=>e.createElement(p,{...t},e.createElement(o,{as:"li"},({CardAction:r,CardName:a,Title:n})=>e.createElement(e.Fragment,null,e.createElement(a,null,"Kortnavn"),e.createElement(n,null,e.createElement(r,{href:"https://design.sparebank1.no"},"Lenke men hele kortet er klikkbart")))),e.createElement(o,{as:"li"},"Dette er ett ikke-klikkbart liste element i GroupCard"),e.createElement(o,{as:"li"},({CardAction:r,CardName:a,Title:n})=>e.createElement(e.Fragment,null,e.createElement(a,null,"Kortnavn"),e.createElement(n,null,e.createElement(r,{href:"https://design.sparebank1.no"},"Lenke men hele kortet er klikkbart")))),e.createElement(o,{as:"li"},({CardAction:r,CardName:a,Title:n})=>e.createElement(e.Fragment,null,e.createElement(a,null,"Kortnavn"),e.createElement(n,null,e.createElement(r,{href:"https://design.sparebank1.no"},"Lenke men hele kortet er klikkbart")))))},C={args:{...i.args},render:t=>e.createElement(p,{...t},e.createElement(h,null,e.createElement(g,{lookLike:5},"Tittel på gruppe")),e.createElement(o,null,({CardAction:r,CardName:a,Title:n,Subtext:d,Text:l})=>e.createElement(e.Fragment,null,e.createElement(a,null,"Kortnavn"),e.createElement(n,null,e.createElement(r,{href:"https://design.sparebank1.no"},"Lenke men hele kortet er klikkbart")),e.createElement(d,null,"En liten undertekst"),e.createElement(l,null,"Her kan man ha tekst"))),e.createElement(o,null,({CardAction:r})=>e.createElement(e.Fragment,null,e.createElement(g,null,e.createElement(r,{as:"button"},"Knapp")),e.createElement(y,null,"Hele kortet er klikkbart"))),e.createElement(o,null,({CardAction:r})=>e.createElement(e.Fragment,null,e.createElement(g,null,e.createElement(r,{href:"https://design.sparebank1.no"},"Lenke")),e.createElement(y,null,"Hele kortet er klikkbart"))),e.createElement(E,null,({CardAction:r})=>e.createElement(r,{href:"https://design.sparebank1.no"},"Vis mer")))};var _,S,P;i.parameters={...i.parameters,docs:{...(_=i.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    as: 'div'
  },
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
}`,...(P=(S=i.parameters)==null?void 0:S.docs)==null?void 0:P.source}}};var A,v,w;c.parameters={...c.parameters,docs:{...(A=c.parameters)==null?void 0:A.docs,source:{originalSource:`{
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
}`,...(L=(H=u.parameters)==null?void 0:H.docs)==null?void 0:L.source}}};var D,q,x;C.parameters={...C.parameters,docs:{...(D=C.parameters)==null?void 0:D.docs,source:{originalSource:`{
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
}`,...(x=(q=C.parameters)==null?void 0:q.docs)==null?void 0:x.source}}};const O=["Standard","NoSeparator","AsList","WithCardAction"],X=Object.freeze(Object.defineProperty({__proto__:null,AsList:u,NoSeparator:c,Standard:i,WithCardAction:C,__namedExportsOrder:O,default:M},Symbol.toStringTag,{value:"Module"}));export{X as G,c as N,i as S,C as W};
