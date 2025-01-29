import{R as e}from"./index-ne9I_3bB.js";import{C as x}from"./WithCardAction-Bpdr1y6g.js";import{C as k}from"./CardBase-CZAvwkxU.js";import{I as H}from"./IconCard-B6t2AWrK.js";import{H as C}from"./Heading-BmtvF97a.js";import{P as h}from"./Paragraph-CgekKyFC.js";import{I as S}from"./Icon-D2PqKf0B.js";const P=r=>e.createElement("a",{...r},"Custom ",r.children),T={title:"Komponenter/Cards/CardAction",component:x,argTypes:{as:{options:["a","button","custom"],mapping:{"":"a",a:"a",button:"button",custom:P}}}},t={args:{as:"a",href:"https://design.sparebank1.no"},render:r=>e.createElement(k,{shadow:!0},({CardAction:a})=>e.createElement(e.Fragment,null,e.createElement(C,null,e.createElement(a,{...r},"Lenke")),e.createElement(h,null,"Hele kortet er klikkbart")))},n={args:{as:"button",type:"button"},render:r=>e.createElement(k,{shadow:!0},({CardAction:a})=>e.createElement(e.Fragment,null,e.createElement(C,null,e.createElement(a,{...r},"Knapp")),e.createElement(h,null,"Hele kortet er klikkbart")))},o={args:{as:"a",href:"https://design.sparebank1.no"},render:r=>e.createElement(H,{icon:e.createElement(S,{fileUrl:"icons/open/300/xl/savings.svg",size:"xl"})},({CardAction:a,CardName:b,Title:E,Subtext:A,Text:f})=>e.createElement(e.Fragment,null,e.createElement(b,null,"Kortnavn"),e.createElement(E,null,e.createElement(a,{...r},"Lenke men hele kortet er klikkbart")),e.createElement(A,null,"En liten undertekst"),e.createElement(f,null,"Her kan man ha tekst")))};var s,l,c;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    as: 'a',
    href: 'https://design.sparebank1.no'
  },
  render: args => <CardBase shadow={true}>
            {({
      CardAction
    }: CardActionRenderProps) => <>
                    <Heading2>
                        <CardAction {...args}>Lenke</CardAction>
                    </Heading2>
                    <Paragraph>Hele kortet er klikkbart</Paragraph>
                </>}
        </CardBase>
}`,...(c=(l=t.parameters)==null?void 0:l.docs)==null?void 0:c.source}}};var d,i,m;n.parameters={...n.parameters,docs:{...(d=n.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    as: 'button',
    type: 'button'
  },
  render: args => <CardBase shadow={true}>
            {({
      CardAction
    }: CardActionRenderProps) => <>
                    <Heading2>
                        <CardAction {...args}>Knapp</CardAction>
                    </Heading2>
                    <Paragraph>Hele kortet er klikkbart</Paragraph>
                </>}
        </CardBase>
}`,...(m=(i=n.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};var p,u,g;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    as: 'a',
    href: 'https://design.sparebank1.no'
  },
  render: args => <IconCard icon={<Icon fileUrl="icons/open/300/xl/savings.svg" size="xl" />}>
            {({
      CardAction,
      CardName,
      Title,
      Subtext,
      Text
    }: CardRenderProps) => <>
                    <CardName>Kortnavn</CardName>
                    <Title>
                        <CardAction {...args}>
                            Lenke men hele kortet er klikkbart
                        </CardAction>
                    </Title>
                    <Subtext>En liten undertekst</Subtext>
                    <Text>Her kan man ha tekst</Text>
                </>}
        </IconCard>
}`,...(g=(u=o.parameters)==null?void 0:u.docs)==null?void 0:g.source}}};const v=["Standard","AsButton","WithinTitle"],L=Object.freeze(Object.defineProperty({__proto__:null,AsButton:n,Standard:t,WithinTitle:o,__namedExportsOrder:v,default:T},Symbol.toStringTag,{value:"Module"}));export{n as A,L as C,t as S,o as W};
