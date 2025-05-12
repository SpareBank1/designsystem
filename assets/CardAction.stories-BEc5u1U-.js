import{R as e}from"./index-DQDNmYQF.js";import{C as k}from"./CardBase-CTHMSme-.js";import{I as x}from"./IconCard-DjVvW_uF.js";import{C as H}from"./WithCardAction-BEfhMYaK.js";import{H as C}from"./Heading-D_Y6r1eI.js";import{P as b}from"./Paragraph-DEYlXMQQ.js";import{I as S}from"./Icon-BqsuuMcG.js";const P=r=>e.createElement("a",{...r},"Custom ",r.children),T={title:"Komponenter/Cards/CardAction",component:H,argTypes:{as:{options:["a","button","custom"],mapping:{"":"a",a:"a",button:"button",custom:P}}}},t={args:{as:"a",href:"https://design.sparebank1.no"},render:r=>e.createElement(k,null,({CardAction:a})=>e.createElement(e.Fragment,null,e.createElement(C,null,e.createElement(a,{...r},"Lenke")),e.createElement(b,null,"Hele kortet er klikkbart")))},n={args:{as:"button",type:"button"},render:r=>e.createElement(k,null,({CardAction:a})=>e.createElement(e.Fragment,null,e.createElement(C,null,e.createElement(a,{...r},"Knapp")),e.createElement(b,null,"Hele kortet er klikkbart")))},o={args:{as:"a",href:"https://design.sparebank1.no"},render:r=>e.createElement(x,{icon:e.createElement(S,{fileUrl:"icons/open/300/xl/savings.svg",size:"xl"})},({CardAction:a,CardName:E,Title:h,Subtext:A,Text:f})=>e.createElement(e.Fragment,null,e.createElement(E,null,"Kortnavn"),e.createElement(h,null,e.createElement(a,{...r},"Lenke men hele kortet er klikkbart")),e.createElement(A,null,"En liten undertekst"),e.createElement(f,null,"Her kan man ha tekst")))};var s,l,c;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    as: 'a',
    href: 'https://design.sparebank1.no'
  },
  render: args => <CardBase>
            {({
      CardAction
    }: CardActionRenderProps) => <>
                    <Heading4>
                        <CardAction {...args}>Lenke</CardAction>
                    </Heading4>
                    <Paragraph>Hele kortet er klikkbart</Paragraph>
                </>}
        </CardBase>
}`,...(c=(l=t.parameters)==null?void 0:l.docs)==null?void 0:c.source}}};var i,d,m;n.parameters={...n.parameters,docs:{...(i=n.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    as: 'button',
    type: 'button'
  },
  render: args => <CardBase>
            {({
      CardAction
    }: CardActionRenderProps) => <>
                    <Heading4>
                        <CardAction {...args}>Knapp</CardAction>
                    </Heading4>
                    <Paragraph>Hele kortet er klikkbart</Paragraph>
                </>}
        </CardBase>
}`,...(m=(d=n.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};var p,u,g;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(g=(u=o.parameters)==null?void 0:u.docs)==null?void 0:g.source}}};const v=["Standard","AsButton","WithinTitle"],z=Object.freeze(Object.defineProperty({__proto__:null,AsButton:n,Standard:t,WithinTitle:o,__namedExportsOrder:v,default:T},Symbol.toStringTag,{value:"Module"}));export{n as A,z as C,t as S,o as W};
