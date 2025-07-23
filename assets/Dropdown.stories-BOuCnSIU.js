import{R as e}from"./index-DQDNmYQF.js";import{c as M}from"./index-QCImZZ3W.js";import{I as p}from"./InputGroup-DOKvm3eQ.js";const t=e.forwardRef(({className:r,inline:i,...b},g)=>e.createElement("select",{className:M("ffe-dropdown","ffe-default-mode",{"ffe-dropdown--inline":i},r),ref:g,...b}));t.__docgenInfo={description:"",methods:[],displayName:"Dropdown",props:{inline:{required:!1,tsType:{name:"boolean"},description:""}}};const w={title:"Komponenter/Dropdown/Dropdown",component:t},a={args:{inline:!1},render:r=>e.createElement(p,{label:"Måned"},e.createElement(t,{...r},e.createElement("option",{value:"jan"},"Januar"),e.createElement("option",{value:"feb"},"Februar"),e.createElement("option",{value:"mar"},"Mars"),e.createElement("option",{value:"apr"},"April"),e.createElement("option",{value:"mai"},"Mai")))},n={args:{inline:!1},render:r=>e.createElement(p,{label:"Måned"},i=>e.createElement(t,{...r,...i,"aria-invalid":"true","test-id":"test"},e.createElement("option",{value:"jan"},"Januar"),e.createElement("option",{value:"feb"},"Februar"),e.createElement("option",{value:"mar"},"Mars"),e.createElement("option",{value:"apr"},"April"),e.createElement("option",{value:"mai"},"Mai")))},o={args:{inline:!1},render:r=>e.createElement(p,{label:"Måned",description:"Velg en måned for fakturering"},e.createElement(t,{...r},e.createElement("option",{value:"jan"},"Januar"),e.createElement("option",{value:"feb"},"Februar"),e.createElement("option",{value:"mar"},"Mars"),e.createElement("option",{value:"apr"},"April"),e.createElement("option",{value:"mai"},"Mai")))};var l,s,u;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    inline: false
  },
  render: args => {
    return <InputGroup label="Måned">
                <Dropdown {...args}>
                    <option value="jan">Januar</option>
                    <option value="feb">Februar</option>
                    <option value="mar">Mars</option>
                    <option value="apr">April</option>
                    <option value="mai">Mai</option>
                </Dropdown>
            </InputGroup>;
  }
}`,...(u=(s=a.parameters)==null?void 0:s.docs)==null?void 0:u.source}}};var m,d,c;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    inline: false
  },
  render: args => {
    return <InputGroup label="Måned">
                {inputProps => <Dropdown {...args} {...inputProps} aria-invalid="true" test-id={'test'}>
                        <option value="jan">Januar</option>
                        <option value="feb">Februar</option>
                        <option value="mar">Mars</option>
                        <option value="apr">April</option>
                        <option value="mai">Mai</option>
                    </Dropdown>}
            </InputGroup>;
  }
}`,...(c=(d=n.parameters)==null?void 0:d.docs)==null?void 0:c.source}}};var v,f,E;o.parameters={...o.parameters,docs:{...(v=o.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    inline: false
  },
  render: args => {
    return <InputGroup label="Måned" description='Velg en måned for fakturering'>
                <Dropdown {...args}>
                    <option value="jan">Januar</option>
                    <option value="feb">Februar</option>
                    <option value="mar">Mars</option>
                    <option value="apr">April</option>
                    <option value="mai">Mai</option>
                </Dropdown>
            </InputGroup>;
  }
}`,...(E=(f=o.parameters)==null?void 0:f.docs)==null?void 0:E.source}}};const D=["Standard","AriaInvalid","WithDescription"],A=Object.freeze(Object.defineProperty({__proto__:null,AriaInvalid:n,Standard:a,WithDescription:o,__namedExportsOrder:D,default:w},Symbol.toStringTag,{value:"Module"}));export{A as D,a as S,o as W};
