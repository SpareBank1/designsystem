import{R as r}from"./index-eCxJ45ll.js";import{c as s}from"./index-DezCrw0f.js";import{P as S}from"./Paragraph-Qjq98ToE.js";const h={ariaLabel:"Vennligst vent"},v={ariaLabel:"Ver vennleg og vent"},T={ariaLabel:"Please wait"},x={nb:h,nn:v,en:T},t=({className:a,immediate:g=!1,large:u=!1,loadingText:o,locale:f="nb",...b})=>r.createElement("div",{"aria-live":"assertive",className:s("ffe-loading-spinner-container",a),...b,"data-testid":"spinner-container"},r.createElement("span",{className:s("ffe-loading-spinner",{"ffe-loading-spinner--immediate":g},{"ffe-loading-spinner--large":u}),role:"img","aria-label":x[f].ariaLabel,"aria-hidden":!!o}),o);t.__docgenInfo={description:"",methods:[],displayName:"Spinner",props:{immediate:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},large:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},loadingText:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},locale:{required:!1,tsType:{name:"union",raw:"'nb' | 'nn' | 'en'",elements:[{name:"literal",value:"'nb'"},{name:"literal",value:"'nn'"},{name:"literal",value:"'en'"}]},description:"'nb', 'nn', or 'en'",defaultValue:{value:"'nb'",computed:!1}},onColoredBg:{required:!1,tsType:{name:"never"},description:`@deprecated as part of update to Semantic Colors

Use the \`ffe-accent-color\` class on the component or on the container of the component instead
[Read more in the upgrade guide](https://sparebank1.github.io/designsystem/?path=/docs/introduksjon-changelog--docs#2025---februar---semantiske-farger)`}},composes:["ComponentPropsWithoutRef"]};const y={title:"Komponenter/Spinner/Spinner",component:t,argTypes:{loadingText:{options:["text","html","none"],mapping:{html:r.createElement(S,null,"Vennligst vent"),text:"Vennligst vent",none:void 0}}}},e={args:{loadingText:"html"},render:a=>r.createElement(t,{...a})},n={args:{...e.args,large:!0,loadingText:"Større loading"},render:a=>r.createElement(t,{...a})};var i,l,d;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    loadingText: 'html'
  },
  render: args => <Spinner {...args} />
}`,...(d=(l=e.parameters)==null?void 0:l.docs)==null?void 0:d.source}}};var c,p,m;n.parameters={...n.parameters,docs:{...(c=n.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    ...Standard.args,
    large: true,
    loadingText: 'Større loading'
  },
  render: args => <Spinner {...args} />
}`,...(m=(p=n.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};const R=["Standard","Large"],E=Object.freeze(Object.defineProperty({__proto__:null,Large:n,Standard:e,__namedExportsOrder:R,default:y},Symbol.toStringTag,{value:"Module"}));export{n as L,E as S,e as a};
