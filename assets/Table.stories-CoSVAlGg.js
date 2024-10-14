import{R as e,r as f}from"./index-RYns6xqu.js";import{c as g}from"./index-Dejnh_W_.js";import{I as K}from"./Icon-Dor7S2yd.js";import{S as W}from"./StrongText-BOJ27MaC.js";import{C as V}from"./Collapse-uqyevmtk.js";import{f as q}from"./formatNumber-DrzNqxdR.js";import{T as J}from"./TertiaryButton-BT_xUMdK.js";const w=["none","ascending","descending"],z=e.createContext({updateSort:()=>null,getSort:()=>"none"}),k=(t="none")=>t?w[(w.indexOf(t)+1)%w.length]:"none",Z=({initialSort:t,children:n})=>{const[r,o]=f.useState((t==null?void 0:t.sortOrder)??"none"),[s,u]=f.useState(t==null?void 0:t.sortKey),M=l=>{l===s?o(k(r)):(u(l),o(k("none")))},a=l=>l===s?r:"none";return e.createElement(z.Provider,{value:{activeSortOrder:r,activeSortKey:s,updateSort:M,getSort:a}},n)};Z.__docgenInfo={description:"",methods:[],displayName:"TableProvider",props:{initialSort:{required:!1,tsType:{name:"signature",type:"object",raw:"{ sortOrder: SortOrder; sortKey: string }",signature:{properties:[{key:"sortOrder",value:{name:"unknown[number]",raw:"(typeof ariaSortOrders)[number]",required:!0}},{key:"sortKey",value:{name:"string",required:!0}}]}},description:""},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};const x=e.forwardRef(({className:t,initialSort:n,children:r,breakPoint:o="sm",...s},u)=>e.createElement(Z,{initialSort:n},e.createElement(z.Consumer,null,({activeSortOrder:M,activeSortKey:a})=>e.createElement("table",{className:g("ffe-table",{"ffe-table--break-sm":o==="sm"},{"ffe-table--break-md":o==="md"},t),ref:u,...s},typeof r=="function"?r({activeSortOrder:M,activeSortKey:a}):r))));x.__docgenInfo={description:"",methods:[],displayName:"Table",props:{breakPoint:{defaultValue:{value:"'sm'",computed:!1},required:!1}}};const S=({className:t,...n})=>e.createElement("thead",{className:g("ffe-table__head",t),...n});S.__docgenInfo={description:"",methods:[],displayName:"TableHead"};const H=({className:t,...n})=>e.createElement("tbody",{className:g("ffe-table__body",t),...n});H.__docgenInfo={description:"",methods:[],displayName:"TableBody"};const L=({className:t,...n})=>e.createElement("div",{className:g("ffe-table__cell-content",t),...n});L.__docgenInfo={description:"",methods:[],displayName:"CellContent"};const $="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgLTk2MCA5NjAgOTYwIiB3aWR0aD0iMjQiPjxwYXRoIGQ9Ik00NTAuMDAxLTYzNS42OTQgMzE3LjA3Ni01MDIuNzdxLTguMzA3IDguMzA3LTIwLjg4NCA4LjUtMTIuNTc2LjE5Mi0yMS4yNjgtOC41LTguNjkzLTguNjkyLTguNjkzLTIxLjA3NiAwLTEyLjM4NSA4LjY5My0yMS4wNzdsMTc5Ljc2OS0xNzkuNzY5cTEwLjg0Ni0xMC44NDYgMjUuMzA3LTEwLjg0NiAxNC40NjEgMCAyNS4zMDcgMTAuODQ2bDE3OS43NjkgMTc5Ljc2OXE4LjMwOCA4LjMwOCA4LjUgMjAuODg0LjE5MyAxMi41NzctOC41IDIxLjI2OS04LjY5MiA4LjY5Mi0yMS4wNzYgOC42OTJ0LTIxLjA3Ni04LjY5Mkw1MDkuOTk5LTYzNS42OTR2MzUxLjg0OHEwIDEyLjc2OC04LjYxNSAyMS4zODQtOC42MTUgOC42MTUtMjEuMzg0IDguNjE1dC0yMS4zODQtOC42MTVxLTguNjE1LTguNjE2LTguNjE1LTIxLjM4NHYtMzUxLjg0OFoiLz48L3N2Zz4=",ee="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgLTk2MCA5NjAgOTYwIiB3aWR0aD0iMjQiPjxwYXRoIGQ9Ik0zNjYuNTI1LTQ1NC4yMzJxLTEyLjc1NSAwLTIxLjM3LTguNjI1LTguNjE1LTguNjI0LTguNjE1LTIxLjM3NHYtMjYxLjIzMmwtOTIuNjk0IDkyLjY5NHEtOC4xMTUgOC4zMDctMjAuMjg4IDguMzA3dC0yMS40OC04LjYwOHEtOS4zMDgtOS4zOTEtOS4zMDgtMjEuNDY4dDkuMzA4LTIxLjM4NGwxMzguNzY5LTEzOC43NjlxNS42MTUtNS42MTUgMTEuODk3LTcuOTIzdDEzLjQ2Mi0yLjMwOHE3LjE3OSAwIDEzLjY0IDIuMzI1IDYuNDYyIDIuMzI2IDEyIDcuOTA2bDEzOS43NjkgMTM5Ljc2OXE4LjkyMyA4LjkyMyA4LjgwOCAyMC42OTItLjExNiAxMS43NjktOS40MjMgMjEuMTYtOS4zMDcgOC42MDgtMjEuMDc2IDguOTE2LTExLjc2OS4zMDgtMjEuMDc3LTlsLTkyLjMwOS05Mi4zMDl2MjYxLjYxN3EwIDEyLjU4Ni04LjYyOCAyMS4xLTguNjI5IDguNTE0LTIxLjM4NSA4LjUxNFptMjI3LjI2OSAzMzguNzY5cS03LjE3OSAwLTEzLjY0LTIuMzI1LTYuNDYyLTIuMzI1LTEyLTcuOTA2TDQyOC4zODUtMjY1LjQ2M3EtOC45MjMtOC45MjItOC44MDgtMjAuNjkxLjExNi0xMS43NjkgOS40MjMtMjEuMTYgOS4zMDctOC42MDkgMjEuMDc2LTguOTE3IDExLjc2OS0uMzA3IDIxLjA3NyA5bDkyLjMwOSA5Mi4zMDl2LTI2MS42MTZxMC0xMi41ODYgOC42MjgtMjEuMTAxIDguNjI5LTguNTE0IDIxLjM4NS04LjUxNCAxMi43NTUgMCAyMS4zNyA4LjYyNXQ4LjYxNSAyMS4zNzR2MjYxLjIzMmw5Mi42OTQtOTIuNjkzcTguMTE1LTguMzA4IDIwLjI4OC04LjMwOHQyMS40OCA4LjYwOXE5LjMwOCA5LjM5MSA5LjMwOCAyMS40NjcgMCAxMi4wNzctOS4zMDggMjEuMzg0TDYxOS4xNTMtMTI1LjY5NHEtNS42MTUgNS42MTYtMTEuODk3IDcuOTIzLTYuMjgyIDIuMzA4LTEzLjQ2MiAyLjMwOFoiLz48L3N2Zz4=",T=e.forwardRef(({className:t,sortKey:n,children:r,onClick:o,...s},u)=>{const{updateSort:M,getSort:a}=f.useContext(z),l=f.useRef(null),m=n?a(n):void 0;return e.createElement("th",{className:g("ffe-table__th",{"ffe-table__th--sortable":n},{"ffe-table__th--sortable-ascending":m==="ascending"},{"ffe-table__th--sortable-descending":m==="descending"},t),"aria-sort":m,onClick:d=>{var c,p;(c=l.current)!=null&&c.contains(d.target)||(p=l.current)==null||p.click(),o==null||o(d)},ref:u,...s},n?e.createElement(L,null,e.createElement("button",{className:"ffe-table__sort-button",type:"button",onClick:()=>M(n),ref:l},e.createElement("span",null,r),e.createElement(K,{fileUrl:m==="none"?ee:$,size:"md"}))):e.createElement(L,null,r))});T.__docgenInfo={description:"",methods:[],displayName:"TableHeaderCell"};const j=e.forwardRef(({className:t,...n},r)=>e.createElement("tr",{className:g("ffe-table__tr",t),ref:r,...n}));j.__docgenInfo={description:"",methods:[],displayName:"TableRow"};const b=e.forwardRef(({className:t,columnHeader:n,children:r,...o},s)=>e.createElement("td",{className:g("ffe-table__td",t),ref:s,...o},e.createElement(L,null,n&&e.createElement(W,{className:"ffe-table__column-header","aria-hidden":!0},n,":"),r)));b.__docgenInfo={description:"",methods:[],displayName:"TableDataCell"};const A=e.forwardRef(({className:t,...n},r)=>e.createElement("caption",{className:g("ffe-table__caption",t),ref:r,...n}));A.__docgenInfo={description:"",methods:[],displayName:"TableCaption"};const G=({className:t,...n})=>e.createElement("tfoot",{className:g("ffe-table__foot",t),...n});G.__docgenInfo={description:"",methods:[],displayName:"TableFoot"};const ae={showMore:"Vis mer",showLess:"Vis mindre"},te={showMore:"Vis meir",showLess:"Vis mindre"},ne={showMore:"Show more",showLess:"Show less"},_={nb:ae,nn:te,en:ne},v=e.forwardRef(({className:t,expandContent:n,children:r,locale:o="nb",onClick:s,isDefaultOpen:u,...M},a)=>{const[l,m]=f.useState(!!u),d=f.useId(),[c,p]=f.useState(!1),N=f.useRef(null),I=!c&&!l;return e.createElement(e.Fragment,null,e.createElement("tr",{className:g("ffe-table__tr","ffe-table__tr--expand",{"ffe-table__tr--expand-open":l},{"ffe-table__tr--animating":c},t),onClick:E=>{var i,D;(i=N.current)!=null&&i.contains(E.target)||(D=N.current)==null||D.click()},ref:a,...M},r,e.createElement("td",{className:"ffe-table__expand-button-td"},e.createElement(L,null,e.createElement("button",{className:g("ffe-table__expand-button",{"ffe-table__expand-button--open":l}),ref:N,type:"button","aria-label":l?_[o].showLess:_[o].showMore,"aria-controls":d,"aria-expanded":l,onClick:E=>{m(i=>!i),p(!0),s==null||s(E)}},e.createElement(K,{fileUrl:"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgLTk2MCA5NjAgOTYwIiB3aWR0aD0iMjQiPjxwYXRoIGQ9Ik00ODAtMzczLjUzOXEtNy4yMzEgMC0xMy40NjEtMi4zMDgtNi4yMzEtMi4zMDgtMTEuODQ2LTcuOTIzTDI3NC45MjQtNTYzLjUzOXEtOC4zMDgtOC4zMDctOC41LTIwLjg4NC0uMTkzLTEyLjU3NyA4LjUtMjEuMjY5IDguNjkyLTguNjkyIDIxLjA3Ni04LjY5MnQyMS4wNzYgOC42OTJMNDgwLTQ0Mi43NjhsMTYyLjkyNC0xNjIuOTI0cTguMzA3LTguMzA3IDIwLjg4NC04LjUgMTIuNTc2LS4xOTIgMjEuMjY4IDguNSA4LjY5MyA4LjY5MiA4LjY5MyAyMS4wNzcgMCAxMi4zODQtOC42OTMgMjEuMDc2TDUwNS4zMDctMzgzLjc3cS01LjYxNSA1LjYxNS0xMS44NDYgNy45MjMtNi4yMyAyLjMwOC0xMy40NjEgMi4zMDhaIi8+PC9zdmc+",size:"md"}))))),e.createElement("tr",{className:"ffe-table__expand-content-tr","aria-hidden":I,id:d},e.createElement("td",{colSpan:9999},e.createElement(V,{isOpen:l,onRest:()=>p(!1)},e.createElement(L,{className:"ffe-table__expand-content"},!I&&n)))))});v.__docgenInfo={description:"",methods:[],displayName:"TableRowExpandable",props:{locale:{defaultValue:{value:"'nb'",computed:!1},required:!1}}};const re={title:"components/table/Table",component:x},y={args:{},render:()=>{const t=[{name:"Anders",age:32},{name:"Erik",age:25},{name:"Gunn",age:29},{name:"Safi",age:42},{name:"Sandra",age:42}],n="Navn",r="Alder",o=" Gjenomsnittsalder";return e.createElement("div",{style:{overflowX:"auto"}},e.createElement(x,null,e.createElement(A,null,"Utviklere"),e.createElement(S,null,e.createElement(j,null,e.createElement(T,{scope:"col"},n),e.createElement(T,{scope:"col"},r))),e.createElement(H,null,t.map(s=>e.createElement(j,{key:s.name},e.createElement(b,{columnHeader:n},s.name),e.createElement(b,{columnHeader:r},s.age)))),e.createElement(G,null,e.createElement(j,null,e.createElement(T,{scope:"row"},o),e.createElement(b,{columnHeader:o},t.reduce((s,u)=>s+u.age,0)/t.length)))))}},C={args:{},render:()=>{const t=[{name:"Ola Normann",email:"ola@normann.no",expand:"Info: mer spennende info om Ola"},{name:"Sivert Svensk",email:"sivert@svenska.se",expand:"Info: mer spennende info om Sivert"},{name:"Daniel Dansk",email:"daniel@dansk.dk",expand:"Info: mer spennende info om Daniel"}],n="Navn",r="E-post";return e.createElement("div",{style:{overflowX:"auto"}},e.createElement(x,null,e.createElement(A,null,"Tabel utvidbare rader"),e.createElement(S,null,e.createElement(j,null,e.createElement(T,{scope:"col"},n),e.createElement(T,{scope:"col"},r))),e.createElement(H,null,t.map((o,s)=>e.createElement(v,{isDefaultOpen:s===1,key:o.email,expandContent:o.expand},e.createElement(b,{columnHeader:n},o.name),e.createElement(b,{columnHeader:r},o.email))))))}},O={args:{},render:()=>{const t=e.createElement(J,{as:"button",type:"button",onClick:a=>{a.preventDefault(),a.stopPropagation()}},"poke"),n=[{name:"Ola Normann",email:"ola@normann.no",age:23,fortune:1269300593e-2,button:t,expand:"Info: mer spennende info om Ola"},{name:"Sivert Svensk",email:"sivert@svenska.se",age:45,fortune:9005.93,button:t},{name:"Daniel Dansk",email:"daniel@dansk.dk",age:39,fortune:869300593e-2,button:t},{name:"Lille Ole",email:"lilleole@gmail.com",age:9,fortune:23.12,button:t}];function r(a){return(l,m)=>{const d=a(l),c=a(m);return d?c?d===c?0:d.localeCompare(c):-1:1}}function o(a){return(l,m)=>{const d=a(l),c=a(m);return d?c?d===c?0:c.localeCompare(d):-1:1}}function s(a){return(l,m)=>{const d=a(l),c=a(m);return(d??1/0)-(c??1/0)}}function u(a){return(l,m)=>{const d=a(l),c=a(m);return(c??-1/0)-(d??-1/0)}}const M={name:{ascending:r(a=>a.name),descending:o(a=>a.name),none:null},email:{ascending:r(a=>a.email),descending:o(a=>a.email),none:null},age:{ascending:s(a=>a.age),descending:u(a=>a.age),none:null},fortune:{ascending:s(a=>a.fortune),descending:u(a=>a.fortune),none:null}};return e.createElement("div",{style:{overflowX:"auto"}},e.createElement(x,{initialSort:{sortKey:"email",sortOrder:"descending"}},({activeSortKey:a,activeSortOrder:l})=>{const m=a&&l?M[a][l]:null,d=m?[...n.sort(m)]:n,c="Navn",p="E-post",N="Alder",I="Formue",E="Poke";return e.createElement(e.Fragment,null,e.createElement(A,null,"Masse spennende data"),e.createElement(S,null,e.createElement(j,null,e.createElement(T,{sortKey:"name",scope:"col"},c),e.createElement(T,{sortKey:"email",scope:"col"},p),e.createElement(T,{sortKey:"age",scope:"col"},N),e.createElement(T,{sortKey:"fortune",scope:"col"},I),e.createElement(T,null,E))),e.createElement(H,null,d.map(i=>{const D=e.createElement(e.Fragment,null,e.createElement(b,{columnHeader:c},i.name),e.createElement(b,{columnHeader:p},i.email),e.createElement(b,{columnHeader:N},i.age),e.createElement(b,{columnHeader:I},q(i.fortune,{decimals:2})),e.createElement(b,{columnHeader:E},i.button));return i.expand?e.createElement(v,{key:i.email,expandContent:i.expand},D):e.createElement(j,{key:i.email},D)})))}))}};var Y,R,h;y.parameters={...y.parameters,docs:{...(Y=y.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  args: {},
  render: () => {
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
                <Table>
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
}`,...(h=(R=y.parameters)==null?void 0:R.docs)==null?void 0:h.source}}};var F,B,U;C.parameters={...C.parameters,docs:{...(F=C.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {},
  render: () => {
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
                <Table>
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
}`,...(U=(B=C.parameters)==null?void 0:B.docs)==null?void 0:U.source}}};var Q,X,P;O.parameters={...O.parameters,docs:{...(Q=O.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  args: {},
  render: () => {
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
                <Table initialSort={{
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
}`,...(P=(X=O.parameters)==null?void 0:X.docs)==null?void 0:P.source}}};const le=["Standard","Expandable","Sortable"],Te=Object.freeze(Object.defineProperty({__proto__:null,Expandable:C,Sortable:O,Standard:y,__namedExportsOrder:le,default:re},Symbol.toStringTag,{value:"Module"}));export{C as E,y as S,Te as T,O as a};
