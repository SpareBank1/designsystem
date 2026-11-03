import{R as i,r as I}from"./index-DQDNmYQF.js";import{c as qe}from"./index-D2FocPV0.js";import{g as Ke,a as _,f as Ue,u as je,b as We,c as Pe,d as $e,e as te,m as Xe,T as Je,L as Qe,R as Ye,l as Ze,q as ne,s as ae,n as et}from"./ListBox-C59Vucjw.js";import{M as tt}from"./MicroText-DveNF6m_.js";import{i as nt,S as re}from"./index-DV_rwQs_.js";import{I as E}from"./InputGroup-BOYEkbY1.js";const at="#dbc4cb",rt="#fff",lt="8px";function Ce({item:n,dropdownAttributes:e,isHighlighted:t,locale:r}){const[u,...o]=e,w=n[u],l=o.map((d,p)=>i.createElement(tt,{"aria-label":d==="balance"?Ke(r,n[d]):void 0,className:"ffe-searchable-dropdown__detail-text",key:p},n[d]));return i.createElement("div",{className:qe("ffe-searchable-dropdown__list-item-body",{"ffe-searchable-dropdown__list-item-body--highlighted":t})},w,!!l.length&&i.createElement("div",{className:"ffe-searchable-dropdown__list-item-body-details"},l))}Ce.__docgenInfo={description:"",methods:[],displayName:"OptionBody",props:{item:{required:!0,tsType:{name:"Item"},description:""},dropdownAttributes:{required:!0,tsType:{name:"Array",elements:[{name:"Item"}],raw:"Array<keyof Item>"},description:""},isHighlighted:{required:!0,tsType:{name:"boolean"},description:""},locale:{required:!0,tsType:{name:"union",raw:"'nb' | 'nn' | 'en'",elements:[{name:"literal",value:"'nb'"},{name:"literal",value:"'nn'"},{name:"literal",value:"'en'"}]},description:""}}};const it=({state:n,searchAttributes:e})=>{const t=n.inputValue===""&&!!n.selectedItem,r=n.listToRender.length===1&&e.map(u=>{var o;return n.listToRender[0][u]===((o=n.selectedItem)==null?void 0:o[u])}).includes(!1)&&n.highlightedIndex!==-1;return t?{selectedItem:void 0,hasSelectedItemChanged:!0}:r?{selectedItem:n.listToRender[0],hasSelectedItemChanged:!0}:{selectedItem:n.selectedItem,hasSelectedItemChanged:!1}},le=({inputValue:n,selectedItem:e,searchAttributes:t,maxRenderedDropdownElements:r,dropdownList:u,noMatchDropdownList:o,searchMatcher:w,displayAttribute:l})=>{const{listToRender:d}=_({inputValue:n,searchAttributes:t,maxRenderedDropdownElements:r,dropdownList:u,noMatchDropdownList:o,searchMatcher:w,showAllItemsInDropdown:!0});return{inputValue:e?e[l]:"",selectedItem:e,listToRender:d}},st=({searchAttributes:n,dropdownList:e,displayAttribute:t,noMatchDropdownList:r,maxRenderedDropdownElements:u,searchMatcher:o,isEqual:w})=>(l,d)=>{var p,z,S,h,v,F,G,R,x,A,O;switch(d.type){case"InputKeyDownEscape":return{...l,noMatch:!1,isExpanded:!1,highlightedIndex:-1,inputValue:l.selectedItem?l.selectedItem[t]:""};case"InputClick":{const{noMatch:c,listToRender:b}=_({inputValue:l.inputValue,searchAttributes:n,maxRenderedDropdownElements:u,dropdownList:e,noMatchDropdownList:r,searchMatcher:o,showAllItemsInDropdown:!0});return{...l,isExpanded:!0,listToRender:b,noMatch:c}}case"InputChange":{const{noMatch:c,listToRender:b}=_({inputValue:((p=d.payload)==null?void 0:p.inputValue)??"",searchAttributes:n,maxRenderedDropdownElements:u,dropdownList:e,noMatchDropdownList:r,searchMatcher:o,showAllItemsInDropdown:!1});return{...l,isExpanded:!0,inputValue:((z=d.payload)==null?void 0:z.inputValue)??"",listToRender:b,highlightedIndex:((h=(S=d.payload)==null?void 0:S.inputValue)==null?void 0:h.trim())===""||b.length===0?-1:0,noMatch:c}}case"ToggleButtonPressed":{if(l.isExpanded){const{listToRender:c,inputValue:b,selectedItem:T}=le({inputValue:l.inputValue,selectedItem:(v=d.payload)==null?void 0:v.selectedItem,searchAttributes:n,maxRenderedDropdownElements:u,dropdownList:e,noMatchDropdownList:r,searchMatcher:o,displayAttribute:t});return{...l,isExpanded:!1,highlightedIndex:-1,inputValue:b,selectedItem:T,listToRender:c}}return{...l,isExpanded:!l.isExpanded}}case"ItemSelectedProgrammatically":{const c=(F=d.payload)==null?void 0:F.selectedItem;return c&&l.selectedItem&&w(l.selectedItem,c)?{...l,selectedItem:c,inputValue:l.isExpanded?l.inputValue:c[t]||""}:{...l,isExpanded:!1,highlightedIndex:-1,selectedItem:c,inputValue:(c==null?void 0:c[t])||""}}case"ItemOnClick":case"InputKeyDownEnter":return{...l,isExpanded:!1,highlightedIndex:-1,selectedItem:(G=d.payload)==null?void 0:G.selectedItem,inputValue:((x=(R=d.payload)==null?void 0:R.selectedItem)==null?void 0:x[t])||""};case"InputKeyDownArrowDown":case"InputKeyDownArrowUp":return{...l,isExpanded:!0,highlightedIndex:((A=d.payload)==null?void 0:A.highlightedIndex)??-1};case"FocusMovedOutSide":{const{listToRender:c,inputValue:b,selectedItem:T}=le({inputValue:l.inputValue,selectedItem:(O=d.payload)==null?void 0:O.selectedItem,searchAttributes:n,maxRenderedDropdownElements:u,dropdownList:e,noMatchDropdownList:r,searchMatcher:o,displayAttribute:t});return{...l,isExpanded:!1,highlightedIndex:-1,inputValue:b,selectedItem:T,listToRender:c}}case"DropdownListPropUpdated":{const c=!!l.selectedItem&&l.inputValue===l.selectedItem[t];return{...l,..._({inputValue:l.inputValue,searchAttributes:n,maxRenderedDropdownElements:u,dropdownList:e,noMatchDropdownList:r,searchMatcher:o,showAllItemsInDropdown:c})}}default:return l}},dt="ArrowUp",ot="ArrowDown",ut="Escape",ct="Enter",pt="Tab";function mt({id:n,labelledById:e,className:t,dropdownList:r,dropdownAttributes:u,searchAttributes:o,displayAttribute:w=o[0],maxRenderedDropdownElements:l=Number.MAX_SAFE_INTEGER,onChange:d,inputProps:p,optionBody:z,postListElement:S,noMatch:h,locale:v="nb",ariaInvalid:F,formatter:G=a=>a,searchMatcher:R,selectedItem:x,isLoading:A=!1,onOpen:O,onClose:c,isEqual:b=nt,...T},Le){var J,Q,Y;const[a,g]=I.useReducer(st({dropdownList:r,displayAttribute:w,searchAttributes:o,maxRenderedDropdownElements:l,noMatchDropdownList:h==null?void 0:h.dropdownList,searchMatcher:R,isEqual:b}),{isExpanded:!1,selectedItems:[],highlightedIndex:-1,formattedInputValue:"",inputValue:x?x[w]:""},s=>({...s,..._({inputValue:s.inputValue,searchAttributes:o,maxRenderedDropdownElements:l,dropdownList:r,noMatchDropdownList:h==null?void 0:h.dropdownList,searchMatcher:R,showAllItemsInDropdown:!!x})})),M=je({listToRender:a.listToRender}),[_e,ze]=I.useState(!1),H=I.useRef(null),W=I.useRef(null),Fe=z||Ce,K=I.useRef(null),P=I.useId(),$=I.useRef(!1),Ge=()=>{g({type:"InputClick"})},Oe=s=>{p!=null&&p.onBlur&&p.onBlur(s)};I.useEffect(()=>{g({type:"ItemSelectedProgrammatically",payload:{selectedItem:x}})},[x,g]),We({hasFocus:_e,isExpanded:a.isExpanded,isLoading:A,locale:v,resultCount:a.listToRender.length,selectedValue:(J=a.selectedItem)==null?void 0:J[w]}),I.useLayoutEffect(()=>{var s;$.current&&((s=H.current)==null||s.focus(),$.current=!1)}),I.useEffect(()=>{g({type:"DropdownListPropUpdated"})},[r,g]),Pe({isExpanded:a.isExpanded,onClose:c,onOpen:O});const X=I.useRef({state:a,searchAttributes:o,onChange:d});I.useLayoutEffect(()=>{X.current={state:a,searchAttributes:o,onChange:d}});const U=I.useCallback((s="FocusMovedOutSide")=>{var ee;const m=X.current,{selectedItem:Z,hasSelectedItemChanged:He}=it({state:m.state,searchAttributes:m.searchAttributes});He&&((ee=m.onChange)==null||ee.call(m,Z??null)),g({type:s,payload:{selectedItem:Z}})},[]);$e({id:n,containerRef:W,handleFocusMovedOutside:U});const Me=s=>{if(s.key===ct&&a.highlightedIndex>=0){s.preventDefault(),g({type:"InputKeyDownEnter",payload:{selectedItem:a.listToRender[a.highlightedIndex]}}),d==null||d(a.listToRender[a.highlightedIndex]);return}else if(s.key===ut){g({type:"InputKeyDownEscape"});return}if(s.key===dt){if(s.preventDefault(),a.listToRender.length){const m=Ze(a.highlightedIndex,a.listToRender.length);g({type:"InputKeyDownArrowUp",payload:{highlightedIndex:m}}),m>=0&&ne(a==null?void 0:a.listToRender[m],u),ae(M[m].current,K.current)}return}if(s.key===ot&&(s.preventDefault(),a.listToRender.length)){const m=et(a.highlightedIndex,a.listToRender.length);g({type:"InputKeyDownArrowDown",payload:{highlightedIndex:m}}),m>=0&&ne(a==null?void 0:a.listToRender[m],u),ae(M[m].current,K.current)}s.key===pt&&U()};return i.createElement("div",{onKeyDown:Me,className:qe(t,"ffe-searchable-dropdown","ffe-default-mode"),ref:W,onMouseDown:te(n),onFocus:te(n)},i.createElement("div",{className:"ffe-searchable-dropdown__input",onClick:()=>{var s;(s=H.current)==null||s.focus()}},i.createElement("input",{...p,ref:Xe([H,Le]),id:n,"aria-labelledby":e,onClick:Ge,onChange:s=>{p!=null&&p.onChange&&p.onChange(s),g({type:"InputChange",payload:{inputValue:s.target.value}})},onFocus:()=>{ze(!0),g({type:"InputClick"})},onBlur:Oe,"aria-describedby":[p==null?void 0:p["aria-describedby"],a.noMatch&&P].filter(Boolean).join(" ")||void 0,value:G(a.inputValue),type:"text",role:"combobox",autoComplete:"off","aria-controls":`${n}-listbox`,"aria-expanded":a.isExpanded&&!!a.listToRender.length,"aria-autocomplete":"list","aria-haspopup":"listbox","aria-activedescendant":a.highlightedIndex>=0?((Y=(Q=M[a.highlightedIndex])==null?void 0:Q.current)==null?void 0:Y.getAttribute("id"))??void 0:void 0,"aria-invalid":T["aria-invalid"]??F})),i.createElement(Je,{isExpanded:a.isExpanded,onClick:()=>{a.isExpanded?U("ToggleButtonPressed"):g({type:"ToggleButtonPressed"})},isLoading:A}),i.createElement(Qe,{ref:K,isExpanded:a.isExpanded,id:`${n}-listbox`,labelledById:e},a.isExpanded&&i.createElement(Ye,{isEqual:b,listToRender:a.listToRender,OptionBody:Fe,highlightedIndex:a.highlightedIndex,dropdownAttributes:u,locale:v,refs:M,onChange:s=>{g({type:"ItemOnClick",payload:{selectedItem:s}}),d==null||d(s)},noMatch:a.noMatch?h:void 0,noMatchMessageId:P,selectedItems:a.selectedItem?[a.selectedItem]:[]}),S&&i.createElement("div",{className:"ffe-searchable-dropdown__list--post-list-element"},S)))}const y=Ue(mt);y.__docgenInfo={description:"",methods:[],displayName:"SearchableDropdown",props:{id:{required:!0,tsType:{name:"string"},description:"Id of drop down"},labelledById:{required:!1,tsType:{name:"string"},description:"Id of element that labels input field"},className:{required:!1,tsType:{name:"string"},description:"Extra class"},dropdownList:{required:!0,tsType:{name:"Array",elements:[{name:"Item"}],raw:"Item[]"},description:"List of objects to be displayed in dropdown"},selectedItem:{required:!1,tsType:{name:"Item"},description:"The selected item to be displayed in the input field. If not specified, uses internal state to decide."},dropdownAttributes:{required:!0,tsType:{name:"Array",elements:[{name:"unknown"}],raw:"(keyof Item)[]"},description:"Array of attributes to be displayed in list"},searchAttributes:{required:!0,tsType:{name:"Array",elements:[{name:"unknown"}],raw:"(keyof Item)[]"},description:"Array of attributes used when filtering search"},displayAttribute:{required:!1,tsType:{name:"Item"},description:"Attribute used in the input when an item is selected. Defaults to first in searchAttributes *",defaultValue:{value:"searchAttributes[0]",computed:!0}},inputProps:{required:!1,tsType:{name:"ReactComponentProps",raw:"React.ComponentProps<'input'>",elements:[{name:"literal",value:"'input'"}]},description:"Props used on input field"},maxRenderedDropdownElements:{required:!1,tsType:{name:"number"},description:"Limits number of rendered dropdown elements",defaultValue:{value:"Number.MAX_SAFE_INTEGER",computed:!0}},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(item: Item | null) => void",signature:{arguments:[{type:{name:"union",raw:"Item | null",elements:[{name:"Item"},{name:"null"}]},name:"item"}],return:{name:"void"}}},description:"Called when a value is selected"},optionBody:{required:!1,tsType:{name:"ReactComponentType",raw:`React.ComponentType<{
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
that has loaded.`,defaultValue:{value:"false",computed:!1}},onOpen:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Function used when dropdown opens"},onClose:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Function used when dropdown closes"},isEqual:{required:!1,tsType:{name:"signature",type:"function",raw:"(itemA: Item, itemB: Item) => boolean",signature:{arguments:[{type:{name:"Item"},name:"itemA"},{type:{name:"Item"},name:"itemB"}],return:{name:"boolean"}}},description:"Custom compare between objects. Default is deep equals",defaultValue:{value:"isDeepEqual",computed:!0}}}};const j=[{organizationName:"Bedriften",organizationNumber:"912602370",quantityUnprocessedMessages:5,balance:"12 345 678,00 kr"},{organizationName:"Sønn & co",organizationNumber:"812602372",quantityUnprocessedMessages:3,balance:"12 345,00 kr"},{organizationName:"Beslag skytter",organizationNumber:"812602552",quantityUnprocessedMessages:1,balance:"34 234 343,00 kr"}],gt={title:"Komponenter/Searchable-dropdown/SearchableDropdown",component:y,argTypes:{postListElement:{options:["html","text","none"],mapping:{html:i.createElement("span",null,"Some text describing the list"),text:"Some text describing the list",none:void 0}},optionBody:{options:["custom","none"],mapping:{custom:({item:n,isHighlighted:e})=>i.createElement("div",{style:{padding:lt,background:e?at:rt}},i.createElement("div",null,n.organizationName),i.createElement("div",{style:{display:"flex",justifyContent:"space-between"}},i.createElement(re,null,n.organizationNumber),i.createElement(re,null,n.quantityUnprocessedMessages," ulest"))),none:void 0}}}},f={args:{id:"id",labelledById:"labelled-by-id",dropdownList:j,dropdownAttributes:["organizationName"],searchAttributes:["organizationName"],noMatch:{text:"Søket ga ingen treff"},inputProps:{placeholder:"Velg"},postListElement:"none"},render:function({id:e,labelledById:t,...r}){return i.createElement(E,{label:"Velg bedrift",labelId:t,inputId:e},i.createElement(y,{id:e,labelledById:t,...r}))}},V={args:{...f.args,dropdownAttributes:["organizationName","organizationNumber","balance"]},render:function({id:e,labelledById:t,...r}){return i.createElement(E,{label:"Velg bedrift",labelId:t,inputId:e},i.createElement(y,{id:e,labelledById:t,...r}))}},B={args:{...f.args,searchMatcher:(n,e)=>t=>{const r=o=>`${o}`.replace(/\s/g,"").toLowerCase(),u=r(n);return e.map(o=>r(t[o])).some(o=>o.includes(u))}},render:function({id:e,labelledById:t,...r}){return i.createElement(E,{label:"Velg bedrift",labelId:t,inputId:e},i.createElement(y,{id:e,labelledById:t,...r}))}},D={args:{...f.args,noMatch:{text:"Søket ga ingen treff",dropdownList:j.slice(1,4)}},render:function({id:e,labelledById:t,...r}){return i.createElement(E,{label:"Velg bedrift",labelId:t,inputId:e},i.createElement(y,{id:e,labelledById:t,...r}))}},N={args:{...f.args,selectedItem:j[2]},render:function({id:e,labelledById:t,...r}){return i.createElement(E,{label:"Velg bedrift",labelId:t,inputId:e},i.createElement(y,{id:e,labelledById:t,...r}))}},k={args:{...f.args,postListElement:i.createElement("span",null,"Some text describing the list")},render:function({id:e,labelledById:t,...r}){return i.createElement(E,{label:"Velg bedrift",labelId:t,inputId:e},i.createElement(y,{id:e,labelledById:t,...r}))}},q={args:{...f.args,displayAttribute:"organizationNumber",dropdownAttributes:["organizationName","organizationNumber"],searchAttributes:["organizationNumber","organizationName"]},render:function({id:e,labelledById:t,...r}){return i.createElement(E,{label:"Velg bedrift",labelId:t,inputId:e},i.createElement(y,{id:e,labelledById:t,...r}))}},C={args:{...f.args},render:function({id:e,labelledById:t,...r}){return i.createElement(E,{label:"Velg bedrift",labelId:t,inputId:e},u=>i.createElement(y,{labelledById:t,...r,...u,"aria-invalid":"true"}))}},L={args:{...f.args},render:function({id:e,labelledById:t,...r}){return i.createElement(E,{label:"Velg bedrift",labelId:t,inputId:e,description:"Velg en bedrift for å fortsette"},u=>i.createElement(y,{labelledById:t,...r,...u}))}};var ie,se,de;f.parameters={...f.parameters,docs:{...(ie=f.parameters)==null?void 0:ie.docs,source:{originalSource:`{
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
}`,...(de=(se=f.parameters)==null?void 0:se.docs)==null?void 0:de.source}}};var oe,ue,ce;V.parameters={...V.parameters,docs:{...(oe=V.parameters)==null?void 0:oe.docs,source:{originalSource:`{
  args: {
    ...Standard.args,
    dropdownAttributes: ['organizationName', 'organizationNumber', 'balance']
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
}`,...(ce=(ue=V.parameters)==null?void 0:ue.docs)==null?void 0:ce.source}}};var pe,me,ge;B.parameters={...B.parameters,docs:{...(pe=B.parameters)==null?void 0:pe.docs,source:{originalSource:`{
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
}`,...(ge=(me=B.parameters)==null?void 0:me.docs)==null?void 0:ge.source}}};var Ie,fe,be;D.parameters={...D.parameters,docs:{...(Ie=D.parameters)==null?void 0:Ie.docs,source:{originalSource:`{
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
}`,...(be=(fe=D.parameters)==null?void 0:fe.docs)==null?void 0:be.source}}};var ye,he,we;N.parameters={...N.parameters,docs:{...(ye=N.parameters)==null?void 0:ye.docs,source:{originalSource:`{
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
}`,...(we=(he=N.parameters)==null?void 0:he.docs)==null?void 0:we.source}}};var Ee,xe,Se;k.parameters={...k.parameters,docs:{...(Ee=k.parameters)==null?void 0:Ee.docs,source:{originalSource:`{
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
}`,...(Se=(xe=k.parameters)==null?void 0:xe.docs)==null?void 0:Se.source}}};var ve,Re,Ae;q.parameters={...q.parameters,docs:{...(ve=q.parameters)==null?void 0:ve.docs,source:{originalSource:`{
  args: {
    ...Standard.args,
    displayAttribute: 'organizationNumber',
    dropdownAttributes: ['organizationName', 'organizationNumber'],
    searchAttributes: ['organizationNumber', 'organizationName']
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
}`,...(Ae=(Re=q.parameters)==null?void 0:Re.docs)==null?void 0:Ae.source}}};var Te,Ve,Be;C.parameters={...C.parameters,docs:{...(Te=C.parameters)==null?void 0:Te.docs,source:{originalSource:`{
  args: {
    ...Standard.args
  },
  render: function Render({
    id,
    labelledById,
    ...args
  }) {
    return <InputGroup label="Velg bedrift" labelId={labelledById} inputId={id}>
                {inputProps => <SearchableDropdown labelledById={labelledById} {...args} {...inputProps} aria-invalid="true" />}
            </InputGroup>;
  }
}`,...(Be=(Ve=C.parameters)==null?void 0:Ve.docs)==null?void 0:Be.source}}};var De,Ne,ke;L.parameters={...L.parameters,docs:{...(De=L.parameters)==null?void 0:De.docs,source:{originalSource:`{
  args: {
    ...Standard.args
  },
  render: function Render({
    id,
    labelledById,
    ...args
  }) {
    return <InputGroup label="Velg bedrift" labelId={labelledById} inputId={id} description='Velg en bedrift for å fortsette'>
                {inputProps => <SearchableDropdown labelledById={labelledById} {...args} {...inputProps} />}
            </InputGroup>;
  }
}`,...(ke=(Ne=L.parameters)==null?void 0:Ne.docs)==null?void 0:ke.source}}};const It=["Standard","DropdownAttributes","CustomSearch","ExtraResults","SelectedItem","PostListElement","CustomDisplayAttribute","AriaInvalid","WithDescription"],xt=Object.freeze(Object.defineProperty({__proto__:null,AriaInvalid:C,CustomDisplayAttribute:q,CustomSearch:B,DropdownAttributes:V,ExtraResults:D,PostListElement:k,SelectedItem:N,Standard:f,WithDescription:L,__namedExportsOrder:It,default:gt},Symbol.toStringTag,{value:"Module"}));export{B as C,V as D,D as E,k as P,xt as S,L as W,f as a,N as b};
