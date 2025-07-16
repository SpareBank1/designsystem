import{r as U,R as r}from"./index-DQDNmYQF.js";import{c as W}from"./index-QCImZZ3W.js";import{t as z,M as R,C as F,a as H}from"./Content-DbXcSOP0.js";import{M as K,C as P}from"./MessageCollapse-Dozv0W-N.js";import{L as V}from"./LinkText-fBwg0lJi.js";const s=({type:e,className:x,locale:d="nb",children:q,onClose:m,iconFileUrl:I,...j})=>{const[O,B]=U.useState(!1);return r.createElement(K,{isClosed:O},r.createElement("div",{className:W("ffe-default-mode","ffe-message","ffe-message--system",`ffe-message--${e}`,x),role:e==="error"?"alert":"group","aria-label":z[d][e].ariaLabel,...j},r.createElement("div",{className:"ffe-message__background"},r.createElement(R,{iconFileUrl:I}),r.createElement(F,null,q),r.createElement(P,{locale:d,onClick:()=>{B(!0),m==null||m()}}))))};s.__docgenInfo={description:"",methods:[],displayName:"SystemMessage",props:{type:{required:!0,tsType:{name:"union",raw:"'info' | 'error' | 'success' | 'tips' | 'warning'",elements:[{name:"literal",value:"'info'"},{name:"literal",value:"'error'"},{name:"literal",value:"'success'"},{name:"literal",value:"'tips'"},{name:"literal",value:"'warning'"}]},description:"info, success, tips, warning or error"},iconFileUrl:{required:!1,tsType:{name:"string"},description:"url to svg icon to override default"},locale:{required:!1,tsType:{name:"union",raw:"'nb' | 'nn' | 'en'",elements:[{name:"literal",value:"'nb'"},{name:"literal",value:"'nn'"},{name:"literal",value:"'en'"}]},description:"nn, nb or en",defaultValue:{value:"'nb'",computed:!1}},onClose:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Called when closed"},onColoredBg:{required:!1,tsType:{name:"never"},description:`@deprecated as part of update to Semantic Colors

Use the \`ffe-accent-color\` class on the component or on the container of the component instead
[Read more in the upgrade guide](https://sparebank1.github.io/designsystem/?path=/docs/introduksjon-changelog--docs#2025---februar---semantiske-farger)`}}};const C=({children:e})=>r.createElement("ul",{className:"ffe-message__list"},e);C.__docgenInfo={description:"",methods:[],displayName:"MessageList",props:{children:{required:!0,tsType:{name:"NonNullable",elements:[{name:"ReactReactNode",raw:"React.ReactNode"}],raw:"NonNullable<React.ReactNode>"},description:""}}};const $={title:"Komponenter/Messages/SystemMessage",component:s,subcomponents:{MessageHeader:H,MessageList:C,MessageIcon:R}},a={args:{type:"info"},render:e=>r.createElement(s,{...e},"Systemmeldinger skal bare brukes til viktige, midlertidige meldinger.",r.createElement(V,null,"Lenke"))},t={args:{type:"info"},render:e=>r.createElement(s,{...e},"Systemmeldinger skal bare brukes til viktige, midlertidige meldinger.")},n={args:{type:"tips"},render:e=>r.createElement(s,{...e},"Systemmeldinger skal bare brukes til viktige, midlertidige meldinger.")},i={args:{type:"success"},render:e=>r.createElement(s,{...e},"Systemmeldinger skal bare brukes til viktige, midlertidige meldinger.")},l={args:{type:"warning"},render:e=>r.createElement(s,{...e},"Systemmeldinger skal bare brukes til viktige, midlertidige meldinger.")},o={args:{type:"error"},render:e=>r.createElement(s,{...e},"Systemmeldinger skal bare brukes til viktige, midlertidige meldinger.")};var g,c,u;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    type: 'info'
  },
  render: args => <SystemMessage {...args}>
            Systemmeldinger skal bare brukes til viktige, midlertidige
            meldinger.
            <LinkText>Lenke</LinkText>
        </SystemMessage>
}`,...(u=(c=a.parameters)==null?void 0:c.docs)==null?void 0:u.source}}};var p,y,f;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    type: 'info'
  },
  render: args => <SystemMessage {...args}>
            Systemmeldinger skal bare brukes til viktige, midlertidige
            meldinger.
        </SystemMessage>
}`,...(f=(y=t.parameters)==null?void 0:y.docs)==null?void 0:f.source}}};var k,S,b;n.parameters={...n.parameters,docs:{...(k=n.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    type: 'tips'
  },
  render: args => <SystemMessage {...args}>
            Systemmeldinger skal bare brukes til viktige, midlertidige
            meldinger.
        </SystemMessage>
}`,...(b=(S=n.parameters)==null?void 0:S.docs)==null?void 0:b.source}}};var v,M,E;i.parameters={...i.parameters,docs:{...(v=i.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    type: 'success'
  },
  render: args => <SystemMessage {...args}>
            Systemmeldinger skal bare brukes til viktige, midlertidige
            meldinger.
        </SystemMessage>
}`,...(E=(M=i.parameters)==null?void 0:M.docs)==null?void 0:E.source}}};var _,h,N;l.parameters={...l.parameters,docs:{...(_=l.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    type: 'warning'
  },
  render: args => <SystemMessage {...args}>
            Systemmeldinger skal bare brukes til viktige, midlertidige
            meldinger.
        </SystemMessage>
}`,...(N=(h=l.parameters)==null?void 0:h.docs)==null?void 0:N.source}}};var T,w,L;o.parameters={...o.parameters,docs:{...(T=o.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    type: 'error'
  },
  render: args => <SystemMessage {...args}>
            Systemmeldinger skal bare brukes til viktige, midlertidige
            meldinger.
        </SystemMessage>
}`,...(L=(w=o.parameters)==null?void 0:w.docs)==null?void 0:L.source}}};const A=["Standard","Info","Tips","Success","Warning","Error"],Y=Object.freeze(Object.defineProperty({__proto__:null,Error:o,Info:t,Standard:a,Success:i,Tips:n,Warning:l,__namedExportsOrder:A,default:$},Symbol.toStringTag,{value:"Module"}));export{Y as S,a};
