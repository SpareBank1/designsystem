import{R as l}from"./index-eCxJ45ll.js";import{c,d as b,e as h,a as p,H as g,b as y}from"./Heading-Bi1Q8xC8.js";import{c as m}from"./index-DezCrw0f.js";import{S as v}from"./StrongText-DYs74pMv.js";import{L as O}from"./LinkText-DVUMeTIv.js";import{P as E}from"./Paragraph-Qjq98ToE.js";var o=function(){return o=Object.assign||function(e){for(var r,n=1,t=arguments.length;n<t;n++){r=arguments[n];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e},o.apply(this,arguments)},N=function(e,r){var n={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&r.indexOf(t)<0&&(n[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(e);a<t.length;a++)r.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(n[t[a]]=e[t[a]]);return n};function d(e){var r=e.children,n=e.className,t=N(e,["children","className"]);return l.createElement("em",o({className:m("ffe-em-text",n)},t),r)}d.__docgenInfo={description:"",methods:[],displayName:"EmphasizedText"};var s=function(){return s=Object.assign||function(e){for(var r,n=1,t=arguments.length;n<t;n++){r=arguments[n];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e},s.apply(this,arguments)},_=function(e,r){var n={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&r.indexOf(t)<0&&(n[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(e);a<t.length;a++)r.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(n[t[a]]=e[t[a]]);return n},u=function(e){var r=e.className,n=e.condensed,t=_(e,["className","condensed"]);return l.createElement("ul",s({className:m("ffe-bullet-list",{"ffe-bullet-list--condensed":n},r)},t))};u.__docgenInfo={description:"",methods:[],displayName:"BulletList"};var i=function(){return i=Object.assign||function(e){for(var r,n=1,t=arguments.length;n<t;n++){r=arguments[n];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e},i.apply(this,arguments)},j=function(e,r){var n={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&r.indexOf(t)<0&&(n[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(e);a<t.length;a++)r.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(n[t[a]]=e[t[a]]);return n},f=function(e){var r=e.className,n=j(e,["className"]);return l.createElement("li",i({className:m("ffe-bullet-list__item",r)},n))};f.__docgenInfo={description:"",methods:[],displayName:"BulletListItem"};const P={h1:e=>l.createElement(y,{...e,className:"sb-unstyled"}),h2:e=>l.createElement(g,{...e,className:"sb-unstyled"}),h3:e=>l.createElement(c,{...e,className:"sb-unstyled"}),h4:e=>l.createElement(p,{...e,className:"sb-unstyled"}),h5:e=>l.createElement(h,{...e,className:"sb-unstyled"}),h6:e=>l.createElement(b,{...e,className:"sb-unstyled"}),p:e=>l.createElement(E,{...e,className:"sb-unstyled"}),ul:e=>l.createElement(u,{...e,className:"sb-unstyled"}),li:e=>l.createElement(f,{...e,className:"sb-unstyled"}),a:e=>l.createElement(O,{...e,className:"sb-unstyled"}),strong:e=>l.createElement(v,{...e,className:"sb-unstyled"}),em:e=>l.createElement(d,{...e,className:"sb-unstyled"})},H={parameters:{controls:{matchers:{color:/(background|color)$/i,date:/Date$/i}},viewMode:"docs",docs:{components:P},options:{storySort:{method:"alphabetical",order:["Introduksjon","Design","Utils","Komponenter","Sider"]}}},decorators:[(e,r)=>{const{scheme:n,accent:t}=r.globals;return l.createElement("div",{className:"ffe-body-text"},(n==="both"||n==="light")&&(t==="both"||t==="default")&&l.createElement("div",{className:"ffe-docs-content-container "},l.createElement(c,null,"Light mode"),l.createElement(e,null)),(n==="both"||n==="light")&&(t==="both"||t==="accent")&&l.createElement("div",{className:"ffe-docs-content-container ffe-accent-mode"},l.createElement(c,null,"Light mode - Accent"),l.createElement(e,null)),(n==="both"||n==="dark")&&(t==="both"||t==="default")&&l.createElement("div",{className:"ffe-docs-content-container dark-mode regard-color-scheme-preference"},l.createElement(c,null,"Dark mode"),l.createElement(e,null)),(n==="both"||n==="dark")&&(t==="both"||t==="accent")&&l.createElement("div",{className:"ffe-docs-content-container dark-mode regard-color-scheme-preference ffe-accent-mode"},l.createElement(c,null,"Dark mode - Accent"),l.createElement(e,null)))}],globalTypes:{scheme:{name:"Scheme",description:"Select light or dark theme",table:{defaultValue:{detail:"both"}},defaultValue:"both",toolbar:{items:[{icon:"sun",value:"light",title:"Light"},{icon:"moon",value:"dark",title:"Dark"},{icon:"stacked",value:"both",title:"Both modes"}],dynamicTitle:!0}},accent:{name:"Accent",description:"Select accent [WIP]",table:{defaultValue:{detail:"both"}},defaultValue:"both",toolbar:{items:[{icon:"lightningoff",value:"default",title:"Default"},{icon:"lightning",value:"accent",title:"Accent"},{icon:"stacked",value:"both",title:"Both accents"}],dynamicTitle:!0}}}};export{H as default};
