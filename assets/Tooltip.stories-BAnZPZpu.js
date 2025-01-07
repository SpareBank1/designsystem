import{R as e,r as k}from"./index-ne9I_3bB.js";import{T as o}from"./Tooltip-CGL9FnMI.js";const f={title:"Komponenter/Form/Tooltip",component:o},n={args:{children:"Dette er lurt å tenke på"},render:function(r){return e.createElement(o,{...r})}},t={args:{children:"Dette er lurt å tenke på"},render:function(r){const a="content-id",[s,g]=k.useState(!1);return e.createElement(e.Fragment,null,e.createElement(o,{...r,"aria-controls":a,onClick:()=>g(!s)}),e.createElement("div",{hidden:!s,id:a},"Husk at Tooltip alltid skal være skjult ved default, men du kan styre visningen gjennom en onClick om du vil!"))}};var d,l,c;n.parameters={...n.parameters,docs:{...(d=n.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    children: 'Dette er lurt å tenke på'
  },
  render: function Render(args) {
    return <Tooltip {...args} />;
  }
}`,...(c=(l=n.parameters)==null?void 0:l.docs)==null?void 0:c.source}}};var i,p,u;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    children: 'Dette er lurt å tenke på'
  },
  render: function Render(args) {
    const contentId = 'content-id';
    const [open, setOpen] = useState(false);
    return <>
                <Tooltip {...args} aria-controls={contentId} onClick={() => setOpen(!open)} />
                <div hidden={!open} id={contentId}>
                    Husk at Tooltip alltid skal være skjult ved default, men du
                    kan styre visningen gjennom en onClick om du vil!
                </div>
            </>;
  }
}`,...(u=(p=t.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};const v=["Standard","AriaControls"],h=Object.freeze(Object.defineProperty({__proto__:null,AriaControls:t,Standard:n,__namedExportsOrder:v,default:f},Symbol.toStringTag,{value:"Module"}));export{t as A,n as S,h as T};
