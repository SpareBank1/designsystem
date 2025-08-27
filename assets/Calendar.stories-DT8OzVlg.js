import{r as p,R as e}from"./index-DQDNmYQF.js";import{C as s}from"./Calendar-D5vWCd0d.js";const k={title:"Komponenter/Datepicker/Calendar",component:s},t={args:{calendarClassName:void 0,escKeyHandler:()=>null,locale:"nb",onDatePicked:d=>null,selectedDate:"17.12.2024",focusOnMount:!1,minDate:"10.01.2025",maxDate:"15.01.2025"},render:function(n){const[a,l]=p.useState(n.selectedDate);return e.createElement(s,{...n,selectedDate:a,onDatePicked:l})}},r={args:{...t.args,dropdownCaption:!0,selectedDate:"15.05.2025",minDate:"01.01.2020",maxDate:"31.12.2030"},render:function(n){const[a,l]=p.useState(n.selectedDate);return e.createElement("div",null,e.createElement("h3",null,"Kalender med nedtrekksliste for måned og år"),e.createElement("p",null,"Denne kalenderen viser måned og år som nedtrekkslister, slik at brukeren enkelt kan navigere til ønsket dato uten å klikke gjennom flere måneder. Spesielt nyttig når man ønsker å velge datoer langt frem eller tilbake i tid."),e.createElement("div",{style:{marginTop:"20px"}},e.createElement(s,{...n,selectedDate:a,onDatePicked:o=>{l(o),console.log("Valgt dato:",o)}})),a&&e.createElement("p",{style:{marginTop:"12px"}},e.createElement("strong",null,"Valgt dato:")," ",a))}};var c,i,m;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(m=(i=t.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};var u,g,D;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
                    Denne kalenderen viser måned og år som nedtrekkslister, slik at brukeren enkelt kan navigere til ønsket dato
                    uten å klikke gjennom flere måneder. Spesielt nyttig når man ønsker å velge datoer langt frem eller tilbake i tid.
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
}`,...(D=(g=r.parameters)==null?void 0:g.docs)==null?void 0:D.source}}};const f=["Standard","WithDropdownCaption"],C=Object.freeze(Object.defineProperty({__proto__:null,Standard:t,WithDropdownCaption:r,__namedExportsOrder:f,default:k},Symbol.toStringTag,{value:"Module"}));export{C,t as S,r as W};
