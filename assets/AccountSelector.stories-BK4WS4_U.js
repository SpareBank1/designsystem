import{R as r,r as i}from"./index-eCxJ45ll.js";import{c as J}from"./index-DezCrw0f.js";import{g as j,f as tt,u as nt,a as ot,b as rt,c as at,d as ce,m as lt,T as dt,L as st,R as ct,h as it,s as ie,i as ue,j as ut,k as qe,l as Oe,t as pt,n as mt,o as gt}from"./texts-BNZzZC2E.js";import{M as te}from"./MicroText-DhU_-SBY.js";import{i as ft,S as pe}from"./index-BhB8jUJx.js";import{I as k}from"./InputGroup-B73IVGIl.js";function Fe(t){var e=t.item,o=t.dropdownAttributes,n=t.isHighlighted,d=o[0],u=o.slice(1),p=e[d],a=u.map(function(f,b){return r.createElement(te,{className:"ffe-searchable-dropdown__detail-text",key:b},e[f])});return r.createElement("div",{className:J("ffe-searchable-dropdown__list-item-body",{"ffe-searchable-dropdown__list-item-body--highlighted":n})},p,!!a.length&&r.createElement("div",{className:"ffe-searchable-dropdown__list-item-body-details"},a))}Fe.__docgenInfo={description:"",methods:[],displayName:"OptionBody"};var g=function(){return g=Object.assign||function(t){for(var e,o=1,n=arguments.length;o<n;o++){e=arguments[o];for(var d in e)Object.prototype.hasOwnProperty.call(e,d)&&(t[d]=e[d])}return t},g.apply(this,arguments)},ht=function(t){var e=t.searchAttributes,o=t.dropdownList,n=t.noMatchDropdownList,d=t.maxRenderedDropdownElements,u=t.searchMatcher,p=t.onChange;return function(a,f){var b,M,_,T,C,v,D,L,A,m,V;switch(f.type){case"InputKeyDownEscape":return g(g({},a),{noMatch:!1,isExpanded:!1,highlightedIndex:-1,inputValue:a.selectedItem?a.selectedItem[e[0]]:""});case"InputClick":{var q=j({inputValue:a.inputValue,searchAttributes:e,maxRenderedDropdownElements:d,dropdownList:o,noMatchDropdownList:n,searchMatcher:u,showAllItemsInDropdown:!0}),h=q.noMatch,y=q.listToRender;return g(g({},a),{isExpanded:!0,listToRender:y,noMatch:h})}case"InputChange":{var R=j({inputValue:(M=(b=f.payload)===null||b===void 0?void 0:b.inputValue)!==null&&M!==void 0?M:"",searchAttributes:e,maxRenderedDropdownElements:d,dropdownList:o,noMatchDropdownList:n,searchMatcher:u,showAllItemsInDropdown:!1}),h=R.noMatch,y=R.listToRender;return g(g({},a),{isExpanded:!0,inputValue:(T=(_=f.payload)===null||_===void 0?void 0:_.inputValue)!==null&&T!==void 0?T:"",listToRender:y,highlightedIndex:((v=(C=f.payload)===null||C===void 0?void 0:C.inputValue)===null||v===void 0?void 0:v.trim())===""||y.length===0?-1:0,noMatch:h})}case"ToggleButtonPressed":return g(g({},a),{isExpanded:!a.isExpanded});case"ItemSelectedProgrammatically":case"ItemOnClick":case"InputKeyDownEnter":return g(g({},a),{isExpanded:!1,highlightedIndex:-1,selectedItem:(D=f.payload)===null||D===void 0?void 0:D.selectedItem,inputValue:((A=(L=f.payload)===null||L===void 0?void 0:L.selectedItem)===null||A===void 0?void 0:A[e[0]])||""});case"InputKeyDownArrowDown":case"InputKeyDownArrowUp":return g(g({},a),{isExpanded:!0,highlightedIndex:(V=(m=f.payload)===null||m===void 0?void 0:m.highlightedIndex)!==null&&V!==void 0?V:-1});case"FocusMovedOutSide":{var y=j({inputValue:a.inputValue,searchAttributes:e,maxRenderedDropdownElements:d,dropdownList:o,noMatchDropdownList:n,searchMatcher:u,showAllItemsInDropdown:!0}).listToRender,P=a.inputValue===""&&!!a.selectedItem,O=a.listToRender.length===1&&e.map(function(N){var F;return a.listToRender[0][N]===((F=a.selectedItem)===null||F===void 0?void 0:F[N])}).includes(!1)&&a.highlightedIndex!==-1,B=a.selectedItem;P?(p==null||p(null),B=void 0):O&&(p==null||p(a.listToRender[0]),B=a.listToRender[0]);var c=B?B[e[0]]:"";return g(g({},a),{isExpanded:!1,highlightedIndex:-1,inputValue:c,selectedItem:B,listToRender:y})}case"DropdownListPropUpdated":return g(g({},a),j({inputValue:a.inputValue,searchAttributes:e,maxRenderedDropdownElements:d,dropdownList:o,noMatchDropdownList:n,searchMatcher:u,showAllItemsInDropdown:!!a.selectedItem}));default:return a}}},X=function(){return X=Object.assign||function(t){for(var e,o=1,n=arguments.length;o<n;o++){e=arguments[o];for(var d in e)Object.prototype.hasOwnProperty.call(e,d)&&(t[d]=e[d])}return t},X.apply(this,arguments)},bt=function(t,e){var o={};for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&e.indexOf(n)<0&&(o[n]=t[n]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var d=0,n=Object.getOwnPropertySymbols(t);d<n.length;d++)e.indexOf(n[d])<0&&Object.prototype.propertyIsEnumerable.call(t,n[d])&&(o[n[d]]=t[n[d]]);return o},yt="ArrowUp",vt="ArrowDown",At="Escape",It="Enter";function wt(t,e){var o,n,d,u,p,a,f,b=t.id,M=t.labelledById,_=t.className,T=t.dropdownList,C=t.dropdownAttributes,v=t.searchAttributes,D=t.maxRenderedDropdownElements,L=D===void 0?Number.MAX_SAFE_INTEGER:D,A=t.onChange,m=t.inputProps,V=t.optionBody,q=t.postListElement,h=t.noMatch,y=t.locale,R=y===void 0?"nb":y,P=t.ariaInvalid,O=t.formatter,B=O===void 0?function(s){return s}:O,c=t.searchMatcher,S=t.selectedItem,N=t.isLoading,F=N===void 0?!1:N,He=t.onOpen,We=t.onClose,ne=t.isEqual,Ue=ne===void 0?ft:ne,$e=bt(t,["id","labelledById","className","dropdownList","dropdownAttributes","searchAttributes","maxRenderedDropdownElements","onChange","inputProps","optionBody","postListElement","noMatch","locale","ariaInvalid","formatter","searchMatcher","selectedItem","isLoading","onOpen","onClose","isEqual"]),oe=i.useReducer(ht({dropdownList:T,searchAttributes:v,maxRenderedDropdownElements:L,noMatchDropdownList:h==null?void 0:h.dropdownList,searchMatcher:c,onChange:A}),{isExpanded:!1,selectedItems:[],highlightedIndex:-1,inputValue:S?S[C[0]]:""},function(s){return X(X({},s),j({inputValue:s.inputValue,searchAttributes:v,maxRenderedDropdownElements:L,dropdownList:T,noMatchDropdownList:h==null?void 0:h.dropdownList,searchMatcher:c,showAllItemsInDropdown:!!S}))}),l=oe[0],I=oe[1],Q=nt({listToRender:l.listToRender}),re=i.useState(!1),ze=re[0],Xe=re[1],Z=i.useRef(null),ae=i.useRef(null),le=i.useRef(null),Je=V||Fe,Y=i.useRef(null),de=i.useId(),ee=i.useRef(!1),se=i.useRef(!1),Qe=function(){I({type:"InputClick"})},Ye=function(s){m!=null&&m.onBlur&&m.onBlur(s)};i.useEffect(function(){I({type:"ItemSelectedProgrammatically",payload:{selectedItem:S}})},[S,I]),ot({hasFocus:ze,isExpanded:l.isExpanded,isLoading:F,locale:R,resultCount:l.listToRender.length,selectedValue:(o=l.selectedItem)===null||o===void 0?void 0:o[v[0]]}),i.useLayoutEffect(function(){var s,w;ee.current?((s=ae.current)===null||s===void 0||s.focus(),ee.current=!1):se.current&&((w=Z.current)===null||w===void 0||w.focus(),se.current=!1)}),i.useEffect(function(){I({type:"DropdownListPropUpdated"})},[T,I]),rt({isExpanded:l.isExpanded,onClose:We,onOpen:He});var Ze=i.useCallback(function(){return I({type:"FocusMovedOutSide"})},[]);at({id:b,containerRef:le,handelFocusMovedOutside:Ze});var et=function(s){if(s.key===It&&l.highlightedIndex>=0){s.preventDefault(),I({type:"InputKeyDownEnter",payload:{selectedItem:l.listToRender[l.highlightedIndex]}}),A==null||A(l.listToRender[l.highlightedIndex]);return}else if(s.key===At){I({type:"InputKeyDownEscape"});return}if(s.key===yt){if(s.preventDefault(),l.listToRender.length){var w=it(l.highlightedIndex,l.listToRender.length);I({type:"InputKeyDownArrowUp",payload:{highlightedIndex:w}}),w>=0&&ie(l==null?void 0:l.listToRender[w],C),ue(Q[w].current,Y.current)}return}if(s.key===vt&&(s.preventDefault(),l.listToRender.length)){var w=ut(l.highlightedIndex,l.listToRender.length);I({type:"InputKeyDownArrowDown",payload:{highlightedIndex:w}}),w>=0&&ie(l==null?void 0:l.listToRender[w],C),ue(Q[w].current,Y.current)}};return r.createElement("div",{onKeyDown:et,className:J(_,"ffe-searchable-dropdown"),ref:le,onMouseDown:ce(b),onFocus:ce(b)},r.createElement("div",{className:"ffe-searchable-dropdown__input",onClick:function(){var s;(s=Z.current)===null||s===void 0||s.focus()}},r.createElement("input",X({},m,{ref:lt([Z,e]),id:b,"aria-labelledby":M,onClick:Qe,onChange:function(s){m!=null&&m.onChange&&m.onChange(s),I({type:"InputChange",payload:{inputValue:s.target.value}})},onFocus:function(){return Xe(!0)},onBlur:Ye,"aria-describedby":[m==null?void 0:m["aria-describedby"],l.noMatch&&de].filter(Boolean).join(" ")||void 0,value:B(l.inputValue),type:"text",role:"combobox",autoComplete:"off","aria-controls":(d=(n=Y.current)===null||n===void 0?void 0:n.getAttribute("id"))!==null&&d!==void 0?d:void 0,"aria-expanded":l.isExpanded&&!!l.listToRender.length,"aria-autocomplete":"list","aria-haspopup":"listbox","aria-activedescendant":l.highlightedIndex>=0&&(a=(p=(u=Q[l.highlightedIndex])===null||u===void 0?void 0:u.current)===null||p===void 0?void 0:p.getAttribute("id"))!==null&&a!==void 0?a:void 0,"aria-invalid":(f=$e["aria-invalid"])!==null&&f!==void 0?f:P}))),r.createElement(dt,{ref:ae,isExpanded:l.isExpanded,onClick:function(){return I({type:"ToggleButtonPressed"})},locale:R,isLoading:F}),r.createElement(st,{ref:Y,isExpanded:l.isExpanded},l.isExpanded&&r.createElement(ct,{isEqual:Ue,listToRender:l.listToRender,OptionBody:Je,highlightedIndex:l.highlightedIndex,dropdownAttributes:C,locale:R,refs:Q,onChange:function(s){ee.current=!0,I({type:"ItemOnClick",payload:{selectedItem:s}}),A==null||A(s)},noMatch:l.noMatch?h:void 0,noMatchMessageId:de,selectedItems:l.selectedItem?[l.selectedItem]:[]}),q&&r.createElement("div",{className:"ffe-searchable-dropdown__list--post-list-element"},q)))}var Pe=tt(wt);Pe.__docgenInfo={description:"",methods:[],displayName:"SearchableDropdown"};function je({account:t,showBalance:e=!0,ariaInvalid:o,locale:n}){const{balance:d,accountNumber:u,currencyCode:p}=t??{},a=!t&&(o==="true"||o===!0);return r.createElement("div",{className:J("ffe-small-text","ffe-account-selector-single__details",{"ffe-account-selector-single__details--invalid-empty":a})},t&&r.createElement(r.Fragment,null,r.createElement("div",{className:"ffe-account-selector-single__details--left"},qe(u)),e&&r.createElement("div",{className:"ffe-account-selector-single__details--right"},Oe(d,n,p))))}je.__docgenInfo={description:"",methods:[],displayName:"AccountDetails",props:{account:{required:!1,tsType:{name:"Account"},description:""},showBalance:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},ariaInvalid:{required:!0,tsType:{name:"ReactComponentPropsWithoutRef['aria-invalid']",raw:"React.ComponentPropsWithoutRef<'div'>['aria-invalid']"},description:""},locale:{required:!0,tsType:{name:"union",raw:"'nb' | 'nn' | 'en'",elements:[{name:"literal",value:"'nb'"},{name:"literal",value:"'nn'"},{name:"literal",value:"'en'"}]},description:""}}};const St=({accounts:t,selectedAccount:e,inputValue:o})=>e&&e.name===o&&!t.find(d=>d.accountNumber===e.accountNumber)?[...t,e]:t;function Ge({item:t,isHighlighted:e,showBalance:o,locale:n}){return r.createElement("div",{className:J("ffe-searchable-dropdown__list-item-body",{"ffe-searchable-dropdown__list-item-body--highlighted":e})},t.name,r.createElement("div",{className:"ffe-searchable-dropdown__list-item-body-details"},r.createElement(te,{className:"ffe-searchable-dropdown__detail-text"},qe(t.accountNumber)),o&&r.createElement(te,{className:"ffe-searchable-dropdown__detail-text"},Oe(t.balance,n,t.currencyCode))))}Ge.__docgenInfo={description:"",methods:[],displayName:"AccountActionBody",props:{item:{required:!0,tsType:{name:"Item"},description:""},isHighlighted:{required:!0,tsType:{name:"boolean"},description:""},showBalance:{required:!0,tsType:{name:"boolean"},description:""},locale:{required:!0,tsType:{name:"union",raw:"'nb' | 'nn' | 'en'",elements:[{name:"literal",value:"'nb'"},{name:"literal",value:"'nn'"},{name:"literal",value:"'en'"}]},description:""}}};const x=({id:t,className:e,locale:o="nb",selectedAccount:n,hideAccountDetails:d=!1,showBalance:u=!1,noMatches:p,accounts:a,onAccountSelected:f,allowCustomAccount:b=!1,labelledById:M,optionBody:_,postListElement:T,onReset:C,inputProps:v,formatAccountNumber:D=!0,ariaInvalid:L,onOpen:A,onClose:m,onColoredBg:V,...q})=>{const[h,y]=i.useState((n==null?void 0:n.name)||""),R=D?gt:void 0,P=c=>{b&&y(c.target.value),v!=null&&v.onChange&&v.onChange(c)},O=c=>{const S=c===null,N=!(c!=null&&c.accountNumber);S?(y(""),C()):N?(f({name:c.name,accountNumber:c.name}),y(c.name)):(f(c),y(c.name))},B=q["aria-invalid"]??L;return r.createElement("div",{className:J("ffe-account-selector-single",{"ffe-account-selector-single--on-colored-bg":V},e),id:`${t}-account-selector-container`},r.createElement(Pe,{id:t,labelledById:M,inputProps:{...v,onChange:P},dropdownAttributes:u?["name","accountNumber","balance"]:["name","accountNumber"],postListElement:T,dropdownList:b?St({selectedAccount:n,accounts:a,inputValue:h}):a,noMatch:b&&h.trim()!==""?{dropdownList:[{name:R?R(h):h,accountNumber:""}]}:p??{text:pt[o].noMatch},formatter:R,onChange:O,searchAttributes:["name","accountNumber"],locale:o,optionBody:({item:c,isHighlighted:S,...N})=>_?r.createElement(_,{item:c,isHighlighted:S,...N}):r.createElement(Ge,{item:c,isHighlighted:S,locale:o,showBalance:u}),ariaInvalid:B,searchMatcher:mt,selectedItem:n,onOpen:A,onClose:m,isEqual:(c,S)=>c.accountNumber===S.accountNumber}),!d&&r.createElement(je,{ariaInvalid:B,account:n,showBalance:u&&["string","number"].includes(typeof(n==null?void 0:n.balance)),locale:o}))};x.__docgenInfo={description:"",methods:[],displayName:"AccountSelector",props:{accounts:{required:!0,tsType:{name:"Array",elements:[{name:"T"}],raw:"T[]"},description:`Array of objects:
 {
     accountNumber: string.isRequired,
     name: string.isRequired,
     balance: number,
     currencyCode: string,
 }`},className:{required:!1,tsType:{name:"string"},description:""},id:{required:!0,tsType:{name:"string"},description:""},locale:{required:!1,tsType:{name:"union",raw:"'nb' | 'nn' | 'en'",elements:[{name:"literal",value:"'nb'"},{name:"literal",value:"'nn'"},{name:"literal",value:"'en'"}]},description:"",defaultValue:{value:"'nb'",computed:!1}},noMatches:{required:!1,tsType:{name:"signature",type:"object",raw:`{
    text: string;
    dropdownList?: T[];
}`,signature:{properties:[{key:"text",value:{name:"string",required:!0}},{key:"dropdownList",value:{name:"Array",elements:[{name:"T"}],raw:"T[]",required:!1}}]}},description:"Overrides default string for all locales."},inputProps:{required:!1,tsType:{name:"ReactComponentPropsWithoutRef",raw:"React.ComponentPropsWithoutRef<'input'>",elements:[{name:"literal",value:"'input'"}]},description:"Props passed to the input field"},onAccountSelected:{required:!0,tsType:{name:"signature",type:"function",raw:"(account: T) => void",signature:{arguments:[{type:{name:"T"},name:"account"}],return:{name:"void"}}},description:"Returns the selected account object"},hideAccountDetails:{required:!1,tsType:{name:"boolean"},description:"Determines if account details should be shown (balance and account number under the input field)",defaultValue:{value:"false",computed:!1}},showBalance:{required:!1,tsType:{name:"boolean"},description:"Default false.",defaultValue:{value:"false",computed:!1}},formatAccountNumber:{required:!1,tsType:{name:"boolean"},description:"Default true.",defaultValue:{value:"true",computed:!1}},labelledById:{required:!1,tsType:{name:"string"},description:"id of element that labels input field"},allowCustomAccount:{required:!1,tsType:{name:"boolean"},description:`Allows selecting the text the user writes even if it does not match anything in the accounts array.
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
}`,signature:{properties:[{key:"item",value:{name:"T",required:!0}},{key:"locale",value:{name:"union",raw:"'nb' | 'nn' | 'en'",elements:[{name:"literal",value:"'nb'"},{name:"literal",value:"'nn'"},{name:"literal",value:"'en'"}],required:!0}},{key:"isHighlighted",value:{name:"boolean",required:!0}},{key:"dropdownAttributes",value:{name:"Array",elements:[{name:"unknown"}],raw:"(keyof T)[]",required:!0}}]}}]},description:"Custom element to use for each item in the dropdown list"},postListElement:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Element to be shown below dropDownList"},"aria-invalid":{required:!1,tsType:{name:"AriaAttributes['aria-invalid']",raw:"AriaAttributes['aria-invalid']"},description:"Sets aria-invalid on input field"},ariaInvalid:{required:!1,tsType:{name:"AriaAttributes['aria-invalid']",raw:"AriaAttributes['aria-invalid']"},description:""},onOpen:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Prop passed to the dropdown list"},onClose:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},selectedAccount:{required:!1,tsType:{name:"T"},description:""},onReset:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Called when emptying the input field and moving focus away from the account selector"},onColoredBg:{required:!1,tsType:{name:"boolean"},description:"Adds alternative styling for better contrast on certain backgrounds"}}};const Et={title:"Komponenter/Account-selector/AccountSelector",component:x,argTypes:{postListElement:{options:["text","html"],mapping:{text:"Some text describing the list",html:r.createElement("span",null,"Some text describing the list")}}}},Ke=[{accountNumber:"39920143613",name:"Brukskonto",currencyCode:"NOK",balance:1337},{accountNumber:"42142102514",name:"Brukskonto2",currencyCode:"NOK",balance:13337},{accountNumber:"23200355148",name:"Sparekonto1",currencyCode:"NOK",balance:109236},{accountNumber:"23207117277",name:"Sparekonto2",currencyCode:"NOK",balance:0}],E={args:{accounts:Ke,id:"input-id",labelledById:"label-id",locale:"nb",formatAccountNumber:!0,allowCustomAccount:!1,onColoredBg:!1},render:function(e){const[o,n]=i.useState();return r.createElement(k,{label:"Velg konto",inputId:e.id,labelId:e.labelledById,onColoredBg:e.onColoredBg},r.createElement(x,{...e,selectedAccount:o,onAccountSelected:n}))}},G={args:{...E.args,showBalance:!0},render:function(e){const[o,n]=i.useState();return r.createElement(k,{label:"Velg konto",inputId:e.id,labelId:e.labelledById,onColoredBg:e.onColoredBg},r.createElement(x,{...e,selectedAccount:o,onAccountSelected:n}))}},K={args:{...E.args,allowCustomAccount:!0},render:function(e){const[o,n]=i.useState();return r.createElement(k,{label:"Velg konto",inputId:e.id,labelId:e.labelledById,onColoredBg:e.onColoredBg},r.createElement(x,{...e,selectedAccount:o,onAccountSelected:n}))}},H={args:{...E.args,formatAccountNumber:!1},render:function(e){const[o,n]=i.useState();return r.createElement(k,{label:"Velg konto",inputId:e.id,labelId:e.labelledById,onColoredBg:e.onColoredBg},r.createElement(x,{...e,selectedAccount:o,onAccountSelected:n}))}},W={args:{...E.args,formatAccountNumber:!1},render:function(e){const[o,n]=i.useState(),d=({item:u,isHighlighted:p})=>r.createElement("div",{style:{padding:"8px",background:p?"#ff9100":"white"}},r.createElement("div",null,u.name),r.createElement("div",{style:{display:"flex",justifyContent:"space-between"}},r.createElement(pe,null,u.accountNumber),r.createElement(pe,null,u.balance)));return r.createElement(k,{label:"Velg konto",inputId:e.id,labelId:e.labelledById,onColoredBg:e.onColoredBg},r.createElement(x,{...e,optionBody:d,selectedAccount:o,onAccountSelected:n}))}},U={args:{...E.args,hideAccountDetails:!1},render:function(e){const[o,n]=i.useState();return r.createElement(k,{label:"Velg konto",inputId:e.id,labelId:e.labelledById,onColoredBg:e.onColoredBg},r.createElement(x,{...e,selectedAccount:o,onAccountSelected:n}))}},$={args:{...E.args,postListElement:r.createElement("span",null,"Some text describing the list")},render:function(e){const[o,n]=i.useState();return r.createElement(k,{label:"Velg konto",inputId:e.id,labelId:e.labelledById,onColoredBg:e.onColoredBg},r.createElement(x,{...e,selectedAccount:o,onAccountSelected:n}))}},z={args:{...E.args},render:function(e){const[o,n]=i.useState(Ke[2]);return r.createElement(k,{label:"Velg konto",inputId:e.id,labelId:e.labelledById,onColoredBg:e.onColoredBg},r.createElement(x,{...e,selectedAccount:o,onAccountSelected:n}))}};var me,ge,fe;E.parameters={...E.parameters,docs:{...(me=E.parameters)==null?void 0:me.docs,source:{originalSource:`{
  args: {
    accounts,
    id: 'input-id',
    labelledById: 'label-id',
    locale: 'nb',
    formatAccountNumber: true,
    allowCustomAccount: false,
    onColoredBg: false
  },
  render: function Render(args) {
    const [selectedAccount, setSelectedAccount] = useState<Account>();
    return <InputGroup label="Velg konto" inputId={args.id} labelId={args.labelledById} onColoredBg={args.onColoredBg}>
                <AccountSelector {...args} selectedAccount={selectedAccount} onAccountSelected={setSelectedAccount} />
            </InputGroup>;
  }
}`,...(fe=(ge=E.parameters)==null?void 0:ge.docs)==null?void 0:fe.source}}};var he,be,ye;G.parameters={...G.parameters,docs:{...(he=G.parameters)==null?void 0:he.docs,source:{originalSource:`{
  args: {
    ...Standard.args,
    showBalance: true
  },
  render: function Render(args) {
    const [selectedAccount, setSelectedAccount] = useState<Account>();
    return <InputGroup label="Velg konto" inputId={args.id} labelId={args.labelledById} onColoredBg={args.onColoredBg}>
                <AccountSelector {...args} selectedAccount={selectedAccount} onAccountSelected={setSelectedAccount} />
            </InputGroup>;
  }
}`,...(ye=(be=G.parameters)==null?void 0:be.docs)==null?void 0:ye.source}}};var ve,Ae,Ie;K.parameters={...K.parameters,docs:{...(ve=K.parameters)==null?void 0:ve.docs,source:{originalSource:`{
  args: {
    ...Standard.args,
    allowCustomAccount: true
  },
  render: function Render(args) {
    const [selectedAccount, setSelectedAccount] = useState<Account>();
    return <InputGroup label="Velg konto" inputId={args.id} labelId={args.labelledById} onColoredBg={args.onColoredBg}>
                <AccountSelector {...args} selectedAccount={selectedAccount} onAccountSelected={setSelectedAccount} />
            </InputGroup>;
  }
}`,...(Ie=(Ae=K.parameters)==null?void 0:Ae.docs)==null?void 0:Ie.source}}};var we,Se,Ee;H.parameters={...H.parameters,docs:{...(we=H.parameters)==null?void 0:we.docs,source:{originalSource:`{
  args: {
    ...Standard.args,
    formatAccountNumber: false
  },
  render: function Render(args) {
    const [selectedAccount, setSelectedAccount] = useState<Account>();
    return <InputGroup label="Velg konto" inputId={args.id} labelId={args.labelledById} onColoredBg={args.onColoredBg}>
                <AccountSelector {...args} selectedAccount={selectedAccount} onAccountSelected={setSelectedAccount} />
            </InputGroup>;
  }
}`,...(Ee=(Se=H.parameters)==null?void 0:Se.docs)==null?void 0:Ee.source}}};var Ce,Re,Be;W.parameters={...W.parameters,docs:{...(Ce=W.parameters)==null?void 0:Ce.docs,source:{originalSource:`{
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
    return <InputGroup label="Velg konto" inputId={args.id} labelId={args.labelledById} onColoredBg={args.onColoredBg}>
                <AccountSelector {...args} optionBody={CustomOptionBody} selectedAccount={selectedAccount} onAccountSelected={setSelectedAccount} />
            </InputGroup>;
  }
}`,...(Be=(Re=W.parameters)==null?void 0:Re.docs)==null?void 0:Be.source}}};var xe,Te,Ne;U.parameters={...U.parameters,docs:{...(xe=U.parameters)==null?void 0:xe.docs,source:{originalSource:`{
  args: {
    ...Standard.args,
    hideAccountDetails: false
  },
  render: function Render(args) {
    const [selectedAccount, setSelectedAccount] = useState<Account>();
    return <InputGroup label="Velg konto" inputId={args.id} labelId={args.labelledById} onColoredBg={args.onColoredBg}>
                <AccountSelector {...args} selectedAccount={selectedAccount} onAccountSelected={setSelectedAccount} />
            </InputGroup>;
  }
}`,...(Ne=(Te=U.parameters)==null?void 0:Te.docs)==null?void 0:Ne.source}}};var _e,De,Le;$.parameters={...$.parameters,docs:{...(_e=$.parameters)==null?void 0:_e.docs,source:{originalSource:`{
  args: {
    ...Standard.args,
    postListElement: <span>Some text describing the list</span>
  },
  render: function Render(args) {
    const [selectedAccount, setSelectedAccount] = useState<Account>();
    return <InputGroup label="Velg konto" inputId={args.id} labelId={args.labelledById} onColoredBg={args.onColoredBg}>
                <AccountSelector {...args} selectedAccount={selectedAccount} onAccountSelected={setSelectedAccount} />
            </InputGroup>;
  }
}`,...(Le=(De=$.parameters)==null?void 0:De.docs)==null?void 0:Le.source}}};var ke,Me,Ve;z.parameters={...z.parameters,docs:{...(ke=z.parameters)==null?void 0:ke.docs,source:{originalSource:`{
  args: {
    ...Standard.args
  },
  render: function Render(args) {
    const [selectedAccount, setSelectedAccount] = useState<Account>(accounts[2]);
    return <InputGroup label="Velg konto" inputId={args.id} labelId={args.labelledById} onColoredBg={args.onColoredBg}>
                <AccountSelector {...args} selectedAccount={selectedAccount} onAccountSelected={setSelectedAccount} />
            </InputGroup>;
  }
}`,...(Ve=(Me=z.parameters)==null?void 0:Me.docs)==null?void 0:Ve.source}}};const Ct=["Standard","ShowBalance","AllowCustomAccount","NoFormatAccount","ListElementBody","HideAccountDetails","PostListElement","InitialValue"],Dt=Object.freeze(Object.defineProperty({__proto__:null,AllowCustomAccount:K,HideAccountDetails:U,InitialValue:z,ListElementBody:W,NoFormatAccount:H,PostListElement:$,ShowBalance:G,Standard:E,__namedExportsOrder:Ct,default:Et},Symbol.toStringTag,{value:"Module"}));export{Dt as A,U as H,W as L,H as N,$ as P,E as S,G as a,K as b};
