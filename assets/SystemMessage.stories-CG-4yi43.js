import{r as z,R as r}from"./index-ne9I_3bB.js";import{c as B}from"./index-B6-3w37c.js";import{t as F,M as x,C as H,a as K}from"./Content-BsnP3TFA.js";import{M as P,C as U}from"./MessageCollapse-DskJfFtW.js";import{L as V}from"./LinkText-COY3TIXg.js";const s=({type:e,className:I,locale:d="nb",children:q,onClose:o,iconFileUrl:h,...O})=>{const[j,W]=z.useState(!1);return r.createElement(P,{isClosed:j},r.createElement("div",{className:B("ffe-message","ffe-message--system",`ffe-message--${e}`,I),role:e==="error"?"alert":"group","aria-label":F[d][e].ariaLabel,...O},r.createElement("div",{className:"ffe-message__background"},r.createElement(x,{iconFileUrl:h}),r.createElement(H,null,q),r.createElement(U,{locale:d,onClick:()=>{W(!0),o==null||o()}}))))};s.__docgenInfo={description:"",methods:[],displayName:"SystemMessage",props:{type:{required:!0,tsType:{name:"union",raw:"'info' | 'error' | 'success' | 'tips' | 'warning'",elements:[{name:"literal",value:"'info'"},{name:"literal",value:"'error'"},{name:"literal",value:"'success'"},{name:"literal",value:"'tips'"},{name:"literal",value:"'warning'"}]},description:"info, success, tips, warning or error"},iconFileUrl:{required:!1,tsType:{name:"string"},description:"url to svg icon to override default"},locale:{required:!1,tsType:{name:"union",raw:"'nb' | 'nn' | 'en'",elements:[{name:"literal",value:"'nb'"},{name:"literal",value:"'nn'"},{name:"literal",value:"'en'"}]},description:"nn, nb or en",defaultValue:{value:"'nb'",computed:!1}},onClose:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Called when closed"}}};const C=({children:e})=>r.createElement("ul",{className:"ffe-message__list"},e);C.__docgenInfo={description:"",methods:[],displayName:"MessageList",props:{children:{required:!0,tsType:{name:"NonNullable",elements:[{name:"ReactReactNode",raw:"React.ReactNode"}],raw:"NonNullable<React.ReactNode>"},description:""}}};const $={title:"Komponenter/Messages/SystemMessage",component:s,subcomponents:{MessageHeader:K,MessageList:C,MessageIcon:x}},a={args:{type:"info"},render:e=>r.createElement(s,{...e},"Systemmeldinger skal bare brukes til viktige, midlertidige meldinger.",r.createElement(V,null,"Lenke"))},t={args:{type:"info"},render:e=>r.createElement(s,{...e},"Systemmeldinger skal bare brukes til viktige, midlertidige meldinger.")},n={args:{type:"tips"},render:e=>r.createElement(s,{...e},"Systemmeldinger skal bare brukes til viktige, midlertidige meldinger.")},i={args:{type:"success"},render:e=>r.createElement(s,{...e},"Systemmeldinger skal bare brukes til viktige, midlertidige meldinger.")},l={args:{type:"warning"},render:e=>r.createElement(s,{...e},"Systemmeldinger skal bare brukes til viktige, midlertidige meldinger.")},m={args:{type:"error"},render:e=>r.createElement(s,{...e},"Systemmeldinger skal bare brukes til viktige, midlertidige meldinger.")};var g,c,u;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    type: 'info'
  },
  render: args => <SystemMessage {...args}>
            Systemmeldinger skal bare brukes til viktige, midlertidige
            meldinger.
            <LinkText>Lenke</LinkText>
        </SystemMessage>
}`,...(u=(c=a.parameters)==null?void 0:c.docs)==null?void 0:u.source}}};var p,y,k;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    type: 'info'
  },
  render: args => <SystemMessage {...args}>
            Systemmeldinger skal bare brukes til viktige, midlertidige
            meldinger.
        </SystemMessage>
}`,...(k=(y=t.parameters)==null?void 0:y.docs)==null?void 0:k.source}}};var S,b,f;n.parameters={...n.parameters,docs:{...(S=n.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    type: 'tips'
  },
  render: args => <SystemMessage {...args}>
            Systemmeldinger skal bare brukes til viktige, midlertidige
            meldinger.
        </SystemMessage>
}`,...(f=(b=n.parameters)==null?void 0:b.docs)==null?void 0:f.source}}};var v,M,E;i.parameters={...i.parameters,docs:{...(v=i.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    type: 'success'
  },
  render: args => <SystemMessage {...args}>
            Systemmeldinger skal bare brukes til viktige, midlertidige
            meldinger.
        </SystemMessage>
}`,...(E=(M=i.parameters)==null?void 0:M.docs)==null?void 0:E.source}}};var _,N,w;l.parameters={...l.parameters,docs:{...(_=l.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    type: 'warning'
  },
  render: args => <SystemMessage {...args}>
            Systemmeldinger skal bare brukes til viktige, midlertidige
            meldinger.
        </SystemMessage>
}`,...(w=(N=l.parameters)==null?void 0:N.docs)==null?void 0:w.source}}};var T,L,R;m.parameters={...m.parameters,docs:{...(T=m.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    type: 'error'
  },
  render: args => <SystemMessage {...args}>
            Systemmeldinger skal bare brukes til viktige, midlertidige
            meldinger.
        </SystemMessage>
}`,...(R=(L=m.parameters)==null?void 0:L.docs)==null?void 0:R.source}}};const A=["Standard","Info","Tips","Success","Warning","Error"],Y=Object.freeze(Object.defineProperty({__proto__:null,Error:m,Info:t,Standard:a,Success:i,Tips:n,Warning:l,__namedExportsOrder:A,default:$},Symbol.toStringTag,{value:"Module"}));export{Y as S,a};
