import{R as e}from"./index-DJO9vBfz.js";import{c as u}from"./index-i5X67GZP.js";import{f as U,W as w}from"./WithCardAction--lhCHbxA.js";import{C as I,a as W,T as k,S as F}from"./Title-3dDIOOEK.js";import{I as y}from"./Icon-CtPXfMQv.js";function L(a,r){const{className:i,condensed:n,img:t,noMargin:R,children:c,...h}=a;return e.createElement(w,{baseClassName:"ffe-stippled-card",className:u("ffe-stippled-card",{"ffe-stippled-card--condensed":n},{"ffe-stippled-card--no-margin":R},i),...h,ref:r},({CardAction:_})=>e.createElement(e.Fragment,null,t&&e.createElement("div",{className:u("ffe-stippled-card__img",{"ffe-stippled-card__img--icon":(t==null?void 0:t.type)==="icon"}),"aria-hidden":(t==null?void 0:t.type)==="icon"},t==null?void 0:t.element),e.createElement("div",null,typeof c=="function"?c({CardName:I,Title:W,Text:k,Subtext:F,CardAction:_}):c)))}const o=U(L);o.__docgenInfo={description:"",methods:[],displayName:"StippledCard",props:{condensed:{required:!1,tsType:{name:"boolean"},description:"Smaller icon and less space"},img:{required:!1,tsType:{name:"signature",type:"object",raw:`{
    element: ReactNode;
    type: 'icon' | 'custom';
}`,signature:{properties:[{key:"element",value:{name:"ReactNode",required:!0}},{key:"type",value:{name:"union",raw:"'icon' | 'custom'",elements:[{name:"literal",value:"'icon'"},{name:"literal",value:"'custom'"}],required:!0}}]}},description:"Image to be rendered"},noMargin:{required:!1,tsType:{name:"boolean"},description:"No margin on card"},children:{required:!0,tsType:{name:"union",raw:`| React.ReactNode
| ((cardRenderProps: CardRenderProps) => React.ReactNode)`,elements:[{name:"ReactReactNode",raw:"React.ReactNode"},{name:"unknown"}]},description:""}}};const z=""+new URL("utvalgte-CM0n3M7t.svg",import.meta.url).href,M=a=>e.createElement("div",{...a},"Custom ",a.children),j={title:"Komponenter/Cards/StippledCard",component:o,argTypes:{as:{options:["span","div","custom"],mapping:{div:"div",span:"span",custom:M}}}},s={args:{as:"div"},render:a=>e.createElement(o,{...a},({CardName:r,Title:i,Subtext:n,Text:t})=>e.createElement(e.Fragment,null,e.createElement(r,null,"CardName"),e.createElement(i,null,"Tittel"),e.createElement(n,{as:"span"},"Subtext er grå"),e.createElement(t,null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.")))},l={args:{as:"div",img:{type:"icon",element:e.createElement(y,{fileUrl:"./icons/open/300/xl/monitoring.svg",size:"xl"})}},render:a=>e.createElement(o,{...a},({CardName:r,Title:i,Subtext:n,Text:t})=>e.createElement(e.Fragment,null,e.createElement(r,null,"CardName"),e.createElement(i,null,"Tittel"),e.createElement(n,{as:"span"},"Subtext er grå"),e.createElement(t,null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.")))},m={args:{as:"div",img:{type:"custom",element:e.createElement("img",{alt:"",src:z})}},render:a=>e.createElement(o,{...a},({CardName:r,Title:i,Subtext:n,Text:t})=>e.createElement(e.Fragment,null,e.createElement(r,null,"CardName"),e.createElement(i,null,"Tittel"),e.createElement(n,{as:"span"},"Subtext er grå"),e.createElement(t,null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.")))},d={args:{as:"div",img:{type:"icon",element:e.createElement(y,{fileUrl:"./icons/open/300/xl/monitoring.svg",size:"xl"})},condensed:!0},render:a=>e.createElement(o,{...a},({Title:r,Subtext:i})=>e.createElement(e.Fragment,null,e.createElement(r,null,"Sparekonto voksen 25"),e.createElement(i,null,"7 004,00")))};var p,g,x;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    as: 'div'
  },
  render: args => <StippledCard {...args}>
            {({
      CardName,
      Title,
      Subtext,
      Text
    }) => <>
                    <CardName>CardName</CardName>
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
        </StippledCard>
}`,...(x=(g=s.parameters)==null?void 0:g.docs)==null?void 0:x.source}}};var S,C,b;l.parameters={...l.parameters,docs:{...(S=l.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    as: 'div',
    img: {
      type: 'icon',
      element: <Icon fileUrl="./icons/open/300/xl/monitoring.svg" size="xl" />
    }
  },
  render: args => <StippledCard {...args}>
            {({
      CardName,
      Title,
      Subtext,
      Text
    }) => <>
                    <CardName>CardName</CardName>
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
        </StippledCard>
}`,...(b=(C=l.parameters)==null?void 0:C.docs)==null?void 0:b.source}}};var f,T,v;m.parameters={...m.parameters,docs:{...(f=m.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    as: 'div',
    img: {
      type: 'custom',
      element: <img alt="" src={utvalgte} />
    }
  },
  render: args => <StippledCard {...args}>
            {({
      CardName,
      Title,
      Subtext,
      Text
    }) => <>
                    <CardName>CardName</CardName>
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
        </StippledCard>
}`,...(v=(T=m.parameters)==null?void 0:T.docs)==null?void 0:v.source}}};var E,q,N;d.parameters={...d.parameters,docs:{...(E=d.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    as: 'div',
    img: {
      type: 'icon',
      element: <Icon fileUrl="./icons/open/300/xl/monitoring.svg" size="xl" />
    },
    condensed: true
  },
  render: args => <StippledCard {...args}>
            {({
      Title,
      Subtext
    }) => <>
                    <Title>Sparekonto voksen 25</Title>
                    <Subtext>7 004,00</Subtext>
                </>}
        </StippledCard>
}`,...(N=(q=d.parameters)==null?void 0:q.docs)==null?void 0:N.source}}};const O=["Standard","WithIcon","WithCustom","Condensed"],G=Object.freeze(Object.defineProperty({__proto__:null,Condensed:d,Standard:s,WithCustom:m,WithIcon:l,__namedExportsOrder:O,default:j},Symbol.toStringTag,{value:"Module"}));export{d as C,G as S,l as W,s as a,m as b};
