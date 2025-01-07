import{R as e}from"./index-ne9I_3bB.js";import{G as s,a as r,b as n}from"./GridCol-CZ1kaCX1.js";const G={title:"Komponenter/Grid/Grid",component:s,argTypes:{as:{control:"select",options:["div","span"]}}},l={args:{sm:{gap:"none"},md:{gap:"none"},lg:"none"},render:m=>e.createElement(s,{...m},e.createElement(r,null,e.createElement(n,{sm:"6"},"Litt innhold til venstre"),e.createElement(n,{sm:"6"},"Litt innhold til høyre")))},o={args:{sm:{gap:"lg"},md:{gap:"lg"},lg:{gap:"lg"}},render:m=>e.createElement(s,{gap:"lg"},e.createElement(r,{margin:"5xl",padding:"2xl",background:"frost-30"},e.createElement(n,{sm:"6",md:"4",lg:"3",background:"syrin-30"},"Litt innhold"),e.createElement(n,{sm:"6",md:"4",lg:"3",background:"syrin-30"},"Litt innhold"),e.createElement(n,{sm:"6",md:"4",lg:"3",background:"syrin-30"},"Litt innhold"),e.createElement(n,{sm:"6",md:"4",lg:"3",background:"syrin-30"},"Litt innhold")))},t={args:{},render:()=>e.createElement(s,null,e.createElement(r,null,e.createElement(n,null,e.createElement("h4",null,"Eksempel med offset på alle skjermstørrelser"))),e.createElement(r,null,e.createElement(n,{sm:{cols:6,offset:2},md:{cols:4,offset:4},lg:{cols:4,offset:2}},e.createElement("ul",null,e.createElement("li",null,"Små skjermer: 6 kolonner med 2 kolonner offset"),e.createElement("li",null,"Medium skjermer: 4 kolonner med 4 kolonner offset"),e.createElement("li",null,"Store skjermer: 4 kolonner med 2 kolonner offset")))),e.createElement(r,null,e.createElement(n,null,e.createElement("h4",null,"Eksempel med offset kun på store skjermer"))),e.createElement(r,null,e.createElement(n,{sm:{cols:6},md:{cols:4},lg:{cols:4,offset:2}},e.createElement("ul",null,e.createElement("li",null,"Små skjermer: 6 kolonner, ingen offset"),e.createElement("li",null,"Medium skjermer: 4 kolonner, ingen offset"),e.createElement("li",null,"Store skjermer: 4 kolonner med 2 kolonner offset")))))};var d,i,a;l.parameters={...l.parameters,docs:{...(d=l.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    sm: {
      gap: 'none'
    },
    md: {
      gap: 'none'
    },
    lg: 'none'
  },
  render: args => <Grid {...args}>
            <GridRow>
                <GridCol sm="6">Litt innhold til venstre</GridCol>
                <GridCol sm="6">Litt innhold til høyre</GridCol>
            </GridRow>
        </Grid>
}`,...(a=(i=l.parameters)==null?void 0:i.docs)==null?void 0:a.source}}};var c,g,f;o.parameters={...o.parameters,docs:{...(c=o.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    sm: {
      gap: 'lg'
    },
    md: {
      gap: 'lg'
    },
    lg: {
      gap: 'lg'
    }
  },
  render: args => <Grid gap="lg">
            <GridRow margin="5xl" padding="2xl" background="frost-30">
                <GridCol sm="6" md="4" lg="3" background="syrin-30">
                    Litt innhold
                </GridCol>
                <GridCol sm="6" md="4" lg="3" background="syrin-30">
                    Litt innhold
                </GridCol>
                <GridCol sm="6" md="4" lg="3" background="syrin-30">
                    Litt innhold
                </GridCol>
                <GridCol sm="6" md="4" lg="3" background="syrin-30">
                    Litt innhold
                </GridCol>
            </GridRow>
        </Grid>
}`,...(f=(g=o.parameters)==null?void 0:g.docs)==null?void 0:f.source}}};var u,k,p;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {},
  render: () => <Grid>
            <GridRow>
                <GridCol>
                    <h4>Eksempel med offset på alle skjermstørrelser</h4>
                </GridCol>
            </GridRow>
            <GridRow>
                <GridCol sm={{
        cols: 6,
        offset: 2
      }} md={{
        cols: 4,
        offset: 4
      }} lg={{
        cols: 4,
        offset: 2
      }}>
                    <ul>
                        <li>Små skjermer: 6 kolonner med 2 kolonner offset</li>
                        <li>
                            Medium skjermer: 4 kolonner med 4 kolonner offset
                        </li>
                        <li>
                            Store skjermer: 4 kolonner med 2 kolonner offset
                        </li>
                    </ul>
                </GridCol>
            </GridRow>
            <GridRow>
                <GridCol>
                    <h4>Eksempel med offset kun på store skjermer</h4>
                </GridCol>
            </GridRow>
            <GridRow>
                <GridCol sm={{
        cols: 6
      }} md={{
        cols: 4
      }} lg={{
        cols: 4,
        offset: 2
      }}>
                    <ul>
                        <li>Små skjermer: 6 kolonner, ingen offset</li>
                        <li>Medium skjermer: 4 kolonner, ingen offset</li>
                        <li>
                            Store skjermer: 4 kolonner med 2 kolonner offset
                        </li>
                    </ul>
                </GridCol>
            </GridRow>
        </Grid>
}`,...(p=(k=t.parameters)==null?void 0:k.docs)==null?void 0:p.source}}};const E=["Standard","Spacing","Offset"],S=Object.freeze(Object.defineProperty({__proto__:null,Offset:t,Spacing:o,Standard:l,__namedExportsOrder:E,default:G},Symbol.toStringTag,{value:"Module"}));export{S as G,t as O,l as S,o as a};
