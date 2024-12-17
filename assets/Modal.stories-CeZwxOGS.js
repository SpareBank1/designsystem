import{R as e,r}from"./index-eCxJ45ll.js";import{_ as v}from"./iframe-CqX-w38p.js";import{r as z}from"./index-BVyQ2LRr.js";import{c as b}from"./index-DezCrw0f.js";import{I as P}from"./Icon-B88nEPeu.js";import{A as p}from"./ActionButton-Dg03nuh2.js";import{H as O}from"./Heading-BC_GpFGN.js";import{P as w}from"./Paragraph-Qjq98ToE.js";import{B as D}from"./ButtonGroup-C8Gx9PgT.js";import{S as T}from"./SecondaryButton-aa3aHmpA.js";const Y={close:"Lukk"},q={close:"Lukk"},H={close:"Close"},G={nb:Y,nn:q,en:H},F="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgLTk2MCA5NjAgOTYwIiB3aWR0aD0iMjQiPjxwYXRoIGQ9Ik00ODAtNDM3Ljg0NyAyNzcuMDc2LTIzNC45MjRxLTguMzA3IDguMzA4LTIwLjg4NCA4LjUtMTIuNTc2LjE5My0yMS4yNjgtOC41LTguNjkzLTguNjkyLTguNjkzLTIxLjA3NnQ4LjY5My0yMS4wNzZMNDM3Ljg0Ny00ODAgMjM0LjkyNC02ODIuOTI0cS04LjMwOC04LjMwNy04LjUtMjAuODg0LS4xOTMtMTIuNTc2IDguNS0yMS4yNjggOC42OTItOC42OTMgMjEuMDc2LTguNjkzdDIxLjA3NiA4LjY5M0w0ODAtNTIyLjE1M2wyMDIuOTI0LTIwMi45MjNxOC4zMDctOC4zMDggMjAuODg0LTguNSAxMi41NzYtLjE5MyAyMS4yNjggOC41IDguNjkzIDguNjkyIDguNjkzIDIxLjA3NnQtOC42OTMgMjEuMDc2TDUyMi4xNTMtNDgwbDIwMi45MjMgMjAyLjkyNHE4LjMwOCA4LjMwNyA4LjUgMjAuODg0LjE5MyAxMi41NzYtOC41IDIxLjI2OC04LjY5MiA4LjY5My0yMS4wNzYgOC42OTN0LTIxLjA3Ni04LjY5M0w0ODAtNDM3Ljg0N1oiLz48L3N2Zz4=",R=({className:i,locale:a,...n})=>e.createElement("button",{type:"button",className:b("ffe-modal__close"),"aria-label":G[a].close,...n},e.createElement(P,{fileUrl:F,size:"md"}));R.__docgenInfo={description:"",methods:[],displayName:"CloseButton",props:{locale:{required:!0,tsType:{name:"union",raw:"'nb' | 'nn' | 'en'",elements:[{name:"literal",value:"'nb'"},{name:"literal",value:"'nn'"},{name:"literal",value:"'en'"}]},description:""}},composes:["Omit"]};const g=e.forwardRef(({children:i,onClick:a,ariaLabelledby:n,className:c,locale:o="nb",onClose:f,portalContainer:B,...S},x)=>{const[u,_]=r.useState(!1),[y,j]=r.useState(!1),l=r.useRef(null),N=r.useRef(u?document.documentElement.style.overflowY:"");return r.useImperativeHandle(x,()=>({open:()=>{var t;j(!0),(t=l.current)==null||t.showModal()},close:()=>{var t;(t=l.current)==null||t.close()}})),r.useEffect(()=>{_(!0)},[]),r.useEffect(()=>{var s;if(u&&((s=l.current)==null?void 0:s.getRootNode())instanceof ShadowRoot){const M=document.documentElement;y?(N.current=M.style.overflowY,M.style.overflowY="hidden"):y||(M.style.overflowY=N.current)}},[u,y]),r.useEffect(()=>{u&&l.current&&typeof l.current.showModal!="function"&&v(async()=>{const{default:t}=await import("./dialog-polyfill.esm-DB1tg_Gk.js");return{default:t}},[],import.meta.url).then(({default:t})=>{l.current&&t.registerDialog(l.current)})},[u]),u?z.createPortal(e.createElement("dialog",{...S,ref:l,className:b("ffe-modal",c),"aria-labelledby":n,onClick:t=>{const s=t.target;s.nodeName==="DIALOG"&&s.close(),a==null||a(t)},onClose:()=>{f==null||f(),j(!1)}},e.createElement("div",{className:"ffe-modal__body"},e.createElement(R,{onClick:()=>{var t;return(t=l.current)==null?void 0:t.close()},locale:o}),i)),B??document.body):null});g.__docgenInfo={description:"",methods:[],displayName:"Modal",props:{ariaLabelledby:{required:!0,tsType:{name:"string"},description:"Id of modal heading"},locale:{required:!1,tsType:{name:"union",raw:"'nb' | 'nn' | 'en'",elements:[{name:"literal",value:"'nb'"},{name:"literal",value:"'nn'"},{name:"literal",value:"'en'"}]},description:"Locale used",defaultValue:{value:"'nb'",computed:!1}},onClose:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Called when dialog is closed"},portalContainer:{required:!1,tsType:{name:"Parameters[1]",raw:"Parameters<typeof createPortal>[1]"},description:"Container for portal, default is document.body"}}};const L=({className:i,...a})=>e.createElement("div",{className:b("ffe-modal__block",i),...a});L.__docgenInfo={description:"",methods:[],displayName:"ModalBlock"};const K={title:"Komponenter/Modals/Modal",component:g},d={args:{ariaLabelledby:"heading-id",locale:"nb",onClose:()=>null,portalContainer:document.body},render:function(a){const n=r.useRef(null),c=a.ariaLabelledby;return e.createElement(e.Fragment,null,e.createElement(p,{type:"button",onClick:()=>{var o;(o=n.current)==null||o.open()}},"Åpne modal"),e.createElement(g,{ref:n,...a},e.createElement(L,null,e.createElement(O,{id:c},"En modal"),e.createElement(w,null,"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam atque excepturi exercitationem harum neque obcaecati, ratione sapiente sit temporibus unde."),e.createElement(D,{thin:!0,ariaLabel:"Knappegruppe"},e.createElement(T,{type:"button",onClick:()=>{var o;(o=n.current)==null||o.close()}},"Lukk modal"),e.createElement(p,{autoFocus:!0,type:"button"},"Lagre")))))}},m={args:{ariaLabelledby:"heading-id",locale:"nb",onClose:()=>null,portalContainer:document.body},render:function(a){const n=r.useRef(null),c=a.ariaLabelledby;return e.createElement(e.Fragment,null,e.createElement(p,{type:"button",onClick:()=>{var o;(o=n.current)==null||o.open()}},"Åpne modal"),e.createElement(g,{ref:n,...a},e.createElement("div",{style:{height:150,width:"100%",background:"#d8e9f2"}}),e.createElement(L,null,e.createElement(O,{id:c},"En modal"),e.createElement(w,null,"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam atque excepturi exercitationem harum neque obcaecati, ratione sapiente sit temporibus unde."),e.createElement(D,{thin:!0,ariaLabel:"Knappegruppe"},e.createElement(T,{type:"button",onClick:()=>{var o;(o=n.current)==null||o.close()}},"Lukk modal"),e.createElement(p,{autoFocus:!0,type:"button"},"Lagre")))))}};var I,E,h;d.parameters={...d.parameters,docs:{...(I=d.parameters)==null?void 0:I.docs,source:{originalSource:`{
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
}`,...(h=(E=d.parameters)==null?void 0:E.docs)==null?void 0:h.source}}};var A,C,k;m.parameters={...m.parameters,docs:{...(A=m.parameters)==null?void 0:A.docs,source:{originalSource:`{
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
}`,...(k=(C=m.parameters)==null?void 0:C.docs)==null?void 0:k.source}}};const Q=["Standard","Custom"],oe=Object.freeze(Object.defineProperty({__proto__:null,Custom:m,Standard:d,__namedExportsOrder:Q,default:K},Symbol.toStringTag,{value:"Module"}));export{m as C,oe as M,d as S};
