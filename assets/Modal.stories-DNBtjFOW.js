import{R as e,r}from"./index-RYns6xqu.js";import{_ as z}from"./iframe-D8OGRcM0.js";import{r as v}from"./index-BwmuJAIN.js";import{c as L}from"./index-Dejnh_W_.js";import{I as Y}from"./Icon-Dor7S2yd.js";import{A as p,B as O}from"./ButtonGroup-C61LaZO9.js";import{H as D}from"./Heading-DJFHTV2F.js";import{P as w}from"./Paragraph-uGacOKYl.js";import{S as R}from"./SecondaryButton-BSRNdkcP.js";const H={close:"Lukk"},P={close:"Lukk"},q={close:"Close"},G={nb:H,nn:P,en:q},F="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgLTk2MCA5NjAgOTYwIiB3aWR0aD0iMjQiPjxwYXRoIGQ9Ik00ODAtNDM3Ljg0NyAyNzcuMDc2LTIzNC45MjRxLTguMzA3IDguMzA4LTIwLjg4NCA4LjUtMTIuNTc2LjE5My0yMS4yNjgtOC41LTguNjkzLTguNjkyLTguNjkzLTIxLjA3NnQ4LjY5My0yMS4wNzZMNDM3Ljg0Ny00ODAgMjM0LjkyNC02ODIuOTI0cS04LjMwOC04LjMwNy04LjUtMjAuODg0LS4xOTMtMTIuNTc2IDguNS0yMS4yNjggOC42OTItOC42OTMgMjEuMDc2LTguNjkzdDIxLjA3NiA4LjY5M0w0ODAtNTIyLjE1M2wyMDIuOTI0LTIwMi45MjNxOC4zMDctOC4zMDggMjAuODg0LTguNSAxMi41NzYtLjE5MyAyMS4yNjggOC41IDguNjkzIDguNjkyIDguNjkzIDIxLjA3NnQtOC42OTMgMjEuMDc2TDUyMi4xNTMtNDgwbDIwMi45MjMgMjAyLjkyNHE4LjMwOCA4LjMwNyA4LjUgMjAuODg0LjE5MyAxMi41NzYtOC41IDIxLjI2OC04LjY5MiA4LjY5My0yMS4wNzYgOC42OTN0LTIxLjA3Ni04LjY5M0w0ODAtNDM3Ljg0N1oiLz48L3N2Zz4=",B=({className:c,locale:o,...n})=>e.createElement("button",{type:"button",className:L("ffe-modal__close"),"aria-label":G[o].close,...n},e.createElement(Y,{fileUrl:F,size:"md"}));B.__docgenInfo={description:"",methods:[],displayName:"CloseButton",props:{locale:{required:!0,tsType:{name:"union",raw:"'nb' | 'nn' | 'en'",elements:[{name:"literal",value:"'nb'"},{name:"literal",value:"'nn'"},{name:"literal",value:"'en'"}]},description:""}},composes:["Omit"]};const g=e.forwardRef(({children:c,onClick:o,ariaLabelledby:n,className:i,locale:a="nb",onClose:f,portalContainer:T,...S},x)=>{const[u,_]=r.useState(!1),[M,j]=r.useState(!1),l=r.useRef(null),N=r.useRef(u?document.documentElement.style.overflowY:"");return r.useImperativeHandle(x,()=>({open:()=>{var t;j(!0),(t=l.current)==null||t.showModal()},close:()=>{var t;(t=l.current)==null||t.close()}})),r.useEffect(()=>{_(!0)},[]),r.useEffect(()=>{var s;if(u&&((s=l.current)==null?void 0:s.getRootNode())instanceof ShadowRoot){const y=document.documentElement;M?(N.current=y.style.overflowY,y.style.overflowY="hidden"):M||(y.style.overflowY=N.current)}},[u,M]),r.useEffect(()=>{u&&l.current&&typeof l.current.showModal!="function"&&z(async()=>{const{default:t}=await import("./dialog-polyfill.esm-DB1tg_Gk.js");return{default:t}},[],import.meta.url).then(({default:t})=>{l.current&&t.registerDialog(l.current)})},[u]),u?v.createPortal(e.createElement("dialog",{...S,ref:l,className:L("ffe-modal",i),"aria-labelledby":n,onClick:t=>{const s=t.target;s.nodeName==="DIALOG"&&s.close(),o==null||o(t)},onClose:()=>{f==null||f(),j(!1)}},e.createElement("div",{className:"ffe-modal__body"},e.createElement(B,{onClick:()=>{var t;return(t=l.current)==null?void 0:t.close()},locale:a}),c)),T??document.body):null});g.__docgenInfo={description:"",methods:[],displayName:"Modal",props:{locale:{defaultValue:{value:"'nb'",computed:!1},required:!1}}};const b=({className:c,...o})=>e.createElement("div",{className:L("ffe-modal__block",c),...o});b.__docgenInfo={description:"",methods:[],displayName:"ModalBlock"};const Q={title:"components/modals/Modal",component:g},d={args:{ariaLabelledby:"heading-id",locale:"nb",onClose:()=>null,portalContainer:document.body},render:function(o){const n=r.useRef(null),i=o.ariaLabelledby;return e.createElement(e.Fragment,null,e.createElement(p,{type:"button",onClick:()=>{var a;(a=n.current)==null||a.open()}},"Åpne modal"),e.createElement(g,{ref:n,...o},e.createElement(b,null,e.createElement(D,{id:i},"En modal"),e.createElement(w,null,"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam atque excepturi exercitationem harum neque obcaecati, ratione sapiente sit temporibus unde."),e.createElement(O,{thin:!0,ariaLabel:"Knappegruppe"},e.createElement(R,{type:"button",onClick:()=>{var a;(a=n.current)==null||a.close()}},"Lukk modal"),e.createElement(p,{autoFocus:!0,type:"button"},"Lagre")))))}},m={args:{ariaLabelledby:"heading-id",locale:"nb",onClose:()=>null,portalContainer:document.body},render:function(o){const n=r.useRef(null),i=o.ariaLabelledby;return e.createElement(e.Fragment,null,e.createElement(p,{type:"button",onClick:()=>{var a;(a=n.current)==null||a.open()}},"Åpne modal"),e.createElement(g,{ref:n,...o},e.createElement("div",{style:{height:150,width:"100%",background:"#d8e9f2"}}),e.createElement(b,null,e.createElement(D,{id:i},"En modal"),e.createElement(w,null,"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam atque excepturi exercitationem harum neque obcaecati, ratione sapiente sit temporibus unde."),e.createElement(O,{thin:!0,ariaLabel:"Knappegruppe"},e.createElement(R,{type:"button",onClick:()=>{var a;(a=n.current)==null||a.close()}},"Lukk modal"),e.createElement(p,{autoFocus:!0,type:"button"},"Lagre")))))}};var I,E,A;d.parameters={...d.parameters,docs:{...(I=d.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    ariaLabelledby: 'heading-id',
    locale: 'nb',
    onClose: () => null,
    portalContainer: document.body
  },
  render: function Render(args) {
    const modalRef = useRef<ModalHandle>(null);
    const headingId = args.ariaLabelledby;
    return <>
                <ActionButton type="button" onClick={() => {
        modalRef.current?.open();
      }}>
                    Åpne modal
                </ActionButton>
                <Modal ref={modalRef} {...args}>
                    <ModalBlock>
                        <Heading2 id={headingId}>En modal</Heading2>
                        <Paragraph>
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Aperiam atque excepturi exercitationem harum
                            neque obcaecati, ratione sapiente sit temporibus
                            unde.
                        </Paragraph>
                        <ButtonGroup thin={true} ariaLabel="Knappegruppe">
                            <SecondaryButton type="button" onClick={() => {
              modalRef.current?.close();
            }}>
                                Lukk modal
                            </SecondaryButton>
                            <ActionButton autoFocus={true} type="button">
                                Lagre
                            </ActionButton>
                        </ButtonGroup>
                    </ModalBlock>
                </Modal>
            </>;
  }
}`,...(A=(E=d.parameters)==null?void 0:E.docs)==null?void 0:A.source}}};var h,k,C;m.parameters={...m.parameters,docs:{...(h=m.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    ariaLabelledby: 'heading-id',
    locale: 'nb',
    onClose: () => null,
    portalContainer: document.body
  },
  render: function Render(args) {
    const modalRef = useRef<ModalHandle>(null);
    const headingId = args.ariaLabelledby;
    return <>
                <ActionButton type="button" onClick={() => {
        modalRef.current?.open();
      }}>
                    Åpne modal
                </ActionButton>
                <Modal ref={modalRef} {...args}>
                    <div style={{
          height: 150,
          width: '100%',
          background: '#d8e9f2'
        }} />
                    <ModalBlock>
                        <Heading2 id={headingId}>En modal</Heading2>
                        <Paragraph>
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Aperiam atque excepturi exercitationem harum
                            neque obcaecati, ratione sapiente sit temporibus
                            unde.
                        </Paragraph>
                        <ButtonGroup thin={true} ariaLabel="Knappegruppe">
                            <SecondaryButton type="button" onClick={() => {
              modalRef.current?.close();
            }}>
                                Lukk modal
                            </SecondaryButton>
                            <ActionButton autoFocus={true} type="button">
                                Lagre
                            </ActionButton>
                        </ButtonGroup>
                    </ModalBlock>
                </Modal>
            </>;
  }
}`,...(C=(k=m.parameters)==null?void 0:k.docs)==null?void 0:C.source}}};const U=["Standard","Custom"],oe=Object.freeze(Object.defineProperty({__proto__:null,Custom:m,Standard:d,__namedExportsOrder:U,default:Q},Symbol.toStringTag,{value:"Module"}));export{m as C,oe as M,d as S};
