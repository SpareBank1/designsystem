import{r as c,R as a}from"./index-eCxJ45ll.js";import{R as i}from"./RadioButtonInputGroup-OeJ8yTP0.js";import{R as s}from"./RadioButton-CUV-XDUW.js";import{R as G}from"./RadioSwitch--eENCzvt.js";import{R as g}from"./RadioBlock-DO_NDSRs.js";const P={title:"Komponenter/Form/RadioButtonInputGroup",component:i},t={args:{inline:!1,onColoredBg:!1,name:"favorittlukt",label:"Hva er din favorittlukt?"},render:function(l){const[r,o]=c.useState("asphalt");return a.createElement(i,{...l,selectedValue:r,onChange:e=>o(e.target.value)},e=>a.createElement(a.Fragment,null,a.createElement(s,{...e,value:"grass"},"Gress"),a.createElement(s,{...e,value:"asphalt"},"Asfalt"),a.createElement(s,{...e,value:"pollen"},"Pollen")))}},n={args:{...t.args,fieldMessage:"Feil lukt",name:"feil-lukt"},render:function(l){const[r,o]=c.useState("pollen");return a.createElement(i,{...l,selectedValue:r,onChange:e=>o(e.target.value)},e=>a.createElement(a.Fragment,null,a.createElement(s,{...e,value:"grass"},"Gress"),a.createElement(s,{...e,value:"asphalt"},"Asfalt"),a.createElement(s,{...e,value:"pollen"},"Pollen")))}},u={args:{...t.args,name:"radio-switch"},render:function(l){const[r,o]=c.useState("yes");return a.createElement(i,{...l,selectedValue:r,onChange:e=>o(e.target.value)},e=>a.createElement(G,{leftLabel:"Ja",leftValue:"yes",rightLabel:"Nei",rightValue:"no",...e}))}},d={args:{...t.args,name:"radio-block"},render:function(l){const[r,o]=c.useState("yes");return a.createElement(i,{...l,selectedValue:r,onChange:e=>o(e.target.value)},e=>a.createElement(a.Fragment,null,a.createElement(g,{...e,label:"Ja",value:"yes"}),a.createElement(g,{...e,label:"Nei",showChildren:!0,value:"no"},"Vil ikke!")))}};var m,R,V;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    inline: false,
    onColoredBg: false,
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
}`,...(V=(R=t.parameters)==null?void 0:R.docs)==null?void 0:V.source}}};var f,S,h;n.parameters={...n.parameters,docs:{...(f=n.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
}`,...(h=(S=n.parameters)==null?void 0:S.docs)==null?void 0:h.source}}};var B,v,k;u.parameters={...u.parameters,docs:{...(B=u.parameters)==null?void 0:B.docs,source:{originalSource:`{
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
}`,...(k=(v=u.parameters)==null?void 0:v.docs)==null?void 0:k.source}}};var E,y,b;d.parameters={...d.parameters,docs:{...(E=d.parameters)==null?void 0:E.docs,source:{originalSource:`{
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
}`,...(b=(y=d.parameters)==null?void 0:y.docs)==null?void 0:b.source}}};const C=["Standard","FieldMessage","WithRadioSwitch","WithRadioBlock"],W=Object.freeze(Object.defineProperty({__proto__:null,FieldMessage:n,Standard:t,WithRadioBlock:d,WithRadioSwitch:u,__namedExportsOrder:C,default:P},Symbol.toStringTag,{value:"Module"}));export{n as F,W as R,t as S,u as W,d as a};
