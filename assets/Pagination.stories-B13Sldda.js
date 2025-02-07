import{R as o,r as P}from"./index-ne9I_3bB.js";import{r as C}from"./index-Bsik83XG.js";import{c as v}from"./index-B6-3w37c.js";import{P as te}from"./Paragraph-CgekKyFC.js";import{S as Z}from"./SecondaryButton-bIAXmbwc.js";import{I as R}from"./Icon-D2PqKf0B.js";import{T as re,a as oe,b as _,c as j,d as ie,e as z}from"./TableRow-lFwWUQJ6.js";import{T as se}from"./TableCaption-Ds2U_Eox.js";var I=function(){return I=Object.assign||function(e){for(var t,a=1,n=arguments.length;a<n;a++){t=arguments[a];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},I.apply(this,arguments)},le=function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(a[n[r]]=e[n[r]]);return a},K=function(e){var t=e.className,a=le(e,["className"]);return o.createElement("tfoot",I({className:v("ffe-table__foot",t)},a))};K.__docgenInfo={description:"",methods:[],displayName:"TableFoot"};var ue="480px";const ce=()=>{const[e,t]=P.useState([window.innerWidth,window.innerHeight]);return P.useEffect(()=>{const a=()=>t([window.innerWidth,window.innerHeight]);return a(),window.addEventListener("resize",a),()=>window.removeEventListener("resize",a)},[]),e},h="...",M=parseInt(ue,10),N=(e,t)=>{const a=t-e+1;return Array.from({length:a},(n,r)=>r+e)};function me(e,t,a,n=1){const[r]=ce();return P.useMemo(()=>{const i=Math.ceil(e/t);if(n+5>=i)return N(1,i);const m=1,f=i;if(r>M){const c=Math.max(a-n,1),g=Math.min(a+n,i),d=c>2,l=g<i-1;if(!d&&l){let s;return r<=M?s=1+n:s=2+2*n,[...N(1,s),h,i]}if(d&&!l){let s;r<=M?s=1+n:s=2+2*n;const p=N(i-s+1,i);return[m,h,...p]}if(d&&l){if(r<=M)return[m,h,a,h,f];const s=N(c,g);return[m,h,...s,h,f]}}else{const c=Math.min(i-2,a-1),g=Math.max(c,1),d=Math.max(3,a+1),l=Math.min(d,i);return N(g,l)}},[e,t,n,a,r])}const ge={rowsPerPageLabel:["Vis","rader per side"],showing:(e,t,a)=>`Viser ${e}-${t} av ${a} rader`,previous:"Forrige",next:"Neste",goToPage:e=>`Gå til side ${e}`,currentPage:e=>`Gjeldende side, side ${e}`},de={rowsPerPageLabel:["Vis","rader per side"],showing:(e,t,a)=>`Viser ${e}-${t} av ${a} rader`,previous:"Forrige",next:"Neste",goToPage:e=>`Gå til side ${e}`,currentPage:e=>`Gjeldande side, side ${e}`},pe={rowsPerPageLabel:["Show","rows per page"],showing:(e,t,a)=>`Showing ${e}-${t} of ${a} rows`,previous:"Previous",next:"Next",goToPage:e=>`Go to page ${e}`,currentPage:e=>`Current page, Page ${e}`},T={nb:ge,nn:de,en:pe},X=({locale:e,start:t,end:a,total:n,className:r,...i})=>o.createElement(te,{className:v("ffe-pagination-info",r),...i},T[e].showing(t,a,n));X.__docgenInfo={description:"",methods:[],displayName:"Info",props:{locale:{required:!0,tsType:{name:"union",raw:"'nb' | 'nn' | 'en'",elements:[{name:"literal",value:"'nb'"},{name:"literal",value:"'nn'"},{name:"literal",value:"'en'"}]},description:""},start:{required:!0,tsType:{name:"number"},description:""},end:{required:!0,tsType:{name:"number"},description:""},total:{required:!0,tsType:{name:"number"},description:""}}};var q=function(){return q=Object.assign||function(e){for(var t,a=1,n=arguments.length;a<n;a++){t=arguments[a];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},q.apply(this,arguments)},fe=function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(a[n[r]]=e[n[r]]);return a},J=o.forwardRef(function(e,t){var a=e.className,n=e.inline,r=fe(e,["className","inline"]);return o.createElement("select",q({className:v("ffe-dropdown",{"ffe-dropdown--inline":n},a),ref:t},r))});J.__docgenInfo={description:"",methods:[],displayName:"Dropdown"};const ee=({locale:e,defaultValue:t,setPageSize:a,rowsPerPageOptions:n,className:r,...i})=>o.createElement("div",{className:v("ffe-pagination-rows-per-page",r),...i},o.createElement("span",{"aria-hidden":!0},T[e].rowsPerPageLabel[0]),o.createElement(J,{"aria-label":T[e].rowsPerPageLabel.join(" "),defaultValue:t,onChange:u=>a(Number(u.target.value))},n.map(u=>o.createElement("option",{key:u,value:u},u))),o.createElement("span",{"aria-hidden":!0},T[e].rowsPerPageLabel[1]));ee.__docgenInfo={description:"",methods:[],displayName:"PerPageDropdown",props:{locale:{required:!0,tsType:{name:"union",raw:"'nb' | 'nn' | 'en'",elements:[{name:"literal",value:"'nb'"},{name:"literal",value:"'nn'"},{name:"literal",value:"'en'"}]},description:""},defaultValue:{required:!0,tsType:{name:"number"},description:""},setPageSize:{required:!0,tsType:{name:"signature",type:"function",raw:"(pageSize: number) => void",signature:{arguments:[{type:{name:"number"},name:"pageSize"}],return:{name:"void"}}},description:""},rowsPerPageOptions:{required:!0,tsType:{name:"Array",elements:[{name:"number"}],raw:"number[]"},description:""}}};const k="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgLTk2MCA5NjAgOTYwIiB3aWR0aD0iMjQiPjxwYXRoIGQ9Im00MTguMTUzLTQ4MCAxNjIuOTIzIDE2Mi45MjRxOC4zMDggOC4zMDcgOC41IDIwLjg4NC4xOTMgMTIuNTc2LTguNSAyMS4yNjgtOC42OTIgOC42OTMtMjEuMDc2IDguNjkzdC0yMS4wNzYtOC42OTNMMzU5LjE1NS00NTQuNjkzcS01LjYxNi01LjYxNS03LjkyMy0xMS44NDYtMi4zMDgtNi4yMy0yLjMwOC0xMy40NjF0Mi4zMDgtMTMuNDYxcTIuMzA3LTYuMjMxIDcuOTIzLTExLjg0NmwxNzkuNzY5LTE3OS43NjlxOC4zMDctOC4zMDggMjAuODg0LTguNSAxMi41NzYtLjE5MyAyMS4yNjggOC41IDguNjkzIDguNjkyIDguNjkzIDIxLjA3NnQtOC42OTMgMjEuMDc2TDQxOC4xNTMtNDgwWiIvPjwvc3ZnPg==",D=({direction:e,buttonText:t,isHidden:a,locale:n,onClick:r,className:i})=>o.createElement("div",{className:v(i,`ffe-pagination-navigation-block ffe-pagination-navigation-block--${e}`,{"ffe-pagination-navigation-block--hidden":a,"ffe-pagination-navigation-block--no-text":!t})},o.createElement(Z,{type:"button",leftIcon:e==="prev"?o.createElement(R,{fileUrl:k,size:"md"}):void 0,rightIcon:e==="next"?o.createElement(R,{fileUrl:k,size:"md"}):void 0,onClick:r},t&&o.createElement("span",{className:"ffe-pagination-navigation-block__button-text"},e==="next"?T[n].next:T[n].previous)));D.__docgenInfo={description:"",methods:[],displayName:"NavigationBlock",props:{direction:{required:!0,tsType:{name:"union",raw:"'next' | 'prev'",elements:[{name:"literal",value:"'next'"},{name:"literal",value:"'prev'"}]},description:""},buttonText:{required:!1,tsType:{name:"boolean"},description:""},isHidden:{required:!0,tsType:{name:"boolean"},description:""},locale:{required:!0,tsType:{name:"union",raw:"'nb' | 'nn' | 'en'",elements:[{name:"literal",value:"'nb'"},{name:"literal",value:"'nn'"},{name:"literal",value:"'en'"}]},description:""},onClick:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};const be=o.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",height:"24",viewBox:"0 -960 960 960",width:"24"},o.createElement("path",{d:"M249.231-420.001q-24.749 0-42.374-17.625-17.624-17.625-17.624-42.374 0-24.749 17.624-42.374 17.625-17.625 42.374-17.625 24.75 0 42.374 17.625Q309.23-504.749 309.23-480q0 24.749-17.625 42.374-17.624 17.625-42.374 17.625Zm230.769 0q-24.749 0-42.374-17.625-17.625-17.625-17.625-42.374 0-24.749 17.625-42.374 17.625-17.625 42.374-17.625 24.749 0 42.374 17.625 17.625 17.625 17.625 42.374 0 24.749-17.625 42.374-17.625 17.625-42.374 17.625Zm230.769 0q-24.75 0-42.374-17.625Q650.77-455.251 650.77-480q0-24.749 17.625-42.374 17.624-17.625 42.374-17.625 24.749 0 42.374 17.625 17.624 17.625 17.624 42.374 0 24.749-17.624 42.374-17.625 17.625-42.374 17.625Z"})),ne=({className:e,...t})=>o.createElement("div",{className:v("ffe-pagination-dots"),...t},be);ne.__docgenInfo={description:"",methods:[],displayName:"Dots"};const ae=o.forwardRef(({isActive:e,onClick:t,children:a,locale:n},r)=>o.createElement(Z,{ref:r,type:"button","aria-label":e?T[n].currentPage(a):T[n].goToPage(a),"aria-current":e,className:v("ffe-pagination-page-button",{"ffe-pagination-page-button--active":e}),onClick:t},a));ae.__docgenInfo={description:"",methods:[],displayName:"PageButton",props:{isActive:{required:!0,tsType:{name:"boolean"},description:""},onClick:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},children:{required:!0,tsType:{name:"number"},description:""},locale:{required:!0,tsType:{name:"union",raw:"'nb' | 'nn' | 'en'",elements:[{name:"literal",value:"'nb'"},{name:"literal",value:"'nn'"},{name:"literal",value:"'en'"}]},description:""}}};const y=({className:e,locale:t="nb",showRowsPerPageText:a=!0,paginationControls:n,rowsPerPageOptions:r,navigationButtonText:i=!0,ariaLabel:u,onClickPrev:m,onClickNext:f,onClickPage:c})=>{const g=P.useRef(null),d=P.useRef(null),l=me(n.totalElements,n.currentPageSize,n.currentPage);return o.createElement("div",{role:"group","aria-label":u,className:v("ffe-pagination",e)},o.createElement("div",{className:"ffe-pagination__rows"},a&&o.createElement(X,{className:"ffe-pagination__rows-item",locale:t,start:n.pageStart+1,end:n.pageEnd,total:n.totalElements}),!!(r!=null&&r.length)&&o.createElement(ee,{className:"ffe-pagination__rows-item",locale:t,rowsPerPageOptions:r,setPageSize:n.setPageSize,defaultValue:n.currentPageSize})),l&&l.length>1&&o.createElement("nav",{className:"ffe-pagination__buttons"},o.createElement(D,{className:"ffe-pagination__buttons-nav",locale:t,onClick:()=>{m==null||m();const s=Math.max(n.currentPage-1,1);C.flushSync(()=>{var w;n.setCurrentPage(s),s===1&&((w=g.current)==null||w.focus({preventScroll:!0}))})},isHidden:!n.hasPreviousPage,buttonText:i,direction:"prev"}),o.createElement("ol",{className:"ffe-pagination__page-buttons"},l.map((s,p)=>o.createElement("li",{key:p},s===h?o.createElement(ne,null):o.createElement(ae,{ref:p===0?g:p===l.length-1?d:null,key:p,locale:t,onClick:()=>{c==null||c(s),n.setCurrentPage(s)},isActive:n.currentPage===s},s)))),o.createElement(D,{className:"ffe-pagination__buttons-nav",locale:t,onClick:()=>{f==null||f();const s=Math.min(n.currentPage+1,n.numberOfPages);C.flushSync(()=>{var w;n.setCurrentPage(s),n.numberOfPages===s&&((w=d.current)==null||w.focus({preventScroll:!0}))})},isHidden:!n.hasNextPage,buttonText:i,direction:"next"})))};y.__docgenInfo={description:"",methods:[],displayName:"Pagination",props:{className:{required:!1,tsType:{name:"string"},description:""},locale:{required:!1,tsType:{name:"union",raw:"'nb' | 'nn' | 'en'",elements:[{name:"literal",value:"'nb'"},{name:"literal",value:"'nn'"},{name:"literal",value:"'en'"}]},description:"",defaultValue:{value:"'nb'",computed:!1}},showRowsPerPageText:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},paginationControls:{required:!0,tsType:{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"pageStart",value:{name:"number",required:!0},description:"The index of the first element on the current page"},{key:"currentPage",value:{name:"number",required:!0},description:"The index of the current page. Numbered from 1"},{key:"pageEnd",value:{name:"number",required:!0},description:"The index of the last element on the current page"},{key:"currentPageSize",value:{name:"number",required:!0},description:"The size of the page"},{key:"hasNextPage",value:{name:"boolean",required:!0},description:"Whether there is a next page"},{key:"hasPreviousPage",value:{name:"boolean",required:!0},description:"Whether there is a previous page"},{key:"setPageSize",value:{name:"signature",type:"function",raw:"(pageSize: number) => void",signature:{arguments:[{type:{name:"number"},name:"pageSize"}],return:{name:"void"}},required:!0},description:"Function to set the page size"},{key:"setCurrentPage",value:{name:"signature",type:"function",raw:"(page: number) => void",signature:{arguments:[{type:{name:"number"},name:"page"}],return:{name:"void"}},required:!0},description:"Function to set the current page"},{key:"totalElements",value:{name:"number",required:!0},description:"The total number of elements"},{key:"numberOfPages",value:{name:"number",required:!0},description:"The total of pages"}]}},description:""},rowsPerPageOptions:{required:!1,tsType:{name:"Array",elements:[{name:"number"}],raw:"number[]"},description:""},navigationButtonText:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},ariaLabel:{required:!0,tsType:{name:"string"},description:""},onClickPrev:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onClickNext:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onClickPage:{required:!1,tsType:{name:"signature",type:"function",raw:"(page: number) => void",signature:{arguments:[{type:{name:"number"},name:"page"}],return:{name:"void"}}},description:""}}};function O(e,t=100){const[a,n]=P.useState(1),[r,i]=P.useState(t),u=e>a*r,m=a>1,f=(a-1)*r,c=u?a*r:e,g=Math.ceil(e/r);return{currentPage:a,pageStart:f,pageEnd:c,currentPageSize:r,hasNextPage:u,hasPreviousPage:m,setCurrentPage:n,setPageSize:l=>{i(l),n(1)},totalElements:e,numberOfPages:g}}const Te={title:"Komponenter/Pagination/Pagination",component:y},b={args:{ariaLabel:"Paginering",rowsPerPageOptions:[10,20,50,100]},render:function(t){const a=O(134,10);return o.createElement(y,{...t,paginationControls:a})}},S={args:{...b.args,navigationButtonText:!1},render:function(t){const a=[{name:"Anders",age:32},{name:"Erik",age:25},{name:"Gunn",age:29},{name:"Safi",age:42},{name:"Sandra",age:42},{name:"Leif",age:12},{name:"Gunnar",age:2},{name:"Simen",age:42},{name:"Andreas",age:45},{name:"Mikkel",age:23},{name:"Nissen",age:100},{name:"Niklas",age:35},{name:"Unn",age:98}],n=O(a.length,2);return o.createElement(o.Fragment,null,o.createElement(re,null,o.createElement(se,null,"Utviklere"),o.createElement(oe,null,o.createElement(_,null,o.createElement(j,{scope:"col"},"Navn"),o.createElement(j,{scope:"col"},"Alder"))),o.createElement(ie,null,a.slice(n.pageStart,n.pageStart+n.currentPageSize).map(r=>o.createElement(_,{key:r.name},o.createElement(z,{columnHeader:"Navn"},r.name),o.createElement(z,{columnHeader:"Alder"},r.age)))),o.createElement(K,null,o.createElement(_,null,o.createElement(j,{scope:"row"},"Gjenomsnitts alder"),o.createElement(z,{columnHeader:"Gjenomsnitts alder"},a.reduce((r,i)=>r+i.age,0)/a.length)))),o.createElement(y,{...t,paginationControls:n}))}},x={args:{...b.args,navigationButtonText:!1},render:function(t){const a=O(134,10);return o.createElement(y,{...t,paginationControls:a})}},E={args:{...b.args,showRowsPerPageText:!1,rowsPerPageOptions:void 0},render:function(t){const a=O(134,10);return o.createElement(y,{...t,paginationControls:a})}};var L,H,A;b.parameters={...b.parameters,docs:{...(L=b.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
}`,...(U=(V=E.parameters)==null?void 0:V.docs)==null?void 0:U.source}}};const ve=["Standard","WithTable","NoNavigationText","NoShowRowsPerPageText"],Me=Object.freeze(Object.defineProperty({__proto__:null,NoNavigationText:x,NoShowRowsPerPageText:E,Standard:b,WithTable:S,__namedExportsOrder:ve,default:Te},Symbol.toStringTag,{value:"Module"}));export{x as N,Me as P,b as S,S as W,E as a};
