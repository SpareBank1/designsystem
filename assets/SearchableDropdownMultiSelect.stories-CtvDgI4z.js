import{R as t,r as y}from"./index-eCxJ45ll.js";import{c as Se}from"./index-DezCrw0f.js";import{S as H,i as Le}from"./index-B3RHW42C.js";import{I as je}from"./Icon-B88nEPeu.js";import{g as M,f as _e,u as Fe,a as qe,b as ze,c as Oe,d as J,e as ee,m as Ge,T as He,L as Ke,R as Ue,h as Qe,s as te,i as ne,j as We}from"./ListBox-Bj1VzpA2.js";import{C as Ye,a as Xe}from"./ChipRemovable-y3jM1fRB.js";import{I as v}from"./InputGroup-DfxAwG5P.js";import{A as ae}from"./ActionButton-BHw1MgdU.js";import{T as Pe}from"./TertiaryButton-c9j_cgsc.js";const Ze="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgLTk2MCA5NjAgOTYwIiB3aWR0aD0iMjQiPgogICAgPHBhdGgKICAgICAgICBkPSJtMzgyLTM2Mi4xMzEgMzM0LjY5Ni0zMzQuNjk1UTczMC4zNy03MTAuNSA3NDguNzYxLTcxMC41dDMyLjA2NSAxMy42NzRRNzk0LjUtNjgzLjE1MiA3OTQuNS02NjQuMzhxMCAxOC43NzEtMTMuNjc0IDMyLjQ0NUw0MTQuMDY1LTI2NC40MTNRNDAwLjM5MS0yNTAuNzM5IDM4Mi0yNTAuNzM5dC0zMi4wNjUtMTMuNjc0TDE3OC40MTMtNDM1LjkzNXEtMTMuNjc0LTEzLjY3NC0xMy4yOTQtMzIuNDQ1LjM4MS0xOC43NzIgMTQuMDU1LTMyLjQ0NlQyMTEuNjItNTE0LjVxMTguNzcxIDAgMzIuNDQ1IDEzLjY3NEwzODItMzYyLjEzMVoiIC8+Cjwvc3ZnPg==";function Ne({item:i,dropdownAttributes:r,isHighlighted:o}){const[s,...c]=r,m=i[s],n=c.map((a,d)=>t.createElement(H,{className:"ffe-searchable-dropdown__detail-text",key:d},i[a]));return t.createElement("div",{className:Se("ffe-searchable-dropdown__list-item-body",{"ffe-searchable-dropdown__list-item-body--highlighted":o,"ffe-searchable-dropdown__list-item-body--condensed":!!n.length})},t.createElement("div",{className:"ffe-searchable-dropdown__list-item-body-content"},m,!!n.length&&t.createElement("div",{className:"ffe-searchable-dropdown__list-item-body-details"},n)),t.createElement(je,{fileUrl:Ze,size:"md",className:"ffe-searchable-dropdown__selected-icon"}))}Ne.__docgenInfo={description:"",methods:[],displayName:"MultiselectOptionBody",props:{item:{required:!0,tsType:{name:"Item"},description:""},dropdownAttributes:{required:!0,tsType:{name:"Array",elements:[{name:"unknown"}],raw:"(keyof Item)[]"},description:""},isHighlighted:{required:!0,tsType:{name:"boolean"},description:""}}};const re=(i,r,o,s)=>o==="removed"?i.filter(c=>!r.some(m=>s(c,m))):i.concat(r).filter((c,m,n)=>n.findIndex(a=>s(c,a))===m),le=(i,r,o)=>i!=null&&i.some(s=>o(s,r))?"removed":"selected",$e=({searchAttributes:i,dropdownList:r,noMatchDropdownList:o,maxRenderedDropdownElements:s,searchMatcher:c,isEqual:m})=>(n,a)=>{var d,V,S,f,T,L,j,N,I,A,_;switch(a.type){case"InputKeyDownEscape":return{...n,noMatch:!1,isExpanded:!1,highlightedIndex:-1,inputValue:""};case"InputClick":{const{noMatch:g,listToRender:h}=M({inputValue:n.inputValue,searchAttributes:i,maxRenderedDropdownElements:s,dropdownList:r,noMatchDropdownList:o,searchMatcher:c,showAllItemsInDropdown:!0});return{...n,isExpanded:!0,listToRender:h,noMatch:g}}case"RemoveItem":return(d=a.payload)!=null&&d.items?{...n,highlightedIndex:-1,selectedItems:re(n.selectedItems,a.payload.items,"removed",m),inputValue:""}:n;case"InputChange":{const{noMatch:g,listToRender:h}=M({inputValue:((V=a.payload)==null?void 0:V.inputValue)??"",searchAttributes:i,maxRenderedDropdownElements:s,dropdownList:r,noMatchDropdownList:o,searchMatcher:c,showAllItemsInDropdown:!1});return{...n,isExpanded:!0,inputValue:((S=a.payload)==null?void 0:S.inputValue)??"",listToRender:h,highlightedIndex:((T=(f=a.payload)==null?void 0:f.inputValue)==null?void 0:T.trim())===""||h.length===0?-1:0,noMatch:g}}case"ToggleButtonPressed":return{...n,isExpanded:!n.isExpanded};case"ItemSelectedProgrammatically":return((L=a.payload)==null?void 0:L.items)!==void 0?{...n,selectedItems:a.payload.items}:n;case"ItemOnClick":case"InputKeyDownEnter":if((j=a.payload)!=null&&j.items){const{noMatch:g,listToRender:h}=M({inputValue:"",searchAttributes:i,maxRenderedDropdownElements:s,dropdownList:r,noMatchDropdownList:o,searchMatcher:c,showAllItemsInDropdown:!0});return{...n,isExpanded:!0,highlightedIndex:n.inputValue.trim()===""?((N=a.payload)==null?void 0:N.highlightedIndex)??-1:-1,selectedItems:re(n.selectedItems,a.payload.items,((I=a.payload)==null?void 0:I.actionType)??"selected",m),listToRender:h,inputValue:"",noMatch:g}}return n;case"InputKeyDownArrowDown":case"InputKeyDownArrowUp":{const g=document.activeElement;return(g==null?void 0:g.getAttribute("role"))==="combobox"?{...n,isExpanded:!0,highlightedIndex:((A=a.payload)==null?void 0:A.highlightedIndex)??-1}:n}case"FocusMovedOutSide":return{...n,isExpanded:!1,highlightedIndex:-1,inputValue:""};case"DropdownListPropUpdated":return{...n,...M({inputValue:n.inputValue,searchAttributes:i,maxRenderedDropdownElements:s,dropdownList:r,noMatchDropdownList:o,searchMatcher:c,showAllItemsInDropdown:((_=n.inputValue)==null?void 0:_.trim().length)===0})};default:return n}},Je="ArrowUp",et="ArrowDown",tt="Escape",nt="Enter",at="Tab",rt="Backspace";function lt({id:i,labelledById:r,className:o,dropdownList:s,dropdownAttributes:c,searchAttributes:m,maxRenderedDropdownElements:n=Number.MAX_SAFE_INTEGER,onChange:a,inputProps:d,optionBody:V,postListElement:S,noMatch:f,locale:T="nb",ariaInvalid:L,formatter:j=e=>e,searchMatcher:N,selectedItems:I,isLoading:A=!1,onOpen:_,onClose:g,showNumberSelectedAfter:h,isEqual:F=Le,...Ae},xe){var Y,X,P,Z,$;const[e,p]=y.useReducer($e({dropdownList:s,searchAttributes:m,maxRenderedDropdownElements:n,noMatchDropdownList:f==null?void 0:f.dropdownList,searchMatcher:N,isEqual:F}),{isExpanded:!1,selectedItems:[],highlightedIndex:-1,inputValue:""},l=>({...l,...M({inputValue:l.inputValue,searchAttributes:m,maxRenderedDropdownElements:n,dropdownList:s,noMatchDropdownList:f==null?void 0:f.dropdownList,searchMatcher:N,showAllItemsInDropdown:!!(I!=null&&I.length)})})),q=Fe({listToRender:e.listToRender}),[Me,ke]=y.useState(!1),G=y.useRef(null),K=y.useRef(null),Re=V||Ne,z=y.useRef(null),U=y.useId(),x=y.useRef(!1),[Q,W]=y.useState(!0),De=()=>{p({type:"InputClick"}),x.current=!0},Be=l=>{d!=null&&d.onBlur&&d.onBlur(l)};qe({hasFocus:Me,isExpanded:e.isExpanded,isLoading:A,locale:T,resultCount:e.listToRender.length,selectedValue:(Y=e.selectedItems[e.selectedItems.length-1])==null?void 0:Y[m[0]]}),y.useLayoutEffect(()=>{var l;x.current&&((l=G.current)==null||l.focus(),x.current=!1)}),y.useEffect(()=>{p({type:"DropdownListPropUpdated"})},[s,p]),ze({isExpanded:e.isExpanded,onClose:g,onOpen:_});const Ce=y.useCallback(()=>p({type:"FocusMovedOutSide"}),[]);y.useEffect(()=>{h!==void 0&&(e.selectedItems.length>h?W(!1):W(!0))},[e.selectedItems,h]),y.useEffect(()=>{I!=null&&p({type:"ItemSelectedProgrammatically",payload:{items:I}})},[I,p]),Oe({id:i,containerRef:K,handleFocusMovedOutside:Ce});const Ve=l=>{if(l.key===nt&&e.highlightedIndex>=0){l.preventDefault();const u=e.listToRender[e.highlightedIndex],O=le(e.selectedItems,u,F);p({type:"InputKeyDownEnter",payload:{items:[u],actionType:O,highlightedIndex:e.highlightedIndex}}),a==null||a(u,O);return}else if(l.key===tt){p({type:"InputKeyDownEscape"});return}else if(l.key===Je){if(l.preventDefault(),e.listToRender.length){const u=Qe(e.highlightedIndex,e.listToRender.length);p({type:"InputKeyDownArrowUp",payload:{highlightedIndex:u}}),u>=0&&te(e==null?void 0:e.listToRender[u],c),ne(q[u].current,z.current)}return}else if(l.key===et){if(l.preventDefault(),e.listToRender.length){const u=We(e.highlightedIndex,e.listToRender.length);p({type:"InputKeyDownArrowDown",payload:{highlightedIndex:u}}),u>=0&&te(e==null?void 0:e.listToRender[u],c),ne(q[u].current,z.current)}}else if(l.key===rt){if(e.inputValue===""&&e.selectedItems.length>0&&Q){const u=e.selectedItems[e.selectedItems.length-1];p({type:"RemoveItem",payload:{items:[u],actionType:"removed"}}),a==null||a(u,"removed")}}else if(l.key===at){p({type:"FocusMovedOutSide"});return}};return t.createElement("div",{onKeyDown:Ve,ref:K,onMouseDown:J(i),onFocus:J(i),className:Se(o,"ffe-searchable-dropdown","ffe-searchable-dropdown--multi")},t.createElement("div",{className:"ffe-searchable-dropdown__input",onClick:()=>{var l;(l=G.current)==null||l.click()}},Q?(X=e.selectedItems)==null?void 0:X.map((l,u)=>t.createElement(Ye,{as:"button",type:"button",size:"sm",key:u,"aria-label":`${l[c[0]]}, fjern valg`,onClick:O=>{O.stopPropagation(),p({type:"RemoveItem",payload:{items:[l]}}),a==null||a(l,"removed"),x.current=!0}},l[c[0]])):t.createElement(Xe,{size:"sm","aria-label":ee(T,e.selectedItems.length),as:"span",role:"presentation",className:"ffe-chip--multiple-selected"},ee(T,e.selectedItems.length)),t.createElement("input",{...d,placeholder:e.selectedItems.length>0?"":d==null?void 0:d.placeholder,ref:Ge([G,xe]),id:i,"aria-labelledby":r,onClick:De,onChange:l=>{var u;(u=d==null?void 0:d.onChange)==null||u.call(d,l),p({type:"InputChange",payload:{inputValue:l.target.value}})},onFocus:()=>{ke(!0),p({type:"InputClick"})},onBlur:Be,"aria-describedby":[d==null?void 0:d["aria-describedby"],e.noMatch&&U].filter(Boolean).join(" ")||void 0,value:j(e.inputValue),type:"text",role:"combobox",autoComplete:"off","aria-controls":((P=z.current)==null?void 0:P.getAttribute("id"))??void 0,"aria-expanded":e.isExpanded&&!!e.listToRender.length,"aria-autocomplete":"list","aria-haspopup":"listbox","aria-activedescendant":e.highlightedIndex>=0?(($=(Z=q[e.highlightedIndex])==null?void 0:Z.current)==null?void 0:$.getAttribute("id"))??void 0:void 0,"aria-invalid":Ae["aria-invalid"]??L})),t.createElement(He,{isExpanded:e.isExpanded,onClick:()=>p({type:"ToggleButtonPressed"}),isLoading:A}),t.createElement(Ke,{ref:z,isExpanded:e.isExpanded},e.isExpanded&&t.createElement(Ue,{isEqual:F,listToRender:e.listToRender,OptionBody:Re,highlightedIndex:e.highlightedIndex,dropdownAttributes:c,locale:T,refs:q,onChange:l=>{const u=le(e.selectedItems,l,F);p({type:"ItemOnClick",payload:{items:[l],actionType:u}}),x.current=!0,a==null||a(l,u)},noMatch:e.noMatch?f:void 0,noMatchMessageId:U,selectedItems:e.selectedItems}),S&&t.createElement("div",{className:"ffe-searchable-dropdown__list--post-list-element"},S)))}const w=_e(lt);w.__docgenInfo={description:"",methods:[],displayName:"SearchableDropdownMultiSelect",props:{id:{required:!0,tsType:{name:"string"},description:"Id of drop down"},labelledById:{required:!1,tsType:{name:"string"},description:"Id of element that labels input field"},className:{required:!1,tsType:{name:"string"},description:"Extra class"},dropdownList:{required:!0,tsType:{name:"Array",elements:[{name:"Item"}],raw:"Item[]"},description:"List of objects to be displayed in dropdown"},selectedItems:{required:!1,tsType:{name:"union",raw:"Item[] | null",elements:[{name:"Array",elements:[{name:"Item"}],raw:"Item[]"},{name:"null"}]},description:"The selected items to be displayed in the input field. If not specified, uses internal state to decide."},dropdownAttributes:{required:!0,tsType:{name:"Array",elements:[{name:"unknown"}],raw:"(keyof Item)[]"},description:"Array of attributes to be displayed in list. The first will be the title and the chip value"},searchAttributes:{required:!0,tsType:{name:"Array",elements:[{name:"unknown"}],raw:"(keyof Item)[]"},description:"Array of attributes used when filtering search"},inputProps:{required:!1,tsType:{name:"ReactComponentProps",raw:"React.ComponentProps<'input'>",elements:[{name:"literal",value:"'input'"}]},description:"Props used on input field"},maxRenderedDropdownElements:{required:!1,tsType:{name:"number"},description:"Limits number of rendered dropdown elements",defaultValue:{value:"Number.MAX_SAFE_INTEGER",computed:!0}},onChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(item: Item, actionType: 'selected' | 'removed') => void",signature:{arguments:[{type:{name:"Item"},name:"item"},{type:{name:"union",raw:"'selected' | 'removed'",elements:[{name:"literal",value:"'selected'"},{name:"literal",value:"'removed'"}]},name:"actionType"}],return:{name:"void"}}},description:"Called when a value is selected"},optionBody:{required:!1,tsType:{name:"ReactComponentType",raw:`React.ComponentType<{
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
If you always want "X selected" showing, pass in 0`},isEqual:{required:!1,tsType:{name:"signature",type:"function",raw:"(itemA: Item, itemB: Item) => boolean",signature:{arguments:[{type:{name:"Item"},name:"itemA"},{type:{name:"Item"},name:"itemB"}],return:{name:"boolean"}}},description:"Custom compare between objects. Default is deep equals",defaultValue:{value:"isDeepEqual",computed:!0}}}};const E=[{color:"Gul",displayName:"Bananer i klase, økologisk",amount:5},{color:"Grønn",displayName:"Pære",amount:3},{color:"Grønn, Rød",displayName:"Eple",amount:1},{color:"Oransje",displayName:"Appelsin",amount:2},{color:"Lilla, Grønn",displayName:"Druer",amount:1},{color:"Oransje",displayName:"Mandarin",amount:2},{color:"Grønn",displayName:"Kiwi",amount:1}],st=({item:i,isHighlighted:r})=>t.createElement("div",{style:{padding:"8px",background:r?"#ff9100":"white"}},t.createElement("div",null,i.color),t.createElement("div",{style:{display:"flex",justifyContent:"space-between",backgroundColor:"red"}},t.createElement(H,{className:"ffe-searchable-dropdown__detail-text"},i.displayName),t.createElement(H,{className:"ffe-searchable-dropdown__detail-text"},i.amount," ulest"))),it={title:"Komponenter/Searchable-dropdown/SearchableDropdownMultiSelect",component:w,argTypes:{postListElement:{options:["html","text","none"],mapping:{html:t.createElement("span",null,"Some text describing the list"),text:"Some text describing the list",none:void 0}},optionBody:{options:["custom","none"],mapping:{custom:st,none:void 0}}}},b={args:{id:"id",labelledById:"labelled-by-id",dropdownList:E,dropdownAttributes:["displayName"],searchAttributes:["displayName","color"],noMatch:{text:"Søket ga ingen treff på frukt"},inputProps:{placeholder:"Søk"},postListElement:"none"},render:function({id:r,labelledById:o,...s}){return t.createElement(t.Fragment,null,t.createElement(v,{label:"Velg frukt",labelId:o,inputId:r},t.createElement(w,{id:r,...s})))}},k={args:{...b.args,dropdownAttributes:["displayName","color","amount"]},render:function({id:r,labelledById:o,...s}){return t.createElement(v,{label:"Velg frukt",labelId:o,inputId:r},t.createElement(w,{id:r,labelledById:o,...s}))}},R={args:{...b.args,selectedItems:[E[2],E[4]]},render:function({id:r,labelledById:o,...s}){const[c,m]=y.useState(s.selectedItems);return t.createElement(t.Fragment,null,t.createElement(v,{label:"Velg frukt",labelId:o,inputId:r},t.createElement(w,{id:r,labelledById:o,...s,selectedItems:c,onChange:(n,a)=>{m(a==="selected"?[...c??[],n]:(c??[]).filter(d=>d!==n))}})),t.createElement(ae,{type:"button",onClick:()=>{m([])}},"Tøm listen"),t.createElement(ae,{type:"button",onClick:()=>{m([...c??[],E[1]])}},"Legg til i listen"))}},D={args:{...b.args,postListElement:t.createElement("span",null,"Some text describing the list")},render:function({id:r,labelledById:o,...s}){return t.createElement(v,{label:"Velg frukt",labelId:o,inputId:r},t.createElement(w,{id:r,labelledById:o,...s}))}},B={args:{...b.args,showNumberSelectedAfter:2},render:function({id:r,labelledById:o,...s}){return t.createElement(v,{label:"Velg frukt",labelId:o,inputId:r},t.createElement(w,{id:r,labelledById:o,...s}))}},C={args:{...b.args,dropdownAttributes:["displayName","color","amount"]},render:function(r){const[o,s]=y.useState([E[0]]);return t.createElement("div",null,t.createElement(v,{label:"Velg frukt",inputId:r.id,labelId:r.labelledById},c=>t.createElement(t.Fragment,null,t.createElement(w,{...c,...r,selectedItems:o,onChange:(m,n)=>{s(n==="selected"?a=>a.concat(m):a=>a.filter(d=>d.displayName!==m.displayName))}}),t.createElement(Pe,{type:"button",onClick:()=>{s(E)}},"Velg alle"))))}};var se,ie,oe;b.parameters={...b.parameters,docs:{...(se=b.parameters)==null?void 0:se.docs,source:{originalSource:`{
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
}`,...(oe=(ie=b.parameters)==null?void 0:ie.docs)==null?void 0:oe.source}}};var de,ue,ce;k.parameters={...k.parameters,docs:{...(de=k.parameters)==null?void 0:de.docs,source:{originalSource:`{
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
}`,...(ce=(ue=k.parameters)==null?void 0:ue.docs)==null?void 0:ce.source}}};var me,pe,ye;R.parameters={...R.parameters,docs:{...(me=R.parameters)==null?void 0:me.docs,source:{originalSource:`{
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
}`,...(ye=(pe=R.parameters)==null?void 0:pe.docs)==null?void 0:ye.source}}};var ge,fe,Ie;D.parameters={...D.parameters,docs:{...(ge=D.parameters)==null?void 0:ge.docs,source:{originalSource:`{
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
}`,...(Ie=(fe=D.parameters)==null?void 0:fe.docs)==null?void 0:Ie.source}}};var he,be,we;B.parameters={...B.parameters,docs:{...(he=B.parameters)==null?void 0:he.docs,source:{originalSource:`{
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
}`,...(we=(be=B.parameters)==null?void 0:be.docs)==null?void 0:we.source}}};var Te,Ee,ve;C.parameters={...C.parameters,docs:{...(Te=C.parameters)==null?void 0:Te.docs,source:{originalSource:`{
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
}`,...(ve=(Ee=C.parameters)==null?void 0:Ee.docs)==null?void 0:ve.source}}};const ot=["Standard","MultipleDataResults","PreselectedItems","PostListElement","ShowNumberSelected","ControlledState"],ht=Object.freeze(Object.defineProperty({__proto__:null,ControlledState:C,MultipleDataResults:k,PostListElement:D,PreselectedItems:R,ShowNumberSelected:B,Standard:b,__namedExportsOrder:ot,default:it},Symbol.toStringTag,{value:"Module"}));export{ht as S,b as a};
