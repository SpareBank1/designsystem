import{R as e}from"./index-DQDNmYQF.js";import{c as C}from"./index-QCImZZ3W.js";import{f as S,W as E}from"./WithCardAction-BEfhMYaK.js";import{C as k,T as q,S as N,a as h}from"./Title-CmDdbz_O.js";function w(a,t){const{className:n,imageSrc:r,imageAltText:i,noMargin:d,appearance:b="default",children:l,...x}=a;return e.createElement(E,{baseClassName:"ffe-image-card",className:C("ffe-image-card",{"ffe-image-card--no-margin":d,"ffe-default-mode":b==="default"},n),...x,ref:t},({CardAction:v})=>e.createElement(e.Fragment,null,e.createElement("div",{className:"ffe-image-card__image-container"},e.createElement("div",{className:"ffe-image-card__image-overlay"}),e.createElement("img",{src:r,alt:i,className:"ffe-image-card__image"})),e.createElement("div",{className:"ffe-image-card__body"},typeof l=="function"?l({Text:h,Subtext:N,Title:q,CardName:k,CardAction:v}):l)))}const s=S(w);s.__docgenInfo={description:"",methods:[],displayName:"ImageCard",props:{imageSrc:{required:!0,tsType:{name:"string"},description:"The src for the image"},imageAltText:{required:!0,tsType:{name:"string"},description:"The alt text for the image"},noMargin:{required:!1,tsType:{name:"boolean"},description:"No margin on card"},appearance:{required:!1,tsType:{name:"union",raw:"'default' | 'accent'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'accent'"}]},description:"Avgjør utseende i kontekst accent. Hvis man ønsker et blått utseende i kontekst accent, velg appearance: 'accent'"},children:{required:!0,tsType:{name:"union",raw:`| React.ReactNode
| ((cardRenderProps: CardRenderProps) => React.ReactNode)`,elements:[{name:"ReactReactNode",raw:"React.ReactNode"},{name:"unknown"}]},description:""}}};const _=a=>e.createElement("div",{...a},"Custom ",a.children),j={title:"Komponenter/Cards/ImageCard",component:s,argTypes:{as:{options:["span","div","custom"],mapping:{div:"div",span:"span",custom:_}}}},o={args:{as:"div",imageSrc:"https://www.sparebank1.no/content/dam/SB1/foto/profilbilder-liggende/ung-i-sofa.jpg.thumb.1280.1280.jpg",imageAltText:"To jenter som går å snakker sammen"},render:a=>e.createElement(s,{...a},({CardName:t,Title:n,Subtext:r,Text:i})=>e.createElement(e.Fragment,null,e.createElement(t,null,"Kortnavn"),e.createElement(n,null,"Tittel"),e.createElement(r,null,"En liten undertekst"),e.createElement(i,null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.")))},m={args:{as:"div",imageSrc:"https://www.sparebank1.no/content/dam/SB1/foto/profilbilder-liggende/ung-i-sofa.jpg.thumb.1280.1280.jpg",imageAltText:"To jenter som går å snakker sammen"},render:a=>e.createElement(s,{...a},({CardName:t,Title:n,Subtext:r,Text:i,CardAction:d})=>e.createElement(e.Fragment,null,e.createElement(t,null,"Kortnavn"),e.createElement(n,null,e.createElement(d,null,"Tittel")),e.createElement(r,null,"En liten undertekst"),e.createElement(i,null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.")))};var c,u,g;o.parameters={...o.parameters,docs:{...(c=o.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(g=(u=o.parameters)==null?void 0:u.docs)==null?void 0:g.source}}};var p,f,T;m.parameters={...m.parameters,docs:{...(p=m.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
      Text,
      CardAction
    }) => <>
                    <CardName>Kortnavn</CardName>
                    <Title>
                        <CardAction>Tittel</CardAction>
                    </Title>
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
}`,...(T=(f=m.parameters)==null?void 0:f.docs)==null?void 0:T.source}}};const R=["Standard","WithAction"],K=Object.freeze(Object.defineProperty({__proto__:null,Standard:o,WithAction:m,__namedExportsOrder:R,default:j},Symbol.toStringTag,{value:"Module"}));export{K as I,o as S};
