import{R as n,r as m}from"./index-eCxJ45ll.js";import{c as Re}from"./index-DezCrw0f.js";import{M as ke}from"./MicroText-DhU_-SBY.js";import{g as T,f as Le,u as _e,a as ze,b as Fe,c as Ce,d as Z,m as Ge,T as Me,L as Oe,R as He,h as Ke,s as ee,i as te,j as Ue}from"./ListBox-BLZ4yfti.js";import{i as je,S as ne}from"./index-B3RHW42C.js";import{I as x}from"./InputGroup-CV5U44El.js";var We="#dbc4cb",Xe="#fff",$e="8px";function ve({item:l,dropdownAttributes:t,isHighlighted:r}){const[i,...g]=t,d=l[i],c=g.map((a,o)=>n.createElement(ke,{className:"ffe-searchable-dropdown__detail-text",key:o},l[a]));return n.createElement("div",{className:Re("ffe-searchable-dropdown__list-item-body",{"ffe-searchable-dropdown__list-item-body--highlighted":r})},d,!!c.length&&n.createElement("div",{className:"ffe-searchable-dropdown__list-item-body-details"},c))}ve.__docgenInfo={description:"",methods:[],displayName:"OptionBody",props:{item:{required:!0,tsType:{name:"Item"},description:""},dropdownAttributes:{required:!0,tsType:{name:"Array",elements:[{name:"Item"}],raw:"Array<keyof Item>"},description:""},isHighlighted:{required:!0,tsType:{name:"boolean"},description:""}}};const Pe=({searchAttributes:l,dropdownList:t,displayAttribute:r,noMatchDropdownList:i,maxRenderedDropdownElements:g,searchMatcher:d,onChange:c})=>(a,o)=>{var u,k,R,y,A,L,_,v;switch(o.type){case"InputKeyDownEscape":return{...a,noMatch:!1,isExpanded:!1,highlightedIndex:-1,inputValue:a.selectedItem?a.selectedItem[r]:""};case"InputClick":{const{noMatch:b,listToRender:h}=T({inputValue:a.inputValue,searchAttributes:l,maxRenderedDropdownElements:g,dropdownList:t,noMatchDropdownList:i,searchMatcher:d,showAllItemsInDropdown:!0});return{...a,isExpanded:!0,listToRender:h,noMatch:b}}case"InputChange":{const{noMatch:b,listToRender:h}=T({inputValue:((u=o.payload)==null?void 0:u.inputValue)??"",searchAttributes:l,maxRenderedDropdownElements:g,dropdownList:t,noMatchDropdownList:i,searchMatcher:d,showAllItemsInDropdown:!1});return{...a,isExpanded:!0,inputValue:((k=o.payload)==null?void 0:k.inputValue)??"",listToRender:h,highlightedIndex:((y=(R=o.payload)==null?void 0:R.inputValue)==null?void 0:y.trim())===""||h.length===0?-1:0,noMatch:b}}case"ToggleButtonPressed":return{...a,isExpanded:!a.isExpanded};case"ItemSelectedProgrammatically":case"ItemOnClick":case"InputKeyDownEnter":return{...a,isExpanded:!1,highlightedIndex:-1,selectedItem:(A=o.payload)==null?void 0:A.selectedItem,inputValue:((_=(L=o.payload)==null?void 0:L.selectedItem)==null?void 0:_[r])||""};case"InputKeyDownArrowDown":case"InputKeyDownArrowUp":return{...a,isExpanded:!0,highlightedIndex:((v=o.payload)==null?void 0:v.highlightedIndex)??-1};case"FocusMovedOutSide":{const{listToRender:b}=T({inputValue:a.inputValue,searchAttributes:l,maxRenderedDropdownElements:g,dropdownList:t,noMatchDropdownList:i,searchMatcher:d,showAllItemsInDropdown:!0}),h=a.inputValue===""&&!!a.selectedItem,M=a.listToRender.length===1&&l.map(z=>{var F;return a.listToRender[0][z]===((F=a.selectedItem)==null?void 0:F[z])}).includes(!1)&&a.highlightedIndex!==-1;let E=a.selectedItem;h?(c==null||c(null),E=void 0):M&&(c==null||c(a.listToRender[0]),E=a.listToRender[0]);const O=E?E[r]:"";return{...a,isExpanded:!1,highlightedIndex:-1,inputValue:O,selectedItem:E,listToRender:b}}case"DropdownListPropUpdated":return{...a,...T({inputValue:a.inputValue,searchAttributes:l,maxRenderedDropdownElements:g,dropdownList:t,noMatchDropdownList:i,searchMatcher:d,showAllItemsInDropdown:!!a.selectedItem})};default:return a}},Je="ArrowUp",Qe="ArrowDown",Ye="Escape",Ze="Enter";function et({id:l,labelledById:t,className:r,dropdownList:i,dropdownAttributes:g,searchAttributes:d,displayAttribute:c=d[0],maxRenderedDropdownElements:a=Number.MAX_SAFE_INTEGER,onChange:o,inputProps:u,optionBody:k,postListElement:R,noMatch:y,locale:A="nb",ariaInvalid:L,formatter:_=e=>e,searchMatcher:v,selectedItem:b,isLoading:h=!1,onOpen:M,onClose:E,isEqual:O=je,...z},F){var P,J,Q,Y;const[e,p]=m.useReducer(Pe({dropdownList:i,displayAttribute:c,searchAttributes:d,maxRenderedDropdownElements:a,noMatchDropdownList:y==null?void 0:y.dropdownList,searchMatcher:v,onChange:o}),{isExpanded:!1,selectedItems:[],highlightedIndex:-1,formattedInputValue:"",inputValue:b?b[c]:""},s=>({...s,...T({inputValue:s.inputValue,searchAttributes:d,maxRenderedDropdownElements:a,dropdownList:i,noMatchDropdownList:y==null?void 0:y.dropdownList,searchMatcher:v,showAllItemsInDropdown:!!b})})),C=_e({listToRender:e.listToRender}),[Te,Se]=m.useState(!1),H=m.useRef(null),j=m.useRef(null),W=m.useRef(null),Ve=k||ve,G=m.useRef(null),X=m.useId(),K=m.useRef(!1),$=m.useRef(!1),Be=()=>{p({type:"InputClick"})},Ne=s=>{u!=null&&u.onBlur&&u.onBlur(s)};m.useEffect(()=>{p({type:"ItemSelectedProgrammatically",payload:{selectedItem:b}})},[b,p]),ze({hasFocus:Te,isExpanded:e.isExpanded,isLoading:h,locale:A,resultCount:e.listToRender.length,selectedValue:(P=e.selectedItem)==null?void 0:P[c]}),m.useLayoutEffect(()=>{var s,f;K.current?((s=j.current)==null||s.focus(),K.current=!1):$.current&&((f=H.current)==null||f.focus(),$.current=!1)}),m.useEffect(()=>{p({type:"DropdownListPropUpdated"})},[i,p]),Fe({isExpanded:e.isExpanded,onClose:E,onOpen:M});const De=m.useCallback(()=>p({type:"FocusMovedOutSide"}),[]);Ce({id:l,containerRef:W,handelFocusMovedOutside:De});const qe=s=>{if(s.key===Ze&&e.highlightedIndex>=0){s.preventDefault(),p({type:"InputKeyDownEnter",payload:{selectedItem:e.listToRender[e.highlightedIndex]}}),o==null||o(e.listToRender[e.highlightedIndex]);return}else if(s.key===Ye){p({type:"InputKeyDownEscape"});return}if(s.key===Je){if(s.preventDefault(),e.listToRender.length){const f=Ke(e.highlightedIndex,e.listToRender.length);p({type:"InputKeyDownArrowUp",payload:{highlightedIndex:f}}),f>=0&&ee(e==null?void 0:e.listToRender[f],g),te(C[f].current,G.current)}return}if(s.key===Qe&&(s.preventDefault(),e.listToRender.length)){const f=Ue(e.highlightedIndex,e.listToRender.length);p({type:"InputKeyDownArrowDown",payload:{highlightedIndex:f}}),f>=0&&ee(e==null?void 0:e.listToRender[f],g),te(C[f].current,G.current)}};return n.createElement("div",{onKeyDown:qe,className:Re(r,"ffe-searchable-dropdown"),ref:W,onMouseDown:Z(l),onFocus:Z(l)},n.createElement("div",{className:"ffe-searchable-dropdown__input",onClick:()=>{var s;(s=H.current)==null||s.focus()}},n.createElement("input",{...u,ref:Ge([H,F]),id:l,"aria-labelledby":t,onClick:Be,onChange:s=>{u!=null&&u.onChange&&u.onChange(s),p({type:"InputChange",payload:{inputValue:s.target.value}})},onFocus:()=>Se(!0),onBlur:Ne,"aria-describedby":[u==null?void 0:u["aria-describedby"],e.noMatch&&X].filter(Boolean).join(" ")||void 0,value:_(e.inputValue),type:"text",role:"combobox",autoComplete:"off","aria-controls":((J=G.current)==null?void 0:J.getAttribute("id"))??void 0,"aria-expanded":e.isExpanded&&!!e.listToRender.length,"aria-autocomplete":"list","aria-haspopup":"listbox","aria-activedescendant":e.highlightedIndex>=0?((Y=(Q=C[e.highlightedIndex])==null?void 0:Q.current)==null?void 0:Y.getAttribute("id"))??void 0:void 0,"aria-invalid":z["aria-invalid"]??L})),n.createElement(Me,{ref:j,isExpanded:e.isExpanded,onClick:()=>p({type:"ToggleButtonPressed"}),locale:A,isLoading:h}),n.createElement(Oe,{ref:G,isExpanded:e.isExpanded},e.isExpanded&&n.createElement(He,{isEqual:O,listToRender:e.listToRender,OptionBody:Ve,highlightedIndex:e.highlightedIndex,dropdownAttributes:g,locale:A,refs:C,onChange:s=>{K.current=!0,p({type:"ItemOnClick",payload:{selectedItem:s}}),o==null||o(s)},noMatch:e.noMatch?y:void 0,noMatchMessageId:X,selectedItems:e.selectedItem?[e.selectedItem]:[]}),R&&n.createElement("div",{className:"ffe-searchable-dropdown__list--post-list-element"},R)))}const w=Le(et);w.__docgenInfo={description:"",methods:[],displayName:"SearchableDropdown",props:{id:{required:!0,tsType:{name:"string"},description:"Id of drop down"},labelledById:{required:!1,tsType:{name:"string"},description:"Id of element that labels input field"},className:{required:!1,tsType:{name:"string"},description:"Extra class"},dropdownList:{required:!0,tsType:{name:"Array",elements:[{name:"Item"}],raw:"Item[]"},description:"List of objects to be displayed in dropdown"},selectedItem:{required:!1,tsType:{name:"Item"},description:"The selected item to be displayed in the input field. If not specified, uses internal state to decide."},dropdownAttributes:{required:!0,tsType:{name:"Array",elements:[{name:"unknown"}],raw:"(keyof Item)[]"},description:"Array of attributes to be displayed in list"},searchAttributes:{required:!0,tsType:{name:"Array",elements:[{name:"unknown"}],raw:"(keyof Item)[]"},description:"Array of attributes used when filtering search"},displayAttribute:{required:!1,tsType:{name:"Item"},description:"Attribute used in the input when an item is selected. Defaults to first in searchAttributes *",defaultValue:{value:"searchAttributes[0]",computed:!0}},inputProps:{required:!1,tsType:{name:"ReactComponentProps",raw:"React.ComponentProps<'input'>",elements:[{name:"literal",value:"'input'"}]},description:"Props used on input field"},maxRenderedDropdownElements:{required:!1,tsType:{name:"number"},description:"Limits number of rendered dropdown elements",defaultValue:{value:"Number.MAX_SAFE_INTEGER",computed:!0}},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(item: Item | null) => void",signature:{arguments:[{type:{name:"union",raw:"Item | null",elements:[{name:"Item"},{name:"null"}]},name:"item"}],return:{name:"void"}}},description:"Called when a value is selected"},optionBody:{required:!1,tsType:{name:"ReactComponentType",raw:`React.ComponentType<{
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
that has loaded.`,defaultValue:{value:"false",computed:!1}},onOpen:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Function used when dropdown opens"},onClose:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Function used when dropdown closes"},isEqual:{required:!1,tsType:{name:"signature",type:"function",raw:"(itemA: Item, itemB: Item) => boolean",signature:{arguments:[{type:{name:"Item"},name:"itemA"},{type:{name:"Item"},name:"itemB"}],return:{name:"boolean"}}},description:"Custom compare between objects. Default is deep equals",defaultValue:{value:"isDeepEqual",computed:!0}}}};const U=[{organizationName:"Bedriften",organizationNumber:"912602370",quantityUnprocessedMessages:5},{organizationName:"Sønn & co",organizationNumber:"812602372",quantityUnprocessedMessages:3},{organizationName:"Beslag skytter",organizationNumber:"812602552",quantityUnprocessedMessages:1}],tt={title:"Komponenter/Searchable-dropdown/SearchableDropdown",component:w,argTypes:{postListElement:{options:["html","text","none"],mapping:{html:n.createElement("span",null,"Some text describing the list"),text:"Some text describing the list",none:void 0}},optionBody:{options:["custom","none"],mapping:{custom:({item:l,isHighlighted:t})=>n.createElement("div",{style:{padding:$e,background:t?We:Xe}},n.createElement("div",null,l.organizationName),n.createElement("div",{style:{display:"flex",justifyContent:"space-between"}},n.createElement(ne,null,l.organizationNumber),n.createElement(ne,null,l.quantityUnprocessedMessages," ulest"))),none:void 0}}}},I={args:{id:"id",labelledById:"labelled-by-id",dropdownList:U,dropdownAttributes:["organizationName"],searchAttributes:["organizationName"],noMatch:{text:"Søket ga ingen treff"},inputProps:{placeholder:"Velg"},postListElement:"none"},render:function({id:t,labelledById:r,...i}){return n.createElement(x,{label:"Velg bedrift",labelId:r,inputId:t},n.createElement(w,{id:t,labelledById:r,...i}))}},S={args:{...I.args,dropdownAttributes:["organizationName","organizationNumber"]},render:function({id:t,labelledById:r,...i}){return n.createElement(x,{label:"Velg bedrift",labelId:r,inputId:t},n.createElement(w,{id:t,labelledById:r,...i}))}},V={args:{...I.args,searchMatcher:(l,t)=>r=>{const i=d=>`${d}`.replace(/\s/g,"").toLowerCase(),g=i(l);return t.map(d=>i(r[d])).some(d=>d.includes(g))}},render:function({id:t,labelledById:r,...i}){return n.createElement(x,{label:"Velg bedrift",labelId:r,inputId:t},n.createElement(w,{id:t,labelledById:r,...i}))}},B={args:{...I.args,noMatch:{text:"Søket ga ingen treff",dropdownList:U.slice(1,4)}},render:function({id:t,labelledById:r,...i}){return n.createElement(x,{label:"Velg bedrift",labelId:r,inputId:t},n.createElement(w,{id:t,labelledById:r,...i}))}},N={args:{...I.args,selectedItem:U[2]},render:function({id:t,labelledById:r,...i}){return n.createElement(x,{label:"Velg bedrift",labelId:r,inputId:t},n.createElement(w,{id:t,labelledById:r,...i}))}},D={args:{...I.args,postListElement:n.createElement("span",null,"Some text describing the list")},render:function({id:t,labelledById:r,...i}){return n.createElement(x,{label:"Velg bedrift",labelId:r,inputId:t},n.createElement(w,{id:t,labelledById:r,...i}))}},q={args:{...I.args,displayAttribute:"organizationNumber",dropdownAttributes:["organizationName","organizationNumber"],searchAttributes:["organizationNumber","organizationName"]},render:function({id:t,labelledById:r,...i}){return n.createElement(x,{label:"Velg bedrift",labelId:r,inputId:t},n.createElement(w,{id:t,labelledById:r,...i}))}};var re,ae,ie;I.parameters={...I.parameters,docs:{...(re=I.parameters)==null?void 0:re.docs,source:{originalSource:`{
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
}`,...(ie=(ae=I.parameters)==null?void 0:ae.docs)==null?void 0:ie.source}}};var le,se,oe;S.parameters={...S.parameters,docs:{...(le=S.parameters)==null?void 0:le.docs,source:{originalSource:`{
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
}`,...(oe=(se=S.parameters)==null?void 0:se.docs)==null?void 0:oe.source}}};var de,ue,ce;V.parameters={...V.parameters,docs:{...(de=V.parameters)==null?void 0:de.docs,source:{originalSource:`{
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
}`,...(ce=(ue=V.parameters)==null?void 0:ue.docs)==null?void 0:ce.source}}};var pe,me,ge;B.parameters={...B.parameters,docs:{...(pe=B.parameters)==null?void 0:pe.docs,source:{originalSource:`{
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
}`,...(ge=(me=B.parameters)==null?void 0:me.docs)==null?void 0:ge.source}}};var fe,be,Ie;N.parameters={...N.parameters,docs:{...(fe=N.parameters)==null?void 0:fe.docs,source:{originalSource:`{
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
}`,...(Ie=(be=N.parameters)==null?void 0:be.docs)==null?void 0:Ie.source}}};var ye,he,we;D.parameters={...D.parameters,docs:{...(ye=D.parameters)==null?void 0:ye.docs,source:{originalSource:`{
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
}`,...(we=(he=D.parameters)==null?void 0:he.docs)==null?void 0:we.source}}};var Ee,xe,Ae;q.parameters={...q.parameters,docs:{...(Ee=q.parameters)==null?void 0:Ee.docs,source:{originalSource:`{
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
}`,...(Ae=(xe=q.parameters)==null?void 0:xe.docs)==null?void 0:Ae.source}}};const nt=["Standard","DropdownAttributes","CustomSearch","ExtraResults","SelectedItem","PostListElement","CustomDisplayAttribute"],dt=Object.freeze(Object.defineProperty({__proto__:null,CustomDisplayAttribute:q,CustomSearch:V,DropdownAttributes:S,ExtraResults:B,PostListElement:D,SelectedItem:N,Standard:I,__namedExportsOrder:nt,default:tt},Symbol.toStringTag,{value:"Module"}));export{V as C,S as D,B as E,D as P,dt as S,I as a,N as b};
