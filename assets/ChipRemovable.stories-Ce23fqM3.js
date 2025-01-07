import{R as a}from"./index-ne9I_3bB.js";import{f as g,C as p}from"./Chip-DL8SQ9Vw.js";import{I as M}from"./Icon-D2PqKf0B.js";import{f as T,s as E}from"./spacing-enBt7HlE.js";const u="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMjAiIHZpZXdCb3g9IjAgLTk2MCA5NjAgOTYwIiB3aWR0aD0iMjAiPjxwYXRoIGQ9Ik00ODAtNDI5IDMxNi0yNjVxLTExIDExLTI1IDEwLjVUMjY2LTI2NnEtMTEtMTEtMTEtMjUuNXQxMS0yNS41bDE2My0xNjMtMTY0LTE2NHEtMTEtMTEtMTAuNS0yNS41VDI2Ni02OTVxMTEtMTEgMjUuNS0xMXQyNS41IDExbDE2MyAxNjQgMTY0LTE2NHExMS0xMSAyNS41LTExdDI1LjUgMTFxMTEgMTEgMTEgMjUuNVQ2OTUtNjQ0TDUzMS00ODBsMTY0IDE2NHExMSAxMSAxMSAyNXQtMTEgMjVxLTExIDExLTI1LjUgMTFUNjQ0LTI2Nkw0ODAtNDI5WiIvPjwvc3ZnPg==";function x(e,m){return a.createElement(p,{ref:m,rightIcon:a.createElement(M,{size:"sm",fileUrl:u}),...e})}const t=g(x);t.__docgenInfo={description:"",methods:[],displayName:"ChipRemovable",props:{as:{required:!1,tsType:{name:"As"},description:""},size:{required:!0,tsType:{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}]},description:"Size of chip"},onColoredBg:{required:!1,tsType:{name:"boolean"},description:"Adds alternative styling for better contrast on certain backgrounds"}}};const N={title:"Komponenter/Chips/ChipRemovable",component:t},r={args:{as:"button",children:"Label",size:"sm"},render:e=>a.createElement(t,{...e})},o={args:{...r.args,onColoredBg:!0},decorators:[e=>a.createElement("div",{style:{background:T,padding:E}},a.createElement(e,null))],render:e=>a.createElement(t,{...e})};var n,s,i;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    as: 'button',
    children: 'Label',
    size: 'sm'
  },
  render: args => <ChipRemovable {...args} />
}`,...(i=(s=r.parameters)==null?void 0:s.docs)==null?void 0:i.source}}};var d,l,c;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    ...Standard.args,
    onColoredBg: true
  },
  decorators: [OnColoredBgStory => <div style={{
    background: fargeFjell,
    padding: spacingXs
  }}>
                <OnColoredBgStory />
            </div>],
  render: args => <ChipRemovable {...args} />
}`,...(c=(l=o.parameters)==null?void 0:l.docs)==null?void 0:c.source}}};const S=["Standard","OnColoredBg"],f=Object.freeze(Object.defineProperty({__proto__:null,OnColoredBg:o,Standard:r,__namedExportsOrder:S,default:N},Symbol.toStringTag,{value:"Module"}));export{f as C,r as S};
