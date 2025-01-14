import{R as r,r as u}from"./index-ne9I_3bB.js";import{c as J}from"./index-B6-3w37c.js";import{g as j,f as nn,u as tn,a as on,b as rn,c as an,d as ce,m as ln,T as dn,L as sn,R as cn,h as un,s as ue,i as ie,j as pn,k as qe,l as Oe,t as mn,n as fn,o as gn}from"./texts-CitqWciP.js";import{M as ne}from"./MicroText-CM7FmYwj.js";import{i as hn,S as pe}from"./index-PhrmigtZ.js";import{I as k}from"./InputGroup-CX8SHRAV.js";function Fe(n){var e=n.item,o=n.dropdownAttributes,t=n.isHighlighted,d=o[0],i=o.slice(1),p=e[d],a=i.map(function(g,b){return r.createElement(ne,{className:"ffe-searchable-dropdown__detail-text",key:b},e[g])});return r.createElement("div",{className:J("ffe-searchable-dropdown__list-item-body",{"ffe-searchable-dropdown__list-item-body--highlighted":t})},p,!!a.length&&r.createElement("div",{className:"ffe-searchable-dropdown__list-item-body-details"},a))}Fe.__docgenInfo={description:"",methods:[],displayName:"OptionBody"};var f=function(){return f=Object.assign||function(n){for(var e,o=1,t=arguments.length;o<t;o++){e=arguments[o];for(var d in e)Object.prototype.hasOwnProperty.call(e,d)&&(n[d]=e[d])}return n},f.apply(this,arguments)},bn=function(n){var e=n.searchAttributes,o=n.dropdownList,t=n.noMatchDropdownList,d=n.maxRenderedDropdownElements,i=n.searchMatcher,p=n.onChange;return function(a,g){var b,M,_,T,C,A,D,L,I,m,V;switch(g.type){case"InputKeyDownEscape":return f(f({},a),{noMatch:!1,isExpanded:!1,highlightedIndex:-1,inputValue:a.selectedItem?a.selectedItem[e[0]]:""});case"InputClick":{var q=j({inputValue:a.inputValue,searchAttributes:e,maxRenderedDropdownElements:d,dropdownList:o,noMatchDropdownList:t,searchMatcher:i,showAllItemsInDropdown:!0}),h=q.noMatch,y=q.listToRender;return f(f({},a),{isExpanded:!0,listToRender:y,noMatch:h})}case"InputChange":{var R=j({inputValue:(M=(b=g.payload)===null||b===void 0?void 0:b.inputValue)!==null&&M!==void 0?M:"",searchAttributes:e,maxRenderedDropdownElements:d,dropdownList:o,noMatchDropdownList:t,searchMatcher:i,showAllItemsInDropdown:!1}),h=R.noMatch,y=R.listToRender;return f(f({},a),{isExpanded:!0,inputValue:(T=(_=g.payload)===null||_===void 0?void 0:_.inputValue)!==null&&T!==void 0?T:"",listToRender:y,highlightedIndex:((A=(C=g.payload)===null||C===void 0?void 0:C.inputValue)===null||A===void 0?void 0:A.trim())===""||y.length===0?-1:0,noMatch:h})}case"ToggleButtonPressed":return f(f({},a),{isExpanded:!a.isExpanded});case"ItemSelectedProgrammatically":case"ItemOnClick":case"InputKeyDownEnter":return f(f({},a),{isExpanded:!1,highlightedIndex:-1,selectedItem:(D=g.payload)===null||D===void 0?void 0:D.selectedItem,inputValue:((I=(L=g.payload)===null||L===void 0?void 0:L.selectedItem)===null||I===void 0?void 0:I[e[0]])||""});case"InputKeyDownArrowDown":case"InputKeyDownArrowUp":return f(f({},a),{isExpanded:!0,highlightedIndex:(V=(m=g.payload)===null||m===void 0?void 0:m.highlightedIndex)!==null&&V!==void 0?V:-1});case"FocusMovedOutSide":{var y=j({inputValue:a.inputValue,searchAttributes:e,maxRenderedDropdownElements:d,dropdownList:o,noMatchDropdownList:t,searchMatcher:i,showAllItemsInDropdown:!0}).listToRender,P=a.inputValue===""&&!!a.selectedItem,O=a.listToRender.length===1&&e.map(function(N){var F;return a.listToRender[0][N]===((F=a.selectedItem)===null||F===void 0?void 0:F[N])}).includes(!1)&&a.highlightedIndex!==-1,B=a.selectedItem;P?(p==null||p(null),B=void 0):O&&(p==null||p(a.listToRender[0]),B=a.listToRender[0]);var c=B?B[e[0]]:"";return f(f({},a),{isExpanded:!1,highlightedIndex:-1,inputValue:c,selectedItem:B,listToRender:y})}case"DropdownListPropUpdated":return f(f({},a),j({inputValue:a.inputValue,searchAttributes:e,maxRenderedDropdownElements:d,dropdownList:o,noMatchDropdownList:t,searchMatcher:i,showAllItemsInDropdown:!!a.selectedItem}));default:return a}}},X=function(){return X=Object.assign||function(n){for(var e,o=1,t=arguments.length;o<t;o++){e=arguments[o];for(var d in e)Object.prototype.hasOwnProperty.call(e,d)&&(n[d]=e[d])}return n},X.apply(this,arguments)},yn=function(n,e){var o={};for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&e.indexOf(t)<0&&(o[t]=n[t]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var d=0,t=Object.getOwnPropertySymbols(n);d<t.length;d++)e.indexOf(t[d])<0&&Object.prototype.propertyIsEnumerable.call(n,t[d])&&(o[t[d]]=n[t[d]]);return o},An="ArrowUp",In="ArrowDown",wn="Escape",vn="Enter";function Sn(n,e){var o,t,d,i,p,a,g,b=n.id,M=n.labelledById,_=n.className,T=n.dropdownList,C=n.dropdownAttributes,A=n.searchAttributes,D=n.maxRenderedDropdownElements,L=D===void 0?Number.MAX_SAFE_INTEGER:D,I=n.onChange,m=n.inputProps,V=n.optionBody,q=n.postListElement,h=n.noMatch,y=n.locale,R=y===void 0?"nb":y,P=n.ariaInvalid,O=n.formatter,B=O===void 0?function(s){return s}:O,c=n.searchMatcher,S=n.selectedItem,N=n.isLoading,F=N===void 0?!1:N,He=n.onOpen,We=n.onClose,te=n.isEqual,Ue=te===void 0?hn:te,$e=yn(n,["id","labelledById","className","dropdownList","dropdownAttributes","searchAttributes","maxRenderedDropdownElements","onChange","inputProps","optionBody","postListElement","noMatch","locale","ariaInvalid","formatter","searchMatcher","selectedItem","isLoading","onOpen","onClose","isEqual"]),oe=u.useReducer(bn({dropdownList:T,searchAttributes:A,maxRenderedDropdownElements:L,noMatchDropdownList:h==null?void 0:h.dropdownList,searchMatcher:c,onChange:I}),{isExpanded:!1,selectedItems:[],highlightedIndex:-1,inputValue:S?S[C[0]]:""},function(s){return X(X({},s),j({inputValue:s.inputValue,searchAttributes:A,maxRenderedDropdownElements:L,dropdownList:T,noMatchDropdownList:h==null?void 0:h.dropdownList,searchMatcher:c,showAllItemsInDropdown:!!S}))}),l=oe[0],w=oe[1],Q=tn({listToRender:l.listToRender}),re=u.useState(!1),ze=re[0],Xe=re[1],Z=u.useRef(null),ae=u.useRef(null),le=u.useRef(null),Je=V||Fe,Y=u.useRef(null),de=u.useId(),ee=u.useRef(!1),se=u.useRef(!1),Qe=function(){w({type:"InputClick"})},Ye=function(s){m!=null&&m.onBlur&&m.onBlur(s)};u.useEffect(function(){w({type:"ItemSelectedProgrammatically",payload:{selectedItem:S}})},[S,w]),on({hasFocus:ze,isExpanded:l.isExpanded,isLoading:F,locale:R,resultCount:l.listToRender.length,selectedValue:(o=l.selectedItem)===null||o===void 0?void 0:o[A[0]]}),u.useLayoutEffect(function(){var s,v;ee.current?((s=ae.current)===null||s===void 0||s.focus(),ee.current=!1):se.current&&((v=Z.current)===null||v===void 0||v.focus(),se.current=!1)}),u.useEffect(function(){w({type:"DropdownListPropUpdated"})},[T,w]),rn({isExpanded:l.isExpanded,onClose:We,onOpen:He});var Ze=u.useCallback(function(){return w({type:"FocusMovedOutSide"})},[]);an({id:b,containerRef:le,handelFocusMovedOutside:Ze});var en=function(s){if(s.key===vn&&l.highlightedIndex>=0){s.preventDefault(),w({type:"InputKeyDownEnter",payload:{selectedItem:l.listToRender[l.highlightedIndex]}}),I==null||I(l.listToRender[l.highlightedIndex]);return}else if(s.key===wn){w({type:"InputKeyDownEscape"});return}if(s.key===An){if(s.preventDefault(),l.listToRender.length){var v=un(l.highlightedIndex,l.listToRender.length);w({type:"InputKeyDownArrowUp",payload:{highlightedIndex:v}}),v>=0&&ue(l==null?void 0:l.listToRender[v],C),ie(Q[v].current,Y.current)}return}if(s.key===In&&(s.preventDefault(),l.listToRender.length)){var v=pn(l.highlightedIndex,l.listToRender.length);w({type:"InputKeyDownArrowDown",payload:{highlightedIndex:v}}),v>=0&&ue(l==null?void 0:l.listToRender[v],C),ie(Q[v].current,Y.current)}};return r.createElement("div",{onKeyDown:en,className:J(_,"ffe-searchable-dropdown"),ref:le,onMouseDown:ce(b),onFocus:ce(b)},r.createElement("div",{className:"ffe-searchable-dropdown__input",onClick:function(){var s;(s=Z.current)===null||s===void 0||s.focus()}},r.createElement("input",X({},m,{ref:ln([Z,e]),id:b,"aria-labelledby":M,onClick:Qe,onChange:function(s){m!=null&&m.onChange&&m.onChange(s),w({type:"InputChange",payload:{inputValue:s.target.value}})},onFocus:function(){return Xe(!0)},onBlur:Ye,"aria-describedby":[m==null?void 0:m["aria-describedby"],l.noMatch&&de].filter(Boolean).join(" ")||void 0,value:B(l.inputValue),type:"text",role:"combobox",autoComplete:"off","aria-controls":(d=(t=Y.current)===null||t===void 0?void 0:t.getAttribute("id"))!==null&&d!==void 0?d:void 0,"aria-expanded":l.isExpanded&&!!l.listToRender.length,"aria-autocomplete":"list","aria-haspopup":"listbox","aria-activedescendant":l.highlightedIndex>=0&&(a=(p=(i=Q[l.highlightedIndex])===null||i===void 0?void 0:i.current)===null||p===void 0?void 0:p.getAttribute("id"))!==null&&a!==void 0?a:void 0,"aria-invalid":(g=$e["aria-invalid"])!==null&&g!==void 0?g:P}))),r.createElement(dn,{ref:ae,isExpanded:l.isExpanded,onClick:function(){return w({type:"ToggleButtonPressed"})},locale:R,isLoading:F}),r.createElement(sn,{ref:Y,isExpanded:l.isExpanded},l.isExpanded&&r.createElement(cn,{isEqual:Ue,listToRender:l.listToRender,OptionBody:Je,highlightedIndex:l.highlightedIndex,dropdownAttributes:C,locale:R,refs:Q,onChange:function(s){ee.current=!0,w({type:"ItemOnClick",payload:{selectedItem:s}}),I==null||I(s)},noMatch:l.noMatch?h:void 0,noMatchMessageId:de,selectedItems:l.selectedItem?[l.selectedItem]:[]}),q&&r.createElement("div",{className:"ffe-searchable-dropdown__list--post-list-element"},q)))}var Pe=nn(Sn);Pe.__docgenInfo={description:"",methods:[],displayName:"SearchableDropdown"};function je({account:n,showBalance:e=!0,ariaInvalid:o,locale:t}){const{balance:d,accountNumber:i,currencyCode:p}=n??{},a=!n&&(o==="true"||o===!0);return r.createElement("div",{className:J("ffe-small-text","ffe-account-selector-single__details",{"ffe-account-selector-single__details--invalid-empty":a})},n&&r.createElement(r.Fragment,null,r.createElement("div",{className:"ffe-account-selector-single__details--left"},qe(i)),e&&r.createElement("div",{className:"ffe-account-selector-single__details--right"},Oe(d,t,p))))}je.__docgenInfo={description:"",methods:[],displayName:"AccountDetails",props:{account:{required:!1,tsType:{name:"Account"},description:""},showBalance:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},ariaInvalid:{required:!0,tsType:{name:"ReactComponentPropsWithoutRef['aria-invalid']",raw:"React.ComponentPropsWithoutRef<'div'>['aria-invalid']"},description:""},locale:{required:!0,tsType:{name:"union",raw:"'nb' | 'nn' | 'en'",elements:[{name:"literal",value:"'nb'"},{name:"literal",value:"'nn'"},{name:"literal",value:"'en'"}]},description:""}}};const En=({accounts:n,selectedAccount:e,inputValue:o})=>e&&e.name===o&&!n.find(d=>d.accountNumber===e.accountNumber)?[...n,e]:n;function Ge({item:n,isHighlighted:e,showBalance:o,locale:t}){return r.createElement("div",{className:J("ffe-searchable-dropdown__list-item-body",{"ffe-searchable-dropdown__list-item-body--highlighted":e})},n.name,r.createElement("div",{className:"ffe-searchable-dropdown__list-item-body-details"},r.createElement(ne,{className:"ffe-searchable-dropdown__detail-text"},qe(n.accountNumber)),o&&r.createElement(ne,{className:"ffe-searchable-dropdown__detail-text"},Oe(n.balance,t,n.currencyCode))))}Ge.__docgenInfo={description:"",methods:[],displayName:"AccountActionBody",props:{item:{required:!0,tsType:{name:"Item"},description:""},isHighlighted:{required:!0,tsType:{name:"boolean"},description:""},showBalance:{required:!0,tsType:{name:"boolean"},description:""},locale:{required:!0,tsType:{name:"union",raw:"'nb' | 'nn' | 'en'",elements:[{name:"literal",value:"'nb'"},{name:"literal",value:"'nn'"},{name:"literal",value:"'en'"}]},description:""}}};const x=({id:n,className:e,locale:o="nb",selectedAccount:t,hideAccountDetails:d=!1,showBalance:i=!1,noMatches:p,accounts:a,onAccountSelected:g,allowCustomAccount:b=!1,labelledById:M,optionBody:_,postListElement:T,onReset:C,inputProps:A,formatAccountNumber:D=!0,ariaInvalid:L,onOpen:I,onClose:m,onColoredBg:V,...q})=>{const[h,y]=u.useState((t==null?void 0:t.name)||""),R=D?gn:void 0,P=c=>{b&&y(c.target.value),A!=null&&A.onChange&&A.onChange(c)},O=c=>{const S=c===null,N=!(c!=null&&c.accountNumber);S?(y(""),C()):N?(g({name:c.name,accountNumber:c.name}),y(c.name)):(g(c),y(c.name))},B=q["aria-invalid"]??L;return r.createElement("div",{className:J("ffe-account-selector-single",{"ffe-account-selector-single--on-colored-bg":V},e),id:`${n}-account-selector-container`},r.createElement(Pe,{id:n,labelledById:M,inputProps:{...A,onChange:P},dropdownAttributes:i?["name","accountNumber","balance"]:["name","accountNumber"],postListElement:T,dropdownList:b?En({selectedAccount:t,accounts:a,inputValue:h}):a,noMatch:b&&h.trim()!==""?{dropdownList:[{name:R?R(h):h,accountNumber:""}]}:p??{text:mn[o].noMatch},formatter:R,onChange:O,searchAttributes:["name","accountNumber"],locale:o,optionBody:({item:c,isHighlighted:S,...N})=>_?r.createElement(_,{item:c,isHighlighted:S,...N}):r.createElement(Ge,{item:c,isHighlighted:S,locale:o,showBalance:i}),ariaInvalid:B,searchMatcher:fn,selectedItem:t,onOpen:I,onClose:m,isEqual:(c,S)=>c.accountNumber===S.accountNumber}),!d&&r.createElement(je,{ariaInvalid:B,account:t,showBalance:i&&["string","number"].includes(typeof(t==null?void 0:t.balance)),locale:o}))};x.__docgenInfo={description:"",methods:[],displayName:"AccountSelector",props:{accounts:{required:!0,tsType:{name:"Array",elements:[{name:"T"}],raw:"T[]"},description:`Array of objects:
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
}`,signature:{properties:[{key:"item",value:{name:"T",required:!0}},{key:"locale",value:{name:"union",raw:"'nb' | 'nn' | 'en'",elements:[{name:"literal",value:"'nb'"},{name:"literal",value:"'nn'"},{name:"literal",value:"'en'"}],required:!0}},{key:"isHighlighted",value:{name:"boolean",required:!0}},{key:"dropdownAttributes",value:{name:"Array",elements:[{name:"unknown"}],raw:"(keyof T)[]",required:!0}}]}}]},description:"Custom element to use for each item in the dropdown list"},postListElement:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Element to be shown below dropDownList"},"aria-invalid":{required:!1,tsType:{name:"AriaAttributes['aria-invalid']",raw:"AriaAttributes['aria-invalid']"},description:"Sets aria-invalid on input field"},ariaInvalid:{required:!1,tsType:{name:"AriaAttributes['aria-invalid']",raw:"AriaAttributes['aria-invalid']"},description:""},onOpen:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Prop passed to the dropdown list"},onClose:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},selectedAccount:{required:!1,tsType:{name:"T"},description:""},onReset:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Called when emptying the input field and moving focus away from the account selector"},onColoredBg:{required:!1,tsType:{name:"boolean"},description:"Adds alternative styling for better contrast on certain backgrounds"}}};const Cn={title:"Komponenter/Account-selector/AccountSelector",component:x,argTypes:{postListElement:{options:["text","html"],mapping:{text:"Some text describing the list",html:r.createElement("span",null,"Some text describing the list")}}}},Ke=[{accountNumber:"39920143613",name:"Brukskonto",currencyCode:"NOK",balance:1337},{accountNumber:"42142102514",name:"Brukskonto2",currencyCode:"NOK",balance:13337},{accountNumber:"23200355148",name:"Sparekonto1",currencyCode:"NOK",balance:109236},{accountNumber:"23207117277",name:"Sparekonto2",currencyCode:"NOK",balance:0}],E={args:{accounts:Ke,id:"input-id",labelledById:"label-id",locale:"nb",formatAccountNumber:!0,allowCustomAccount:!1,onColoredBg:!1},render:function(e){const[o,t]=u.useState();return r.createElement(k,{label:"Velg konto",inputId:e.id,labelId:e.labelledById,onColoredBg:e.onColoredBg},r.createElement(x,{...e,selectedAccount:o,onAccountSelected:t}))}},G={args:{...E.args,showBalance:!0},render:function(e){const[o,t]=u.useState();return r.createElement(k,{label:"Velg konto",inputId:e.id,labelId:e.labelledById,onColoredBg:e.onColoredBg},r.createElement(x,{...e,selectedAccount:o,onAccountSelected:t}))}},K={args:{...E.args,allowCustomAccount:!0},render:function(e){const[o,t]=u.useState();return r.createElement(k,{label:"Velg konto",inputId:e.id,labelId:e.labelledById,onColoredBg:e.onColoredBg},r.createElement(x,{...e,selectedAccount:o,onAccountSelected:t}))}},H={args:{...E.args,formatAccountNumber:!1},render:function(e){const[o,t]=u.useState();return r.createElement(k,{label:"Velg konto",inputId:e.id,labelId:e.labelledById,onColoredBg:e.onColoredBg},r.createElement(x,{...e,selectedAccount:o,onAccountSelected:t}))}},W={args:{...E.args,formatAccountNumber:!1},render:function(e){const[o,t]=u.useState(),d=({item:i,isHighlighted:p})=>r.createElement("div",{style:{padding:"8px",background:p?"#ff9100":"white"}},r.createElement("div",null,i.name),r.createElement("div",{style:{display:"flex",justifyContent:"space-between"}},r.createElement(pe,null,i.accountNumber),r.createElement(pe,null,i.balance)));return r.createElement(k,{label:"Velg konto",inputId:e.id,labelId:e.labelledById,onColoredBg:e.onColoredBg},r.createElement(x,{...e,optionBody:d,selectedAccount:o,onAccountSelected:t}))}},U={args:{...E.args,hideAccountDetails:!1},render:function(e){const[o,t]=u.useState();return r.createElement(k,{label:"Velg konto",inputId:e.id,labelId:e.labelledById,onColoredBg:e.onColoredBg},r.createElement(x,{...e,selectedAccount:o,onAccountSelected:t}))}},$={args:{...E.args,postListElement:r.createElement("span",null,"Some text describing the list")},render:function(e){const[o,t]=u.useState();return r.createElement(k,{label:"Velg konto",inputId:e.id,labelId:e.labelledById,onColoredBg:e.onColoredBg},r.createElement(x,{...e,selectedAccount:o,onAccountSelected:t}))}},z={args:{...E.args},render:function(e){const[o,t]=u.useState(Ke[2]);return r.createElement(k,{label:"Velg konto",inputId:e.id,labelId:e.labelledById,onColoredBg:e.onColoredBg},r.createElement(x,{...e,selectedAccount:o,onAccountSelected:t}))}};var me,fe,ge;E.parameters={...E.parameters,docs:{...(me=E.parameters)==null?void 0:me.docs,source:{originalSource:`{
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
}`,...(ge=(fe=E.parameters)==null?void 0:fe.docs)==null?void 0:ge.source}}};var he,be,ye;G.parameters={...G.parameters,docs:{...(he=G.parameters)==null?void 0:he.docs,source:{originalSource:`{
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
}`,...(ye=(be=G.parameters)==null?void 0:be.docs)==null?void 0:ye.source}}};var Ae,Ie,we;K.parameters={...K.parameters,docs:{...(Ae=K.parameters)==null?void 0:Ae.docs,source:{originalSource:`{
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
}`,...(we=(Ie=K.parameters)==null?void 0:Ie.docs)==null?void 0:we.source}}};var ve,Se,Ee;H.parameters={...H.parameters,docs:{...(ve=H.parameters)==null?void 0:ve.docs,source:{originalSource:`{
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
}`,...(Ve=(Me=z.parameters)==null?void 0:Me.docs)==null?void 0:Ve.source}}};const Rn=["Standard","ShowBalance","AllowCustomAccount","NoFormatAccount","ListElementBody","HideAccountDetails","PostListElement","InitialValue"],Ln=Object.freeze(Object.defineProperty({__proto__:null,AllowCustomAccount:K,HideAccountDetails:U,InitialValue:z,ListElementBody:W,NoFormatAccount:H,PostListElement:$,ShowBalance:G,Standard:E,__namedExportsOrder:Rn,default:Cn},Symbol.toStringTag,{value:"Module"}));export{Ln as A,U as H,W as L,H as N,$ as P,E as S,G as a,K as b};
