import{R as e,r as f}from"./index-DQDNmYQF.js";import{c as z}from"./index-D2FocPV0.js";import{g as mt,a as _,f as pt,u as gt,b as ft,c as bt,d as yt,i as re,e as be,h as It,j as ht,k as wt,m as St,T as vt,L as Et,R as kt,l as Tt,s as ye,n as At,o as xt,p as Rt,q as Bt}from"./ListBox-C59Vucjw.js";import{S as le,i as Nt}from"./index-DV_rwQs_.js";import{C as Ie}from"./ChipRemovable-DkAX6prY.js";import{I}from"./InputGroup-BOYEkbY1.js";import{T as Vt}from"./TertiaryButton-BbKu_d3-.js";import{A as he}from"./ActionButton-YHQylMjD.js";function et({item:o,dropdownAttributes:r,isHighlighted:l,isSelected:s,locale:u}){const[c,...g]=r,t=o[c],i=g.map((h,T)=>e.createElement(le,{"aria-label":h==="balance"?mt(u,o[h]):void 0,className:"ffe-searchable-dropdown__detail-text",key:T},o[h]));return e.createElement("div",{className:z("ffe-searchable-dropdown__list-item-body",{"ffe-searchable-dropdown__list-item-body--highlighted":l,"ffe-searchable-dropdown__list-item-body--condensed":!!i.length})},e.createElement("span",{"aria-hidden":"true",className:z("ffe-checkbox","ffe-checkbox--no-margin",{"ffe-checkbox--checked":s})}),e.createElement("div",{className:"ffe-searchable-dropdown__list-item-body-content"},e.createElement("span",{className:"ffe-searchable-dropdown__list-item-title"},t),!!i.length&&e.createElement("div",{className:"ffe-searchable-dropdown__list-item-body-details"},i)))}et.__docgenInfo={description:"",methods:[],displayName:"MultiselectOptionBody",props:{item:{required:!0,tsType:{name:"Item"},description:""},dropdownAttributes:{required:!0,tsType:{name:"Array",elements:[{name:"unknown"}],raw:"(keyof Item)[]"},description:""},isHighlighted:{required:!0,tsType:{name:"boolean"},description:""},isSelected:{required:!0,tsType:{name:"boolean"},description:""},locale:{required:!0,tsType:{name:"union",raw:"'nb' | 'nn' | 'en'",elements:[{name:"literal",value:"'nb'"},{name:"literal",value:"'nn'"},{name:"literal",value:"'en'"}]},description:""}}};const ae=(o,r,l,s)=>l==="removed"?o.filter(u=>!r.some(c=>s(u,c))):o.concat(r).filter((u,c,g)=>g.findIndex(t=>s(u,t))===c),we=(o,r,l)=>o!=null&&o.some(s=>l(s,r))?"removed":"selected",_t=({searchAttributes:o,dropdownList:r,noMatchDropdownList:l,maxRenderedDropdownElements:s,searchMatcher:u,isEqual:c,showSelectAll:g})=>(t,i)=>{var h,T,w,E,U,W,x,S,R,P,X,B;switch(i.type){case"InputKeyDownEscape":return{...t,noMatch:!1,isExpanded:!1,highlightedIndex:-1,inputValue:""};case"InputClick":{const{noMatch:p,listToRender:v}=_({inputValue:t.inputValue,searchAttributes:o,maxRenderedDropdownElements:s,dropdownList:r,noMatchDropdownList:l,searchMatcher:u,showAllItemsInDropdown:t.inputValue.trim()===""});return{...t,isExpanded:!0,listToRender:v,noMatch:p}}case"RemoveItem":return(h=i.payload)!=null&&h.items?{...t,highlightedIndex:-1,selectedItems:ae(t.selectedItems,i.payload.items,"removed",c),inputValue:""}:t;case"InputChange":{const{noMatch:p,listToRender:v}=_({inputValue:((T=i.payload)==null?void 0:T.inputValue)??"",searchAttributes:o,maxRenderedDropdownElements:s,dropdownList:r,noMatchDropdownList:l,searchMatcher:u,showAllItemsInDropdown:!1}),J=g&&!p&&v.length>0;return{...t,isExpanded:!0,inputValue:((w=i.payload)==null?void 0:w.inputValue)??"",listToRender:v,highlightedIndex:((U=(E=i.payload)==null?void 0:E.inputValue)==null?void 0:U.trim())===""||v.length===0?-1:J?1:0,noMatch:p}}case"ToggleButtonPressed":return{...t,isExpanded:!t.isExpanded};case"ItemSelectedProgrammatically":return((W=i.payload)==null?void 0:W.items)!==void 0?{...t,selectedItems:i.payload.items}:t;case"SelectAllToggled":return(x=i.payload)!=null&&x.items?{...t,isExpanded:!0,selectedItems:ae(t.selectedItems,i.payload.items,i.payload.actionType??"selected",c)}:t;case"ItemOnClick":case"InputKeyDownEnter":if((S=i.payload)!=null&&S.items){const{noMatch:p,listToRender:v}=_({inputValue:"",searchAttributes:o,maxRenderedDropdownElements:s,dropdownList:r,noMatchDropdownList:l,searchMatcher:u,showAllItemsInDropdown:!0});return{...t,isExpanded:!0,highlightedIndex:t.inputValue.trim()===""?((R=i.payload)==null?void 0:R.highlightedIndex)??-1:-1,selectedItems:ae(t.selectedItems,i.payload.items,((P=i.payload)==null?void 0:P.actionType)??"selected",c),listToRender:v,inputValue:"",noMatch:p}}return t;case"InputKeyDownArrowDown":case"InputKeyDownArrowUp":{const p=document.activeElement;return(p==null?void 0:p.getAttribute("role"))==="combobox"?{...t,isExpanded:!0,highlightedIndex:((X=i.payload)==null?void 0:X.highlightedIndex)??-1}:t}case"FocusMovedOutSide":return{...t,isExpanded:!1,highlightedIndex:-1,inputValue:""};case"DropdownListPropUpdated":return{...t,..._({inputValue:t.inputValue,searchAttributes:o,maxRenderedDropdownElements:s,dropdownList:r,noMatchDropdownList:l,searchMatcher:u,showAllItemsInDropdown:((B=t.inputValue)==null?void 0:B.trim().length)===0})};default:return t}},tt=e.forwardRef(({label:o,isSelected:r,isIndeterminate:l,isHighlighted:s,onClick:u},c)=>{const g=f.useId();return e.createElement("div",{id:g,role:"option","aria-selected":r,ref:c,onClick:u,className:"ffe-searchable-dropdown__list-item-container ffe-searchable-dropdown__select-all"},e.createElement("div",{className:z("ffe-searchable-dropdown__list-item-body",{"ffe-searchable-dropdown__list-item-body--highlighted":s})},e.createElement("span",{"aria-hidden":"true",className:z("ffe-checkbox","ffe-checkbox--no-margin",{"ffe-checkbox--checked":r,"ffe-checkbox--indeterminate":l&&!r})}),e.createElement("div",{className:"ffe-searchable-dropdown__list-item-body-content"},e.createElement("span",{className:"ffe-searchable-dropdown__list-item-title"},o))))});tt.__docgenInfo={description:"",methods:[],displayName:"SelectAllOption",props:{label:{required:!0,tsType:{name:"string"},description:'Text to show in the row, typically "Velg alle"'},isSelected:{required:!0,tsType:{name:"boolean"},description:"True when every visible item is selected"},isIndeterminate:{required:!0,tsType:{name:"boolean"},description:`True when some, but not every, visible item is selected. Shows the
checkbox with a dash. Visual only — the row's \`aria-selected\` is still
false. The label stays "Velg alle" regardless of selection state; the
checkbox communicates whether all, some, or none are selected.`},isHighlighted:{required:!0,tsType:{name:"boolean"},description:""},onClick:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};const Dt="ArrowUp",Ft="ArrowDown",qt="Escape",Mt="Enter",Lt="Tab",Gt="Backspace";function Ct({id:o,labelledById:r,className:l,dropdownList:s,dropdownAttributes:u,searchAttributes:c,maxRenderedDropdownElements:g=Number.MAX_SAFE_INTEGER,onChange:t,inputProps:i,optionBody:h,postListElement:T,noMatch:w,locale:E="nb",ariaInvalid:U,formatter:W=n=>n,searchMatcher:x,selectedItems:S,isLoading:R=!1,onOpen:P,onClose:X,showNumberSelectedAfter:B,isEqual:p=Nt,showSelectAll:v=!1,selectAllText:J,...nt},rt){var pe,ge,fe;const[n,m]=f.useReducer(_t({dropdownList:s,searchAttributes:c,maxRenderedDropdownElements:g,noMatchDropdownList:w==null?void 0:w.dropdownList,searchMatcher:x,isEqual:p,showSelectAll:v}),{isExpanded:!1,selectedItems:[],highlightedIndex:-1,inputValue:""},a=>({...a,..._({inputValue:a.inputValue,searchAttributes:c,maxRenderedDropdownElements:g,dropdownList:s,noMatchDropdownList:w==null?void 0:w.dropdownList,searchMatcher:x,showAllItemsInDropdown:!!(S!=null&&S.length)})})),se=gt({listToRender:n.listToRender}),[at,lt]=f.useState(!1),Q=f.useRef(null),ie=f.useRef(null),st=h||et,Y=f.useRef(null),oe=f.useRef(null),de=f.useId(),k=f.useRef(!1),Z=B===void 0||n.selectedItems.length<=B,it=()=>{m({type:"InputClick"}),k.current=!0},ot=a=>{i!=null&&i.onBlur&&i.onBlur(a)};ft({hasFocus:at,isExpanded:n.isExpanded,isLoading:R,locale:E,resultCount:n.listToRender.length,selectedValue:(pe=n.selectedItems[n.selectedItems.length-1])==null?void 0:pe[c[0]],selectedCount:n.selectedItems.length}),f.useLayoutEffect(()=>{var a;k.current&&((a=Q.current)==null||a.focus(),k.current=!1)}),f.useEffect(()=>{m({type:"DropdownListPropUpdated"})},[s,m]),bt({isExpanded:n.isExpanded,onClose:X,onOpen:P});const dt=f.useCallback(()=>m({type:"FocusMovedOutSide"}),[]);f.useEffect(()=>{S!=null&&m({type:"ItemSelectedProgrammatically",payload:{items:S}})},[S,m]),yt({id:o,containerRef:ie,handleFocusMovedOutside:dt});const ee=v&&!n.noMatch&&n.listToRender.length>0,N=ee?1:0,V=n.listToRender.length+N,te=a=>ee&&a===0,$=n.listToRender.length>0&&n.listToRender.every(a=>re(p,a,n.selectedItems)),ut=!$&&n.listToRender.some(a=>re(p,a,n.selectedItems)),ue=J??xt(E),ne=a=>{var d;return te(a)?oe.current:((d=se[a-N])==null?void 0:d.current)??null},ce=a=>{te(a)?Rt(ue):a>=0&&Bt(n.listToRender[a-N],u)},me=()=>{const a=$?"removed":"selected",d=$?n.listToRender:n.listToRender.filter(A=>!re(p,A,n.selectedItems));d.length&&(m({type:"SelectAllToggled",payload:{items:d,actionType:a}}),t==null||t(d,a))},ct=a=>{if(a.key===Mt&&n.highlightedIndex>=0){if(a.preventDefault(),te(n.highlightedIndex)){me();return}const d=n.listToRender[n.highlightedIndex-N],A=we(n.selectedItems,d,p);m({type:"InputKeyDownEnter",payload:{items:[d],actionType:A,highlightedIndex:n.highlightedIndex}}),t==null||t([d],A);return}else if(a.key===qt){m({type:"InputKeyDownEscape"});return}else if(a.key===Dt){if(a.preventDefault(),V){const d=Tt(n.highlightedIndex,V);m({type:"InputKeyDownArrowUp",payload:{highlightedIndex:d}}),ce(d),ye(ne(d),Y.current)}return}else if(a.key===Ft){if(a.preventDefault(),V){const d=At(n.highlightedIndex,V);m({type:"InputKeyDownArrowDown",payload:{highlightedIndex:d}}),ce(d),ye(ne(d),Y.current)}}else if(a.key===Gt){if(n.inputValue===""&&n.selectedItems.length>0){const d=Z?[n.selectedItems[n.selectedItems.length-1]]:[...n.selectedItems];m({type:"RemoveItem",payload:{items:d,actionType:"removed"}}),t==null||t(d,"removed"),Z||(k.current=!0)}}else if(a.key===Lt){m({type:"FocusMovedOutSide"});return}};return e.createElement("div",{onKeyDown:ct,ref:ie,onMouseDown:be(o),onFocus:be(o),className:z(l,"ffe-searchable-dropdown","ffe-searchable-dropdown--multi","ffe-default-mode")},e.createElement("div",{className:"ffe-searchable-dropdown__input",onClick:()=>{var a;(a=Q.current)==null||a.click()}},Z?(ge=n.selectedItems)==null?void 0:ge.map((a,d)=>e.createElement(Ie,{as:"button",type:"button",size:"sm",key:d,"aria-label":It(E,a[u[0]]),onClick:A=>{A.stopPropagation(),m({type:"RemoveItem",payload:{items:[a]}}),t==null||t([a],"removed"),k.current=!0}},a[u[0]])):e.createElement(Ie,{as:"button",type:"button",size:"sm","aria-label":ht(E,n.selectedItems.length),className:"ffe-chip--multiple-selected",onClick:a=>{a.stopPropagation();const d=[...n.selectedItems];m({type:"RemoveItem",payload:{items:d}}),t==null||t(d,"removed"),k.current=!0}},wt(E,n.selectedItems.length)),e.createElement("input",{...i,placeholder:n.selectedItems.length>0?"":i==null?void 0:i.placeholder,ref:St([Q,rt]),id:o,"aria-labelledby":r,onClick:it,onChange:a=>{var d;(d=i==null?void 0:i.onChange)==null||d.call(i,a),m({type:"InputChange",payload:{inputValue:a.target.value}})},onFocus:()=>{lt(!0),m({type:"InputClick"})},onBlur:ot,"aria-describedby":[i==null?void 0:i["aria-describedby"],n.noMatch&&de].filter(Boolean).join(" ")||void 0,value:W(n.inputValue),type:"text",role:"combobox",autoComplete:"off","aria-controls":`${o}-listbox`,"aria-expanded":n.isExpanded&&!!V,"aria-autocomplete":"list","aria-haspopup":"listbox","aria-activedescendant":n.highlightedIndex>=0?((fe=ne(n.highlightedIndex))==null?void 0:fe.getAttribute("id"))??void 0:void 0,"aria-invalid":nt["aria-invalid"]??U})),e.createElement(vt,{isExpanded:n.isExpanded,onClick:()=>m({type:"ToggleButtonPressed"}),isLoading:R}),e.createElement(Et,{ref:Y,isExpanded:n.isExpanded,id:`${o}-listbox`,labelledById:r},n.isExpanded&&ee&&e.createElement(tt,{ref:oe,label:ue,isSelected:$,isIndeterminate:ut,isHighlighted:n.highlightedIndex===0,onClick:()=>{me(),k.current=!0}}),n.isExpanded&&e.createElement(kt,{isEqual:p,listToRender:n.listToRender,OptionBody:st,highlightedIndex:n.highlightedIndex-N,dropdownAttributes:u,locale:E,refs:se,onChange:a=>{const d=we(n.selectedItems,a,p);m({type:"ItemOnClick",payload:{items:[a],actionType:d}}),k.current=!0,t==null||t([a],d)},noMatch:n.noMatch?w:void 0,noMatchMessageId:de,selectedItems:n.selectedItems}),T&&e.createElement("div",{className:"ffe-searchable-dropdown__list--post-list-element"},T)))}const y=pt(Ct);y.__docgenInfo={description:"",methods:[],displayName:"SearchableDropdownMultiSelect",props:{id:{required:!0,tsType:{name:"string"},description:"Id of drop down"},labelledById:{required:!1,tsType:{name:"string"},description:"Id of element that labels input field"},className:{required:!1,tsType:{name:"string"},description:"Extra class"},dropdownList:{required:!0,tsType:{name:"Array",elements:[{name:"Item"}],raw:"Item[]"},description:"List of objects to be displayed in dropdown"},selectedItems:{required:!1,tsType:{name:"union",raw:"Item[] | null",elements:[{name:"Array",elements:[{name:"Item"}],raw:"Item[]"},{name:"null"}]},description:"The selected items to be displayed in the input field. If not specified, uses internal state to decide."},dropdownAttributes:{required:!0,tsType:{name:"Array",elements:[{name:"unknown"}],raw:"(keyof Item)[]"},description:"Array of attributes to be displayed in list. The first will be the title and the chip value"},searchAttributes:{required:!0,tsType:{name:"Array",elements:[{name:"unknown"}],raw:"(keyof Item)[]"},description:"Array of attributes used when filtering search"},inputProps:{required:!1,tsType:{name:"ReactComponentProps",raw:"React.ComponentProps<'input'>",elements:[{name:"literal",value:"'input'"}]},description:"Props used on input field"},maxRenderedDropdownElements:{required:!1,tsType:{name:"number"},description:"Limits number of rendered dropdown elements",defaultValue:{value:"Number.MAX_SAFE_INTEGER",computed:!0}},onChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(items: Item[], actionType: 'selected' | 'removed') => void",signature:{arguments:[{type:{name:"Array",elements:[{name:"Item"}],raw:"Item[]"},name:"items"},{type:{name:"union",raw:"'selected' | 'removed'",elements:[{name:"literal",value:"'selected'"},{name:"literal",value:"'removed'"}]},name:"actionType"}],return:{name:"void"}}},description:"Called when the selection changes. `items` contains only the items that\nchanged (the delta), never the full selection."},optionBody:{required:!1,tsType:{name:"ReactComponentType",raw:`React.ComponentType<{
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
visible items. When a search is active it only applies to the matches.`,defaultValue:{value:"false",computed:!1}},selectAllText:{required:!1,tsType:{name:"string"},description:"Overrides the default label on the select all row, for all locales"}}};const j=[{color:"Gul",displayName:"Bananer i klase, økologisk",amount:5},{color:"Grønn",displayName:"Pære",amount:3},{color:"Grønn, Rød",displayName:"Eple",amount:1},{color:"Oransje",displayName:"Appelsin",amount:2},{color:"Lilla, Grønn",displayName:"Druer",amount:1},{color:"Oransje",displayName:"Mandarin",amount:2},{color:"Grønn",displayName:"Kiwi",amount:1}],Ot=[{organizationName:"Bedriften",organizationNumber:"912602370",quantityUnprocessedMessages:5,balance:"12 345 678,00 kr"},{organizationName:"Sønn & co",organizationNumber:"812602372",quantityUnprocessedMessages:3,balance:"12 345,00 kr"},{organizationName:"Beslag skytter",organizationNumber:"812602552",quantityUnprocessedMessages:1,balance:"34 234 343,00 kr"}],Ht=({item:o,isHighlighted:r})=>e.createElement("div",{style:{padding:"8px",background:r?"#ff9100":"white"}},e.createElement("div",null,o.color),e.createElement("div",{style:{display:"flex",justifyContent:"space-between",backgroundColor:"red"}},e.createElement(le,{className:"ffe-searchable-dropdown__detail-text"},o.displayName),e.createElement(le,{className:"ffe-searchable-dropdown__detail-text"},o.amount," ulest"))),Kt={title:"Komponenter/Searchable-dropdown/SearchableDropdownMultiSelect",component:y,argTypes:{postListElement:{options:["html","text","none"],mapping:{html:e.createElement("span",null,"Some text describing the list"),text:"Some text describing the list",none:void 0}},optionBody:{options:["custom","none"],mapping:{custom:Ht,none:void 0}}}},b={args:{id:"id",labelledById:"labelled-by-id",dropdownList:j,dropdownAttributes:["displayName"],searchAttributes:["displayName","color"],noMatch:{text:"Søket ga ingen treff på frukt"},inputProps:{placeholder:"Søk"},postListElement:"none"},render:function({id:r,labelledById:l,...s}){return e.createElement(e.Fragment,null,e.createElement(I,{label:"Velg frukt",labelId:l,inputId:r},e.createElement(y,{id:r,...s})))}},D={args:{...b.args,dropdownAttributes:["displayName","color","amount"]},render:function({id:r,labelledById:l,...s}){return e.createElement(I,{label:"Velg frukt",labelId:l,inputId:r},e.createElement(y,{id:r,labelledById:l,...s}))}},F={args:{...b.args,dropdownList:Ot,dropdownAttributes:["organizationName","balance"]},render:function({id:r,labelledById:l,...s}){return e.createElement(I,{label:"Velg",labelId:l,inputId:r},e.createElement(y,{id:r,labelledById:l,...s}))}},q={args:{...b.args,selectedItems:[j[2],j[4]]},render:function({id:r,labelledById:l,...s}){const[u,c]=f.useState(s.selectedItems);return e.createElement(e.Fragment,null,e.createElement(I,{label:"Velg frukt",labelId:l,inputId:r},e.createElement(y,{id:r,labelledById:l,...s,selectedItems:u,onChange:(g,t)=>{c(t==="selected"?[...u??[],...g]:(u??[]).filter(i=>!g.includes(i)))}})),e.createElement(he,{type:"button",onClick:()=>{c([])}},"Tøm listen"),e.createElement(he,{type:"button",onClick:()=>{c([...u??[],j[1]])}},"Legg til i listen"))}},M={args:{...b.args,postListElement:e.createElement("span",null,"Some text describing the list")},render:function({id:r,labelledById:l,...s}){return e.createElement(I,{label:"Velg frukt",labelId:l,inputId:r},e.createElement(y,{id:r,labelledById:l,...s}))}},L={args:{...b.args,showNumberSelectedAfter:2},render:function({id:r,labelledById:l,...s}){return e.createElement(I,{label:"Velg frukt",labelId:l,inputId:r},e.createElement(y,{id:r,labelledById:l,...s}))}},G={args:{...b.args,dropdownAttributes:["displayName","color","amount"]},render:function(r){const[l,s]=f.useState([j[0]]);return e.createElement("div",null,e.createElement(I,{label:"Velg frukt",inputId:r.id,labelId:r.labelledById},u=>e.createElement(e.Fragment,null,e.createElement(y,{...u,...r,selectedItems:l,onChange:(c,g)=>{s(g==="selected"?t=>t.concat(c):t=>t.filter(i=>!c.some(h=>h.displayName===i.displayName)))}}),e.createElement(Vt,{type:"button",onClick:()=>{s([])}},"Tøm listen"))))}},C={args:{...b.args,showSelectAll:!0},render:function({id:r,labelledById:l,...s}){return e.createElement(I,{label:"Velg frukt",labelId:l,inputId:r},e.createElement(y,{id:r,labelledById:l,...s}))}},O={args:{...b.args,showSelectAll:!0,selectAllText:"Velg all frukt"},render:function({id:r,labelledById:l,...s}){return e.createElement(I,{label:"Velg frukt",labelId:l,inputId:r},e.createElement(y,{id:r,labelledById:l,...s}))}},H={args:{...b.args},render:function({id:r,labelledById:l,...s}){return e.createElement(e.Fragment,null,e.createElement(I,{label:"Velg frukt",labelId:l,inputId:r},u=>e.createElement(y,{labelledById:l,...s,...u,"aria-invalid":"true"})))}},K={args:{...b.args},render:function({id:r,labelledById:l,...s}){return e.createElement(e.Fragment,null,e.createElement(I,{label:"Velg frukt",labelId:l,inputId:r,description:"Velg de du liker aller best"},u=>e.createElement(y,{labelledById:l,...s,...u})))}};var Se,ve,Ee;b.parameters={...b.parameters,docs:{...(Se=b.parameters)==null?void 0:Se.docs,source:{originalSource:`{
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
}`,...(Ee=(ve=b.parameters)==null?void 0:ve.docs)==null?void 0:Ee.source}}};var ke,Te,Ae;D.parameters={...D.parameters,docs:{...(ke=D.parameters)==null?void 0:ke.docs,source:{originalSource:`{
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
}`,...(Ae=(Te=D.parameters)==null?void 0:Te.docs)==null?void 0:Ae.source}}};var xe,Re,Be;F.parameters={...F.parameters,docs:{...(xe=F.parameters)==null?void 0:xe.docs,source:{originalSource:`{
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
}`,...(Be=(Re=F.parameters)==null?void 0:Re.docs)==null?void 0:Be.source}}};var Ne,Ve,_e;q.parameters={...q.parameters,docs:{...(Ne=q.parameters)==null?void 0:Ne.docs,source:{originalSource:`{
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
}`,...(_e=(Ve=q.parameters)==null?void 0:Ve.docs)==null?void 0:_e.source}}};var De,Fe,qe;M.parameters={...M.parameters,docs:{...(De=M.parameters)==null?void 0:De.docs,source:{originalSource:`{
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
}`,...(qe=(Fe=M.parameters)==null?void 0:Fe.docs)==null?void 0:qe.source}}};var Me,Le,Ge;L.parameters={...L.parameters,docs:{...(Me=L.parameters)==null?void 0:Me.docs,source:{originalSource:`{
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
}`,...(Ge=(Le=L.parameters)==null?void 0:Le.docs)==null?void 0:Ge.source}}};var Ce,Oe,He;G.parameters={...G.parameters,docs:{...(Ce=G.parameters)==null?void 0:Ce.docs,source:{originalSource:`{
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
}`,...(He=(Oe=G.parameters)==null?void 0:Oe.docs)==null?void 0:He.source}}};var Ke,je,ze;C.parameters={...C.parameters,docs:{...(Ke=C.parameters)==null?void 0:Ke.docs,source:{originalSource:`{
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
}`,...(ze=(je=C.parameters)==null?void 0:je.docs)==null?void 0:ze.source}}};var Ue,We,Pe;O.parameters={...O.parameters,docs:{...(Ue=O.parameters)==null?void 0:Ue.docs,source:{originalSource:`{
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
}`,...(Pe=(We=O.parameters)==null?void 0:We.docs)==null?void 0:Pe.source}}};var Xe,$e,Je;H.parameters={...H.parameters,docs:{...(Xe=H.parameters)==null?void 0:Xe.docs,source:{originalSource:`{
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
}`,...(Je=($e=H.parameters)==null?void 0:$e.docs)==null?void 0:Je.source}}};var Qe,Ye,Ze;K.parameters={...K.parameters,docs:{...(Qe=K.parameters)==null?void 0:Qe.docs,source:{originalSource:`{
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
}`,...(Ze=(Ye=K.parameters)==null?void 0:Ye.docs)==null?void 0:Ze.source}}};const jt=["Standard","MultipleDataResults","DropdownAttributes","PreselectedItems","PostListElement","ShowNumberSelected","ControlledState","SelectAll","SelectAllCustomTexts","AriaInvalid","WithDescription"],Yt=Object.freeze(Object.defineProperty({__proto__:null,AriaInvalid:H,ControlledState:G,DropdownAttributes:F,MultipleDataResults:D,PostListElement:M,PreselectedItems:q,SelectAll:C,SelectAllCustomTexts:O,ShowNumberSelected:L,Standard:b,WithDescription:K,__namedExportsOrder:jt,default:Kt},Symbol.toStringTag,{value:"Module"}));export{Yt as S,K as W,b as a,C as b,O as c,L as d};
