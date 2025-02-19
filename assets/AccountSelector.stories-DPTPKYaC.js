import{R as r,r as i}from"./index-eCxJ45ll.js";import{c as J}from"./index-DezCrw0f.js";import{g as j,f as tt,u as nt,a as ot,b as rt,c as at,d as ce,m as lt,T as dt,L as st,R as ct,h as it,i as ut,s as ie,j as ue,k as qe,l as Oe,n as pt,o as mt,t as ft}from"./texts-Bb9CfakJ.js";import{M as te}from"./MicroText-DhU_-SBY.js";import{i as ht,S as pe}from"./index-B3RHW42C.js";import{I as k}from"./InputGroup-CV5U44El.js";function Fe(e){var t=e.item,o=e.dropdownAttributes,n=e.isHighlighted,d=o[0],u=o.slice(1),p=t[d],a=u.map(function(h,b){return r.createElement(te,{className:"ffe-searchable-dropdown__detail-text",key:b},t[h])});return r.createElement("div",{className:J("ffe-searchable-dropdown__list-item-body",{"ffe-searchable-dropdown__list-item-body--highlighted":n})},p,!!a.length&&r.createElement("div",{className:"ffe-searchable-dropdown__list-item-body-details"},a))}Fe.__docgenInfo={description:"",methods:[],displayName:"OptionBody"};var f=function(){return f=Object.assign||function(e){for(var t,o=1,n=arguments.length;o<n;o++){t=arguments[o];for(var d in t)Object.prototype.hasOwnProperty.call(t,d)&&(e[d]=t[d])}return e},f.apply(this,arguments)},gt=function(e){var t=e.searchAttributes,o=e.dropdownList,n=e.noMatchDropdownList,d=e.maxRenderedDropdownElements,u=e.searchMatcher,p=e.onChange;return function(a,h){var b,M,_,N,R,y,B,D,v,m,V;switch(h.type){case"InputKeyDownEscape":return f(f({},a),{noMatch:!1,isExpanded:!1,highlightedIndex:-1,inputValue:a.selectedItem?a.selectedItem[t[0]]:""});case"InputClick":{var x=j({inputValue:a.inputValue,searchAttributes:t,maxRenderedDropdownElements:d,dropdownList:o,noMatchDropdownList:n,searchMatcher:u,showAllItemsInDropdown:!0}),g=x.noMatch,A=x.listToRender;return f(f({},a),{isExpanded:!0,listToRender:A,noMatch:g})}case"InputChange":{var L=j({inputValue:(M=(b=h.payload)===null||b===void 0?void 0:b.inputValue)!==null&&M!==void 0?M:"",searchAttributes:t,maxRenderedDropdownElements:d,dropdownList:o,noMatchDropdownList:n,searchMatcher:u,showAllItemsInDropdown:!1}),g=L.noMatch,A=L.listToRender;return f(f({},a),{isExpanded:!0,inputValue:(N=(_=h.payload)===null||_===void 0?void 0:_.inputValue)!==null&&N!==void 0?N:"",listToRender:A,highlightedIndex:((y=(R=h.payload)===null||R===void 0?void 0:R.inputValue)===null||y===void 0?void 0:y.trim())===""||A.length===0?-1:0,noMatch:g})}case"ToggleButtonPressed":return f(f({},a),{isExpanded:!a.isExpanded});case"ItemSelectedProgrammatically":case"ItemOnClick":case"InputKeyDownEnter":return f(f({},a),{isExpanded:!1,highlightedIndex:-1,selectedItem:(B=h.payload)===null||B===void 0?void 0:B.selectedItem,inputValue:((v=(D=h.payload)===null||D===void 0?void 0:D.selectedItem)===null||v===void 0?void 0:v[t[0]])||""});case"InputKeyDownArrowDown":case"InputKeyDownArrowUp":return f(f({},a),{isExpanded:!0,highlightedIndex:(V=(m=h.payload)===null||m===void 0?void 0:m.highlightedIndex)!==null&&V!==void 0?V:-1});case"FocusMovedOutSide":{var A=j({inputValue:a.inputValue,searchAttributes:t,maxRenderedDropdownElements:d,dropdownList:o,noMatchDropdownList:n,searchMatcher:u,showAllItemsInDropdown:!0}).listToRender,F=a.inputValue===""&&!!a.selectedItem,q=a.listToRender.length===1&&t.map(function(P){var O;return a.listToRender[0][P]===((O=a.selectedItem)===null||O===void 0?void 0:O[P])}).includes(!1)&&a.highlightedIndex!==-1,c=a.selectedItem;F?(p==null||p(null),c=void 0):q&&(p==null||p(a.listToRender[0]),c=a.listToRender[0]);var E=c?c[t[0]]:"";return f(f({},a),{isExpanded:!1,highlightedIndex:-1,inputValue:E,selectedItem:c,listToRender:A})}case"DropdownListPropUpdated":return f(f({},a),j({inputValue:a.inputValue,searchAttributes:t,maxRenderedDropdownElements:d,dropdownList:o,noMatchDropdownList:n,searchMatcher:u,showAllItemsInDropdown:!!a.selectedItem}));default:return a}}},X=function(){return X=Object.assign||function(e){for(var t,o=1,n=arguments.length;o<n;o++){t=arguments[o];for(var d in t)Object.prototype.hasOwnProperty.call(t,d)&&(e[d]=t[d])}return e},X.apply(this,arguments)},bt=function(e,t){var o={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(o[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var d=0,n=Object.getOwnPropertySymbols(e);d<n.length;d++)t.indexOf(n[d])<0&&Object.prototype.propertyIsEnumerable.call(e,n[d])&&(o[n[d]]=e[n[d]]);return o},yt="ArrowUp",vt="ArrowDown",At="Escape",It="Enter";function wt(e,t){var o,n,d,u,p,a,h,b=e.id,M=e.labelledById,_=e.className,N=e.dropdownList,R=e.dropdownAttributes,y=e.searchAttributes,B=e.maxRenderedDropdownElements,D=B===void 0?Number.MAX_SAFE_INTEGER:B,v=e.onChange,m=e.inputProps,V=e.optionBody,x=e.postListElement,g=e.noMatch,A=e.locale,L=A===void 0?"nb":A,F=e.ariaInvalid,q=e.formatter,c=q===void 0?function(s){return s}:q,E=e.searchMatcher,C=e.selectedItem,P=e.isLoading,O=P===void 0?!1:P,He=e.onOpen,We=e.onClose,ne=e.isEqual,Ue=ne===void 0?ht:ne,$e=bt(e,["id","labelledById","className","dropdownList","dropdownAttributes","searchAttributes","maxRenderedDropdownElements","onChange","inputProps","optionBody","postListElement","noMatch","locale","ariaInvalid","formatter","searchMatcher","selectedItem","isLoading","onOpen","onClose","isEqual"]),oe=i.useReducer(gt({dropdownList:N,searchAttributes:y,maxRenderedDropdownElements:D,noMatchDropdownList:g==null?void 0:g.dropdownList,searchMatcher:E,onChange:v}),{isExpanded:!1,selectedItems:[],highlightedIndex:-1,inputValue:C?C[R[0]]:""},function(s){return X(X({},s),j({inputValue:s.inputValue,searchAttributes:y,maxRenderedDropdownElements:D,dropdownList:N,noMatchDropdownList:g==null?void 0:g.dropdownList,searchMatcher:E,showAllItemsInDropdown:!!C}))}),l=oe[0],I=oe[1],Q=nt({listToRender:l.listToRender}),re=i.useState(!1),ze=re[0],Xe=re[1],Z=i.useRef(null),ae=i.useRef(null),le=i.useRef(null),Je=V||Fe,Y=i.useRef(null),de=i.useId(),ee=i.useRef(!1),se=i.useRef(!1),Qe=function(){I({type:"InputClick"})},Ye=function(s){m!=null&&m.onBlur&&m.onBlur(s)};i.useEffect(function(){I({type:"ItemSelectedProgrammatically",payload:{selectedItem:C}})},[C,I]),ot({hasFocus:ze,isExpanded:l.isExpanded,isLoading:O,locale:L,resultCount:l.listToRender.length,selectedValue:(o=l.selectedItem)===null||o===void 0?void 0:o[y[0]]}),i.useLayoutEffect(function(){var s,w;ee.current?((s=ae.current)===null||s===void 0||s.focus(),ee.current=!1):se.current&&((w=Z.current)===null||w===void 0||w.focus(),se.current=!1)}),i.useEffect(function(){I({type:"DropdownListPropUpdated"})},[N,I]),rt({isExpanded:l.isExpanded,onClose:We,onOpen:He});var Ze=i.useCallback(function(){return I({type:"FocusMovedOutSide"})},[]);at({id:b,containerRef:le,handelFocusMovedOutside:Ze});var et=function(s){if(s.key===It&&l.highlightedIndex>=0){s.preventDefault(),I({type:"InputKeyDownEnter",payload:{selectedItem:l.listToRender[l.highlightedIndex]}}),v==null||v(l.listToRender[l.highlightedIndex]);return}else if(s.key===At){I({type:"InputKeyDownEscape"});return}if(s.key===yt){if(s.preventDefault(),l.listToRender.length){var w=it(l.highlightedIndex,l.listToRender.length);I({type:"InputKeyDownArrowUp",payload:{highlightedIndex:w}}),w>=0&&ie(l==null?void 0:l.listToRender[w],R),ue(Q[w].current,Y.current)}return}if(s.key===vt&&(s.preventDefault(),l.listToRender.length)){var w=ut(l.highlightedIndex,l.listToRender.length);I({type:"InputKeyDownArrowDown",payload:{highlightedIndex:w}}),w>=0&&ie(l==null?void 0:l.listToRender[w],R),ue(Q[w].current,Y.current)}};return r.createElement("div",{onKeyDown:et,className:J(_,"ffe-searchable-dropdown"),ref:le,onMouseDown:ce(b),onFocus:ce(b)},r.createElement("div",{className:"ffe-searchable-dropdown__input",onClick:function(){var s;(s=Z.current)===null||s===void 0||s.focus()}},r.createElement("input",X({},m,{ref:lt([Z,t]),id:b,"aria-labelledby":M,onClick:Qe,onChange:function(s){m!=null&&m.onChange&&m.onChange(s),I({type:"InputChange",payload:{inputValue:s.target.value}})},onFocus:function(){return Xe(!0)},onBlur:Ye,"aria-describedby":[m==null?void 0:m["aria-describedby"],l.noMatch&&de].filter(Boolean).join(" ")||void 0,value:c(l.inputValue),type:"text",role:"combobox",autoComplete:"off","aria-controls":(d=(n=Y.current)===null||n===void 0?void 0:n.getAttribute("id"))!==null&&d!==void 0?d:void 0,"aria-expanded":l.isExpanded&&!!l.listToRender.length,"aria-autocomplete":"list","aria-haspopup":"listbox","aria-activedescendant":l.highlightedIndex>=0&&(a=(p=(u=Q[l.highlightedIndex])===null||u===void 0?void 0:u.current)===null||p===void 0?void 0:p.getAttribute("id"))!==null&&a!==void 0?a:void 0,"aria-invalid":(h=$e["aria-invalid"])!==null&&h!==void 0?h:F}))),r.createElement(dt,{ref:ae,isExpanded:l.isExpanded,onClick:function(){return I({type:"ToggleButtonPressed"})},locale:L,isLoading:O}),r.createElement(st,{ref:Y,isExpanded:l.isExpanded},l.isExpanded&&r.createElement(ct,{isEqual:Ue,listToRender:l.listToRender,OptionBody:Je,highlightedIndex:l.highlightedIndex,dropdownAttributes:R,locale:L,refs:Q,onChange:function(s){ee.current=!0,I({type:"ItemOnClick",payload:{selectedItem:s}}),v==null||v(s)},noMatch:l.noMatch?g:void 0,noMatchMessageId:de,selectedItems:l.selectedItem?[l.selectedItem]:[]}),x&&r.createElement("div",{className:"ffe-searchable-dropdown__list--post-list-element"},x)))}var Pe=tt(wt);Pe.__docgenInfo={description:"",methods:[],displayName:"SearchableDropdown"};function je({account:e,showBalance:t=!0,ariaInvalid:o,locale:n}){const{balance:d,accountNumber:u,currencyCode:p}=e??{},a=!e&&(o==="true"||o===!0);return r.createElement("div",{className:J("ffe-small-text","ffe-account-selector-single__details",{"ffe-account-selector-single__details--invalid-empty":a})},e&&r.createElement(r.Fragment,null,r.createElement("div",{className:"ffe-account-selector-single__details--left"},qe(u)),t&&r.createElement("div",{className:"ffe-account-selector-single__details--right"},Oe(d,n,p))))}je.__docgenInfo={description:"",methods:[],displayName:"AccountDetails",props:{account:{required:!1,tsType:{name:"Account"},description:""},showBalance:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},ariaInvalid:{required:!0,tsType:{name:"ReactComponentPropsWithoutRef['aria-invalid']",raw:"React.ComponentPropsWithoutRef<'div'>['aria-invalid']"},description:""},locale:{required:!0,tsType:{name:"union",raw:"'nb' | 'nn' | 'en'",elements:[{name:"literal",value:"'nb'"},{name:"literal",value:"'nn'"},{name:"literal",value:"'en'"}]},description:""}}};const St=({accounts:e,selectedAccount:t,inputValue:o})=>t&&t.name===o&&!e.find(d=>d.accountNumber===t.accountNumber)?[...e,t]:e;function Ge({item:e,isHighlighted:t,showBalance:o,locale:n}){return r.createElement("div",{className:J("ffe-searchable-dropdown__list-item-body",{"ffe-searchable-dropdown__list-item-body--highlighted":t})},e.name,r.createElement("div",{className:"ffe-searchable-dropdown__list-item-body-details"},r.createElement(te,{className:"ffe-searchable-dropdown__detail-text"},qe(e.accountNumber)),o&&r.createElement(te,{className:"ffe-searchable-dropdown__detail-text"},Oe(e.balance,n,e.currencyCode))))}Ge.__docgenInfo={description:"",methods:[],displayName:"AccountActionBody",props:{item:{required:!0,tsType:{name:"Item"},description:""},isHighlighted:{required:!0,tsType:{name:"boolean"},description:""},showBalance:{required:!0,tsType:{name:"boolean"},description:""},locale:{required:!0,tsType:{name:"union",raw:"'nb' | 'nn' | 'en'",elements:[{name:"literal",value:"'nb'"},{name:"literal",value:"'nn'"},{name:"literal",value:"'en'"}]},description:""}}};const T=({id:e,className:t,locale:o="nb",selectedAccount:n,hideAccountDetails:d=!1,showBalance:u=!1,noMatches:p,accounts:a,onAccountSelected:h,allowCustomAccount:b=!1,labelledById:M,optionBody:_,postListElement:N,onReset:R,inputProps:y,formatAccountNumber:B=!0,ariaInvalid:D,onOpen:v,onClose:m,...V})=>{const[x,g]=i.useState((n==null?void 0:n.name)||""),A=B?mt:void 0,L=c=>{b&&g(c.target.value),y!=null&&y.onChange&&y.onChange(c)},F=c=>{const E=c===null,C=!(c!=null&&c.accountNumber);E?(g(""),R()):C?(h({name:c.name,accountNumber:c.name}),g(c.name)):(h(c),g(c.name))},q=V["aria-invalid"]??D;return r.createElement("div",{className:J("ffe-account-selector-single",t),id:`${e}-account-selector-container`},r.createElement(Pe,{id:e,labelledById:M,inputProps:{...y,onChange:L},dropdownAttributes:u?["name","accountNumber","balance"]:["name","accountNumber"],postListElement:N,dropdownList:b?St({selectedAccount:n,accounts:a,inputValue:x}):a,noMatch:b&&x.trim()!==""?{dropdownList:[{name:A?A(x):x,accountNumber:""}]}:p??{text:ft[o].noMatch},formatter:A,onChange:F,searchAttributes:["name","accountNumber"],locale:o,optionBody:({item:c,isHighlighted:E,...C})=>_?r.createElement(_,{item:c,isHighlighted:E,...C}):r.createElement(Ge,{item:c,isHighlighted:E,locale:o,showBalance:u}),ariaInvalid:q,searchMatcher:pt,selectedItem:n,onOpen:v,onClose:m,isEqual:(c,E)=>c.accountNumber===E.accountNumber}),!d&&r.createElement(je,{ariaInvalid:q,account:n,showBalance:u&&["string","number"].includes(typeof(n==null?void 0:n.balance)),locale:o}))};T.__docgenInfo={description:"",methods:[],displayName:"AccountSelector",props:{accounts:{required:!0,tsType:{name:"Array",elements:[{name:"T"}],raw:"T[]"},description:`Array of objects:
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
}`,signature:{properties:[{key:"item",value:{name:"T",required:!0}},{key:"locale",value:{name:"union",raw:"'nb' | 'nn' | 'en'",elements:[{name:"literal",value:"'nb'"},{name:"literal",value:"'nn'"},{name:"literal",value:"'en'"}],required:!0}},{key:"isHighlighted",value:{name:"boolean",required:!0}},{key:"dropdownAttributes",value:{name:"Array",elements:[{name:"unknown"}],raw:"(keyof T)[]",required:!0}}]}}]},description:"Custom element to use for each item in the dropdown list"},postListElement:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Element to be shown below dropDownList"},"aria-invalid":{required:!1,tsType:{name:"AriaAttributes['aria-invalid']",raw:"AriaAttributes['aria-invalid']"},description:"Sets aria-invalid on input field"},ariaInvalid:{required:!1,tsType:{name:"AriaAttributes['aria-invalid']",raw:"AriaAttributes['aria-invalid']"},description:""},onOpen:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Prop passed to the dropdown list"},onClose:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},selectedAccount:{required:!1,tsType:{name:"T"},description:""},onReset:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Called when emptying the input field and moving focus away from the account selector"},onColoredBg:{required:!1,tsType:{name:"never"},description:""}}};const Et={title:"Komponenter/Account-selector/AccountSelector",component:T,argTypes:{postListElement:{options:["text","html"],mapping:{text:"Some text describing the list",html:r.createElement("span",null,"Some text describing the list")}}}},Ke=[{accountNumber:"39920143613",name:"Brukskonto",currencyCode:"NOK",balance:1337},{accountNumber:"42142102514",name:"Brukskonto2",currencyCode:"NOK",balance:13337},{accountNumber:"23200355148",name:"Sparekonto1",currencyCode:"NOK",balance:109236},{accountNumber:"23207117277",name:"Sparekonto2",currencyCode:"NOK",balance:0}],S={args:{accounts:Ke,id:"input-id",labelledById:"label-id",locale:"nb",formatAccountNumber:!0,allowCustomAccount:!1},render:function(t){const[o,n]=i.useState();return r.createElement(k,{label:"Velg konto",inputId:t.id,labelId:t.labelledById},r.createElement(T,{...t,selectedAccount:o,onAccountSelected:n}))}},G={args:{...S.args,showBalance:!0},render:function(t){const[o,n]=i.useState();return r.createElement(k,{label:"Velg konto",inputId:t.id,labelId:t.labelledById},r.createElement(T,{...t,selectedAccount:o,onAccountSelected:n}))}},K={args:{...S.args,allowCustomAccount:!0},render:function(t){const[o,n]=i.useState();return r.createElement(k,{label:"Velg konto",inputId:t.id,labelId:t.labelledById},r.createElement(T,{...t,selectedAccount:o,onAccountSelected:n}))}},H={args:{...S.args,formatAccountNumber:!1},render:function(t){const[o,n]=i.useState();return r.createElement(k,{label:"Velg konto",inputId:t.id,labelId:t.labelledById},r.createElement(T,{...t,selectedAccount:o,onAccountSelected:n}))}},W={args:{...S.args,formatAccountNumber:!1},render:function(t){const[o,n]=i.useState(),d=({item:u,isHighlighted:p})=>r.createElement("div",{style:{padding:"8px",background:p?"#ff9100":"white"}},r.createElement("div",null,u.name),r.createElement("div",{style:{display:"flex",justifyContent:"space-between"}},r.createElement(pe,null,u.accountNumber),r.createElement(pe,null,u.balance)));return r.createElement(k,{label:"Velg konto",inputId:t.id,labelId:t.labelledById},r.createElement(T,{...t,optionBody:d,selectedAccount:o,onAccountSelected:n}))}},U={args:{...S.args,hideAccountDetails:!1},render:function(t){const[o,n]=i.useState();return r.createElement(k,{label:"Velg konto",inputId:t.id,labelId:t.labelledById},r.createElement(T,{...t,selectedAccount:o,onAccountSelected:n}))}},$={args:{...S.args,postListElement:r.createElement("span",null,"Some text describing the list")},render:function(t){const[o,n]=i.useState();return r.createElement(k,{label:"Velg konto",inputId:t.id,labelId:t.labelledById},r.createElement(T,{...t,selectedAccount:o,onAccountSelected:n}))}},z={args:{...S.args},render:function(t){const[o,n]=i.useState(Ke[2]);return r.createElement(k,{label:"Velg konto",inputId:t.id,labelId:t.labelledById},r.createElement(T,{...t,selectedAccount:o,onAccountSelected:n}))}};var me,fe,he;S.parameters={...S.parameters,docs:{...(me=S.parameters)==null?void 0:me.docs,source:{originalSource:`{
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
}`,...(he=(fe=S.parameters)==null?void 0:fe.docs)==null?void 0:he.source}}};var ge,be,ye;G.parameters={...G.parameters,docs:{...(ge=G.parameters)==null?void 0:ge.docs,source:{originalSource:`{
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
}`,...(ye=(be=G.parameters)==null?void 0:be.docs)==null?void 0:ye.source}}};var ve,Ae,Ie;K.parameters={...K.parameters,docs:{...(ve=K.parameters)==null?void 0:ve.docs,source:{originalSource:`{
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
}`,...(Ie=(Ae=K.parameters)==null?void 0:Ae.docs)==null?void 0:Ie.source}}};var we,Se,Ee;H.parameters={...H.parameters,docs:{...(we=H.parameters)==null?void 0:we.docs,source:{originalSource:`{
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
}`,...(Ee=(Se=H.parameters)==null?void 0:Se.docs)==null?void 0:Ee.source}}};var Re,xe,Te;W.parameters={...W.parameters,docs:{...(Re=W.parameters)==null?void 0:Re.docs,source:{originalSource:`{
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
}`,...(Te=(xe=W.parameters)==null?void 0:xe.docs)==null?void 0:Te.source}}};var Ne,Ce,_e;U.parameters={...U.parameters,docs:{...(Ne=U.parameters)==null?void 0:Ne.docs,source:{originalSource:`{
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
}`,...(_e=(Ce=U.parameters)==null?void 0:Ce.docs)==null?void 0:_e.source}}};var Be,De,Le;$.parameters={...$.parameters,docs:{...(Be=$.parameters)==null?void 0:Be.docs,source:{originalSource:`{
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
}`,...(Le=(De=$.parameters)==null?void 0:De.docs)==null?void 0:Le.source}}};var ke,Me,Ve;z.parameters={...z.parameters,docs:{...(ke=z.parameters)==null?void 0:ke.docs,source:{originalSource:`{
  args: {
    ...Standard.args
  },
  render: function Render(args) {
    const [selectedAccount, setSelectedAccount] = useState<Account>(accounts[2]);
    return <InputGroup label="Velg konto" inputId={args.id} labelId={args.labelledById}>
                <AccountSelector {...args} selectedAccount={selectedAccount} onAccountSelected={setSelectedAccount} />
            </InputGroup>;
  }
}`,...(Ve=(Me=z.parameters)==null?void 0:Me.docs)==null?void 0:Ve.source}}};const Rt=["Standard","ShowBalance","AllowCustomAccount","NoFormatAccount","ListElementBody","HideAccountDetails","PostListElement","InitialValue"],Dt=Object.freeze(Object.defineProperty({__proto__:null,AllowCustomAccount:K,HideAccountDetails:U,InitialValue:z,ListElementBody:W,NoFormatAccount:H,PostListElement:$,ShowBalance:G,Standard:S,__namedExportsOrder:Rt,default:Et},Symbol.toStringTag,{value:"Module"}));export{Dt as A,U as H,W as L,H as N,$ as P,S,G as a,K as b};
