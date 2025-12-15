import{r as c,R as e}from"./index-DQDNmYQF.js";import{C as o}from"./Calendar-GdpSWRup.js";const b={title:"Komponenter/Datepicker/Calendar",component:o},a={args:{calendarClassName:void 0,escKeyHandler:()=>null,locale:"nb",onDatePicked:d=>null,selectedDate:"17.12.2024",focusOnMount:!1,minDate:"10.01.2025",maxDate:"15.01.2025"},render:function(t){const[n,r]=c.useState(t.selectedDate);return e.createElement(o,{...t,selectedDate:n,onDatePicked:r})}},s={args:{...a.args,dropdownCaption:!0,selectedDate:"15.05.2025",minDate:"01.01.2020",maxDate:"31.12.2030"},render:function(t){const[n,r]=c.useState(t.selectedDate);return e.createElement("div",null,e.createElement("h3",null,"Kalender med nedtrekksliste for måned og år"),e.createElement("p",null,"Denne kalenderen viser måned og år som nedtrekkslister, slik at brukeren enkelt kan navigere til ønsket dato uten å klikke gjennom flere måneder. Spesielt nyttig når man ønsker å velge datoer langt frem eller tilbake i tid."),e.createElement("div",{style:{marginTop:"20px"}},e.createElement(o,{...t,selectedDate:n,onDatePicked:i=>{r(i),console.log("Valgt dato:",i)}})),n&&e.createElement("p",{style:{marginTop:"12px"}},e.createElement("strong",null,"Valgt dato:")," ",n))}},l={args:{calendarClassName:void 0,escKeyHandler:()=>null,locale:"nb",onDatePicked:d=>null,selectedDate:"18.12.2025",focusOnMount:!1,minDate:"10.11.2025",maxDate:"15.01.2026",disabledDates:["24.12.2025","25.12.2025","31.12.2025"]},render:function(t){const[n,r]=c.useState(t.selectedDate);return e.createElement(o,{...t,selectedDate:n,onDatePicked:r})}};var D,m,u;a.parameters={...a.parameters,docs:{...(D=a.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    calendarClassName: undefined,
    escKeyHandler: () => null,
    locale: 'nb',
    onDatePicked: (date: string) => null,
    selectedDate: '17.12.2024',
    focusOnMount: false,
    minDate: '10.01.2025',
    maxDate: '15.01.2025'
  },
  render: function Render(args) {
    const [selectedDate, setSelectedDate] = useState<string | null | undefined>(args.selectedDate);
    return <Calendar {...args} selectedDate={selectedDate} onDatePicked={setSelectedDate} />;
  }
}`,...(u=(m=a.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};var g,p,k;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    ...Standard.args,
    dropdownCaption: true,
    selectedDate: '15.05.2025',
    minDate: '01.01.2020',
    maxDate: '31.12.2030'
  },
  render: function Render(args) {
    const [selectedDate, setSelectedDate] = useState<string | null | undefined>(args.selectedDate);
    return <div>
                <h3>Kalender med nedtrekksliste for måned og år</h3>
                <p>
                    Denne kalenderen viser måned og år som nedtrekkslister, slik
                    at brukeren enkelt kan navigere til ønsket dato uten å
                    klikke gjennom flere måneder. Spesielt nyttig når man ønsker
                    å velge datoer langt frem eller tilbake i tid.
                </p>
                <div style={{
        marginTop: '20px'
      }}>
                    <Calendar {...args} selectedDate={selectedDate} onDatePicked={date => {
          setSelectedDate(date);
          console.log('Valgt dato:', date);
        }} />
                </div>
                {selectedDate && <p style={{
        marginTop: '12px'
      }}>
                        <strong>Valgt dato:</strong> {selectedDate}
                    </p>}
            </div>;
  }
}`,...(k=(p=s.parameters)==null?void 0:p.docs)==null?void 0:k.source}}};var f,S,C;l.parameters={...l.parameters,docs:{...(f=l.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    calendarClassName: undefined,
    escKeyHandler: () => null,
    locale: 'nb',
    onDatePicked: (date: string) => null,
    selectedDate: '18.12.2025',
    focusOnMount: false,
    minDate: '10.11.2025',
    maxDate: '15.01.2026',
    disabledDates: ['24.12.2025', '25.12.2025', '31.12.2025']
  },
  render: function Render(args) {
    const [selectedDate, setSelectedDate] = useState<string | null | undefined>(args.selectedDate);
    return <Calendar {...args} selectedDate={selectedDate} onDatePicked={setSelectedDate} />;
  }
}`,...(C=(S=l.parameters)==null?void 0:S.docs)==null?void 0:C.source}}};const v=["Standard","WithDropdownCaption","WithDisabledDates"],E=Object.freeze(Object.defineProperty({__proto__:null,Standard:a,WithDisabledDates:l,WithDropdownCaption:s,__namedExportsOrder:v,default:b},Symbol.toStringTag,{value:"Module"}));export{E as C,a as S,s as W};
