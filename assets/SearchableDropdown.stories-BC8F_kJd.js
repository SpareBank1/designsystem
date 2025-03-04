import{R as i,r as y}from"./index-eCxJ45ll.js";import{c as he}from"./index-DezCrw0f.js";import{M as ke}from"./MicroText-DhU_-SBY.js";import{g as _,f as qe,u as _e,a as ze,b as Le,c as Fe,d as X,m as Ce,T as Oe,L as Ge,R as Me,h as He,s as $,i as P,j as Ke}from"./ListBox-Bj1VzpA2.js";import{i as Ue,S as J}from"./index-B3RHW42C.js";import{I as A}from"./InputGroup-CV5U44El.js";var je="#dbc4cb",We="#fff",Xe="8px";function we({item:t,dropdownAttributes:n,isHighlighted:r}){const[l,...p]=n,d=t[l],g=p.map((a,o)=>i.createElement(ke,{className:"ffe-searchable-dropdown__detail-text",key:o},t[a]));return i.createElement("div",{className:he("ffe-searchable-dropdown__list-item-body",{"ffe-searchable-dropdown__list-item-body--highlighted":r})},d,!!g.length&&i.createElement("div",{className:"ffe-searchable-dropdown__list-item-body-details"},g))}we.__docgenInfo={description:"",methods:[],displayName:"OptionBody",props:{item:{required:!0,tsType:{name:"Item"},description:""},dropdownAttributes:{required:!0,tsType:{name:"Array",elements:[{name:"Item"}],raw:"Array<keyof Item>"},description:""},isHighlighted:{required:!0,tsType:{name:"boolean"},description:""}}};const Q=({state:t,searchAttributes:n,maxRenderedDropdownElements:r,dropdownList:l,noMatchDropdownList:p,searchMatcher:d,displayAttribute:g,onChange:a})=>{const{listToRender:o}=_({inputValue:t.inputValue,searchAttributes:n,maxRenderedDropdownElements:r,dropdownList:l,noMatchDropdownList:p,searchMatcher:d,showAllItemsInDropdown:!0}),u=t.inputValue===""&&!!t.selectedItem,R=t.listToRender.length===1&&n.map(x=>{var v;return t.listToRender[0][x]===((v=t.selectedItem)==null?void 0:v[x])}).includes(!1)&&t.highlightedIndex!==-1;let f=t.selectedItem;return u?(a==null||a(null),f=void 0):R&&(a==null||a(t.listToRender[0]),f=t.listToRender[0]),{inputValue:f?f[g]:"",selectedItem:f,listToRender:o}},$e=({searchAttributes:t,dropdownList:n,displayAttribute:r,noMatchDropdownList:l,maxRenderedDropdownElements:p,searchMatcher:d,onChange:g})=>(a,o)=>{var u,R,f,b,x,v,z,T;switch(o.type){case"InputKeyDownEscape":return{...a,noMatch:!1,isExpanded:!1,highlightedIndex:-1,inputValue:a.selectedItem?a.selectedItem[r]:""};case"InputClick":{const{noMatch:m,listToRender:I}=_({inputValue:a.inputValue,searchAttributes:t,maxRenderedDropdownElements:p,dropdownList:n,noMatchDropdownList:l,searchMatcher:d,showAllItemsInDropdown:!0});return{...a,isExpanded:!0,listToRender:I,noMatch:m}}case"InputChange":{const{noMatch:m,listToRender:I}=_({inputValue:((u=o.payload)==null?void 0:u.inputValue)??"",searchAttributes:t,maxRenderedDropdownElements:p,dropdownList:n,noMatchDropdownList:l,searchMatcher:d,showAllItemsInDropdown:!1});return{...a,isExpanded:!0,inputValue:((R=o.payload)==null?void 0:R.inputValue)??"",listToRender:I,highlightedIndex:((b=(f=o.payload)==null?void 0:f.inputValue)==null?void 0:b.trim())===""||I.length===0?-1:0,noMatch:m}}case"ToggleButtonPressed":{if(a.isExpanded){const{listToRender:m,inputValue:I,selectedItem:S}=Q({state:a,searchAttributes:t,maxRenderedDropdownElements:p,dropdownList:n,noMatchDropdownList:l,searchMatcher:d,displayAttribute:r,onChange:g});return{...a,isExpanded:!1,highlightedIndex:-1,inputValue:I,selectedItem:S,listToRender:m}}return{...a,isExpanded:!a.isExpanded}}case"ItemSelectedProgrammatically":case"ItemOnClick":case"InputKeyDownEnter":return{...a,isExpanded:!1,highlightedIndex:-1,selectedItem:(x=o.payload)==null?void 0:x.selectedItem,inputValue:((z=(v=o.payload)==null?void 0:v.selectedItem)==null?void 0:z[r])||""};case"InputKeyDownArrowDown":case"InputKeyDownArrowUp":return{...a,isExpanded:!0,highlightedIndex:((T=o.payload)==null?void 0:T.highlightedIndex)??-1};case"FocusMovedOutSide":{const{listToRender:m,inputValue:I,selectedItem:S}=Q({state:a,searchAttributes:t,maxRenderedDropdownElements:p,dropdownList:n,noMatchDropdownList:l,searchMatcher:d,displayAttribute:r,onChange:g});return{...a,isExpanded:!1,highlightedIndex:-1,inputValue:I,selectedItem:S,listToRender:m}}case"DropdownListPropUpdated":return{...a,..._({inputValue:a.inputValue,searchAttributes:t,maxRenderedDropdownElements:p,dropdownList:n,noMatchDropdownList:l,searchMatcher:d,showAllItemsInDropdown:!!a.selectedItem})};default:return a}},Pe="ArrowUp",Je="ArrowDown",Qe="Escape",Ye="Enter",Ze="Tab";function et({id:t,labelledById:n,className:r,dropdownList:l,dropdownAttributes:p,searchAttributes:d,displayAttribute:g=d[0],maxRenderedDropdownElements:a=Number.MAX_SAFE_INTEGER,onChange:o,inputProps:u,optionBody:R,postListElement:f,noMatch:b,locale:x="nb",ariaInvalid:v,formatter:z=e=>e,searchMatcher:T,selectedItem:m,isLoading:I=!1,onOpen:S,onClose:Ee,isEqual:xe=Ue,...ve},Ae){var K,U,j,W;const[e,c]=y.useReducer($e({dropdownList:l,displayAttribute:g,searchAttributes:d,maxRenderedDropdownElements:a,noMatchDropdownList:b==null?void 0:b.dropdownList,searchMatcher:T,onChange:o}),{isExpanded:!1,selectedItems:[],highlightedIndex:-1,formattedInputValue:"",inputValue:m?m[g]:""},s=>({...s,..._({inputValue:s.inputValue,searchAttributes:d,maxRenderedDropdownElements:a,dropdownList:l,noMatchDropdownList:b==null?void 0:b.dropdownList,searchMatcher:T,showAllItemsInDropdown:!!m})})),L=_e({listToRender:e.listToRender}),[Re,Te]=y.useState(!1),C=y.useRef(null),G=y.useRef(null),Se=R||we,F=y.useRef(null),M=y.useId(),H=y.useRef(!1),Ve=()=>{c({type:"InputClick"})},Be=s=>{u!=null&&u.onBlur&&u.onBlur(s)};y.useEffect(()=>{c({type:"ItemSelectedProgrammatically",payload:{selectedItem:m}})},[m,c]),ze({hasFocus:Re,isExpanded:e.isExpanded,isLoading:I,locale:x,resultCount:e.listToRender.length,selectedValue:(K=e.selectedItem)==null?void 0:K[g]}),y.useLayoutEffect(()=>{var s;H.current&&((s=C.current)==null||s.focus(),H.current=!1)}),y.useEffect(()=>{c({type:"DropdownListPropUpdated"})},[l,c]),Le({isExpanded:e.isExpanded,onClose:Ee,onOpen:S});const Ne=y.useCallback(()=>c({type:"FocusMovedOutSide"}),[]);Fe({id:t,containerRef:G,handleFocusMovedOutside:Ne});const De=s=>{if(s.key===Ye&&e.highlightedIndex>=0){s.preventDefault(),c({type:"InputKeyDownEnter",payload:{selectedItem:e.listToRender[e.highlightedIndex]}}),o==null||o(e.listToRender[e.highlightedIndex]);return}else if(s.key===Qe){c({type:"InputKeyDownEscape"});return}if(s.key===Pe){if(s.preventDefault(),e.listToRender.length){const w=He(e.highlightedIndex,e.listToRender.length);c({type:"InputKeyDownArrowUp",payload:{highlightedIndex:w}}),w>=0&&$(e==null?void 0:e.listToRender[w],p),P(L[w].current,F.current)}return}if(s.key===Je&&(s.preventDefault(),e.listToRender.length)){const w=Ke(e.highlightedIndex,e.listToRender.length);c({type:"InputKeyDownArrowDown",payload:{highlightedIndex:w}}),w>=0&&$(e==null?void 0:e.listToRender[w],p),P(L[w].current,F.current)}s.key===Ze&&c({type:"FocusMovedOutSide"})};return i.createElement("div",{onKeyDown:De,className:he(r,"ffe-searchable-dropdown"),ref:G,onMouseDown:X(t),onFocus:X(t)},i.createElement("div",{className:"ffe-searchable-dropdown__input",onClick:()=>{var s;(s=C.current)==null||s.focus()}},i.createElement("input",{...u,ref:Ce([C,Ae]),id:t,"aria-labelledby":n,onClick:Ve,onChange:s=>{u!=null&&u.onChange&&u.onChange(s),c({type:"InputChange",payload:{inputValue:s.target.value}})},onFocus:()=>{Te(!0),c({type:"InputClick"})},onBlur:Be,"aria-describedby":[u==null?void 0:u["aria-describedby"],e.noMatch&&M].filter(Boolean).join(" ")||void 0,value:z(e.inputValue),type:"text",role:"combobox",autoComplete:"off","aria-controls":((U=F.current)==null?void 0:U.getAttribute("id"))??void 0,"aria-expanded":e.isExpanded&&!!e.listToRender.length,"aria-autocomplete":"list","aria-haspopup":"listbox","aria-activedescendant":e.highlightedIndex>=0?((W=(j=L[e.highlightedIndex])==null?void 0:j.current)==null?void 0:W.getAttribute("id"))??void 0:void 0,"aria-invalid":ve["aria-invalid"]??v})),i.createElement(Oe,{isExpanded:e.isExpanded,onClick:()=>{c({type:"ToggleButtonPressed"})},isLoading:I}),i.createElement(Ge,{ref:F,isExpanded:e.isExpanded},e.isExpanded&&i.createElement(Me,{isEqual:xe,listToRender:e.listToRender,OptionBody:Se,highlightedIndex:e.highlightedIndex,dropdownAttributes:p,locale:x,refs:L,onChange:s=>{c({type:"ItemOnClick",payload:{selectedItem:s}}),o==null||o(s)},noMatch:e.noMatch?b:void 0,noMatchMessageId:M,selectedItems:e.selectedItem?[e.selectedItem]:[]}),f&&i.createElement("div",{className:"ffe-searchable-dropdown__list--post-list-element"},f)))}const E=qe(et);E.__docgenInfo={description:"",methods:[],displayName:"SearchableDropdown",props:{id:{required:!0,tsType:{name:"string"},description:"Id of drop down"},labelledById:{required:!1,tsType:{name:"string"},description:"Id of element that labels input field"},className:{required:!1,tsType:{name:"string"},description:"Extra class"},dropdownList:{required:!0,tsType:{name:"Array",elements:[{name:"Item"}],raw:"Item[]"},description:"List of objects to be displayed in dropdown"},selectedItem:{required:!1,tsType:{name:"Item"},description:"The selected item to be displayed in the input field. If not specified, uses internal state to decide."},dropdownAttributes:{required:!0,tsType:{name:"Array",elements:[{name:"unknown"}],raw:"(keyof Item)[]"},description:"Array of attributes to be displayed in list"},searchAttributes:{required:!0,tsType:{name:"Array",elements:[{name:"unknown"}],raw:"(keyof Item)[]"},description:"Array of attributes used when filtering search"},displayAttribute:{required:!1,tsType:{name:"Item"},description:"Attribute used in the input when an item is selected. Defaults to first in searchAttributes *",defaultValue:{value:"searchAttributes[0]",computed:!0}},inputProps:{required:!1,tsType:{name:"ReactComponentProps",raw:"React.ComponentProps<'input'>",elements:[{name:"literal",value:"'input'"}]},description:"Props used on input field"},maxRenderedDropdownElements:{required:!1,tsType:{name:"number"},description:"Limits number of rendered dropdown elements",defaultValue:{value:"Number.MAX_SAFE_INTEGER",computed:!0}},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(item: Item | null) => void",signature:{arguments:[{type:{name:"union",raw:"Item | null",elements:[{name:"Item"},{name:"null"}]},name:"item"}],return:{name:"void"}}},description:"Called when a value is selected"},optionBody:{required:!1,tsType:{name:"ReactComponentType",raw:`React.ComponentType<{
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
that has loaded.`,defaultValue:{value:"false",computed:!1}},onOpen:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Function used when dropdown opens"},onClose:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Function used when dropdown closes"},isEqual:{required:!1,tsType:{name:"signature",type:"function",raw:"(itemA: Item, itemB: Item) => boolean",signature:{arguments:[{type:{name:"Item"},name:"itemA"},{type:{name:"Item"},name:"itemB"}],return:{name:"boolean"}}},description:"Custom compare between objects. Default is deep equals",defaultValue:{value:"isDeepEqual",computed:!0}}}};const O=[{organizationName:"Bedriften",organizationNumber:"912602370",quantityUnprocessedMessages:5},{organizationName:"Sønn & co",organizationNumber:"812602372",quantityUnprocessedMessages:3},{organizationName:"Beslag skytter",organizationNumber:"812602552",quantityUnprocessedMessages:1}],tt={title:"Komponenter/Searchable-dropdown/SearchableDropdown",component:E,argTypes:{postListElement:{options:["html","text","none"],mapping:{html:i.createElement("span",null,"Some text describing the list"),text:"Some text describing the list",none:void 0}},optionBody:{options:["custom","none"],mapping:{custom:({item:t,isHighlighted:n})=>i.createElement("div",{style:{padding:Xe,background:n?je:We}},i.createElement("div",null,t.organizationName),i.createElement("div",{style:{display:"flex",justifyContent:"space-between"}},i.createElement(J,null,t.organizationNumber),i.createElement(J,null,t.quantityUnprocessedMessages," ulest"))),none:void 0}}}},h={args:{id:"id",labelledById:"labelled-by-id",dropdownList:O,dropdownAttributes:["organizationName"],searchAttributes:["organizationName"],noMatch:{text:"Søket ga ingen treff"},inputProps:{placeholder:"Velg"},postListElement:"none"},render:function({id:n,labelledById:r,...l}){return i.createElement(A,{label:"Velg bedrift",labelId:r,inputId:n},i.createElement(E,{id:n,labelledById:r,...l}))}},V={args:{...h.args,dropdownAttributes:["organizationName","organizationNumber"]},render:function({id:n,labelledById:r,...l}){return i.createElement(A,{label:"Velg bedrift",labelId:r,inputId:n},i.createElement(E,{id:n,labelledById:r,...l}))}},B={args:{...h.args,searchMatcher:(t,n)=>r=>{const l=d=>`${d}`.replace(/\s/g,"").toLowerCase(),p=l(t);return n.map(d=>l(r[d])).some(d=>d.includes(p))}},render:function({id:n,labelledById:r,...l}){return i.createElement(A,{label:"Velg bedrift",labelId:r,inputId:n},i.createElement(E,{id:n,labelledById:r,...l}))}},N={args:{...h.args,noMatch:{text:"Søket ga ingen treff",dropdownList:O.slice(1,4)}},render:function({id:n,labelledById:r,...l}){return i.createElement(A,{label:"Velg bedrift",labelId:r,inputId:n},i.createElement(E,{id:n,labelledById:r,...l}))}},D={args:{...h.args,selectedItem:O[2]},render:function({id:n,labelledById:r,...l}){return i.createElement(A,{label:"Velg bedrift",labelId:r,inputId:n},i.createElement(E,{id:n,labelledById:r,...l}))}},k={args:{...h.args,postListElement:i.createElement("span",null,"Some text describing the list")},render:function({id:n,labelledById:r,...l}){return i.createElement(A,{label:"Velg bedrift",labelId:r,inputId:n},i.createElement(E,{id:n,labelledById:r,...l}))}},q={args:{...h.args,displayAttribute:"organizationNumber",dropdownAttributes:["organizationName","organizationNumber"],searchAttributes:["organizationNumber","organizationName"]},render:function({id:n,labelledById:r,...l}){return i.createElement(A,{label:"Velg bedrift",labelId:r,inputId:n},i.createElement(E,{id:n,labelledById:r,...l}))}};var Y,Z,ee;h.parameters={...h.parameters,docs:{...(Y=h.parameters)==null?void 0:Y.docs,source:{originalSource:`{
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
}`,...(ee=(Z=h.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};var te,ne,re;V.parameters={...V.parameters,docs:{...(te=V.parameters)==null?void 0:te.docs,source:{originalSource:`{
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
}`,...(re=(ne=V.parameters)==null?void 0:ne.docs)==null?void 0:re.source}}};var ae,ie,le;B.parameters={...B.parameters,docs:{...(ae=B.parameters)==null?void 0:ae.docs,source:{originalSource:`{
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
}`,...(oe=(de=N.parameters)==null?void 0:de.docs)==null?void 0:oe.source}}};var ue,pe,ce;D.parameters={...D.parameters,docs:{...(ue=D.parameters)==null?void 0:ue.docs,source:{originalSource:`{
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
}`,...(ce=(pe=D.parameters)==null?void 0:pe.docs)==null?void 0:ce.source}}};var me,ge,fe;k.parameters={...k.parameters,docs:{...(me=k.parameters)==null?void 0:me.docs,source:{originalSource:`{
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
}`,...(fe=(ge=k.parameters)==null?void 0:ge.docs)==null?void 0:fe.source}}};var be,Ie,ye;q.parameters={...q.parameters,docs:{...(be=q.parameters)==null?void 0:be.docs,source:{originalSource:`{
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
}`,...(ye=(Ie=q.parameters)==null?void 0:Ie.docs)==null?void 0:ye.source}}};const nt=["Standard","DropdownAttributes","CustomSearch","ExtraResults","SelectedItem","PostListElement","CustomDisplayAttribute"],ot=Object.freeze(Object.defineProperty({__proto__:null,CustomDisplayAttribute:q,CustomSearch:B,DropdownAttributes:V,ExtraResults:N,PostListElement:k,SelectedItem:D,Standard:h,__namedExportsOrder:nt,default:tt},Symbol.toStringTag,{value:"Module"}));export{B as C,V as D,N as E,k as P,ot as S,h as a,D as b};
