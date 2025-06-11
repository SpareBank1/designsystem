import{R as t,r as h}from"./index-DQDNmYQF.js";import{r as C}from"./index-CGBZXJ9a.js";import{c as P}from"./index-QCImZZ3W.js";import{P as ne}from"./Paragraph-DEYlXMQQ.js";import{D as ae}from"./Dropdown-BUj1Bq6J.js";import{S as U}from"./SecondaryButton-C30B7eR2.js";import{I as q}from"./Icon-BqsuuMcG.js";import{I as te}from"./InputGroup-DOKvm3eQ.js";import{I as re}from"./Input-DYak8_-P.js";import{T as oe,a as se,b as z,c as j,d as ie,e as D}from"./TableRow-D0Di_mB0.js";import{T as ue}from"./TableCaption-BRZwXCyz.js";var _=function(){return _=Object.assign||function(e){for(var r,a=1,n=arguments.length;a<n;a++){r=arguments[a];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o])}return e},_.apply(this,arguments)},le=function(e,r){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(a[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,n=Object.getOwnPropertySymbols(e);o<n.length;o++)r.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(a[n[o]]=e[n[o]]);return a},Z=function(e){var r=e.className,a=le(e,["className"]);return t.createElement("tfoot",_({className:P("ffe-table__foot",r)},a))};Z.__docgenInfo={description:"",methods:[],displayName:"TableFoot"};var me="480px";const ce=()=>{const[e,r]=h.useState([window.innerWidth,window.innerHeight]);return h.useEffect(()=>{const a=()=>r([window.innerWidth,window.innerHeight]);return a(),window.addEventListener("resize",a),()=>window.removeEventListener("resize",a)},[]),e},v="...",M=parseInt(me,10),S=(e,r)=>{const a=r-e+1;return Array.from({length:a},(n,o)=>o+e)};function ge(e,r,a,n=1){const[o]=ce();return h.useMemo(()=>{const s=Math.ceil(e/r);if(n+5>=s)return S(1,s);const u=1,c=s;if(o>M){const g=Math.max(a-n,1),d=Math.min(a+n,s),p=g>2,m=d<s-1;if(!p&&m){let i;return o<=M?i=1+n:i=2+2*n,[...S(1,i),v,s]}if(p&&!m){let i;o<=M?i=1+n:i=2+2*n;const f=S(s-i+1,s);return[u,v,...f]}if(p&&m){if(o<=M)return[u,v,a,v,c];const i=S(g,d);return[u,v,...i,v,c]}}else{const g=Math.min(s-2,a-1),d=Math.max(g,1),p=Math.max(3,a+1),m=Math.min(p,s);return S(d,m)}},[e,r,n,a,o])}const de={rowsPerPageLabel:["Vis","rader per side"],showing:(e,r,a)=>`Viser ${e}-${r} av ${a} rader`,previous:"Forrige",next:"Neste",goToPage:e=>`Gå til side ${e}`,currentPage:e=>`Gjeldende side, side ${e}`},pe={rowsPerPageLabel:["Vis","rader per side"],showing:(e,r,a)=>`Viser ${e}-${r} av ${a} rader`,previous:"Forrige",next:"Neste",goToPage:e=>`Gå til side ${e}`,currentPage:e=>`Gjeldande side, side ${e}`},fe={rowsPerPageLabel:["Show","rows per page"],showing:(e,r,a)=>`Showing ${e}-${r} of ${a} rows`,previous:"Previous",next:"Next",goToPage:e=>`Go to page ${e}`,currentPage:e=>`Current page, Page ${e}`},T={nb:de,nn:pe,en:fe},K=({locale:e,start:r,end:a,total:n,className:o,...s})=>t.createElement(ne,{className:P("ffe-pagination-info",o),...s},T[e].showing(r,a,n));K.__docgenInfo={description:"",methods:[],displayName:"Info",props:{locale:{required:!0,tsType:{name:"union",raw:"'nb' | 'nn' | 'en'",elements:[{name:"literal",value:"'nb'"},{name:"literal",value:"'nn'"},{name:"literal",value:"'en'"}]},description:""},start:{required:!0,tsType:{name:"number"},description:""},end:{required:!0,tsType:{name:"number"},description:""},total:{required:!0,tsType:{name:"number"},description:""}}};const X=({locale:e,defaultValue:r,setPageSize:a,rowsPerPageOptions:n,className:o,...s})=>t.createElement("div",{className:P("ffe-pagination-rows-per-page",o),...s},t.createElement("span",{"aria-hidden":!0},T[e].rowsPerPageLabel[0]),t.createElement(ae,{"aria-label":T[e].rowsPerPageLabel.join(" "),defaultValue:r,onChange:l=>a(Number(l.target.value))},n.map(l=>t.createElement("option",{key:l,value:l},l))),t.createElement("span",{"aria-hidden":!0},T[e].rowsPerPageLabel[1]));X.__docgenInfo={description:"",methods:[],displayName:"PerPageDropdown",props:{locale:{required:!0,tsType:{name:"union",raw:"'nb' | 'nn' | 'en'",elements:[{name:"literal",value:"'nb'"},{name:"literal",value:"'nn'"},{name:"literal",value:"'en'"}]},description:""},defaultValue:{required:!0,tsType:{name:"number"},description:""},setPageSize:{required:!0,tsType:{name:"signature",type:"function",raw:"(pageSize: number) => void",signature:{arguments:[{type:{name:"number"},name:"pageSize"}],return:{name:"void"}}},description:""},rowsPerPageOptions:{required:!0,tsType:{name:"Array",elements:[{name:"number"}],raw:"number[]"},description:""}}};const k="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgLTk2MCA5NjAgOTYwIiB3aWR0aD0iMjQiPjxwYXRoIGQ9Im00MTguMTUzLTQ4MCAxNjIuOTIzIDE2Mi45MjRxOC4zMDggOC4zMDcgOC41IDIwLjg4NC4xOTMgMTIuNTc2LTguNSAyMS4yNjgtOC42OTIgOC42OTMtMjEuMDc2IDguNjkzdC0yMS4wNzYtOC42OTNMMzU5LjE1NS00NTQuNjkzcS01LjYxNi01LjYxNS03LjkyMy0xMS44NDYtMi4zMDgtNi4yMy0yLjMwOC0xMy40NjF0Mi4zMDgtMTMuNDYxcTIuMzA3LTYuMjMxIDcuOTIzLTExLjg0NmwxNzkuNzY5LTE3OS43NjlxOC4zMDctOC4zMDggMjAuODg0LTguNSAxMi41NzYtLjE5MyAyMS4yNjggOC41IDguNjkzIDguNjkyIDguNjkzIDIxLjA3NnQtOC42OTMgMjEuMDc2TDQxOC4xNTMtNDgwWiIvPjwvc3ZnPg==",O=({direction:e,buttonText:r,isHidden:a,locale:n,onClick:o,className:s})=>t.createElement("div",{className:P(s,`ffe-pagination-navigation-block ffe-pagination-navigation-block--${e}`,{"ffe-pagination-navigation-block--hidden":a,"ffe-pagination-navigation-block--no-text":!r})},t.createElement(U,{type:"button",leftIcon:e==="prev"?t.createElement(q,{fileUrl:k,size:"md"}):void 0,rightIcon:e==="next"?t.createElement(q,{fileUrl:k,size:"md"}):void 0,onClick:o},r&&t.createElement("span",{className:"ffe-pagination-navigation-block__button-text"},e==="next"?T[n].next:T[n].previous)));O.__docgenInfo={description:"",methods:[],displayName:"NavigationBlock",props:{direction:{required:!0,tsType:{name:"union",raw:"'next' | 'prev'",elements:[{name:"literal",value:"'next'"},{name:"literal",value:"'prev'"}]},description:""},buttonText:{required:!1,tsType:{name:"boolean"},description:""},isHidden:{required:!0,tsType:{name:"boolean"},description:""},locale:{required:!0,tsType:{name:"union",raw:"'nb' | 'nn' | 'en'",elements:[{name:"literal",value:"'nb'"},{name:"literal",value:"'nn'"},{name:"literal",value:"'en'"}]},description:""},onClick:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};const be=t.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",height:"24",viewBox:"0 -960 960 960",width:"24"},t.createElement("path",{d:"M249.231-420.001q-24.749 0-42.374-17.625-17.624-17.625-17.624-42.374 0-24.749 17.624-42.374 17.625-17.625 42.374-17.625 24.75 0 42.374 17.625Q309.23-504.749 309.23-480q0 24.749-17.625 42.374-17.624 17.625-42.374 17.625Zm230.769 0q-24.749 0-42.374-17.625-17.625-17.625-17.625-42.374 0-24.749 17.625-42.374 17.625-17.625 42.374-17.625 24.749 0 42.374 17.625 17.625 17.625 17.625 42.374 0 24.749-17.625 42.374-17.625 17.625-42.374 17.625Zm230.769 0q-24.75 0-42.374-17.625Q650.77-455.251 650.77-480q0-24.749 17.625-42.374 17.624-17.625 42.374-17.625 24.749 0 42.374 17.625 17.624 17.625 17.624 42.374 0 24.749-17.624 42.374-17.625 17.625-42.374 17.625Z"})),J=({className:e,...r})=>t.createElement("div",{className:P("ffe-pagination-dots"),...r},be);J.__docgenInfo={description:"",methods:[],displayName:"Dots"};const ee=t.forwardRef(({isActive:e,onClick:r,children:a,locale:n},o)=>t.createElement(U,{ref:o,type:"button","aria-label":e?T[n].currentPage(a):T[n].goToPage(a),"aria-current":e,className:P("ffe-pagination-page-button",{"ffe-pagination-page-button--active":e}),onClick:r},a));ee.__docgenInfo={description:"",methods:[],displayName:"PageButton",props:{isActive:{required:!0,tsType:{name:"boolean"},description:""},onClick:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},children:{required:!0,tsType:{name:"number"},description:""},locale:{required:!0,tsType:{name:"union",raw:"'nb' | 'nn' | 'en'",elements:[{name:"literal",value:"'nb'"},{name:"literal",value:"'nn'"},{name:"literal",value:"'en'"}]},description:""}}};const y=({className:e,locale:r="nb",showRowsPerPageText:a=!0,paginationControls:n,rowsPerPageOptions:o,navigationButtonText:s=!0,ariaLabel:l,onClickPrev:u,onClickNext:c,onClickPage:g})=>{const d=h.useRef(null),p=h.useRef(null),m=ge(n.totalElements,n.currentPageSize,n.currentPage);return t.createElement("div",{role:"group","aria-label":l,className:P("ffe-pagination",e)},t.createElement("div",{className:"ffe-pagination__rows"},a&&t.createElement(K,{className:"ffe-pagination__rows-item",locale:r,start:n.pageStart+1,end:n.pageEnd,total:n.totalElements}),!!(o!=null&&o.length)&&t.createElement(X,{className:"ffe-pagination__rows-item",locale:r,rowsPerPageOptions:o,setPageSize:n.setPageSize,defaultValue:n.currentPageSize})),m&&m.length>1&&t.createElement("nav",{className:"ffe-pagination__buttons"},t.createElement(O,{className:"ffe-pagination__buttons-nav",locale:r,onClick:()=>{u==null||u();const i=Math.max(n.currentPage-1,1);C.flushSync(()=>{var w;n.setCurrentPage(i),i===1&&((w=d.current)==null||w.focus({preventScroll:!0}))})},isHidden:!n.hasPreviousPage,buttonText:s,direction:"prev"}),t.createElement("ol",{className:"ffe-pagination__page-buttons"},m.map((i,f)=>t.createElement("li",{key:f},i===v?t.createElement(J,null):t.createElement(ee,{ref:f===0?d:f===m.length-1?p:null,key:f,locale:r,onClick:()=>{g==null||g(i),n.setCurrentPage(i)},isActive:n.currentPage===i},i)))),t.createElement(O,{className:"ffe-pagination__buttons-nav",locale:r,onClick:()=>{c==null||c();const i=Math.min(n.currentPage+1,n.numberOfPages);C.flushSync(()=>{var w;n.setCurrentPage(i),n.numberOfPages===i&&((w=p.current)==null||w.focus({preventScroll:!0}))})},isHidden:!n.hasNextPage,buttonText:s,direction:"next"})))};y.__docgenInfo={description:"",methods:[],displayName:"Pagination",props:{className:{required:!1,tsType:{name:"string"},description:""},locale:{required:!1,tsType:{name:"union",raw:"'nb' | 'nn' | 'en'",elements:[{name:"literal",value:"'nb'"},{name:"literal",value:"'nn'"},{name:"literal",value:"'en'"}]},description:"",defaultValue:{value:"'nb'",computed:!1}},showRowsPerPageText:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},paginationControls:{required:!0,tsType:{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"pageStart",value:{name:"number",required:!0},description:"The index of the first element on the current page"},{key:"currentPage",value:{name:"number",required:!0},description:"The index of the current page. Numbered from 1"},{key:"pageEnd",value:{name:"number",required:!0},description:"The index of the last element on the current page"},{key:"currentPageSize",value:{name:"number",required:!0},description:"The size of the page"},{key:"hasNextPage",value:{name:"boolean",required:!0},description:"Whether there is a next page"},{key:"hasPreviousPage",value:{name:"boolean",required:!0},description:"Whether there is a previous page"},{key:"setPageSize",value:{name:"signature",type:"function",raw:"(pageSize: number) => void",signature:{arguments:[{type:{name:"number"},name:"pageSize"}],return:{name:"void"}},required:!0},description:"Function to set the page size"},{key:"setCurrentPage",value:{name:"signature",type:"function",raw:"(page: number) => void",signature:{arguments:[{type:{name:"number"},name:"page"}],return:{name:"void"}},required:!0},description:"Function to set the current page"},{key:"totalElements",value:{name:"number",required:!0},description:"The total number of elements"},{key:"numberOfPages",value:{name:"number",required:!0},description:"The total of pages"}]}},description:""},rowsPerPageOptions:{required:!1,tsType:{name:"Array",elements:[{name:"number"}],raw:"number[]"},description:""},navigationButtonText:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},ariaLabel:{required:!0,tsType:{name:"string"},description:""},onClickPrev:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onClickNext:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onClickPage:{required:!1,tsType:{name:"signature",type:"function",raw:"(page: number) => void",signature:{arguments:[{type:{name:"number"},name:"page"}],return:{name:"void"}}},description:""}}};function I(e,r=100){const[a,n]=h.useState(1),[o,s]=h.useState(r),l=e>a*o,u=a>1,c=(a-1)*o,g=l?a*o:e,d=Math.ceil(e/o);return h.useEffect(()=>{n(1)},[e]),{currentPage:a,pageStart:c,pageEnd:g,currentPageSize:o,hasNextPage:l,hasPreviousPage:u,setCurrentPage:n,setPageSize:m=>{s(m),n(1)},totalElements:e,numberOfPages:d}}const he={title:"Komponenter/Pagination/Pagination",component:y},b={args:{ariaLabel:"Paginering",rowsPerPageOptions:[10,20,50,100]},render:function(r){const a=I(134,10);return t.createElement(y,{...r,paginationControls:a})}},N={args:{...b.args,navigationButtonText:!1},render:function(r){const[a,n]=t.useState(""),o=[{name:"Anders",age:32},{name:"Erik",age:25},{name:"Gunn",age:29},{name:"Safi",age:42},{name:"Sandra",age:42},{name:"Leif",age:12},{name:"Gunnar",age:2},{name:"Simen",age:42},{name:"Andreas",age:45},{name:"Mikkel",age:23},{name:"Nissen",age:100},{name:"Niklas",age:35},{name:"Unn",age:98}],s=t.useMemo(()=>o.filter(u=>u.name.toLowerCase().includes(a.toLowerCase())),[a]),l=I(s.length,4);return t.createElement(t.Fragment,null,t.createElement(te,{label:"Søk"},t.createElement(re,{onChange:u=>n(u.target.value)})),t.createElement(oe,null,t.createElement(ue,null,"Utviklere"),t.createElement(se,null,t.createElement(z,null,t.createElement(j,{scope:"col"},"Navn"),t.createElement(j,{scope:"col"},"Alder"))),t.createElement(ie,null,s.slice(l.pageStart,l.pageStart+l.currentPageSize).map(u=>t.createElement(z,{key:u.name},t.createElement(D,{columnHeader:"Navn"},u.name),t.createElement(D,{columnHeader:"Alder"},u.age)))),t.createElement(Z,null,t.createElement(z,null,t.createElement(j,{scope:"row"},"Gjenomsnitts alder"),t.createElement(D,{columnHeader:"Gjenomsnitts alder"},s.reduce((u,c)=>u+c.age,0)/s.length)))),t.createElement(y,{...r,paginationControls:l}))}},x={args:{...b.args,navigationButtonText:!1},render:function(r){const a=I(134,10);return t.createElement(y,{...r,paginationControls:a})}},E={args:{...b.args,showRowsPerPageText:!1,rowsPerPageOptions:void 0},render:function(r){const a=I(134,10);return t.createElement(y,{...r,paginationControls:a})}};var L,R,H;b.parameters={...b.parameters,docs:{...(L=b.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    ariaLabel: 'Paginering',
    rowsPerPageOptions: [10, 20, 50, 100]
  },
  render: function Render(args) {
    const paginationControls = usePagination(134, 10);
    return <Pagination {...args} paginationControls={paginationControls} />;
  }
}`,...(H=(R=b.parameters)==null?void 0:R.docs)==null?void 0:H.source}}};var A,G,B;N.parameters={...N.parameters,docs:{...(A=N.parameters)==null?void 0:A.docs,source:{originalSource:`{
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
}`,...(B=(G=N.parameters)==null?void 0:G.docs)==null?void 0:B.source}}};var $,F,W;x.parameters={...x.parameters,docs:{...($=x.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    ...Standard.args,
    navigationButtonText: false
  },
  render: function Render(args) {
    const paginationControls = usePagination(134, 10);
    return <Pagination {...args} paginationControls={paginationControls} />;
  }
}`,...(W=(F=x.parameters)==null?void 0:F.docs)==null?void 0:W.source}}};var Y,Q,V;E.parameters={...E.parameters,docs:{...(Y=E.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  args: {
    ...Standard.args,
    showRowsPerPageText: false,
    rowsPerPageOptions: undefined
  },
  render: function Render(args) {
    const paginationControls = usePagination(134, 10);
    return <Pagination {...args} paginationControls={paginationControls} />;
  }
}`,...(V=(Q=E.parameters)==null?void 0:Q.docs)==null?void 0:V.source}}};const Te=["Standard","WithTable","NoNavigationText","NoShowRowsPerPageText"],je=Object.freeze(Object.defineProperty({__proto__:null,NoNavigationText:x,NoShowRowsPerPageText:E,Standard:b,WithTable:N,__namedExportsOrder:Te,default:he},Symbol.toStringTag,{value:"Module"}));export{x as N,je as P,b as S,N as W,E as a};
