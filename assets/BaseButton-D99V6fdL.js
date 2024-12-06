import{R as t}from"./index-eCxJ45ll.js";import{f as y}from"./fixedForwardRef-Cb2PomjO.js";import{c as g}from"./index-DezCrw0f.js";function _(l,c){const{as:m="button",buttonType:s,isLoading:e,isDisabled:f,className:p,onClick:i,leftIcon:o,rightIcon:r,ariaLoadingMessage:d,children:u,...b}=l,a=["action","primary","secondary"].includes(s);return t.createElement(m,{"aria-busy":e&&a,"aria-disabled":f||e&&a,className:g("ffe-button",`ffe-button--${s}`,{"ffe-button--loading":e&&a},p),onClick:n=>{e&&a?(n.preventDefault(),n.stopPropagation()):i&&i(n)},...b,ref:c},t.createElement("span",{className:"ffe-button__label"},o&&t.cloneElement(o,{className:"ffe-button__icon ffe-button__icon--left",size:"md"}),u,r&&t.cloneElement(r,{className:"ffe-button__icon ffe-button__icon--right",size:"md"})),a&&e&&t.createElement("span",{"aria-label":d,role:"img",className:"ffe-button__spinner"}))}const T=y(_);T.__docgenInfo={description:`Internal component
@ignore`,methods:[],displayName:"BaseButton",props:{as:{required:!1,tsType:{name:"As"},description:""},ariaLoadingMessage:{required:!1,tsType:{name:"string"},description:""},buttonType:{required:!0,tsType:{name:"union",raw:"'action' | 'primary' | 'secondary' | 'shortcut' | 'task'",elements:[{name:"literal",value:"'action'"},{name:"literal",value:"'primary'"},{name:"literal",value:"'secondary'"},{name:"literal",value:"'shortcut'"},{name:"literal",value:"'task'"}]},description:""},isDisabled:{required:!1,tsType:{name:"boolean"},description:""},isLoading:{required:!1,tsType:{name:"boolean"},description:""},leftIcon:{required:!1,tsType:{name:"ReactElement"},description:""},rightIcon:{required:!1,tsType:{name:"ReactElement"},description:""}}};export{T as B};