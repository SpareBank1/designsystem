import{R as e}from"./index-DQDNmYQF.js";import{c as v}from"./index-QCImZZ3W.js";import{I as m}from"./InputGroup-DOKvm3eQ.js";const o=e.forwardRef(({className:r,inline:t,...c},f)=>e.createElement("select",{className:v("ffe-dropdown","ffe-default-mode",{"ffe-dropdown--inline":t},r),ref:f,...c}));o.__docgenInfo={description:"",methods:[],displayName:"Dropdown",props:{inline:{required:!1,tsType:{name:"boolean"},description:""}}};const b={title:"Komponenter/Dropdown/Dropdown",component:o},a={args:{inline:!1},render:r=>e.createElement(m,{label:"Måned"},e.createElement(o,{...r},e.createElement("option",{value:"jan"},"Januar"),e.createElement("option",{value:"feb"},"Februar"),e.createElement("option",{value:"mar"},"Mars"),e.createElement("option",{value:"apr"},"April"),e.createElement("option",{value:"mai"},"Mai")))},n={args:{inline:!1},render:r=>e.createElement(m,{label:"Måned"},t=>e.createElement(o,{...r,...t,"aria-invalid":"true","test-id":"test"},e.createElement("option",{value:"jan"},"Januar"),e.createElement("option",{value:"feb"},"Februar"),e.createElement("option",{value:"mar"},"Mars"),e.createElement("option",{value:"apr"},"April"),e.createElement("option",{value:"mai"},"Mai")))};var p,i,l;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(l=(i=a.parameters)==null?void 0:i.docs)==null?void 0:l.source}}};var s,u,d;n.parameters={...n.parameters,docs:{...(s=n.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
}`,...(d=(u=n.parameters)==null?void 0:u.docs)==null?void 0:d.source}}};const E=["Standard","AriaInvalid"],D=Object.freeze(Object.defineProperty({__proto__:null,AriaInvalid:n,Standard:a,__namedExportsOrder:E,default:b},Symbol.toStringTag,{value:"Module"}));export{D,a as S};
