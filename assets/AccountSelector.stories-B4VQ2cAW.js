import{R as a,r as m}from"./index-DQDNmYQF.js";import{c as X}from"./index-D2FocPV0.js";import{g as nt,a as $,f as at,u as ot,b as lt,c as rt,d as ct,e as se,m as st,T as dt,L as ut,R as it,l as mt,q as de,s as ue,n as pt,r as ae,t as je,v as ft,w as gt,x as ht}from"./texts-B-nd1AV0.js";import{M as ne}from"./MicroText-DveNF6m_.js";import{i as bt,S as ie}from"./index-DV_rwQs_.js";import{I as N}from"./InputGroup-BOYEkbY1.js";function Ue({item:t,dropdownAttributes:e,isHighlighted:o,locale:n}){const[i,...c]=e,h=t[i],r=c.map((d,p)=>a.createElement(ne,{"aria-label":d==="balance"?nt(n,t[d]):void 0,className:"ffe-searchable-dropdown__detail-text",key:p},t[d]));return a.createElement("div",{className:X("ffe-searchable-dropdown__list-item-body",{"ffe-searchable-dropdown__list-item-body--highlighted":o})},h,!!r.length&&a.createElement("div",{className:"ffe-searchable-dropdown__list-item-body-details"},r))}Ue.__docgenInfo={description:"",methods:[],displayName:"OptionBody"};const It=({state:t,searchAttributes:e})=>{const o=t.inputValue===""&&!!t.selectedItem,n=t.listToRender.length===1&&e.map(i=>{var c;return t.listToRender[0][i]===((c=t.selectedItem)===null||c===void 0?void 0:c[i])}).includes(!1)&&t.highlightedIndex!==-1;return o?{selectedItem:void 0,hasSelectedItemChanged:!0}:n?{selectedItem:t.listToRender[0],hasSelectedItemChanged:!0}:{selectedItem:t.selectedItem,hasSelectedItemChanged:!1}},me=({inputValue:t,selectedItem:e,searchAttributes:o,maxRenderedDropdownElements:n,dropdownList:i,noMatchDropdownList:c,searchMatcher:h,displayAttribute:r})=>{const{listToRender:d}=$({inputValue:t,searchAttributes:o,maxRenderedDropdownElements:n,dropdownList:i,noMatchDropdownList:c,searchMatcher:h,showAllItemsInDropdown:!0});return{inputValue:e?e[r]:"",selectedItem:e,listToRender:d}},At=({searchAttributes:t,dropdownList:e,displayAttribute:o,noMatchDropdownList:n,maxRenderedDropdownElements:i,searchMatcher:c,isEqual:h})=>(r,d)=>{var p,q,_,I,k,w,D,C,R,B,A,O,y,T;switch(d.type){case"InputKeyDownEscape":return{...r,noMatch:!1,isExpanded:!1,highlightedIndex:-1,inputValue:r.selectedItem?r.selectedItem[o]:""};case"InputClick":{const{noMatch:u,listToRender:g}=$({inputValue:r.inputValue,searchAttributes:t,maxRenderedDropdownElements:i,dropdownList:e,noMatchDropdownList:n,searchMatcher:c,showAllItemsInDropdown:!0});return{...r,isExpanded:!0,listToRender:g,noMatch:u}}case"InputChange":{const{noMatch:u,listToRender:g}=$({inputValue:(q=(p=d.payload)===null||p===void 0?void 0:p.inputValue)!==null&&q!==void 0?q:"",searchAttributes:t,maxRenderedDropdownElements:i,dropdownList:e,noMatchDropdownList:n,searchMatcher:c,showAllItemsInDropdown:!1});return{...r,isExpanded:!0,inputValue:(I=(_=d.payload)===null||_===void 0?void 0:_.inputValue)!==null&&I!==void 0?I:"",listToRender:g,highlightedIndex:((w=(k=d.payload)===null||k===void 0?void 0:k.inputValue)===null||w===void 0?void 0:w.trim())===""||g.length===0?-1:0,noMatch:u}}case"ToggleButtonPressed":{if(r.isExpanded){const{listToRender:u,inputValue:g,selectedItem:V}=me({inputValue:r.inputValue,selectedItem:(D=d.payload)===null||D===void 0?void 0:D.selectedItem,searchAttributes:t,maxRenderedDropdownElements:i,dropdownList:e,noMatchDropdownList:n,searchMatcher:c,displayAttribute:o});return{...r,isExpanded:!1,highlightedIndex:-1,inputValue:g,selectedItem:V,listToRender:u}}return{...r,isExpanded:!r.isExpanded}}case"ItemSelectedProgrammatically":{const u=(C=d.payload)===null||C===void 0?void 0:C.selectedItem;return u&&r.selectedItem&&h(r.selectedItem,u)?{...r,selectedItem:u,inputValue:r.isExpanded?r.inputValue:u[o]||""}:{...r,isExpanded:!1,highlightedIndex:-1,selectedItem:u,inputValue:(u==null?void 0:u[o])||""}}case"ItemOnClick":case"InputKeyDownEnter":return{...r,isExpanded:!1,highlightedIndex:-1,selectedItem:(R=d.payload)===null||R===void 0?void 0:R.selectedItem,inputValue:((A=(B=d.payload)===null||B===void 0?void 0:B.selectedItem)===null||A===void 0?void 0:A[o])||""};case"InputKeyDownArrowDown":case"InputKeyDownArrowUp":return{...r,isExpanded:!0,highlightedIndex:(y=(O=d.payload)===null||O===void 0?void 0:O.highlightedIndex)!==null&&y!==void 0?y:-1};case"FocusMovedOutSide":{const{listToRender:u,inputValue:g,selectedItem:V}=me({inputValue:r.inputValue,selectedItem:(T=d.payload)===null||T===void 0?void 0:T.selectedItem,searchAttributes:t,maxRenderedDropdownElements:i,dropdownList:e,noMatchDropdownList:n,searchMatcher:c,displayAttribute:o});return{...r,isExpanded:!1,highlightedIndex:-1,inputValue:g,selectedItem:V,listToRender:u}}case"DropdownListPropUpdated":{const u=!!r.selectedItem&&r.inputValue===r.selectedItem[o];return{...r,...$({inputValue:r.inputValue,searchAttributes:t,maxRenderedDropdownElements:i,dropdownList:e,noMatchDropdownList:n,searchMatcher:c,showAllItemsInDropdown:u})}}default:return r}},yt="ArrowUp",St="ArrowDown",vt="Escape",Et="Enter",wt="Tab";function Rt({id:t,labelledById:e,className:o,dropdownList:n,dropdownAttributes:i,searchAttributes:c,displayAttribute:h=c[0],maxRenderedDropdownElements:r=Number.MAX_SAFE_INTEGER,onChange:d,inputProps:p,optionBody:q,postListElement:_,noMatch:I,locale:k="nb",ariaInvalid:w,formatter:D=g=>g,searchMatcher:C,selectedItem:R,isLoading:B=!1,onOpen:A,onClose:O,isEqual:y=bt,...T},u){var g,V,G,f,x;const[l,b]=m.useReducer(At({dropdownList:n,displayAttribute:h,searchAttributes:c,maxRenderedDropdownElements:r,noMatchDropdownList:I==null?void 0:I.dropdownList,searchMatcher:C,isEqual:y}),{isExpanded:!1,selectedItems:[],highlightedIndex:-1,formattedInputValue:"",inputValue:R?R[h]:""},s=>({...s,...$({inputValue:s.inputValue,searchAttributes:c,maxRenderedDropdownElements:r,dropdownList:n,noMatchDropdownList:I==null?void 0:I.dropdownList,searchMatcher:C,showAllItemsInDropdown:!!R})})),z=ot({listToRender:l.listToRender}),[ze,Je]=m.useState(!1),Z=m.useRef(null),oe=m.useRef(null),Qe=q||Ue,ee=m.useRef(null),le=m.useId(),re=m.useRef(!1),Ye=()=>{b({type:"InputClick"})},Ze=s=>{p!=null&&p.onBlur&&p.onBlur(s)};m.useEffect(()=>{b({type:"ItemSelectedProgrammatically",payload:{selectedItem:R}})},[R,b]),lt({hasFocus:ze,isExpanded:l.isExpanded,isLoading:B,locale:k,resultCount:l.listToRender.length,selectedValue:(g=l.selectedItem)===null||g===void 0?void 0:g[h]}),m.useLayoutEffect(()=>{var s;re.current&&((s=Z.current)===null||s===void 0||s.focus(),re.current=!1)}),m.useEffect(()=>{b({type:"DropdownListPropUpdated"})},[n,b]),rt({isExpanded:l.isExpanded,onClose:O,onOpen:A});const ce=m.useRef({state:l,searchAttributes:c,onChange:d});m.useLayoutEffect(()=>{ce.current={state:l,searchAttributes:c,onChange:d}});const te=m.useCallback((s="FocusMovedOutSide")=>{var S;const J=ce.current,{selectedItem:Q,hasSelectedItemChanged:tt}=It({state:J.state,searchAttributes:J.searchAttributes});tt&&((S=J.onChange)===null||S===void 0||S.call(J,Q??null)),b({type:s,payload:{selectedItem:Q}})},[]);ct({id:t,containerRef:oe,handleFocusMovedOutside:te});const et=s=>{if(s.key===Et&&l.highlightedIndex>=0){s.preventDefault(),b({type:"InputKeyDownEnter",payload:{selectedItem:l.listToRender[l.highlightedIndex]}}),d==null||d(l.listToRender[l.highlightedIndex]);return}else if(s.key===vt){b({type:"InputKeyDownEscape"});return}if(s.key===yt){if(s.preventDefault(),l.listToRender.length){const S=mt(l.highlightedIndex,l.listToRender.length);b({type:"InputKeyDownArrowUp",payload:{highlightedIndex:S}}),S>=0&&de(l==null?void 0:l.listToRender[S],i),ue(z[S].current,ee.current)}return}if(s.key===St&&(s.preventDefault(),l.listToRender.length)){const S=pt(l.highlightedIndex,l.listToRender.length);b({type:"InputKeyDownArrowDown",payload:{highlightedIndex:S}}),S>=0&&de(l==null?void 0:l.listToRender[S],i),ue(z[S].current,ee.current)}s.key===wt&&te()};return a.createElement("div",{onKeyDown:et,className:X(o,"ffe-searchable-dropdown","ffe-default-mode"),ref:oe,onMouseDown:se(t),onFocus:se(t)},a.createElement("div",{className:"ffe-searchable-dropdown__input",onClick:()=>{var s;(s=Z.current)===null||s===void 0||s.focus()}},a.createElement("input",{...p,ref:st([Z,u]),id:t,"aria-labelledby":e,onClick:Ye,onChange:s=>{p!=null&&p.onChange&&p.onChange(s),b({type:"InputChange",payload:{inputValue:s.target.value}})},onFocus:()=>{Je(!0),b({type:"InputClick"})},onBlur:Ze,"aria-describedby":[p==null?void 0:p["aria-describedby"],l.noMatch&&le].filter(Boolean).join(" ")||void 0,value:D(l.inputValue),type:"text",role:"combobox",autoComplete:"off","aria-controls":`${t}-listbox`,"aria-expanded":l.isExpanded&&!!l.listToRender.length,"aria-autocomplete":"list","aria-haspopup":"listbox","aria-activedescendant":l.highlightedIndex>=0&&(f=(G=(V=z[l.highlightedIndex])===null||V===void 0?void 0:V.current)===null||G===void 0?void 0:G.getAttribute("id"))!==null&&f!==void 0?f:void 0,"aria-invalid":(x=T["aria-invalid"])!==null&&x!==void 0?x:w})),a.createElement(dt,{isExpanded:l.isExpanded,onClick:()=>{l.isExpanded?te("ToggleButtonPressed"):b({type:"ToggleButtonPressed"})},isLoading:B}),a.createElement(ut,{ref:ee,isExpanded:l.isExpanded,id:`${t}-listbox`,labelledById:e},l.isExpanded&&a.createElement(it,{isEqual:y,listToRender:l.listToRender,OptionBody:Qe,highlightedIndex:l.highlightedIndex,dropdownAttributes:i,locale:k,refs:z,onChange:s=>{b({type:"ItemOnClick",payload:{selectedItem:s}}),d==null||d(s)},noMatch:l.noMatch?I:void 0,noMatchMessageId:le,selectedItems:l.selectedItem?[l.selectedItem]:[]}),_&&a.createElement("div",{className:"ffe-searchable-dropdown__list--post-list-element"},_)))}const Pe=at(Rt);Pe.__docgenInfo={description:"",methods:[],displayName:"SearchableDropdown",props:{displayAttribute:{defaultValue:{value:"searchAttributes[0]",computed:!0},required:!1},maxRenderedDropdownElements:{defaultValue:{value:"Number.MAX_SAFE_INTEGER",computed:!0},required:!1},locale:{defaultValue:{value:"'nb'",computed:!1},required:!1},formatter:{defaultValue:{value:"value => value",computed:!1},required:!1},isLoading:{defaultValue:{value:"false",computed:!1},required:!1},isEqual:{defaultValue:{value:"isDeepEqual",computed:!0},required:!1}}};function $e({account:t,showBalance:e=!0,ariaInvalid:o,locale:n}){const{balance:i,accountNumber:c,currencyCode:h}=t??{},r=!t&&(o==="true"||o===!0);return a.createElement("div",{className:X("ffe-small-text","ffe-account-selector-single__details",{"ffe-account-selector-single__details--invalid-empty":r})},t&&a.createElement(a.Fragment,null,a.createElement("div",{className:"ffe-account-selector-single__details--left"},ae(c)),e&&a.createElement("div",{className:"ffe-account-selector-single__details--right"},je(i,n,h))))}$e.__docgenInfo={description:"",methods:[],displayName:"AccountDetails",props:{account:{required:!1,tsType:{name:"Account"},description:""},showBalance:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},ariaInvalid:{required:!0,tsType:{name:"ReactComponentPropsWithoutRef['aria-invalid']",raw:"React.ComponentPropsWithoutRef<'div'>['aria-invalid']"},description:""},locale:{required:!0,tsType:{name:"union",raw:"'nb' | 'nn' | 'en'",elements:[{name:"literal",value:"'nb'"},{name:"literal",value:"'nn'"},{name:"literal",value:"'en'"}]},description:""}}};const Tt=({accounts:t,selectedAccount:e,inputValue:o})=>e&&e.name===o&&!t.find(i=>i.accountNumber===e.accountNumber)?[...t,e]:t;function Xe({item:t,isHighlighted:e,showBalance:o,locale:n}){return a.createElement("div",{className:X("ffe-searchable-dropdown__list-item-body",{"ffe-searchable-dropdown__list-item-body--highlighted":e})},t.name,a.createElement("div",{className:"ffe-searchable-dropdown__list-item-body-details"},a.createElement(ne,{className:"ffe-searchable-dropdown__detail-text"},ae(t.accountNumber)),o&&a.createElement(ne,{className:"ffe-searchable-dropdown__detail-text"},je(t.balance,n,t.currencyCode))))}Xe.__docgenInfo={description:"",methods:[],displayName:"AccountActionBody",props:{item:{required:!0,tsType:{name:"Item"},description:""},isHighlighted:{required:!0,tsType:{name:"boolean"},description:""},showBalance:{required:!0,tsType:{name:"boolean"},description:""},locale:{required:!0,tsType:{name:"union",raw:"'nb' | 'nn' | 'en'",elements:[{name:"literal",value:"'nb'"},{name:"literal",value:"'nn'"},{name:"literal",value:"'en'"}]},description:""}}};const E=({id:t,className:e,locale:o="nb",selectedAccount:n,hideAccountDetails:i=!1,showBalance:c=!1,noMatches:h,accounts:r,onAccountSelected:d,allowCustomAccount:p=!1,labelledById:q,optionBody:_,postListElement:I,onReset:k,inputProps:w,formatAccountNumber:D=!0,ariaInvalid:C,onOpen:R,onClose:B,displayAttribute:A,...O})=>{const[y,T]=m.useState((n==null?void 0:n.name)||""),u=D?gt:void 0,g=f=>{p&&T(f.target.value),w!=null&&w.onChange&&w.onChange(f)},V=f=>{const x=f===null,l=!(f!=null&&f.accountNumber);x?(T(""),k()):l?(d({name:f.name,accountNumber:f.name,...A?{[A]:f.name}:{}}),T(f.name)):(d(f),T(f.name))},G=O["aria-invalid"]??C;return a.createElement("div",{className:X("ffe-account-selector-single",e),id:`${t}-account-selector-container`},a.createElement(Pe,{id:t,labelledById:q,displayAttribute:A,inputProps:{...w,onChange:g},dropdownAttributes:c?["name","accountNumber","balance"]:["name","accountNumber"],postListElement:I,dropdownList:p?Tt({selectedAccount:n,accounts:r,inputValue:y}):r,noMatch:p&&y.trim()!==""?{dropdownList:[{name:u?u(y):y,accountNumber:"",...A?{[A]:u?u(y):y}:{}}]}:h??{text:ht[o].noMatch},formatter:u,onChange:V,searchAttributes:["name","accountNumber",...A?[A]:[]],locale:o,optionBody:({item:f,isHighlighted:x,...l})=>_?a.createElement(_,{item:f,isHighlighted:x,...l}):a.createElement(Xe,{item:f,isHighlighted:x,locale:o,showBalance:c}),ariaInvalid:G,searchMatcher:ft,selectedItem:n,onOpen:R,onClose:B,isEqual:(f,x)=>f.accountNumber===x.accountNumber}),!i&&a.createElement($e,{ariaInvalid:G,account:n,showBalance:c&&["string","number"].includes(typeof(n==null?void 0:n.balance)),locale:o}))};E.__docgenInfo={description:"",methods:[],displayName:"AccountSelector",props:{accounts:{required:!0,tsType:{name:"Array",elements:[{name:"T"}],raw:"T[]"},description:`Array of objects:
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
[Read more in the upgrade guide](https://sparebank1.github.io/designsystem/?path=/docs/introduksjon-changelog--docs#2025---februar---semantiske-farger)`}}};const xt={title:"Komponenter/Account-selector/AccountSelector",component:E,argTypes:{postListElement:{options:["text","html"],mapping:{text:"Some text describing the list",html:a.createElement("span",null,"Some text describing the list")}}}},Y=[{accountNumber:"39920143613",name:"Brukskonto",currencyCode:"NOK",balance:1337},{accountNumber:"42142102514",name:"Brukskonto2",currencyCode:"NOK",balance:13337},{accountNumber:"23200355148",name:"Sparekonto1",currencyCode:"NOK",balance:109236},{accountNumber:"23207117277",name:"Sparekonto2",currencyCode:"NOK",balance:0}],v={args:{accounts:Y,locale:"nb",formatAccountNumber:!0,allowCustomAccount:!1},render:function(e){const[o,n]=m.useState();return a.createElement(N,{label:"Velg konto"},a.createElement(E,{...e,selectedAccount:o,onAccountSelected:n,onReset:()=>n(void 0)}))}},F={args:{...v.args,showBalance:!0},render:function(e){const[o,n]=m.useState();return a.createElement(N,{label:"Velg konto",inputId:e.id,labelId:e.labelledById},a.createElement(E,{...e,selectedAccount:o,onAccountSelected:n}))}},L={args:{...v.args,allowCustomAccount:!0},render:function(e){const[o,n]=m.useState();return a.createElement(N,{label:"Velg konto",inputId:e.id,labelId:e.labelledById},a.createElement(E,{...e,selectedAccount:o,onAccountSelected:n}))}},H={args:{...v.args,formatAccountNumber:!1},render:function(e){const[o,n]=m.useState();return a.createElement(N,{label:"Velg konto",inputId:e.id,labelId:e.labelledById},a.createElement(E,{...e,selectedAccount:o,onAccountSelected:n}))}},K={args:{...v.args,formatAccountNumber:!1},render:function(e){const[o,n]=m.useState(),i=({item:c,isHighlighted:h})=>a.createElement("div",{style:{padding:"8px",background:h?"#ff9100":"white"}},a.createElement("div",null,c.name),a.createElement("div",{style:{display:"flex",justifyContent:"space-between"}},a.createElement(ie,null,c.accountNumber),a.createElement(ie,null,c.balance)));return a.createElement(N,{label:"Velg konto",inputId:e.id,labelId:e.labelledById},a.createElement(E,{...e,optionBody:i,selectedAccount:o,onAccountSelected:n}))}},W={args:{...v.args,hideAccountDetails:!1},render:function(e){const[o,n]=m.useState();return a.createElement(N,{label:"Velg konto",inputId:e.id,labelId:e.labelledById},a.createElement(E,{...e,selectedAccount:o,onAccountSelected:n}))}},M={args:{...v.args,postListElement:a.createElement("span",null,"Some text describing the list")},render:function(e){const[o,n]=m.useState();return a.createElement(N,{label:"Velg konto",inputId:e.id,labelId:e.labelledById},a.createElement(E,{...e,selectedAccount:o,onAccountSelected:n}))}},j={args:{...v.args},render:function(e){const[o,n]=m.useState(Y[2]);return a.createElement(N,{label:"Velg konto",inputId:e.id,labelId:e.labelledById},a.createElement(E,{...e,selectedAccount:o,onAccountSelected:n}))}},pe=Y.map(t=>({...t,prettyName:`${t.name} - ${ae(t.accountNumber)}`})),U={args:{id:"input-id",labelledById:"label-id",locale:"nb",formatAccountNumber:!0,allowCustomAccount:!1,displayAttribute:"prettyName",accounts:pe},render:function(e){const[o,n]=m.useState(pe[2]);return a.createElement(N,{label:"Velg konto",inputId:e.id,labelId:e.labelledById},a.createElement(E,{...e,selectedAccount:o,onAccountSelected:n}))}},P={args:{accounts:Y,locale:"nb",formatAccountNumber:!0,allowCustomAccount:!1},render:function(e){const[o,n]=m.useState();return a.createElement(N,{label:"Velg konto",description:"Velg den kontoen du har mest lyst på"},a.createElement(E,{...e,selectedAccount:o,onAccountSelected:n,onReset:()=>n(void 0)}))}};var fe,ge,he;v.parameters={...v.parameters,docs:{...(fe=v.parameters)==null?void 0:fe.docs,source:{originalSource:`{
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
}`,...(he=(ge=v.parameters)==null?void 0:ge.docs)==null?void 0:he.source}}};var be,Ie,Ae;F.parameters={...F.parameters,docs:{...(be=F.parameters)==null?void 0:be.docs,source:{originalSource:`{
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
}`,...(Ae=(Ie=F.parameters)==null?void 0:Ie.docs)==null?void 0:Ae.source}}};var ye,Se,ve;L.parameters={...L.parameters,docs:{...(ye=L.parameters)==null?void 0:ye.docs,source:{originalSource:`{
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
}`,...(ve=(Se=L.parameters)==null?void 0:Se.docs)==null?void 0:ve.source}}};var Ee,we,Re;H.parameters={...H.parameters,docs:{...(Ee=H.parameters)==null?void 0:Ee.docs,source:{originalSource:`{
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
}`,...(Re=(we=H.parameters)==null?void 0:we.docs)==null?void 0:Re.source}}};var Te,xe,Ne;K.parameters={...K.parameters,docs:{...(Te=K.parameters)==null?void 0:Te.docs,source:{originalSource:`{
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
}`,...(Ne=(xe=K.parameters)==null?void 0:xe.docs)==null?void 0:Ne.source}}};var _e,Ve,ke;W.parameters={...W.parameters,docs:{...(_e=W.parameters)==null?void 0:_e.docs,source:{originalSource:`{
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
}`,...(ke=(Ve=W.parameters)==null?void 0:Ve.docs)==null?void 0:ke.source}}};var Ce,Be,qe;M.parameters={...M.parameters,docs:{...(Ce=M.parameters)==null?void 0:Ce.docs,source:{originalSource:`{
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
}`,...(Me=(We=P.parameters)==null?void 0:We.docs)==null?void 0:Me.source}}};const Nt=["Standard","ShowBalance","AllowCustomAccount","NoFormatAccount","ListElementBody","HideAccountDetails","PostListElement","InitialValue","CustomDisplayAttribute","WithDescription"],Dt=Object.freeze(Object.defineProperty({__proto__:null,AllowCustomAccount:L,CustomDisplayAttribute:U,HideAccountDetails:W,InitialValue:j,ListElementBody:K,NoFormatAccount:H,PostListElement:M,ShowBalance:F,Standard:v,WithDescription:P,__namedExportsOrder:Nt,default:xt},Symbol.toStringTag,{value:"Module"}));export{Dt as A,U as C,W as H,K as L,H as N,M as P,v as S,P as W,F as a,L as b};
