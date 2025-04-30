import{R as t,r as g}from"./index-DQDNmYQF.js";import{c as ke}from"./index-QCImZZ3W.js";import{g as qe,a as M,f as Fe,u as Oe,b as Ge,c as Ue,d as He,e as ee,h as te,m as Ke,T as Qe,L as We,R as Ye,i as Xe,s as ne,j as ae,k as Pe}from"./ListBox-iefsrwiY.js";import{S as H,i as Ze}from"./index-DlnE8UeV.js";import{I as $e}from"./Icon-BqsuuMcG.js";import{C as Je,a as et}from"./ChipRemovable-B78FY7Qj.js";import{I as T}from"./InputGroup-DYJmYWjy.js";import{A as re}from"./ActionButton-1mDAcwGA.js";import{T as tt}from"./TertiaryButton-BEMXYxRk.js";const nt="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgLTk2MCA5NjAgOTYwIiB3aWR0aD0iMjQiPgogICAgPHBhdGgKICAgICAgICBkPSJtMzgyLTM2Mi4xMzEgMzM0LjY5Ni0zMzQuNjk1UTczMC4zNy03MTAuNSA3NDguNzYxLTcxMC41dDMyLjA2NSAxMy42NzRRNzk0LjUtNjgzLjE1MiA3OTQuNS02NjQuMzhxMCAxOC43NzEtMTMuNjc0IDMyLjQ0NUw0MTQuMDY1LTI2NC40MTNRNDAwLjM5MS0yNTAuNzM5IDM4Mi0yNTAuNzM5dC0zMi4wNjUtMTMuNjc0TDE3OC40MTMtNDM1LjkzNXEtMTMuNjc0LTEzLjY3NC0xMy4yOTQtMzIuNDQ1LjM4MS0xOC43NzIgMTQuMDU1LTMyLjQ0NlQyMTEuNjItNTE0LjVxMTguNzcxIDAgMzIuNDQ1IDEzLjY3NEwzODItMzYyLjEzMVoiIC8+Cjwvc3ZnPg==";function Me({item:i,dropdownAttributes:a,isHighlighted:o,locale:l}){const[c,...m]=a,r=i[c],n=m.map((d,v)=>t.createElement(H,{"aria-label":d==="balance"?qe(l,i[d]):void 0,className:"ffe-searchable-dropdown__detail-text",key:v},i[d]));return t.createElement("div",{className:ke("ffe-searchable-dropdown__list-item-body",{"ffe-searchable-dropdown__list-item-body--highlighted":o,"ffe-searchable-dropdown__list-item-body--condensed":!!n.length})},t.createElement("div",{className:"ffe-searchable-dropdown__list-item-body-content"},r,!!n.length&&t.createElement("div",{className:"ffe-searchable-dropdown__list-item-body-details"},n)),t.createElement($e,{fileUrl:nt,size:"md",className:"ffe-searchable-dropdown__selected-icon"}))}Me.__docgenInfo={description:"",methods:[],displayName:"MultiselectOptionBody",props:{item:{required:!0,tsType:{name:"Item"},description:""},dropdownAttributes:{required:!0,tsType:{name:"Array",elements:[{name:"unknown"}],raw:"(keyof Item)[]"},description:""},isHighlighted:{required:!0,tsType:{name:"boolean"},description:""},locale:{required:!0,tsType:{name:"union",raw:"'nb' | 'nn' | 'en'",elements:[{name:"literal",value:"'nb'"},{name:"literal",value:"'nn'"},{name:"literal",value:"'en'"}]},description:""}}};const le=(i,a,o,l)=>o==="removed"?i.filter(c=>!a.some(m=>l(c,m))):i.concat(a).filter((c,m,r)=>r.findIndex(n=>l(c,n))===m),se=(i,a,o)=>i!=null&&i.some(l=>o(l,a))?"removed":"selected",at=({searchAttributes:i,dropdownList:a,noMatchDropdownList:o,maxRenderedDropdownElements:l,searchMatcher:c,isEqual:m})=>(r,n)=>{var d,v,S,I,E,z,j,A,b,x,_;switch(n.type){case"InputKeyDownEscape":return{...r,noMatch:!1,isExpanded:!1,highlightedIndex:-1,inputValue:""};case"InputClick":{const{noMatch:y,listToRender:h}=M({inputValue:r.inputValue,searchAttributes:i,maxRenderedDropdownElements:l,dropdownList:a,noMatchDropdownList:o,searchMatcher:c,showAllItemsInDropdown:!0});return{...r,isExpanded:!0,listToRender:h,noMatch:y}}case"RemoveItem":return(d=n.payload)!=null&&d.items?{...r,highlightedIndex:-1,selectedItems:le(r.selectedItems,n.payload.items,"removed",m),inputValue:""}:r;case"InputChange":{const{noMatch:y,listToRender:h}=M({inputValue:((v=n.payload)==null?void 0:v.inputValue)??"",searchAttributes:i,maxRenderedDropdownElements:l,dropdownList:a,noMatchDropdownList:o,searchMatcher:c,showAllItemsInDropdown:!1});return{...r,isExpanded:!0,inputValue:((S=n.payload)==null?void 0:S.inputValue)??"",listToRender:h,highlightedIndex:((E=(I=n.payload)==null?void 0:I.inputValue)==null?void 0:E.trim())===""||h.length===0?-1:0,noMatch:y}}case"ToggleButtonPressed":return{...r,isExpanded:!r.isExpanded};case"ItemSelectedProgrammatically":return((z=n.payload)==null?void 0:z.items)!==void 0?{...r,selectedItems:n.payload.items}:r;case"ItemOnClick":case"InputKeyDownEnter":if((j=n.payload)!=null&&j.items){const{noMatch:y,listToRender:h}=M({inputValue:"",searchAttributes:i,maxRenderedDropdownElements:l,dropdownList:a,noMatchDropdownList:o,searchMatcher:c,showAllItemsInDropdown:!0});return{...r,isExpanded:!0,highlightedIndex:r.inputValue.trim()===""?((A=n.payload)==null?void 0:A.highlightedIndex)??-1:-1,selectedItems:le(r.selectedItems,n.payload.items,((b=n.payload)==null?void 0:b.actionType)??"selected",m),listToRender:h,inputValue:"",noMatch:y}}return r;case"InputKeyDownArrowDown":case"InputKeyDownArrowUp":{const y=document.activeElement;return(y==null?void 0:y.getAttribute("role"))==="combobox"?{...r,isExpanded:!0,highlightedIndex:((x=n.payload)==null?void 0:x.highlightedIndex)??-1}:r}case"FocusMovedOutSide":return{...r,isExpanded:!1,highlightedIndex:-1,inputValue:""};case"DropdownListPropUpdated":return{...r,...M({inputValue:r.inputValue,searchAttributes:i,maxRenderedDropdownElements:l,dropdownList:a,noMatchDropdownList:o,searchMatcher:c,showAllItemsInDropdown:((_=r.inputValue)==null?void 0:_.trim().length)===0})};default:return r}},rt="ArrowUp",lt="ArrowDown",st="Escape",it="Enter",ot="Tab",dt="Backspace";function ut({id:i,labelledById:a,className:o,dropdownList:l,dropdownAttributes:c,searchAttributes:m,maxRenderedDropdownElements:r=Number.MAX_SAFE_INTEGER,onChange:n,inputProps:d,optionBody:v,postListElement:S,noMatch:I,locale:E="nb",ariaInvalid:z,formatter:j=e=>e,searchMatcher:A,selectedItems:b,isLoading:x=!1,onOpen:_,onClose:y,showNumberSelectedAfter:h,isEqual:q=Ze,...Re},De){var X,P,Z,$,J;const[e,p]=g.useReducer(at({dropdownList:l,searchAttributes:m,maxRenderedDropdownElements:r,noMatchDropdownList:I==null?void 0:I.dropdownList,searchMatcher:A,isEqual:q}),{isExpanded:!1,selectedItems:[],highlightedIndex:-1,inputValue:""},s=>({...s,...M({inputValue:s.inputValue,searchAttributes:m,maxRenderedDropdownElements:r,dropdownList:l,noMatchDropdownList:I==null?void 0:I.dropdownList,searchMatcher:A,showAllItemsInDropdown:!!(b!=null&&b.length)})})),F=Oe({listToRender:e.listToRender}),[Be,Ce]=g.useState(!1),U=g.useRef(null),K=g.useRef(null),Ve=v||Me,O=g.useRef(null),Q=g.useId(),k=g.useRef(!1),[W,Y]=g.useState(!0),Le=()=>{p({type:"InputClick"}),k.current=!0},ze=s=>{d!=null&&d.onBlur&&d.onBlur(s)};Ge({hasFocus:Be,isExpanded:e.isExpanded,isLoading:x,locale:E,resultCount:e.listToRender.length,selectedValue:(X=e.selectedItems[e.selectedItems.length-1])==null?void 0:X[m[0]]}),g.useLayoutEffect(()=>{var s;k.current&&((s=U.current)==null||s.focus(),k.current=!1)}),g.useEffect(()=>{p({type:"DropdownListPropUpdated"})},[l,p]),Ue({isExpanded:e.isExpanded,onClose:y,onOpen:_});const je=g.useCallback(()=>p({type:"FocusMovedOutSide"}),[]);g.useEffect(()=>{h!==void 0&&(e.selectedItems.length>h?Y(!1):Y(!0))},[e.selectedItems,h]),g.useEffect(()=>{b!=null&&p({type:"ItemSelectedProgrammatically",payload:{items:b}})},[b,p]),He({id:i,containerRef:K,handleFocusMovedOutside:je});const _e=s=>{if(s.key===it&&e.highlightedIndex>=0){s.preventDefault();const u=e.listToRender[e.highlightedIndex],G=se(e.selectedItems,u,q);p({type:"InputKeyDownEnter",payload:{items:[u],actionType:G,highlightedIndex:e.highlightedIndex}}),n==null||n(u,G);return}else if(s.key===st){p({type:"InputKeyDownEscape"});return}else if(s.key===rt){if(s.preventDefault(),e.listToRender.length){const u=Xe(e.highlightedIndex,e.listToRender.length);p({type:"InputKeyDownArrowUp",payload:{highlightedIndex:u}}),u>=0&&ne(e==null?void 0:e.listToRender[u],c),ae(F[u].current,O.current)}return}else if(s.key===lt){if(s.preventDefault(),e.listToRender.length){const u=Pe(e.highlightedIndex,e.listToRender.length);p({type:"InputKeyDownArrowDown",payload:{highlightedIndex:u}}),u>=0&&ne(e==null?void 0:e.listToRender[u],c),ae(F[u].current,O.current)}}else if(s.key===dt){if(e.inputValue===""&&e.selectedItems.length>0&&W){const u=e.selectedItems[e.selectedItems.length-1];p({type:"RemoveItem",payload:{items:[u],actionType:"removed"}}),n==null||n(u,"removed")}}else if(s.key===ot){p({type:"FocusMovedOutSide"});return}};return t.createElement("div",{onKeyDown:_e,ref:K,onMouseDown:ee(i),onFocus:ee(i),className:ke(o,"ffe-searchable-dropdown","ffe-searchable-dropdown--multi","ffe-default-mode")},t.createElement("div",{className:"ffe-searchable-dropdown__input",onClick:()=>{var s;(s=U.current)==null||s.click()}},W?(P=e.selectedItems)==null?void 0:P.map((s,u)=>t.createElement(Je,{as:"button",type:"button",size:"sm",key:u,"aria-label":`${s[c[0]]}, fjern valg`,onClick:G=>{G.stopPropagation(),p({type:"RemoveItem",payload:{items:[s]}}),n==null||n(s,"removed"),k.current=!0}},s[c[0]])):t.createElement(et,{size:"sm","aria-label":te(E,e.selectedItems.length),as:"span",role:"presentation",className:"ffe-chip--multiple-selected"},te(E,e.selectedItems.length)),t.createElement("input",{...d,placeholder:e.selectedItems.length>0?"":d==null?void 0:d.placeholder,ref:Ke([U,De]),id:i,"aria-labelledby":a,onClick:Le,onChange:s=>{var u;(u=d==null?void 0:d.onChange)==null||u.call(d,s),p({type:"InputChange",payload:{inputValue:s.target.value}})},onFocus:()=>{Ce(!0),p({type:"InputClick"})},onBlur:ze,"aria-describedby":[d==null?void 0:d["aria-describedby"],e.noMatch&&Q].filter(Boolean).join(" ")||void 0,value:j(e.inputValue),type:"text",role:"combobox",autoComplete:"off","aria-controls":((Z=O.current)==null?void 0:Z.getAttribute("id"))??void 0,"aria-expanded":e.isExpanded&&!!e.listToRender.length,"aria-autocomplete":"list","aria-haspopup":"listbox","aria-activedescendant":e.highlightedIndex>=0?((J=($=F[e.highlightedIndex])==null?void 0:$.current)==null?void 0:J.getAttribute("id"))??void 0:void 0,"aria-invalid":Re["aria-invalid"]??z})),t.createElement(Qe,{isExpanded:e.isExpanded,onClick:()=>p({type:"ToggleButtonPressed"}),isLoading:x}),t.createElement(We,{ref:O,isExpanded:e.isExpanded},e.isExpanded&&t.createElement(Ye,{isEqual:q,listToRender:e.listToRender,OptionBody:Ve,highlightedIndex:e.highlightedIndex,dropdownAttributes:c,locale:E,refs:F,onChange:s=>{const u=se(e.selectedItems,s,q);p({type:"ItemOnClick",payload:{items:[s],actionType:u}}),k.current=!0,n==null||n(s,u)},noMatch:e.noMatch?I:void 0,noMatchMessageId:Q,selectedItems:e.selectedItems}),S&&t.createElement("div",{className:"ffe-searchable-dropdown__list--post-list-element"},S)))}const w=Fe(ut);w.__docgenInfo={description:"",methods:[],displayName:"SearchableDropdownMultiSelect",props:{id:{required:!0,tsType:{name:"string"},description:"Id of drop down"},labelledById:{required:!1,tsType:{name:"string"},description:"Id of element that labels input field"},className:{required:!1,tsType:{name:"string"},description:"Extra class"},dropdownList:{required:!0,tsType:{name:"Array",elements:[{name:"Item"}],raw:"Item[]"},description:"List of objects to be displayed in dropdown"},selectedItems:{required:!1,tsType:{name:"union",raw:"Item[] | null",elements:[{name:"Array",elements:[{name:"Item"}],raw:"Item[]"},{name:"null"}]},description:"The selected items to be displayed in the input field. If not specified, uses internal state to decide."},dropdownAttributes:{required:!0,tsType:{name:"Array",elements:[{name:"unknown"}],raw:"(keyof Item)[]"},description:"Array of attributes to be displayed in list. The first will be the title and the chip value"},searchAttributes:{required:!0,tsType:{name:"Array",elements:[{name:"unknown"}],raw:"(keyof Item)[]"},description:"Array of attributes used when filtering search"},inputProps:{required:!1,tsType:{name:"ReactComponentProps",raw:"React.ComponentProps<'input'>",elements:[{name:"literal",value:"'input'"}]},description:"Props used on input field"},maxRenderedDropdownElements:{required:!1,tsType:{name:"number"},description:"Limits number of rendered dropdown elements",defaultValue:{value:"Number.MAX_SAFE_INTEGER",computed:!0}},onChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(item: Item, actionType: 'selected' | 'removed') => void",signature:{arguments:[{type:{name:"Item"},name:"item"},{type:{name:"union",raw:"'selected' | 'removed'",elements:[{name:"literal",value:"'selected'"},{name:"literal",value:"'removed'"}]},name:"actionType"}],return:{name:"void"}}},description:"Called when a value is selected"},optionBody:{required:!1,tsType:{name:"ReactComponentType",raw:`React.ComponentType<{
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
If you always want "X selected" showing, pass in 0`},isEqual:{required:!1,tsType:{name:"signature",type:"function",raw:"(itemA: Item, itemB: Item) => boolean",signature:{arguments:[{type:{name:"Item"},name:"itemA"},{type:{name:"Item"},name:"itemB"}],return:{name:"boolean"}}},description:"Custom compare between objects. Default is deep equals",defaultValue:{value:"isDeepEqual",computed:!0}}}};const N=[{color:"Gul",displayName:"Bananer i klase, økologisk",amount:5},{color:"Grønn",displayName:"Pære",amount:3},{color:"Grønn, Rød",displayName:"Eple",amount:1},{color:"Oransje",displayName:"Appelsin",amount:2},{color:"Lilla, Grønn",displayName:"Druer",amount:1},{color:"Oransje",displayName:"Mandarin",amount:2},{color:"Grønn",displayName:"Kiwi",amount:1}],ct=[{organizationName:"Bedriften",organizationNumber:"912602370",quantityUnprocessedMessages:5,balance:"12 345 678,00 kr"},{organizationName:"Sønn & co",organizationNumber:"812602372",quantityUnprocessedMessages:3,balance:"12 345,00 kr"},{organizationName:"Beslag skytter",organizationNumber:"812602552",quantityUnprocessedMessages:1,balance:"34 234 343,00 kr"}],mt=({item:i,isHighlighted:a})=>t.createElement("div",{style:{padding:"8px",background:a?"#ff9100":"white"}},t.createElement("div",null,i.color),t.createElement("div",{style:{display:"flex",justifyContent:"space-between",backgroundColor:"red"}},t.createElement(H,{className:"ffe-searchable-dropdown__detail-text"},i.displayName),t.createElement(H,{className:"ffe-searchable-dropdown__detail-text"},i.amount," ulest"))),pt={title:"Komponenter/Searchable-dropdown/SearchableDropdownMultiSelect",component:w,argTypes:{postListElement:{options:["html","text","none"],mapping:{html:t.createElement("span",null,"Some text describing the list"),text:"Some text describing the list",none:void 0}},optionBody:{options:["custom","none"],mapping:{custom:mt,none:void 0}}}},f={args:{id:"id",labelledById:"labelled-by-id",dropdownList:N,dropdownAttributes:["displayName"],searchAttributes:["displayName","color"],noMatch:{text:"Søket ga ingen treff på frukt"},inputProps:{placeholder:"Søk"},postListElement:"none"},render:function({id:a,labelledById:o,...l}){return t.createElement(t.Fragment,null,t.createElement(T,{label:"Velg frukt",labelId:o,inputId:a},t.createElement(w,{id:a,...l})))}},R={args:{...f.args,dropdownAttributes:["displayName","color","amount"]},render:function({id:a,labelledById:o,...l}){return t.createElement(T,{label:"Velg frukt",labelId:o,inputId:a},t.createElement(w,{id:a,labelledById:o,...l}))}},D={args:{...f.args,dropdownList:ct,dropdownAttributes:["organizationName","balance"]},render:function({id:a,labelledById:o,...l}){return t.createElement(T,{label:"Velg",labelId:o,inputId:a},t.createElement(w,{id:a,labelledById:o,...l}))}},B={args:{...f.args,selectedItems:[N[2],N[4]]},render:function({id:a,labelledById:o,...l}){const[c,m]=g.useState(l.selectedItems);return t.createElement(t.Fragment,null,t.createElement(T,{label:"Velg frukt",labelId:o,inputId:a},t.createElement(w,{id:a,labelledById:o,...l,selectedItems:c,onChange:(r,n)=>{m(n==="selected"?[...c??[],r]:(c??[]).filter(d=>d!==r))}})),t.createElement(re,{type:"button",onClick:()=>{m([])}},"Tøm listen"),t.createElement(re,{type:"button",onClick:()=>{m([...c??[],N[1]])}},"Legg til i listen"))}},C={args:{...f.args,postListElement:t.createElement("span",null,"Some text describing the list")},render:function({id:a,labelledById:o,...l}){return t.createElement(T,{label:"Velg frukt",labelId:o,inputId:a},t.createElement(w,{id:a,labelledById:o,...l}))}},V={args:{...f.args,showNumberSelectedAfter:2},render:function({id:a,labelledById:o,...l}){return t.createElement(T,{label:"Velg frukt",labelId:o,inputId:a},t.createElement(w,{id:a,labelledById:o,...l}))}},L={args:{...f.args,dropdownAttributes:["displayName","color","amount"]},render:function(a){const[o,l]=g.useState([N[0]]);return t.createElement("div",null,t.createElement(T,{label:"Velg frukt",inputId:a.id,labelId:a.labelledById},c=>t.createElement(t.Fragment,null,t.createElement(w,{...c,...a,selectedItems:o,onChange:(m,r)=>{l(r==="selected"?n=>n.concat(m):n=>n.filter(d=>d.displayName!==m.displayName))}}),t.createElement(tt,{type:"button",onClick:()=>{l(N)}},"Velg alle"))))}};var ie,oe,de;f.parameters={...f.parameters,docs:{...(ie=f.parameters)==null?void 0:ie.docs,source:{originalSource:`{
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
}`,...(de=(oe=f.parameters)==null?void 0:oe.docs)==null?void 0:de.source}}};var ue,ce,me;R.parameters={...R.parameters,docs:{...(ue=R.parameters)==null?void 0:ue.docs,source:{originalSource:`{
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
}`,...(me=(ce=R.parameters)==null?void 0:ce.docs)==null?void 0:me.source}}};var pe,ge,ye;D.parameters={...D.parameters,docs:{...(pe=D.parameters)==null?void 0:pe.docs,source:{originalSource:`{
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
}`,...(ye=(ge=D.parameters)==null?void 0:ge.docs)==null?void 0:ye.source}}};var fe,Ie,be;B.parameters={...B.parameters,docs:{...(fe=B.parameters)==null?void 0:fe.docs,source:{originalSource:`{
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
                    <SearchableDropdownMultiSelect id={id} labelledById={labelledById} {...args} selectedItems={items} onChange={(item, actionType) => {
          if (actionType === 'selected') {
            setItems([...(items ?? []), item]);
          } else {
            setItems((items ?? []).filter(it => it !== item));
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
}`,...(be=(Ie=B.parameters)==null?void 0:Ie.docs)==null?void 0:be.source}}};var he,we,Ee;C.parameters={...C.parameters,docs:{...(he=C.parameters)==null?void 0:he.docs,source:{originalSource:`{
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
}`,...(Ee=(we=C.parameters)==null?void 0:we.docs)==null?void 0:Ee.source}}};var Te,ve,Ne;V.parameters={...V.parameters,docs:{...(Te=V.parameters)==null?void 0:Te.docs,source:{originalSource:`{
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
}`,...(Ne=(ve=V.parameters)==null?void 0:ve.docs)==null?void 0:Ne.source}}};var Se,Ae,xe;L.parameters={...L.parameters,docs:{...(Se=L.parameters)==null?void 0:Se.docs,source:{originalSource:`{
  args: {
    ...Standard.args,
    dropdownAttributes: ['displayName', 'color', 'amount']
  },
  render: function Render(args) {
    const [selectedFruits, setSelectedFruits] = useState<Fruit[]>([fruits[0]]);
    return <div>
                <InputGroup label="Velg frukt" inputId={args.id} labelId={args.labelledById}>
                    {inputProps => <>
                            <SearchableDropdownMultiSelect {...inputProps} {...args} selectedItems={selectedFruits} onChange={(fruit, actionType) => {
            if (actionType === 'selected') {
              setSelectedFruits(prevFruits => prevFruits.concat(fruit));
            } else {
              setSelectedFruits(prevFruits => prevFruits.filter(it => it.displayName !== fruit.displayName));
            }
          }} />
                            <TertiaryButton type="button" onClick={() => {
            setSelectedFruits(fruits);
          }}>
                                Velg alle
                            </TertiaryButton>
                        </>}
                </InputGroup>
            </div>;
  }
}`,...(xe=(Ae=L.parameters)==null?void 0:Ae.docs)==null?void 0:xe.source}}};const gt=["Standard","MultipleDataResults","DropdownAttributes","PreselectedItems","PostListElement","ShowNumberSelected","ControlledState"],Nt=Object.freeze(Object.defineProperty({__proto__:null,ControlledState:L,DropdownAttributes:D,MultipleDataResults:R,PostListElement:C,PreselectedItems:B,ShowNumberSelected:V,Standard:f,__namedExportsOrder:gt,default:pt},Symbol.toStringTag,{value:"Module"}));export{Nt as S,f as a};
