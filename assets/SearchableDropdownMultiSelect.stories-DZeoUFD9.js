import{R as e,r as g}from"./index-DQDNmYQF.js";import{c as U}from"./index-D2FocPV0.js";import{g as mt,a as D,f as pt,u as gt,b as ft,c as yt,d as bt,i as re,e as ye,h as It,j as ht,k as wt,m as St,T as vt,L as Et,R as kt,l as Tt,s as be,n as At,o as xt,p as Rt,q as Bt}from"./ListBox-C59Vucjw.js";import{S as le,i as Nt}from"./index-DV_rwQs_.js";import{C as Ie}from"./ChipRemovable-DkAX6prY.js";import{I}from"./InputGroup-BOYEkbY1.js";import{T as Vt}from"./TertiaryButton-BbKu_d3-.js";import{A as he}from"./ActionButton-YHQylMjD.js";function et({item:o,dropdownAttributes:r,isHighlighted:l,isSelected:s,locale:u}){const[c,...p]=r,n=o[c],i=p.map((h,T)=>e.createElement(le,{"aria-label":h==="balance"?mt(u,o[h]):void 0,className:"ffe-searchable-dropdown__detail-text",key:T},o[h]));return e.createElement("div",{className:U("ffe-searchable-dropdown__list-item-body",{"ffe-searchable-dropdown__list-item-body--highlighted":l,"ffe-searchable-dropdown__list-item-body--condensed":!!i.length})},e.createElement("span",{"aria-hidden":"true",className:U("ffe-checkbox","ffe-checkbox--no-margin",{"ffe-checkbox--checked":s})}),e.createElement("div",{className:"ffe-searchable-dropdown__list-item-body-content"},e.createElement("span",{className:"ffe-searchable-dropdown__list-item-title"},n),!!i.length&&e.createElement("div",{className:"ffe-searchable-dropdown__list-item-body-details"},i)))}et.__docgenInfo={description:"",methods:[],displayName:"MultiselectOptionBody",props:{item:{required:!0,tsType:{name:"Item"},description:""},dropdownAttributes:{required:!0,tsType:{name:"Array",elements:[{name:"unknown"}],raw:"(keyof Item)[]"},description:""},isHighlighted:{required:!0,tsType:{name:"boolean"},description:""},isSelected:{required:!0,tsType:{name:"boolean"},description:""},locale:{required:!0,tsType:{name:"union",raw:"'nb' | 'nn' | 'en'",elements:[{name:"literal",value:"'nb'"},{name:"literal",value:"'nn'"},{name:"literal",value:"'en'"}]},description:""}}};const ae=(o,r,l,s)=>l==="removed"?o.filter(u=>!r.some(c=>s(u,c))):o.concat(r).filter((u,c,p)=>p.findIndex(n=>s(u,n))===c),we=(o,r,l)=>o!=null&&o.some(s=>l(s,r))?"removed":"selected",_t=({searchAttributes:o,dropdownList:r,noMatchDropdownList:l,maxRenderedDropdownElements:s,searchMatcher:u,isEqual:c,showSelectAll:p})=>(n,i)=>{var h,T,w,E,W,P,x,S,R,X,$,B;switch(i.type){case"InputKeyDownEscape":return{...n,noMatch:!1,isExpanded:!1,highlightedIndex:-1,inputValue:""};case"InputClick":{const{noMatch:y,listToRender:v}=D({inputValue:n.inputValue,searchAttributes:o,maxRenderedDropdownElements:s,dropdownList:r,noMatchDropdownList:l,searchMatcher:u,showAllItemsInDropdown:n.inputValue.trim()===""});return{...n,isExpanded:!0,listToRender:v,noMatch:y}}case"RemoveItem":return(h=i.payload)!=null&&h.items?{...n,highlightedIndex:-1,selectedItems:ae(n.selectedItems,i.payload.items,"removed",c),inputValue:""}:n;case"InputChange":{const{noMatch:y,listToRender:v}=D({inputValue:((T=i.payload)==null?void 0:T.inputValue)??"",searchAttributes:o,maxRenderedDropdownElements:s,dropdownList:r,noMatchDropdownList:l,searchMatcher:u,showAllItemsInDropdown:!1}),Q=p&&!y&&v.length>0;return{...n,isExpanded:!0,inputValue:((w=i.payload)==null?void 0:w.inputValue)??"",listToRender:v,highlightedIndex:((W=(E=i.payload)==null?void 0:E.inputValue)==null?void 0:W.trim())===""||v.length===0?-1:Q?1:0,noMatch:y}}case"ToggleButtonPressed":return{...n,isExpanded:!n.isExpanded};case"ItemSelectedProgrammatically":return((P=i.payload)==null?void 0:P.items)!==void 0?{...n,selectedItems:i.payload.items}:n;case"SelectAllToggled":return(x=i.payload)!=null&&x.items?{...n,isExpanded:!0,selectedItems:ae(n.selectedItems,i.payload.items,i.payload.actionType??"selected",c)}:n;case"ItemOnClick":case"InputKeyDownEnter":if((S=i.payload)!=null&&S.items){const{noMatch:y,listToRender:v}=D({inputValue:"",searchAttributes:o,maxRenderedDropdownElements:s,dropdownList:r,noMatchDropdownList:l,searchMatcher:u,showAllItemsInDropdown:!0});return{...n,isExpanded:!0,highlightedIndex:n.inputValue.trim()===""?((R=i.payload)==null?void 0:R.highlightedIndex)??-1:-1,selectedItems:ae(n.selectedItems,i.payload.items,((X=i.payload)==null?void 0:X.actionType)??"selected",c),listToRender:v,inputValue:"",noMatch:y}}return n;case"InputKeyDownArrowDown":case"InputKeyDownArrowUp":return{...n,isExpanded:!0,highlightedIndex:(($=i.payload)==null?void 0:$.highlightedIndex)??-1};case"FocusMovedOutSide":return{...n,isExpanded:!1,highlightedIndex:-1,inputValue:""};case"DropdownListPropUpdated":return{...n,...D({inputValue:n.inputValue,searchAttributes:o,maxRenderedDropdownElements:s,dropdownList:r,noMatchDropdownList:l,searchMatcher:u,showAllItemsInDropdown:((B=n.inputValue)==null?void 0:B.trim().length)===0})};default:return n}},tt=e.forwardRef(({label:o,isSelected:r,isIndeterminate:l,isHighlighted:s,onClick:u},c)=>{const p=g.useId();return e.createElement("div",{id:p,role:"option","aria-selected":r,ref:c,onClick:u,className:"ffe-searchable-dropdown__list-item-container ffe-searchable-dropdown__select-all"},e.createElement("div",{className:U("ffe-searchable-dropdown__list-item-body",{"ffe-searchable-dropdown__list-item-body--highlighted":s})},e.createElement("span",{"aria-hidden":"true",className:U("ffe-checkbox","ffe-checkbox--no-margin",{"ffe-checkbox--checked":r,"ffe-checkbox--indeterminate":l&&!r})}),e.createElement("div",{className:"ffe-searchable-dropdown__list-item-body-content"},e.createElement("span",{className:"ffe-searchable-dropdown__list-item-title"},o))))});tt.__docgenInfo={description:"",methods:[],displayName:"SelectAllOption",props:{label:{required:!0,tsType:{name:"string"},description:'Text to show in the row, typically "Velg alle"'},isSelected:{required:!0,tsType:{name:"boolean"},description:"True when every visible item is selected"},isIndeterminate:{required:!0,tsType:{name:"boolean"},description:`True when some, but not every, visible item is selected. Shows the
checkbox with a dash. Visual only — the row's \`aria-selected\` is still
false. The label stays "Velg alle" regardless of selection state; the
checkbox communicates whether all, some, or none are selected.`},isHighlighted:{required:!0,tsType:{name:"boolean"},description:""},onClick:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};const Dt="ArrowUp",Ft="ArrowDown",qt="Escape",Mt="Enter",Lt="Tab",Gt="Backspace";function Ct({id:o,labelledById:r,className:l,dropdownList:s,dropdownAttributes:u,searchAttributes:c,maxRenderedDropdownElements:p=Number.MAX_SAFE_INTEGER,onChange:n,inputProps:i,optionBody:h,postListElement:T,noMatch:w,locale:E="nb",ariaInvalid:W,formatter:P=t=>t,searchMatcher:x,selectedItems:S,isLoading:R=!1,onOpen:X,onClose:$,showNumberSelectedAfter:B,isEqual:y=Nt,showSelectAll:v=!1,selectAllText:Q,...nt},rt){var pe,ge,fe;const[t,m]=g.useReducer(_t({dropdownList:s,searchAttributes:c,maxRenderedDropdownElements:p,noMatchDropdownList:w==null?void 0:w.dropdownList,searchMatcher:x,isEqual:y,showSelectAll:v}),{isExpanded:!1,selectedItems:[],highlightedIndex:-1,inputValue:""},a=>({...a,...D({inputValue:a.inputValue,searchAttributes:c,maxRenderedDropdownElements:p,dropdownList:s,noMatchDropdownList:w==null?void 0:w.dropdownList,searchMatcher:x,showAllItemsInDropdown:!!(S!=null&&S.length)})})),se=gt({listToRender:t.listToRender}),[at,lt]=g.useState(!1),N=g.useRef(null),ie=g.useRef(null),st=h||et,Y=g.useRef(null),oe=g.useRef(null),de=g.useId(),k=g.useRef(!1),Z=B===void 0||t.selectedItems.length<=B,it=()=>{m({type:"InputClick"}),k.current=!0},ot=a=>{i!=null&&i.onBlur&&i.onBlur(a)};ft({hasFocus:at,isExpanded:t.isExpanded,isLoading:R,locale:E,resultCount:t.listToRender.length,selectedValue:(pe=t.selectedItems[t.selectedItems.length-1])==null?void 0:pe[c[0]],selectedCount:t.selectedItems.length}),g.useLayoutEffect(()=>{var a;k.current&&((a=N.current)==null||a.focus(),k.current=!1)}),g.useEffect(()=>{m({type:"DropdownListPropUpdated"})},[s,m]),yt({isExpanded:t.isExpanded,onClose:$,onOpen:X});const dt=g.useCallback(()=>m({type:"FocusMovedOutSide"}),[]);g.useEffect(()=>{S!=null&&m({type:"ItemSelectedProgrammatically",payload:{items:S}})},[S,m]),bt({id:o,containerRef:ie,handleFocusMovedOutside:dt});const ee=v&&!t.noMatch&&t.listToRender.length>0,V=ee?1:0,_=t.listToRender.length+V,te=a=>ee&&a===0,J=t.listToRender.length>0&&t.listToRender.every(a=>re(y,a,t.selectedItems)),ut=!J&&t.listToRender.some(a=>re(y,a,t.selectedItems)),ue=Q??xt(E),ne=a=>{var d;return te(a)?oe.current:((d=se[a-V])==null?void 0:d.current)??null},ce=a=>{te(a)?Rt(ue):a>=0&&Bt(t.listToRender[a-V],u)},me=()=>{const a=J?"removed":"selected",d=J?t.listToRender:t.listToRender.filter(A=>!re(y,A,t.selectedItems));d.length&&(m({type:"SelectAllToggled",payload:{items:d,actionType:a}}),n==null||n(d,a))},ct=a=>{if(a.key===Mt&&t.highlightedIndex>=0){if(a.preventDefault(),te(t.highlightedIndex)){me();return}const d=t.listToRender[t.highlightedIndex-V],A=we(t.selectedItems,d,y);m({type:"InputKeyDownEnter",payload:{items:[d],actionType:A,highlightedIndex:t.highlightedIndex}}),n==null||n([d],A);return}else if(a.key===qt){m({type:"InputKeyDownEscape"});return}else if(a.key===Dt){if(a.preventDefault(),_&&a.target===N.current){const d=Tt(t.highlightedIndex,_);m({type:"InputKeyDownArrowUp",payload:{highlightedIndex:d}}),ce(d),be(ne(d),Y.current)}return}else if(a.key===Ft){if(a.preventDefault(),_&&a.target===N.current){const d=At(t.highlightedIndex,_);m({type:"InputKeyDownArrowDown",payload:{highlightedIndex:d}}),ce(d),be(ne(d),Y.current)}}else if(a.key===Gt){if(t.inputValue===""&&t.selectedItems.length>0){const d=Z?[t.selectedItems[t.selectedItems.length-1]]:[...t.selectedItems];m({type:"RemoveItem",payload:{items:d,actionType:"removed"}}),n==null||n(d,"removed"),Z||(k.current=!0)}}else if(a.key===Lt){m({type:"FocusMovedOutSide"});return}};return e.createElement("div",{onKeyDown:ct,ref:ie,onMouseDown:ye(o),onFocus:ye(o),className:U(l,"ffe-searchable-dropdown","ffe-searchable-dropdown--multi","ffe-default-mode")},e.createElement("div",{className:"ffe-searchable-dropdown__input",onClick:()=>{var a;(a=N.current)==null||a.click()}},Z?(ge=t.selectedItems)==null?void 0:ge.map((a,d)=>e.createElement(Ie,{as:"button",type:"button",size:"sm",key:d,"aria-label":It(E,a[u[0]]),onClick:A=>{A.stopPropagation(),m({type:"RemoveItem",payload:{items:[a]}}),n==null||n([a],"removed"),k.current=!0}},a[u[0]])):e.createElement(Ie,{as:"button",type:"button",size:"sm","aria-label":ht(E,t.selectedItems.length),className:"ffe-chip--multiple-selected",onClick:a=>{a.stopPropagation();const d=[...t.selectedItems];m({type:"RemoveItem",payload:{items:d}}),n==null||n(d,"removed"),k.current=!0}},wt(E,t.selectedItems.length)),e.createElement("input",{...i,placeholder:t.selectedItems.length>0?"":i==null?void 0:i.placeholder,ref:St([N,rt]),id:o,"aria-labelledby":r,onClick:it,onChange:a=>{var d;(d=i==null?void 0:i.onChange)==null||d.call(i,a),m({type:"InputChange",payload:{inputValue:a.target.value}})},onFocus:()=>{lt(!0),m({type:"InputClick"})},onBlur:ot,"aria-describedby":[i==null?void 0:i["aria-describedby"],t.noMatch&&de].filter(Boolean).join(" ")||void 0,value:P(t.inputValue),type:"text",role:"combobox",autoComplete:"off","aria-controls":`${o}-listbox`,"aria-expanded":t.isExpanded&&!!_,"aria-autocomplete":"list","aria-haspopup":"listbox","aria-activedescendant":t.highlightedIndex>=0?((fe=ne(t.highlightedIndex))==null?void 0:fe.getAttribute("id"))??void 0:void 0,"aria-invalid":nt["aria-invalid"]??W})),e.createElement(vt,{isExpanded:t.isExpanded,onClick:()=>m({type:"ToggleButtonPressed"}),isLoading:R}),e.createElement(Et,{ref:Y,isExpanded:t.isExpanded,id:`${o}-listbox`,labelledById:r},t.isExpanded&&ee&&e.createElement(tt,{ref:oe,label:ue,isSelected:J,isIndeterminate:ut,isHighlighted:t.highlightedIndex===0,onClick:()=>{me(),k.current=!0}}),t.isExpanded&&e.createElement(kt,{isEqual:y,listToRender:t.listToRender,OptionBody:st,highlightedIndex:t.highlightedIndex-V,dropdownAttributes:u,locale:E,refs:se,onChange:a=>{const d=we(t.selectedItems,a,y);m({type:"ItemOnClick",payload:{items:[a],actionType:d}}),k.current=!0,n==null||n([a],d)},noMatch:t.noMatch?w:void 0,noMatchMessageId:de,selectedItems:t.selectedItems}),T&&e.createElement("div",{className:"ffe-searchable-dropdown__list--post-list-element"},T)))}const b=pt(Ct);b.__docgenInfo={description:"",methods:[],displayName:"SearchableDropdownMultiSelect",props:{id:{required:!0,tsType:{name:"string"},description:"Id of drop down"},labelledById:{required:!1,tsType:{name:"string"},description:"Id of element that labels input field"},className:{required:!1,tsType:{name:"string"},description:"Extra class"},dropdownList:{required:!0,tsType:{name:"Array",elements:[{name:"Item"}],raw:"Item[]"},description:"List of objects to be displayed in dropdown"},selectedItems:{required:!1,tsType:{name:"union",raw:"Item[] | null",elements:[{name:"Array",elements:[{name:"Item"}],raw:"Item[]"},{name:"null"}]},description:"The selected items to be displayed in the input field. If not specified, uses internal state to decide."},dropdownAttributes:{required:!0,tsType:{name:"Array",elements:[{name:"unknown"}],raw:"(keyof Item)[]"},description:"Array of attributes to be displayed in list. The first will be the title and the chip value"},searchAttributes:{required:!0,tsType:{name:"Array",elements:[{name:"unknown"}],raw:"(keyof Item)[]"},description:"Array of attributes used when filtering search"},inputProps:{required:!1,tsType:{name:"ReactComponentProps",raw:"React.ComponentProps<'input'>",elements:[{name:"literal",value:"'input'"}]},description:"Props used on input field"},maxRenderedDropdownElements:{required:!1,tsType:{name:"number"},description:"Limits number of rendered dropdown elements",defaultValue:{value:"Number.MAX_SAFE_INTEGER",computed:!0}},onChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(items: Item[], actionType: 'selected' | 'removed') => void",signature:{arguments:[{type:{name:"Array",elements:[{name:"Item"}],raw:"Item[]"},name:"items"},{type:{name:"union",raw:"'selected' | 'removed'",elements:[{name:"literal",value:"'selected'"},{name:"literal",value:"'removed'"}]},name:"actionType"}],return:{name:"void"}}},description:"Called when the selection changes. `items` contains only the items that\nchanged (the delta), never the full selection."},optionBody:{required:!1,tsType:{name:"ReactComponentType",raw:`React.ComponentType<{
    item: Item;
    dropdownAttributes: (keyof Item)[];
    isHighlighted: boolean;
    locale: Locale;
    isSelected: boolean;
}>`,elements:[{name:"signature",type:"object",raw:`{
    item: Item;
    dropdownAttributes: (keyof Item)[];
    isHighlighted: boolean;
    locale: Locale;
    isSelected: boolean;
}`,signature:{properties:[{key:"item",value:{name:"Item",required:!0}},{key:"dropdownAttributes",value:{name:"Array",elements:[{name:"unknown"}],raw:"(keyof Item)[]",required:!0}},{key:"isHighlighted",value:{name:"boolean",required:!0}},{key:"locale",value:{name:"union",raw:"'nb' | 'nn' | 'en'",elements:[{name:"literal",value:"'nb'"},{name:"literal",value:"'nn'"},{name:"literal",value:"'en'"}],required:!0}},{key:"isSelected",value:{name:"boolean",required:!0}}]}}]},description:"Custom element to use for each item in dropDownList"},postListElement:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Element to be shown below dropDownList"},noMatch:{required:!1,tsType:{name:"signature",type:"object",raw:`{
    text?: string;
    dropdownList?: Item[];
}`,signature:{properties:[{key:"text",value:{name:"string",required:!1}},{key:"dropdownList",value:{name:"Array",elements:[{name:"Item"}],raw:"Item[]",required:!1}}]}},description:"Message and a dropdownList to use when no match"},locale:{required:!1,tsType:{name:"union",raw:"'nb' | 'nn' | 'en'",elements:[{name:"literal",value:"'nb'"},{name:"literal",value:"'nn'"},{name:"literal",value:"'en'"}]},description:"Locale to use for translations",defaultValue:{value:"'nb'",computed:!1}},"aria-invalid":{required:!1,tsType:{name:"AriaAttributes['aria-invalid']",raw:"AriaAttributes['aria-invalid']"},description:"aria-invalid attribute"},ariaInvalid:{required:!1,tsType:{name:"AriaAttributes['aria-invalid']",raw:"AriaAttributes['aria-invalid']"},description:""},formatter:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string) => string",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"string"}}},description:"Function used to format the input field value",defaultValue:{value:"value => value",computed:!1}},searchMatcher:{required:!1,tsType:{name:"signature",type:"function",raw:`(
    inputValue: string,
    searchAttributes: Array<keyof Item>,
) => (item: Item) => boolean`,signature:{arguments:[{type:{name:"string"},name:"inputValue"},{type:{name:"Array",elements:[{name:"Item"}],raw:"Array<keyof Item>"},name:"searchAttributes"}],return:{name:"signature",type:"function",raw:"(item: Item) => boolean",signature:{arguments:[{type:{name:"Item"},name:"item"}],return:{name:"boolean"}}}}},description:`Function used to decide if an item matches the input field value
(inputValue: string, searchAttributes: string[]) => (item) => boolean`},isLoading:{required:!1,tsType:{name:"boolean"},description:`For situations where the dropdownList prop will be updated at a later point in time.
That is, if the consumer first sends down an initial value before sending down data
that has loaded.`,defaultValue:{value:"false",computed:!1}},onOpen:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Function used when dropdown opens"},onClose:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Function used when dropdown closes"},showNumberSelectedAfter:{required:!1,tsType:{name:"number"},description:`Using this will give a text "X selected" instead of chips,
after a certain number of selected items.
If you always want "X selected" showing, pass in 0`},isEqual:{required:!1,tsType:{name:"signature",type:"function",raw:"(itemA: Item, itemB: Item) => boolean",signature:{arguments:[{type:{name:"Item"},name:"itemA"},{type:{name:"Item"},name:"itemB"}],return:{name:"boolean"}}},description:"Custom compare between objects. Default is deep equals",defaultValue:{value:"isDeepEqual",computed:!0}},showSelectAll:{required:!1,tsType:{name:"boolean"},description:`Shows a row at the top of the dropdown for selecting or removing all
visible items. When a search is active it only applies to the matches.`,defaultValue:{value:"false",computed:!1}},selectAllText:{required:!1,tsType:{name:"string"},description:"Overrides the default label on the select all row, for all locales"}}};const z=[{color:"Gul",displayName:"Bananer i klase, økologisk",amount:5},{color:"Grønn",displayName:"Pære",amount:3},{color:"Grønn, Rød",displayName:"Eple",amount:1},{color:"Oransje",displayName:"Appelsin",amount:2},{color:"Lilla, Grønn",displayName:"Druer",amount:1},{color:"Oransje",displayName:"Mandarin",amount:2},{color:"Grønn",displayName:"Kiwi",amount:1}],Ot=[{organizationName:"Bedriften",organizationNumber:"912602370",quantityUnprocessedMessages:5,balance:"12 345 678,00 kr"},{organizationName:"Sønn & co",organizationNumber:"812602372",quantityUnprocessedMessages:3,balance:"12 345,00 kr"},{organizationName:"Beslag skytter",organizationNumber:"812602552",quantityUnprocessedMessages:1,balance:"34 234 343,00 kr"}],Ht=({item:o,isHighlighted:r})=>e.createElement("div",{style:{padding:"8px",background:r?"#ff9100":"white"}},e.createElement("div",null,o.color),e.createElement("div",{style:{display:"flex",justifyContent:"space-between",backgroundColor:"red"}},e.createElement(le,{className:"ffe-searchable-dropdown__detail-text"},o.displayName),e.createElement(le,{className:"ffe-searchable-dropdown__detail-text"},o.amount," ulest"))),Kt={title:"Komponenter/Searchable-dropdown/SearchableDropdownMultiSelect",component:b,argTypes:{postListElement:{options:["html","text","none"],mapping:{html:e.createElement("span",null,"Some text describing the list"),text:"Some text describing the list",none:void 0}},optionBody:{options:["custom","none"],mapping:{custom:Ht,none:void 0}}}},f={args:{id:"id",labelledById:"labelled-by-id",dropdownList:z,dropdownAttributes:["displayName"],searchAttributes:["displayName","color"],noMatch:{text:"Søket ga ingen treff på frukt"},inputProps:{placeholder:"Søk"},postListElement:"none"},render:function({id:r,labelledById:l,...s}){return e.createElement(e.Fragment,null,e.createElement(I,{label:"Velg frukt",labelId:l,inputId:r},e.createElement(b,{id:r,...s})))}},F={args:{...f.args,dropdownAttributes:["displayName","color","amount"]},render:function({id:r,labelledById:l,...s}){return e.createElement(I,{label:"Velg frukt",labelId:l,inputId:r},e.createElement(b,{id:r,labelledById:l,...s}))}},q={args:{...f.args,dropdownList:Ot,dropdownAttributes:["organizationName","balance"]},render:function({id:r,labelledById:l,...s}){return e.createElement(I,{label:"Velg",labelId:l,inputId:r},e.createElement(b,{id:r,labelledById:l,...s}))}},M={args:{...f.args,selectedItems:[z[2],z[4]]},render:function({id:r,labelledById:l,...s}){const[u,c]=g.useState(s.selectedItems);return e.createElement(e.Fragment,null,e.createElement(I,{label:"Velg frukt",labelId:l,inputId:r},e.createElement(b,{id:r,labelledById:l,...s,selectedItems:u,onChange:(p,n)=>{c(n==="selected"?[...u??[],...p]:(u??[]).filter(i=>!p.includes(i)))}})),e.createElement(he,{type:"button",onClick:()=>{c([])}},"Tøm listen"),e.createElement(he,{type:"button",onClick:()=>{c([...u??[],z[1]])}},"Legg til i listen"))}},L={args:{...f.args,postListElement:e.createElement("span",null,"Some text describing the list")},render:function({id:r,labelledById:l,...s}){return e.createElement(I,{label:"Velg frukt",labelId:l,inputId:r},e.createElement(b,{id:r,labelledById:l,...s}))}},G={args:{...f.args,showNumberSelectedAfter:2},render:function({id:r,labelledById:l,...s}){return e.createElement(I,{label:"Velg frukt",labelId:l,inputId:r},e.createElement(b,{id:r,labelledById:l,...s}))}},C={args:{...f.args,dropdownAttributes:["displayName","color","amount"]},render:function(r){const[l,s]=g.useState([z[0]]);return e.createElement("div",null,e.createElement(I,{label:"Velg frukt",inputId:r.id,labelId:r.labelledById},u=>e.createElement(e.Fragment,null,e.createElement(b,{...u,...r,selectedItems:l,onChange:(c,p)=>{s(p==="selected"?n=>n.concat(c):n=>n.filter(i=>!c.some(h=>h.displayName===i.displayName)))}}),e.createElement(Vt,{type:"button",onClick:()=>{s([])}},"Tøm listen"))))}},O={args:{...f.args,showSelectAll:!0},render:function({id:r,labelledById:l,...s}){return e.createElement(I,{label:"Velg frukt",labelId:l,inputId:r},e.createElement(b,{id:r,labelledById:l,...s}))}},H={args:{...f.args,showSelectAll:!0,selectAllText:"Velg all frukt"},render:function({id:r,labelledById:l,...s}){return e.createElement(I,{label:"Velg frukt",labelId:l,inputId:r},e.createElement(b,{id:r,labelledById:l,...s}))}},K={args:{...f.args},render:function({id:r,labelledById:l,...s}){return e.createElement(e.Fragment,null,e.createElement(I,{label:"Velg frukt",labelId:l,inputId:r},u=>e.createElement(b,{labelledById:l,...s,...u,"aria-invalid":"true"})))}},j={args:{...f.args},render:function({id:r,labelledById:l,...s}){return e.createElement(e.Fragment,null,e.createElement(I,{label:"Velg frukt",labelId:l,inputId:r,description:"Velg de du liker aller best"},u=>e.createElement(b,{labelledById:l,...s,...u})))}};var Se,ve,Ee;f.parameters={...f.parameters,docs:{...(Se=f.parameters)==null?void 0:Se.docs,source:{originalSource:`{
  args: {
    id: 'id',
    labelledById: 'labelled-by-id',
    dropdownList: fruits,
    dropdownAttributes: ['displayName'],
    searchAttributes: ['displayName', 'color'],
    noMatch: {
      text: 'Søket ga ingen treff på frukt'
    },
    inputProps: {
      placeholder: 'Søk'
    },
    postListElement: 'none'
  },
  render: function Render({
    id,
    labelledById,
    ...args
  }) {
    return <>
                <InputGroup label="Velg frukt" labelId={labelledById} inputId={id}>
                    <SearchableDropdownMultiSelect id={id} {...args} />
                </InputGroup>
            </>;
  }
}`,...(Ee=(ve=f.parameters)==null?void 0:ve.docs)==null?void 0:Ee.source}}};var ke,Te,Ae;F.parameters={...F.parameters,docs:{...(ke=F.parameters)==null?void 0:ke.docs,source:{originalSource:`{
  args: {
    ...Standard.args,
    dropdownAttributes: ['displayName', 'color', 'amount']
  },
  render: function Render({
    id,
    labelledById,
    ...args
  }) {
    return <InputGroup label="Velg frukt" labelId={labelledById} inputId={id}>
                <SearchableDropdownMultiSelect id={id} labelledById={labelledById} {...args} />
            </InputGroup>;
  }
}`,...(Ae=(Te=F.parameters)==null?void 0:Te.docs)==null?void 0:Ae.source}}};var xe,Re,Be;q.parameters={...q.parameters,docs:{...(xe=q.parameters)==null?void 0:xe.docs,source:{originalSource:`{
  args: {
    ...Standard.args,
    dropdownList: companies,
    dropdownAttributes: ['organizationName', 'balance']
  },
  render: function Render({
    id,
    labelledById,
    ...args
  }) {
    return <InputGroup label="Velg" labelId={labelledById} inputId={id}>
                <SearchableDropdownMultiSelect id={id} labelledById={labelledById} {...args} />
            </InputGroup>;
  }
}`,...(Be=(Re=q.parameters)==null?void 0:Re.docs)==null?void 0:Be.source}}};var Ne,Ve,_e;M.parameters={...M.parameters,docs:{...(Ne=M.parameters)==null?void 0:Ne.docs,source:{originalSource:`{
  args: {
    ...Standard.args,
    selectedItems: [fruits[2], fruits[4]]
  },
  render: function Render({
    id,
    labelledById,
    ...args
  }) {
    const [items, setItems] = useState(args.selectedItems);
    return <>
                <InputGroup label="Velg frukt" labelId={labelledById} inputId={id}>
                    <SearchableDropdownMultiSelect id={id} labelledById={labelledById} {...args} selectedItems={items} onChange={(changedItems, actionType) => {
          if (actionType === 'selected') {
            setItems([...(items ?? []), ...changedItems]);
          } else {
            setItems((items ?? []).filter(it => !changedItems.includes(it)));
          }
        }} />
                </InputGroup>
                <ActionButton type="button" onClick={() => {
        setItems([]);
      }}>
                    Tøm listen
                </ActionButton>
                <ActionButton type="button" onClick={() => {
        setItems([...(items ?? []), fruits[1]]);
      }}>
                    Legg til i listen
                </ActionButton>
            </>;
  }
}`,...(_e=(Ve=M.parameters)==null?void 0:Ve.docs)==null?void 0:_e.source}}};var De,Fe,qe;L.parameters={...L.parameters,docs:{...(De=L.parameters)==null?void 0:De.docs,source:{originalSource:`{
  args: {
    ...Standard.args,
    postListElement: <span>Some text describing the list</span>
  },
  render: function Render({
    id,
    labelledById,
    ...args
  }) {
    return <InputGroup label="Velg frukt" labelId={labelledById} inputId={id}>
                <SearchableDropdownMultiSelect id={id} labelledById={labelledById} {...args} />
            </InputGroup>;
  }
}`,...(qe=(Fe=L.parameters)==null?void 0:Fe.docs)==null?void 0:qe.source}}};var Me,Le,Ge;G.parameters={...G.parameters,docs:{...(Me=G.parameters)==null?void 0:Me.docs,source:{originalSource:`{
  args: {
    ...Standard.args,
    showNumberSelectedAfter: 2
  },
  render: function Render({
    id,
    labelledById,
    ...args
  }) {
    return <InputGroup label="Velg frukt" labelId={labelledById} inputId={id}>
                <SearchableDropdownMultiSelect id={id} labelledById={labelledById} {...args} />
            </InputGroup>;
  }
}`,...(Ge=(Le=G.parameters)==null?void 0:Le.docs)==null?void 0:Ge.source}}};var Ce,Oe,He;C.parameters={...C.parameters,docs:{...(Ce=C.parameters)==null?void 0:Ce.docs,source:{originalSource:`{
  args: {
    ...Standard.args,
    dropdownAttributes: ['displayName', 'color', 'amount']
  },
  render: function Render(args) {
    const [selectedFruits, setSelectedFruits] = useState<Fruit[]>([fruits[0]]);
    return <div>
                <InputGroup label="Velg frukt" inputId={args.id} labelId={args.labelledById}>
                    {inputProps => <>
                            <SearchableDropdownMultiSelect {...inputProps} {...args} selectedItems={selectedFruits} onChange={(changedFruits, actionType) => {
            if (actionType === 'selected') {
              setSelectedFruits(prevFruits => prevFruits.concat(changedFruits));
            } else {
              setSelectedFruits(prevFruits => prevFruits.filter(prevFruit => !changedFruits.some(it => it.displayName === prevFruit.displayName)));
            }
          }} />
                            <TertiaryButton type="button" onClick={() => {
            setSelectedFruits([]);
          }}>
                                Tøm listen
                            </TertiaryButton>
                        </>}
                </InputGroup>
            </div>;
  }
}`,...(He=(Oe=C.parameters)==null?void 0:Oe.docs)==null?void 0:He.source}}};var Ke,je,ze;O.parameters={...O.parameters,docs:{...(Ke=O.parameters)==null?void 0:Ke.docs,source:{originalSource:`{
  args: {
    ...Standard.args,
    showSelectAll: true
  },
  render: function Render({
    id,
    labelledById,
    ...args
  }) {
    return <InputGroup label="Velg frukt" labelId={labelledById} inputId={id}>
                <SearchableDropdownMultiSelect id={id} labelledById={labelledById} {...args} />
            </InputGroup>;
  }
}`,...(ze=(je=O.parameters)==null?void 0:je.docs)==null?void 0:ze.source}}};var Ue,We,Pe;H.parameters={...H.parameters,docs:{...(Ue=H.parameters)==null?void 0:Ue.docs,source:{originalSource:`{
  args: {
    ...Standard.args,
    showSelectAll: true,
    selectAllText: 'Velg all frukt'
  },
  render: function Render({
    id,
    labelledById,
    ...args
  }) {
    return <InputGroup label="Velg frukt" labelId={labelledById} inputId={id}>
                <SearchableDropdownMultiSelect id={id} labelledById={labelledById} {...args} />
            </InputGroup>;
  }
}`,...(Pe=(We=H.parameters)==null?void 0:We.docs)==null?void 0:Pe.source}}};var Xe,$e,Je;K.parameters={...K.parameters,docs:{...(Xe=K.parameters)==null?void 0:Xe.docs,source:{originalSource:`{
  args: {
    ...Standard.args
  },
  render: function Render({
    id,
    labelledById,
    ...args
  }) {
    return <>
                <InputGroup label="Velg frukt" labelId={labelledById} inputId={id}>
                    {inputProps => <SearchableDropdownMultiSelect labelledById={labelledById} {...args} {...inputProps} aria-invalid="true" />}
                </InputGroup>
            </>;
  }
}`,...(Je=($e=K.parameters)==null?void 0:$e.docs)==null?void 0:Je.source}}};var Qe,Ye,Ze;j.parameters={...j.parameters,docs:{...(Qe=j.parameters)==null?void 0:Qe.docs,source:{originalSource:`{
  args: {
    ...Standard.args
  },
  render: function Render({
    id,
    labelledById,
    ...args
  }) {
    return <>
                <InputGroup label="Velg frukt" labelId={labelledById} inputId={id} description="Velg de du liker aller best">
                    {inputProps => <SearchableDropdownMultiSelect labelledById={labelledById} {...args} {...inputProps} />}
                </InputGroup>
            </>;
  }
}`,...(Ze=(Ye=j.parameters)==null?void 0:Ye.docs)==null?void 0:Ze.source}}};const jt=["Standard","MultipleDataResults","DropdownAttributes","PreselectedItems","PostListElement","ShowNumberSelected","ControlledState","SelectAll","SelectAllCustomTexts","AriaInvalid","WithDescription"],Yt=Object.freeze(Object.defineProperty({__proto__:null,AriaInvalid:K,ControlledState:C,DropdownAttributes:q,MultipleDataResults:F,PostListElement:L,PreselectedItems:M,SelectAll:O,SelectAllCustomTexts:H,ShowNumberSelected:G,Standard:f,WithDescription:j,__namedExportsOrder:jt,default:Kt},Symbol.toStringTag,{value:"Module"}));export{Yt as S,j as W,f as a,O as b,H as c,G as d};
