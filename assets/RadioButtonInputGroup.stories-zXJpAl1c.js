import{r as g,R as e}from"./index-ne9I_3bB.js";import{c as v}from"./index-B6-3w37c.js";import{T as L}from"./Tooltip-CGL9FnMI.js";import{E as _}from"./ErrorFieldMessage-CgmGPyFt.js";import{R as s}from"./RadioButton-CeWN6Lr5.js";import{R as x}from"./RadioSwitch-C2gJ4V3X.js";import{R as b}from"./RadioBlock-DsOy-L0F.js";const u=({children:i,className:n,extraMargin:r=!0,description:a,fieldMessage:t,inline:G,label:R,name:P,selectedValue:H,tooltip:d,onChange:f,onColoredBg:l,...F})=>{if(d&&a)throw new Error(`Don't use both "tooltip" and "description" on an <RadioButtonInputGroup />, pick one of them`);const h=g.useId();return e.createElement("fieldset",{"aria-labelledby":h,className:v("ffe-input-group",{"ffe-input-group--on-colored-bg":l},{"ffe-input-group--no-extra-margin":!r},{"ffe-input-group--message":!!t},n),...F},R&&e.createElement("div",{id:h,className:v("ffe-form-label","ffe-form-label--block",{"ffe-form-label--on-colored-bg":l})},R,typeof d=="string"&&e.createElement(L,{onColoredBg:l},d),e.isValidElement(d)&&d),a&&e.createElement("div",{className:"ffe-input-group__description ffe-small-text"},a),i({inline:G,name:P,onChange:M=>{f==null||f(M)},selectedValue:H,onColoredBg:l}),typeof t=="string"?e.createElement(_,{as:"p",onColoredBg:l},t):e.isValidElement(t)&&e.cloneElement(t,{onColoredBg:l}))};u.__docgenInfo={description:"",methods:[],displayName:"RadioButtonInputGroup",props:{children:{required:!0,tsType:{name:"signature",type:"function",raw:`(inputProps: {
    inline?: boolean;
    name: string;
    onChange: React.ChangeEventHandler<HTMLInputElement>;
    selectedValue?: SelectedRadioValue;
    onColoredBg?: boolean;
}) => React.ReactNode`,signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
    inline?: boolean;
    name: string;
    onChange: React.ChangeEventHandler<HTMLInputElement>;
    selectedValue?: SelectedRadioValue;
    onColoredBg?: boolean;
}`,signature:{properties:[{key:"inline",value:{name:"boolean",required:!1}},{key:"name",value:{name:"string",required:!0}},{key:"onChange",value:{name:"ReactChangeEventHandler",raw:"React.ChangeEventHandler<HTMLInputElement>",elements:[{name:"HTMLInputElement"}],required:!0}},{key:"selectedValue",value:{name:"union",raw:"string | null | undefined",elements:[{name:"string"},{name:"null"},{name:"undefined"}],required:!1}},{key:"onColoredBg",value:{name:"boolean",required:!1}}]}},name:"inputProps"}],return:{name:"ReactReactNode",raw:"React.ReactNode"}}},description:`Function receiving props relevant to each radio button as an object
argument. Expected to return a set of radio buttons, which should get
these properties applied to them.`},className:{required:!1,tsType:{name:"string"},description:"Additional class names applied to the fieldset"},description:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"To just render a static, always visible tooltip, use this."},extraMargin:{required:!1,tsType:{name:"boolean"},description:"Reserve space for showing `fieldMessage`s so content below don't move\n vertically if an errormessage shows up. Note that this will only reserve\n space for one line of content, so keep messages short.",defaultValue:{value:"true",computed:!1}},fieldMessage:{required:!1,tsType:{name:"union",raw:`| string
| React.ReactElement<{ onColoredBg?: boolean }>
| null`,elements:[{name:"string"},{name:"ReactReactElement",raw:"React.ReactElement<{ onColoredBg?: boolean }>",elements:[{name:"signature",type:"object",raw:"{ onColoredBg?: boolean }",signature:{properties:[{key:"onColoredBg",value:{name:"boolean",required:!1}}]}}]},{name:"null"}]},description:"String or ErrorFieldMessage component with message"},inline:{required:!1,tsType:{name:"boolean"},description:`Indicates whether the radio buttons inside this radio button group is
rendered inline or as a block.`},label:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:`The text describing the radio button set. Note that if you don't use this
prop but provide your own label you should make sure your solution passes
acessibility validation using a tool such as aXe DevTools.`},name:{required:!0,tsType:{name:"string"},description:"The name of the radio button, required to avoid missing name"},onChange:{required:!1,tsType:{name:"ReactChangeEventHandler",raw:"React.ChangeEventHandler<HTMLInputElement>",elements:[{name:"HTMLInputElement"}]},description:"Change handler, receives value of selected radio button"},selectedValue:{required:!1,tsType:{name:"union",raw:"string | null | undefined",elements:[{name:"string"},{name:"null"},{name:"undefined"}]},description:"The currently selected value"},tooltip:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:`String or Tooltip component with further detail about the radio button
set`},onColoredBg:{required:!1,tsType:{name:"boolean"},description:"Adds alternative styling for better contrast on certain backgrounds"}},composes:["Omit"]};const j={title:"Komponenter/Form/RadioButtonInputGroup",component:u},o={args:{inline:!1,onColoredBg:!1,name:"favorittlukt",label:"Hva er din favorittlukt?"},render:function(n){const[r,a]=g.useState("asphalt");return e.createElement(u,{...n,selectedValue:r,onChange:t=>a(t.target.value)},t=>e.createElement(e.Fragment,null,e.createElement(s,{...t,value:"grass"},"Gress"),e.createElement(s,{...t,value:"asphalt"},"Asfalt"),e.createElement(s,{...t,value:"pollen"},"Pollen")))}},c={args:{...o.args,fieldMessage:"Feil lukt",name:"feil-lukt"},render:function(n){const[r,a]=g.useState("pollen");return e.createElement(u,{...n,selectedValue:r,onChange:t=>a(t.target.value)},t=>e.createElement(e.Fragment,null,e.createElement(s,{...t,value:"grass"},"Gress"),e.createElement(s,{...t,value:"asphalt"},"Asfalt"),e.createElement(s,{...t,value:"pollen"},"Pollen")))}},p={args:{...o.args,name:"radio-switch"},render:function(n){const[r,a]=g.useState("yes");return e.createElement(u,{...n,selectedValue:r,onChange:t=>a(t.target.value)},t=>e.createElement(x,{leftLabel:"Ja",leftValue:"yes",rightLabel:"Nei",rightValue:"no",...t}))}},m={args:{...o.args,name:"radio-block"},render:function(n){const[r,a]=g.useState("yes");return e.createElement(u,{...n,selectedValue:r,onChange:t=>a(t.target.value)},t=>e.createElement(e.Fragment,null,e.createElement(b,{...t,label:"Ja",value:"yes"}),e.createElement(b,{...t,label:"Nei",showChildren:!0,value:"no"},"Vil ikke!")))}};var V,y,E;o.parameters={...o.parameters,docs:{...(V=o.parameters)==null?void 0:V.docs,source:{originalSource:`{
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
}`,...(E=(y=o.parameters)==null?void 0:y.docs)==null?void 0:E.source}}};var S,B,w;c.parameters={...c.parameters,docs:{...(S=c.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
}`,...(w=(B=c.parameters)==null?void 0:B.docs)==null?void 0:w.source}}};var k,T,C;p.parameters={...p.parameters,docs:{...(k=p.parameters)==null?void 0:k.docs,source:{originalSource:`{
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
}`,...(C=(T=p.parameters)==null?void 0:T.docs)==null?void 0:C.source}}};var I,N,q;m.parameters={...m.parameters,docs:{...(I=m.parameters)==null?void 0:I.docs,source:{originalSource:`{
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
}`,...(q=(N=m.parameters)==null?void 0:N.docs)==null?void 0:q.source}}};const A=["Standard","FieldMessage","WithRadioSwitch","WithRadioBlock"],$=Object.freeze(Object.defineProperty({__proto__:null,FieldMessage:c,Standard:o,WithRadioBlock:m,WithRadioSwitch:p,__namedExportsOrder:A,default:j},Symbol.toStringTag,{value:"Module"}));export{c as F,$ as R,o as S,p as W,m as a};
