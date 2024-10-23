import{R as o,r as T}from"./index-RYns6xqu.js";import{r as R}from"./index-BwmuJAIN.js";import{c as f}from"./index-Dejnh_W_.js";import{P as oe}from"./Paragraph-uGacOKYl.js";import{S as X}from"./SecondaryButton-BSRNdkcP.js";import{I as k}from"./Icon-Dor7S2yd.js";import{T as ie,a as se,b as M,c as j,d as le,e as I}from"./TableRow-QT-ENwMM.js";var z=function(){return z=Object.assign||function(e){for(var t,a=1,n=arguments.length;a<n;a++){t=arguments[a];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},z.apply(this,arguments)},ue=function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(a[n[r]]=e[n[r]]);return a},K=function(e){var t=e.className,a=ue(e,["className"]);return o.createElement("tfoot",z({className:f("ffe-table__foot",t)},a))};K.__docgenInfo={description:"",methods:[],displayName:"TableFoot"};var q=function(){return q=Object.assign||function(e){for(var t,a=1,n=arguments.length;a<n;a++){t=arguments[a];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},q.apply(this,arguments)},ce=function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(a[n[r]]=e[n[r]]);return a},J=o.forwardRef(function(e,t){var a=e.className,n=ce(e,["className"]);return o.createElement("caption",q({className:f("ffe-table__caption",a),ref:t},n))});J.__docgenInfo={description:"",methods:[],displayName:"TableCaption"};var me="480px";const ge=()=>{const[e,t]=T.useState([window.innerWidth,window.innerHeight]);return T.useEffect(()=>{const a=()=>t([window.innerWidth,window.innerHeight]);return a(),window.addEventListener("resize",a),()=>window.removeEventListener("resize",a)},[]),e},y="...",O=parseInt(me,10),N=(e,t)=>{const a=t-e+1;return Array.from({length:a},(n,r)=>r+e)};function de(e,t,a,n=1){const[r]=ge();return T.useMemo(()=>{const i=Math.ceil(e/t);if(n+5>=i)return N(1,i);const m=1,b=i;if(r>O){const c=Math.max(a-n,1),g=Math.min(a+n,i),d=c>2,l=g<i-1;if(!d&&l){let s;return r<=O?s=1+n:s=2+2*n,[...N(1,s),y,i]}if(d&&!l){let s;r<=O?s=1+n:s=2+2*n;const p=N(i-s+1,i);return[m,y,...p]}if(d&&l){if(r<=O)return[m,y,a,y,b];const s=N(c,g);return[m,y,...s,y,b]}}else{const c=Math.min(i-2,a-1),g=Math.max(c,1),d=Math.max(3,a+1),l=Math.min(d,i);return N(g,l)}},[e,t,n,a,r])}const pe={rowsPerPageLabel:["Vis","rader per side"],showing:(e,t,a)=>`Viser ${e}-${t} av ${a} rader`,previous:"Forrige",next:"Neste",goToPage:e=>`Gå til side ${e}`,currentPage:e=>`Gjeldende side, side ${e}`},fe={rowsPerPageLabel:["Vis","rader per side"],showing:(e,t,a)=>`Viser ${e}-${t} av ${a} rader`,previous:"Forrige",next:"Neste",goToPage:e=>`Gå til side ${e}`,currentPage:e=>`Gjeldande side, side ${e}`},be={rowsPerPageLabel:["Show","rows per page"],showing:(e,t,a)=>`Showing ${e}-${t} of ${a} rows`,previous:"Previous",next:"Next",goToPage:e=>`Go to page ${e}`,currentPage:e=>`Current page, Page ${e}`},h={nb:pe,nn:fe,en:be},ee=({locale:e,start:t,end:a,total:n,className:r,...i})=>o.createElement(oe,{className:f("ffe-pagination-info",r),...i},h[e].showing(t,a,n));ee.__docgenInfo={description:"",methods:[],displayName:"Info",props:{locale:{required:!0,tsType:{name:"union",raw:"'nb' | 'nn' | 'en'",elements:[{name:"literal",value:"'nb'"},{name:"literal",value:"'nn'"},{name:"literal",value:"'en'"}]},description:""},start:{required:!0,tsType:{name:"number"},description:""},end:{required:!0,tsType:{name:"number"},description:""},total:{required:!0,tsType:{name:"number"},description:""}}};var D=function(){return D=Object.assign||function(e){for(var t,a=1,n=arguments.length;a<n;a++){t=arguments[a];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},D.apply(this,arguments)},ve=function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(a[n[r]]=e[n[r]]);return a},ne=o.forwardRef(function(e,t){var a=e.className,n=e.inline,r=ve(e,["className","inline"]);return o.createElement("select",D({className:f("ffe-dropdown",{"ffe-dropdown--inline":n},a),ref:t},r))});ne.__docgenInfo={description:"",methods:[],displayName:"Dropdown"};const ae=({locale:e,defaultValue:t,setPageSize:a,rowsPerPageOptions:n,className:r,...i})=>o.createElement("div",{className:f("ffe-pagination-rows-per-page",r),...i},o.createElement("span",{"aria-hidden":!0},h[e].rowsPerPageLabel[0]),o.createElement(ne,{"aria-label":h[e].rowsPerPageLabel.join(" "),defaultValue:t,onChange:u=>a(Number(u.target.value))},n.map(u=>o.createElement("option",{key:u,value:u},u))),o.createElement("span",{"aria-hidden":!0},h[e].rowsPerPageLabel[1]));ae.__docgenInfo={description:"",methods:[],displayName:"PerPageDropdown",props:{locale:{required:!0,tsType:{name:"union",raw:"'nb' | 'nn' | 'en'",elements:[{name:"literal",value:"'nb'"},{name:"literal",value:"'nn'"},{name:"literal",value:"'en'"}]},description:""},defaultValue:{required:!0,tsType:{name:"number"},description:""},setPageSize:{required:!0,tsType:{name:"signature",type:"function",raw:"(pageSize: number) => void",signature:{arguments:[{type:{name:"number"},name:"pageSize"}],return:{name:"void"}}},description:""},rowsPerPageOptions:{required:!0,tsType:{name:"Array",elements:[{name:"number"}],raw:"number[]"},description:""}}};const L="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgLTk2MCA5NjAgOTYwIiB3aWR0aD0iMjQiPjxwYXRoIGQ9Im00MTguMTUzLTQ4MCAxNjIuOTIzIDE2Mi45MjRxOC4zMDggOC4zMDcgOC41IDIwLjg4NC4xOTMgMTIuNTc2LTguNSAyMS4yNjgtOC42OTIgOC42OTMtMjEuMDc2IDguNjkzdC0yMS4wNzYtOC42OTNMMzU5LjE1NS00NTQuNjkzcS01LjYxNi01LjYxNS03LjkyMy0xMS44NDYtMi4zMDgtNi4yMy0yLjMwOC0xMy40NjF0Mi4zMDgtMTMuNDYxcTIuMzA3LTYuMjMxIDcuOTIzLTExLjg0NmwxNzkuNzY5LTE3OS43NjlxOC4zMDctOC4zMDggMjAuODg0LTguNSAxMi41NzYtLjE5MyAyMS4yNjggOC41IDguNjkzIDguNjkyIDguNjkzIDIxLjA3NnQtOC42OTMgMjEuMDc2TDQxOC4xNTMtNDgwWiIvPjwvc3ZnPg==",C=({direction:e,buttonText:t,isHidden:a,locale:n,onClick:r,className:i})=>o.createElement("div",{className:f(i,`ffe-pagination-navigation-block ffe-pagination-navigation-block--${e}`,{"ffe-pagination-navigation-block--hidden":a,"ffe-pagination-navigation-block--no-text":!t})},o.createElement(X,{type:"button",leftIcon:e==="prev"?o.createElement(k,{fileUrl:L,size:"md"}):void 0,rightIcon:e==="next"?o.createElement(k,{fileUrl:L,size:"md"}):void 0,onClick:r},t&&o.createElement("span",{className:"ffe-pagination-navigation-block__button-text"},e==="next"?h[n].next:h[n].previous)));C.__docgenInfo={description:"",methods:[],displayName:"NavigationBlock",props:{direction:{required:!0,tsType:{name:"union",raw:"'next' | 'prev'",elements:[{name:"literal",value:"'next'"},{name:"literal",value:"'prev'"}]},description:""},buttonText:{required:!1,tsType:{name:"boolean"},description:""},isHidden:{required:!0,tsType:{name:"boolean"},description:""},locale:{required:!0,tsType:{name:"union",raw:"'nb' | 'nn' | 'en'",elements:[{name:"literal",value:"'nb'"},{name:"literal",value:"'nn'"},{name:"literal",value:"'en'"}]},description:""},onClick:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};const he=o.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",height:"24",viewBox:"0 -960 960 960",width:"24"},o.createElement("path",{d:"M249.231-420.001q-24.749 0-42.374-17.625-17.624-17.625-17.624-42.374 0-24.749 17.624-42.374 17.625-17.625 42.374-17.625 24.75 0 42.374 17.625Q309.23-504.749 309.23-480q0 24.749-17.625 42.374-17.624 17.625-42.374 17.625Zm230.769 0q-24.749 0-42.374-17.625-17.625-17.625-17.625-42.374 0-24.749 17.625-42.374 17.625-17.625 42.374-17.625 24.749 0 42.374 17.625 17.625 17.625 17.625 42.374 0 24.749-17.625 42.374-17.625 17.625-42.374 17.625Zm230.769 0q-24.75 0-42.374-17.625Q650.77-455.251 650.77-480q0-24.749 17.625-42.374 17.624-17.625 42.374-17.625 24.749 0 42.374 17.625 17.624 17.625 17.624 42.374 0 24.749-17.624 42.374-17.625 17.625-42.374 17.625Z"})),te=({className:e,...t})=>o.createElement("div",{className:f("ffe-pagination-dots"),...t},he);te.__docgenInfo={description:"",methods:[],displayName:"Dots"};const re=o.forwardRef(({isActive:e,onClick:t,children:a,locale:n},r)=>o.createElement(X,{ref:r,type:"button","aria-label":e?h[n].currentPage(a):h[n].goToPage(a),"aria-current":e,className:f("ffe-pagination-page-button",{"ffe-pagination-page-button--active":e}),onClick:t},a));re.__docgenInfo={description:"",methods:[],displayName:"PageButton",props:{isActive:{required:!0,tsType:{name:"boolean"},description:""},onClick:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},children:{required:!0,tsType:{name:"number"},description:""},locale:{required:!0,tsType:{name:"union",raw:"'nb' | 'nn' | 'en'",elements:[{name:"literal",value:"'nb'"},{name:"literal",value:"'nn'"},{name:"literal",value:"'en'"}]},description:""}}};const P=({className:e,locale:t="nb",showRowsPerPageText:a=!0,paginationControls:n,rowsPerPageOptions:r,navigationButtonText:i=!0,ariaLabel:u,onClickPrev:m,onClickNext:b,onClickPage:c})=>{const g=T.useRef(null),d=T.useRef(null),l=de(n.totalElements,n.currentPageSize,n.currentPage);return o.createElement("div",{role:"group","aria-label":u,className:f("ffe-pagination",e)},o.createElement("div",{className:"ffe-pagination__rows"},a&&o.createElement(ee,{className:"ffe-pagination__rows-item",locale:t,start:n.pageStart+1,end:n.pageEnd,total:n.totalElements}),!!(r!=null&&r.length)&&o.createElement(ae,{className:"ffe-pagination__rows-item",locale:t,rowsPerPageOptions:r,setPageSize:n.setPageSize,defaultValue:n.currentPageSize})),l&&l.length>1&&o.createElement("nav",{className:"ffe-pagination__buttons"},o.createElement(C,{className:"ffe-pagination__buttons-nav",locale:t,onClick:()=>{m==null||m();const s=Math.max(n.currentPage-1,1);R.flushSync(()=>{var w;n.setCurrentPage(s),s===1&&((w=g.current)==null||w.focus({preventScroll:!0}))})},isHidden:!n.hasPreviousPage,buttonText:i,direction:"prev"}),o.createElement("ol",{className:"ffe-pagination__page-buttons"},l.map((s,p)=>o.createElement("li",{key:p},s===y?o.createElement(te,null):o.createElement(re,{ref:p===0?g:p===l.length-1?d:null,key:p,locale:t,onClick:()=>{c==null||c(s),n.setCurrentPage(s)},isActive:n.currentPage===s},s)))),o.createElement(C,{className:"ffe-pagination__buttons-nav",locale:t,onClick:()=>{b==null||b();const s=Math.min(n.currentPage+1,n.numberOfPages);R.flushSync(()=>{var w;n.setCurrentPage(s),n.numberOfPages===s&&((w=d.current)==null||w.focus({preventScroll:!0}))})},isHidden:!n.hasNextPage,buttonText:i,direction:"next"})))};P.__docgenInfo={description:"",methods:[],displayName:"Pagination",props:{className:{required:!1,tsType:{name:"string"},description:""},locale:{required:!1,tsType:{name:"union",raw:"'nb' | 'nn' | 'en'",elements:[{name:"literal",value:"'nb'"},{name:"literal",value:"'nn'"},{name:"literal",value:"'en'"}]},description:"",defaultValue:{value:"'nb'",computed:!1}},showRowsPerPageText:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},paginationControls:{required:!0,tsType:{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"pageStart",value:{name:"number",required:!0},description:"The index of the first element on the current page"},{key:"currentPage",value:{name:"number",required:!0},description:"The index of the current page. Numbered from 1"},{key:"pageEnd",value:{name:"number",required:!0},description:"The index of the last element on the current page"},{key:"currentPageSize",value:{name:"number",required:!0},description:"The size of the page"},{key:"hasNextPage",value:{name:"boolean",required:!0},description:"Whether there is a next page"},{key:"hasPreviousPage",value:{name:"boolean",required:!0},description:"Whether there is a previous page"},{key:"setPageSize",value:{name:"signature",type:"function",raw:"(pageSize: number) => void",signature:{arguments:[{type:{name:"number"},name:"pageSize"}],return:{name:"void"}},required:!0},description:"Function to set the page size"},{key:"setCurrentPage",value:{name:"signature",type:"function",raw:"(page: number) => void",signature:{arguments:[{type:{name:"number"},name:"page"}],return:{name:"void"}},required:!0},description:"Function to set the current page"},{key:"totalElements",value:{name:"number",required:!0},description:"The total number of elements"},{key:"numberOfPages",value:{name:"number",required:!0},description:"The total of pages"}]}},description:""},rowsPerPageOptions:{required:!1,tsType:{name:"Array",elements:[{name:"number"}],raw:"number[]"},description:""},navigationButtonText:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},ariaLabel:{required:!0,tsType:{name:"string"},description:""},onClickPrev:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onClickNext:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onClickPage:{required:!1,tsType:{name:"signature",type:"function",raw:"(page: number) => void",signature:{arguments:[{type:{name:"number"},name:"page"}],return:{name:"void"}}},description:""}}};function _(e,t=100){const[a,n]=T.useState(1),[r,i]=T.useState(t),u=e>a*r,m=a>1,b=(a-1)*r,c=u?a*r:e,g=Math.ceil(e/r);return{currentPage:a,pageStart:b,pageEnd:c,currentPageSize:r,hasNextPage:u,hasPreviousPage:m,setCurrentPage:n,setPageSize:l=>{i(l),n(1)},totalElements:e,numberOfPages:g}}const ye={title:"components/pagination/Pagination",component:P},v={args:{ariaLabel:"Paginering",rowsPerPageOptions:[10,20,50,100]},render:function(t){const a=_(134,10);return o.createElement(P,{...t,paginationControls:a})}},S={args:{...v.args,navigationButtonText:!1},render:function(t){const a=[{name:"Anders",age:32},{name:"Erik",age:25},{name:"Gunn",age:29},{name:"Safi",age:42},{name:"Sandra",age:42},{name:"Leif",age:12},{name:"Gunnar",age:2},{name:"Simen",age:42},{name:"Andreas",age:45},{name:"Mikkel",age:23},{name:"Nissen",age:100},{name:"Niklas",age:35},{name:"Unn",age:98}],n=_(a.length,2);return o.createElement(o.Fragment,null,o.createElement(ie,null,o.createElement(J,null,"Utviklere"),o.createElement(se,null,o.createElement(M,null,o.createElement(j,{scope:"col"},"Navn"),o.createElement(j,{scope:"col"},"Alder"))),o.createElement(le,null,a.slice(n.pageStart,n.pageStart+n.currentPageSize).map(r=>o.createElement(M,{key:r.name},o.createElement(I,{columnHeader:"Navn"},r.name),o.createElement(I,{columnHeader:"Alder"},r.age)))),o.createElement(K,null,o.createElement(M,null,o.createElement(j,{scope:"row"},"Gjenomsnitts alder"),o.createElement(I,{columnHeader:"Gjenomsnitts alder"},a.reduce((r,i)=>r+i.age,0)/a.length)))),o.createElement(P,{...t,paginationControls:n}))}},x={args:{...v.args,navigationButtonText:!1},render:function(t){const a=_(134,10);return o.createElement(P,{...t,paginationControls:a})}},E={args:{...v.args,showRowsPerPageText:!1,rowsPerPageOptions:void 0},render:function(t){const a=_(134,10);return o.createElement(P,{...t,paginationControls:a})}};var H,A,$;v.parameters={...v.parameters,docs:{...(H=v.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    ariaLabel: 'Paginering',
    rowsPerPageOptions: [10, 20, 50, 100]
  },
  render: function Render(args) {
    const paginationControls = usePagination(134, 10);
    return <Pagination {...args} paginationControls={paginationControls} />;
  }
}`,...($=(A=v.parameters)==null?void 0:A.docs)==null?void 0:$.source}}};var G,B,F;S.parameters={...S.parameters,docs:{...(G=S.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    ...Standard.args,
    navigationButtonText: false
  },
  render: function Render(args) {
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
    const paginationControls = usePagination(data.length, 2);
    return <>
                <Table>
                    <TableCaption>Utviklere</TableCaption>
                    <TableHead>
                        <TableRow>
                            <TableHeaderCell scope="col">Navn</TableHeaderCell>
                            <TableHeaderCell scope="col">Alder</TableHeaderCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {data.slice(paginationControls.pageStart, paginationControls.pageStart + paginationControls.currentPageSize).map(it => <TableRow key={it.name}>
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
                                {data.reduce((sum, curr) => sum + curr.age, 0) / data.length}
                            </TableDataCell>
                        </TableRow>
                    </TableFoot>
                </Table>
                <Pagination {...args} paginationControls={paginationControls} />
            </>;
  }
}`,...(F=(B=S.parameters)==null?void 0:B.docs)==null?void 0:F.source}}};var W,Y,Q;x.parameters={...x.parameters,docs:{...(W=x.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    ...Standard.args,
    navigationButtonText: false
  },
  render: function Render(args) {
    const paginationControls = usePagination(134, 10);
    return <Pagination {...args} paginationControls={paginationControls} />;
  }
}`,...(Q=(Y=x.parameters)==null?void 0:Y.docs)==null?void 0:Q.source}}};var V,U,Z;E.parameters={...E.parameters,docs:{...(V=E.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    ...Standard.args,
    showRowsPerPageText: false,
    rowsPerPageOptions: undefined
  },
  render: function Render(args) {
    const paginationControls = usePagination(134, 10);
    return <Pagination {...args} paginationControls={paginationControls} />;
  }
}`,...(Z=(U=E.parameters)==null?void 0:U.docs)==null?void 0:Z.source}}};const Te=["Standard","WithTable","NoNavigationText","NoShowRowsPerPageText"],_e=Object.freeze(Object.defineProperty({__proto__:null,NoNavigationText:x,NoShowRowsPerPageText:E,Standard:v,WithTable:S,__namedExportsOrder:Te,default:ye},Symbol.toStringTag,{value:"Module"}));export{x as N,_e as P,v as S,S as W,E as a};
