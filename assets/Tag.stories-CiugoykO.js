import{R as e}from"./index-DQDNmYQF.js";import{c as w}from"./index-D2FocPV0.js";import{I as D}from"./Icon-D_nm5xPy.js";function r({className:a,type:L="emphasis",variant:I="neutral",size:c="md",children:A,...S}){return e.createElement("span",{className:w("ffe-tag",`ffe-tag--${I}-${L}`,{[`ffe-tag--${c}`]:c!=="md"},a),...S},A)}r.__docgenInfo={description:"",methods:[],displayName:"Tag",props:{type:{required:!1,tsType:{name:"union",raw:"'emphasis' | 'subtle'",elements:[{name:"literal",value:"'emphasis'"},{name:"literal",value:"'subtle'"}]},description:"Bestemmer taggens uttrykk, om den skal være fremhevet eller subtil",defaultValue:{value:"'emphasis'",computed:!1}},className:{required:!1,tsType:{name:"string"},description:""},variant:{required:!1,tsType:{name:"union",raw:"'info' | 'success' | 'warning' | 'critical' | 'neutral' | 'tip'",elements:[{name:"literal",value:"'info'"},{name:"literal",value:"'success'"},{name:"literal",value:"'warning'"},{name:"literal",value:"'critical'"},{name:"literal",value:"'neutral'"},{name:"literal",value:"'tip'"}]},description:"Fargen på taggen. Info, suksess, advarsel, kritisk, nøytral eller tips",defaultValue:{value:"'neutral'",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}]},description:"Størrelsen på taggen, standard er md",defaultValue:{value:"'md'",computed:!1}},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};const U={title:"Komponenter/Tags/Tag",component:r},t={args:{variant:"info"},render:a=>e.createElement(r,{...a},"Informasjon")},z="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMjAiIHZpZXdCb3g9IjAgLTk2MCA5NjAgOTYwIiB3aWR0aD0iMjAiPjxwYXRoIGQ9Ik0xMTEuOTEtMTQ0cS0xMC45MSAwLTE5LjEzLTQuOTVRODQuNTctMTUzLjkgODAtMTYycS01LTgtNC41LTE4dDUuNS0xOWwzNjgtNjE0cTUtOSAxMy41My0xMyA4LjUyLTQgMTcuNS00IDguOTcgMCAxNy40NyA0IDguNSA0IDEzLjUgMTNsMzY4IDYxNHE1IDkgNS41IDE5dC00LjUgMThxLTUgOC0xMyAxM3QtMTguOTEgNUgxMTEuOTFaTTE3NS0yMTZoNjEwTDQ4MC03MjQgMTc1LTIxNlptMzA0Ljc5LTQ4cTE1LjIxIDAgMjUuNzEtMTAuMjl0MTAuNS0yNS41cTAtMTUuMjEtMTAuMjktMjUuNzF0LTI1LjUtMTAuNXEtMTUuMjEgMC0yNS43MSAxMC4yOXQtMTAuNSAyNS41cTAgMTUuMjEgMTAuMjkgMjUuNzF0MjUuNSAxMC41Wm0wLTEyMHExNS4yMSAwIDI1LjcxLTEwLjM1VDUxNi00MjB2LTEyMHEwLTE1LjMtMTAuMjktMjUuNjVRNDk1LjQyLTU3NiA0ODAuMjEtNTc2dC0yNS43MSAxMC4zNVE0NDQtNTU1LjMgNDQ0LTU0MHYxMjBxMCAxNS4zIDEwLjI5IDI1LjY1UTQ2NC41OC0zODQgNDc5Ljc5LTM4NFptLjIxLTg2WiIvPjwvc3ZnPg==",n={args:{variant:"critical"},render:a=>e.createElement(r,{...a},e.createElement(D,{fileUrl:z,size:"sm"}),"Ikke betalt")},s={args:{type:"emphasis"},render:a=>e.createElement("div",null,e.createElement("div",{style:{display:"flex",gap:"8px",flexWrap:"wrap"}},e.createElement(r,{...a,variant:"info"},"Informasjon"),e.createElement(r,{...a,variant:"warning"},"Advarsel"),e.createElement(r,{...a,variant:"critical"},"Feilmelding"),e.createElement(r,{...a,variant:"success"},"Bekreftelse"),e.createElement(r,{...a,variant:"neutral"},"Nøytral"),e.createElement(r,{...a,variant:"tip"},"Tips")))},i={args:{type:"subtle"},render:a=>e.createElement("div",null,e.createElement("div",{style:{display:"flex",gap:"8px",flexWrap:"wrap"}},e.createElement(r,{...a,variant:"info"},"Informasjon"),e.createElement(r,{...a,variant:"warning"},"Advarsel"),e.createElement(r,{...a,variant:"critical"},"Feilmelding"),e.createElement(r,{...a,variant:"success"},"Bekreftelse"),e.createElement(r,{...a,variant:"neutral"},"Nøytral"),e.createElement(r,{...a,variant:"tip"},"Tips")))},l={args:{variant:"info"},render:a=>e.createElement("div",null,e.createElement("div",{style:{display:"flex",gap:"8px",flexWrap:"wrap"}},e.createElement(r,{...a,size:"sm"},"Tag Label"),e.createElement(r,{...a},"Tag Label"),e.createElement(r,{...a,size:"lg"},"Tag Label")))};var g,m,o;t.parameters={...t.parameters,docs:{...(g=t.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    variant: 'info'
  },
  render: args => <Tag {...args}>Informasjon</Tag>
}`,...(o=(m=t.parameters)==null?void 0:m.docs)==null?void 0:o.source}}};var T,u,d;n.parameters={...n.parameters,docs:{...(T=n.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    variant: 'critical'
  },
  render: args => <Tag {...args}>
            <Icon fileUrl={warning} size="sm" />
            Ikke betalt
        </Tag>
}`,...(d=(u=n.parameters)==null?void 0:u.docs)==null?void 0:d.source}}};var p,v,M;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(M=(v=s.parameters)==null?void 0:v.docs)==null?void 0:M.source}}};var f,E,N;i.parameters={...i.parameters,docs:{...(f=i.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
}`,...(N=(E=i.parameters)==null?void 0:E.docs)==null?void 0:N.source}}};var j,y,x;l.parameters={...l.parameters,docs:{...(j=l.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    variant: 'info'
  },
  render: args => {
    return <div>
                <div style={{
        display: 'flex',
        gap: '8px',
        flexWrap: 'wrap'
      }}>
                    <Tag {...args} size='sm'>
                        Tag Label
                    </Tag>
                    <Tag {...args}>
                        Tag Label
                    </Tag>
                    <Tag {...args} size='lg'>
                        Tag Label
                    </Tag>
                </div>
            </div>;
  }
}`,...(x=(y=l.parameters)==null?void 0:y.docs)==null?void 0:x.source}}};const k=["Standard","WithIcon","Emphasis","Subtle","DifferentSizes"],h=Object.freeze(Object.defineProperty({__proto__:null,DifferentSizes:l,Emphasis:s,Standard:t,Subtle:i,WithIcon:n,__namedExportsOrder:k,default:U},Symbol.toStringTag,{value:"Module"}));export{l as D,s as E,i as S,h as T,n as W};
