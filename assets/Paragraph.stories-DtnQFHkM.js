import{R as o}from"./index-DQDNmYQF.js";import{c as u}from"./index-QCImZZ3W.js";function r(a){const{children:l,className:p,lead:d,subLead:i,textCenter:f,textLeft:c,noMargin:g,...m}=a,[h]=[d&&"ffe-lead-paragraph",i&&"ffe-sub-lead-paragraph","ffe-body-paragraph"].filter(Boolean);return o.createElement("p",{className:u(h,{"ffe-body-paragraph--text-center":f},{"ffe-body-paragraph--text-left":c},{"ffe-body-paragraph--no-margin":g},p),...m},l)}r.__docgenInfo={description:"",methods:[],displayName:"Paragraph",props:{lead:{required:!1,tsType:{name:"boolean"},description:"Makes this paragraph a lead paragraph, typically used directly below a heading."},subLead:{required:!1,tsType:{name:"boolean"},description:"Makes this paragraph a sub-lead paragraph, typically used directly below a lead paragraph."},textCenter:{required:!1,tsType:{name:"boolean"},description:"Use if text alignment should override that of its container."},textLeft:{required:!1,tsType:{name:"boolean"},description:"Use if text alignment should override that of its container."},noMargin:{required:!1,tsType:{name:"boolean"},description:"Use if the paragraph should have no margin."}},composes:["ComponentPropsWithoutRef"]};const b={title:"Komponenter/Core/Paragraph",component:r},e={args:{lead:!1,subLead:!1,textCenter:!1,textLeft:!1,noMargin:!1,children:"Some text"},render:a=>o.createElement(r,{...a})};var t,s,n;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
  args: {
    lead: false,
    subLead: false,
    textCenter: false,
    textLeft: false,
    noMargin: false,
    children: 'Some text'
  },
  render: args => <Paragraph {...args} />
}`,...(n=(s=e.parameters)==null?void 0:s.docs)==null?void 0:n.source}}};const y=["Standard"],L=Object.freeze(Object.defineProperty({__proto__:null,Standard:e,__namedExportsOrder:y,default:b},Symbol.toStringTag,{value:"Module"}));export{L as P,e as S};
