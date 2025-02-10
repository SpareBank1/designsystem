import{R as t,r as f}from"./index-eCxJ45ll.js";import{c as xe}from"./index-DezCrw0f.js";import{S as K,i as je}from"./index-UHo_6ElD.js";import{I as _e}from"./Icon-B88nEPeu.js";import{g as A,f as Fe,u as ze,a as qe,b as Oe,c as Ge,d as ne,e as re,m as He,T as Ke,L as Ue,R as Qe,h as We,s as ae,i as le,j as Ye}from"./ListBox-gcJ7m5Uq.js";import{C as Pe,a as Xe}from"./ChipRemovable-y3jM1fRB.js";import{I as E}from"./InputGroup-B73IVGIl.js";import{T as Ze}from"./TertiaryButton-c9j_cgsc.js";const $e="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgLTk2MCA5NjAgOTYwIiB3aWR0aD0iMjQiPgogICAgPHBhdGgKICAgICAgICBkPSJtMzgyLTM2Mi4xMzEgMzM0LjY5Ni0zMzQuNjk1UTczMC4zNy03MTAuNSA3NDguNzYxLTcxMC41dDMyLjA2NSAxMy42NzRRNzk0LjUtNjgzLjE1MiA3OTQuNS02NjQuMzhxMCAxOC43NzEtMTMuNjc0IDMyLjQ0NUw0MTQuMDY1LTI2NC40MTNRNDAwLjM5MS0yNTAuNzM5IDM4Mi0yNTAuNzM5dC0zMi4wNjUtMTMuNjc0TDE3OC40MTMtNDM1LjkzNXEtMTMuNjc0LTEzLjY3NC0xMy4yOTQtMzIuNDQ1LjM4MS0xOC43NzIgMTQuMDU1LTMyLjQ0NlQyMTEuNjItNTE0LjVxMTguNzcxIDAgMzIuNDQ1IDEzLjY3NEwzODItMzYyLjEzMVoiIC8+Cjwvc3ZnPg==";function Se({item:s,dropdownAttributes:r,isHighlighted:d}){const[i,...c]=r,p=s[i],n=c.map((a,u)=>t.createElement(K,{className:"ffe-searchable-dropdown__detail-text",key:u},s[a]));return t.createElement("div",{className:xe("ffe-searchable-dropdown__list-item-body",{"ffe-searchable-dropdown__list-item-body--highlighted":d,"ffe-searchable-dropdown__list-item-body--condensed":!!n.length})},t.createElement("div",{className:"ffe-searchable-dropdown__list-item-body-content"},p,!!n.length&&t.createElement("div",{className:"ffe-searchable-dropdown__list-item-body-details"},n)),t.createElement(_e,{fileUrl:$e,size:"md",className:"ffe-searchable-dropdown__selected-icon"}))}Se.__docgenInfo={description:"",methods:[],displayName:"MultiselectOptionBody",props:{item:{required:!0,tsType:{name:"Item"},description:""},dropdownAttributes:{required:!0,tsType:{name:"Array",elements:[{name:"unknown"}],raw:"(keyof Item)[]"},description:""},isHighlighted:{required:!0,tsType:{name:"boolean"},description:""}}};const H=(s,r,d,i)=>d==="removed"?s.filter(c=>!r.some(p=>i(c,p))):s.concat(r).filter((c,p,n)=>n.findIndex(a=>i(c,a))===p),se=(s,r,d)=>s!=null&&s.some(i=>d(i,r))?"removed":"selected",Je=({searchAttributes:s,dropdownList:r,noMatchDropdownList:d,maxRenderedDropdownElements:i,searchMatcher:c,isEqual:p})=>(n,a)=>{var u,C,v,y,w,L,j,N,b,x,_;switch(a.type){case"InputKeyDownEscape":return{...n,noMatch:!1,isExpanded:!1,highlightedIndex:-1,inputValue:""};case"InputClick":{const{noMatch:g,listToRender:I}=A({inputValue:n.inputValue,searchAttributes:s,maxRenderedDropdownElements:i,dropdownList:r,noMatchDropdownList:d,searchMatcher:c,showAllItemsInDropdown:!0});return{...n,isExpanded:!0,listToRender:I,noMatch:g}}case"RemoveItem":return(u=a.payload)!=null&&u.items?{...n,highlightedIndex:-1,selectedItems:H(n.selectedItems,a.payload.items,"removed",p),inputValue:""}:n;case"InputChange":{const{noMatch:g,listToRender:I}=A({inputValue:((C=a.payload)==null?void 0:C.inputValue)??"",searchAttributes:s,maxRenderedDropdownElements:i,dropdownList:r,noMatchDropdownList:d,searchMatcher:c,showAllItemsInDropdown:!1});return{...n,isExpanded:!0,inputValue:((v=a.payload)==null?void 0:v.inputValue)??"",listToRender:I,highlightedIndex:((w=(y=a.payload)==null?void 0:y.inputValue)==null?void 0:w.trim())===""||I.length===0?-1:0,noMatch:g}}case"ToggleButtonPressed":return{...n,isExpanded:!n.isExpanded};case"ItemSelectedProgrammatically":return(L=a.payload)!=null&&L.items?{...n,selectedItems:H(n.selectedItems,a.payload.items,"selected",p)}:n;case"ItemOnClick":case"InputKeyDownEnter":if((j=a.payload)!=null&&j.items){const{noMatch:g,listToRender:I}=A({inputValue:"",searchAttributes:s,maxRenderedDropdownElements:i,dropdownList:r,noMatchDropdownList:d,searchMatcher:c,showAllItemsInDropdown:!0});return{...n,isExpanded:!0,highlightedIndex:n.inputValue.trim()===""?((N=a.payload)==null?void 0:N.highlightedIndex)??-1:-1,selectedItems:H(n.selectedItems,a.payload.items,((b=a.payload)==null?void 0:b.actionType)??"selected",p),listToRender:I,inputValue:"",noMatch:g}}return n;case"InputKeyDownArrowDown":case"InputKeyDownArrowUp":{const g=document.activeElement;return(g==null?void 0:g.getAttribute("role"))==="combobox"?{...n,isExpanded:!0,highlightedIndex:((x=a.payload)==null?void 0:x.highlightedIndex)??-1}:n}case"TabPressed":return{...n,highlightedIndex:-1};case"FocusMovedOutSide":return{...n,isExpanded:!1,highlightedIndex:-1,inputValue:""};case"DropdownListPropUpdated":return{...n,...A({inputValue:n.inputValue,searchAttributes:s,maxRenderedDropdownElements:i,dropdownList:r,noMatchDropdownList:d,searchMatcher:c,showAllItemsInDropdown:((_=n.inputValue)==null?void 0:_.trim().length)===0})};default:return n}},et="ArrowUp",tt="ArrowDown",nt="Escape",rt="Enter",at="Tab",lt="Backspace";function st({id:s,labelledById:r,className:d,dropdownList:i,dropdownAttributes:c,searchAttributes:p,maxRenderedDropdownElements:n=Number.MAX_SAFE_INTEGER,onChange:a,inputProps:u,optionBody:C,postListElement:v,noMatch:y,locale:w="nb",ariaInvalid:L,formatter:j=e=>e,searchMatcher:N,selectedItems:b,isLoading:x=!1,onOpen:_,onClose:g,showNumberSelectedAfter:I,isEqual:F=je,...Ae},Me){var Z,$,J,ee,te;const[e,m]=f.useReducer(Je({dropdownList:i,searchAttributes:p,maxRenderedDropdownElements:n,noMatchDropdownList:y==null?void 0:y.dropdownList,searchMatcher:N,isEqual:F}),{isExpanded:!1,selectedItems:[],highlightedIndex:-1,inputValue:""},l=>({...l,...A({inputValue:l.inputValue,searchAttributes:p,maxRenderedDropdownElements:n,dropdownList:i,noMatchDropdownList:y==null?void 0:y.dropdownList,searchMatcher:N,showAllItemsInDropdown:!!(b!=null&&b.length)})})),z=ze({listToRender:e.listToRender}),[Re,ke]=f.useState(!1),G=f.useRef(null),U=f.useRef(null),Q=f.useRef(null),De=C||Se,q=f.useRef(null),W=f.useId(),Y=f.useRef(!1),S=f.useRef(!1),[P,X]=f.useState(!0),Be=()=>{m({type:"InputClick"}),S.current=!0},Ve=l=>{u!=null&&u.onBlur&&u.onBlur(l)};qe({hasFocus:Re,isExpanded:e.isExpanded,isLoading:x,locale:w,resultCount:e.listToRender.length,selectedValue:(Z=e.selectedItems[e.selectedItems.length-1])==null?void 0:Z[p[0]]}),f.useLayoutEffect(()=>{var l,o;Y.current?((l=U.current)==null||l.focus(),Y.current=!1):S.current&&((o=G.current)==null||o.focus(),S.current=!1)}),f.useEffect(()=>{m({type:"DropdownListPropUpdated"})},[i,m]),Oe({isExpanded:e.isExpanded,onClose:g,onOpen:_});const Ce=f.useCallback(()=>m({type:"FocusMovedOutSide"}),[]);f.useEffect(()=>{I!==void 0&&(e.selectedItems.length>I?X(!1):X(!0))},[e.selectedItems,I]),f.useEffect(()=>{b&&m({type:"ItemSelectedProgrammatically",payload:{items:b}})},[b,m]),Ge({id:s,containerRef:Q,handelFocusMovedOutside:Ce});const Le=l=>{if(l.key===rt&&e.highlightedIndex>=0){l.preventDefault();const o=e.listToRender[e.highlightedIndex],O=se(e.selectedItems,o,F);m({type:"InputKeyDownEnter",payload:{items:[o],actionType:O,highlightedIndex:e.highlightedIndex}}),a==null||a(o,O);return}else if(l.key===nt){m({type:"InputKeyDownEscape"});return}else if(l.key===et){if(l.preventDefault(),e.listToRender.length){const o=We(e.highlightedIndex,e.listToRender.length);m({type:"InputKeyDownArrowUp",payload:{highlightedIndex:o}}),o>=0&&ae(e==null?void 0:e.listToRender[o],c),le(z[o].current,q.current)}return}else if(l.key===tt){if(l.preventDefault(),e.listToRender.length){const o=Ye(e.highlightedIndex,e.listToRender.length);m({type:"InputKeyDownArrowDown",payload:{highlightedIndex:o}}),o>=0&&ae(e==null?void 0:e.listToRender[o],c),le(z[o].current,q.current)}}else if(l.key===lt){if(e.inputValue===""&&e.selectedItems.length>0&&P){const o=e.selectedItems[e.selectedItems.length-1];m({type:"RemoveItem",payload:{items:[o],actionType:"removed"}}),a==null||a(o,"removed")}}else if(l.key===at){m({type:"TabPressed",payload:{highlightedIndex:-1}});return}};return t.createElement("div",{onKeyDown:Le,ref:Q,onMouseDown:ne(s),onFocus:ne(s),className:xe(d,"ffe-searchable-dropdown","ffe-searchable-dropdown--multi")},t.createElement("div",{className:"ffe-searchable-dropdown__input",onClick:()=>{var l;(l=G.current)==null||l.click()}},P?($=e.selectedItems)==null?void 0:$.map((l,o)=>t.createElement(Pe,{as:"button",type:"button",size:"sm",key:o,"aria-label":`${l[c[0]]}, fjern valg`,onClick:O=>{O.stopPropagation(),m({type:"RemoveItem",payload:{items:[l]}}),a==null||a(l,"removed"),S.current=!0}},l[c[0]])):t.createElement(Xe,{size:"sm","aria-label":re(w,e.selectedItems.length),as:"span",role:"presentation",className:"ffe-chip--multiple-selected"},re(w,e.selectedItems.length)),t.createElement("input",{...u,placeholder:e.selectedItems.length>0?"":u==null?void 0:u.placeholder,ref:He([G,Me]),id:s,"aria-labelledby":r,onClick:Be,onChange:l=>{var o;(o=u==null?void 0:u.onChange)==null||o.call(u,l),m({type:"InputChange",payload:{inputValue:l.target.value}})},onFocus:()=>ke(!0),onBlur:Ve,"aria-describedby":[u==null?void 0:u["aria-describedby"],e.noMatch&&W].filter(Boolean).join(" ")||void 0,value:j(e.inputValue),type:"text",role:"combobox",autoComplete:"off","aria-controls":((J=q.current)==null?void 0:J.getAttribute("id"))??void 0,"aria-expanded":e.isExpanded&&!!e.listToRender.length,"aria-autocomplete":"list","aria-haspopup":"listbox","aria-activedescendant":e.highlightedIndex>=0?((te=(ee=z[e.highlightedIndex])==null?void 0:ee.current)==null?void 0:te.getAttribute("id"))??void 0:void 0,"aria-invalid":Ae["aria-invalid"]??L})),t.createElement(Ke,{ref:U,isExpanded:e.isExpanded,onClick:()=>m({type:"ToggleButtonPressed"}),locale:w,isLoading:x}),t.createElement(Ue,{ref:q,isExpanded:e.isExpanded},e.isExpanded&&t.createElement(Qe,{isEqual:F,listToRender:e.listToRender,OptionBody:De,highlightedIndex:e.highlightedIndex,dropdownAttributes:c,locale:w,refs:z,onChange:l=>{const o=se(e.selectedItems,l,F);m({type:"ItemOnClick",payload:{items:[l],actionType:o}}),S.current=!0,a==null||a(l,o)},noMatch:e.noMatch?y:void 0,noMatchMessageId:W,selectedItems:e.selectedItems}),v&&t.createElement("div",{className:"ffe-searchable-dropdown__list--post-list-element"},v)))}const T=Fe(st);T.__docgenInfo={description:"",methods:[],displayName:"SearchableDropdownMultiSelect",props:{id:{required:!0,tsType:{name:"string"},description:"Id of drop down"},labelledById:{required:!1,tsType:{name:"string"},description:"Id of element that labels input field"},className:{required:!1,tsType:{name:"string"},description:"Extra class"},dropdownList:{required:!0,tsType:{name:"Array",elements:[{name:"Item"}],raw:"Item[]"},description:"List of objects to be displayed in dropdown"},selectedItems:{required:!1,tsType:{name:"union",raw:"Item[] | null",elements:[{name:"Array",elements:[{name:"Item"}],raw:"Item[]"},{name:"null"}]},description:"The selected items to be displayed in the input field. If not specified, uses internal state to decide."},dropdownAttributes:{required:!0,tsType:{name:"Array",elements:[{name:"unknown"}],raw:"(keyof Item)[]"},description:"Array of attributes to be displayed in list. The first will be the title and the chip value"},searchAttributes:{required:!0,tsType:{name:"Array",elements:[{name:"unknown"}],raw:"(keyof Item)[]"},description:"Array of attributes used when filtering search"},inputProps:{required:!1,tsType:{name:"ReactComponentProps",raw:"React.ComponentProps<'input'>",elements:[{name:"literal",value:"'input'"}]},description:"Props used on input field"},maxRenderedDropdownElements:{required:!1,tsType:{name:"number"},description:"Limits number of rendered dropdown elements",defaultValue:{value:"Number.MAX_SAFE_INTEGER",computed:!0}},onChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(item: Item, actionType: 'selected' | 'removed') => void",signature:{arguments:[{type:{name:"Item"},name:"item"},{type:{name:"union",raw:"'selected' | 'removed'",elements:[{name:"literal",value:"'selected'"},{name:"literal",value:"'removed'"}]},name:"actionType"}],return:{name:"void"}}},description:"Called when a value is selected"},optionBody:{required:!1,tsType:{name:"ReactComponentType",raw:`React.ComponentType<{
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
If you always want "X selected" showing, pass in 0`},isEqual:{required:!1,tsType:{name:"signature",type:"function",raw:"(itemA: Item, itemB: Item) => boolean",signature:{arguments:[{type:{name:"Item"},name:"itemA"},{type:{name:"Item"},name:"itemB"}],return:{name:"boolean"}}},description:"Custom compare between objects. Default is deep equals",defaultValue:{value:"isDeepEqual",computed:!0}}}};const V=[{color:"Gul",displayName:"Bananer i klase, økologisk",amount:5},{color:"Grønn",displayName:"Pære",amount:3},{color:"Grønn, Rød",displayName:"Eple",amount:1},{color:"Oransje",displayName:"Appelsin",amount:2},{color:"Lilla, Grønn",displayName:"Druer",amount:1},{color:"Oransje",displayName:"Mandarin",amount:2},{color:"Grønn",displayName:"Kiwi",amount:1}],it=({item:s,isHighlighted:r})=>t.createElement("div",{style:{padding:"8px",background:r?"#ff9100":"white"}},t.createElement("div",null,s.color),t.createElement("div",{style:{display:"flex",justifyContent:"space-between",backgroundColor:"red"}},t.createElement(K,{className:"ffe-searchable-dropdown__detail-text"},s.displayName),t.createElement(K,{className:"ffe-searchable-dropdown__detail-text"},s.amount," ulest"))),dt={title:"Komponenter/Searchable-dropdown/SearchableDropdownMultiSelect",component:T,argTypes:{postListElement:{options:["html","text","none"],mapping:{html:t.createElement("span",null,"Some text describing the list"),text:"Some text describing the list",none:void 0}},optionBody:{options:["custom","none"],mapping:{custom:it,none:void 0}}}},h={args:{id:"id",labelledById:"labelled-by-id",dropdownList:V,dropdownAttributes:["displayName"],searchAttributes:["displayName","color"],noMatch:{text:"Søket ga ingen treff på frukt"},inputProps:{placeholder:"Søk"},postListElement:"none"},render:function({id:r,labelledById:d,...i}){return t.createElement(t.Fragment,null,t.createElement(E,{label:"Velg frukt",labelId:d,inputId:r},t.createElement(T,{id:r,...i})))}},M={args:{...h.args,dropdownAttributes:["displayName","color","amount"]},render:function({id:r,labelledById:d,...i}){return t.createElement(E,{label:"Velg frukt",labelId:d,inputId:r},t.createElement(T,{id:r,labelledById:d,...i}))}},R={args:{...h.args,selectedItems:[V[2],V[4]]},render:function({id:r,labelledById:d,...i}){return t.createElement(E,{label:"Velg frukt",labelId:d,inputId:r},t.createElement(T,{id:r,labelledById:d,...i}))}},k={args:{...h.args,postListElement:t.createElement("span",null,"Some text describing the list")},render:function({id:r,labelledById:d,...i}){return t.createElement(E,{label:"Velg frukt",labelId:d,inputId:r},t.createElement(T,{id:r,labelledById:d,...i}))}},D={args:{...h.args,showNumberSelectedAfter:2},render:function({id:r,labelledById:d,...i}){return t.createElement(E,{label:"Velg frukt",labelId:d,inputId:r},t.createElement(T,{id:r,labelledById:d,...i}))}},B={args:{...h.args,dropdownAttributes:["displayName","color","amount"]},render:function(r){const[d,i]=f.useState([V[0]]);return t.createElement("div",null,t.createElement(E,{label:"Velg frukt",inputId:r.id,labelId:r.labelledById},c=>t.createElement(t.Fragment,null,t.createElement(T,{...c,...r,selectedItems:d,onChange:(p,n)=>{i(n==="selected"?a=>a.concat(p):a=>a.filter(u=>u.displayName!==p.displayName))}}),t.createElement(Ze,{type:"button",onClick:()=>{i(V)}},"Velg alle"))))}};var ie,de,oe;h.parameters={...h.parameters,docs:{...(ie=h.parameters)==null?void 0:ie.docs,source:{originalSource:`{
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
}`,...(oe=(de=h.parameters)==null?void 0:de.docs)==null?void 0:oe.source}}};var ue,ce,pe;M.parameters={...M.parameters,docs:{...(ue=M.parameters)==null?void 0:ue.docs,source:{originalSource:`{
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
}`,...(pe=(ce=M.parameters)==null?void 0:ce.docs)==null?void 0:pe.source}}};var me,fe,ge;R.parameters={...R.parameters,docs:{...(me=R.parameters)==null?void 0:me.docs,source:{originalSource:`{
  args: {
    ...Standard.args,
    selectedItems: [fruits[2], fruits[4]]
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
}`,...(ge=(fe=R.parameters)==null?void 0:fe.docs)==null?void 0:ge.source}}};var ye,Ie,he;k.parameters={...k.parameters,docs:{...(ye=k.parameters)==null?void 0:ye.docs,source:{originalSource:`{
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
}`,...(he=(Ie=k.parameters)==null?void 0:Ie.docs)==null?void 0:he.source}}};var be,we,Te;D.parameters={...D.parameters,docs:{...(be=D.parameters)==null?void 0:be.docs,source:{originalSource:`{
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
}`,...(Te=(we=D.parameters)==null?void 0:we.docs)==null?void 0:Te.source}}};var Ee,ve,Ne;B.parameters={...B.parameters,docs:{...(Ee=B.parameters)==null?void 0:Ee.docs,source:{originalSource:`{
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
}`,...(Ne=(ve=B.parameters)==null?void 0:ve.docs)==null?void 0:Ne.source}}};const ot=["Standard","MultipleDataResults","PreselectedItems","PostListElement","ShowNumberSelected","ControlledState"],ht=Object.freeze(Object.defineProperty({__proto__:null,ControlledState:B,MultipleDataResults:M,PostListElement:k,PreselectedItems:R,ShowNumberSelected:D,Standard:h,__namedExportsOrder:ot,default:dt},Symbol.toStringTag,{value:"Module"}));export{ht as S,h as a};
