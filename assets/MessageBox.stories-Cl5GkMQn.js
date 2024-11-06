import{R as e}from"./index-DJO9vBfz.js";import{t as f,C as b,a as i,M as v}from"./Content-Cc0GRSih.js";import{c as M}from"./index-i5X67GZP.js";const r=({type:a,header:s,iconFileUrl:m,children:c,locale:d="nb",onColoredBg:u,className:g,...p})=>e.createElement("div",{className:M("ffe-message","ffe-message--box",`ffe-message--${a}`,{"ffe-message--colored-bg":u},g),role:a==="error"?"alert":"group","aria-label":f[d][a].ariaLabel,...p},e.createElement("div",{className:"ffe-message__background"},e.createElement(b,null,typeof s=="string"?e.createElement(i,{as:"h2"},s):s,c)),e.createElement(v,{iconFileUrl:m}));r.__docgenInfo={description:"",methods:[],displayName:"MessageBox",props:{iconFileUrl:{required:!1,tsType:{name:"string"},description:"url to svg icon to override default"},header:{required:!1,tsType:{name:"union",raw:"React.ReactElement<MessageHeaderProps> | string",elements:[{name:"ReactReactElement",raw:"React.ReactElement<MessageHeaderProps>",elements:[{name:"intersection",raw:`{
    as?: As;
} & DistributiveOmit<
    ComponentPropsWithoutRef<ElementType extends As ? 'div' : As>,
    'as'
>`,elements:[{name:"signature",type:"object",raw:`{
    as?: As;
}`,signature:{properties:[{key:"as",value:{name:"As",required:!1}}]}},{name:"unknown"}]}]},{name:"string"}]},description:"The header"},type:{required:!0,tsType:{name:"union",raw:"'info' | 'error' | 'success' | 'tips' | 'news'",elements:[{name:"literal",value:"'info'"},{name:"literal",value:"'error'"},{name:"literal",value:"'success'"},{name:"literal",value:"'tips'"},{name:"literal",value:"'news'"}]},description:"info, success, tips, news or error"},onColoredBg:{required:!1,tsType:{name:"boolean"},description:"Adds alternative styling for better contrast on certain backgrounds"},locale:{required:!1,tsType:{name:"union",raw:"'nb' | 'nn' | 'en'",elements:[{name:"literal",value:"'nb'"},{name:"literal",value:"'nn'"},{name:"literal",value:"'en'"}]},description:"Decides the language of the aria-label for the close icon",defaultValue:{value:"'nb'",computed:!1}}}};const y={title:"Komponenter/Messages/MessageBox",component:r,subcomponents:{MessageHeader:i}},n={args:{type:"error",header:"Meldingstittel"},render:a=>e.createElement(r,{...a},"Meldingsboksene skal inneholde informasjon som er nyttig og relevant for brukerne.")};var t,o,l;n.parameters={...n.parameters,docs:{...(t=n.parameters)==null?void 0:t.docs,source:{originalSource:`{
  args: {
    type: 'error',
    header: 'Meldingstittel'
  },
  render: args => <MessageBox {...args}>
            Meldingsboksene skal inneholde informasjon som er nyttig og relevant
            for brukerne.
        </MessageBox>
}`,...(l=(o=n.parameters)==null?void 0:o.docs)==null?void 0:l.source}}};const h=["Standard"],w=Object.freeze(Object.defineProperty({__proto__:null,Standard:n,__namedExportsOrder:h,default:y},Symbol.toStringTag,{value:"Module"}));export{w as M,n as S};
