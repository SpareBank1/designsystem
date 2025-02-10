import{R as d,r as v}from"./index-eCxJ45ll.js";import{g as P,f as qe,u as Pe,a as Ve,b as Qe,c as Fe,d as pe,e as me,m as Ue,T as Ke,L as He,R as Ye,h as We,i as Ge,s as fe,j as he,k as Ze,l as Xe,n as Je,o as $e,t as et}from"./texts-CtMTATQK.js";import{c as $}from"./index-DezCrw0f.js";import{S as J,i as tt}from"./index-UHo_6ElD.js";import{I as Ne}from"./Icon-B88nEPeu.js";import{C as nt,a as rt}from"./ChipRemovable-y3jM1fRB.js";import{I as Te}from"./InputGroup-B73IVGIl.js";import{T as ot}from"./TertiaryButton-c9j_cgsc.js";var at="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgLTk2MCA5NjAgOTYwIiB3aWR0aD0iMjQiPgogICAgPHBhdGgKICAgICAgICBkPSJtMzgyLTM2Mi4xMzEgMzM0LjY5Ni0zMzQuNjk1UTczMC4zNy03MTAuNSA3NDguNzYxLTcxMC41dDMyLjA2NSAxMy42NzRRNzk0LjUtNjgzLjE1MiA3OTQuNS02NjQuMzhxMCAxOC43NzEtMTMuNjc0IDMyLjQ0NUw0MTQuMDY1LTI2NC40MTNRNDAwLjM5MS0yNTAuNzM5IDM4Mi0yNTAuNzM5dC0zMi4wNjUtMTMuNjc0TDE3OC40MTMtNDM1LjkzNXEtMTMuNjc0LTEzLjY3NC0xMy4yOTQtMzIuNDQ1LjM4MS0xOC43NzIgMTQuMDU1LTMyLjQ0NlQyMTEuNjItNTE0LjVxMTguNzcxIDAgMzIuNDQ1IDEzLjY3NEwzODItMzYyLjEzMVoiIC8+Cjwvc3ZnPg==";function Ae(e){var n=e.item,i=e.dropdownAttributes,o=e.isHighlighted,l=i[0],p=i.slice(1),y=n[l],r=p.map(function(u,b){return d.createElement(J,{className:"ffe-searchable-dropdown__detail-text",key:b},n[u])});return d.createElement("div",{className:$("ffe-searchable-dropdown__list-item-body",{"ffe-searchable-dropdown__list-item-body--highlighted":o,"ffe-searchable-dropdown__list-item-body--condensed":!!r.length})},d.createElement("div",{className:"ffe-searchable-dropdown__list-item-body-content"},y,!!r.length&&d.createElement("div",{className:"ffe-searchable-dropdown__list-item-body-details"},r)),d.createElement(Ne,{fileUrl:at,size:"md",className:"ffe-searchable-dropdown__selected-icon"}))}Ae.__docgenInfo={description:"",methods:[],displayName:"MultiselectOptionBody"};var X=function(e,n,i,o){return i==="removed"?e.filter(function(l){return!n.some(function(p){return o(l,p)})}):e.concat(n).filter(function(l,p,y){return y.findIndex(function(r){return o(l,r)})===p})},ge=function(e,n,i){return e!=null&&e.some(function(o){return i(o,n)})?"removed":"selected"},s=function(){return s=Object.assign||function(e){for(var n,i=1,o=arguments.length;i<o;i++){n=arguments[i];for(var l in n)Object.prototype.hasOwnProperty.call(n,l)&&(e[l]=n[l])}return e},s.apply(this,arguments)},it=function(e){var n=e.searchAttributes,i=e.dropdownList,o=e.noMatchDropdownList,l=e.maxRenderedDropdownElements,p=e.searchMatcher,y=e.isEqual;return function(r,u){var b,I,z,j,N,M,T,x,_,m,c,S,w,f,R,A;switch(u.type){case"InputKeyDownEscape":return s(s({},r),{noMatch:!1,isExpanded:!1,highlightedIndex:-1,inputValue:""});case"InputClick":{var F=P({inputValue:r.inputValue,searchAttributes:n,maxRenderedDropdownElements:l,dropdownList:i,noMatchDropdownList:o,searchMatcher:p,showAllItemsInDropdown:!0}),D=F.noMatch,L=F.listToRender;return s(s({},r),{isExpanded:!0,listToRender:L,noMatch:D})}case"RemoveItem":return!((b=u.payload)===null||b===void 0)&&b.items?s(s({},r),{highlightedIndex:-1,selectedItems:X(r.selectedItems,u.payload.items,"removed",y),inputValue:""}):r;case"InputChange":{var O=P({inputValue:(z=(I=u.payload)===null||I===void 0?void 0:I.inputValue)!==null&&z!==void 0?z:"",searchAttributes:n,maxRenderedDropdownElements:l,dropdownList:i,noMatchDropdownList:o,searchMatcher:p,showAllItemsInDropdown:!1}),D=O.noMatch,L=O.listToRender;return s(s({},r),{isExpanded:!0,inputValue:(N=(j=u.payload)===null||j===void 0?void 0:j.inputValue)!==null&&N!==void 0?N:"",listToRender:L,highlightedIndex:((T=(M=u.payload)===null||M===void 0?void 0:M.inputValue)===null||T===void 0?void 0:T.trim())===""||L.length===0?-1:0,noMatch:D})}case"ToggleButtonPressed":return s(s({},r),{isExpanded:!r.isExpanded});case"ItemSelectedProgrammatically":return!((x=u.payload)===null||x===void 0)&&x.items?s(s({},r),{selectedItems:X(r.selectedItems,u.payload.items,"selected",y)}):r;case"ItemOnClick":case"InputKeyDownEnter":if(!((_=u.payload)===null||_===void 0)&&_.items){var E=P({inputValue:"",searchAttributes:n,maxRenderedDropdownElements:l,dropdownList:i,noMatchDropdownList:o,searchMatcher:p,showAllItemsInDropdown:!0}),D=E.noMatch,L=E.listToRender;return s(s({},r),{isExpanded:!0,highlightedIndex:r.inputValue.trim()===""&&(c=(m=u.payload)===null||m===void 0?void 0:m.highlightedIndex)!==null&&c!==void 0?c:-1,selectedItems:X(r.selectedItems,u.payload.items,(w=(S=u.payload)===null||S===void 0?void 0:S.actionType)!==null&&w!==void 0?w:"selected",y),listToRender:L,inputValue:"",noMatch:D})}return r;case"InputKeyDownArrowDown":case"InputKeyDownArrowUp":{var B=document.activeElement;return(B==null?void 0:B.getAttribute("role"))==="combobox"?s(s({},r),{isExpanded:!0,highlightedIndex:(R=(f=u.payload)===null||f===void 0?void 0:f.highlightedIndex)!==null&&R!==void 0?R:-1}):r}case"TabPressed":return s(s({},r),{highlightedIndex:-1});case"FocusMovedOutSide":return s(s({},r),{isExpanded:!1,highlightedIndex:-1,inputValue:""});case"DropdownListPropUpdated":return s(s({},r),P({inputValue:r.inputValue,searchAttributes:n,maxRenderedDropdownElements:l,dropdownList:i,noMatchDropdownList:o,searchMatcher:p,showAllItemsInDropdown:((A=r.inputValue)===null||A===void 0?void 0:A.trim().length)===0}));default:return r}}},Q=function(){return Q=Object.assign||function(e){for(var n,i=1,o=arguments.length;i<o;i++){n=arguments[i];for(var l in n)Object.prototype.hasOwnProperty.call(n,l)&&(e[l]=n[l])}return e},Q.apply(this,arguments)},lt=function(e,n){var i={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&n.indexOf(o)<0&&(i[o]=e[o]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var l=0,o=Object.getOwnPropertySymbols(e);l<o.length;l++)n.indexOf(o[l])<0&&Object.prototype.propertyIsEnumerable.call(e,o[l])&&(i[o[l]]=e[o[l]]);return i},dt="ArrowUp",st="ArrowDown",ut="Escape",ct="Enter",pt="Tab",mt="Backspace";function ft(e,n){var i,o,l,p,y,r,u,b,I=e.id,z=e.labelledById,j=e.className,N=e.dropdownList,M=e.dropdownAttributes,T=e.searchAttributes,x=e.maxRenderedDropdownElements,_=x===void 0?Number.MAX_SAFE_INTEGER:x,m=e.onChange,c=e.inputProps,S=e.optionBody,w=e.postListElement,f=e.noMatch,R=e.locale,A=R===void 0?"nb":R,F=e.ariaInvalid,D=e.formatter,L=D===void 0?function(a){return a}:D,O=e.searchMatcher,E=e.selectedItems,B=e.isLoading,ee=B===void 0?!1:B,Re=e.onOpen,De=e.onClose,G=e.showNumberSelectedAfter,te=e.isEqual,U=te===void 0?tt:te,Le=lt(e,["id","labelledById","className","dropdownList","dropdownAttributes","searchAttributes","maxRenderedDropdownElements","onChange","inputProps","optionBody","postListElement","noMatch","locale","ariaInvalid","formatter","searchMatcher","selectedItems","isLoading","onOpen","onClose","showNumberSelectedAfter","isEqual"]),ne=v.useReducer(it({dropdownList:N,searchAttributes:T,maxRenderedDropdownElements:_,noMatchDropdownList:f==null?void 0:f.dropdownList,searchMatcher:O,isEqual:U}),{isExpanded:!1,selectedItems:[],highlightedIndex:-1,inputValue:""},function(a){return Q(Q({},a),P({inputValue:a.inputValue,searchAttributes:T,maxRenderedDropdownElements:_,dropdownList:N,noMatchDropdownList:f==null?void 0:f.dropdownList,searchMatcher:O,showAllItemsInDropdown:!!(E!=null&&E.length)}))}),t=ne[0],h=ne[1],K=Pe({listToRender:t.listToRender}),re=v.useState(!1),je=re[0],_e=re[1],Z=v.useRef(null),oe=v.useRef(null),ae=v.useRef(null),Se=S||Ae,H=v.useRef(null),ie=v.useId(),le=v.useRef(!1),q=v.useRef(!1),de=v.useState(!0),se=de[0],ue=de[1],ze=function(){h({type:"InputClick"}),q.current=!0},Be=function(a){c!=null&&c.onBlur&&c.onBlur(a)};Ve({hasFocus:je,isExpanded:t.isExpanded,isLoading:ee,locale:A,resultCount:t.listToRender.length,selectedValue:(i=t.selectedItems[t.selectedItems.length-1])===null||i===void 0?void 0:i[T[0]]}),v.useLayoutEffect(function(){var a,g;le.current?((a=oe.current)===null||a===void 0||a.focus(),le.current=!1):q.current&&((g=Z.current)===null||g===void 0||g.focus(),q.current=!1)}),v.useEffect(function(){h({type:"DropdownListPropUpdated"})},[N,h]),Qe({isExpanded:t.isExpanded,onClose:De,onOpen:Re});var ke=v.useCallback(function(){return h({type:"FocusMovedOutSide"})},[]);v.useEffect(function(){G!==void 0&&(t.selectedItems.length>G?ue(!1):ue(!0))},[t.selectedItems,G]),v.useEffect(function(){E&&h({type:"ItemSelectedProgrammatically",payload:{items:E}})},[E,h]),Fe({id:I,containerRef:ae,handelFocusMovedOutside:ke});var Oe=function(a){if(a.key===ct&&t.highlightedIndex>=0){a.preventDefault();var g=t.listToRender[t.highlightedIndex],Y=ge(t.selectedItems,g,U);h({type:"InputKeyDownEnter",payload:{items:[g],actionType:Y,highlightedIndex:t.highlightedIndex}}),m==null||m(g,Y);return}else if(a.key===ut){h({type:"InputKeyDownEscape"});return}else if(a.key===dt){if(a.preventDefault(),t.listToRender.length){var C=We(t.highlightedIndex,t.listToRender.length);h({type:"InputKeyDownArrowUp",payload:{highlightedIndex:C}}),C>=0&&fe(t==null?void 0:t.listToRender[C],M),he(K[C].current,H.current)}return}else if(a.key===st){if(a.preventDefault(),t.listToRender.length){var C=Ge(t.highlightedIndex,t.listToRender.length);h({type:"InputKeyDownArrowDown",payload:{highlightedIndex:C}}),C>=0&&fe(t==null?void 0:t.listToRender[C],M),he(K[C].current,H.current)}}else if(a.key===mt){if(t.inputValue===""&&t.selectedItems.length>0&&se){var ce=t.selectedItems[t.selectedItems.length-1];h({type:"RemoveItem",payload:{items:[ce],actionType:"removed"}}),m==null||m(ce,"removed")}}else if(a.key===pt){h({type:"TabPressed",payload:{highlightedIndex:-1}});return}};return d.createElement("div",{onKeyDown:Oe,ref:ae,onMouseDown:pe(I),onFocus:pe(I),className:$(j,"ffe-searchable-dropdown","ffe-searchable-dropdown--multi")},d.createElement("div",{className:"ffe-searchable-dropdown__input",onClick:function(){var a;(a=Z.current)===null||a===void 0||a.click()}},se?(o=t.selectedItems)===null||o===void 0?void 0:o.map(function(a,g){return d.createElement(nt,{as:"button",type:"button",size:"sm",key:g,"aria-label":"".concat(a[M[0]],", fjern valg"),onClick:function(Y){Y.stopPropagation(),h({type:"RemoveItem",payload:{items:[a]}}),m==null||m(a,"removed"),q.current=!0}},a[M[0]])}):d.createElement(rt,{size:"sm","aria-label":me(A,t.selectedItems.length),as:"span",role:"presentation",className:"ffe-chip--multiple-selected"},me(A,t.selectedItems.length)),d.createElement("input",Q({},c,{placeholder:t.selectedItems.length>0?"":c==null?void 0:c.placeholder,ref:Ue([Z,n]),id:I,"aria-labelledby":z,onClick:ze,onChange:function(a){var g;(g=c==null?void 0:c.onChange)===null||g===void 0||g.call(c,a),h({type:"InputChange",payload:{inputValue:a.target.value}})},onFocus:function(){return _e(!0)},onBlur:Be,"aria-describedby":[c==null?void 0:c["aria-describedby"],t.noMatch&&ie].filter(Boolean).join(" ")||void 0,value:L(t.inputValue),type:"text",role:"combobox",autoComplete:"off","aria-controls":(p=(l=H.current)===null||l===void 0?void 0:l.getAttribute("id"))!==null&&p!==void 0?p:void 0,"aria-expanded":t.isExpanded&&!!t.listToRender.length,"aria-autocomplete":"list","aria-haspopup":"listbox","aria-activedescendant":t.highlightedIndex>=0&&(u=(r=(y=K[t.highlightedIndex])===null||y===void 0?void 0:y.current)===null||r===void 0?void 0:r.getAttribute("id"))!==null&&u!==void 0?u:void 0,"aria-invalid":(b=Le["aria-invalid"])!==null&&b!==void 0?b:F}))),d.createElement(Ke,{ref:oe,isExpanded:t.isExpanded,onClick:function(){return h({type:"ToggleButtonPressed"})},locale:A,isLoading:ee}),d.createElement(He,{ref:H,isExpanded:t.isExpanded},t.isExpanded&&d.createElement(Ye,{isEqual:U,listToRender:t.listToRender,OptionBody:Se,highlightedIndex:t.highlightedIndex,dropdownAttributes:M,locale:A,refs:K,onChange:function(a){var g=ge(t.selectedItems,a,U);h({type:"ItemOnClick",payload:{items:[a],actionType:g}}),q.current=!0,m==null||m(a,g)},noMatch:t.noMatch?f:void 0,noMatchMessageId:ie,selectedItems:t.selectedItems}),w&&d.createElement("div",{className:"ffe-searchable-dropdown__list--post-list-element"},w)))}var Ee=qe(ft);Ee.__docgenInfo={description:"",methods:[],displayName:"SearchableDropdownMultiSelect"};const ht="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgLTk2MCA5NjAgOTYwIiB3aWR0aD0iMjQiPgogICAgPHBhdGgKICAgICAgICBkPSJtMzgyLTM2Mi4xMzEgMzM0LjY5Ni0zMzQuNjk1UTczMC4zNy03MTAuNSA3NDguNzYxLTcxMC41dDMyLjA2NSAxMy42NzRRNzk0LjUtNjgzLjE1MiA3OTQuNS02NjQuMzhxMCAxOC43NzEtMTMuNjc0IDMyLjQ0NUw0MTQuMDY1LTI2NC40MTNRNDAwLjM5MS0yNTAuNzM5IDM4Mi0yNTAuNzM5dC0zMi4wNjUtMTMuNjc0TDE3OC40MTMtNDM1LjkzNXEtMTMuNjc0LTEzLjY3NC0xMy4yOTQtMzIuNDQ1LjM4MS0xOC43NzIgMTQuMDU1LTMyLjQ0NlQyMTEuNjItNTE0LjVxMTguNzcxIDAgMzIuNDQ1IDEzLjY3NEwzODItMzYyLjEzMVoiIC8+Cjwvc3ZnPg==";function Ce({item:e,isHighlighted:n,showBalance:i,locale:o}){return d.createElement("div",{className:$("ffe-searchable-dropdown__list-item-body","ffe-searchable-dropdown__list-item-body--condensed",{"ffe-searchable-dropdown__list-item-body--highlighted":n})},d.createElement("div",{className:"ffe-searchable-dropdown__list-item-body-content"},e.name,d.createElement("div",{className:"ffe-searchable-dropdown__list-item-body-details"},d.createElement(J,{className:"ffe-searchable-dropdown__detail-text"},Ze(e.accountNumber)),i&&d.createElement(J,{className:"ffe-searchable-dropdown__detail-text"},Xe(e.balance,o,e.currencyCode)))),d.createElement(Ne,{fileUrl:ht,size:"md",className:"ffe-searchable-dropdown__selected-icon"}))}Ce.__docgenInfo={description:"",methods:[],displayName:"AccountMultiselectOptionBody",props:{item:{required:!0,tsType:{name:"Item"},description:""},isHighlighted:{required:!0,tsType:{name:"boolean"},description:""},showBalance:{required:!0,tsType:{name:"boolean"},description:""},locale:{required:!0,tsType:{name:"union",raw:"'nb' | 'nn' | 'en'",elements:[{name:"literal",value:"'nb'"},{name:"literal",value:"'nn'"},{name:"literal",value:"'en'"}]},description:""}}};const W=({id:e,className:n,locale:i="nb",selectedAccounts:o,showBalance:l=!1,noMatches:p,accounts:y,onChange:r,labelledById:u,optionBody:b,postListElement:I,onReset:z,inputProps:j,formatAccountNumber:N=!0,ariaInvalid:M,onOpen:T,onClose:x,onColoredBg:_,maxRenderedDropdownElements:m,...c})=>{const S=N?$e:void 0;return d.createElement(Ee,{id:e,labelledById:u,inputProps:j,dropdownAttributes:l?["name","accountNumber","balance"]:["name","accountNumber"],postListElement:I,dropdownList:y,noMatch:p??{text:et[i].noMatch},formatter:S,onChange:r,searchAttributes:["name","accountNumber"],locale:i,optionBody:({item:w,isHighlighted:f,...R})=>b?d.createElement(b,{item:w,isHighlighted:f,...R}):d.createElement(Ce,{item:w,isHighlighted:f,locale:i,showBalance:l}),ariaInvalid:c["aria-invalid"]??M,searchMatcher:Je,selectedItems:o,onOpen:T,onClose:x,maxRenderedDropdownElements:m,isEqual:(w,f)=>w.accountNumber===f.accountNumber})};W.__docgenInfo={description:"",methods:[],displayName:"AccountSelectorMulti",props:{accounts:{required:!0,tsType:{name:"Array",elements:[{name:"T"}],raw:"T[]"},description:`Array of objects:
 {
     accountNumber: string.isRequired,
     name: string.isRequired,
     balance: number,
     currencyCode: string,
 }`},className:{required:!1,tsType:{name:"string"},description:""},id:{required:!0,tsType:{name:"string"},description:""},locale:{required:!1,tsType:{name:"union",raw:"'nb' | 'nn' | 'en'",elements:[{name:"literal",value:"'nb'"},{name:"literal",value:"'nn'"},{name:"literal",value:"'en'"}]},description:"",defaultValue:{value:"'nb'",computed:!1}},noMatches:{required:!1,tsType:{name:"signature",type:"object",raw:`{
    text: string;
    dropdownList?: T[];
}`,signature:{properties:[{key:"text",value:{name:"string",required:!0}},{key:"dropdownList",value:{name:"Array",elements:[{name:"T"}],raw:"T[]",required:!1}}]}},description:"Overrides default string for all locales."},inputProps:{required:!1,tsType:{name:"ReactComponentPropsWithoutRef",raw:"React.ComponentPropsWithoutRef<'input'>",elements:[{name:"literal",value:"'input'"}]},description:"Props passed to the input field"},onChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(account: T, actionType: 'selected' | 'removed') => void",signature:{arguments:[{type:{name:"T"},name:"account"},{type:{name:"union",raw:"'selected' | 'removed'",elements:[{name:"literal",value:"'selected'"},{name:"literal",value:"'removed'"}]},name:"actionType"}],return:{name:"void"}}},description:"Called when a value is selected"},showBalance:{required:!1,tsType:{name:"boolean"},description:"Default false.",defaultValue:{value:"false",computed:!1}},formatAccountNumber:{required:!1,tsType:{name:"boolean"},description:"Default true.",defaultValue:{value:"true",computed:!1}},labelledById:{required:!1,tsType:{name:"string"},description:"id of element that labels input field"},optionBody:{required:!1,tsType:{name:"ReactComponentType",raw:`React.ComponentType<{
    item: T;
    dropdownAttributes: (keyof T)[];
    isHighlighted: boolean;
    locale: Locale;
    isSelected: boolean;
}>`,elements:[{name:"signature",type:"object",raw:`{
    item: T;
    dropdownAttributes: (keyof T)[];
    isHighlighted: boolean;
    locale: Locale;
    isSelected: boolean;
}`,signature:{properties:[{key:"item",value:{name:"T",required:!0}},{key:"dropdownAttributes",value:{name:"Array",elements:[{name:"unknown"}],raw:"(keyof T)[]",required:!0}},{key:"isHighlighted",value:{name:"boolean",required:!0}},{key:"locale",value:{name:"union",raw:"'nb' | 'nn' | 'en'",elements:[{name:"literal",value:"'nb'"},{name:"literal",value:"'nn'"},{name:"literal",value:"'en'"}],required:!0}},{key:"isSelected",value:{name:"boolean",required:!0}}]}}]},description:"Custom element to use for each item in the dropdown list"},postListElement:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Element to be shown below dropDownList"},"aria-invalid":{required:!1,tsType:{name:"AriaAttributes['aria-invalid']",raw:"AriaAttributes['aria-invalid']"},description:"Sets aria-invalid on input field"},ariaInvalid:{required:!1,tsType:{name:"AriaAttributes['aria-invalid']",raw:"AriaAttributes['aria-invalid']"},description:""},onOpen:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Prop passed to the dropdown list"},onClose:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},selectedAccounts:{required:!1,tsType:{name:"Array",elements:[{name:"T"}],raw:"T[]"},description:""},onReset:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Called when emptying the input field and moving focus away from the account selector"},onColoredBg:{required:!1,tsType:{name:"boolean"},description:"Adds alternative styling for better contrast on certain backgrounds"},maxRenderedDropdownElements:{required:!1,tsType:{name:"number"},description:"Limits number of rendered dropdown elements"}}};const gt={title:"Komponenter/Account-selector/AccountSelectorMulti",component:W},xe=[{accountNumber:"23200355148",name:"Brukskonto",currencyCode:"NOK",balance:1337},{accountNumber:"23201253845",name:"Sparekonto",currencyCode:"NOK",balance:13337},{accountNumber:"23207166200",name:"Min ekstrakonto",currencyCode:"NOK",balance:12345},{accountNumber:"23200840259",name:"Min siste konto",currencyCode:"NOK",balance:54321}],k={args:{accounts:xe,id:"input-id",locale:"nb",formatAccountNumber:!0,onColoredBg:!1},render:function(n){return d.createElement(Te,{label:"Velg konto",inputId:n.id,labelId:n.labelledById,onColoredBg:n.onColoredBg},d.createElement(W,{...n}))}},V={args:{...k.args},render:function(n){const[i,o]=v.useState([]);return d.createElement("div",null,d.createElement(Te,{label:"Velg konto",inputId:n.id,labelId:n.labelledById,onColoredBg:n.onColoredBg},l=>d.createElement(d.Fragment,null,d.createElement(W,{...l,...n,selectedAccounts:i,onChange:(p,y)=>{o(y==="selected"?r=>r.concat(p):r=>r.filter(u=>u.accountNumber!==p.accountNumber))}}),d.createElement(ot,{type:"button",onClick:()=>{o(xe)}},"Velg alle"))))}};var ve,ye,be;k.parameters={...k.parameters,docs:{...(ve=k.parameters)==null?void 0:ve.docs,source:{originalSource:`{
  args: {
    accounts,
    id: 'input-id',
    locale: 'nb',
    formatAccountNumber: true,
    onColoredBg: false
  },
  render: function Render(args) {
    return <InputGroup label="Velg konto" inputId={args.id} labelId={args.labelledById} onColoredBg={args.onColoredBg}>
                <AccountSelectorMulti {...args} />
            </InputGroup>;
  }
}`,...(be=(ye=k.parameters)==null?void 0:ye.docs)==null?void 0:be.source}}};var Me,we,Ie;V.parameters={...V.parameters,docs:{...(Me=V.parameters)==null?void 0:Me.docs,source:{originalSource:`{
  args: {
    ...Standard.args
  },
  render: function Render(args) {
    const [selectedAccounts, setSelectedAccounts] = useState<Account[]>([]);
    return <div>
                <InputGroup label="Velg konto" inputId={args.id} labelId={args.labelledById} onColoredBg={args.onColoredBg}>
                    {inputProps => <>
                            <AccountSelectorMulti {...inputProps} {...args} selectedAccounts={selectedAccounts} onChange={(account, actionType) => {
            if (actionType === 'selected') {
              setSelectedAccounts(prevAccounts => prevAccounts.concat(account));
            } else {
              setSelectedAccounts(prevAccounts => prevAccounts.filter(it => it.accountNumber !== account.accountNumber));
            }
          }} />
                            <TertiaryButton type="button" onClick={() => {
            setSelectedAccounts(accounts);
          }}>
                                Velg alle
                            </TertiaryButton>
                        </>}
                </InputGroup>
            </div>;
  }
}`,...(Ie=(we=V.parameters)==null?void 0:we.docs)==null?void 0:Ie.source}}};const vt=["Standard","ControlledState"],Et=Object.freeze(Object.defineProperty({__proto__:null,ControlledState:V,Standard:k,__namedExportsOrder:vt,default:gt},Symbol.toStringTag,{value:"Module"}));export{Et as A,k as S};
