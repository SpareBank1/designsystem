import{R as e,r as a}from"./index-eCxJ45ll.js";import{c as n}from"./index-DezCrw0f.js";import{C as E}from"./Collapse-CKwb5mfJ.js";const I=e.forwardRef(({isOpen:l,"aria-controls":i,"aria-label":p="Vis hjelpetekst",children:o,className:c,onClick:s,tabIndex:d,containerProps:f,onColoredBg:m},u)=>{const b=a.useId(),r=a.useId(),[t,R]=a.useState(!!l),v=y=>{R(C=>!C),s&&s(y)};return e.createElement("div",{...f,className:n("ffe-tooltip",{"ffe-tooltip--open":t,"ffe-tooltip--on-colored-bg":m})},e.createElement("button",{ref:u,"aria-expanded":t,"aria-controls":o?r:i,"aria-label":p,className:"ffe-tooltip__icon",onClick:v,type:"button",tabIndex:d,id:b},e.createElement("span",{"aria-hidden":!0},"?")),o&&e.createElement(E,{className:"ffe-tooltip__text",id:r,isOpen:t},e.createElement("span",{className:n("ffe-small-text",c),role:t?"status":"none"},o)))});I.__docgenInfo={description:"",methods:[],displayName:"Tooltip",props:{containerProps:{required:!1,tsType:{name:"ReactComponentPropsWithoutRef",raw:"React.ComponentPropsWithoutRef<'div'>",elements:[{name:"literal",value:"'div'"}]},description:""},isOpen:{required:!1,tsType:{name:"boolean"},description:""},onColoredBg:{required:!1,tsType:{name:"boolean"},description:"Adds alternative styling for better contrast on certain backgrounds"},"aria-label":{defaultValue:{value:"'Vis hjelpetekst'",computed:!1},required:!1}},composes:["Pick"]};export{I as T};