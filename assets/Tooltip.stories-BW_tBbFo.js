import{r as k,R as e}from"./index-DQDNmYQF.js";import{T as o}from"./Tooltip-Dx-tWuFa.js";import{P as f}from"./Paragraph-7jO2Jnpx.js";const v={title:"Komponenter/Form/Tooltip",component:o},n={args:{children:"Dette er lurt å tenke på"},render:function(r){return e.createElement(o,{...r})}},t={args:{children:"Dette er lurt å tenke på"},render:function(r){const a="content-id",[s,g]=k.useState(!1);return e.createElement(e.Fragment,null,e.createElement(o,{...r,"aria-controls":a,onClick:()=>g(!s)}),e.createElement("div",{hidden:!s,id:a},e.createElement(f,null,"Husk at Tooltip alltid skal være skjult ved default, men du kan styre visningen gjennom en onClick om du vil!")))}};var l,d,c;n.parameters={...n.parameters,docs:{...(l=n.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    children: 'Dette er lurt å tenke på'
  },
  render: function Render(args) {
    return <Tooltip {...args} />;
  }
}`,...(c=(d=n.parameters)==null?void 0:d.docs)==null?void 0:c.source}}};var i,p,u;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    children: 'Dette er lurt å tenke på'
  },
  render: function Render(args) {
    const contentId = 'content-id';
    const [open, setOpen] = useState(false);
    return <>
                <Tooltip {...args} aria-controls={contentId} onClick={() => setOpen(!open)} />
                <div hidden={!open} id={contentId}>
                    <Paragraph>
                        Husk at Tooltip alltid skal være skjult ved default, men
                        du kan styre visningen gjennom en onClick om du vil!
                    </Paragraph>
                </div>
            </>;
  }
}`,...(u=(p=t.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};const S=["Standard","AriaControls"],j=Object.freeze(Object.defineProperty({__proto__:null,AriaControls:t,Standard:n,__namedExportsOrder:S,default:v},Symbol.toStringTag,{value:"Module"}));export{t as A,n as S,j as T};
