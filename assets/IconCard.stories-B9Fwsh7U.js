import{R as e}from"./index-RYns6xqu.js";import{I as c,s as T}from"./savings-CiGyjG3g.js";import{I as p}from"./Icon-Dor7S2yd.js";const q="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20height='40'%20viewBox='0%20-960%20960%20960'%20width='40'%3e%3cpath%20d='M244.77-140.001q-20.769%200-39.083-13.862-18.314-13.861-24.07-33.907-25-87.129-40.785-147.601-15.785-60.471-24.794-104.249-9.01-43.778-12.523-76.45-3.514-32.673-3.514-64.05%200-83.418%2058.231-141.648%2058.23-58.231%20141.768-58.231h210.001q27-36%2066-58%2038.999-22%2083.999-22%2016.538%200%2028.268%2011.731%2011.731%2011.73%2011.731%2028.268%200%204.077-1.116%207.961-1.115%203.885-2.346%207.731-4.385%2011.769-8.461%2025.462-4.077%2013.692-7.616%2034.77l104.078%20104.077h44.179q13.391%200%2022.336%208.946%208.946%208.945%208.946%2022.336v190.178q0%2010.534-5.741%2018.755-5.741%208.222-16.182%2011.321l-87.182%2028.891-52.331%20174.725q-6.428%2020.46-22.819%2032.653-16.392%2012.193-37.54%2012.193h-75.639q-25.705%200-44.134-18.43-18.43-18.429-18.43-44.134v-17.436H379.999v17.436q0%2025.705-18.43%2044.134-18.429%2018.43-44.134%2018.43H244.77Zm-1.949-50.255h74.614q5.385%200%208.847-3.462%203.462-3.462%203.462-8.847v-67.691h220.512v67.691q0%205.385%203.462%208.847%203.462%203.462%208.847%203.462h75.639q3.975%200%207.245-2.308%203.269-2.308%204.679-6.539l59.718-199.051%2099.898-34.077v-157.513h-45.949L629.744-723.795q.41-17.615%204.051-40.026%203.641-22.41%2010.513-45.333-34.616%209.103-62.475%2030.718-27.859%2021.616-41.192%2048.692H300q-62.242%200-105.993%2043.751T150.256-580q0%2040.897%2020.77%20140.141%2020.769%2099.243%2059.102%20239.987%201.154%204.231%204.808%206.923%203.654%202.693%207.885%202.693ZM640-524.616q14.692%200%2025.038-10.346T675.384-560q0-14.692-10.346-25.038T640-595.384q-14.692%200-25.038%2010.346T604.616-560q0%2014.692%2010.346%2025.038T640-524.616Zm-145.127-95.128q10.698%200%2017.912-7.25Q520-634.243%20520-644.993t-7.215-17.878q-7.214-7.128-17.912-7.128H345.127q-10.698%200-17.912%207.249-7.215%207.25-7.215%2018t7.215%2017.878q7.214%207.128%2017.912%207.128h149.746ZM480-499.897Z'/%3e%3c/svg%3e",E=t=>e.createElement("div",{...t},"Custom ",t.children),x={title:"components/cards/IconCard",component:c,argTypes:{as:{options:["span","div","custom"],mapping:{div:"div",span:"span",custom:E}}}},n={args:{as:"div",icon:e.createElement(p,{fileUrl:T,size:"xl"})},render:t=>e.createElement(c,{...t},({CardName:r,Title:s,Subtext:l,Text:o})=>e.createElement(e.Fragment,null,e.createElement(r,null,"Kortnavn"),e.createElement(s,null,"Tittel"),e.createElement(l,null,"En liten undertekst"),e.createElement(o,null,"Her kan man ha tekst")))},a={args:{...n.args,icon:e.createElement(p,{fileUrl:q,size:"lg"}),condensed:!0},render:t=>e.createElement(c,{...t},({CardName:r,Title:s,Subtext:l,Text:o})=>e.createElement(e.Fragment,null,e.createElement(r,null,"Kortnavn"),e.createElement(s,null,"Tittel"),e.createElement(l,null,"En liten undertekst"),e.createElement(o,null,"Her kan man ha tekst")))};var d,m,i;n.parameters={...n.parameters,docs:{...(d=n.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    as: 'div',
    icon: <Icon fileUrl={savingsIconXlarge} size="xl" />
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
}`,...(i=(m=n.parameters)==null?void 0:m.docs)==null?void 0:i.source}}};var u,g,v;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    ...Standard.args,
    icon: <Icon fileUrl={savingsIconLarge} size="lg" />,
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
}`,...(v=(g=a.parameters)==null?void 0:g.docs)==null?void 0:v.source}}};const h=["Standard","Condensed"],k=Object.freeze(Object.defineProperty({__proto__:null,Condensed:a,Standard:n,__namedExportsOrder:h,default:x},Symbol.toStringTag,{value:"Module"}));export{a as C,k as I,n as S};
