import{r,R as t}from"./index-DQDNmYQF.js";import{c as u}from"./index-QCImZZ3W.js";import{E as _}from"./ExpandButton-DYGxpV3_.js";function S(n){return e=>{n.forEach(o=>{typeof o=="function"?o(e):o!=null&&(o.current=e)})}}const x=n=>{const e=r.useRef();return r.useEffect(()=>{e.current=n}),e.current},l=t.forwardRef(({className:n,isOpen:e,onRest:o,children:g,...y},b)=>{const p=r.useRef(null),[v,i]=r.useState(!e),[C,c]=r.useState(e),a=x(e);return r.useEffect(()=>{typeof a=="boolean"&&e!==a&&(i(!e),c(!1))},[a,e]),t.createElement("div",{...y,ref:S([p,b]),className:u("ffe-collapse",n,{"ffe-collapse--open":e,"ffe-collapse--hidden":v}),onTransitionEnd:d=>{d.target===p.current&&d.propertyName==="grid-template-rows"&&(i(!e),e&&c(!0),o==null||o())}},t.createElement("div",{className:u("ffe-collapse__inner",{"ffe-collapse__inner--visible":C})},g))});l.__docgenInfo={description:"",methods:[],displayName:"Collapse",props:{isOpen:{required:!0,tsType:{name:"boolean"},description:""},onRest:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}},composes:["ComponentPropsWithRef"]};const w={title:"Komponenter/Collapse/Collapse",component:l,argTypes:{}},s={args:{},render:function(){const[e,o]=r.useState(!1);return t.createElement(t.Fragment,null,t.createElement("div",{className:"storybook-button-display-group storybook-button-display-group--center"},t.createElement(_,{isExpanded:e,onClick:()=>o(!e)},e?"Collapse":"Expand")),t.createElement(l,{isOpen:e},t.createElement("div",null,t.createElement("p",null,"Hello world"),t.createElement("p",null,"Hello world"))))}};var f,m,E;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {},
  render: function Render() {
    const [isOpen, setOpen] = useState(false);
    return <>
                <div className="storybook-button-display-group storybook-button-display-group--center">
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
}`,...(E=(m=s.parameters)==null?void 0:m.docs)==null?void 0:E.source}}};const O=["Standard"],H=Object.freeze(Object.defineProperty({__proto__:null,Standard:s,__namedExportsOrder:O,default:w},Symbol.toStringTag,{value:"Module"}));export{H as C,s as S};
