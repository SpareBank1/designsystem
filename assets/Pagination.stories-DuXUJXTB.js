import{R as n,r as T}from"./index-DQDNmYQF.js";import{r as j}from"./index-DMkFJtLM.js";import{c as P}from"./index-D2FocPV0.js";import{P as ee}from"./Paragraph-j_y_RLec.js";import{D as ne}from"./Dropdown-Bz33sHZX.js";import{S as V}from"./SecondaryButton-BgGQzghk.js";import{I as k}from"./Icon-C3s1OswO.js";import{I as ae}from"./InputGroup-BOYEkbY1.js";import{I as te}from"./Input-COhs6psf.js";import{T as re,a as oe,b as z,c as D,d as se,e as C}from"./TableRow-BcL63Zqx.js";import{T as ie}from"./TableCaption-_xuaj7Vl.js";const U=({className:e,...r})=>n.createElement("tfoot",{className:P("ffe-table__foot",e),...r});U.__docgenInfo={description:"",methods:[],displayName:"TableFoot"};const ue="480px",le=()=>{const[e,r]=T.useState([window.innerWidth,window.innerHeight]);return T.useEffect(()=>{const a=()=>r([window.innerWidth,window.innerHeight]);return a(),window.addEventListener("resize",a),()=>window.removeEventListener("resize",a)},[]),e},v="...",M=parseInt(ue,10),S=(e,r)=>{const a=r-e+1;return Array.from({length:a},(t,o)=>o+e)};function me(e,r,a,t=1){const[o]=le();return T.useMemo(()=>{const s=Math.ceil(e/r);if(t+5>=s)return S(1,s);const u=1,c=s;if(o>M){const g=Math.max(a-t,1),d=Math.min(a+t,s),p=g>2,m=d<s-1;if(!p&&m){let i;return o<=M?i=1+t:i=2+2*t,[...S(1,i),v,s]}if(p&&!m){let i;o<=M?i=1+t:i=2+2*t;const f=S(s-i+1,s);return[u,v,...f]}if(p&&m){if(o<=M)return[u,v,a,v,c];const i=S(g,d);return[u,v,...i,v,c]}}else{const g=Math.min(s-2,a-1),d=Math.max(g,1),p=Math.max(3,a+1),m=Math.min(p,s);return S(d,m)}},[e,r,t,a,o])}const ce={rowsPerPageLabel:["Vis","rader per side"],showing:(e,r,a)=>`Viser ${e}-${r} av ${a} rader`,previous:"Forrige",next:"Neste",goToPage:e=>`Gå til side ${e}`,currentPage:e=>`Gjeldende side, side ${e}`},ge={rowsPerPageLabel:["Vis","rader per side"],showing:(e,r,a)=>`Viser ${e}-${r} av ${a} rader`,previous:"Forrige",next:"Neste",goToPage:e=>`Gå til side ${e}`,currentPage:e=>`Gjeldande side, side ${e}`},de={rowsPerPageLabel:["Show","rows per page"],showing:(e,r,a)=>`Showing ${e}-${r} of ${a} rows`,previous:"Previous",next:"Next",goToPage:e=>`Go to page ${e}`,currentPage:e=>`Current page, Page ${e}`},h={nb:ce,nn:ge,en:de},Z=({locale:e,start:r,end:a,total:t,className:o,...s})=>n.createElement(ee,{className:P("ffe-pagination-info",o),...s},h[e].showing(r,a,t));Z.__docgenInfo={description:"",methods:[],displayName:"Info",props:{locale:{required:!0,tsType:{name:"union",raw:"'nb' | 'nn' | 'en'",elements:[{name:"literal",value:"'nb'"},{name:"literal",value:"'nn'"},{name:"literal",value:"'en'"}]},description:""},start:{required:!0,tsType:{name:"number"},description:""},end:{required:!0,tsType:{name:"number"},description:""},total:{required:!0,tsType:{name:"number"},description:""}}};const K=({locale:e,defaultValue:r,setPageSize:a,rowsPerPageOptions:t,className:o,...s})=>n.createElement("div",{className:P("ffe-pagination-rows-per-page",o),...s},n.createElement("span",{"aria-hidden":!0},h[e].rowsPerPageLabel[0]),n.createElement(ne,{"aria-label":h[e].rowsPerPageLabel.join(" "),defaultValue:r,onChange:l=>a(Number(l.target.value))},t.map(l=>n.createElement("option",{key:l,value:l},l))),n.createElement("span",{"aria-hidden":!0},h[e].rowsPerPageLabel[1]));K.__docgenInfo={description:"",methods:[],displayName:"PerPageDropdown",props:{locale:{required:!0,tsType:{name:"union",raw:"'nb' | 'nn' | 'en'",elements:[{name:"literal",value:"'nb'"},{name:"literal",value:"'nn'"},{name:"literal",value:"'en'"}]},description:""},defaultValue:{required:!0,tsType:{name:"number"},description:""},setPageSize:{required:!0,tsType:{name:"signature",type:"function",raw:"(pageSize: number) => void",signature:{arguments:[{type:{name:"number"},name:"pageSize"}],return:{name:"void"}}},description:""},rowsPerPageOptions:{required:!0,tsType:{name:"Array",elements:[{name:"number"}],raw:"number[]"},description:""}}};const _="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgLTk2MCA5NjAgOTYwIiB3aWR0aD0iMjQiPjxwYXRoIGQ9Im00MTguMTUzLTQ4MCAxNjIuOTIzIDE2Mi45MjRxOC4zMDggOC4zMDcgOC41IDIwLjg4NC4xOTMgMTIuNTc2LTguNSAyMS4yNjgtOC42OTIgOC42OTMtMjEuMDc2IDguNjkzdC0yMS4wNzYtOC42OTNMMzU5LjE1NS00NTQuNjkzcS01LjYxNi01LjYxNS03LjkyMy0xMS44NDYtMi4zMDgtNi4yMy0yLjMwOC0xMy40NjF0Mi4zMDgtMTMuNDYxcTIuMzA3LTYuMjMxIDcuOTIzLTExLjg0NmwxNzkuNzY5LTE3OS43NjlxOC4zMDctOC4zMDggMjAuODg0LTguNSAxMi41NzYtLjE5MyAyMS4yNjggOC41IDguNjkzIDguNjkyIDguNjkzIDIxLjA3NnQtOC42OTMgMjEuMDc2TDQxOC4xNTMtNDgwWiIvPjwvc3ZnPg==",q=({direction:e,buttonText:r,isHidden:a,locale:t,onClick:o,className:s})=>n.createElement("div",{className:P(s,`ffe-pagination-navigation-block ffe-pagination-navigation-block--${e}`,{"ffe-pagination-navigation-block--hidden":a,"ffe-pagination-navigation-block--no-text":!r})},n.createElement(V,{type:"button",leftIcon:e==="prev"?n.createElement(k,{fileUrl:_,size:"md"}):void 0,rightIcon:e==="next"?n.createElement(k,{fileUrl:_,size:"md"}):void 0,onClick:o},r&&n.createElement("span",{className:"ffe-pagination-navigation-block__button-text"},e==="next"?h[t].next:h[t].previous)));q.__docgenInfo={description:"",methods:[],displayName:"NavigationBlock",props:{direction:{required:!0,tsType:{name:"union",raw:"'next' | 'prev'",elements:[{name:"literal",value:"'next'"},{name:"literal",value:"'prev'"}]},description:""},buttonText:{required:!1,tsType:{name:"boolean"},description:""},isHidden:{required:!0,tsType:{name:"boolean"},description:""},locale:{required:!0,tsType:{name:"union",raw:"'nb' | 'nn' | 'en'",elements:[{name:"literal",value:"'nb'"},{name:"literal",value:"'nn'"},{name:"literal",value:"'en'"}]},description:""},onClick:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};const pe=n.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",height:"24",viewBox:"0 -960 960 960",width:"24"},n.createElement("path",{d:"M249.231-420.001q-24.749 0-42.374-17.625-17.624-17.625-17.624-42.374 0-24.749 17.624-42.374 17.625-17.625 42.374-17.625 24.75 0 42.374 17.625Q309.23-504.749 309.23-480q0 24.749-17.625 42.374-17.624 17.625-42.374 17.625Zm230.769 0q-24.749 0-42.374-17.625-17.625-17.625-17.625-42.374 0-24.749 17.625-42.374 17.625-17.625 42.374-17.625 24.749 0 42.374 17.625 17.625 17.625 17.625 42.374 0 24.749-17.625 42.374-17.625 17.625-42.374 17.625Zm230.769 0q-24.75 0-42.374-17.625Q650.77-455.251 650.77-480q0-24.749 17.625-42.374 17.624-17.625 42.374-17.625 24.749 0 42.374 17.625 17.624 17.625 17.624 42.374 0 24.749-17.624 42.374-17.625 17.625-42.374 17.625Z"})),X=({className:e,...r})=>n.createElement("div",{className:P("ffe-pagination-dots"),...r},pe);X.__docgenInfo={description:"",methods:[],displayName:"Dots"};const J=n.forwardRef(({isActive:e,onClick:r,children:a,locale:t},o)=>n.createElement(V,{ref:o,type:"button","aria-label":e?h[t].currentPage(a):h[t].goToPage(a),"aria-current":e,className:P("ffe-pagination-page-button",{"ffe-pagination-page-button--active":e}),onClick:r},a));J.__docgenInfo={description:"",methods:[],displayName:"PageButton",props:{isActive:{required:!0,tsType:{name:"boolean"},description:""},onClick:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},children:{required:!0,tsType:{name:"number"},description:""},locale:{required:!0,tsType:{name:"union",raw:"'nb' | 'nn' | 'en'",elements:[{name:"literal",value:"'nb'"},{name:"literal",value:"'nn'"},{name:"literal",value:"'en'"}]},description:""}}};const w=({className:e,locale:r="nb",showRowsPerPageText:a=!0,paginationControls:t,rowsPerPageOptions:o,navigationButtonText:s=!0,ariaLabel:l,onClickPrev:u,onClickNext:c,onClickPage:g})=>{const d=T.useRef(null),p=T.useRef(null),m=me(t.totalElements,t.currentPageSize,t.currentPage);return n.createElement("div",{role:"group","aria-label":l,className:P("ffe-pagination",e)},n.createElement("div",{className:"ffe-pagination__rows"},a&&n.createElement(Z,{className:"ffe-pagination__rows-item",locale:r,start:t.pageStart+1,end:t.pageEnd,total:t.totalElements}),!!(o!=null&&o.length)&&n.createElement(K,{className:"ffe-pagination__rows-item",locale:r,rowsPerPageOptions:o,setPageSize:t.setPageSize,defaultValue:t.currentPageSize})),m&&m.length>1&&n.createElement("nav",{className:"ffe-pagination__buttons"},n.createElement(q,{className:"ffe-pagination__buttons-nav",locale:r,onClick:()=>{u==null||u();const i=Math.max(t.currentPage-1,1);j.flushSync(()=>{var y;t.setCurrentPage(i),i===1&&((y=d.current)==null||y.focus({preventScroll:!0}))})},isHidden:!t.hasPreviousPage,buttonText:s,direction:"prev"}),n.createElement("ol",{className:"ffe-pagination__page-buttons"},m.map((i,f)=>n.createElement("li",{key:f},i===v?n.createElement(X,null):n.createElement(J,{ref:f===0?d:f===m.length-1?p:null,key:f,locale:r,onClick:()=>{g==null||g(i),t.setCurrentPage(i)},isActive:t.currentPage===i},i)))),n.createElement(q,{className:"ffe-pagination__buttons-nav",locale:r,onClick:()=>{c==null||c();const i=Math.min(t.currentPage+1,t.numberOfPages);j.flushSync(()=>{var y;t.setCurrentPage(i),t.numberOfPages===i&&((y=p.current)==null||y.focus({preventScroll:!0}))})},isHidden:!t.hasNextPage,buttonText:s,direction:"next"})))};w.__docgenInfo={description:"",methods:[],displayName:"Pagination",props:{className:{required:!1,tsType:{name:"string"},description:""},locale:{required:!1,tsType:{name:"union",raw:"'nb' | 'nn' | 'en'",elements:[{name:"literal",value:"'nb'"},{name:"literal",value:"'nn'"},{name:"literal",value:"'en'"}]},description:"",defaultValue:{value:"'nb'",computed:!1}},showRowsPerPageText:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},paginationControls:{required:!0,tsType:{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"pageStart",value:{name:"number",required:!0},description:"The index of the first element on the current page"},{key:"currentPage",value:{name:"number",required:!0},description:"The index of the current page. Numbered from 1"},{key:"pageEnd",value:{name:"number",required:!0},description:"The index of the last element on the current page"},{key:"currentPageSize",value:{name:"number",required:!0},description:"The size of the page"},{key:"hasNextPage",value:{name:"boolean",required:!0},description:"Whether there is a next page"},{key:"hasPreviousPage",value:{name:"boolean",required:!0},description:"Whether there is a previous page"},{key:"setPageSize",value:{name:"signature",type:"function",raw:"(pageSize: number) => void",signature:{arguments:[{type:{name:"number"},name:"pageSize"}],return:{name:"void"}},required:!0},description:"Function to set the page size"},{key:"setCurrentPage",value:{name:"signature",type:"function",raw:"(page: number) => void",signature:{arguments:[{type:{name:"number"},name:"page"}],return:{name:"void"}},required:!0},description:"Function to set the current page"},{key:"totalElements",value:{name:"number",required:!0},description:"The total number of elements"},{key:"numberOfPages",value:{name:"number",required:!0},description:"The total of pages"}]}},description:""},rowsPerPageOptions:{required:!1,tsType:{name:"Array",elements:[{name:"number"}],raw:"number[]"},description:""},navigationButtonText:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},ariaLabel:{required:!0,tsType:{name:"string"},description:""},onClickPrev:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onClickNext:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onClickPage:{required:!1,tsType:{name:"signature",type:"function",raw:"(page: number) => void",signature:{arguments:[{type:{name:"number"},name:"page"}],return:{name:"void"}}},description:""}}};function I(e,r=100){const[a,t]=T.useState(1),[o,s]=T.useState(r),l=e>a*o,u=a>1,c=(a-1)*o,g=l?a*o:e,d=Math.ceil(e/o);return T.useEffect(()=>{t(1)},[e]),{currentPage:a,pageStart:c,pageEnd:g,currentPageSize:o,hasNextPage:l,hasPreviousPage:u,setCurrentPage:t,setPageSize:m=>{s(m),t(1)},totalElements:e,numberOfPages:d}}const fe={title:"Komponenter/Pagination/Pagination",component:w},b={args:{ariaLabel:"Paginering",rowsPerPageOptions:[10,20,50,100]},render:function(r){const a=I(134,10);return n.createElement(w,{...r,paginationControls:a})}},N={args:{...b.args,navigationButtonText:!1},render:function(r){const[a,t]=n.useState(""),o=[{name:"Anders",age:32},{name:"Erik",age:25},{name:"Gunn",age:29},{name:"Safi",age:42},{name:"Sandra",age:42},{name:"Leif",age:12},{name:"Gunnar",age:2},{name:"Simen",age:42},{name:"Andreas",age:45},{name:"Mikkel",age:23},{name:"Nissen",age:100},{name:"Niklas",age:35},{name:"Unn",age:98}],s=n.useMemo(()=>o.filter(u=>u.name.toLowerCase().includes(a.toLowerCase())),[a]),l=I(s.length,4);return n.createElement(n.Fragment,null,n.createElement(ae,{label:"Søk"},n.createElement(te,{onChange:u=>t(u.target.value)})),n.createElement(re,null,n.createElement(ie,null,"Utviklere"),n.createElement(oe,null,n.createElement(z,null,n.createElement(D,{scope:"col"},"Navn"),n.createElement(D,{scope:"col"},"Alder"))),n.createElement(se,null,s.slice(l.pageStart,l.pageStart+l.currentPageSize).map(u=>n.createElement(z,{key:u.name},n.createElement(C,{columnHeader:"Navn"},u.name),n.createElement(C,{columnHeader:"Alder"},u.age)))),n.createElement(U,null,n.createElement(z,null,n.createElement(D,{scope:"row"},"Gjenomsnitts alder"),n.createElement(C,{columnHeader:"Gjenomsnitts alder"},s.reduce((u,c)=>u+c.age,0)/s.length)))),n.createElement(w,{...r,paginationControls:l}))}},x={args:{...b.args,navigationButtonText:!1},render:function(r){const a=I(134,10);return n.createElement(w,{...r,paginationControls:a})}},E={args:{...b.args,showRowsPerPageText:!1,rowsPerPageOptions:void 0},render:function(r){const a=I(134,10);return n.createElement(w,{...r,paginationControls:a})}};var L,R,O;b.parameters={...b.parameters,docs:{...(L=b.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    ariaLabel: 'Paginering',
    rowsPerPageOptions: [10, 20, 50, 100]
  },
  render: function Render(args) {
    const paginationControls = usePagination(134, 10);
    return <Pagination {...args} paginationControls={paginationControls} />;
  }
}`,...(O=(R=b.parameters)==null?void 0:R.docs)==null?void 0:O.source}}};var H,A,G;N.parameters={...N.parameters,docs:{...(H=N.parameters)==null?void 0:H.docs,source:{originalSource:`{
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
}`,...(G=(A=N.parameters)==null?void 0:A.docs)==null?void 0:G.source}}};var B,$,F;x.parameters={...x.parameters,docs:{...(B=x.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    ...Standard.args,
    navigationButtonText: false
  },
  render: function Render(args) {
    const paginationControls = usePagination(134, 10);
    return <Pagination {...args} paginationControls={paginationControls} />;
  }
}`,...(F=($=x.parameters)==null?void 0:$.docs)==null?void 0:F.source}}};var W,Y,Q;E.parameters={...E.parameters,docs:{...(W=E.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    ...Standard.args,
    showRowsPerPageText: false,
    rowsPerPageOptions: undefined
  },
  render: function Render(args) {
    const paginationControls = usePagination(134, 10);
    return <Pagination {...args} paginationControls={paginationControls} />;
  }
}`,...(Q=(Y=E.parameters)==null?void 0:Y.docs)==null?void 0:Q.source}}};const be=["Standard","WithTable","NoNavigationText","NoShowRowsPerPageText"],Ie=Object.freeze(Object.defineProperty({__proto__:null,NoNavigationText:x,NoShowRowsPerPageText:E,Standard:b,WithTable:N,__namedExportsOrder:be,default:fe},Symbol.toStringTag,{value:"Module"}));export{x as N,Ie as P,b as S,N as W,E as a};
