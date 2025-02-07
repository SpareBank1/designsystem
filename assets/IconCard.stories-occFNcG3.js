import{R as e}from"./index-ne9I_3bB.js";import{I as m}from"./IconCard-BUTjjsrb.js";import{I as o}from"./Icon-D2PqKf0B.js";const f=n=>e.createElement("div",{...n},"Custom ",n.children),b={title:"Komponenter/Cards/IconCard",component:m,argTypes:{as:{options:["span","div","custom"],mapping:{div:"div",span:"span",custom:f}}}},l={args:{as:"div",icon:e.createElement(o,{fileUrl:"./icons/open/300/xl/savings.svg",size:"xl"})},render:n=>e.createElement(m,{...n},({CardName:t,Title:r,Subtext:a,Text:s})=>e.createElement(e.Fragment,null,e.createElement(t,null,"Kortnavn"),e.createElement(r,null,"Tittel"),e.createElement(a,null,"En liten undertekst"),e.createElement(s,null,"Her kan man ha tekst")))},c={args:{...l.args,icon:e.createElement(o,{fileUrl:"./icons/open/300/lg/savings.svg",size:"lg"}),condensed:!0},render:n=>e.createElement(m,{...n},({CardName:t,Title:r,Subtext:a,Text:s})=>e.createElement(e.Fragment,null,e.createElement(t,null,"Kortnavn"),e.createElement(r,null,"Tittel"),e.createElement(a,null,"En liten undertekst"),e.createElement(s,null,"Her kan man ha tekst")))},i={args:{as:"div",icon:e.createElement(o,{fileUrl:"./icons/open/300/xl/savings.svg",size:"xl"}),rightIcon:e.createElement(o,{fileUrl:"./icons/open/300/xl/chevron_right.svg",size:"xl"})},render:n=>e.createElement(m,{...n},({CardName:t,Title:r,Subtext:a,Text:s})=>e.createElement(e.Fragment,null,e.createElement(t,null,"Kortnavn"),e.createElement(r,null,"Tittel"),e.createElement(a,null,"En liten undertekst"),e.createElement(s,null,"Her kan man ha tekst")))},d={args:{as:"div",icon:e.createElement(o,{fileUrl:"./icons/open/300/lg/savings.svg",size:"lg"}),rightIcon:e.createElement(o,{fileUrl:"./icons/open/300/xl/chevron_right.svg",size:"lg"}),condensed:!0},render:n=>e.createElement(m,{...n},({CardName:t,Title:r,Subtext:a,Text:s})=>e.createElement(e.Fragment,null,e.createElement(t,null,"Kortnavn"),e.createElement(r,null,"Tittel"),e.createElement(a,null,"En liten undertekst"),e.createElement(s,null,"Her kan man ha tekst")))};var g,u,v;l.parameters={...l.parameters,docs:{...(g=l.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
}`,...(v=(u=l.parameters)==null?void 0:u.docs)==null?void 0:v.source}}};var p,x,E;c.parameters={...c.parameters,docs:{...(p=c.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(E=(x=c.parameters)==null?void 0:x.docs)==null?void 0:E.source}}};var T,C,I;i.parameters={...i.parameters,docs:{...(T=i.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    as: 'div',
    icon: <Icon fileUrl="./icons/open/300/xl/savings.svg" size="xl" />,
    rightIcon: <Icon fileUrl="./icons/open/300/xl/chevron_right.svg" size="xl" />
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
}`,...(I=(C=i.parameters)==null?void 0:C.docs)==null?void 0:I.source}}};var k,S,h;d.parameters={...d.parameters,docs:{...(k=d.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    as: 'div',
    icon: <Icon fileUrl="./icons/open/300/lg/savings.svg" size="lg" />,
    rightIcon: <Icon fileUrl="./icons/open/300/xl/chevron_right.svg" size="lg" />,
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
}`,...(h=(S=d.parameters)==null?void 0:S.docs)==null?void 0:h.source}}};const z=["Standard","Condensed","TwoIcons","TwoIconsCondensed"],K=Object.freeze(Object.defineProperty({__proto__:null,Condensed:c,Standard:l,TwoIcons:i,TwoIconsCondensed:d,__namedExportsOrder:z,default:b},Symbol.toStringTag,{value:"Module"}));export{c as C,K as I,l as S};
