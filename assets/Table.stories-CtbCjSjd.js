import{R as e,r as j}from"./index-DQDNmYQF.js";import{c as g}from"./index-QCImZZ3W.js";import{I as J}from"./Icon-BqsuuMcG.js";import{S as ee}from"./StrongText-CC2QSDD4.js";import{C as ae}from"./Collapse-BrKhsD1f.js";import{f as te}from"./formatNumber-DejPEPKF.js";import{T as ne}from"./TertiaryButton-BEMXYxRk.js";const A=["none","ascending","descending"],z=e.createContext({updateSort:()=>null,getSort:()=>"none"}),Y=(n="none")=>n?A[(A.indexOf(n)+1)%A.length]:"none",$=({initialSort:n,children:t})=>{const[r,o]=j.useState((n==null?void 0:n.sortOrder)??"none"),[l,s]=j.useState(n==null?void 0:n.sortKey),u=a=>{a===l?o(Y(r)):(s(a),o(Y("none")))},f=a=>a===l?r:"none";return e.createElement(z.Provider,{value:{activeSortOrder:r,activeSortKey:l,updateSort:u,getSort:f}},t)};$.__docgenInfo={description:"",methods:[],displayName:"TableProvider",props:{initialSort:{required:!1,tsType:{name:"signature",type:"object",raw:"{ sortOrder: SortOrder; sortKey: string }",signature:{properties:[{key:"sortOrder",value:{name:"unknown[number]",raw:"(typeof ariaSortOrders)[number]",required:!0}},{key:"sortKey",value:{name:"string",required:!0}}]}},description:""},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};const D=e.forwardRef(({className:n,initialSort:t,children:r,breakPoint:o="sm",...l},s)=>e.createElement($,{initialSort:t},e.createElement(z.Consumer,null,({activeSortOrder:u,activeSortKey:f})=>e.createElement("table",{className:g("ffe-table",{"ffe-table--break-sm":o==="sm"},{"ffe-table--break-md":o==="md"},n),ref:s,...l},typeof r=="function"?r({activeSortOrder:u,activeSortKey:f}):r))));D.__docgenInfo={description:"",methods:[],displayName:"Table",props:{initialSort:{required:!1,tsType:{name:"signature",type:"object",raw:"{ sortOrder: SortOrder; sortKey: string }",signature:{properties:[{key:"sortOrder",value:{name:"unknown[number]",raw:"(typeof ariaSortOrders)[number]",required:!0}},{key:"sortKey",value:{name:"string",required:!0}}]}},description:""},children:{required:!0,tsType:{name:"union",raw:`| React.ReactNode
| (({
      activeSortOrder,
      activeSortKey,
  }: {
      activeSortOrder?: TableContextInterFace['activeSortOrder'];
      activeSortKey?: TableContextInterFace['activeSortKey'];
  }) => React.ReactNode)`,elements:[{name:"ReactReactNode",raw:"React.ReactNode"},{name:"unknown"}]},description:""},breakPoint:{required:!1,tsType:{name:"union",raw:"'none' | 'sm' | 'md'",elements:[{name:"literal",value:"'none'"},{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"}]},description:"",defaultValue:{value:"'sm'",computed:!1}}},composes:["Omit"]};const w=({className:n,...t})=>e.createElement("thead",{className:g("ffe-table__head",n),...t});w.__docgenInfo={description:"",methods:[],displayName:"TableHead"};const v=({className:n,...t})=>e.createElement("tbody",{className:g("ffe-table__body",n),...t});v.__docgenInfo={description:"",methods:[],displayName:"TableBody"};const L=({className:n,...t})=>e.createElement("div",{className:g("ffe-table__cell-content",n),...t});L.__docgenInfo={description:"",methods:[],displayName:"CellContent"};const re="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgLTk2MCA5NjAgOTYwIiB3aWR0aD0iMjQiPjxwYXRoIGQ9Ik00NTAuMDAxLTYzNS42OTQgMzE3LjA3Ni01MDIuNzdxLTguMzA3IDguMzA3LTIwLjg4NCA4LjUtMTIuNTc2LjE5Mi0yMS4yNjgtOC41LTguNjkzLTguNjkyLTguNjkzLTIxLjA3NiAwLTEyLjM4NSA4LjY5My0yMS4wNzdsMTc5Ljc2OS0xNzkuNzY5cTEwLjg0Ni0xMC44NDYgMjUuMzA3LTEwLjg0NiAxNC40NjEgMCAyNS4zMDcgMTAuODQ2bDE3OS43NjkgMTc5Ljc2OXE4LjMwOCA4LjMwOCA4LjUgMjAuODg0LjE5MyAxMi41NzctOC41IDIxLjI2OS04LjY5MiA4LjY5Mi0yMS4wNzYgOC42OTJ0LTIxLjA3Ni04LjY5Mkw1MDkuOTk5LTYzNS42OTR2MzUxLjg0OHEwIDEyLjc2OC04LjYxNSAyMS4zODQtOC42MTUgOC42MTUtMjEuMzg0IDguNjE1dC0yMS4zODQtOC42MTVxLTguNjE1LTguNjE2LTguNjE1LTIxLjM4NHYtMzUxLjg0OFoiLz48L3N2Zz4=",le="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgLTk2MCA5NjAgOTYwIiB3aWR0aD0iMjQiPjxwYXRoIGQ9Ik0zNjYuNTI1LTQ1NC4yMzJxLTEyLjc1NSAwLTIxLjM3LTguNjI1LTguNjE1LTguNjI0LTguNjE1LTIxLjM3NHYtMjYxLjIzMmwtOTIuNjk0IDkyLjY5NHEtOC4xMTUgOC4zMDctMjAuMjg4IDguMzA3dC0yMS40OC04LjYwOHEtOS4zMDgtOS4zOTEtOS4zMDgtMjEuNDY4dDkuMzA4LTIxLjM4NGwxMzguNzY5LTEzOC43NjlxNS42MTUtNS42MTUgMTEuODk3LTcuOTIzdDEzLjQ2Mi0yLjMwOHE3LjE3OSAwIDEzLjY0IDIuMzI1IDYuNDYyIDIuMzI2IDEyIDcuOTA2bDEzOS43NjkgMTM5Ljc2OXE4LjkyMyA4LjkyMyA4LjgwOCAyMC42OTItLjExNiAxMS43NjktOS40MjMgMjEuMTYtOS4zMDcgOC42MDgtMjEuMDc2IDguOTE2LTExLjc2OS4zMDgtMjEuMDc3LTlsLTkyLjMwOS05Mi4zMDl2MjYxLjYxN3EwIDEyLjU4Ni04LjYyOCAyMS4xLTguNjI5IDguNTE0LTIxLjM4NSA4LjUxNFptMjI3LjI2OSAzMzguNzY5cS03LjE3OSAwLTEzLjY0LTIuMzI1LTYuNDYyLTIuMzI1LTEyLTcuOTA2TDQyOC4zODUtMjY1LjQ2M3EtOC45MjMtOC45MjItOC44MDgtMjAuNjkxLjExNi0xMS43NjkgOS40MjMtMjEuMTYgOS4zMDctOC42MDkgMjEuMDc2LTguOTE3IDExLjc2OS0uMzA3IDIxLjA3NyA5bDkyLjMwOSA5Mi4zMDl2LTI2MS42MTZxMC0xMi41ODYgOC42MjgtMjEuMTAxIDguNjI5LTguNTE0IDIxLjM4NS04LjUxNCAxMi43NTUgMCAyMS4zNyA4LjYyNXQ4LjYxNSAyMS4zNzR2MjYxLjIzMmw5Mi42OTQtOTIuNjkzcTguMTE1LTguMzA4IDIwLjI4OC04LjMwOHQyMS40OCA4LjYwOXE5LjMwOCA5LjM5MSA5LjMwOCAyMS40NjcgMCAxMi4wNzctOS4zMDggMjEuMzg0TDYxOS4xNTMtMTI1LjY5NHEtNS42MTUgNS42MTYtMTEuODk3IDcuOTIzLTYuMjgyIDIuMzA4LTEzLjQ2MiAyLjMwOFoiLz48L3N2Zz4=",T=e.forwardRef(({className:n,sortKey:t,children:r,onClick:o,...l},s)=>{const{updateSort:u,getSort:f}=j.useContext(z),a=j.useRef(null),m=t?f(t):void 0;return e.createElement("th",{className:g("ffe-table__th",{"ffe-table__th--sortable":t},{"ffe-table__th--sortable-ascending":m==="ascending"},{"ffe-table__th--sortable-descending":m==="descending"},n),"aria-sort":m,onClick:i=>{var d,c;(d=a.current)!=null&&d.contains(i.target)||(c=a.current)==null||c.click(),o==null||o(i)},ref:s,...l},t?e.createElement(L,null,e.createElement("button",{className:"ffe-table__sort-button",type:"button",onClick:()=>u(t),ref:a},e.createElement("span",null,r),e.createElement(J,{fileUrl:m==="none"?le:re,size:"md"}))):e.createElement(L,null,r))});T.__docgenInfo={description:"",methods:[],displayName:"TableHeaderCell",props:{sortKey:{required:!1,tsType:{name:"string"},description:""}}};const M=e.forwardRef(({className:n,...t},r)=>e.createElement("tr",{className:g("ffe-table__tr",n),ref:r,...t}));M.__docgenInfo={description:"",methods:[],displayName:"TableRow"};const b=e.forwardRef(({className:n,columnHeader:t,children:r,...o},l)=>e.createElement("td",{className:g("ffe-table__td",n),ref:l,...o},e.createElement(L,null,t&&e.createElement(ee,{className:"ffe-table__column-header","aria-hidden":!0},t,":"),r)));b.__docgenInfo={description:"",methods:[],displayName:"TableDataCell",props:{columnHeader:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};const x=e.forwardRef(({className:n,...t},r)=>e.createElement("caption",{className:g("ffe-table__caption",n),ref:r,...t}));x.__docgenInfo={description:"",methods:[],displayName:"TableCaption"};const k=({className:n,...t})=>e.createElement("tfoot",{className:g("ffe-table__foot",n),...t});k.__docgenInfo={description:"",methods:[],displayName:"TableFoot"};const oe={showMore:"Vis mer",showLess:"Vis mindre"},se={showMore:"Vis meir",showLess:"Vis mindre"},ce={showMore:"Show more",showLess:"Show less"},h={nb:oe,nn:se,en:ce},R=e.forwardRef(({className:n,expandContent:t,children:r,locale:o="nb",onClick:l,isDefaultOpen:s,...u},f)=>{const[a,m]=j.useState(!!s),i=j.useId(),[d,c]=j.useState(!1),N=j.useRef(null),C=!d&&!a;return e.createElement(e.Fragment,null,e.createElement("tr",{className:g("ffe-table__tr","ffe-table__tr--expand",{"ffe-table__tr--expand-open":a},{"ffe-table__tr--animating":d},n),onClick:y=>{var E,p;(E=N.current)!=null&&E.contains(y.target)||(p=N.current)==null||p.click()},ref:f,...u},r,e.createElement("td",{className:"ffe-table__expand-button-td"},e.createElement(L,null,e.createElement("button",{className:g("ffe-table__expand-button",{"ffe-table__expand-button--open":a}),ref:N,type:"button","aria-label":a?h[o].showLess:h[o].showMore,"aria-controls":i,"aria-expanded":a,onClick:y=>{m(E=>!E),c(!0),l==null||l(y)}},e.createElement(J,{fileUrl:"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgLTk2MCA5NjAgOTYwIiB3aWR0aD0iMjQiPjxwYXRoIGQ9Ik00ODAtMzczLjUzOXEtNy4yMzEgMC0xMy40NjEtMi4zMDgtNi4yMzEtMi4zMDgtMTEuODQ2LTcuOTIzTDI3NC45MjQtNTYzLjUzOXEtOC4zMDgtOC4zMDctOC41LTIwLjg4NC0uMTkzLTEyLjU3NyA4LjUtMjEuMjY5IDguNjkyLTguNjkyIDIxLjA3Ni04LjY5MnQyMS4wNzYgOC42OTJMNDgwLTQ0Mi43NjhsMTYyLjkyNC0xNjIuOTI0cTguMzA3LTguMzA3IDIwLjg4NC04LjUgMTIuNTc2LS4xOTIgMjEuMjY4IDguNSA4LjY5MyA4LjY5MiA4LjY5MyAyMS4wNzcgMCAxMi4zODQtOC42OTMgMjEuMDc2TDUwNS4zMDctMzgzLjc3cS01LjYxNSA1LjYxNS0xMS44NDYgNy45MjMtNi4yMyAyLjMwOC0xMy40NjEgMi4zMDhaIi8+PC9zdmc+",size:"md"}))))),e.createElement("tr",{className:"ffe-table__expand-content-tr","aria-hidden":C,id:i},e.createElement("td",{colSpan:9999},e.createElement(ae,{isOpen:a,onRest:()=>c(!1)},e.createElement(L,{className:"ffe-table__expand-content"},!C&&t)))))});R.__docgenInfo={description:"",methods:[],displayName:"TableRowExpandable",props:{expandContent:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},locale:{required:!1,tsType:{name:"union",raw:"'nb' | 'nn' | 'en'",elements:[{name:"literal",value:"'nb'"},{name:"literal",value:"'nn'"},{name:"literal",value:"'en'"}]},description:"",defaultValue:{value:"'nb'",computed:!1}},isDefaultOpen:{required:!1,tsType:{name:"boolean"},description:""},onClick:{required:!1,tsType:{name:"ReactMouseEventHandler",raw:"React.MouseEventHandler<HTMLButtonElement>",elements:[{name:"HTMLButtonElement"}]},description:""}},composes:["Omit"]};const de={title:"Komponenter/Table/Table",component:D,argTypes:{breakPoint:{control:{type:"radio"},options:["none","sm","md"],mapping:{none:"none",sm:"sm",md:"md"},description:"Breakpoint for en responsiv tabell",defaultValue:"sm"}}},I={args:{},render:n=>{const t=[{name:"Anders",age:32},{name:"Erik",age:25},{name:"Gunn",age:29},{name:"Safi",age:42},{name:"Sandra",age:42}],r="Navn",o="Alder",l=" Gjenomsnittsalder";return e.createElement("div",{style:{overflowX:"auto"}},e.createElement(D,{...n},e.createElement(x,null,"Utviklere"),e.createElement(w,null,e.createElement(M,null,e.createElement(T,{scope:"col"},r),e.createElement(T,{scope:"col"},o))),e.createElement(v,null,t.map(s=>e.createElement(M,{key:s.name},e.createElement(b,{columnHeader:r},s.name),e.createElement(b,{columnHeader:o},s.age)))),e.createElement(k,null,e.createElement(M,null,e.createElement(T,{scope:"row"},l),e.createElement(b,{columnHeader:l},t.reduce((s,u)=>s+u.age,0)/t.length)))))}},H={args:{},render:n=>{const t=[{name:"Ola Normann",email:"ola@normann.no",expand:"Info: mer spennende info om Ola"},{name:"Sivert Svensk",email:"sivert@svenska.se",expand:"Info: mer spennende info om Sivert"},{name:"Daniel Dansk",email:"daniel@dansk.dk",expand:"Info: mer spennende info om Daniel"}],r="Navn",o="E-post";return e.createElement("div",{style:{overflowX:"auto"}},e.createElement(D,{...n},e.createElement(x,null,"Tabel utvidbare rader"),e.createElement(w,null,e.createElement(M,null,e.createElement(T,{scope:"col"},r),e.createElement(T,{scope:"col"},o))),e.createElement(v,null,t.map((l,s)=>e.createElement(R,{isDefaultOpen:s===1,key:l.email,expandContent:l.expand},e.createElement(b,{columnHeader:r},l.name),e.createElement(b,{columnHeader:o},l.email))))))}},O={args:{},render:n=>{const t=e.createElement(ne,{as:"button",type:"button",onClick:a=>{a.preventDefault(),a.stopPropagation()}},"poke"),r=[{name:"Ola Normann",email:"ola@normann.no",age:23,fortune:1269300593e-2,button:t,expand:"Info: mer spennende info om Ola"},{name:"Sivert Svensk",email:"sivert@svenska.se",age:45,fortune:9005.93,button:t},{name:"Daniel Dansk",email:"daniel@dansk.dk",age:39,fortune:869300593e-2,button:t},{name:"Lille Ole",email:"lilleole@gmail.com",age:9,fortune:23.12,button:t}];function o(a){return(m,i)=>{const d=a(m),c=a(i);return d?c?d===c?0:d.localeCompare(c):-1:1}}function l(a){return(m,i)=>{const d=a(m),c=a(i);return d?c?d===c?0:c.localeCompare(d):-1:1}}function s(a){return(m,i)=>{const d=a(m),c=a(i);return(d??1/0)-(c??1/0)}}function u(a){return(m,i)=>{const d=a(m),c=a(i);return(c??-1/0)-(d??-1/0)}}const f={name:{ascending:o(a=>a.name),descending:l(a=>a.name),none:null},email:{ascending:o(a=>a.email),descending:l(a=>a.email),none:null},age:{ascending:s(a=>a.age),descending:u(a=>a.age),none:null},fortune:{ascending:s(a=>a.fortune),descending:u(a=>a.fortune),none:null}};return e.createElement("div",{style:{overflowX:"auto"}},e.createElement(D,{...n,initialSort:{sortKey:"email",sortOrder:"descending"}},({activeSortKey:a,activeSortOrder:m})=>{const i=a&&m?f[a][m]:null,d=i?[...r.sort(i)]:r,c="Navn",N="E-post",C="Alder",y="Formue",E="Poke";return e.createElement(e.Fragment,null,e.createElement(x,null,"Masse spennende data"),e.createElement(w,null,e.createElement(M,null,e.createElement(T,{sortKey:"name",scope:"col"},c),e.createElement(T,{sortKey:"email",scope:"col"},N),e.createElement(T,{sortKey:"age",scope:"col"},C),e.createElement(T,{sortKey:"fortune",scope:"col"},y),e.createElement(T,null,E))),e.createElement(v,null,d.map(p=>{const _=e.createElement(e.Fragment,null,e.createElement(b,{columnHeader:c},p.name),e.createElement(b,{columnHeader:N},p.email),e.createElement(b,{columnHeader:C},p.age),e.createElement(b,{columnHeader:y},te(p.fortune,{locale:"nb",decimals:2})),e.createElement(b,{columnHeader:E},p.button));return p.expand?e.createElement(R,{key:p.email,expandContent:p.expand},_):e.createElement(M,{key:p.email},_)})))}))}},S={args:{breakPoint:"md"},render:n=>{const t=[{name:"Anders",age:32},{name:"Erik",age:25},{name:"Gunn",age:29},{name:"Safi",age:42},{name:"Sandra",age:42}],r="Navn",o="Alder",l=" Gjenomsnittsalder";return e.createElement("div",{style:{overflowX:"auto"}},e.createElement(D,{...n},e.createElement(x,null,"Utviklere"),e.createElement(w,null,e.createElement(M,null,e.createElement(T,{scope:"col"},r),e.createElement(T,{scope:"col"},o))),e.createElement(v,null,t.map(s=>e.createElement(M,{key:s.name},e.createElement(b,{columnHeader:r},s.name),e.createElement(b,{columnHeader:o},s.age)))),e.createElement(k,null,e.createElement(M,null,e.createElement(T,{scope:"row"},l),e.createElement(b,{columnHeader:l},t.reduce((s,u)=>s+u.age,0)/t.length)))))}};var B,F,U;I.parameters={...I.parameters,docs:{...(B=I.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {},
  render: args => {
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
    }];
    const navnHeader = 'Navn';
    const alderHeader = 'Alder';
    const gjenomsnittsalderHeader = ' Gjenomsnittsalder';
    return <div style={{
      overflowX: 'auto'
    }}>
                <Table {...args}>
                    <TableCaption>Utviklere</TableCaption>
                    <TableHead>
                        <TableRow>
                            <TableHeaderCell scope="col">
                                {navnHeader}
                            </TableHeaderCell>
                            <TableHeaderCell scope="col">
                                {alderHeader}
                            </TableHeaderCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {data.map(it => <TableRow key={it.name}>
                                <TableDataCell columnHeader={navnHeader}>
                                    {it.name}
                                </TableDataCell>
                                <TableDataCell columnHeader={alderHeader}>
                                    {it.age}
                                </TableDataCell>
                            </TableRow>)}
                    </TableBody>
                    <TableFoot>
                        <TableRow>
                            <TableHeaderCell scope="row">
                                {gjenomsnittsalderHeader}
                            </TableHeaderCell>
                            <TableDataCell columnHeader={gjenomsnittsalderHeader}>
                                {data.reduce((sum, curr) => sum + curr.age, 0) / data.length}
                            </TableDataCell>
                        </TableRow>
                    </TableFoot>
                </Table>
            </div>;
  }
}`,...(U=(F=I.parameters)==null?void 0:F.docs)==null?void 0:U.source}}};var Q,P,X;H.parameters={...H.parameters,docs:{...(Q=H.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  args: {},
  render: args => {
    const data = [{
      name: 'Ola Normann',
      email: 'ola@normann.no',
      expand: 'Info: mer spennende info om Ola'
    }, {
      name: 'Sivert Svensk',
      email: 'sivert@svenska.se',
      expand: 'Info: mer spennende info om Sivert'
    }, {
      name: 'Daniel Dansk',
      email: 'daniel@dansk.dk',
      expand: 'Info: mer spennende info om Daniel'
    }];
    const navnHeader = 'Navn';
    const epostHeader = 'E-post';
    return <div style={{
      overflowX: 'auto'
    }}>
                <Table {...args}>
                    <TableCaption>Tabel utvidbare rader</TableCaption>
                    <TableHead>
                        <TableRow>
                            <TableHeaderCell scope="col">
                                {navnHeader}
                            </TableHeaderCell>
                            <TableHeaderCell scope="col">
                                {epostHeader}
                            </TableHeaderCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {data.map((it, index) => <TableRowExpandable isDefaultOpen={index === 1} key={it.email} expandContent={it.expand}>
                                <TableDataCell columnHeader={navnHeader}>
                                    {it.name}
                                </TableDataCell>
                                <TableDataCell columnHeader={epostHeader}>
                                    {it.email}
                                </TableDataCell>
                            </TableRowExpandable>)}
                    </TableBody>
                </Table>
            </div>;
  }
}`,...(X=(P=H.parameters)==null?void 0:P.docs)==null?void 0:X.source}}};var K,q,G;O.parameters={...O.parameters,docs:{...(K=O.parameters)==null?void 0:K.docs,source:{originalSource:`{
  args: {},
  render: args => {
    type Data = {
      name: string;
      email: string;
      age: number;
      fortune: number;
      button: React.ReactNode;
      expand?: React.ReactNode;
    };
    const button = <TertiaryButton as="button" type="button" onClick={e => {
      e.preventDefault();
      e.stopPropagation();
    }}>
                poke
            </TertiaryButton>;
    const data: Data[] = [{
      name: 'Ola Normann',
      email: 'ola@normann.no',
      age: 23,
      fortune: 12693005.93,
      button,
      expand: 'Info: mer spennende info om Ola'
    }, {
      name: 'Sivert Svensk',
      email: 'sivert@svenska.se',
      age: 45,
      fortune: 9005.93,
      button
    }, {
      name: 'Daniel Dansk',
      email: 'daniel@dansk.dk',
      age: 39,
      fortune: 8693005.93,
      button
    }, {
      name: 'Lille Ole',
      email: 'lilleole@gmail.com',
      age: 9,
      fortune: 23.12,
      button
    }];
    function compareStringAsc<Item>(getField: (item: Item) => string | null | undefined) {
      return (itemA: Item, itemB: Item) => {
        const a = getField(itemA);
        const b = getField(itemB);
        if (!a) return 1;
        if (!b) return -1;
        if (a === b) return 0;
        return a.localeCompare(b);
      };
    }
    function compareStringDesc<Item>(getField: (item: Item) => string | null | undefined) {
      return (itemA: Item, itemB: Item) => {
        const a = getField(itemA);
        const b = getField(itemB);
        if (!a) return 1;
        if (!b) return -1;
        if (a === b) return 0;
        return b.localeCompare(a);
      };
    }
    function compareNumberAsc<Item>(getField: (item: Item) => number | null | undefined) {
      return (itemA: Item, itemB: Item) => {
        const a = getField(itemA);
        const b = getField(itemB);
        return (a != null ? a : Infinity) - (b != null ? b : Infinity);
      };
    }
    function compareNumberDesc<Item>(getField: (item: Item) => number | null | undefined) {
      return (itemA: Item, itemB: Item) => {
        const a = getField(itemA);
        const b = getField(itemB);
        return (b != null ? b : -Infinity) - (a != null ? a : -Infinity);
      };
    }
    const sortFunctions = {
      name: {
        ascending: compareStringAsc<Data>(it => it.name),
        descending: compareStringDesc<Data>(it => it.name),
        none: null
      },
      email: {
        ascending: compareStringAsc<Data>(it => it.email),
        descending: compareStringDesc<Data>(it => it.email),
        none: null
      },
      age: {
        ascending: compareNumberAsc<Data>(it => it.age),
        descending: compareNumberDesc<Data>(it => it.age),
        none: null
      },
      fortune: {
        ascending: compareNumberAsc<Data>(it => it.fortune),
        descending: compareNumberDesc<Data>(it => it.fortune),
        none: null
      }
    };
    return <div style={{
      overflowX: 'auto'
    }}>
                <Table {...args} initialSort={{
        sortKey: 'email',
        sortOrder: 'descending'
      }}>
                    {({
          activeSortKey,
          activeSortOrder
        }) => {
          const sortFunc = activeSortKey && activeSortOrder ? sortFunctions[activeSortKey as keyof typeof sortFunctions][activeSortOrder] : null;
          const sortedData = sortFunc ? [...data.sort(sortFunc)] : data;
          const navnHeader = 'Navn';
          const epostHeader = 'E-post';
          const alderHeader = 'Alder';
          const formueHeader = 'Formue';
          const pokeHeader = 'Poke';
          return <>
                                <TableCaption>
                                    Masse spennende data
                                </TableCaption>
                                <TableHead>
                                    <TableRow>
                                        <TableHeaderCell sortKey="name" scope="col">
                                            {navnHeader}
                                        </TableHeaderCell>
                                        <TableHeaderCell sortKey="email" scope="col">
                                            {epostHeader}
                                        </TableHeaderCell>
                                        <TableHeaderCell sortKey="age" scope="col">
                                            {alderHeader}
                                        </TableHeaderCell>
                                        <TableHeaderCell sortKey="fortune" scope="col">
                                            {formueHeader}
                                        </TableHeaderCell>
                                        <TableHeaderCell>
                                            {pokeHeader}
                                        </TableHeaderCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {sortedData.map(it => {
                const rowContent = <>
                                                <TableDataCell columnHeader={navnHeader}>
                                                    {it.name}
                                                </TableDataCell>
                                                <TableDataCell columnHeader={epostHeader}>
                                                    {it.email}
                                                </TableDataCell>
                                                <TableDataCell columnHeader={alderHeader}>
                                                    {it.age}
                                                </TableDataCell>
                                                <TableDataCell columnHeader={formueHeader}>
                                                    {formatNumber(it.fortune, {
                      locale: 'nb',
                      decimals: 2
                    })}
                                                </TableDataCell>
                                                <TableDataCell columnHeader={pokeHeader}>
                                                    {it.button}
                                                </TableDataCell>
                                            </>;
                return it.expand ? <TableRowExpandable key={it.email} expandContent={it.expand}>
                                                {rowContent}
                                            </TableRowExpandable> : <TableRow key={it.email}>
                                                {rowContent}
                                            </TableRow>;
              })}
                                </TableBody>
                            </>;
        }}
                </Table>
            </div>;
  }
}`,...(G=(q=O.parameters)==null?void 0:q.docs)==null?void 0:G.source}}};var Z,W,V;S.parameters={...S.parameters,docs:{...(Z=S.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  args: {
    breakPoint: 'md'
  },
  render: args => {
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
    }];
    const navnHeader = 'Navn';
    const alderHeader = 'Alder';
    const gjenomsnittsalderHeader = ' Gjenomsnittsalder';
    return <div style={{
      overflowX: 'auto'
    }}>
                <Table {...args}>
                    <TableCaption>Utviklere</TableCaption>
                    <TableHead>
                        <TableRow>
                            <TableHeaderCell scope="col">
                                {navnHeader}
                            </TableHeaderCell>
                            <TableHeaderCell scope="col">
                                {alderHeader}
                            </TableHeaderCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {data.map(it => <TableRow key={it.name}>
                                <TableDataCell columnHeader={navnHeader}>
                                    {it.name}
                                </TableDataCell>
                                <TableDataCell columnHeader={alderHeader}>
                                    {it.age}
                                </TableDataCell>
                            </TableRow>)}
                    </TableBody>
                    <TableFoot>
                        <TableRow>
                            <TableHeaderCell scope="row">
                                {gjenomsnittsalderHeader}
                            </TableHeaderCell>
                            <TableDataCell columnHeader={gjenomsnittsalderHeader}>
                                {data.reduce((sum, curr) => sum + curr.age, 0) / data.length}
                            </TableDataCell>
                        </TableRow>
                    </TableFoot>
                </Table>
            </div>;
  }
}`,...(V=(W=S.parameters)==null?void 0:W.docs)==null?void 0:V.source}}};const me=["Standard","Expandable","Sortable","DifferentBreakPoint"],fe=Object.freeze(Object.defineProperty({__proto__:null,DifferentBreakPoint:S,Expandable:H,Sortable:O,Standard:I,__namedExportsOrder:me,default:de},Symbol.toStringTag,{value:"Module"}));export{S as D,H as E,I as S,fe as T,O as a};
