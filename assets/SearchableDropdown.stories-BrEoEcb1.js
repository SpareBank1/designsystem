import{R as a,r as m}from"./index-ne9I_3bB.js";import{c as he}from"./index-B6-3w37c.js";import{M as Ve}from"./MicroText-CM7FmYwj.js";import{g as S,f as Be,u as De,a as qe,b as ke,c as Ne,d as Q,m as Le,T as _e,L as Fe,R as ze,e as Me,s as Y,h as Z,i as Ce}from"./ListBox-DV8GbEy6.js";import{i as Oe,S as ee}from"./index-PhrmigtZ.js";import{s as Ge,a as He,b as Ke}from"./spacing-enBt7HlE.js";import{I as x}from"./InputGroup-CX8SHRAV.js";function we({item:r,dropdownAttributes:n,isHighlighted:l}){const[i,...c]=n,d=r[i],t=c.map((o,u)=>a.createElement(Ve,{className:"ffe-searchable-dropdown__detail-text",key:u},r[o]));return a.createElement("div",{className:he("ffe-searchable-dropdown__list-item-body",{"ffe-searchable-dropdown__list-item-body--highlighted":l})},d,!!t.length&&a.createElement("div",{className:"ffe-searchable-dropdown__list-item-body-details"},t))}we.__docgenInfo={description:"",methods:[],displayName:"OptionBody",props:{item:{required:!0,tsType:{name:"Item"},description:""},dropdownAttributes:{required:!0,tsType:{name:"Array",elements:[{name:"Item"}],raw:"Array<keyof Item>"},description:""},isHighlighted:{required:!0,tsType:{name:"boolean"},description:""}}};const Ue=({searchAttributes:r,dropdownList:n,noMatchDropdownList:l,maxRenderedDropdownElements:i,searchMatcher:c,onChange:d})=>(t,o)=>{var u,q,R,I,E,k,N,T;switch(o.type){case"InputKeyDownEscape":return{...t,noMatch:!1,isExpanded:!1,highlightedIndex:-1,inputValue:t.selectedItem?t.selectedItem[r[0]]:""};case"InputClick":{const{noMatch:f,listToRender:b}=S({inputValue:t.inputValue,searchAttributes:r,maxRenderedDropdownElements:i,dropdownList:n,noMatchDropdownList:l,searchMatcher:c,showAllItemsInDropdown:!0});return{...t,isExpanded:!0,listToRender:b,noMatch:f}}case"InputChange":{const{noMatch:f,listToRender:b}=S({inputValue:((u=o.payload)==null?void 0:u.inputValue)??"",searchAttributes:r,maxRenderedDropdownElements:i,dropdownList:n,noMatchDropdownList:l,searchMatcher:c,showAllItemsInDropdown:!1});return{...t,isExpanded:!0,inputValue:((q=o.payload)==null?void 0:q.inputValue)??"",listToRender:b,highlightedIndex:((I=(R=o.payload)==null?void 0:R.inputValue)==null?void 0:I.trim())===""||b.length===0?-1:0,noMatch:f}}case"ToggleButtonPressed":return{...t,isExpanded:!t.isExpanded};case"ItemSelectedProgrammatically":case"ItemOnClick":case"InputKeyDownEnter":return{...t,isExpanded:!1,highlightedIndex:-1,selectedItem:(E=o.payload)==null?void 0:E.selectedItem,inputValue:((N=(k=o.payload)==null?void 0:k.selectedItem)==null?void 0:N[r[0]])||""};case"InputKeyDownArrowDown":case"InputKeyDownArrowUp":return{...t,isExpanded:!0,highlightedIndex:((T=o.payload)==null?void 0:T.highlightedIndex)??-1};case"FocusMovedOutSide":{const{listToRender:f}=S({inputValue:t.inputValue,searchAttributes:r,maxRenderedDropdownElements:i,dropdownList:n,noMatchDropdownList:l,searchMatcher:c,showAllItemsInDropdown:!0}),b=t.inputValue===""&&!!t.selectedItem,M=t.listToRender.length===1&&r.map(L=>{var _;return t.listToRender[0][L]===((_=t.selectedItem)==null?void 0:_[L])}).includes(!1)&&t.highlightedIndex!==-1;let w=t.selectedItem;b?(d==null||d(null),w=void 0):M&&(d==null||d(t.listToRender[0]),w=t.listToRender[0]);const C=w?w[r[0]]:"";return{...t,isExpanded:!1,highlightedIndex:-1,inputValue:C,selectedItem:w,listToRender:f}}case"DropdownListPropUpdated":return{...t,...S({inputValue:t.inputValue,searchAttributes:r,maxRenderedDropdownElements:i,dropdownList:n,noMatchDropdownList:l,searchMatcher:c,showAllItemsInDropdown:!!t.selectedItem})};default:return t}},je="ArrowUp",We="ArrowDown",Xe="Escape",$e="Enter";function Pe({id:r,labelledById:n,className:l,dropdownList:i,dropdownAttributes:c,searchAttributes:d,maxRenderedDropdownElements:t=Number.MAX_SAFE_INTEGER,onChange:o,inputProps:u,optionBody:q,postListElement:R,noMatch:I,locale:E="nb",ariaInvalid:k,formatter:N=e=>e,searchMatcher:T,selectedItem:f,isLoading:b=!1,onOpen:M,onClose:w,isEqual:C=Oe,...L},_){var X,$,P,J;const[e,p]=m.useReducer(Ue({dropdownList:i,searchAttributes:d,maxRenderedDropdownElements:t,noMatchDropdownList:I==null?void 0:I.dropdownList,searchMatcher:T,onChange:o}),{isExpanded:!1,selectedItems:[],highlightedIndex:-1,inputValue:f?f[c[0]]:""},s=>({...s,...S({inputValue:s.inputValue,searchAttributes:d,maxRenderedDropdownElements:t,dropdownList:i,noMatchDropdownList:I==null?void 0:I.dropdownList,searchMatcher:T,showAllItemsInDropdown:!!f})})),F=De({listToRender:e.listToRender}),[Ee,xe]=m.useState(!1),O=m.useRef(null),K=m.useRef(null),U=m.useRef(null),Re=q||we,z=m.useRef(null),j=m.useId(),G=m.useRef(!1),W=m.useRef(!1),Te=()=>{p({type:"InputClick"})},Se=s=>{u!=null&&u.onBlur&&u.onBlur(s)};m.useEffect(()=>{p({type:"ItemSelectedProgrammatically",payload:{selectedItem:f}})},[f,p]),qe({hasFocus:Ee,isExpanded:e.isExpanded,isLoading:b,locale:E,resultCount:e.listToRender.length,selectedValue:(X=e.selectedItem)==null?void 0:X[d[0]]}),m.useLayoutEffect(()=>{var s,g;G.current?((s=K.current)==null||s.focus(),G.current=!1):W.current&&((g=O.current)==null||g.focus(),W.current=!1)}),m.useEffect(()=>{p({type:"DropdownListPropUpdated"})},[i,p]),ke({isExpanded:e.isExpanded,onClose:w,onOpen:M});const Ae=m.useCallback(()=>p({type:"FocusMovedOutSide"}),[]);Ne({id:r,containerRef:U,handelFocusMovedOutside:Ae});const ve=s=>{if(s.key===$e&&e.highlightedIndex>=0){s.preventDefault(),p({type:"InputKeyDownEnter",payload:{selectedItem:e.listToRender[e.highlightedIndex]}}),o==null||o(e.listToRender[e.highlightedIndex]);return}else if(s.key===Xe){p({type:"InputKeyDownEscape"});return}if(s.key===je){if(s.preventDefault(),e.listToRender.length){const g=Me(e.highlightedIndex,e.listToRender.length);p({type:"InputKeyDownArrowUp",payload:{highlightedIndex:g}}),g>=0&&Y(e==null?void 0:e.listToRender[g],c),Z(F[g].current,z.current)}return}if(s.key===We&&(s.preventDefault(),e.listToRender.length)){const g=Ce(e.highlightedIndex,e.listToRender.length);p({type:"InputKeyDownArrowDown",payload:{highlightedIndex:g}}),g>=0&&Y(e==null?void 0:e.listToRender[g],c),Z(F[g].current,z.current)}};return a.createElement("div",{onKeyDown:ve,className:he(l,"ffe-searchable-dropdown"),ref:U,onMouseDown:Q(r),onFocus:Q(r)},a.createElement("div",{className:"ffe-searchable-dropdown__input",onClick:()=>{var s;(s=O.current)==null||s.focus()}},a.createElement("input",{...u,ref:Le([O,_]),id:r,"aria-labelledby":n,onClick:Te,onChange:s=>{u!=null&&u.onChange&&u.onChange(s),p({type:"InputChange",payload:{inputValue:s.target.value}})},onFocus:()=>xe(!0),onBlur:Se,"aria-describedby":[u==null?void 0:u["aria-describedby"],e.noMatch&&j].filter(Boolean).join(" ")||void 0,value:N(e.inputValue),type:"text",role:"combobox",autoComplete:"off","aria-controls":(($=z.current)==null?void 0:$.getAttribute("id"))??void 0,"aria-expanded":e.isExpanded&&!!e.listToRender.length,"aria-autocomplete":"list","aria-haspopup":"listbox","aria-activedescendant":e.highlightedIndex>=0?((J=(P=F[e.highlightedIndex])==null?void 0:P.current)==null?void 0:J.getAttribute("id"))??void 0:void 0,"aria-invalid":L["aria-invalid"]??k})),a.createElement(_e,{ref:K,isExpanded:e.isExpanded,onClick:()=>p({type:"ToggleButtonPressed"}),locale:E,isLoading:b}),a.createElement(Fe,{ref:z,isExpanded:e.isExpanded},e.isExpanded&&a.createElement(ze,{isEqual:C,listToRender:e.listToRender,OptionBody:Re,highlightedIndex:e.highlightedIndex,dropdownAttributes:c,locale:E,refs:F,onChange:s=>{G.current=!0,p({type:"ItemOnClick",payload:{selectedItem:s}}),o==null||o(s)},noMatch:e.noMatch?I:void 0,noMatchMessageId:j,selectedItems:e.selectedItem?[e.selectedItem]:[]}),R&&a.createElement("div",{className:"ffe-searchable-dropdown__list--post-list-element"},R)))}const h=Be(Pe);h.__docgenInfo={description:"",methods:[],displayName:"SearchableDropdown",props:{id:{required:!0,tsType:{name:"string"},description:"Id of drop down"},labelledById:{required:!1,tsType:{name:"string"},description:"Id of element that labels input field"},className:{required:!1,tsType:{name:"string"},description:"Extra class"},dropdownList:{required:!0,tsType:{name:"Array",elements:[{name:"Item"}],raw:"Item[]"},description:"List of objects to be displayed in dropdown"},selectedItem:{required:!1,tsType:{name:"Item"},description:"The selected item to be displayed in the input field. If not specified, uses internal state to decide."},dropdownAttributes:{required:!0,tsType:{name:"Array",elements:[{name:"unknown"}],raw:"(keyof Item)[]"},description:"Array of attributes to be displayed in list"},searchAttributes:{required:!0,tsType:{name:"Array",elements:[{name:"unknown"}],raw:"(keyof Item)[]"},description:"Array of attributes used when filtering search"},inputProps:{required:!1,tsType:{name:"ReactComponentProps",raw:"React.ComponentProps<'input'>",elements:[{name:"literal",value:"'input'"}]},description:"Props used on input field"},maxRenderedDropdownElements:{required:!1,tsType:{name:"number"},description:"Limits number of rendered dropdown elements",defaultValue:{value:"Number.MAX_SAFE_INTEGER",computed:!0}},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(item: Item | null) => void",signature:{arguments:[{type:{name:"union",raw:"Item | null",elements:[{name:"Item"},{name:"null"}]},name:"item"}],return:{name:"void"}}},description:"Called when a value is selected"},optionBody:{required:!1,tsType:{name:"ReactComponentType",raw:`React.ComponentType<{
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
that has loaded.`,defaultValue:{value:"false",computed:!1}},onOpen:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Function used when dropdown opens"},onClose:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Function used when dropdown closes"},isEqual:{required:!1,tsType:{name:"signature",type:"function",raw:"(itemA: Item, itemB: Item) => boolean",signature:{arguments:[{type:{name:"Item"},name:"itemA"},{type:{name:"Item"},name:"itemB"}],return:{name:"boolean"}}},description:"Custom compare between objects. Default is deep equals",defaultValue:{value:"isDeepEqual",computed:!0}}}};const H=[{organizationName:"Bedriften",organizationNumber:"912602370",quantityUnprocessedMessages:5},{organizationName:"Sønn & co",organizationNumber:"812602372",quantityUnprocessedMessages:3},{organizationName:"Beslag skytter",organizationNumber:"812602552",quantityUnprocessedMessages:1}],Je={title:"Komponenter/Searchable-dropdown/SearchableDropdown",component:h,argTypes:{postListElement:{options:["html","text","none"],mapping:{html:a.createElement("span",null,"Some text describing the list"),text:"Some text describing the list",none:void 0}},optionBody:{options:["custom","none"],mapping:{custom:({item:r,isHighlighted:n})=>a.createElement("div",{style:{padding:Ge,background:n?He:Ke}},a.createElement("div",null,r.organizationName),a.createElement("div",{style:{display:"flex",justifyContent:"space-between"}},a.createElement(ee,null,r.organizationNumber),a.createElement(ee,null,r.quantityUnprocessedMessages," ulest"))),none:void 0}}}},y={args:{id:"id",labelledById:"labelled-by-id",dropdownList:H,dropdownAttributes:["organizationName"],searchAttributes:["organizationName"],noMatch:{text:"Søket ga ingen treff"},inputProps:{placeholder:"Velg"},postListElement:"none"},render:function({id:n,labelledById:l,...i}){return a.createElement(x,{label:"Velg bedrift",labelId:l,inputId:n},a.createElement(h,{id:n,labelledById:l,...i}))}},A={args:{...y.args,dropdownAttributes:["organizationName","organizationNumber"]},render:function({id:n,labelledById:l,...i}){return a.createElement(x,{label:"Velg bedrift",labelId:l,inputId:n},a.createElement(h,{id:n,labelledById:l,...i}))}},v={args:{...y.args,searchMatcher:(r,n)=>l=>{const i=d=>`${d}`.replace(/\s/g,"").toLowerCase(),c=i(r);return n.map(d=>i(l[d])).some(d=>d.includes(c))}},render:function({id:n,labelledById:l,...i}){return a.createElement(x,{label:"Velg bedrift",labelId:l,inputId:n},a.createElement(h,{id:n,labelledById:l,...i}))}},V={args:{...y.args,noMatch:{text:"Søket ga ingen treff",dropdownList:H.slice(1,4)}},render:function({id:n,labelledById:l,...i}){return a.createElement(x,{label:"Velg bedrift",labelId:l,inputId:n},a.createElement(h,{id:n,labelledById:l,...i}))}},B={args:{...y.args,selectedItem:H[2]},render:function({id:n,labelledById:l,...i}){return a.createElement(x,{label:"Velg bedrift",labelId:l,inputId:n},a.createElement(h,{id:n,labelledById:l,...i}))}},D={args:{...y.args,postListElement:a.createElement("span",null,"Some text describing the list")},render:function({id:n,labelledById:l,...i}){return a.createElement(x,{label:"Velg bedrift",labelId:l,inputId:n},a.createElement(h,{id:n,labelledById:l,...i}))}};var te,ne,ae;y.parameters={...y.parameters,docs:{...(te=y.parameters)==null?void 0:te.docs,source:{originalSource:`{
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
}`,...(ae=(ne=y.parameters)==null?void 0:ne.docs)==null?void 0:ae.source}}};var re,le,ie;A.parameters={...A.parameters,docs:{...(re=A.parameters)==null?void 0:re.docs,source:{originalSource:`{
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
}`,...(ie=(le=A.parameters)==null?void 0:le.docs)==null?void 0:ie.source}}};var se,de,oe;v.parameters={...v.parameters,docs:{...(se=v.parameters)==null?void 0:se.docs,source:{originalSource:`{
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
}`,...(oe=(de=v.parameters)==null?void 0:de.docs)==null?void 0:oe.source}}};var ue,ce,pe;V.parameters={...V.parameters,docs:{...(ue=V.parameters)==null?void 0:ue.docs,source:{originalSource:`{
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
}`,...(pe=(ce=V.parameters)==null?void 0:ce.docs)==null?void 0:pe.source}}};var me,ge,fe;B.parameters={...B.parameters,docs:{...(me=B.parameters)==null?void 0:me.docs,source:{originalSource:`{
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
}`,...(fe=(ge=B.parameters)==null?void 0:ge.docs)==null?void 0:fe.source}}};var Ie,ye,be;D.parameters={...D.parameters,docs:{...(Ie=D.parameters)==null?void 0:Ie.docs,source:{originalSource:`{
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
}`,...(be=(ye=D.parameters)==null?void 0:ye.docs)==null?void 0:be.source}}};const Qe=["Standard","DropdownAttributes","CustomSearch","ExtraResults","SelectedItem","PostListElement"],lt=Object.freeze(Object.defineProperty({__proto__:null,CustomSearch:v,DropdownAttributes:A,ExtraResults:V,PostListElement:D,SelectedItem:B,Standard:y,__namedExportsOrder:Qe,default:Je},Symbol.toStringTag,{value:"Module"}));export{v as C,A as D,V as E,D as P,lt as S,y as a,B as b};
