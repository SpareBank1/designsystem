import{r as c,R as a}from"./index-DQDNmYQF.js";import{R as d}from"./RadioButtonInputGroup-XI03ZI0T.js";import{R as n}from"./RadioButton-xf9fc-_r.js";import{R as G}from"./RadioSwitch-BBYjSt2C.js";import{R as g}from"./RadioBlock-BGO6GNky.js";const P={title:"Komponenter/Form/RadioButtonInputGroup",component:d},t={args:{inline:!1,name:"favorittlukt",label:"Hva er din favorittlukt?"},render:function(r){const[l,o]=c.useState("asphalt");return a.createElement(d,{...r,selectedValue:l,onChange:e=>o(e.target.value)},e=>a.createElement(a.Fragment,null,a.createElement(n,{...e,value:"grass"},"Gress"),a.createElement(n,{...e,value:"asphalt"},"Asfalt"),a.createElement(n,{...e,value:"pollen"},"Pollen")))}},s={args:{...t.args,fieldMessage:"Feil lukt",name:"feil-lukt"},render:function(r){const[l,o]=c.useState("pollen");return a.createElement(d,{...r,selectedValue:l,onChange:e=>o(e.target.value)},e=>a.createElement(a.Fragment,null,a.createElement(n,{...e,"aria-invalid":"true",value:"grass"},"Gress"),a.createElement(n,{...e,"aria-invalid":"true",value:"asphalt"},"Asfalt"),a.createElement(n,{...e,"aria-invalid":"true",value:"pollen"},"Pollen")))}},u={args:{...t.args,name:"radio-switch"},render:function(r){const[l,o]=c.useState("yes");return a.createElement(d,{...r,selectedValue:l,onChange:e=>o(e.target.value)},e=>a.createElement(G,{leftLabel:"Ja",leftValue:"yes",rightLabel:"Nei",rightValue:"no",...e}))}},i={args:{...t.args,name:"radio-block"},render:function(r){const[l,o]=c.useState("yes");return a.createElement(d,{...r,selectedValue:l,onChange:e=>o(e.target.value)},e=>a.createElement(a.Fragment,null,a.createElement(g,{...e,label:"Ja",value:"yes"}),a.createElement(g,{...e,label:"Nei",showChildren:!0,value:"no"},"Vil ikke!")))}};var m,R,V;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    inline: false,
    name: 'favorittlukt',
    label: 'Hva er din favorittlukt?'
  },
  render: function Render(args) {
    type Value = 'grass' | 'asphalt' | 'pollen';
    const [selectedValue, setSelectedValue] = useState<Value>('asphalt');
    return <RadioButtonInputGroup {...args} selectedValue={selectedValue} onChange={e => setSelectedValue(e.target.value as Value)}>
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
}`,...(V=(R=t.parameters)==null?void 0:R.docs)==null?void 0:V.source}}};var v,S,f;s.parameters={...s.parameters,docs:{...(v=s.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    ...Standard.args,
    fieldMessage: 'Feil lukt',
    name: 'feil-lukt'
  },
  render: function Render(args) {
    type Value = 'grass' | 'asphalt' | 'pollen';
    const [selectedValue, setSelectedValue] = useState<Value>('pollen');
    return <RadioButtonInputGroup {...args} selectedValue={selectedValue} onChange={e => setSelectedValue(e.target.value as Value)}>
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
}`,...(f=(S=s.parameters)==null?void 0:S.docs)==null?void 0:f.source}}};var h,B,k;u.parameters={...u.parameters,docs:{...(h=u.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    ...Standard.args,
    name: 'radio-switch'
  },
  render: function Render(args) {
    type Value = 'yes' | 'no';
    const [selectedValue, setSelectedValue] = useState<Value>('yes');
    return <RadioButtonInputGroup {...args} selectedValue={selectedValue} onChange={e => setSelectedValue(e.target.value as Value)}>
                {inputProps => <RadioSwitch leftLabel="Ja" leftValue="yes" rightLabel="Nei" rightValue="no" {...inputProps} />}
            </RadioButtonInputGroup>;
  }
}`,...(k=(B=u.parameters)==null?void 0:B.docs)==null?void 0:k.source}}};var E,y,b;i.parameters={...i.parameters,docs:{...(E=i.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    ...Standard.args,
    name: 'radio-block'
  },
  render: function Render(args) {
    type Value = 'yes' | 'no';
    const [selectedValue, setSelectedValue] = useState<Value>('yes');
    return <RadioButtonInputGroup {...args} selectedValue={selectedValue} onChange={e => setSelectedValue(e.target.value as Value)}>
                {inputProps => <>
                        <RadioBlock {...inputProps} label="Ja" value="yes" />
                        <RadioBlock {...inputProps} label="Nei" showChildren={true} value="no">
                            Vil ikke!
                        </RadioBlock>
                    </>}
            </RadioButtonInputGroup>;
  }
}`,...(b=(y=i.parameters)==null?void 0:y.docs)==null?void 0:b.source}}};const I=["Standard","FieldMessage","WithRadioSwitch","WithRadioBlock"],W=Object.freeze(Object.defineProperty({__proto__:null,FieldMessage:s,Standard:t,WithRadioBlock:i,WithRadioSwitch:u,__namedExportsOrder:I,default:P},Symbol.toStringTag,{value:"Module"}));export{s as F,W as R,t as S,u as W,i as a};
