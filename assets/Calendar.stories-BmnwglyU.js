import{r as o,R as u}from"./index-eCxJ45ll.js";import{C as l}from"./Calendar-DQGrGpSs.js";const i={title:"Komponenter/Datepicker/Calendar",component:l},e={args:{calendarClassName:void 0,escKeyHandler:()=>null,locale:"nb",maxDate:null,minDate:null,onDatePicked:s=>null,selectedDate:"17.12.2024",focusOnMount:!1},render:function(t){const[d,c]=o.useState(t.selectedDate);return u.createElement(l,{...t,selectedDate:d,onDatePicked:c})}};var a,n,r;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(r=(n=e.parameters)==null?void 0:n.docs)==null?void 0:r.source}}};const m=["Standard"],f=Object.freeze(Object.defineProperty({__proto__:null,Standard:e,__namedExportsOrder:m,default:i},Symbol.toStringTag,{value:"Module"}));export{f as C,e as S};
