import{R as i,r as I}from"./index-DQDNmYQF.js";import{c as he}from"./index-QCImZZ3W.js";import{g as De,a as L,f as qe,u as Le,b as _e,c as ze,d as Fe,e as X,m as Ce,T as Oe,L as Ge,R as Me,i as He,s as $,j as P,k as Ke}from"./ListBox-iefsrwiY.js";import{M as Ue}from"./MicroText-T72i9KwR.js";import{i as je,S as J}from"./index-DlnE8UeV.js";import{I as A}from"./InputGroup-DOKvm3eQ.js";var We="#dbc4cb",Xe="#fff",$e="8px";function we({item:e,dropdownAttributes:n,isHighlighted:a,locale:l}){const[c,...o]=n,h=e[c],r=o.map((d,u)=>i.createElement(Ue,{"aria-label":d==="balance"?De(l,e[d]):void 0,className:"ffe-searchable-dropdown__detail-text",key:u},e[d]));return i.createElement("div",{className:he("ffe-searchable-dropdown__list-item-body",{"ffe-searchable-dropdown__list-item-body--highlighted":a})},h,!!r.length&&i.createElement("div",{className:"ffe-searchable-dropdown__list-item-body-details"},r))}we.__docgenInfo={description:"",methods:[],displayName:"OptionBody",props:{item:{required:!0,tsType:{name:"Item"},description:""},dropdownAttributes:{required:!0,tsType:{name:"Array",elements:[{name:"Item"}],raw:"Array<keyof Item>"},description:""},isHighlighted:{required:!0,tsType:{name:"boolean"},description:""},locale:{required:!0,tsType:{name:"union",raw:"'nb' | 'nn' | 'en'",elements:[{name:"literal",value:"'nb'"},{name:"literal",value:"'nn'"},{name:"literal",value:"'en'"}]},description:""}}};const Q=({state:e,searchAttributes:n,maxRenderedDropdownElements:a,dropdownList:l,noMatchDropdownList:c,searchMatcher:o,displayAttribute:h,onChange:r})=>{const{listToRender:d}=L({inputValue:e.inputValue,searchAttributes:n,maxRenderedDropdownElements:a,dropdownList:l,noMatchDropdownList:c,searchMatcher:o,showAllItemsInDropdown:!0}),u=e.inputValue===""&&!!e.selectedItem,R=e.listToRender.length===1&&n.map(v=>{var x;return e.listToRender[0][v]===((x=e.selectedItem)==null?void 0:x[v])}).includes(!1)&&e.highlightedIndex!==-1;let g=e.selectedItem;return u?(r==null||r(null),g=void 0):R&&(r==null||r(e.listToRender[0]),g=e.listToRender[0]),{inputValue:g?g[h]:"",selectedItem:g,listToRender:d}},Pe=({searchAttributes:e,dropdownList:n,displayAttribute:a,noMatchDropdownList:l,maxRenderedDropdownElements:c,searchMatcher:o,onChange:h})=>(r,d)=>{var u,R,g,f,v,x,_,T;switch(d.type){case"InputKeyDownEscape":return{...r,noMatch:!1,isExpanded:!1,highlightedIndex:-1,inputValue:r.selectedItem?r.selectedItem[a]:""};case"InputClick":{const{noMatch:m,listToRender:b}=L({inputValue:r.inputValue,searchAttributes:e,maxRenderedDropdownElements:c,dropdownList:n,noMatchDropdownList:l,searchMatcher:o,showAllItemsInDropdown:!0});return{...r,isExpanded:!0,listToRender:b,noMatch:m}}case"InputChange":{const{noMatch:m,listToRender:b}=L({inputValue:((u=d.payload)==null?void 0:u.inputValue)??"",searchAttributes:e,maxRenderedDropdownElements:c,dropdownList:n,noMatchDropdownList:l,searchMatcher:o,showAllItemsInDropdown:!1});return{...r,isExpanded:!0,inputValue:((R=d.payload)==null?void 0:R.inputValue)??"",listToRender:b,highlightedIndex:((f=(g=d.payload)==null?void 0:g.inputValue)==null?void 0:f.trim())===""||b.length===0?-1:0,noMatch:m}}case"ToggleButtonPressed":{if(r.isExpanded){const{listToRender:m,inputValue:b,selectedItem:S}=Q({state:r,searchAttributes:e,maxRenderedDropdownElements:c,dropdownList:n,noMatchDropdownList:l,searchMatcher:o,displayAttribute:a,onChange:h});return{...r,isExpanded:!1,highlightedIndex:-1,inputValue:b,selectedItem:S,listToRender:m}}return{...r,isExpanded:!r.isExpanded}}case"ItemSelectedProgrammatically":case"ItemOnClick":case"InputKeyDownEnter":return{...r,isExpanded:!1,highlightedIndex:-1,selectedItem:(v=d.payload)==null?void 0:v.selectedItem,inputValue:((_=(x=d.payload)==null?void 0:x.selectedItem)==null?void 0:_[a])||""};case"InputKeyDownArrowDown":case"InputKeyDownArrowUp":return{...r,isExpanded:!0,highlightedIndex:((T=d.payload)==null?void 0:T.highlightedIndex)??-1};case"FocusMovedOutSide":{const{listToRender:m,inputValue:b,selectedItem:S}=Q({state:r,searchAttributes:e,maxRenderedDropdownElements:c,dropdownList:n,noMatchDropdownList:l,searchMatcher:o,displayAttribute:a,onChange:h});return{...r,isExpanded:!1,highlightedIndex:-1,inputValue:b,selectedItem:S,listToRender:m}}case"DropdownListPropUpdated":return{...r,...L({inputValue:r.inputValue,searchAttributes:e,maxRenderedDropdownElements:c,dropdownList:n,noMatchDropdownList:l,searchMatcher:o,showAllItemsInDropdown:!!r.selectedItem})};default:return r}},Je="ArrowUp",Qe="ArrowDown",Ye="Escape",Ze="Enter",et="Tab";function tt({id:e,labelledById:n,className:a,dropdownList:l,dropdownAttributes:c,searchAttributes:o,displayAttribute:h=o[0],maxRenderedDropdownElements:r=Number.MAX_SAFE_INTEGER,onChange:d,inputProps:u,optionBody:R,postListElement:g,noMatch:f,locale:v="nb",ariaInvalid:x,formatter:_=t=>t,searchMatcher:T,selectedItem:m,isLoading:b=!1,onOpen:S,onClose:Ee,isEqual:ve=je,...xe},Ae){var K,U,j,W;const[t,p]=I.useReducer(Pe({dropdownList:l,displayAttribute:h,searchAttributes:o,maxRenderedDropdownElements:r,noMatchDropdownList:f==null?void 0:f.dropdownList,searchMatcher:T,onChange:d}),{isExpanded:!1,selectedItems:[],highlightedIndex:-1,formattedInputValue:"",inputValue:m?m[h]:""},s=>({...s,...L({inputValue:s.inputValue,searchAttributes:o,maxRenderedDropdownElements:r,dropdownList:l,noMatchDropdownList:f==null?void 0:f.dropdownList,searchMatcher:T,showAllItemsInDropdown:!!m})})),z=Le({listToRender:t.listToRender}),[Re,Te]=I.useState(!1),C=I.useRef(null),G=I.useRef(null),Se=R||we,F=I.useRef(null),M=I.useId(),H=I.useRef(!1),Ve=()=>{p({type:"InputClick"})},Be=s=>{u!=null&&u.onBlur&&u.onBlur(s)};I.useEffect(()=>{p({type:"ItemSelectedProgrammatically",payload:{selectedItem:m}})},[m,p]),_e({hasFocus:Re,isExpanded:t.isExpanded,isLoading:b,locale:v,resultCount:t.listToRender.length,selectedValue:(K=t.selectedItem)==null?void 0:K[h]}),I.useLayoutEffect(()=>{var s;H.current&&((s=C.current)==null||s.focus(),H.current=!1)}),I.useEffect(()=>{p({type:"DropdownListPropUpdated"})},[l,p]),ze({isExpanded:t.isExpanded,onClose:Ee,onOpen:S});const Ne=I.useCallback(()=>p({type:"FocusMovedOutSide"}),[]);Fe({id:e,containerRef:G,handleFocusMovedOutside:Ne});const ke=s=>{if(s.key===Ze&&t.highlightedIndex>=0){s.preventDefault(),p({type:"InputKeyDownEnter",payload:{selectedItem:t.listToRender[t.highlightedIndex]}}),d==null||d(t.listToRender[t.highlightedIndex]);return}else if(s.key===Ye){p({type:"InputKeyDownEscape"});return}if(s.key===Je){if(s.preventDefault(),t.listToRender.length){const w=He(t.highlightedIndex,t.listToRender.length);p({type:"InputKeyDownArrowUp",payload:{highlightedIndex:w}}),w>=0&&$(t==null?void 0:t.listToRender[w],c),P(z[w].current,F.current)}return}if(s.key===Qe&&(s.preventDefault(),t.listToRender.length)){const w=Ke(t.highlightedIndex,t.listToRender.length);p({type:"InputKeyDownArrowDown",payload:{highlightedIndex:w}}),w>=0&&$(t==null?void 0:t.listToRender[w],c),P(z[w].current,F.current)}s.key===et&&p({type:"FocusMovedOutSide"})};return i.createElement("div",{onKeyDown:ke,className:he(a,"ffe-searchable-dropdown","ffe-default-mode"),ref:G,onMouseDown:X(e),onFocus:X(e)},i.createElement("div",{className:"ffe-searchable-dropdown__input",onClick:()=>{var s;(s=C.current)==null||s.focus()}},i.createElement("input",{...u,ref:Ce([C,Ae]),id:e,"aria-labelledby":n,onClick:Ve,onChange:s=>{u!=null&&u.onChange&&u.onChange(s),p({type:"InputChange",payload:{inputValue:s.target.value}})},onFocus:()=>{Te(!0),p({type:"InputClick"})},onBlur:Be,"aria-describedby":[u==null?void 0:u["aria-describedby"],t.noMatch&&M].filter(Boolean).join(" ")||void 0,value:_(t.inputValue),type:"text",role:"combobox",autoComplete:"off","aria-controls":((U=F.current)==null?void 0:U.getAttribute("id"))??void 0,"aria-expanded":t.isExpanded&&!!t.listToRender.length,"aria-autocomplete":"list","aria-haspopup":"listbox","aria-activedescendant":t.highlightedIndex>=0?((W=(j=z[t.highlightedIndex])==null?void 0:j.current)==null?void 0:W.getAttribute("id"))??void 0:void 0,"aria-invalid":xe["aria-invalid"]??x})),i.createElement(Oe,{isExpanded:t.isExpanded,onClick:()=>{p({type:"ToggleButtonPressed"})},isLoading:b}),i.createElement(Ge,{ref:F,isExpanded:t.isExpanded},t.isExpanded&&i.createElement(Me,{isEqual:ve,listToRender:t.listToRender,OptionBody:Se,highlightedIndex:t.highlightedIndex,dropdownAttributes:c,locale:v,refs:z,onChange:s=>{p({type:"ItemOnClick",payload:{selectedItem:s}}),d==null||d(s)},noMatch:t.noMatch?f:void 0,noMatchMessageId:M,selectedItems:t.selectedItem?[t.selectedItem]:[]}),g&&i.createElement("div",{className:"ffe-searchable-dropdown__list--post-list-element"},g)))}const E=qe(tt);E.__docgenInfo={description:"",methods:[],displayName:"SearchableDropdown",props:{id:{required:!0,tsType:{name:"string"},description:"Id of drop down"},labelledById:{required:!1,tsType:{name:"string"},description:"Id of element that labels input field"},className:{required:!1,tsType:{name:"string"},description:"Extra class"},dropdownList:{required:!0,tsType:{name:"Array",elements:[{name:"Item"}],raw:"Item[]"},description:"List of objects to be displayed in dropdown"},selectedItem:{required:!1,tsType:{name:"Item"},description:"The selected item to be displayed in the input field. If not specified, uses internal state to decide."},dropdownAttributes:{required:!0,tsType:{name:"Array",elements:[{name:"unknown"}],raw:"(keyof Item)[]"},description:"Array of attributes to be displayed in list"},searchAttributes:{required:!0,tsType:{name:"Array",elements:[{name:"unknown"}],raw:"(keyof Item)[]"},description:"Array of attributes used when filtering search"},displayAttribute:{required:!1,tsType:{name:"Item"},description:"Attribute used in the input when an item is selected. Defaults to first in searchAttributes *",defaultValue:{value:"searchAttributes[0]",computed:!0}},inputProps:{required:!1,tsType:{name:"ReactComponentProps",raw:"React.ComponentProps<'input'>",elements:[{name:"literal",value:"'input'"}]},description:"Props used on input field"},maxRenderedDropdownElements:{required:!1,tsType:{name:"number"},description:"Limits number of rendered dropdown elements",defaultValue:{value:"Number.MAX_SAFE_INTEGER",computed:!0}},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(item: Item | null) => void",signature:{arguments:[{type:{name:"union",raw:"Item | null",elements:[{name:"Item"},{name:"null"}]},name:"item"}],return:{name:"void"}}},description:"Called when a value is selected"},optionBody:{required:!1,tsType:{name:"ReactComponentType",raw:`React.ComponentType<{
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
that has loaded.`,defaultValue:{value:"false",computed:!1}},onOpen:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Function used when dropdown opens"},onClose:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Function used when dropdown closes"},isEqual:{required:!1,tsType:{name:"signature",type:"function",raw:"(itemA: Item, itemB: Item) => boolean",signature:{arguments:[{type:{name:"Item"},name:"itemA"},{type:{name:"Item"},name:"itemB"}],return:{name:"boolean"}}},description:"Custom compare between objects. Default is deep equals",defaultValue:{value:"isDeepEqual",computed:!0}}}};const O=[{organizationName:"Bedriften",organizationNumber:"912602370",quantityUnprocessedMessages:5,balance:"12 345 678,00 kr"},{organizationName:"Sønn & co",organizationNumber:"812602372",quantityUnprocessedMessages:3,balance:"12 345,00 kr"},{organizationName:"Beslag skytter",organizationNumber:"812602552",quantityUnprocessedMessages:1,balance:"34 234 343,00 kr"}],nt={title:"Komponenter/Searchable-dropdown/SearchableDropdown",component:E,argTypes:{postListElement:{options:["html","text","none"],mapping:{html:i.createElement("span",null,"Some text describing the list"),text:"Some text describing the list",none:void 0}},optionBody:{options:["custom","none"],mapping:{custom:({item:e,isHighlighted:n})=>i.createElement("div",{style:{padding:$e,background:n?We:Xe}},i.createElement("div",null,e.organizationName),i.createElement("div",{style:{display:"flex",justifyContent:"space-between"}},i.createElement(J,null,e.organizationNumber),i.createElement(J,null,e.quantityUnprocessedMessages," ulest"))),none:void 0}}}},y={args:{id:"id",labelledById:"labelled-by-id",dropdownList:O,dropdownAttributes:["organizationName"],searchAttributes:["organizationName"],noMatch:{text:"Søket ga ingen treff"},inputProps:{placeholder:"Velg"},postListElement:"none"},render:function({id:n,labelledById:a,...l}){return i.createElement(A,{label:"Velg bedrift",labelId:a,inputId:n},i.createElement(E,{id:n,labelledById:a,...l}))}},V={args:{...y.args,dropdownAttributes:["organizationName","organizationNumber","balance"]},render:function({id:n,labelledById:a,...l}){return i.createElement(A,{label:"Velg bedrift",labelId:a,inputId:n},i.createElement(E,{id:n,labelledById:a,...l}))}},B={args:{...y.args,searchMatcher:(e,n)=>a=>{const l=o=>`${o}`.replace(/\s/g,"").toLowerCase(),c=l(e);return n.map(o=>l(a[o])).some(o=>o.includes(c))}},render:function({id:n,labelledById:a,...l}){return i.createElement(A,{label:"Velg bedrift",labelId:a,inputId:n},i.createElement(E,{id:n,labelledById:a,...l}))}},N={args:{...y.args,noMatch:{text:"Søket ga ingen treff",dropdownList:O.slice(1,4)}},render:function({id:n,labelledById:a,...l}){return i.createElement(A,{label:"Velg bedrift",labelId:a,inputId:n},i.createElement(E,{id:n,labelledById:a,...l}))}},k={args:{...y.args,selectedItem:O[2]},render:function({id:n,labelledById:a,...l}){return i.createElement(A,{label:"Velg bedrift",labelId:a,inputId:n},i.createElement(E,{id:n,labelledById:a,...l}))}},D={args:{...y.args,postListElement:i.createElement("span",null,"Some text describing the list")},render:function({id:n,labelledById:a,...l}){return i.createElement(A,{label:"Velg bedrift",labelId:a,inputId:n},i.createElement(E,{id:n,labelledById:a,...l}))}},q={args:{...y.args,displayAttribute:"organizationNumber",dropdownAttributes:["organizationName","organizationNumber"],searchAttributes:["organizationNumber","organizationName"]},render:function({id:n,labelledById:a,...l}){return i.createElement(A,{label:"Velg bedrift",labelId:a,inputId:n},i.createElement(E,{id:n,labelledById:a,...l}))}};var Y,Z,ee;y.parameters={...y.parameters,docs:{...(Y=y.parameters)==null?void 0:Y.docs,source:{originalSource:`{
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
}`,...(ee=(Z=y.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};var te,ne,ae;V.parameters={...V.parameters,docs:{...(te=V.parameters)==null?void 0:te.docs,source:{originalSource:`{
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
}`,...(ae=(ne=V.parameters)==null?void 0:ne.docs)==null?void 0:ae.source}}};var re,ie,le;B.parameters={...B.parameters,docs:{...(re=B.parameters)==null?void 0:re.docs,source:{originalSource:`{
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
}`,...(le=(ie=B.parameters)==null?void 0:ie.docs)==null?void 0:le.source}}};var se,de,oe;N.parameters={...N.parameters,docs:{...(se=N.parameters)==null?void 0:se.docs,source:{originalSource:`{
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
}`,...(oe=(de=N.parameters)==null?void 0:de.docs)==null?void 0:oe.source}}};var ue,ce,pe;k.parameters={...k.parameters,docs:{...(ue=k.parameters)==null?void 0:ue.docs,source:{originalSource:`{
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
}`,...(pe=(ce=k.parameters)==null?void 0:ce.docs)==null?void 0:pe.source}}};var me,ge,fe;D.parameters={...D.parameters,docs:{...(me=D.parameters)==null?void 0:me.docs,source:{originalSource:`{
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
}`,...(fe=(ge=D.parameters)==null?void 0:ge.docs)==null?void 0:fe.source}}};var be,Ie,ye;q.parameters={...q.parameters,docs:{...(be=q.parameters)==null?void 0:be.docs,source:{originalSource:`{
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
}`,...(ye=(Ie=q.parameters)==null?void 0:Ie.docs)==null?void 0:ye.source}}};const at=["Standard","DropdownAttributes","CustomSearch","ExtraResults","SelectedItem","PostListElement","CustomDisplayAttribute"],ut=Object.freeze(Object.defineProperty({__proto__:null,CustomDisplayAttribute:q,CustomSearch:B,DropdownAttributes:V,ExtraResults:N,PostListElement:D,SelectedItem:k,Standard:y,__namedExportsOrder:at,default:nt},Symbol.toStringTag,{value:"Module"}));export{B as C,V as D,N as E,D as P,ut as S,y as a,k as b};
