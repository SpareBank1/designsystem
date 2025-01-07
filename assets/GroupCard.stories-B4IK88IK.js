import{R as e}from"./index-ne9I_3bB.js";import{c as f}from"./index-B6-3w37c.js";import{f as E,W as k}from"./WithCardAction-Bpdr1y6g.js";import{T as R,S as b,a as T,C as N}from"./Title-okC6yB_j.js";import{H as g}from"./Heading-BmtvF97a.js";import{P as _}from"./Paragraph-CgekKyFC.js";function L({shadow:n,className:r,children:d,bgColor:l,bgDarkmodeColor:o,noMargin:a,...p},m){return e.createElement("div",{className:f("ffe-group-card",{"ffe-group-card--shadow":n,"ffe-group-card--no-margin":a,[`ffe-group-card--bg-${l}`]:l,[`ffe-group-card--dm-bg-${o}`]:o},r),role:"group",...p,ref:m},d)}const i=E(L);i.__docgenInfo={description:"",methods:[],displayName:"GroupCard",props:{shadow:{required:!1,tsType:{name:"boolean"},description:""},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"The children of the GroupCard component"},bgColor:{required:!1,tsType:{name:"union",raw:`| 'sand-30'
| 'sand-70'
| 'frost-30'
| 'syrin-30'
| 'syrin-70'`,elements:[{name:"literal",value:"'sand-30'"},{name:"literal",value:"'sand-70'"},{name:"literal",value:"'frost-30'"},{name:"literal",value:"'syrin-30'"},{name:"literal",value:"'syrin-70'"}]},description:"The background color of the whole groupcard element"},bgDarkmodeColor:{required:!1,tsType:{name:"union",raw:"'natt' | 'svart' | 'koksgraa'",elements:[{name:"literal",value:"'natt'"},{name:"literal",value:"'svart'"},{name:"literal",value:"'koksgraa'"}]},description:"The background color for darkmode of the whole groupcard element"},noMargin:{required:!1,tsType:{name:"boolean"},description:"No margin on card"}},composes:["Omit"]};function W(n,r){const{className:d,noPadding:l=!1,noSeparator:o=!1,children:a,...p}=n;return e.createElement(k,{baseClassName:"ffe-group-card__title",className:f("ffe-group-card__title",d,{"ffe-group-card__element--no-padding":l,"ffe-group-card__element--no-separator":o}),...p,ref:r},({CardAction:m})=>typeof a=="function"?a({Text:R,Subtext:b,Title:T,CardName:N,CardAction:m}):a)}const G=E(W);G.__docgenInfo={description:"",methods:[],displayName:"GroupCardTitle",props:{noPadding:{required:!1,tsType:{name:"boolean"},description:"No padding on the element"},noSeparator:{required:!1,tsType:{name:"boolean"},description:"Visible border underneath title"},children:{required:!0,tsType:{name:"union",raw:`| React.ReactNode
| ((cardRenderProps: CardRenderProps) => React.ReactNode)`,elements:[{name:"ReactReactNode",raw:"React.ReactNode"},{name:"unknown"}]},description:""}}};function j(n,r){const{className:d,noPadding:l=!1,noSeparator:o=!1,children:a,...p}=n;return e.createElement(k,{baseClassName:"ffe-group-card__element",className:f("ffe-group-card__element",d,{"ffe-group-card__element--no-padding":l,"ffe-group-card__element--no-separator":o}),...p,ref:r},({CardAction:m})=>typeof a=="function"?a({Text:R,Subtext:b,Title:T,CardName:N,CardAction:m}):a)}const t=E(j);t.__docgenInfo={description:"",methods:[],displayName:"GroupCardElement",props:{noPadding:{required:!1,tsType:{name:"boolean"},description:"No padding on the element"},noSeparator:{required:!1,tsType:{name:"boolean"},description:"Visible border between the elements"},children:{required:!0,tsType:{name:"union",raw:`| React.ReactNode
| ((cardRenderProps: CardRenderProps) => React.ReactNode)`,elements:[{name:"ReactReactNode",raw:"React.ReactNode"},{name:"unknown"}]},description:""}}};function V(n,r){const{className:d,noPadding:l=!1,children:o,...a}=n;return e.createElement(k,{baseClassName:"ffe-group-card__footer",className:f("ffe-group-card__footer",d,{"ffe-group-card__element--no-padding":l}),...a,ref:r},({CardAction:p})=>typeof o=="function"?o({Text:R,Subtext:b,Title:T,CardName:N,CardAction:p}):o)}const h=E(V);h.__docgenInfo={description:"",methods:[],displayName:"GroupCardFooter",props:{noPadding:{required:!1,tsType:{name:"boolean"},description:"No padding on the element"},children:{required:!0,tsType:{name:"union",raw:`| React.ReactNode
| ((cardRenderProps: CardRenderProps) => React.ReactNode)`,elements:[{name:"ReactReactNode",raw:"React.ReactNode"},{name:"unknown"}]},description:""}}};const K={title:"Komponenter/Cards/GroupCard",component:i},s={args:{shadow:!0},render:n=>e.createElement(i,{...n},e.createElement(G,null,e.createElement(g,{lookLike:5},"Tittel på gruppe")),e.createElement(t,null,"Dette er et element i GroupCard"),e.createElement(t,null,"Dette er et element i GroupCard"),e.createElement(t,null,"Dette er et element i GroupCard"),e.createElement(h,null,({CardAction:r})=>e.createElement(r,{href:"https://design.sparebank1.no"},"Vis mer")))},c={args:{...s.args,shadow:!1},render:n=>e.createElement(i,{...n},e.createElement(t,null,"Innhold nr 1"),e.createElement(t,null,"Innhold nr 2"),e.createElement(t,null,"Innhold nr 3"))},u={args:{...s.args},render:n=>e.createElement(i,{...n},e.createElement(G,{noSeparator:!0},e.createElement(g,{lookLike:5},"Tittel på gruppe")),e.createElement(t,{noSeparator:!0},"Dette er et element i GroupCard en linje mellom elementene"),e.createElement(t,{noSeparator:!0},"Dette er et element i GroupCard en linje mellom elementene"),e.createElement(t,{noSeparator:!0},"Dette er et element i GroupCard en linje mellom elementene"),e.createElement(h,null,"Footer"))},C={args:{...s.args},render:n=>e.createElement(i,{...n},e.createElement(G,null,e.createElement(g,{lookLike:5},"Tittel på gruppe")),e.createElement(t,null,({CardAction:r,CardName:d,Title:l,Subtext:o,Text:a})=>e.createElement(e.Fragment,null,e.createElement(d,null,"Kortnavn"),e.createElement(l,null,e.createElement(r,{href:"https://design.sparebank1.no"},"Lenke men hele kortet er klikkbart")),e.createElement(o,null,"En liten undertekst"),e.createElement(a,null,"Her kan man ha tekst"))),e.createElement(t,null,({CardAction:r})=>e.createElement(e.Fragment,null,e.createElement(g,null,e.createElement(r,{as:"button"},"Knapp")),e.createElement(_,null,"Hele kortet er klikkbart"))),e.createElement(t,null,({CardAction:r})=>e.createElement(e.Fragment,null,e.createElement(g,null,e.createElement(r,{href:"https://design.sparebank1.no"},"Lenke")),e.createElement(_,null,"Hele kortet er klikkbart"))),e.createElement(h,null,({CardAction:r})=>e.createElement(r,{href:"https://design.sparebank1.no"},"Vis mer")))};var S,w,y;s.parameters={...s.parameters,docs:{...(S=s.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    shadow: true
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
}`,...(y=(w=s.parameters)==null?void 0:w.docs)==null?void 0:y.source}}};var P,F,A;c.parameters={...c.parameters,docs:{...(P=c.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    ...Standard.args,
    shadow: false
  },
  render: args => <GroupCard {...args}>
            <GroupCardElement>Innhold nr 1</GroupCardElement>
            <GroupCardElement>Innhold nr 2</GroupCardElement>
            <GroupCardElement>Innhold nr 3</GroupCardElement>
        </GroupCard>
}`,...(A=(F=c.parameters)==null?void 0:F.docs)==null?void 0:A.source}}};var H,v,q;u.parameters={...u.parameters,docs:{...(H=u.parameters)==null?void 0:H.docs,source:{originalSource:`{
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
}`,...(q=(v=u.parameters)==null?void 0:v.docs)==null?void 0:q.source}}};var D,x,I;C.parameters={...C.parameters,docs:{...(D=C.parameters)==null?void 0:D.docs,source:{originalSource:`{
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
}`,...(I=(x=C.parameters)==null?void 0:x.docs)==null?void 0:I.source}}};const O=["Standard","ShadowFalse","NoSeparator","WithCardAction"],U=Object.freeze(Object.defineProperty({__proto__:null,NoSeparator:u,ShadowFalse:c,Standard:s,WithCardAction:C,__namedExportsOrder:O,default:K},Symbol.toStringTag,{value:"Module"}));export{U as G,u as N,s as S,C as W,c as a};
