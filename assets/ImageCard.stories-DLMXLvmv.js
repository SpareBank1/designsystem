import{R as e}from"./index-DQDNmYQF.js";import{c as T}from"./index-QCImZZ3W.js";import{f as b,W as v}from"./WithCardAction-BEfhMYaK.js";import{C as x,T as C,S as N,a as S}from"./Title-CmDdbz_O.js";function E(a,n){const{className:r,imageSrc:i,imageAltText:o,noMargin:u,appearance:g="default",children:m,...p}=a;return e.createElement(v,{baseClassName:"ffe-image-card",className:T("ffe-image-card",{"ffe-image-card--no-margin":u,"ffe-default-mode":g==="default"},r),...p,ref:n},({CardAction:f})=>e.createElement(e.Fragment,null,e.createElement("div",{className:"ffe-image-card__image-container"},e.createElement("div",{className:"ffe-image-card__image-overlay"}),e.createElement("img",{src:i,alt:o,className:"ffe-image-card__image"})),e.createElement("div",{className:"ffe-image-card__body"},typeof m=="function"?m({Text:S,Subtext:N,Title:C,CardName:x,CardAction:f}):m)))}const s=b(E);s.__docgenInfo={description:"",methods:[],displayName:"ImageCard",props:{imageSrc:{required:!0,tsType:{name:"string"},description:"The src for the image"},imageAltText:{required:!0,tsType:{name:"string"},description:"The alt text for the image"},noMargin:{required:!1,tsType:{name:"boolean"},description:"No margin on card"},appearance:{required:!1,tsType:{name:"union",raw:"'default' | 'accent'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'accent'"}]},description:"Avgjør utseende i kontekst accent. Hvis man ønsker et blått utseende i kontekst accent, velg appearance: 'accent'"},children:{required:!0,tsType:{name:"union",raw:`| React.ReactNode
| ((cardRenderProps: CardRenderProps) => React.ReactNode)`,elements:[{name:"ReactReactNode",raw:"React.ReactNode"},{name:"unknown"}]},description:""}}};const _=a=>e.createElement("div",{...a},"Custom ",a.children),h={title:"Komponenter/Cards/ImageCard",component:s,argTypes:{as:{options:["span","div","custom"],mapping:{div:"div",span:"span",custom:_}}}},t={args:{as:"div",imageSrc:"https://www.sparebank1.no/content/dam/SB1/foto/profilbilder-liggende/ung-i-sofa.jpg.thumb.1280.1280.jpg",imageAltText:"To jenter som går å snakker sammen"},render:a=>e.createElement(s,{...a},({CardName:n,Title:r,Subtext:i,Text:o})=>e.createElement(e.Fragment,null,e.createElement(n,null,"Kortnavn"),e.createElement(r,null,"Tittel"),e.createElement(i,null,"En liten undertekst"),e.createElement(o,null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.")))};var d,c,l;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(l=(c=t.parameters)==null?void 0:c.docs)==null?void 0:l.source}}};const k=["Standard"],j=Object.freeze(Object.defineProperty({__proto__:null,Standard:t,__namedExportsOrder:k,default:h},Symbol.toStringTag,{value:"Module"}));export{j as I,t as S};
