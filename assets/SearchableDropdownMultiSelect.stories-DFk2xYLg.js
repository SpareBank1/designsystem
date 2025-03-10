import{R as t,r as y}from"./index-eCxJ45ll.js";import{c as ve}from"./index-DezCrw0f.js";import{S as K,i as Ce}from"./index-B3RHW42C.js";import{I as Le}from"./Icon-B88nEPeu.js";import{g as A,f as je,u as _e,a as Fe,b as ze,c as qe,d as ee,e as te,m as Oe,T as Ge,L as He,R as Ke,h as Ue,s as ne,i as re,j as Qe}from"./ListBox-Bj1VzpA2.js";import{C as We,a as Ye}from"./ChipRemovable-y3jM1fRB.js";import{I as E}from"./InputGroup-DfxAwG5P.js";import{T as Xe}from"./TertiaryButton-c9j_cgsc.js";const Pe="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgLTk2MCA5NjAgOTYwIiB3aWR0aD0iMjQiPgogICAgPHBhdGgKICAgICAgICBkPSJtMzgyLTM2Mi4xMzEgMzM0LjY5Ni0zMzQuNjk1UTczMC4zNy03MTAuNSA3NDguNzYxLTcxMC41dDMyLjA2NSAxMy42NzRRNzk0LjUtNjgzLjE1MiA3OTQuNS02NjQuMzhxMCAxOC43NzEtMTMuNjc0IDMyLjQ0NUw0MTQuMDY1LTI2NC40MTNRNDAwLjM5MS0yNTAuNzM5IDM4Mi0yNTAuNzM5dC0zMi4wNjUtMTMuNjc0TDE3OC40MTMtNDM1LjkzNXEtMTMuNjc0LTEzLjY3NC0xMy4yOTQtMzIuNDQ1LjM4MS0xOC43NzIgMTQuMDU1LTMyLjQ0NlQyMTEuNjItNTE0LjVxMTguNzcxIDAgMzIuNDQ1IDEzLjY3NEwzODItMzYyLjEzMVoiIC8+Cjwvc3ZnPg==";function Ne({item:s,dropdownAttributes:n,isHighlighted:d}){const[i,...c]=n,m=s[i],r=c.map((a,u)=>t.createElement(K,{className:"ffe-searchable-dropdown__detail-text",key:u},s[a]));return t.createElement("div",{className:ve("ffe-searchable-dropdown__list-item-body",{"ffe-searchable-dropdown__list-item-body--highlighted":d,"ffe-searchable-dropdown__list-item-body--condensed":!!r.length})},t.createElement("div",{className:"ffe-searchable-dropdown__list-item-body-content"},m,!!r.length&&t.createElement("div",{className:"ffe-searchable-dropdown__list-item-body-details"},r)),t.createElement(Le,{fileUrl:Pe,size:"md",className:"ffe-searchable-dropdown__selected-icon"}))}Ne.__docgenInfo={description:"",methods:[],displayName:"MultiselectOptionBody",props:{item:{required:!0,tsType:{name:"Item"},description:""},dropdownAttributes:{required:!0,tsType:{name:"Array",elements:[{name:"unknown"}],raw:"(keyof Item)[]"},description:""},isHighlighted:{required:!0,tsType:{name:"boolean"},description:""}}};const H=(s,n,d,i)=>d==="removed"?s.filter(c=>!n.some(m=>i(c,m))):s.concat(n).filter((c,m,r)=>r.findIndex(a=>i(c,a))===m),ae=(s,n,d)=>s!=null&&s.some(i=>d(i,n))?"removed":"selected",Ze=({searchAttributes:s,dropdownList:n,noMatchDropdownList:d,maxRenderedDropdownElements:i,searchMatcher:c,isEqual:m})=>(r,a)=>{var u,C,v,g,T,L,j,N,b,S,_;switch(a.type){case"InputKeyDownEscape":return{...r,noMatch:!1,isExpanded:!1,highlightedIndex:-1,inputValue:""};case"InputClick":{const{noMatch:f,listToRender:I}=A({inputValue:r.inputValue,searchAttributes:s,maxRenderedDropdownElements:i,dropdownList:n,noMatchDropdownList:d,searchMatcher:c,showAllItemsInDropdown:!0});return{...r,isExpanded:!0,listToRender:I,noMatch:f}}case"RemoveItem":return(u=a.payload)!=null&&u.items?{...r,highlightedIndex:-1,selectedItems:H(r.selectedItems,a.payload.items,"removed",m),inputValue:""}:r;case"InputChange":{const{noMatch:f,listToRender:I}=A({inputValue:((C=a.payload)==null?void 0:C.inputValue)??"",searchAttributes:s,maxRenderedDropdownElements:i,dropdownList:n,noMatchDropdownList:d,searchMatcher:c,showAllItemsInDropdown:!1});return{...r,isExpanded:!0,inputValue:((v=a.payload)==null?void 0:v.inputValue)??"",listToRender:I,highlightedIndex:((T=(g=a.payload)==null?void 0:g.inputValue)==null?void 0:T.trim())===""||I.length===0?-1:0,noMatch:f}}case"ToggleButtonPressed":return{...r,isExpanded:!r.isExpanded};case"ItemSelectedProgrammatically":return(L=a.payload)!=null&&L.items?{...r,selectedItems:H(r.selectedItems,a.payload.items,"selected",m)}:r;case"ItemOnClick":case"InputKeyDownEnter":if((j=a.payload)!=null&&j.items){const{noMatch:f,listToRender:I}=A({inputValue:"",searchAttributes:s,maxRenderedDropdownElements:i,dropdownList:n,noMatchDropdownList:d,searchMatcher:c,showAllItemsInDropdown:!0});return{...r,isExpanded:!0,highlightedIndex:r.inputValue.trim()===""?((N=a.payload)==null?void 0:N.highlightedIndex)??-1:-1,selectedItems:H(r.selectedItems,a.payload.items,((b=a.payload)==null?void 0:b.actionType)??"selected",m),listToRender:I,inputValue:"",noMatch:f}}return r;case"InputKeyDownArrowDown":case"InputKeyDownArrowUp":{const f=document.activeElement;return(f==null?void 0:f.getAttribute("role"))==="combobox"?{...r,isExpanded:!0,highlightedIndex:((S=a.payload)==null?void 0:S.highlightedIndex)??-1}:r}case"FocusMovedOutSide":return{...r,isExpanded:!1,highlightedIndex:-1,inputValue:""};case"DropdownListPropUpdated":return{...r,...A({inputValue:r.inputValue,searchAttributes:s,maxRenderedDropdownElements:i,dropdownList:n,noMatchDropdownList:d,searchMatcher:c,showAllItemsInDropdown:((_=r.inputValue)==null?void 0:_.trim().length)===0})};default:return r}},$e="ArrowUp",Je="ArrowDown",et="Escape",tt="Enter",nt="Tab",rt="Backspace";function at({id:s,labelledById:n,className:d,dropdownList:i,dropdownAttributes:c,searchAttributes:m,maxRenderedDropdownElements:r=Number.MAX_SAFE_INTEGER,onChange:a,inputProps:u,optionBody:C,postListElement:v,noMatch:g,locale:T="nb",ariaInvalid:L,formatter:j=e=>e,searchMatcher:N,selectedItems:b,isLoading:S=!1,onOpen:_,onClose:f,showNumberSelectedAfter:I,isEqual:F=Ce,...Se},xe){var X,P,Z,$,J;const[e,p]=y.useReducer(Ze({dropdownList:i,searchAttributes:m,maxRenderedDropdownElements:r,noMatchDropdownList:g==null?void 0:g.dropdownList,searchMatcher:N,isEqual:F}),{isExpanded:!1,selectedItems:[],highlightedIndex:-1,inputValue:""},l=>({...l,...A({inputValue:l.inputValue,searchAttributes:m,maxRenderedDropdownElements:r,dropdownList:i,noMatchDropdownList:g==null?void 0:g.dropdownList,searchMatcher:N,showAllItemsInDropdown:!!(b!=null&&b.length)})})),z=_e({listToRender:e.listToRender}),[Ae,Me]=y.useState(!1),G=y.useRef(null),U=y.useRef(null),ke=C||Ne,q=y.useRef(null),Q=y.useId(),x=y.useRef(!1),[W,Y]=y.useState(!0),Re=()=>{p({type:"InputClick"}),x.current=!0},De=l=>{u!=null&&u.onBlur&&u.onBlur(l)};Fe({hasFocus:Ae,isExpanded:e.isExpanded,isLoading:S,locale:T,resultCount:e.listToRender.length,selectedValue:(X=e.selectedItems[e.selectedItems.length-1])==null?void 0:X[m[0]]}),y.useLayoutEffect(()=>{var l;x.current&&((l=G.current)==null||l.focus(),x.current=!1)}),y.useEffect(()=>{p({type:"DropdownListPropUpdated"})},[i,p]),ze({isExpanded:e.isExpanded,onClose:f,onOpen:_});const Be=y.useCallback(()=>p({type:"FocusMovedOutSide"}),[]);y.useEffect(()=>{I!==void 0&&(e.selectedItems.length>I?Y(!1):Y(!0))},[e.selectedItems,I]),y.useEffect(()=>{b&&p({type:"ItemSelectedProgrammatically",payload:{items:b}})},[b,p]),qe({id:s,containerRef:U,handleFocusMovedOutside:Be});const Ve=l=>{if(l.key===tt&&e.highlightedIndex>=0){l.preventDefault();const o=e.listToRender[e.highlightedIndex],O=ae(e.selectedItems,o,F);p({type:"InputKeyDownEnter",payload:{items:[o],actionType:O,highlightedIndex:e.highlightedIndex}}),a==null||a(o,O);return}else if(l.key===et){p({type:"InputKeyDownEscape"});return}else if(l.key===$e){if(l.preventDefault(),e.listToRender.length){const o=Ue(e.highlightedIndex,e.listToRender.length);p({type:"InputKeyDownArrowUp",payload:{highlightedIndex:o}}),o>=0&&ne(e==null?void 0:e.listToRender[o],c),re(z[o].current,q.current)}return}else if(l.key===Je){if(l.preventDefault(),e.listToRender.length){const o=Qe(e.highlightedIndex,e.listToRender.length);p({type:"InputKeyDownArrowDown",payload:{highlightedIndex:o}}),o>=0&&ne(e==null?void 0:e.listToRender[o],c),re(z[o].current,q.current)}}else if(l.key===rt){if(e.inputValue===""&&e.selectedItems.length>0&&W){const o=e.selectedItems[e.selectedItems.length-1];p({type:"RemoveItem",payload:{items:[o],actionType:"removed"}}),a==null||a(o,"removed")}}else if(l.key===nt){p({type:"FocusMovedOutSide"});return}};return t.createElement("div",{onKeyDown:Ve,ref:U,onMouseDown:ee(s),onFocus:ee(s),className:ve(d,"ffe-searchable-dropdown","ffe-searchable-dropdown--multi")},t.createElement("div",{className:"ffe-searchable-dropdown__input",onClick:()=>{var l;(l=G.current)==null||l.click()}},W?(P=e.selectedItems)==null?void 0:P.map((l,o)=>t.createElement(We,{as:"button",type:"button",size:"sm",key:o,"aria-label":`${l[c[0]]}, fjern valg`,onClick:O=>{O.stopPropagation(),p({type:"RemoveItem",payload:{items:[l]}}),a==null||a(l,"removed"),x.current=!0}},l[c[0]])):t.createElement(Ye,{size:"sm","aria-label":te(T,e.selectedItems.length),as:"span",role:"presentation",className:"ffe-chip--multiple-selected"},te(T,e.selectedItems.length)),t.createElement("input",{...u,placeholder:e.selectedItems.length>0?"":u==null?void 0:u.placeholder,ref:Oe([G,xe]),id:s,"aria-labelledby":n,onClick:Re,onChange:l=>{var o;(o=u==null?void 0:u.onChange)==null||o.call(u,l),p({type:"InputChange",payload:{inputValue:l.target.value}})},onFocus:()=>{Me(!0),p({type:"InputClick"})},onBlur:De,"aria-describedby":[u==null?void 0:u["aria-describedby"],e.noMatch&&Q].filter(Boolean).join(" ")||void 0,value:j(e.inputValue),type:"text",role:"combobox",autoComplete:"off","aria-controls":((Z=q.current)==null?void 0:Z.getAttribute("id"))??void 0,"aria-expanded":e.isExpanded&&!!e.listToRender.length,"aria-autocomplete":"list","aria-haspopup":"listbox","aria-activedescendant":e.highlightedIndex>=0?((J=($=z[e.highlightedIndex])==null?void 0:$.current)==null?void 0:J.getAttribute("id"))??void 0:void 0,"aria-invalid":Se["aria-invalid"]??L})),t.createElement(Ge,{isExpanded:e.isExpanded,onClick:()=>p({type:"ToggleButtonPressed"}),isLoading:S}),t.createElement(He,{ref:q,isExpanded:e.isExpanded},e.isExpanded&&t.createElement(Ke,{isEqual:F,listToRender:e.listToRender,OptionBody:ke,highlightedIndex:e.highlightedIndex,dropdownAttributes:c,locale:T,refs:z,onChange:l=>{const o=ae(e.selectedItems,l,F);p({type:"ItemOnClick",payload:{items:[l],actionType:o}}),x.current=!0,a==null||a(l,o)},noMatch:e.noMatch?g:void 0,noMatchMessageId:Q,selectedItems:e.selectedItems}),v&&t.createElement("div",{className:"ffe-searchable-dropdown__list--post-list-element"},v)))}const w=je(at);w.__docgenInfo={description:"",methods:[],displayName:"SearchableDropdownMultiSelect",props:{id:{required:!0,tsType:{name:"string"},description:"Id of drop down"},labelledById:{required:!1,tsType:{name:"string"},description:"Id of element that labels input field"},className:{required:!1,tsType:{name:"string"},description:"Extra class"},dropdownList:{required:!0,tsType:{name:"Array",elements:[{name:"Item"}],raw:"Item[]"},description:"List of objects to be displayed in dropdown"},selectedItems:{required:!1,tsType:{name:"union",raw:"Item[] | null",elements:[{name:"Array",elements:[{name:"Item"}],raw:"Item[]"},{name:"null"}]},description:"The selected items to be displayed in the input field. If not specified, uses internal state to decide."},dropdownAttributes:{required:!0,tsType:{name:"Array",elements:[{name:"unknown"}],raw:"(keyof Item)[]"},description:"Array of attributes to be displayed in list. The first will be the title and the chip value"},searchAttributes:{required:!0,tsType:{name:"Array",elements:[{name:"unknown"}],raw:"(keyof Item)[]"},description:"Array of attributes used when filtering search"},inputProps:{required:!1,tsType:{name:"ReactComponentProps",raw:"React.ComponentProps<'input'>",elements:[{name:"literal",value:"'input'"}]},description:"Props used on input field"},maxRenderedDropdownElements:{required:!1,tsType:{name:"number"},description:"Limits number of rendered dropdown elements",defaultValue:{value:"Number.MAX_SAFE_INTEGER",computed:!0}},onChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(item: Item, actionType: 'selected' | 'removed') => void",signature:{arguments:[{type:{name:"Item"},name:"item"},{type:{name:"union",raw:"'selected' | 'removed'",elements:[{name:"literal",value:"'selected'"},{name:"literal",value:"'removed'"}]},name:"actionType"}],return:{name:"void"}}},description:"Called when a value is selected"},optionBody:{required:!1,tsType:{name:"ReactComponentType",raw:`React.ComponentType<{
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
If you always want "X selected" showing, pass in 0`},isEqual:{required:!1,tsType:{name:"signature",type:"function",raw:"(itemA: Item, itemB: Item) => boolean",signature:{arguments:[{type:{name:"Item"},name:"itemA"},{type:{name:"Item"},name:"itemB"}],return:{name:"boolean"}}},description:"Custom compare between objects. Default is deep equals",defaultValue:{value:"isDeepEqual",computed:!0}}}};const V=[{color:"Gul",displayName:"Bananer i klase, økologisk",amount:5},{color:"Grønn",displayName:"Pære",amount:3},{color:"Grønn, Rød",displayName:"Eple",amount:1},{color:"Oransje",displayName:"Appelsin",amount:2},{color:"Lilla, Grønn",displayName:"Druer",amount:1},{color:"Oransje",displayName:"Mandarin",amount:2},{color:"Grønn",displayName:"Kiwi",amount:1}],lt=({item:s,isHighlighted:n})=>t.createElement("div",{style:{padding:"8px",background:n?"#ff9100":"white"}},t.createElement("div",null,s.color),t.createElement("div",{style:{display:"flex",justifyContent:"space-between",backgroundColor:"red"}},t.createElement(K,{className:"ffe-searchable-dropdown__detail-text"},s.displayName),t.createElement(K,{className:"ffe-searchable-dropdown__detail-text"},s.amount," ulest"))),st={title:"Komponenter/Searchable-dropdown/SearchableDropdownMultiSelect",component:w,argTypes:{postListElement:{options:["html","text","none"],mapping:{html:t.createElement("span",null,"Some text describing the list"),text:"Some text describing the list",none:void 0}},optionBody:{options:["custom","none"],mapping:{custom:lt,none:void 0}}}},h={args:{id:"id",labelledById:"labelled-by-id",dropdownList:V,dropdownAttributes:["displayName"],searchAttributes:["displayName","color"],noMatch:{text:"Søket ga ingen treff på frukt"},inputProps:{placeholder:"Søk"},postListElement:"none"},render:function({id:n,labelledById:d,...i}){return t.createElement(t.Fragment,null,t.createElement(E,{label:"Velg frukt",labelId:d,inputId:n},t.createElement(w,{id:n,...i})))}},M={args:{...h.args,dropdownAttributes:["displayName","color","amount"]},render:function({id:n,labelledById:d,...i}){return t.createElement(E,{label:"Velg frukt",labelId:d,inputId:n},t.createElement(w,{id:n,labelledById:d,...i}))}},k={args:{...h.args,selectedItems:[V[2],V[4]]},render:function({id:n,labelledById:d,...i}){return t.createElement(E,{label:"Velg frukt",labelId:d,inputId:n},t.createElement(w,{id:n,labelledById:d,...i}))}},R={args:{...h.args,postListElement:t.createElement("span",null,"Some text describing the list")},render:function({id:n,labelledById:d,...i}){return t.createElement(E,{label:"Velg frukt",labelId:d,inputId:n},t.createElement(w,{id:n,labelledById:d,...i}))}},D={args:{...h.args,showNumberSelectedAfter:2},render:function({id:n,labelledById:d,...i}){return t.createElement(E,{label:"Velg frukt",labelId:d,inputId:n},t.createElement(w,{id:n,labelledById:d,...i}))}},B={args:{...h.args,dropdownAttributes:["displayName","color","amount"]},render:function(n){const[d,i]=y.useState([V[0]]);return t.createElement("div",null,t.createElement(E,{label:"Velg frukt",inputId:n.id,labelId:n.labelledById},c=>t.createElement(t.Fragment,null,t.createElement(w,{...c,...n,selectedItems:d,onChange:(m,r)=>{i(r==="selected"?a=>a.concat(m):a=>a.filter(u=>u.displayName!==m.displayName))}}),t.createElement(Xe,{type:"button",onClick:()=>{i(V)}},"Velg alle"))))}};var le,se,ie;h.parameters={...h.parameters,docs:{...(le=h.parameters)==null?void 0:le.docs,source:{originalSource:`{
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
}`,...(ie=(se=h.parameters)==null?void 0:se.docs)==null?void 0:ie.source}}};var de,oe,ue;M.parameters={...M.parameters,docs:{...(de=M.parameters)==null?void 0:de.docs,source:{originalSource:`{
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
}`,...(ue=(oe=M.parameters)==null?void 0:oe.docs)==null?void 0:ue.source}}};var ce,pe,me;k.parameters={...k.parameters,docs:{...(ce=k.parameters)==null?void 0:ce.docs,source:{originalSource:`{
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
}`,...(me=(pe=k.parameters)==null?void 0:pe.docs)==null?void 0:me.source}}};var ye,fe,ge;R.parameters={...R.parameters,docs:{...(ye=R.parameters)==null?void 0:ye.docs,source:{originalSource:`{
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
}`,...(ge=(fe=R.parameters)==null?void 0:fe.docs)==null?void 0:ge.source}}};var Ie,he,be;D.parameters={...D.parameters,docs:{...(Ie=D.parameters)==null?void 0:Ie.docs,source:{originalSource:`{
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
}`,...(be=(he=D.parameters)==null?void 0:he.docs)==null?void 0:be.source}}};var we,Te,Ee;B.parameters={...B.parameters,docs:{...(we=B.parameters)==null?void 0:we.docs,source:{originalSource:`{
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
}`,...(Ee=(Te=B.parameters)==null?void 0:Te.docs)==null?void 0:Ee.source}}};const it=["Standard","MultipleDataResults","PreselectedItems","PostListElement","ShowNumberSelected","ControlledState"],gt=Object.freeze(Object.defineProperty({__proto__:null,ControlledState:B,MultipleDataResults:M,PostListElement:R,PreselectedItems:k,ShowNumberSelected:D,Standard:h,__namedExportsOrder:it,default:st},Symbol.toStringTag,{value:"Module"}));export{gt as S,h as a};
