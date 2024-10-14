import{R as e,r as V}from"./index-RYns6xqu.js";import{c as i}from"./index-Dejnh_W_.js";const n=e.forwardRef(({children:a,hiddenLabel:s,inline:H=!0,noMargins:I,id:y,onColoredBg:F,checked:j,...P},R)=>{const L=V.useId(),d=y??L,m={className:i({"ffe-checkbox":!0,"ffe-checkbox--inline":H,"ffe-checkbox--no-margin":I,"ffe-checkbox--hidden-label":s,"ffe-checkbox--on-colored-bg":F}),htmlFor:d};return e.createElement(e.Fragment,null,e.createElement("input",{ref:R,className:"ffe-hidden-checkbox",id:d,type:"checkbox",checked:j,...P}),typeof a=="function"?a(m):e.createElement("label",{...m},e.createElement("span",{className:i("ffe-checkbox__content",{"ffe-screenreader-only":s})},a)))});n.__docgenInfo={description:"",methods:[],displayName:"Checkbox",props:{inline:{defaultValue:{value:"true",computed:!1},required:!1}}};const D={title:"components/form/Checkbox",component:n},r={args:{noMargins:!1,hiddenLabel:!1,inline:!0,onColoredBg:!1},render:a=>e.createElement("fieldset",{className:"ffe-input-group"},e.createElement("legend",{className:"ffe-form-label ffe-form-label--block"},"Hvilke aviser leser du?"),e.createElement(n,{...a,name:"newspapers",value:"vg"},"VG"),e.createElement(n,{...a,name:"newspapers",value:"dagbladet"},"Dagbladet"))},l={...r,args:{...r.args,inline:!1},render:a=>e.createElement("fieldset",{className:"ffe-input-group"},e.createElement("legend",{className:"ffe-form-label ffe-form-label--block"},"Hvilke aviser leser du?"),e.createElement(n,{...a,name:"newspapers",value:"vg"},"VG"),e.createElement(n,{...a,name:"newspapers",value:"dagbladet"},"Dagbladet"))},t={...r,args:{defaultChecked:!0,hiddenLabel:!0,inline:!1},render:a=>e.createElement(n,{...a},"Jeg har en ingen label")},o={...r,args:{"aria-invalid":!0,checked:!0},render:a=>e.createElement(n,{...a},"Ja, jeg vil gjerne motta reklame!")},c={...r,args:{checked:!0},render:a=>e.createElement(n,{...a},s=>e.createElement("label",{htmlFor:s.htmlFor,className:s.className},"Her benyttes render props"))};var f,p,g;r.parameters={...r.parameters,docs:{...(f=r.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    noMargins: false,
    hiddenLabel: false,
    inline: true,
    onColoredBg: false
  },
  render: args => <fieldset className="ffe-input-group">
            <legend className="ffe-form-label ffe-form-label--block">
                Hvilke aviser leser du?
            </legend>
            <Checkbox {...args} name="newspapers" value="vg">
                VG
            </Checkbox>
            <Checkbox {...args} name="newspapers" value="dagbladet">
                Dagbladet
            </Checkbox>
        </fieldset>
}`,...(g=(p=r.parameters)==null?void 0:p.docs)==null?void 0:g.source}}};var b,u,h;l.parameters={...l.parameters,docs:{...(b=l.parameters)==null?void 0:b.docs,source:{originalSource:`{
  ...Standard,
  args: {
    ...Standard.args,
    inline: false
  },
  render: args => <fieldset className="ffe-input-group">
            <legend className="ffe-form-label ffe-form-label--block">
                Hvilke aviser leser du?
            </legend>
            <Checkbox {...args} name="newspapers" value="vg">
                VG
            </Checkbox>
            <Checkbox {...args} name="newspapers" value="dagbladet">
                Dagbladet
            </Checkbox>
        </fieldset>
}`,...(h=(u=l.parameters)==null?void 0:u.docs)==null?void 0:h.source}}};var k,x,v;t.parameters={...t.parameters,docs:{...(k=t.parameters)==null?void 0:k.docs,source:{originalSource:`{
  ...Standard,
  args: {
    defaultChecked: true,
    hiddenLabel: true,
    inline: false
  },
  render: args => <Checkbox {...args}>Jeg har en ingen label</Checkbox>
}`,...(v=(x=t.parameters)==null?void 0:x.docs)==null?void 0:v.source}}};var C,E,N;o.parameters={...o.parameters,docs:{...(C=o.parameters)==null?void 0:C.docs,source:{originalSource:`{
  ...Standard,
  args: {
    'aria-invalid': true,
    checked: true
  },
  render: args => <Checkbox {...args}>Ja, jeg vil gjerne motta reklame!</Checkbox>
}`,...(N=(E=o.parameters)==null?void 0:E.docs)==null?void 0:N.source}}};var S,_,w;c.parameters={...c.parameters,docs:{...(S=c.parameters)==null?void 0:S.docs,source:{originalSource:`{
  ...Standard,
  args: {
    checked: true
  },
  render: args => <Checkbox {...args}>
            {labelProps => <label htmlFor={labelProps.htmlFor} className={labelProps.className}>
                    Her benyttes render props
                </label>}
        </Checkbox>
}`,...(w=(_=c.parameters)==null?void 0:_.docs)==null?void 0:w.source}}};const G=["Standard","InlineFalse","HiddenLabel","AriaInvalid","RenderProps"],M=Object.freeze(Object.defineProperty({__proto__:null,AriaInvalid:o,HiddenLabel:t,InlineFalse:l,RenderProps:c,Standard:r,__namedExportsOrder:G,default:D},Symbol.toStringTag,{value:"Module"}));export{o as A,M as C,t as H,l as I,c as R,r as S};
