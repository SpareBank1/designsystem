import{c as C}from"./index-QCImZZ3W.js";import{r as E,R as n}from"./index-DQDNmYQF.js";import{L as T}from"./Label-B7lv4noR.js";import{T as m}from"./Tooltip-B8J4kvmt.js";import{E as h}from"./ErrorFieldMessage-eNbkZ9Td.js";const I=(o,a)=>typeof o=="function"?o(a):n.isValidElement(o)?n.cloneElement(o,a):o,N=({inputId:o,children:a,className:g,extraMargin:f=!0,description:s,label:i,fieldMessage:e,tooltip:t,onTooltipToggle:c,labelId:l,...y})=>{const b=E.useId(),r=o??b,p=s?`${r}-description`:void 0;if(n.Children.count(a)>1)throw new Error("This element does not support more than one child. If you need more than one element inside your InputGroup, please use the function-as-a-child pattern outlined in the documentation.");const d=(()=>{var u;return typeof e=="string"?`${r}-fieldmessage`:(u=e==null?void 0:e.props)!=null&&u.id?e.props.id:e?`${r}-fieldmessage`:void 0})();if(c&&typeof t!="boolean"&&typeof t!="string")throw new Error(`Only use the "onTooltipToggle" prop if you're not sending a component of type <Tooltip /> in the "tooltip" prop. If you are, use "onClick" on that component instead`);if(t&&s)throw new Error(`Don't use both "tooltip" and "description" on an <InputGroup />, pick one of them`);const k=!!e&&(typeof e=="string"||e.type===h),R=!!e,v=d||p?[d,p].filter(Boolean).join(" "):void 0,w=I(a,{id:r,"aria-invalid":k?"true":"false","aria-describedby":v});return n.createElement("div",{className:C("ffe-input-group",{"ffe-input-group--no-extra-margin":!f,"ffe-input-group--message":R},g),...y},typeof i=="string"?n.createElement(T,{htmlFor:r,id:l},i):n.isValidElement(i)&&n.cloneElement(i,{htmlFor:r,id:l}),typeof t=="string"&&n.createElement(m,{onClick:c},t),t===!0&&n.createElement(m,{onClick:c}),n.isValidElement(t)&&t,s&&n.createElement("div",{className:"ffe-small-text ffe-input-group__description",id:p},s),w,typeof e=="string"&&n.createElement(h,{as:"p",id:d},e),n.isValidElement(e)&&n.cloneElement(e,{id:d}))};N.__docgenInfo={description:"",methods:[],displayName:"InputGroup",props:{inputId:{required:!1,tsType:{name:"string"},description:"The id that will be used on the input child if you don't want a generated one"},labelId:{required:!1,tsType:{name:"string"},description:"The id used on the label in this component. Could be necessary if your component needs a aria-labelledby."},children:{required:!0,tsType:{name:"union",raw:`| NonNullable<React.ReactNode>
| ((extraProps: ChildrenExtraProps) => React.ReactNode)`,elements:[{name:"NonNullable",elements:[{name:"ReactReactNode",raw:"React.ReactNode"}],raw:"NonNullable<React.ReactNode>"},{name:"unknown"}]},description:"Unless you only have one element in your `InputGroup` you will have to use the function-as-a-child pattern."},extraMargin:{required:!1,tsType:{name:"boolean"},description:"Reserve space for showing `fieldMessage`s so content below don't move\n vertically if an errormessage shows up. Note that this will only reserve\n space for one line of content, so keep messages short.",defaultValue:{value:"true",computed:!1}},fieldMessage:{required:!1,tsType:{name:"union",raw:`| string
| React.ReactElement<{
      id: string;
      /** @deprecated as part of update to Semantic Colors
       *
       * Use the \`ffe-accent-color\` class on the component or on the container of the component instead
       * [Read more in the upgrade guide](https://sparebank1.github.io/designsystem/?path=/docs/introduksjon-changelog--docs#2025---februar---semantiske-farger) */
      onColoredBg?: never;
  }>
| null`,elements:[{name:"string"},{name:"ReactReactElement",raw:`React.ReactElement<{
    id: string;
    /** @deprecated as part of update to Semantic Colors
     *
     * Use the \`ffe-accent-color\` class on the component or on the container of the component instead
     * [Read more in the upgrade guide](https://sparebank1.github.io/designsystem/?path=/docs/introduksjon-changelog--docs#2025---februar---semantiske-farger) */
    onColoredBg?: never;
}>`,elements:[{name:"signature",type:"object",raw:`{
    id: string;
    /** @deprecated as part of update to Semantic Colors
     *
     * Use the \`ffe-accent-color\` class on the component or on the container of the component instead
     * [Read more in the upgrade guide](https://sparebank1.github.io/designsystem/?path=/docs/introduksjon-changelog--docs#2025---februar---semantiske-farger) */
    onColoredBg?: never;
}`,signature:{properties:[{key:"id",value:{name:"string",required:!0}},{key:"onColoredBg",value:{name:"never",required:!1},description:`@deprecated as part of update to Semantic Colors

Use the \`ffe-accent-color\` class on the component or on the container of the component instead
[Read more in the upgrade guide](https://sparebank1.github.io/designsystem/?path=/docs/introduksjon-changelog--docs#2025---februar---semantiske-farger)`}]}}]},{name:"null"}]},description:"Use the ErrorFieldMessage component if you need more flexibility in how the content is rendered."},description:{required:!1,tsType:{name:"string"},description:"To just render a static, always visible tooltip, use this."},label:{required:!1,tsType:{name:"union",raw:`| string
| React.ReactElement<{
      id: string;
      htmlFor: string;
      /** @deprecated as part of update to Semantic Colors
       *
       * Use the \`ffe-accent-color\` class on the component or on the container of the component instead
       * [Read more in the upgrade guide](https://sparebank1.github.io/designsystem/?path=/docs/introduksjon-changelog--docs#2025---februar---semantiske-farger) */
      onColoredBg?: never;
  }>`,elements:[{name:"string"},{name:"ReactReactElement",raw:`React.ReactElement<{
    id: string;
    htmlFor: string;
    /** @deprecated as part of update to Semantic Colors
     *
     * Use the \`ffe-accent-color\` class on the component or on the container of the component instead
     * [Read more in the upgrade guide](https://sparebank1.github.io/designsystem/?path=/docs/introduksjon-changelog--docs#2025---februar---semantiske-farger) */
    onColoredBg?: never;
}>`,elements:[{name:"signature",type:"object",raw:`{
    id: string;
    htmlFor: string;
    /** @deprecated as part of update to Semantic Colors
     *
     * Use the \`ffe-accent-color\` class on the component or on the container of the component instead
     * [Read more in the upgrade guide](https://sparebank1.github.io/designsystem/?path=/docs/introduksjon-changelog--docs#2025---februar---semantiske-farger) */
    onColoredBg?: never;
}`,signature:{properties:[{key:"id",value:{name:"string",required:!0}},{key:"htmlFor",value:{name:"string",required:!0}},{key:"onColoredBg",value:{name:"never",required:!1},description:`@deprecated as part of update to Semantic Colors

Use the \`ffe-accent-color\` class on the component or on the container of the component instead
[Read more in the upgrade guide](https://sparebank1.github.io/designsystem/?path=/docs/introduksjon-changelog--docs#2025---februar---semantiske-farger)`}]}}]}]},description:"Use the Label component if you need more flexibility in how the content is rendered."},onTooltipToggle:{required:!1,tsType:{name:"TooltipProps['onClick']",raw:"TooltipProps['onClick']"},description:""},tooltip:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Use the Tooltip component if you need more flexibility in how the content is rendered."},onColoredBg:{required:!1,tsType:{name:"never"},description:`@deprecated as part of update to Semantic Colors

Use the \`ffe-accent-color\` class on the component or on the container of the component instead
[Read more in the upgrade guide](https://sparebank1.github.io/designsystem/?path=/docs/introduksjon-changelog--docs#2025---februar---semantiske-farger)`}},composes:["Omit"]};export{N as I};
