import{R as e,r as g}from"./index-eCxJ45ll.js";import{c as f}from"./index-DezCrw0f.js";import{T as b}from"./Tooltip-CPJirHS1.js";import{E as R}from"./ErrorFieldMessage-BZeYW4Z5.js";const y=e.forwardRef(({children:c,checked:u,className:p,labelProps:a,selectedValue:t,tooltip:o,tooltipProps:s={},value:i,onChange:m=()=>{},...n},r)=>{const d=g.useId(),l=f({"ffe-radio-button--with-tooltip":o},p),h=t===void 0?u:t===i;return e.createElement(e.Fragment,null,e.createElement("input",{className:"ffe-radio-input",id:d,ref:r,type:"radio",checked:h,value:`${i}`,onChange:m,...n}),e.createElement("label",{htmlFor:d,...a,className:l},e.createElement("span",{className:"ffe-radio-input__content"},c)),o&&e.createElement(b,{...s},o))});y.__docgenInfo={description:"",methods:[],displayName:"BaseRadioButton",props:{labelProps:{required:!1,tsType:{name:"ReactComponentProps",raw:"React.ComponentProps<'label'>",elements:[{name:"literal",value:"'label'"}]},description:"Additional props passed to the label element"},selectedValue:{required:!1,tsType:{name:"union",raw:"string | null | undefined",elements:[{name:"string"},{name:"null"},{name:"undefined"}]},description:"The selected value of the radio button set"},value:{required:!0,tsType:{name:"string"},description:"The value of the radio button"},tooltip:{required:!1,tsType:{name:"string"},description:"Tooltip providing further detail about the choice"},tooltipProps:{required:!1,tsType:{name:"TooltipProps"},description:"",defaultValue:{value:"{}",computed:!1}},onChange:{defaultValue:{value:"() => {}",computed:!1},required:!1}},composes:["Omit"]};const v=({children:c,className:u,extraMargin:p=!0,description:a,fieldMessage:t,inline:o,label:s,name:i,selectedValue:m,tooltip:n,onChange:r,...d})=>{if(n&&a)throw new Error(`Don't use both "tooltip" and "description" on an <RadioButtonInputGroup />, pick one of them`);const l=g.useId();return e.createElement("fieldset",{"aria-labelledby":l,className:f("ffe-input-group",{"ffe-input-group--no-extra-margin":!p},{"ffe-input-group--message":!!t},u),...d},s&&e.createElement("div",{id:l,className:f("ffe-form-label","ffe-form-label--block")},s,typeof n=="string"&&e.createElement(b,null,n),e.isValidElement(n)&&n),a&&e.createElement("div",{className:"ffe-input-group__description ffe-small-text"},a),c({inline:o,name:i,onChange:h=>{r==null||r(h)},selectedValue:m}),typeof t=="string"?e.createElement(R,{as:"p"},t):t)};v.__docgenInfo={description:"",methods:[],displayName:"RadioButtonInputGroup",props:{children:{required:!0,tsType:{name:"signature",type:"function",raw:`(inputProps: {
    inline?: boolean;
    name: string;
    onChange: React.ChangeEventHandler<HTMLInputElement>;
    selectedValue?: SelectedRadioValue;
    /** @deprecated as part of update to Semantic Colors
     *
     * Use the \`ffe-accent-color\` class on the component or on the container of the component instead
     * [Read more in the upgrade guide](https://sparebank1.github.io/designsystem/?path=/docs/introduksjon-changelog--docs#2025---februar---semantiske-farger) */
    onColoredBg?: never;
}) => React.ReactNode`,signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
    inline?: boolean;
    name: string;
    onChange: React.ChangeEventHandler<HTMLInputElement>;
    selectedValue?: SelectedRadioValue;
    /** @deprecated as part of update to Semantic Colors
     *
     * Use the \`ffe-accent-color\` class on the component or on the container of the component instead
     * [Read more in the upgrade guide](https://sparebank1.github.io/designsystem/?path=/docs/introduksjon-changelog--docs#2025---februar---semantiske-farger) */
    onColoredBg?: never;
}`,signature:{properties:[{key:"inline",value:{name:"boolean",required:!1}},{key:"name",value:{name:"string",required:!0}},{key:"onChange",value:{name:"ReactChangeEventHandler",raw:"React.ChangeEventHandler<HTMLInputElement>",elements:[{name:"HTMLInputElement"}],required:!0}},{key:"selectedValue",value:{name:"union",raw:"string | null | undefined",elements:[{name:"string"},{name:"null"},{name:"undefined"}],required:!1}},{key:"onColoredBg",value:{name:"never",required:!1},description:`@deprecated as part of update to Semantic Colors

Use the \`ffe-accent-color\` class on the component or on the container of the component instead
[Read more in the upgrade guide](https://sparebank1.github.io/designsystem/?path=/docs/introduksjon-changelog--docs#2025---februar---semantiske-farger)`}]}},name:"inputProps"}],return:{name:"ReactReactNode",raw:"React.ReactNode"}}},description:`Function receiving props relevant to each radio button as an object
argument. Expected to return a set of radio buttons, which should get
these properties applied to them.`},className:{required:!1,tsType:{name:"string"},description:"Additional class names applied to the fieldset"},description:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"To just render a static, always visible tooltip, use this."},extraMargin:{required:!1,tsType:{name:"boolean"},description:"Reserve space for showing `fieldMessage`s so content below don't move\n vertically if an errormessage shows up. Note that this will only reserve\n space for one line of content, so keep messages short.",defaultValue:{value:"true",computed:!1}},fieldMessage:{required:!1,tsType:{name:"union",raw:`| string
| React.ReactElement<{
      /** @deprecated as part of update to Semantic Colors
       *
       * Use the \`ffe-accent-color\` class on the component or on the container of the component instead
       * [Read more in the upgrade guide](https://sparebank1.github.io/designsystem/?path=/docs/introduksjon-changelog--docs#2025---februar---semantiske-farger) */
      onColoredBg?: never;
  }>
| null`,elements:[{name:"string"},{name:"ReactReactElement",raw:`React.ReactElement<{
    /** @deprecated as part of update to Semantic Colors
     *
     * Use the \`ffe-accent-color\` class on the component or on the container of the component instead
     * [Read more in the upgrade guide](https://sparebank1.github.io/designsystem/?path=/docs/introduksjon-changelog--docs#2025---februar---semantiske-farger) */
    onColoredBg?: never;
}>`,elements:[{name:"signature",type:"object",raw:`{
    /** @deprecated as part of update to Semantic Colors
     *
     * Use the \`ffe-accent-color\` class on the component or on the container of the component instead
     * [Read more in the upgrade guide](https://sparebank1.github.io/designsystem/?path=/docs/introduksjon-changelog--docs#2025---februar---semantiske-farger) */
    onColoredBg?: never;
}`,signature:{properties:[{key:"onColoredBg",value:{name:"never",required:!1},description:`@deprecated as part of update to Semantic Colors

Use the \`ffe-accent-color\` class on the component or on the container of the component instead
[Read more in the upgrade guide](https://sparebank1.github.io/designsystem/?path=/docs/introduksjon-changelog--docs#2025---februar---semantiske-farger)`}]}}]},{name:"null"}]},description:"String or ErrorFieldMessage component with message"},inline:{required:!1,tsType:{name:"boolean"},description:`Indicates whether the radio buttons inside this radio button group is
rendered inline or as a block.`},label:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:`The text describing the radio button set. Note that if you don't use this
prop but provide your own label you should make sure your solution passes
acessibility validation using a tool such as aXe DevTools.`},name:{required:!0,tsType:{name:"string"},description:"The name of the radio button, required to avoid missing name"},onChange:{required:!1,tsType:{name:"ReactChangeEventHandler",raw:"React.ChangeEventHandler<HTMLInputElement>",elements:[{name:"HTMLInputElement"}]},description:"Change handler, receives value of selected radio button"},selectedValue:{required:!1,tsType:{name:"union",raw:"string | null | undefined",elements:[{name:"string"},{name:"null"},{name:"undefined"}]},description:"The currently selected value"},tooltip:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:`String or Tooltip component with further detail about the radio button
set`},onColoredBg:{required:!1,tsType:{name:"never"},description:`@deprecated as part of update to Semantic Colors

Use the \`ffe-accent-color\` class on the component or on the container of the component instead
[Read more in the upgrade guide](https://sparebank1.github.io/designsystem/?path=/docs/introduksjon-changelog--docs#2025---februar---semantiske-farger)`}},composes:["Omit"]};export{y as B,v as R};
