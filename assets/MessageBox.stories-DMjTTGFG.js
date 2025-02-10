import{R as n}from"./index-eCxJ45ll.js";import{t as N,C as O,a as T,M as P}from"./Content-Sbpdb6r3.js";import{c as C}from"./index-DezCrw0f.js";import{L as H}from"./LinkText-DVUMeTIv.js";const r=({type:e,header:m,iconFileUrl:_,children:R,locale:L="nb",className:q,...I})=>n.createElement("div",{className:C("ffe-message","ffe-message--box",`ffe-message--${e}`,q),role:e==="error"?"alert":"group","aria-label":N[L][e].ariaLabel,...I},n.createElement("div",{className:"ffe-message__background"},n.createElement(O,null,typeof m=="string"?n.createElement(T,{as:"h2"},m):m,R)),n.createElement(P,{iconFileUrl:_}));r.__docgenInfo={description:"",methods:[],displayName:"MessageBox",props:{iconFileUrl:{required:!1,tsType:{name:"string"},description:"url to svg icon to override default"},header:{required:!1,tsType:{name:"union",raw:"React.ReactElement<MessageHeaderProps> | string",elements:[{name:"ReactReactElement",raw:"React.ReactElement<MessageHeaderProps>",elements:[{name:"intersection",raw:`{
    as?: As;
} & DistributiveOmit<
    ComponentPropsWithoutRef<ElementType extends As ? 'div' : As>,
    'as'
>`,elements:[{name:"signature",type:"object",raw:`{
    as?: As;
}`,signature:{properties:[{key:"as",value:{name:"As",required:!1}}]}},{name:"unknown"}]}]},{name:"string"}]},description:"The header"},type:{required:!0,tsType:{name:"union",raw:"'info' | 'error' | 'success' | 'tips' | 'warning'",elements:[{name:"literal",value:"'info'"},{name:"literal",value:"'error'"},{name:"literal",value:"'success'"},{name:"literal",value:"'tips'"},{name:"literal",value:"'warning'"}]},description:"info, success, tips, warning or error"},locale:{required:!1,tsType:{name:"union",raw:"'nb' | 'nn' | 'en'",elements:[{name:"literal",value:"'nb'"},{name:"literal",value:"'nn'"},{name:"literal",value:"'en'"}]},description:"Decides the language of the aria-label for the close icon",defaultValue:{value:"'nb'",computed:!1}}}};const W={title:"Komponenter/Messages/MessageBox",component:r,subcomponents:{MessageHeader:T}},s={header:"Meldingstittel"},a={args:{...s,type:"info"},render:e=>n.createElement(r,{...e},"Meldingsboksene skal inneholde informasjon som er nyttig og relevant for brukerne.",n.createElement(H,null,"Lenke"))},o={args:{...s,type:"info"},render:e=>n.createElement(r,{...e},"Meldingsboksene skal inneholde informasjon som er nyttig og relevant for brukerne.")},t={args:{...s,type:"tips"},render:e=>n.createElement(r,{...e},"Meldingsboksene skal inneholde informasjon som er nyttig og relevant for brukerne.")},i={args:{...s,type:"success"},render:e=>n.createElement(r,{...e},"Meldingsboksene skal inneholde informasjon som er nyttig og relevant for brukerne.")},l={args:{...s,type:"warning"},render:e=>n.createElement(r,{...e},"Meldingsboksene skal inneholde informasjon som er nyttig og relevant for brukerne.")},g={args:{...s,type:"error"},render:e=>n.createElement(r,{...e},"Meldingsboksene skal inneholde informasjon som er nyttig og relevant for brukerne.")};var c,d,u;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    ...messageArgs,
    type: 'info'
  },
  render: args => <MessageBox {...args}>
            Meldingsboksene skal inneholde informasjon som er nyttig og relevant
            for brukerne.
            <LinkText>Lenke</LinkText>
        </MessageBox>
}`,...(u=(d=a.parameters)==null?void 0:d.docs)==null?void 0:u.source}}};var p,f,k;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    ...messageArgs,
    type: 'info'
  },
  render: args => <MessageBox {...args}>
            Meldingsboksene skal inneholde informasjon som er nyttig og relevant
            for brukerne.
        </MessageBox>
}`,...(k=(f=o.parameters)==null?void 0:f.docs)==null?void 0:k.source}}};var b,M,y;t.parameters={...t.parameters,docs:{...(b=t.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    ...messageArgs,
    type: 'tips'
  },
  render: args => <MessageBox {...args}>
            Meldingsboksene skal inneholde informasjon som er nyttig og relevant
            for brukerne.
        </MessageBox>
}`,...(y=(M=t.parameters)==null?void 0:M.docs)==null?void 0:y.source}}};var v,x,h;i.parameters={...i.parameters,docs:{...(v=i.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    ...messageArgs,
    type: 'success'
  },
  render: args => <MessageBox {...args}>
            Meldingsboksene skal inneholde informasjon som er nyttig og relevant
            for brukerne.
        </MessageBox>
}`,...(h=(x=i.parameters)==null?void 0:x.docs)==null?void 0:h.source}}};var E,B,j;l.parameters={...l.parameters,docs:{...(E=l.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    ...messageArgs,
    type: 'warning'
  },
  render: args => <MessageBox {...args}>
            Meldingsboksene skal inneholde informasjon som er nyttig og relevant
            for brukerne.
        </MessageBox>
}`,...(j=(B=l.parameters)==null?void 0:B.docs)==null?void 0:j.source}}};var S,w,A;g.parameters={...g.parameters,docs:{...(S=g.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    ...messageArgs,
    type: 'error'
  },
  render: args => <MessageBox {...args}>
            Meldingsboksene skal inneholde informasjon som er nyttig og relevant
            for brukerne.
        </MessageBox>
}`,...(A=(w=g.parameters)==null?void 0:w.docs)==null?void 0:A.source}}};const D=["Standard","Info","Tips","Success","Warning","Error"],V=Object.freeze(Object.defineProperty({__proto__:null,Error:g,Info:o,Standard:a,Success:i,Tips:t,Warning:l,__namedExportsOrder:D,default:W},Symbol.toStringTag,{value:"Module"}));export{V as M,a as S};
