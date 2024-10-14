import{R as i,r as m}from"./index-RYns6xqu.js";import{c as z}from"./index-Dejnh_W_.js";import{M as Be,r as Ce,i as ze,S as ee}from"./index-B4WstuAd.js";import{d as Ee}from"./index-DhQuXuqW.js";import{l as He,S as Fe}from"./Spinner-DE_tv5qo.js";import{P as te}from"./Paragraph-uGacOKYl.js";import{I as Oe}from"./Icon-Dor7S2yd.js";import{s as Ue,a as Ge,b as Ye}from"./spacing-enBt7HlE.js";import{I as R}from"./InputGroup-DFg7WU2E.js";function Te({item:e,dropdownAttributes:t,isHighlighted:n}){const[r,...u]=t,o=e[r],a=u.map((d,c)=>i.createElement(Be,{key:c},e[d]));return i.createElement("div",{className:z("ffe-searchable-dropdown__list-item-body",{"ffe-searchable-dropdown__list-item-body--highlighted":n})},o,!!a.length&&i.createElement("div",{className:"ffe-searchable-dropdown__list-item-body-details"},a))}Te.__docgenInfo={description:"",methods:[],displayName:"ListItemBody",props:{item:{required:!0,tsType:{name:"Item"},description:""},dropdownAttributes:{required:!0,tsType:{name:"Array",elements:[{name:"Item"}],raw:"Array<keyof Item>"},description:""},isHighlighted:{required:!0,tsType:{name:"boolean"},description:""}}};const $e=e=>{switch(e){case"nn":return"lukk alternativer";case"en":return"close alternatives";default:return"lukk alternativer"}},Ke=e=>{switch(e){case"nn":return"åpne alternativer";case"en":return"open alternatives";default:return"åpne alternativer"}},Qe=e=>{switch(e){case"nn":return"Søket gav ingen treff";case"en":return"The search gave no result";default:return"Søket ga ingen treff"}},We=e=>{switch(e){case"nn":return"Valt element har vorte fjerna.";case"en":return"Selected item has been removed.";default:return"Valgt element har blitt fjernet."}},Pe=(e,t)=>{switch(e){case"nn":return`Element ${t} er valgt.`;case"en":return`Item ${t} has been selected.`;default:return`Element ${t} er valgt.`}},Xe=e=>{switch(e){case"nn":return"Ingen resultat er tilgjengelege.";case"en":return"No results are available.";default:return"Ingen resultater er tilgjengelige."}},Ze=(e,t)=>{switch(e){case"nn":return`${t} resultat er tilgjengeleg, bruk opp- og nedpiltastene for å navigera. Trykk Enter for å velja.`;case"en":return`${t} result${t===1?" is":"s are"} available, use up and down arrow keys to navigate. Press Enter key to select.`;default:return`${t} resultat${t===1?"":"er"} er tilgjengelig, bruk opp- og nedpiltastene for å navigere. Trykk Enter for å velge.`}},Je=e=>{switch(e){case"nn":return"Lastar inn alternativ.";case"en":return"Loading options.";default:return"Laster inn alternativer."}},ne=e=>`${e}`.toLowerCase(),et=(e,t,n,r)=>{const u=r?r(n,t):o=>t.map(a=>ne(o[a])).some(a=>a.includes(ne(n)));return e.filter(u)},S=({inputValue:e,searchAttributes:t,maxRenderedDropdownElements:n,dropdownList:r,noMatchDropdownList:u,searchMatcher:o,showAllItemsInDropdown:a})=>{const d=e?e.trim():"",p=d.length>0?et(r,t,d,o).slice(0,n):r.slice(0,n);return{listToRender:a?r:p.length?p:u||[],noMatch:!p.length}},tt=({searchAttributes:e,dropdownList:t,noMatchDropdownList:n,maxRenderedDropdownElements:r,searchMatcher:u,onChange:o})=>(a,d)=>{var c,p,y,g,w,D,q,A;switch(d.type){case"InputKeyDownEscape":return{...a,noMatch:!1,isExpanded:!1,highlightedIndex:-1,inputValue:a.selectedItem?a.selectedItem[e[0]]:""};case"InputClick":{const{noMatch:I,listToRender:v}=S({inputValue:a.inputValue,searchAttributes:e,maxRenderedDropdownElements:r,dropdownList:t,noMatchDropdownList:n,searchMatcher:u,showAllItemsInDropdown:!0});return{...a,isExpanded:!0,listToRender:v,noMatch:I}}case"InputChange":{const{noMatch:I,listToRender:v}=S({inputValue:((c=d.payload)==null?void 0:c.inputValue)??"",searchAttributes:e,maxRenderedDropdownElements:r,dropdownList:t,noMatchDropdownList:n,searchMatcher:u,showAllItemsInDropdown:!1});return{...a,isExpanded:!0,inputValue:((p=d.payload)==null?void 0:p.inputValue)??"",listToRender:v,highlightedIndex:((g=(y=d.payload)==null?void 0:y.inputValue)==null?void 0:g.trim())===""||v.length===0?-1:0,noMatch:I}}case"ToggleButtonPressed":return{...a,isExpanded:!a.isExpanded};case"ItemSelectedProgrammatically":case"ItemOnClick":case"InputKeyDownEnter":return{...a,isExpanded:!1,highlightedIndex:-1,selectedItem:(w=d.payload)==null?void 0:w.selectedItem,inputValue:((q=(D=d.payload)==null?void 0:D.selectedItem)==null?void 0:q[e[0]])||""};case"InputKeyDownArrowDown":case"InputKeyDownArrowUp":return{...a,isExpanded:!0,highlightedIndex:((A=d.payload)==null?void 0:A.highlightedIndex)??-1};case"FocusMovedOutSide":{const{listToRender:I}=S({inputValue:a.inputValue,searchAttributes:e,maxRenderedDropdownElements:r,dropdownList:t,noMatchDropdownList:n,searchMatcher:u,showAllItemsInDropdown:!0}),v=a.inputValue===""&&!!a.selectedItem,j=a.listToRender.length===1&&e.map(_=>{var s;return a.listToRender[0][_]===((s=a.selectedItem)==null?void 0:s[_])}).includes(!1)&&a.highlightedIndex!==-1;let E=a.selectedItem;v?(o==null||o(null),E=null):j&&(o==null||o(a.listToRender[0]),E=a.listToRender[0]);const H=E?E[e[0]]:"";return{...a,isExpanded:!1,highlightedIndex:-1,inputValue:H,selectedItem:E,listToRender:I}}case"DropdownListPropUpdated":return{...a,...S({inputValue:a.inputValue,searchAttributes:e,maxRenderedDropdownElements:r,dropdownList:t,noMatchDropdownList:n,searchMatcher:u,showAllItemsInDropdown:!!a.selectedItem})};default:return a}},re=(e,t)=>{if(!e)return;Ce(e,{boundary:t,block:"nearest",scrollMode:"if-needed"}).forEach(({el:r,top:u,left:o})=>{r.scrollTop=u,r.scrollLeft=o})},nt=(e,t)=>e<=0?t-1:e-1,rt=(e,t)=>e===t-1?0:e+1,Re=()=>{const e="a11y-status-message";let t=window.document.getElementById(e);return t||(t=window.document.createElement("div"),t.setAttribute("id",e),t.setAttribute("role","status"),t.setAttribute("aria-live","polite"),t.setAttribute("aria-relevant","additions text"),Object.assign(t.style,{border:"0",clip:"rect(0 0 0 0)",height:"1px",margin:"-1px",overflow:"hidden",padding:"0",position:"absolute",width:"1px"}),window.document.body.appendChild(t),t)},Ae=Ee(()=>{Re().textContent=""},500),at=e=>{const t=Re();e&&(t.textContent=e,Ae())},C=Ee(e=>{at(e())},200),it=({selectedItemValue:e,locale:t})=>e?Pe(t,e):We(t),st=({isExpanded:e,resultCount:t,locale:n})=>e?t?Ze(n,t):Xe(n):"",lt=e=>Je(e),ot=({hasFocus:e,isExpanded:t,isLoading:n,locale:r,resultCount:u,searchAttributes:o,selectedItem:a})=>{const d=m.useRef(!0),c=m.useRef(),p=a==null?void 0:a[o[0]];m.useEffect(()=>{if(n&&e){C(()=>lt(r));return}if(d.current){d.current=!1;return}return p!==c.current?(c.current=p,C(()=>it({selectedItemValue:p,locale:r}))):C(()=>st({isExpanded:t,resultCount:u,locale:r})),()=>{C.cancel(),Ae.cancel()}},[p,r,t,u,e,n])},Se=m.forwardRef;function dt({item:e,isHighlighted:t,isSelected:n,children:r,onMouseEnter:u,onClick:o},a){const d=m.useId();return i.createElement("div",{id:d,role:"option",onMouseEnter:u,"aria-selected":n,ref:a,onClick:o,className:"ffe-searchable-dropdown__list-item-container"},r({item:e,isHighlighted:t}))}const xe=Se(dt);xe.__docgenInfo={description:"",methods:[],displayName:"ListItemContainer",props:{item:{required:!0,tsType:{name:"Item"},description:""},isHighlighted:{required:!0,tsType:{name:"boolean"},description:""},isSelected:{required:!0,tsType:{name:"boolean"},description:""},children:{required:!0,tsType:{name:"signature",type:"function",raw:`({
    item,
    isHighlighted,
}: {
    item: Item;
    isHighlighted: boolean;
}) => React.ReactNode`,signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
    item: Item;
    isHighlighted: boolean;
}`,signature:{properties:[{key:"item",value:{name:"Item",required:!0}},{key:"isHighlighted",value:{name:"boolean",required:!0}}]}},name:""}],return:{name:"ReactReactNode",raw:"React.ReactNode"}}},description:""},onClick:{required:!0,tsType:{name:"ReactMouseEventHandler",raw:"React.MouseEventHandler<HTMLDivElement>",elements:[{name:"HTMLDivElement"}]},description:""},onMouseEnter:{required:!1,tsType:{name:"ReactMouseEventHandler",raw:"React.MouseEventHandler<HTMLDivElement>",elements:[{name:"HTMLDivElement"}]},description:""}}};function Me({noMatch:e,noMatchMessageId:t,listToRender:n,locale:r}){return i.createElement("div",null,e.text?i.createElement("div",{className:"ffe-searchable-dropdown__no-match"},i.createElement(te,{id:t},e.text)):n.length===0&&i.createElement(te,{id:t,className:"ffe-screenreader-only"},Qe(r)))}Me.__docgenInfo={description:"",methods:[],displayName:"NoMatch",props:{noMatch:{required:!0,tsType:{name:"signature",type:"object",raw:`{
    text?: string;
    dropdownList?: Item[];
}`,signature:{properties:[{key:"text",value:{name:"string",required:!1}},{key:"dropdownList",value:{name:"Array",elements:[{name:"Item"}],raw:"Item[]",required:!1}}]}},description:""},noMatchMessageId:{required:!0,tsType:{name:"string"},description:""},listToRender:{required:!0,tsType:{name:"Array",elements:[{name:"Item"}],raw:"Item[]"},description:""},locale:{required:!0,tsType:{name:"union",raw:"'nb' | 'nn' | 'en'",elements:[{name:"literal",value:"'nb'"},{name:"literal",value:"'nn'"},{name:"literal",value:"'en'"}]},description:""}}};function Le({noMatch:e,listToRender:t,noMatchMessageId:n,ListItemBodyElement:r,refs:u,highlightedIndex:o,dropdownAttributes:a,locale:d,onChange:c,selectedItem:p}){return i.createElement(He.Scrollbars,{autoHeight:!0,autoHeightMax:335},e&&i.createElement(Me,{noMatch:e,noMatchMessageId:n,listToRender:t,locale:d}),t.map((y,g)=>i.createElement(xe,{isSelected:ze(y,p),key:Object.values(y).join("-"),ref:u[g],isHighlighted:o===g,onClick:()=>{c(y)},item:y},w=>i.createElement(r,{...w,locale:d,dropdownAttributes:a}))))}Le.__docgenInfo={description:"",methods:[],displayName:"Results",props:{noMatch:{required:!1,tsType:{name:"signature",type:"object",raw:`{
    text?: string;
    dropdownList?: Item[];
}`,signature:{properties:[{key:"text",value:{name:"string",required:!1}},{key:"dropdownList",value:{name:"Array",elements:[{name:"Item"}],raw:"Item[]",required:!1}}]}},description:""},listToRender:{required:!0,tsType:{name:"Array",elements:[{name:"Item"}],raw:"Item[]"},description:""},noMatchMessageId:{required:!0,tsType:{name:"string"},description:""},ListItemBodyElement:{required:!0,tsType:{name:"ReactComponentType",raw:`React.ComponentType<{
    item: Item;
    isHighlighted: boolean;
    dropdownAttributes: (keyof Item)[];
    locale: Locale;
}>`,elements:[{name:"signature",type:"object",raw:`{
    item: Item;
    isHighlighted: boolean;
    dropdownAttributes: (keyof Item)[];
    locale: Locale;
}`,signature:{properties:[{key:"item",value:{name:"Item",required:!0}},{key:"isHighlighted",value:{name:"boolean",required:!0}},{key:"dropdownAttributes",value:{name:"Array",elements:[{name:"unknown"}],raw:"(keyof Item)[]",required:!0}},{key:"locale",value:{name:"union",raw:"'nb' | 'nn' | 'en'",elements:[{name:"literal",value:"'nb'"},{name:"literal",value:"'nn'"},{name:"literal",value:"'en'"}],required:!0}}]}}]},description:""},selectedItem:{required:!1,tsType:{name:"union",raw:"Item | null",elements:[{name:"Item"},{name:"null"}]},description:""},highlightedIndex:{required:!1,tsType:{name:"number"},description:""},refs:{required:!0,tsType:{name:"Array",elements:[{name:"ReactRef",raw:"React.Ref<HTMLDivElement>",elements:[{name:"HTMLDivElement"}]}],raw:"React.Ref<HTMLDivElement>[]"},description:""},dropdownAttributes:{required:!0,tsType:{name:"Array",elements:[{name:"unknown"}],raw:"(keyof Item)[]"},description:""},locale:{required:!0,tsType:{name:"union",raw:"'nb' | 'nn' | 'en'",elements:[{name:"literal",value:"'nb'"},{name:"literal",value:"'nn'"},{name:"literal",value:"'en'"}]},description:""},onChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(item: Item) => void",signature:{arguments:[{type:{name:"Item"},name:"item"}],return:{name:"void"}}},description:""}}};function ut(e){return t=>{e.forEach(n=>{typeof n=="function"?n(t):n!=null&&(n.current=t)})}}const ct="ArrowUp",mt="ArrowDown",pt="Escape",gt="Enter";function ft({id:e,labelledById:t,className:n,dropdownList:r,dropdownAttributes:u,searchAttributes:o,maxRenderedDropdownElements:a=Number.MAX_SAFE_INTEGER,onChange:d,inputProps:c,listElementBody:p,postListElement:y,noMatch:g,locale:w="nb",ariaInvalid:D,formatter:q=s=>s,searchMatcher:A,selectedItem:I,isLoading:v=!1,onOpen:j,onClose:E,...H},_){var W,P,X;const[s,f]=m.useReducer(tt({dropdownList:r,searchAttributes:o,maxRenderedDropdownElements:a,noMatchDropdownList:g==null?void 0:g.dropdownList,searchMatcher:A,onChange:d}),{isExpanded:!1,selectedItem:I,highlightedIndex:-1,inputValue:I?I[u[0]]:""},l=>({...l,...S({inputValue:l.inputValue,searchAttributes:o,maxRenderedDropdownElements:a,dropdownList:r,noMatchDropdownList:g==null?void 0:g.dropdownList,searchMatcher:A,showAllItemsInDropdown:!!I})})),[V,Ne]=m.useState([]),[ke,De]=m.useState(!1),U=m.useRef(null),G=m.useRef(null),Y=m.useRef(null),qe=p||Te,B=m.useRef(null),$=m.useId(),F=m.useRef(!1),K=m.useRef(!1),je=()=>{f({type:"InputClick"})},_e=l=>{c!=null&&c.onBlur&&c.onBlur(l)};m.useEffect(()=>{f({type:"ItemSelectedProgrammatically",payload:{selectedItem:I}})},[I,f]),ot({hasFocus:ke,isExpanded:s.isExpanded,isLoading:v,locale:w,resultCount:s.listToRender.length,searchAttributes:o,selectedItem:s.selectedItem}),m.useLayoutEffect(()=>{Ne(l=>Array(s.listToRender.length).fill(null).map((b,Z)=>l[Z]||m.createRef()))},[s.listToRender.length]),m.useLayoutEffect(()=>{var l,b;F.current?((l=G.current)==null||l.focus(),F.current=!1):K.current&&((b=U.current)==null||b.focus(),K.current=!1)}),m.useEffect(()=>{f({type:"DropdownListPropUpdated"})},[r,f]),m.useEffect(()=>{const l=s.isExpanded?j:E;l&&l()},[s.isExpanded,j,E]),m.useEffect(()=>{const l=b=>{var J;((J=Y.current)==null?void 0:J.contains(b.target))||b.__eventFromFFESearchableDropdownId===e||f({type:"FocusMovedOutSide"})};return document.addEventListener("mousedown",l),document.addEventListener("focusin",l),()=>{document.removeEventListener("mousedown",l),document.removeEventListener("focusin",l)}},[e]);function Q(l){l.nativeEvent.__eventFromFFESearchableDropdownId=e}const Ve=l=>{if(l.key===gt&&s.highlightedIndex>=0){l.preventDefault(),f({type:"InputKeyDownEnter",payload:{selectedItem:s.listToRender[s.highlightedIndex]}}),d==null||d(s.listToRender[s.highlightedIndex]);return}else if(l.key===pt){f({type:"InputKeyDownEscape"});return}if(l.key===ct){if(l.preventDefault(),s.listToRender.length){const b=nt(s.highlightedIndex,s.listToRender.length);f({type:"InputKeyDownArrowUp",payload:{highlightedIndex:b}}),re(V[b].current,B.current)}return}if(l.key===mt&&(l.preventDefault(),s.listToRender.length)){const b=rt(s.highlightedIndex,s.listToRender.length);f({type:"InputKeyDownArrowDown",payload:{highlightedIndex:b}}),re(V[b].current,B.current)}};return i.createElement("div",{onKeyDown:Ve,className:z(n,"ffe-searchable-dropdown"),ref:Y,onMouseDown:Q,onFocus:Q},i.createElement("div",null,i.createElement("input",{...c,ref:ut([U,_]),id:e,"aria-labelledby":t,className:"ffe-input-field",onClick:je,onChange:l=>{c!=null&&c.onChange&&c.onChange(l),f({type:"InputChange",payload:{inputValue:l.target.value}})},onFocus:()=>De(!0),onBlur:_e,"aria-describedby":[c==null?void 0:c["aria-describedby"],s.noMatch&&$].filter(Boolean).join(" ")||void 0,value:q(s.inputValue),type:"text",role:"combobox",autoComplete:"off","aria-controls":((W=B.current)==null?void 0:W.getAttribute("id"))??void 0,"aria-expanded":s.isExpanded&&!!s.listToRender.length,"aria-autocomplete":"list","aria-haspopup":"listbox","aria-activedescendant":s.highlightedIndex>=0?((X=(P=V[s.highlightedIndex])==null?void 0:P.current)==null?void 0:X.getAttribute("id"))??void 0:void 0,"aria-invalid":H["aria-invalid"]??D}),i.createElement("button",{type:"button",ref:G,"aria-label":s.isExpanded?$e(w):Ke(w),className:z("ffe-searchable-dropdown__button",{"ffe-searchable-dropdown__button--flip":s.isExpanded}),onClick:()=>{f({type:"ToggleButtonPressed"})}},v?i.createElement(Fe,null):i.createElement(Oe,{fileUrl:"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgLTk2MCA5NjAgOTYwIiB3aWR0aD0iMjQiPjxwYXRoIGQ9Ik00ODAtMzczLjUzOXEtNy4yMzEgMC0xMy40NjEtMi4zMDgtNi4yMzEtMi4zMDgtMTEuODQ2LTcuOTIzTDI3NC45MjQtNTYzLjUzOXEtOC4zMDgtOC4zMDctOC41LTIwLjg4NC0uMTkzLTEyLjU3NyA4LjUtMjEuMjY5IDguNjkyLTguNjkyIDIxLjA3Ni04LjY5MnQyMS4wNzYgOC42OTJMNDgwLTQ0Mi43NjhsMTYyLjkyNC0xNjIuOTI0cTguMzA3LTguMzA3IDIwLjg4NC04LjUgMTIuNTc2LS4xOTIgMjEuMjY4IDguNSA4LjY5MyA4LjY5MiA4LjY5MyAyMS4wNzcgMCAxMi4zODQtOC42OTMgMjEuMDc2TDUwNS4zMDctMzgzLjc3cS01LjYxNSA1LjYxNS0xMS44NDYgNy45MjMtNi4yMyAyLjMwOC0xMy40NjEgMi4zMDhaIi8+PC9zdmc+",size:"md",className:"ffe-searchable-dropdown__button-icon"}))),i.createElement("div",{tabIndex:-1,className:z("ffe-searchable-dropdown__list",{"ffe-searchable-dropdown__list--open":s.isExpanded})},i.createElement("div",{ref:B,id:`${e}-listbox`,role:"listbox"},s.isExpanded&&i.createElement(Le,{listToRender:s.listToRender,ListItemBodyElement:qe,highlightedIndex:s.highlightedIndex,dropdownAttributes:u,locale:w,refs:V,onChange:l=>{F.current=!0,f({type:"ItemOnClick",payload:{selectedItem:l}}),d==null||d(l)},noMatch:s.noMatch?g:void 0,noMatchMessageId:$,selectedItem:s.selectedItem}),y&&i.createElement("div",{className:"ffe-searchable-dropdown__list--post-list-element"},y))))}const T=Se(ft);T.__docgenInfo={description:"",methods:[],displayName:"SearchableDropdown",props:{id:{required:!0,tsType:{name:"string"},description:"Id of drop down"},labelledById:{required:!1,tsType:{name:"string"},description:"Id of element that labels input field"},className:{required:!1,tsType:{name:"string"},description:"Extra class"},dropdownList:{required:!0,tsType:{name:"Array",elements:[{name:"Item"}],raw:"Item[]"},description:"List of objects to be displayed in dropdown"},selectedItem:{required:!1,tsType:{name:"union",raw:"Item | null",elements:[{name:"Item"},{name:"null"}]},description:"The selected item to be displayed in the input field. If not specified, uses internal state to decide."},dropdownAttributes:{required:!0,tsType:{name:"Array",elements:[{name:"unknown"}],raw:"(keyof Item)[]"},description:"Array of attributes to be displayed in list"},searchAttributes:{required:!0,tsType:{name:"Array",elements:[{name:"unknown"}],raw:"(keyof Item)[]"},description:"Array of attributes used when filtering search"},inputProps:{required:!1,tsType:{name:"ReactComponentProps",raw:"React.ComponentProps<'input'>",elements:[{name:"literal",value:"'input'"}]},description:"Props used on input field"},maxRenderedDropdownElements:{required:!1,tsType:{name:"number"},description:"Limits number of rendered dropdown elements",defaultValue:{value:"Number.MAX_SAFE_INTEGER",computed:!0}},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(item: Item | null) => void",signature:{arguments:[{type:{name:"union",raw:"Item | null",elements:[{name:"Item"},{name:"null"}]},name:"item"}],return:{name:"void"}}},description:"Called when a value is selected"},listElementBody:{required:!1,tsType:{name:"ReactComponentType",raw:`React.ComponentType<{
    item: Item;
    isHighlighted: boolean;
    dropdownAttributes: (keyof Item)[];
    locale: Locale;
}>`,elements:[{name:"signature",type:"object",raw:`{
    item: Item;
    isHighlighted: boolean;
    dropdownAttributes: (keyof Item)[];
    locale: Locale;
}`,signature:{properties:[{key:"item",value:{name:"Item",required:!0}},{key:"isHighlighted",value:{name:"boolean",required:!0}},{key:"dropdownAttributes",value:{name:"Array",elements:[{name:"unknown"}],raw:"(keyof Item)[]",required:!0}},{key:"locale",value:{name:"union",raw:"'nb' | 'nn' | 'en'",elements:[{name:"literal",value:"'nb'"},{name:"literal",value:"'nn'"},{name:"literal",value:"'en'"}],required:!0}}]}}]},description:"Custom element to use for each item in dropDownList"},postListElement:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Element to be shown below dropDownList"},noMatch:{required:!1,tsType:{name:"signature",type:"object",raw:`{
    text?: string;
    dropdownList?: Item[];
}`,signature:{properties:[{key:"text",value:{name:"string",required:!1}},{key:"dropdownList",value:{name:"Array",elements:[{name:"Item"}],raw:"Item[]",required:!1}}]}},description:"Message and a dropdownList to use when no match"},locale:{required:!1,tsType:{name:"union",raw:"'nb' | 'nn' | 'en'",elements:[{name:"literal",value:"'nb'"},{name:"literal",value:"'nn'"},{name:"literal",value:"'en'"}]},description:"Locale to use for translations",defaultValue:{value:"'nb'",computed:!1}},"aria-invalid":{required:!1,tsType:{name:"AriaAttributes['aria-invalid']",raw:"AriaAttributes['aria-invalid']"},description:"aria-invalid attribute"},ariaInvalid:{required:!1,tsType:{name:"AriaAttributes['aria-invalid']",raw:"AriaAttributes['aria-invalid']"},description:""},formatter:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string) => string",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"string"}}},description:"Function used to format the input field value",defaultValue:{value:"value => value",computed:!1}},searchMatcher:{required:!1,tsType:{name:"signature",type:"function",raw:`(
    inputValue: string,
    searchAttributes: Array<keyof Item>,
) => (item: Item) => boolean`,signature:{arguments:[{type:{name:"string"},name:"inputValue"},{type:{name:"Array",elements:[{name:"Item"}],raw:"Array<keyof Item>"},name:"searchAttributes"}],return:{name:"signature",type:"function",raw:"(item: Item) => boolean",signature:{arguments:[{type:{name:"Item"},name:"item"}],return:{name:"boolean"}}}}},description:`Function used to decide if an item matches the input field value
(inputValue: string, searchAttributes: string[]) => (item) => boolean`},isLoading:{required:!1,tsType:{name:"boolean"},description:`For situations where the dropdownList prop will be updated at a later point in time.
That is, if the consumer first sends down an initial value before sending down data
that has loaded.`,defaultValue:{value:"false",computed:!1}},onOpen:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Function used when dropdown opens"},onClose:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Function used when dropdown closes"}}};const O=[{organizationName:"Bedriften",organizationNumber:"912602370",quantityUnprocessedMessages:5},{organizationName:"Sønn & co",organizationNumber:"812602372",quantityUnprocessedMessages:3},{organizationName:"Beslag skytter",organizationNumber:"812602552",quantityUnprocessedMessages:1}],yt={title:"components/searchable-dropdown/SearchableDropdown",component:T,argTypes:{postListElement:{options:["html","text","none"],mapping:{html:i.createElement("span",null,"Some text describing the list"),text:"Some text describing the list",none:void 0}},listElementBody:{options:["custom","none"],mapping:{custom:({item:e,isHighlighted:t})=>i.createElement("div",{style:{padding:Ue,background:t?Ge:Ye}},i.createElement("div",null,e.organizationName),i.createElement("div",{style:{display:"flex",justifyContent:"space-between"}},i.createElement(ee,null,e.organizationNumber),i.createElement(ee,null,e.quantityUnprocessedMessages," ulest"))),none:void 0}}}},h={args:{id:"id",labelledById:"labelled-by-id",dropdownList:O,dropdownAttributes:["organizationName"],searchAttributes:["organizationName"],noMatch:{text:"Søket ga ingen treff"},inputProps:{placeholder:"Velg"},postListElement:"none"},render:function({id:t,labelledById:n,...r}){return i.createElement(R,{label:"Velg bedrift",labelId:n,inputId:t},i.createElement(T,{id:t,labelledById:n,...r}))}},x={args:{...h.args,dropdownAttributes:["organizationName","organizationNumber"]},render:function({id:t,labelledById:n,...r}){return i.createElement(R,{label:"Velg bedrift",labelId:n,inputId:t},i.createElement(T,{id:t,labelledById:n,...r}))}},M={args:{...h.args,searchMatcher:(e,t)=>n=>{const r=o=>`${o}`.replace(/\s/g,"").toLowerCase(),u=r(e);return t.map(o=>r(n[o])).some(o=>o.includes(u))}},render:function({id:t,labelledById:n,...r}){return i.createElement(R,{label:"Velg bedrift",labelId:n,inputId:t},i.createElement(T,{id:t,labelledById:n,...r}))}},L={args:{...h.args,noMatch:{text:"Søket ga ingen treff",dropdownList:O.slice(1,4)}},render:function({id:t,labelledById:n,...r}){return i.createElement(R,{label:"Velg bedrift",labelId:n,inputId:t},i.createElement(T,{id:t,labelledById:n,...r}))}},N={args:{...h.args,selectedItem:O[2]},render:function({id:t,labelledById:n,...r}){return i.createElement(R,{label:"Velg bedrift",labelId:n,inputId:t},i.createElement(T,{id:t,labelledById:n,...r}))}},k={args:{...h.args,postListElement:i.createElement("span",null,"Some text describing the list")},render:function({id:t,labelledById:n,...r}){return i.createElement(R,{label:"Velg bedrift",labelId:n,inputId:t},i.createElement(T,{id:t,labelledById:n,...r}))}};var ae,ie,se;h.parameters={...h.parameters,docs:{...(ae=h.parameters)==null?void 0:ae.docs,source:{originalSource:`{
  args: {
    id: 'id',
    labelledById: 'labelled-by-id',
    dropdownList: companies,
    dropdownAttributes: ['organizationName'],
    searchAttributes: ['organizationName'],
    noMatch: {
      text: 'Søket ga ingen treff'
    },
    inputProps: {
      placeholder: 'Velg'
    },
    postListElement: 'none'
  },
  render: function Render({
    id,
    labelledById,
    ...args
  }) {
    return <InputGroup label="Velg bedrift" labelId={labelledById} inputId={id}>
                <SearchableDropdown id={id} labelledById={labelledById} {...args} />
            </InputGroup>;
  }
}`,...(se=(ie=h.parameters)==null?void 0:ie.docs)==null?void 0:se.source}}};var le,oe,de;x.parameters={...x.parameters,docs:{...(le=x.parameters)==null?void 0:le.docs,source:{originalSource:`{
  args: {
    ...Standard.args,
    dropdownAttributes: ['organizationName', 'organizationNumber']
  },
  render: function Render({
    id,
    labelledById,
    ...args
  }) {
    return <InputGroup label="Velg bedrift" labelId={labelledById} inputId={id}>
                <SearchableDropdown id={id} labelledById={labelledById} {...args} />
            </InputGroup>;
  }
}`,...(de=(oe=x.parameters)==null?void 0:oe.docs)==null?void 0:de.source}}};var ue,ce,me;M.parameters={...M.parameters,docs:{...(ue=M.parameters)==null?void 0:ue.docs,source:{originalSource:`{
  args: {
    ...Standard.args,
    searchMatcher: (inputValue, searchAttributes) => item => {
      const cleanString = (value: string) => \`\${value}\`.replace(/\\s/g, '').toLowerCase();
      const cleanedInputValue = cleanString(inputValue);
      return searchAttributes.map(searchAttribute => cleanString(item[searchAttribute])).some(cleanedItemAttribute => cleanedItemAttribute.includes(cleanedInputValue));
    }
  },
  render: function Render({
    id,
    labelledById,
    ...args
  }) {
    return <InputGroup label="Velg bedrift" labelId={labelledById} inputId={id}>
                <SearchableDropdown id={id} labelledById={labelledById} {...args} />
            </InputGroup>;
  }
}`,...(me=(ce=M.parameters)==null?void 0:ce.docs)==null?void 0:me.source}}};var pe,ge,fe;L.parameters={...L.parameters,docs:{...(pe=L.parameters)==null?void 0:pe.docs,source:{originalSource:`{
  args: {
    ...Standard.args,
    noMatch: {
      text: 'Søket ga ingen treff',
      dropdownList: companies.slice(1, 4)
    }
  },
  render: function Render({
    id,
    labelledById,
    ...args
  }) {
    return <InputGroup label="Velg bedrift" labelId={labelledById} inputId={id}>
                <SearchableDropdown id={id} labelledById={labelledById} {...args} />
            </InputGroup>;
  }
}`,...(fe=(ge=L.parameters)==null?void 0:ge.docs)==null?void 0:fe.source}}};var ye,Ie,be;N.parameters={...N.parameters,docs:{...(ye=N.parameters)==null?void 0:ye.docs,source:{originalSource:`{
  args: {
    ...Standard.args,
    selectedItem: companies[2]
  },
  render: function Render({
    id,
    labelledById,
    ...args
  }) {
    return <InputGroup label="Velg bedrift" labelId={labelledById} inputId={id}>
                <SearchableDropdown id={id} labelledById={labelledById} {...args} />
            </InputGroup>;
  }
}`,...(be=(Ie=N.parameters)==null?void 0:Ie.docs)==null?void 0:be.source}}};var he,we,ve;k.parameters={...k.parameters,docs:{...(he=k.parameters)==null?void 0:he.docs,source:{originalSource:`{
  args: {
    ...Standard.args,
    postListElement: <span>Some text describing the list</span>
  },
  render: function Render({
    id,
    labelledById,
    ...args
  }) {
    return <InputGroup label="Velg bedrift" labelId={labelledById} inputId={id}>
                <SearchableDropdown id={id} labelledById={labelledById} {...args} />
            </InputGroup>;
  }
}`,...(ve=(we=k.parameters)==null?void 0:we.docs)==null?void 0:ve.source}}};const It=["Standard","DropdownAttributes","CustomSearch","ExtraResults","SelectedItem","PostListElement"],xt=Object.freeze(Object.defineProperty({__proto__:null,CustomSearch:M,DropdownAttributes:x,ExtraResults:L,PostListElement:k,SelectedItem:N,Standard:h,__namedExportsOrder:It,default:yt},Symbol.toStringTag,{value:"Module"}));export{M as C,x as D,L as E,k as P,xt as S,h as a,N as b};
