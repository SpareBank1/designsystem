import{r as l,R as a}from"./index-DQDNmYQF.js";import{R as p}from"./RadioButtonInputGroup-BA93qp9c.js";import{R as u}from"./RadioButton-hZDP9tlC.js";import{R as G}from"./RadioSwitch-K5izdMm8.js";import{R as g}from"./RadioBlock-CoQVuGh0.js";const P={title:"Komponenter/Form/RadioButtonInputGroup",component:p},r={args:{inline:!1,name:"favorittlukt",label:"Hva er din favorittlukt?"},render:function(t){const[n,s]=l.useState("asphalt"),o=l.useId();return a.createElement(p,{...t,name:t.name+o,selectedValue:n,onChange:e=>s(e.target.value)},e=>a.createElement(a.Fragment,null,a.createElement(u,{...e,value:"grass"},"Gress"),a.createElement(u,{...e,value:"asphalt"},"Asfalt"),a.createElement(u,{...e,value:"pollen"},"Pollen")))}},d={args:{...r.args,fieldMessage:"Feil lukt",name:"feil-lukt"},render:function(t){const[n,s]=l.useState("pollen"),o=l.useId();return a.createElement(p,{...t,name:t.name+o,selectedValue:n,onChange:e=>s(e.target.value)},e=>a.createElement(a.Fragment,null,a.createElement(u,{...e,"aria-invalid":"true",value:"grass"},"Gress"),a.createElement(u,{...e,"aria-invalid":"true",value:"asphalt"},"Asfalt"),a.createElement(u,{...e,"aria-invalid":"true",value:"pollen"},"Pollen")))}},i={args:{...r.args,name:"radio-switch"},render:function(t){const[n,s]=l.useState("yes"),o=l.useId();return a.createElement(p,{...t,name:t.name+o,selectedValue:n,onChange:e=>s(e.target.value)},e=>a.createElement(G,{leftLabel:"Ja",leftValue:"yes",rightLabel:"Nei",rightValue:"no",...e}))}},c={args:{...r.args,name:"radio-block"},render:function(t){const[n,s]=l.useState("yes"),o=l.useId();return a.createElement(p,{...t,name:t.name+o,selectedValue:n,onChange:e=>s(e.target.value)},e=>a.createElement(a.Fragment,null,a.createElement(g,{...e,label:"Ja",value:"yes"}),a.createElement(g,{...e,label:"Nei",showChildren:!0,value:"no"},"Vil ikke!")))}};var R,V,v;r.parameters={...r.parameters,docs:{...(R=r.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    inline: false,
    name: 'favorittlukt',
    label: 'Hva er din favorittlukt?'
  },
  render: function Render(args) {
    type Value = 'grass' | 'asphalt' | 'pollen';
    const [selectedValue, setSelectedValue] = useState<Value>('asphalt');
    const id = useId();
    return <RadioButtonInputGroup {...args} name={args.name + id} selectedValue={selectedValue} onChange={e => setSelectedValue(e.target.value as Value)}>
                {inputProps => <>
                        <RadioButton {...inputProps} value="grass">
                            Gress
                        </RadioButton>
                        <RadioButton {...inputProps} value="asphalt">
                            Asfalt
                        </RadioButton>
                        <RadioButton {...inputProps} value="pollen">
                            Pollen
                        </RadioButton>
                    </>}
            </RadioButtonInputGroup>;
  }
}`,...(v=(V=r.parameters)==null?void 0:V.docs)==null?void 0:v.source}}};var S,f,h;d.parameters={...d.parameters,docs:{...(S=d.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    ...Standard.args,
    fieldMessage: 'Feil lukt',
    name: 'feil-lukt'
  },
  render: function Render(args) {
    type Value = 'grass' | 'asphalt' | 'pollen';
    const [selectedValue, setSelectedValue] = useState<Value>('pollen');
    const id = useId();
    return <RadioButtonInputGroup {...args} name={args.name + id} selectedValue={selectedValue} onChange={e => setSelectedValue(e.target.value as Value)}>
                {inputProps => <>
                        <RadioButton {...inputProps} aria-invalid="true" value="grass">
                            Gress
                        </RadioButton>
                        <RadioButton {...inputProps} aria-invalid="true" value="asphalt">
                            Asfalt
                        </RadioButton>
                        <RadioButton {...inputProps} aria-invalid="true" value="pollen">
                            Pollen
                        </RadioButton>
                    </>}
            </RadioButtonInputGroup>;
  }
}`,...(h=(f=d.parameters)==null?void 0:f.docs)==null?void 0:h.source}}};var B,k,I;i.parameters={...i.parameters,docs:{...(B=i.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    ...Standard.args,
    name: 'radio-switch'
  },
  render: function Render(args) {
    type Value = 'yes' | 'no';
    const [selectedValue, setSelectedValue] = useState<Value>('yes');
    const id = useId();
    return <RadioButtonInputGroup {...args} name={args.name + id} selectedValue={selectedValue} onChange={e => setSelectedValue(e.target.value as Value)}>
                {inputProps => <RadioSwitch leftLabel="Ja" leftValue="yes" rightLabel="Nei" rightValue="no" {...inputProps} />}
            </RadioButtonInputGroup>;
  }
}`,...(I=(k=i.parameters)==null?void 0:k.docs)==null?void 0:I.source}}};var E,y,b;c.parameters={...c.parameters,docs:{...(E=c.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    ...Standard.args,
    name: 'radio-block'
  },
  render: function Render(args) {
    type Value = 'yes' | 'no';
    const [selectedValue, setSelectedValue] = useState<Value>('yes');
    const id = useId();
    return <RadioButtonInputGroup {...args} name={args.name + id} selectedValue={selectedValue} onChange={e => setSelectedValue(e.target.value as Value)}>
                {inputProps => <>
                        <RadioBlock {...inputProps} label="Ja" value="yes" />
                        <RadioBlock {...inputProps} label="Nei" showChildren={true} value="no">
                            Vil ikke!
                        </RadioBlock>
                    </>}
            </RadioButtonInputGroup>;
  }
}`,...(b=(y=c.parameters)==null?void 0:y.docs)==null?void 0:b.source}}};const C=["Standard","FieldMessage","WithRadioSwitch","WithRadioBlock"],A=Object.freeze(Object.defineProperty({__proto__:null,FieldMessage:d,Standard:r,WithRadioBlock:c,WithRadioSwitch:i,__namedExportsOrder:C,default:P},Symbol.toStringTag,{value:"Module"}));export{d as F,A as R,r as S,i as W,c as a};
