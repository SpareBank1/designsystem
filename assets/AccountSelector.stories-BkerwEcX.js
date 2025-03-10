import{R as o,r as p}from"./index-eCxJ45ll.js";import{c as Q}from"./index-DezCrw0f.js";import{g as X,f as st,u as dt,a as ct,b as it,c as ut,d as pe,m as pt,T as mt,L as ft,R as ht,h as gt,i as bt,s as me,j as fe,k as ne,l as We,n as yt,o as At,t as It}from"./texts-feE6HQJ8.js";import{M as te}from"./MicroText-DhU_-SBY.js";import{i as vt,S as he}from"./index-B3RHW42C.js";import{I as M}from"./InputGroup-DfxAwG5P.js";function Ue(e){var t=e.item,r=e.dropdownAttributes,n=e.isHighlighted,a=r[0],i=r.slice(1),h=t[a],y=i.map(function(s,m){return o.createElement(te,{className:"ffe-searchable-dropdown__detail-text",key:m},t[s])});return o.createElement("div",{className:Q("ffe-searchable-dropdown__list-item-body",{"ffe-searchable-dropdown__list-item-body--highlighted":n})},h,!!y.length&&o.createElement("div",{className:"ffe-searchable-dropdown__list-item-body-details"},y))}Ue.__docgenInfo={description:"",methods:[],displayName:"OptionBody"};var ge=function(e){var t=e.state,r=e.searchAttributes,n=e.maxRenderedDropdownElements,a=e.dropdownList,i=e.noMatchDropdownList,h=e.searchMatcher,y=e.displayAttribute,s=e.onChange,m=X({inputValue:t.inputValue,searchAttributes:r,maxRenderedDropdownElements:n,dropdownList:a,noMatchDropdownList:i,searchMatcher:h,showAllItemsInDropdown:!0}).listToRender,D=t.inputValue===""&&!!t.selectedItem,N=t.listToRender.length===1&&r.map(function(A){var w;return t.listToRender[0][A]===((w=t.selectedItem)===null||w===void 0?void 0:w[A])}).includes(!1)&&t.highlightedIndex!==-1,I=t.selectedItem;D?(s==null||s(null),I=void 0):N&&(s==null||s(t.listToRender[0]),I=t.listToRender[0]);var R=I?I[y]:"";return{inputValue:R,selectedItem:I,listToRender:m}},f=function(){return f=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++){t=arguments[r];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},f.apply(this,arguments)},wt=function(e){var t=e.searchAttributes,r=e.dropdownList,n=e.displayAttribute,a=e.noMatchDropdownList,i=e.maxRenderedDropdownElements,h=e.searchMatcher,y=e.onChange;return function(s,m){var D,N,I,R,A,w,B,V,k,g,b;switch(m.type){case"InputKeyDownEscape":return f(f({},s),{noMatch:!1,isExpanded:!1,highlightedIndex:-1,inputValue:s.selectedItem?s.selectedItem[n]:""});case"InputClick":{var T=X({inputValue:s.inputValue,searchAttributes:t,maxRenderedDropdownElements:i,dropdownList:r,noMatchDropdownList:a,searchMatcher:h,showAllItemsInDropdown:!0}),x=T.noMatch,u=T.listToRender;return f(f({},s),{isExpanded:!0,listToRender:u,noMatch:x})}case"InputChange":{var q=X({inputValue:(N=(D=m.payload)===null||D===void 0?void 0:D.inputValue)!==null&&N!==void 0?N:"",searchAttributes:t,maxRenderedDropdownElements:i,dropdownList:r,noMatchDropdownList:a,searchMatcher:h,showAllItemsInDropdown:!1}),x=q.noMatch,u=q.listToRender;return f(f({},s),{isExpanded:!0,inputValue:(R=(I=m.payload)===null||I===void 0?void 0:I.inputValue)!==null&&R!==void 0?R:"",listToRender:u,highlightedIndex:((w=(A=m.payload)===null||A===void 0?void 0:A.inputValue)===null||w===void 0?void 0:w.trim())===""||u.length===0?-1:0,noMatch:x})}case"ToggleButtonPressed":{if(s.isExpanded){var _=ge({state:s,searchAttributes:t,maxRenderedDropdownElements:i,dropdownList:r,noMatchDropdownList:a,searchMatcher:h,displayAttribute:n,onChange:y}),u=_.listToRender,O=_.inputValue,c=_.selectedItem;return f(f({},s),{isExpanded:!1,highlightedIndex:-1,inputValue:O,selectedItem:c,listToRender:u})}return f(f({},s),{isExpanded:!s.isExpanded})}case"ItemSelectedProgrammatically":case"ItemOnClick":case"InputKeyDownEnter":return f(f({},s),{isExpanded:!1,highlightedIndex:-1,selectedItem:(B=m.payload)===null||B===void 0?void 0:B.selectedItem,inputValue:((k=(V=m.payload)===null||V===void 0?void 0:V.selectedItem)===null||k===void 0?void 0:k[n])||""});case"InputKeyDownArrowDown":case"InputKeyDownArrowUp":return f(f({},s),{isExpanded:!0,highlightedIndex:(b=(g=m.payload)===null||g===void 0?void 0:g.highlightedIndex)!==null&&b!==void 0?b:-1});case"FocusMovedOutSide":{var S=ge({state:s,searchAttributes:t,maxRenderedDropdownElements:i,dropdownList:r,noMatchDropdownList:a,searchMatcher:h,displayAttribute:n,onChange:y}),u=S.listToRender,O=S.inputValue,c=S.selectedItem;return f(f({},s),{isExpanded:!1,highlightedIndex:-1,inputValue:O,selectedItem:c,listToRender:u})}case"DropdownListPropUpdated":return f(f({},s),X({inputValue:s.inputValue,searchAttributes:t,maxRenderedDropdownElements:i,dropdownList:r,noMatchDropdownList:a,searchMatcher:h,showAllItemsInDropdown:!!s.selectedItem}));default:return s}}},J=function(){return J=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++){t=arguments[r];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},J.apply(this,arguments)},St=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]]);return r},Et="ArrowUp",Rt="ArrowDown",Tt="Escape",xt="Enter",Ct="Tab";function Nt(e,t){var r,n,a,i,h,y,s,m=e.id,D=e.labelledById,N=e.className,I=e.dropdownList,R=e.dropdownAttributes,A=e.searchAttributes,w=e.displayAttribute,B=w===void 0?A[0]:w,V=e.maxRenderedDropdownElements,k=V===void 0?Number.MAX_SAFE_INTEGER:V,g=e.onChange,b=e.inputProps,T=e.optionBody,x=e.postListElement,u=e.noMatch,q=e.locale,_=q===void 0?"nb":q,O=e.ariaInvalid,c=e.formatter,S=c===void 0?function(d){return d}:c,F=e.searchMatcher,P=e.selectedItem,oe=e.isLoading,ae=oe===void 0?!1:oe,Je=e.onOpen,Qe=e.onClose,le=e.isEqual,Ye=le===void 0?vt:le,Ze=St(e,["id","labelledById","className","dropdownList","dropdownAttributes","searchAttributes","displayAttribute","maxRenderedDropdownElements","onChange","inputProps","optionBody","postListElement","noMatch","locale","ariaInvalid","formatter","searchMatcher","selectedItem","isLoading","onOpen","onClose","isEqual"]),se=p.useReducer(wt({dropdownList:I,displayAttribute:B,searchAttributes:A,maxRenderedDropdownElements:k,noMatchDropdownList:u==null?void 0:u.dropdownList,searchMatcher:F,onChange:g}),{isExpanded:!1,selectedItems:[],highlightedIndex:-1,formattedInputValue:"",inputValue:P?P[B]:""},function(d){return J(J({},d),X({inputValue:d.inputValue,searchAttributes:A,maxRenderedDropdownElements:k,dropdownList:I,noMatchDropdownList:u==null?void 0:u.dropdownList,searchMatcher:F,showAllItemsInDropdown:!!P}))}),l=se[0],v=se[1],Y=dt({listToRender:l.listToRender}),de=p.useState(!1),et=de[0],tt=de[1],ee=p.useRef(null),ce=p.useRef(null),nt=T||Ue,Z=p.useRef(null),ie=p.useId(),ue=p.useRef(!1),rt=function(){v({type:"InputClick"})},ot=function(d){b!=null&&b.onBlur&&b.onBlur(d)};p.useEffect(function(){v({type:"ItemSelectedProgrammatically",payload:{selectedItem:P}})},[P,v]),ct({hasFocus:et,isExpanded:l.isExpanded,isLoading:ae,locale:_,resultCount:l.listToRender.length,selectedValue:(r=l.selectedItem)===null||r===void 0?void 0:r[B]}),p.useLayoutEffect(function(){var d;ue.current&&((d=ee.current)===null||d===void 0||d.focus(),ue.current=!1)}),p.useEffect(function(){v({type:"DropdownListPropUpdated"})},[I,v]),it({isExpanded:l.isExpanded,onClose:Qe,onOpen:Je});var at=p.useCallback(function(){return v({type:"FocusMovedOutSide"})},[]);ut({id:m,containerRef:ce,handleFocusMovedOutside:at});var lt=function(d){if(d.key===xt&&l.highlightedIndex>=0){d.preventDefault(),v({type:"InputKeyDownEnter",payload:{selectedItem:l.listToRender[l.highlightedIndex]}}),g==null||g(l.listToRender[l.highlightedIndex]);return}else if(d.key===Tt){v({type:"InputKeyDownEscape"});return}if(d.key===Et){if(d.preventDefault(),l.listToRender.length){var L=gt(l.highlightedIndex,l.listToRender.length);v({type:"InputKeyDownArrowUp",payload:{highlightedIndex:L}}),L>=0&&me(l==null?void 0:l.listToRender[L],R),fe(Y[L].current,Z.current)}return}if(d.key===Rt&&(d.preventDefault(),l.listToRender.length)){var L=bt(l.highlightedIndex,l.listToRender.length);v({type:"InputKeyDownArrowDown",payload:{highlightedIndex:L}}),L>=0&&me(l==null?void 0:l.listToRender[L],R),fe(Y[L].current,Z.current)}d.key===Ct&&v({type:"FocusMovedOutSide"})};return o.createElement("div",{onKeyDown:lt,className:Q(N,"ffe-searchable-dropdown"),ref:ce,onMouseDown:pe(m),onFocus:pe(m)},o.createElement("div",{className:"ffe-searchable-dropdown__input",onClick:function(){var d;(d=ee.current)===null||d===void 0||d.focus()}},o.createElement("input",J({},b,{ref:pt([ee,t]),id:m,"aria-labelledby":D,onClick:rt,onChange:function(d){b!=null&&b.onChange&&b.onChange(d),v({type:"InputChange",payload:{inputValue:d.target.value}})},onFocus:function(){tt(!0),v({type:"InputClick"})},onBlur:ot,"aria-describedby":[b==null?void 0:b["aria-describedby"],l.noMatch&&ie].filter(Boolean).join(" ")||void 0,value:S(l.inputValue),type:"text",role:"combobox",autoComplete:"off","aria-controls":(a=(n=Z.current)===null||n===void 0?void 0:n.getAttribute("id"))!==null&&a!==void 0?a:void 0,"aria-expanded":l.isExpanded&&!!l.listToRender.length,"aria-autocomplete":"list","aria-haspopup":"listbox","aria-activedescendant":l.highlightedIndex>=0&&(y=(h=(i=Y[l.highlightedIndex])===null||i===void 0?void 0:i.current)===null||h===void 0?void 0:h.getAttribute("id"))!==null&&y!==void 0?y:void 0,"aria-invalid":(s=Ze["aria-invalid"])!==null&&s!==void 0?s:O}))),o.createElement(mt,{isExpanded:l.isExpanded,onClick:function(){v({type:"ToggleButtonPressed"})},isLoading:ae}),o.createElement(ft,{ref:Z,isExpanded:l.isExpanded},l.isExpanded&&o.createElement(ht,{isEqual:Ye,listToRender:l.listToRender,OptionBody:nt,highlightedIndex:l.highlightedIndex,dropdownAttributes:R,locale:_,refs:Y,onChange:function(d){v({type:"ItemOnClick",payload:{selectedItem:d}}),g==null||g(d)},noMatch:l.noMatch?u:void 0,noMatchMessageId:ie,selectedItems:l.selectedItem?[l.selectedItem]:[]}),x&&o.createElement("div",{className:"ffe-searchable-dropdown__list--post-list-element"},x)))}var $e=st(Nt);$e.__docgenInfo={description:"",methods:[],displayName:"SearchableDropdown"};function ze({account:e,showBalance:t=!0,ariaInvalid:r,locale:n}){const{balance:a,accountNumber:i,currencyCode:h}=e??{},y=!e&&(r==="true"||r===!0);return o.createElement("div",{className:Q("ffe-small-text","ffe-account-selector-single__details",{"ffe-account-selector-single__details--invalid-empty":y})},e&&o.createElement(o.Fragment,null,o.createElement("div",{className:"ffe-account-selector-single__details--left"},ne(i)),t&&o.createElement("div",{className:"ffe-account-selector-single__details--right"},We(a,n,h))))}ze.__docgenInfo={description:"",methods:[],displayName:"AccountDetails",props:{account:{required:!1,tsType:{name:"Account"},description:""},showBalance:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},ariaInvalid:{required:!0,tsType:{name:"ReactComponentPropsWithoutRef['aria-invalid']",raw:"React.ComponentPropsWithoutRef<'div'>['aria-invalid']"},description:""},locale:{required:!0,tsType:{name:"union",raw:"'nb' | 'nn' | 'en'",elements:[{name:"literal",value:"'nb'"},{name:"literal",value:"'nn'"},{name:"literal",value:"'en'"}]},description:""}}};const Dt=({accounts:e,selectedAccount:t,inputValue:r})=>t&&t.name===r&&!e.find(a=>a.accountNumber===t.accountNumber)?[...e,t]:e;function Xe({item:e,isHighlighted:t,showBalance:r,locale:n}){return o.createElement("div",{className:Q("ffe-searchable-dropdown__list-item-body",{"ffe-searchable-dropdown__list-item-body--highlighted":t})},e.name,o.createElement("div",{className:"ffe-searchable-dropdown__list-item-body-details"},o.createElement(te,{className:"ffe-searchable-dropdown__detail-text"},ne(e.accountNumber)),r&&o.createElement(te,{className:"ffe-searchable-dropdown__detail-text"},We(e.balance,n,e.currencyCode))))}Xe.__docgenInfo={description:"",methods:[],displayName:"AccountActionBody",props:{item:{required:!0,tsType:{name:"Item"},description:""},isHighlighted:{required:!0,tsType:{name:"boolean"},description:""},showBalance:{required:!0,tsType:{name:"boolean"},description:""},locale:{required:!0,tsType:{name:"union",raw:"'nb' | 'nn' | 'en'",elements:[{name:"literal",value:"'nb'"},{name:"literal",value:"'nn'"},{name:"literal",value:"'en'"}]},description:""}}};const C=({id:e,className:t,locale:r="nb",selectedAccount:n,hideAccountDetails:a=!1,showBalance:i=!1,noMatches:h,accounts:y,onAccountSelected:s,allowCustomAccount:m=!1,labelledById:D,optionBody:N,postListElement:I,onReset:R,inputProps:A,formatAccountNumber:w=!0,ariaInvalid:B,onOpen:V,onClose:k,displayAttribute:g,...b})=>{const[T,x]=p.useState((n==null?void 0:n.name)||""),u=w?At:void 0,q=c=>{m&&x(c.target.value),A!=null&&A.onChange&&A.onChange(c)},_=c=>{const S=c===null,F=!(c!=null&&c.accountNumber);S?(x(""),R()):F?(s({name:c.name,accountNumber:c.name,...g?{[g]:c.name}:{}}),x(c.name)):(s(c),x(c.name))},O=b["aria-invalid"]??B;return o.createElement("div",{className:Q("ffe-account-selector-single",t),id:`${e}-account-selector-container`},o.createElement($e,{id:e,labelledById:D,displayAttribute:g,inputProps:{...A,onChange:q},dropdownAttributes:i?["name","accountNumber","balance"]:["name","accountNumber"],postListElement:I,dropdownList:m?Dt({selectedAccount:n,accounts:y,inputValue:T}):y,noMatch:m&&T.trim()!==""?{dropdownList:[{name:u?u(T):T,accountNumber:"",...g?{[g]:u?u(T):T}:{}}]}:h??{text:It[r].noMatch},formatter:u,onChange:_,searchAttributes:["name","accountNumber",...g?[g]:[]],locale:r,optionBody:({item:c,isHighlighted:S,...F})=>N?o.createElement(N,{item:c,isHighlighted:S,...F}):o.createElement(Xe,{item:c,isHighlighted:S,locale:r,showBalance:i}),ariaInvalid:O,searchMatcher:yt,selectedItem:n,onOpen:V,onClose:k,isEqual:(c,S)=>c.accountNumber===S.accountNumber}),!a&&o.createElement(ze,{ariaInvalid:O,account:n,showBalance:i&&["string","number"].includes(typeof(n==null?void 0:n.balance)),locale:r}))};C.__docgenInfo={description:"",methods:[],displayName:"AccountSelector",props:{accounts:{required:!0,tsType:{name:"Array",elements:[{name:"T"}],raw:"T[]"},description:`Array of objects:
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
}`,signature:{properties:[{key:"item",value:{name:"T",required:!0}},{key:"locale",value:{name:"union",raw:"'nb' | 'nn' | 'en'",elements:[{name:"literal",value:"'nb'"},{name:"literal",value:"'nn'"},{name:"literal",value:"'en'"}],required:!0}},{key:"isHighlighted",value:{name:"boolean",required:!0}},{key:"dropdownAttributes",value:{name:"Array",elements:[{name:"unknown"}],raw:"(keyof T)[]",required:!0}}]}}]},description:"Custom element to use for each item in the dropdown list"},postListElement:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Element to be shown below dropDownList"},"aria-invalid":{required:!1,tsType:{name:"AriaAttributes['aria-invalid']",raw:"AriaAttributes['aria-invalid']"},description:"Sets aria-invalid on input field"},ariaInvalid:{required:!1,tsType:{name:"AriaAttributes['aria-invalid']",raw:"AriaAttributes['aria-invalid']"},description:""},onOpen:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Prop passed to the dropdown list"},onClose:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},selectedAccount:{required:!1,tsType:{name:"T"},description:""},onReset:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Called when emptying the input field and moving focus away from the account selector"},onColoredBg:{required:!1,tsType:{name:"never"},description:""}}};const Bt={title:"Komponenter/Account-selector/AccountSelector",component:C,argTypes:{postListElement:{options:["text","html"],mapping:{text:"Some text describing the list",html:o.createElement("span",null,"Some text describing the list")}}}},re=[{accountNumber:"39920143613",name:"Brukskonto",currencyCode:"NOK",balance:1337},{accountNumber:"42142102514",name:"Brukskonto2",currencyCode:"NOK",balance:13337},{accountNumber:"23200355148",name:"Sparekonto1",currencyCode:"NOK",balance:109236},{accountNumber:"23207117277",name:"Sparekonto2",currencyCode:"NOK",balance:0}],E={args:{accounts:re,id:"input-id",labelledById:"label-id",locale:"nb",formatAccountNumber:!0,allowCustomAccount:!1},render:function(t){const[r,n]=p.useState();return o.createElement(M,{label:"Velg konto",inputId:t.id,labelId:t.labelledById},o.createElement(C,{...t,selectedAccount:r,onAccountSelected:n}))}},j={args:{...E.args,showBalance:!0},render:function(t){const[r,n]=p.useState();return o.createElement(M,{label:"Velg konto",inputId:t.id,labelId:t.labelledById},o.createElement(C,{...t,selectedAccount:r,onAccountSelected:n}))}},G={args:{...E.args,allowCustomAccount:!0},render:function(t){const[r,n]=p.useState();return o.createElement(M,{label:"Velg konto",inputId:t.id,labelId:t.labelledById},o.createElement(C,{...t,selectedAccount:r,onAccountSelected:n}))}},K={args:{...E.args,formatAccountNumber:!1},render:function(t){const[r,n]=p.useState();return o.createElement(M,{label:"Velg konto",inputId:t.id,labelId:t.labelledById},o.createElement(C,{...t,selectedAccount:r,onAccountSelected:n}))}},H={args:{...E.args,formatAccountNumber:!1},render:function(t){const[r,n]=p.useState(),a=({item:i,isHighlighted:h})=>o.createElement("div",{style:{padding:"8px",background:h?"#ff9100":"white"}},o.createElement("div",null,i.name),o.createElement("div",{style:{display:"flex",justifyContent:"space-between"}},o.createElement(he,null,i.accountNumber),o.createElement(he,null,i.balance)));return o.createElement(M,{label:"Velg konto",inputId:t.id,labelId:t.labelledById},o.createElement(C,{...t,optionBody:a,selectedAccount:r,onAccountSelected:n}))}},W={args:{...E.args,hideAccountDetails:!1},render:function(t){const[r,n]=p.useState();return o.createElement(M,{label:"Velg konto",inputId:t.id,labelId:t.labelledById},o.createElement(C,{...t,selectedAccount:r,onAccountSelected:n}))}},U={args:{...E.args,postListElement:o.createElement("span",null,"Some text describing the list")},render:function(t){const[r,n]=p.useState();return o.createElement(M,{label:"Velg konto",inputId:t.id,labelId:t.labelledById},o.createElement(C,{...t,selectedAccount:r,onAccountSelected:n}))}},$={args:{...E.args},render:function(t){const[r,n]=p.useState(re[2]);return o.createElement(M,{label:"Velg konto",inputId:t.id,labelId:t.labelledById},o.createElement(C,{...t,selectedAccount:r,onAccountSelected:n}))}},be=re.map(e=>({...e,prettyName:`${e.name} - ${ne(e.accountNumber)}`})),z={args:{id:"input-id",labelledById:"label-id",locale:"nb",formatAccountNumber:!0,allowCustomAccount:!1,displayAttribute:"prettyName",accounts:be},render:function(t){const[r,n]=p.useState(be[2]);return o.createElement(M,{label:"Velg konto",inputId:t.id,labelId:t.labelledById},o.createElement(C,{...t,selectedAccount:r,onAccountSelected:n}))}};var ye,Ae,Ie;E.parameters={...E.parameters,docs:{...(ye=E.parameters)==null?void 0:ye.docs,source:{originalSource:`{
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
}`,...(Ie=(Ae=E.parameters)==null?void 0:Ae.docs)==null?void 0:Ie.source}}};var ve,we,Se;j.parameters={...j.parameters,docs:{...(ve=j.parameters)==null?void 0:ve.docs,source:{originalSource:`{
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
}`,...(Ne=(Ce=K.parameters)==null?void 0:Ce.docs)==null?void 0:Ne.source}}};var De,Be,Le;H.parameters={...H.parameters,docs:{...(De=H.parameters)==null?void 0:De.docs,source:{originalSource:`{
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
}`,...(Le=(Be=H.parameters)==null?void 0:Be.docs)==null?void 0:Le.source}}};var Me,Ve,ke;W.parameters={...W.parameters,docs:{...(Me=W.parameters)==null?void 0:Me.docs,source:{originalSource:`{
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
}`,...(ke=(Ve=W.parameters)==null?void 0:Ve.docs)==null?void 0:ke.source}}};var _e,Oe,qe;U.parameters={...U.parameters,docs:{...(_e=U.parameters)==null?void 0:_e.docs,source:{originalSource:`{
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
}`,...(He=(Ke=z.parameters)==null?void 0:Ke.docs)==null?void 0:He.source}}};const Lt=["Standard","ShowBalance","AllowCustomAccount","NoFormatAccount","ListElementBody","HideAccountDetails","PostListElement","InitialValue","CustomDisplayAttribute"],Ft=Object.freeze(Object.defineProperty({__proto__:null,AllowCustomAccount:G,CustomDisplayAttribute:z,HideAccountDetails:W,InitialValue:$,ListElementBody:H,NoFormatAccount:K,PostListElement:U,ShowBalance:j,Standard:E,__namedExportsOrder:Lt,default:Bt},Symbol.toStringTag,{value:"Module"}));export{Ft as A,z as C,W as H,H as L,K as N,U as P,E as S,j as a,G as b};
