import{r as B,R as n}from"./index-DQDNmYQF.js";import{c as G}from"./index-QCImZZ3W.js";function D(o){return r=>{o.forEach(a=>{typeof a=="function"?a(r):a!=null&&(a.current=r)})}}const i=({className:o,noBreak:r,children:a,...l})=>{const[e]=B.useState(n.Children.map(a,()=>n.createRef())??[]),w=s=>{var u,b;if(s.key==="ArrowRight"||s.key==="ArrowLeft"){const C=document.activeElement,T=e==null?void 0:e.find(t=>(t==null?void 0:t.current)===C),f=T?e==null?void 0:e.indexOf(T):0;if(s.key==="ArrowRight"){const t=(u=e==null?void 0:e[((f??0)+1)%((e==null?void 0:e.length)||1)])==null?void 0:u.current;t==null||t.focus()}else if(s.key==="ArrowLeft"){const t=(b=e==null?void 0:e[((f??0)-1+((e==null?void 0:e.length)||1))%((e==null?void 0:e.length)||1)])==null?void 0:b.current;t==null||t.focus()}}};return n.createElement("div",{className:G("ffe-tab-group",{"ffe-tab-group--no-break":r},o),role:"tablist",onKeyDown:w,...l},n.Children.map(a,(s,u)=>n.isValidElement(s)&&n.cloneElement(s,{...s.props,ref:D([s.props.ref,e==null?void 0:e[u]])})))};i.__docgenInfo={description:"",methods:[],displayName:"TabGroup",props:{noBreak:{required:!1,tsType:{name:"boolean"},description:"Applies the noBreak modifier to avoid it collapsing over multiple lines"},children:{required:!0,tsType:{name:"Array",elements:[{name:"ReactReactElement",raw:"React.ReactElement<TabProps>",elements:[{name:"TabProps"}]}],raw:"React.ReactElement<TabProps>[]"},description:"The children of the TabGroup component"}},composes:["Omit"]};const c=n.forwardRef(({className:o,selected:r,...a},l)=>n.createElement("button",{type:"button",role:"tab","aria-selected":r?"true":"false",ref:l,tabIndex:r?0:-1,className:G("ffe-tab",{"ffe-tab--selected":r},o),...a}));c.__docgenInfo={description:"",methods:[],displayName:"Tab",props:{selected:{required:!1,tsType:{name:"boolean"},description:""}}};const N={title:"Komponenter/Tabs/TabGroup",component:i},d={args:{},render:o=>n.createElement(i,{...o},n.createElement(c,null,"Dette er en tab"),n.createElement(c,{selected:!0},"Dette er en valgt tab"),n.createElement(c,null,"Dette er en annen tab"))},m={args:{},render:function(){const r={house:"house",car:"car"},[a,l]=B.useState(r.house);return n.createElement(n.Fragment,null,n.createElement(i,null,n.createElement(c,{selected:a===r.house,onClick:()=>l(r.house),"aria-controls":r.house},"Huslån"),n.createElement(c,{selected:a===r.car,onClick:()=>l(r.car),"aria-controls":r.car},"Billån")),n.createElement("div",{id:r.house,style:{display:a===r.house?"block":"none"}},"Huslån"),n.createElement("div",{id:r.car,style:{display:a===r.car?"block":"none"}},"Billån"))}},p={args:{noBreak:!0},render:o=>n.createElement(i,{...o},n.createElement(c,null,"Label"),n.createElement(c,{selected:!0},"Label"),n.createElement(c,null,"Label"))};var h,g,E;d.parameters={...d.parameters,docs:{...(h=d.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {},
  render: args => <TabGroup {...args}>
            <Tab>Dette er en tab</Tab>
            <Tab selected={true}>Dette er en valgt tab</Tab>
            <Tab>Dette er en annen tab</Tab>
        </TabGroup>
}`,...(E=(g=d.parameters)==null?void 0:g.docs)==null?void 0:E.source}}};var y,v,k;m.parameters={...m.parameters,docs:{...(y=m.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
}`,...(k=(v=m.parameters)==null?void 0:v.docs)==null?void 0:k.source}}};var R,I,A;p.parameters={...p.parameters,docs:{...(R=p.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    noBreak: true
  },
  render: args => <TabGroup {...args}>
            <Tab>Label</Tab>
            <Tab selected={true}>Label</Tab>
            <Tab>Label</Tab>
        </TabGroup>
}`,...(A=(I=p.parameters)==null?void 0:I.docs)==null?void 0:A.source}}};const _=["Standard","WithContent","NoBreak"];export{p as NoBreak,d as Standard,m as WithContent,_ as __namedExportsOrder,N as default};
