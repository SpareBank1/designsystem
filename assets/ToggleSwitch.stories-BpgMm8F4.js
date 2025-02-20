import{r as x,R as e}from"./index-eCxJ45ll.js";import{c as N}from"./index-DezCrw0f.js";import{i as R}from"./i18n-kNgCcl76.js";const i=({children:d,className:a,description:n,hideOnOff:t,onText:r,offText:l,id:C,value:O="on",locale:T="nb",checked:E,...v})=>{const y=x.useId(),g=C??y,u=R[T];return e.createElement("div",{className:N("ffe-toggle-switch",{"ffe-toggle-switch--hide-on-off":t},a)},e.createElement("input",{className:"ffe-toggle-switch__input",type:"checkbox",role:"switch",id:g,value:O,checked:!!E,...v}),e.createElement("label",{className:"ffe-toggle-switch__label",htmlFor:g},e.createElement("span",{className:"ffe-toggle-switch__label-text"},d,n&&e.createElement("span",{className:"ffe-toggle-switch__label-description"},n)),!t&&e.createElement("span",{className:"ffe-toggle-switch__label-off","aria-hidden":"true"},l||u.OFF),e.createElement("span",{className:"ffe-toggle-switch__switch","aria-hidden":"true"}),!t&&e.createElement("span",{className:"ffe-toggle-switch__label-on",id:"test","aria-hidden":"true"},r||u.ON)))};i.__docgenInfo={description:"",methods:[],displayName:"ToggleSwitch",props:{locale:{required:!1,tsType:{name:"union",raw:"'nb' | 'nn' | 'en'",elements:[{name:"literal",value:"'nb'"},{name:"literal",value:"'nn'"},{name:"literal",value:"'en'"}]},description:"A second line of text in the label",defaultValue:{value:"'nb'",computed:!1}},description:{required:!1,tsType:{name:"string"},description:"On/Off text language"},onText:{required:!1,tsType:{name:"string"},description:"Custom text to specify the on-option"},offText:{required:!1,tsType:{name:"string"},description:"Custom text to specify the off-option"},hideOnOff:{required:!1,tsType:{name:"boolean"},description:"Hide On & Off labels next to switch"},value:{required:!1,tsType:{name:"string"},description:"Override the value attribute of the input with a custom one",defaultValue:{value:"'on'",computed:!1}}}};const q={title:"Komponenter/Form/ToggleSwitch",component:i},s={args:{children:"Jeg vil gjerne ha reklame"},render:function(a){const[n,t]=e.useState(!0);return e.createElement(i,{...a,checked:n,onChange:r=>t(r.target.checked)})}},c={args:{...s.args,hideOnOff:!0},render:function(a){const[n,t]=e.useState(!0);return e.createElement(i,{...a,checked:n,onChange:r=>t(r.target.checked)})}},o={args:{...s.args,description:"Send meg spam"},render:function(a){const[n,t]=e.useState(!0);return e.createElement(i,{...a,checked:n,onChange:r=>t(r.target.checked)})}};var h,m,f;s.parameters={...s.parameters,docs:{...(h=s.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    children: 'Jeg vil gjerne ha reklame'
  },
  render: function Render(args) {
    const [checked, setChecked] = React.useState(true);
    return <ToggleSwitch {...args} checked={checked} onChange={e => setChecked(e.target.checked)} />;
  }
}`,...(f=(m=s.parameters)==null?void 0:m.docs)==null?void 0:f.source}}};var p,k,S;c.parameters={...c.parameters,docs:{...(p=c.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    ...Standard.args,
    hideOnOff: true
  },
  render: function Render(args) {
    const [checked, setChecked] = React.useState(true);
    return <ToggleSwitch {...args} checked={checked} onChange={e => setChecked(e.target.checked)} />;
  }
}`,...(S=(k=c.parameters)==null?void 0:k.docs)==null?void 0:S.source}}};var _,w,b;o.parameters={...o.parameters,docs:{...(_=o.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    ...Standard.args,
    description: 'Send meg spam'
  },
  render: function Render(args) {
    const [checked, setChecked] = React.useState(true);
    return <ToggleSwitch {...args} checked={checked} onChange={e => setChecked(e.target.checked)} />;
  }
}`,...(b=(w=o.parameters)==null?void 0:w.docs)==null?void 0:b.source}}};const j=["Standard","HideOnOff","Description"],I=Object.freeze(Object.defineProperty({__proto__:null,Description:o,HideOnOff:c,Standard:s,__namedExportsOrder:j,default:q},Symbol.toStringTag,{value:"Module"}));export{o as D,c as H,s as S,I as T};
