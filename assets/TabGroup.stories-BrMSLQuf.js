import{r as B,R as n}from"./index-DQDNmYQF.js";import{c as G}from"./index-D2FocPV0.js";function D(o){return r=>{o.forEach(a=>{typeof a=="function"?a(r):a!=null&&(a.current=r)})}}const u=({className:o,noBreak:r,children:a,...l})=>{const[e]=B.useState(n.Children.map(a,()=>n.createRef())??[]),w=c=>{var i,b;if(c.key==="ArrowRight"||c.key==="ArrowLeft"){const C=document.activeElement,T=e==null?void 0:e.find(t=>(t==null?void 0:t.current)===C),f=T?e==null?void 0:e.indexOf(T):0;if(c.key==="ArrowRight"){const t=(i=e==null?void 0:e[((f??0)+1)%((e==null?void 0:e.length)||1)])==null?void 0:i.current;t==null||t.focus()}else if(c.key==="ArrowLeft"){const t=(b=e==null?void 0:e[((f??0)-1+((e==null?void 0:e.length)||1))%((e==null?void 0:e.length)||1)])==null?void 0:b.current;t==null||t.focus()}}};return n.createElement("div",{className:G("ffe-tab-group",{"ffe-tab-group--no-break":r},o),role:"tablist",onKeyDown:w,...l},n.Children.map(a,(c,i)=>n.isValidElement(c)&&n.cloneElement(c,{...c.props,ref:D([c.props.ref,e==null?void 0:e[i]])})))};u.__docgenInfo={description:"",methods:[],displayName:"TabGroup",props:{noBreak:{required:!1,tsType:{name:"boolean"},description:"Applies the noBreak modifier to avoid it collapsing over multiple lines"},children:{required:!0,tsType:{name:"Array",elements:[{name:"ReactReactElement",raw:"React.ReactElement<TabProps>",elements:[{name:"TabProps"}]}],raw:"React.ReactElement<TabProps>[]"},description:"The children of the TabGroup component"}},composes:["Omit"]};const s=n.forwardRef(({className:o,selected:r,...a},l)=>n.createElement("button",{type:"button",role:"tab","aria-selected":r?"true":"false",ref:l,tabIndex:r?0:-1,className:G("ffe-tab",{"ffe-tab--selected":r},o),...a}));s.__docgenInfo={description:"",methods:[],displayName:"Tab",props:{selected:{required:!1,tsType:{name:"boolean"},description:""}}};const N={title:"Komponenter/Tabs/TabGroup",component:u},d={args:{},render:o=>n.createElement(u,{...o},n.createElement(s,null,"Dette er en tab"),n.createElement(s,{selected:!0},"Dette er en valgt tab"),n.createElement(s,null,"Dette er en annen tab"))},m={args:{},render:function(){const r={house:"house",car:"car"},[a,l]=B.useState(r.house);return n.createElement(n.Fragment,null,n.createElement(u,null,n.createElement(s,{selected:a===r.house,onClick:()=>l(r.house),"aria-controls":r.house},"Huslån"),n.createElement(s,{selected:a===r.car,onClick:()=>l(r.car),"aria-controls":r.car},"Billån")),a===r.house&&n.createElement("div",null,"Huslån"),a===r.car&&n.createElement("div",null,"Billån"))}},p={args:{noBreak:!0},render:o=>n.createElement(u,{...o},n.createElement(s,null,"Label"),n.createElement(s,{selected:!0},"Label"),n.createElement(s,null,"Label"))};var h,g,E;d.parameters={...d.parameters,docs:{...(h=d.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {},
  render: args => <TabGroup {...args}>
            <Tab>Dette er en tab</Tab>
            <Tab selected={true}>Dette er en valgt tab</Tab>
            <Tab>Dette er en annen tab</Tab>
        </TabGroup>
}`,...(E=(g=d.parameters)==null?void 0:g.docs)==null?void 0:E.source}}};var v,k,R;m.parameters={...m.parameters,docs:{...(v=m.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
                {activeTabId === loan.house && <div>
                        Huslån
                    </div>}
                {activeTabId === loan.car && <div>
                        Billån
                    </div>}
            </>;
  }
}`,...(R=(k=m.parameters)==null?void 0:k.docs)==null?void 0:R.source}}};var y,I,A;p.parameters={...p.parameters,docs:{...(y=p.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    noBreak: true
  },
  render: args => <TabGroup {...args}>
            <Tab>Label</Tab>
            <Tab selected={true}>Label</Tab>
            <Tab>Label</Tab>
        </TabGroup>
}`,...(A=(I=p.parameters)==null?void 0:I.docs)==null?void 0:A.source}}};const _=["Standard","WithContent","NoBreak"];export{p as NoBreak,d as Standard,m as WithContent,_ as __namedExportsOrder,N as default};
