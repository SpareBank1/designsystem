import{r as o,R as u}from"./index-ne9I_3bB.js";import{C as l}from"./Calendar-2AokGwns.js";const i={title:"Komponenter/Datepicker/Calendar",component:l},e={args:{calendarClassName:void 0,escKeyHandler:()=>null,locale:"nb",maxDate:null,minDate:null,onDatePicked:s=>null,selectedDate:"17.12.2024",focusOnMount:!1},render:function(t){const[d,c]=o.useState(t.selectedDate);return u.createElement(l,{...t,selectedDate:d,onDatePicked:c})}};var n,a,r;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    calendarClassName: undefined,
    escKeyHandler: () => null,
    locale: 'nb',
    maxDate: null,
    minDate: null,
    onDatePicked: (date: string) => null,
    selectedDate: '17.12.2024',
    focusOnMount: false
  },
  render: function Render(args) {
    const [selectedDate, setSelectedDate] = useState<string | null | undefined>(args.selectedDate);
    return <Calendar {...args} selectedDate={selectedDate} onDatePicked={setSelectedDate} />;
  }
}`,...(r=(a=e.parameters)==null?void 0:a.docs)==null?void 0:r.source}}};const m=["Standard"],p=Object.freeze(Object.defineProperty({__proto__:null,Standard:e,__namedExportsOrder:m,default:i},Symbol.toStringTag,{value:"Module"}));export{p as C,e as S};
