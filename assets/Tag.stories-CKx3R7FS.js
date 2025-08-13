import{R as e}from"./index-DQDNmYQF.js";import{c as x}from"./index-D2FocPV0.js";import{I}from"./Icon-D_nm5xPy.js";function r({className:a,type:j="emphasis",variant:E="neutral",children:f,...y}){return e.createElement("span",{className:x("ffe-tag",`ffe-tag--${E}-${j}`,a),...y},f)}r.__docgenInfo={description:"",methods:[],displayName:"Tag",props:{type:{required:!1,tsType:{name:"union",raw:"'emphasis' | 'subtle'",elements:[{name:"literal",value:"'emphasis'"},{name:"literal",value:"'subtle'"}]},description:"Decides the emphasis of the tag, whether it has a strong or subtle look",defaultValue:{value:"'emphasis'",computed:!1}},className:{required:!1,tsType:{name:"string"},description:""},variant:{required:!1,tsType:{name:"union",raw:"'info' | 'success' | 'warning' | 'critical' | 'neutral' | 'tip'",elements:[{name:"literal",value:"'info'"},{name:"literal",value:"'success'"},{name:"literal",value:"'warning'"},{name:"literal",value:"'critical'"},{name:"literal",value:"'neutral'"},{name:"literal",value:"'tip'"}]},description:"the color of the tag. Info, success, warning, critical, neutral or tip",defaultValue:{value:"'neutral'",computed:!1}},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};const A={title:"Komponenter/Tags/Tag",component:r},t={args:{variant:"info"},render:a=>e.createElement(r,{...a},"Informasjon")},L="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMjAiIHZpZXdCb3g9IjAgLTk2MCA5NjAgOTYwIiB3aWR0aD0iMjAiPjxwYXRoIGQ9Ik0xMTEuOTEtMTQ0cS0xMC45MSAwLTE5LjEzLTQuOTVRODQuNTctMTUzLjkgODAtMTYycS01LTgtNC41LTE4dDUuNS0xOWwzNjgtNjE0cTUtOSAxMy41My0xMyA4LjUyLTQgMTcuNS00IDguOTcgMCAxNy40NyA0IDguNSA0IDEzLjUgMTNsMzY4IDYxNHE1IDkgNS41IDE5dC00LjUgMThxLTUgOC0xMyAxM3QtMTguOTEgNUgxMTEuOTFaTTE3NS0yMTZoNjEwTDQ4MC03MjQgMTc1LTIxNlptMzA0Ljc5LTQ4cTE1LjIxIDAgMjUuNzEtMTAuMjl0MTAuNS0yNS41cTAtMTUuMjEtMTAuMjktMjUuNzF0LTI1LjUtMTAuNXEtMTUuMjEgMC0yNS43MSAxMC4yOXQtMTAuNSAyNS41cTAgMTUuMjEgMTAuMjkgMjUuNzF0MjUuNSAxMC41Wm0wLTEyMHExNS4yMSAwIDI1LjcxLTEwLjM1VDUxNi00MjB2LTEyMHEwLTE1LjMtMTAuMjktMjUuNjVRNDk1LjQyLTU3NiA0ODAuMjEtNTc2dC0yNS43MSAxMC4zNVE0NDQtNTU1LjMgNDQ0LTU0MHYxMjBxMCAxNS4zIDEwLjI5IDI1LjY1UTQ2NC41OC0zODQgNDc5Ljc5LTM4NFptLjIxLTg2WiIvPjwvc3ZnPg==",n={args:{variant:"critical"},render:a=>e.createElement(r,{...a},e.createElement(I,{fileUrl:L,size:"sm"}),"Ikke betalt")},s={args:{type:"emphasis"},render:a=>e.createElement("div",null,e.createElement("div",{style:{display:"flex",gap:"8px",flexWrap:"wrap"}},e.createElement(r,{...a,variant:"info"},"Informasjon"),e.createElement(r,{...a,variant:"warning"},"Advarsel"),e.createElement(r,{...a,variant:"critical"},"Feilmelding"),e.createElement(r,{...a,variant:"success"},"Bekreftelse"),e.createElement(r,{...a,variant:"neutral"},"Nøytral"),e.createElement(r,{...a,variant:"tip"},"Tips")))},i={args:{type:"subtle"},render:a=>e.createElement("div",null,e.createElement("div",{style:{display:"flex",gap:"8px",flexWrap:"wrap"}},e.createElement(r,{...a,variant:"info"},"Informasjon"),e.createElement(r,{...a,variant:"warning"},"Advarsel"),e.createElement(r,{...a,variant:"critical"},"Feilmelding"),e.createElement(r,{...a,variant:"success"},"Bekreftelse"),e.createElement(r,{...a,variant:"neutral"},"Nøytral"),e.createElement(r,{...a,variant:"tip"},"Tips")))};var l,c,o;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    variant: 'info'
  },
  render: args => <Tag {...args}>Informasjon</Tag>
}`,...(o=(c=t.parameters)==null?void 0:c.docs)==null?void 0:o.source}}};var g,T,u;n.parameters={...n.parameters,docs:{...(g=n.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    variant: 'critical'
  },
  render: args => <Tag {...args}>
            <Icon fileUrl={warning} size="sm" />
            Ikke betalt
        </Tag>
}`,...(u=(T=n.parameters)==null?void 0:T.docs)==null?void 0:u.source}}};var m,p,d;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    type: 'emphasis'
  },
  render: args => {
    return <div>
                <div style={{
        display: 'flex',
        gap: '8px',
        flexWrap: 'wrap'
      }}>
                    <Tag {...args} variant="info">
                        Informasjon
                    </Tag>
                    <Tag {...args} variant="warning">
                        Advarsel
                    </Tag>
                    <Tag {...args} variant="critical">
                        Feilmelding
                    </Tag>
                    <Tag {...args} variant="success">
                        Bekreftelse
                    </Tag>
                    <Tag {...args} variant="neutral">
                        Nøytral
                    </Tag>
                    <Tag {...args} variant="tip">
                        Tips
                    </Tag>
                </div>
            </div>;
  }
}`,...(d=(p=s.parameters)==null?void 0:p.docs)==null?void 0:d.source}}};var M,v,N;i.parameters={...i.parameters,docs:{...(M=i.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    type: 'subtle'
  },
  render: args => {
    return <div>
                <div style={{
        display: 'flex',
        gap: '8px',
        flexWrap: 'wrap'
      }}>
                    <Tag {...args} variant="info">
                        Informasjon
                    </Tag>
                    <Tag {...args} variant="warning">
                        Advarsel
                    </Tag>
                    <Tag {...args} variant="critical">
                        Feilmelding
                    </Tag>
                    <Tag {...args} variant="success">
                        Bekreftelse
                    </Tag>
                    <Tag {...args} variant="neutral">
                        Nøytral
                    </Tag>
                    <Tag {...args} variant="tip">
                        Tips
                    </Tag>
                </div>
            </div>;
  }
}`,...(N=(v=i.parameters)==null?void 0:v.docs)==null?void 0:N.source}}};const S=["Standard","WithIcon","Emphasis","Subtle"],h=Object.freeze(Object.defineProperty({__proto__:null,Emphasis:s,Standard:t,Subtle:i,WithIcon:n,__namedExportsOrder:S,default:A},Symbol.toStringTag,{value:"Module"}));export{s as E,i as S,h as T,n as W};
