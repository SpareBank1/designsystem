import{R as o,r as g}from"./index-eCxJ45ll.js";import{c as s}from"./index-DezCrw0f.js";import{S as z}from"./StrongText-DYs74pMv.js";import{I as w}from"./Icon-B88nEPeu.js";var N=["none","ascending","descending"],_=o.createContext({updateSort:function(){return null},getSort:function(){return"none"}}),E=function(e){return e===void 0&&(e="none"),e?N[(N.indexOf(e)+1)%N.length]:"none"},x=function(e){var a,n=e.initialSort,t=e.children,r=g.useState((a=n==null?void 0:n.sortOrder)!==null&&a!==void 0?a:"none"),l=r[0],i=r[1],u=g.useState(n==null?void 0:n.sortKey),c=u[0],O=u[1],f=function(d){d===c?i(E(l)):(O(d),i(E("none")))},j=function(d){return d===c?l:"none"};return o.createElement(_.Provider,{value:{activeSortOrder:l,activeSortKey:c,updateSort:f,getSort:j}},t)};x.__docgenInfo={description:"",methods:[],displayName:"TableProvider"};var L=function(){return L=Object.assign||function(e){for(var a,n=1,t=arguments.length;n<t;n++){a=arguments[n];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e},L.apply(this,arguments)},D=function(e,a){var n={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&a.indexOf(t)<0&&(n[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,t=Object.getOwnPropertySymbols(e);r<t.length;r++)a.indexOf(t[r])<0&&Object.prototype.propertyIsEnumerable.call(e,t[r])&&(n[t[r]]=e[t[r]]);return n},h=o.forwardRef(function(e,a){var n=e.className,t=e.initialSort,r=e.children,l=e.breakPoint,i=l===void 0?"sm":l,u=D(e,["className","initialSort","children","breakPoint"]);return o.createElement(x,{initialSort:t},o.createElement(_.Consumer,null,function(c){var O=c.activeSortOrder,f=c.activeSortKey;return o.createElement("table",L({className:s("ffe-table",{"ffe-table--break-sm":i==="sm"},{"ffe-table--break-md":i==="md"},n),ref:a},u),typeof r=="function"?r({activeSortOrder:O,activeSortKey:f}):r)}))});h.__docgenInfo={description:"",methods:[],displayName:"Table"};var b=function(){return b=Object.assign||function(e){for(var a,n=1,t=arguments.length;n<t;n++){a=arguments[n];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e},b.apply(this,arguments)},A=function(e,a){var n={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&a.indexOf(t)<0&&(n[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,t=Object.getOwnPropertySymbols(e);r<t.length;r++)a.indexOf(t[r])<0&&Object.prototype.propertyIsEnumerable.call(e,t[r])&&(n[t[r]]=e[t[r]]);return n},C=function(e){var a=e.className,n=A(e,["className"]);return o.createElement("tbody",b({className:s("ffe-table__body",a)},n))};C.__docgenInfo={description:"",methods:[],displayName:"TableBody"};var v=function(){return v=Object.assign||function(e){for(var a,n=1,t=arguments.length;n<t;n++){a=arguments[n];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e},v.apply(this,arguments)},Y=function(e,a){var n={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&a.indexOf(t)<0&&(n[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,t=Object.getOwnPropertySymbols(e);r<t.length;r++)a.indexOf(t[r])<0&&Object.prototype.propertyIsEnumerable.call(e,t[r])&&(n[t[r]]=e[t[r]]);return n},M=function(e){var a=e.className,n=Y(e,["className"]);return o.createElement("div",v({className:s("ffe-table__cell-content",a)},n))};M.__docgenInfo={description:"",methods:[],displayName:"CellContent"};var p=function(){return p=Object.assign||function(e){for(var a,n=1,t=arguments.length;n<t;n++){a=arguments[n];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e},p.apply(this,arguments)},k=function(e,a){var n={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&a.indexOf(t)<0&&(n[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,t=Object.getOwnPropertySymbols(e);r<t.length;r++)a.indexOf(t[r])<0&&Object.prototype.propertyIsEnumerable.call(e,t[r])&&(n[t[r]]=e[t[r]]);return n},P=o.forwardRef(function(e,a){var n=e.className,t=e.columnHeader,r=e.children,l=k(e,["className","columnHeader","children"]);return o.createElement("td",p({className:s("ffe-table__td",n),ref:a},l),o.createElement(M,null,t&&o.createElement(z,{className:"ffe-table__column-header","aria-hidden":!0},t,":"),r))});P.__docgenInfo={description:"",methods:[],displayName:"TableDataCell"};var T=function(){return T=Object.assign||function(e){for(var a,n=1,t=arguments.length;n<t;n++){a=arguments[n];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e},T.apply(this,arguments)},H=function(e,a){var n={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&a.indexOf(t)<0&&(n[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,t=Object.getOwnPropertySymbols(e);r<t.length;r++)a.indexOf(t[r])<0&&Object.prototype.propertyIsEnumerable.call(e,t[r])&&(n[t[r]]=e[t[r]]);return n},Q=function(e){var a=e.className,n=H(e,["className"]);return o.createElement("thead",T({className:s("ffe-table__head",a)},n))};Q.__docgenInfo={description:"",methods:[],displayName:"TableHead"};var S=function(){return S=Object.assign||function(e){for(var a,n=1,t=arguments.length;n<t;n++){a=arguments[n];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e},S.apply(this,arguments)},R=function(e,a){var n={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&a.indexOf(t)<0&&(n[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,t=Object.getOwnPropertySymbols(e);r<t.length;r++)a.indexOf(t[r])<0&&Object.prototype.propertyIsEnumerable.call(e,t[r])&&(n[t[r]]=e[t[r]]);return n},U="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgLTk2MCA5NjAgOTYwIiB3aWR0aD0iMjQiPjxwYXRoIGQ9Ik00NTAuMDAxLTYzNS42OTQgMzE3LjA3Ni01MDIuNzdxLTguMzA3IDguMzA3LTIwLjg4NCA4LjUtMTIuNTc2LjE5Mi0yMS4yNjgtOC41LTguNjkzLTguNjkyLTguNjkzLTIxLjA3NiAwLTEyLjM4NSA4LjY5My0yMS4wNzdsMTc5Ljc2OS0xNzkuNzY5cTEwLjg0Ni0xMC44NDYgMjUuMzA3LTEwLjg0NiAxNC40NjEgMCAyNS4zMDcgMTAuODQ2bDE3OS43NjkgMTc5Ljc2OXE4LjMwOCA4LjMwOCA4LjUgMjAuODg0LjE5MyAxMi41NzctOC41IDIxLjI2OS04LjY5MiA4LjY5Mi0yMS4wNzYgOC42OTJ0LTIxLjA3Ni04LjY5Mkw1MDkuOTk5LTYzNS42OTR2MzUxLjg0OHEwIDEyLjc2OC04LjYxNSAyMS4zODQtOC42MTUgOC42MTUtMjEuMzg0IDguNjE1dC0yMS4zODQtOC42MTVxLTguNjE1LTguNjE2LTguNjE1LTIxLjM4NHYtMzUxLjg0OFoiLz48L3N2Zz4=",$="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgLTk2MCA5NjAgOTYwIiB3aWR0aD0iMjQiPjxwYXRoIGQ9Ik0zNjYuNTI1LTQ1NC4yMzJxLTEyLjc1NSAwLTIxLjM3LTguNjI1LTguNjE1LTguNjI0LTguNjE1LTIxLjM3NHYtMjYxLjIzMmwtOTIuNjk0IDkyLjY5NHEtOC4xMTUgOC4zMDctMjAuMjg4IDguMzA3dC0yMS40OC04LjYwOHEtOS4zMDgtOS4zOTEtOS4zMDgtMjEuNDY4dDkuMzA4LTIxLjM4NGwxMzguNzY5LTEzOC43NjlxNS42MTUtNS42MTUgMTEuODk3LTcuOTIzdDEzLjQ2Mi0yLjMwOHE3LjE3OSAwIDEzLjY0IDIuMzI1IDYuNDYyIDIuMzI2IDEyIDcuOTA2bDEzOS43NjkgMTM5Ljc2OXE4LjkyMyA4LjkyMyA4LjgwOCAyMC42OTItLjExNiAxMS43NjktOS40MjMgMjEuMTYtOS4zMDcgOC42MDgtMjEuMDc2IDguOTE2LTExLjc2OS4zMDgtMjEuMDc3LTlsLTkyLjMwOS05Mi4zMDl2MjYxLjYxN3EwIDEyLjU4Ni04LjYyOCAyMS4xLTguNjI5IDguNTE0LTIxLjM4NSA4LjUxNFptMjI3LjI2OSAzMzguNzY5cS03LjE3OSAwLTEzLjY0LTIuMzI1LTYuNDYyLTIuMzI1LTEyLTcuOTA2TDQyOC4zODUtMjY1LjQ2M3EtOC45MjMtOC45MjItOC44MDgtMjAuNjkxLjExNi0xMS43NjkgOS40MjMtMjEuMTYgOS4zMDctOC42MDkgMjEuMDc2LTguOTE3IDExLjc2OS0uMzA3IDIxLjA3NyA5bDkyLjMwOSA5Mi4zMDl2LTI2MS42MTZxMC0xMi41ODYgOC42MjgtMjEuMTAxIDguNjI5LTguNTE0IDIxLjM4NS04LjUxNCAxMi43NTUgMCAyMS4zNyA4LjYyNXQ4LjYxNSAyMS4zNzR2MjYxLjIzMmw5Mi42OTQtOTIuNjkzcTguMTE1LTguMzA4IDIwLjI4OC04LjMwOHQyMS40OCA4LjYwOXE5LjMwOCA5LjM5MSA5LjMwOCAyMS40NjcgMCAxMi4wNzctOS4zMDggMjEuMzg0TDYxOS4xNTMtMTI1LjY5NHEtNS42MTUgNS42MTYtMTEuODk3IDcuOTIzLTYuMjgyIDIuMzA4LTEzLjQ2MiAyLjMwOFoiLz48L3N2Zz4=",K=o.forwardRef(function(e,a){var n=e.className,t=e.sortKey,r=e.children,l=e.onClick,i=R(e,["className","sortKey","children","onClick"]),u=g.useContext(_),c=u.updateSort,O=u.getSort,f=g.useRef(null),j=t?O(t):void 0;return o.createElement("th",S({className:s("ffe-table__th",{"ffe-table__th--sortable":t},{"ffe-table__th--sortable-ascending":j==="ascending"},{"ffe-table__th--sortable-descending":j==="descending"},n),"aria-sort":j,onClick:function(d){var y,m;!((y=f.current)===null||y===void 0)&&y.contains(d.target)||(m=f.current)===null||m===void 0||m.click(),l==null||l(d)},ref:a},i),t?o.createElement(M,null,o.createElement("button",{className:"ffe-table__sort-button",type:"button",onClick:function(){return c(t)},ref:f},o.createElement("span",null,r),o.createElement(w,{fileUrl:j==="none"?$:U,size:"md"}))):o.createElement(M,null,r))});K.__docgenInfo={description:"",methods:[],displayName:"TableHeaderCell"};var I=function(){return I=Object.assign||function(e){for(var a,n=1,t=arguments.length;n<t;n++){a=arguments[n];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e},I.apply(this,arguments)},Z=function(e,a){var n={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&a.indexOf(t)<0&&(n[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,t=Object.getOwnPropertySymbols(e);r<t.length;r++)a.indexOf(t[r])<0&&Object.prototype.propertyIsEnumerable.call(e,t[r])&&(n[t[r]]=e[t[r]]);return n},X=o.forwardRef(function(e,a){var n=e.className,t=Z(e,["className"]);return o.createElement("tr",I({className:s("ffe-table__tr",n),ref:a},t))});X.__docgenInfo={description:"",methods:[],displayName:"TableRow"};export{h as T,Q as a,X as b,K as c,C as d,P as e};