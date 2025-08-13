import{R as e}from"./index-DQDNmYQF.js";import{c as g}from"./index-D2FocPV0.js";import{f as x,W as T}from"./WithCardAction-BvL5dv80.js";import{C as b,T as C,S as v,a as N}from"./Title-Rg7Vduii.js";function R(t,r){const{className:n,leftAlign:o,noMargin:s,appearance:u="default",children:i,...p}=t;return e.createElement(T,{baseClassName:"ffe-text-card",className:g("ffe-text-card",{"ffe-text-card--left-align":o,"ffe-text-card--no-margin":s,"ffe-default-mode":u==="default"},n),...p,ref:r},({CardAction:f})=>typeof i=="function"?i({Text:N,Subtext:v,Title:C,CardName:b,CardAction:f}):i)}const d=x(R);d.__docgenInfo={description:"",methods:[],displayName:"TextCard",props:{leftAlign:{required:!1,tsType:{name:"boolean"},description:"Left-aligned text on the card"},noMargin:{required:!1,tsType:{name:"boolean"},description:"No margin on card"},appearance:{required:!1,tsType:{name:"union",raw:"'default' | 'accent'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'accent'"}]},description:"Avgjør utseende i kontekst accent. Hvis man ønsker et blått utseende i kontekst accent, velg appearance: 'accent'"},children:{required:!0,tsType:{name:"union",raw:`| React.ReactNode
| ((cardRenderProps: CardRenderProps) => React.ReactNode)`,elements:[{name:"ReactReactNode",raw:"React.ReactNode"},{name:"unknown"}]},description:"Function that's passed available subcomponents as arguments, or regular children"}}};const S=t=>e.createElement("div",{...t},"Custom ",t.children),q={title:"Komponenter/Cards/TextCard",component:d,argTypes:{as:{options:["span","div","custom"],mapping:{div:"div",span:"span",custom:S}}}},a={args:{as:"div"},render:t=>e.createElement(d,{...t},({CardName:r,Title:n,Subtext:o,Text:s})=>e.createElement(e.Fragment,null,e.createElement(r,null,"Kortnavn"),e.createElement(n,null,"Tittel"),e.createElement(o,{as:"span"},"Subtext er grå"),e.createElement(s,null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.")))};var c,l,m;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    as: 'div'
  },
  render: args => <TextCard {...args}>
            {({
      CardName,
      Title,
      Subtext,
      Text
    }) => <>
                    <CardName>Kortnavn</CardName>
                    <Title>Tittel</Title>
                    <Subtext as="span">Subtext er grå</Subtext>
                    <Text>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat.
                    </Text>
                </>}
        </TextCard>
}`,...(m=(l=a.parameters)==null?void 0:l.docs)==null?void 0:m.source}}};const h=["Standard"],w=Object.freeze(Object.defineProperty({__proto__:null,Standard:a,__namedExportsOrder:h,default:q},Symbol.toStringTag,{value:"Module"}));export{a as S,w as T};
