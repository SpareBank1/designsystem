import{R as e}from"./index-eCxJ45ll.js";import{c as d}from"./index-DezCrw0f.js";import{I as m}from"./InputGroup-DfxAwG5P.js";const r=e.forwardRef(({className:o,inline:i,...l},s)=>e.createElement("select",{className:d("ffe-dropdown",{"ffe-dropdown--inline":i},o),ref:s,...l}));r.__docgenInfo={description:"",methods:[],displayName:"Dropdown",props:{inline:{required:!1,tsType:{name:"boolean"},description:""}}};const u={title:"Komponenter/Dropdown/Dropdown",component:r},n={args:{inline:!1},render:o=>e.createElement(m,{label:"Måned"},e.createElement(r,{...o},e.createElement("option",{value:"jan"},"Januar"),e.createElement("option",{value:"feb"},"Februar"),e.createElement("option",{value:"mar"},"Mars"),e.createElement("option",{value:"apr"},"April"),e.createElement("option",{value:"mai"},"Mai")))};var a,t,p;n.parameters={...n.parameters,docs:{...(a=n.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(p=(t=n.parameters)==null?void 0:t.docs)==null?void 0:p.source}}};const c=["Standard"],w=Object.freeze(Object.defineProperty({__proto__:null,Standard:n,__namedExportsOrder:c,default:u},Symbol.toStringTag,{value:"Module"}));export{w as D,n as S};
