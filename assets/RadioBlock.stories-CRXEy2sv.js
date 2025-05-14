import{r as g,R as e}from"./index-DQDNmYQF.js";import{R as l}from"./RadioBlock-BGO6GNky.js";import{R as k}from"./RadioButtonInputGroup-BA93qp9c.js";const b={title:"Komponenter/Form/RadioBlock",component:l},n={args:{showChildren:!0},render:function(a){const[s,o]=g.useState("you");return e.createElement(k,{label:"Hvem eier bilen du skal forsikre?",name:"owner",onChange:r=>o(r.target.value),selectedValue:s},r=>e.createElement(e.Fragment,null,e.createElement(l,{...a,...r,label:"Ektefelle, samboer eller registrert partner",value:"partner"},"Da må ektefelle, samboer eller registrert partner skrive inn detaljene sine under."),e.createElement(l,{...a,...r,label:"Du",value:"you"},"Da må du skrive inn detaljene dine under."),e.createElement(l,{...a,...r,label:"Leasingselskap",value:"leasing-company"},"Da må leasingselskapet gi deg noen detaljer som du må skrive inn under.")))}},t={args:{showChildren:!0},render:function(a){const[s,o]=g.useState("youu");return e.createElement(k,{label:"Hvem eier bilen du skal forsikre?",name:"ownerr",onChange:r=>o(r.target.value),fieldMessage:"Velg en eier",selectedValue:s},r=>e.createElement(e.Fragment,null,e.createElement(l,{...a,...r,label:"Ektefelle, samboer eller registrert partner",value:"partnerr","aria-invalid":"true"},"Da må ektefelle, samboer eller registrert partner skrive inn detaljene sine under."),e.createElement(l,{...a,...r,label:"Du",value:"youu"},"Da må du skrive inn detaljene dine under."),e.createElement(l,{...a,...r,label:"Leasingselskap",value:"leasing-companyy"},"Da må leasingselskapet gi deg noen detaljer som du må skrive inn under.")))}};var i,d,u;n.parameters={...n.parameters,docs:{...(i=n.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    showChildren: true
  },
  render: function Render(args) {
    const [selected, setSelected] = useState('you');
    return <RadioButtonInputGroup label="Hvem eier bilen du skal forsikre?" name="owner" onChange={e => setSelected(e.target.value)} selectedValue={selected}>
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
}`,...(u=(d=n.parameters)==null?void 0:d.docs)==null?void 0:u.source}}};var c,m,p;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    showChildren: true
  },
  render: function Render(args) {
    const [selected, setSelected] = useState('youu');
    return <RadioButtonInputGroup label="Hvem eier bilen du skal forsikre?" name="ownerr" onChange={e => setSelected(e.target.value)} fieldMessage="Velg en eier" selectedValue={selected}>
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
}`,...(p=(m=t.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};const R=["Standard","FieldMessage"],y=Object.freeze(Object.defineProperty({__proto__:null,FieldMessage:t,Standard:n,__namedExportsOrder:R,default:b},Symbol.toStringTag,{value:"Module"}));export{y as R,n as S};
