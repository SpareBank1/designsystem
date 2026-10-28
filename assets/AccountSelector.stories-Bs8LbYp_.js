import{R as a,r as u}from"./index-DQDNmYQF.js";import{c as X}from"./index-D2FocPV0.js";import{g as nt,a as $,f as at,u as ot,b as lt,c as rt,d as ct,e as se,m as st,T as dt,L as ut,R as it,l as mt,q as de,s as ue,n as pt,r as ae,t as je,v as ft,w as gt,x as bt}from"./texts-B-nd1AV0.js";import{M as ne}from"./MicroText-DveNF6m_.js";import{i as ht,S as ie}from"./index-DV_rwQs_.js";import{I as x}from"./InputGroup-BOYEkbY1.js";function Ue({item:t,dropdownAttributes:e,isHighlighted:o,locale:n}){const[d,...c]=e,r=t[d],i=c.map((f,m)=>a.createElement(ne,{"aria-label":f==="balance"?nt(n,t[f]):void 0,className:"ffe-searchable-dropdown__detail-text",key:m},t[f]));return a.createElement("div",{className:X("ffe-searchable-dropdown__list-item-body",{"ffe-searchable-dropdown__list-item-body--highlighted":o})},r,!!i.length&&a.createElement("div",{className:"ffe-searchable-dropdown__list-item-body-details"},i))}Ue.__docgenInfo={description:"",methods:[],displayName:"OptionBody"};const At=({state:t,searchAttributes:e})=>{const o=t.inputValue===""&&!!t.selectedItem,n=t.listToRender.length===1&&e.map(d=>{var c;return t.listToRender[0][d]===((c=t.selectedItem)===null||c===void 0?void 0:c[d])}).includes(!1)&&t.highlightedIndex!==-1;return o?{selectedItem:void 0,hasSelectedItemChanged:!0}:n?{selectedItem:t.listToRender[0],hasSelectedItemChanged:!0}:{selectedItem:t.selectedItem,hasSelectedItemChanged:!1}},me=({inputValue:t,selectedItem:e,searchAttributes:o,maxRenderedDropdownElements:n,dropdownList:d,noMatchDropdownList:c,searchMatcher:r,displayAttribute:i})=>{const{listToRender:f}=$({inputValue:t,searchAttributes:o,maxRenderedDropdownElements:n,dropdownList:d,noMatchDropdownList:c,searchMatcher:r,showAllItemsInDropdown:!0});return{inputValue:e?e[i]:"",selectedItem:e,listToRender:f}},yt=({searchAttributes:t,dropdownList:e,displayAttribute:o,noMatchDropdownList:n,maxRenderedDropdownElements:d,searchMatcher:c})=>(r,i)=>{var f,m,C,N,A,_,w,B,k,E,V,y,q;switch(i.type){case"InputKeyDownEscape":return{...r,noMatch:!1,isExpanded:!1,highlightedIndex:-1,inputValue:r.selectedItem?r.selectedItem[o]:""};case"InputClick":{const{noMatch:g,listToRender:b}=$({inputValue:r.inputValue,searchAttributes:t,maxRenderedDropdownElements:d,dropdownList:e,noMatchDropdownList:n,searchMatcher:c,showAllItemsInDropdown:!0});return{...r,isExpanded:!0,listToRender:b,noMatch:g}}case"InputChange":{const{noMatch:g,listToRender:b}=$({inputValue:(m=(f=i.payload)===null||f===void 0?void 0:f.inputValue)!==null&&m!==void 0?m:"",searchAttributes:t,maxRenderedDropdownElements:d,dropdownList:e,noMatchDropdownList:n,searchMatcher:c,showAllItemsInDropdown:!1});return{...r,isExpanded:!0,inputValue:(N=(C=i.payload)===null||C===void 0?void 0:C.inputValue)!==null&&N!==void 0?N:"",listToRender:b,highlightedIndex:((_=(A=i.payload)===null||A===void 0?void 0:A.inputValue)===null||_===void 0?void 0:_.trim())===""||b.length===0?-1:0,noMatch:g}}case"ToggleButtonPressed":{if(r.isExpanded){const{listToRender:g,inputValue:b,selectedItem:R}=me({inputValue:r.inputValue,selectedItem:(w=i.payload)===null||w===void 0?void 0:w.selectedItem,searchAttributes:t,maxRenderedDropdownElements:d,dropdownList:e,noMatchDropdownList:n,searchMatcher:c,displayAttribute:o});return{...r,isExpanded:!1,highlightedIndex:-1,inputValue:b,selectedItem:R,listToRender:g}}return{...r,isExpanded:!r.isExpanded}}case"ItemSelectedProgrammatically":case"ItemOnClick":case"InputKeyDownEnter":return{...r,isExpanded:!1,highlightedIndex:-1,selectedItem:(B=i.payload)===null||B===void 0?void 0:B.selectedItem,inputValue:((E=(k=i.payload)===null||k===void 0?void 0:k.selectedItem)===null||E===void 0?void 0:E[o])||""};case"InputKeyDownArrowDown":case"InputKeyDownArrowUp":return{...r,isExpanded:!0,highlightedIndex:(y=(V=i.payload)===null||V===void 0?void 0:V.highlightedIndex)!==null&&y!==void 0?y:-1};case"FocusMovedOutSide":{const{listToRender:g,inputValue:b,selectedItem:R}=me({inputValue:r.inputValue,selectedItem:(q=i.payload)===null||q===void 0?void 0:q.selectedItem,searchAttributes:t,maxRenderedDropdownElements:d,dropdownList:e,noMatchDropdownList:n,searchMatcher:c,displayAttribute:o});return{...r,isExpanded:!1,highlightedIndex:-1,inputValue:b,selectedItem:R,listToRender:g}}case"DropdownListPropUpdated":return{...r,...$({inputValue:r.inputValue,searchAttributes:t,maxRenderedDropdownElements:d,dropdownList:e,noMatchDropdownList:n,searchMatcher:c,showAllItemsInDropdown:!!r.selectedItem})};default:return r}},It="ArrowUp",St="ArrowDown",vt="Escape",wt="Enter",Et="Tab";function Rt({id:t,labelledById:e,className:o,dropdownList:n,dropdownAttributes:d,searchAttributes:c,displayAttribute:r=c[0],maxRenderedDropdownElements:i=Number.MAX_SAFE_INTEGER,onChange:f,inputProps:m,optionBody:C,postListElement:N,noMatch:A,locale:_="nb",ariaInvalid:w,formatter:B=D=>D,searchMatcher:k,selectedItem:E,isLoading:V=!1,onOpen:y,onClose:q,isEqual:g=ht,...b},R){var D,G,O,p,T;const[l,h]=u.useReducer(yt({dropdownList:n,displayAttribute:r,searchAttributes:c,maxRenderedDropdownElements:i,noMatchDropdownList:A==null?void 0:A.dropdownList,searchMatcher:k}),{isExpanded:!1,selectedItems:[],highlightedIndex:-1,formattedInputValue:"",inputValue:E?E[r]:""},s=>({...s,...$({inputValue:s.inputValue,searchAttributes:c,maxRenderedDropdownElements:i,dropdownList:n,noMatchDropdownList:A==null?void 0:A.dropdownList,searchMatcher:k,showAllItemsInDropdown:!!E})})),z=ot({listToRender:l.listToRender}),[ze,Je]=u.useState(!1),Z=u.useRef(null),oe=u.useRef(null),Qe=C||Ue,ee=u.useRef(null),le=u.useId(),re=u.useRef(!1),Ye=()=>{h({type:"InputClick"})},Ze=s=>{m!=null&&m.onBlur&&m.onBlur(s)};u.useEffect(()=>{h({type:"ItemSelectedProgrammatically",payload:{selectedItem:E}})},[E,h]),lt({hasFocus:ze,isExpanded:l.isExpanded,isLoading:V,locale:_,resultCount:l.listToRender.length,selectedValue:(D=l.selectedItem)===null||D===void 0?void 0:D[r]}),u.useLayoutEffect(()=>{var s;re.current&&((s=Z.current)===null||s===void 0||s.focus(),re.current=!1)}),u.useEffect(()=>{h({type:"DropdownListPropUpdated"})},[n,h]),rt({isExpanded:l.isExpanded,onClose:q,onOpen:y});const ce=u.useRef({state:l,searchAttributes:c,onChange:f});u.useLayoutEffect(()=>{ce.current={state:l,searchAttributes:c,onChange:f}});const te=u.useCallback((s="FocusMovedOutSide")=>{var I;const J=ce.current,{selectedItem:Q,hasSelectedItemChanged:tt}=At({state:J.state,searchAttributes:J.searchAttributes});tt&&((I=J.onChange)===null||I===void 0||I.call(J,Q??null)),h({type:s,payload:{selectedItem:Q}})},[]);ct({id:t,containerRef:oe,handleFocusMovedOutside:te});const et=s=>{if(s.key===wt&&l.highlightedIndex>=0){s.preventDefault(),h({type:"InputKeyDownEnter",payload:{selectedItem:l.listToRender[l.highlightedIndex]}}),f==null||f(l.listToRender[l.highlightedIndex]);return}else if(s.key===vt){h({type:"InputKeyDownEscape"});return}if(s.key===It){if(s.preventDefault(),l.listToRender.length){const I=mt(l.highlightedIndex,l.listToRender.length);h({type:"InputKeyDownArrowUp",payload:{highlightedIndex:I}}),I>=0&&de(l==null?void 0:l.listToRender[I],d),ue(z[I].current,ee.current)}return}if(s.key===St&&(s.preventDefault(),l.listToRender.length)){const I=pt(l.highlightedIndex,l.listToRender.length);h({type:"InputKeyDownArrowDown",payload:{highlightedIndex:I}}),I>=0&&de(l==null?void 0:l.listToRender[I],d),ue(z[I].current,ee.current)}s.key===Et&&te()};return a.createElement("div",{onKeyDown:et,className:X(o,"ffe-searchable-dropdown","ffe-default-mode"),ref:oe,onMouseDown:se(t),onFocus:se(t)},a.createElement("div",{className:"ffe-searchable-dropdown__input",onClick:()=>{var s;(s=Z.current)===null||s===void 0||s.focus()}},a.createElement("input",{...m,ref:st([Z,R]),id:t,"aria-labelledby":e,onClick:Ye,onChange:s=>{m!=null&&m.onChange&&m.onChange(s),h({type:"InputChange",payload:{inputValue:s.target.value}})},onFocus:()=>{Je(!0),h({type:"InputClick"})},onBlur:Ze,"aria-describedby":[m==null?void 0:m["aria-describedby"],l.noMatch&&le].filter(Boolean).join(" ")||void 0,value:B(l.inputValue),type:"text",role:"combobox",autoComplete:"off","aria-controls":`${t}-listbox`,"aria-expanded":l.isExpanded&&!!l.listToRender.length,"aria-autocomplete":"list","aria-haspopup":"listbox","aria-activedescendant":l.highlightedIndex>=0&&(p=(O=(G=z[l.highlightedIndex])===null||G===void 0?void 0:G.current)===null||O===void 0?void 0:O.getAttribute("id"))!==null&&p!==void 0?p:void 0,"aria-invalid":(T=b["aria-invalid"])!==null&&T!==void 0?T:w})),a.createElement(dt,{isExpanded:l.isExpanded,onClick:()=>{l.isExpanded?te("ToggleButtonPressed"):h({type:"ToggleButtonPressed"})},isLoading:V}),a.createElement(ut,{ref:ee,isExpanded:l.isExpanded,id:`${t}-listbox`,labelledById:e},l.isExpanded&&a.createElement(it,{isEqual:g,listToRender:l.listToRender,OptionBody:Qe,highlightedIndex:l.highlightedIndex,dropdownAttributes:d,locale:_,refs:z,onChange:s=>{h({type:"ItemOnClick",payload:{selectedItem:s}}),f==null||f(s)},noMatch:l.noMatch?A:void 0,noMatchMessageId:le,selectedItems:l.selectedItem?[l.selectedItem]:[]}),N&&a.createElement("div",{className:"ffe-searchable-dropdown__list--post-list-element"},N)))}const Pe=at(Rt);Pe.__docgenInfo={description:"",methods:[],displayName:"SearchableDropdown",props:{displayAttribute:{defaultValue:{value:"searchAttributes[0]",computed:!0},required:!1},maxRenderedDropdownElements:{defaultValue:{value:"Number.MAX_SAFE_INTEGER",computed:!0},required:!1},locale:{defaultValue:{value:"'nb'",computed:!1},required:!1},formatter:{defaultValue:{value:"value => value",computed:!1},required:!1},isLoading:{defaultValue:{value:"false",computed:!1},required:!1},isEqual:{defaultValue:{value:"isDeepEqual",computed:!0},required:!1}}};function $e({account:t,showBalance:e=!0,ariaInvalid:o,locale:n}){const{balance:d,accountNumber:c,currencyCode:r}=t??{},i=!t&&(o==="true"||o===!0);return a.createElement("div",{className:X("ffe-small-text","ffe-account-selector-single__details",{"ffe-account-selector-single__details--invalid-empty":i})},t&&a.createElement(a.Fragment,null,a.createElement("div",{className:"ffe-account-selector-single__details--left"},ae(c)),e&&a.createElement("div",{className:"ffe-account-selector-single__details--right"},je(d,n,r))))}$e.__docgenInfo={description:"",methods:[],displayName:"AccountDetails",props:{account:{required:!1,tsType:{name:"Account"},description:""},showBalance:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},ariaInvalid:{required:!0,tsType:{name:"ReactComponentPropsWithoutRef['aria-invalid']",raw:"React.ComponentPropsWithoutRef<'div'>['aria-invalid']"},description:""},locale:{required:!0,tsType:{name:"union",raw:"'nb' | 'nn' | 'en'",elements:[{name:"literal",value:"'nb'"},{name:"literal",value:"'nn'"},{name:"literal",value:"'en'"}]},description:""}}};const Tt=({accounts:t,selectedAccount:e,inputValue:o})=>e&&e.name===o&&!t.find(d=>d.accountNumber===e.accountNumber)?[...t,e]:t;function Xe({item:t,isHighlighted:e,showBalance:o,locale:n}){return a.createElement("div",{className:X("ffe-searchable-dropdown__list-item-body",{"ffe-searchable-dropdown__list-item-body--highlighted":e})},t.name,a.createElement("div",{className:"ffe-searchable-dropdown__list-item-body-details"},a.createElement(ne,{className:"ffe-searchable-dropdown__detail-text"},ae(t.accountNumber)),o&&a.createElement(ne,{className:"ffe-searchable-dropdown__detail-text"},je(t.balance,n,t.currencyCode))))}Xe.__docgenInfo={description:"",methods:[],displayName:"AccountActionBody",props:{item:{required:!0,tsType:{name:"Item"},description:""},isHighlighted:{required:!0,tsType:{name:"boolean"},description:""},showBalance:{required:!0,tsType:{name:"boolean"},description:""},locale:{required:!0,tsType:{name:"union",raw:"'nb' | 'nn' | 'en'",elements:[{name:"literal",value:"'nb'"},{name:"literal",value:"'nn'"},{name:"literal",value:"'en'"}]},description:""}}};const v=({id:t,className:e,locale:o="nb",selectedAccount:n,hideAccountDetails:d=!1,showBalance:c=!1,noMatches:r,accounts:i,onAccountSelected:f,allowCustomAccount:m=!1,labelledById:C,optionBody:N,postListElement:A,onReset:_,inputProps:w,formatAccountNumber:B=!0,ariaInvalid:k,onOpen:E,onClose:V,displayAttribute:y,...q})=>{const[g,b]=u.useState((n==null?void 0:n.name)||""),R=B?gt:void 0,D=p=>{m&&b(p.target.value),w!=null&&w.onChange&&w.onChange(p)},G=p=>{const T=p===null,l=!(p!=null&&p.accountNumber);T?(b(""),_()):l?(f({name:p.name,accountNumber:p.name,...y?{[y]:p.name}:{}}),b(p.name)):(f(p),b(p.name))},O=q["aria-invalid"]??k;return a.createElement("div",{className:X("ffe-account-selector-single",e),id:`${t}-account-selector-container`},a.createElement(Pe,{id:t,labelledById:C,displayAttribute:y,inputProps:{...w,onChange:D},dropdownAttributes:c?["name","accountNumber","balance"]:["name","accountNumber"],postListElement:A,dropdownList:m?Tt({selectedAccount:n,accounts:i,inputValue:g}):i,noMatch:m&&g.trim()!==""?{dropdownList:[{name:R?R(g):g,accountNumber:"",...y?{[y]:R?R(g):g}:{}}]}:r??{text:bt[o].noMatch},formatter:R,onChange:G,searchAttributes:["name","accountNumber",...y?[y]:[]],locale:o,optionBody:({item:p,isHighlighted:T,...l})=>N?a.createElement(N,{item:p,isHighlighted:T,...l}):a.createElement(Xe,{item:p,isHighlighted:T,locale:o,showBalance:c}),ariaInvalid:O,searchMatcher:ft,selectedItem:n,onOpen:E,onClose:V,isEqual:(p,T)=>p.accountNumber===T.accountNumber}),!d&&a.createElement($e,{ariaInvalid:O,account:n,showBalance:c&&["string","number"].includes(typeof(n==null?void 0:n.balance)),locale:o}))};v.__docgenInfo={description:"",methods:[],displayName:"AccountSelector",props:{accounts:{required:!0,tsType:{name:"Array",elements:[{name:"T"}],raw:"T[]"},description:`Array of objects:
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
[Read more in the upgrade guide](https://sparebank1.github.io/designsystem/?path=/docs/introduksjon-changelog--docs#2025---februar---semantiske-farger)`}}};const xt={title:"Komponenter/Account-selector/AccountSelector",component:v,argTypes:{postListElement:{options:["text","html"],mapping:{text:"Some text describing the list",html:a.createElement("span",null,"Some text describing the list")}}}},Y=[{accountNumber:"39920143613",name:"Brukskonto",currencyCode:"NOK",balance:1337},{accountNumber:"42142102514",name:"Brukskonto2",currencyCode:"NOK",balance:13337},{accountNumber:"23200355148",name:"Sparekonto1",currencyCode:"NOK",balance:109236},{accountNumber:"23207117277",name:"Sparekonto2",currencyCode:"NOK",balance:0}],S={args:{accounts:Y,locale:"nb",formatAccountNumber:!0,allowCustomAccount:!1},render:function(e){const[o,n]=u.useState();return a.createElement(x,{label:"Velg konto"},a.createElement(v,{...e,selectedAccount:o,onAccountSelected:n,onReset:()=>n(void 0)}))}},F={args:{...S.args,showBalance:!0},render:function(e){const[o,n]=u.useState();return a.createElement(x,{label:"Velg konto",inputId:e.id,labelId:e.labelledById},a.createElement(v,{...e,selectedAccount:o,onAccountSelected:n}))}},L={args:{...S.args,allowCustomAccount:!0},render:function(e){const[o,n]=u.useState();return a.createElement(x,{label:"Velg konto",inputId:e.id,labelId:e.labelledById},a.createElement(v,{...e,selectedAccount:o,onAccountSelected:n}))}},H={args:{...S.args,formatAccountNumber:!1},render:function(e){const[o,n]=u.useState();return a.createElement(x,{label:"Velg konto",inputId:e.id,labelId:e.labelledById},a.createElement(v,{...e,selectedAccount:o,onAccountSelected:n}))}},K={args:{...S.args,formatAccountNumber:!1},render:function(e){const[o,n]=u.useState(),d=({item:c,isHighlighted:r})=>a.createElement("div",{style:{padding:"8px",background:r?"#ff9100":"white"}},a.createElement("div",null,c.name),a.createElement("div",{style:{display:"flex",justifyContent:"space-between"}},a.createElement(ie,null,c.accountNumber),a.createElement(ie,null,c.balance)));return a.createElement(x,{label:"Velg konto",inputId:e.id,labelId:e.labelledById},a.createElement(v,{...e,optionBody:d,selectedAccount:o,onAccountSelected:n}))}},W={args:{...S.args,hideAccountDetails:!1},render:function(e){const[o,n]=u.useState();return a.createElement(x,{label:"Velg konto",inputId:e.id,labelId:e.labelledById},a.createElement(v,{...e,selectedAccount:o,onAccountSelected:n}))}},M={args:{...S.args,postListElement:a.createElement("span",null,"Some text describing the list")},render:function(e){const[o,n]=u.useState();return a.createElement(x,{label:"Velg konto",inputId:e.id,labelId:e.labelledById},a.createElement(v,{...e,selectedAccount:o,onAccountSelected:n}))}},j={args:{...S.args},render:function(e){const[o,n]=u.useState(Y[2]);return a.createElement(x,{label:"Velg konto",inputId:e.id,labelId:e.labelledById},a.createElement(v,{...e,selectedAccount:o,onAccountSelected:n}))}},pe=Y.map(t=>({...t,prettyName:`${t.name} - ${ae(t.accountNumber)}`})),U={args:{id:"input-id",labelledById:"label-id",locale:"nb",formatAccountNumber:!0,allowCustomAccount:!1,displayAttribute:"prettyName",accounts:pe},render:function(e){const[o,n]=u.useState(pe[2]);return a.createElement(x,{label:"Velg konto",inputId:e.id,labelId:e.labelledById},a.createElement(v,{...e,selectedAccount:o,onAccountSelected:n}))}},P={args:{accounts:Y,locale:"nb",formatAccountNumber:!0,allowCustomAccount:!1},render:function(e){const[o,n]=u.useState();return a.createElement(x,{label:"Velg konto",description:"Velg den kontoen du har mest lyst på"},a.createElement(v,{...e,selectedAccount:o,onAccountSelected:n,onReset:()=>n(void 0)}))}};var fe,ge,be;S.parameters={...S.parameters,docs:{...(fe=S.parameters)==null?void 0:fe.docs,source:{originalSource:`{
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
}`,...(be=(ge=S.parameters)==null?void 0:ge.docs)==null?void 0:be.source}}};var he,Ae,ye;F.parameters={...F.parameters,docs:{...(he=F.parameters)==null?void 0:he.docs,source:{originalSource:`{
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
}`,...(ye=(Ae=F.parameters)==null?void 0:Ae.docs)==null?void 0:ye.source}}};var Ie,Se,ve;L.parameters={...L.parameters,docs:{...(Ie=L.parameters)==null?void 0:Ie.docs,source:{originalSource:`{
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
}`,...(ve=(Se=L.parameters)==null?void 0:Se.docs)==null?void 0:ve.source}}};var we,Ee,Re;H.parameters={...H.parameters,docs:{...(we=H.parameters)==null?void 0:we.docs,source:{originalSource:`{
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
}`,...(Re=(Ee=H.parameters)==null?void 0:Ee.docs)==null?void 0:Re.source}}};var Te,xe,Ne;K.parameters={...K.parameters,docs:{...(Te=K.parameters)==null?void 0:Te.docs,source:{originalSource:`{
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
}`,...(Ne=(xe=K.parameters)==null?void 0:xe.docs)==null?void 0:Ne.source}}};var _e,ke,Ve;W.parameters={...W.parameters,docs:{...(_e=W.parameters)==null?void 0:_e.docs,source:{originalSource:`{
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
}`,...(Ve=(ke=W.parameters)==null?void 0:ke.docs)==null?void 0:Ve.source}}};var Ce,Be,qe;M.parameters={...M.parameters,docs:{...(Ce=M.parameters)==null?void 0:Ce.docs,source:{originalSource:`{
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
}`,...(qe=(Be=M.parameters)==null?void 0:Be.docs)==null?void 0:qe.source}}};var De,Oe,Ge;j.parameters={...j.parameters,docs:{...(De=j.parameters)==null?void 0:De.docs,source:{originalSource:`{
  args: {
    ...Standard.args
  },
  render: function Render(args) {
    const [selectedAccount, setSelectedAccount] = useState<Account>(accounts[2]);
    return <InputGroup label="Velg konto" inputId={args.id} labelId={args.labelledById}>
                <AccountSelector {...args} selectedAccount={selectedAccount} onAccountSelected={setSelectedAccount} />
            </InputGroup>;
  }
}`,...(Ge=(Oe=j.parameters)==null?void 0:Oe.docs)==null?void 0:Ge.source}}};var Fe,Le,He;U.parameters={...U.parameters,docs:{...(Fe=U.parameters)==null?void 0:Fe.docs,source:{originalSource:`{
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
}`,...(He=(Le=U.parameters)==null?void 0:Le.docs)==null?void 0:He.source}}};var Ke,We,Me;P.parameters={...P.parameters,docs:{...(Ke=P.parameters)==null?void 0:Ke.docs,source:{originalSource:`{
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
}`,...(Me=(We=P.parameters)==null?void 0:We.docs)==null?void 0:Me.source}}};const Nt=["Standard","ShowBalance","AllowCustomAccount","NoFormatAccount","ListElementBody","HideAccountDetails","PostListElement","InitialValue","CustomDisplayAttribute","WithDescription"],Dt=Object.freeze(Object.defineProperty({__proto__:null,AllowCustomAccount:L,CustomDisplayAttribute:U,HideAccountDetails:W,InitialValue:j,ListElementBody:K,NoFormatAccount:H,PostListElement:M,ShowBalance:F,Standard:S,WithDescription:P,__namedExportsOrder:Nt,default:xt},Symbol.toStringTag,{value:"Module"}));export{Dt as A,U as C,W as H,K as L,H as N,M as P,S,P as W,F as a,L as b};
