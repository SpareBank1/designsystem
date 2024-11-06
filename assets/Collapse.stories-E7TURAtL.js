import{r,R as t}from"./index-DJO9vBfz.js";import{c as u}from"./index-i5X67GZP.js";import{E as x}from"./ExpandButton-BKqBqugF.js";function y(o){return e=>{o.forEach(n=>{typeof n=="function"?n(e):n!=null&&(n.current=e)})}}const w=o=>{const e=r.useRef();return r.useEffect(()=>{e.current=o}),e.current},l=t.forwardRef(({className:o,isOpen:e,onRest:n,children:g,...C},v)=>{const p=r.useRef(null),[_,c]=r.useState(!e),[S,i]=r.useState(e),a=w(e);return r.useEffect(()=>{typeof a=="boolean"&&e!==a&&(c(!e),i(!1))},[a,e]),t.createElement("div",{...C,ref:y([p,v]),className:u("ffe-collapse",o,{"ffe-collapse--open":e,"ffe-collapse--hidden":_}),onTransitionEnd:d=>{d.target===p.current&&d.propertyName==="grid-template-rows"&&(c(!e),e&&i(!0),n==null||n())}},t.createElement("div",{className:u("ffe-collapse__inner",{"ffe-collapse__inner--visible":S})},g))});l.__docgenInfo={description:"",methods:[],displayName:"Collapse",props:{isOpen:{required:!0,tsType:{name:"boolean"},description:""},onRest:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}},composes:["ComponentPropsWithRef"]};const O={title:"Komponenter/Collapse/Collapse",component:l,argTypes:{}},s={args:{},render:function(){const[e,n]=r.useState(!1);return t.createElement(t.Fragment,null,t.createElement(x,{isExpanded:e,onClick:()=>n(!e)},e?"Collapse":"Expand"),t.createElement(l,{isOpen:e},t.createElement("div",null,t.createElement("p",null,"Hello world"),t.createElement("p",null,"Hello world"))))}};var f,m,E;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {},
  render: function Render() {
    const [isOpen, setOpen] = useState(false);
    return <>
                <ExpandButton isExpanded={isOpen} onClick={() => setOpen(!isOpen)}>
                    {isOpen ? 'Collapse' : 'Expand'}
                </ExpandButton>
                <Collapse isOpen={isOpen}>
                    <div>
                        <p>Hello world</p>
                        <p>Hello world</p>
                    </div>
                </Collapse>
            </>;
  }
}`,...(E=(m=s.parameters)==null?void 0:m.docs)==null?void 0:E.source}}};const b=["Standard"],T=Object.freeze(Object.defineProperty({__proto__:null,Standard:s,__namedExportsOrder:b,default:O},Symbol.toStringTag,{value:"Module"}));export{T as C,s as S};
