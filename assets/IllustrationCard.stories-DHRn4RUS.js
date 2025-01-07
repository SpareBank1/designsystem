import{R as e}from"./index-ne9I_3bB.js";import{c as g}from"./index-B6-3w37c.js";import{f as N,W as x}from"./WithCardAction-Bpdr1y6g.js";import{T as y,S,a as _,C as k}from"./Title-okC6yB_j.js";function I(t,a){const{className:r,condensed:l,img:o,illustrationPosition:c,noMargin:b,children:d,...h}=t;return e.createElement(x,{baseClassName:"ffe-illustration-card",className:g("ffe-illustration-card",{"ffe-illustration-card--condensed":l},{"ffe-illustration-card--no-margin":b},{"ffe-illustration-card--right":c==="right"},r),...h,ref:a},({CardAction:R})=>{const m=e.createElement("div",{className:g("ffe-illustration-card__illustration")},o),u=e.createElement("div",{className:"ffe-illustration-card__body"},typeof d=="function"?d({Text:y,Subtext:S,Title:_,CardName:k,CardAction:R}):d);return c==="right"?e.createElement(e.Fragment,null,u,m):e.createElement(e.Fragment,null,m,u)})}const i=N(I);i.__docgenInfo={description:"",methods:[],displayName:"IllustrationCard",props:{img:{required:!0,tsType:{name:"ReactElement"},description:"Element of illustration"},condensed:{required:!1,tsType:{name:"boolean"},description:"Smaller illustration and less space"},illustrationPosition:{required:!1,tsType:{name:"union",raw:"'right' | 'left'",elements:[{name:"literal",value:"'right'"},{name:"literal",value:"'left'"}]},description:"Position illustration at left (default) or right of the card content"},noMargin:{required:!1,tsType:{name:"boolean"},description:"No margin on card"},children:{required:!0,tsType:{name:"union",raw:`| React.ReactNode
| ((cardRenderProps: CardRenderProps) => React.ReactNode)`,elements:[{name:"ReactReactNode",raw:"React.ReactNode"},{name:"unknown"}]},description:""}}};const F=""+new URL("utvalgte-CM0n3M7t.svg",import.meta.url).href,w=""+new URL("finansieringsbevis-BCOwh5HM.svg",import.meta.url).href,M=t=>e.createElement("div",{...t},"Custom ",t.children),P={title:"Komponenter/Cards/IllustrationCard",component:i,argTypes:{as:{options:["span","div","custom"],mapping:{div:"div",span:"span",custom:M}}}},n={args:{as:"div",img:e.createElement("img",{src:F,alt:""})},render:t=>e.createElement(i,{...t},({CardName:a,Title:r,Subtext:l,Text:o})=>e.createElement(e.Fragment,null,e.createElement(a,null,"Kortnavn"),e.createElement(r,null,"Tittel"),e.createElement(l,null,"En liten undertekst"),e.createElement(o,null,"Her kan man ha tekst")))},s={args:{as:"div",img:e.createElement("img",{src:w,alt:""}),condensed:!0},render:t=>e.createElement(i,{...t},({Title:a,Text:r})=>e.createElement(e.Fragment,null,e.createElement(a,null,"Finansieringsbevis"),e.createElement(r,null,"For deg som skal kjøpe ny bolig")))};var p,f,v;n.parameters={...n.parameters,docs:{...(p=n.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    as: 'div',
    img: <img src={utvalgte} alt="" />
  },
  render: args => <IllustrationCard {...args}>
            {({
      CardName,
      Title,
      Subtext,
      Text
    }) => <>
                    <CardName>Kortnavn</CardName>
                    <Title>Tittel</Title>
                    <Subtext>En liten undertekst</Subtext>
                    <Text>Her kan man ha tekst</Text>
                </>}
        </IllustrationCard>
}`,...(v=(f=n.parameters)==null?void 0:f.docs)==null?void 0:v.source}}};var C,E,T;s.parameters={...s.parameters,docs:{...(C=s.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    as: 'div',
    img: <img src={finansieringsbevis} alt="" />,
    condensed: true
  },
  render: args => <IllustrationCard {...args}>
            {({
      Title,
      Text
    }) => <>
                    <Title>Finansieringsbevis</Title>
                    <Text>For deg som skal kjøpe ny bolig</Text>
                </>}
        </IllustrationCard>
}`,...(T=(E=s.parameters)==null?void 0:E.docs)==null?void 0:T.source}}};const q=["Standard","Condensed"],W=Object.freeze(Object.defineProperty({__proto__:null,Condensed:s,Standard:n,__namedExportsOrder:q,default:P},Symbol.toStringTag,{value:"Module"}));export{s as C,W as I,n as S};
