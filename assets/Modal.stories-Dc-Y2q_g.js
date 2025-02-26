import{R as e,r}from"./index-eCxJ45ll.js";import{_ as H}from"./iframe-BEVMhNh4.js";import{r as Y}from"./index-BhUHFDTH.js";import{c as h}from"./index-DezCrw0f.js";import{I as G}from"./Icon-B88nEPeu.js";import{A as d}from"./ActionButton-Dg03nuh2.js";import{b as E}from"./Heading-BYFfwx2T.js";import{P as N}from"./Paragraph-Qjq98ToE.js";import{B as j}from"./ButtonGroup-C8Gx9PgT.js";import{S as k}from"./SecondaryButton-aa3aHmpA.js";const F={close:"Lukk"},K={close:"Lukk"},Q={close:"Close"},U={nb:F,nn:K,en:Q},Z="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgLTk2MCA5NjAgOTYwIiB3aWR0aD0iMjQiPjxwYXRoIGQ9Ik00ODAtNDM3Ljg0NyAyNzcuMDc2LTIzNC45MjRxLTguMzA3IDguMzA4LTIwLjg4NCA4LjUtMTIuNTc2LjE5My0yMS4yNjgtOC41LTguNjkzLTguNjkyLTguNjkzLTIxLjA3NnQ4LjY5My0yMS4wNzZMNDM3Ljg0Ny00ODAgMjM0LjkyNC02ODIuOTI0cS04LjMwOC04LjMwNy04LjUtMjAuODg0LS4xOTMtMTIuNTc2IDguNS0yMS4yNjggOC42OTItOC42OTMgMjEuMDc2LTguNjkzdDIxLjA3NiA4LjY5M0w0ODAtNTIyLjE1M2wyMDIuOTI0LTIwMi45MjNxOC4zMDctOC4zMDggMjAuODg0LTguNSAxMi41NzYtLjE5MyAyMS4yNjggOC41IDguNjkzIDguNjkyIDguNjkzIDIxLjA3NnQtOC42OTMgMjEuMDc2TDUyMi4xNTMtNDgwbDIwMi45MjMgMjAyLjkyNHE4LjMwOCA4LjMwNyA4LjUgMjAuODg0LjE5MyAxMi41NzYtOC41IDIxLjI2OC04LjY5MiA4LjY5My0yMS4wNzYgOC42OTN0LTIxLjA3Ni04LjY5M0w0ODAtNDM3Ljg0N1oiLz48L3N2Zz4=",_=({className:i,locale:a,...n})=>e.createElement("button",{type:"button",className:h("ffe-modal__close"),"aria-label":U[a].close,...n},e.createElement(G,{fileUrl:Z,size:"md"}));_.__docgenInfo={description:"",methods:[],displayName:"CloseButton",props:{locale:{required:!0,tsType:{name:"union",raw:"'nb' | 'nn' | 'en'",elements:[{name:"literal",value:"'nb'"},{name:"literal",value:"'nn'"},{name:"literal",value:"'en'"}]},description:""}},composes:["Omit"]};const f=e.forwardRef(({children:i,onClick:a,ariaLabelledby:n,className:u,locale:t="nb",onClose:y,portalContainer:v,...z},P)=>{const[c,q]=r.useState(!1),[M,I]=r.useState(!1),l=r.useRef(null),A=r.useRef(c?document.documentElement.style.overflowY:"");return r.useImperativeHandle(P,()=>({open:()=>{var o;I(!0),(o=l.current)==null||o.showModal()},close:()=>{var o;(o=l.current)==null||o.close()}})),r.useEffect(()=>{q(!0)},[]),r.useEffect(()=>{var s;if(c&&((s=l.current)==null?void 0:s.getRootNode())instanceof ShadowRoot){const L=document.documentElement;M?(A.current=L.style.overflowY,L.style.overflowY="hidden"):M||(L.style.overflowY=A.current)}},[c,M]),r.useEffect(()=>{c&&l.current&&typeof l.current.showModal!="function"&&H(async()=>{const{default:o}=await import("./dialog-polyfill.esm-DB1tg_Gk.js");return{default:o}},[],import.meta.url).then(({default:o})=>{l.current&&o.registerDialog(l.current)})},[c]),c?Y.createPortal(e.createElement("dialog",{...z,ref:l,className:h("ffe-modal",u),"aria-labelledby":n,onClick:o=>{const s=o.target;s.nodeName==="DIALOG"&&s.close(),a==null||a(o)},onClose:()=>{y==null||y(),I(!1)}},e.createElement("div",{className:"ffe-modal__body"},e.createElement(_,{onClick:()=>{var o;return(o=l.current)==null?void 0:o.close()},locale:t}),i)),v??document.body):null});f.__docgenInfo={description:"",methods:[],displayName:"Modal",props:{ariaLabelledby:{required:!0,tsType:{name:"string"},description:"Id of modal heading"},locale:{required:!1,tsType:{name:"union",raw:"'nb' | 'nn' | 'en'",elements:[{name:"literal",value:"'nb'"},{name:"literal",value:"'nn'"},{name:"literal",value:"'en'"}]},description:"Locale used",defaultValue:{value:"'nb'",computed:!1}},onClose:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Called when dialog is closed"},portalContainer:{required:!1,tsType:{name:"Parameters[1]",raw:"Parameters<typeof createPortal>[1]"},description:"Container for portal, default is document.body"}}};const b=({className:i,...a})=>e.createElement("div",{className:h("ffe-modal__block",i),...a});b.__docgenInfo={description:"",methods:[],displayName:"ModalBlock"};const W={title:"Komponenter/Modals/Modal",component:f},m={args:{ariaLabelledby:"heading-id",locale:"nb",onClose:()=>null,portalContainer:document.body},render:function(a){const n=r.useRef(null),u=a.ariaLabelledby;return e.createElement(e.Fragment,null,e.createElement(d,{type:"button",onClick:()=>{var t;(t=n.current)==null||t.open()}},"Åpne modal"),e.createElement(f,{ref:n,...a},e.createElement(b,null,e.createElement(E,{id:u},"En modal"),e.createElement(N,null,"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam atque excepturi exercitationem harum neque obcaecati, ratione sapiente sit temporibus unde."),e.createElement(j,{thin:!0,ariaLabel:"Knappegruppe"},e.createElement(k,{type:"button",onClick:()=>{var t;(t=n.current)==null||t.close()}},"Lukk modal"),e.createElement(d,{autoFocus:!0,type:"button"},"Lagre")))))}},p={args:{ariaLabelledby:"heading-id",locale:"nb",onClose:()=>null,portalContainer:document.body},render:function(a){const n=r.useRef(null),u=a.ariaLabelledby;return e.createElement(e.Fragment,null,e.createElement(d,{type:"button",onClick:()=>{var t;(t=n.current)==null||t.open()}},"Åpne modal"),e.createElement(f,{ref:n,...a},e.createElement("div",{style:{height:150,width:"100%",background:"#d8e9f2"}}),e.createElement(b,null,e.createElement(E,{id:u},"En modal"),e.createElement(N,null,"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam atque excepturi exercitationem harum neque obcaecati, ratione sapiente sit temporibus unde."),e.createElement(j,{thin:!0,ariaLabel:"Knappegruppe"},e.createElement(k,{type:"button",onClick:()=>{var t;(t=n.current)==null||t.close()}},"Lukk modal"),e.createElement(d,{autoFocus:!0,type:"button"},"Lagre")))))}},g={args:{ariaLabelledby:"heading-id",locale:"nb",onClose:()=>null,portalContainer:document.body},render:function(a){const n=r.useRef(null),u=a.ariaLabelledby;return e.createElement(e.Fragment,null,e.createElement(d,{type:"button",onClick:()=>{var t;(t=n.current)==null||t.open()}},"Åpne modal"),e.createElement(f,{ref:n,...a,className:"dark-mode regard-color-scheme-preference"},e.createElement(b,null,e.createElement(E,{id:u},"En modal"),e.createElement(N,null,"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam atque excepturi exercitationem harum neque obcaecati, ratione sapiente sit temporibus unde."),e.createElement(j,{thin:!0,ariaLabel:"Knappegruppe"},e.createElement(k,{type:"button",onClick:()=>{var t;(t=n.current)==null||t.close()}},"Lukk modal"),e.createElement(d,{autoFocus:!0,type:"button"},"Lagre")))))}};var C,B,R;m.parameters={...m.parameters,docs:{...(C=m.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
}`,...(R=(B=m.parameters)==null?void 0:B.docs)==null?void 0:R.source}}};var D,O,w;p.parameters={...p.parameters,docs:{...(D=p.parameters)==null?void 0:D.docs,source:{originalSource:`{
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
}`,...(w=(O=p.parameters)==null?void 0:O.docs)==null?void 0:w.source}}};var T,x,S;g.parameters={...g.parameters,docs:{...(T=g.parameters)==null?void 0:T.docs,source:{originalSource:`{
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
                <Modal ref={modalRef} {...args} className={'dark-mode regard-color-scheme-preference'}>
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
}`,...(S=(x=g.parameters)==null?void 0:x.docs)==null?void 0:S.source}}};const V=["Standard","Custom","DarkMode"],ie=Object.freeze(Object.defineProperty({__proto__:null,Custom:p,DarkMode:g,Standard:m,__namedExportsOrder:V,default:W},Symbol.toStringTag,{value:"Module"}));export{p as C,g as D,ie as M,m as S};
