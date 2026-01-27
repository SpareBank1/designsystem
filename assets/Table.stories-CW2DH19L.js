import{r as E,R as e}from"./index-DQDNmYQF.js";import{c as f}from"./index-D2FocPV0.js";import{I as ne}from"./Icon-D_nm5xPy.js";import{S as re}from"./StrongText-DBVLKrPS.js";import{C as le}from"./Collapse-BVkyKCdf.js";import{P as oe}from"./Paragraph-7jO2Jnpx.js";import{S as se}from"./SecondaryButton-Boh02aDD.js";import{f as de}from"./formatNumber-CbrmByI5.js";import{T as ce}from"./TertiaryButton-Bljp0IOX.js";const z=["none","ascending","descending"],R=e.createContext({updateSort:()=>null,getSort:()=>"none"}),h=(t="none")=>t?z[(z.indexOf(t)+1)%z.length]:"none",te=({initialSort:t,children:n})=>{const[r,o]=E.useState((t==null?void 0:t.sortOrder)??"none"),[l,s]=E.useState(t==null?void 0:t.sortKey),i=a=>{a===l?o(h(r)):(s(a),o(h("none")))},M=a=>a===l?r:"none";return e.createElement(R.Provider,{value:{activeSortOrder:r,activeSortKey:l,updateSort:i,getSort:M}},n)};te.__docgenInfo={description:"",methods:[],displayName:"TableProvider",props:{initialSort:{required:!1,tsType:{name:"signature",type:"object",raw:"{ sortOrder: SortOrder; sortKey: string }",signature:{properties:[{key:"sortOrder",value:{name:"unknown[number]",raw:"(typeof ariaSortOrders)[number]",required:!0}},{key:"sortKey",value:{name:"string",required:!0}}]}},description:""},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};const N=e.forwardRef(({className:t,initialSort:n,children:r,breakPoint:o="sm",...l},s)=>e.createElement(te,{initialSort:n},e.createElement(R.Consumer,null,({activeSortOrder:i,activeSortKey:M})=>e.createElement("table",{className:f("ffe-table",{"ffe-table--break-sm":o==="sm"},{"ffe-table--break-md":o==="md"},t),ref:s,...l},typeof r=="function"?r({activeSortOrder:i,activeSortKey:M}):r))));N.__docgenInfo={description:"",methods:[],displayName:"Table",props:{initialSort:{required:!1,tsType:{name:"signature",type:"object",raw:"{ sortOrder: SortOrder; sortKey: string }",signature:{properties:[{key:"sortOrder",value:{name:"unknown[number]",raw:"(typeof ariaSortOrders)[number]",required:!0}},{key:"sortKey",value:{name:"string",required:!0}}]}},description:""},children:{required:!0,tsType:{name:"union",raw:`| React.ReactNode
| (({
      activeSortOrder,
      activeSortKey,
  }: {
      activeSortOrder?: TableContextInterFace['activeSortOrder'];
      activeSortKey?: TableContextInterFace['activeSortKey'];
  }) => React.ReactNode)`,elements:[{name:"ReactReactNode",raw:"React.ReactNode"},{name:"unknown"}]},description:""},breakPoint:{required:!1,tsType:{name:"union",raw:"'none' | 'sm' | 'md'",elements:[{name:"literal",value:"'none'"},{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"}]},description:"",defaultValue:{value:"'sm'",computed:!1}}},composes:["Omit"]};const I=({className:t,...n})=>e.createElement("thead",{className:f("ffe-table__head",t),...n});I.__docgenInfo={description:"",methods:[],displayName:"TableHead"};const L=({className:t,...n})=>e.createElement("tbody",{className:f("ffe-table__body",t),...n});L.__docgenInfo={description:"",methods:[],displayName:"TableBody"};const C=({className:t,...n})=>e.createElement("div",{className:f("ffe-table__cell-content",t),...n});C.__docgenInfo={description:"",methods:[],displayName:"CellContent"};const me="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgLTk2MCA5NjAgOTYwIiB3aWR0aD0iMjQiPjxwYXRoIGQ9Ik00NTAuMDAxLTYzNS42OTQgMzE3LjA3Ni01MDIuNzdxLTguMzA3IDguMzA3LTIwLjg4NCA4LjUtMTIuNTc2LjE5Mi0yMS4yNjgtOC41LTguNjkzLTguNjkyLTguNjkzLTIxLjA3NiAwLTEyLjM4NSA4LjY5My0yMS4wNzdsMTc5Ljc2OS0xNzkuNzY5cTEwLjg0Ni0xMC44NDYgMjUuMzA3LTEwLjg0NiAxNC40NjEgMCAyNS4zMDcgMTAuODQ2bDE3OS43NjkgMTc5Ljc2OXE4LjMwOCA4LjMwOCA4LjUgMjAuODg0LjE5MyAxMi41NzctOC41IDIxLjI2OS04LjY5MiA4LjY5Mi0yMS4wNzYgOC42OTJ0LTIxLjA3Ni04LjY5Mkw1MDkuOTk5LTYzNS42OTR2MzUxLjg0OHEwIDEyLjc2OC04LjYxNSAyMS4zODQtOC42MTUgOC42MTUtMjEuMzg0IDguNjE1dC0yMS4zODQtOC42MTVxLTguNjE1LTguNjE2LTguNjE1LTIxLjM4NHYtMzUxLjg0OFoiLz48L3N2Zz4=",ie="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgLTk2MCA5NjAgOTYwIiB3aWR0aD0iMjQiPjxwYXRoIGQ9Ik0zNjYuNTI1LTQ1NC4yMzJxLTEyLjc1NSAwLTIxLjM3LTguNjI1LTguNjE1LTguNjI0LTguNjE1LTIxLjM3NHYtMjYxLjIzMmwtOTIuNjk0IDkyLjY5NHEtOC4xMTUgOC4zMDctMjAuMjg4IDguMzA3dC0yMS40OC04LjYwOHEtOS4zMDgtOS4zOTEtOS4zMDgtMjEuNDY4dDkuMzA4LTIxLjM4NGwxMzguNzY5LTEzOC43NjlxNS42MTUtNS42MTUgMTEuODk3LTcuOTIzdDEzLjQ2Mi0yLjMwOHE3LjE3OSAwIDEzLjY0IDIuMzI1IDYuNDYyIDIuMzI2IDEyIDcuOTA2bDEzOS43NjkgMTM5Ljc2OXE4LjkyMyA4LjkyMyA4LjgwOCAyMC42OTItLjExNiAxMS43NjktOS40MjMgMjEuMTYtOS4zMDcgOC42MDgtMjEuMDc2IDguOTE2LTExLjc2OS4zMDgtMjEuMDc3LTlsLTkyLjMwOS05Mi4zMDl2MjYxLjYxN3EwIDEyLjU4Ni04LjYyOCAyMS4xLTguNjI5IDguNTE0LTIxLjM4NSA4LjUxNFptMjI3LjI2OSAzMzguNzY5cS03LjE3OSAwLTEzLjY0LTIuMzI1LTYuNDYyLTIuMzI1LTEyLTcuOTA2TDQyOC4zODUtMjY1LjQ2M3EtOC45MjMtOC45MjItOC44MDgtMjAuNjkxLjExNi0xMS43NjkgOS40MjMtMjEuMTYgOS4zMDctOC42MDkgMjEuMDc2LTguOTE3IDExLjc2OS0uMzA3IDIxLjA3NyA5bDkyLjMwOSA5Mi4zMDl2LTI2MS42MTZxMC0xMi41ODYgOC42MjgtMjEuMTAxIDguNjI5LTguNTE0IDIxLjM4NS04LjUxNCAxMi43NTUgMCAyMS4zNyA4LjYyNXQ4LjYxNSAyMS4zNzR2MjYxLjIzMmw5Mi42OTQtOTIuNjkzcTguMTE1LTguMzA4IDIwLjI4OC04LjMwOHQyMS40OCA4LjYwOXE5LjMwOCA5LjM5MSA5LjMwOCAyMS40NjcgMCAxMi4wNzctOS4zMDggMjEuMzg0TDYxOS4xNTMtMTI1LjY5NHEtNS42MTUgNS42MTYtMTEuODk3IDcuOTIzLTYuMjgyIDIuMzA4LTEzLjQ2MiAyLjMwOFoiLz48L3N2Zz4=",p=e.forwardRef(({className:t,sortKey:n,children:r,onClick:o,...l},s)=>{const{updateSort:i,getSort:M}=E.useContext(R),a=E.useRef(null),m=n?M(n):void 0;return e.createElement("th",{className:f("ffe-table__th",{"ffe-table__th--sortable":n},{"ffe-table__th--sortable-ascending":m==="ascending"},{"ffe-table__th--sortable-descending":m==="descending"},t),"aria-sort":m,onClick:u=>{var c,d;(c=a.current)!=null&&c.contains(u.target)||(d=a.current)==null||d.click(),o==null||o(u)},ref:s,...l},n?e.createElement(C,null,e.createElement("button",{className:"ffe-table__sort-button",type:"button",onClick:()=>i(n),ref:a},e.createElement("span",null,r),e.createElement(ne,{fileUrl:m==="none"?ie:me,size:"md"}))):e.createElement(C,null,r))});p.__docgenInfo={description:"",methods:[],displayName:"TableHeaderCell",props:{sortKey:{required:!1,tsType:{name:"string"},description:""}}};const g=e.forwardRef(({className:t,...n},r)=>e.createElement("tr",{className:f("ffe-table__tr",t),ref:r,...n}));g.__docgenInfo={description:"",methods:[],displayName:"TableRow"};const b=e.forwardRef(({className:t,columnHeader:n,children:r,...o},l)=>e.createElement("td",{className:f("ffe-table__td",t),ref:l,...o},e.createElement(C,null,n&&e.createElement(re,{className:"ffe-table__column-header","aria-hidden":!0},n,":"),r)));b.__docgenInfo={description:"",methods:[],displayName:"TableDataCell",props:{columnHeader:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};const H=e.forwardRef(({className:t,...n},r)=>e.createElement("caption",{className:f("ffe-table__caption",t),ref:r,...n}));H.__docgenInfo={description:"",methods:[],displayName:"TableCaption"};const _=({className:t,...n})=>e.createElement("tfoot",{className:f("ffe-table__foot",t),...n});_.__docgenInfo={description:"",methods:[],displayName:"TableFoot"};const ue={showMore:"Vis mer",showLess:"Vis mindre"},pe={showMore:"Vis meir",showLess:"Vis mindre"},be={showMore:"Show more",showLess:"Show less"},B={nb:ue,nn:pe,en:be},A=e.forwardRef(({className:t,expandContent:n,children:r,locale:o="nb",onClick:l,isDefaultOpen:s,...i},M)=>{const[a,m]=E.useState(!!s),u=E.useId(),[c,d]=E.useState(!1),y=E.useRef(null),O=!c&&!a;return e.createElement(e.Fragment,null,e.createElement("tr",{className:f("ffe-table__tr","ffe-table__tr--expand",{"ffe-table__tr--expand-open":a},{"ffe-table__tr--animating":c},t),onClick:D=>{var j,T;(j=y.current)!=null&&j.contains(D.target)||(T=y.current)==null||T.click()},ref:M,...i},r,e.createElement("td",{className:"ffe-table__expand-button-td"},e.createElement(C,null,e.createElement("button",{className:f("ffe-table__expand-button",{"ffe-table__expand-button--open":a}),ref:y,type:"button","aria-label":a?B[o].showLess:B[o].showMore,"aria-controls":u,"aria-expanded":a,onClick:D=>{m(j=>!j),d(!0),l==null||l(D)}},e.createElement(ne,{fileUrl:"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgLTk2MCA5NjAgOTYwIiB3aWR0aD0iMjQiPjxwYXRoIGQ9Ik00ODAtMzczLjUzOXEtNy4yMzEgMC0xMy40NjEtMi4zMDgtNi4yMzEtMi4zMDgtMTEuODQ2LTcuOTIzTDI3NC45MjQtNTYzLjUzOXEtOC4zMDgtOC4zMDctOC41LTIwLjg4NC0uMTkzLTEyLjU3NyA4LjUtMjEuMjY5IDguNjkyLTguNjkyIDIxLjA3Ni04LjY5MnQyMS4wNzYgOC42OTJMNDgwLTQ0Mi43NjhsMTYyLjkyNC0xNjIuOTI0cTguMzA3LTguMzA3IDIwLjg4NC04LjUgMTIuNTc2LS4xOTIgMjEuMjY4IDguNSA4LjY5MyA4LjY5MiA4LjY5MyAyMS4wNzcgMCAxMi4zODQtOC42OTMgMjEuMDc2TDUwNS4zMDctMzgzLjc3cS01LjYxNSA1LjYxNS0xMS44NDYgNy45MjMtNi4yMyAyLjMwOC0xMy40NjEgMi4zMDhaIi8+PC9zdmc+",size:"md"}))))),e.createElement("tr",{className:"ffe-table__expand-content-tr","aria-hidden":O,id:u},e.createElement("td",{colSpan:9999},e.createElement(le,{isOpen:a,onRest:()=>d(!1)},e.createElement(C,{className:"ffe-table__expand-content"},!O&&(typeof n=="function"?n(m):n))))))});A.__docgenInfo={description:"",methods:[],displayName:"TableRowExpandable",props:{expandContent:{required:!0,tsType:{name:"union",raw:"React.ReactNode | ((setIsOpen: React.Dispatch<React.SetStateAction<boolean>>) => React.ReactNode)",elements:[{name:"ReactReactNode",raw:"React.ReactNode"},{name:"unknown"}]},description:""},locale:{required:!1,tsType:{name:"union",raw:"'nb' | 'nn' | 'en'",elements:[{name:"literal",value:"'nb'"},{name:"literal",value:"'nn'"},{name:"literal",value:"'en'"}]},description:"",defaultValue:{value:"'nb'",computed:!1}},isDefaultOpen:{required:!1,tsType:{name:"boolean"},description:""},onClick:{required:!1,tsType:{name:"ReactMouseEventHandler",raw:"React.MouseEventHandler<HTMLButtonElement>",elements:[{name:"HTMLButtonElement"}]},description:""}},composes:["Omit"]};const Te={title:"Komponenter/Table/Table",component:N,argTypes:{breakPoint:{control:{type:"radio"},options:["none","sm","md"],mapping:{none:"none",sm:"sm",md:"md"},description:"Breakpoint for en responsiv tabell",defaultValue:"sm"}}},v={args:{},render:t=>{const n=[{name:"Anders",age:32},{name:"Erik",age:25},{name:"Gunn",age:29},{name:"Safi",age:42},{name:"Sandra",age:42}],r="Navn",o="Alder",l=" Gjenomsnittsalder";return e.createElement("div",{style:{overflowX:"auto"}},e.createElement(N,{...t},e.createElement(H,null,"Utviklere"),e.createElement(I,null,e.createElement(g,null,e.createElement(p,{scope:"col"},r),e.createElement(p,{scope:"col"},o))),e.createElement(L,null,n.map(s=>e.createElement(g,{key:s.name},e.createElement(b,{columnHeader:r},s.name),e.createElement(b,{columnHeader:o},s.age)))),e.createElement(_,null,e.createElement(g,null,e.createElement(p,{scope:"row"},l),e.createElement(b,{columnHeader:l},n.reduce((s,i)=>s+i.age,0)/n.length)))))}},S={args:{},render:t=>{const n=[{name:"Ola Normann",email:"ola@normann.no",expand:"Info: mer spennende info om Ola"},{name:"Sivert Svensk",email:"sivert@svenska.se",expand:"Info: mer spennende info om Sivert"},{name:"Daniel Dansk",email:"daniel@dansk.dk",expand:"Info: mer spennende info om Daniel"}],r="Navn",o="E-post";return e.createElement("div",{style:{overflowX:"auto"}},e.createElement(N,{...t},e.createElement(H,null,"Tabel utvidbare rader"),e.createElement(I,null,e.createElement(g,null,e.createElement(p,{scope:"col"},r),e.createElement(p,{scope:"col"},o))),e.createElement(L,null,n.map((l,s)=>e.createElement(A,{isDefaultOpen:s===1,key:l.email,expandContent:l.expand},e.createElement(b,{columnHeader:r},l.name),e.createElement(b,{columnHeader:o},l.email))))))}},x={args:{},render:t=>{const n=[{name:"Ola Normann",email:"ola@normann.no",expand:"Info: mer spennende info om Ola"},{name:"Sivert Svensk",email:"sivert@svenska.se",expand:"Info: mer spennende info om Sivert"},{name:"Daniel Dansk",email:"daniel@dansk.dk",expand:"Info: mer spennende info om Daniel"}],r="Navn",o="E-post";return e.createElement("div",{style:{overflowX:"auto"}},e.createElement(N,{...t},e.createElement(H,null,"Tabel utvidbare rader"),e.createElement(I,null,e.createElement(g,null,e.createElement(p,{scope:"col"},r),e.createElement(p,{scope:"col"},o))),e.createElement(L,null,n.map((l,s)=>e.createElement(A,{isDefaultOpen:s===1,key:l.email,expandContent:i=>e.createElement("div",null,e.createElement(oe,null,l.expand),e.createElement(se,{onClick:()=>i(!1)},"Lukk"))},e.createElement(b,{columnHeader:r},l.name),e.createElement(b,{columnHeader:o},l.email))))))}},w={args:{},render:t=>{const n=e.createElement(ce,{as:"button",type:"button",onClick:a=>{a.preventDefault(),a.stopPropagation()}},"poke"),r=[{name:"Ola Normann",email:"ola@normann.no",age:23,fortune:1269300593e-2,button:n,expand:"Info: mer spennende info om Ola"},{name:"Sivert Svensk",email:"sivert@svenska.se",age:45,fortune:9005.93,button:n},{name:"Daniel Dansk",email:"daniel@dansk.dk",age:39,fortune:869300593e-2,button:n},{name:"Lille Ole",email:"lilleole@gmail.com",age:9,fortune:23.12,button:n}];function o(a){return(m,u)=>{const c=a(m),d=a(u);return c?d?c===d?0:c.localeCompare(d):-1:1}}function l(a){return(m,u)=>{const c=a(m),d=a(u);return c?d?c===d?0:d.localeCompare(c):-1:1}}function s(a){return(m,u)=>{const c=a(m),d=a(u);return(c??1/0)-(d??1/0)}}function i(a){return(m,u)=>{const c=a(m),d=a(u);return(d??-1/0)-(c??-1/0)}}const M={name:{ascending:o(a=>a.name),descending:l(a=>a.name),none:null},email:{ascending:o(a=>a.email),descending:l(a=>a.email),none:null},age:{ascending:s(a=>a.age),descending:i(a=>a.age),none:null},fortune:{ascending:s(a=>a.fortune),descending:i(a=>a.fortune),none:null}};return e.createElement("div",{style:{overflowX:"auto"}},e.createElement(N,{...t,initialSort:{sortKey:"email",sortOrder:"descending"}},({activeSortKey:a,activeSortOrder:m})=>{const u=a&&m?M[a][m]:null,c=u?[...r.sort(u)]:r,d="Navn",y="E-post",O="Alder",D="Formue",j="Poke";return e.createElement(e.Fragment,null,e.createElement(H,null,"Masse spennende data"),e.createElement(I,null,e.createElement(g,null,e.createElement(p,{sortKey:"name",scope:"col"},d),e.createElement(p,{sortKey:"email",scope:"col"},y),e.createElement(p,{sortKey:"age",scope:"col"},O),e.createElement(p,{sortKey:"fortune",scope:"col"},D),e.createElement(p,null,j))),e.createElement(L,null,c.map(T=>{const Y=e.createElement(e.Fragment,null,e.createElement(b,{columnHeader:d},T.name),e.createElement(b,{columnHeader:y},T.email),e.createElement(b,{columnHeader:O},T.age),e.createElement(b,{columnHeader:D},de(T.fortune,{locale:"nb",decimals:2})),e.createElement(b,{columnHeader:j},T.button));return T.expand?e.createElement(A,{key:T.email,expandContent:T.expand},Y):e.createElement(g,{key:T.email},Y)})))}))}},k={args:{breakPoint:"md"},render:t=>{const n=[{name:"Anders",age:32},{name:"Erik",age:25},{name:"Gunn",age:29},{name:"Safi",age:42},{name:"Sandra",age:42}],r="Navn",o="Alder",l=" Gjenomsnittsalder";return e.createElement("div",{style:{overflowX:"auto"}},e.createElement(N,{...t},e.createElement(H,null,"Utviklere"),e.createElement(I,null,e.createElement(g,null,e.createElement(p,{scope:"col"},r),e.createElement(p,{scope:"col"},o))),e.createElement(L,null,n.map(s=>e.createElement(g,{key:s.name},e.createElement(b,{columnHeader:r},s.name),e.createElement(b,{columnHeader:o},s.age)))),e.createElement(_,null,e.createElement(g,null,e.createElement(p,{scope:"row"},l),e.createElement(b,{columnHeader:l},n.reduce((s,i)=>s+i.age,0)/n.length)))))}};var F,U,Q;v.parameters={...v.parameters,docs:{...(F=v.parameters)==null?void 0:F.docs,source:{originalSource:`{
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
}`,...(Q=(U=v.parameters)==null?void 0:U.docs)==null?void 0:Q.source}}};var P,X,K;S.parameters={...S.parameters,docs:{...(P=S.parameters)==null?void 0:P.docs,source:{originalSource:`{
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
}`,...(K=(X=S.parameters)==null?void 0:X.docs)==null?void 0:K.source}}};var q,G,Z;x.parameters={...x.parameters,docs:{...(q=x.parameters)==null?void 0:q.docs,source:{originalSource:`{
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
                        {data.map((it, index) => <TableRowExpandable isDefaultOpen={index === 1} key={it.email} expandContent={setIsOpen => <div>
                                        <Paragraph>{it.expand}</Paragraph>
                                        <SecondaryButton onClick={() => setIsOpen(false)}>Lukk</SecondaryButton>
                                    </div>}>
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
}`,...(Z=(G=x.parameters)==null?void 0:G.docs)==null?void 0:Z.source}}};var W,V,J;w.parameters={...w.parameters,docs:{...(W=w.parameters)==null?void 0:W.docs,source:{originalSource:`{
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
}`,...(J=(V=w.parameters)==null?void 0:V.docs)==null?void 0:J.source}}};var $,ee,ae;k.parameters={...k.parameters,docs:{...($=k.parameters)==null?void 0:$.docs,source:{originalSource:`{
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
}`,...(ae=(ee=k.parameters)==null?void 0:ee.docs)==null?void 0:ae.source}}};const ge=["Standard","Expandable","ExpandableAndClosable","Sortable","DifferentBreakPoint"],Le=Object.freeze(Object.defineProperty({__proto__:null,DifferentBreakPoint:k,Expandable:S,ExpandableAndClosable:x,Sortable:w,Standard:v,__namedExportsOrder:ge,default:Te},Symbol.toStringTag,{value:"Module"}));export{k as D,S as E,v as S,Le as T,w as a};
