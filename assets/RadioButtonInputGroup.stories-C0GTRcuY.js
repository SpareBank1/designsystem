import{r as n,R as a}from"./index-DQDNmYQF.js";import{R as m}from"./RadioButtonInputGroup-CFx4-ddE.js";import{R as u}from"./RadioButton-DXzEjuzS.js";import{R as w}from"./RadioSwitch-CEbAHQgw.js";import{R}from"./RadioBlock-MtxcmPo-.js";const W={title:"Komponenter/Form/RadioButtonInputGroup",component:m},r={args:{inline:!1,name:"favorittlukt",label:"Hva er din favorittlukt?"},render:function(t){const[l,o]=n.useState("asphalt"),s=n.useId();return a.createElement(m,{...t,name:t.name+s,selectedValue:l,onChange:e=>o(e.target.value)},e=>a.createElement(a.Fragment,null,a.createElement(u,{...e,value:"grass"},"Gress"),a.createElement(u,{...e,value:"asphalt"},"Asfalt"),a.createElement(u,{...e,value:"pollen"},"Pollen")))}},d={args:{...r.args,fieldMessage:"Feil lukt",name:"feil-lukt"},render:function(t){const[l,o]=n.useState("pollen"),s=n.useId();return a.createElement(m,{...t,name:t.name+s,selectedValue:l,onChange:e=>o(e.target.value)},e=>a.createElement(a.Fragment,null,a.createElement(u,{...e,"aria-invalid":"true",value:"grass"},"Gress"),a.createElement(u,{...e,"aria-invalid":"true",value:"asphalt"},"Asfalt"),a.createElement(u,{...e,"aria-invalid":"true",value:"pollen"},"Pollen")))}},i={args:{...r.args,inline:!0,name:"med-tooltip",tooltip:"Lukten du liker best en varm sommerdag"},render:r.render},c={args:{...r.args,name:"radio-switch"},render:function(t){const[l,o]=n.useState("yes"),s=n.useId();return a.createElement(m,{...t,name:t.name+s,selectedValue:l,onChange:e=>o(e.target.value)},e=>a.createElement(w,{leftLabel:"Ja",leftValue:"yes",rightLabel:"Nei",rightValue:"no",...e}))}},p={args:{...r.args,name:"radio-block"},render:function(t){const[l,o]=n.useState("yes"),s=n.useId();return a.createElement(m,{...t,name:t.name+s,selectedValue:l,onChange:e=>o(e.target.value)},e=>a.createElement(a.Fragment,null,a.createElement(R,{...e,label:"Ja",value:"yes"}),a.createElement(R,{...e,label:"Nei",showChildren:!0,value:"no"},"Vil ikke!")))}};var V,v,S;r.parameters={...r.parameters,docs:{...(V=r.parameters)==null?void 0:V.docs,source:{originalSource:`{
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
}`,...(S=(v=r.parameters)==null?void 0:v.docs)==null?void 0:S.source}}};var h,f,B;d.parameters={...d.parameters,docs:{...(h=d.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
}`,...(B=(f=d.parameters)==null?void 0:f.docs)==null?void 0:B.source}}};var k,I,b;i.parameters={...i.parameters,docs:{...(k=i.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    ...Standard.args,
    inline: true,
    name: 'med-tooltip',
    tooltip: 'Lukten du liker best en varm sommerdag'
  },
  render: Standard.render
}`,...(b=(I=i.parameters)==null?void 0:I.docs)==null?void 0:b.source}}};var E,y,G;c.parameters={...c.parameters,docs:{...(E=c.parameters)==null?void 0:E.docs,source:{originalSource:`{
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
}`,...(G=(y=c.parameters)==null?void 0:y.docs)==null?void 0:G.source}}};var P,C,F;p.parameters={...p.parameters,docs:{...(P=p.parameters)==null?void 0:P.docs,source:{originalSource:`{
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
}`,...(F=(C=p.parameters)==null?void 0:C.docs)==null?void 0:F.source}}};const L=["Standard","FieldMessage","WithTooltip","WithRadioSwitch","WithRadioBlock"],x=Object.freeze(Object.defineProperty({__proto__:null,FieldMessage:d,Standard:r,WithRadioBlock:p,WithRadioSwitch:c,WithTooltip:i,__namedExportsOrder:L,default:W},Symbol.toStringTag,{value:"Module"}));export{d as F,x as R,r as S,i as W,c as a,p as b};
