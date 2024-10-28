import{R as r,r as m}from"./index-RYns6xqu.js";import{c as be}from"./index-Dejnh_W_.js";import{M as Ae}from"./MicroText-QSqQ4723.js";import{g as T,f as Ve,u as Be,a as ke,b as De,c as Ne,d as J,m as qe,T as Le,L as _e,R as Fe,e as ze,s as Q,h as Y,i as Me}from"./ListBox-Bejj6T-f.js";import{s as Oe,a as Ce,b as Ge}from"./spacing-enBt7HlE.js";import{S as Z}from"./index-Blkp7_GP.js";import{I as x}from"./InputGroup-DFg7WU2E.js";function he({item:a,dropdownAttributes:n,isHighlighted:l}){const[i,...c]=n,d=a[i],t=c.map((o,u)=>r.createElement(Ae,{className:"ffe-searchable-dropdown__detail-text",key:u},a[o]));return r.createElement("div",{className:be("ffe-searchable-dropdown__list-item-body",{"ffe-searchable-dropdown__list-item-body--highlighted":l})},d,!!t.length&&r.createElement("div",{className:"ffe-searchable-dropdown__list-item-body-details"},t))}he.__docgenInfo={description:"",methods:[],displayName:"OptionBody",props:{item:{required:!0,tsType:{name:"Item"},description:""},dropdownAttributes:{required:!0,tsType:{name:"Array",elements:[{name:"Item"}],raw:"Array<keyof Item>"},description:""},isHighlighted:{required:!0,tsType:{name:"boolean"},description:""}}};const He=({searchAttributes:a,dropdownList:n,noMatchDropdownList:l,maxRenderedDropdownElements:i,searchMatcher:c,onChange:d})=>(t,o)=>{var u,D,R,I,E,N,q,v;switch(o.type){case"InputKeyDownEscape":return{...t,noMatch:!1,isExpanded:!1,highlightedIndex:-1,inputValue:t.selectedItem?t.selectedItem[a[0]]:""};case"InputClick":{const{noMatch:f,listToRender:b}=T({inputValue:t.inputValue,searchAttributes:a,maxRenderedDropdownElements:i,dropdownList:n,noMatchDropdownList:l,searchMatcher:c,showAllItemsInDropdown:!0});return{...t,isExpanded:!0,listToRender:b,noMatch:f}}case"InputChange":{const{noMatch:f,listToRender:b}=T({inputValue:((u=o.payload)==null?void 0:u.inputValue)??"",searchAttributes:a,maxRenderedDropdownElements:i,dropdownList:n,noMatchDropdownList:l,searchMatcher:c,showAllItemsInDropdown:!1});return{...t,isExpanded:!0,inputValue:((D=o.payload)==null?void 0:D.inputValue)??"",listToRender:b,highlightedIndex:((I=(R=o.payload)==null?void 0:R.inputValue)==null?void 0:I.trim())===""||b.length===0?-1:0,noMatch:f}}case"ToggleButtonPressed":return{...t,isExpanded:!t.isExpanded};case"ItemSelectedProgrammatically":case"ItemOnClick":case"InputKeyDownEnter":return{...t,isExpanded:!1,highlightedIndex:-1,selectedItem:(E=o.payload)==null?void 0:E.selectedItem,inputValue:((q=(N=o.payload)==null?void 0:N.selectedItem)==null?void 0:q[a[0]])||""};case"InputKeyDownArrowDown":case"InputKeyDownArrowUp":return{...t,isExpanded:!0,highlightedIndex:((v=o.payload)==null?void 0:v.highlightedIndex)??-1};case"FocusMovedOutSide":{const{listToRender:f}=T({inputValue:t.inputValue,searchAttributes:a,maxRenderedDropdownElements:i,dropdownList:n,noMatchDropdownList:l,searchMatcher:c,showAllItemsInDropdown:!0}),b=t.inputValue===""&&!!t.selectedItem,z=t.listToRender.length===1&&a.map(L=>{var e;return t.listToRender[0][L]===((e=t.selectedItem)==null?void 0:e[L])}).includes(!1)&&t.highlightedIndex!==-1;let w=t.selectedItem;b?(d==null||d(null),w=void 0):z&&(d==null||d(t.listToRender[0]),w=t.listToRender[0]);const M=w?w[a[0]]:"";return{...t,isExpanded:!1,highlightedIndex:-1,inputValue:M,selectedItem:w,listToRender:f}}case"DropdownListPropUpdated":return{...t,...T({inputValue:t.inputValue,searchAttributes:a,maxRenderedDropdownElements:i,dropdownList:n,noMatchDropdownList:l,searchMatcher:c,showAllItemsInDropdown:!!t.selectedItem})};default:return t}},Ue="ArrowUp",Ke="ArrowDown",je="Escape",We="Enter";function Xe({id:a,labelledById:n,className:l,dropdownList:i,dropdownAttributes:c,searchAttributes:d,maxRenderedDropdownElements:t=Number.MAX_SAFE_INTEGER,onChange:o,inputProps:u,optionBody:D,postListElement:R,noMatch:I,locale:E="nb",ariaInvalid:N,formatter:q=e=>e,searchMatcher:v,selectedItem:f,isLoading:b=!1,onOpen:z,onClose:w,...M},L){var W,X,$,P;const[e,p]=m.useReducer(He({dropdownList:i,searchAttributes:d,maxRenderedDropdownElements:t,noMatchDropdownList:I==null?void 0:I.dropdownList,searchMatcher:v,onChange:o}),{isExpanded:!1,selectedItems:[],highlightedIndex:-1,inputValue:f?f[c[0]]:""},s=>({...s,...T({inputValue:s.inputValue,searchAttributes:d,maxRenderedDropdownElements:t,dropdownList:i,noMatchDropdownList:I==null?void 0:I.dropdownList,searchMatcher:v,showAllItemsInDropdown:!!f})})),_=Be({listToRender:e.listToRender}),[we,Ee]=m.useState(!1),O=m.useRef(null),H=m.useRef(null),U=m.useRef(null),xe=D||he,F=m.useRef(null),K=m.useId(),C=m.useRef(!1),j=m.useRef(!1),Re=()=>{p({type:"InputClick"})},ve=s=>{u!=null&&u.onBlur&&u.onBlur(s)};m.useEffect(()=>{p({type:"ItemSelectedProgrammatically",payload:{selectedItem:f}})},[f,p]),ke({hasFocus:we,isExpanded:e.isExpanded,isLoading:b,locale:E,resultCount:e.listToRender.length,selectedValue:(W=e.selectedItem)==null?void 0:W[d[0]]}),m.useLayoutEffect(()=>{var s,g;C.current?((s=H.current)==null||s.focus(),C.current=!1):j.current&&((g=O.current)==null||g.focus(),j.current=!1)}),m.useEffect(()=>{p({type:"DropdownListPropUpdated"})},[i,p]),De({isExpanded:e.isExpanded,onClose:w,onOpen:z});const Te=m.useCallback(()=>p({type:"FocusMovedOutSide"}),[]);Ne({id:a,containerRef:U,handelFocusMovedOutside:Te});const Se=s=>{if(s.key===We&&e.highlightedIndex>=0){s.preventDefault(),p({type:"InputKeyDownEnter",payload:{selectedItem:e.listToRender[e.highlightedIndex]}}),o==null||o(e.listToRender[e.highlightedIndex]);return}else if(s.key===je){p({type:"InputKeyDownEscape"});return}if(s.key===Ue){if(s.preventDefault(),e.listToRender.length){const g=ze(e.highlightedIndex,e.listToRender.length);p({type:"InputKeyDownArrowUp",payload:{highlightedIndex:g}}),g>=0&&Q(e==null?void 0:e.listToRender[g],c),Y(_[g].current,F.current)}return}if(s.key===Ke&&(s.preventDefault(),e.listToRender.length)){const g=Me(e.highlightedIndex,e.listToRender.length);p({type:"InputKeyDownArrowDown",payload:{highlightedIndex:g}}),g>=0&&Q(e==null?void 0:e.listToRender[g],c),Y(_[g].current,F.current)}};return r.createElement("div",{onKeyDown:Se,className:be(l,"ffe-searchable-dropdown"),ref:U,onMouseDown:J(a),onFocus:J(a)},r.createElement("div",{className:"ffe-searchable-dropdown__input",onClick:()=>{var s;(s=O.current)==null||s.focus()}},r.createElement("input",{...u,ref:qe([O,L]),id:a,"aria-labelledby":n,onClick:Re,onChange:s=>{u!=null&&u.onChange&&u.onChange(s),p({type:"InputChange",payload:{inputValue:s.target.value}})},onFocus:()=>Ee(!0),onBlur:ve,"aria-describedby":[u==null?void 0:u["aria-describedby"],e.noMatch&&K].filter(Boolean).join(" ")||void 0,value:q(e.inputValue),type:"text",role:"combobox",autoComplete:"off","aria-controls":((X=F.current)==null?void 0:X.getAttribute("id"))??void 0,"aria-expanded":e.isExpanded&&!!e.listToRender.length,"aria-autocomplete":"list","aria-haspopup":"listbox","aria-activedescendant":e.highlightedIndex>=0?((P=($=_[e.highlightedIndex])==null?void 0:$.current)==null?void 0:P.getAttribute("id"))??void 0:void 0,"aria-invalid":M["aria-invalid"]??N})),r.createElement(Le,{ref:H,isExpanded:e.isExpanded,onClick:()=>p({type:"ToggleButtonPressed"}),locale:E,isLoading:b}),r.createElement(_e,{ref:F,isExpanded:e.isExpanded},e.isExpanded&&r.createElement(Fe,{listToRender:e.listToRender,OptionBody:xe,highlightedIndex:e.highlightedIndex,dropdownAttributes:c,locale:E,refs:_,onChange:s=>{C.current=!0,p({type:"ItemOnClick",payload:{selectedItem:s}}),o==null||o(s)},noMatch:e.noMatch?I:void 0,noMatchMessageId:K,selectedItems:e.selectedItem?[e.selectedItem]:[]}),R&&r.createElement("div",{className:"ffe-searchable-dropdown__list--post-list-element"},R)))}const h=Ve(Xe);h.__docgenInfo={description:"",methods:[],displayName:"SearchableDropdown",props:{id:{required:!0,tsType:{name:"string"},description:"Id of drop down"},labelledById:{required:!1,tsType:{name:"string"},description:"Id of element that labels input field"},className:{required:!1,tsType:{name:"string"},description:"Extra class"},dropdownList:{required:!0,tsType:{name:"Array",elements:[{name:"Item"}],raw:"Item[]"},description:"List of objects to be displayed in dropdown"},selectedItem:{required:!1,tsType:{name:"Item"},description:"The selected item to be displayed in the input field. If not specified, uses internal state to decide."},dropdownAttributes:{required:!0,tsType:{name:"Array",elements:[{name:"unknown"}],raw:"(keyof Item)[]"},description:"Array of attributes to be displayed in list"},searchAttributes:{required:!0,tsType:{name:"Array",elements:[{name:"unknown"}],raw:"(keyof Item)[]"},description:"Array of attributes used when filtering search"},inputProps:{required:!1,tsType:{name:"ReactComponentProps",raw:"React.ComponentProps<'input'>",elements:[{name:"literal",value:"'input'"}]},description:"Props used on input field"},maxRenderedDropdownElements:{required:!1,tsType:{name:"number"},description:"Limits number of rendered dropdown elements",defaultValue:{value:"Number.MAX_SAFE_INTEGER",computed:!0}},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(item: Item | null) => void",signature:{arguments:[{type:{name:"union",raw:"Item | null",elements:[{name:"Item"},{name:"null"}]},name:"item"}],return:{name:"void"}}},description:"Called when a value is selected"},optionBody:{required:!1,tsType:{name:"ReactComponentType",raw:`React.ComponentType<{
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
that has loaded.`,defaultValue:{value:"false",computed:!1}},onOpen:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Function used when dropdown opens"},onClose:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Function used when dropdown closes"}}};const G=[{organizationName:"Bedriften",organizationNumber:"912602370",quantityUnprocessedMessages:5},{organizationName:"Sønn & co",organizationNumber:"812602372",quantityUnprocessedMessages:3},{organizationName:"Beslag skytter",organizationNumber:"812602552",quantityUnprocessedMessages:1}],$e={title:"components/searchable-dropdown/SearchableDropdown",component:h,argTypes:{postListElement:{options:["html","text","none"],mapping:{html:r.createElement("span",null,"Some text describing the list"),text:"Some text describing the list",none:void 0}},optionBody:{options:["custom","none"],mapping:{custom:({item:a,isHighlighted:n})=>r.createElement("div",{style:{padding:Oe,background:n?Ce:Ge}},r.createElement("div",null,a.organizationName),r.createElement("div",{style:{display:"flex",justifyContent:"space-between"}},r.createElement(Z,null,a.organizationNumber),r.createElement(Z,null,a.quantityUnprocessedMessages," ulest"))),none:void 0}}}},y={args:{id:"id",labelledById:"labelled-by-id",dropdownList:G,dropdownAttributes:["organizationName"],searchAttributes:["organizationName"],noMatch:{text:"Søket ga ingen treff"},inputProps:{placeholder:"Velg"},postListElement:"none"},render:function({id:n,labelledById:l,...i}){return r.createElement(x,{label:"Velg bedrift",labelId:l,inputId:n},r.createElement(h,{id:n,labelledById:l,...i}))}},S={args:{...y.args,dropdownAttributes:["organizationName","organizationNumber"]},render:function({id:n,labelledById:l,...i}){return r.createElement(x,{label:"Velg bedrift",labelId:l,inputId:n},r.createElement(h,{id:n,labelledById:l,...i}))}},A={args:{...y.args,searchMatcher:(a,n)=>l=>{const i=d=>`${d}`.replace(/\s/g,"").toLowerCase(),c=i(a);return n.map(d=>i(l[d])).some(d=>d.includes(c))}},render:function({id:n,labelledById:l,...i}){return r.createElement(x,{label:"Velg bedrift",labelId:l,inputId:n},r.createElement(h,{id:n,labelledById:l,...i}))}},V={args:{...y.args,noMatch:{text:"Søket ga ingen treff",dropdownList:G.slice(1,4)}},render:function({id:n,labelledById:l,...i}){return r.createElement(x,{label:"Velg bedrift",labelId:l,inputId:n},r.createElement(h,{id:n,labelledById:l,...i}))}},B={args:{...y.args,selectedItem:G[2]},render:function({id:n,labelledById:l,...i}){return r.createElement(x,{label:"Velg bedrift",labelId:l,inputId:n},r.createElement(h,{id:n,labelledById:l,...i}))}},k={args:{...y.args,postListElement:r.createElement("span",null,"Some text describing the list")},render:function({id:n,labelledById:l,...i}){return r.createElement(x,{label:"Velg bedrift",labelId:l,inputId:n},r.createElement(h,{id:n,labelledById:l,...i}))}};var ee,te,ne;y.parameters={...y.parameters,docs:{...(ee=y.parameters)==null?void 0:ee.docs,source:{originalSource:`{
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
}`,...(ne=(te=y.parameters)==null?void 0:te.docs)==null?void 0:ne.source}}};var re,ae,le;S.parameters={...S.parameters,docs:{...(re=S.parameters)==null?void 0:re.docs,source:{originalSource:`{
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
}`,...(le=(ae=S.parameters)==null?void 0:ae.docs)==null?void 0:le.source}}};var ie,se,de;A.parameters={...A.parameters,docs:{...(ie=A.parameters)==null?void 0:ie.docs,source:{originalSource:`{
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
}`,...(de=(se=A.parameters)==null?void 0:se.docs)==null?void 0:de.source}}};var oe,ue,ce;V.parameters={...V.parameters,docs:{...(oe=V.parameters)==null?void 0:oe.docs,source:{originalSource:`{
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
}`,...(ce=(ue=V.parameters)==null?void 0:ue.docs)==null?void 0:ce.source}}};var pe,me,ge;B.parameters={...B.parameters,docs:{...(pe=B.parameters)==null?void 0:pe.docs,source:{originalSource:`{
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
}`,...(ge=(me=B.parameters)==null?void 0:me.docs)==null?void 0:ge.source}}};var fe,Ie,ye;k.parameters={...k.parameters,docs:{...(fe=k.parameters)==null?void 0:fe.docs,source:{originalSource:`{
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
}`,...(ye=(Ie=k.parameters)==null?void 0:Ie.docs)==null?void 0:ye.source}}};const Pe=["Standard","DropdownAttributes","CustomSearch","ExtraResults","SelectedItem","PostListElement"],rt=Object.freeze(Object.defineProperty({__proto__:null,CustomSearch:A,DropdownAttributes:S,ExtraResults:V,PostListElement:k,SelectedItem:B,Standard:y,__namedExportsOrder:Pe,default:$e},Symbol.toStringTag,{value:"Module"}));export{A as C,S as D,V as E,k as P,rt as S,y as a,B as b};
