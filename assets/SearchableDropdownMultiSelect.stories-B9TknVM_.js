import{R as t,r as g}from"./index-DQDNmYQF.js";import{c as De}from"./index-QCImZZ3W.js";import{g as Ue,a as M,f as He,u as Ke,b as Qe,c as We,d as Ye,e as te,h as ne,m as Pe,T as Xe,L as Ze,R as $e,i as Je,s as ae,j as re,k as et}from"./ListBox-iefsrwiY.js";import{S as K,i as tt}from"./index-DlnE8UeV.js";import{I as nt}from"./Icon-BqsuuMcG.js";import{C as at,a as rt}from"./ChipRemovable-B78FY7Qj.js";import{I as E}from"./InputGroup-DOKvm3eQ.js";import{A as le}from"./ActionButton-1mDAcwGA.js";import{T as lt}from"./TertiaryButton-BEMXYxRk.js";const st="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgLTk2MCA5NjAgOTYwIiB3aWR0aD0iMjQiPgogICAgPHBhdGgKICAgICAgICBkPSJtMzgyLTM2Mi4xMzEgMzM0LjY5Ni0zMzQuNjk1UTczMC4zNy03MTAuNSA3NDguNzYxLTcxMC41dDMyLjA2NSAxMy42NzRRNzk0LjUtNjgzLjE1MiA3OTQuNS02NjQuMzhxMCAxOC43NzEtMTMuNjc0IDMyLjQ0NUw0MTQuMDY1LTI2NC40MTNRNDAwLjM5MS0yNTAuNzM5IDM4Mi0yNTAuNzM5dC0zMi4wNjUtMTMuNjc0TDE3OC40MTMtNDM1LjkzNXEtMTMuNjc0LTEzLjY3NC0xMy4yOTQtMzIuNDQ1LjM4MS0xOC43NzIgMTQuMDU1LTMyLjQ0NlQyMTEuNjItNTE0LjVxMTguNzcxIDAgMzIuNDQ1IDEzLjY3NEwzODItMzYyLjEzMVoiIC8+Cjwvc3ZnPg==";function Ve({item:i,dropdownAttributes:n,isHighlighted:r,locale:l}){const[u,...m]=n,s=i[u],a=m.map((d,T)=>t.createElement(K,{"aria-label":d==="balance"?Ue(l,i[d]):void 0,className:"ffe-searchable-dropdown__detail-text",key:T},i[d]));return t.createElement("div",{className:De("ffe-searchable-dropdown__list-item-body",{"ffe-searchable-dropdown__list-item-body--highlighted":r,"ffe-searchable-dropdown__list-item-body--condensed":!!a.length})},t.createElement("div",{className:"ffe-searchable-dropdown__list-item-body-content"},s,!!a.length&&t.createElement("div",{className:"ffe-searchable-dropdown__list-item-body-details"},a)),t.createElement(nt,{fileUrl:st,size:"md",className:"ffe-searchable-dropdown__selected-icon"}))}Ve.__docgenInfo={description:"",methods:[],displayName:"MultiselectOptionBody",props:{item:{required:!0,tsType:{name:"Item"},description:""},dropdownAttributes:{required:!0,tsType:{name:"Array",elements:[{name:"unknown"}],raw:"(keyof Item)[]"},description:""},isHighlighted:{required:!0,tsType:{name:"boolean"},description:""},locale:{required:!0,tsType:{name:"union",raw:"'nb' | 'nn' | 'en'",elements:[{name:"literal",value:"'nb'"},{name:"literal",value:"'nn'"},{name:"literal",value:"'en'"}]},description:""}}};const se=(i,n,r,l)=>r==="removed"?i.filter(u=>!n.some(m=>l(u,m))):i.concat(n).filter((u,m,s)=>s.findIndex(a=>l(u,a))===m),ie=(i,n,r)=>i!=null&&i.some(l=>r(l,n))?"removed":"selected",it=({searchAttributes:i,dropdownList:n,noMatchDropdownList:r,maxRenderedDropdownElements:l,searchMatcher:u,isEqual:m})=>(s,a)=>{var d,T,N,I,v,j,_,A,b,k,F;switch(a.type){case"InputKeyDownEscape":return{...s,noMatch:!1,isExpanded:!1,highlightedIndex:-1,inputValue:""};case"InputClick":{const{noMatch:f,listToRender:h}=M({inputValue:s.inputValue,searchAttributes:i,maxRenderedDropdownElements:l,dropdownList:n,noMatchDropdownList:r,searchMatcher:u,showAllItemsInDropdown:!0});return{...s,isExpanded:!0,listToRender:h,noMatch:f}}case"RemoveItem":return(d=a.payload)!=null&&d.items?{...s,highlightedIndex:-1,selectedItems:se(s.selectedItems,a.payload.items,"removed",m),inputValue:""}:s;case"InputChange":{const{noMatch:f,listToRender:h}=M({inputValue:((T=a.payload)==null?void 0:T.inputValue)??"",searchAttributes:i,maxRenderedDropdownElements:l,dropdownList:n,noMatchDropdownList:r,searchMatcher:u,showAllItemsInDropdown:!1});return{...s,isExpanded:!0,inputValue:((N=a.payload)==null?void 0:N.inputValue)??"",listToRender:h,highlightedIndex:((v=(I=a.payload)==null?void 0:I.inputValue)==null?void 0:v.trim())===""||h.length===0?-1:0,noMatch:f}}case"ToggleButtonPressed":return{...s,isExpanded:!s.isExpanded};case"ItemSelectedProgrammatically":return((j=a.payload)==null?void 0:j.items)!==void 0?{...s,selectedItems:a.payload.items}:s;case"ItemOnClick":case"InputKeyDownEnter":if((_=a.payload)!=null&&_.items){const{noMatch:f,listToRender:h}=M({inputValue:"",searchAttributes:i,maxRenderedDropdownElements:l,dropdownList:n,noMatchDropdownList:r,searchMatcher:u,showAllItemsInDropdown:!0});return{...s,isExpanded:!0,highlightedIndex:s.inputValue.trim()===""?((A=a.payload)==null?void 0:A.highlightedIndex)??-1:-1,selectedItems:se(s.selectedItems,a.payload.items,((b=a.payload)==null?void 0:b.actionType)??"selected",m),listToRender:h,inputValue:"",noMatch:f}}return s;case"InputKeyDownArrowDown":case"InputKeyDownArrowUp":{const f=document.activeElement;return(f==null?void 0:f.getAttribute("role"))==="combobox"?{...s,isExpanded:!0,highlightedIndex:((k=a.payload)==null?void 0:k.highlightedIndex)??-1}:s}case"FocusMovedOutSide":return{...s,isExpanded:!1,highlightedIndex:-1,inputValue:""};case"DropdownListPropUpdated":return{...s,...M({inputValue:s.inputValue,searchAttributes:i,maxRenderedDropdownElements:l,dropdownList:n,noMatchDropdownList:r,searchMatcher:u,showAllItemsInDropdown:((F=s.inputValue)==null?void 0:F.trim().length)===0})};default:return s}},ot="ArrowUp",dt="ArrowDown",ut="Escape",ct="Enter",mt="Tab",pt="Backspace";function gt({id:i,labelledById:n,className:r,dropdownList:l,dropdownAttributes:u,searchAttributes:m,maxRenderedDropdownElements:s=Number.MAX_SAFE_INTEGER,onChange:a,inputProps:d,optionBody:T,postListElement:N,noMatch:I,locale:v="nb",ariaInvalid:j,formatter:_=e=>e,searchMatcher:A,selectedItems:b,isLoading:k=!1,onOpen:F,onClose:f,showNumberSelectedAfter:h,isEqual:q=tt,...Ce},Le){var X,Z,$,J,ee;const[e,p]=g.useReducer(it({dropdownList:l,searchAttributes:m,maxRenderedDropdownElements:s,noMatchDropdownList:I==null?void 0:I.dropdownList,searchMatcher:A,isEqual:q}),{isExpanded:!1,selectedItems:[],highlightedIndex:-1,inputValue:""},o=>({...o,...M({inputValue:o.inputValue,searchAttributes:m,maxRenderedDropdownElements:s,dropdownList:l,noMatchDropdownList:I==null?void 0:I.dropdownList,searchMatcher:A,showAllItemsInDropdown:!!(b!=null&&b.length)})})),O=Ke({listToRender:e.listToRender}),[ze,je]=g.useState(!1),H=g.useRef(null),Q=g.useRef(null),_e=T||Ve,G=g.useRef(null),W=g.useId(),x=g.useRef(!1),[Y,P]=g.useState(!0),Fe=()=>{p({type:"InputClick"}),x.current=!0},qe=o=>{d!=null&&d.onBlur&&d.onBlur(o)};Qe({hasFocus:ze,isExpanded:e.isExpanded,isLoading:k,locale:v,resultCount:e.listToRender.length,selectedValue:(X=e.selectedItems[e.selectedItems.length-1])==null?void 0:X[m[0]]}),g.useLayoutEffect(()=>{var o;x.current&&((o=H.current)==null||o.focus(),x.current=!1)}),g.useEffect(()=>{p({type:"DropdownListPropUpdated"})},[l,p]),We({isExpanded:e.isExpanded,onClose:f,onOpen:F});const Oe=g.useCallback(()=>p({type:"FocusMovedOutSide"}),[]);g.useEffect(()=>{h!==void 0&&(e.selectedItems.length>h?P(!1):P(!0))},[e.selectedItems,h]),g.useEffect(()=>{b!=null&&p({type:"ItemSelectedProgrammatically",payload:{items:b}})},[b,p]),Ye({id:i,containerRef:Q,handleFocusMovedOutside:Oe});const Ge=o=>{if(o.key===ct&&e.highlightedIndex>=0){o.preventDefault();const c=e.listToRender[e.highlightedIndex],U=ie(e.selectedItems,c,q);p({type:"InputKeyDownEnter",payload:{items:[c],actionType:U,highlightedIndex:e.highlightedIndex}}),a==null||a(c,U);return}else if(o.key===ut){p({type:"InputKeyDownEscape"});return}else if(o.key===ot){if(o.preventDefault(),e.listToRender.length){const c=Je(e.highlightedIndex,e.listToRender.length);p({type:"InputKeyDownArrowUp",payload:{highlightedIndex:c}}),c>=0&&ae(e==null?void 0:e.listToRender[c],u),re(O[c].current,G.current)}return}else if(o.key===dt){if(o.preventDefault(),e.listToRender.length){const c=et(e.highlightedIndex,e.listToRender.length);p({type:"InputKeyDownArrowDown",payload:{highlightedIndex:c}}),c>=0&&ae(e==null?void 0:e.listToRender[c],u),re(O[c].current,G.current)}}else if(o.key===pt){if(e.inputValue===""&&e.selectedItems.length>0&&Y){const c=e.selectedItems[e.selectedItems.length-1];p({type:"RemoveItem",payload:{items:[c],actionType:"removed"}}),a==null||a(c,"removed")}}else if(o.key===mt){p({type:"FocusMovedOutSide"});return}};return t.createElement("div",{onKeyDown:Ge,ref:Q,onMouseDown:te(i),onFocus:te(i),className:De(r,"ffe-searchable-dropdown","ffe-searchable-dropdown--multi","ffe-default-mode")},t.createElement("div",{className:"ffe-searchable-dropdown__input",onClick:()=>{var o;(o=H.current)==null||o.click()}},Y?(Z=e.selectedItems)==null?void 0:Z.map((o,c)=>t.createElement(at,{as:"button",type:"button",size:"sm",key:c,"aria-label":`${o[u[0]]}, fjern valg`,onClick:U=>{U.stopPropagation(),p({type:"RemoveItem",payload:{items:[o]}}),a==null||a(o,"removed"),x.current=!0}},o[u[0]])):t.createElement(rt,{size:"sm","aria-label":ne(v,e.selectedItems.length),as:"span",role:"presentation",className:"ffe-chip--multiple-selected"},ne(v,e.selectedItems.length)),t.createElement("input",{...d,placeholder:e.selectedItems.length>0?"":d==null?void 0:d.placeholder,ref:Pe([H,Le]),id:i,"aria-labelledby":n,onClick:Fe,onChange:o=>{var c;(c=d==null?void 0:d.onChange)==null||c.call(d,o),p({type:"InputChange",payload:{inputValue:o.target.value}})},onFocus:()=>{je(!0),p({type:"InputClick"})},onBlur:qe,"aria-describedby":[d==null?void 0:d["aria-describedby"],e.noMatch&&W].filter(Boolean).join(" ")||void 0,value:_(e.inputValue),type:"text",role:"combobox",autoComplete:"off","aria-controls":(($=G.current)==null?void 0:$.getAttribute("id"))??void 0,"aria-expanded":e.isExpanded&&!!e.listToRender.length,"aria-autocomplete":"list","aria-haspopup":"listbox","aria-activedescendant":e.highlightedIndex>=0?((ee=(J=O[e.highlightedIndex])==null?void 0:J.current)==null?void 0:ee.getAttribute("id"))??void 0:void 0,"aria-invalid":Ce["aria-invalid"]??j})),t.createElement(Xe,{isExpanded:e.isExpanded,onClick:()=>p({type:"ToggleButtonPressed"}),isLoading:k}),t.createElement(Ze,{ref:G,isExpanded:e.isExpanded},e.isExpanded&&t.createElement($e,{isEqual:q,listToRender:e.listToRender,OptionBody:_e,highlightedIndex:e.highlightedIndex,dropdownAttributes:u,locale:v,refs:O,onChange:o=>{const c=ie(e.selectedItems,o,q);p({type:"ItemOnClick",payload:{items:[o],actionType:c}}),x.current=!0,a==null||a(o,c)},noMatch:e.noMatch?I:void 0,noMatchMessageId:W,selectedItems:e.selectedItems}),N&&t.createElement("div",{className:"ffe-searchable-dropdown__list--post-list-element"},N)))}const w=He(gt);w.__docgenInfo={description:"",methods:[],displayName:"SearchableDropdownMultiSelect",props:{id:{required:!0,tsType:{name:"string"},description:"Id of drop down"},labelledById:{required:!1,tsType:{name:"string"},description:"Id of element that labels input field"},className:{required:!1,tsType:{name:"string"},description:"Extra class"},dropdownList:{required:!0,tsType:{name:"Array",elements:[{name:"Item"}],raw:"Item[]"},description:"List of objects to be displayed in dropdown"},selectedItems:{required:!1,tsType:{name:"union",raw:"Item[] | null",elements:[{name:"Array",elements:[{name:"Item"}],raw:"Item[]"},{name:"null"}]},description:"The selected items to be displayed in the input field. If not specified, uses internal state to decide."},dropdownAttributes:{required:!0,tsType:{name:"Array",elements:[{name:"unknown"}],raw:"(keyof Item)[]"},description:"Array of attributes to be displayed in list. The first will be the title and the chip value"},searchAttributes:{required:!0,tsType:{name:"Array",elements:[{name:"unknown"}],raw:"(keyof Item)[]"},description:"Array of attributes used when filtering search"},inputProps:{required:!1,tsType:{name:"ReactComponentProps",raw:"React.ComponentProps<'input'>",elements:[{name:"literal",value:"'input'"}]},description:"Props used on input field"},maxRenderedDropdownElements:{required:!1,tsType:{name:"number"},description:"Limits number of rendered dropdown elements",defaultValue:{value:"Number.MAX_SAFE_INTEGER",computed:!0}},onChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(item: Item, actionType: 'selected' | 'removed') => void",signature:{arguments:[{type:{name:"Item"},name:"item"},{type:{name:"union",raw:"'selected' | 'removed'",elements:[{name:"literal",value:"'selected'"},{name:"literal",value:"'removed'"}]},name:"actionType"}],return:{name:"void"}}},description:"Called when a value is selected"},optionBody:{required:!1,tsType:{name:"ReactComponentType",raw:`React.ComponentType<{
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
If you always want "X selected" showing, pass in 0`},isEqual:{required:!1,tsType:{name:"signature",type:"function",raw:"(itemA: Item, itemB: Item) => boolean",signature:{arguments:[{type:{name:"Item"},name:"itemA"},{type:{name:"Item"},name:"itemB"}],return:{name:"boolean"}}},description:"Custom compare between objects. Default is deep equals",defaultValue:{value:"isDeepEqual",computed:!0}}}};const S=[{color:"Gul",displayName:"Bananer i klase, økologisk",amount:5},{color:"Grønn",displayName:"Pære",amount:3},{color:"Grønn, Rød",displayName:"Eple",amount:1},{color:"Oransje",displayName:"Appelsin",amount:2},{color:"Lilla, Grønn",displayName:"Druer",amount:1},{color:"Oransje",displayName:"Mandarin",amount:2},{color:"Grønn",displayName:"Kiwi",amount:1}],yt=[{organizationName:"Bedriften",organizationNumber:"912602370",quantityUnprocessedMessages:5,balance:"12 345 678,00 kr"},{organizationName:"Sønn & co",organizationNumber:"812602372",quantityUnprocessedMessages:3,balance:"12 345,00 kr"},{organizationName:"Beslag skytter",organizationNumber:"812602552",quantityUnprocessedMessages:1,balance:"34 234 343,00 kr"}],ft=({item:i,isHighlighted:n})=>t.createElement("div",{style:{padding:"8px",background:n?"#ff9100":"white"}},t.createElement("div",null,i.color),t.createElement("div",{style:{display:"flex",justifyContent:"space-between",backgroundColor:"red"}},t.createElement(K,{className:"ffe-searchable-dropdown__detail-text"},i.displayName),t.createElement(K,{className:"ffe-searchable-dropdown__detail-text"},i.amount," ulest"))),It={title:"Komponenter/Searchable-dropdown/SearchableDropdownMultiSelect",component:w,argTypes:{postListElement:{options:["html","text","none"],mapping:{html:t.createElement("span",null,"Some text describing the list"),text:"Some text describing the list",none:void 0}},optionBody:{options:["custom","none"],mapping:{custom:ft,none:void 0}}}},y={args:{id:"id",labelledById:"labelled-by-id",dropdownList:S,dropdownAttributes:["displayName"],searchAttributes:["displayName","color"],noMatch:{text:"Søket ga ingen treff på frukt"},inputProps:{placeholder:"Søk"},postListElement:"none"},render:function({id:n,labelledById:r,...l}){return t.createElement(t.Fragment,null,t.createElement(E,{label:"Velg frukt",labelId:r,inputId:n},t.createElement(w,{id:n,...l})))}},R={args:{...y.args,dropdownAttributes:["displayName","color","amount"]},render:function({id:n,labelledById:r,...l}){return t.createElement(E,{label:"Velg frukt",labelId:r,inputId:n},t.createElement(w,{id:n,labelledById:r,...l}))}},B={args:{...y.args,dropdownList:yt,dropdownAttributes:["organizationName","balance"]},render:function({id:n,labelledById:r,...l}){return t.createElement(E,{label:"Velg",labelId:r,inputId:n},t.createElement(w,{id:n,labelledById:r,...l}))}},D={args:{...y.args,selectedItems:[S[2],S[4]]},render:function({id:n,labelledById:r,...l}){const[u,m]=g.useState(l.selectedItems);return t.createElement(t.Fragment,null,t.createElement(E,{label:"Velg frukt",labelId:r,inputId:n},t.createElement(w,{id:n,labelledById:r,...l,selectedItems:u,onChange:(s,a)=>{m(a==="selected"?[...u??[],s]:(u??[]).filter(d=>d!==s))}})),t.createElement(le,{type:"button",onClick:()=>{m([])}},"Tøm listen"),t.createElement(le,{type:"button",onClick:()=>{m([...u??[],S[1]])}},"Legg til i listen"))}},V={args:{...y.args,postListElement:t.createElement("span",null,"Some text describing the list")},render:function({id:n,labelledById:r,...l}){return t.createElement(E,{label:"Velg frukt",labelId:r,inputId:n},t.createElement(w,{id:n,labelledById:r,...l}))}},C={args:{...y.args,showNumberSelectedAfter:2},render:function({id:n,labelledById:r,...l}){return t.createElement(E,{label:"Velg frukt",labelId:r,inputId:n},t.createElement(w,{id:n,labelledById:r,...l}))}},L={args:{...y.args,dropdownAttributes:["displayName","color","amount"]},render:function(n){const[r,l]=g.useState([S[0]]);return t.createElement("div",null,t.createElement(E,{label:"Velg frukt",inputId:n.id,labelId:n.labelledById},u=>t.createElement(t.Fragment,null,t.createElement(w,{...u,...n,selectedItems:r,onChange:(m,s)=>{l(s==="selected"?a=>a.concat(m):a=>a.filter(d=>d.displayName!==m.displayName))}}),t.createElement(lt,{type:"button",onClick:()=>{l(S)}},"Velg alle"))))}},z={args:{...y.args},render:function({id:n,labelledById:r,...l}){return t.createElement(t.Fragment,null,t.createElement(E,{label:"Velg frukt",labelId:r,inputId:n},u=>t.createElement(w,{labelledById:r,...l,...u,"aria-invalid":"true"})))}};var oe,de,ue;y.parameters={...y.parameters,docs:{...(oe=y.parameters)==null?void 0:oe.docs,source:{originalSource:`{
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
}`,...(ue=(de=y.parameters)==null?void 0:de.docs)==null?void 0:ue.source}}};var ce,me,pe;R.parameters={...R.parameters,docs:{...(ce=R.parameters)==null?void 0:ce.docs,source:{originalSource:`{
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
}`,...(pe=(me=R.parameters)==null?void 0:me.docs)==null?void 0:pe.source}}};var ge,ye,fe;B.parameters={...B.parameters,docs:{...(ge=B.parameters)==null?void 0:ge.docs,source:{originalSource:`{
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
}`,...(fe=(ye=B.parameters)==null?void 0:ye.docs)==null?void 0:fe.source}}};var Ie,be,he;D.parameters={...D.parameters,docs:{...(Ie=D.parameters)==null?void 0:Ie.docs,source:{originalSource:`{
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
}`,...(he=(be=D.parameters)==null?void 0:be.docs)==null?void 0:he.source}}};var we,Ee,ve;V.parameters={...V.parameters,docs:{...(we=V.parameters)==null?void 0:we.docs,source:{originalSource:`{
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
}`,...(ve=(Ee=V.parameters)==null?void 0:Ee.docs)==null?void 0:ve.source}}};var Te,Se,Ne;C.parameters={...C.parameters,docs:{...(Te=C.parameters)==null?void 0:Te.docs,source:{originalSource:`{
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
}`,...(Ne=(Se=C.parameters)==null?void 0:Se.docs)==null?void 0:Ne.source}}};var Ae,ke,xe;L.parameters={...L.parameters,docs:{...(Ae=L.parameters)==null?void 0:Ae.docs,source:{originalSource:`{
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
}`,...(xe=(ke=L.parameters)==null?void 0:ke.docs)==null?void 0:xe.source}}};var Me,Re,Be;z.parameters={...z.parameters,docs:{...(Me=z.parameters)==null?void 0:Me.docs,source:{originalSource:`{
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
}`,...(Be=(Re=z.parameters)==null?void 0:Re.docs)==null?void 0:Be.source}}};const bt=["Standard","MultipleDataResults","DropdownAttributes","PreselectedItems","PostListElement","ShowNumberSelected","ControlledState","AriaInvalid"],xt=Object.freeze(Object.defineProperty({__proto__:null,AriaInvalid:z,ControlledState:L,DropdownAttributes:B,MultipleDataResults:R,PostListElement:V,PreselectedItems:D,ShowNumberSelected:C,Standard:y,__namedExportsOrder:bt,default:It},Symbol.toStringTag,{value:"Module"}));export{xt as S,y as a};
