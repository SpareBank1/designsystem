import{R as r}from"./index-ne9I_3bB.js";import{b as a,G as m,a as g}from"./GridCol-CZ1kaCX1.js";const u={title:"Komponenter/Grid/GridCol",component:a,argTypes:{as:{control:"select",options:["div","span"]}}},e={args:{sm:12,md:12,lg:{cols:6,offset:3}},render:o=>r.createElement(m,null,r.createElement(g,null,r.createElement(a,{...o},"innehold")))},n={args:{sm:12,md:12,lg:{cols:6,offset:3},background:"syrin-70",backgroundDark:"natt"},render:o=>r.createElement(m,null,r.createElement(g,null,r.createElement(a,{...o},"innehold")))};var s,t,d;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
    background: 'syrin-70',
    backgroundDark: 'natt'
  },
  render: args => <Grid>
            <GridRow>
                <GridCol {...args}>innehold</GridCol>
            </GridRow>
        </Grid>
}`,...(i=(c=n.parameters)==null?void 0:c.docs)==null?void 0:i.source}}};const G=["Standard","ColBackground"],C=Object.freeze(Object.defineProperty({__proto__:null,ColBackground:n,Standard:e,__namedExportsOrder:G,default:u},Symbol.toStringTag,{value:"Module"}));export{n as C,C as G,e as S};
