import{R as r,r as m}from"./index-DQDNmYQF.js";import{c as Y}from"./index-QCImZZ3W.js";import{g as ut,a as J,f as pt,u as mt,b as ft,c as ht,d as gt,e as me,m as bt,T as At,L as yt,R as vt,i as It,j as wt,s as fe,k as he,l as re,n as Xe,o as St,p as Et,t as Rt}from"./texts-CK0wEwuU.js";import{M as oe}from"./MicroText-T72i9KwR.js";import{i as Tt,S as ge}from"./index-DlnE8UeV.js";import{I as k}from"./InputGroup-DOKvm3eQ.js";function Je(e){var t=e.item,o=e.dropdownAttributes,n=e.isHighlighted,a=e.locale,i=o[0],h=o.slice(1),y=t[i],l=h.map(function(u,T){return r.createElement(oe,{"aria-label":u==="balance"?ut(a,t[u]):void 0,className:"ffe-searchable-dropdown__detail-text",key:T},t[u])});return r.createElement("div",{className:Y("ffe-searchable-dropdown__list-item-body",{"ffe-searchable-dropdown__list-item-body--highlighted":n})},y,!!l.length&&r.createElement("div",{className:"ffe-searchable-dropdown__list-item-body-details"},l))}Je.__docgenInfo={description:"",methods:[],displayName:"OptionBody"};var be=function(e){var t=e.state,o=e.searchAttributes,n=e.maxRenderedDropdownElements,a=e.dropdownList,i=e.noMatchDropdownList,h=e.searchMatcher,y=e.displayAttribute,l=e.onChange,u=J({inputValue:t.inputValue,searchAttributes:o,maxRenderedDropdownElements:n,dropdownList:a,noMatchDropdownList:i,searchMatcher:h,showAllItemsInDropdown:!0}).listToRender,T=t.inputValue===""&&!!t.selectedItem,D=t.listToRender.length===1&&o.map(function(A){var w;return t.listToRender[0][A]===((w=t.selectedItem)===null||w===void 0?void 0:w[A])}).includes(!1)&&t.highlightedIndex!==-1,v=t.selectedItem;T?(l==null||l(null),v=void 0):D&&(l==null||l(t.listToRender[0]),v=t.listToRender[0]);var x=v?v[y]:"";return{inputValue:x,selectedItem:v,listToRender:u}},f=function(){return f=Object.assign||function(e){for(var t,o=1,n=arguments.length;o<n;o++){t=arguments[o];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},f.apply(this,arguments)},xt=function(e){var t=e.searchAttributes,o=e.dropdownList,n=e.displayAttribute,a=e.noMatchDropdownList,i=e.maxRenderedDropdownElements,h=e.searchMatcher,y=e.onChange;return function(l,u){var T,D,v,x,A,w,L,V,M,g,b;switch(u.type){case"InputKeyDownEscape":return f(f({},l),{noMatch:!1,isExpanded:!1,highlightedIndex:-1,inputValue:l.selectedItem?l.selectedItem[n]:""});case"InputClick":{var C=J({inputValue:l.inputValue,searchAttributes:t,maxRenderedDropdownElements:i,dropdownList:o,noMatchDropdownList:a,searchMatcher:h,showAllItemsInDropdown:!0}),N=C.noMatch,p=C.listToRender;return f(f({},l),{isExpanded:!0,listToRender:p,noMatch:N})}case"InputChange":{var q=J({inputValue:(D=(T=u.payload)===null||T===void 0?void 0:T.inputValue)!==null&&D!==void 0?D:"",searchAttributes:t,maxRenderedDropdownElements:i,dropdownList:o,noMatchDropdownList:a,searchMatcher:h,showAllItemsInDropdown:!1}),N=q.noMatch,p=q.listToRender;return f(f({},l),{isExpanded:!0,inputValue:(x=(v=u.payload)===null||v===void 0?void 0:v.inputValue)!==null&&x!==void 0?x:"",listToRender:p,highlightedIndex:((w=(A=u.payload)===null||A===void 0?void 0:A.inputValue)===null||w===void 0?void 0:w.trim())===""||p.length===0?-1:0,noMatch:N})}case"ToggleButtonPressed":{if(l.isExpanded){var _=be({state:l,searchAttributes:t,maxRenderedDropdownElements:i,dropdownList:o,noMatchDropdownList:a,searchMatcher:h,displayAttribute:n,onChange:y}),p=_.listToRender,O=_.inputValue,d=_.selectedItem;return f(f({},l),{isExpanded:!1,highlightedIndex:-1,inputValue:O,selectedItem:d,listToRender:p})}return f(f({},l),{isExpanded:!l.isExpanded})}case"ItemSelectedProgrammatically":case"ItemOnClick":case"InputKeyDownEnter":return f(f({},l),{isExpanded:!1,highlightedIndex:-1,selectedItem:(L=u.payload)===null||L===void 0?void 0:L.selectedItem,inputValue:((M=(V=u.payload)===null||V===void 0?void 0:V.selectedItem)===null||M===void 0?void 0:M[n])||""});case"InputKeyDownArrowDown":case"InputKeyDownArrowUp":return f(f({},l),{isExpanded:!0,highlightedIndex:(b=(g=u.payload)===null||g===void 0?void 0:g.highlightedIndex)!==null&&b!==void 0?b:-1});case"FocusMovedOutSide":{var S=be({state:l,searchAttributes:t,maxRenderedDropdownElements:i,dropdownList:o,noMatchDropdownList:a,searchMatcher:h,displayAttribute:n,onChange:y}),p=S.listToRender,O=S.inputValue,d=S.selectedItem;return f(f({},l),{isExpanded:!1,highlightedIndex:-1,inputValue:O,selectedItem:d,listToRender:p})}case"DropdownListPropUpdated":return f(f({},l),J({inputValue:l.inputValue,searchAttributes:t,maxRenderedDropdownElements:i,dropdownList:o,noMatchDropdownList:a,searchMatcher:h,showAllItemsInDropdown:!!l.selectedItem}));default:return l}}},Q=function(){return Q=Object.assign||function(e){for(var t,o=1,n=arguments.length;o<n;o++){t=arguments[o];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},Q.apply(this,arguments)},Ct=function(e,t){var o={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(o[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(o[n[a]]=e[n[a]]);return o},Nt="ArrowUp",Dt="ArrowDown",kt="Escape",Lt="Enter",Bt="Tab";function Vt(e,t){var o,n,a,i,h,y,l,u=e.id,T=e.labelledById,D=e.className,v=e.dropdownList,x=e.dropdownAttributes,A=e.searchAttributes,w=e.displayAttribute,L=w===void 0?A[0]:w,V=e.maxRenderedDropdownElements,M=V===void 0?Number.MAX_SAFE_INTEGER:V,g=e.onChange,b=e.inputProps,C=e.optionBody,N=e.postListElement,p=e.noMatch,q=e.locale,_=q===void 0?"nb":q,O=e.ariaInvalid,d=e.formatter,S=d===void 0?function(c){return c}:d,F=e.searchMatcher,P=e.selectedItem,ae=e.isLoading,le=ae===void 0?!1:ae,et=e.onOpen,tt=e.onClose,se=e.isEqual,nt=se===void 0?Tt:se,ot=Ct(e,["id","labelledById","className","dropdownList","dropdownAttributes","searchAttributes","displayAttribute","maxRenderedDropdownElements","onChange","inputProps","optionBody","postListElement","noMatch","locale","ariaInvalid","formatter","searchMatcher","selectedItem","isLoading","onOpen","onClose","isEqual"]),ce=m.useReducer(xt({dropdownList:v,displayAttribute:L,searchAttributes:A,maxRenderedDropdownElements:M,noMatchDropdownList:p==null?void 0:p.dropdownList,searchMatcher:F,onChange:g}),{isExpanded:!1,selectedItems:[],highlightedIndex:-1,formattedInputValue:"",inputValue:P?P[L]:""},function(c){return Q(Q({},c),J({inputValue:c.inputValue,searchAttributes:A,maxRenderedDropdownElements:M,dropdownList:v,noMatchDropdownList:p==null?void 0:p.dropdownList,searchMatcher:F,showAllItemsInDropdown:!!P}))}),s=ce[0],I=ce[1],Z=mt({listToRender:s.listToRender}),de=m.useState(!1),rt=de[0],at=de[1],ne=m.useRef(null),ie=m.useRef(null),lt=C||Je,ee=m.useRef(null),ue=m.useId(),pe=m.useRef(!1),st=function(){I({type:"InputClick"})},ct=function(c){b!=null&&b.onBlur&&b.onBlur(c)};m.useEffect(function(){I({type:"ItemSelectedProgrammatically",payload:{selectedItem:P}})},[P,I]),ft({hasFocus:rt,isExpanded:s.isExpanded,isLoading:le,locale:_,resultCount:s.listToRender.length,selectedValue:(o=s.selectedItem)===null||o===void 0?void 0:o[L]}),m.useLayoutEffect(function(){var c;pe.current&&((c=ne.current)===null||c===void 0||c.focus(),pe.current=!1)}),m.useEffect(function(){I({type:"DropdownListPropUpdated"})},[v,I]),ht({isExpanded:s.isExpanded,onClose:tt,onOpen:et});var dt=m.useCallback(function(){return I({type:"FocusMovedOutSide"})},[]);gt({id:u,containerRef:ie,handleFocusMovedOutside:dt});var it=function(c){if(c.key===Lt&&s.highlightedIndex>=0){c.preventDefault(),I({type:"InputKeyDownEnter",payload:{selectedItem:s.listToRender[s.highlightedIndex]}}),g==null||g(s.listToRender[s.highlightedIndex]);return}else if(c.key===kt){I({type:"InputKeyDownEscape"});return}if(c.key===Nt){if(c.preventDefault(),s.listToRender.length){var B=It(s.highlightedIndex,s.listToRender.length);I({type:"InputKeyDownArrowUp",payload:{highlightedIndex:B}}),B>=0&&fe(s==null?void 0:s.listToRender[B],x),he(Z[B].current,ee.current)}return}if(c.key===Dt&&(c.preventDefault(),s.listToRender.length)){var B=wt(s.highlightedIndex,s.listToRender.length);I({type:"InputKeyDownArrowDown",payload:{highlightedIndex:B}}),B>=0&&fe(s==null?void 0:s.listToRender[B],x),he(Z[B].current,ee.current)}c.key===Bt&&I({type:"FocusMovedOutSide"})};return r.createElement("div",{onKeyDown:it,className:Y(D,"ffe-searchable-dropdown","ffe-default-mode"),ref:ie,onMouseDown:me(u),onFocus:me(u)},r.createElement("div",{className:"ffe-searchable-dropdown__input",onClick:function(){var c;(c=ne.current)===null||c===void 0||c.focus()}},r.createElement("input",Q({},b,{ref:bt([ne,t]),id:u,"aria-labelledby":T,onClick:st,onChange:function(c){b!=null&&b.onChange&&b.onChange(c),I({type:"InputChange",payload:{inputValue:c.target.value}})},onFocus:function(){at(!0),I({type:"InputClick"})},onBlur:ct,"aria-describedby":[b==null?void 0:b["aria-describedby"],s.noMatch&&ue].filter(Boolean).join(" ")||void 0,value:S(s.inputValue),type:"text",role:"combobox",autoComplete:"off","aria-controls":(a=(n=ee.current)===null||n===void 0?void 0:n.getAttribute("id"))!==null&&a!==void 0?a:void 0,"aria-expanded":s.isExpanded&&!!s.listToRender.length,"aria-autocomplete":"list","aria-haspopup":"listbox","aria-activedescendant":s.highlightedIndex>=0&&(y=(h=(i=Z[s.highlightedIndex])===null||i===void 0?void 0:i.current)===null||h===void 0?void 0:h.getAttribute("id"))!==null&&y!==void 0?y:void 0,"aria-invalid":(l=ot["aria-invalid"])!==null&&l!==void 0?l:O}))),r.createElement(At,{isExpanded:s.isExpanded,onClick:function(){I({type:"ToggleButtonPressed"})},isLoading:le}),r.createElement(yt,{ref:ee,isExpanded:s.isExpanded},s.isExpanded&&r.createElement(vt,{isEqual:nt,listToRender:s.listToRender,OptionBody:lt,highlightedIndex:s.highlightedIndex,dropdownAttributes:x,locale:_,refs:Z,onChange:function(c){I({type:"ItemOnClick",payload:{selectedItem:c}}),g==null||g(c)},noMatch:s.noMatch?p:void 0,noMatchMessageId:ue,selectedItems:s.selectedItem?[s.selectedItem]:[]}),N&&r.createElement("div",{className:"ffe-searchable-dropdown__list--post-list-element"},N)))}var Qe=pt(Vt);Qe.__docgenInfo={description:"",methods:[],displayName:"SearchableDropdown"};function Ye({account:e,showBalance:t=!0,ariaInvalid:o,locale:n}){const{balance:a,accountNumber:i,currencyCode:h}=e??{},y=!e&&(o==="true"||o===!0);return r.createElement("div",{className:Y("ffe-small-text","ffe-account-selector-single__details",{"ffe-account-selector-single__details--invalid-empty":y})},e&&r.createElement(r.Fragment,null,r.createElement("div",{className:"ffe-account-selector-single__details--left"},re(i)),t&&r.createElement("div",{className:"ffe-account-selector-single__details--right"},Xe(a,n,h))))}Ye.__docgenInfo={description:"",methods:[],displayName:"AccountDetails",props:{account:{required:!1,tsType:{name:"Account"},description:""},showBalance:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},ariaInvalid:{required:!0,tsType:{name:"ReactComponentPropsWithoutRef['aria-invalid']",raw:"React.ComponentPropsWithoutRef<'div'>['aria-invalid']"},description:""},locale:{required:!0,tsType:{name:"union",raw:"'nb' | 'nn' | 'en'",elements:[{name:"literal",value:"'nb'"},{name:"literal",value:"'nn'"},{name:"literal",value:"'en'"}]},description:""}}};const Mt=({accounts:e,selectedAccount:t,inputValue:o})=>t&&t.name===o&&!e.find(a=>a.accountNumber===t.accountNumber)?[...e,t]:e;function Ze({item:e,isHighlighted:t,showBalance:o,locale:n}){return r.createElement("div",{className:Y("ffe-searchable-dropdown__list-item-body",{"ffe-searchable-dropdown__list-item-body--highlighted":t})},e.name,r.createElement("div",{className:"ffe-searchable-dropdown__list-item-body-details"},r.createElement(oe,{className:"ffe-searchable-dropdown__detail-text"},re(e.accountNumber)),o&&r.createElement(oe,{className:"ffe-searchable-dropdown__detail-text"},Xe(e.balance,n,e.currencyCode))))}Ze.__docgenInfo={description:"",methods:[],displayName:"AccountActionBody",props:{item:{required:!0,tsType:{name:"Item"},description:""},isHighlighted:{required:!0,tsType:{name:"boolean"},description:""},showBalance:{required:!0,tsType:{name:"boolean"},description:""},locale:{required:!0,tsType:{name:"union",raw:"'nb' | 'nn' | 'en'",elements:[{name:"literal",value:"'nb'"},{name:"literal",value:"'nn'"},{name:"literal",value:"'en'"}]},description:""}}};const R=({id:e,className:t,locale:o="nb",selectedAccount:n,hideAccountDetails:a=!1,showBalance:i=!1,noMatches:h,accounts:y,onAccountSelected:l,allowCustomAccount:u=!1,labelledById:T,optionBody:D,postListElement:v,onReset:x,inputProps:A,formatAccountNumber:w=!0,ariaInvalid:L,onOpen:V,onClose:M,displayAttribute:g,...b})=>{const[C,N]=m.useState((n==null?void 0:n.name)||""),p=w?Et:void 0,q=d=>{u&&N(d.target.value),A!=null&&A.onChange&&A.onChange(d)},_=d=>{const S=d===null,F=!(d!=null&&d.accountNumber);S?(N(""),x()):F?(l({name:d.name,accountNumber:d.name,...g?{[g]:d.name}:{}}),N(d.name)):(l(d),N(d.name))},O=b["aria-invalid"]??L;return r.createElement("div",{className:Y("ffe-account-selector-single",t),id:`${e}-account-selector-container`},r.createElement(Qe,{id:e,labelledById:T,displayAttribute:g,inputProps:{...A,onChange:q},dropdownAttributes:i?["name","accountNumber","balance"]:["name","accountNumber"],postListElement:v,dropdownList:u?Mt({selectedAccount:n,accounts:y,inputValue:C}):y,noMatch:u&&C.trim()!==""?{dropdownList:[{name:p?p(C):C,accountNumber:"",...g?{[g]:p?p(C):C}:{}}]}:h??{text:Rt[o].noMatch},formatter:p,onChange:_,searchAttributes:["name","accountNumber",...g?[g]:[]],locale:o,optionBody:({item:d,isHighlighted:S,...F})=>D?r.createElement(D,{item:d,isHighlighted:S,...F}):r.createElement(Ze,{item:d,isHighlighted:S,locale:o,showBalance:i}),ariaInvalid:O,searchMatcher:St,selectedItem:n,onOpen:V,onClose:M,isEqual:(d,S)=>d.accountNumber===S.accountNumber}),!a&&r.createElement(Ye,{ariaInvalid:O,account:n,showBalance:i&&["string","number"].includes(typeof(n==null?void 0:n.balance)),locale:o}))};R.__docgenInfo={description:"",methods:[],displayName:"AccountSelector",props:{accounts:{required:!0,tsType:{name:"Array",elements:[{name:"T"}],raw:"T[]"},description:`Array of objects:
 {
     accountNumber: string.isRequired,
     name: string.isRequired,
     balance: number,
     currencyCode: string,
 }`},className:{required:!1,tsType:{name:"string"},description:""},id:{required:!0,tsType:{name:"string"},description:"Id blir satt automatisk hvis AccountSelector brukes i en InputGroup. Brukes for å koble label og input"},locale:{required:!1,tsType:{name:"union",raw:"'nb' | 'nn' | 'en'",elements:[{name:"literal",value:"'nb'"},{name:"literal",value:"'nn'"},{name:"literal",value:"'en'"}]},description:"",defaultValue:{value:"'nb'",computed:!1}},noMatches:{required:!1,tsType:{name:"signature",type:"object",raw:`{
    text: string;
    dropdownList?: T[];
}`,signature:{properties:[{key:"text",value:{name:"string",required:!0}},{key:"dropdownList",value:{name:"Array",elements:[{name:"T"}],raw:"T[]",required:!1}}]}},description:"Overrides default string for all locales."},inputProps:{required:!1,tsType:{name:"ReactComponentPropsWithoutRef",raw:"React.ComponentPropsWithoutRef<'input'>",elements:[{name:"literal",value:"'input'"}]},description:"Props passed to the input field"},onAccountSelected:{required:!0,tsType:{name:"signature",type:"function",raw:"(account: T) => void",signature:{arguments:[{type:{name:"T"},name:"account"}],return:{name:"void"}}},description:"Returns the selected account object"},hideAccountDetails:{required:!1,tsType:{name:"boolean"},description:"Determines if account details should be shown (balance and account number under the input field)",defaultValue:{value:"false",computed:!1}},showBalance:{required:!1,tsType:{name:"boolean"},description:"Default false.",defaultValue:{value:"false",computed:!1}},formatAccountNumber:{required:!1,tsType:{name:"boolean"},description:"Default true.",defaultValue:{value:"true",computed:!1}},labelledById:{required:!1,tsType:{name:"string"},description:"id of element that labels input field"},displayAttribute:{required:!1,tsType:{name:"T"},description:"Attribute used in the input when an item is selected. *"},allowCustomAccount:{required:!1,tsType:{name:"boolean"},description:`Allows selecting the text the user writes even if it does not match anything in the accounts array.
Useful e.g. if you want to pay to account that is not in yur recipients list.`,defaultValue:{value:"false",computed:!1}},optionBody:{required:!1,tsType:{name:"ReactComponentType",raw:`React.ComponentType<{
    item: T;
    locale: Locale;
    isHighlighted: boolean;
    dropdownAttributes: (keyof T)[];
}>`,elements:[{name:"signature",type:"object",raw:`{
    item: T;
    locale: Locale;
    isHighlighted: boolean;
    dropdownAttributes: (keyof T)[];
}`,signature:{properties:[{key:"item",value:{name:"T",required:!0}},{key:"locale",value:{name:"union",raw:"'nb' | 'nn' | 'en'",elements:[{name:"literal",value:"'nb'"},{name:"literal",value:"'nn'"},{name:"literal",value:"'en'"}],required:!0}},{key:"isHighlighted",value:{name:"boolean",required:!0}},{key:"dropdownAttributes",value:{name:"Array",elements:[{name:"unknown"}],raw:"(keyof T)[]",required:!0}}]}}]},description:"Custom element to use for each item in the dropdown list"},postListElement:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Element to be shown below dropDownList"},"aria-invalid":{required:!1,tsType:{name:"AriaAttributes['aria-invalid']",raw:"AriaAttributes['aria-invalid']"},description:"Sets aria-invalid on input field"},ariaInvalid:{required:!1,tsType:{name:"AriaAttributes['aria-invalid']",raw:"AriaAttributes['aria-invalid']"},description:""},onOpen:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Prop passed to the dropdown list"},onClose:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},selectedAccount:{required:!1,tsType:{name:"T"},description:""},onReset:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Called when emptying the input field and moving focus away from the account selector"},onColoredBg:{required:!1,tsType:{name:"never"},description:`@deprecated as part of update to Semantic Colors

Use the \`ffe-accent-color\` class on the component or on the container of the component instead
[Read more in the upgrade guide](https://sparebank1.github.io/designsystem/?path=/docs/introduksjon-changelog--docs#2025---februar---semantiske-farger)`}}};const _t={title:"Komponenter/Account-selector/AccountSelector",component:R,argTypes:{postListElement:{options:["text","html"],mapping:{text:"Some text describing the list",html:r.createElement("span",null,"Some text describing the list")}}}},te=[{accountNumber:"39920143613",name:"Brukskonto",currencyCode:"NOK",balance:1337},{accountNumber:"42142102514",name:"Brukskonto2",currencyCode:"NOK",balance:13337},{accountNumber:"23200355148",name:"Sparekonto1",currencyCode:"NOK",balance:109236},{accountNumber:"23207117277",name:"Sparekonto2",currencyCode:"NOK",balance:0}],E={args:{accounts:te,locale:"nb",formatAccountNumber:!0,allowCustomAccount:!1},render:function(t){const[o,n]=m.useState();return r.createElement(k,{label:"Velg konto"},r.createElement(R,{...t,selectedAccount:o,onAccountSelected:n,onReset:()=>n(void 0)}))}},G={args:{...E.args,showBalance:!0},render:function(t){const[o,n]=m.useState();return r.createElement(k,{label:"Velg konto",inputId:t.id,labelId:t.labelledById},r.createElement(R,{...t,selectedAccount:o,onAccountSelected:n}))}},j={args:{...E.args,allowCustomAccount:!0},render:function(t){const[o,n]=m.useState();return r.createElement(k,{label:"Velg konto",inputId:t.id,labelId:t.labelledById},r.createElement(R,{...t,selectedAccount:o,onAccountSelected:n}))}},K={args:{...E.args,formatAccountNumber:!1},render:function(t){const[o,n]=m.useState();return r.createElement(k,{label:"Velg konto",inputId:t.id,labelId:t.labelledById},r.createElement(R,{...t,selectedAccount:o,onAccountSelected:n}))}},H={args:{...E.args,formatAccountNumber:!1},render:function(t){const[o,n]=m.useState(),a=({item:i,isHighlighted:h})=>r.createElement("div",{style:{padding:"8px",background:h?"#ff9100":"white"}},r.createElement("div",null,i.name),r.createElement("div",{style:{display:"flex",justifyContent:"space-between"}},r.createElement(ge,null,i.accountNumber),r.createElement(ge,null,i.balance)));return r.createElement(k,{label:"Velg konto",inputId:t.id,labelId:t.labelledById},r.createElement(R,{...t,optionBody:a,selectedAccount:o,onAccountSelected:n}))}},W={args:{...E.args,hideAccountDetails:!1},render:function(t){const[o,n]=m.useState();return r.createElement(k,{label:"Velg konto",inputId:t.id,labelId:t.labelledById},r.createElement(R,{...t,selectedAccount:o,onAccountSelected:n}))}},U={args:{...E.args,postListElement:r.createElement("span",null,"Some text describing the list")},render:function(t){const[o,n]=m.useState();return r.createElement(k,{label:"Velg konto",inputId:t.id,labelId:t.labelledById},r.createElement(R,{...t,selectedAccount:o,onAccountSelected:n}))}},$={args:{...E.args},render:function(t){const[o,n]=m.useState(te[2]);return r.createElement(k,{label:"Velg konto",inputId:t.id,labelId:t.labelledById},r.createElement(R,{...t,selectedAccount:o,onAccountSelected:n}))}},Ae=te.map(e=>({...e,prettyName:`${e.name} - ${re(e.accountNumber)}`})),z={args:{id:"input-id",labelledById:"label-id",locale:"nb",formatAccountNumber:!0,allowCustomAccount:!1,displayAttribute:"prettyName",accounts:Ae},render:function(t){const[o,n]=m.useState(Ae[2]);return r.createElement(k,{label:"Velg konto",inputId:t.id,labelId:t.labelledById},r.createElement(R,{...t,selectedAccount:o,onAccountSelected:n}))}},X={args:{accounts:te,locale:"nb",formatAccountNumber:!0,allowCustomAccount:!1},render:function(t){const[o,n]=m.useState();return r.createElement(k,{label:"Velg konto",description:"Velg den kontoen du har mest lyst på"},r.createElement(R,{...t,selectedAccount:o,onAccountSelected:n,onReset:()=>n(void 0)}))}};var ye,ve,Ie;E.parameters={...E.parameters,docs:{...(ye=E.parameters)==null?void 0:ye.docs,source:{originalSource:`{
  args: {
    accounts,
    locale: 'nb',
    formatAccountNumber: true,
    allowCustomAccount: false
  },
  render: function Render(args) {
    const [selectedAccount, setSelectedAccount] = useState<Account>();
    return <InputGroup label="Velg konto">
                <AccountSelector {...args} selectedAccount={selectedAccount} onAccountSelected={setSelectedAccount} onReset={() => setSelectedAccount(undefined)} />
            </InputGroup>;
  }
}`,...(Ie=(ve=E.parameters)==null?void 0:ve.docs)==null?void 0:Ie.source}}};var we,Se,Ee;G.parameters={...G.parameters,docs:{...(we=G.parameters)==null?void 0:we.docs,source:{originalSource:`{
  args: {
    ...Standard.args,
    showBalance: true
  },
  render: function Render(args) {
    const [selectedAccount, setSelectedAccount] = useState<Account>();
    return <InputGroup label="Velg konto" inputId={args.id} labelId={args.labelledById}>
                <AccountSelector {...args} selectedAccount={selectedAccount} onAccountSelected={setSelectedAccount} />
            </InputGroup>;
  }
}`,...(Ee=(Se=G.parameters)==null?void 0:Se.docs)==null?void 0:Ee.source}}};var Re,Te,xe;j.parameters={...j.parameters,docs:{...(Re=j.parameters)==null?void 0:Re.docs,source:{originalSource:`{
  args: {
    ...Standard.args,
    allowCustomAccount: true
  },
  render: function Render(args) {
    const [selectedAccount, setSelectedAccount] = useState<Account>();
    return <InputGroup label="Velg konto" inputId={args.id} labelId={args.labelledById}>
                <AccountSelector {...args} selectedAccount={selectedAccount} onAccountSelected={setSelectedAccount} />
            </InputGroup>;
  }
}`,...(xe=(Te=j.parameters)==null?void 0:Te.docs)==null?void 0:xe.source}}};var Ce,Ne,De;K.parameters={...K.parameters,docs:{...(Ce=K.parameters)==null?void 0:Ce.docs,source:{originalSource:`{
  args: {
    ...Standard.args,
    formatAccountNumber: false
  },
  render: function Render(args) {
    const [selectedAccount, setSelectedAccount] = useState<Account>();
    return <InputGroup label="Velg konto" inputId={args.id} labelId={args.labelledById}>
                <AccountSelector {...args} selectedAccount={selectedAccount} onAccountSelected={setSelectedAccount} />
            </InputGroup>;
  }
}`,...(De=(Ne=K.parameters)==null?void 0:Ne.docs)==null?void 0:De.source}}};var ke,Le,Be;H.parameters={...H.parameters,docs:{...(ke=H.parameters)==null?void 0:ke.docs,source:{originalSource:`{
  args: {
    ...Standard.args,
    formatAccountNumber: false
  },
  render: function Render(args) {
    const [selectedAccount, setSelectedAccount] = useState<Account>();
    const CustomOptionBody = ({
      item,
      isHighlighted
    }: {
      item: Account;
      isHighlighted: boolean;
    }) => {
      return <div style={{
        padding: '8px',
        background: isHighlighted ? '#ff9100' : 'white'
      }}>
                    <div>{item.name}</div>
                    <div style={{
          display: 'flex',
          justifyContent: 'space-between'
        }}>
                        <SmallText>{item.accountNumber}</SmallText>
                        <SmallText>{item.balance}</SmallText>
                    </div>
                </div>;
    };
    return <InputGroup label="Velg konto" inputId={args.id} labelId={args.labelledById}>
                <AccountSelector {...args} optionBody={CustomOptionBody} selectedAccount={selectedAccount} onAccountSelected={setSelectedAccount} />
            </InputGroup>;
  }
}`,...(Be=(Le=H.parameters)==null?void 0:Le.docs)==null?void 0:Be.source}}};var Ve,Me,_e;W.parameters={...W.parameters,docs:{...(Ve=W.parameters)==null?void 0:Ve.docs,source:{originalSource:`{
  args: {
    ...Standard.args,
    hideAccountDetails: false
  },
  render: function Render(args) {
    const [selectedAccount, setSelectedAccount] = useState<Account>();
    return <InputGroup label="Velg konto" inputId={args.id} labelId={args.labelledById}>
                <AccountSelector {...args} selectedAccount={selectedAccount} onAccountSelected={setSelectedAccount} />
            </InputGroup>;
  }
}`,...(_e=(Me=W.parameters)==null?void 0:Me.docs)==null?void 0:_e.source}}};var Oe,qe,Fe;U.parameters={...U.parameters,docs:{...(Oe=U.parameters)==null?void 0:Oe.docs,source:{originalSource:`{
  args: {
    ...Standard.args,
    postListElement: <span>Some text describing the list</span>
  },
  render: function Render(args) {
    const [selectedAccount, setSelectedAccount] = useState<Account>();
    return <InputGroup label="Velg konto" inputId={args.id} labelId={args.labelledById}>
                <AccountSelector {...args} selectedAccount={selectedAccount} onAccountSelected={setSelectedAccount} />
            </InputGroup>;
  }
}`,...(Fe=(qe=U.parameters)==null?void 0:qe.docs)==null?void 0:Fe.source}}};var Pe,Ge,je;$.parameters={...$.parameters,docs:{...(Pe=$.parameters)==null?void 0:Pe.docs,source:{originalSource:`{
  args: {
    ...Standard.args
  },
  render: function Render(args) {
    const [selectedAccount, setSelectedAccount] = useState<Account>(accounts[2]);
    return <InputGroup label="Velg konto" inputId={args.id} labelId={args.labelledById}>
                <AccountSelector {...args} selectedAccount={selectedAccount} onAccountSelected={setSelectedAccount} />
            </InputGroup>;
  }
}`,...(je=(Ge=$.parameters)==null?void 0:Ge.docs)==null?void 0:je.source}}};var Ke,He,We;z.parameters={...z.parameters,docs:{...(Ke=z.parameters)==null?void 0:Ke.docs,source:{originalSource:`{
  args: {
    id: 'input-id',
    labelledById: 'label-id',
    locale: 'nb',
    formatAccountNumber: true,
    allowCustomAccount: false,
    displayAttribute: 'prettyName',
    accounts: prettyAccounts
  },
  render: function Render(args) {
    const [selectedAccount, setSelectedAccount] = useState<PrettyAccount>(prettyAccounts[2]);
    return <InputGroup label="Velg konto" inputId={args.id} labelId={args.labelledById}>
                <AccountSelector<PrettyAccount> {...args} selectedAccount={selectedAccount} onAccountSelected={setSelectedAccount} />
            </InputGroup>;
  }
}`,...(We=(He=z.parameters)==null?void 0:He.docs)==null?void 0:We.source}}};var Ue,$e,ze;X.parameters={...X.parameters,docs:{...(Ue=X.parameters)==null?void 0:Ue.docs,source:{originalSource:`{
  args: {
    accounts,
    locale: 'nb',
    formatAccountNumber: true,
    allowCustomAccount: false
  },
  render: function Render(args) {
    const [selectedAccount, setSelectedAccount] = useState<Account>();
    return <InputGroup label="Velg konto" description="Velg den kontoen du har mest lyst på">
                <AccountSelector {...args} selectedAccount={selectedAccount} onAccountSelected={setSelectedAccount} onReset={() => setSelectedAccount(undefined)} />
            </InputGroup>;
  }
}`,...(ze=($e=X.parameters)==null?void 0:$e.docs)==null?void 0:ze.source}}};const Ot=["Standard","ShowBalance","AllowCustomAccount","NoFormatAccount","ListElementBody","HideAccountDetails","PostListElement","InitialValue","CustomDisplayAttribute","WithDescription"],Ht=Object.freeze(Object.defineProperty({__proto__:null,AllowCustomAccount:j,CustomDisplayAttribute:z,HideAccountDetails:W,InitialValue:$,ListElementBody:H,NoFormatAccount:K,PostListElement:U,ShowBalance:G,Standard:E,WithDescription:X,__namedExportsOrder:Ot,default:_t},Symbol.toStringTag,{value:"Module"}));export{Ht as A,z as C,W as H,H as L,K as N,U as P,E as S,X as W,G as a,j as b};
