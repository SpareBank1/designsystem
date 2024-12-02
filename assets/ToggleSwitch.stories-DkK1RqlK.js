import{r as R,R as e}from"./index-eCxJ45ll.js";import{c as q}from"./index-DezCrw0f.js";import{i as j}from"./i18n-kNgCcl76.js";const s=({children:o,className:t,description:c,hideOnOff:i,onText:l,offText:d,id:T,value:E="on",locale:v="nb",checked:y,...x})=>{const N=R.useId(),m=T??N,g=j[v];return e.createElement("div",{className:q("ffe-toggle-switch",{"ffe-toggle-switch--hide-on-off":i},t)},e.createElement("input",{className:"ffe-toggle-switch__input",type:"checkbox",id:m,value:E,checked:!!y,...x}),e.createElement("label",{className:"ffe-toggle-switch__label",htmlFor:m},e.createElement("span",{className:"ffe-toggle-switch__label-text"},o,c&&e.createElement("span",{className:"ffe-toggle-switch__label-description"},c)),!i&&e.createElement("span",{className:"ffe-toggle-switch__label-off","aria-hidden":"true"},d||g.OFF),e.createElement("span",{className:"ffe-toggle-switch__switch","aria-hidden":"true"}),!i&&e.createElement("span",{className:"ffe-toggle-switch__label-on",id:"test","aria-hidden":"true"},l||g.ON)))};s.__docgenInfo={description:"",methods:[],displayName:"ToggleSwitch",props:{locale:{required:!1,tsType:{name:"union",raw:"'nb' | 'nn' | 'en'",elements:[{name:"literal",value:"'nb'"},{name:"literal",value:"'nn'"},{name:"literal",value:"'en'"}]},description:"A second line of text in the label",defaultValue:{value:"'nb'",computed:!1}},description:{required:!1,tsType:{name:"string"},description:"On/Off text language"},onText:{required:!1,tsType:{name:"string"},description:"Custom text to specify the on-option"},offText:{required:!1,tsType:{name:"string"},description:"Custom text to specify the off-option"},hideOnOff:{required:!1,tsType:{name:"boolean"},description:"Hide On & Off labels next to switch"},value:{required:!1,tsType:{name:"string"},description:"Override the value attribute of the input with a custom one",defaultValue:{value:"'on'",computed:!1}}}};const k={title:"Komponenter/Form/ToggleSwitch",component:s},r={args:{children:"Jeg vil gjerne ha reklame"},render:function(t){return e.createElement(s,{...t})}},n={args:{...r.args,hideOnOff:!0},render:function(t){return e.createElement(s,{...t})}},a={args:{...r.args,description:"Send meg spam"},render:function(t){return e.createElement(s,{...t})}};var f,p,u;r.parameters={...r.parameters,docs:{...(f=r.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    children: 'Jeg vil gjerne ha reklame'
  },
  render: function Render(args) {
    return <ToggleSwitch {...args} />;
  }
}`,...(u=(p=r.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};var h,_,w;n.parameters={...n.parameters,docs:{...(h=n.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    ...Standard.args,
    hideOnOff: true
  },
  render: function Render(args) {
    return <ToggleSwitch {...args} />;
  }
}`,...(w=(_=n.parameters)==null?void 0:_.docs)==null?void 0:w.source}}};var S,b,O;a.parameters={...a.parameters,docs:{...(S=a.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    ...Standard.args,
    description: 'Send meg spam'
  },
  render: function Render(args) {
    return <ToggleSwitch {...args} />;
  }
}`,...(O=(b=a.parameters)==null?void 0:b.docs)==null?void 0:O.source}}};const F=["Standard","HideOnOff","Description"],C=Object.freeze(Object.defineProperty({__proto__:null,Description:a,HideOnOff:n,Standard:r,__namedExportsOrder:F,default:k},Symbol.toStringTag,{value:"Module"}));export{a as D,n as H,r as S,C as T};
