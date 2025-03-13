import{r as u,R as e}from"./index-eCxJ45ll.js";import{R as t}from"./RadioBlock-DO_NDSRs.js";import{R as c}from"./RadioButtonInputGroup-CRRd7Yt6.js";const m={title:"Komponenter/Form/RadioBlock",component:t},a={args:{showChildren:!0},render:function(n){const[i,d]=u.useState("you");return e.createElement(c,{label:"Hvem eier bilen du skal forsikre?",name:"owner",onChange:r=>d(r.target.value),selectedValue:i},r=>e.createElement(e.Fragment,null,e.createElement(t,{...n,...r,label:"Ektefelle, samboer eller registrert partner",value:"partner"},"Da må ektefelle, samboer eller registrert partner skrive inn detaljene sine under."),e.createElement(t,{...n,...r,label:"Du",value:"you"},"Da må du skrive inn detaljene dine under."),e.createElement(t,{...n,...r,label:"Leasingselskap",value:"leasing-company"},"Da må leasingselskapet gi deg noen detaljer som du må skrive inn under.")))}};var l,o,s;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
}`,...(s=(o=a.parameters)==null?void 0:o.docs)==null?void 0:s.source}}};const p=["Standard"],v=Object.freeze(Object.defineProperty({__proto__:null,Standard:a,__namedExportsOrder:p,default:m},Symbol.toStringTag,{value:"Module"}));export{v as R,a as S};
