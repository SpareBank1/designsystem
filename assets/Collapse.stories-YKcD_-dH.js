import{r as n,R as t}from"./index-DQDNmYQF.js";import{c as u}from"./index-QCImZZ3W.js";import{E as _}from"./ExpandButton-DYGxpV3_.js";function S(o){return e=>{o.forEach(r=>{typeof r=="function"?r(e):r!=null&&(r.current=e)})}}const x=o=>{const e=n.useRef();return n.useEffect(()=>{e.current=o}),e.current},l=t.forwardRef(({className:o,isOpen:e,onRest:r,children:g,...v},y)=>{const p=n.useRef(null),[C,i]=n.useState(!e),[b,c]=n.useState(e),a=x(e);return n.useEffect(()=>{typeof a=="boolean"&&e!==a&&(i(!e),c(!1))},[a,e]),t.createElement("div",{...v,ref:S([p,y]),className:u("ffe-collapse",o,{"ffe-collapse--open":e,"ffe-collapse--hidden":C}),onTransitionEnd:d=>{d.target===p.current&&d.propertyName==="grid-template-rows"&&(i(!e),e&&c(!0),r==null||r())}},t.createElement("div",{className:u("ffe-collapse__inner",{"ffe-collapse__inner--visible":b})},g))});l.__docgenInfo={description:"",methods:[],displayName:"Collapse",props:{isOpen:{required:!0,tsType:{name:"boolean"},description:""},onRest:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}},composes:["ComponentPropsWithRef"]};const w={title:"Komponenter/Collapse/Collapse",component:l,argTypes:{}},s={args:{},render:function(){const[e,r]=n.useState(!1);return t.createElement(t.Fragment,null,t.createElement("div",{className:"ffe-button-display-group ffe-button-display-group--center"},t.createElement(_,{isExpanded:e,onClick:()=>r(!e)},e?"Collapse":"Expand")),t.createElement(l,{isOpen:e},t.createElement("div",null,t.createElement("p",null,"Hello world"),t.createElement("p",null,"Hello world"))))}};var f,m,E;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {},
  render: function Render() {
    const [isOpen, setOpen] = useState(false);
    return <>
                <div className="ffe-button-display-group ffe-button-display-group--center">
                    <ExpandButton isExpanded={isOpen} onClick={() => setOpen(!isOpen)}>
                        {isOpen ? 'Collapse' : 'Expand'}
                    </ExpandButton>
                </div>
                <Collapse isOpen={isOpen}>
                    <div>
                        <p>Hello world</p>
                        <p>Hello world</p>
                    </div>
                </Collapse>
            </>;
  }
}`,...(E=(m=s.parameters)==null?void 0:m.docs)==null?void 0:E.source}}};const O=["Standard"],T=Object.freeze(Object.defineProperty({__proto__:null,Standard:s,__namedExportsOrder:O,default:w},Symbol.toStringTag,{value:"Module"}));export{T as C,s as S};
