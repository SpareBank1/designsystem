import{R as a}from"./index-eCxJ45ll.js";import{c as i}from"./index-DezCrw0f.js";import{b as U}from"./Heading-Bi1Q8xC8.js";import{P as X}from"./Paragraph-Qjq98ToE.js";import{P as Y}from"./PrimaryButton--r0vfcBH.js";function l({position:e,flip:t,bgColor:r="default",children:c,className:n,...o}){return a.createElement("div",{className:i("ffe-wave",n,{"ffe-accent-mode":t},{"ffe-default-mode":!t},{[`ffe-wave--bg-${r}`]:r&&r!=="default"&&!t})},c?a.createElement("div",{className:"ffe-wave__content"},c):null,a.createElement("div",{className:i("ffe-wave__wave",{"ffe-accent-mode":!t},{"ffe-default-mode":t},{[`ffe-wave__wave--bg-${r}`]:r&&r!=="default"&&t}),"aria-hidden":"true",style:{maskPosition:e,WebkitMaskPosition:e},...o}))}l.__docgenInfo={description:"",methods:[],displayName:"Wave",props:{position:{required:!1,tsType:{name:"string"},description:"Sets the mask-position property, setting a px/rem value will move the starting position of the wave"},flip:{required:!1,tsType:{name:"boolean"},description:"Rotate the wave 180 degrees :"},bgColor:{required:!1,tsType:{name:"union",raw:"'default' | 'subtle'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'subtle'"}]},description:"Set the background color of the wave container.",defaultValue:{value:"'default'",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"Adds additional class"},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};var D=function(){return D=Object.assign||function(e){for(var t,r=1,c=arguments.length;r<c;r++){t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},D.apply(this,arguments)},z=function(e,t){var r={};for(var c in e)Object.prototype.hasOwnProperty.call(e,c)&&t.indexOf(c)<0&&(r[c]=e[c]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,c=Object.getOwnPropertySymbols(e);n<c.length;n++)t.indexOf(c[n])<0&&Object.prototype.propertyIsEnumerable.call(e,c[n])&&(r[c[n]]=e[c[n]]);return r},M=function(e,t){var r;return t===void 0?null:typeof t=="string"?"ffe-grid--gap-".concat(e,"-").concat(t):i((r={},r["ffe-grid--".concat(e,"-gap-").concat(t.gap)]=t.gap,r))},b=function(e){var t,r=e.children,c=e.className,n=e.gap,o=e.sm,d=e.md,m=e.lg,s=e.as,f=s===void 0?"div":s,p=z(e,["children","className","gap","sm","md","lg","as"]);return a.createElement(f,D({className:i(c,"ffe-grid",(t={},t["ffe-grid--gap-".concat(n)]=n,t),M("lg",m),M("md",d),M("sm",o))},p),r)};b.__docgenInfo={description:"",methods:[],displayName:"Grid"};var x=function(){return x=Object.assign||function(e){for(var t,r=1,c=arguments.length;r<c;r++){t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},x.apply(this,arguments)},e1=function(e,t){var r={};for(var c in e)Object.prototype.hasOwnProperty.call(e,c)&&t.indexOf(c)<0&&(r[c]=e[c]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,c=Object.getOwnPropertySymbols(e);n<c.length;n++)t.indexOf(c[n])<0&&Object.prototype.propertyIsEnumerable.call(e,c[n])&&(r[c[n]]=e[c[n]]);return r},j=function(e,t){var r;return t===void 0?null:typeof t=="string"?"ffe-grid__row--".concat(e,"-").concat(t):i((r={},r["ffe-grid__row--".concat(e,"-margin-").concat(t.margin)]=t.margin,r["ffe-grid__row--".concat(e,"-padding-").concat(t.padding)]=t.padding,r))},w=function(e){var t,r,c,n=e.bgColor,o=e.className,d=e.children,m=e.as,s=m===void 0?"div":m,f=e.sm,p=e.md,O=e.lg,y=e.padding,Z=e.margin,J=e1(e,["bgColor","className","children","as","sm","md","lg","padding","margin"]),P=!!n,Q=P?a.createElement("div",{className:"ffe-grid__row-wrapper"},d):d;return a.createElement(s,x({className:i(o,j("lg",O),j("md",p),j("sm",f),"ffe-grid__row",(t={},t["ffe-grid__row--bg-".concat(n)]=P,t),(r={},r["ffe-grid__row--padding-".concat(y)]=y,r),(c={},c["ffe-grid__row--margin-".concat(Z)]=Z,c))},J),Q)};w.__docgenInfo={description:"",methods:[],displayName:"GridRow"};var S=function(){return S=Object.assign||function(e){for(var t,r=1,c=arguments.length;r<c;r++){t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},S.apply(this,arguments)},a1=function(e,t){var r={};for(var c in e)Object.prototype.hasOwnProperty.call(e,c)&&t.indexOf(c)<0&&(r[c]=e[c]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,c=Object.getOwnPropertySymbols(e);n<c.length;n++)t.indexOf(c[n])<0&&Object.prototype.propertyIsEnumerable.call(e,c[n])&&(r[c[n]]=e[c[n]]);return r},N=function(e,t){var r;return t===void 0?null:typeof t=="number"||typeof t=="string"?"ffe-grid__col--".concat(e,"-").concat(t):i((r={},r["ffe-grid__col--".concat(e,"-").concat(t.cols)]=t.cols||t.cols===0,r["ffe-grid__col--".concat(e,"-offset-").concat(t.offset)]=t.offset||t.offset===0,r))},t1=function(e){return e?"ffe-grid__col--center-text":null},r1=function(e){return e?"ffe-grid__col--center":null},c1=function(e){return e?"ffe-grid__col--bg-".concat(e):null},u=function(e){var t=e.bgColor,r=e.className,c=e.as,n=c===void 0?"div":c,o=e.centerText,d=e.center,m=e.children,s=e.sm,f=e.md,p=e.lg,O=a1(e,["bgColor","className","as","centerText","center","children","sm","md","lg"]);return a.createElement(n,S({className:["ffe-grid__col",r,N("lg",p),N("md",f),N("sm",!s&&!p&&!f?12:s),t1(o),r1(d),c1(t)].filter(function(y){return y}).join(" ")},O),m)};u.__docgenInfo={description:"",methods:[],displayName:"GridCol"};const K=()=>a.createElement(a.Fragment,null,a.createElement(b,null,a.createElement(w,{padding:"sm"},a.createElement(u,{sm:12,md:{cols:8,offset:2},lg:{cols:7,offset:3}},a.createElement(U,null,"Hei, velkommen til din pensjonsoversikt"),a.createElement(X,{lead:!0},"Her finner du oversikt over din pensjon i SpareBank 1"))),a.createElement(l,{flip:!0})),a.createElement(b,null,a.createElement(w,null,a.createElement(u,{sm:{cols:4,offset:2}},a.createElement("div",null,a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 144 195"},a.createElement("g",null,a.createElement("path",{fill:"#002776",d:"M144 3.46h-34.85v178.49H144V3.45Z"}),a.createElement("path",{fill:"#005AA4",d:"M101.8 68.75H66.95v113.16h34.85V68.75Z"}),a.createElement("path",{fill:"#002776",d:"M110.44.57c1.47 0 1.75-.57 5.85-.57 1.54 0 3.28 2 4.38 2.68 0 0-7.59-1.1-10.23-2.11Z"}),a.createElement("path",{fill:"#F8E9DD",d:"M96.04 11.67C100.06 8.17 106.39.4 110.77.4c3.53 0 8.68 1.95 11.48 2.52v.16c0 1.26-1.17 1.63-2.72 1.63-2.27 0-5.52-.86-7.22-.86-.32 0-.57.04-.77.08-1.1.33-1.58 1.47-1.62 2.6-.04 3.38 5.35 3.01 5.35 5.86 0 .24-.12.61-.36.94-.37.52-1.1.57-1.54.16-1.67-1.55-2.97-1.87-4.14-1.87-1.02 0-2 .24-3.05.24-.6 0-1.3-.08-2.03-.36-2.3 2.03-4.13 5.4-6.28 7.03"}),a.createElement("path",{fill:"#002776",d:"m97.95 18.74-.25-.32c1.1-.86 2.11-2.16 3.17-3.54a29.14 29.14 0 0 1 3.08-3.54l.08-.08.13.04a5.3 5.3 0 0 0 1.94.33c.53 0 1.06-.08 1.55-.12.48-.08.97-.13 1.5-.13 1.01 0 2.39.2 4.26 1.96.16.16.4.24.65.2a.79.79 0 0 0 .56-.37c.2-.32.37-.6.37-.85 0-1.22-1.18-1.83-2.4-2.44-1.42-.73-3-1.5-2.96-3.42.04-1.42.7-2.48 1.79-2.8.2-.08.48-.08.85-.08.81 0 1.95.2 3.17.36 1.42.25 2.88.5 4.05.5 2.28 0 2.52-.82 2.52-1.43a74.1 74.1 0 0 1-3.09-.81c-2.6-.74-5.8-1.67-8.2-1.67-3.16 0-7.58 4.39-11.1 7.89a62.2 62.2 0 0 1-3.5 3.33l-.28-.32c1.01-.9 2.19-2.08 3.45-3.3 3.77-3.74 8.07-8 11.4-8 2.43 0 5.72.93 8.32 1.7 1.17.32 2.3.65 3.2.85l.16.04v.37c0 1.83-2.19 1.83-2.92 1.83a26 26 0 0 1-4.1-.49c-1.17-.2-2.3-.36-3.08-.36-.32 0-.57.04-.73.08-.9.24-1.46 1.18-1.46 2.4-.04 1.62 1.3 2.31 2.72 3.05 1.3.65 2.64 1.34 2.64 2.8 0 .37-.25.77-.41 1.06-.2.28-.53.49-.9.53a1.2 1.2 0 0 1-.97-.33c-1.78-1.63-3-1.83-3.97-1.83-.49 0-.98.08-1.46.12-.53.09-1.06.13-1.63.13-.69 0-1.34-.13-1.98-.33-1.06.94-2.03 2.2-2.97 3.38-1.05 1.42-2.07 2.76-3.2 3.61Z"}),a.createElement("path",{fill:"#EE8D9C",d:"M43.21 53.06c3.82 7.89 14.4 5.7 14.4 5.7 22.2-3.34 33.4-16.19 47.2-30.95-1.3-6.91-3.62-12.77-6.25-19.31-8.85 8.37-24.39 24.4-47.4 25.5 0 0 7.8 9.34 3.9 13.9-3.94 4.6-11.85 5.16-11.85 5.16Z"}),a.createElement("path",{fill:"#002776",d:"M70.23 79.33c2.56 14.14 3.66 11.66 3.66 60.86-6.37 11.1-12.95 23.87-22.52 32.49-6.09-2.8-13.68-9.47-16.72-14.84 0 0 13.84-22.73 14.24-22.73.4 0-4.62-40.82-4.62-40.82l25.96-14.96Z"}),a.createElement("path",{fill:"#002776",d:"M43 159.7c-4.09 4.07-7.58 10.42-12.77 13.18.36.73 6.7 9.43 28.48 10.13-3.9-5.05-13.02-6.02-13.02-11.75 0-1.22.4-2.65 1.34-4.4"}),a.createElement("path",{fill:"#002776",d:"M28.4 80.87c-2.23 14.52-2.63 28.83-2.63 43.26 0 3.7.04 7.36.04 11.06a389.67 389.67 0 0 0-6.25 40.38c3.49 1.87 8.27 2.6 12.78 2.6 5.92 0 9.9-.98 13.43-2.97 9.66-24.84 1.3-34.28 13.63-84.45"}),a.createElement("path",{fill:"#002776",d:"M27.02 169.34c-.12 5.53-1.82 14.68-3.6 21.88 7.94 1.34 15.2 3.74 22.88 3.74 2.84 0 5.68-.33 8.68-1.14-5.84-3.09-10.19-7.28-16.72-9.55-3.37-4.15-2.55-6.75-2.72-12.24"}),a.createElement("path",{fill:"#EE8D9C",d:"M37.61 36.63a22.22 22.22 0 0 0 8.56 2.04c2.68 0 5.4-1.02 5.4-3.34 0-.44-.12-.9-.36-1.34 16.27 2.07 29.94 34.15 36.6 55.95a115.63 115.63 0 0 1-57.38 14.84c-4.7 0-9.37-.29-14-.86 10.92-51.51 12.82-63.18 21.18-67.29Z"}),a.createElement("path",{fill:"#F8E9DD",d:"M50.52 42.37a2.9 2.9 0 0 1 2.39-1.43c1.78-.04 3.65 1.47 3.7 3.13.03 1.3-1.27 2.77-2.97 2.81-1.79.04-3.53-1.34-3.57-2.97a2.6 2.6 0 0 1 .45-1.54ZM59.12 55.95a2.8 2.8 0 0 1 2.4-1.35c1.9-.04 3.97 1.63 4.05 3.54.04 1.75-1.9 3.62-3.77 3.66a3.36 3.36 0 0 1-3.41-3.33c-.08-.82.16-1.67.73-2.52ZM64.4 73.27a3.81 3.81 0 0 1 2.39-.94c2.23-.08 4.13 2.04 4.22 4.15.08 2.36-2.28 3.86-4.06 3.94-2.23.08-3.98-1.95-4.06-4.02 0-1.14.45-2.28 1.5-3.13Z"}),a.createElement("path",{fill:"#EE8D9C",d:"m38.38 44.56-8.11 39.12C12.42 82.38-.81 72.33.04 60.87.81 50.34 26.7 40.29 37.61 36.63l.77 7.93Z"}),a.createElement("path",{fill:"#002776",d:"M32.34 65.58c2.35 1.14 7.34-.12 7.34 2.52 0 1.14-1.13 1.43-2.27 1.47"}),a.createElement("path",{fill:"#F8E9DD",d:"M20.57 77.46a6.2 6.2 0 0 0 2.84.65c1.67 0 2.6-.53 3.25-1.06 1.5 1.06 4.01 2.64 4.66 2.64.61 0 1.22-.4 2.2-1.26.8.37 1.5.77 2.23.77s1.7-.6 1.7-1.26c0-.24-.2-.65-.57-1.1.37.13.85.29 1.06.29 1.01 0 2.31-.61 2.31-1.42 0-.29-.32-.82-.81-1.39.24-.44.45-1.05.45-1.46 0-3.3-7.67-8.5-10.84-8.5-4.87 0-8.68 6.87-8.68 11.75.08.45.12.9.2 1.35Z"}),a.createElement("path",{fill:"#002776",d:"M39.48 74.77c.16.2.32.37.4.57.09.12.17.29.13.37 0 .12-.04.24-.12.36-.17.2-.45.37-.74.5-.28.11-.6.2-.93.2-.12 0-.2.12-.2.2 0 .12.12.2.24.2.37 0 .73-.08 1.1-.2.36-.12.69-.29.97-.61.16-.17.25-.4.25-.65 0-.29-.09-.5-.17-.65-.12-.25-.28-.5-.4-.7l-.12-.16c-.74-.81-1.5-1.58-2.28-2.31l-.4-.37-.29-.2a51.3 51.3 0 0 0-2.67-2.08c-.5-.32-.98-.69-1.55-.93-.12-.04-.24 0-.28.12-.04.12.04.2.12.24.49.25.98.61 1.46.94l1.1.85c.48.4.97.86 1.46 1.3l.24.25.4.36c.78.7 1.59 1.43 2.16 2.28l.12.12ZM31.49 79.37h-.25c-.08-.04-.2-.04-.28-.09-.2-.08-.4-.16-.61-.28-.6-.28-1.18-.65-1.74-.98-.53-.32-1.1-.69-1.63-1.05-.53-.37-1.05-.73-1.5-1.18-.16-.16-.32-.2-.4-.16-.09.04-.05.28.12.44.48.45 1.01.86 1.54 1.26.53.41 1.05.78 1.62 1.1.57.37 1.14.73 1.75 1.06.2.12.44.2.65.32l.36.13c.16.04.33.04.45.04s.28-.04.4-.09c.57-.2.94-.56 1.34-.89l.29-.24c.04 0 .04-.04.08-.04l.6.28c.45.2.98.4 1.55.45.6 0 1.1-.25 1.54-.61.16-.12.28-.29.36-.49.05-.08.09-.2.09-.33 0-.12 0-.28-.04-.36-.09-.29-.25-.45-.37-.65a19.72 19.72 0 0 0-2.56-2.64c-.65-.57-1.3-1.18-1.94-1.71-.86-.7-1.7-1.43-2.64-2.08-.2-.12-.4-.16-.45-.04-.04.08.04.25.2.41.9.65 1.75 1.38 2.56 2.07.65.57 1.3 1.14 1.95 1.75.85.81 1.74 1.7 2.4 2.64.12.17.2.33.24.5.08.16-.04.36-.25.56a1.7 1.7 0 0 1-1.13.49c-.4 0-.85-.16-1.3-.37l-.77-.36c-.2-.2-.37.08-.53.2l-.28.24c-.37.29-.77.61-1.18.7h-.24Z"}),a.createElement("path",{fill:"#002776",d:"m33.23 78.63.12.09c.08.04.12.04.16.08l.25.12c.24.08.49.2.73.28.24.08.49.17.73.2.24.05.53.09.81.05.12-.04.16-.17.12-.25-.04-.08-.12-.16-.2-.16-.4.04-.9-.16-1.34-.32-.24-.09-.45-.2-.69-.33l-.24-.12c-.04-.04-.08-.04-.08-.04l-.13-.08-.08-.08c-.69-.37-1.3-.78-1.94-1.22l-.33-.2-.2-.13c-.4-.24-.81-.45-1.22-.7-.28-.15-.57-.36-.85-.52-.37-.2-.73-.45-1.1-.65-.08-.04-.16 0-.24.08-.04.08-.04.2.04.24.32.25.69.5 1.06.7.28.16.56.36.8.52.37.25.78.53 1.14.82l.2.16.33.2c.65.37 1.3.78 1.9 1.26h.25Z"}),a.createElement("path",{fill:"#F8E9DD",d:"M49.34 12.69c6 1.62 8.07 2.44 7.95 3.7-.04.65-.77 1.42-2.47 2.35-.73.41-1.38 1.02-2.2 1.35"}),a.createElement("path",{fill:"#002776",d:"M56.28 17.36a8.64 8.64 0 0 1-1.62 1.18c-.7.4-1.26.94-1.91 1.26-.12.04-.17.16-.12.29.04.08.16.16.32.08.73-.33 1.34-.86 1.99-1.18.36-.2.73-.4 1.05-.61.25-.16.49-.33.73-.53l.17-.12c.2-.25.4-.5.56-.82.17-.32.2-.73.04-1.1-.16-.36-.4-.56-.64-.77-.25-.2-.53-.36-.82-.48-.2-.09-.36-.2-.56-.29l-.37-.12c-.69-.24-1.38-.45-2.07-.65l-1.5-.45c-.6-.16-1.26-.36-1.9-.49-.13-.04-.25.04-.3.13-.03.08.05.2.17.24.61.2 1.26.37 1.87.57.48.16.97.28 1.46.45.69.24 1.34.44 1.99.73.12.04.24.12.32.16l.53.24c.49.25 1.01.53 1.22.94.16.4-.13.9-.53 1.22l-.08.12Z"}),a.createElement("path",{fill:"#F8E9DD",d:"M49.99 37.16a4.83 4.83 0 0 1-.33-2.56c.61-3.7 4.71-4.76 5.6-10.08 1.22-7.4-4.14-12.9-10.3-13.95-3.9-.65-8 .57-10.6 4.4 0 0-4.3 7.03-.97 12.8.81 3.25 6.86 4.47 7.91 7.93"}),a.createElement("path",{fill:"#002776",d:"M37.78 11.43c-.74.4-1.38.89-2 1.46-.6.57-1.13 1.22-1.62 1.91-.44.73-.77 1.46-1.1 2.24-.15.36-.28.77-.44 1.18l-.36 1.17a13.14 13.14 0 0 0-.37 4.96c.04.45.16.86.25 1.27.12.4.28.8.44 1.21l.53 1.06.2.53c.08.2.2.37.33.53l.24.37c.08.12.2.24.28.32a17.25 17.25 0 0 0 2.03 1.59c.9.6 1.79 1.13 2.6 1.74.81.61 1.62 1.3 2.1 2.2.13.33.33.57.46.53.12-.04.08-.37-.09-.73a7.75 7.75 0 0 0-2.19-2.4c-.85-.65-1.74-1.22-2.6-1.83-.44-.33-.89-.65-1.3-.98-.2-.16-.36-.36-.56-.57l-.49-.6c-.08-.17-.2-.3-.24-.5l-.08-.24-.04-.12-.08.04v-.08s0-.04-.04-.04l-.49-1.02-.37-1.14a12.73 12.73 0 0 1 .13-5.93 17.52 17.52 0 0 1 1.7-4.43c.45-.66.97-1.27 1.54-1.8a8.96 8.96 0 0 1 1.9-1.34c.5-.24.98-.48 1.47-.65a10.57 10.57 0 0 1 4.46-.57 12.63 12.63 0 0 1 8.16 4.1 11.47 11.47 0 0 1 3 7.78c.04.48-.04.97-.08 1.42-.04.49-.16.94-.24 1.42-.25.94-.61 1.83-1.14 2.65-.73 1.18-1.74 2.2-2.64 3.29a7 7 0 0 0-1.38 2.4c-.12.45-.24.9-.24 1.38 0 .49.04.94.2 1.42.12.37.33.61.4.57.13-.04.09-.32 0-.69-.11-.4-.15-.85-.15-1.3 0-.45.12-.85.24-1.26.28-.81.77-1.54 1.3-2.24.9-1.1 1.9-2.07 2.68-3.33.52-.85.97-1.79 1.25-2.76.13-.5.25-.98.29-1.5a9.4 9.4 0 0 0 .12-1.51c.08-1.26-.12-2.57-.49-3.74a11.2 11.2 0 0 0-2.55-4.48 14.05 14.05 0 0 0-4.1-3 13.46 13.46 0 0 0-4.55-1.23 11.83 11.83 0 0 0-4.7.57c-.57.17-1.1.41-1.58.7Z"}),a.createElement("path",{fill:"#F8E9DD",d:"M32.34 17.4a6.08 6.08 0 0 0-2.48 3.9c-.4 2.32 1.26 5.82 2.68 6.06.9.17 1.87-.85 2.11-1.66.04 0 4.63-4.56 4.63-4.6.28-1.79-2.28-3.54-4.18-3.86a5.89 5.89 0 0 0-2.23.04"}),a.createElement("path",{fill:"#F8E9DD",d:"M33.68 16.83c-.85 1.91-3.78.94-4.38 4.48-.53 3.17 2.19 6.5 4.99 7.52.04-.08.04-.08.12-.12-.94-1.88-4.38-6.02-3.9-8.87.25-1.58 2.03-2.64 3.05-2.44.08 0 .12.04.2.04.73 2.44-.65 8.95.81 9.2.73.11 1.14-.82 1.3-2 .77-4.51-.65-6.02-.85-7.4-.04-.37.28-.65.6-.57.53.12.98.49 1.22 1.02.65 1.54 1.18 3.13.94 4.51-.2 1.22-.98 2.28-2.68 3.05"}),a.createElement("path",{fill:"#002776",d:"M36.27 24.27c.17-1.14.2-2.31.04-3.5-.12-.85-.36-1.66-.64-2.43a6.18 6.18 0 0 1-.37-1.14c-.04-.12.04-.2.12-.25.08-.04.16-.04.37 0 .32.13.57.33.77.61.08.13.16.33.24.5l.2.52c.29.73.5 1.46.61 2.2.12.73.04 1.5-.24 2.15a3.74 3.74 0 0 1-1.46 1.63c-.45.28-.81.53-.77.65.04.08.48 0 .97-.29.7-.4 1.3-1.01 1.67-1.79.36-.77.4-1.62.28-2.43a10.8 10.8 0 0 0-.6-2.32l-.21-.57-.12-.29a.66.66 0 0 0-.17-.28c-.24-.37-.6-.7-1.05-.81l-.16-.04c-.08 0-.17-.05-.25-.05-.16 0-.28.09-.4.17-.12.08-.2.2-.29.36-.04.13-.04.33-.04.45.08.45.25.81.37 1.22.28.77.48 1.5.6 2.28.17 1.1.09 2.23-.07 3.33l-.13.77a2.7 2.7 0 0 1-.24.82.93.93 0 0 1-.4.53c-.09.04-.17.04-.25.04-.04 0-.12-.04-.16-.13-.12-.16-.2-.44-.24-.73a17.17 17.17 0 0 1 0-3.53c.04-1.22.12-2.4 0-3.66 0-.17-.05-.33-.09-.45 0-.08-.04-.12-.04-.25L34 17.2l-.36-.08H33.35c-.16 0-.36.04-.52.04-.65.16-1.22.49-1.67.93-.32.33-.57.7-.77 1.1-.2.4-.2.9-.2 1.34l.04.4c0 .13.04.3.08.42.04.28.12.52.2.8a19.04 19.04 0 0 0 2.03 3.95l1.18 1.83.12.2.04.09c0 .04.04.04 0 .08 0 .04-.04 0-.08 0l-.08-.04c-.04 0-.04-.04-.08-.04l-.13-.08a8.06 8.06 0 0 1-3.8-4.6 5.89 5.89 0 0 1-.21-1.87c.04-.6.2-1.26.53-1.79a2.9 2.9 0 0 1 1.37-1.22c.57-.28 1.26-.49 1.83-.97.24-.2.37-.41.45-.61.04-.2.08-.29 0-.33-.12-.04-.33.29-.73.61-.49.37-1.14.57-1.75.9a3.7 3.7 0 0 0-1.58 1.38 5.36 5.36 0 0 0-.37 4.02 8.7 8.7 0 0 0 4.02 4.88c.2.08.57.33.7.33l.28.04.16.04h.04s0-.04.04-.04l.04-.08.04-.08c.04-.04 0-.04 0-.09v-.24c0-.04 0-.08-.04-.16l-.2-.37-.2-.32-1.18-1.87a18 18 0 0 1-1.91-3.87c-.08-.24-.12-.48-.16-.73 0-.12-.04-.24-.04-.36v-.37a2.5 2.5 0 0 1 .77-2c.36-.36.85-.68 1.38-.8.12-.05.24-.05.36-.05H33.56v.04l.04.17c.04.12.04.28.04.4.12 1.14.04 2.36 0 3.58-.04.61-.04 1.22-.08 1.83 0 .61 0 1.22.08 1.87.04.33.12.65.32.98.12.16.33.32.57.36.2.04.45 0 .6-.12.37-.2.54-.57.7-.85.12-.33.2-.61.28-.94.08-.04.12-.28.16-.57Z"}),a.createElement("path",{fill:"#F8E9DD",d:"M36.6 18.62c1.95.77 3.12 2.36 3.73 4.35.24-.53.49-1.38.65-2.2.37-2.07-.12-4.67-1.66-4.95-.94-.17-1.59 1.22-1.79 2.35-.08.53.49.94.93.65 2.2-1.17 6.7-5.52 7.23-8.78.16-.85-.04-1.54-.81-1.66-2.68-.45-6.86 5.04-7.3 7.88-.09.45-.09.9 0 1.26 3.16-.16 6.36-7.56 6.77-10.24.2-1.18.16-2.6-.98-2.8-4.34-.7-9.33 5.8-9.98 9.63-.28 1.7-.08 3.66 1.18 3.86 1.5.25 3.61-1.83 4.5-3.09-.6-.9-1.98-1.5-3.45-1.75-1.82-.32-5.19-.16-5.47 1.67-.37 2.28 1.58 3.62 3.9 3.98.07 0 .11.04.2.04 0 0 1.21.09 1.86-.2"}),a.createElement("path",{fill:"#002776",d:"M34.08 11.22c-.89 1.75-1.46 3.78-.85 5.82.12.36.33.73.7.97.36.25.8.33 1.17.29a4.74 4.74 0 0 0 1.99-.94 10.57 10.57 0 0 0 1.86-1.87l.08-.12.04-.04.08-.08.13-.17.08-.08c.04-.04.04-.04 0-.08a1.1 1.1 0 0 0-.29-.32c-.08-.08-.12-.17-.2-.2a5.44 5.44 0 0 0-2.31-1.18c-.65-.17-1.34-.29-1.99-.33-.69-.04-1.34 0-2.03.08-.65.12-1.34.28-1.95.73-.28.2-.52.53-.65.9l-.08.28.04.16c-.04.17 0 .37 0 .53.04.7.37 1.38.86 1.91.48.5 1.1.86 1.7 1.1.32.12.65.25.97.33l.49.12c.08 0 .16.04.24.04h.29c.48 0 .9-.04 1.22-.12.32-.08.44-.25.44-.29-.04-.04-.2 0-.49 0-.28 0-.69.04-1.13 0a5.53 5.53 0 0 1-3.41-1.46 2.48 2.48 0 0 1-.69-1.67v-.45c0-.16.04-.28.08-.44.12-.25.29-.5.53-.65a4.95 4.95 0 0 1 1.74-.61 10.03 10.03 0 0 1 3.82.28 5.08 5.08 0 0 1 2.07 1.14l.08.08.04.04c0 .04.04.04.04.08l-.04.08-.2.09c-.13.12-.2.24-.33.36-.44.49-.93.98-1.46 1.34-.53.41-1.14.74-1.7.82a1 1 0 0 1-.77-.17c-.2-.16-.37-.4-.5-.69a5.58 5.58 0 0 1-.07-2.72c.16-.9.53-1.79.97-2.6.2-.41.4-.78.65-1.14a15.22 15.22 0 0 1 3.98-4.4 6.6 6.6 0 0 1 2.67-1.17c.5-.08.98-.08 1.42 0 .41.08.65.4.74.85.08.45.08.94 0 1.42-.09.5-.2.98-.33 1.43a23.74 23.74 0 0 1-2.48 5.45 10 10 0 0 1-1.82 2.27c-.24.25-.49.45-.77.61l-.4.25-.21.08c-.04 0-.08.04-.12.04l-.08.04h-.08v-.28c0-.33.04-.66.16-.94.2-.81.6-1.63 1.05-2.4.61-1.06 1.34-2.03 2.15-2.89.41-.44.86-.85 1.34-1.18a5 5 0 0 1 1.54-.77c.29-.08.53-.08.82-.04.24.04.44.16.52.37.08.2.13.49.08.77 0 .12-.04.28-.08.4-.04.13-.04.3-.12.45a10.32 10.32 0 0 1-1.74 3.13 22.98 22.98 0 0 1-3.65 3.79c-.33.28-.7.52-1.06.77-.08.08-.2.12-.28.16l-.25.16a.39.39 0 0 1-.4-.08c-.12-.08-.16-.24-.16-.36l.12-.61c.12-.41.28-.82.52-1.14.2-.29.5-.49.78-.49.28.04.6.16.85.45.44.53.69 1.26.77 1.99.08.73.08 1.5-.04 2.28l-.25 1.14c-.04.12-.04.16-.08.24l-.04.12c0 .04-.04.12-.04.04l-.08-.2-.08-.16-.08-.17a6.8 6.8 0 0 0-1.99-2.52c-.77-.57-1.5-.73-1.54-.65-.04.12.6.4 1.3.98.52.4.97.93 1.34 1.5.2.29.32.57.48.9l.12.32c.04.12.09.25.17.4l.28.82c.04 0 .12-.2.16-.32l.17-.37c.12-.24.2-.57.28-.85a7.95 7.95 0 0 0 .32-3.58 4.42 4.42 0 0 0-.89-2.28 1.72 1.72 0 0 0-1.18-.57c-.24 0-.48.08-.64.2-.2.13-.33.29-.45.45a5.15 5.15 0 0 0-.77 1.95c-.04.29.12.61.36.78.25.16.57.2.86.08.16-.08.2-.12.32-.16l.28-.17c.37-.24.73-.53 1.1-.81a23.74 23.74 0 0 0 3.73-3.82 12.43 12.43 0 0 0 1.83-3.3c.08-.32.16-.6.2-.93.04-.33.04-.7-.12-1.06-.08-.16-.2-.32-.37-.44-.16-.13-.36-.17-.52-.2a2.8 2.8 0 0 0-1.02.03c-.65.17-1.21.49-1.74.86a15.01 15.01 0 0 0-3.7 4.27c-.44.77-.85 1.54-1.09 2.44-.08.36-.16.73-.16 1.1v.28c0 .16.04.32.08.44l.04.2v.05h.16c.16 0 .33-.04.45-.04l.16-.04c.04 0 .08-.04.12-.04l.29-.13c.16-.08.36-.16.48-.28.33-.2.61-.45.85-.7.78-.72 1.34-1.54 1.91-2.43.53-.85 1.02-1.79 1.42-2.72.4-.94.81-1.88 1.1-2.9.28-.97.53-2.02.32-3.16-.08-.29-.16-.57-.36-.82-.2-.24-.53-.4-.81-.44a5.43 5.43 0 0 0-1.63 0c-1.05.2-2.03.65-2.88 1.26a15.05 15.05 0 0 0-4.22 4.55l-.65 1.3Z"}),a.createElement("path",{fill:"#F8E9DD",d:"M39.68 21.8a5.45 5.45 0 0 0-3.28-2.2c-1.22-.2-2.48.16-2.68 1.5-.33 1.95 1.46 4.15 3.57 4.52.69.12 1.38.04 1.99-.33"}),a.createElement("path",{fill:"#002776",d:"M34.7 24.56c.23.2.48.4.72.57.37.24.77.44 1.22.57.81.24 1.7.24 2.51-.13.13-.08.2-.2.17-.28-.12-.08-.25-.12-.37-.08-.69.28-1.5.28-2.19 0a3.12 3.12 0 0 1-1.01-.57c-.25-.16-.4-.37-.61-.57a.56.56 0 0 1-.12-.16c-.41-.4-.73-.9-.9-1.47a2.79 2.79 0 0 1-.04-1.62c.04-.17.17-.33.25-.45.08-.08.12-.16.24-.24.49-.41 1.26-.45 1.9-.33a5.64 5.64 0 0 1 2.92 1.83c.09.08.21.12.3.08.07-.04.11-.2.03-.32a4.82 4.82 0 0 0-1.58-1.43 5.18 5.18 0 0 0-1.54-.65c-.4-.08-.77-.12-1.18-.08-.4.04-.81.16-1.17.4-.13.09-.25.21-.37.33-.16.2-.28.41-.32.65-.2.65-.13 1.35.08 2 .2.65.56 1.22.97 1.7-.04.17.04.2.08.25Z"}),a.createElement("path",{fill:"#F8E9DD",d:"M31.93 14.68c-.97-1.95-2.6-6.63-7.1-7.36-2.72-.45-6.94 2.15-7.46 5.24-.61 3.66 2.35 5.94 5.72 6.5 4.58.78 7.9-1.54 8.36-4.26a4.96 4.96 0 0 0-3.9-5.49c-2.64-.45-8.11 1.06-8.64 4.23-.33 1.83.89 4.4 3.97 4.92 3.09.53 6.86-1.14 7.3-4.03.5-3-3.08-6.79-6.28-7.31h-.08c-.08.2-.12.44-.2.69-.53 3.25 1.62 10.45 4.78 11.06.61-.57.9-1.43 1.06-2.28.52-3.05-.85-4.76-2.76-5.08-1.62-.29-3.41.53-3.65 1.99-.2 1.22 1.17 3.3 1.74 3.66"}),a.createElement("path",{fill:"#002776",d:"M27.43 8.5c-.53-.4-1.1-.73-1.66-1.02l-.45-.2c-.16-.08-.33-.12-.49-.16l-.49-.13-.32-.08c-.12-.04-.28-.04-.4-.08-.09.16-.13.37-.2.53l-.05.12v.25c-.04.24-.08.44-.08.69-.04.44 0 .9 0 1.34a17.6 17.6 0 0 0 1.05 4.6c.57 1.46 1.3 2.92 2.52 4.02a3.03 3.03 0 0 0 1.26.69l.2.04c.08 0 .16.08.2 0l.17-.16.12-.12a4.7 4.7 0 0 0 .9-2.4c.11-.74.11-1.5-.09-2.28a3.95 3.95 0 0 0-1.14-2 3.93 3.93 0 0 0-4.38-.4 2.48 2.48 0 0 0-1.34 1.87c-.04.4.08.81.2 1.18a5.12 5.12 0 0 0 1.26 2.11c.25.25.49.33.49.29.04-.04-.08-.2-.28-.49-.17-.28-.41-.65-.65-1.1-.33-.6-.65-1.34-.57-1.99a2.1 2.1 0 0 1 1.13-1.54c1.22-.65 2.89-.53 3.86.4a4.02 4.02 0 0 1 .97 1.79c.13.7.13 1.42 0 2.12-.08.69-.28 1.38-.69 1.95-.04.08-.12.12-.16.2-.04 0-.04.08-.08.04l-.12-.04-.25-.08c-.28-.16-.56-.37-.85-.57a10.24 10.24 0 0 1-2.27-3.78 16.37 16.37 0 0 1-.97-4.4 6.96 6.96 0 0 1 0-1.3c0-.2.04-.4.08-.6l.04-.17.04-.12c0-.04 0-.04.04-.08l.2.04.45.12c.12.04.28.08.4.17l.41.2c.53.28 1.06.6 1.54.97.37.29.73.66 1.06.98.77.77 1.34 1.7 1.66 2.72a3.43 3.43 0 0 1-.36 3.01 4.88 4.88 0 0 1-2.48 2c-1.01.4-2.1.65-3.2.57-.29 0-.53-.05-.82-.09a5.4 5.4 0 0 1-2.19-.93 3.98 3.98 0 0 1-1.54-3.46c0-.24.12-.49.16-.73.2-.45.49-.9.9-1.26a7.78 7.78 0 0 1 2.75-1.59 9.62 9.62 0 0 1 4.39-.56c.44.08.89.2 1.34.4a4.72 4.72 0 0 1 2.52 4.31 4.34 4.34 0 0 1-1.92 3.21 7.22 7.22 0 0 1-3.69 1.35c-.65.04-1.34.04-1.99-.04a7.98 7.98 0 0 1-1.94-.45A7.78 7.78 0 0 1 19.15 17c-.36-.29-.65-.7-.93-1.06a4.69 4.69 0 0 1-.65-3.38c.08-.24.08-.44.16-.69.33-.9.9-1.66 1.62-2.32a8.52 8.52 0 0 1 3.09-1.82 5.3 5.3 0 0 1 1.78-.29c.29 0 .57.04.9.12l.44.08.45.17c.57.2 1.1.53 1.62.85.49.37.93.77 1.34 1.26.81.94 1.46 2.03 1.99 3.13.44.9.85 1.63.97 1.55.08-.04-.16-.82-.6-1.75A15.04 15.04 0 0 0 29.3 9.6c-.41-.5-.9-.94-1.43-1.35-.52-.36-1.1-.69-1.7-.93l-.45-.16-.48-.13a4 4 0 0 0-.98-.12c-.65 0-1.3.12-1.9.33a9.3 9.3 0 0 0-3.29 1.95 6.32 6.32 0 0 0-1.7 2.52c-.09.24-.13.49-.2.77-.05.25-.09.53-.09.77 0 .53.04 1.02.16 1.55.13.49.37.98.61 1.42.29.41.61.86 1.02 1.18a8.51 8.51 0 0 0 4.7 1.95 9.16 9.16 0 0 0 4.18-.4c.7-.25 1.3-.57 1.91-.98a4.98 4.98 0 0 0 2.11-3.66 5.3 5.3 0 0 0-1.58-3.94 6.92 6.92 0 0 0-1.22-.94c-.45-.24-.97-.4-1.46-.49-1.62-.2-3.2.13-4.75.66-1.05.4-2.1.89-2.96 1.74-.45.41-.77.94-1.01 1.5-.09.3-.2.62-.2.9-.05.29 0 .61 0 .9a4.57 4.57 0 0 0 1.78 3.05c.49.36 1.01.65 1.58.81.29.12.57.16.85.2.29.04.57.08.9.08a7.78 7.78 0 0 0 4.99-1.54c.48-.37.89-.81 1.21-1.34.7-1.02.82-2.4.4-3.54a7.9 7.9 0 0 0-1.82-3l-.52-.54c-.13-.04-.33-.2-.53-.32ZM50.31 22.48a.88.88 0 0 1-.2-.12c-.08-.08-.2-.16-.28-.2-.17-.16-.37-.33-.5-.49-.03-.04-.11 0-.2.04-.08.08-.16.12-.12.16.13.25.29.45.5.65.07.13.2.2.28.29l.2.2.04.04c.36.17.73.37 1.13.53l.2.08h.13c.24.04.53.04.77 0a3.99 3.99 0 0 0 1.18-.28c.04-.04.04-.12 0-.2-.04-.09-.12-.17-.17-.17-.2.04-.4.12-.56.17-.17.04-.33.04-.45.04-.2 0-.45-.04-.65-.13l-.12-.04-.16-.04a2 2 0 0 1-.94-.44l-.08-.09ZM48.53 16.63c0 .04-.04.04-.04.04-.04 0-.04-.04-.08-.08 0 0-.04-.04-.04-.08l-.09-.2-.12-.41c0-.04-.12-.08-.2-.04-.12 0-.2.08-.2.12 0 .16.04.28.08.45l.04.24c.04.12.04.24.08.33.08.24.2.44.32.56l.04.05c.09.04.2.12.33.08.04 0 .04 0 .08-.04.2-.17.33-.5.4-.86.05-.08.05-.2.05-.28V15.94l-.04-.25-.04-.16a3.41 3.41 0 0 0-.41-.93c-.08-.13-.2-.25-.32-.33-.09-.04-.17-.08-.29-.08-.16.04-.24.16-.28.33-.08.16-.08.36-.08.52 0 .09.08.13.2.13a.5.5 0 0 0 .2-.04c.04-.09.04-.2.12-.29.04 0 .08.04.08.04.05.04.05.08.09.12 0 .04.12.37.12.61v.13l.04.2c0 .08.04.2.04.28v.25c0 .12-.04.16-.08.16.04 0 .04 0 0 0Z"}),a.createElement("path",{fill:"#002776",d:"M47.63 14.84a.68.68 0 0 1 .2-.08c.13-.04.25-.08.33-.12l.7-.12c.03 0 .07-.09.07-.2 0-.13-.04-.21-.08-.21-.24 0-.48 0-.77.04-.12 0-.28.04-.4.04-.09 0-.2.04-.29.04h-.08c-.36.2-.73.4-1.01.7l-.17.15-.08.13c-.12.2-.2.44-.28.69l-.12.53c-.04.2-.04.44-.04.65 0 .04.08.08.2.08.12 0 .2-.04.2-.08.04-.2.04-.41.08-.57l.12-.45c.09-.2.2-.37.33-.53l.08-.08.08-.12c.2-.25.49-.45.81-.49.12.04.12 0 .12 0Z"}))))),a.createElement(u,{sm:5},a.createElement("div",null,a.createElement("h2",{className:"ffe-h4 ffe-h4--no-margin"},"Hvordan sparer andre på min alder til pensjon?"),a.createElement("p",{className:"ffe-body-paragraph"},"Andre på din alder velger ofte pensjonssparekonto. Du har også mulighet til å velge pensjonssparing med skattefordel (IPS)."),a.createElement("div",{className:"ffe-button-group"},a.createElement(Y,null,"Velg din sparing")),a.createElement("p",{className:"ffe-body-paragraph ffe-small-text"},"* Du får lavere pris på din forvaltning. Dette får du fordi du enten er ansatt i en bedrift som har pensjonssparing hos oss, har valgt å ha egen pensjonskonto hos oss, eller fordi du har et pensjonskapitalbevis eller pensjonsbevis hos oss."))))),a.createElement(l,null,a.createElement(b,null,a.createElement(w,null,a.createElement(u,{sm:{cols:5,offset:2}},"Litt innhold"),a.createElement(u,{sm:{cols:5,offset:0}},"Litt annet innhold")))));K.__docgenInfo={description:"",methods:[],displayName:"WaveExample"};const n1={title:"Komponenter/Shapes/Wave",component:l},g={render:e=>a.createElement(l,{...e})},v={args:{bgColor:"subtle"},render:e=>a.createElement(l,{...e})},h={args:{flip:!0},render:e=>a.createElement(l,{...e})},E={args:{position:"100px"},render:e=>a.createElement(l,{...e})},_={render:e=>a.createElement(K,null)};var C,k,F;g.parameters={...g.parameters,docs:{...(C=g.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: args => <Wave {...args} />
}`,...(F=(k=g.parameters)==null?void 0:k.docs)==null?void 0:F.source}}};var W,T,I;v.parameters={...v.parameters,docs:{...(W=v.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    bgColor: 'subtle'
  },
  render: args => <Wave {...args} />
}`,...(I=(T=v.parameters)==null?void 0:T.docs)==null?void 0:I.source}}};var R,H,$;h.parameters={...h.parameters,docs:{...(R=h.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    flip: true
  },
  render: args => <Wave {...args} />
}`,...($=(H=h.parameters)==null?void 0:H.docs)==null?void 0:$.source}}};var A,B,G;E.parameters={...E.parameters,docs:{...(A=E.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    position: '100px'
  },
  render: args => <Wave {...args} />
}`,...(G=(B=E.parameters)==null?void 0:B.docs)==null?void 0:G.source}}};var L,q,V;_.parameters={..._.parameters,docs:{...(L=_.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: args => <WaveExample />
}`,...(V=(q=_.parameters)==null?void 0:q.docs)==null?void 0:V.source}}};const l1=["Standard","SubtleBackground","Flipped","Position","LayoutExample"],f1=Object.freeze(Object.defineProperty({__proto__:null,Flipped:h,LayoutExample:_,Position:E,Standard:g,SubtleBackground:v,__namedExportsOrder:l1,default:n1},Symbol.toStringTag,{value:"Module"}));export{h as F,_ as L,E as P,g as S,f1 as W,v as a};
