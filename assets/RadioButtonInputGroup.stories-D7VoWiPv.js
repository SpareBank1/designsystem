import{r as M,R as e}from"./index-eCxJ45ll.js";import{c as b}from"./index-DezCrw0f.js";import{T as L}from"./Tooltip-Cv2kw5GT.js";import{E as _}from"./ErrorFieldMessage-CFe1xxra.js";import{R as o}from"./RadioButton-BJ8GVrSP.js";import{R as x}from"./RadioSwitch-DiErzkz2.js";import{R as h}from"./RadioBlock-DORWPHzR.js";const s=({children:l,className:a,extraMargin:t=!0,description:m,fieldMessage:i,inline:G,label:f,name:C,selectedValue:P,tooltip:u,onChange:g,onColoredBg:r,...H})=>{if(u&&m)throw new Error(`Don't use both "tooltip" and "description" on an <RadioButtonInputGroup />, pick one of them`);const R=M.useId();return e.createElement("fieldset",{"aria-labelledby":R,className:b("ffe-input-group",{"ffe-input-group--on-colored-bg":r},{"ffe-input-group--no-extra-margin":!t},{"ffe-input-group--message":!!i},a),...H},f&&e.createElement("div",{id:R,className:b("ffe-form-label","ffe-form-label--block",{"ffe-form-label--on-colored-bg":r})},f,typeof u=="string"&&e.createElement(L,{onColoredBg:r},u),e.isValidElement(u)&&u),m&&e.createElement("div",{className:"ffe-input-group__description ffe-small-text"},m),l({inline:G,name:C,onChange:F=>{g==null||g(F)},selectedValue:P,onColoredBg:r}),typeof i=="string"?e.createElement(_,{as:"p",onColoredBg:r},i):e.isValidElement(i)&&e.cloneElement(i,{onColoredBg:r}))};s.__docgenInfo={description:"",methods:[],displayName:"RadioButtonInputGroup",props:{children:{required:!0,tsType:{name:"signature",type:"function",raw:`(inputProps: {
    inline?: boolean;
    name: string;
    onChange: React.ChangeEventHandler<HTMLInputElement>;
    selectedValue?: boolean | string | number | null;
    onColoredBg?: boolean;
}) => React.ReactNode`,signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
    inline?: boolean;
    name: string;
    onChange: React.ChangeEventHandler<HTMLInputElement>;
    selectedValue?: boolean | string | number | null;
    onColoredBg?: boolean;
}`,signature:{properties:[{key:"inline",value:{name:"boolean",required:!1}},{key:"name",value:{name:"string",required:!0}},{key:"onChange",value:{name:"ReactChangeEventHandler",raw:"React.ChangeEventHandler<HTMLInputElement>",elements:[{name:"HTMLInputElement"}],required:!0}},{key:"selectedValue",value:{name:"union",raw:"boolean | string | number | null",elements:[{name:"boolean"},{name:"string"},{name:"number"},{name:"null"}],required:!1}},{key:"onColoredBg",value:{name:"boolean",required:!1}}]}},name:"inputProps"}],return:{name:"ReactReactNode",raw:"React.ReactNode"}}},description:`Function receiving props relevant to each radio button as an object
argument. Expected to return a set of radio buttons, which should get
these properties applied to them.`},className:{required:!1,tsType:{name:"string"},description:"Additional class names applied to the fieldset"},description:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"To just render a static, always visible tooltip, use this."},extraMargin:{required:!1,tsType:{name:"boolean"},description:"Reserve space for showing `fieldMessage`s so content below don't move\n vertically if an errormessage shows up. Note that this will only reserve\n space for one line of content, so keep messages short.",defaultValue:{value:"true",computed:!1}},fieldMessage:{required:!1,tsType:{name:"union",raw:`| string
| React.ReactElement<{ onColoredBg?: boolean }>
| null`,elements:[{name:"string"},{name:"ReactReactElement",raw:"React.ReactElement<{ onColoredBg?: boolean }>",elements:[{name:"signature",type:"object",raw:"{ onColoredBg?: boolean }",signature:{properties:[{key:"onColoredBg",value:{name:"boolean",required:!1}}]}}]},{name:"null"}]},description:"String or ErrorFieldMessage component with message"},inline:{required:!1,tsType:{name:"boolean"},description:`Indicates whether the radio buttons inside this radio button group is
rendered inline or as a block.`},label:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:`The text describing the radio button set. Note that if you don't use this
prop but provide your own label you should make sure your solution passes
acessibility validation using a tool such as aXe DevTools.`},name:{required:!0,tsType:{name:"string"},description:"The name of the radio button, required to avoid missing name"},onChange:{required:!1,tsType:{name:"ReactChangeEventHandler",raw:"React.ChangeEventHandler<HTMLInputElement>",elements:[{name:"HTMLInputElement"}]},description:"Change handler, receives value of selected radio button"},selectedValue:{required:!1,tsType:{name:"union",raw:"string | boolean | number | null",elements:[{name:"string"},{name:"boolean"},{name:"number"},{name:"null"}]},description:"The currently selected value"},tooltip:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:`String or Tooltip component with further detail about the radio button
set`},onColoredBg:{required:!1,tsType:{name:"boolean"},description:"Adds alternative styling for better contrast on certain backgrounds"}},composes:["Omit"]};const j={title:"Komponenter/Form/RadioButtonInputGroup",component:s},n={args:{inline:!1,onColoredBg:!1,name:"name",label:"Hva er din favorittlukt?"},render:function(a){return e.createElement(s,{...a},t=>e.createElement(e.Fragment,null,e.createElement(o,{...t,value:"grass"},"Gress"),e.createElement(o,{...t,value:"asphalt"},"Asfalt"),e.createElement(o,{...t,value:"pollen"},"Pollen")))}},d={args:{...n.args,fieldMessage:"Feil lukt"},render:function(a){return e.createElement(s,{...a},t=>e.createElement(e.Fragment,null,e.createElement(o,{...t,value:"grass"},"Gress"),e.createElement(o,{...t,value:"asphalt"},"Asfalt"),e.createElement(o,{...t,value:"pollen"},"Pollen")))}},c={args:{...n.args},render:function(a){return e.createElement(s,{...a},t=>e.createElement(x,{leftLabel:"Ja",leftValue:!0,rightLabel:"Nei",rightValue:!1,...t}))}},p={args:{...n.args,selectedValue:"yes"},render:function(a){return e.createElement(s,{...a},t=>e.createElement(e.Fragment,null,e.createElement(h,{...t,label:"Ja",value:"yes",selectedValue:a.selectedValue}),e.createElement(h,{...t,selectedValue:a.selectedValue,label:"Nei",showChildren:!0,value:"no"},"Vil ikke!")))}};var v,E,y;n.parameters={...n.parameters,docs:{...(v=n.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    inline: false,
    onColoredBg: false,
    name: 'name',
    label: 'Hva er din favorittlukt?'
  },
  render: function Render(args) {
    return <RadioButtonInputGroup {...args}>
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
}`,...(y=(E=n.parameters)==null?void 0:E.docs)==null?void 0:y.source}}};var B,w,T;d.parameters={...d.parameters,docs:{...(B=d.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    ...Standard.args,
    fieldMessage: 'Feil lukt'
  },
  render: function Render(args) {
    return <RadioButtonInputGroup {...args}>
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
}`,...(T=(w=d.parameters)==null?void 0:w.docs)==null?void 0:T.source}}};var k,V,I;c.parameters={...c.parameters,docs:{...(k=c.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    ...Standard.args
  },
  render: function Render(args) {
    return <RadioButtonInputGroup {...args}>
                {inputProps => <RadioSwitch leftLabel="Ja" leftValue={true} rightLabel="Nei" rightValue={false} {...inputProps} />}
            </RadioButtonInputGroup>;
  }
}`,...(I=(V=c.parameters)==null?void 0:V.docs)==null?void 0:I.source}}};var N,q,S;p.parameters={...p.parameters,docs:{...(N=p.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    ...Standard.args,
    selectedValue: 'yes'
  },
  render: function Render(args) {
    return <RadioButtonInputGroup {...args}>
                {inputProps => <>
                        <RadioBlock {...inputProps} label="Ja" value="yes"
        // @ts-ignore
        selectedValue={args.selectedValue} />
                        <RadioBlock {...inputProps}
        // @ts-ignore
        selectedValue={args.selectedValue} label="Nei" showChildren={true} value="no">
                            Vil ikke!
                        </RadioBlock>
                    </>}
            </RadioButtonInputGroup>;
  }
}`,...(S=(q=p.parameters)==null?void 0:q.docs)==null?void 0:S.source}}};const A=["Standard","FieldMessage","WithRadioSwitch","WithRadioBlock"],$=Object.freeze(Object.defineProperty({__proto__:null,FieldMessage:d,Standard:n,WithRadioBlock:p,WithRadioSwitch:c,__namedExportsOrder:A,default:j},Symbol.toStringTag,{value:"Module"}));export{d as F,$ as R,n as S,c as W,p as a};
