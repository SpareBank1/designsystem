import{R as r}from"./index-RYns6xqu.js";import{a as s,G as c,b as l}from"./GridCol-y5PFMqur.js";const p={title:"components/grid/GridRow",component:s,argTypes:{as:{control:"select",options:["div","span"]}}},n={args:{margin:"sm",padding:"sm",sm:{margin:"sm",padding:"sm"},md:{margin:"sm",padding:"sm"},lg:{margin:"sm",padding:"sm"}},render:e=>r.createElement(c,null,r.createElement(s,{...e},r.createElement(l,null,"innehold")))},a={args:{...n.args,background:"syrin-70",backgroundDark:"natt"},render:e=>r.createElement(c,null,r.createElement(s,{...e},r.createElement(l,{sm:12,lg:{cols:6,offset:3}},"innehold")))};var d,o,t;n.parameters={...n.parameters,docs:{...(d=n.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(t=(o=n.parameters)==null?void 0:o.docs)==null?void 0:t.source}}};var m,i,g;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(g=(i=a.parameters)==null?void 0:i.docs)==null?void 0:g.source}}};const u=["Standard","RowBackground"],f=Object.freeze(Object.defineProperty({__proto__:null,RowBackground:a,Standard:n,__namedExportsOrder:u,default:p},Symbol.toStringTag,{value:"Module"}));export{f as G,a as R,n as S};
