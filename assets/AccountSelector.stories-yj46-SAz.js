import{R as n,r as p}from"./index-DQDNmYQF.js";import{c as X}from"./index-D2FocPV0.js";import{g as Ye,a as $,f as Ze,u as et,b as tt,c as nt,d as at,e as oe,m as ot,T as lt,L as rt,R as ct,l as st,q as le,s as re,n as dt,r as ee,t as He,v as ut,w as it,x as pt}from"./texts-B-nd1AV0.js";import{M as Z}from"./MicroText-DveNF6m_.js";import{i as mt,S as ce}from"./index-DV_rwQs_.js";import{I as N}from"./InputGroup-BOYEkbY1.js";function Ke({item:t,dropdownAttributes:e,isHighlighted:o,locale:a}){const[m,...u]=e,g=t[m],r=u.map((s,d)=>n.createElement(Z,{"aria-label":s==="balance"?Ye(a,t[s]):void 0,className:"ffe-searchable-dropdown__detail-text",key:d},t[s]));return n.createElement("div",{className:X("ffe-searchable-dropdown__list-item-body",{"ffe-searchable-dropdown__list-item-body--highlighted":o})},g,!!r.length&&n.createElement("div",{className:"ffe-searchable-dropdown__list-item-body-details"},r))}Ke.__docgenInfo={description:"",methods:[],displayName:"OptionBody"};const se=({state:t,searchAttributes:e,maxRenderedDropdownElements:o,dropdownList:a,noMatchDropdownList:m,searchMatcher:u,displayAttribute:g,onChange:r})=>{const{listToRender:s}=$({inputValue:t.inputValue,searchAttributes:e,maxRenderedDropdownElements:o,dropdownList:a,noMatchDropdownList:m,searchMatcher:u,showAllItemsInDropdown:!0}),d=t.inputValue===""&&!!t.selectedItem,_=t.listToRender.length===1&&e.map(w=>{var A;return t.listToRender[0][w]===((A=t.selectedItem)===null||A===void 0?void 0:A[w])}).includes(!1)&&t.highlightedIndex!==-1;let b=t.selectedItem;return d?(r==null||r(null),b=void 0):_&&(r==null||r(t.listToRender[0]),b=t.listToRender[0]),{inputValue:b?b[g]:"",selectedItem:b,listToRender:s}},ft=({searchAttributes:t,dropdownList:e,displayAttribute:o,noMatchDropdownList:a,maxRenderedDropdownElements:m,searchMatcher:u,onChange:g})=>(r,s)=>{var d,_,b,y,w,A,C,V,E,B,I;switch(s.type){case"InputKeyDownEscape":return{...r,noMatch:!1,isExpanded:!1,highlightedIndex:-1,inputValue:r.selectedItem?r.selectedItem[o]:""};case"InputClick":{const{noMatch:R,listToRender:f}=$({inputValue:r.inputValue,searchAttributes:t,maxRenderedDropdownElements:m,dropdownList:e,noMatchDropdownList:a,searchMatcher:u,showAllItemsInDropdown:!0});return{...r,isExpanded:!0,listToRender:f,noMatch:R}}case"InputChange":{const{noMatch:R,listToRender:f}=$({inputValue:(_=(d=s.payload)===null||d===void 0?void 0:d.inputValue)!==null&&_!==void 0?_:"",searchAttributes:t,maxRenderedDropdownElements:m,dropdownList:e,noMatchDropdownList:a,searchMatcher:u,showAllItemsInDropdown:!1});return{...r,isExpanded:!0,inputValue:(y=(b=s.payload)===null||b===void 0?void 0:b.inputValue)!==null&&y!==void 0?y:"",listToRender:f,highlightedIndex:((A=(w=s.payload)===null||w===void 0?void 0:w.inputValue)===null||A===void 0?void 0:A.trim())===""||f.length===0?-1:0,noMatch:R}}case"ToggleButtonPressed":{if(r.isExpanded){const{listToRender:R,inputValue:f,selectedItem:T}=se({state:r,searchAttributes:t,maxRenderedDropdownElements:m,dropdownList:e,noMatchDropdownList:a,searchMatcher:u,displayAttribute:o,onChange:g});return{...r,isExpanded:!1,highlightedIndex:-1,inputValue:f,selectedItem:T,listToRender:R}}return{...r,isExpanded:!r.isExpanded}}case"ItemSelectedProgrammatically":case"ItemOnClick":case"InputKeyDownEnter":return{...r,isExpanded:!1,highlightedIndex:-1,selectedItem:(C=s.payload)===null||C===void 0?void 0:C.selectedItem,inputValue:((E=(V=s.payload)===null||V===void 0?void 0:V.selectedItem)===null||E===void 0?void 0:E[o])||""};case"InputKeyDownArrowDown":case"InputKeyDownArrowUp":return{...r,isExpanded:!0,highlightedIndex:(I=(B=s.payload)===null||B===void 0?void 0:B.highlightedIndex)!==null&&I!==void 0?I:-1};case"FocusMovedOutSide":{const{listToRender:R,inputValue:f,selectedItem:T}=se({state:r,searchAttributes:t,maxRenderedDropdownElements:m,dropdownList:e,noMatchDropdownList:a,searchMatcher:u,displayAttribute:o,onChange:g});return{...r,isExpanded:!1,highlightedIndex:-1,inputValue:f,selectedItem:T,listToRender:R}}case"DropdownListPropUpdated":return{...r,...$({inputValue:r.inputValue,searchAttributes:t,maxRenderedDropdownElements:m,dropdownList:e,noMatchDropdownList:a,searchMatcher:u,showAllItemsInDropdown:!!r.selectedItem})};default:return r}},gt="ArrowUp",bt="ArrowDown",At="Escape",ht="Enter",yt="Tab";function It({id:t,labelledById:e,className:o,dropdownList:a,dropdownAttributes:m,searchAttributes:u,displayAttribute:g=u[0],maxRenderedDropdownElements:r=Number.MAX_SAFE_INTEGER,onChange:s,inputProps:d,optionBody:_,postListElement:b,noMatch:y,locale:w="nb",ariaInvalid:A,formatter:C=D=>D,searchMatcher:V,selectedItem:E,isLoading:B=!1,onOpen:I,onClose:R,isEqual:f=mt,...T},q){var D,G,O,i,x;const[l,h]=p.useReducer(ft({dropdownList:a,displayAttribute:g,searchAttributes:u,maxRenderedDropdownElements:r,noMatchDropdownList:y==null?void 0:y.dropdownList,searchMatcher:V,onChange:s}),{isExpanded:!1,selectedItems:[],highlightedIndex:-1,formattedInputValue:"",inputValue:E?E[g]:""},c=>({...c,...$({inputValue:c.inputValue,searchAttributes:u,maxRenderedDropdownElements:r,dropdownList:a,noMatchDropdownList:y==null?void 0:y.dropdownList,searchMatcher:V,showAllItemsInDropdown:!!E})})),z=et({listToRender:l.listToRender}),[Ue,Pe]=p.useState(!1),Q=p.useRef(null),te=p.useRef(null),$e=_||Ke,Y=p.useRef(null),ne=p.useId(),ae=p.useRef(!1),Xe=()=>{h({type:"InputClick"})},ze=c=>{d!=null&&d.onBlur&&d.onBlur(c)};p.useEffect(()=>{h({type:"ItemSelectedProgrammatically",payload:{selectedItem:E}})},[E,h]),tt({hasFocus:Ue,isExpanded:l.isExpanded,isLoading:B,locale:w,resultCount:l.listToRender.length,selectedValue:(D=l.selectedItem)===null||D===void 0?void 0:D[g]}),p.useLayoutEffect(()=>{var c;ae.current&&((c=Q.current)===null||c===void 0||c.focus(),ae.current=!1)}),p.useEffect(()=>{h({type:"DropdownListPropUpdated"})},[a,h]),nt({isExpanded:l.isExpanded,onClose:R,onOpen:I});const Je=p.useCallback(()=>h({type:"FocusMovedOutSide"}),[]);at({id:t,containerRef:te,handleFocusMovedOutside:Je});const Qe=c=>{if(c.key===ht&&l.highlightedIndex>=0){c.preventDefault(),h({type:"InputKeyDownEnter",payload:{selectedItem:l.listToRender[l.highlightedIndex]}}),s==null||s(l.listToRender[l.highlightedIndex]);return}else if(c.key===At){h({type:"InputKeyDownEscape"});return}if(c.key===gt){if(c.preventDefault(),l.listToRender.length){const k=st(l.highlightedIndex,l.listToRender.length);h({type:"InputKeyDownArrowUp",payload:{highlightedIndex:k}}),k>=0&&le(l==null?void 0:l.listToRender[k],m),re(z[k].current,Y.current)}return}if(c.key===bt&&(c.preventDefault(),l.listToRender.length)){const k=dt(l.highlightedIndex,l.listToRender.length);h({type:"InputKeyDownArrowDown",payload:{highlightedIndex:k}}),k>=0&&le(l==null?void 0:l.listToRender[k],m),re(z[k].current,Y.current)}c.key===yt&&h({type:"FocusMovedOutSide"})};return n.createElement("div",{onKeyDown:Qe,className:X(o,"ffe-searchable-dropdown","ffe-default-mode"),ref:te,onMouseDown:oe(t),onFocus:oe(t)},n.createElement("div",{className:"ffe-searchable-dropdown__input",onClick:()=>{var c;(c=Q.current)===null||c===void 0||c.focus()}},n.createElement("input",{...d,ref:ot([Q,q]),id:t,"aria-labelledby":e,onClick:Xe,onChange:c=>{d!=null&&d.onChange&&d.onChange(c),h({type:"InputChange",payload:{inputValue:c.target.value}})},onFocus:()=>{Pe(!0),h({type:"InputClick"})},onBlur:ze,"aria-describedby":[d==null?void 0:d["aria-describedby"],l.noMatch&&ne].filter(Boolean).join(" ")||void 0,value:C(l.inputValue),type:"text",role:"combobox",autoComplete:"off","aria-controls":`${t}-listbox`,"aria-expanded":l.isExpanded&&!!l.listToRender.length,"aria-autocomplete":"list","aria-haspopup":"listbox","aria-activedescendant":l.highlightedIndex>=0&&(i=(O=(G=z[l.highlightedIndex])===null||G===void 0?void 0:G.current)===null||O===void 0?void 0:O.getAttribute("id"))!==null&&i!==void 0?i:void 0,"aria-invalid":(x=T["aria-invalid"])!==null&&x!==void 0?x:A})),n.createElement(lt,{isExpanded:l.isExpanded,onClick:()=>{h({type:"ToggleButtonPressed"})},isLoading:B}),n.createElement(rt,{ref:Y,isExpanded:l.isExpanded,id:`${t}-listbox`,labelledById:e},l.isExpanded&&n.createElement(ct,{isEqual:f,listToRender:l.listToRender,OptionBody:$e,highlightedIndex:l.highlightedIndex,dropdownAttributes:m,locale:w,refs:z,onChange:c=>{h({type:"ItemOnClick",payload:{selectedItem:c}}),s==null||s(c)},noMatch:l.noMatch?y:void 0,noMatchMessageId:ne,selectedItems:l.selectedItem?[l.selectedItem]:[]}),b&&n.createElement("div",{className:"ffe-searchable-dropdown__list--post-list-element"},b)))}const Me=Ze(It);Me.__docgenInfo={description:"",methods:[],displayName:"SearchableDropdown",props:{displayAttribute:{defaultValue:{value:"searchAttributes[0]",computed:!0},required:!1},maxRenderedDropdownElements:{defaultValue:{value:"Number.MAX_SAFE_INTEGER",computed:!0},required:!1},locale:{defaultValue:{value:"'nb'",computed:!1},required:!1},formatter:{defaultValue:{value:"value => value",computed:!1},required:!1},isLoading:{defaultValue:{value:"false",computed:!1},required:!1},isEqual:{defaultValue:{value:"isDeepEqual",computed:!0},required:!1}}};function We({account:t,showBalance:e=!0,ariaInvalid:o,locale:a}){const{balance:m,accountNumber:u,currencyCode:g}=t??{},r=!t&&(o==="true"||o===!0);return n.createElement("div",{className:X("ffe-small-text","ffe-account-selector-single__details",{"ffe-account-selector-single__details--invalid-empty":r})},t&&n.createElement(n.Fragment,null,n.createElement("div",{className:"ffe-account-selector-single__details--left"},ee(u)),e&&n.createElement("div",{className:"ffe-account-selector-single__details--right"},He(m,a,g))))}We.__docgenInfo={description:"",methods:[],displayName:"AccountDetails",props:{account:{required:!1,tsType:{name:"Account"},description:""},showBalance:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},ariaInvalid:{required:!0,tsType:{name:"ReactComponentPropsWithoutRef['aria-invalid']",raw:"React.ComponentPropsWithoutRef<'div'>['aria-invalid']"},description:""},locale:{required:!0,tsType:{name:"union",raw:"'nb' | 'nn' | 'en'",elements:[{name:"literal",value:"'nb'"},{name:"literal",value:"'nn'"},{name:"literal",value:"'en'"}]},description:""}}};const St=({accounts:t,selectedAccount:e,inputValue:o})=>e&&e.name===o&&!t.find(m=>m.accountNumber===e.accountNumber)?[...t,e]:t;function je({item:t,isHighlighted:e,showBalance:o,locale:a}){return n.createElement("div",{className:X("ffe-searchable-dropdown__list-item-body",{"ffe-searchable-dropdown__list-item-body--highlighted":e})},t.name,n.createElement("div",{className:"ffe-searchable-dropdown__list-item-body-details"},n.createElement(Z,{className:"ffe-searchable-dropdown__detail-text"},ee(t.accountNumber)),o&&n.createElement(Z,{className:"ffe-searchable-dropdown__detail-text"},He(t.balance,a,t.currencyCode))))}je.__docgenInfo={description:"",methods:[],displayName:"AccountActionBody",props:{item:{required:!0,tsType:{name:"Item"},description:""},isHighlighted:{required:!0,tsType:{name:"boolean"},description:""},showBalance:{required:!0,tsType:{name:"boolean"},description:""},locale:{required:!0,tsType:{name:"union",raw:"'nb' | 'nn' | 'en'",elements:[{name:"literal",value:"'nb'"},{name:"literal",value:"'nn'"},{name:"literal",value:"'en'"}]},description:""}}};const v=({id:t,className:e,locale:o="nb",selectedAccount:a,hideAccountDetails:m=!1,showBalance:u=!1,noMatches:g,accounts:r,onAccountSelected:s,allowCustomAccount:d=!1,labelledById:_,optionBody:b,postListElement:y,onReset:w,inputProps:A,formatAccountNumber:C=!0,ariaInvalid:V,onOpen:E,onClose:B,displayAttribute:I,...R})=>{const[f,T]=p.useState((a==null?void 0:a.name)||""),q=C?it:void 0,D=i=>{d&&T(i.target.value),A!=null&&A.onChange&&A.onChange(i)},G=i=>{const x=i===null,l=!(i!=null&&i.accountNumber);x?(T(""),w()):l?(s({name:i.name,accountNumber:i.name,...I?{[I]:i.name}:{}}),T(i.name)):(s(i),T(i.name))},O=R["aria-invalid"]??V;return n.createElement("div",{className:X("ffe-account-selector-single",e),id:`${t}-account-selector-container`},n.createElement(Me,{id:t,labelledById:_,displayAttribute:I,inputProps:{...A,onChange:D},dropdownAttributes:u?["name","accountNumber","balance"]:["name","accountNumber"],postListElement:y,dropdownList:d?St({selectedAccount:a,accounts:r,inputValue:f}):r,noMatch:d&&f.trim()!==""?{dropdownList:[{name:q?q(f):f,accountNumber:"",...I?{[I]:q?q(f):f}:{}}]}:g??{text:pt[o].noMatch},formatter:q,onChange:G,searchAttributes:["name","accountNumber",...I?[I]:[]],locale:o,optionBody:({item:i,isHighlighted:x,...l})=>b?n.createElement(b,{item:i,isHighlighted:x,...l}):n.createElement(je,{item:i,isHighlighted:x,locale:o,showBalance:u}),ariaInvalid:O,searchMatcher:ut,selectedItem:a,onOpen:E,onClose:B,isEqual:(i,x)=>i.accountNumber===x.accountNumber}),!m&&n.createElement(We,{ariaInvalid:O,account:a,showBalance:u&&["string","number"].includes(typeof(a==null?void 0:a.balance)),locale:o}))};v.__docgenInfo={description:"",methods:[],displayName:"AccountSelector",props:{accounts:{required:!0,tsType:{name:"Array",elements:[{name:"T"}],raw:"T[]"},description:`Array of objects:
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
[Read more in the upgrade guide](https://sparebank1.github.io/designsystem/?path=/docs/introduksjon-changelog--docs#2025---februar---semantiske-farger)`}}};const vt={title:"Komponenter/Account-selector/AccountSelector",component:v,argTypes:{postListElement:{options:["text","html"],mapping:{text:"Some text describing the list",html:n.createElement("span",null,"Some text describing the list")}}}},J=[{accountNumber:"39920143613",name:"Brukskonto",currencyCode:"NOK",balance:1337},{accountNumber:"42142102514",name:"Brukskonto2",currencyCode:"NOK",balance:13337},{accountNumber:"23200355148",name:"Sparekonto1",currencyCode:"NOK",balance:109236},{accountNumber:"23207117277",name:"Sparekonto2",currencyCode:"NOK",balance:0}],S={args:{accounts:J,locale:"nb",formatAccountNumber:!0,allowCustomAccount:!1},render:function(e){const[o,a]=p.useState();return n.createElement(N,{label:"Velg konto"},n.createElement(v,{...e,selectedAccount:o,onAccountSelected:a,onReset:()=>a(void 0)}))}},F={args:{...S.args,showBalance:!0},render:function(e){const[o,a]=p.useState();return n.createElement(N,{label:"Velg konto",inputId:e.id,labelId:e.labelledById},n.createElement(v,{...e,selectedAccount:o,onAccountSelected:a}))}},L={args:{...S.args,allowCustomAccount:!0},render:function(e){const[o,a]=p.useState();return n.createElement(N,{label:"Velg konto",inputId:e.id,labelId:e.labelledById},n.createElement(v,{...e,selectedAccount:o,onAccountSelected:a}))}},H={args:{...S.args,formatAccountNumber:!1},render:function(e){const[o,a]=p.useState();return n.createElement(N,{label:"Velg konto",inputId:e.id,labelId:e.labelledById},n.createElement(v,{...e,selectedAccount:o,onAccountSelected:a}))}},K={args:{...S.args,formatAccountNumber:!1},render:function(e){const[o,a]=p.useState(),m=({item:u,isHighlighted:g})=>n.createElement("div",{style:{padding:"8px",background:g?"#ff9100":"white"}},n.createElement("div",null,u.name),n.createElement("div",{style:{display:"flex",justifyContent:"space-between"}},n.createElement(ce,null,u.accountNumber),n.createElement(ce,null,u.balance)));return n.createElement(N,{label:"Velg konto",inputId:e.id,labelId:e.labelledById},n.createElement(v,{...e,optionBody:m,selectedAccount:o,onAccountSelected:a}))}},M={args:{...S.args,hideAccountDetails:!1},render:function(e){const[o,a]=p.useState();return n.createElement(N,{label:"Velg konto",inputId:e.id,labelId:e.labelledById},n.createElement(v,{...e,selectedAccount:o,onAccountSelected:a}))}},W={args:{...S.args,postListElement:n.createElement("span",null,"Some text describing the list")},render:function(e){const[o,a]=p.useState();return n.createElement(N,{label:"Velg konto",inputId:e.id,labelId:e.labelledById},n.createElement(v,{...e,selectedAccount:o,onAccountSelected:a}))}},j={args:{...S.args},render:function(e){const[o,a]=p.useState(J[2]);return n.createElement(N,{label:"Velg konto",inputId:e.id,labelId:e.labelledById},n.createElement(v,{...e,selectedAccount:o,onAccountSelected:a}))}},de=J.map(t=>({...t,prettyName:`${t.name} - ${ee(t.accountNumber)}`})),U={args:{id:"input-id",labelledById:"label-id",locale:"nb",formatAccountNumber:!0,allowCustomAccount:!1,displayAttribute:"prettyName",accounts:de},render:function(e){const[o,a]=p.useState(de[2]);return n.createElement(N,{label:"Velg konto",inputId:e.id,labelId:e.labelledById},n.createElement(v,{...e,selectedAccount:o,onAccountSelected:a}))}},P={args:{accounts:J,locale:"nb",formatAccountNumber:!0,allowCustomAccount:!1},render:function(e){const[o,a]=p.useState();return n.createElement(N,{label:"Velg konto",description:"Velg den kontoen du har mest lyst på"},n.createElement(v,{...e,selectedAccount:o,onAccountSelected:a,onReset:()=>a(void 0)}))}};var ue,ie,pe;S.parameters={...S.parameters,docs:{...(ue=S.parameters)==null?void 0:ue.docs,source:{originalSource:`{
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
}`,...(pe=(ie=S.parameters)==null?void 0:ie.docs)==null?void 0:pe.source}}};var me,fe,ge;F.parameters={...F.parameters,docs:{...(me=F.parameters)==null?void 0:me.docs,source:{originalSource:`{
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
}`,...(ge=(fe=F.parameters)==null?void 0:fe.docs)==null?void 0:ge.source}}};var be,Ae,he;L.parameters={...L.parameters,docs:{...(be=L.parameters)==null?void 0:be.docs,source:{originalSource:`{
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
}`,...(he=(Ae=L.parameters)==null?void 0:Ae.docs)==null?void 0:he.source}}};var ye,Ie,Se;H.parameters={...H.parameters,docs:{...(ye=H.parameters)==null?void 0:ye.docs,source:{originalSource:`{
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
}`,...(Se=(Ie=H.parameters)==null?void 0:Ie.docs)==null?void 0:Se.source}}};var ve,we,Ee;K.parameters={...K.parameters,docs:{...(ve=K.parameters)==null?void 0:ve.docs,source:{originalSource:`{
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
}`,...(Ee=(we=K.parameters)==null?void 0:we.docs)==null?void 0:Ee.source}}};var Re,Te,xe;M.parameters={...M.parameters,docs:{...(Re=M.parameters)==null?void 0:Re.docs,source:{originalSource:`{
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
}`,...(xe=(Te=M.parameters)==null?void 0:Te.docs)==null?void 0:xe.source}}};var Ne,_e,ke;W.parameters={...W.parameters,docs:{...(Ne=W.parameters)==null?void 0:Ne.docs,source:{originalSource:`{
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
}`,...(ke=(_e=W.parameters)==null?void 0:_e.docs)==null?void 0:ke.source}}};var Ve,Be,Ce;j.parameters={...j.parameters,docs:{...(Ve=j.parameters)==null?void 0:Ve.docs,source:{originalSource:`{
  args: {
    ...Standard.args
  },
  render: function Render(args) {
    const [selectedAccount, setSelectedAccount] = useState<Account>(accounts[2]);
    return <InputGroup label="Velg konto" inputId={args.id} labelId={args.labelledById}>
                <AccountSelector {...args} selectedAccount={selectedAccount} onAccountSelected={setSelectedAccount} />
            </InputGroup>;
  }
}`,...(Ce=(Be=j.parameters)==null?void 0:Be.docs)==null?void 0:Ce.source}}};var qe,De,Oe;U.parameters={...U.parameters,docs:{...(qe=U.parameters)==null?void 0:qe.docs,source:{originalSource:`{
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
}`,...(Oe=(De=U.parameters)==null?void 0:De.docs)==null?void 0:Oe.source}}};var Ge,Fe,Le;P.parameters={...P.parameters,docs:{...(Ge=P.parameters)==null?void 0:Ge.docs,source:{originalSource:`{
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
}`,...(Le=(Fe=P.parameters)==null?void 0:Fe.docs)==null?void 0:Le.source}}};const wt=["Standard","ShowBalance","AllowCustomAccount","NoFormatAccount","ListElementBody","HideAccountDetails","PostListElement","InitialValue","CustomDisplayAttribute","WithDescription"],kt=Object.freeze(Object.defineProperty({__proto__:null,AllowCustomAccount:L,CustomDisplayAttribute:U,HideAccountDetails:M,InitialValue:j,ListElementBody:K,NoFormatAccount:H,PostListElement:W,ShowBalance:F,Standard:S,WithDescription:P,__namedExportsOrder:wt,default:vt},Symbol.toStringTag,{value:"Module"}));export{kt as A,U as C,M as H,K as L,H as N,W as P,S,P as W,F as a,L as b};
