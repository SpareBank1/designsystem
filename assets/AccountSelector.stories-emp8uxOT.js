import{R as r,r as m}from"./index-DQDNmYQF.js";import{c as Q}from"./index-QCImZZ3W.js";import{g as st,a as X,f as ct,u as dt,b as it,c as ut,d as pt,e as pe,m as mt,T as ft,L as ht,R as gt,i as bt,j as yt,s as me,k as fe,l as ne,n as We,o as At,p as vt,t as It}from"./texts-CK0wEwuU.js";import{M as te}from"./MicroText-T72i9KwR.js";import{i as wt,S as he}from"./index-DlnE8UeV.js";import{I as B}from"./InputGroup-DOKvm3eQ.js";function Ue(e){var t=e.item,o=e.dropdownAttributes,n=e.isHighlighted,a=e.locale,i=o[0],h=o.slice(1),A=t[i],l=h.map(function(u,R){return r.createElement(te,{"aria-label":u==="balance"?st(a,t[u]):void 0,className:"ffe-searchable-dropdown__detail-text",key:R},t[u])});return r.createElement("div",{className:Q("ffe-searchable-dropdown__list-item-body",{"ffe-searchable-dropdown__list-item-body--highlighted":n})},A,!!l.length&&r.createElement("div",{className:"ffe-searchable-dropdown__list-item-body-details"},l))}Ue.__docgenInfo={description:"",methods:[],displayName:"OptionBody"};var ge=function(e){var t=e.state,o=e.searchAttributes,n=e.maxRenderedDropdownElements,a=e.dropdownList,i=e.noMatchDropdownList,h=e.searchMatcher,A=e.displayAttribute,l=e.onChange,u=X({inputValue:t.inputValue,searchAttributes:o,maxRenderedDropdownElements:n,dropdownList:a,noMatchDropdownList:i,searchMatcher:h,showAllItemsInDropdown:!0}).listToRender,R=t.inputValue===""&&!!t.selectedItem,D=t.listToRender.length===1&&o.map(function(y){var w;return t.listToRender[0][y]===((w=t.selectedItem)===null||w===void 0?void 0:w[y])}).includes(!1)&&t.highlightedIndex!==-1,v=t.selectedItem;R?(l==null||l(null),v=void 0):D&&(l==null||l(t.listToRender[0]),v=t.listToRender[0]);var T=v?v[A]:"";return{inputValue:T,selectedItem:v,listToRender:u}},f=function(){return f=Object.assign||function(e){for(var t,o=1,n=arguments.length;o<n;o++){t=arguments[o];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},f.apply(this,arguments)},St=function(e){var t=e.searchAttributes,o=e.dropdownList,n=e.displayAttribute,a=e.noMatchDropdownList,i=e.maxRenderedDropdownElements,h=e.searchMatcher,A=e.onChange;return function(l,u){var R,D,v,T,y,w,k,M,V,g,b;switch(u.type){case"InputKeyDownEscape":return f(f({},l),{noMatch:!1,isExpanded:!1,highlightedIndex:-1,inputValue:l.selectedItem?l.selectedItem[n]:""});case"InputClick":{var x=X({inputValue:l.inputValue,searchAttributes:t,maxRenderedDropdownElements:i,dropdownList:o,noMatchDropdownList:a,searchMatcher:h,showAllItemsInDropdown:!0}),C=x.noMatch,p=x.listToRender;return f(f({},l),{isExpanded:!0,listToRender:p,noMatch:C})}case"InputChange":{var q=X({inputValue:(D=(R=u.payload)===null||R===void 0?void 0:R.inputValue)!==null&&D!==void 0?D:"",searchAttributes:t,maxRenderedDropdownElements:i,dropdownList:o,noMatchDropdownList:a,searchMatcher:h,showAllItemsInDropdown:!1}),C=q.noMatch,p=q.listToRender;return f(f({},l),{isExpanded:!0,inputValue:(T=(v=u.payload)===null||v===void 0?void 0:v.inputValue)!==null&&T!==void 0?T:"",listToRender:p,highlightedIndex:((w=(y=u.payload)===null||y===void 0?void 0:y.inputValue)===null||w===void 0?void 0:w.trim())===""||p.length===0?-1:0,noMatch:C})}case"ToggleButtonPressed":{if(l.isExpanded){var _=ge({state:l,searchAttributes:t,maxRenderedDropdownElements:i,dropdownList:o,noMatchDropdownList:a,searchMatcher:h,displayAttribute:n,onChange:A}),p=_.listToRender,O=_.inputValue,d=_.selectedItem;return f(f({},l),{isExpanded:!1,highlightedIndex:-1,inputValue:O,selectedItem:d,listToRender:p})}return f(f({},l),{isExpanded:!l.isExpanded})}case"ItemSelectedProgrammatically":case"ItemOnClick":case"InputKeyDownEnter":return f(f({},l),{isExpanded:!1,highlightedIndex:-1,selectedItem:(k=u.payload)===null||k===void 0?void 0:k.selectedItem,inputValue:((V=(M=u.payload)===null||M===void 0?void 0:M.selectedItem)===null||V===void 0?void 0:V[n])||""});case"InputKeyDownArrowDown":case"InputKeyDownArrowUp":return f(f({},l),{isExpanded:!0,highlightedIndex:(b=(g=u.payload)===null||g===void 0?void 0:g.highlightedIndex)!==null&&b!==void 0?b:-1});case"FocusMovedOutSide":{var S=ge({state:l,searchAttributes:t,maxRenderedDropdownElements:i,dropdownList:o,noMatchDropdownList:a,searchMatcher:h,displayAttribute:n,onChange:A}),p=S.listToRender,O=S.inputValue,d=S.selectedItem;return f(f({},l),{isExpanded:!1,highlightedIndex:-1,inputValue:O,selectedItem:d,listToRender:p})}case"DropdownListPropUpdated":return f(f({},l),X({inputValue:l.inputValue,searchAttributes:t,maxRenderedDropdownElements:i,dropdownList:o,noMatchDropdownList:a,searchMatcher:h,showAllItemsInDropdown:!!l.selectedItem}));default:return l}}},J=function(){return J=Object.assign||function(e){for(var t,o=1,n=arguments.length;o<n;o++){t=arguments[o];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},J.apply(this,arguments)},Et=function(e,t){var o={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(o[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(o[n[a]]=e[n[a]]);return o},Rt="ArrowUp",Tt="ArrowDown",xt="Escape",Ct="Enter",Nt="Tab";function Dt(e,t){var o,n,a,i,h,A,l,u=e.id,R=e.labelledById,D=e.className,v=e.dropdownList,T=e.dropdownAttributes,y=e.searchAttributes,w=e.displayAttribute,k=w===void 0?y[0]:w,M=e.maxRenderedDropdownElements,V=M===void 0?Number.MAX_SAFE_INTEGER:M,g=e.onChange,b=e.inputProps,x=e.optionBody,C=e.postListElement,p=e.noMatch,q=e.locale,_=q===void 0?"nb":q,O=e.ariaInvalid,d=e.formatter,S=d===void 0?function(c){return c}:d,F=e.searchMatcher,P=e.selectedItem,re=e.isLoading,ae=re===void 0?!1:re,Je=e.onOpen,Qe=e.onClose,le=e.isEqual,Ye=le===void 0?wt:le,Ze=Et(e,["id","labelledById","className","dropdownList","dropdownAttributes","searchAttributes","displayAttribute","maxRenderedDropdownElements","onChange","inputProps","optionBody","postListElement","noMatch","locale","ariaInvalid","formatter","searchMatcher","selectedItem","isLoading","onOpen","onClose","isEqual"]),se=m.useReducer(St({dropdownList:v,displayAttribute:k,searchAttributes:y,maxRenderedDropdownElements:V,noMatchDropdownList:p==null?void 0:p.dropdownList,searchMatcher:F,onChange:g}),{isExpanded:!1,selectedItems:[],highlightedIndex:-1,formattedInputValue:"",inputValue:P?P[k]:""},function(c){return J(J({},c),X({inputValue:c.inputValue,searchAttributes:y,maxRenderedDropdownElements:V,dropdownList:v,noMatchDropdownList:p==null?void 0:p.dropdownList,searchMatcher:F,showAllItemsInDropdown:!!P}))}),s=se[0],I=se[1],Y=dt({listToRender:s.listToRender}),ce=m.useState(!1),et=ce[0],tt=ce[1],ee=m.useRef(null),de=m.useRef(null),nt=x||Ue,Z=m.useRef(null),ie=m.useId(),ue=m.useRef(!1),ot=function(){I({type:"InputClick"})},rt=function(c){b!=null&&b.onBlur&&b.onBlur(c)};m.useEffect(function(){I({type:"ItemSelectedProgrammatically",payload:{selectedItem:P}})},[P,I]),it({hasFocus:et,isExpanded:s.isExpanded,isLoading:ae,locale:_,resultCount:s.listToRender.length,selectedValue:(o=s.selectedItem)===null||o===void 0?void 0:o[k]}),m.useLayoutEffect(function(){var c;ue.current&&((c=ee.current)===null||c===void 0||c.focus(),ue.current=!1)}),m.useEffect(function(){I({type:"DropdownListPropUpdated"})},[v,I]),ut({isExpanded:s.isExpanded,onClose:Qe,onOpen:Je});var at=m.useCallback(function(){return I({type:"FocusMovedOutSide"})},[]);pt({id:u,containerRef:de,handleFocusMovedOutside:at});var lt=function(c){if(c.key===Ct&&s.highlightedIndex>=0){c.preventDefault(),I({type:"InputKeyDownEnter",payload:{selectedItem:s.listToRender[s.highlightedIndex]}}),g==null||g(s.listToRender[s.highlightedIndex]);return}else if(c.key===xt){I({type:"InputKeyDownEscape"});return}if(c.key===Rt){if(c.preventDefault(),s.listToRender.length){var L=bt(s.highlightedIndex,s.listToRender.length);I({type:"InputKeyDownArrowUp",payload:{highlightedIndex:L}}),L>=0&&me(s==null?void 0:s.listToRender[L],T),fe(Y[L].current,Z.current)}return}if(c.key===Tt&&(c.preventDefault(),s.listToRender.length)){var L=yt(s.highlightedIndex,s.listToRender.length);I({type:"InputKeyDownArrowDown",payload:{highlightedIndex:L}}),L>=0&&me(s==null?void 0:s.listToRender[L],T),fe(Y[L].current,Z.current)}c.key===Nt&&I({type:"FocusMovedOutSide"})};return r.createElement("div",{onKeyDown:lt,className:Q(D,"ffe-searchable-dropdown","ffe-default-mode"),ref:de,onMouseDown:pe(u),onFocus:pe(u)},r.createElement("div",{className:"ffe-searchable-dropdown__input",onClick:function(){var c;(c=ee.current)===null||c===void 0||c.focus()}},r.createElement("input",J({},b,{ref:mt([ee,t]),id:u,"aria-labelledby":R,onClick:ot,onChange:function(c){b!=null&&b.onChange&&b.onChange(c),I({type:"InputChange",payload:{inputValue:c.target.value}})},onFocus:function(){tt(!0),I({type:"InputClick"})},onBlur:rt,"aria-describedby":[b==null?void 0:b["aria-describedby"],s.noMatch&&ie].filter(Boolean).join(" ")||void 0,value:S(s.inputValue),type:"text",role:"combobox",autoComplete:"off","aria-controls":(a=(n=Z.current)===null||n===void 0?void 0:n.getAttribute("id"))!==null&&a!==void 0?a:void 0,"aria-expanded":s.isExpanded&&!!s.listToRender.length,"aria-autocomplete":"list","aria-haspopup":"listbox","aria-activedescendant":s.highlightedIndex>=0&&(A=(h=(i=Y[s.highlightedIndex])===null||i===void 0?void 0:i.current)===null||h===void 0?void 0:h.getAttribute("id"))!==null&&A!==void 0?A:void 0,"aria-invalid":(l=Ze["aria-invalid"])!==null&&l!==void 0?l:O}))),r.createElement(ft,{isExpanded:s.isExpanded,onClick:function(){I({type:"ToggleButtonPressed"})},isLoading:ae}),r.createElement(ht,{ref:Z,isExpanded:s.isExpanded},s.isExpanded&&r.createElement(gt,{isEqual:Ye,listToRender:s.listToRender,OptionBody:nt,highlightedIndex:s.highlightedIndex,dropdownAttributes:T,locale:_,refs:Y,onChange:function(c){I({type:"ItemOnClick",payload:{selectedItem:c}}),g==null||g(c)},noMatch:s.noMatch?p:void 0,noMatchMessageId:ie,selectedItems:s.selectedItem?[s.selectedItem]:[]}),C&&r.createElement("div",{className:"ffe-searchable-dropdown__list--post-list-element"},C)))}var $e=ct(Dt);$e.__docgenInfo={description:"",methods:[],displayName:"SearchableDropdown"};function ze({account:e,showBalance:t=!0,ariaInvalid:o,locale:n}){const{balance:a,accountNumber:i,currencyCode:h}=e??{},A=!e&&(o==="true"||o===!0);return r.createElement("div",{className:Q("ffe-small-text","ffe-account-selector-single__details",{"ffe-account-selector-single__details--invalid-empty":A})},e&&r.createElement(r.Fragment,null,r.createElement("div",{className:"ffe-account-selector-single__details--left"},ne(i)),t&&r.createElement("div",{className:"ffe-account-selector-single__details--right"},We(a,n,h))))}ze.__docgenInfo={description:"",methods:[],displayName:"AccountDetails",props:{account:{required:!1,tsType:{name:"Account"},description:""},showBalance:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},ariaInvalid:{required:!0,tsType:{name:"ReactComponentPropsWithoutRef['aria-invalid']",raw:"React.ComponentPropsWithoutRef<'div'>['aria-invalid']"},description:""},locale:{required:!0,tsType:{name:"union",raw:"'nb' | 'nn' | 'en'",elements:[{name:"literal",value:"'nb'"},{name:"literal",value:"'nn'"},{name:"literal",value:"'en'"}]},description:""}}};const kt=({accounts:e,selectedAccount:t,inputValue:o})=>t&&t.name===o&&!e.find(a=>a.accountNumber===t.accountNumber)?[...e,t]:e;function Xe({item:e,isHighlighted:t,showBalance:o,locale:n}){return r.createElement("div",{className:Q("ffe-searchable-dropdown__list-item-body",{"ffe-searchable-dropdown__list-item-body--highlighted":t})},e.name,r.createElement("div",{className:"ffe-searchable-dropdown__list-item-body-details"},r.createElement(te,{className:"ffe-searchable-dropdown__detail-text"},ne(e.accountNumber)),o&&r.createElement(te,{className:"ffe-searchable-dropdown__detail-text"},We(e.balance,n,e.currencyCode))))}Xe.__docgenInfo={description:"",methods:[],displayName:"AccountActionBody",props:{item:{required:!0,tsType:{name:"Item"},description:""},isHighlighted:{required:!0,tsType:{name:"boolean"},description:""},showBalance:{required:!0,tsType:{name:"boolean"},description:""},locale:{required:!0,tsType:{name:"union",raw:"'nb' | 'nn' | 'en'",elements:[{name:"literal",value:"'nb'"},{name:"literal",value:"'nn'"},{name:"literal",value:"'en'"}]},description:""}}};const N=({id:e,className:t,locale:o="nb",selectedAccount:n,hideAccountDetails:a=!1,showBalance:i=!1,noMatches:h,accounts:A,onAccountSelected:l,allowCustomAccount:u=!1,labelledById:R,optionBody:D,postListElement:v,onReset:T,inputProps:y,formatAccountNumber:w=!0,ariaInvalid:k,onOpen:M,onClose:V,displayAttribute:g,...b})=>{const[x,C]=m.useState((n==null?void 0:n.name)||""),p=w?vt:void 0,q=d=>{u&&C(d.target.value),y!=null&&y.onChange&&y.onChange(d)},_=d=>{const S=d===null,F=!(d!=null&&d.accountNumber);S?(C(""),T()):F?(l({name:d.name,accountNumber:d.name,...g?{[g]:d.name}:{}}),C(d.name)):(l(d),C(d.name))},O=b["aria-invalid"]??k;return r.createElement("div",{className:Q("ffe-account-selector-single",t),id:`${e}-account-selector-container`},r.createElement($e,{id:e,labelledById:R,displayAttribute:g,inputProps:{...y,onChange:q},dropdownAttributes:i?["name","accountNumber","balance"]:["name","accountNumber"],postListElement:v,dropdownList:u?kt({selectedAccount:n,accounts:A,inputValue:x}):A,noMatch:u&&x.trim()!==""?{dropdownList:[{name:p?p(x):x,accountNumber:"",...g?{[g]:p?p(x):x}:{}}]}:h??{text:It[o].noMatch},formatter:p,onChange:_,searchAttributes:["name","accountNumber",...g?[g]:[]],locale:o,optionBody:({item:d,isHighlighted:S,...F})=>D?r.createElement(D,{item:d,isHighlighted:S,...F}):r.createElement(Xe,{item:d,isHighlighted:S,locale:o,showBalance:i}),ariaInvalid:O,searchMatcher:At,selectedItem:n,onOpen:M,onClose:V,isEqual:(d,S)=>d.accountNumber===S.accountNumber}),!a&&r.createElement(ze,{ariaInvalid:O,account:n,showBalance:i&&["string","number"].includes(typeof(n==null?void 0:n.balance)),locale:o}))};N.__docgenInfo={description:"",methods:[],displayName:"AccountSelector",props:{accounts:{required:!0,tsType:{name:"Array",elements:[{name:"T"}],raw:"T[]"},description:`Array of objects:
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
[Read more in the upgrade guide](https://sparebank1.github.io/designsystem/?path=/docs/introduksjon-changelog--docs#2025---februar---semantiske-farger)`}}};const Lt={title:"Komponenter/Account-selector/AccountSelector",component:N,argTypes:{postListElement:{options:["text","html"],mapping:{text:"Some text describing the list",html:r.createElement("span",null,"Some text describing the list")}}}},oe=[{accountNumber:"39920143613",name:"Brukskonto",currencyCode:"NOK",balance:1337},{accountNumber:"42142102514",name:"Brukskonto2",currencyCode:"NOK",balance:13337},{accountNumber:"23200355148",name:"Sparekonto1",currencyCode:"NOK",balance:109236},{accountNumber:"23207117277",name:"Sparekonto2",currencyCode:"NOK",balance:0}],E={args:{accounts:oe,locale:"nb",formatAccountNumber:!0,allowCustomAccount:!1},render:function(t){const[o,n]=m.useState();return r.createElement(B,{label:"Velg konto"},r.createElement(N,{...t,selectedAccount:o,onAccountSelected:n,onReset:()=>n(void 0)}))}},j={args:{...E.args,showBalance:!0},render:function(t){const[o,n]=m.useState();return r.createElement(B,{label:"Velg konto",inputId:t.id,labelId:t.labelledById},r.createElement(N,{...t,selectedAccount:o,onAccountSelected:n}))}},G={args:{...E.args,allowCustomAccount:!0},render:function(t){const[o,n]=m.useState();return r.createElement(B,{label:"Velg konto",inputId:t.id,labelId:t.labelledById},r.createElement(N,{...t,selectedAccount:o,onAccountSelected:n}))}},K={args:{...E.args,formatAccountNumber:!1},render:function(t){const[o,n]=m.useState();return r.createElement(B,{label:"Velg konto",inputId:t.id,labelId:t.labelledById},r.createElement(N,{...t,selectedAccount:o,onAccountSelected:n}))}},H={args:{...E.args,formatAccountNumber:!1},render:function(t){const[o,n]=m.useState(),a=({item:i,isHighlighted:h})=>r.createElement("div",{style:{padding:"8px",background:h?"#ff9100":"white"}},r.createElement("div",null,i.name),r.createElement("div",{style:{display:"flex",justifyContent:"space-between"}},r.createElement(he,null,i.accountNumber),r.createElement(he,null,i.balance)));return r.createElement(B,{label:"Velg konto",inputId:t.id,labelId:t.labelledById},r.createElement(N,{...t,optionBody:a,selectedAccount:o,onAccountSelected:n}))}},W={args:{...E.args,hideAccountDetails:!1},render:function(t){const[o,n]=m.useState();return r.createElement(B,{label:"Velg konto",inputId:t.id,labelId:t.labelledById},r.createElement(N,{...t,selectedAccount:o,onAccountSelected:n}))}},U={args:{...E.args,postListElement:r.createElement("span",null,"Some text describing the list")},render:function(t){const[o,n]=m.useState();return r.createElement(B,{label:"Velg konto",inputId:t.id,labelId:t.labelledById},r.createElement(N,{...t,selectedAccount:o,onAccountSelected:n}))}},$={args:{...E.args},render:function(t){const[o,n]=m.useState(oe[2]);return r.createElement(B,{label:"Velg konto",inputId:t.id,labelId:t.labelledById},r.createElement(N,{...t,selectedAccount:o,onAccountSelected:n}))}},be=oe.map(e=>({...e,prettyName:`${e.name} - ${ne(e.accountNumber)}`})),z={args:{id:"input-id",labelledById:"label-id",locale:"nb",formatAccountNumber:!0,allowCustomAccount:!1,displayAttribute:"prettyName",accounts:be},render:function(t){const[o,n]=m.useState(be[2]);return r.createElement(B,{label:"Velg konto",inputId:t.id,labelId:t.labelledById},r.createElement(N,{...t,selectedAccount:o,onAccountSelected:n}))}};var ye,Ae,ve;E.parameters={...E.parameters,docs:{...(ye=E.parameters)==null?void 0:ye.docs,source:{originalSource:`{
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
}`,...(ve=(Ae=E.parameters)==null?void 0:Ae.docs)==null?void 0:ve.source}}};var Ie,we,Se;j.parameters={...j.parameters,docs:{...(Ie=j.parameters)==null?void 0:Ie.docs,source:{originalSource:`{
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
}`,...(Se=(we=j.parameters)==null?void 0:we.docs)==null?void 0:Se.source}}};var Ee,Re,Te;G.parameters={...G.parameters,docs:{...(Ee=G.parameters)==null?void 0:Ee.docs,source:{originalSource:`{
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
}`,...(Te=(Re=G.parameters)==null?void 0:Re.docs)==null?void 0:Te.source}}};var xe,Ce,Ne;K.parameters={...K.parameters,docs:{...(xe=K.parameters)==null?void 0:xe.docs,source:{originalSource:`{
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
}`,...(Ne=(Ce=K.parameters)==null?void 0:Ce.docs)==null?void 0:Ne.source}}};var De,ke,Le;H.parameters={...H.parameters,docs:{...(De=H.parameters)==null?void 0:De.docs,source:{originalSource:`{
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
}`,...(Le=(ke=H.parameters)==null?void 0:ke.docs)==null?void 0:Le.source}}};var Be,Me,Ve;W.parameters={...W.parameters,docs:{...(Be=W.parameters)==null?void 0:Be.docs,source:{originalSource:`{
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
}`,...(Ve=(Me=W.parameters)==null?void 0:Me.docs)==null?void 0:Ve.source}}};var _e,Oe,qe;U.parameters={...U.parameters,docs:{...(_e=U.parameters)==null?void 0:_e.docs,source:{originalSource:`{
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
}`,...(qe=(Oe=U.parameters)==null?void 0:Oe.docs)==null?void 0:qe.source}}};var Fe,Pe,je;$.parameters={...$.parameters,docs:{...(Fe=$.parameters)==null?void 0:Fe.docs,source:{originalSource:`{
  args: {
    ...Standard.args
  },
  render: function Render(args) {
    const [selectedAccount, setSelectedAccount] = useState<Account>(accounts[2]);
    return <InputGroup label="Velg konto" inputId={args.id} labelId={args.labelledById}>
                <AccountSelector {...args} selectedAccount={selectedAccount} onAccountSelected={setSelectedAccount} />
            </InputGroup>;
  }
}`,...(je=(Pe=$.parameters)==null?void 0:Pe.docs)==null?void 0:je.source}}};var Ge,Ke,He;z.parameters={...z.parameters,docs:{...(Ge=z.parameters)==null?void 0:Ge.docs,source:{originalSource:`{
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
}`,...(He=(Ke=z.parameters)==null?void 0:Ke.docs)==null?void 0:He.source}}};const Bt=["Standard","ShowBalance","AllowCustomAccount","NoFormatAccount","ListElementBody","HideAccountDetails","PostListElement","InitialValue","CustomDisplayAttribute"],Pt=Object.freeze(Object.defineProperty({__proto__:null,AllowCustomAccount:G,CustomDisplayAttribute:z,HideAccountDetails:W,InitialValue:$,ListElementBody:H,NoFormatAccount:K,PostListElement:U,ShowBalance:j,Standard:E,__namedExportsOrder:Bt,default:Lt},Symbol.toStringTag,{value:"Module"}));export{Pt as A,z as C,W as H,H as L,K as N,U as P,E as S,j as a,G as b};
