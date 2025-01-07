import{R as e}from"./index-ne9I_3bB.js";import{c as f}from"./index-B6-3w37c.js";import{f as x,W as g}from"./WithCardAction-Bpdr1y6g.js";import{T,S as b,a as C,C as N}from"./Title-okC6yB_j.js";function R(t,r){const{className:n,leftAlign:o,noMargin:i,children:s,...u}=t;return e.createElement(g,{baseClassName:"ffe-text-card",className:f("ffe-text-card",{"ffe-text-card--left-align":o},{"ffe-text-card--no-margin":i},n),...u,ref:r},({CardAction:p})=>typeof s=="function"?s({Text:T,Subtext:b,Title:C,CardName:N,CardAction:p}):s)}const d=x(R);d.__docgenInfo={description:"",methods:[],displayName:"TextCard",props:{leftAlign:{required:!1,tsType:{name:"boolean"},description:"Left-aligned text on the card"},noMargin:{required:!1,tsType:{name:"boolean"},description:"No margin on card"},children:{required:!0,tsType:{name:"union",raw:`| React.ReactNode
| ((cardRenderProps: CardRenderProps) => React.ReactNode)`,elements:[{name:"ReactReactNode",raw:"React.ReactNode"},{name:"unknown"}]},description:"Function that's passed available subcomponents as arguments, or regular children"}}};const S=t=>e.createElement("div",{...t},"Custom ",t.children),v={title:"Komponenter/Cards/TextCard",component:d,argTypes:{as:{options:["span","div","custom"],mapping:{div:"div",span:"span",custom:S}}}},a={args:{as:"div"},render:t=>e.createElement(d,{...t},({CardName:r,Title:n,Subtext:o,Text:i})=>e.createElement(e.Fragment,null,e.createElement(r,null,"Kortnavn"),e.createElement(n,null,"Tittel"),e.createElement(o,{as:"span"},"Subtext er grå"),e.createElement(i,null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.")))};var m,c,l;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(l=(c=a.parameters)==null?void 0:c.docs)==null?void 0:l.source}}};const q=["Standard"],w=Object.freeze(Object.defineProperty({__proto__:null,Standard:a,__namedExportsOrder:q,default:v},Symbol.toStringTag,{value:"Module"}));export{a as S,w as T};
