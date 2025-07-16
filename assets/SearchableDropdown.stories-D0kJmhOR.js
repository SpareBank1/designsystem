import{R as r,r as y}from"./index-DQDNmYQF.js";import{c as xe}from"./index-QCImZZ3W.js";import{g as ze,a as _,f as Fe,u as Ge,b as Ce,c as Oe,d as Me,e as X,m as He,T as Ke,L as Ue,R as je,i as We,s as $,j as J,k as Pe}from"./ListBox-iefsrwiY.js";import{M as Xe}from"./MicroText-T72i9KwR.js";import{i as $e,S as Q}from"./index-DlnE8UeV.js";import{I as x}from"./InputGroup-DOKvm3eQ.js";var Je="#dbc4cb",Qe="#fff",Ye="8px";function Ae({item:e,dropdownAttributes:t,isHighlighted:a,locale:i}){const[c,...o]=t,h=e[c],l=o.map((d,u)=>r.createElement(Xe,{"aria-label":d==="balance"?ze(i,e[d]):void 0,className:"ffe-searchable-dropdown__detail-text",key:u},e[d]));return r.createElement("div",{className:xe("ffe-searchable-dropdown__list-item-body",{"ffe-searchable-dropdown__list-item-body--highlighted":a})},h,!!l.length&&r.createElement("div",{className:"ffe-searchable-dropdown__list-item-body-details"},l))}Ae.__docgenInfo={description:"",methods:[],displayName:"OptionBody",props:{item:{required:!0,tsType:{name:"Item"},description:""},dropdownAttributes:{required:!0,tsType:{name:"Array",elements:[{name:"Item"}],raw:"Array<keyof Item>"},description:""},isHighlighted:{required:!0,tsType:{name:"boolean"},description:""},locale:{required:!0,tsType:{name:"union",raw:"'nb' | 'nn' | 'en'",elements:[{name:"literal",value:"'nb'"},{name:"literal",value:"'nn'"},{name:"literal",value:"'en'"}]},description:""}}};const Y=({state:e,searchAttributes:t,maxRenderedDropdownElements:a,dropdownList:i,noMatchDropdownList:c,searchMatcher:o,displayAttribute:h,onChange:l})=>{const{listToRender:d}=_({inputValue:e.inputValue,searchAttributes:t,maxRenderedDropdownElements:a,dropdownList:i,noMatchDropdownList:c,searchMatcher:o,showAllItemsInDropdown:!0}),u=e.inputValue===""&&!!e.selectedItem,R=e.listToRender.length===1&&t.map(v=>{var A;return e.listToRender[0][v]===((A=e.selectedItem)==null?void 0:A[v])}).includes(!1)&&e.highlightedIndex!==-1;let b=e.selectedItem;return u?(l==null||l(null),b=void 0):R&&(l==null||l(e.listToRender[0]),b=e.listToRender[0]),{inputValue:b?b[h]:"",selectedItem:b,listToRender:d}},Ze=({searchAttributes:e,dropdownList:t,displayAttribute:a,noMatchDropdownList:i,maxRenderedDropdownElements:c,searchMatcher:o,onChange:h})=>(l,d)=>{var u,R,b,f,v,A,z,T;switch(d.type){case"InputKeyDownEscape":return{...l,noMatch:!1,isExpanded:!1,highlightedIndex:-1,inputValue:l.selectedItem?l.selectedItem[a]:""};case"InputClick":{const{noMatch:m,listToRender:I}=_({inputValue:l.inputValue,searchAttributes:e,maxRenderedDropdownElements:c,dropdownList:t,noMatchDropdownList:i,searchMatcher:o,showAllItemsInDropdown:!0});return{...l,isExpanded:!0,listToRender:I,noMatch:m}}case"InputChange":{const{noMatch:m,listToRender:I}=_({inputValue:((u=d.payload)==null?void 0:u.inputValue)??"",searchAttributes:e,maxRenderedDropdownElements:c,dropdownList:t,noMatchDropdownList:i,searchMatcher:o,showAllItemsInDropdown:!1});return{...l,isExpanded:!0,inputValue:((R=d.payload)==null?void 0:R.inputValue)??"",listToRender:I,highlightedIndex:((f=(b=d.payload)==null?void 0:b.inputValue)==null?void 0:f.trim())===""||I.length===0?-1:0,noMatch:m}}case"ToggleButtonPressed":{if(l.isExpanded){const{listToRender:m,inputValue:I,selectedItem:S}=Y({state:l,searchAttributes:e,maxRenderedDropdownElements:c,dropdownList:t,noMatchDropdownList:i,searchMatcher:o,displayAttribute:a,onChange:h});return{...l,isExpanded:!1,highlightedIndex:-1,inputValue:I,selectedItem:S,listToRender:m}}return{...l,isExpanded:!l.isExpanded}}case"ItemSelectedProgrammatically":case"ItemOnClick":case"InputKeyDownEnter":return{...l,isExpanded:!1,highlightedIndex:-1,selectedItem:(v=d.payload)==null?void 0:v.selectedItem,inputValue:((z=(A=d.payload)==null?void 0:A.selectedItem)==null?void 0:z[a])||""};case"InputKeyDownArrowDown":case"InputKeyDownArrowUp":return{...l,isExpanded:!0,highlightedIndex:((T=d.payload)==null?void 0:T.highlightedIndex)??-1};case"FocusMovedOutSide":{const{listToRender:m,inputValue:I,selectedItem:S}=Y({state:l,searchAttributes:e,maxRenderedDropdownElements:c,dropdownList:t,noMatchDropdownList:i,searchMatcher:o,displayAttribute:a,onChange:h});return{...l,isExpanded:!1,highlightedIndex:-1,inputValue:I,selectedItem:S,listToRender:m}}case"DropdownListPropUpdated":return{...l,..._({inputValue:l.inputValue,searchAttributes:e,maxRenderedDropdownElements:c,dropdownList:t,noMatchDropdownList:i,searchMatcher:o,showAllItemsInDropdown:!!l.selectedItem})};default:return l}},et="ArrowUp",tt="ArrowDown",nt="Escape",at="Enter",rt="Tab";function it({id:e,labelledById:t,className:a,dropdownList:i,dropdownAttributes:c,searchAttributes:o,displayAttribute:h=o[0],maxRenderedDropdownElements:l=Number.MAX_SAFE_INTEGER,onChange:d,inputProps:u,optionBody:R,postListElement:b,noMatch:f,locale:v="nb",ariaInvalid:A,formatter:z=n=>n,searchMatcher:T,selectedItem:m,isLoading:I=!1,onOpen:S,onClose:Re,isEqual:Te=$e,...Se},Ve){var U,j,W,P;const[n,p]=y.useReducer(Ze({dropdownList:i,displayAttribute:h,searchAttributes:o,maxRenderedDropdownElements:l,noMatchDropdownList:f==null?void 0:f.dropdownList,searchMatcher:T,onChange:d}),{isExpanded:!1,selectedItems:[],highlightedIndex:-1,formattedInputValue:"",inputValue:m?m[h]:""},s=>({...s,..._({inputValue:s.inputValue,searchAttributes:o,maxRenderedDropdownElements:l,dropdownList:i,noMatchDropdownList:f==null?void 0:f.dropdownList,searchMatcher:T,showAllItemsInDropdown:!!m})})),F=Ge({listToRender:n.listToRender}),[Be,Ne]=y.useState(!1),C=y.useRef(null),M=y.useRef(null),ke=R||Ae,G=y.useRef(null),H=y.useId(),K=y.useRef(!1),De=()=>{p({type:"InputClick"})},qe=s=>{u!=null&&u.onBlur&&u.onBlur(s)};y.useEffect(()=>{p({type:"ItemSelectedProgrammatically",payload:{selectedItem:m}})},[m,p]),Ce({hasFocus:Be,isExpanded:n.isExpanded,isLoading:I,locale:v,resultCount:n.listToRender.length,selectedValue:(U=n.selectedItem)==null?void 0:U[h]}),y.useLayoutEffect(()=>{var s;K.current&&((s=C.current)==null||s.focus(),K.current=!1)}),y.useEffect(()=>{p({type:"DropdownListPropUpdated"})},[i,p]),Oe({isExpanded:n.isExpanded,onClose:Re,onOpen:S});const Le=y.useCallback(()=>p({type:"FocusMovedOutSide"}),[]);Me({id:e,containerRef:M,handleFocusMovedOutside:Le});const _e=s=>{if(s.key===at&&n.highlightedIndex>=0){s.preventDefault(),p({type:"InputKeyDownEnter",payload:{selectedItem:n.listToRender[n.highlightedIndex]}}),d==null||d(n.listToRender[n.highlightedIndex]);return}else if(s.key===nt){p({type:"InputKeyDownEscape"});return}if(s.key===et){if(s.preventDefault(),n.listToRender.length){const E=We(n.highlightedIndex,n.listToRender.length);p({type:"InputKeyDownArrowUp",payload:{highlightedIndex:E}}),E>=0&&$(n==null?void 0:n.listToRender[E],c),J(F[E].current,G.current)}return}if(s.key===tt&&(s.preventDefault(),n.listToRender.length)){const E=Pe(n.highlightedIndex,n.listToRender.length);p({type:"InputKeyDownArrowDown",payload:{highlightedIndex:E}}),E>=0&&$(n==null?void 0:n.listToRender[E],c),J(F[E].current,G.current)}s.key===rt&&p({type:"FocusMovedOutSide"})};return r.createElement("div",{onKeyDown:_e,className:xe(a,"ffe-searchable-dropdown","ffe-default-mode"),ref:M,onMouseDown:X(e),onFocus:X(e)},r.createElement("div",{className:"ffe-searchable-dropdown__input",onClick:()=>{var s;(s=C.current)==null||s.focus()}},r.createElement("input",{...u,ref:He([C,Ve]),id:e,"aria-labelledby":t,onClick:De,onChange:s=>{u!=null&&u.onChange&&u.onChange(s),p({type:"InputChange",payload:{inputValue:s.target.value}})},onFocus:()=>{Ne(!0),p({type:"InputClick"})},onBlur:qe,"aria-describedby":[u==null?void 0:u["aria-describedby"],n.noMatch&&H].filter(Boolean).join(" ")||void 0,value:z(n.inputValue),type:"text",role:"combobox",autoComplete:"off","aria-controls":((j=G.current)==null?void 0:j.getAttribute("id"))??void 0,"aria-expanded":n.isExpanded&&!!n.listToRender.length,"aria-autocomplete":"list","aria-haspopup":"listbox","aria-activedescendant":n.highlightedIndex>=0?((P=(W=F[n.highlightedIndex])==null?void 0:W.current)==null?void 0:P.getAttribute("id"))??void 0:void 0,"aria-invalid":Se["aria-invalid"]??A})),r.createElement(Ke,{isExpanded:n.isExpanded,onClick:()=>{p({type:"ToggleButtonPressed"})},isLoading:I}),r.createElement(Ue,{ref:G,isExpanded:n.isExpanded},n.isExpanded&&r.createElement(je,{isEqual:Te,listToRender:n.listToRender,OptionBody:ke,highlightedIndex:n.highlightedIndex,dropdownAttributes:c,locale:v,refs:F,onChange:s=>{p({type:"ItemOnClick",payload:{selectedItem:s}}),d==null||d(s)},noMatch:n.noMatch?f:void 0,noMatchMessageId:H,selectedItems:n.selectedItem?[n.selectedItem]:[]}),b&&r.createElement("div",{className:"ffe-searchable-dropdown__list--post-list-element"},b)))}const w=Fe(it);w.__docgenInfo={description:"",methods:[],displayName:"SearchableDropdown",props:{id:{required:!0,tsType:{name:"string"},description:"Id of drop down"},labelledById:{required:!1,tsType:{name:"string"},description:"Id of element that labels input field"},className:{required:!1,tsType:{name:"string"},description:"Extra class"},dropdownList:{required:!0,tsType:{name:"Array",elements:[{name:"Item"}],raw:"Item[]"},description:"List of objects to be displayed in dropdown"},selectedItem:{required:!1,tsType:{name:"Item"},description:"The selected item to be displayed in the input field. If not specified, uses internal state to decide."},dropdownAttributes:{required:!0,tsType:{name:"Array",elements:[{name:"unknown"}],raw:"(keyof Item)[]"},description:"Array of attributes to be displayed in list"},searchAttributes:{required:!0,tsType:{name:"Array",elements:[{name:"unknown"}],raw:"(keyof Item)[]"},description:"Array of attributes used when filtering search"},displayAttribute:{required:!1,tsType:{name:"Item"},description:"Attribute used in the input when an item is selected. Defaults to first in searchAttributes *",defaultValue:{value:"searchAttributes[0]",computed:!0}},inputProps:{required:!1,tsType:{name:"ReactComponentProps",raw:"React.ComponentProps<'input'>",elements:[{name:"literal",value:"'input'"}]},description:"Props used on input field"},maxRenderedDropdownElements:{required:!1,tsType:{name:"number"},description:"Limits number of rendered dropdown elements",defaultValue:{value:"Number.MAX_SAFE_INTEGER",computed:!0}},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(item: Item | null) => void",signature:{arguments:[{type:{name:"union",raw:"Item | null",elements:[{name:"Item"},{name:"null"}]},name:"item"}],return:{name:"void"}}},description:"Called when a value is selected"},optionBody:{required:!1,tsType:{name:"ReactComponentType",raw:`React.ComponentType<{
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
that has loaded.`,defaultValue:{value:"false",computed:!1}},onOpen:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Function used when dropdown opens"},onClose:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Function used when dropdown closes"},isEqual:{required:!1,tsType:{name:"signature",type:"function",raw:"(itemA: Item, itemB: Item) => boolean",signature:{arguments:[{type:{name:"Item"},name:"itemA"},{type:{name:"Item"},name:"itemB"}],return:{name:"boolean"}}},description:"Custom compare between objects. Default is deep equals",defaultValue:{value:"isDeepEqual",computed:!0}}}};const O=[{organizationName:"Bedriften",organizationNumber:"912602370",quantityUnprocessedMessages:5,balance:"12 345 678,00 kr"},{organizationName:"Sønn & co",organizationNumber:"812602372",quantityUnprocessedMessages:3,balance:"12 345,00 kr"},{organizationName:"Beslag skytter",organizationNumber:"812602552",quantityUnprocessedMessages:1,balance:"34 234 343,00 kr"}],lt={title:"Komponenter/Searchable-dropdown/SearchableDropdown",component:w,argTypes:{postListElement:{options:["html","text","none"],mapping:{html:r.createElement("span",null,"Some text describing the list"),text:"Some text describing the list",none:void 0}},optionBody:{options:["custom","none"],mapping:{custom:({item:e,isHighlighted:t})=>r.createElement("div",{style:{padding:Ye,background:t?Je:Qe}},r.createElement("div",null,e.organizationName),r.createElement("div",{style:{display:"flex",justifyContent:"space-between"}},r.createElement(Q,null,e.organizationNumber),r.createElement(Q,null,e.quantityUnprocessedMessages," ulest"))),none:void 0}}}},g={args:{id:"id",labelledById:"labelled-by-id",dropdownList:O,dropdownAttributes:["organizationName"],searchAttributes:["organizationName"],noMatch:{text:"Søket ga ingen treff"},inputProps:{placeholder:"Velg"},postListElement:"none"},render:function({id:t,labelledById:a,...i}){return r.createElement(x,{label:"Velg bedrift",labelId:a,inputId:t},r.createElement(w,{id:t,labelledById:a,...i}))}},V={args:{...g.args,dropdownAttributes:["organizationName","organizationNumber","balance"]},render:function({id:t,labelledById:a,...i}){return r.createElement(x,{label:"Velg bedrift",labelId:a,inputId:t},r.createElement(w,{id:t,labelledById:a,...i}))}},B={args:{...g.args,searchMatcher:(e,t)=>a=>{const i=o=>`${o}`.replace(/\s/g,"").toLowerCase(),c=i(e);return t.map(o=>i(a[o])).some(o=>o.includes(c))}},render:function({id:t,labelledById:a,...i}){return r.createElement(x,{label:"Velg bedrift",labelId:a,inputId:t},r.createElement(w,{id:t,labelledById:a,...i}))}},N={args:{...g.args,noMatch:{text:"Søket ga ingen treff",dropdownList:O.slice(1,4)}},render:function({id:t,labelledById:a,...i}){return r.createElement(x,{label:"Velg bedrift",labelId:a,inputId:t},r.createElement(w,{id:t,labelledById:a,...i}))}},k={args:{...g.args,selectedItem:O[2]},render:function({id:t,labelledById:a,...i}){return r.createElement(x,{label:"Velg bedrift",labelId:a,inputId:t},r.createElement(w,{id:t,labelledById:a,...i}))}},D={args:{...g.args,postListElement:r.createElement("span",null,"Some text describing the list")},render:function({id:t,labelledById:a,...i}){return r.createElement(x,{label:"Velg bedrift",labelId:a,inputId:t},r.createElement(w,{id:t,labelledById:a,...i}))}},q={args:{...g.args,displayAttribute:"organizationNumber",dropdownAttributes:["organizationName","organizationNumber"],searchAttributes:["organizationNumber","organizationName"]},render:function({id:t,labelledById:a,...i}){return r.createElement(x,{label:"Velg bedrift",labelId:a,inputId:t},r.createElement(w,{id:t,labelledById:a,...i}))}},L={args:{...g.args},render:function({id:t,labelledById:a,...i}){return r.createElement(x,{label:"Velg bedrift",labelId:a,inputId:t},c=>r.createElement(w,{labelledById:a,...i,...c,"aria-invalid":"true"}))}};var Z,ee,te;g.parameters={...g.parameters,docs:{...(Z=g.parameters)==null?void 0:Z.docs,source:{originalSource:`{
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
}`,...(te=(ee=g.parameters)==null?void 0:ee.docs)==null?void 0:te.source}}};var ne,ae,re;V.parameters={...V.parameters,docs:{...(ne=V.parameters)==null?void 0:ne.docs,source:{originalSource:`{
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
}`,...(re=(ae=V.parameters)==null?void 0:ae.docs)==null?void 0:re.source}}};var ie,le,se;B.parameters={...B.parameters,docs:{...(ie=B.parameters)==null?void 0:ie.docs,source:{originalSource:`{
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
}`,...(se=(le=B.parameters)==null?void 0:le.docs)==null?void 0:se.source}}};var de,oe,ue;N.parameters={...N.parameters,docs:{...(de=N.parameters)==null?void 0:de.docs,source:{originalSource:`{
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
}`,...(ue=(oe=N.parameters)==null?void 0:oe.docs)==null?void 0:ue.source}}};var ce,pe,me;k.parameters={...k.parameters,docs:{...(ce=k.parameters)==null?void 0:ce.docs,source:{originalSource:`{
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
}`,...(me=(pe=k.parameters)==null?void 0:pe.docs)==null?void 0:me.source}}};var ge,be,fe;D.parameters={...D.parameters,docs:{...(ge=D.parameters)==null?void 0:ge.docs,source:{originalSource:`{
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
}`,...(fe=(be=D.parameters)==null?void 0:be.docs)==null?void 0:fe.source}}};var Ie,ye,he;q.parameters={...q.parameters,docs:{...(Ie=q.parameters)==null?void 0:Ie.docs,source:{originalSource:`{
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
}`,...(he=(ye=q.parameters)==null?void 0:ye.docs)==null?void 0:he.source}}};var we,Ee,ve;L.parameters={...L.parameters,docs:{...(we=L.parameters)==null?void 0:we.docs,source:{originalSource:`{
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
}`,...(ve=(Ee=L.parameters)==null?void 0:Ee.docs)==null?void 0:ve.source}}};const st=["Standard","DropdownAttributes","CustomSearch","ExtraResults","SelectedItem","PostListElement","CustomDisplayAttribute","AriaInvalid"],gt=Object.freeze(Object.defineProperty({__proto__:null,AriaInvalid:L,CustomDisplayAttribute:q,CustomSearch:B,DropdownAttributes:V,ExtraResults:N,PostListElement:D,SelectedItem:k,Standard:g,__namedExportsOrder:st,default:lt},Symbol.toStringTag,{value:"Module"}));export{B as C,V as D,N as E,D as P,gt as S,g as a,k as b};
