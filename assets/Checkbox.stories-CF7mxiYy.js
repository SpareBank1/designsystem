import{R as e,r as T}from"./index-DJO9vBfz.js";import{c as m}from"./index-i5X67GZP.js";const n=e.forwardRef(({children:a,hiddenLabel:s,inline:w=!0,noMargins:I,id:_,onColoredBg:F,checked:H,...P},j)=>{const L=T.useId(),d=_??L,i={className:m({"ffe-checkbox":!0,"ffe-checkbox--inline":w,"ffe-checkbox--no-margin":I,"ffe-checkbox--hidden-label":s,"ffe-checkbox--on-colored-bg":F}),htmlFor:d};return e.createElement(e.Fragment,null,e.createElement("input",{ref:j,className:"ffe-hidden-checkbox",id:d,type:"checkbox",checked:H,...P}),typeof a=="function"?a(i):e.createElement("label",{...i},e.createElement("span",{className:m("ffe-checkbox__content",{"ffe-screenreader-only":s})},a)))});n.__docgenInfo={description:"",methods:[],displayName:"Checkbox",props:{noMargins:{required:!1,tsType:{name:"boolean"},description:"Removes vertical margins from the checkbox"},hiddenLabel:{required:!1,tsType:{name:"boolean"},description:"If you plan to render the checkbox without a visible label"},inline:{required:!1,tsType:{name:"boolean"},description:"Display inline",defaultValue:{value:"true",computed:!1}},children:{required:!0,tsType:{name:"union",raw:`| React.ReactNode
| ((labelProps: {
      className: string;
      htmlFor: string;
  }) => React.ReactNode)`,elements:[{name:"ReactReactNode",raw:"React.ReactNode"},{name:"unknown"}]},description:""},onColoredBg:{required:!1,tsType:{name:"boolean"},description:"Adds alternative styling for better contrast on certain backgrounds"}},composes:["Omit"]};const q={title:"components/form/Checkbox",component:n},r={args:{noMargins:!1,hiddenLabel:!1,inline:!0,onColoredBg:!1},render:a=>e.createElement("fieldset",{className:"ffe-input-group"},e.createElement("legend",{className:"ffe-form-label ffe-form-label--block"},"Hvilke aviser leser du?"),e.createElement(n,{...a,name:"newspapers",value:"vg"},"VG"),e.createElement(n,{...a,name:"newspapers",value:"dagbladet"},"Dagbladet"))},l={...r,args:{...r.args,inline:!1},render:a=>e.createElement("fieldset",{className:"ffe-input-group"},e.createElement("legend",{className:"ffe-form-label ffe-form-label--block"},"Hvilke aviser leser du?"),e.createElement(n,{...a,name:"newspapers",value:"vg"},"VG"),e.createElement(n,{...a,name:"newspapers",value:"dagbladet"},"Dagbladet"))},t={...r,args:{defaultChecked:!0,hiddenLabel:!0,inline:!1},render:a=>e.createElement(n,{...a},"Jeg har en ingen label")},o={...r,args:{"aria-invalid":!0,checked:!0},render:a=>e.createElement(n,{...a},"Ja, jeg vil gjerne motta reklame!")},c={...r,args:{checked:!0},render:a=>e.createElement(n,{...a},s=>e.createElement("label",{htmlFor:s.htmlFor,className:s.className},"Her benyttes render props"))};var f,p,b;r.parameters={...r.parameters,docs:{...(f=r.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
}`,...(b=(p=r.parameters)==null?void 0:p.docs)==null?void 0:b.source}}};var u,g,h;l.parameters={...l.parameters,docs:{...(u=l.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(h=(g=l.parameters)==null?void 0:g.docs)==null?void 0:h.source}}};var k,v,x;t.parameters={...t.parameters,docs:{...(k=t.parameters)==null?void 0:k.docs,source:{originalSource:`{
  ...Standard,
  args: {
    defaultChecked: true,
    hiddenLabel: true,
    inline: false
  },
  render: args => <Checkbox {...args}>Jeg har en ingen label</Checkbox>
}`,...(x=(v=t.parameters)==null?void 0:v.docs)==null?void 0:x.source}}};var C,N,E;o.parameters={...o.parameters,docs:{...(C=o.parameters)==null?void 0:C.docs,source:{originalSource:`{
  ...Standard,
  args: {
    'aria-invalid': true,
    checked: true
  },
  render: args => <Checkbox {...args}>Ja, jeg vil gjerne motta reklame!</Checkbox>
}`,...(E=(N=o.parameters)==null?void 0:N.docs)==null?void 0:E.source}}};var y,S,R;c.parameters={...c.parameters,docs:{...(y=c.parameters)==null?void 0:y.docs,source:{originalSource:`{
  ...Standard,
  args: {
    checked: true
  },
  render: args => <Checkbox {...args}>
            {labelProps => <label htmlFor={labelProps.htmlFor} className={labelProps.className}>
                    Her benyttes render props
                </label>}
        </Checkbox>
}`,...(R=(S=c.parameters)==null?void 0:S.docs)==null?void 0:R.source}}};const D=["Standard","InlineFalse","HiddenLabel","AriaInvalid","RenderProps"],G=Object.freeze(Object.defineProperty({__proto__:null,AriaInvalid:o,HiddenLabel:t,InlineFalse:l,RenderProps:c,Standard:r,__namedExportsOrder:D,default:q},Symbol.toStringTag,{value:"Module"}));export{o as A,G as C,t as H,l as I,c as R,r as S};
