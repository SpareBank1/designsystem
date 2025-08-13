import{R as r}from"./index-DQDNmYQF.js";import{b as s,G as m,a as g}from"./GridCol-Cvf6HhXT.js";const G={title:"Komponenter/Grid/GridCol",component:s,argTypes:{as:{control:"select",options:["div","span"]}}},e={args:{sm:12,md:12,lg:{cols:6,offset:3}},render:o=>r.createElement(m,null,r.createElement(g,null,r.createElement(s,{...o},"innehold")))},n={args:{sm:12,md:12,lg:{cols:6,offset:3},bgColor:"secondary"},render:o=>r.createElement(m,null,r.createElement(g,null,r.createElement(s,{...o},"innehold")))};var a,t,d;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
  args: {
    sm: 12,
    md: 12,
    lg: {
      cols: 6,
      offset: 3
    }
  },
  render: args => <Grid>
            <GridRow>
                <GridCol {...args}>innehold</GridCol>
            </GridRow>
        </Grid>
}`,...(d=(t=e.parameters)==null?void 0:t.docs)==null?void 0:d.source}}};var l,c,i;n.parameters={...n.parameters,docs:{...(l=n.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    sm: 12,
    md: 12,
    lg: {
      cols: 6,
      offset: 3
    },
    bgColor: 'secondary'
  },
  render: args => <Grid>
            <GridRow>
                <GridCol {...args}>innehold</GridCol>
            </GridRow>
        </Grid>
}`,...(i=(c=n.parameters)==null?void 0:c.docs)==null?void 0:i.source}}};const p=["Standard","ColBackground"],C=Object.freeze(Object.defineProperty({__proto__:null,ColBackground:n,Standard:e,__namedExportsOrder:p,default:G},Symbol.toStringTag,{value:"Module"}));export{n as C,C as G,e as S};
