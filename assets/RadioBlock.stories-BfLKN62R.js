import{r as d,R as e}from"./index-DQDNmYQF.js";import{R as a}from"./RadioBlock-MtxcmPo-.js";import{R as c}from"./RadioButtonInputGroup-BnP6J3oD.js";const B={title:"Komponenter/Form/RadioBlock",component:a},o={args:{showChildren:!0},render:function(r){const[t,l]=d.useState("you"),s=Math.random().toString(36).substring(2,15);return e.createElement(c,{label:"Hvem eier bilen du skal forsikre?",name:`owner-${s}`,onChange:n=>l(n.target.value),selectedValue:t},n=>e.createElement(e.Fragment,null,e.createElement(a,{...r,...n,label:"Ektefelle, samboer eller registrert partner",value:"partner"},"Da må ektefelle, samboer eller registrert partner skrive inn detaljene sine under."),e.createElement(a,{...r,...n,label:"Du",value:"you"},"Da må du skrive inn detaljene dine under."),e.createElement(a,{...r,...n,label:"Leasingselskap",value:"leasing-company"},"Da må leasingselskapet gi deg noen detaljer som du må skrive inn under.")))}},i={args:{showChildren:!0},render:function(r){const[t,l]=d.useState("you"),s=Math.random().toString(36).substring(2,15);return e.createElement(c,{label:"Hvem eier bilen du skal forsikre?",name:`owner-${s}`,onChange:n=>l(n.target.value),selectedValue:t},n=>e.createElement(e.Fragment,null,e.createElement(a,{...r,...n,label:"Ektefelle, samboer eller registrert partner",value:"partner"}),e.createElement(a,{...r,...n,label:"Du",value:"you"}),e.createElement(a,{...r,...n,label:"Leasingselskap",value:"leasing-company"})))}},u={args:{showChildren:!0},render:function(r){const[t,l]=d.useState("youu"),s=Math.random().toString(36).substring(2,15);return e.createElement(c,{label:"Hvem eier bilen du skal forsikre?",name:`owner-${s}`,onChange:n=>l(n.target.value),fieldMessage:"Velg en eier",selectedValue:t},n=>e.createElement(e.Fragment,null,e.createElement(a,{...r,...n,label:"Ektefelle, samboer eller registrert partner",value:"partnerr","aria-invalid":"true"},"Da må ektefelle, samboer eller registrert partner skrive inn detaljene sine under."),e.createElement(a,{...r,...n,label:"Du",value:"youu"},"Da må du skrive inn detaljene dine under."),e.createElement(a,{...r,...n,label:"Leasingselskap",value:"leasing-companyy"},"Da må leasingselskapet gi deg noen detaljer som du må skrive inn under.")))}};var g,p,k;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    showChildren: true
  },
  render: function Render(args) {
    const [selected, setSelected] = useState('you');
    const id = Math.random().toString(36).substring(2, 15);
    return <RadioButtonInputGroup label="Hvem eier bilen du skal forsikre?" name={\`owner-\${id}\`} onChange={e => setSelected(e.target.value)} selectedValue={selected}>
                {inputProps => <>
                        <RadioBlock {...args} {...inputProps} label="Ektefelle, samboer eller registrert partner" value="partner">
                            Da må ektefelle, samboer eller registrert partner
                            skrive inn detaljene sine under.
                        </RadioBlock>
                        <RadioBlock {...args} {...inputProps} label="Du" value="you">
                            Da må du skrive inn detaljene dine under.
                        </RadioBlock>
                        <RadioBlock {...args} {...inputProps} label="Leasingselskap" value="leasing-company">
                            Da må leasingselskapet gi deg noen detaljer som du
                            må skrive inn under.
                        </RadioBlock>
                    </>}
            </RadioButtonInputGroup>;
  }
}`,...(k=(p=o.parameters)==null?void 0:p.docs)==null?void 0:k.source}}};var b,v,R;i.parameters={...i.parameters,docs:{...(b=i.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    showChildren: true
  },
  render: function Render(args) {
    const [selected, setSelected] = useState('you');
    const id = Math.random().toString(36).substring(2, 15);
    return <RadioButtonInputGroup label="Hvem eier bilen du skal forsikre?" name={\`owner-\${id}\`} onChange={e => setSelected(e.target.value)} selectedValue={selected}>
                {inputProps => <>
                        <RadioBlock {...args} {...inputProps} label="Ektefelle, samboer eller registrert partner" value="partner" />

                        <RadioBlock {...args} {...inputProps} label="Du" value="you" />
                        <RadioBlock {...args} {...inputProps} label="Leasingselskap" value="leasing-company" />
                    </>}
            </RadioButtonInputGroup>;
  }
}`,...(R=(v=i.parameters)==null?void 0:v.docs)==null?void 0:R.source}}};var f,S,h;u.parameters={...u.parameters,docs:{...(f=u.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    showChildren: true
  },
  render: function Render(args) {
    const [selected, setSelected] = useState('youu');
    const id = Math.random().toString(36).substring(2, 15);
    return <RadioButtonInputGroup label="Hvem eier bilen du skal forsikre?" name={\`owner-\${id}\`} onChange={e => setSelected(e.target.value)} fieldMessage="Velg en eier" selectedValue={selected}>
                {inputProps => <>
                        <RadioBlock {...args} {...inputProps} label="Ektefelle, samboer eller registrert partner" value="partnerr" aria-invalid="true">
                            Da må ektefelle, samboer eller registrert partner
                            skrive inn detaljene sine under.
                        </RadioBlock>
                        <RadioBlock {...args} {...inputProps} label="Du" value="youu">
                            Da må du skrive inn detaljene dine under.
                        </RadioBlock>
                        <RadioBlock {...args} {...inputProps} label="Leasingselskap" value="leasing-companyy">
                            Da må leasingselskapet gi deg noen detaljer som du
                            må skrive inn under.
                        </RadioBlock>
                    </>}
            </RadioButtonInputGroup>;
  }
}`,...(h=(S=u.parameters)==null?void 0:S.docs)==null?void 0:h.source}}};const E=["Standard","WithoutDescriptions","FieldMessage"],w=Object.freeze(Object.defineProperty({__proto__:null,FieldMessage:u,Standard:o,WithoutDescriptions:i,__namedExportsOrder:E,default:B},Symbol.toStringTag,{value:"Module"}));export{w as R,o as S};
