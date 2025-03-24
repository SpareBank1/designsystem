import{R as e}from"./index-DQDNmYQF.js";import{c as o}from"./index-QCImZZ3W.js";import{C as t}from"./CheckListItem-BkBJymZC.js";import"./Icon-BqsuuMcG.js";const r=({className:a,columns:m=1,...c})=>e.createElement("ul",{role:"list",className:o("ffe-check-list",{"ffe-check-list--two-columns":Number(m)===2},a),...c});r.__docgenInfo={description:"",methods:[],displayName:"CheckList",props:{columns:{required:!1,tsType:{name:"union",raw:"1 | 2 | '1' | '2'",elements:[{name:"literal",value:"1"},{name:"literal",value:"2"},{name:"literal",value:"'1'"},{name:"literal",value:"'2'"}]},description:"",defaultValue:{value:"1",computed:!1}}}};const p={title:"Komponenter/Lists/CheckList",component:r,subcomponents:{CheckListItem:t},tags:["autodocs"]},s={args:{columns:"1"},render:a=>e.createElement("div",null,e.createElement("h3",{className:"ffe-h4"},"Ved å bruke FFE får du"),e.createElement(r,{...a},e.createElement(t,null,"Massevis av ferdige, testede komponenter"),e.createElement(t,null,"Likt design som resten av SpareBank 1"),e.createElement(t,null,"Høyere utviklingshastighet"),e.createElement(t,{isCross:!0},"Flere bugs")))};var n,i,l;s.parameters={...s.parameters,docs:{...(n=s.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    columns: '1'
  },
  render: args => <div>
            <h3 className="ffe-h4">Ved å bruke FFE får du</h3>
            <CheckList {...args}>
                <CheckListItem>
                    Massevis av ferdige, testede komponenter
                </CheckListItem>
                <CheckListItem>
                    Likt design som resten av SpareBank 1
                </CheckListItem>
                <CheckListItem>Høyere utviklingshastighet</CheckListItem>
                <CheckListItem isCross={true}>Flere bugs</CheckListItem>
            </CheckList>
        </div>
}`,...(l=(i=s.parameters)==null?void 0:i.docs)==null?void 0:l.source}}};const f=["Standard"];export{s as Standard,f as __namedExportsOrder,p as default};
