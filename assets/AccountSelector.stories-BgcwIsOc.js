import{R as n,r as p}from"./index-DQDNmYQF.js";import{c as z}from"./index-D2FocPV0.js";import{g as et,a as X,f as tt,u as nt,b as ot,c as at,d as lt,e as re,m as rt,T as ct,L as st,R as dt,i as ut,s as ce,j as se,k as it,l as ne,n as Me,o as pt,p as mt,t as ft}from"./texts-DprWfjds.js";import{M as te}from"./MicroText-DveNF6m_.js";import{i as gt,S as de}from"./index-DV_rwQs_.js";import{I as N}from"./InputGroup-BOYEkbY1.js";function We({item:t,dropdownAttributes:e,isHighlighted:a,locale:o}){const[m,...u]=e,g=t[m],l=u.map((s,d)=>n.createElement(te,{"aria-label":s==="balance"?et(o,t[s]):void 0,className:"ffe-searchable-dropdown__detail-text",key:d},t[s]));return n.createElement("div",{className:z("ffe-searchable-dropdown__list-item-body",{"ffe-searchable-dropdown__list-item-body--highlighted":a})},g,!!l.length&&n.createElement("div",{className:"ffe-searchable-dropdown__list-item-body-details"},l))}We.__docgenInfo={description:"",methods:[],displayName:"OptionBody"};const ue=({state:t,searchAttributes:e,maxRenderedDropdownElements:a,dropdownList:o,noMatchDropdownList:m,searchMatcher:u,displayAttribute:g,onChange:l})=>{const{listToRender:s}=X({inputValue:t.inputValue,searchAttributes:e,maxRenderedDropdownElements:a,dropdownList:o,noMatchDropdownList:m,searchMatcher:u,showAllItemsInDropdown:!0}),d=t.inputValue===""&&!!t.selectedItem,_=t.listToRender.length===1&&e.map(w=>{var A;return t.listToRender[0][w]===((A=t.selectedItem)===null||A===void 0?void 0:A[w])}).includes(!1)&&t.highlightedIndex!==-1;let b=t.selectedItem;return d?(l==null||l(null),b=void 0):_&&(l==null||l(t.listToRender[0]),b=t.listToRender[0]),{inputValue:b?b[g]:"",selectedItem:b,listToRender:s}},bt=({searchAttributes:t,dropdownList:e,displayAttribute:a,noMatchDropdownList:o,maxRenderedDropdownElements:m,searchMatcher:u,onChange:g})=>(l,s)=>{var d,_,b,y,w,A,C,V,E,B,I;switch(s.type){case"InputKeyDownEscape":return{...l,noMatch:!1,isExpanded:!1,highlightedIndex:-1,inputValue:l.selectedItem?l.selectedItem[a]:""};case"InputClick":{const{noMatch:R,listToRender:f}=X({inputValue:l.inputValue,searchAttributes:t,maxRenderedDropdownElements:m,dropdownList:e,noMatchDropdownList:o,searchMatcher:u,showAllItemsInDropdown:!0});return{...l,isExpanded:!0,listToRender:f,noMatch:R}}case"InputChange":{const{noMatch:R,listToRender:f}=X({inputValue:(_=(d=s.payload)===null||d===void 0?void 0:d.inputValue)!==null&&_!==void 0?_:"",searchAttributes:t,maxRenderedDropdownElements:m,dropdownList:e,noMatchDropdownList:o,searchMatcher:u,showAllItemsInDropdown:!1});return{...l,isExpanded:!0,inputValue:(y=(b=s.payload)===null||b===void 0?void 0:b.inputValue)!==null&&y!==void 0?y:"",listToRender:f,highlightedIndex:((A=(w=s.payload)===null||w===void 0?void 0:w.inputValue)===null||A===void 0?void 0:A.trim())===""||f.length===0?-1:0,noMatch:R}}case"ToggleButtonPressed":{if(l.isExpanded){const{listToRender:R,inputValue:f,selectedItem:T}=ue({state:l,searchAttributes:t,maxRenderedDropdownElements:m,dropdownList:e,noMatchDropdownList:o,searchMatcher:u,displayAttribute:a,onChange:g});return{...l,isExpanded:!1,highlightedIndex:-1,inputValue:f,selectedItem:T,listToRender:R}}return{...l,isExpanded:!l.isExpanded}}case"ItemSelectedProgrammatically":case"ItemOnClick":case"InputKeyDownEnter":return{...l,isExpanded:!1,highlightedIndex:-1,selectedItem:(C=s.payload)===null||C===void 0?void 0:C.selectedItem,inputValue:((E=(V=s.payload)===null||V===void 0?void 0:V.selectedItem)===null||E===void 0?void 0:E[a])||""};case"InputKeyDownArrowDown":case"InputKeyDownArrowUp":return{...l,isExpanded:!0,highlightedIndex:(I=(B=s.payload)===null||B===void 0?void 0:B.highlightedIndex)!==null&&I!==void 0?I:-1};case"FocusMovedOutSide":{const{listToRender:R,inputValue:f,selectedItem:T}=ue({state:l,searchAttributes:t,maxRenderedDropdownElements:m,dropdownList:e,noMatchDropdownList:o,searchMatcher:u,displayAttribute:a,onChange:g});return{...l,isExpanded:!1,highlightedIndex:-1,inputValue:f,selectedItem:T,listToRender:R}}case"DropdownListPropUpdated":return{...l,...X({inputValue:l.inputValue,searchAttributes:t,maxRenderedDropdownElements:m,dropdownList:e,noMatchDropdownList:o,searchMatcher:u,showAllItemsInDropdown:!!l.selectedItem})};default:return l}},At="ArrowUp",ht="ArrowDown",yt="Escape",It="Enter",St="Tab";function vt({id:t,labelledById:e,className:a,dropdownList:o,dropdownAttributes:m,searchAttributes:u,displayAttribute:g=u[0],maxRenderedDropdownElements:l=Number.MAX_SAFE_INTEGER,onChange:s,inputProps:d,optionBody:_,postListElement:b,noMatch:y,locale:w="nb",ariaInvalid:A,formatter:C=D=>D,searchMatcher:V,selectedItem:E,isLoading:B=!1,onOpen:I,onClose:R,isEqual:f=gt,...T},q){var D,F,G,i,x,O,Z;const[r,h]=p.useReducer(bt({dropdownList:o,displayAttribute:g,searchAttributes:u,maxRenderedDropdownElements:l,noMatchDropdownList:y==null?void 0:y.dropdownList,searchMatcher:V,onChange:s}),{isExpanded:!1,selectedItems:[],highlightedIndex:-1,formattedInputValue:"",inputValue:E?E[g]:""},c=>({...c,...X({inputValue:c.inputValue,searchAttributes:u,maxRenderedDropdownElements:l,dropdownList:o,noMatchDropdownList:y==null?void 0:y.dropdownList,searchMatcher:V,showAllItemsInDropdown:!!E})})),J=nt({listToRender:r.listToRender}),[$e,Xe]=p.useState(!1),ee=p.useRef(null),oe=p.useRef(null),ze=_||We,Q=p.useRef(null),ae=p.useId(),le=p.useRef(!1),Je=()=>{h({type:"InputClick"})},Qe=c=>{d!=null&&d.onBlur&&d.onBlur(c)};p.useEffect(()=>{h({type:"ItemSelectedProgrammatically",payload:{selectedItem:E}})},[E,h]),ot({hasFocus:$e,isExpanded:r.isExpanded,isLoading:B,locale:w,resultCount:r.listToRender.length,selectedValue:(D=r.selectedItem)===null||D===void 0?void 0:D[g]}),p.useLayoutEffect(()=>{var c;le.current&&((c=ee.current)===null||c===void 0||c.focus(),le.current=!1)}),p.useEffect(()=>{h({type:"DropdownListPropUpdated"})},[o,h]),at({isExpanded:r.isExpanded,onClose:R,onOpen:I});const Ye=p.useCallback(()=>h({type:"FocusMovedOutSide"}),[]);lt({id:t,containerRef:oe,handleFocusMovedOutside:Ye});const Ze=c=>{if(c.key===It&&r.highlightedIndex>=0){c.preventDefault(),h({type:"InputKeyDownEnter",payload:{selectedItem:r.listToRender[r.highlightedIndex]}}),s==null||s(r.listToRender[r.highlightedIndex]);return}else if(c.key===yt){h({type:"InputKeyDownEscape"});return}if(c.key===At){if(c.preventDefault(),r.listToRender.length){const k=ut(r.highlightedIndex,r.listToRender.length);h({type:"InputKeyDownArrowUp",payload:{highlightedIndex:k}}),k>=0&&ce(r==null?void 0:r.listToRender[k],m),se(J[k].current,Q.current)}return}if(c.key===ht&&(c.preventDefault(),r.listToRender.length)){const k=it(r.highlightedIndex,r.listToRender.length);h({type:"InputKeyDownArrowDown",payload:{highlightedIndex:k}}),k>=0&&ce(r==null?void 0:r.listToRender[k],m),se(J[k].current,Q.current)}c.key===St&&h({type:"FocusMovedOutSide"})};return n.createElement("div",{onKeyDown:Ze,className:z(a,"ffe-searchable-dropdown","ffe-default-mode"),ref:oe,onMouseDown:re(t),onFocus:re(t)},n.createElement("div",{className:"ffe-searchable-dropdown__input",onClick:()=>{var c;(c=ee.current)===null||c===void 0||c.focus()}},n.createElement("input",{...d,ref:rt([ee,q]),id:t,"aria-labelledby":e,onClick:Je,onChange:c=>{d!=null&&d.onChange&&d.onChange(c),h({type:"InputChange",payload:{inputValue:c.target.value}})},onFocus:()=>{Xe(!0),h({type:"InputClick"})},onBlur:Qe,"aria-describedby":[d==null?void 0:d["aria-describedby"],r.noMatch&&ae].filter(Boolean).join(" ")||void 0,value:C(r.inputValue),type:"text",role:"combobox",autoComplete:"off","aria-controls":(G=(F=Q.current)===null||F===void 0?void 0:F.getAttribute("id"))!==null&&G!==void 0?G:void 0,"aria-expanded":r.isExpanded&&!!r.listToRender.length,"aria-autocomplete":"list","aria-haspopup":"listbox","aria-activedescendant":r.highlightedIndex>=0&&(O=(x=(i=J[r.highlightedIndex])===null||i===void 0?void 0:i.current)===null||x===void 0?void 0:x.getAttribute("id"))!==null&&O!==void 0?O:void 0,"aria-invalid":(Z=T["aria-invalid"])!==null&&Z!==void 0?Z:A})),n.createElement(ct,{isExpanded:r.isExpanded,onClick:()=>{h({type:"ToggleButtonPressed"})},isLoading:B}),n.createElement(st,{ref:Q,isExpanded:r.isExpanded},r.isExpanded&&n.createElement(dt,{isEqual:f,listToRender:r.listToRender,OptionBody:ze,highlightedIndex:r.highlightedIndex,dropdownAttributes:m,locale:w,refs:J,onChange:c=>{h({type:"ItemOnClick",payload:{selectedItem:c}}),s==null||s(c)},noMatch:r.noMatch?y:void 0,noMatchMessageId:ae,selectedItems:r.selectedItem?[r.selectedItem]:[]}),b&&n.createElement("div",{className:"ffe-searchable-dropdown__list--post-list-element"},b)))}const je=tt(vt);je.__docgenInfo={description:"",methods:[],displayName:"SearchableDropdown",props:{displayAttribute:{defaultValue:{value:"searchAttributes[0]",computed:!0},required:!1},maxRenderedDropdownElements:{defaultValue:{value:"Number.MAX_SAFE_INTEGER",computed:!0},required:!1},locale:{defaultValue:{value:"'nb'",computed:!1},required:!1},formatter:{defaultValue:{value:"value => value",computed:!1},required:!1},isLoading:{defaultValue:{value:"false",computed:!1},required:!1},isEqual:{defaultValue:{value:"isDeepEqual",computed:!0},required:!1}}};function Ue({account:t,showBalance:e=!0,ariaInvalid:a,locale:o}){const{balance:m,accountNumber:u,currencyCode:g}=t??{},l=!t&&(a==="true"||a===!0);return n.createElement("div",{className:z("ffe-small-text","ffe-account-selector-single__details",{"ffe-account-selector-single__details--invalid-empty":l})},t&&n.createElement(n.Fragment,null,n.createElement("div",{className:"ffe-account-selector-single__details--left"},ne(u)),e&&n.createElement("div",{className:"ffe-account-selector-single__details--right"},Me(m,o,g))))}Ue.__docgenInfo={description:"",methods:[],displayName:"AccountDetails",props:{account:{required:!1,tsType:{name:"Account"},description:""},showBalance:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},ariaInvalid:{required:!0,tsType:{name:"ReactComponentPropsWithoutRef['aria-invalid']",raw:"React.ComponentPropsWithoutRef<'div'>['aria-invalid']"},description:""},locale:{required:!0,tsType:{name:"union",raw:"'nb' | 'nn' | 'en'",elements:[{name:"literal",value:"'nb'"},{name:"literal",value:"'nn'"},{name:"literal",value:"'en'"}]},description:""}}};const wt=({accounts:t,selectedAccount:e,inputValue:a})=>e&&e.name===a&&!t.find(m=>m.accountNumber===e.accountNumber)?[...t,e]:t;function Pe({item:t,isHighlighted:e,showBalance:a,locale:o}){return n.createElement("div",{className:z("ffe-searchable-dropdown__list-item-body",{"ffe-searchable-dropdown__list-item-body--highlighted":e})},t.name,n.createElement("div",{className:"ffe-searchable-dropdown__list-item-body-details"},n.createElement(te,{className:"ffe-searchable-dropdown__detail-text"},ne(t.accountNumber)),a&&n.createElement(te,{className:"ffe-searchable-dropdown__detail-text"},Me(t.balance,o,t.currencyCode))))}Pe.__docgenInfo={description:"",methods:[],displayName:"AccountActionBody",props:{item:{required:!0,tsType:{name:"Item"},description:""},isHighlighted:{required:!0,tsType:{name:"boolean"},description:""},showBalance:{required:!0,tsType:{name:"boolean"},description:""},locale:{required:!0,tsType:{name:"union",raw:"'nb' | 'nn' | 'en'",elements:[{name:"literal",value:"'nb'"},{name:"literal",value:"'nn'"},{name:"literal",value:"'en'"}]},description:""}}};const v=({id:t,className:e,locale:a="nb",selectedAccount:o,hideAccountDetails:m=!1,showBalance:u=!1,noMatches:g,accounts:l,onAccountSelected:s,allowCustomAccount:d=!1,labelledById:_,optionBody:b,postListElement:y,onReset:w,inputProps:A,formatAccountNumber:C=!0,ariaInvalid:V,onOpen:E,onClose:B,displayAttribute:I,...R})=>{const[f,T]=p.useState((o==null?void 0:o.name)||""),q=C?mt:void 0,D=i=>{d&&T(i.target.value),A!=null&&A.onChange&&A.onChange(i)},F=i=>{const x=i===null,O=!(i!=null&&i.accountNumber);x?(T(""),w()):O?(s({name:i.name,accountNumber:i.name,...I?{[I]:i.name}:{}}),T(i.name)):(s(i),T(i.name))},G=R["aria-invalid"]??V;return n.createElement("div",{className:z("ffe-account-selector-single",e),id:`${t}-account-selector-container`},n.createElement(je,{id:t,labelledById:_,displayAttribute:I,inputProps:{...A,onChange:D},dropdownAttributes:u?["name","accountNumber","balance"]:["name","accountNumber"],postListElement:y,dropdownList:d?wt({selectedAccount:o,accounts:l,inputValue:f}):l,noMatch:d&&f.trim()!==""?{dropdownList:[{name:q?q(f):f,accountNumber:"",...I?{[I]:q?q(f):f}:{}}]}:g??{text:ft[a].noMatch},formatter:q,onChange:F,searchAttributes:["name","accountNumber",...I?[I]:[]],locale:a,optionBody:({item:i,isHighlighted:x,...O})=>b?n.createElement(b,{item:i,isHighlighted:x,...O}):n.createElement(Pe,{item:i,isHighlighted:x,locale:a,showBalance:u}),ariaInvalid:G,searchMatcher:pt,selectedItem:o,onOpen:E,onClose:B,isEqual:(i,x)=>i.accountNumber===x.accountNumber}),!m&&n.createElement(Ue,{ariaInvalid:G,account:o,showBalance:u&&["string","number"].includes(typeof(o==null?void 0:o.balance)),locale:a}))};v.__docgenInfo={description:"",methods:[],displayName:"AccountSelector",props:{accounts:{required:!0,tsType:{name:"Array",elements:[{name:"T"}],raw:"T[]"},description:`Array of objects:
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
[Read more in the upgrade guide](https://sparebank1.github.io/designsystem/?path=/docs/introduksjon-changelog--docs#2025---februar---semantiske-farger)`}}};const Et={title:"Komponenter/Account-selector/AccountSelector",component:v,argTypes:{postListElement:{options:["text","html"],mapping:{text:"Some text describing the list",html:n.createElement("span",null,"Some text describing the list")}}}},Y=[{accountNumber:"39920143613",name:"Brukskonto",currencyCode:"NOK",balance:1337},{accountNumber:"42142102514",name:"Brukskonto2",currencyCode:"NOK",balance:13337},{accountNumber:"23200355148",name:"Sparekonto1",currencyCode:"NOK",balance:109236},{accountNumber:"23207117277",name:"Sparekonto2",currencyCode:"NOK",balance:0}],S={args:{accounts:Y,locale:"nb",formatAccountNumber:!0,allowCustomAccount:!1},render:function(e){const[a,o]=p.useState();return n.createElement(N,{label:"Velg konto"},n.createElement(v,{...e,selectedAccount:a,onAccountSelected:o,onReset:()=>o(void 0)}))}},L={args:{...S.args,showBalance:!0},render:function(e){const[a,o]=p.useState();return n.createElement(N,{label:"Velg konto",inputId:e.id,labelId:e.labelledById},n.createElement(v,{...e,selectedAccount:a,onAccountSelected:o}))}},H={args:{...S.args,allowCustomAccount:!0},render:function(e){const[a,o]=p.useState();return n.createElement(N,{label:"Velg konto",inputId:e.id,labelId:e.labelledById},n.createElement(v,{...e,selectedAccount:a,onAccountSelected:o}))}},K={args:{...S.args,formatAccountNumber:!1},render:function(e){const[a,o]=p.useState();return n.createElement(N,{label:"Velg konto",inputId:e.id,labelId:e.labelledById},n.createElement(v,{...e,selectedAccount:a,onAccountSelected:o}))}},M={args:{...S.args,formatAccountNumber:!1},render:function(e){const[a,o]=p.useState(),m=({item:u,isHighlighted:g})=>n.createElement("div",{style:{padding:"8px",background:g?"#ff9100":"white"}},n.createElement("div",null,u.name),n.createElement("div",{style:{display:"flex",justifyContent:"space-between"}},n.createElement(de,null,u.accountNumber),n.createElement(de,null,u.balance)));return n.createElement(N,{label:"Velg konto",inputId:e.id,labelId:e.labelledById},n.createElement(v,{...e,optionBody:m,selectedAccount:a,onAccountSelected:o}))}},W={args:{...S.args,hideAccountDetails:!1},render:function(e){const[a,o]=p.useState();return n.createElement(N,{label:"Velg konto",inputId:e.id,labelId:e.labelledById},n.createElement(v,{...e,selectedAccount:a,onAccountSelected:o}))}},j={args:{...S.args,postListElement:n.createElement("span",null,"Some text describing the list")},render:function(e){const[a,o]=p.useState();return n.createElement(N,{label:"Velg konto",inputId:e.id,labelId:e.labelledById},n.createElement(v,{...e,selectedAccount:a,onAccountSelected:o}))}},U={args:{...S.args},render:function(e){const[a,o]=p.useState(Y[2]);return n.createElement(N,{label:"Velg konto",inputId:e.id,labelId:e.labelledById},n.createElement(v,{...e,selectedAccount:a,onAccountSelected:o}))}},ie=Y.map(t=>({...t,prettyName:`${t.name} - ${ne(t.accountNumber)}`})),P={args:{id:"input-id",labelledById:"label-id",locale:"nb",formatAccountNumber:!0,allowCustomAccount:!1,displayAttribute:"prettyName",accounts:ie},render:function(e){const[a,o]=p.useState(ie[2]);return n.createElement(N,{label:"Velg konto",inputId:e.id,labelId:e.labelledById},n.createElement(v,{...e,selectedAccount:a,onAccountSelected:o}))}},$={args:{accounts:Y,locale:"nb",formatAccountNumber:!0,allowCustomAccount:!1},render:function(e){const[a,o]=p.useState();return n.createElement(N,{label:"Velg konto",description:"Velg den kontoen du har mest lyst på"},n.createElement(v,{...e,selectedAccount:a,onAccountSelected:o,onReset:()=>o(void 0)}))}};var pe,me,fe;S.parameters={...S.parameters,docs:{...(pe=S.parameters)==null?void 0:pe.docs,source:{originalSource:`{
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
}`,...(fe=(me=S.parameters)==null?void 0:me.docs)==null?void 0:fe.source}}};var ge,be,Ae;L.parameters={...L.parameters,docs:{...(ge=L.parameters)==null?void 0:ge.docs,source:{originalSource:`{
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
}`,...(Ae=(be=L.parameters)==null?void 0:be.docs)==null?void 0:Ae.source}}};var he,ye,Ie;H.parameters={...H.parameters,docs:{...(he=H.parameters)==null?void 0:he.docs,source:{originalSource:`{
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
}`,...(Ie=(ye=H.parameters)==null?void 0:ye.docs)==null?void 0:Ie.source}}};var Se,ve,we;K.parameters={...K.parameters,docs:{...(Se=K.parameters)==null?void 0:Se.docs,source:{originalSource:`{
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
}`,...(we=(ve=K.parameters)==null?void 0:ve.docs)==null?void 0:we.source}}};var Ee,Re,Te;M.parameters={...M.parameters,docs:{...(Ee=M.parameters)==null?void 0:Ee.docs,source:{originalSource:`{
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
}`,...(Te=(Re=M.parameters)==null?void 0:Re.docs)==null?void 0:Te.source}}};var xe,Ne,_e;W.parameters={...W.parameters,docs:{...(xe=W.parameters)==null?void 0:xe.docs,source:{originalSource:`{
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
}`,...(_e=(Ne=W.parameters)==null?void 0:Ne.docs)==null?void 0:_e.source}}};var ke,Ve,Be;j.parameters={...j.parameters,docs:{...(ke=j.parameters)==null?void 0:ke.docs,source:{originalSource:`{
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
}`,...(Be=(Ve=j.parameters)==null?void 0:Ve.docs)==null?void 0:Be.source}}};var Ce,qe,De;U.parameters={...U.parameters,docs:{...(Ce=U.parameters)==null?void 0:Ce.docs,source:{originalSource:`{
  args: {
    ...Standard.args
  },
  render: function Render(args) {
    const [selectedAccount, setSelectedAccount] = useState<Account>(accounts[2]);
    return <InputGroup label="Velg konto" inputId={args.id} labelId={args.labelledById}>
                <AccountSelector {...args} selectedAccount={selectedAccount} onAccountSelected={setSelectedAccount} />
            </InputGroup>;
  }
}`,...(De=(qe=U.parameters)==null?void 0:qe.docs)==null?void 0:De.source}}};var Oe,Ge,Fe;P.parameters={...P.parameters,docs:{...(Oe=P.parameters)==null?void 0:Oe.docs,source:{originalSource:`{
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
}`,...(Fe=(Ge=P.parameters)==null?void 0:Ge.docs)==null?void 0:Fe.source}}};var Le,He,Ke;$.parameters={...$.parameters,docs:{...(Le=$.parameters)==null?void 0:Le.docs,source:{originalSource:`{
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
}`,...(Ke=(He=$.parameters)==null?void 0:He.docs)==null?void 0:Ke.source}}};const Rt=["Standard","ShowBalance","AllowCustomAccount","NoFormatAccount","ListElementBody","HideAccountDetails","PostListElement","InitialValue","CustomDisplayAttribute","WithDescription"],Bt=Object.freeze(Object.defineProperty({__proto__:null,AllowCustomAccount:H,CustomDisplayAttribute:P,HideAccountDetails:W,InitialValue:U,ListElementBody:M,NoFormatAccount:K,PostListElement:j,ShowBalance:L,Standard:S,WithDescription:$,__namedExportsOrder:Rt,default:Et},Symbol.toStringTag,{value:"Module"}));export{Bt as A,P as C,W as H,M as L,K as N,j as P,S,$ as W,L as a,H as b};
