import{r as S,l as C,a as O}from"./index-DlnE8UeV.js";import{r as l,R as s}from"./index-DQDNmYQF.js";import{d as I}from"./index-D9tCDUwu.js";import{P as E}from"./Paragraph-DEYlXMQQ.js";import{c as b}from"./index-QCImZZ3W.js";import{I as A}from"./Icon-BqsuuMcG.js";import{f as T}from"./formatNumber-DejPEPKF.js";var le=function(e,t){switch(e){case"en":return"".concat(t," selected");case"nn":default:return"".concat(t," valgt")}},D=function(e){switch(e){case"nn":return"Søket gav ingen treff";case"en":return"The search gave no result";default:return"Søket ga ingen treff"}},R=function(e){switch(e){case"nn":return"Valt element har vorte fjerna.";case"en":return"Selected item has been removed.";default:return"Valgt element har blitt fjernet."}},k=function(e,t){switch(e){case"nn":return"Element ".concat(t," er valgt.");case"en":return"Item ".concat(t," has been selected.");default:return"Element ".concat(t," er valgt.")}},z=function(e){switch(e){case"nn":return"Ingen resultat er tilgjengelege.";case"en":return"No results are available.";default:return"Ingen resultater er tilgjengelige."}},F=function(e,t){switch(e){case"nn":return"".concat(t," resultat er tilgjengeleg, bruk opp- og nedpiltastene for å navigera. Trykk Enter for å velja.");case"en":return"".concat(t," result").concat(t===1?" is":"s are"," available, use up and down arrow keys to navigate. Press Enter key to select.");default:return"".concat(t," resultat").concat(t===1?"":"er"," er tilgjengelig, bruk opp- og nedpiltastene for å navigere. Trykk Enter for å velge.")}},H=function(e){switch(e){case"nn":return"Lastar inn alternativ.";case"en":return"Loading options.";default:return"Laster inn alternativer."}},de=function(e,t){switch(e){case"nn":return"Saldo: ".concat(t);case"en":return"Balance: ".concat(t);default:return"Saldo: ".concat(t)}},y=function(e){return"".concat(e).toLowerCase()},Y=function(e,t,n,r){var o=r?r(n,t):function(a){return t.map(function(i){return y(a[i])}).some(function(i){return i.includes(y(n))})};return e.filter(o)},fe=function(e){var t=e.inputValue,n=e.searchAttributes,r=e.maxRenderedDropdownElements,o=e.dropdownList,a=e.noMatchDropdownList,i=e.searchMatcher,c=e.showAllItemsInDropdown,u=t?String(t).trim():"",f=u.length>0,d=f?Y(o,n,u,i).slice(0,r):o==null?void 0:o.slice(0,r),v=function(){return c?o:d!=null&&d.length?d:a||[]};return{listToRender:v(),noMatch:!(d!=null&&d.length)}},ge=function(e,t){if(e){var n=S(e,{boundary:t,block:"nearest",scrollMode:"if-needed"});n.forEach(function(r){var o=r.el,a=r.top,i=r.left;o.scrollTop=a,o.scrollLeft=i})}},he=function(e,t){return e<=0?t-1:e-1},ve=function(e,t){return e===t-1?0:e+1},M=function(){var e="a11y-status-message",t=window.document.getElementById(e);return t||(t=window.document.createElement("div"),t.setAttribute("id",e),t.setAttribute("role","status"),t.setAttribute("aria-live","polite"),t.setAttribute("aria-relevant","additions text"),Object.assign(t.style,{border:"0",clip:"rect(0 0 0 0)",height:"1px",margin:"-1px",overflow:"hidden",padding:"0",position:"absolute",width:"1px"}),window.document.body.appendChild(t),t)},j=I(function(){M().textContent=""},500),$=function(e){var t=M();e&&(t.textContent=e,j())},h=I(function(e){$(e())},200),V=function(e){var t=e.selectedValue,n=e.locale;return t?k(n,t):R(n)},B=function(e){var t=e.isExpanded,n=e.resultCount,r=e.locale;return t?n?F(r,n):z(r):""},P=function(e){return H(e)},me=function(e){var t=e.hasFocus,n=e.isExpanded,r=e.isLoading,o=e.locale,a=e.resultCount,i=e.selectedValue,c=l.useRef(!0),u=l.useRef();l.useEffect(function(){if(r&&t){h(function(){return P(o)});return}if(c.current){c.current=!1;return}var f=i!==u.current;return f?(u.current=i,h(function(){return V({selectedValue:i,locale:o})})):h(function(){return B({isExpanded:n,resultCount:a,locale:o})}),function(){h.cancel(),j.cancel()}},[i,o,n,a,t,r])},pe=function(e,t){var n=t.map(function(r){return e[r]}).join(" ");M().textContent="".concat(n)},W=l.forwardRef,m=function(){return m=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},m.apply(this,arguments)},Q=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]]);return n};function U(e,t){var n=e.item,r=e.isHighlighted,o=e.isSelected,a=e.children,i=e.onMouseEnter,c=e.onClick,u=Q(e,["item","isHighlighted","isSelected","children","onMouseEnter","onClick"]),f=l.useId();return s.createElement("div",m({id:f,role:"option",onMouseEnter:i,"aria-selected":o,ref:t,onClick:c,className:"ffe-searchable-dropdown__list-item-container"},u),a({item:n,isHighlighted:r,isSelected:o}))}var L=W(U);L.__docgenInfo={description:"",methods:[],displayName:"Option"};function N(e){var t=e.noMatch,n=e.noMatchMessageId,r=e.listToRender,o=e.locale;return s.createElement("div",null,t.text?s.createElement("div",{className:"ffe-searchable-dropdown__no-match"},s.createElement(E,{id:n},t.text)):r.length===0&&s.createElement(E,{id:n,className:"ffe-screenreader-only"},D(o)))}N.__docgenInfo={description:"",methods:[],displayName:"NoMatch"};var p=function(){return p=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},p.apply(this,arguments)},X=function(e,t,n){return!!(n!=null&&n.some(function(r){return e(t,r)}))};function K(e){var t=e.noMatch,n=e.listToRender,r=e.noMatchMessageId,o=e.OptionBody,a=e.refs,i=e.highlightedIndex,c=e.dropdownAttributes,u=e.locale,f=e.onChange,d=e.selectedItems,v=e.isEqual;return s.createElement(C.Scrollbars,{autoHeight:!0,autoHeightMax:335},t&&s.createElement(N,{noMatch:t,noMatchMessageId:r,listToRender:n,locale:u}),n.map(function(g,w){return s.createElement(L,{isSelected:X(v,g,d),key:Object.values(g).join("-"),ref:a[w],isHighlighted:i===w,onClick:function(){f(g)},item:g},function(x){return s.createElement(o,p({},x,{locale:u,dropdownAttributes:c}))})}))}K.__docgenInfo={description:"",methods:[],displayName:"Results"};function Me(e){return function(t){e.forEach(function(n){typeof n=="function"?n(t):n!=null&&(n.current=t)})}}var we=function(e){return function(t){t.nativeEvent.__eventFromFFESearchableDropdownId=e}},Ee=function(e){var t=e.id,n=e.containerRef,r=e.handleFocusMovedOutside;l.useEffect(function(){var o=function(a){var i,c=a.target&&((i=n.current)===null||i===void 0?void 0:i.contains(a.target))||a.__eventFromFFESearchableDropdownId===t;c||r()};return document.addEventListener("mousedown",o),document.addEventListener("focusin",o),function(){document.removeEventListener("mousedown",o),document.removeEventListener("focusin",o)}},[t,n,r])},ye=function(e){var t=e.isExpanded,n=e.onOpen,r=e.onClose;l.useEffect(function(){var o=t?n:r;o==null||o()},[t,n,r])},Ie=function(e){var t=e.listToRender,n=l.useState([]),r=n[0],o=n[1];return l.useLayoutEffect(function(){o(function(a){return Array(t.length).fill(null).map(function(i,c){return a[c]||l.createRef()})})},[t.length]),r},Z=s.forwardRef(function(e,t){var n=e.isExpanded,r=e.onClick,o=e.isLoading;return s.createElement("div",{"aria-hidden":"true",className:b("ffe-searchable-dropdown__button",{"ffe-searchable-dropdown__button--flip":n}),onClick:r},o?s.createElement(O,null):s.createElement(A,{fileUrl:"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgLTk2MCA5NjAgOTYwIiB3aWR0aD0iMjQiPjxwYXRoIGQ9Ik00ODAtMzczLjUzOXEtNy4yMzEgMC0xMy40NjEtMi4zMDgtNi4yMzEtMi4zMDgtMTEuODQ2LTcuOTIzTDI3NC45MjQtNTYzLjUzOXEtOC4zMDgtOC4zMDctOC41LTIwLjg4NC0uMTkzLTEyLjU3NyA4LjUtMjEuMjY5IDguNjkyLTguNjkyIDIxLjA3Ni04LjY5MnQyMS4wNzYgOC42OTJMNDgwLTQ0Mi43NjhsMTYyLjkyNC0xNjIuOTI0cTguMzA3LTguMzA3IDIwLjg4NC04LjUgMTIuNTc2LS4xOTIgMjEuMjY4IDguNSA4LjY5MyA4LjY5MiA4LjY5MyAyMS4wNzcgMCAxMi4zODQtOC42OTMgMjEuMDc2TDUwNS4zMDctMzgzLjc3cS01LjYxNSA1LjYxNS0xMS44NDYgNy45MjMtNi4yMyAyLjMwOC0xMy40NjEgMi4zMDhaIi8+PC9zdmc+",size:"md",className:"ffe-searchable-dropdown__button-icon"}))});Z.__docgenInfo={description:"",methods:[],displayName:"ToggleButton"};var _=s.forwardRef(function(e,t){var n=e.children,r=e.isExpanded;return s.createElement("div",{className:"ffe-searchable-dropdown__list-container"},s.createElement("div",{tabIndex:-1,className:b("ffe-searchable-dropdown__list",{"ffe-searchable-dropdown__list--open":r})},s.createElement("div",{ref:t,role:"listbox"},n)))});_.__docgenInfo={description:"",methods:[],displayName:"ListBox"};const q={nb:"kr",nn:"kr",en:"NOK"},G=e=>[5,4,3,2,7,6,5,4,3,2,1].map((r,o)=>parseInt(e.charAt(o),10)*r).reduce((r,o)=>r+o);function J(e){return e.length!==11?!1:G(e)%11===0}function be(e){return e&&J(e)?e.replace(/(\d{4})(\d{2})(\d{5})/g,"$1 $2 $3"):e}function je(e="",t,n){const r=T(e,{decimals:2,locale:t}),o=n&&n!=="NOK"?n:q[t];return t==="en"?`${o} ${r}`:`${r} ${o}`}const Le=e=>{const t=/^\d+$/;if(!e)return e;const n=e.replace(/\s/g,"");return t.test(n)?n.replace(/(\d{4})(\d{1})/,"$1 $2").replace(/ (\d{2})(\d{1})/," $1 $2"):e||""},Ne=(e,t)=>n=>{const r=a=>`${a}`.replace(/(\s|\.)/g,"").toLowerCase(),o=r(e);return t.some(a=>r(n[a]).includes(o))},ee={noMatch:"Ingen samsvarende konto"},te={noMatch:"Ingen samsvarande konto"},ne={noMatch:"No matching account"},xe={nb:ee,nn:te,en:ne};export{_ as L,K as R,Z as T,fe as a,me as b,ye as c,Ee as d,we as e,W as f,de as g,le as h,he as i,ve as j,ge as k,be as l,Me as m,je as n,Ne as o,Le as p,pe as s,xe as t,Ie as u};
