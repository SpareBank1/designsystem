import{R as a,r as y}from"./index-DQDNmYQF.js";import{c as Te}from"./index-D2FocPV0.js";import{g as Oe,a as z,f as Me,u as He,b as Ke,c as Ue,d as je,e as $,m as We,T as Pe,L as Xe,R as $e,i as Je,s as J,j as Q,k as Qe}from"./ListBox-YLI9tjLh.js";import{M as Ye}from"./MicroText-DswQHKl7.js";import{i as Ze,S as Y}from"./index-DSyfhXNB.js";import{I as v}from"./InputGroup-CsZXON4u.js";var et="#dbc4cb",tt="#fff",nt="8px";function Ve({item:t,dropdownAttributes:e,isHighlighted:n,locale:i}){const[o,...u]=e,w=t[o],l=u.map((d,c)=>a.createElement(Ye,{"aria-label":d==="balance"?Oe(i,t[d]):void 0,className:"ffe-searchable-dropdown__detail-text",key:c},t[d]));return a.createElement("div",{className:Te("ffe-searchable-dropdown__list-item-body",{"ffe-searchable-dropdown__list-item-body--highlighted":n})},w,!!l.length&&a.createElement("div",{className:"ffe-searchable-dropdown__list-item-body-details"},l))}Ve.__docgenInfo={description:"",methods:[],displayName:"OptionBody",props:{item:{required:!0,tsType:{name:"Item"},description:""},dropdownAttributes:{required:!0,tsType:{name:"Array",elements:[{name:"Item"}],raw:"Array<keyof Item>"},description:""},isHighlighted:{required:!0,tsType:{name:"boolean"},description:""},locale:{required:!0,tsType:{name:"union",raw:"'nb' | 'nn' | 'en'",elements:[{name:"literal",value:"'nb'"},{name:"literal",value:"'nn'"},{name:"literal",value:"'en'"}]},description:""}}};const Z=({state:t,searchAttributes:e,maxRenderedDropdownElements:n,dropdownList:i,noMatchDropdownList:o,searchMatcher:u,displayAttribute:w,onChange:l})=>{const{listToRender:d}=z({inputValue:t.inputValue,searchAttributes:e,maxRenderedDropdownElements:n,dropdownList:i,noMatchDropdownList:o,searchMatcher:u,showAllItemsInDropdown:!0}),c=t.inputValue===""&&!!t.selectedItem,R=t.listToRender.length===1&&e.map(x=>{var A;return t.listToRender[0][x]===((A=t.selectedItem)==null?void 0:A[x])}).includes(!1)&&t.highlightedIndex!==-1;let b=t.selectedItem;return c?(l==null||l(null),b=void 0):R&&(l==null||l(t.listToRender[0]),b=t.listToRender[0]),{inputValue:b?b[w]:"",selectedItem:b,listToRender:d}},rt=({searchAttributes:t,dropdownList:e,displayAttribute:n,noMatchDropdownList:i,maxRenderedDropdownElements:o,searchMatcher:u,onChange:w})=>(l,d)=>{var c,R,b,f,x,A,F,S;switch(d.type){case"InputKeyDownEscape":return{...l,noMatch:!1,isExpanded:!1,highlightedIndex:-1,inputValue:l.selectedItem?l.selectedItem[n]:""};case"InputClick":{const{noMatch:m,listToRender:I}=z({inputValue:l.inputValue,searchAttributes:t,maxRenderedDropdownElements:o,dropdownList:e,noMatchDropdownList:i,searchMatcher:u,showAllItemsInDropdown:!0});return{...l,isExpanded:!0,listToRender:I,noMatch:m}}case"InputChange":{const{noMatch:m,listToRender:I}=z({inputValue:((c=d.payload)==null?void 0:c.inputValue)??"",searchAttributes:t,maxRenderedDropdownElements:o,dropdownList:e,noMatchDropdownList:i,searchMatcher:u,showAllItemsInDropdown:!1});return{...l,isExpanded:!0,inputValue:((R=d.payload)==null?void 0:R.inputValue)??"",listToRender:I,highlightedIndex:((f=(b=d.payload)==null?void 0:b.inputValue)==null?void 0:f.trim())===""||I.length===0?-1:0,noMatch:m}}case"ToggleButtonPressed":{if(l.isExpanded){const{listToRender:m,inputValue:I,selectedItem:T}=Z({state:l,searchAttributes:t,maxRenderedDropdownElements:o,dropdownList:e,noMatchDropdownList:i,searchMatcher:u,displayAttribute:n,onChange:w});return{...l,isExpanded:!1,highlightedIndex:-1,inputValue:I,selectedItem:T,listToRender:m}}return{...l,isExpanded:!l.isExpanded}}case"ItemSelectedProgrammatically":case"ItemOnClick":case"InputKeyDownEnter":return{...l,isExpanded:!1,highlightedIndex:-1,selectedItem:(x=d.payload)==null?void 0:x.selectedItem,inputValue:((F=(A=d.payload)==null?void 0:A.selectedItem)==null?void 0:F[n])||""};case"InputKeyDownArrowDown":case"InputKeyDownArrowUp":return{...l,isExpanded:!0,highlightedIndex:((S=d.payload)==null?void 0:S.highlightedIndex)??-1};case"FocusMovedOutSide":{const{listToRender:m,inputValue:I,selectedItem:T}=Z({state:l,searchAttributes:t,maxRenderedDropdownElements:o,dropdownList:e,noMatchDropdownList:i,searchMatcher:u,displayAttribute:n,onChange:w});return{...l,isExpanded:!1,highlightedIndex:-1,inputValue:I,selectedItem:T,listToRender:m}}case"DropdownListPropUpdated":return{...l,...z({inputValue:l.inputValue,searchAttributes:t,maxRenderedDropdownElements:o,dropdownList:e,noMatchDropdownList:i,searchMatcher:u,showAllItemsInDropdown:!!l.selectedItem})};default:return l}},at="ArrowUp",it="ArrowDown",lt="Escape",st="Enter",dt="Tab";function ot({id:t,labelledById:e,className:n,dropdownList:i,dropdownAttributes:o,searchAttributes:u,displayAttribute:w=u[0],maxRenderedDropdownElements:l=Number.MAX_SAFE_INTEGER,onChange:d,inputProps:c,optionBody:R,postListElement:b,noMatch:f,locale:x="nb",ariaInvalid:A,formatter:F=r=>r,searchMatcher:S,selectedItem:m,isLoading:I=!1,onOpen:T,onClose:Be,isEqual:De=Ze,...Ne},ke){var j,W,P,X;const[r,p]=y.useReducer(rt({dropdownList:i,displayAttribute:w,searchAttributes:u,maxRenderedDropdownElements:l,noMatchDropdownList:f==null?void 0:f.dropdownList,searchMatcher:S,onChange:d}),{isExpanded:!1,selectedItems:[],highlightedIndex:-1,formattedInputValue:"",inputValue:m?m[w]:""},s=>({...s,...z({inputValue:s.inputValue,searchAttributes:u,maxRenderedDropdownElements:l,dropdownList:i,noMatchDropdownList:f==null?void 0:f.dropdownList,searchMatcher:S,showAllItemsInDropdown:!!m})})),G=He({listToRender:r.listToRender}),[qe,Le]=y.useState(!1),O=y.useRef(null),H=y.useRef(null),_e=R||Ve,C=y.useRef(null),K=y.useId(),U=y.useRef(!1),ze=()=>{p({type:"InputClick"})},Fe=s=>{c!=null&&c.onBlur&&c.onBlur(s)};y.useEffect(()=>{p({type:"ItemSelectedProgrammatically",payload:{selectedItem:m}})},[m,p]),Ke({hasFocus:qe,isExpanded:r.isExpanded,isLoading:I,locale:x,resultCount:r.listToRender.length,selectedValue:(j=r.selectedItem)==null?void 0:j[w]}),y.useLayoutEffect(()=>{var s;U.current&&((s=O.current)==null||s.focus(),U.current=!1)}),y.useEffect(()=>{p({type:"DropdownListPropUpdated"})},[i,p]),Ue({isExpanded:r.isExpanded,onClose:Be,onOpen:T});const Ge=y.useCallback(()=>p({type:"FocusMovedOutSide"}),[]);je({id:t,containerRef:H,handleFocusMovedOutside:Ge});const Ce=s=>{if(s.key===st&&r.highlightedIndex>=0){s.preventDefault(),p({type:"InputKeyDownEnter",payload:{selectedItem:r.listToRender[r.highlightedIndex]}}),d==null||d(r.listToRender[r.highlightedIndex]);return}else if(s.key===lt){p({type:"InputKeyDownEscape"});return}if(s.key===at){if(s.preventDefault(),r.listToRender.length){const E=Je(r.highlightedIndex,r.listToRender.length);p({type:"InputKeyDownArrowUp",payload:{highlightedIndex:E}}),E>=0&&J(r==null?void 0:r.listToRender[E],o),Q(G[E].current,C.current)}return}if(s.key===it&&(s.preventDefault(),r.listToRender.length)){const E=Qe(r.highlightedIndex,r.listToRender.length);p({type:"InputKeyDownArrowDown",payload:{highlightedIndex:E}}),E>=0&&J(r==null?void 0:r.listToRender[E],o),Q(G[E].current,C.current)}s.key===dt&&p({type:"FocusMovedOutSide"})};return a.createElement("div",{onKeyDown:Ce,className:Te(n,"ffe-searchable-dropdown","ffe-default-mode"),ref:H,onMouseDown:$(t),onFocus:$(t)},a.createElement("div",{className:"ffe-searchable-dropdown__input",onClick:()=>{var s;(s=O.current)==null||s.focus()}},a.createElement("input",{...c,ref:We([O,ke]),id:t,"aria-labelledby":e,onClick:ze,onChange:s=>{c!=null&&c.onChange&&c.onChange(s),p({type:"InputChange",payload:{inputValue:s.target.value}})},onFocus:()=>{Le(!0),p({type:"InputClick"})},onBlur:Fe,"aria-describedby":[c==null?void 0:c["aria-describedby"],r.noMatch&&K].filter(Boolean).join(" ")||void 0,value:F(r.inputValue),type:"text",role:"combobox",autoComplete:"off","aria-controls":((W=C.current)==null?void 0:W.getAttribute("id"))??void 0,"aria-expanded":r.isExpanded&&!!r.listToRender.length,"aria-autocomplete":"list","aria-haspopup":"listbox","aria-activedescendant":r.highlightedIndex>=0?((X=(P=G[r.highlightedIndex])==null?void 0:P.current)==null?void 0:X.getAttribute("id"))??void 0:void 0,"aria-invalid":Ne["aria-invalid"]??A})),a.createElement(Pe,{isExpanded:r.isExpanded,onClick:()=>{p({type:"ToggleButtonPressed"})},isLoading:I}),a.createElement(Xe,{ref:C,isExpanded:r.isExpanded},r.isExpanded&&a.createElement($e,{isEqual:De,listToRender:r.listToRender,OptionBody:_e,highlightedIndex:r.highlightedIndex,dropdownAttributes:o,locale:x,refs:G,onChange:s=>{p({type:"ItemOnClick",payload:{selectedItem:s}}),d==null||d(s)},noMatch:r.noMatch?f:void 0,noMatchMessageId:K,selectedItems:r.selectedItem?[r.selectedItem]:[]}),b&&a.createElement("div",{className:"ffe-searchable-dropdown__list--post-list-element"},b)))}const h=Me(ot);h.__docgenInfo={description:"",methods:[],displayName:"SearchableDropdown",props:{id:{required:!0,tsType:{name:"string"},description:"Id of drop down"},labelledById:{required:!1,tsType:{name:"string"},description:"Id of element that labels input field"},className:{required:!1,tsType:{name:"string"},description:"Extra class"},dropdownList:{required:!0,tsType:{name:"Array",elements:[{name:"Item"}],raw:"Item[]"},description:"List of objects to be displayed in dropdown"},selectedItem:{required:!1,tsType:{name:"Item"},description:"The selected item to be displayed in the input field. If not specified, uses internal state to decide."},dropdownAttributes:{required:!0,tsType:{name:"Array",elements:[{name:"unknown"}],raw:"(keyof Item)[]"},description:"Array of attributes to be displayed in list"},searchAttributes:{required:!0,tsType:{name:"Array",elements:[{name:"unknown"}],raw:"(keyof Item)[]"},description:"Array of attributes used when filtering search"},displayAttribute:{required:!1,tsType:{name:"Item"},description:"Attribute used in the input when an item is selected. Defaults to first in searchAttributes *",defaultValue:{value:"searchAttributes[0]",computed:!0}},inputProps:{required:!1,tsType:{name:"ReactComponentProps",raw:"React.ComponentProps<'input'>",elements:[{name:"literal",value:"'input'"}]},description:"Props used on input field"},maxRenderedDropdownElements:{required:!1,tsType:{name:"number"},description:"Limits number of rendered dropdown elements",defaultValue:{value:"Number.MAX_SAFE_INTEGER",computed:!0}},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(item: Item | null) => void",signature:{arguments:[{type:{name:"union",raw:"Item | null",elements:[{name:"Item"},{name:"null"}]},name:"item"}],return:{name:"void"}}},description:"Called when a value is selected"},optionBody:{required:!1,tsType:{name:"ReactComponentType",raw:`React.ComponentType<{
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
that has loaded.`,defaultValue:{value:"false",computed:!1}},onOpen:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Function used when dropdown opens"},onClose:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Function used when dropdown closes"},isEqual:{required:!1,tsType:{name:"signature",type:"function",raw:"(itemA: Item, itemB: Item) => boolean",signature:{arguments:[{type:{name:"Item"},name:"itemA"},{type:{name:"Item"},name:"itemB"}],return:{name:"boolean"}}},description:"Custom compare between objects. Default is deep equals",defaultValue:{value:"isDeepEqual",computed:!0}}}};const M=[{organizationName:"Bedriften",organizationNumber:"912602370",quantityUnprocessedMessages:5,balance:"12 345 678,00 kr"},{organizationName:"Sønn & co",organizationNumber:"812602372",quantityUnprocessedMessages:3,balance:"12 345,00 kr"},{organizationName:"Beslag skytter",organizationNumber:"812602552",quantityUnprocessedMessages:1,balance:"34 234 343,00 kr"}],ut={title:"Komponenter/Searchable-dropdown/SearchableDropdown",component:h,argTypes:{postListElement:{options:["html","text","none"],mapping:{html:a.createElement("span",null,"Some text describing the list"),text:"Some text describing the list",none:void 0}},optionBody:{options:["custom","none"],mapping:{custom:({item:t,isHighlighted:e})=>a.createElement("div",{style:{padding:nt,background:e?et:tt}},a.createElement("div",null,t.organizationName),a.createElement("div",{style:{display:"flex",justifyContent:"space-between"}},a.createElement(Y,null,t.organizationNumber),a.createElement(Y,null,t.quantityUnprocessedMessages," ulest"))),none:void 0}}}},g={args:{id:"id",labelledById:"labelled-by-id",dropdownList:M,dropdownAttributes:["organizationName"],searchAttributes:["organizationName"],noMatch:{text:"Søket ga ingen treff"},inputProps:{placeholder:"Velg"},postListElement:"none"},render:function({id:e,labelledById:n,...i}){return a.createElement(v,{label:"Velg bedrift",labelId:n,inputId:e},a.createElement(h,{id:e,labelledById:n,...i}))}},V={args:{...g.args,dropdownAttributes:["organizationName","organizationNumber","balance"]},render:function({id:e,labelledById:n,...i}){return a.createElement(v,{label:"Velg bedrift",labelId:n,inputId:e},a.createElement(h,{id:e,labelledById:n,...i}))}},B={args:{...g.args,searchMatcher:(t,e)=>n=>{const i=u=>`${u}`.replace(/\s/g,"").toLowerCase(),o=i(t);return e.map(u=>i(n[u])).some(u=>u.includes(o))}},render:function({id:e,labelledById:n,...i}){return a.createElement(v,{label:"Velg bedrift",labelId:n,inputId:e},a.createElement(h,{id:e,labelledById:n,...i}))}},D={args:{...g.args,noMatch:{text:"Søket ga ingen treff",dropdownList:M.slice(1,4)}},render:function({id:e,labelledById:n,...i}){return a.createElement(v,{label:"Velg bedrift",labelId:n,inputId:e},a.createElement(h,{id:e,labelledById:n,...i}))}},N={args:{...g.args,selectedItem:M[2]},render:function({id:e,labelledById:n,...i}){return a.createElement(v,{label:"Velg bedrift",labelId:n,inputId:e},a.createElement(h,{id:e,labelledById:n,...i}))}},k={args:{...g.args,postListElement:a.createElement("span",null,"Some text describing the list")},render:function({id:e,labelledById:n,...i}){return a.createElement(v,{label:"Velg bedrift",labelId:n,inputId:e},a.createElement(h,{id:e,labelledById:n,...i}))}},q={args:{...g.args,displayAttribute:"organizationNumber",dropdownAttributes:["organizationName","organizationNumber"],searchAttributes:["organizationNumber","organizationName"]},render:function({id:e,labelledById:n,...i}){return a.createElement(v,{label:"Velg bedrift",labelId:n,inputId:e},a.createElement(h,{id:e,labelledById:n,...i}))}},L={args:{...g.args},render:function({id:e,labelledById:n,...i}){return a.createElement(v,{label:"Velg bedrift",labelId:n,inputId:e},o=>a.createElement(h,{labelledById:n,...i,...o,"aria-invalid":"true"}))}},_={args:{...g.args},render:function({id:e,labelledById:n,...i}){return a.createElement(v,{label:"Velg bedrift",labelId:n,inputId:e,description:"Velg en bedrift for å fortsette"},o=>a.createElement(h,{labelledById:n,...i,...o}))}};var ee,te,ne;g.parameters={...g.parameters,docs:{...(ee=g.parameters)==null?void 0:ee.docs,source:{originalSource:`{
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
}`,...(ne=(te=g.parameters)==null?void 0:te.docs)==null?void 0:ne.source}}};var re,ae,ie;V.parameters={...V.parameters,docs:{...(re=V.parameters)==null?void 0:re.docs,source:{originalSource:`{
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
}`,...(ie=(ae=V.parameters)==null?void 0:ae.docs)==null?void 0:ie.source}}};var le,se,de;B.parameters={...B.parameters,docs:{...(le=B.parameters)==null?void 0:le.docs,source:{originalSource:`{
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
}`,...(de=(se=B.parameters)==null?void 0:se.docs)==null?void 0:de.source}}};var oe,ue,ce;D.parameters={...D.parameters,docs:{...(oe=D.parameters)==null?void 0:oe.docs,source:{originalSource:`{
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
}`,...(ce=(ue=D.parameters)==null?void 0:ue.docs)==null?void 0:ce.source}}};var pe,me,ge;N.parameters={...N.parameters,docs:{...(pe=N.parameters)==null?void 0:pe.docs,source:{originalSource:`{
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
}`,...(ge=(me=N.parameters)==null?void 0:me.docs)==null?void 0:ge.source}}};var be,fe,Ie;k.parameters={...k.parameters,docs:{...(be=k.parameters)==null?void 0:be.docs,source:{originalSource:`{
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
}`,...(Ie=(fe=k.parameters)==null?void 0:fe.docs)==null?void 0:Ie.source}}};var ye,he,we;q.parameters={...q.parameters,docs:{...(ye=q.parameters)==null?void 0:ye.docs,source:{originalSource:`{
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
}`,...(we=(he=q.parameters)==null?void 0:he.docs)==null?void 0:we.source}}};var Ee,ve,xe;L.parameters={...L.parameters,docs:{...(Ee=L.parameters)==null?void 0:Ee.docs,source:{originalSource:`{
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
}`,...(xe=(ve=L.parameters)==null?void 0:ve.docs)==null?void 0:xe.source}}};var Ae,Re,Se;_.parameters={..._.parameters,docs:{...(Ae=_.parameters)==null?void 0:Ae.docs,source:{originalSource:`{
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
}`,...(Se=(Re=_.parameters)==null?void 0:Re.docs)==null?void 0:Se.source}}};const ct=["Standard","DropdownAttributes","CustomSearch","ExtraResults","SelectedItem","PostListElement","CustomDisplayAttribute","AriaInvalid","WithDescription"],yt=Object.freeze(Object.defineProperty({__proto__:null,AriaInvalid:L,CustomDisplayAttribute:q,CustomSearch:B,DropdownAttributes:V,ExtraResults:D,PostListElement:k,SelectedItem:N,Standard:g,WithDescription:_,__namedExportsOrder:ct,default:ut},Symbol.toStringTag,{value:"Module"}));export{B as C,V as D,D as E,k as P,yt as S,_ as W,g as a,N as b};
