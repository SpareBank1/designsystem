import{r as G,R as n}from"./index-DJO9vBfz.js";import{c as w}from"./index-i5X67GZP.js";import{T as s}from"./Tab-BP6w82y4.js";function C(c){return r=>{c.forEach(a=>{typeof a=="function"?a(r):a!=null&&(a.current=r)})}}const d=({className:c,noBreak:r,children:a,...m})=>{const[e]=G.useState(n.Children.map(a,()=>n.createRef())??[]),A=o=>{var p,T;if(o.key==="ArrowRight"||o.key==="ArrowLeft"){const B=document.activeElement,b=e==null?void 0:e.find(t=>(t==null?void 0:t.current)===B),f=b?e==null?void 0:e.indexOf(b):0;if(o.key==="ArrowRight"){const t=(p=e==null?void 0:e[((f??0)+1)%((e==null?void 0:e.length)||1)])==null?void 0:p.current;t==null||t.focus()}else if(o.key==="ArrowLeft"){const t=(T=e==null?void 0:e[((f??0)-1+((e==null?void 0:e.length)||1))%((e==null?void 0:e.length)||1)])==null?void 0:T.current;t==null||t.focus()}}};return n.createElement("div",{className:w("ffe-tab-group",{"ffe-tab-group--no-break":r},c),role:"tablist",onKeyDown:A,...m},n.Children.map(a,(o,p)=>n.isValidElement(o)&&n.cloneElement(o,{...o.props,ref:C([o.props.ref,e==null?void 0:e[p]])})))};d.__docgenInfo={description:"",methods:[],displayName:"TabGroup",props:{noBreak:{required:!1,tsType:{name:"boolean"},description:"Applies the noBreak modifier to avoid it collapsing over multiple lines"},children:{required:!0,tsType:{name:"Array",elements:[{name:"ReactReactElement",raw:"React.ReactElement<TabProps>",elements:[{name:"TabProps"}]}],raw:"React.ReactElement<TabProps>[]"},description:"The children of the TabGroup component"}},composes:["Omit"]};const D={title:"Komponenter/Tabs/TabGroup",component:d},l={args:{},render:c=>n.createElement(d,{...c},n.createElement(s,null,"Dette er en tab"),n.createElement(s,{selected:!0},"Dette er en valgt tab"),n.createElement(s,null,"Dette er en annen tab"))},i={args:{},render:function(){const r={house:"house",car:"car"},[a,m]=G.useState(r.house);return n.createElement(n.Fragment,null,n.createElement(d,null,n.createElement(s,{selected:a===r.house,onClick:()=>m(r.house),"aria-controls":r.house},"Huslån"),n.createElement(s,{selected:a===r.car,onClick:()=>m(r.car),"aria-controls":r.car},"Billån")),n.createElement("div",{id:r.house,style:{display:a===r.house?"block":"none"}},"Huslån"),n.createElement("div",{id:r.car,style:{display:a===r.car?"block":"none"}},"Billån"))}},u={args:{noBreak:!0},render:c=>n.createElement(d,{...c},n.createElement(s,null,"Label"),n.createElement(s,{selected:!0},"Label"),n.createElement(s,null,"Label"))};var h,g,E;l.parameters={...l.parameters,docs:{...(h=l.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {},
  render: args => <TabGroup {...args}>
            <Tab>Dette er en tab</Tab>
            <Tab selected={true}>Dette er en valgt tab</Tab>
            <Tab>Dette er en annen tab</Tab>
        </TabGroup>
}`,...(E=(g=l.parameters)==null?void 0:g.docs)==null?void 0:E.source}}};var v,y,k;i.parameters={...i.parameters,docs:{...(v=i.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {},
  render: function Render() {
    const loan = {
      house: 'house',
      car: 'car'
    };
    const [activeTabId, setActiveTabId] = useState(loan.house);
    return <>
                <TabGroup>
                    <Tab selected={activeTabId === loan.house} onClick={() => setActiveTabId(loan.house)} aria-controls={loan.house}>
                        Huslån
                    </Tab>

                    <Tab selected={activeTabId === loan.car} onClick={() => setActiveTabId(loan.car)} aria-controls={loan.car}>
                        Billån
                    </Tab>
                </TabGroup>
                <div id={loan.house} style={{
        display: activeTabId === loan.house ? 'block' : 'none'
      }}>
                    Huslån
                </div>
                <div id={loan.car} style={{
        display: activeTabId === loan.car ? 'block' : 'none'
      }}>
                    Billån
                </div>
            </>;
  }
}`,...(k=(y=i.parameters)==null?void 0:y.docs)==null?void 0:k.source}}};var R,I,S;u.parameters={...u.parameters,docs:{...(R=u.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    noBreak: true
  },
  render: args => <TabGroup {...args}>
            <Tab>Label</Tab>
            <Tab selected={true}>Label</Tab>
            <Tab>Label</Tab>
        </TabGroup>
}`,...(S=(I=u.parameters)==null?void 0:I.docs)==null?void 0:S.source}}};const L=["Standard","WithContent","NoBreak"],x=Object.freeze(Object.defineProperty({__proto__:null,NoBreak:u,Standard:l,WithContent:i,__namedExportsOrder:L,default:D},Symbol.toStringTag,{value:"Module"}));export{u as N,l as S,x as T,i as W};
