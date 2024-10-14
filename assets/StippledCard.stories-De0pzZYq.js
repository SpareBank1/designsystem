import{R as e}from"./index-RYns6xqu.js";import{c as u}from"./index-Dejnh_W_.js";import{f as I,W as L}from"./WithCardAction-ZOiJjmag.js";import{C as U,a as W,T as k,S as F}from"./Title-BBwdN3B8.js";import{I as y}from"./Icon-Dor7S2yd.js";function M(a,r){const{className:i,condensed:n,img:t,noMargin:R,children:c,...w}=a;return e.createElement(L,{baseClassName:"ffe-stippled-card",className:u("ffe-stippled-card",{"ffe-stippled-card--condensed":n},{"ffe-stippled-card--no-margin":R},i),...w,ref:r},({CardAction:_})=>e.createElement(e.Fragment,null,t&&e.createElement("div",{className:u("ffe-stippled-card__img",{"ffe-stippled-card__img--icon":(t==null?void 0:t.type)==="icon"}),"aria-hidden":(t==null?void 0:t.type)==="icon"},t==null?void 0:t.element),e.createElement("div",null,typeof c=="function"?c({CardName:U,Title:W,Text:k,Subtext:F,CardAction:_}):c)))}const o=I(M);o.__docgenInfo={description:"",methods:[],displayName:"StippledCard",props:{condensed:{required:!1,tsType:{name:"boolean"},description:"Smaller icon and less space"},img:{required:!1,tsType:{name:"signature",type:"object",raw:`{
    element: ReactNode;
    type: 'icon' | 'custom';
}`,signature:{properties:[{key:"element",value:{name:"ReactNode",required:!0}},{key:"type",value:{name:"union",raw:"'icon' | 'custom'",elements:[{name:"literal",value:"'icon'"},{name:"literal",value:"'custom'"}],required:!0}}]}},description:"Image to be rendered"},noMargin:{required:!1,tsType:{name:"boolean"},description:"No margin on card"},children:{required:!0,tsType:{name:"union",raw:`| React.ReactNode
| ((cardRenderProps: CardRenderProps) => React.ReactNode)`,elements:[{name:"ReactReactNode",raw:"React.ReactNode"},{name:"unknown"}]},description:""}}};const h="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20height='48'%20viewBox='0%20-960%20960%20960'%20width='48'%3e%3cpath%20d='M152.497-130.001q-9.727%200-16.112-6.524-6.384-6.523-6.384-16.168v-40.23q0-9.644%206.58-16.168%206.58-6.524%2016.307-6.524%209.727%200%2016.112%206.524%206.384%206.524%206.384%2016.168v40.23q0%209.645-6.58%2016.168-6.58%206.524-16.307%206.524Zm163.66%200q-9.541%200-15.926-6.524-6.384-6.523-6.384-16.168v-205.615q0-9.644%206.578-16.168Q307.003-381%20316.728-381q9.349%200%2015.926%206.524%206.576%206.524%206.576%2016.168v205.615q0%209.645-6.765%2016.168-6.766%206.524-16.308%206.524Zm163.647%200q-9.727%200-16.111-6.524-6.385-6.523-6.385-16.168v-140.23q0-9.644%206.58-16.168%206.581-6.524%2016.308-6.524t16.111%206.524q6.385%206.524%206.385%2016.168v140.23q0%209.645-6.58%2016.168-6.581%206.524-16.308%206.524Zm163.661%200q-9.542%200-15.926-6.524-6.385-6.523-6.385-16.168v-229.46q0-9.644%206.579-16.168%206.578-6.524%2016.302-6.524%209.349%200%2015.926%206.524t6.577%2016.168v229.46q0%209.645-6.766%2016.168-6.766%206.524-16.307%206.524Zm163.647%200q-9.727%200-16.112-6.524-6.384-6.523-6.384-16.168v-360.23q0-9.644%206.58-16.168%206.58-6.524%2016.307-6.524%209.727%200%2016.112%206.524%206.384%206.524%206.384%2016.168v360.23q0%209.645-6.58%2016.168-6.58%206.524-16.307%206.524ZM559.692-504.77q-10.923%200-21.478-4.495-10.555-4.495-19.291-12.735L408.847-632.077q-3.462-3.462-8.847-3.462t-8.847%203.462L169.307-411.231q-6.81%206.692-16.366%206.577-9.556-.116-16.118-7.192-5.822-6.308-6.258-15.471-.436-9.163%206.128-15.759l223.23-221.615q8.623-8.469%2019.042-12.35%2010.42-3.881%2021.035-3.881t21.319%203.898q10.703%203.898%2019.142%2012.333L551.153-554q3.462%203.462%208.847%203.462t8.847-3.462l222.461-222.461q6.692-6.692%2015.999-6.884%209.308-.192%2015.702%206.884%205.99%206.692%206.426%2015.856.436%209.163-6.128%2015.759L600.461-522q-8.122%208.665-18.984%2012.948-10.862%204.282-21.785%204.282Z'/%3e%3c/svg%3e",Z=""+new URL("utvalgte-CM0n3M7t.svg",import.meta.url).href,z=a=>e.createElement("div",{...a},"Custom ",a.children),j={title:"components/cards/StippledCard",component:o,argTypes:{as:{options:["span","div","custom"],mapping:{div:"div",span:"span",custom:z}}}},s={args:{as:"div"},render:a=>e.createElement(o,{...a},({CardName:r,Title:i,Subtext:n,Text:t})=>e.createElement(e.Fragment,null,e.createElement(r,null,"CardName"),e.createElement(i,null,"Tittel"),e.createElement(n,{as:"span"},"Subtext er grå"),e.createElement(t,null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.")))},l={args:{as:"div",img:{type:"icon",element:e.createElement(y,{fileUrl:h,size:"xl"})}},render:a=>e.createElement(o,{...a},({CardName:r,Title:i,Subtext:n,Text:t})=>e.createElement(e.Fragment,null,e.createElement(r,null,"CardName"),e.createElement(i,null,"Tittel"),e.createElement(n,{as:"span"},"Subtext er grå"),e.createElement(t,null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.")))},m={args:{as:"div",img:{type:"custom",element:e.createElement("img",{alt:"",src:Z})}},render:a=>e.createElement(o,{...a},({CardName:r,Title:i,Subtext:n,Text:t})=>e.createElement(e.Fragment,null,e.createElement(r,null,"CardName"),e.createElement(i,null,"Tittel"),e.createElement(n,{as:"span"},"Subtext er grå"),e.createElement(t,null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.")))},d={args:{as:"div",img:{type:"icon",element:e.createElement(y,{fileUrl:h,size:"xl"})},condensed:!0},render:a=>e.createElement(o,{...a},({Title:r,Subtext:i})=>e.createElement(e.Fragment,null,e.createElement(r,null,"Sparekonto voksen 25"),e.createElement(i,null,"7 004,00")))};var p,g,q;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(q=(g=s.parameters)==null?void 0:g.docs)==null?void 0:q.source}}};var x,v,S;l.parameters={...l.parameters,docs:{...(x=l.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    as: 'div',
    img: {
      type: 'icon',
      element: <Icon fileUrl={monitoringIconXlarge} size="xl" />
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
}`,...(S=(v=l.parameters)==null?void 0:v.docs)==null?void 0:S.source}}};var C,b,f;m.parameters={...m.parameters,docs:{...(C=m.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
}`,...(f=(b=m.parameters)==null?void 0:b.docs)==null?void 0:f.source}}};var T,E,N;d.parameters={...d.parameters,docs:{...(T=d.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    as: 'div',
    img: {
      type: 'icon',
      element: <Icon fileUrl={monitoringIconXlarge} size="xl" />
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
}`,...(N=(E=d.parameters)==null?void 0:E.docs)==null?void 0:N.source}}};const O=["Standard","WithIcon","WithCustom","Condensed"],D=Object.freeze(Object.defineProperty({__proto__:null,Condensed:d,Standard:s,WithCustom:m,WithIcon:l,__namedExportsOrder:O,default:j},Symbol.toStringTag,{value:"Module"}));export{d as C,D as S,l as W,s as a,m as b};
