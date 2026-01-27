import{R as e,r as g}from"./index-DQDNmYQF.js";import{c as ze}from"./index-D2FocPV0.js";import{g as We,a as M,f as Pe,u as Ye,b as Xe,c as Ze,d as $e,e as ne,h as re,m as Je,T as et,L as tt,R as nt,i as rt,s as ae,j as le,k as at}from"./ListBox-Cq8mDclh.js";import{S as Q,i as lt}from"./index-DLKON_gd.js";import{I as st}from"./Icon-D_nm5xPy.js";import{C as it,a as ot}from"./ChipRemovable-KNg7V90m.js";import{I as E}from"./InputGroup-CsZXON4u.js";import{T as dt}from"./TertiaryButton-Bljp0IOX.js";import{A as se}from"./ActionButton-BlMS1Zbi.js";const ut="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgLTk2MCA5NjAgOTYwIiB3aWR0aD0iMjQiPgogICAgPHBhdGgKICAgICAgICBkPSJtMzgyLTM2Mi4xMzEgMzM0LjY5Ni0zMzQuNjk1UTczMC4zNy03MTAuNSA3NDguNzYxLTcxMC41dDMyLjA2NSAxMy42NzRRNzk0LjUtNjgzLjE1MiA3OTQuNS02NjQuMzhxMCAxOC43NzEtMTMuNjc0IDMyLjQ0NUw0MTQuMDY1LTI2NC40MTNRNDAwLjM5MS0yNTAuNzM5IDM4Mi0yNTAuNzM5dC0zMi4wNjUtMTMuNjc0TDE3OC40MTMtNDM1LjkzNXEtMTMuNjc0LTEzLjY3NC0xMy4yOTQtMzIuNDQ1LjM4MS0xOC43NzIgMTQuMDU1LTMyLjQ0NlQyMTEuNjItNTE0LjVxMTguNzcxIDAgMzIuNDQ1IDEzLjY3NEwzODItMzYyLjEzMVoiIC8+Cjwvc3ZnPg==";function je({item:i,dropdownAttributes:n,isHighlighted:a,locale:l}){const[d,...p]=n,s=i[d],r=p.map((u,T)=>e.createElement(Q,{"aria-label":u==="balance"?We(l,i[u]):void 0,className:"ffe-searchable-dropdown__detail-text",key:T},i[u]));return e.createElement("div",{className:ze("ffe-searchable-dropdown__list-item-body",{"ffe-searchable-dropdown__list-item-body--highlighted":a,"ffe-searchable-dropdown__list-item-body--condensed":!!r.length})},e.createElement("div",{className:"ffe-searchable-dropdown__list-item-body-content"},s,!!r.length&&e.createElement("div",{className:"ffe-searchable-dropdown__list-item-body-details"},r)),e.createElement(st,{fileUrl:ut,size:"md",className:"ffe-searchable-dropdown__selected-icon"}))}je.__docgenInfo={description:"",methods:[],displayName:"MultiselectOptionBody",props:{item:{required:!0,tsType:{name:"Item"},description:""},dropdownAttributes:{required:!0,tsType:{name:"Array",elements:[{name:"unknown"}],raw:"(keyof Item)[]"},description:""},isHighlighted:{required:!0,tsType:{name:"boolean"},description:""},locale:{required:!0,tsType:{name:"union",raw:"'nb' | 'nn' | 'en'",elements:[{name:"literal",value:"'nb'"},{name:"literal",value:"'nn'"},{name:"literal",value:"'en'"}]},description:""}}};const ie=(i,n,a,l)=>a==="removed"?i.filter(d=>!n.some(p=>l(d,p))):i.concat(n).filter((d,p,s)=>s.findIndex(r=>l(d,r))===p),oe=(i,n,a)=>i!=null&&i.some(l=>a(l,n))?"removed":"selected",ct=({searchAttributes:i,dropdownList:n,noMatchDropdownList:a,maxRenderedDropdownElements:l,searchMatcher:d,isEqual:p})=>(s,r)=>{var u,T,N,b,v,F,_,A,h,k,q;switch(r.type){case"InputKeyDownEscape":return{...s,noMatch:!1,isExpanded:!1,highlightedIndex:-1,inputValue:""};case"InputClick":{const{noMatch:f,listToRender:w}=M({inputValue:s.inputValue,searchAttributes:i,maxRenderedDropdownElements:l,dropdownList:n,noMatchDropdownList:a,searchMatcher:d,showAllItemsInDropdown:!0});return{...s,isExpanded:!0,listToRender:w,noMatch:f}}case"RemoveItem":return(u=r.payload)!=null&&u.items?{...s,highlightedIndex:-1,selectedItems:ie(s.selectedItems,r.payload.items,"removed",p),inputValue:""}:s;case"InputChange":{const{noMatch:f,listToRender:w}=M({inputValue:((T=r.payload)==null?void 0:T.inputValue)??"",searchAttributes:i,maxRenderedDropdownElements:l,dropdownList:n,noMatchDropdownList:a,searchMatcher:d,showAllItemsInDropdown:!1});return{...s,isExpanded:!0,inputValue:((N=r.payload)==null?void 0:N.inputValue)??"",listToRender:w,highlightedIndex:((v=(b=r.payload)==null?void 0:b.inputValue)==null?void 0:v.trim())===""||w.length===0?-1:0,noMatch:f}}case"ToggleButtonPressed":return{...s,isExpanded:!s.isExpanded};case"ItemSelectedProgrammatically":return((F=r.payload)==null?void 0:F.items)!==void 0?{...s,selectedItems:r.payload.items}:s;case"ItemOnClick":case"InputKeyDownEnter":if((_=r.payload)!=null&&_.items){const{noMatch:f,listToRender:w}=M({inputValue:"",searchAttributes:i,maxRenderedDropdownElements:l,dropdownList:n,noMatchDropdownList:a,searchMatcher:d,showAllItemsInDropdown:!0});return{...s,isExpanded:!0,highlightedIndex:s.inputValue.trim()===""?((A=r.payload)==null?void 0:A.highlightedIndex)??-1:-1,selectedItems:ie(s.selectedItems,r.payload.items,((h=r.payload)==null?void 0:h.actionType)??"selected",p),listToRender:w,inputValue:"",noMatch:f}}return s;case"InputKeyDownArrowDown":case"InputKeyDownArrowUp":{const f=document.activeElement;return(f==null?void 0:f.getAttribute("role"))==="combobox"?{...s,isExpanded:!0,highlightedIndex:((k=r.payload)==null?void 0:k.highlightedIndex)??-1}:s}case"FocusMovedOutSide":return{...s,isExpanded:!1,highlightedIndex:-1,inputValue:""};case"DropdownListPropUpdated":return{...s,...M({inputValue:s.inputValue,searchAttributes:i,maxRenderedDropdownElements:l,dropdownList:n,noMatchDropdownList:a,searchMatcher:d,showAllItemsInDropdown:((q=s.inputValue)==null?void 0:q.trim().length)===0})};default:return s}},pt="ArrowUp",mt="ArrowDown",gt="Escape",yt="Enter",ft="Tab",It="Backspace";function bt({id:i,labelledById:n,className:a,dropdownList:l,dropdownAttributes:d,searchAttributes:p,maxRenderedDropdownElements:s=Number.MAX_SAFE_INTEGER,onChange:r,inputProps:u,optionBody:T,postListElement:N,noMatch:b,locale:v="nb",ariaInvalid:F,formatter:_=t=>t,searchMatcher:A,selectedItems:h,isLoading:k=!1,onOpen:q,onClose:f,showNumberSelectedAfter:w,isEqual:G=lt,...Fe},_e){var Z,$,J,ee,te;const[t,m]=g.useReducer(ct({dropdownList:l,searchAttributes:p,maxRenderedDropdownElements:s,noMatchDropdownList:b==null?void 0:b.dropdownList,searchMatcher:A,isEqual:G}),{isExpanded:!1,selectedItems:[],highlightedIndex:-1,inputValue:""},o=>({...o,...M({inputValue:o.inputValue,searchAttributes:p,maxRenderedDropdownElements:s,dropdownList:l,noMatchDropdownList:b==null?void 0:b.dropdownList,searchMatcher:A,showAllItemsInDropdown:!!(h!=null&&h.length)})})),O=Ye({listToRender:t.listToRender}),[qe,Ge]=g.useState(!1),K=g.useRef(null),W=g.useRef(null),Oe=T||je,U=g.useRef(null),P=g.useId(),x=g.useRef(!1),[Y,X]=g.useState(!0),Ue=()=>{m({type:"InputClick"}),x.current=!0},He=o=>{u!=null&&u.onBlur&&u.onBlur(o)};Xe({hasFocus:qe,isExpanded:t.isExpanded,isLoading:k,locale:v,resultCount:t.listToRender.length,selectedValue:(Z=t.selectedItems[t.selectedItems.length-1])==null?void 0:Z[p[0]]}),g.useLayoutEffect(()=>{var o;x.current&&((o=K.current)==null||o.focus(),x.current=!1)}),g.useEffect(()=>{m({type:"DropdownListPropUpdated"})},[l,m]),Ze({isExpanded:t.isExpanded,onClose:f,onOpen:q});const Ke=g.useCallback(()=>m({type:"FocusMovedOutSide"}),[]);g.useEffect(()=>{w!==void 0&&(t.selectedItems.length>w?X(!1):X(!0))},[t.selectedItems,w]),g.useEffect(()=>{h!=null&&m({type:"ItemSelectedProgrammatically",payload:{items:h}})},[h,m]),$e({id:i,containerRef:W,handleFocusMovedOutside:Ke});const Qe=o=>{if(o.key===yt&&t.highlightedIndex>=0){o.preventDefault();const c=t.listToRender[t.highlightedIndex],H=oe(t.selectedItems,c,G);m({type:"InputKeyDownEnter",payload:{items:[c],actionType:H,highlightedIndex:t.highlightedIndex}}),r==null||r(c,H);return}else if(o.key===gt){m({type:"InputKeyDownEscape"});return}else if(o.key===pt){if(o.preventDefault(),t.listToRender.length){const c=rt(t.highlightedIndex,t.listToRender.length);m({type:"InputKeyDownArrowUp",payload:{highlightedIndex:c}}),c>=0&&ae(t==null?void 0:t.listToRender[c],d),le(O[c].current,U.current)}return}else if(o.key===mt){if(o.preventDefault(),t.listToRender.length){const c=at(t.highlightedIndex,t.listToRender.length);m({type:"InputKeyDownArrowDown",payload:{highlightedIndex:c}}),c>=0&&ae(t==null?void 0:t.listToRender[c],d),le(O[c].current,U.current)}}else if(o.key===It){if(t.inputValue===""&&t.selectedItems.length>0&&Y){const c=t.selectedItems[t.selectedItems.length-1];m({type:"RemoveItem",payload:{items:[c],actionType:"removed"}}),r==null||r(c,"removed")}}else if(o.key===ft){m({type:"FocusMovedOutSide"});return}};return e.createElement("div",{onKeyDown:Qe,ref:W,onMouseDown:ne(i),onFocus:ne(i),className:ze(a,"ffe-searchable-dropdown","ffe-searchable-dropdown--multi","ffe-default-mode")},e.createElement("div",{className:"ffe-searchable-dropdown__input",onClick:()=>{var o;(o=K.current)==null||o.click()}},Y?($=t.selectedItems)==null?void 0:$.map((o,c)=>e.createElement(it,{as:"button",type:"button",size:"sm",key:c,"aria-label":`${o[d[0]]}, fjern valg`,onClick:H=>{H.stopPropagation(),m({type:"RemoveItem",payload:{items:[o]}}),r==null||r(o,"removed"),x.current=!0}},o[d[0]])):e.createElement(ot,{size:"sm","aria-label":re(v,t.selectedItems.length),as:"span",role:"presentation",className:"ffe-chip--multiple-selected"},re(v,t.selectedItems.length)),e.createElement("input",{...u,placeholder:t.selectedItems.length>0?"":u==null?void 0:u.placeholder,ref:Je([K,_e]),id:i,"aria-labelledby":n,onClick:Ue,onChange:o=>{var c;(c=u==null?void 0:u.onChange)==null||c.call(u,o),m({type:"InputChange",payload:{inputValue:o.target.value}})},onFocus:()=>{Ge(!0),m({type:"InputClick"})},onBlur:He,"aria-describedby":[u==null?void 0:u["aria-describedby"],t.noMatch&&P].filter(Boolean).join(" ")||void 0,value:_(t.inputValue),type:"text",role:"combobox",autoComplete:"off","aria-controls":((J=U.current)==null?void 0:J.getAttribute("id"))??void 0,"aria-expanded":t.isExpanded&&!!t.listToRender.length,"aria-autocomplete":"list","aria-haspopup":"listbox","aria-activedescendant":t.highlightedIndex>=0?((te=(ee=O[t.highlightedIndex])==null?void 0:ee.current)==null?void 0:te.getAttribute("id"))??void 0:void 0,"aria-invalid":Fe["aria-invalid"]??F})),e.createElement(et,{isExpanded:t.isExpanded,onClick:()=>m({type:"ToggleButtonPressed"}),isLoading:k}),e.createElement(tt,{ref:U,isExpanded:t.isExpanded},t.isExpanded&&e.createElement(nt,{isEqual:G,listToRender:t.listToRender,OptionBody:Oe,highlightedIndex:t.highlightedIndex,dropdownAttributes:d,locale:v,refs:O,onChange:o=>{const c=oe(t.selectedItems,o,G);m({type:"ItemOnClick",payload:{items:[o],actionType:c}}),x.current=!0,r==null||r(o,c)},noMatch:t.noMatch?b:void 0,noMatchMessageId:P,selectedItems:t.selectedItems}),N&&e.createElement("div",{className:"ffe-searchable-dropdown__list--post-list-element"},N)))}const I=Pe(bt);I.__docgenInfo={description:"",methods:[],displayName:"SearchableDropdownMultiSelect",props:{id:{required:!0,tsType:{name:"string"},description:"Id of drop down"},labelledById:{required:!1,tsType:{name:"string"},description:"Id of element that labels input field"},className:{required:!1,tsType:{name:"string"},description:"Extra class"},dropdownList:{required:!0,tsType:{name:"Array",elements:[{name:"Item"}],raw:"Item[]"},description:"List of objects to be displayed in dropdown"},selectedItems:{required:!1,tsType:{name:"union",raw:"Item[] | null",elements:[{name:"Array",elements:[{name:"Item"}],raw:"Item[]"},{name:"null"}]},description:"The selected items to be displayed in the input field. If not specified, uses internal state to decide."},dropdownAttributes:{required:!0,tsType:{name:"Array",elements:[{name:"unknown"}],raw:"(keyof Item)[]"},description:"Array of attributes to be displayed in list. The first will be the title and the chip value"},searchAttributes:{required:!0,tsType:{name:"Array",elements:[{name:"unknown"}],raw:"(keyof Item)[]"},description:"Array of attributes used when filtering search"},inputProps:{required:!1,tsType:{name:"ReactComponentProps",raw:"React.ComponentProps<'input'>",elements:[{name:"literal",value:"'input'"}]},description:"Props used on input field"},maxRenderedDropdownElements:{required:!1,tsType:{name:"number"},description:"Limits number of rendered dropdown elements",defaultValue:{value:"Number.MAX_SAFE_INTEGER",computed:!0}},onChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(item: Item, actionType: 'selected' | 'removed') => void",signature:{arguments:[{type:{name:"Item"},name:"item"},{type:{name:"union",raw:"'selected' | 'removed'",elements:[{name:"literal",value:"'selected'"},{name:"literal",value:"'removed'"}]},name:"actionType"}],return:{name:"void"}}},description:"Called when a value is selected"},optionBody:{required:!1,tsType:{name:"ReactComponentType",raw:`React.ComponentType<{
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
If you always want "X selected" showing, pass in 0`},isEqual:{required:!1,tsType:{name:"signature",type:"function",raw:"(itemA: Item, itemB: Item) => boolean",signature:{arguments:[{type:{name:"Item"},name:"itemA"},{type:{name:"Item"},name:"itemB"}],return:{name:"boolean"}}},description:"Custom compare between objects. Default is deep equals",defaultValue:{value:"isDeepEqual",computed:!0}}}};const S=[{color:"Gul",displayName:"Bananer i klase, økologisk",amount:5},{color:"Grønn",displayName:"Pære",amount:3},{color:"Grønn, Rød",displayName:"Eple",amount:1},{color:"Oransje",displayName:"Appelsin",amount:2},{color:"Lilla, Grønn",displayName:"Druer",amount:1},{color:"Oransje",displayName:"Mandarin",amount:2},{color:"Grønn",displayName:"Kiwi",amount:1}],ht=[{organizationName:"Bedriften",organizationNumber:"912602370",quantityUnprocessedMessages:5,balance:"12 345 678,00 kr"},{organizationName:"Sønn & co",organizationNumber:"812602372",quantityUnprocessedMessages:3,balance:"12 345,00 kr"},{organizationName:"Beslag skytter",organizationNumber:"812602552",quantityUnprocessedMessages:1,balance:"34 234 343,00 kr"}],wt=({item:i,isHighlighted:n})=>e.createElement("div",{style:{padding:"8px",background:n?"#ff9100":"white"}},e.createElement("div",null,i.color),e.createElement("div",{style:{display:"flex",justifyContent:"space-between",backgroundColor:"red"}},e.createElement(Q,{className:"ffe-searchable-dropdown__detail-text"},i.displayName),e.createElement(Q,{className:"ffe-searchable-dropdown__detail-text"},i.amount," ulest"))),Et={title:"Komponenter/Searchable-dropdown/SearchableDropdownMultiSelect",component:I,argTypes:{postListElement:{options:["html","text","none"],mapping:{html:e.createElement("span",null,"Some text describing the list"),text:"Some text describing the list",none:void 0}},optionBody:{options:["custom","none"],mapping:{custom:wt,none:void 0}}}},y={args:{id:"id",labelledById:"labelled-by-id",dropdownList:S,dropdownAttributes:["displayName"],searchAttributes:["displayName","color"],noMatch:{text:"Søket ga ingen treff på frukt"},inputProps:{placeholder:"Søk"},postListElement:"none"},render:function({id:n,labelledById:a,...l}){return e.createElement(e.Fragment,null,e.createElement(E,{label:"Velg frukt",labelId:a,inputId:n},e.createElement(I,{id:n,...l})))}},R={args:{...y.args,dropdownAttributes:["displayName","color","amount"]},render:function({id:n,labelledById:a,...l}){return e.createElement(E,{label:"Velg frukt",labelId:a,inputId:n},e.createElement(I,{id:n,labelledById:a,...l}))}},B={args:{...y.args,dropdownList:ht,dropdownAttributes:["organizationName","balance"]},render:function({id:n,labelledById:a,...l}){return e.createElement(E,{label:"Velg",labelId:a,inputId:n},e.createElement(I,{id:n,labelledById:a,...l}))}},D={args:{...y.args,selectedItems:[S[2],S[4]]},render:function({id:n,labelledById:a,...l}){const[d,p]=g.useState(l.selectedItems);return e.createElement(e.Fragment,null,e.createElement(E,{label:"Velg frukt",labelId:a,inputId:n},e.createElement(I,{id:n,labelledById:a,...l,selectedItems:d,onChange:(s,r)=>{p(r==="selected"?[...d??[],s]:(d??[]).filter(u=>u!==s))}})),e.createElement(se,{type:"button",onClick:()=>{p([])}},"Tøm listen"),e.createElement(se,{type:"button",onClick:()=>{p([...d??[],S[1]])}},"Legg til i listen"))}},V={args:{...y.args,postListElement:e.createElement("span",null,"Some text describing the list")},render:function({id:n,labelledById:a,...l}){return e.createElement(E,{label:"Velg frukt",labelId:a,inputId:n},e.createElement(I,{id:n,labelledById:a,...l}))}},C={args:{...y.args,showNumberSelectedAfter:2},render:function({id:n,labelledById:a,...l}){return e.createElement(E,{label:"Velg frukt",labelId:a,inputId:n},e.createElement(I,{id:n,labelledById:a,...l}))}},L={args:{...y.args,dropdownAttributes:["displayName","color","amount"]},render:function(n){const[a,l]=g.useState([S[0]]);return e.createElement("div",null,e.createElement(E,{label:"Velg frukt",inputId:n.id,labelId:n.labelledById},d=>e.createElement(e.Fragment,null,e.createElement(I,{...d,...n,selectedItems:a,onChange:(p,s)=>{l(s==="selected"?r=>r.concat(p):r=>r.filter(u=>u.displayName!==p.displayName))}}),e.createElement(dt,{type:"button",onClick:()=>{l(S)}},"Velg alle"))))}},z={args:{...y.args},render:function({id:n,labelledById:a,...l}){return e.createElement(e.Fragment,null,e.createElement(E,{label:"Velg frukt",labelId:a,inputId:n},d=>e.createElement(I,{labelledById:a,...l,...d,"aria-invalid":"true"})))}},j={args:{...y.args},render:function({id:n,labelledById:a,...l}){return e.createElement(e.Fragment,null,e.createElement(E,{label:"Velg frukt",labelId:a,inputId:n,description:"Velg de du liker aller best"},d=>e.createElement(I,{labelledById:a,...l,...d})))}};var de,ue,ce;y.parameters={...y.parameters,docs:{...(de=y.parameters)==null?void 0:de.docs,source:{originalSource:`{
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
}`,...(ce=(ue=y.parameters)==null?void 0:ue.docs)==null?void 0:ce.source}}};var pe,me,ge;R.parameters={...R.parameters,docs:{...(pe=R.parameters)==null?void 0:pe.docs,source:{originalSource:`{
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
}`,...(ge=(me=R.parameters)==null?void 0:me.docs)==null?void 0:ge.source}}};var ye,fe,Ie;B.parameters={...B.parameters,docs:{...(ye=B.parameters)==null?void 0:ye.docs,source:{originalSource:`{
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
}`,...(Ie=(fe=B.parameters)==null?void 0:fe.docs)==null?void 0:Ie.source}}};var be,he,we;D.parameters={...D.parameters,docs:{...(be=D.parameters)==null?void 0:be.docs,source:{originalSource:`{
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
}`,...(we=(he=D.parameters)==null?void 0:he.docs)==null?void 0:we.source}}};var Ee,ve,Te;V.parameters={...V.parameters,docs:{...(Ee=V.parameters)==null?void 0:Ee.docs,source:{originalSource:`{
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
}`,...(Te=(ve=V.parameters)==null?void 0:ve.docs)==null?void 0:Te.source}}};var Se,Ne,Ae;C.parameters={...C.parameters,docs:{...(Se=C.parameters)==null?void 0:Se.docs,source:{originalSource:`{
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
}`,...(Ae=(Ne=C.parameters)==null?void 0:Ne.docs)==null?void 0:Ae.source}}};var ke,xe,Me;L.parameters={...L.parameters,docs:{...(ke=L.parameters)==null?void 0:ke.docs,source:{originalSource:`{
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
}`,...(Me=(xe=L.parameters)==null?void 0:xe.docs)==null?void 0:Me.source}}};var Re,Be,De;z.parameters={...z.parameters,docs:{...(Re=z.parameters)==null?void 0:Re.docs,source:{originalSource:`{
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
}`,...(De=(Be=z.parameters)==null?void 0:Be.docs)==null?void 0:De.source}}};var Ve,Ce,Le;j.parameters={...j.parameters,docs:{...(Ve=j.parameters)==null?void 0:Ve.docs,source:{originalSource:`{
  args: {
    ...Standard.args
  },
  render: function Render({
    id,
    labelledById,
    ...args
  }) {
    return <>
                <InputGroup label="Velg frukt" labelId={labelledById} inputId={id} description='Velg de du liker aller best'>
                    {inputProps => <SearchableDropdownMultiSelect labelledById={labelledById} {...args} {...inputProps} />}
                </InputGroup>
            </>;
  }
}`,...(Le=(Ce=j.parameters)==null?void 0:Ce.docs)==null?void 0:Le.source}}};const vt=["Standard","MultipleDataResults","DropdownAttributes","PreselectedItems","PostListElement","ShowNumberSelected","ControlledState","AriaInvalid","WithDescription"],Dt=Object.freeze(Object.defineProperty({__proto__:null,AriaInvalid:z,ControlledState:L,DropdownAttributes:B,MultipleDataResults:R,PostListElement:V,PreselectedItems:D,ShowNumberSelected:C,Standard:y,WithDescription:j,__namedExportsOrder:vt,default:Et},Symbol.toStringTag,{value:"Module"}));export{Dt as S,j as W,y as a};
