import{R as r,r as i}from"./index-eCxJ45ll.js";import{c as Y}from"./index-DezCrw0f.js";import{g as j,f as Ye,u as Ze,a as et,b as tt,c as nt,d as se,m as ot,T as rt,L as at,R as lt,h as dt,s as ce,i as ie,j as st,o as Ve,k as ct,t as it,l as ut,n as pt}from"./texts-B32pXfRF.js";import{M as mt}from"./MicroText-DhU_-SBY.js";import{i as gt,S as ue}from"./index-BhB8jUJx.js";import{I as M}from"./InputGroup-BoYo0rXD.js";function Oe(t){var e=t.item,o=t.dropdownAttributes,n=t.isHighlighted,d=o[0],u=o.slice(1),g=e[d],l=u.map(function(f,b){return r.createElement(mt,{className:"ffe-searchable-dropdown__detail-text",key:b},e[f])});return r.createElement("div",{className:Y("ffe-searchable-dropdown__list-item-body",{"ffe-searchable-dropdown__list-item-body--highlighted":n})},g,!!l.length&&r.createElement("div",{className:"ffe-searchable-dropdown__list-item-body-details"},l))}Oe.__docgenInfo={description:"",methods:[],displayName:"OptionBody"};var m=function(){return m=Object.assign||function(t){for(var e,o=1,n=arguments.length;o<n;o++){e=arguments[o];for(var d in e)Object.prototype.hasOwnProperty.call(e,d)&&(t[d]=e[d])}return t},m.apply(this,arguments)},ft=function(t){var e=t.searchAttributes,o=t.dropdownList,n=t.noMatchDropdownList,d=t.maxRenderedDropdownElements,u=t.searchMatcher,g=t.onChange;return function(l,f){var b,_,N,x,E,y,D,L,A,p,V;switch(f.type){case"InputKeyDownEscape":return m(m({},l),{noMatch:!1,isExpanded:!1,highlightedIndex:-1,inputValue:l.selectedItem?l.selectedItem[e[0]]:""});case"InputClick":{var O=j({inputValue:l.inputValue,searchAttributes:e,maxRenderedDropdownElements:d,dropdownList:o,noMatchDropdownList:n,searchMatcher:u,showAllItemsInDropdown:!0}),h=O.noMatch,v=O.listToRender;return m(m({},l),{isExpanded:!0,listToRender:v,noMatch:h})}case"InputChange":{var R=j({inputValue:(_=(b=f.payload)===null||b===void 0?void 0:b.inputValue)!==null&&_!==void 0?_:"",searchAttributes:e,maxRenderedDropdownElements:d,dropdownList:o,noMatchDropdownList:n,searchMatcher:u,showAllItemsInDropdown:!1}),h=R.noMatch,v=R.listToRender;return m(m({},l),{isExpanded:!0,inputValue:(x=(N=f.payload)===null||N===void 0?void 0:N.inputValue)!==null&&x!==void 0?x:"",listToRender:v,highlightedIndex:((y=(E=f.payload)===null||E===void 0?void 0:E.inputValue)===null||y===void 0?void 0:y.trim())===""||v.length===0?-1:0,noMatch:h})}case"ToggleButtonPressed":return m(m({},l),{isExpanded:!l.isExpanded});case"ItemSelectedProgrammatically":case"ItemOnClick":case"InputKeyDownEnter":return m(m({},l),{isExpanded:!1,highlightedIndex:-1,selectedItem:(D=f.payload)===null||D===void 0?void 0:D.selectedItem,inputValue:((A=(L=f.payload)===null||L===void 0?void 0:L.selectedItem)===null||A===void 0?void 0:A[e[0]])||""});case"InputKeyDownArrowDown":case"InputKeyDownArrowUp":return m(m({},l),{isExpanded:!0,highlightedIndex:(V=(p=f.payload)===null||p===void 0?void 0:p.highlightedIndex)!==null&&V!==void 0?V:-1});case"FocusMovedOutSide":{var v=j({inputValue:l.inputValue,searchAttributes:e,maxRenderedDropdownElements:d,dropdownList:o,noMatchDropdownList:n,searchMatcher:u,showAllItemsInDropdown:!0}).listToRender,P=l.inputValue===""&&!!l.selectedItem,F=l.listToRender.length===1&&e.map(function(T){var k;return l.listToRender[0][T]===((k=l.selectedItem)===null||k===void 0?void 0:k[T])}).includes(!1)&&l.highlightedIndex!==-1,C=l.selectedItem;P?(g==null||g(null),C=void 0):F&&(g==null||g(l.listToRender[0]),C=l.listToRender[0]);var q=C?C[e[0]]:"";return m(m({},l),{isExpanded:!1,highlightedIndex:-1,inputValue:q,selectedItem:C,listToRender:v})}case"DropdownListPropUpdated":return m(m({},l),j({inputValue:l.inputValue,searchAttributes:e,maxRenderedDropdownElements:d,dropdownList:o,noMatchDropdownList:n,searchMatcher:u,showAllItemsInDropdown:!!l.selectedItem}));default:return l}}},X=function(){return X=Object.assign||function(t){for(var e,o=1,n=arguments.length;o<n;o++){e=arguments[o];for(var d in e)Object.prototype.hasOwnProperty.call(e,d)&&(t[d]=e[d])}return t},X.apply(this,arguments)},ht=function(t,e){var o={};for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&e.indexOf(n)<0&&(o[n]=t[n]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var d=0,n=Object.getOwnPropertySymbols(t);d<n.length;d++)e.indexOf(n[d])<0&&Object.prototype.propertyIsEnumerable.call(t,n[d])&&(o[n[d]]=t[n[d]]);return o},bt="ArrowUp",vt="ArrowDown",yt="Escape",At="Enter";function It(t,e){var o,n,d,u,g,l,f,b=t.id,_=t.labelledById,N=t.className,x=t.dropdownList,E=t.dropdownAttributes,y=t.searchAttributes,D=t.maxRenderedDropdownElements,L=D===void 0?Number.MAX_SAFE_INTEGER:D,A=t.onChange,p=t.inputProps,V=t.optionBody,O=t.postListElement,h=t.noMatch,v=t.locale,R=v===void 0?"nb":v,P=t.ariaInvalid,F=t.formatter,C=F===void 0?function(s){return s}:F,q=t.searchMatcher,c=t.selectedItem,T=t.isLoading,k=T===void 0?!1:T,je=t.onOpen,Ge=t.onClose,te=t.isEqual,Ke=te===void 0?gt:te,He=ht(t,["id","labelledById","className","dropdownList","dropdownAttributes","searchAttributes","maxRenderedDropdownElements","onChange","inputProps","optionBody","postListElement","noMatch","locale","ariaInvalid","formatter","searchMatcher","selectedItem","isLoading","onOpen","onClose","isEqual"]),ne=i.useReducer(ft({dropdownList:x,searchAttributes:y,maxRenderedDropdownElements:L,noMatchDropdownList:h==null?void 0:h.dropdownList,searchMatcher:q,onChange:A}),{isExpanded:!1,selectedItems:[],highlightedIndex:-1,inputValue:c?c[E[0]]:""},function(s){return X(X({},s),j({inputValue:s.inputValue,searchAttributes:y,maxRenderedDropdownElements:L,dropdownList:x,noMatchDropdownList:h==null?void 0:h.dropdownList,searchMatcher:q,showAllItemsInDropdown:!!c}))}),a=ne[0],I=ne[1],J=Ze({listToRender:a.listToRender}),oe=i.useState(!1),We=oe[0],Ue=oe[1],Z=i.useRef(null),re=i.useRef(null),ae=i.useRef(null),$e=V||Oe,Q=i.useRef(null),le=i.useId(),ee=i.useRef(!1),de=i.useRef(!1),ze=function(){I({type:"InputClick"})},Xe=function(s){p!=null&&p.onBlur&&p.onBlur(s)};i.useEffect(function(){I({type:"ItemSelectedProgrammatically",payload:{selectedItem:c}})},[c,I]),et({hasFocus:We,isExpanded:a.isExpanded,isLoading:k,locale:R,resultCount:a.listToRender.length,selectedValue:(o=a.selectedItem)===null||o===void 0?void 0:o[y[0]]}),i.useLayoutEffect(function(){var s,w;ee.current?((s=re.current)===null||s===void 0||s.focus(),ee.current=!1):de.current&&((w=Z.current)===null||w===void 0||w.focus(),de.current=!1)}),i.useEffect(function(){I({type:"DropdownListPropUpdated"})},[x,I]),tt({isExpanded:a.isExpanded,onClose:Ge,onOpen:je});var Je=i.useCallback(function(){return I({type:"FocusMovedOutSide"})},[]);nt({id:b,containerRef:ae,handelFocusMovedOutside:Je});var Qe=function(s){if(s.key===At&&a.highlightedIndex>=0){s.preventDefault(),I({type:"InputKeyDownEnter",payload:{selectedItem:a.listToRender[a.highlightedIndex]}}),A==null||A(a.listToRender[a.highlightedIndex]);return}else if(s.key===yt){I({type:"InputKeyDownEscape"});return}if(s.key===bt){if(s.preventDefault(),a.listToRender.length){var w=dt(a.highlightedIndex,a.listToRender.length);I({type:"InputKeyDownArrowUp",payload:{highlightedIndex:w}}),w>=0&&ce(a==null?void 0:a.listToRender[w],E),ie(J[w].current,Q.current)}return}if(s.key===vt&&(s.preventDefault(),a.listToRender.length)){var w=st(a.highlightedIndex,a.listToRender.length);I({type:"InputKeyDownArrowDown",payload:{highlightedIndex:w}}),w>=0&&ce(a==null?void 0:a.listToRender[w],E),ie(J[w].current,Q.current)}};return r.createElement("div",{onKeyDown:Qe,className:Y(N,"ffe-searchable-dropdown"),ref:ae,onMouseDown:se(b),onFocus:se(b)},r.createElement("div",{className:"ffe-searchable-dropdown__input",onClick:function(){var s;(s=Z.current)===null||s===void 0||s.focus()}},r.createElement("input",X({},p,{ref:ot([Z,e]),id:b,"aria-labelledby":_,onClick:ze,onChange:function(s){p!=null&&p.onChange&&p.onChange(s),I({type:"InputChange",payload:{inputValue:s.target.value}})},onFocus:function(){return Ue(!0)},onBlur:Xe,"aria-describedby":[p==null?void 0:p["aria-describedby"],a.noMatch&&le].filter(Boolean).join(" ")||void 0,value:C(a.inputValue),type:"text",role:"combobox",autoComplete:"off","aria-controls":(d=(n=Q.current)===null||n===void 0?void 0:n.getAttribute("id"))!==null&&d!==void 0?d:void 0,"aria-expanded":a.isExpanded&&!!a.listToRender.length,"aria-autocomplete":"list","aria-haspopup":"listbox","aria-activedescendant":a.highlightedIndex>=0&&(l=(g=(u=J[a.highlightedIndex])===null||u===void 0?void 0:u.current)===null||g===void 0?void 0:g.getAttribute("id"))!==null&&l!==void 0?l:void 0,"aria-invalid":(f=He["aria-invalid"])!==null&&f!==void 0?f:P}))),r.createElement(rt,{ref:re,isExpanded:a.isExpanded,onClick:function(){return I({type:"ToggleButtonPressed"})},locale:R,isLoading:k}),r.createElement(at,{ref:Q,isExpanded:a.isExpanded},a.isExpanded&&r.createElement(lt,{isEqual:Ke,listToRender:a.listToRender,OptionBody:$e,highlightedIndex:a.highlightedIndex,dropdownAttributes:E,locale:R,refs:J,onChange:function(s){ee.current=!0,I({type:"ItemOnClick",payload:{selectedItem:s}}),A==null||A(s)},noMatch:a.noMatch?h:void 0,noMatchMessageId:le,selectedItems:a.selectedItem?[a.selectedItem]:[]}),O&&r.createElement("div",{className:"ffe-searchable-dropdown__list--post-list-element"},O)))}var qe=Ye(It);qe.__docgenInfo={description:"",methods:[],displayName:"SearchableDropdown"};function Fe({account:t,showBalance:e=!0,ariaInvalid:o}){const{balance:n,accountNumber:d}=t??{},u=!t&&(o==="true"||o===!0);return r.createElement("div",{className:Y("ffe-small-text","ffe-account-selector-single__details",{"ffe-account-selector-single__details--invalid-empty":u})},t&&r.createElement(r.Fragment,null,r.createElement("div",{className:"ffe-account-selector-single__details--left"},Ve(d)),e&&r.createElement("div",{className:"ffe-account-selector-single__details--right"},n)))}Fe.__docgenInfo={description:"",methods:[],displayName:"AccountDetails",props:{account:{required:!1,tsType:{name:"Account"},description:""},showBalance:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},ariaInvalid:{required:!0,tsType:{name:"ReactComponentPropsWithoutRef['aria-invalid']",raw:"React.ComponentPropsWithoutRef<'div'>['aria-invalid']"},description:""}}};const wt=({accounts:t,selectedAccount:e,inputValue:o})=>e&&e.name===o&&!t.find(d=>d.accountNumber===e.accountNumber)?[...t,e]:t,B=({id:t,className:e,locale:o="nb",selectedAccount:n,hideAccountDetails:d=!1,showBalance:u=!1,noMatches:g,accounts:l,onAccountSelected:f,allowCustomAccount:b=!1,labelledById:_,optionBody:N,postListElement:x,onReset:E,inputProps:y,formatAccountNumber:D=!0,ariaInvalid:L,onOpen:A,onClose:p,onColoredBg:V,...O})=>{const[h,v]=i.useState((n==null?void 0:n.name)||""),R=D?pt:void 0,P=c=>{b&&v(c.target.value),y!=null&&y.onChange&&y.onChange(c)},F=c=>{const T=c===null,k=!(c!=null&&c.accountNumber);T?(v(""),E()):k?(f({name:c.name,accountNumber:c.name}),v(c.name)):(f(c),v(c.name))},C=O["aria-invalid"]??L,q=l.map(c=>({...c,accountNumber:Ve(c.accountNumber),balance:N?c.balance:ct(c.balance,o,c.currencyCode)}));return r.createElement("div",{className:Y("ffe-account-selector-single",{"ffe-account-selector-single--on-colored-bg":V},e),id:`${t}-account-selector-container`},r.createElement(qe,{id:t,labelledById:_,inputProps:{...y,onChange:P},dropdownAttributes:u?["name","accountNumber","balance"]:["name","accountNumber"],postListElement:x,dropdownList:b?wt({selectedAccount:n,accounts:q,inputValue:h}):q,noMatch:b&&h.trim()!==""?{dropdownList:[{name:R?R(h):h,accountNumber:""}]}:g??{text:it[o].noMatch},formatter:R,onChange:F,searchAttributes:["name","accountNumber"],locale:o,optionBody:N,ariaInvalid:C,searchMatcher:ut,selectedItem:n,onOpen:A,onClose:p,isEqual:(c,T)=>c.accountNumber===T.accountNumber}),!d&&r.createElement(Fe,{ariaInvalid:C,account:n,showBalance:u&&["string","number"].includes(typeof(n==null?void 0:n.balance))}))};B.__docgenInfo={description:"",methods:[],displayName:"AccountSelector",props:{accounts:{required:!0,tsType:{name:"Array",elements:[{name:"T"}],raw:"T[]"},description:`Array of objects:
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
}`,signature:{properties:[{key:"item",value:{name:"T",required:!0}},{key:"locale",value:{name:"union",raw:"'nb' | 'nn' | 'en'",elements:[{name:"literal",value:"'nb'"},{name:"literal",value:"'nn'"},{name:"literal",value:"'en'"}],required:!0}},{key:"isHighlighted",value:{name:"boolean",required:!0}},{key:"dropdownAttributes",value:{name:"Array",elements:[{name:"unknown"}],raw:"(keyof T)[]",required:!0}}]}}]},description:"Custom element to use for each item in the dropdown list"},postListElement:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Element to be shown below dropDownList"},"aria-invalid":{required:!1,tsType:{name:"AriaAttributes['aria-invalid']",raw:"AriaAttributes['aria-invalid']"},description:"Sets aria-invalid on input field"},ariaInvalid:{required:!1,tsType:{name:"AriaAttributes['aria-invalid']",raw:"AriaAttributes['aria-invalid']"},description:""},onOpen:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Prop passed to the dropdown list"},onClose:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},selectedAccount:{required:!1,tsType:{name:"T"},description:""},onReset:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Called when emptying the input field and moving focus away from the account selector"},onColoredBg:{required:!1,tsType:{name:"boolean"},description:"Adds alternative styling for better contrast on certain backgrounds"}}};const St={title:"Komponenter/Account-selector/AccountSelector",component:B,argTypes:{postListElement:{options:["text","html"],mapping:{text:"Some text describing the list",html:r.createElement("span",null,"Some text describing the list")}}}},Pe=[{accountNumber:"39920143613",name:"Brukskonto",currencyCode:"NOK",balance:1337},{accountNumber:"42142102514",name:"Brukskonto2",currencyCode:"NOK",balance:13337},{accountNumber:"23200355148",name:"Sparekonto1",currencyCode:"NOK",balance:109236},{accountNumber:"23207117277",name:"Sparekonto2",currencyCode:"NOK",balance:0}],S={args:{accounts:Pe,id:"input-id",labelledById:"label-id",locale:"nb",formatAccountNumber:!0,allowCustomAccount:!1,onColoredBg:!1},render:function(e){const[o,n]=i.useState();return r.createElement(M,{label:"Velg konto",inputId:e.id,labelId:e.labelledById,onColoredBg:e.onColoredBg},r.createElement(B,{...e,selectedAccount:o,onAccountSelected:n}))}},G={args:{...S.args,showBalance:!0},render:function(e){const[o,n]=i.useState();return r.createElement(M,{label:"Velg konto",inputId:e.id,labelId:e.labelledById,onColoredBg:e.onColoredBg},r.createElement(B,{...e,selectedAccount:o,onAccountSelected:n}))}},K={args:{...S.args,allowCustomAccount:!0},render:function(e){const[o,n]=i.useState();return r.createElement(M,{label:"Velg konto",inputId:e.id,labelId:e.labelledById,onColoredBg:e.onColoredBg},r.createElement(B,{...e,selectedAccount:o,onAccountSelected:n}))}},H={args:{...S.args,formatAccountNumber:!1},render:function(e){const[o,n]=i.useState();return r.createElement(M,{label:"Velg konto",inputId:e.id,labelId:e.labelledById,onColoredBg:e.onColoredBg},r.createElement(B,{...e,selectedAccount:o,onAccountSelected:n}))}},W={args:{...S.args,formatAccountNumber:!1},render:function(e){const[o,n]=i.useState(),d=({item:u,isHighlighted:g})=>r.createElement("div",{style:{padding:"8px",background:g?"#ff9100":"white"}},r.createElement("div",null,u.name),r.createElement("div",{style:{display:"flex",justifyContent:"space-between"}},r.createElement(ue,null,u.accountNumber),r.createElement(ue,null,u.balance)));return r.createElement(M,{label:"Velg konto",inputId:e.id,labelId:e.labelledById,onColoredBg:e.onColoredBg},r.createElement(B,{...e,optionBody:d,selectedAccount:o,onAccountSelected:n}))}},U={args:{...S.args,hideAccountDetails:!1},render:function(e){const[o,n]=i.useState();return r.createElement(M,{label:"Velg konto",inputId:e.id,labelId:e.labelledById,onColoredBg:e.onColoredBg},r.createElement(B,{...e,selectedAccount:o,onAccountSelected:n}))}},$={args:{...S.args,postListElement:r.createElement("span",null,"Some text describing the list")},render:function(e){const[o,n]=i.useState();return r.createElement(M,{label:"Velg konto",inputId:e.id,labelId:e.labelledById,onColoredBg:e.onColoredBg},r.createElement(B,{...e,selectedAccount:o,onAccountSelected:n}))}},z={args:{...S.args},render:function(e){const[o,n]=i.useState(Pe[2]);return r.createElement(M,{label:"Velg konto",inputId:e.id,labelId:e.labelledById,onColoredBg:e.onColoredBg},r.createElement(B,{...e,selectedAccount:o,onAccountSelected:n}))}};var pe,me,ge;S.parameters={...S.parameters,docs:{...(pe=S.parameters)==null?void 0:pe.docs,source:{originalSource:`{
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
}`,...(ge=(me=S.parameters)==null?void 0:me.docs)==null?void 0:ge.source}}};var fe,he,be;G.parameters={...G.parameters,docs:{...(fe=G.parameters)==null?void 0:fe.docs,source:{originalSource:`{
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
}`,...(be=(he=G.parameters)==null?void 0:he.docs)==null?void 0:be.source}}};var ve,ye,Ae;K.parameters={...K.parameters,docs:{...(ve=K.parameters)==null?void 0:ve.docs,source:{originalSource:`{
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
}`,...(Ae=(ye=K.parameters)==null?void 0:ye.docs)==null?void 0:Ae.source}}};var Ie,we,Se;H.parameters={...H.parameters,docs:{...(Ie=H.parameters)==null?void 0:Ie.docs,source:{originalSource:`{
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
}`,...(Se=(we=H.parameters)==null?void 0:we.docs)==null?void 0:Se.source}}};var Ee,Re,Ce;W.parameters={...W.parameters,docs:{...(Ee=W.parameters)==null?void 0:Ee.docs,source:{originalSource:`{
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
}`,...(Ce=(Re=W.parameters)==null?void 0:Re.docs)==null?void 0:Ce.source}}};var Be,xe,Te;U.parameters={...U.parameters,docs:{...(Be=U.parameters)==null?void 0:Be.docs,source:{originalSource:`{
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
}`,...(Te=(xe=U.parameters)==null?void 0:xe.docs)==null?void 0:Te.source}}};var Ne,De,Le;$.parameters={...$.parameters,docs:{...(Ne=$.parameters)==null?void 0:Ne.docs,source:{originalSource:`{
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
}`,...(Le=(De=$.parameters)==null?void 0:De.docs)==null?void 0:Le.source}}};var ke,Me,_e;z.parameters={...z.parameters,docs:{...(ke=z.parameters)==null?void 0:ke.docs,source:{originalSource:`{
  args: {
    ...Standard.args
  },
  render: function Render(args) {
    const [selectedAccount, setSelectedAccount] = useState<Account>(accounts[2]);
    return <InputGroup label="Velg konto" inputId={args.id} labelId={args.labelledById} onColoredBg={args.onColoredBg}>
                <AccountSelector {...args} selectedAccount={selectedAccount} onAccountSelected={setSelectedAccount} />
            </InputGroup>;
  }
}`,...(_e=(Me=z.parameters)==null?void 0:Me.docs)==null?void 0:_e.source}}};const Et=["Standard","ShowBalance","AllowCustomAccount","NoFormatAccount","ListElementBody","HideAccountDetails","PostListElement","InitialValue"],Dt=Object.freeze(Object.defineProperty({__proto__:null,AllowCustomAccount:K,HideAccountDetails:U,InitialValue:z,ListElementBody:W,NoFormatAccount:H,PostListElement:$,ShowBalance:G,Standard:S,__namedExportsOrder:Et,default:St},Symbol.toStringTag,{value:"Module"}));export{Dt as A,U as H,W as L,H as N,$ as P,S,G as a,K as b};
