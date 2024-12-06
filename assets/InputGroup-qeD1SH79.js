import{r as I,R as n}from"./index-eCxJ45ll.js";import{T as f}from"./Tooltip-Cv2kw5GT.js";import{L as N}from"./Label-ucRPzSmd.js";import{c as q}from"./index-DezCrw0f.js";import{E as y}from"./ErrorFieldMessage-CFe1xxra.js";const k=(o,a)=>typeof o=="function"?o(a):n.isValidElement(o)?n.cloneElement(o,a):o,C=({inputId:o,children:a,className:h,extraMargin:g=!0,description:s,label:l,fieldMessage:e,tooltip:t,onTooltipToggle:p,labelId:c,onColoredBg:r,...b})=>{const w=I.useId(),i=o??w,u=s?`${i}-description`:void 0;if(n.Children.count(a)>1)throw new Error("This element does not support more than one child. If you need more than one element inside your InputGroup, please use the function-as-a-child pattern outlined in the documentation.");const d=(()=>{var m;return typeof e=="string"?`${i}-fieldmessage`:(m=e==null?void 0:e.props)!=null&&m.id?e.props.id:e?`${i}-fieldmessage`:void 0})();if(p&&typeof t!="boolean"&&typeof t!="string")throw new Error(`Only use the "onTooltipToggle" prop if you're not sending a component of type <Tooltip /> in the "tooltip" prop. If you are, use "onClick" on that component instead`);if(t&&s)throw new Error(`Don't use both "tooltip" and "description" on an <InputGroup />, pick one of them`);const R=!!e&&(typeof e=="string"||e.type===y),E=!!e,v=d||u?[d,u].filter(Boolean).join(" "):void 0,T=k(a,{id:i,"aria-invalid":R?"true":"false","aria-describedby":v});return n.createElement("div",{className:q("ffe-input-group",{"ffe-input-group--on-colored-bg":r,"ffe-input-group--no-extra-margin":!g,"ffe-input-group--message":E},h),...b},typeof l=="string"?n.createElement(N,{htmlFor:i,id:c,onColoredBg:r},l):n.isValidElement(l)&&n.cloneElement(l,{htmlFor:i,id:c,onColoredBg:r}),typeof t=="string"&&n.createElement(f,{onClick:p,onColoredBg:r},t),t===!0&&n.createElement(f,{onClick:p,onColoredBg:r}),n.isValidElement(t)&&t,s&&n.createElement("div",{className:"ffe-small-text ffe-input-group__description",id:u},s),T,typeof e=="string"&&n.createElement(y,{as:"p",id:d,onColoredBg:r},e),n.isValidElement(e)&&n.cloneElement(e,{id:d}))};C.__docgenInfo={description:"",methods:[],displayName:"InputGroup",props:{inputId:{required:!1,tsType:{name:"string"},description:"The id that will be used on the input child if you don't want a generated one"},labelId:{required:!1,tsType:{name:"string"},description:"The id used on the label in this component. Could be necessary if your component needs a aria-labelledby."},children:{required:!0,tsType:{name:"union",raw:`| NonNullable<React.ReactNode>
| ((extraProps: ChildrenExtraProps) => React.ReactNode)`,elements:[{name:"NonNullable",elements:[{name:"ReactReactNode",raw:"React.ReactNode"}],raw:"NonNullable<React.ReactNode>"},{name:"unknown"}]},description:"Unless you only have one element in your `InputGroup` you will have to use the function-as-a-child pattern."},extraMargin:{required:!1,tsType:{name:"boolean"},description:"Reserve space for showing `fieldMessage`s so content below don't move\n vertically if an errormessage shows up. Note that this will only reserve\n space for one line of content, so keep messages short.",defaultValue:{value:"true",computed:!1}},fieldMessage:{required:!1,tsType:{name:"union",raw:`| string
| React.ReactElement<{ id: string; onColoredBg?: boolean }>
| null`,elements:[{name:"string"},{name:"ReactReactElement",raw:"React.ReactElement<{ id: string; onColoredBg?: boolean }>",elements:[{name:"signature",type:"object",raw:"{ id: string; onColoredBg?: boolean }",signature:{properties:[{key:"id",value:{name:"string",required:!0}},{key:"onColoredBg",value:{name:"boolean",required:!1}}]}}]},{name:"null"}]},description:"Use the ErrorFieldMessage component if you need more flexibility in how the content is rendered."},description:{required:!1,tsType:{name:"string"},description:"To just render a static, always visible tooltip, use this."},label:{required:!1,tsType:{name:"union",raw:`| string
| React.ReactElement<{
      id: string;
      htmlFor: string;
      onColoredBg?: boolean;
  }>`,elements:[{name:"string"},{name:"ReactReactElement",raw:`React.ReactElement<{
    id: string;
    htmlFor: string;
    onColoredBg?: boolean;
}>`,elements:[{name:"signature",type:"object",raw:`{
    id: string;
    htmlFor: string;
    onColoredBg?: boolean;
}`,signature:{properties:[{key:"id",value:{name:"string",required:!0}},{key:"htmlFor",value:{name:"string",required:!0}},{key:"onColoredBg",value:{name:"boolean",required:!1}}]}}]}]},description:"Use the Label component if you need more flexibility in how the content is rendered."},onTooltipToggle:{required:!1,tsType:{name:"TooltipProps['onClick']",raw:"TooltipProps['onClick']"},description:""},tooltip:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Use the Tooltip component if you need more flexibility in how the content is rendered."},onColoredBg:{required:!1,tsType:{name:"boolean"},description:"Adds alternative styling for better contrast on certain backgrounds"}},composes:["Omit"]};export{C as I};