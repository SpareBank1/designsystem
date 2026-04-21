import{R as a}from"./index-DQDNmYQF.js";import{c as x}from"./index-D2FocPV0.js";function o({className:e,children:t,...y}){return a.createElement("span",{className:x("ffe-badge",{"ffe-badge--no-children":!t},e),...y},t)}o.__docgenInfo={description:"",methods:[],displayName:"Badge",props:{className:{required:!1,tsType:{name:"string"},description:""},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};const v={title:"Komponenter/Badge/Badge",component:o},r={args:{},render:e=>a.createElement(o,{...e},"9")},s={args:{...r.args},render:e=>a.createElement("div",{style:{display:"flex",gap:"8px",color:"var(--ffe-color-foreground-default)"}},"Meldinger",a.createElement(o,{...e},"23"))},n={args:{},render:e=>a.createElement("div",{style:{height:"24px",width:"24px",backgroundColor:"var(--ffe-color-surface-secondary-default)",borderRadius:"50%"}},a.createElement(o,{...e}))};var d,c,l;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {},
  render: args => <Badge {...args}>9</Badge>
}`,...(l=(c=r.parameters)==null?void 0:c.docs)==null?void 0:l.source}}};var g,i,p;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    ...Standard.args
  },
  render: args => <div style={{
    display: 'flex',
    gap: '8px',
    color: 'var(--ffe-color-foreground-default)'
  }}>
            Meldinger
            <Badge {...args}>23</Badge>
        </div>
}`,...(p=(i=s.parameters)==null?void 0:i.docs)==null?void 0:p.source}}};var m,f,u;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {},
  render: args => <div style={{
    height: '24px',
    width: '24px',
    backgroundColor: 'var(--ffe-color-surface-secondary-default)',
    borderRadius: '50%'
  }}>
            <Badge {...args} />
        </div>
}`,...(u=(f=n.parameters)==null?void 0:f.docs)==null?void 0:u.source}}};const B=["Standard","InContext","Indicator"],h=Object.freeze(Object.defineProperty({__proto__:null,InContext:s,Indicator:n,Standard:r,__namedExportsOrder:B,default:v},Symbol.toStringTag,{value:"Module"}));export{h as B,s as I,r as S,n as a};
