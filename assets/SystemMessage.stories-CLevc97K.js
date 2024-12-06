import{r as v,R as e}from"./index-eCxJ45ll.js";import{c as S}from"./index-DezCrw0f.js";import{t as M,M as m,C as _,a as N}from"./Content-C81rQzun.js";import{M as E,C as k}from"./MessageCollapse-Dlat2NYY.js";const t=({type:s,className:d,onColoredBg:u,locale:n="nb",children:g,onClose:r,iconFileUrl:p,...f})=>{const[b,y]=v.useState(!1);return e.createElement(E,{isClosed:b},e.createElement("div",{className:S("ffe-message","ffe-message--system",`ffe-message--${s}`,{"ffe-message--colored-bg":u},d),role:s==="error"?"alert":"group","aria-label":M[n][s].ariaLabel,...f},e.createElement("div",{className:"ffe-message__background"},e.createElement(m,{iconFileUrl:p}),e.createElement(_,null,g),e.createElement(k,{locale:n,onClick:()=>{y(!0),r==null||r()}}))))};t.__docgenInfo={description:"",methods:[],displayName:"SystemMessage",props:{type:{required:!0,tsType:{name:"union",raw:"'info' | 'error' | 'success' | 'tips' | 'news'",elements:[{name:"literal",value:"'info'"},{name:"literal",value:"'error'"},{name:"literal",value:"'success'"},{name:"literal",value:"'tips'"},{name:"literal",value:"'news'"}]},description:"info, success, tips, news or error"},onColoredBg:{required:!1,tsType:{name:"boolean"},description:"Adds alternative styling for better contrast on certain backgrounds"},iconFileUrl:{required:!1,tsType:{name:"string"},description:"url to svg icon to override default"},locale:{required:!1,tsType:{name:"union",raw:"'nb' | 'nn' | 'en'",elements:[{name:"literal",value:"'nb'"},{name:"literal",value:"'nn'"},{name:"literal",value:"'en'"}]},description:"nn, nb or en",defaultValue:{value:"'nb'",computed:!1}},onClose:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Called when closed"}}};const c=({children:s})=>e.createElement("ul",{className:"ffe-message__list"},s);c.__docgenInfo={description:"",methods:[],displayName:"MessageList",props:{children:{required:!0,tsType:{name:"NonNullable",elements:[{name:"ReactReactNode",raw:"React.ReactNode"}],raw:"NonNullable<React.ReactNode>"},description:""}}};const w={title:"Komponenter/Messages/SystemMessage",component:t,subcomponents:{MessageHeader:N,MessageList:c,MessageIcon:m}},a={args:{type:"success"},render:s=>e.createElement(t,{...s},"Systemmeldinger skal bare brukes til viktige, midlertidige meldinger.")};var l,o,i;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    type: 'success'
  },
  render: args => <SystemMessage {...args}>
            Systemmeldinger skal bare brukes til viktige, midlertidige
            meldinger.
        </SystemMessage>
}`,...(i=(o=a.parameters)==null?void 0:o.docs)==null?void 0:i.source}}};const R=["Standard"],x=Object.freeze(Object.defineProperty({__proto__:null,Standard:a,__namedExportsOrder:R,default:w},Symbol.toStringTag,{value:"Module"}));export{x as S,a};