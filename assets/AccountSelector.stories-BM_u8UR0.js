import{R as r,r as i}from"./index-DJO9vBfz.js";import{c as Q}from"./index-i5X67GZP.js";import{g as j,f as Ue,u as $e,a as ze,b as Xe,c as Je,d as de,m as Qe,T as Ye,L as Ze,R as et,h as tt,s as se,i as ce,j as nt,o as ot,k as rt,t as at,l as lt,n as dt}from"./texts-Bv20J8y8.js";import{M as st}from"./MicroText-CBajbyTW.js";import{i as ct,S as ie}from"./index-BZUElnwS.js";import{I as q}from"./InputGroup-CkIAZS7X.js";function Le(t){var e=t.item,o=t.dropdownAttributes,n=t.isHighlighted,d=o[0],u=o.slice(1),g=e[d],l=u.map(function(f,v){return r.createElement(st,{className:"ffe-searchable-dropdown__detail-text",key:v},e[f])});return r.createElement("div",{className:Q("ffe-searchable-dropdown__list-item-body",{"ffe-searchable-dropdown__list-item-body--highlighted":n})},g,!!l.length&&r.createElement("div",{className:"ffe-searchable-dropdown__list-item-body-details"},l))}Le.__docgenInfo={description:"",methods:[],displayName:"OptionBody"};var m=function(){return m=Object.assign||function(t){for(var e,o=1,n=arguments.length;o<n;o++){e=arguments[o];for(var d in e)Object.prototype.hasOwnProperty.call(e,d)&&(t[d]=e[d])}return t},m.apply(this,arguments)},it=function(t){var e=t.searchAttributes,o=t.dropdownList,n=t.noMatchDropdownList,d=t.maxRenderedDropdownElements,u=t.searchMatcher,g=t.onChange;return function(l,f){var v,M,N,B,E,y,D,L,A,p,_;switch(f.type){case"InputKeyDownEscape":return m(m({},l),{noMatch:!1,isExpanded:!1,highlightedIndex:-1,inputValue:l.selectedItem?l.selectedItem[e[0]]:""});case"InputClick":{var O=j({inputValue:l.inputValue,searchAttributes:e,maxRenderedDropdownElements:d,dropdownList:o,noMatchDropdownList:n,searchMatcher:u,showAllItemsInDropdown:!0}),h=O.noMatch,b=O.listToRender;return m(m({},l),{isExpanded:!0,listToRender:b,noMatch:h})}case"InputChange":{var R=j({inputValue:(M=(v=f.payload)===null||v===void 0?void 0:v.inputValue)!==null&&M!==void 0?M:"",searchAttributes:e,maxRenderedDropdownElements:d,dropdownList:o,noMatchDropdownList:n,searchMatcher:u,showAllItemsInDropdown:!1}),h=R.noMatch,b=R.listToRender;return m(m({},l),{isExpanded:!0,inputValue:(B=(N=f.payload)===null||N===void 0?void 0:N.inputValue)!==null&&B!==void 0?B:"",listToRender:b,highlightedIndex:((y=(E=f.payload)===null||E===void 0?void 0:E.inputValue)===null||y===void 0?void 0:y.trim())===""||b.length===0?-1:0,noMatch:h})}case"ToggleButtonPressed":return m(m({},l),{isExpanded:!l.isExpanded});case"ItemSelectedProgrammatically":case"ItemOnClick":case"InputKeyDownEnter":return m(m({},l),{isExpanded:!1,highlightedIndex:-1,selectedItem:(D=f.payload)===null||D===void 0?void 0:D.selectedItem,inputValue:((A=(L=f.payload)===null||L===void 0?void 0:L.selectedItem)===null||A===void 0?void 0:A[e[0]])||""});case"InputKeyDownArrowDown":case"InputKeyDownArrowUp":return m(m({},l),{isExpanded:!0,highlightedIndex:(_=(p=f.payload)===null||p===void 0?void 0:p.highlightedIndex)!==null&&_!==void 0?_:-1});case"FocusMovedOutSide":{var b=j({inputValue:l.inputValue,searchAttributes:e,maxRenderedDropdownElements:d,dropdownList:o,noMatchDropdownList:n,searchMatcher:u,showAllItemsInDropdown:!0}).listToRender,P=l.inputValue===""&&!!l.selectedItem,F=l.listToRender.length===1&&e.map(function(x){var k;return l.listToRender[0][x]===((k=l.selectedItem)===null||k===void 0?void 0:k[x])}).includes(!1)&&l.highlightedIndex!==-1,C=l.selectedItem;P?(g==null||g(null),C=void 0):F&&(g==null||g(l.listToRender[0]),C=l.listToRender[0]);var V=C?C[e[0]]:"";return m(m({},l),{isExpanded:!1,highlightedIndex:-1,inputValue:V,selectedItem:C,listToRender:b})}case"DropdownListPropUpdated":return m(m({},l),j({inputValue:l.inputValue,searchAttributes:e,maxRenderedDropdownElements:d,dropdownList:o,noMatchDropdownList:n,searchMatcher:u,showAllItemsInDropdown:!!l.selectedItem}));default:return l}}},z=function(){return z=Object.assign||function(t){for(var e,o=1,n=arguments.length;o<n;o++){e=arguments[o];for(var d in e)Object.prototype.hasOwnProperty.call(e,d)&&(t[d]=e[d])}return t},z.apply(this,arguments)},ut=function(t,e){var o={};for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&e.indexOf(n)<0&&(o[n]=t[n]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var d=0,n=Object.getOwnPropertySymbols(t);d<n.length;d++)e.indexOf(n[d])<0&&Object.prototype.propertyIsEnumerable.call(t,n[d])&&(o[n[d]]=t[n[d]]);return o},pt="ArrowUp",mt="ArrowDown",gt="Escape",ft="Enter";function ht(t,e){var o,n,d,u,g,l,f,v=t.id,M=t.labelledById,N=t.className,B=t.dropdownList,E=t.dropdownAttributes,y=t.searchAttributes,D=t.maxRenderedDropdownElements,L=D===void 0?Number.MAX_SAFE_INTEGER:D,A=t.onChange,p=t.inputProps,_=t.optionBody,O=t.postListElement,h=t.noMatch,b=t.locale,R=b===void 0?"nb":b,P=t.ariaInvalid,F=t.formatter,C=F===void 0?function(s){return s}:F,V=t.searchMatcher,c=t.selectedItem,x=t.isLoading,k=x===void 0?!1:x,_e=t.onOpen,Oe=t.onClose,ee=t.isEqual,Ve=ee===void 0?ct:ee,qe=ut(t,["id","labelledById","className","dropdownList","dropdownAttributes","searchAttributes","maxRenderedDropdownElements","onChange","inputProps","optionBody","postListElement","noMatch","locale","ariaInvalid","formatter","searchMatcher","selectedItem","isLoading","onOpen","onClose","isEqual"]),te=i.useReducer(it({dropdownList:B,searchAttributes:y,maxRenderedDropdownElements:L,noMatchDropdownList:h==null?void 0:h.dropdownList,searchMatcher:V,onChange:A}),{isExpanded:!1,selectedItems:[],highlightedIndex:-1,inputValue:c?c[E[0]]:""},function(s){return z(z({},s),j({inputValue:s.inputValue,searchAttributes:y,maxRenderedDropdownElements:L,dropdownList:B,noMatchDropdownList:h==null?void 0:h.dropdownList,searchMatcher:V,showAllItemsInDropdown:!!c}))}),a=te[0],I=te[1],X=$e({listToRender:a.listToRender}),ne=i.useState(!1),Fe=ne[0],Pe=ne[1],Y=i.useRef(null),oe=i.useRef(null),re=i.useRef(null),je=_||Le,J=i.useRef(null),ae=i.useId(),Z=i.useRef(!1),le=i.useRef(!1),Ge=function(){I({type:"InputClick"})},Ke=function(s){p!=null&&p.onBlur&&p.onBlur(s)};i.useEffect(function(){I({type:"ItemSelectedProgrammatically",payload:{selectedItem:c}})},[c,I]),ze({hasFocus:Fe,isExpanded:a.isExpanded,isLoading:k,locale:R,resultCount:a.listToRender.length,selectedValue:(o=a.selectedItem)===null||o===void 0?void 0:o[y[0]]}),i.useLayoutEffect(function(){var s,w;Z.current?((s=oe.current)===null||s===void 0||s.focus(),Z.current=!1):le.current&&((w=Y.current)===null||w===void 0||w.focus(),le.current=!1)}),i.useEffect(function(){I({type:"DropdownListPropUpdated"})},[B,I]),Xe({isExpanded:a.isExpanded,onClose:Oe,onOpen:_e});var He=i.useCallback(function(){return I({type:"FocusMovedOutSide"})},[]);Je({id:v,containerRef:re,handelFocusMovedOutside:He});var We=function(s){if(s.key===ft&&a.highlightedIndex>=0){s.preventDefault(),I({type:"InputKeyDownEnter",payload:{selectedItem:a.listToRender[a.highlightedIndex]}}),A==null||A(a.listToRender[a.highlightedIndex]);return}else if(s.key===gt){I({type:"InputKeyDownEscape"});return}if(s.key===pt){if(s.preventDefault(),a.listToRender.length){var w=tt(a.highlightedIndex,a.listToRender.length);I({type:"InputKeyDownArrowUp",payload:{highlightedIndex:w}}),w>=0&&se(a==null?void 0:a.listToRender[w],E),ce(X[w].current,J.current)}return}if(s.key===mt&&(s.preventDefault(),a.listToRender.length)){var w=nt(a.highlightedIndex,a.listToRender.length);I({type:"InputKeyDownArrowDown",payload:{highlightedIndex:w}}),w>=0&&se(a==null?void 0:a.listToRender[w],E),ce(X[w].current,J.current)}};return r.createElement("div",{onKeyDown:We,className:Q(N,"ffe-searchable-dropdown"),ref:re,onMouseDown:de(v),onFocus:de(v)},r.createElement("div",{className:"ffe-searchable-dropdown__input",onClick:function(){var s;(s=Y.current)===null||s===void 0||s.focus()}},r.createElement("input",z({},p,{ref:Qe([Y,e]),id:v,"aria-labelledby":M,onClick:Ge,onChange:function(s){p!=null&&p.onChange&&p.onChange(s),I({type:"InputChange",payload:{inputValue:s.target.value}})},onFocus:function(){return Pe(!0)},onBlur:Ke,"aria-describedby":[p==null?void 0:p["aria-describedby"],a.noMatch&&ae].filter(Boolean).join(" ")||void 0,value:C(a.inputValue),type:"text",role:"combobox",autoComplete:"off","aria-controls":(d=(n=J.current)===null||n===void 0?void 0:n.getAttribute("id"))!==null&&d!==void 0?d:void 0,"aria-expanded":a.isExpanded&&!!a.listToRender.length,"aria-autocomplete":"list","aria-haspopup":"listbox","aria-activedescendant":a.highlightedIndex>=0&&(l=(g=(u=X[a.highlightedIndex])===null||u===void 0?void 0:u.current)===null||g===void 0?void 0:g.getAttribute("id"))!==null&&l!==void 0?l:void 0,"aria-invalid":(f=qe["aria-invalid"])!==null&&f!==void 0?f:P}))),r.createElement(Ye,{ref:oe,isExpanded:a.isExpanded,onClick:function(){return I({type:"ToggleButtonPressed"})},locale:R,isLoading:k}),r.createElement(Ze,{ref:J,isExpanded:a.isExpanded},a.isExpanded&&r.createElement(et,{isEqual:Ve,listToRender:a.listToRender,OptionBody:je,highlightedIndex:a.highlightedIndex,dropdownAttributes:E,locale:R,refs:X,onChange:function(s){Z.current=!0,I({type:"ItemOnClick",payload:{selectedItem:s}}),A==null||A(s)},noMatch:a.noMatch?h:void 0,noMatchMessageId:ae,selectedItems:a.selectedItem?[a.selectedItem]:[]}),O&&r.createElement("div",{className:"ffe-searchable-dropdown__list--post-list-element"},O)))}var ke=Ue(ht);ke.__docgenInfo={description:"",methods:[],displayName:"SearchableDropdown"};function Me({account:t,showBalance:e=!0,ariaInvalid:o}){const{balance:n,accountNumber:d}=t??{},u=!t&&(o==="true"||o===!0);return r.createElement("div",{className:Q("ffe-small-text","ffe-account-selector-single__details",{"ffe-account-selector-single__details--invalid-empty":u})},t&&r.createElement(r.Fragment,null,r.createElement("div",{className:"ffe-account-selector-single__details--left"},ot(d)),e&&r.createElement("div",{className:"ffe-account-selector-single__details--right"},n)))}Me.__docgenInfo={description:"",methods:[],displayName:"AccountDetails",props:{account:{required:!1,tsType:{name:"Account"},description:""},showBalance:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},ariaInvalid:{required:!0,tsType:{name:"ReactComponentPropsWithoutRef['aria-invalid']",raw:"React.ComponentPropsWithoutRef<'div'>['aria-invalid']"},description:""}}};const bt=({accounts:t,selectedAccount:e,inputValue:o})=>e&&e.name===o&&!t.find(d=>d.accountNumber===e.accountNumber)?[...t,e]:t,T=({id:t,className:e,locale:o="nb",selectedAccount:n,hideAccountDetails:d=!1,showBalance:u=!1,noMatches:g,accounts:l,onAccountSelected:f,allowCustomAccount:v=!1,labelledById:M,optionBody:N,postListElement:B,onReset:E,inputProps:y,formatAccountNumber:D=!0,ariaInvalid:L,onOpen:A,onClose:p,onColoredBg:_,...O})=>{const[h,b]=i.useState((n==null?void 0:n.name)||""),R=D?dt:void 0,P=c=>{b(c.target.value),y!=null&&y.onChange&&y.onChange(c)},F=c=>{const x=c===null,k=!(c!=null&&c.accountNumber);x?(b(""),E()):k?(f({name:c.name,accountNumber:c.name}),b(c.name)):(f(c),b(c.name))},C=O["aria-invalid"]??L,V=l.map(c=>({...c,balance:N?c.balance:rt(c.balance,o,c.currencyCode)}));return r.createElement("div",{className:Q("ffe-account-selector-single",{"ffe-account-selector-single--on-colored-bg":_},e),id:`${t}-account-selector-container`},r.createElement(ke,{id:t,labelledById:M,inputProps:{...y,onChange:P},dropdownAttributes:u?["name","accountNumber","balance"]:["name","accountNumber"],postListElement:B,dropdownList:v?bt({selectedAccount:n,accounts:V,inputValue:h}):V,noMatch:v&&h.trim()!==""?{dropdownList:[{name:R?R(h):h,accountNumber:""}]}:g??{text:at[o].noMatch},formatter:R,onChange:F,searchAttributes:["name","accountNumber"],locale:o,optionBody:N,ariaInvalid:C,searchMatcher:lt,selectedItem:n,onOpen:A,onClose:p,isEqual:(c,x)=>c.accountNumber===x.accountNumber}),!d&&r.createElement(Me,{ariaInvalid:C,account:n,showBalance:u&&["string","number"].includes(typeof(n==null?void 0:n.balance))}))};T.__docgenInfo={description:"",methods:[],displayName:"AccountSelector",props:{accounts:{required:!0,tsType:{name:"Array",elements:[{name:"T"}],raw:"T[]"},description:`Array of objects:
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
}`,signature:{properties:[{key:"item",value:{name:"T",required:!0}},{key:"locale",value:{name:"union",raw:"'nb' | 'nn' | 'en'",elements:[{name:"literal",value:"'nb'"},{name:"literal",value:"'nn'"},{name:"literal",value:"'en'"}],required:!0}},{key:"isHighlighted",value:{name:"boolean",required:!0}},{key:"dropdownAttributes",value:{name:"Array",elements:[{name:"unknown"}],raw:"(keyof T)[]",required:!0}}]}}]},description:"Custom element to use for each item in the dropdown list"},postListElement:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Element to be shown below dropDownList"},"aria-invalid":{required:!1,tsType:{name:"AriaAttributes['aria-invalid']",raw:"AriaAttributes['aria-invalid']"},description:"Sets aria-invalid on input field"},ariaInvalid:{required:!1,tsType:{name:"AriaAttributes['aria-invalid']",raw:"AriaAttributes['aria-invalid']"},description:""},onOpen:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Prop passed to the dropdown list"},onClose:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},selectedAccount:{required:!1,tsType:{name:"T"},description:""},onReset:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Called when emptying the input field and moving focus away from the account selector"},onColoredBg:{required:!1,tsType:{name:"boolean"},description:"Adds alternative styling for better contrast on certain backgrounds"}}};const vt={title:"Komponenter/Account-selector/AccountSelector",component:T,argTypes:{postListElement:{options:["text","html"],mapping:{text:"Some text describing the list",html:r.createElement("span",null,"Some text describing the list")}}}},yt=[{accountNumber:"39920143613",name:"Brukskonto",currencyCode:"NOK",balance:1337},{accountNumber:"42142102514",name:"Brukskonto2",currencyCode:"NOK",balance:13337},{accountNumber:"23200355148",name:"Sparekonto1",currencyCode:"NOK",balance:109236},{accountNumber:"23207117277",name:"Sparekonto2",currencyCode:"NOK",balance:0}],S={args:{accounts:yt,id:"input-id",labelledById:"label-id",locale:"nb",formatAccountNumber:!0,allowCustomAccount:!1,onColoredBg:!1},render:function(e){const[o,n]=i.useState();return r.createElement(q,{label:"Velg konto",inputId:e.id,labelId:e.labelledById,onColoredBg:e.onColoredBg},r.createElement(T,{...e,selectedAccount:o,onAccountSelected:n}))}},G={args:{...S.args,showBalance:!0},render:function(e){const[o,n]=i.useState();return r.createElement(q,{label:"Velg konto",inputId:e.id,labelId:e.labelledById,onColoredBg:e.onColoredBg},r.createElement(T,{...e,selectedAccount:o,onAccountSelected:n}))}},K={args:{...S.args,allowCustomAccount:!0},render:function(e){const[o,n]=i.useState();return r.createElement(q,{label:"Velg konto",inputId:e.id,labelId:e.labelledById,onColoredBg:e.onColoredBg},r.createElement(T,{...e,selectedAccount:o,onAccountSelected:n}))}},H={args:{...S.args,formatAccountNumber:!1},render:function(e){const[o,n]=i.useState();return r.createElement(q,{label:"Velg konto",inputId:e.id,labelId:e.labelledById,onColoredBg:e.onColoredBg},r.createElement(T,{...e,selectedAccount:o,onAccountSelected:n}))}},W={args:{...S.args,formatAccountNumber:!1},render:function(e){const[o,n]=i.useState(),d=({item:u,isHighlighted:g})=>r.createElement("div",{style:{padding:"8px",background:g?"#ff9100":"white"}},r.createElement("div",null,u.name),r.createElement("div",{style:{display:"flex",justifyContent:"space-between"}},r.createElement(ie,null,u.accountNumber),r.createElement(ie,null,u.balance)));return r.createElement(q,{label:"Velg konto",inputId:e.id,labelId:e.labelledById,onColoredBg:e.onColoredBg},r.createElement(T,{...e,optionBody:d,selectedAccount:o,onAccountSelected:n}))}},U={args:{...S.args,hideAccountDetails:!1},render:function(e){const[o,n]=i.useState();return r.createElement(q,{label:"Velg konto",inputId:e.id,labelId:e.labelledById,onColoredBg:e.onColoredBg},r.createElement(T,{...e,selectedAccount:o,onAccountSelected:n}))}},$={args:{...S.args,postListElement:r.createElement("span",null,"Some text describing the list")},render:function(e){const[o,n]=i.useState();return r.createElement(q,{label:"Velg konto",inputId:e.id,labelId:e.labelledById,onColoredBg:e.onColoredBg},r.createElement(T,{...e,selectedAccount:o,onAccountSelected:n}))}};var ue,pe,me;S.parameters={...S.parameters,docs:{...(ue=S.parameters)==null?void 0:ue.docs,source:{originalSource:`{
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
}`,...(me=(pe=S.parameters)==null?void 0:pe.docs)==null?void 0:me.source}}};var ge,fe,he;G.parameters={...G.parameters,docs:{...(ge=G.parameters)==null?void 0:ge.docs,source:{originalSource:`{
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
}`,...(he=(fe=G.parameters)==null?void 0:fe.docs)==null?void 0:he.source}}};var be,ve,ye;K.parameters={...K.parameters,docs:{...(be=K.parameters)==null?void 0:be.docs,source:{originalSource:`{
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
}`,...(ye=(ve=K.parameters)==null?void 0:ve.docs)==null?void 0:ye.source}}};var Ae,Ie,we;H.parameters={...H.parameters,docs:{...(Ae=H.parameters)==null?void 0:Ae.docs,source:{originalSource:`{
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
}`,...(we=(Ie=H.parameters)==null?void 0:Ie.docs)==null?void 0:we.source}}};var Se,Ee,Re;W.parameters={...W.parameters,docs:{...(Se=W.parameters)==null?void 0:Se.docs,source:{originalSource:`{
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
}`,...(Re=(Ee=W.parameters)==null?void 0:Ee.docs)==null?void 0:Re.source}}};var Ce,Be,xe;U.parameters={...U.parameters,docs:{...(Ce=U.parameters)==null?void 0:Ce.docs,source:{originalSource:`{
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
}`,...(xe=(Be=U.parameters)==null?void 0:Be.docs)==null?void 0:xe.source}}};var Te,Ne,De;$.parameters={...$.parameters,docs:{...(Te=$.parameters)==null?void 0:Te.docs,source:{originalSource:`{
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
}`,...(De=(Ne=$.parameters)==null?void 0:Ne.docs)==null?void 0:De.source}}};const At=["Standard","ShowBalance","AllowCustomAccount","NoFormatAccount","ListElementBody","HideAccountDetails","PostListElement"],Bt=Object.freeze(Object.defineProperty({__proto__:null,AllowCustomAccount:K,HideAccountDetails:U,ListElementBody:W,NoFormatAccount:H,PostListElement:$,ShowBalance:G,Standard:S,__namedExportsOrder:At,default:vt},Symbol.toStringTag,{value:"Module"}));export{Bt as A,U as H,W as L,H as N,$ as P,S,G as a,K as b};
