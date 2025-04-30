import{R as r,r as h}from"./index-DQDNmYQF.js";import{r as q}from"./index-C8KIgodY.js";import{c as T}from"./index-QCImZZ3W.js";import{P as te}from"./Paragraph-DEYlXMQQ.js";import{S as Z}from"./SecondaryButton-C30B7eR2.js";import{I as k}from"./Icon-BqsuuMcG.js";import{I as re}from"./InputGroup-DYJmYWjy.js";import{I as oe}from"./Input-DYak8_-P.js";import{T as ie,a as se,b as O,c as _,d as le,e as j}from"./TableRow-D0Di_mB0.js";import{T as ue}from"./TableCaption-BRZwXCyz.js";var z=function(){return z=Object.assign||function(e){for(var t,a=1,n=arguments.length;a<n;a++){t=arguments[a];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},z.apply(this,arguments)},ce=function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(a[n[o]]=e[n[o]]);return a},K=function(e){var t=e.className,a=ce(e,["className"]);return r.createElement("tfoot",z({className:T("ffe-table__foot",t)},a))};K.__docgenInfo={description:"",methods:[],displayName:"TableFoot"};var me="480px";const ge=()=>{const[e,t]=h.useState([window.innerWidth,window.innerHeight]);return h.useEffect(()=>{const a=()=>t([window.innerWidth,window.innerHeight]);return a(),window.addEventListener("resize",a),()=>window.removeEventListener("resize",a)},[]),e},P="...",M=parseInt(me,10),N=(e,t)=>{const a=t-e+1;return Array.from({length:a},(n,o)=>o+e)};function de(e,t,a,n=1){const[o]=ge();return h.useMemo(()=>{const i=Math.ceil(e/t);if(n+5>=i)return N(1,i);const l=1,m=i;if(o>M){const g=Math.max(a-n,1),d=Math.min(a+n,i),p=g>2,c=d<i-1;if(!p&&c){let s;return o<=M?s=1+n:s=2+2*n,[...N(1,s),P,i]}if(p&&!c){let s;o<=M?s=1+n:s=2+2*n;const f=N(i-s+1,i);return[l,P,...f]}if(p&&c){if(o<=M)return[l,P,a,P,m];const s=N(g,d);return[l,P,...s,P,m]}}else{const g=Math.min(i-2,a-1),d=Math.max(g,1),p=Math.max(3,a+1),c=Math.min(p,i);return N(d,c)}},[e,t,n,a,o])}const pe={rowsPerPageLabel:["Vis","rader per side"],showing:(e,t,a)=>`Viser ${e}-${t} av ${a} rader`,previous:"Forrige",next:"Neste",goToPage:e=>`Gå til side ${e}`,currentPage:e=>`Gjeldende side, side ${e}`},fe={rowsPerPageLabel:["Vis","rader per side"],showing:(e,t,a)=>`Viser ${e}-${t} av ${a} rader`,previous:"Forrige",next:"Neste",goToPage:e=>`Gå til side ${e}`,currentPage:e=>`Gjeldande side, side ${e}`},be={rowsPerPageLabel:["Show","rows per page"],showing:(e,t,a)=>`Showing ${e}-${t} of ${a} rows`,previous:"Previous",next:"Next",goToPage:e=>`Go to page ${e}`,currentPage:e=>`Current page, Page ${e}`},v={nb:pe,nn:fe,en:be},X=({locale:e,start:t,end:a,total:n,className:o,...i})=>r.createElement(te,{className:T("ffe-pagination-info",o),...i},v[e].showing(t,a,n));X.__docgenInfo={description:"",methods:[],displayName:"Info",props:{locale:{required:!0,tsType:{name:"union",raw:"'nb' | 'nn' | 'en'",elements:[{name:"literal",value:"'nb'"},{name:"literal",value:"'nn'"},{name:"literal",value:"'en'"}]},description:""},start:{required:!0,tsType:{name:"number"},description:""},end:{required:!0,tsType:{name:"number"},description:""},total:{required:!0,tsType:{name:"number"},description:""}}};var D=function(){return D=Object.assign||function(e){for(var t,a=1,n=arguments.length;a<n;a++){t=arguments[a];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},D.apply(this,arguments)},he=function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(a[n[o]]=e[n[o]]);return a},J=r.forwardRef(function(e,t){var a=e.className,n=e.inline,o=he(e,["className","inline"]);return r.createElement("select",D({className:T("ffe-dropdown","ffe-default-mode",{"ffe-dropdown--inline":n},a),ref:t},o))});J.__docgenInfo={description:"",methods:[],displayName:"Dropdown"};const ee=({locale:e,defaultValue:t,setPageSize:a,rowsPerPageOptions:n,className:o,...i})=>r.createElement("div",{className:T("ffe-pagination-rows-per-page",o),...i},r.createElement("span",{"aria-hidden":!0},v[e].rowsPerPageLabel[0]),r.createElement(J,{"aria-label":v[e].rowsPerPageLabel.join(" "),defaultValue:t,onChange:u=>a(Number(u.target.value))},n.map(u=>r.createElement("option",{key:u,value:u},u))),r.createElement("span",{"aria-hidden":!0},v[e].rowsPerPageLabel[1]));ee.__docgenInfo={description:"",methods:[],displayName:"PerPageDropdown",props:{locale:{required:!0,tsType:{name:"union",raw:"'nb' | 'nn' | 'en'",elements:[{name:"literal",value:"'nb'"},{name:"literal",value:"'nn'"},{name:"literal",value:"'en'"}]},description:""},defaultValue:{required:!0,tsType:{name:"number"},description:""},setPageSize:{required:!0,tsType:{name:"signature",type:"function",raw:"(pageSize: number) => void",signature:{arguments:[{type:{name:"number"},name:"pageSize"}],return:{name:"void"}}},description:""},rowsPerPageOptions:{required:!0,tsType:{name:"Array",elements:[{name:"number"}],raw:"number[]"},description:""}}};const R="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgLTk2MCA5NjAgOTYwIiB3aWR0aD0iMjQiPjxwYXRoIGQ9Im00MTguMTUzLTQ4MCAxNjIuOTIzIDE2Mi45MjRxOC4zMDggOC4zMDcgOC41IDIwLjg4NC4xOTMgMTIuNTc2LTguNSAyMS4yNjgtOC42OTIgOC42OTMtMjEuMDc2IDguNjkzdC0yMS4wNzYtOC42OTNMMzU5LjE1NS00NTQuNjkzcS01LjYxNi01LjYxNS03LjkyMy0xMS44NDYtMi4zMDgtNi4yMy0yLjMwOC0xMy40NjF0Mi4zMDgtMTMuNDYxcTIuMzA3LTYuMjMxIDcuOTIzLTExLjg0NmwxNzkuNzY5LTE3OS43NjlxOC4zMDctOC4zMDggMjAuODg0LTguNSAxMi41NzYtLjE5MyAyMS4yNjggOC41IDguNjkzIDguNjkyIDguNjkzIDIxLjA3NnQtOC42OTMgMjEuMDc2TDQxOC4xNTMtNDgwWiIvPjwvc3ZnPg==",C=({direction:e,buttonText:t,isHidden:a,locale:n,onClick:o,className:i})=>r.createElement("div",{className:T(i,`ffe-pagination-navigation-block ffe-pagination-navigation-block--${e}`,{"ffe-pagination-navigation-block--hidden":a,"ffe-pagination-navigation-block--no-text":!t})},r.createElement(Z,{type:"button",leftIcon:e==="prev"?r.createElement(k,{fileUrl:R,size:"md"}):void 0,rightIcon:e==="next"?r.createElement(k,{fileUrl:R,size:"md"}):void 0,onClick:o},t&&r.createElement("span",{className:"ffe-pagination-navigation-block__button-text"},e==="next"?v[n].next:v[n].previous)));C.__docgenInfo={description:"",methods:[],displayName:"NavigationBlock",props:{direction:{required:!0,tsType:{name:"union",raw:"'next' | 'prev'",elements:[{name:"literal",value:"'next'"},{name:"literal",value:"'prev'"}]},description:""},buttonText:{required:!1,tsType:{name:"boolean"},description:""},isHidden:{required:!0,tsType:{name:"boolean"},description:""},locale:{required:!0,tsType:{name:"union",raw:"'nb' | 'nn' | 'en'",elements:[{name:"literal",value:"'nb'"},{name:"literal",value:"'nn'"},{name:"literal",value:"'en'"}]},description:""},onClick:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};const ve=r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",height:"24",viewBox:"0 -960 960 960",width:"24"},r.createElement("path",{d:"M249.231-420.001q-24.749 0-42.374-17.625-17.624-17.625-17.624-42.374 0-24.749 17.624-42.374 17.625-17.625 42.374-17.625 24.75 0 42.374 17.625Q309.23-504.749 309.23-480q0 24.749-17.625 42.374-17.624 17.625-42.374 17.625Zm230.769 0q-24.749 0-42.374-17.625-17.625-17.625-17.625-42.374 0-24.749 17.625-42.374 17.625-17.625 42.374-17.625 24.749 0 42.374 17.625 17.625 17.625 17.625 42.374 0 24.749-17.625 42.374-17.625 17.625-42.374 17.625Zm230.769 0q-24.75 0-42.374-17.625Q650.77-455.251 650.77-480q0-24.749 17.625-42.374 17.624-17.625 42.374-17.625 24.749 0 42.374 17.625 17.624 17.625 17.624 42.374 0 24.749-17.624 42.374-17.625 17.625-42.374 17.625Z"})),ne=({className:e,...t})=>r.createElement("div",{className:T("ffe-pagination-dots"),...t},ve);ne.__docgenInfo={description:"",methods:[],displayName:"Dots"};const ae=r.forwardRef(({isActive:e,onClick:t,children:a,locale:n},o)=>r.createElement(Z,{ref:o,type:"button","aria-label":e?v[n].currentPage(a):v[n].goToPage(a),"aria-current":e,className:T("ffe-pagination-page-button",{"ffe-pagination-page-button--active":e}),onClick:t},a));ae.__docgenInfo={description:"",methods:[],displayName:"PageButton",props:{isActive:{required:!0,tsType:{name:"boolean"},description:""},onClick:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},children:{required:!0,tsType:{name:"number"},description:""},locale:{required:!0,tsType:{name:"union",raw:"'nb' | 'nn' | 'en'",elements:[{name:"literal",value:"'nb'"},{name:"literal",value:"'nn'"},{name:"literal",value:"'en'"}]},description:""}}};const y=({className:e,locale:t="nb",showRowsPerPageText:a=!0,paginationControls:n,rowsPerPageOptions:o,navigationButtonText:i=!0,ariaLabel:u,onClickPrev:l,onClickNext:m,onClickPage:g})=>{const d=h.useRef(null),p=h.useRef(null),c=de(n.totalElements,n.currentPageSize,n.currentPage);return r.createElement("div",{role:"group","aria-label":u,className:T("ffe-pagination",e)},r.createElement("div",{className:"ffe-pagination__rows"},a&&r.createElement(X,{className:"ffe-pagination__rows-item",locale:t,start:n.pageStart+1,end:n.pageEnd,total:n.totalElements}),!!(o!=null&&o.length)&&r.createElement(ee,{className:"ffe-pagination__rows-item",locale:t,rowsPerPageOptions:o,setPageSize:n.setPageSize,defaultValue:n.currentPageSize})),c&&c.length>1&&r.createElement("nav",{className:"ffe-pagination__buttons"},r.createElement(C,{className:"ffe-pagination__buttons-nav",locale:t,onClick:()=>{l==null||l();const s=Math.max(n.currentPage-1,1);q.flushSync(()=>{var w;n.setCurrentPage(s),s===1&&((w=d.current)==null||w.focus({preventScroll:!0}))})},isHidden:!n.hasPreviousPage,buttonText:i,direction:"prev"}),r.createElement("ol",{className:"ffe-pagination__page-buttons"},c.map((s,f)=>r.createElement("li",{key:f},s===P?r.createElement(ne,null):r.createElement(ae,{ref:f===0?d:f===c.length-1?p:null,key:f,locale:t,onClick:()=>{g==null||g(s),n.setCurrentPage(s)},isActive:n.currentPage===s},s)))),r.createElement(C,{className:"ffe-pagination__buttons-nav",locale:t,onClick:()=>{m==null||m();const s=Math.min(n.currentPage+1,n.numberOfPages);q.flushSync(()=>{var w;n.setCurrentPage(s),n.numberOfPages===s&&((w=p.current)==null||w.focus({preventScroll:!0}))})},isHidden:!n.hasNextPage,buttonText:i,direction:"next"})))};y.__docgenInfo={description:"",methods:[],displayName:"Pagination",props:{className:{required:!1,tsType:{name:"string"},description:""},locale:{required:!1,tsType:{name:"union",raw:"'nb' | 'nn' | 'en'",elements:[{name:"literal",value:"'nb'"},{name:"literal",value:"'nn'"},{name:"literal",value:"'en'"}]},description:"",defaultValue:{value:"'nb'",computed:!1}},showRowsPerPageText:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},paginationControls:{required:!0,tsType:{name:"signature",type:"object",raw:`{
    /**
     * The index of the first element on the current page
     */
    pageStart: number;
    /**
     * The index of the current page. Numbered from 1
     */
    currentPage: number;
    /**
     * The index of the last element on the current page
     */
    pageEnd: number;
    /**
     * The size of the page
     */
    currentPageSize: number;
    /**
     * Whether there is a next page
     */
    hasNextPage: boolean;
    /**
     * Whether there is a previous page
     */
    hasPreviousPage: boolean;
    /**
     * Function to set the page size
     */
    setPageSize: (pageSize: number) => void;
    /**
     * Function to set the current page
     */
    setCurrentPage: (page: number) => void;
    /**
     * The total number of elements
     */
    totalElements: number;
    /**
     * The total of pages
     */
    numberOfPages: number;
}`,signature:{properties:[{key:"pageStart",value:{name:"number",required:!0},description:"The index of the first element on the current page"},{key:"currentPage",value:{name:"number",required:!0},description:"The index of the current page. Numbered from 1"},{key:"pageEnd",value:{name:"number",required:!0},description:"The index of the last element on the current page"},{key:"currentPageSize",value:{name:"number",required:!0},description:"The size of the page"},{key:"hasNextPage",value:{name:"boolean",required:!0},description:"Whether there is a next page"},{key:"hasPreviousPage",value:{name:"boolean",required:!0},description:"Whether there is a previous page"},{key:"setPageSize",value:{name:"signature",type:"function",raw:"(pageSize: number) => void",signature:{arguments:[{type:{name:"number"},name:"pageSize"}],return:{name:"void"}},required:!0},description:"Function to set the page size"},{key:"setCurrentPage",value:{name:"signature",type:"function",raw:"(page: number) => void",signature:{arguments:[{type:{name:"number"},name:"page"}],return:{name:"void"}},required:!0},description:"Function to set the current page"},{key:"totalElements",value:{name:"number",required:!0},description:"The total number of elements"},{key:"numberOfPages",value:{name:"number",required:!0},description:"The total of pages"}]}},description:""},rowsPerPageOptions:{required:!1,tsType:{name:"Array",elements:[{name:"number"}],raw:"number[]"},description:""},navigationButtonText:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},ariaLabel:{required:!0,tsType:{name:"string"},description:""},onClickPrev:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onClickNext:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onClickPage:{required:!1,tsType:{name:"signature",type:"function",raw:"(page: number) => void",signature:{arguments:[{type:{name:"number"},name:"page"}],return:{name:"void"}}},description:""}}};function I(e,t=100){const[a,n]=h.useState(1),[o,i]=h.useState(t),u=e>a*o,l=a>1,m=(a-1)*o,g=u?a*o:e,d=Math.ceil(e/o);return h.useEffect(()=>{n(1)},[e]),{currentPage:a,pageStart:m,pageEnd:g,currentPageSize:o,hasNextPage:u,hasPreviousPage:l,setCurrentPage:n,setPageSize:c=>{i(c),n(1)},totalElements:e,numberOfPages:d}}const Te={title:"Komponenter/Pagination/Pagination",component:y},b={args:{ariaLabel:"Paginering",rowsPerPageOptions:[10,20,50,100]},render:function(t){const a=I(134,10);return r.createElement(y,{...t,paginationControls:a})}},S={args:{...b.args,navigationButtonText:!1},render:function(t){const[a,n]=r.useState(""),o=[{name:"Anders",age:32},{name:"Erik",age:25},{name:"Gunn",age:29},{name:"Safi",age:42},{name:"Sandra",age:42},{name:"Leif",age:12},{name:"Gunnar",age:2},{name:"Simen",age:42},{name:"Andreas",age:45},{name:"Mikkel",age:23},{name:"Nissen",age:100},{name:"Niklas",age:35},{name:"Unn",age:98}],i=r.useMemo(()=>o.filter(l=>l.name.toLowerCase().includes(a.toLowerCase())),[a]),u=I(i.length,4);return r.createElement(r.Fragment,null,r.createElement(re,{label:"Søk"},r.createElement(oe,{onChange:l=>n(l.target.value)})),r.createElement(ie,null,r.createElement(ue,null,"Utviklere"),r.createElement(se,null,r.createElement(O,null,r.createElement(_,{scope:"col"},"Navn"),r.createElement(_,{scope:"col"},"Alder"))),r.createElement(le,null,i.slice(u.pageStart,u.pageStart+u.currentPageSize).map(l=>r.createElement(O,{key:l.name},r.createElement(j,{columnHeader:"Navn"},l.name),r.createElement(j,{columnHeader:"Alder"},l.age)))),r.createElement(K,null,r.createElement(O,null,r.createElement(_,{scope:"row"},"Gjenomsnitts alder"),r.createElement(j,{columnHeader:"Gjenomsnitts alder"},i.reduce((l,m)=>l+m.age,0)/i.length)))),r.createElement(y,{...t,paginationControls:u}))}},x={args:{...b.args,navigationButtonText:!1},render:function(t){const a=I(134,10);return r.createElement(y,{...t,paginationControls:a})}},E={args:{...b.args,showRowsPerPageText:!1,rowsPerPageOptions:void 0},render:function(t){const a=I(134,10);return r.createElement(y,{...t,paginationControls:a})}};var L,H,A;b.parameters={...b.parameters,docs:{...(L=b.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    ariaLabel: 'Paginering',
    rowsPerPageOptions: [10, 20, 50, 100]
  },
  render: function Render(args) {
    const paginationControls = usePagination(134, 10);
    return <Pagination {...args} paginationControls={paginationControls} />;
  }
}`,...(A=(H=b.parameters)==null?void 0:H.docs)==null?void 0:A.source}}};var G,B,$;S.parameters={...S.parameters,docs:{...(G=S.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    ...Standard.args,
    navigationButtonText: false
  },
  render: function Render(args) {
    const [search, setSearch] = React.useState('');
    const data = [{
      name: 'Anders',
      age: 32
    }, {
      name: 'Erik',
      age: 25
    }, {
      name: 'Gunn',
      age: 29
    }, {
      name: 'Safi',
      age: 42
    }, {
      name: 'Sandra',
      age: 42
    }, {
      name: 'Leif',
      age: 12
    }, {
      name: 'Gunnar',
      age: 2
    }, {
      name: 'Simen',
      age: 42
    }, {
      name: 'Andreas',
      age: 45
    }, {
      name: 'Mikkel',
      age: 23
    }, {
      name: 'Nissen',
      age: 100
    }, {
      name: 'Niklas',
      age: 35
    }, {
      name: 'Unn',
      age: 98
    }];
    const filteredData = React.useMemo(() => {
      return data.filter(it => it.name.toLowerCase().includes(search.toLowerCase()));
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [search]);
    const paginationControls = usePagination(filteredData.length, 4);
    return <>
                <InputGroup label={'Søk'}>
                    <Input onChange={e => setSearch(e.target.value)} />
                </InputGroup>
                <Table>
                    <TableCaption>Utviklere</TableCaption>
                    <TableHead>
                        <TableRow>
                            <TableHeaderCell scope="col">Navn</TableHeaderCell>
                            <TableHeaderCell scope="col">Alder</TableHeaderCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {filteredData.slice(paginationControls.pageStart, paginationControls.pageStart + paginationControls.currentPageSize).map(it => <TableRow key={it.name}>
                                    <TableDataCell columnHeader="Navn">
                                        {it.name}
                                    </TableDataCell>
                                    <TableDataCell columnHeader="Alder">
                                        {it.age}
                                    </TableDataCell>
                                </TableRow>)}
                    </TableBody>
                    <TableFoot>
                        <TableRow>
                            <TableHeaderCell scope="row">
                                Gjenomsnitts alder
                            </TableHeaderCell>
                            <TableDataCell columnHeader="Gjenomsnitts alder">
                                {filteredData.reduce((sum, curr) => sum + curr.age, 0) / filteredData.length}
                            </TableDataCell>
                        </TableRow>
                    </TableFoot>
                </Table>
                <Pagination {...args} paginationControls={paginationControls} />
            </>;
  }
}`,...($=(B=S.parameters)==null?void 0:B.docs)==null?void 0:$.source}}};var F,W,Y;x.parameters={...x.parameters,docs:{...(F=x.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    ...Standard.args,
    navigationButtonText: false
  },
  render: function Render(args) {
    const paginationControls = usePagination(134, 10);
    return <Pagination {...args} paginationControls={paginationControls} />;
  }
}`,...(Y=(W=x.parameters)==null?void 0:W.docs)==null?void 0:Y.source}}};var Q,V,U;E.parameters={...E.parameters,docs:{...(Q=E.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  args: {
    ...Standard.args,
    showRowsPerPageText: false,
    rowsPerPageOptions: undefined
  },
  render: function Render(args) {
    const paginationControls = usePagination(134, 10);
    return <Pagination {...args} paginationControls={paginationControls} />;
  }
}`,...(U=(V=E.parameters)==null?void 0:V.docs)==null?void 0:U.source}}};const Pe=["Standard","WithTable","NoNavigationText","NoShowRowsPerPageText"],je=Object.freeze(Object.defineProperty({__proto__:null,NoNavigationText:x,NoShowRowsPerPageText:E,Standard:b,WithTable:S,__namedExportsOrder:Pe,default:Te},Symbol.toStringTag,{value:"Module"}));export{x as N,je as P,b as S,S as W,E as a};
