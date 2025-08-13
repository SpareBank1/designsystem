import{R as e,r as l}from"./index-DQDNmYQF.js";import{R as a}from"./RadioButton-CSvX_Fhn.js";import{R as m}from"./RadioButtonInputGroup-BnP6J3oD.js";const K={title:"Komponenter/Form/RadioButton",component:a},C=n=>{const[r,o]=l.useState(n.selectedValue),s=l.useId();return e.createElement(m,{label:"Velg kundetype",name:`radio-button-with-group-demo-${s}`,onChange:t=>o(t.target.value),selectedValue:r},t=>e.createElement(e.Fragment,null,e.createElement(a,{value:"bankkunde",...t},"Bankkunde"),e.createElement(a,{value:"bedriftskunde",...t},"Bedriftskunde")))},F=n=>{const[r,o]=l.useState(n.selectedValue),s=l.useId();return e.createElement(m,{label:"Velg betalingsfrekvens",name:`radio-button-inline-demo-${s}`,onChange:t=>o(t.target.value),selectedValue:r,inline:!0},t=>e.createElement(e.Fragment,null,e.createElement(a,{value:"monthly",...t},"Månedlig"),e.createElement(a,{value:"quarterly",...t},"Kvartalsvis"),e.createElement(a,{value:"yearly",...t},"Årlig")))},_=n=>{const[r,o]=l.useState(n.selectedValue),s=l.useId();return e.createElement(m,{label:"Velg faktureringstype",name:`radio-button-group-demo-${s}`,onChange:t=>o(t.target.value),selectedValue:r},t=>e.createElement(e.Fragment,null,e.createElement(a,{value:"monthly",tooltip:"Månedlig fakturering er enklest å planlegge for. Passer for deg som liker å planlegge litt etter hvert.",...t},"Månedlig fakturering"),e.createElement(a,{value:"quarterly",tooltip:"Kvartalsvis fakturering gir deg mer oversikt. Passer for deg som liker å planlegge godt.",...t},"Kvartalsvis fakturering")))},$=n=>{const[r,o]=l.useState(n.selectedValue),s=l.useId();return e.createElement(m,{label:"Velg faktureringstype",name:`radio-button-invalid-demo-${s}`,onChange:t=>o(t.target.value),selectedValue:r,fieldMessage:"Velg årlig fakturering"},t=>e.createElement(e.Fragment,null,e.createElement(a,{value:"monthly","aria-invalid":"true",...t},"Månedlig fakturering"),e.createElement(a,{value:"quarterly","aria-invalid":"true",...t},"Kvartalsvis fakturering")))},u={args:{selectedValue:"bankkunde"},render:function(r){return e.createElement(C,{...r})}},d={args:{selectedValue:"monthly"},render:function(r){return e.createElement(F,{...r})}},i={args:{selectedValue:"monthly"},render:function(r){return e.createElement($,{...r})}},c={args:{selectedValue:"monthly"},render:function(r){return e.createElement(_,{...r})}},g={args:{selectedValue:"bankkunde"},render:function(r){const[o,s]=l.useState(r.selectedValue),t=l.useId();return e.createElement(m,{label:"Velg faktureringstype",name:`radio-button-description-demo-${t}`,onChange:p=>s(p.target.value),selectedValue:o,description:"Velg faktureringstype for abonnementet ditt. Dette påvirker hvor ofte du vil motta faktura."},p=>e.createElement(e.Fragment,null,e.createElement(a,{value:"monthly",...p},"Månedlig fakturering"),e.createElement(a,{value:"quarterly",...p},"Kvartalsvis fakturering")))}};var v,f,k;u.parameters={...u.parameters,docs:{...(v=u.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    selectedValue: 'bankkunde'
  },
  render: function Render(args) {
    return <RadioButtonWithGroup {...args} />;
  }
}`,...(k=(f=u.parameters)==null?void 0:f.docs)==null?void 0:k.source}}};var R,h,V;d.parameters={...d.parameters,docs:{...(R=d.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    selectedValue: 'monthly'
  },
  render: function Render(args) {
    return <RadioButtonInlineWithGroup {...args} />;
  }
}`,...(V=(h=d.parameters)==null?void 0:h.docs)==null?void 0:V.source}}};var y,E,b;i.parameters={...i.parameters,docs:{...(y=i.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    selectedValue: 'monthly'
  },
  render: function Render(args) {
    return <RadioButtonAriaInvalid {...args} />;
  }
}`,...(b=(E=i.parameters)==null?void 0:E.docs)==null?void 0:b.source}}};var S,B,I;c.parameters={...c.parameters,docs:{...(S=c.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    selectedValue: 'monthly'
  },
  render: function Render(args) {
    return <RadioButtonWithGroupTooltip {...args} />;
  }
}`,...(I=(B=c.parameters)==null?void 0:B.docs)==null?void 0:I.source}}};var W,G,M;g.parameters={...g.parameters,docs:{...(W=g.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    selectedValue: 'bankkunde'
  },
  render: function Render(args) {
    const [selected, setSelected] = useState(args.selectedValue);
    const id = useId();
    return <RadioButtonInputGroup label="Velg faktureringstype" name={\`radio-button-description-demo-\${id}\`} onChange={e => setSelected(e.target.value)} selectedValue={selected} description="Velg faktureringstype for abonnementet ditt. Dette påvirker hvor ofte du vil motta faktura.">
            {inputProps => <>
                    <RadioButton value="monthly" {...inputProps}>
                        Månedlig fakturering
                    </RadioButton>
                    <RadioButton value="quarterly" {...inputProps}>
                        Kvartalsvis fakturering
                    </RadioButton>
                </>}
        </RadioButtonInputGroup>;
  }
}`,...(M=(G=g.parameters)==null?void 0:G.docs)==null?void 0:M.source}}};const q=["Standard","Inline","AriaInvalid","WithTooltip","WithDescription"],x=Object.freeze(Object.defineProperty({__proto__:null,AriaInvalid:i,Inline:d,Standard:u,WithDescription:g,WithTooltip:c,__namedExportsOrder:q,default:K},Symbol.toStringTag,{value:"Module"}));export{i as A,d as I,x as R,u as S,c as W,g as a};
