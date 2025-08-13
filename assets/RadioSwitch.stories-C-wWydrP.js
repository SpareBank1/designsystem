import{R as a,r as o}from"./index-DQDNmYQF.js";import{R as c}from"./RadioSwitch-BA-WvidG.js";import{R as p}from"./RadioButtonInputGroup-BnP6J3oD.js";const I={title:"Komponenter/Form/RadioSwitch",component:c},w=r=>{const[e,s]=o.useState(r.selectedValue),i=o.useId();return a.createElement(p,{label:"Velg et alternativ",name:`radio-switch-demo${i}`,onChange:t=>s(t.target.value),selectedValue:e},t=>a.createElement(c,{...r,...t}))},E=r=>{const[e,s]=o.useState(r.selectedValue),i=o.useId();return a.createElement(p,{label:"Velg et alternativ",name:`radio-switch-invalid-demo${i}`,onChange:t=>s(t.target.value),selectedValue:e},t=>a.createElement(c,{...r,...t,"aria-invalid":"true"}))},n={args:{leftLabel:"Ja",leftValue:"true",rightLabel:"Nei",rightValue:"false",selectedValue:"true"},render:function(e){return a.createElement(w,{...e})}},l={args:{leftLabel:"Ja",leftValue:"true",rightLabel:"Nei",rightValue:"false"},render:function(e){return a.createElement(E,{...e})}},d={args:{...n.args},render:function(e){const[s,i]=o.useState(e.selectedValue),t=o.useId();return a.createElement(p,{label:"Velg faktureringstype",name:`radio-button-description-demo-${t}`,onChange:u=>i(u.target.value),selectedValue:s,description:"Velg faktureringstype for abonnementet ditt. Dette påvirker hvor ofte du vil motta faktura."},u=>a.createElement(c,{...e,...u}))}};var m,g,f;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    leftLabel: 'Ja',
    leftValue: 'true',
    rightLabel: 'Nei',
    rightValue: 'false',
    selectedValue: 'true'
  },
  render: function Render(args) {
    return <RadioSwitchWithGroup {...args} />;
  }
}`,...(f=(g=n.parameters)==null?void 0:g.docs)==null?void 0:f.source}}};var h,S,V;l.parameters={...l.parameters,docs:{...(h=l.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    leftLabel: 'Ja',
    leftValue: 'true',
    rightLabel: 'Nei',
    rightValue: 'false'
  },
  render: function Render(args) {
    return <RadioSwitchAriaInvalid {...args} />;
  }
}`,...(V=(S=l.parameters)==null?void 0:S.docs)==null?void 0:V.source}}};var R,b,v;d.parameters={...d.parameters,docs:{...(R=d.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    ...Standard.args
  },
  render: function Render(args) {
    const [selected, setSelected] = useState(args.selectedValue);
    const id = useId();
    return <RadioButtonInputGroup label="Velg faktureringstype" name={\`radio-button-description-demo-\${id}\`} onChange={e => setSelected(e.target.value)} selectedValue={selected} description="Velg faktureringstype for abonnementet ditt. Dette påvirker hvor ofte du vil motta faktura.">

                {inputProps => <RadioSwitch {...args} {...inputProps} />}
            </RadioButtonInputGroup>;
  }
}`,...(v=(b=d.parameters)==null?void 0:b.docs)==null?void 0:v.source}}};const k=["Standard","AriaInvalid","WithDescription"],A=Object.freeze(Object.defineProperty({__proto__:null,AriaInvalid:l,Standard:n,WithDescription:d,__namedExportsOrder:k,default:I},Symbol.toStringTag,{value:"Module"}));export{l as A,A as R,n as S,d as W};
