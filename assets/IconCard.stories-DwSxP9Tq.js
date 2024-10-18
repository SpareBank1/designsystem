import{R as e}from"./index-RYns6xqu.js";import{I as c}from"./IconCard-CtuBTAdP.js";import{I as E}from"./Icon-Dor7S2yd.js";const v=n=>e.createElement("div",{...n},"Custom ",n.children),x={title:"components/cards/IconCard",component:c,argTypes:{as:{options:["span","div","custom"],mapping:{div:"div",span:"span",custom:v}}}},t={args:{as:"div",icon:e.createElement(E,{fileUrl:"./icons/open/300/xl/savings.svg",size:"xl"})},render:n=>e.createElement(c,{...n},({CardName:r,Title:s,Subtext:l,Text:o})=>e.createElement(e.Fragment,null,e.createElement(r,null,"Kortnavn"),e.createElement(s,null,"Tittel"),e.createElement(l,null,"En liten undertekst"),e.createElement(o,null,"Her kan man ha tekst")))},a={args:{...t.args,icon:e.createElement(E,{fileUrl:"./icons/open/300/lg/savings.svg",size:"lg"}),condensed:!0},render:n=>e.createElement(c,{...n},({CardName:r,Title:s,Subtext:l,Text:o})=>e.createElement(e.Fragment,null,e.createElement(r,null,"Kortnavn"),e.createElement(s,null,"Tittel"),e.createElement(l,null,"En liten undertekst"),e.createElement(o,null,"Her kan man ha tekst")))};var d,i,m;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    as: 'div',
    icon: <Icon fileUrl="./icons/open/300/xl/savings.svg" size="xl" />
  },
  render: args => <IconCard {...args}>
            {({
      CardName,
      Title,
      Subtext,
      Text
    }) => <>
                    <CardName>Kortnavn</CardName>
                    <Title>Tittel</Title>
                    <Subtext>En liten undertekst</Subtext>
                    <Text>Her kan man ha tekst</Text>
                </>}
        </IconCard>
}`,...(m=(i=t.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};var u,g,p;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    ...Standard.args,
    icon: <Icon fileUrl="./icons/open/300/lg/savings.svg" size="lg" />,
    condensed: true
  },
  render: args => <IconCard {...args}>
            {({
      CardName,
      Title,
      Subtext,
      Text
    }) => <>
                    <CardName>Kortnavn</CardName>
                    <Title>Tittel</Title>
                    <Subtext>En liten undertekst</Subtext>
                    <Text>Her kan man ha tekst</Text>
                </>}
        </IconCard>
}`,...(p=(g=a.parameters)==null?void 0:g.docs)==null?void 0:p.source}}};const C=["Standard","Condensed"],k=Object.freeze(Object.defineProperty({__proto__:null,Condensed:a,Standard:t,__namedExportsOrder:C,default:x},Symbol.toStringTag,{value:"Module"}));export{a as C,k as I,t as S};
