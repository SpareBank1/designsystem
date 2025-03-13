import{R as t,r as u}from"./index-eCxJ45ll.js";import{c as T}from"./index-DezCrw0f.js";import{f as O}from"./fixedForwardRef-Cb2PomjO.js";import{I as y}from"./Icon-B88nEPeu.js";function I(p,e){const{children:a,className:d,closeLabel:c="Lukk",as:g="button",isExpanded:n,size:i="md",...m}=p,N=i==="sm"?"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMjAiIHZpZXdCb3g9IjAgLTk2MCA5NjAgOTYwIiB3aWR0aD0iMjAiPjxwYXRoIGQ9Ik00ODAtNDQyLjg1IDMwOS4wOC0yNzEuOTJxLTguMzEgOC4zLTE3Ljg5IDgtOS41Ny0uMzEtMTguMjctOS04LjY5LTguNy04LjY5LTE4LjU4IDAtOS44OCA4LjY5LTE4LjU4TDQ0Mi44NS00ODAgMjcxLjkyLTY1MC45MnEtOC4zLTguMzEtOC0xOC4zOS4zMS0xMC4wNyA5LTE4Ljc3IDguNy04LjY5IDE4LjU4LTguNjkgOS44OCAwIDE4LjU4IDguNjlMNDgwLTUxNy4xNWwxNzAuOTItMTcwLjkzcTguMzEtOC4zIDE4LjM5LTguNSAxMC4wNy0uMTkgMTguNzcgOC41IDguNjkgOC43IDguNjkgMTguNTggMCA5Ljg4LTguNjkgMTguNThMNTE3LjE1LTQ4MGwxNzAuOTMgMTcwLjkycTguMyA4LjMxIDguNSAxNy44OS4xOSA5LjU3LTguNSAxOC4yNy04LjcgOC42OS0xOC41OCA4LjY5LTkuODggMC0xOC41OC04LjY5TDQ4MC00NDIuODVaIi8+PC9zdmc+":"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgLTk2MCA5NjAgOTYwIiB3aWR0aD0iMjQiPjxwYXRoIGQ9Ik00ODAtNDM3Ljg0NyAyNzcuMDc2LTIzNC45MjRxLTguMzA3IDguMzA4LTIwLjg4NCA4LjUtMTIuNTc2LjE5My0yMS4yNjgtOC41LTguNjkzLTguNjkyLTguNjkzLTIxLjA3NnQ4LjY5My0yMS4wNzZMNDM3Ljg0Ny00ODAgMjM0LjkyNC02ODIuOTI0cS04LjMwOC04LjMwNy04LjUtMjAuODg0LS4xOTMtMTIuNTc2IDguNS0yMS4yNjggOC42OTItOC42OTMgMjEuMDc2LTguNjkzdDIxLjA3NiA4LjY5M0w0ODAtNTIyLjE1M2wyMDIuOTI0LTIwMi45MjNxOC4zMDctOC4zMDggMjAuODg0LTguNSAxMi41NzYtLjE5MyAyMS4yNjggOC41IDguNjkzIDguNjkyIDguNjkzIDIxLjA3NnQtOC42OTMgMjEuMDc2TDUyMi4xNTMtNDgwbDIwMi45MjMgMjAyLjkyNHE4LjMwOCA4LjMwNyA4LjUgMjAuODg0LjE5MyAxMi41NzYtOC41IDIxLjI2OC04LjY5MiA4LjY5My0yMS4wNzYgOC42OTN0LTIxLjA3Ni04LjY5M0w0ODAtNDM3Ljg0N1oiLz48L3N2Zz4=";return t.createElement(g,{"aria-expanded":n,"aria-label":n?c:void 0,className:T("ffe-button","ffe-button--secondary","ffe-button--expand",`ffe-button--${i}`,{"ffe-button--expanded":n},d),...m,ref:e},n&&t.createElement(y,{className:"ffe-button__icon",fileUrl:N,size:i==="sm"?"sm":"md"}),!n&&t.createElement("span",null,a))}const s=O(I);s.__docgenInfo={description:"",methods:[],displayName:"ExpandButton",props:{as:{required:!1,tsType:{name:"As"},description:""},closeLabel:{required:!1,tsType:{name:"string"},description:'An accessible label for the close-button, only shown in the "isExpanded" state'},isExpanded:{required:!0,tsType:{name:"boolean"},description:"When true the component will render a circle with an X indicating whatever is controlled is in an expanded state."},size:{required:!1,tsType:{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}]},description:""}}};const D={title:"Komponenter/Buttons/ExpandButton",component:s,argTypes:{size:{options:["lg","md","sm"],control:{type:"radio"},description:"Størrelse på knappen, 'md' default"}}},o={args:{isExpanded:!1,as:"button"},render:function(e){const[a,d]=u.useState(e.isExpanded);return t.createElement("div",{className:"ffe-button-display-group"},t.createElement(s,{...e,isExpanded:a,onClick:()=>d(!a)},"Vis mer"))}},r={args:{isExpanded:!1,as:"button"},render:function(e){const[a,d]=u.useState(e.isExpanded),[c,g]=u.useState(e.isExpanded),[n,i]=u.useState(e.isExpanded);return t.createElement("div",{className:"ffe-button-display-group"},t.createElement(s,{...e,isExpanded:a,onClick:()=>d(!a),size:"lg"},"Vis mer"),t.createElement(s,{...e,isExpanded:c,onClick:()=>g(!c)},"Vis mer"),t.createElement(s,{...e,isExpanded:n,onClick:()=>i(!n),size:"sm"},"Vis mer"))}};var M,x,E;o.parameters={...o.parameters,docs:{...(M=o.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    isExpanded: false,
    as: 'button'
  },
  render: function Render(args) {
    const [isExpanded, setExpanded] = useState(args.isExpanded);
    return <div className="ffe-button-display-group">
                <ExpandButton {...args} isExpanded={isExpanded} onClick={() => setExpanded(!isExpanded)}>
                    Vis mer
                </ExpandButton>
            </div>;
  }
}`,...(E=(x=o.parameters)==null?void 0:x.docs)==null?void 0:E.source}}};var l,L,j;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    isExpanded: false,
    as: 'button'
  },
  render: function Render(args) {
    const [isExpandedLg, setExpandedLg] = useState(args.isExpanded);
    const [isExpandedMd, setExpandedMd] = useState(args.isExpanded);
    const [isExpandedSm, setExpandedSm] = useState(args.isExpanded);
    return <div className="ffe-button-display-group">
                <ExpandButton {...args} isExpanded={isExpandedLg} onClick={() => setExpandedLg(!isExpandedLg)} size={'lg'}>
                    Vis mer
                </ExpandButton>
                <ExpandButton {...args} isExpanded={isExpandedMd} onClick={() => setExpandedMd(!isExpandedMd)}>
                    Vis mer
                </ExpandButton>
                <ExpandButton {...args} isExpanded={isExpandedSm} onClick={() => setExpandedSm(!isExpandedSm)} size={'sm'}>
                    Vis mer
                </ExpandButton>
            </div>;
  }
}`,...(j=(L=r.parameters)==null?void 0:L.docs)==null?void 0:j.source}}};const C=["Standard","DifferentSizes"],b=Object.freeze(Object.defineProperty({__proto__:null,DifferentSizes:r,Standard:o,__namedExportsOrder:C,default:D},Symbol.toStringTag,{value:"Module"}));export{r as D,b as E,o as S};
