import{R as r}from"./index-DJO9vBfz.js";import{a as s,G as l,b as c}from"./GridCol-CASG6rvY.js";const p={title:"Komponenter/Grid/GridRow",component:s,argTypes:{as:{control:"select",options:["div","span"]}}},n={args:{margin:"sm",padding:"sm",sm:{margin:"sm",padding:"sm"},md:{margin:"sm",padding:"sm"},lg:{margin:"sm",padding:"sm"}},render:a=>r.createElement(l,null,r.createElement(s,{...a},r.createElement(c,null,"innehold")))},e={args:{...n.args,background:"syrin-70",backgroundDark:"natt"},render:a=>r.createElement(l,null,r.createElement(s,{...a},r.createElement(c,{sm:12,lg:{cols:6,offset:3}},"innehold")))};var d,o,t;n.parameters={...n.parameters,docs:{...(d=n.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(t=(o=n.parameters)==null?void 0:o.docs)==null?void 0:t.source}}};var m,i,g;e.parameters={...e.parameters,docs:{...(m=e.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    ...Standard.args,
    background: 'syrin-70',
    backgroundDark: 'natt'
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
}`,...(g=(i=e.parameters)==null?void 0:i.docs)==null?void 0:g.source}}};const G=["Standard","RowBackground"],f=Object.freeze(Object.defineProperty({__proto__:null,RowBackground:e,Standard:n,__namedExportsOrder:G,default:p},Symbol.toStringTag,{value:"Module"}));export{f as G,e as R,n as S};
