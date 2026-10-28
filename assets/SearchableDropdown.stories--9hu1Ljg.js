import{R as l,r as b}from"./index-DQDNmYQF.js";import{c as Ne}from"./index-D2FocPV0.js";import{g as Ke,a as L,f as Ue,u as je,b as We,c as Pe,d as $e,e as Z,m as Xe,T as Je,L as Qe,R as Ye,l as Ze,q as ee,s as te,n as et}from"./ListBox-C59Vucjw.js";import{M as tt}from"./MicroText-DveNF6m_.js";import{i as nt,S as ne}from"./index-DV_rwQs_.js";import{I as E}from"./InputGroup-BOYEkbY1.js";const at="#dbc4cb",rt="#fff",lt="8px";function ke({item:t,dropdownAttributes:e,isHighlighted:n,locale:r}){const[o,...d]=e,i=t[o],u=d.map((c,p)=>l.createElement(tt,{"aria-label":c==="balance"?Ke(r,t[c]):void 0,className:"ffe-searchable-dropdown__detail-text",key:p},t[c]));return l.createElement("div",{className:Ne("ffe-searchable-dropdown__list-item-body",{"ffe-searchable-dropdown__list-item-body--highlighted":n})},i,!!u.length&&l.createElement("div",{className:"ffe-searchable-dropdown__list-item-body-details"},u))}ke.__docgenInfo={description:"",methods:[],displayName:"OptionBody",props:{item:{required:!0,tsType:{name:"Item"},description:""},dropdownAttributes:{required:!0,tsType:{name:"Array",elements:[{name:"Item"}],raw:"Array<keyof Item>"},description:""},isHighlighted:{required:!0,tsType:{name:"boolean"},description:""},locale:{required:!0,tsType:{name:"union",raw:"'nb' | 'nn' | 'en'",elements:[{name:"literal",value:"'nb'"},{name:"literal",value:"'nn'"},{name:"literal",value:"'en'"}]},description:""}}};const it=({state:t,searchAttributes:e})=>{const n=t.inputValue===""&&!!t.selectedItem,r=t.listToRender.length===1&&e.map(o=>{var d;return t.listToRender[0][o]===((d=t.selectedItem)==null?void 0:d[o])}).includes(!1)&&t.highlightedIndex!==-1;return n?{selectedItem:void 0,hasSelectedItemChanged:!0}:r?{selectedItem:t.listToRender[0],hasSelectedItemChanged:!0}:{selectedItem:t.selectedItem,hasSelectedItemChanged:!1}},ae=({inputValue:t,selectedItem:e,searchAttributes:n,maxRenderedDropdownElements:r,dropdownList:o,noMatchDropdownList:d,searchMatcher:i,displayAttribute:u})=>{const{listToRender:c}=L({inputValue:t,searchAttributes:n,maxRenderedDropdownElements:r,dropdownList:o,noMatchDropdownList:d,searchMatcher:i,showAllItemsInDropdown:!0});return{inputValue:e?e[u]:"",selectedItem:e,listToRender:c}},st=({searchAttributes:t,dropdownList:e,displayAttribute:n,noMatchDropdownList:r,maxRenderedDropdownElements:o,searchMatcher:d})=>(i,u)=>{var c,p,_,S,y,v,z,F,R,x;switch(u.type){case"InputKeyDownEscape":return{...i,noMatch:!1,isExpanded:!1,highlightedIndex:-1,inputValue:i.selectedItem?i.selectedItem[n]:""};case"InputClick":{const{noMatch:h,listToRender:w}=L({inputValue:i.inputValue,searchAttributes:t,maxRenderedDropdownElements:o,dropdownList:e,noMatchDropdownList:r,searchMatcher:d,showAllItemsInDropdown:!0});return{...i,isExpanded:!0,listToRender:w,noMatch:h}}case"InputChange":{const{noMatch:h,listToRender:w}=L({inputValue:((c=u.payload)==null?void 0:c.inputValue)??"",searchAttributes:t,maxRenderedDropdownElements:o,dropdownList:e,noMatchDropdownList:r,searchMatcher:d,showAllItemsInDropdown:!1});return{...i,isExpanded:!0,inputValue:((p=u.payload)==null?void 0:p.inputValue)??"",listToRender:w,highlightedIndex:((S=(_=u.payload)==null?void 0:_.inputValue)==null?void 0:S.trim())===""||w.length===0?-1:0,noMatch:h}}case"ToggleButtonPressed":{if(i.isExpanded){const{listToRender:h,inputValue:w,selectedItem:A}=ae({inputValue:i.inputValue,selectedItem:(y=u.payload)==null?void 0:y.selectedItem,searchAttributes:t,maxRenderedDropdownElements:o,dropdownList:e,noMatchDropdownList:r,searchMatcher:d,displayAttribute:n});return{...i,isExpanded:!1,highlightedIndex:-1,inputValue:w,selectedItem:A,listToRender:h}}return{...i,isExpanded:!i.isExpanded}}case"ItemSelectedProgrammatically":case"ItemOnClick":case"InputKeyDownEnter":return{...i,isExpanded:!1,highlightedIndex:-1,selectedItem:(v=u.payload)==null?void 0:v.selectedItem,inputValue:((F=(z=u.payload)==null?void 0:z.selectedItem)==null?void 0:F[n])||""};case"InputKeyDownArrowDown":case"InputKeyDownArrowUp":return{...i,isExpanded:!0,highlightedIndex:((R=u.payload)==null?void 0:R.highlightedIndex)??-1};case"FocusMovedOutSide":{const{listToRender:h,inputValue:w,selectedItem:A}=ae({inputValue:i.inputValue,selectedItem:(x=u.payload)==null?void 0:x.selectedItem,searchAttributes:t,maxRenderedDropdownElements:o,dropdownList:e,noMatchDropdownList:r,searchMatcher:d,displayAttribute:n});return{...i,isExpanded:!1,highlightedIndex:-1,inputValue:w,selectedItem:A,listToRender:h}}case"DropdownListPropUpdated":return{...i,...L({inputValue:i.inputValue,searchAttributes:t,maxRenderedDropdownElements:o,dropdownList:e,noMatchDropdownList:r,searchMatcher:d,showAllItemsInDropdown:!!i.selectedItem})};default:return i}},dt="ArrowUp",ot="ArrowDown",ut="Escape",ct="Enter",pt="Tab";function mt({id:t,labelledById:e,className:n,dropdownList:r,dropdownAttributes:o,searchAttributes:d,displayAttribute:i=d[0],maxRenderedDropdownElements:u=Number.MAX_SAFE_INTEGER,onChange:c,inputProps:p,optionBody:_,postListElement:S,noMatch:y,locale:v="nb",ariaInvalid:z,formatter:F=a=>a,searchMatcher:R,selectedItem:x,isLoading:h=!1,onOpen:w,onClose:A,isEqual:qe=nt,...Ce},Le){var $,X,J;const[a,g]=b.useReducer(st({dropdownList:r,displayAttribute:i,searchAttributes:d,maxRenderedDropdownElements:u,noMatchDropdownList:y==null?void 0:y.dropdownList,searchMatcher:R}),{isExpanded:!1,selectedItems:[],highlightedIndex:-1,formattedInputValue:"",inputValue:x?x[i]:""},s=>({...s,...L({inputValue:s.inputValue,searchAttributes:d,maxRenderedDropdownElements:u,dropdownList:r,noMatchDropdownList:y==null?void 0:y.dropdownList,searchMatcher:R,showAllItemsInDropdown:!!x})})),G=je({listToRender:a.listToRender}),[_e,ze]=b.useState(!1),O=b.useRef(null),U=b.useRef(null),Fe=_||ke,M=b.useRef(null),j=b.useId(),W=b.useRef(!1),Ge=()=>{g({type:"InputClick"})},Oe=s=>{p!=null&&p.onBlur&&p.onBlur(s)};b.useEffect(()=>{g({type:"ItemSelectedProgrammatically",payload:{selectedItem:x}})},[x,g]),We({hasFocus:_e,isExpanded:a.isExpanded,isLoading:h,locale:v,resultCount:a.listToRender.length,selectedValue:($=a.selectedItem)==null?void 0:$[i]}),b.useLayoutEffect(()=>{var s;W.current&&((s=O.current)==null||s.focus(),W.current=!1)}),b.useEffect(()=>{g({type:"DropdownListPropUpdated"})},[r,g]),Pe({isExpanded:a.isExpanded,onClose:A,onOpen:w});const P=b.useRef({state:a,searchAttributes:d,onChange:c});b.useLayoutEffect(()=>{P.current={state:a,searchAttributes:d,onChange:c}});const H=b.useCallback((s="FocusMovedOutSide")=>{var Y;const m=P.current,{selectedItem:Q,hasSelectedItemChanged:He}=it({state:m.state,searchAttributes:m.searchAttributes});He&&((Y=m.onChange)==null||Y.call(m,Q??null)),g({type:s,payload:{selectedItem:Q}})},[]);$e({id:t,containerRef:U,handleFocusMovedOutside:H});const Me=s=>{if(s.key===ct&&a.highlightedIndex>=0){s.preventDefault(),g({type:"InputKeyDownEnter",payload:{selectedItem:a.listToRender[a.highlightedIndex]}}),c==null||c(a.listToRender[a.highlightedIndex]);return}else if(s.key===ut){g({type:"InputKeyDownEscape"});return}if(s.key===dt){if(s.preventDefault(),a.listToRender.length){const m=Ze(a.highlightedIndex,a.listToRender.length);g({type:"InputKeyDownArrowUp",payload:{highlightedIndex:m}}),m>=0&&ee(a==null?void 0:a.listToRender[m],o),te(G[m].current,M.current)}return}if(s.key===ot&&(s.preventDefault(),a.listToRender.length)){const m=et(a.highlightedIndex,a.listToRender.length);g({type:"InputKeyDownArrowDown",payload:{highlightedIndex:m}}),m>=0&&ee(a==null?void 0:a.listToRender[m],o),te(G[m].current,M.current)}s.key===pt&&H()};return l.createElement("div",{onKeyDown:Me,className:Ne(n,"ffe-searchable-dropdown","ffe-default-mode"),ref:U,onMouseDown:Z(t),onFocus:Z(t)},l.createElement("div",{className:"ffe-searchable-dropdown__input",onClick:()=>{var s;(s=O.current)==null||s.focus()}},l.createElement("input",{...p,ref:Xe([O,Le]),id:t,"aria-labelledby":e,onClick:Ge,onChange:s=>{p!=null&&p.onChange&&p.onChange(s),g({type:"InputChange",payload:{inputValue:s.target.value}})},onFocus:()=>{ze(!0),g({type:"InputClick"})},onBlur:Oe,"aria-describedby":[p==null?void 0:p["aria-describedby"],a.noMatch&&j].filter(Boolean).join(" ")||void 0,value:F(a.inputValue),type:"text",role:"combobox",autoComplete:"off","aria-controls":`${t}-listbox`,"aria-expanded":a.isExpanded&&!!a.listToRender.length,"aria-autocomplete":"list","aria-haspopup":"listbox","aria-activedescendant":a.highlightedIndex>=0?((J=(X=G[a.highlightedIndex])==null?void 0:X.current)==null?void 0:J.getAttribute("id"))??void 0:void 0,"aria-invalid":Ce["aria-invalid"]??z})),l.createElement(Je,{isExpanded:a.isExpanded,onClick:()=>{a.isExpanded?H("ToggleButtonPressed"):g({type:"ToggleButtonPressed"})},isLoading:h}),l.createElement(Qe,{ref:M,isExpanded:a.isExpanded,id:`${t}-listbox`,labelledById:e},a.isExpanded&&l.createElement(Ye,{isEqual:qe,listToRender:a.listToRender,OptionBody:Fe,highlightedIndex:a.highlightedIndex,dropdownAttributes:o,locale:v,refs:G,onChange:s=>{g({type:"ItemOnClick",payload:{selectedItem:s}}),c==null||c(s)},noMatch:a.noMatch?y:void 0,noMatchMessageId:j,selectedItems:a.selectedItem?[a.selectedItem]:[]}),S&&l.createElement("div",{className:"ffe-searchable-dropdown__list--post-list-element"},S)))}const I=Ue(mt);I.__docgenInfo={description:"",methods:[],displayName:"SearchableDropdown",props:{id:{required:!0,tsType:{name:"string"},description:"Id of drop down"},labelledById:{required:!1,tsType:{name:"string"},description:"Id of element that labels input field"},className:{required:!1,tsType:{name:"string"},description:"Extra class"},dropdownList:{required:!0,tsType:{name:"Array",elements:[{name:"Item"}],raw:"Item[]"},description:"List of objects to be displayed in dropdown"},selectedItem:{required:!1,tsType:{name:"Item"},description:"The selected item to be displayed in the input field. If not specified, uses internal state to decide."},dropdownAttributes:{required:!0,tsType:{name:"Array",elements:[{name:"unknown"}],raw:"(keyof Item)[]"},description:"Array of attributes to be displayed in list"},searchAttributes:{required:!0,tsType:{name:"Array",elements:[{name:"unknown"}],raw:"(keyof Item)[]"},description:"Array of attributes used when filtering search"},displayAttribute:{required:!1,tsType:{name:"Item"},description:"Attribute used in the input when an item is selected. Defaults to first in searchAttributes *",defaultValue:{value:"searchAttributes[0]",computed:!0}},inputProps:{required:!1,tsType:{name:"ReactComponentProps",raw:"React.ComponentProps<'input'>",elements:[{name:"literal",value:"'input'"}]},description:"Props used on input field"},maxRenderedDropdownElements:{required:!1,tsType:{name:"number"},description:"Limits number of rendered dropdown elements",defaultValue:{value:"Number.MAX_SAFE_INTEGER",computed:!0}},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(item: Item | null) => void",signature:{arguments:[{type:{name:"union",raw:"Item | null",elements:[{name:"Item"},{name:"null"}]},name:"item"}],return:{name:"void"}}},description:"Called when a value is selected"},optionBody:{required:!1,tsType:{name:"ReactComponentType",raw:`React.ComponentType<{
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
that has loaded.`,defaultValue:{value:"false",computed:!1}},onOpen:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Function used when dropdown opens"},onClose:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Function used when dropdown closes"},isEqual:{required:!1,tsType:{name:"signature",type:"function",raw:"(itemA: Item, itemB: Item) => boolean",signature:{arguments:[{type:{name:"Item"},name:"itemA"},{type:{name:"Item"},name:"itemB"}],return:{name:"boolean"}}},description:"Custom compare between objects. Default is deep equals",defaultValue:{value:"isDeepEqual",computed:!0}}}};const K=[{organizationName:"Bedriften",organizationNumber:"912602370",quantityUnprocessedMessages:5,balance:"12 345 678,00 kr"},{organizationName:"Sønn & co",organizationNumber:"812602372",quantityUnprocessedMessages:3,balance:"12 345,00 kr"},{organizationName:"Beslag skytter",organizationNumber:"812602552",quantityUnprocessedMessages:1,balance:"34 234 343,00 kr"}],gt={title:"Komponenter/Searchable-dropdown/SearchableDropdown",component:I,argTypes:{postListElement:{options:["html","text","none"],mapping:{html:l.createElement("span",null,"Some text describing the list"),text:"Some text describing the list",none:void 0}},optionBody:{options:["custom","none"],mapping:{custom:({item:t,isHighlighted:e})=>l.createElement("div",{style:{padding:lt,background:e?at:rt}},l.createElement("div",null,t.organizationName),l.createElement("div",{style:{display:"flex",justifyContent:"space-between"}},l.createElement(ne,null,t.organizationNumber),l.createElement(ne,null,t.quantityUnprocessedMessages," ulest"))),none:void 0}}}},f={args:{id:"id",labelledById:"labelled-by-id",dropdownList:K,dropdownAttributes:["organizationName"],searchAttributes:["organizationName"],noMatch:{text:"Søket ga ingen treff"},inputProps:{placeholder:"Velg"},postListElement:"none"},render:function({id:e,labelledById:n,...r}){return l.createElement(E,{label:"Velg bedrift",labelId:n,inputId:e},l.createElement(I,{id:e,labelledById:n,...r}))}},T={args:{...f.args,dropdownAttributes:["organizationName","organizationNumber","balance"]},render:function({id:e,labelledById:n,...r}){return l.createElement(E,{label:"Velg bedrift",labelId:n,inputId:e},l.createElement(I,{id:e,labelledById:n,...r}))}},V={args:{...f.args,searchMatcher:(t,e)=>n=>{const r=d=>`${d}`.replace(/\s/g,"").toLowerCase(),o=r(t);return e.map(d=>r(n[d])).some(d=>d.includes(o))}},render:function({id:e,labelledById:n,...r}){return l.createElement(E,{label:"Velg bedrift",labelId:n,inputId:e},l.createElement(I,{id:e,labelledById:n,...r}))}},B={args:{...f.args,noMatch:{text:"Søket ga ingen treff",dropdownList:K.slice(1,4)}},render:function({id:e,labelledById:n,...r}){return l.createElement(E,{label:"Velg bedrift",labelId:n,inputId:e},l.createElement(I,{id:e,labelledById:n,...r}))}},D={args:{...f.args,selectedItem:K[2]},render:function({id:e,labelledById:n,...r}){return l.createElement(E,{label:"Velg bedrift",labelId:n,inputId:e},l.createElement(I,{id:e,labelledById:n,...r}))}},N={args:{...f.args,postListElement:l.createElement("span",null,"Some text describing the list")},render:function({id:e,labelledById:n,...r}){return l.createElement(E,{label:"Velg bedrift",labelId:n,inputId:e},l.createElement(I,{id:e,labelledById:n,...r}))}},k={args:{...f.args,displayAttribute:"organizationNumber",dropdownAttributes:["organizationName","organizationNumber"],searchAttributes:["organizationNumber","organizationName"]},render:function({id:e,labelledById:n,...r}){return l.createElement(E,{label:"Velg bedrift",labelId:n,inputId:e},l.createElement(I,{id:e,labelledById:n,...r}))}},q={args:{...f.args},render:function({id:e,labelledById:n,...r}){return l.createElement(E,{label:"Velg bedrift",labelId:n,inputId:e},o=>l.createElement(I,{labelledById:n,...r,...o,"aria-invalid":"true"}))}},C={args:{...f.args},render:function({id:e,labelledById:n,...r}){return l.createElement(E,{label:"Velg bedrift",labelId:n,inputId:e,description:"Velg en bedrift for å fortsette"},o=>l.createElement(I,{labelledById:n,...r,...o}))}};var re,le,ie;f.parameters={...f.parameters,docs:{...(re=f.parameters)==null?void 0:re.docs,source:{originalSource:`{
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
}`,...(ie=(le=f.parameters)==null?void 0:le.docs)==null?void 0:ie.source}}};var se,de,oe;T.parameters={...T.parameters,docs:{...(se=T.parameters)==null?void 0:se.docs,source:{originalSource:`{
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
}`,...(oe=(de=T.parameters)==null?void 0:de.docs)==null?void 0:oe.source}}};var ue,ce,pe;V.parameters={...V.parameters,docs:{...(ue=V.parameters)==null?void 0:ue.docs,source:{originalSource:`{
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
}`,...(pe=(ce=V.parameters)==null?void 0:ce.docs)==null?void 0:pe.source}}};var me,ge,be;B.parameters={...B.parameters,docs:{...(me=B.parameters)==null?void 0:me.docs,source:{originalSource:`{
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
}`,...(be=(ge=B.parameters)==null?void 0:ge.docs)==null?void 0:be.source}}};var fe,Ie,ye;D.parameters={...D.parameters,docs:{...(fe=D.parameters)==null?void 0:fe.docs,source:{originalSource:`{
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
}`,...(ye=(Ie=D.parameters)==null?void 0:Ie.docs)==null?void 0:ye.source}}};var he,we,Ee;N.parameters={...N.parameters,docs:{...(he=N.parameters)==null?void 0:he.docs,source:{originalSource:`{
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
}`,...(Ee=(we=N.parameters)==null?void 0:we.docs)==null?void 0:Ee.source}}};var xe,Se,ve;k.parameters={...k.parameters,docs:{...(xe=k.parameters)==null?void 0:xe.docs,source:{originalSource:`{
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
}`,...(ve=(Se=k.parameters)==null?void 0:Se.docs)==null?void 0:ve.source}}};var Re,Ae,Te;q.parameters={...q.parameters,docs:{...(Re=q.parameters)==null?void 0:Re.docs,source:{originalSource:`{
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
}`,...(Te=(Ae=q.parameters)==null?void 0:Ae.docs)==null?void 0:Te.source}}};var Ve,Be,De;C.parameters={...C.parameters,docs:{...(Ve=C.parameters)==null?void 0:Ve.docs,source:{originalSource:`{
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
}`,...(De=(Be=C.parameters)==null?void 0:Be.docs)==null?void 0:De.source}}};const bt=["Standard","DropdownAttributes","CustomSearch","ExtraResults","SelectedItem","PostListElement","CustomDisplayAttribute","AriaInvalid","WithDescription"],xt=Object.freeze(Object.defineProperty({__proto__:null,AriaInvalid:q,CustomDisplayAttribute:k,CustomSearch:V,DropdownAttributes:T,ExtraResults:B,PostListElement:N,SelectedItem:D,Standard:f,WithDescription:C,__namedExportsOrder:bt,default:gt},Symbol.toStringTag,{value:"Module"}));export{V as C,T as D,B as E,N as P,xt as S,C as W,f as a,D as b};
