import{R as e}from"./index-RYns6xqu.js";import{c as f}from"./index-Dejnh_W_.js";import{f as x,W as g}from"./WithCardAction-ZOiJjmag.js";import{T,S as b,a as C,C as N}from"./Title-BBwdN3B8.js";function R(t,r){const{className:n,leftAlign:o,noMargin:s,children:i,...u}=t;return e.createElement(g,{baseClassName:"ffe-text-card",className:f("ffe-text-card",{"ffe-text-card--left-align":o},{"ffe-text-card--no-margin":s},n),...u,ref:r},({CardAction:p})=>typeof i=="function"?i({Text:T,Subtext:b,Title:C,CardName:N,CardAction:p}):i)}const d=x(R);d.__docgenInfo={description:"",methods:[],displayName:"TextCard",props:{leftAlign:{required:!1,tsType:{name:"boolean"},description:"Left-aligned text on the card"},noMargin:{required:!1,tsType:{name:"boolean"},description:"No margin on card"},children:{required:!0,tsType:{name:"union",raw:`| React.ReactNode
| ((cardRenderProps: CardRenderProps) => React.ReactNode)`,elements:[{name:"ReactReactNode",raw:"React.ReactNode"},{name:"unknown"}]},description:"Function that's passed available subcomponents as arguments, or regular children"}}};const S=t=>e.createElement("div",{...t},"Custom ",t.children),v={title:"components/cards/TextCard",component:d,argTypes:{as:{options:["span","div","custom"],mapping:{div:"div",span:"span",custom:S}}}},a={args:{as:"div"},render:t=>e.createElement(d,{...t},({CardName:r,Title:n,Subtext:o,Text:s})=>e.createElement(e.Fragment,null,e.createElement(r,null,"Kortnavn"),e.createElement(n,null,"Tittel"),e.createElement(o,{as:"span"},"Subtext er grå"),e.createElement(s,null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.")))};var c,m,l;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(l=(m=a.parameters)==null?void 0:m.docs)==null?void 0:l.source}}};const q=["Standard"],w=Object.freeze(Object.defineProperty({__proto__:null,Standard:a,__namedExportsOrder:q,default:v},Symbol.toStringTag,{value:"Module"}));export{a as S,w as T};
