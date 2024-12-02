import{R as e}from"./index-eCxJ45ll.js";import{c as f}from"./index-DezCrw0f.js";import{f as T,W as b}from"./WithCardAction-D8xJ0iKc.js";import{T as x,S as C,a as N,C as S}from"./Title-CCAmy5ta.js";function E(a,n){const{className:r,imageSrc:i,imageAltText:o,noMargin:u,children:m,...g}=a;return e.createElement(b,{baseClassName:"ffe-image-card",className:f("ffe-image-card",{"ffe-image-card--no-margin":u},r),...g,ref:n},({CardAction:p})=>e.createElement(e.Fragment,null,e.createElement("div",{className:"ffe-image-card__image-container"},e.createElement("div",{className:"ffe-image-card__image-overlay"}),e.createElement("img",{src:i,alt:o,className:"ffe-image-card__image"})),e.createElement("div",{className:"ffe-image-card__body"},typeof m=="function"?m({Text:x,Subtext:C,Title:N,CardName:S,CardAction:p}):m)))}const s=T(E);s.__docgenInfo={description:"",methods:[],displayName:"ImageCard",props:{imageSrc:{required:!0,tsType:{name:"string"},description:"The src for the image"},imageAltText:{required:!0,tsType:{name:"string"},description:"The alt text for the image"},noMargin:{required:!1,tsType:{name:"boolean"},description:"No margin on card"},children:{required:!0,tsType:{name:"union",raw:`| React.ReactNode
| ((cardRenderProps: CardRenderProps) => React.ReactNode)`,elements:[{name:"ReactReactNode",raw:"React.ReactNode"},{name:"unknown"}]},description:""}}};const _=a=>e.createElement("div",{...a},"Custom ",a.children),v={title:"Komponenter/Cards/ImageCard",component:s,argTypes:{as:{options:["span","div","custom"],mapping:{div:"div",span:"span",custom:_}}}},t={args:{as:"div",imageSrc:"https://www.sparebank1.no/content/dam/SB1/foto/profilbilder-liggende/ung-i-sofa.jpg.thumb.1280.1280.jpg",imageAltText:"To jenter som går å snakker sammen"},render:a=>e.createElement(s,{...a},({CardName:n,Title:r,Subtext:i,Text:o})=>e.createElement(e.Fragment,null,e.createElement(n,null,"Kortnavn"),e.createElement(r,null,"Tittel"),e.createElement(i,null,"En liten undertekst"),e.createElement(o,null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.")))};var d,c,l;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    as: 'div',
    imageSrc: 'https://www.sparebank1.no/content/dam/SB1/foto/profilbilder-liggende/ung-i-sofa.jpg.thumb.1280.1280.jpg',
    imageAltText: 'To jenter som går å snakker sammen'
  },
  render: args => <ImageCard {...args}>
            {({
      CardName,
      Title,
      Subtext,
      Text
    }) => <>
                    <CardName>Kortnavn</CardName>
                    <Title>Tittel</Title>
                    <Subtext>En liten undertekst</Subtext>
                    <Text>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat.
                    </Text>
                </>}
        </ImageCard>
}`,...(l=(c=t.parameters)==null?void 0:c.docs)==null?void 0:l.source}}};const h=["Standard"],k=Object.freeze(Object.defineProperty({__proto__:null,Standard:t,__namedExportsOrder:h,default:v},Symbol.toStringTag,{value:"Module"}));export{k as I,t as S};
