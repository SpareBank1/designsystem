import{R as e,r as J}from"./index-DQDNmYQF.js";import{c as u}from"./index-D2FocPV0.js";import{I as M}from"./InputGroup-DRKxpqN_.js";const r=e.forwardRef(({children:a,hiddenLabel:s,inline:D=!0,noMargins:G,id:V,checked:j,onChange:P,disabled:i,...L},T)=>{const q=J.useId(),m=V??q,p={className:u({"ffe-checkbox":!0,"ffe-checkbox--inline":D,"ffe-checkbox--no-margin":G,"ffe-checkbox--hidden-label":s}),htmlFor:m};return e.createElement(e.Fragment,null,e.createElement("input",{ref:T,className:"ffe-hidden-checkbox",id:m,type:"checkbox",checked:j,disabled:i,onChange:i?void 0:P,...L}),typeof a=="function"?a(p):e.createElement("label",{...p},e.createElement("span",{className:u("ffe-checkbox__content",{"ffe-screenreader-only":s})},a)))});r.__docgenInfo={description:"",methods:[],displayName:"Checkbox",props:{noMargins:{required:!1,tsType:{name:"boolean"},description:"Removes vertical margins from the checkbox"},hiddenLabel:{required:!1,tsType:{name:"boolean"},description:"If you plan to render the checkbox without a visible label"},inline:{required:!1,tsType:{name:"boolean"},description:"Display inline",defaultValue:{value:"true",computed:!1}},children:{required:!0,tsType:{name:"union",raw:`| React.ReactNode
| ((labelProps: {
      className: string;
      htmlFor: string;
  }) => React.ReactNode)`,elements:[{name:"ReactReactNode",raw:"React.ReactNode"},{name:"unknown"}]},description:""},onColoredBg:{required:!1,tsType:{name:"never"},description:`@deprecated as part of update to Semantic Colors

Use the \`ffe-accent-color\` class on the component or on the container of the component instead
[Read more in the upgrade guide](https://sparebank1.github.io/designsystem/?path=/docs/introduksjon-changelog--docs#2025---februar---semantiske-farger)`}},composes:["Omit"]};const O={title:"Komponenter/Form/Checkbox",component:r},n={args:{noMargins:!1,hiddenLabel:!1,inline:!0},render:a=>e.createElement("fieldset",{className:"ffe-input-group"},e.createElement("legend",{className:"ffe-form-label ffe-form-label--block"},"Hvilke aviser leser du?"),e.createElement(r,{...a,name:"newspapers",value:"vg"},"VG"),e.createElement(r,{...a,name:"newspapers",value:"dagbladet"},"Dagbladet"))},t={...n,args:{...n.args,inline:!1},render:a=>e.createElement("fieldset",{className:"ffe-input-group"},e.createElement("legend",{className:"ffe-form-label ffe-form-label--block"},"Hvilke aviser leser du?"),e.createElement(r,{...a,name:"newspapers",value:"vg"},"VG"),e.createElement(r,{...a,name:"newspapers",value:"dagbladet"},"Dagbladet"))},l={...n,args:{defaultChecked:!0,hiddenLabel:!0,inline:!1},render:a=>e.createElement(r,{...a},"Jeg har en ingen label")},o={...n,args:{"aria-invalid":!0},render:a=>e.createElement(r,{...a},"Ja, jeg vil gjerne motta reklame!")},c={...n,args:{checked:!0},render:a=>e.createElement(r,{...a},s=>e.createElement("label",{htmlFor:s.htmlFor,className:s.className},"Her benyttes render props"))},d={args:{...n.args,inline:!1},render:a=>e.createElement(M,{label:"Hva pleier du å lese?",description:"Velg en eller flere aviser"},()=>e.createElement(e.Fragment,null,e.createElement(r,{...a,name:"newspapers",value:"vg"},"VG"),e.createElement(r,{...a,name:"newspapers",value:"dagbladet"},"Dagbladet"),e.createElement(r,{...a,name:"newspapers",value:"nrk"},"NRK")))};var g,f,b;n.parameters={...n.parameters,docs:{...(g=n.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    noMargins: false,
    hiddenLabel: false,
    inline: true
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
}`,...(b=(f=n.parameters)==null?void 0:f.docs)==null?void 0:b.source}}};var h,k,v;t.parameters={...t.parameters,docs:{...(h=t.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
}`,...(v=(k=t.parameters)==null?void 0:k.docs)==null?void 0:v.source}}};var x,C,N;l.parameters={...l.parameters,docs:{...(x=l.parameters)==null?void 0:x.docs,source:{originalSource:`{
  ...Standard,
  args: {
    defaultChecked: true,
    hiddenLabel: true,
    inline: false
  },
  render: args => <Checkbox {...args}>Jeg har en ingen label</Checkbox>
}`,...(N=(C=l.parameters)==null?void 0:C.docs)==null?void 0:N.source}}};var E,w,S;o.parameters={...o.parameters,docs:{...(E=o.parameters)==null?void 0:E.docs,source:{originalSource:`{
  ...Standard,
  args: {
    'aria-invalid': true
  },
  render: args => <Checkbox {...args}>Ja, jeg vil gjerne motta reklame!</Checkbox>
}`,...(S=(w=o.parameters)==null?void 0:w.docs)==null?void 0:S.source}}};var R,y,I;c.parameters={...c.parameters,docs:{...(R=c.parameters)==null?void 0:R.docs,source:{originalSource:`{
  ...Standard,
  args: {
    checked: true
  },
  render: args => <Checkbox {...args}>
            {labelProps => <label htmlFor={labelProps.htmlFor} className={labelProps.className}>
                    Her benyttes render props
                </label>}
        </Checkbox>
}`,...(I=(y=c.parameters)==null?void 0:y.docs)==null?void 0:I.source}}};var F,H,_;d.parameters={...d.parameters,docs:{...(F=d.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    ...Standard.args,
    inline: false
  },
  render: args => <InputGroup label="Hva pleier du å lese?" description="Velg en eller flere aviser">
            {() => <>
                    <Checkbox {...args} name="newspapers" value="vg">
                        VG
                    </Checkbox>
                    <Checkbox {...args} name="newspapers" value="dagbladet">
                        Dagbladet
                    </Checkbox>
                    <Checkbox {...args} name="newspapers" value="nrk">
                        NRK
                    </Checkbox>
                </>}
        </InputGroup>
}`,...(_=(H=d.parameters)==null?void 0:H.docs)==null?void 0:_.source}}};const A=["Standard","InlineFalse","HiddenLabel","AriaInvalid","RenderProps","Description"],U=Object.freeze(Object.defineProperty({__proto__:null,AriaInvalid:o,Description:d,HiddenLabel:l,InlineFalse:t,RenderProps:c,Standard:n,__namedExportsOrder:A,default:O},Symbol.toStringTag,{value:"Module"}));export{o as A,U as C,l as H,t as I,c as R,n as S};
