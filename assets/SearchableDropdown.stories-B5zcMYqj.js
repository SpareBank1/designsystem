import{R as a,r as y}from"./index-DQDNmYQF.js";import{c as Se}from"./index-D2FocPV0.js";import{g as Ce,a as z,f as Oe,u as Me,b as He,c as Ke,d as Ue,e as $,m as je,T as We,L as Pe,R as $e,l as Xe,q as X,s as J,n as Je}from"./ListBox-C59Vucjw.js";import{M as Qe}from"./MicroText-DveNF6m_.js";import{i as Ye,S as Q}from"./index-DV_rwQs_.js";import{I as v}from"./InputGroup-BOYEkbY1.js";const Ze="#dbc4cb",et="#fff",tt="8px";function Te({item:e,dropdownAttributes:t,isHighlighted:n,locale:l}){const[o,...u]=t,w=e[o],i=u.map((d,c)=>a.createElement(Qe,{"aria-label":d==="balance"?Ce(l,e[d]):void 0,className:"ffe-searchable-dropdown__detail-text",key:c},e[d]));return a.createElement("div",{className:Se("ffe-searchable-dropdown__list-item-body",{"ffe-searchable-dropdown__list-item-body--highlighted":n})},w,!!i.length&&a.createElement("div",{className:"ffe-searchable-dropdown__list-item-body-details"},i))}Te.__docgenInfo={description:"",methods:[],displayName:"OptionBody",props:{item:{required:!0,tsType:{name:"Item"},description:""},dropdownAttributes:{required:!0,tsType:{name:"Array",elements:[{name:"Item"}],raw:"Array<keyof Item>"},description:""},isHighlighted:{required:!0,tsType:{name:"boolean"},description:""},locale:{required:!0,tsType:{name:"union",raw:"'nb' | 'nn' | 'en'",elements:[{name:"literal",value:"'nb'"},{name:"literal",value:"'nn'"},{name:"literal",value:"'en'"}]},description:""}}};const Y=({state:e,searchAttributes:t,maxRenderedDropdownElements:n,dropdownList:l,noMatchDropdownList:o,searchMatcher:u,displayAttribute:w,onChange:i})=>{const{listToRender:d}=z({inputValue:e.inputValue,searchAttributes:t,maxRenderedDropdownElements:n,dropdownList:l,noMatchDropdownList:o,searchMatcher:u,showAllItemsInDropdown:!0}),c=e.inputValue===""&&!!e.selectedItem,A=e.listToRender.length===1&&t.map(x=>{var R;return e.listToRender[0][x]===((R=e.selectedItem)==null?void 0:R[x])}).includes(!1)&&e.highlightedIndex!==-1;let b=e.selectedItem;return c?(i==null||i(null),b=void 0):A&&(i==null||i(e.listToRender[0]),b=e.listToRender[0]),{inputValue:b?b[w]:"",selectedItem:b,listToRender:d}},nt=({searchAttributes:e,dropdownList:t,displayAttribute:n,noMatchDropdownList:l,maxRenderedDropdownElements:o,searchMatcher:u,onChange:w})=>(i,d)=>{var c,A,b,f,x,R,F,S;switch(d.type){case"InputKeyDownEscape":return{...i,noMatch:!1,isExpanded:!1,highlightedIndex:-1,inputValue:i.selectedItem?i.selectedItem[n]:""};case"InputClick":{const{noMatch:m,listToRender:I}=z({inputValue:i.inputValue,searchAttributes:e,maxRenderedDropdownElements:o,dropdownList:t,noMatchDropdownList:l,searchMatcher:u,showAllItemsInDropdown:!0});return{...i,isExpanded:!0,listToRender:I,noMatch:m}}case"InputChange":{const{noMatch:m,listToRender:I}=z({inputValue:((c=d.payload)==null?void 0:c.inputValue)??"",searchAttributes:e,maxRenderedDropdownElements:o,dropdownList:t,noMatchDropdownList:l,searchMatcher:u,showAllItemsInDropdown:!1});return{...i,isExpanded:!0,inputValue:((A=d.payload)==null?void 0:A.inputValue)??"",listToRender:I,highlightedIndex:((f=(b=d.payload)==null?void 0:b.inputValue)==null?void 0:f.trim())===""||I.length===0?-1:0,noMatch:m}}case"ToggleButtonPressed":{if(i.isExpanded){const{listToRender:m,inputValue:I,selectedItem:T}=Y({state:i,searchAttributes:e,maxRenderedDropdownElements:o,dropdownList:t,noMatchDropdownList:l,searchMatcher:u,displayAttribute:n,onChange:w});return{...i,isExpanded:!1,highlightedIndex:-1,inputValue:I,selectedItem:T,listToRender:m}}return{...i,isExpanded:!i.isExpanded}}case"ItemSelectedProgrammatically":case"ItemOnClick":case"InputKeyDownEnter":return{...i,isExpanded:!1,highlightedIndex:-1,selectedItem:(x=d.payload)==null?void 0:x.selectedItem,inputValue:((F=(R=d.payload)==null?void 0:R.selectedItem)==null?void 0:F[n])||""};case"InputKeyDownArrowDown":case"InputKeyDownArrowUp":return{...i,isExpanded:!0,highlightedIndex:((S=d.payload)==null?void 0:S.highlightedIndex)??-1};case"FocusMovedOutSide":{const{listToRender:m,inputValue:I,selectedItem:T}=Y({state:i,searchAttributes:e,maxRenderedDropdownElements:o,dropdownList:t,noMatchDropdownList:l,searchMatcher:u,displayAttribute:n,onChange:w});return{...i,isExpanded:!1,highlightedIndex:-1,inputValue:I,selectedItem:T,listToRender:m}}case"DropdownListPropUpdated":return{...i,...z({inputValue:i.inputValue,searchAttributes:e,maxRenderedDropdownElements:o,dropdownList:t,noMatchDropdownList:l,searchMatcher:u,showAllItemsInDropdown:!!i.selectedItem})};default:return i}},rt="ArrowUp",at="ArrowDown",lt="Escape",it="Enter",st="Tab";function dt({id:e,labelledById:t,className:n,dropdownList:l,dropdownAttributes:o,searchAttributes:u,displayAttribute:w=u[0],maxRenderedDropdownElements:i=Number.MAX_SAFE_INTEGER,onChange:d,inputProps:c,optionBody:A,postListElement:b,noMatch:f,locale:x="nb",ariaInvalid:R,formatter:F=r=>r,searchMatcher:S,selectedItem:m,isLoading:I=!1,onOpen:T,onClose:Ve,isEqual:Be=Ye,...De},Ne){var j,W,P;const[r,p]=y.useReducer(nt({dropdownList:l,displayAttribute:w,searchAttributes:u,maxRenderedDropdownElements:i,noMatchDropdownList:f==null?void 0:f.dropdownList,searchMatcher:S,onChange:d}),{isExpanded:!1,selectedItems:[],highlightedIndex:-1,formattedInputValue:"",inputValue:m?m[w]:""},s=>({...s,...z({inputValue:s.inputValue,searchAttributes:u,maxRenderedDropdownElements:i,dropdownList:l,noMatchDropdownList:f==null?void 0:f.dropdownList,searchMatcher:S,showAllItemsInDropdown:!!m})})),G=Me({listToRender:r.listToRender}),[ke,qe]=y.useState(!1),C=y.useRef(null),H=y.useRef(null),Le=A||Te,O=y.useRef(null),K=y.useId(),U=y.useRef(!1),_e=()=>{p({type:"InputClick"})},ze=s=>{c!=null&&c.onBlur&&c.onBlur(s)};y.useEffect(()=>{p({type:"ItemSelectedProgrammatically",payload:{selectedItem:m}})},[m,p]),He({hasFocus:ke,isExpanded:r.isExpanded,isLoading:I,locale:x,resultCount:r.listToRender.length,selectedValue:(j=r.selectedItem)==null?void 0:j[w]}),y.useLayoutEffect(()=>{var s;U.current&&((s=C.current)==null||s.focus(),U.current=!1)}),y.useEffect(()=>{p({type:"DropdownListPropUpdated"})},[l,p]),Ke({isExpanded:r.isExpanded,onClose:Ve,onOpen:T});const Fe=y.useCallback(()=>p({type:"FocusMovedOutSide"}),[]);Ue({id:e,containerRef:H,handleFocusMovedOutside:Fe});const Ge=s=>{if(s.key===it&&r.highlightedIndex>=0){s.preventDefault(),p({type:"InputKeyDownEnter",payload:{selectedItem:r.listToRender[r.highlightedIndex]}}),d==null||d(r.listToRender[r.highlightedIndex]);return}else if(s.key===lt){p({type:"InputKeyDownEscape"});return}if(s.key===rt){if(s.preventDefault(),r.listToRender.length){const E=Xe(r.highlightedIndex,r.listToRender.length);p({type:"InputKeyDownArrowUp",payload:{highlightedIndex:E}}),E>=0&&X(r==null?void 0:r.listToRender[E],o),J(G[E].current,O.current)}return}if(s.key===at&&(s.preventDefault(),r.listToRender.length)){const E=Je(r.highlightedIndex,r.listToRender.length);p({type:"InputKeyDownArrowDown",payload:{highlightedIndex:E}}),E>=0&&X(r==null?void 0:r.listToRender[E],o),J(G[E].current,O.current)}s.key===st&&p({type:"FocusMovedOutSide"})};return a.createElement("div",{onKeyDown:Ge,className:Se(n,"ffe-searchable-dropdown","ffe-default-mode"),ref:H,onMouseDown:$(e),onFocus:$(e)},a.createElement("div",{className:"ffe-searchable-dropdown__input",onClick:()=>{var s;(s=C.current)==null||s.focus()}},a.createElement("input",{...c,ref:je([C,Ne]),id:e,"aria-labelledby":t,onClick:_e,onChange:s=>{c!=null&&c.onChange&&c.onChange(s),p({type:"InputChange",payload:{inputValue:s.target.value}})},onFocus:()=>{qe(!0),p({type:"InputClick"})},onBlur:ze,"aria-describedby":[c==null?void 0:c["aria-describedby"],r.noMatch&&K].filter(Boolean).join(" ")||void 0,value:F(r.inputValue),type:"text",role:"combobox",autoComplete:"off","aria-controls":`${e}-listbox`,"aria-expanded":r.isExpanded&&!!r.listToRender.length,"aria-autocomplete":"list","aria-haspopup":"listbox","aria-activedescendant":r.highlightedIndex>=0?((P=(W=G[r.highlightedIndex])==null?void 0:W.current)==null?void 0:P.getAttribute("id"))??void 0:void 0,"aria-invalid":De["aria-invalid"]??R})),a.createElement(We,{isExpanded:r.isExpanded,onClick:()=>{p({type:"ToggleButtonPressed"})},isLoading:I}),a.createElement(Pe,{ref:O,isExpanded:r.isExpanded,id:`${e}-listbox`,labelledById:t},r.isExpanded&&a.createElement($e,{isEqual:Be,listToRender:r.listToRender,OptionBody:Le,highlightedIndex:r.highlightedIndex,dropdownAttributes:o,locale:x,refs:G,onChange:s=>{p({type:"ItemOnClick",payload:{selectedItem:s}}),d==null||d(s)},noMatch:r.noMatch?f:void 0,noMatchMessageId:K,selectedItems:r.selectedItem?[r.selectedItem]:[]}),b&&a.createElement("div",{className:"ffe-searchable-dropdown__list--post-list-element"},b)))}const h=Oe(dt);h.__docgenInfo={description:"",methods:[],displayName:"SearchableDropdown",props:{id:{required:!0,tsType:{name:"string"},description:"Id of drop down"},labelledById:{required:!1,tsType:{name:"string"},description:"Id of element that labels input field"},className:{required:!1,tsType:{name:"string"},description:"Extra class"},dropdownList:{required:!0,tsType:{name:"Array",elements:[{name:"Item"}],raw:"Item[]"},description:"List of objects to be displayed in dropdown"},selectedItem:{required:!1,tsType:{name:"Item"},description:"The selected item to be displayed in the input field. If not specified, uses internal state to decide."},dropdownAttributes:{required:!0,tsType:{name:"Array",elements:[{name:"unknown"}],raw:"(keyof Item)[]"},description:"Array of attributes to be displayed in list"},searchAttributes:{required:!0,tsType:{name:"Array",elements:[{name:"unknown"}],raw:"(keyof Item)[]"},description:"Array of attributes used when filtering search"},displayAttribute:{required:!1,tsType:{name:"Item"},description:"Attribute used in the input when an item is selected. Defaults to first in searchAttributes *",defaultValue:{value:"searchAttributes[0]",computed:!0}},inputProps:{required:!1,tsType:{name:"ReactComponentProps",raw:"React.ComponentProps<'input'>",elements:[{name:"literal",value:"'input'"}]},description:"Props used on input field"},maxRenderedDropdownElements:{required:!1,tsType:{name:"number"},description:"Limits number of rendered dropdown elements",defaultValue:{value:"Number.MAX_SAFE_INTEGER",computed:!0}},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(item: Item | null) => void",signature:{arguments:[{type:{name:"union",raw:"Item | null",elements:[{name:"Item"},{name:"null"}]},name:"item"}],return:{name:"void"}}},description:"Called when a value is selected"},optionBody:{required:!1,tsType:{name:"ReactComponentType",raw:`React.ComponentType<{
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
that has loaded.`,defaultValue:{value:"false",computed:!1}},onOpen:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Function used when dropdown opens"},onClose:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Function used when dropdown closes"},isEqual:{required:!1,tsType:{name:"signature",type:"function",raw:"(itemA: Item, itemB: Item) => boolean",signature:{arguments:[{type:{name:"Item"},name:"itemA"},{type:{name:"Item"},name:"itemB"}],return:{name:"boolean"}}},description:"Custom compare between objects. Default is deep equals",defaultValue:{value:"isDeepEqual",computed:!0}}}};const M=[{organizationName:"Bedriften",organizationNumber:"912602370",quantityUnprocessedMessages:5,balance:"12 345 678,00 kr"},{organizationName:"Sønn & co",organizationNumber:"812602372",quantityUnprocessedMessages:3,balance:"12 345,00 kr"},{organizationName:"Beslag skytter",organizationNumber:"812602552",quantityUnprocessedMessages:1,balance:"34 234 343,00 kr"}],ot={title:"Komponenter/Searchable-dropdown/SearchableDropdown",component:h,argTypes:{postListElement:{options:["html","text","none"],mapping:{html:a.createElement("span",null,"Some text describing the list"),text:"Some text describing the list",none:void 0}},optionBody:{options:["custom","none"],mapping:{custom:({item:e,isHighlighted:t})=>a.createElement("div",{style:{padding:tt,background:t?Ze:et}},a.createElement("div",null,e.organizationName),a.createElement("div",{style:{display:"flex",justifyContent:"space-between"}},a.createElement(Q,null,e.organizationNumber),a.createElement(Q,null,e.quantityUnprocessedMessages," ulest"))),none:void 0}}}},g={args:{id:"id",labelledById:"labelled-by-id",dropdownList:M,dropdownAttributes:["organizationName"],searchAttributes:["organizationName"],noMatch:{text:"Søket ga ingen treff"},inputProps:{placeholder:"Velg"},postListElement:"none"},render:function({id:t,labelledById:n,...l}){return a.createElement(v,{label:"Velg bedrift",labelId:n,inputId:t},a.createElement(h,{id:t,labelledById:n,...l}))}},V={args:{...g.args,dropdownAttributes:["organizationName","organizationNumber","balance"]},render:function({id:t,labelledById:n,...l}){return a.createElement(v,{label:"Velg bedrift",labelId:n,inputId:t},a.createElement(h,{id:t,labelledById:n,...l}))}},B={args:{...g.args,searchMatcher:(e,t)=>n=>{const l=u=>`${u}`.replace(/\s/g,"").toLowerCase(),o=l(e);return t.map(u=>l(n[u])).some(u=>u.includes(o))}},render:function({id:t,labelledById:n,...l}){return a.createElement(v,{label:"Velg bedrift",labelId:n,inputId:t},a.createElement(h,{id:t,labelledById:n,...l}))}},D={args:{...g.args,noMatch:{text:"Søket ga ingen treff",dropdownList:M.slice(1,4)}},render:function({id:t,labelledById:n,...l}){return a.createElement(v,{label:"Velg bedrift",labelId:n,inputId:t},a.createElement(h,{id:t,labelledById:n,...l}))}},N={args:{...g.args,selectedItem:M[2]},render:function({id:t,labelledById:n,...l}){return a.createElement(v,{label:"Velg bedrift",labelId:n,inputId:t},a.createElement(h,{id:t,labelledById:n,...l}))}},k={args:{...g.args,postListElement:a.createElement("span",null,"Some text describing the list")},render:function({id:t,labelledById:n,...l}){return a.createElement(v,{label:"Velg bedrift",labelId:n,inputId:t},a.createElement(h,{id:t,labelledById:n,...l}))}},q={args:{...g.args,displayAttribute:"organizationNumber",dropdownAttributes:["organizationName","organizationNumber"],searchAttributes:["organizationNumber","organizationName"]},render:function({id:t,labelledById:n,...l}){return a.createElement(v,{label:"Velg bedrift",labelId:n,inputId:t},a.createElement(h,{id:t,labelledById:n,...l}))}},L={args:{...g.args},render:function({id:t,labelledById:n,...l}){return a.createElement(v,{label:"Velg bedrift",labelId:n,inputId:t},o=>a.createElement(h,{labelledById:n,...l,...o,"aria-invalid":"true"}))}},_={args:{...g.args},render:function({id:t,labelledById:n,...l}){return a.createElement(v,{label:"Velg bedrift",labelId:n,inputId:t,description:"Velg en bedrift for å fortsette"},o=>a.createElement(h,{labelledById:n,...l,...o}))}};var Z,ee,te;g.parameters={...g.parameters,docs:{...(Z=g.parameters)==null?void 0:Z.docs,source:{originalSource:`{
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
}`,...(te=(ee=g.parameters)==null?void 0:ee.docs)==null?void 0:te.source}}};var ne,re,ae;V.parameters={...V.parameters,docs:{...(ne=V.parameters)==null?void 0:ne.docs,source:{originalSource:`{
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
}`,...(ae=(re=V.parameters)==null?void 0:re.docs)==null?void 0:ae.source}}};var le,ie,se;B.parameters={...B.parameters,docs:{...(le=B.parameters)==null?void 0:le.docs,source:{originalSource:`{
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
}`,...(se=(ie=B.parameters)==null?void 0:ie.docs)==null?void 0:se.source}}};var de,oe,ue;D.parameters={...D.parameters,docs:{...(de=D.parameters)==null?void 0:de.docs,source:{originalSource:`{
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
}`,...(ue=(oe=D.parameters)==null?void 0:oe.docs)==null?void 0:ue.source}}};var ce,pe,me;N.parameters={...N.parameters,docs:{...(ce=N.parameters)==null?void 0:ce.docs,source:{originalSource:`{
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
}`,...(me=(pe=N.parameters)==null?void 0:pe.docs)==null?void 0:me.source}}};var ge,be,fe;k.parameters={...k.parameters,docs:{...(ge=k.parameters)==null?void 0:ge.docs,source:{originalSource:`{
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
}`,...(fe=(be=k.parameters)==null?void 0:be.docs)==null?void 0:fe.source}}};var Ie,ye,he;q.parameters={...q.parameters,docs:{...(Ie=q.parameters)==null?void 0:Ie.docs,source:{originalSource:`{
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
}`,...(ve=(Ee=L.parameters)==null?void 0:Ee.docs)==null?void 0:ve.source}}};var xe,Re,Ae;_.parameters={..._.parameters,docs:{...(xe=_.parameters)==null?void 0:xe.docs,source:{originalSource:`{
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
}`,...(Ae=(Re=_.parameters)==null?void 0:Re.docs)==null?void 0:Ae.source}}};const ut=["Standard","DropdownAttributes","CustomSearch","ExtraResults","SelectedItem","PostListElement","CustomDisplayAttribute","AriaInvalid","WithDescription"],It=Object.freeze(Object.defineProperty({__proto__:null,AriaInvalid:L,CustomDisplayAttribute:q,CustomSearch:B,DropdownAttributes:V,ExtraResults:D,PostListElement:k,SelectedItem:N,Standard:g,WithDescription:_,__namedExportsOrder:ut,default:ot},Symbol.toStringTag,{value:"Module"}));export{B as C,V as D,D as E,k as P,It as S,_ as W,g as a,N as b};
