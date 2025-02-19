import{R as e}from"./index-eCxJ45ll.js";import{c as C}from"./index-DezCrw0f.js";import{f as K,W as $}from"./WithCardAction-D8xJ0iKc.js";import{S as B,a as D,T as G,C as H}from"./Title-Q79Fy4wU.js";import{I as x}from"./Icon-B88nEPeu.js";const J=""+new URL("utvalgte-CM0n3M7t.svg",import.meta.url).href;function Q(a,i){const{className:r,condensed:n,img:t,noMargin:S,rightImg:o,children:b,...j}=a;return e.createElement($,{baseClassName:"ffe-stippled-card",className:C("ffe-stippled-card",{"ffe-stippled-card--condensed":n},{"ffe-stippled-card--no-margin":S},r),...j,ref:i},({CardAction:P})=>e.createElement(e.Fragment,null,t&&e.createElement("div",{className:C("ffe-stippled-card__img",{"ffe-stippled-card__img--icon":(t==null?void 0:t.type)==="icon"}),"aria-hidden":(t==null?void 0:t.type)==="icon"},t==null?void 0:t.element),e.createElement("div",{className:"ffe-stippled-card__content"},typeof b=="function"?b({CardName:H,Title:G,Text:D,Subtext:B,CardAction:P}):b),o&&e.createElement("div",{className:C("ffe-stippled-card__img",{"ffe-stippled-card__img--icon":(o==null?void 0:o.type)==="icon"}),"aria-hidden":(o==null?void 0:o.type)==="icon"},o==null?void 0:o.element)))}const s=K(Q);s.__docgenInfo={description:"",methods:[],displayName:"StippledCard",props:{condensed:{required:!1,tsType:{name:"boolean"},description:"Smaller icon and less space"},img:{required:!1,tsType:{name:"signature",type:"object",raw:`{
    element: ReactNode;
    type: 'icon' | 'custom';
}`,signature:{properties:[{key:"element",value:{name:"ReactNode",required:!0}},{key:"type",value:{name:"union",raw:"'icon' | 'custom'",elements:[{name:"literal",value:"'icon'"},{name:"literal",value:"'custom'"}],required:!0}}]}},description:"Image to be rendered"},rightImg:{required:!1,tsType:{name:"signature",type:"object",raw:`{
    element: ReactNode;
    type: 'icon' | 'custom';
}`,signature:{properties:[{key:"element",value:{name:"ReactNode",required:!0}},{key:"type",value:{name:"union",raw:"'icon' | 'custom'",elements:[{name:"literal",value:"'icon'"},{name:"literal",value:"'custom'"}],required:!0}}]}},description:""},noMargin:{required:!1,tsType:{name:"boolean"},description:"No margin on card"},children:{required:!0,tsType:{name:"union",raw:`| React.ReactNode
| ((cardRenderProps: CardRenderProps) => React.ReactNode)`,elements:[{name:"ReactReactNode",raw:"React.ReactNode"},{name:"unknown"}]},description:""}}};const V=a=>e.createElement("div",{...a},"Custom ",a.children),X={title:"Komponenter/Cards/StippledCard",component:s,argTypes:{as:{options:["span","div","custom"],mapping:{div:"div",span:"span",custom:V}}}},l={args:{as:"div"},render:a=>e.createElement(s,{...a},({CardName:i,Title:r,Subtext:n,Text:t})=>e.createElement(e.Fragment,null,e.createElement(i,null,"CardName"),e.createElement(r,null,"Tittel"),e.createElement(n,{as:"span"},"Subtext er grå"),e.createElement(t,null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.")))},m={args:{as:"div",img:{type:"icon",element:e.createElement(x,{fileUrl:"./icons/open/300/xl/monitoring.svg",size:"xl"})}},render:a=>e.createElement(s,{...a},({CardName:i,Title:r,Subtext:n,Text:t})=>e.createElement(e.Fragment,null,e.createElement(i,null,"CardName"),e.createElement(r,null,"Tittel"),e.createElement(n,{as:"span"},"Subtext er grå"),e.createElement(t,null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.")))},d={args:{as:"div",rightImg:{type:"icon",element:e.createElement(x,{fileUrl:"./icons/open/300/md/add.svg",size:"md"})}},render:a=>e.createElement(s,{...a},({CardName:i,Title:r,Subtext:n,Text:t})=>e.createElement(e.Fragment,null,e.createElement(i,null,"CardName"),e.createElement(r,null,"Tittel"),e.createElement(n,{as:"span"},"Subtext er grå"),e.createElement(t,null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.")))},c={args:{as:"div",img:{type:"icon",element:e.createElement(x,{fileUrl:"./icons/open/300/xl/monitoring.svg",size:"xl"})},rightImg:{type:"icon",element:e.createElement(x,{fileUrl:"./icons/open/300/md/add.svg",size:"md"})}},render:a=>e.createElement(s,{...a},({CardName:i,Title:r,Subtext:n,Text:t})=>e.createElement(e.Fragment,null,e.createElement(i,null,"CardName"),e.createElement(r,null,"Tittel"),e.createElement(n,{as:"span"},"Subtext er grå"),e.createElement(t,null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.")))},u={args:{as:"div",img:{type:"custom",element:e.createElement("img",{alt:"",src:J})}},render:a=>e.createElement(s,{...a},({CardName:i,Title:r,Subtext:n,Text:t})=>e.createElement(e.Fragment,null,e.createElement(i,null,"CardName"),e.createElement(r,null,"Tittel"),e.createElement(n,{as:"span"},"Subtext er grå"),e.createElement(t,null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.")))},p={args:{as:"div",img:{type:"icon",element:e.createElement(x,{fileUrl:"./icons/open/300/xl/monitoring.svg",size:"xl"})},condensed:!0},render:a=>e.createElement(s,{...a},({Title:i,Subtext:r})=>e.createElement(e.Fragment,null,e.createElement(i,null,"Sparekonto voksen 25"),e.createElement(r,null,"7 004,00")))},g={args:{as:"div"},render:a=>e.createElement(s,{...a},({CardName:i,Title:r,Subtext:n,Text:t,CardAction:S})=>e.createElement(e.Fragment,null,e.createElement(i,null,"CardName"),e.createElement(r,null,e.createElement(S,null,"Tittel")),e.createElement(n,{as:"span"},"Subtext er grå"),e.createElement(t,null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.")))};var T,v,q;l.parameters={...l.parameters,docs:{...(T=l.parameters)==null?void 0:T.docs,source:{originalSource:`{
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
}`,...(q=(v=l.parameters)==null?void 0:v.docs)==null?void 0:q.source}}};var E,f,N;m.parameters={...m.parameters,docs:{...(E=m.parameters)==null?void 0:E.docs,source:{originalSource:`{
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
}`,...(N=(f=m.parameters)==null?void 0:f.docs)==null?void 0:N.source}}};var y,U,h;d.parameters={...d.parameters,docs:{...(y=d.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
}`,...(h=(U=d.parameters)==null?void 0:U.docs)==null?void 0:h.source}}};var R,_,I;c.parameters={...c.parameters,docs:{...(R=c.parameters)==null?void 0:R.docs,source:{originalSource:`{
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
}`,...(I=(_=c.parameters)==null?void 0:_.docs)==null?void 0:I.source}}};var W,L,z;u.parameters={...u.parameters,docs:{...(W=u.parameters)==null?void 0:W.docs,source:{originalSource:`{
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
}`,...(z=(L=u.parameters)==null?void 0:L.docs)==null?void 0:z.source}}};var w,F,k;p.parameters={...p.parameters,docs:{...(w=p.parameters)==null?void 0:w.docs,source:{originalSource:`{
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
}`,...(k=(F=p.parameters)==null?void 0:F.docs)==null?void 0:k.source}}};var A,M,O;g.parameters={...g.parameters,docs:{...(A=g.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    as: 'div'
  },
  render: args => <StippledCard {...args}>
            {({
      CardName,
      Title,
      Subtext,
      Text,
      CardAction
    }) => <>
                    <CardName>CardName</CardName>
                    <Title>
                        <CardAction>Tittel</CardAction>
                    </Title>
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
}`,...(O=(M=g.parameters)==null?void 0:M.docs)==null?void 0:O.source}}};const Y=["Standard","WithIcon","WithRightIconOnly","With2Icons","WithCustom","Condensed","WithCardAction"],re=Object.freeze(Object.defineProperty({__proto__:null,Condensed:p,Standard:l,With2Icons:c,WithCardAction:g,WithCustom:u,WithIcon:m,WithRightIconOnly:d,__namedExportsOrder:Y,default:X},Symbol.toStringTag,{value:"Module"}));export{p as C,re as S,m as W,l as a,u as b};
