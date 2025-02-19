import{R as r}from"./index-eCxJ45ll.js";import{c as b}from"./index-DezCrw0f.js";import{P as h}from"./Paragraph-Qjq98ToE.js";const v={ariaLabel:"Vennligst vent"},S={ariaLabel:"Ver vennleg og vent"},y={ariaLabel:"Please wait"},T={nb:v,nn:S,en:y},t=({className:a,immediate:m=!1,large:g=!1,loadingText:s,locale:u="nb",...f})=>r.createElement("div",{"aria-live":"assertive",className:a,...f,"data-testid":"spinner-container"},r.createElement("span",{className:b("ffe-loading-spinner",{"ffe-loading-spinner--immediate":m},{"ffe-loading-spinner--large":g}),role:"img","aria-label":T[u].ariaLabel,"aria-hidden":!!s}),s);t.__docgenInfo={description:"",methods:[],displayName:"Spinner",props:{immediate:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},large:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},loadingText:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},locale:{required:!1,tsType:{name:"union",raw:"'nb' | 'nn' | 'en'",elements:[{name:"literal",value:"'nb'"},{name:"literal",value:"'nn'"},{name:"literal",value:"'en'"}]},description:"'nb', 'nn', or 'en'",defaultValue:{value:"'nb'",computed:!1}},onColoredBg:{required:!1,tsType:{name:"never"},description:`@deprecated as part of update to Semantic Colors

Use the \`ffe-accent-color\` class on the component or on the container of the component instead
[Read more in the upgrade guide](https://sparebank1.github.io/designsystem/?path=/docs/introduksjon-changelog--docs#2025---februar---semantiske-farger)`}},composes:["ComponentPropsWithoutRef"]};const x={title:"Komponenter/Spinner/Spinner",component:t,argTypes:{loadingText:{options:["text","html","none"],mapping:{html:r.createElement(h,null,"Vennligst vent"),text:"Vennligst vent",none:void 0}}}},e={args:{loadingText:"html"},render:a=>r.createElement(t,{...a})},n={args:{...e.args,large:!0},render:a=>r.createElement(t,{...a})};var o,i,l;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    loadingText: 'html'
  },
  render: args => <Spinner {...args} />
}`,...(l=(i=e.parameters)==null?void 0:i.docs)==null?void 0:l.source}}};var d,c,p;n.parameters={...n.parameters,docs:{...(d=n.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    ...Standard.args,
    large: true
  },
  render: args => <Spinner {...args} />
}`,...(p=(c=n.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};const R=["Standard","Large"],E=Object.freeze(Object.defineProperty({__proto__:null,Large:n,Standard:e,__namedExportsOrder:R,default:x},Symbol.toStringTag,{value:"Module"}));export{n as L,E as S,e as a};
