import{R as e,r as T}from"./index-DQDNmYQF.js";import{c as p}from"./index-D2FocPV0.js";import{I as q}from"./InputGroup-BBDrD5qR.js";const r=e.forwardRef(({children:a,hiddenLabel:s,inline:_=!0,noMargins:D,id:G,checked:V,...j},P)=>{const L=T.useId(),i=G??L,m={className:p({"ffe-checkbox":!0,"ffe-checkbox--inline":_,"ffe-checkbox--no-margin":D,"ffe-checkbox--hidden-label":s}),htmlFor:i};return e.createElement(e.Fragment,null,e.createElement("input",{ref:P,className:"ffe-hidden-checkbox",id:i,type:"checkbox",checked:V,...j}),typeof a=="function"?a(m):e.createElement("label",{...m},e.createElement("span",{className:p("ffe-checkbox__content",{"ffe-screenreader-only":s})},a)))});r.__docgenInfo={description:"",methods:[],displayName:"Checkbox",props:{noMargins:{required:!1,tsType:{name:"boolean"},description:"Removes vertical margins from the checkbox"},hiddenLabel:{required:!1,tsType:{name:"boolean"},description:"If you plan to render the checkbox without a visible label"},inline:{required:!1,tsType:{name:"boolean"},description:"Display inline",defaultValue:{value:"true",computed:!1}},children:{required:!0,tsType:{name:"union",raw:`| React.ReactNode
| ((labelProps: {
      className: string;
      htmlFor: string;
  }) => React.ReactNode)`,elements:[{name:"ReactReactNode",raw:"React.ReactNode"},{name:"unknown"}]},description:""},onColoredBg:{required:!1,tsType:{name:"never"},description:`@deprecated as part of update to Semantic Colors

Use the \`ffe-accent-color\` class on the component or on the container of the component instead
[Read more in the upgrade guide](https://sparebank1.github.io/designsystem/?path=/docs/introduksjon-changelog--docs#2025---februar---semantiske-farger)`}},composes:["Omit"]};const J={title:"Komponenter/Form/Checkbox",component:r},n={args:{noMargins:!1,hiddenLabel:!1,inline:!0},render:a=>e.createElement("fieldset",{className:"ffe-input-group"},e.createElement("legend",{className:"ffe-form-label ffe-form-label--block"},"Hvilke aviser leser du?"),e.createElement(r,{...a,name:"newspapers",value:"vg"},"VG"),e.createElement(r,{...a,name:"newspapers",value:"dagbladet"},"Dagbladet"))},t={...n,args:{...n.args,inline:!1},render:a=>e.createElement("fieldset",{className:"ffe-input-group"},e.createElement("legend",{className:"ffe-form-label ffe-form-label--block"},"Hvilke aviser leser du?"),e.createElement(r,{...a,name:"newspapers",value:"vg"},"VG"),e.createElement(r,{...a,name:"newspapers",value:"dagbladet"},"Dagbladet"))},l={...n,args:{defaultChecked:!0,hiddenLabel:!0,inline:!1},render:a=>e.createElement(r,{...a},"Jeg har en ingen label")},o={...n,args:{"aria-invalid":!0},render:a=>e.createElement(r,{...a},"Ja, jeg vil gjerne motta reklame!")},c={...n,args:{checked:!0},render:a=>e.createElement(r,{...a},s=>e.createElement("label",{htmlFor:s.htmlFor,className:s.className},"Her benyttes render props"))},d={args:{...n.args,inline:!1},render:a=>e.createElement(q,{label:"Hva pleier du å lese?",description:"Velg en eller flere aviser"},()=>e.createElement(e.Fragment,null,e.createElement(r,{...a,name:"newspapers",value:"vg"},"VG"),e.createElement(r,{...a,name:"newspapers",value:"dagbladet"},"Dagbladet"),e.createElement(r,{...a,name:"newspapers",value:"nrk"},"NRK")))};var u,g,f;n.parameters={...n.parameters,docs:{...(u=n.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(f=(g=n.parameters)==null?void 0:g.docs)==null?void 0:f.source}}};var b,h,k;t.parameters={...t.parameters,docs:{...(b=t.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
}`,...(k=(h=t.parameters)==null?void 0:h.docs)==null?void 0:k.source}}};var v,x,C;l.parameters={...l.parameters,docs:{...(v=l.parameters)==null?void 0:v.docs,source:{originalSource:`{
  ...Standard,
  args: {
    defaultChecked: true,
    hiddenLabel: true,
    inline: false
  },
  render: args => <Checkbox {...args}>Jeg har en ingen label</Checkbox>
}`,...(C=(x=l.parameters)==null?void 0:x.docs)==null?void 0:C.source}}};var N,E,w;o.parameters={...o.parameters,docs:{...(N=o.parameters)==null?void 0:N.docs,source:{originalSource:`{
  ...Standard,
  args: {
    'aria-invalid': true
  },
  render: args => <Checkbox {...args}>Ja, jeg vil gjerne motta reklame!</Checkbox>
}`,...(w=(E=o.parameters)==null?void 0:E.docs)==null?void 0:w.source}}};var S,R,y;c.parameters={...c.parameters,docs:{...(S=c.parameters)==null?void 0:S.docs,source:{originalSource:`{
  ...Standard,
  args: {
    checked: true
  },
  render: args => <Checkbox {...args}>
            {labelProps => <label htmlFor={labelProps.htmlFor} className={labelProps.className}>
                    Her benyttes render props
                </label>}
        </Checkbox>
}`,...(y=(R=c.parameters)==null?void 0:R.docs)==null?void 0:y.source}}};var I,F,H;d.parameters={...d.parameters,docs:{...(I=d.parameters)==null?void 0:I.docs,source:{originalSource:`{
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
}`,...(H=(F=d.parameters)==null?void 0:F.docs)==null?void 0:H.source}}};const M=["Standard","InlineFalse","HiddenLabel","AriaInvalid","RenderProps","Description"],z=Object.freeze(Object.defineProperty({__proto__:null,AriaInvalid:o,Description:d,HiddenLabel:l,InlineFalse:t,RenderProps:c,Standard:n,__namedExportsOrder:M,default:J},Symbol.toStringTag,{value:"Module"}));export{o as A,z as C,l as H,t as I,c as R,n as S};
