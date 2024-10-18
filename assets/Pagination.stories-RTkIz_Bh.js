import{r as b,R as o}from"./index-RYns6xqu.js";import{r as W}from"./index-BwmuJAIN.js";import{c as p}from"./index-Dejnh_W_.js";import{P as je}from"./Paragraph-uGacOKYl.js";import{S as le}from"./SecondaryButton-BSRNdkcP.js";import{I as D}from"./Icon-Dor7S2yd.js";import{S as Te}from"./StrongText-BOJ27MaC.js";var Me="480px";const Ne=()=>{const[e,r]=b.useState([window.innerWidth,window.innerHeight]);return b.useEffect(()=>{const a=()=>r([window.innerWidth,window.innerHeight]);return a(),window.addEventListener("resize",a),()=>window.removeEventListener("resize",a)},[]),e},j="...",P=parseInt(Me,10),N=(e,r)=>{const a=r-e+1;return Array.from({length:a},(n,t)=>t+e)};function he(e,r,a,n=1){const[t]=Ne();return b.useMemo(()=>{const i=Math.ceil(e/r);if(n+5>=i)return N(1,i);const c=1,d=i;if(t>P){const m=Math.max(a-n,1),g=Math.min(a+n,i),f=m>2,l=g<i-1;if(!f&&l){let s;return t<=P?s=1+n:s=2+2*n,[...N(1,s),j,i]}if(f&&!l){let s;t<=P?s=1+n:s=2+2*n;const y=N(i-s+1,i);return[c,j,...y]}if(f&&l){if(t<=P)return[c,j,a,j,d];const s=N(m,g);return[c,j,...s,j,d]}}else{const m=Math.min(i-2,a-1),g=Math.max(m,1),f=Math.max(3,a+1),l=Math.min(f,i);return N(g,l)}},[e,r,n,a,t])}const Se={rowsPerPageLabel:["Vis","rader per side"],showing:(e,r,a)=>`Viser ${e}-${r} av ${a} rader`,previous:"Forrige",next:"Neste",goToPage:e=>`Gå til side ${e}`,currentPage:e=>`Gjeldende side, side ${e}`},we={rowsPerPageLabel:["Vis","rader per side"],showing:(e,r,a)=>`Viser ${e}-${r} av ${a} rader`,previous:"Forrige",next:"Neste",goToPage:e=>`Gå til side ${e}`,currentPage:e=>`Gjeldande side, side ${e}`},Pe={rowsPerPageLabel:["Show","rows per page"],showing:(e,r,a)=>`Showing ${e}-${r} of ${a} rows`,previous:"Previous",next:"Next",goToPage:e=>`Go to page ${e}`,currentPage:e=>`Current page, Page ${e}`},O={nb:Se,nn:we,en:Pe},ue=({locale:e,start:r,end:a,total:n,className:t,...i})=>o.createElement(je,{className:p("ffe-pagination-info",t),...i},O[e].showing(r,a,n));ue.__docgenInfo={description:"",methods:[],displayName:"Info",props:{locale:{required:!0,tsType:{name:"union",raw:"'nb' | 'nn' | 'en'",elements:[{name:"literal",value:"'nb'"},{name:"literal",value:"'nn'"},{name:"literal",value:"'en'"}]},description:""},start:{required:!0,tsType:{name:"number"},description:""},end:{required:!0,tsType:{name:"number"},description:""},total:{required:!0,tsType:{name:"number"},description:""}}};var C=function(){return C=Object.assign||function(e){for(var r,a=1,n=arguments.length;a<n;a++){r=arguments[a];for(var t in r)Object.prototype.hasOwnProperty.call(r,t)&&(e[t]=r[t])}return e},C.apply(this,arguments)},Le=function(e,r){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(a[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,n=Object.getOwnPropertySymbols(e);t<n.length;t++)r.indexOf(n[t])<0&&Object.prototype.propertyIsEnumerable.call(e,n[t])&&(a[n[t]]=e[n[t]]);return a},ce=o.forwardRef(function(e,r){var a=e.className,n=e.inline,t=Le(e,["className","inline"]);return o.createElement("select",C({className:p("ffe-dropdown",{"ffe-dropdown--inline":n},a),ref:r},t))});ce.__docgenInfo={description:"",methods:[],displayName:"Dropdown"};const de=({locale:e,defaultValue:r,setPageSize:a,rowsPerPageOptions:n,className:t,...i})=>o.createElement("div",{className:p("ffe-pagination-rows-per-page",t),...i},o.createElement("span",{"aria-hidden":!0},O[e].rowsPerPageLabel[0]),o.createElement(ce,{"aria-label":O[e].rowsPerPageLabel.join(" "),defaultValue:r,onChange:u=>a(Number(u.target.value))},n.map(u=>o.createElement("option",{key:u,value:u},u))),o.createElement("span",{"aria-hidden":!0},O[e].rowsPerPageLabel[1]));de.__docgenInfo={description:"",methods:[],displayName:"PerPageDropdown",props:{locale:{required:!0,tsType:{name:"union",raw:"'nb' | 'nn' | 'en'",elements:[{name:"literal",value:"'nb'"},{name:"literal",value:"'nn'"},{name:"literal",value:"'en'"}]},description:""},defaultValue:{required:!0,tsType:{name:"number"},description:""},setPageSize:{required:!0,tsType:{name:"signature",type:"function",raw:"(pageSize: number) => void",signature:{arguments:[{type:{name:"number"},name:"pageSize"}],return:{name:"void"}}},description:""},rowsPerPageOptions:{required:!0,tsType:{name:"Array",elements:[{name:"number"}],raw:"number[]"},description:""}}};const F="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgLTk2MCA5NjAgOTYwIiB3aWR0aD0iMjQiPjxwYXRoIGQ9Im00MTguMTUzLTQ4MCAxNjIuOTIzIDE2Mi45MjRxOC4zMDggOC4zMDcgOC41IDIwLjg4NC4xOTMgMTIuNTc2LTguNSAyMS4yNjgtOC42OTIgOC42OTMtMjEuMDc2IDguNjkzdC0yMS4wNzYtOC42OTNMMzU5LjE1NS00NTQuNjkzcS01LjYxNi01LjYxNS03LjkyMy0xMS44NDYtMi4zMDgtNi4yMy0yLjMwOC0xMy40NjF0Mi4zMDgtMTMuNDYxcTIuMzA3LTYuMjMxIDcuOTIzLTExLjg0NmwxNzkuNzY5LTE3OS43NjlxOC4zMDctOC4zMDggMjAuODg0LTguNSAxMi41NzYtLjE5MyAyMS4yNjggOC41IDguNjkzIDguNjkyIDguNjkzIDIxLjA3NnQtOC42OTMgMjEuMDc2TDQxOC4xNTMtNDgwWiIvPjwvc3ZnPg==",A=({direction:e,buttonText:r,isHidden:a,locale:n,onClick:t,className:i})=>o.createElement("div",{className:p(i,`ffe-pagination-navigation-block ffe-pagination-navigation-block--${e}`,{"ffe-pagination-navigation-block--hidden":a,"ffe-pagination-navigation-block--no-text":!r})},o.createElement(le,{type:"button",leftIcon:e==="prev"?o.createElement(D,{fileUrl:F,size:"md"}):void 0,rightIcon:e==="next"?o.createElement(D,{fileUrl:F,size:"md"}):void 0,onClick:t},r&&o.createElement("span",{className:"ffe-pagination-navigation-block__button-text"},e==="next"?O[n].next:O[n].previous)));A.__docgenInfo={description:"",methods:[],displayName:"NavigationBlock",props:{direction:{required:!0,tsType:{name:"union",raw:"'next' | 'prev'",elements:[{name:"literal",value:"'next'"},{name:"literal",value:"'prev'"}]},description:""},buttonText:{required:!1,tsType:{name:"boolean"},description:""},isHidden:{required:!0,tsType:{name:"boolean"},description:""},locale:{required:!0,tsType:{name:"union",raw:"'nb' | 'nn' | 'en'",elements:[{name:"literal",value:"'nb'"},{name:"literal",value:"'nn'"},{name:"literal",value:"'en'"}]},description:""},onClick:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};const Ee=o.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",height:"24",viewBox:"0 -960 960 960",width:"24"},o.createElement("path",{d:"M249.231-420.001q-24.749 0-42.374-17.625-17.624-17.625-17.624-42.374 0-24.749 17.624-42.374 17.625-17.625 42.374-17.625 24.75 0 42.374 17.625Q309.23-504.749 309.23-480q0 24.749-17.625 42.374-17.624 17.625-42.374 17.625Zm230.769 0q-24.749 0-42.374-17.625-17.625-17.625-17.625-42.374 0-24.749 17.625-42.374 17.625-17.625 42.374-17.625 24.749 0 42.374 17.625 17.625 17.625 17.625 42.374 0 24.749-17.625 42.374-17.625 17.625-42.374 17.625Zm230.769 0q-24.75 0-42.374-17.625Q650.77-455.251 650.77-480q0-24.749 17.625-42.374 17.624-17.625 42.374-17.625 24.749 0 42.374 17.625 17.624 17.625 17.624 42.374 0 24.749-17.624 42.374-17.625 17.625-42.374 17.625Z"})),ge=({className:e,...r})=>o.createElement("div",{className:p("ffe-pagination-dots"),...r},Ee);ge.__docgenInfo={description:"",methods:[],displayName:"Dots"};const me=o.forwardRef(({isActive:e,onClick:r,children:a,locale:n},t)=>o.createElement(le,{ref:t,type:"button","aria-label":e?O[n].currentPage(a):O[n].goToPage(a),"aria-current":e,className:p("ffe-pagination-page-button",{"ffe-pagination-page-button--active":e}),onClick:r},a));me.__docgenInfo={description:"",methods:[],displayName:"PageButton"};const T=({className:e,locale:r="nb",showRowsPerPageText:a=!0,paginationControls:n,rowsPerPageOptions:t,navigationButtonText:i=!0,ariaLabel:u,onClickPrev:c,onClickNext:d,onClickPage:m})=>{const g=b.useRef(null),f=b.useRef(null),l=he(n.totalElements,n.currentPageSize,n.currentPage);return o.createElement("div",{role:"group","aria-label":u,className:p("ffe-pagination",e)},o.createElement("div",{className:"ffe-pagination__rows"},a&&o.createElement(ue,{className:"ffe-pagination__rows-item",locale:r,start:n.pageStart+1,end:n.pageEnd,total:n.totalElements}),!!(t!=null&&t.length)&&o.createElement(de,{className:"ffe-pagination__rows-item",locale:r,rowsPerPageOptions:t,setPageSize:n.setPageSize,defaultValue:n.currentPageSize})),l&&l.length>1&&o.createElement("nav",{className:"ffe-pagination__buttons"},o.createElement(A,{className:"ffe-pagination__buttons-nav",locale:r,onClick:()=>{c==null||c();const s=Math.max(n.currentPage-1,1);W.flushSync(()=>{var M;n.setCurrentPage(s),s===1&&((M=g.current)==null||M.focus({preventScroll:!0}))})},isHidden:!n.hasPreviousPage,buttonText:i,direction:"prev"}),o.createElement("ol",{className:"ffe-pagination__page-buttons"},l.map((s,y)=>o.createElement("li",{key:y},s===j?o.createElement(ge,null):o.createElement(me,{ref:y===0?g:y===l.length-1?f:null,key:y,locale:r,onClick:()=>{m==null||m(s),n.setCurrentPage(s)},isActive:n.currentPage===s},s)))),o.createElement(A,{className:"ffe-pagination__buttons-nav",locale:r,onClick:()=>{d==null||d();const s=Math.min(n.currentPage+1,n.numberOfPages);W.flushSync(()=>{var M;n.setCurrentPage(s),n.numberOfPages===s&&((M=f.current)==null||M.focus({preventScroll:!0}))})},isHidden:!n.hasNextPage,buttonText:i,direction:"next"})))};T.__docgenInfo={description:"",methods:[],displayName:"Pagination",props:{className:{required:!1,tsType:{name:"string"},description:""},locale:{required:!1,tsType:{name:"union",raw:"'nb' | 'nn' | 'en'",elements:[{name:"literal",value:"'nb'"},{name:"literal",value:"'nn'"},{name:"literal",value:"'en'"}]},description:"",defaultValue:{value:"'nb'",computed:!1}},showRowsPerPageText:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},paginationControls:{required:!0,tsType:{name:"signature",type:"object",raw:`{
    /**
     * The index of the first element on the current page
     */
    pageStart: number;
    /**
     * The index of the current page. Numbered from 1
     */
    currentPage: number;
    /**
     * The index of the last element on the current page
     */
    pageEnd: number;
    /**
     * The size of the page
     */
    currentPageSize: number;
    /**
     * Whether there is a next page
     */
    hasNextPage: boolean;
    /**
     * Whether there is a previous page
     */
    hasPreviousPage: boolean;
    /**
     * Function to set the page size
     */
    setPageSize: (pageSize: number) => void;
    /**
     * Function to set the current page
     */
    setCurrentPage: (page: number) => void;
    /**
     * The total number of elements
     */
    totalElements: number;
    /**
     * The total of pages
     */
    numberOfPages: number;
}`,signature:{properties:[{key:"pageStart",value:{name:"number",required:!0},description:"The index of the first element on the current page"},{key:"currentPage",value:{name:"number",required:!0},description:"The index of the current page. Numbered from 1"},{key:"pageEnd",value:{name:"number",required:!0},description:"The index of the last element on the current page"},{key:"currentPageSize",value:{name:"number",required:!0},description:"The size of the page"},{key:"hasNextPage",value:{name:"boolean",required:!0},description:"Whether there is a next page"},{key:"hasPreviousPage",value:{name:"boolean",required:!0},description:"Whether there is a previous page"},{key:"setPageSize",value:{name:"signature",type:"function",raw:"(pageSize: number) => void",signature:{arguments:[{type:{name:"number"},name:"pageSize"}],return:{name:"void"}},required:!0},description:"Function to set the page size"},{key:"setCurrentPage",value:{name:"signature",type:"function",raw:"(page: number) => void",signature:{arguments:[{type:{name:"number"},name:"page"}],return:{name:"void"}},required:!0},description:"Function to set the current page"},{key:"totalElements",value:{name:"number",required:!0},description:"The total number of elements"},{key:"numberOfPages",value:{name:"number",required:!0},description:"The total of pages"}]}},description:""},rowsPerPageOptions:{required:!1,tsType:{name:"Array",elements:[{name:"number"}],raw:"number[]"},description:""},navigationButtonText:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},ariaLabel:{required:!0,tsType:{name:"string"},description:""},onClickPrev:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onClickNext:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onClickPage:{required:!1,tsType:{name:"signature",type:"function",raw:"(page: number) => void",signature:{arguments:[{type:{name:"number"},name:"page"}],return:{name:"void"}}},description:""}}};function I(e,r=100){const[a,n]=b.useState(1),[t,i]=b.useState(r),u=e>a*t,c=a>1,d=(a-1)*t,m=u?a*t:e,g=Math.ceil(e/t);return{currentPage:a,pageStart:d,pageEnd:m,currentPageSize:t,hasNextPage:u,hasPreviousPage:c,setCurrentPage:n,setPageSize:l=>{i(l),n(1)},totalElements:e,numberOfPages:g}}var z=["none","ascending","descending"],G=o.createContext({updateSort:function(){return null},getSort:function(){return"none"}}),Z=function(e){return e===void 0&&(e="none"),e?z[(z.indexOf(e)+1)%z.length]:"none"},fe=function(e){var r,a=e.initialSort,n=e.children,t=b.useState((r=a==null?void 0:a.sortOrder)!==null&&r!==void 0?r:"none"),i=t[0],u=t[1],c=b.useState(a==null?void 0:a.sortKey),d=c[0],m=c[1],g=function(l){l===d?u(Z(i)):(m(l),u(Z("none")))},f=function(l){return l===d?i:"none"};return o.createElement(G.Provider,{value:{activeSortOrder:i,activeSortKey:d,updateSort:g,getSort:f}},n)};fe.__docgenInfo={description:"",methods:[],displayName:"TableProvider"};var k=function(){return k=Object.assign||function(e){for(var r,a=1,n=arguments.length;a<n;a++){r=arguments[a];for(var t in r)Object.prototype.hasOwnProperty.call(r,t)&&(e[t]=r[t])}return e},k.apply(this,arguments)},xe=function(e,r){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(a[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,n=Object.getOwnPropertySymbols(e);t<n.length;t++)r.indexOf(n[t])<0&&Object.prototype.propertyIsEnumerable.call(e,n[t])&&(a[n[t]]=e[n[t]]);return a},pe=o.forwardRef(function(e,r){var a=e.className,n=e.initialSort,t=e.children,i=e.breakPoint,u=i===void 0?"sm":i,c=xe(e,["className","initialSort","children","breakPoint"]);return o.createElement(fe,{initialSort:n},o.createElement(G.Consumer,null,function(d){var m=d.activeSortOrder,g=d.activeSortKey;return o.createElement("table",k({className:p("ffe-table",{"ffe-table--break-sm":u==="sm"},{"ffe-table--break-md":u==="md"},a),ref:r},c),typeof t=="function"?t({activeSortOrder:m,activeSortKey:g}):t)}))});pe.__docgenInfo={description:"",methods:[],displayName:"Table"};var R=function(){return R=Object.assign||function(e){for(var r,a=1,n=arguments.length;a<n;a++){r=arguments[a];for(var t in r)Object.prototype.hasOwnProperty.call(r,t)&&(e[t]=r[t])}return e},R.apply(this,arguments)},_e=function(e,r){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(a[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,n=Object.getOwnPropertySymbols(e);t<n.length;t++)r.indexOf(n[t])<0&&Object.prototype.propertyIsEnumerable.call(e,n[t])&&(a[n[t]]=e[n[t]]);return a},ye=function(e){var r=e.className,a=_e(e,["className"]);return o.createElement("tbody",R({className:p("ffe-table__body",r)},a))};ye.__docgenInfo={description:"",methods:[],displayName:"TableBody"};var Y=function(){return Y=Object.assign||function(e){for(var r,a=1,n=arguments.length;a<n;a++){r=arguments[a];for(var t in r)Object.prototype.hasOwnProperty.call(r,t)&&(e[t]=r[t])}return e},Y.apply(this,arguments)},Ie=function(e,r){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(a[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,n=Object.getOwnPropertySymbols(e);t<n.length;t++)r.indexOf(n[t])<0&&Object.prototype.propertyIsEnumerable.call(e,n[t])&&(a[n[t]]=e[n[t]]);return a},_=function(e){var r=e.className,a=Ie(e,["className"]);return o.createElement("div",Y({className:p("ffe-table__cell-content",r)},a))};_.__docgenInfo={description:"",methods:[],displayName:"CellContent"};var H=function(){return H=Object.assign||function(e){for(var r,a=1,n=arguments.length;a<n;a++){r=arguments[a];for(var t in r)Object.prototype.hasOwnProperty.call(r,t)&&(e[t]=r[t])}return e},H.apply(this,arguments)},ze=function(e,r){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(a[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,n=Object.getOwnPropertySymbols(e);t<n.length;t++)r.indexOf(n[t])<0&&Object.prototype.propertyIsEnumerable.call(e,n[t])&&(a[n[t]]=e[n[t]]);return a},L=o.forwardRef(function(e,r){var a=e.className,n=e.columnHeader,t=e.children,i=ze(e,["className","columnHeader","children"]);return o.createElement("td",H({className:p("ffe-table__td",a),ref:r},i),o.createElement(_,null,n&&o.createElement(Te,{className:"ffe-table__column-header","aria-hidden":!0},n,":"),t))});L.__docgenInfo={description:"",methods:[],displayName:"TableDataCell"};var q=function(){return q=Object.assign||function(e){for(var r,a=1,n=arguments.length;a<n;a++){r=arguments[a];for(var t in r)Object.prototype.hasOwnProperty.call(r,t)&&(e[t]=r[t])}return e},q.apply(this,arguments)},De=function(e,r){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(a[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,n=Object.getOwnPropertySymbols(e);t<n.length;t++)r.indexOf(n[t])<0&&Object.prototype.propertyIsEnumerable.call(e,n[t])&&(a[n[t]]=e[n[t]]);return a},be=function(e){var r=e.className,a=De(e,["className"]);return o.createElement("tfoot",q({className:p("ffe-table__foot",r)},a))};be.__docgenInfo={description:"",methods:[],displayName:"TableFoot"};var $=function(){return $=Object.assign||function(e){for(var r,a=1,n=arguments.length;a<n;a++){r=arguments[a];for(var t in r)Object.prototype.hasOwnProperty.call(r,t)&&(e[t]=r[t])}return e},$.apply(this,arguments)},Ce=function(e,r){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(a[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,n=Object.getOwnPropertySymbols(e);t<n.length;t++)r.indexOf(n[t])<0&&Object.prototype.propertyIsEnumerable.call(e,n[t])&&(a[n[t]]=e[n[t]]);return a},ve=function(e){var r=e.className,a=Ce(e,["className"]);return o.createElement("thead",$({className:p("ffe-table__head",r)},a))};ve.__docgenInfo={description:"",methods:[],displayName:"TableHead"};var Q=function(){return Q=Object.assign||function(e){for(var r,a=1,n=arguments.length;a<n;a++){r=arguments[a];for(var t in r)Object.prototype.hasOwnProperty.call(r,t)&&(e[t]=r[t])}return e},Q.apply(this,arguments)},Ae=function(e,r){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(a[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,n=Object.getOwnPropertySymbols(e);t<n.length;t++)r.indexOf(n[t])<0&&Object.prototype.propertyIsEnumerable.call(e,n[t])&&(a[n[t]]=e[n[t]]);return a},ke="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgLTk2MCA5NjAgOTYwIiB3aWR0aD0iMjQiPjxwYXRoIGQ9Ik00NTAuMDAxLTYzNS42OTQgMzE3LjA3Ni01MDIuNzdxLTguMzA3IDguMzA3LTIwLjg4NCA4LjUtMTIuNTc2LjE5Mi0yMS4yNjgtOC41LTguNjkzLTguNjkyLTguNjkzLTIxLjA3NiAwLTEyLjM4NSA4LjY5My0yMS4wNzdsMTc5Ljc2OS0xNzkuNzY5cTEwLjg0Ni0xMC44NDYgMjUuMzA3LTEwLjg0NiAxNC40NjEgMCAyNS4zMDcgMTAuODQ2bDE3OS43NjkgMTc5Ljc2OXE4LjMwOCA4LjMwOCA4LjUgMjAuODg0LjE5MyAxMi41NzctOC41IDIxLjI2OS04LjY5MiA4LjY5Mi0yMS4wNzYgOC42OTJ0LTIxLjA3Ni04LjY5Mkw1MDkuOTk5LTYzNS42OTR2MzUxLjg0OHEwIDEyLjc2OC04LjYxNSAyMS4zODQtOC42MTUgOC42MTUtMjEuMzg0IDguNjE1dC0yMS4zODQtOC42MTVxLTguNjE1LTguNjE2LTguNjE1LTIxLjM4NHYtMzUxLjg0OFoiLz48L3N2Zz4=",Re="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgLTk2MCA5NjAgOTYwIiB3aWR0aD0iMjQiPjxwYXRoIGQ9Ik0zNjYuNTI1LTQ1NC4yMzJxLTEyLjc1NSAwLTIxLjM3LTguNjI1LTguNjE1LTguNjI0LTguNjE1LTIxLjM3NHYtMjYxLjIzMmwtOTIuNjk0IDkyLjY5NHEtOC4xMTUgOC4zMDctMjAuMjg4IDguMzA3dC0yMS40OC04LjYwOHEtOS4zMDgtOS4zOTEtOS4zMDgtMjEuNDY4dDkuMzA4LTIxLjM4NGwxMzguNzY5LTEzOC43NjlxNS42MTUtNS42MTUgMTEuODk3LTcuOTIzdDEzLjQ2Mi0yLjMwOHE3LjE3OSAwIDEzLjY0IDIuMzI1IDYuNDYyIDIuMzI2IDEyIDcuOTA2bDEzOS43NjkgMTM5Ljc2OXE4LjkyMyA4LjkyMyA4LjgwOCAyMC42OTItLjExNiAxMS43NjktOS40MjMgMjEuMTYtOS4zMDcgOC42MDgtMjEuMDc2IDguOTE2LTExLjc2OS4zMDgtMjEuMDc3LTlsLTkyLjMwOS05Mi4zMDl2MjYxLjYxN3EwIDEyLjU4Ni04LjYyOCAyMS4xLTguNjI5IDguNTE0LTIxLjM4NSA4LjUxNFptMjI3LjI2OSAzMzguNzY5cS03LjE3OSAwLTEzLjY0LTIuMzI1LTYuNDYyLTIuMzI1LTEyLTcuOTA2TDQyOC4zODUtMjY1LjQ2M3EtOC45MjMtOC45MjItOC44MDgtMjAuNjkxLjExNi0xMS43NjkgOS40MjMtMjEuMTYgOS4zMDctOC42MDkgMjEuMDc2LTguOTE3IDExLjc2OS0uMzA3IDIxLjA3NyA5bDkyLjMwOSA5Mi4zMDl2LTI2MS42MTZxMC0xMi41ODYgOC42MjgtMjEuMTAxIDguNjI5LTguNTE0IDIxLjM4NS04LjUxNCAxMi43NTUgMCAyMS4zNyA4LjYyNXQ4LjYxNSAyMS4zNzR2MjYxLjIzMmw5Mi42OTQtOTIuNjkzcTguMTE1LTguMzA4IDIwLjI4OC04LjMwOHQyMS40OCA4LjYwOXE5LjMwOCA5LjM5MSA5LjMwOCAyMS40NjcgMCAxMi4wNzctOS4zMDggMjEuMzg0TDYxOS4xNTMtMTI1LjY5NHEtNS42MTUgNS42MTYtMTEuODk3IDcuOTIzLTYuMjgyIDIuMzA4LTEzLjQ2MiAyLjMwOFoiLz48L3N2Zz4=",E=o.forwardRef(function(e,r){var a=e.className,n=e.sortKey,t=e.children,i=e.onClick,u=Ae(e,["className","sortKey","children","onClick"]),c=b.useContext(G),d=c.updateSort,m=c.getSort,g=b.useRef(null),f=n?m(n):void 0;return o.createElement("th",Q({className:p("ffe-table__th",{"ffe-table__th--sortable":n},{"ffe-table__th--sortable-ascending":f==="ascending"},{"ffe-table__th--sortable-descending":f==="descending"},a),"aria-sort":f,onClick:function(l){var s,y;!((s=g.current)===null||s===void 0)&&s.contains(l.target)||(y=g.current)===null||y===void 0||y.click(),i==null||i(l)},ref:r},u),n?o.createElement(_,null,o.createElement("button",{className:"ffe-table__sort-button",type:"button",onClick:function(){return d(n)},ref:g},o.createElement("span",null,t),o.createElement(D,{fileUrl:f==="none"?Re:ke,size:"md"}))):o.createElement(_,null,t))});E.__docgenInfo={description:"",methods:[],displayName:"TableHeaderCell"};var U=function(){return U=Object.assign||function(e){for(var r,a=1,n=arguments.length;a<n;a++){r=arguments[a];for(var t in r)Object.prototype.hasOwnProperty.call(r,t)&&(e[t]=r[t])}return e},U.apply(this,arguments)},Ye=function(e,r){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(a[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,n=Object.getOwnPropertySymbols(e);t<n.length;t++)r.indexOf(n[t])<0&&Object.prototype.propertyIsEnumerable.call(e,n[t])&&(a[n[t]]=e[n[t]]);return a},x=o.forwardRef(function(e,r){var a=e.className,n=Ye(e,["className"]);return o.createElement("tr",U({className:p("ffe-table__tr",a),ref:r},n))});x.__docgenInfo={description:"",methods:[],displayName:"TableRow"};var B=function(){return B=Object.assign||function(e){for(var r,a=1,n=arguments.length;a<n;a++){r=arguments[a];for(var t in r)Object.prototype.hasOwnProperty.call(r,t)&&(e[t]=r[t])}return e},B.apply(this,arguments)},He=function(e,r){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(a[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,n=Object.getOwnPropertySymbols(e);t<n.length;t++)r.indexOf(n[t])<0&&Object.prototype.propertyIsEnumerable.call(e,n[t])&&(a[n[t]]=e[n[t]]);return a},Oe=o.forwardRef(function(e,r){var a=e.className,n=He(e,["className"]);return o.createElement("caption",B({className:p("ffe-table__caption",a),ref:r},n))});Oe.__docgenInfo={description:"",methods:[],displayName:"TableCaption"};const qe={title:"components/pagination/Pagination",component:T},v={args:{ariaLabel:"Paginering",rowsPerPageOptions:[10,20,50,100]},render:function(r){const a=I(134,10);return o.createElement(T,{...r,paginationControls:a})}},h={args:{...v.args,navigationButtonText:!1},render:function(r){const a=[{name:"Anders",age:32},{name:"Erik",age:25},{name:"Gunn",age:29},{name:"Safi",age:42},{name:"Sandra",age:42},{name:"Leif",age:12},{name:"Gunnar",age:2},{name:"Simen",age:42},{name:"Andreas",age:45},{name:"Mikkel",age:23},{name:"Nissen",age:100},{name:"Niklas",age:35},{name:"Unn",age:98}],n=I(a.length,2);return o.createElement(o.Fragment,null,o.createElement(pe,null,o.createElement(Oe,null,"Utviklere"),o.createElement(ve,null,o.createElement(x,null,o.createElement(E,{scope:"col"},"Navn"),o.createElement(E,{scope:"col"},"Alder"))),o.createElement(ye,null,a.slice(n.pageStart,n.pageStart+n.currentPageSize).map(t=>o.createElement(x,{key:t.name},o.createElement(L,{columnHeader:"Navn"},t.name),o.createElement(L,{columnHeader:"Alder"},t.age)))),o.createElement(be,null,o.createElement(x,null,o.createElement(E,{scope:"row"},"Gjenomsnitts alder"),o.createElement(L,{columnHeader:"Gjenomsnitts alder"},a.reduce((t,i)=>t+i.age,0)/a.length)))),o.createElement(T,{...r,paginationControls:n}))}},S={args:{...v.args,navigationButtonText:!1},render:function(r){const a=I(134,10);return o.createElement(T,{...r,paginationControls:a})}},w={args:{...v.args,showRowsPerPageText:!1,rowsPerPageOptions:void 0},render:function(r){const a=I(134,10);return o.createElement(T,{...r,paginationControls:a})}};var K,V,X;v.parameters={...v.parameters,docs:{...(K=v.parameters)==null?void 0:K.docs,source:{originalSource:`{
  args: {
    ariaLabel: 'Paginering',
    rowsPerPageOptions: [10, 20, 50, 100]
  },
  render: function Render(args) {
    const paginationControls = usePagination(134, 10);
    return <Pagination {...args} paginationControls={paginationControls} />;
  }
}`,...(X=(V=v.parameters)==null?void 0:V.docs)==null?void 0:X.source}}};var J,ee,ne;h.parameters={...h.parameters,docs:{...(J=h.parameters)==null?void 0:J.docs,source:{originalSource:`{
  args: {
    ...Standard.args,
    navigationButtonText: false
  },
  render: function Render(args) {
    const data = [{
      name: 'Anders',
      age: 32
    }, {
      name: 'Erik',
      age: 25
    }, {
      name: 'Gunn',
      age: 29
    }, {
      name: 'Safi',
      age: 42
    }, {
      name: 'Sandra',
      age: 42
    }, {
      name: 'Leif',
      age: 12
    }, {
      name: 'Gunnar',
      age: 2
    }, {
      name: 'Simen',
      age: 42
    }, {
      name: 'Andreas',
      age: 45
    }, {
      name: 'Mikkel',
      age: 23
    }, {
      name: 'Nissen',
      age: 100
    }, {
      name: 'Niklas',
      age: 35
    }, {
      name: 'Unn',
      age: 98
    }];
    const paginationControls = usePagination(data.length, 2);
    return <>
                <Table>
                    <TableCaption>Utviklere</TableCaption>
                    <TableHead>
                        <TableRow>
                            <TableHeaderCell scope="col">Navn</TableHeaderCell>
                            <TableHeaderCell scope="col">Alder</TableHeaderCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {data.slice(paginationControls.pageStart, paginationControls.pageStart + paginationControls.currentPageSize).map(it => <TableRow key={it.name}>
                                    <TableDataCell columnHeader="Navn">
                                        {it.name}
                                    </TableDataCell>
                                    <TableDataCell columnHeader="Alder">
                                        {it.age}
                                    </TableDataCell>
                                </TableRow>)}
                    </TableBody>
                    <TableFoot>
                        <TableRow>
                            <TableHeaderCell scope="row">
                                Gjenomsnitts alder
                            </TableHeaderCell>
                            <TableDataCell columnHeader="Gjenomsnitts alder">
                                {data.reduce((sum, curr) => sum + curr.age, 0) / data.length}
                            </TableDataCell>
                        </TableRow>
                    </TableFoot>
                </Table>
                <Pagination {...args} paginationControls={paginationControls} />
            </>;
  }
}`,...(ne=(ee=h.parameters)==null?void 0:ee.docs)==null?void 0:ne.source}}};var te,ae,re;S.parameters={...S.parameters,docs:{...(te=S.parameters)==null?void 0:te.docs,source:{originalSource:`{
  args: {
    ...Standard.args,
    navigationButtonText: false
  },
  render: function Render(args) {
    const paginationControls = usePagination(134, 10);
    return <Pagination {...args} paginationControls={paginationControls} />;
  }
}`,...(re=(ae=S.parameters)==null?void 0:ae.docs)==null?void 0:re.source}}};var oe,ie,se;w.parameters={...w.parameters,docs:{...(oe=w.parameters)==null?void 0:oe.docs,source:{originalSource:`{
  args: {
    ...Standard.args,
    showRowsPerPageText: false,
    rowsPerPageOptions: undefined
  },
  render: function Render(args) {
    const paginationControls = usePagination(134, 10);
    return <Pagination {...args} paginationControls={paginationControls} />;
  }
}`,...(se=(ie=w.parameters)==null?void 0:ie.docs)==null?void 0:se.source}}};const $e=["Standard","WithTable","NoNavigationText","NoShowRowsPerPageText"],Ke=Object.freeze(Object.defineProperty({__proto__:null,NoNavigationText:S,NoShowRowsPerPageText:w,Standard:v,WithTable:h,__namedExportsOrder:$e,default:qe},Symbol.toStringTag,{value:"Module"}));export{S as N,Ke as P,v as S,h as W,w as a};
