import{r as H,R as s}from"./index-ne9I_3bB.js";import{t as W,M as D,C as z,a as R}from"./Content-BsnP3TFA.js";import{c as F}from"./index-B6-3w37c.js";import{M as U,C as V}from"./MessageCollapse-DskJfFtW.js";import{L as $}from"./LinkText-COY3TIXg.js";const n=({type:e,className:_,locale:d="nb",children:q,onClose:c,iconFileUrl:L,header:g,compact:I,closeButton:N,...O})=>{const[P,B]=H.useState(!1);return s.createElement(U,{isClosed:P},s.createElement("div",{className:F("ffe-message","ffe-message--context",`ffe-message--${e}`,{"ffe-message--context-compact":I},_),role:e==="error"?"alert":"group","aria-label":W[d][e].ariaLabel,...O},s.createElement("div",{className:"ffe-message__background"},s.createElement(D,{iconFileUrl:L}),s.createElement(z,null,typeof g=="string"?s.createElement(R,{as:"h2"},g):g,q),N&&s.createElement(V,{locale:d,onClick:()=>{B(!0),c==null||c()}}))))};n.__docgenInfo={description:"",methods:[],displayName:"ContextMessage",props:{compact:{required:!1,tsType:{name:"boolean"},description:"Renders a more compact version of the context message"},iconFileUrl:{required:!1,tsType:{name:"string"},description:"url to svg icon to override default"},locale:{required:!1,tsType:{name:"union",raw:"'nb' | 'nn' | 'en'",elements:[{name:"literal",value:"'nb'"},{name:"literal",value:"'nn'"},{name:"literal",value:"'en'"}]},description:"Decides the language of the aria-label for the close icon",defaultValue:{value:"'nb'",computed:!1}},type:{required:!0,tsType:{name:"union",raw:"'info' | 'error' | 'success' | 'tips' | 'warning'",elements:[{name:"literal",value:"'info'"},{name:"literal",value:"'error'"},{name:"literal",value:"'success'"},{name:"literal",value:"'tips'"},{name:"literal",value:"'warning'"}]},description:"info, success, tips, warning or error"},onClose:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Called when closed"},closeButton:{required:!1,tsType:{name:"boolean"},description:"Show close button"},header:{required:!1,tsType:{name:"union",raw:"React.ReactElement<MessageHeaderProps> | string",elements:[{name:"ReactReactElement",raw:"React.ReactElement<MessageHeaderProps>",elements:[{name:"intersection",raw:`{
    as?: As;
} & DistributiveOmit<
    ComponentPropsWithoutRef<ElementType extends As ? 'div' : As>,
    'as'
>`,elements:[{name:"signature",type:"object",raw:`{
    as?: As;
}`,signature:{properties:[{key:"as",value:{name:"As",required:!1}}]}},{name:"unknown"}]}]},{name:"string"}]},description:"The header"}}};const G={title:"Komponenter/Messages/ContextMessage",component:n,subcomponents:{MessageHeader:R}},r={closeButton:!0,header:"Meldingstittel"},t={args:{...r,type:"info"},render:e=>s.createElement(n,{...e},"Kontekstuelle meldinger er informasjon som skal gis i en kontekst",s.createElement($,null,"Lenke"))},a={args:{...r,type:"info"},render:e=>s.createElement(n,{...e},"Kontekstuelle meldinger er informasjon som skal gis i en kontekst")},o={args:{...r,type:"tips"},render:e=>s.createElement(n,{...e},"Kontekstuelle meldinger er informasjon som skal gis i en kontekst")},i={args:{...r,type:"success"},render:e=>s.createElement(n,{...e},"Kontekstuelle meldinger er informasjon som skal gis i en kontekst")},l={args:{...r,type:"warning"},render:e=>s.createElement(n,{...e},"Kontekstuelle meldinger er informasjon som skal gis i en kontekst")},m={args:{...r,type:"error"},render:e=>s.createElement(n,{...e},"Kontekstuelle meldinger er informasjon som skal gis i en kontekst")};var u,p,f;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    ...messageArgs,
    type: 'info'
  },
  render: args => <ContextMessage {...args}>
            Kontekstuelle meldinger er informasjon som skal gis i en kontekst
            <LinkText>Lenke</LinkText>
        </ContextMessage>
}`,...(f=(p=t.parameters)==null?void 0:p.docs)==null?void 0:f.source}}};var k,x,y;a.parameters={...a.parameters,docs:{...(k=a.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    ...messageArgs,
    type: 'info'
  },
  render: args => <ContextMessage {...args}>
            Kontekstuelle meldinger er informasjon som skal gis i en kontekst
        </ContextMessage>
}`,...(y=(x=a.parameters)==null?void 0:x.docs)==null?void 0:y.source}}};var M,C,E;o.parameters={...o.parameters,docs:{...(M=o.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    ...messageArgs,
    type: 'tips'
  },
  render: args => <ContextMessage {...args}>
            Kontekstuelle meldinger er informasjon som skal gis i en kontekst
        </ContextMessage>
}`,...(E=(C=o.parameters)==null?void 0:C.docs)==null?void 0:E.source}}};var v,b,S;i.parameters={...i.parameters,docs:{...(v=i.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    ...messageArgs,
    type: 'success'
  },
  render: args => <ContextMessage {...args}>
            Kontekstuelle meldinger er informasjon som skal gis i en kontekst
        </ContextMessage>
}`,...(S=(b=i.parameters)==null?void 0:b.docs)==null?void 0:S.source}}};var j,w,T;l.parameters={...l.parameters,docs:{...(j=l.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    ...messageArgs,
    type: 'warning'
  },
  render: args => <ContextMessage {...args}>
            Kontekstuelle meldinger er informasjon som skal gis i en kontekst
        </ContextMessage>
}`,...(T=(w=l.parameters)==null?void 0:w.docs)==null?void 0:T.source}}};var K,A,h;m.parameters={...m.parameters,docs:{...(K=m.parameters)==null?void 0:K.docs,source:{originalSource:`{
  args: {
    ...messageArgs,
    type: 'error'
  },
  render: args => <ContextMessage {...args}>
            Kontekstuelle meldinger er informasjon som skal gis i en kontekst
        </ContextMessage>
}`,...(h=(A=m.parameters)==null?void 0:A.docs)==null?void 0:h.source}}};const J=["Standard","Info","Tips","Success","Warning","Error"],se=Object.freeze(Object.defineProperty({__proto__:null,Error:m,Info:a,Standard:t,Success:i,Tips:o,Warning:l,__namedExportsOrder:J,default:G},Symbol.toStringTag,{value:"Module"}));export{se as C,t as S};
