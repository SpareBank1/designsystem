import{R as o,r as i}from"./index-eCxJ45ll.js";import{c as Y}from"./index-DezCrw0f.js";import{g as G,f as st,u as dt,a as it,b as ut,c as pt,d as fe,m as mt,T as ft,L as gt,R as ht,h as bt,i as yt,s as ge,j as he,k as oe,l as Ue,n as At,o as vt,t as It}from"./texts-B9-lq4uV.js";import{M as re}from"./MicroText-DhU_-SBY.js";import{i as wt,S as be}from"./index-B3RHW42C.js";import{I as B}from"./InputGroup-CV5U44El.js";function $e(e){var t=e.item,r=e.dropdownAttributes,n=e.isHighlighted,c=r[0],u=r.slice(1),y=t[c],f=u.map(function(l,g){return o.createElement(re,{className:"ffe-searchable-dropdown__detail-text",key:g},t[l])});return o.createElement("div",{className:Y("ffe-searchable-dropdown__list-item-body",{"ffe-searchable-dropdown__list-item-body--highlighted":n})},y,!!f.length&&o.createElement("div",{className:"ffe-searchable-dropdown__list-item-body-details"},f))}$e.__docgenInfo={description:"",methods:[],displayName:"OptionBody"};var b=function(){return b=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++){t=arguments[r];for(var c in t)Object.prototype.hasOwnProperty.call(t,c)&&(e[c]=t[c])}return e},b.apply(this,arguments)},St=function(e){var t=e.searchAttributes,r=e.dropdownList,n=e.displayAttribute,c=e.noMatchDropdownList,u=e.maxRenderedDropdownElements,y=e.searchMatcher,f=e.onChange;return function(l,g){var V,D,x,N,A,_,C,k,L,m,h;switch(g.type){case"InputKeyDownEscape":return b(b({},l),{noMatch:!1,isExpanded:!1,highlightedIndex:-1,inputValue:l.selectedItem?l.selectedItem[n]:""});case"InputClick":{var S=G({inputValue:l.inputValue,searchAttributes:t,maxRenderedDropdownElements:u,dropdownList:r,noMatchDropdownList:c,searchMatcher:y,showAllItemsInDropdown:!0}),E=S.noMatch,p=S.listToRender;return b(b({},l),{isExpanded:!0,listToRender:p,noMatch:E})}case"InputChange":{var q=G({inputValue:(D=(V=g.payload)===null||V===void 0?void 0:V.inputValue)!==null&&D!==void 0?D:"",searchAttributes:t,maxRenderedDropdownElements:u,dropdownList:r,noMatchDropdownList:c,searchMatcher:y,showAllItemsInDropdown:!1}),E=q.noMatch,p=q.listToRender;return b(b({},l),{isExpanded:!0,inputValue:(N=(x=g.payload)===null||x===void 0?void 0:x.inputValue)!==null&&N!==void 0?N:"",listToRender:p,highlightedIndex:((_=(A=g.payload)===null||A===void 0?void 0:A.inputValue)===null||_===void 0?void 0:_.trim())===""||p.length===0?-1:0,noMatch:E})}case"ToggleButtonPressed":return b(b({},l),{isExpanded:!l.isExpanded});case"ItemSelectedProgrammatically":case"ItemOnClick":case"InputKeyDownEnter":return b(b({},l),{isExpanded:!1,highlightedIndex:-1,selectedItem:(C=g.payload)===null||C===void 0?void 0:C.selectedItem,inputValue:((L=(k=g.payload)===null||k===void 0?void 0:k.selectedItem)===null||L===void 0?void 0:L[n])||""});case"InputKeyDownArrowDown":case"InputKeyDownArrowUp":return b(b({},l),{isExpanded:!0,highlightedIndex:(h=(m=g.payload)===null||m===void 0?void 0:m.highlightedIndex)!==null&&h!==void 0?h:-1});case"FocusMovedOutSide":{var p=G({inputValue:l.inputValue,searchAttributes:t,maxRenderedDropdownElements:u,dropdownList:r,noMatchDropdownList:c,searchMatcher:y,showAllItemsInDropdown:!0}).listToRender,O=l.inputValue===""&&!!l.selectedItem,P=l.listToRender.length===1&&t.map(function(M){var j;return l.listToRender[0][M]===((j=l.selectedItem)===null||j===void 0?void 0:j[M])}).includes(!1)&&l.highlightedIndex!==-1,d=l.selectedItem;O?(f==null||f(null),d=void 0):P&&(f==null||f(l.listToRender[0]),d=l.listToRender[0]);var T=d?d[n]:"";return b(b({},l),{isExpanded:!1,highlightedIndex:-1,inputValue:T,selectedItem:d,listToRender:p})}case"DropdownListPropUpdated":return b(b({},l),G({inputValue:l.inputValue,searchAttributes:t,maxRenderedDropdownElements:u,dropdownList:r,noMatchDropdownList:c,searchMatcher:y,showAllItemsInDropdown:!!l.selectedItem}));default:return l}}},Q=function(){return Q=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++){t=arguments[r];for(var c in t)Object.prototype.hasOwnProperty.call(t,c)&&(e[c]=t[c])}return e},Q.apply(this,arguments)},Et=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var c=0,n=Object.getOwnPropertySymbols(e);c<n.length;c++)t.indexOf(n[c])<0&&Object.prototype.propertyIsEnumerable.call(e,n[c])&&(r[n[c]]=e[n[c]]);return r},Rt="ArrowUp",Tt="ArrowDown",xt="Escape",Nt="Enter";function Ct(e,t){var r,n,c,u,y,f,l,g=e.id,V=e.labelledById,D=e.className,x=e.dropdownList,N=e.dropdownAttributes,A=e.searchAttributes,_=e.displayAttribute,C=_===void 0?A[0]:_,k=e.maxRenderedDropdownElements,L=k===void 0?Number.MAX_SAFE_INTEGER:k,m=e.onChange,h=e.inputProps,S=e.optionBody,E=e.postListElement,p=e.noMatch,q=e.locale,O=q===void 0?"nb":q,P=e.ariaInvalid,d=e.formatter,T=d===void 0?function(s){return s}:d,F=e.searchMatcher,M=e.selectedItem,j=e.isLoading,le=j===void 0?!1:j,Qe=e.onOpen,Ye=e.onClose,ce=e.isEqual,Ze=ce===void 0?wt:ce,et=Et(e,["id","labelledById","className","dropdownList","dropdownAttributes","searchAttributes","displayAttribute","maxRenderedDropdownElements","onChange","inputProps","optionBody","postListElement","noMatch","locale","ariaInvalid","formatter","searchMatcher","selectedItem","isLoading","onOpen","onClose","isEqual"]),se=i.useReducer(St({dropdownList:x,displayAttribute:C,searchAttributes:A,maxRenderedDropdownElements:L,noMatchDropdownList:p==null?void 0:p.dropdownList,searchMatcher:F,onChange:m}),{isExpanded:!1,selectedItems:[],highlightedIndex:-1,formattedInputValue:"",inputValue:M?M[C]:""},function(s){return Q(Q({},s),G({inputValue:s.inputValue,searchAttributes:A,maxRenderedDropdownElements:L,dropdownList:x,noMatchDropdownList:p==null?void 0:p.dropdownList,searchMatcher:F,showAllItemsInDropdown:!!M}))}),a=se[0],v=se[1],Z=dt({listToRender:a.listToRender}),de=i.useState(!1),tt=de[0],nt=de[1],te=i.useRef(null),ie=i.useRef(null),ue=i.useRef(null),rt=S||$e,ee=i.useRef(null),pe=i.useId(),ne=i.useRef(!1),me=i.useRef(!1),ot=function(){v({type:"InputClick"})},at=function(s){h!=null&&h.onBlur&&h.onBlur(s)};i.useEffect(function(){v({type:"ItemSelectedProgrammatically",payload:{selectedItem:M}})},[M,v]),it({hasFocus:tt,isExpanded:a.isExpanded,isLoading:le,locale:O,resultCount:a.listToRender.length,selectedValue:(r=a.selectedItem)===null||r===void 0?void 0:r[C]}),i.useLayoutEffect(function(){var s,I;ne.current?((s=ie.current)===null||s===void 0||s.focus(),ne.current=!1):me.current&&((I=te.current)===null||I===void 0||I.focus(),me.current=!1)}),i.useEffect(function(){v({type:"DropdownListPropUpdated"})},[x,v]),ut({isExpanded:a.isExpanded,onClose:Ye,onOpen:Qe});var lt=i.useCallback(function(){return v({type:"FocusMovedOutSide"})},[]);pt({id:g,containerRef:ue,handelFocusMovedOutside:lt});var ct=function(s){if(s.key===Nt&&a.highlightedIndex>=0){s.preventDefault(),v({type:"InputKeyDownEnter",payload:{selectedItem:a.listToRender[a.highlightedIndex]}}),m==null||m(a.listToRender[a.highlightedIndex]);return}else if(s.key===xt){v({type:"InputKeyDownEscape"});return}if(s.key===Rt){if(s.preventDefault(),a.listToRender.length){var I=bt(a.highlightedIndex,a.listToRender.length);v({type:"InputKeyDownArrowUp",payload:{highlightedIndex:I}}),I>=0&&ge(a==null?void 0:a.listToRender[I],N),he(Z[I].current,ee.current)}return}if(s.key===Tt&&(s.preventDefault(),a.listToRender.length)){var I=yt(a.highlightedIndex,a.listToRender.length);v({type:"InputKeyDownArrowDown",payload:{highlightedIndex:I}}),I>=0&&ge(a==null?void 0:a.listToRender[I],N),he(Z[I].current,ee.current)}};return o.createElement("div",{onKeyDown:ct,className:Y(D,"ffe-searchable-dropdown"),ref:ue,onMouseDown:fe(g),onFocus:fe(g)},o.createElement("div",{className:"ffe-searchable-dropdown__input",onClick:function(){var s;(s=te.current)===null||s===void 0||s.focus()}},o.createElement("input",Q({},h,{ref:mt([te,t]),id:g,"aria-labelledby":V,onClick:ot,onChange:function(s){h!=null&&h.onChange&&h.onChange(s),v({type:"InputChange",payload:{inputValue:s.target.value}})},onFocus:function(){return nt(!0)},onBlur:at,"aria-describedby":[h==null?void 0:h["aria-describedby"],a.noMatch&&pe].filter(Boolean).join(" ")||void 0,value:T(a.inputValue),type:"text",role:"combobox",autoComplete:"off","aria-controls":(c=(n=ee.current)===null||n===void 0?void 0:n.getAttribute("id"))!==null&&c!==void 0?c:void 0,"aria-expanded":a.isExpanded&&!!a.listToRender.length,"aria-autocomplete":"list","aria-haspopup":"listbox","aria-activedescendant":a.highlightedIndex>=0&&(f=(y=(u=Z[a.highlightedIndex])===null||u===void 0?void 0:u.current)===null||y===void 0?void 0:y.getAttribute("id"))!==null&&f!==void 0?f:void 0,"aria-invalid":(l=et["aria-invalid"])!==null&&l!==void 0?l:P}))),o.createElement(ft,{ref:ie,isExpanded:a.isExpanded,onClick:function(){return v({type:"ToggleButtonPressed"})},locale:O,isLoading:le}),o.createElement(gt,{ref:ee,isExpanded:a.isExpanded},a.isExpanded&&o.createElement(ht,{isEqual:Ze,listToRender:a.listToRender,OptionBody:rt,highlightedIndex:a.highlightedIndex,dropdownAttributes:N,locale:O,refs:Z,onChange:function(s){ne.current=!0,v({type:"ItemOnClick",payload:{selectedItem:s}}),m==null||m(s)},noMatch:a.noMatch?p:void 0,noMatchMessageId:pe,selectedItems:a.selectedItem?[a.selectedItem]:[]}),E&&o.createElement("div",{className:"ffe-searchable-dropdown__list--post-list-element"},E)))}var ze=st(Ct);ze.__docgenInfo={description:"",methods:[],displayName:"SearchableDropdown"};function Xe({account:e,showBalance:t=!0,ariaInvalid:r,locale:n}){const{balance:c,accountNumber:u,currencyCode:y}=e??{},f=!e&&(r==="true"||r===!0);return o.createElement("div",{className:Y("ffe-small-text","ffe-account-selector-single__details",{"ffe-account-selector-single__details--invalid-empty":f})},e&&o.createElement(o.Fragment,null,o.createElement("div",{className:"ffe-account-selector-single__details--left"},oe(u)),t&&o.createElement("div",{className:"ffe-account-selector-single__details--right"},Ue(c,n,y))))}Xe.__docgenInfo={description:"",methods:[],displayName:"AccountDetails",props:{account:{required:!1,tsType:{name:"Account"},description:""},showBalance:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},ariaInvalid:{required:!0,tsType:{name:"ReactComponentPropsWithoutRef['aria-invalid']",raw:"React.ComponentPropsWithoutRef<'div'>['aria-invalid']"},description:""},locale:{required:!0,tsType:{name:"union",raw:"'nb' | 'nn' | 'en'",elements:[{name:"literal",value:"'nb'"},{name:"literal",value:"'nn'"},{name:"literal",value:"'en'"}]},description:""}}};const Bt=({accounts:e,selectedAccount:t,inputValue:r})=>t&&t.name===r&&!e.find(c=>c.accountNumber===t.accountNumber)?[...e,t]:e;function Je({item:e,isHighlighted:t,showBalance:r,locale:n}){return o.createElement("div",{className:Y("ffe-searchable-dropdown__list-item-body",{"ffe-searchable-dropdown__list-item-body--highlighted":t})},e.name,o.createElement("div",{className:"ffe-searchable-dropdown__list-item-body-details"},o.createElement(re,{className:"ffe-searchable-dropdown__detail-text"},oe(e.accountNumber)),r&&o.createElement(re,{className:"ffe-searchable-dropdown__detail-text"},Ue(e.balance,n,e.currencyCode))))}Je.__docgenInfo={description:"",methods:[],displayName:"AccountActionBody",props:{item:{required:!0,tsType:{name:"Item"},description:""},isHighlighted:{required:!0,tsType:{name:"boolean"},description:""},showBalance:{required:!0,tsType:{name:"boolean"},description:""},locale:{required:!0,tsType:{name:"union",raw:"'nb' | 'nn' | 'en'",elements:[{name:"literal",value:"'nb'"},{name:"literal",value:"'nn'"},{name:"literal",value:"'en'"}]},description:""}}};const R=({id:e,className:t,locale:r="nb",selectedAccount:n,hideAccountDetails:c=!1,showBalance:u=!1,noMatches:y,accounts:f,onAccountSelected:l,allowCustomAccount:g=!1,labelledById:V,optionBody:D,postListElement:x,onReset:N,inputProps:A,formatAccountNumber:_=!0,ariaInvalid:C,onOpen:k,onClose:L,displayAttribute:m,...h})=>{const[S,E]=i.useState((n==null?void 0:n.name)||""),p=_?vt:void 0,q=d=>{g&&E(d.target.value),A!=null&&A.onChange&&A.onChange(d)},O=d=>{const T=d===null,F=!(d!=null&&d.accountNumber);T?(E(""),N()):F?(l({name:d.name,accountNumber:d.name,...m?{[m]:d.name}:{}}),E(d.name)):(l(d),E(d.name))},P=h["aria-invalid"]??C;return o.createElement("div",{className:Y("ffe-account-selector-single",t),id:`${e}-account-selector-container`},o.createElement(ze,{id:e,labelledById:V,displayAttribute:m,inputProps:{...A,onChange:q},dropdownAttributes:u?["name","accountNumber","balance"]:["name","accountNumber"],postListElement:x,dropdownList:g?Bt({selectedAccount:n,accounts:f,inputValue:S}):f,noMatch:g&&S.trim()!==""?{dropdownList:[{name:p?p(S):S,accountNumber:"",...m?{[m]:p?p(S):S}:{}}]}:y??{text:It[r].noMatch},formatter:p,onChange:O,searchAttributes:["name","accountNumber",...m?[m]:[]],locale:r,optionBody:({item:d,isHighlighted:T,...F})=>D?o.createElement(D,{item:d,isHighlighted:T,...F}):o.createElement(Je,{item:d,isHighlighted:T,locale:r,showBalance:u}),ariaInvalid:P,searchMatcher:At,selectedItem:n,onOpen:k,onClose:L,isEqual:(d,T)=>d.accountNumber===T.accountNumber}),!c&&o.createElement(Xe,{ariaInvalid:P,account:n,showBalance:u&&["string","number"].includes(typeof(n==null?void 0:n.balance)),locale:r}))};R.__docgenInfo={description:"",methods:[],displayName:"AccountSelector",props:{accounts:{required:!0,tsType:{name:"Array",elements:[{name:"T"}],raw:"T[]"},description:`Array of objects:
 {
     accountNumber: string.isRequired,
     name: string.isRequired,
     balance: number,
     currencyCode: string,
 }`},className:{required:!1,tsType:{name:"string"},description:""},id:{required:!0,tsType:{name:"string"},description:""},locale:{required:!1,tsType:{name:"union",raw:"'nb' | 'nn' | 'en'",elements:[{name:"literal",value:"'nb'"},{name:"literal",value:"'nn'"},{name:"literal",value:"'en'"}]},description:"",defaultValue:{value:"'nb'",computed:!1}},noMatches:{required:!1,tsType:{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"item",value:{name:"T",required:!0}},{key:"locale",value:{name:"union",raw:"'nb' | 'nn' | 'en'",elements:[{name:"literal",value:"'nb'"},{name:"literal",value:"'nn'"},{name:"literal",value:"'en'"}],required:!0}},{key:"isHighlighted",value:{name:"boolean",required:!0}},{key:"dropdownAttributes",value:{name:"Array",elements:[{name:"unknown"}],raw:"(keyof T)[]",required:!0}}]}}]},description:"Custom element to use for each item in the dropdown list"},postListElement:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Element to be shown below dropDownList"},"aria-invalid":{required:!1,tsType:{name:"AriaAttributes['aria-invalid']",raw:"AriaAttributes['aria-invalid']"},description:"Sets aria-invalid on input field"},ariaInvalid:{required:!1,tsType:{name:"AriaAttributes['aria-invalid']",raw:"AriaAttributes['aria-invalid']"},description:""},onOpen:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Prop passed to the dropdown list"},onClose:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},selectedAccount:{required:!1,tsType:{name:"T"},description:""},onReset:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Called when emptying the input field and moving focus away from the account selector"},onColoredBg:{required:!1,tsType:{name:"never"},description:""}}};const Dt={title:"Komponenter/Account-selector/AccountSelector",component:R,argTypes:{postListElement:{options:["text","html"],mapping:{text:"Some text describing the list",html:o.createElement("span",null,"Some text describing the list")}}}},ae=[{accountNumber:"39920143613",name:"Brukskonto",currencyCode:"NOK",balance:1337},{accountNumber:"42142102514",name:"Brukskonto2",currencyCode:"NOK",balance:13337},{accountNumber:"23200355148",name:"Sparekonto1",currencyCode:"NOK",balance:109236},{accountNumber:"23207117277",name:"Sparekonto2",currencyCode:"NOK",balance:0}],w={args:{accounts:ae,id:"input-id",labelledById:"label-id",locale:"nb",formatAccountNumber:!0,allowCustomAccount:!1},render:function(t){const[r,n]=i.useState();return o.createElement(B,{label:"Velg konto",inputId:t.id,labelId:t.labelledById},o.createElement(R,{...t,selectedAccount:r,onAccountSelected:n}))}},K={args:{...w.args,showBalance:!0},render:function(t){const[r,n]=i.useState();return o.createElement(B,{label:"Velg konto",inputId:t.id,labelId:t.labelledById},o.createElement(R,{...t,selectedAccount:r,onAccountSelected:n}))}},H={args:{...w.args,allowCustomAccount:!0},render:function(t){const[r,n]=i.useState();return o.createElement(B,{label:"Velg konto",inputId:t.id,labelId:t.labelledById},o.createElement(R,{...t,selectedAccount:r,onAccountSelected:n}))}},W={args:{...w.args,formatAccountNumber:!1},render:function(t){const[r,n]=i.useState();return o.createElement(B,{label:"Velg konto",inputId:t.id,labelId:t.labelledById},o.createElement(R,{...t,selectedAccount:r,onAccountSelected:n}))}},U={args:{...w.args,formatAccountNumber:!1},render:function(t){const[r,n]=i.useState(),c=({item:u,isHighlighted:y})=>o.createElement("div",{style:{padding:"8px",background:y?"#ff9100":"white"}},o.createElement("div",null,u.name),o.createElement("div",{style:{display:"flex",justifyContent:"space-between"}},o.createElement(be,null,u.accountNumber),o.createElement(be,null,u.balance)));return o.createElement(B,{label:"Velg konto",inputId:t.id,labelId:t.labelledById},o.createElement(R,{...t,optionBody:c,selectedAccount:r,onAccountSelected:n}))}},$={args:{...w.args,hideAccountDetails:!1},render:function(t){const[r,n]=i.useState();return o.createElement(B,{label:"Velg konto",inputId:t.id,labelId:t.labelledById},o.createElement(R,{...t,selectedAccount:r,onAccountSelected:n}))}},z={args:{...w.args,postListElement:o.createElement("span",null,"Some text describing the list")},render:function(t){const[r,n]=i.useState();return o.createElement(B,{label:"Velg konto",inputId:t.id,labelId:t.labelledById},o.createElement(R,{...t,selectedAccount:r,onAccountSelected:n}))}},X={args:{...w.args},render:function(t){const[r,n]=i.useState(ae[2]);return o.createElement(B,{label:"Velg konto",inputId:t.id,labelId:t.labelledById},o.createElement(R,{...t,selectedAccount:r,onAccountSelected:n}))}},ye=ae.map(e=>({...e,prettyName:`${e.name} - ${oe(e.accountNumber)}`})),J={args:{id:"input-id",labelledById:"label-id",locale:"nb",formatAccountNumber:!0,allowCustomAccount:!1,displayAttribute:"prettyName",accounts:ye},render:function(t){const[r,n]=i.useState(ye[2]);return o.createElement(B,{label:"Velg konto",inputId:t.id,labelId:t.labelledById},o.createElement(R,{...t,selectedAccount:r,onAccountSelected:n}))}};var Ae,ve,Ie;w.parameters={...w.parameters,docs:{...(Ae=w.parameters)==null?void 0:Ae.docs,source:{originalSource:`{
  args: {
    accounts,
    id: 'input-id',
    labelledById: 'label-id',
    locale: 'nb',
    formatAccountNumber: true,
    allowCustomAccount: false
  },
  render: function Render(args) {
    const [selectedAccount, setSelectedAccount] = useState<Account>();
    return <InputGroup label="Velg konto" inputId={args.id} labelId={args.labelledById}>
                <AccountSelector {...args} selectedAccount={selectedAccount} onAccountSelected={setSelectedAccount} />
            </InputGroup>;
  }
}`,...(Ie=(ve=w.parameters)==null?void 0:ve.docs)==null?void 0:Ie.source}}};var we,Se,Ee;K.parameters={...K.parameters,docs:{...(we=K.parameters)==null?void 0:we.docs,source:{originalSource:`{
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
}`,...(Ee=(Se=K.parameters)==null?void 0:Se.docs)==null?void 0:Ee.source}}};var Re,Te,xe;H.parameters={...H.parameters,docs:{...(Re=H.parameters)==null?void 0:Re.docs,source:{originalSource:`{
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
}`,...(xe=(Te=H.parameters)==null?void 0:Te.docs)==null?void 0:xe.source}}};var Ne,Ce,Be;W.parameters={...W.parameters,docs:{...(Ne=W.parameters)==null?void 0:Ne.docs,source:{originalSource:`{
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
}`,...(Be=(Ce=W.parameters)==null?void 0:Ce.docs)==null?void 0:Be.source}}};var De,_e,ke;U.parameters={...U.parameters,docs:{...(De=U.parameters)==null?void 0:De.docs,source:{originalSource:`{
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
}`,...(ke=(_e=U.parameters)==null?void 0:_e.docs)==null?void 0:ke.source}}};var Le,Me,Ve;$.parameters={...$.parameters,docs:{...(Le=$.parameters)==null?void 0:Le.docs,source:{originalSource:`{
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
}`,...(Ve=(Me=$.parameters)==null?void 0:Me.docs)==null?void 0:Ve.source}}};var qe,Oe,Pe;z.parameters={...z.parameters,docs:{...(qe=z.parameters)==null?void 0:qe.docs,source:{originalSource:`{
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
}`,...(Pe=(Oe=z.parameters)==null?void 0:Oe.docs)==null?void 0:Pe.source}}};var Fe,je,Ge;X.parameters={...X.parameters,docs:{...(Fe=X.parameters)==null?void 0:Fe.docs,source:{originalSource:`{
  args: {
    ...Standard.args
  },
  render: function Render(args) {
    const [selectedAccount, setSelectedAccount] = useState<Account>(accounts[2]);
    return <InputGroup label="Velg konto" inputId={args.id} labelId={args.labelledById}>
                <AccountSelector {...args} selectedAccount={selectedAccount} onAccountSelected={setSelectedAccount} />
            </InputGroup>;
  }
}`,...(Ge=(je=X.parameters)==null?void 0:je.docs)==null?void 0:Ge.source}}};var Ke,He,We;J.parameters={...J.parameters,docs:{...(Ke=J.parameters)==null?void 0:Ke.docs,source:{originalSource:`{
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
}`,...(We=(He=J.parameters)==null?void 0:He.docs)==null?void 0:We.source}}};const _t=["Standard","ShowBalance","AllowCustomAccount","NoFormatAccount","ListElementBody","HideAccountDetails","PostListElement","InitialValue","CustomDisplayAttribute"],Pt=Object.freeze(Object.defineProperty({__proto__:null,AllowCustomAccount:H,CustomDisplayAttribute:J,HideAccountDetails:$,InitialValue:X,ListElementBody:U,NoFormatAccount:W,PostListElement:z,ShowBalance:K,Standard:w,__namedExportsOrder:_t,default:Dt},Symbol.toStringTag,{value:"Module"}));export{Pt as A,J as C,$ as H,U as L,W as N,z as P,w as S,K as a,H as b};
