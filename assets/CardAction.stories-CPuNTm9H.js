import{R as e}from"./index-eCxJ45ll.js";import{C as x}from"./WithCardAction-D8xJ0iKc.js";import{C as k}from"./CardBase-CXngqGzu.js";import{I as H}from"./IconCard-sAGPv6z4.js";import{H as C}from"./Heading-BC_GpFGN.js";import{P as h}from"./Paragraph-Qjq98ToE.js";import{I as S}from"./Icon-B88nEPeu.js";const T=a=>e.createElement("a",{...a},"Custom ",a.children),v={title:"Komponenter/Cards/CardAction",component:x,argTypes:{as:{options:["a","button","custom"],mapping:{"":"a",a:"a",button:"button",custom:T}}}},t={args:{as:"a",href:"https://design.sparebank1.no"},render:a=>e.createElement(k,{shadow:!0},({CardAction:r})=>e.createElement(e.Fragment,null,e.createElement(C,null,e.createElement(r,{...a},"Lenke")),e.createElement(h,null,"Hele kortet er klikkbart")))},n={args:{as:"button",type:"button"},render:a=>e.createElement(k,{shadow:!0},({CardAction:r})=>e.createElement(e.Fragment,null,e.createElement(C,null,e.createElement(r,{...a},"Knapp")),e.createElement(h,null,"Hele kortet er klikkbart")))},s={args:{as:"a",href:"https://design.sparebank1.no"},render:a=>e.createElement(H,{icon:e.createElement(S,{fileUrl:"icons/open/300/xl/savings.svg",size:"xl"})},({CardAction:r,CardName:b,Title:E,Subtext:f,Text:A})=>e.createElement(e.Fragment,null,e.createElement(b,null,"Kortnavn"),e.createElement(E,null,e.createElement(r,{...a},"Lenke men hele kortet er klikkbart")),e.createElement(f,null,"En liten undertekst"),e.createElement(A,null,"Her kan man ha tekst")))};var o,l,c;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    as: 'a',
    href: 'https://design.sparebank1.no'
  },
  render: args => <CardBase shadow={true}>
            {({
      CardAction
    }) => <>
                    <Heading2>
                        <CardAction {...args}>Lenke</CardAction>
                    </Heading2>
                    <Paragraph>Hele kortet er klikkbart</Paragraph>
                </>}
        </CardBase>
}`,...(c=(l=t.parameters)==null?void 0:l.docs)==null?void 0:c.source}}};var i,m,d;n.parameters={...n.parameters,docs:{...(i=n.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    as: 'button',
    type: 'button'
  },
  render: args => <CardBase shadow={true}>
            {({
      CardAction
    }) => <>
                    <Heading2>
                        <CardAction {...args}>Knapp</CardAction>
                    </Heading2>
                    <Paragraph>Hele kortet er klikkbart</Paragraph>
                </>}
        </CardBase>
}`,...(d=(m=n.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};var p,u,g;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
    }) => <>
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
}`,...(g=(u=s.parameters)==null?void 0:u.docs)==null?void 0:g.source}}};const B=["Standard","AsButton","WithinTitle"],z=Object.freeze(Object.defineProperty({__proto__:null,AsButton:n,Standard:t,WithinTitle:s,__namedExportsOrder:B,default:v},Symbol.toStringTag,{value:"Module"}));export{n as A,z as C,t as S,s as W};
