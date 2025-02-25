import{R as e}from"./index-eCxJ45ll.js";import{G as s,a as n,b as r}from"./GridCol-D1e6eaet.js";const p={title:"Komponenter/Grid/Grid",component:s,argTypes:{as:{control:"select",options:["div","span"]}}},l={args:{},render:i=>e.createElement(s,{...i},e.createElement(n,null,e.createElement(r,{sm:"6"},"Litt innhold til venstre"),e.createElement(r,{sm:"6"},"Litt innhold til høyre")))},o={args:{},render:i=>e.createElement(s,{gap:"lg"},e.createElement(n,{margin:"5xl",padding:"2xl",bgColor:"secondary"},e.createElement(r,{sm:"6",md:"4",lg:"3",bgColor:"tertiary"},"Litt innhold"),e.createElement(r,{sm:"6",md:"4",lg:"3",bgColor:"tertiary"},"Litt innhold"),e.createElement(r,{sm:"6",md:"4",lg:"3",bgColor:"tertiary"},"Litt innhold"),e.createElement(r,{sm:"6",md:"4",lg:"3",bgColor:"tertiary"},"Litt innhold")))},t={args:{},render:()=>e.createElement(s,null,e.createElement(n,null,e.createElement(r,null,e.createElement("h4",null,"Eksempel med offset på alle skjermstørrelser"))),e.createElement(n,null,e.createElement(r,{sm:{cols:6,offset:2},md:{cols:4,offset:4},lg:{cols:4,offset:2}},e.createElement("ul",null,e.createElement("li",null,"Små skjermer: 6 kolonner med 2 kolonner offset"),e.createElement("li",null,"Medium skjermer: 4 kolonner med 4 kolonner offset"),e.createElement("li",null,"Store skjermer: 4 kolonner med 2 kolonner offset")))),e.createElement(n,null,e.createElement(r,null,e.createElement("h4",null,"Eksempel med offset kun på store skjermer"))),e.createElement(n,null,e.createElement(r,{sm:{cols:6},md:{cols:4},lg:{cols:4,offset:2}},e.createElement("ul",null,e.createElement("li",null,"Små skjermer: 6 kolonner, ingen offset"),e.createElement("li",null,"Medium skjermer: 4 kolonner, ingen offset"),e.createElement("li",null,"Store skjermer: 4 kolonner med 2 kolonner offset")))))};var m,d,a;l.parameters={...l.parameters,docs:{...(m=l.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {},
  render: args => <Grid {...args}>
            <GridRow>
                <GridCol sm="6">Litt innhold til venstre</GridCol>
                <GridCol sm="6">Litt innhold til høyre</GridCol>
            </GridRow>
        </Grid>
}`,...(a=(d=l.parameters)==null?void 0:d.docs)==null?void 0:a.source}}};var c,f,g;o.parameters={...o.parameters,docs:{...(c=o.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {},
  render: args => <Grid gap="lg">
            <GridRow margin="5xl" padding="2xl" bgColor="secondary">
                <GridCol sm="6" md="4" lg="3" bgColor="tertiary">
                    Litt innhold
                </GridCol>
                <GridCol sm="6" md="4" lg="3" bgColor="tertiary">
                    Litt innhold
                </GridCol>
                <GridCol sm="6" md="4" lg="3" bgColor="tertiary">
                    Litt innhold
                </GridCol>
                <GridCol sm="6" md="4" lg="3" bgColor="tertiary">
                    Litt innhold
                </GridCol>
            </GridRow>
        </Grid>
}`,...(g=(f=o.parameters)==null?void 0:f.docs)==null?void 0:g.source}}};var G,u,k;t.parameters={...t.parameters,docs:{...(G=t.parameters)==null?void 0:G.docs,source:{originalSource:`{
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
}`,...(k=(u=t.parameters)==null?void 0:u.docs)==null?void 0:k.source}}};const E=["Standard","Spacing","Offset"],S=Object.freeze(Object.defineProperty({__proto__:null,Offset:t,Spacing:o,Standard:l,__namedExportsOrder:E,default:p},Symbol.toStringTag,{value:"Module"}));export{S as G,t as O,l as S,o as a};
