import{R as e}from"./index-eCxJ45ll.js";import{c as S}from"./index-DezCrw0f.js";import{f as O,W as j}from"./WithCardAction-D8xJ0iKc.js";import{C as P,a as A,T as K,S as B}from"./Title-CCAmy5ta.js";import{I as g}from"./Icon-B88nEPeu.js";function D(a,i){const{className:r,condensed:n,img:t,noMargin:k,rightImg:o,children:x,...F}=a;return e.createElement(j,{baseClassName:"ffe-stippled-card",className:S("ffe-stippled-card",{"ffe-stippled-card--condensed":n},{"ffe-stippled-card--no-margin":k},r),...F,ref:i},({CardAction:M})=>e.createElement(e.Fragment,null,t&&e.createElement("div",{className:S("ffe-stippled-card__img",{"ffe-stippled-card__img--icon":(t==null?void 0:t.type)==="icon"}),"aria-hidden":(t==null?void 0:t.type)==="icon"},t==null?void 0:t.element),e.createElement("div",{className:"ffe-stippled-card__content"},typeof x=="function"?x({CardName:P,Title:A,Text:K,Subtext:B,CardAction:M}):x),o&&e.createElement("div",{className:S("ffe-stippled-card__img",{"ffe-stippled-card__img--icon":(o==null?void 0:o.type)==="icon"}),"aria-hidden":(o==null?void 0:o.type)==="icon"},o==null?void 0:o.element)))}const s=O(D);s.__docgenInfo={description:"",methods:[],displayName:"StippledCard",props:{condensed:{required:!1,tsType:{name:"boolean"},description:"Smaller icon and less space"},img:{required:!1,tsType:{name:"signature",type:"object",raw:`{
    element: ReactNode;
    type: 'icon' | 'custom';
}`,signature:{properties:[{key:"element",value:{name:"ReactNode",required:!0}},{key:"type",value:{name:"union",raw:"'icon' | 'custom'",elements:[{name:"literal",value:"'icon'"},{name:"literal",value:"'custom'"}],required:!0}}]}},description:"Image to be rendered"},rightImg:{required:!1,tsType:{name:"signature",type:"object",raw:`{
    element: ReactNode;
    type: 'icon' | 'custom';
}`,signature:{properties:[{key:"element",value:{name:"ReactNode",required:!0}},{key:"type",value:{name:"union",raw:"'icon' | 'custom'",elements:[{name:"literal",value:"'icon'"},{name:"literal",value:"'custom'"}],required:!0}}]}},description:""},noMargin:{required:!1,tsType:{name:"boolean"},description:"No margin on card"},children:{required:!0,tsType:{name:"union",raw:`| React.ReactNode
| ((cardRenderProps: CardRenderProps) => React.ReactNode)`,elements:[{name:"ReactReactNode",raw:"React.ReactNode"},{name:"unknown"}]},description:""}}};const G=""+new URL("utvalgte-CM0n3M7t.svg",import.meta.url).href,H=a=>e.createElement("div",{...a},"Custom ",a.children),J={title:"Komponenter/Cards/StippledCard",component:s,argTypes:{as:{options:["span","div","custom"],mapping:{div:"div",span:"span",custom:H}}}},l={args:{as:"div"},render:a=>e.createElement(s,{...a},({CardName:i,Title:r,Subtext:n,Text:t})=>e.createElement(e.Fragment,null,e.createElement(i,null,"CardName"),e.createElement(r,null,"Tittel"),e.createElement(n,{as:"span"},"Subtext er grå"),e.createElement(t,null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.")))},m={args:{as:"div",img:{type:"icon",element:e.createElement(g,{fileUrl:"./icons/open/300/xl/monitoring.svg",size:"xl"})}},render:a=>e.createElement(s,{...a},({CardName:i,Title:r,Subtext:n,Text:t})=>e.createElement(e.Fragment,null,e.createElement(i,null,"CardName"),e.createElement(r,null,"Tittel"),e.createElement(n,{as:"span"},"Subtext er grå"),e.createElement(t,null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.")))},d={args:{as:"div",rightImg:{type:"icon",element:e.createElement(g,{fileUrl:"./icons/open/300/md/add.svg",size:"md"})}},render:a=>e.createElement(s,{...a},({CardName:i,Title:r,Subtext:n,Text:t})=>e.createElement(e.Fragment,null,e.createElement(i,null,"CardName"),e.createElement(r,null,"Tittel"),e.createElement(n,{as:"span"},"Subtext er grå"),e.createElement(t,null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.")))},c={args:{as:"div",img:{type:"icon",element:e.createElement(g,{fileUrl:"./icons/open/300/xl/monitoring.svg",size:"xl"})},rightImg:{type:"icon",element:e.createElement(g,{fileUrl:"./icons/open/300/md/add.svg",size:"md"})}},render:a=>e.createElement(s,{...a},({CardName:i,Title:r,Subtext:n,Text:t})=>e.createElement(e.Fragment,null,e.createElement(i,null,"CardName"),e.createElement(r,null,"Tittel"),e.createElement(n,{as:"span"},"Subtext er grå"),e.createElement(t,null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.")))},u={args:{as:"div",img:{type:"custom",element:e.createElement("img",{alt:"",src:G})}},render:a=>e.createElement(s,{...a},({CardName:i,Title:r,Subtext:n,Text:t})=>e.createElement(e.Fragment,null,e.createElement(i,null,"CardName"),e.createElement(r,null,"Tittel"),e.createElement(n,{as:"span"},"Subtext er grå"),e.createElement(t,null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.")))},p={args:{as:"div",img:{type:"icon",element:e.createElement(g,{fileUrl:"./icons/open/300/xl/monitoring.svg",size:"xl"})},condensed:!0},render:a=>e.createElement(s,{...a},({Title:i,Subtext:r})=>e.createElement(e.Fragment,null,e.createElement(i,null,"Sparekonto voksen 25"),e.createElement(r,null,"7 004,00")))};var b,C,v;l.parameters={...l.parameters,docs:{...(b=l.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
}`,...(v=(C=l.parameters)==null?void 0:C.docs)==null?void 0:v.source}}};var T,f,q;m.parameters={...m.parameters,docs:{...(T=m.parameters)==null?void 0:T.docs,source:{originalSource:`{
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
}`,...(q=(f=m.parameters)==null?void 0:f.docs)==null?void 0:q.source}}};var E,N,y;d.parameters={...d.parameters,docs:{...(E=d.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    as: 'div',
    rightImg: {
      type: 'icon',
      element: <Icon fileUrl="./icons/open/300/md/add.svg" size="md" />
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
}`,...(y=(N=d.parameters)==null?void 0:N.docs)==null?void 0:y.source}}};var R,U,h;c.parameters={...c.parameters,docs:{...(R=c.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    as: 'div',
    img: {
      type: 'icon',
      element: <Icon fileUrl="./icons/open/300/xl/monitoring.svg" size="xl" />
    },
    rightImg: {
      type: 'icon',
      element: <Icon fileUrl="./icons/open/300/md/add.svg" size="md" />
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
}`,...(h=(U=c.parameters)==null?void 0:U.docs)==null?void 0:h.source}}};var _,I,W;u.parameters={...u.parameters,docs:{...(_=u.parameters)==null?void 0:_.docs,source:{originalSource:`{
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
}`,...(W=(I=u.parameters)==null?void 0:I.docs)==null?void 0:W.source}}};var z,L,w;p.parameters={...p.parameters,docs:{...(z=p.parameters)==null?void 0:z.docs,source:{originalSource:`{
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
}`,...(w=(L=p.parameters)==null?void 0:L.docs)==null?void 0:w.source}}};const Q=["Standard","WithIcon","WithRightIconOnly","With2Icons","WithCustom","Condensed"],ee=Object.freeze(Object.defineProperty({__proto__:null,Condensed:p,Standard:l,With2Icons:c,WithCustom:u,WithIcon:m,WithRightIconOnly:d,__namedExportsOrder:Q,default:J},Symbol.toStringTag,{value:"Module"}));export{p as C,ee as S,m as W,l as a,u as b};
