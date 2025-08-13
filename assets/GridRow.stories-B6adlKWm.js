import{R as n}from"./index-DQDNmYQF.js";import{a as s,G as g,b as c}from"./GridCol-Cvf6HhXT.js";const p={title:"Komponenter/Grid/GridRow",component:s,argTypes:{as:{control:"select",options:["div","span"]}}},r={args:{margin:"sm",padding:"sm",sm:{margin:"sm",padding:"sm"},md:{margin:"sm",padding:"sm"},lg:{margin:"sm",padding:"sm"}},render:a=>n.createElement(g,null,n.createElement(s,{...a},n.createElement(c,null,"innehold")))},e={args:{...r.args,bgColor:"secondary"},render:a=>n.createElement(g,null,n.createElement(s,{...a},n.createElement(c,{sm:12,lg:{cols:6,offset:3}},"innehold")))};var o,d,m;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    margin: 'sm',
    padding: 'sm',
    sm: {
      margin: 'sm',
      padding: 'sm'
    },
    md: {
      margin: 'sm',
      padding: 'sm'
    },
    lg: {
      margin: 'sm',
      padding: 'sm'
    }
  },
  render: args => <Grid>
            <GridRow {...args}>
                <GridCol>innehold</GridCol>
            </GridRow>
        </Grid>
}`,...(m=(d=r.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};var t,i,l;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
  args: {
    ...Standard.args,
    bgColor: 'secondary'
  },
  render: args => <Grid>
            <GridRow {...args}>
                <GridCol sm={12} lg={{
        cols: 6,
        offset: 3
      }}>
                    innehold
                </GridCol>
            </GridRow>
        </Grid>
}`,...(l=(i=e.parameters)==null?void 0:i.docs)==null?void 0:l.source}}};const G=["Standard","RowBackground"],f=Object.freeze(Object.defineProperty({__proto__:null,RowBackground:e,Standard:r,__namedExportsOrder:G,default:p},Symbol.toStringTag,{value:"Module"}));export{f as G,e as R,r as S};
