import{r as l,R as n}from"./index-eCxJ45ll.js";import{v as G,g as Q,i as A,C as Ne,a as Oe}from"./Calendar-DQGrGpSs.js";import{c as q}from"./index-DezCrw0f.js";import{d as ke}from"./index-DrzhKqaf.js";import{I as Re}from"./Icon-B88nEPeu.js";import{E as he}from"./ErrorFieldMessage-CFe1xxra.js";import{I as H}from"./InputGroup-BoYo0rXD.js";const ye=l.createContext({day:null,month:null,year:null,setDay:()=>null,setMonth:()=>null,setYear:()=>null,locale:"nb",calendarActiveDate:"",setCalendarActiveDate:()=>null}),Se=12,xe=31,Te=({children:o,value:s="",locale:T})=>{const i=G(s)?Q(s):"",[m,g]=l.useState(i?i.date:null),[c,D]=l.useState(i?i.month+1:null),[v,I]=l.useState(i?i.year:null),[E,y]=l.useState((i==null?void 0:i.toString())??""),L=a=>{const t=a.filter(r=>typeof r=="number");return t.map((r,d)=>(r??1)*Math.pow(10,t.length-d-1)).reduce((r,d)=>r+d,0)};return n.createElement(ye.Provider,{value:{day:m,month:c,year:v,setDay:(a,t=void 0)=>{const r=a.slice(-2),[d,p]=r,b=L(r);b>xe?t==null||t():d>3?(g(b),t==null||t()):(g(b),p!==void 0&&(t==null||t()))},setMonth:(a,t=void 0)=>{const r=a.slice(-2),[d,p]=r,b=L(r);b>Se?t==null||t():d>1?(D(b),t==null||t()):(D(b),p!==void 0&&(t==null||t()))},setYear:a=>{I(L(a.slice(-4)))},calendarActiveDate:E,setCalendarActiveDate:a=>{y(a)},locale:T}},o)};Te.__docgenInfo={description:"",methods:[],displayName:"DatepickerProvider",props:{locale:{required:!0,tsType:{name:"union",raw:"'nb' | 'nn' | 'en'",elements:[{name:"literal",value:"'nb'"},{name:"literal",value:"'nn'"},{name:"literal",value:"'en'"}]},description:""},value:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};const _=n.forwardRef(({className:o,onSpinButtonChange:s,maxLength:T,min:i,max:m,value:g,nextSpinButton:c,prevSpinButton:D,children:v,...I},E)=>{const y=l.useRef([]),L=a=>{var t,r;if(a.stopPropagation(),/\d/.test(a.key))y.current=y.current.length===T?y.current=[parseInt(a.key)]:y.current.concat(parseInt(a.key)),s(y.current);else if(a.key==="Backspace")y.current=[],s(y.current);else if(a.key==="ArrowUp"){let d=(g??0)+1;d&&d!==null&&d>m&&(d=i),s([d],!1)}else if(a.key==="ArrowDown"){let d=(g??0)-1;d<i&&(d=m),s([d],!1)}else a.key==="ArrowLeft"?(t=D==null?void 0:D.current)==null||t.focus():a.key==="ArrowRight"&&((r=c==null?void 0:c.current)==null||r.focus())};return n.createElement("span",{role:"spinbutton",inputMode:"numeric",className:q(o,"ffe-dateinput__field"),tabIndex:0,onFocus:()=>{y.current=[]},"aria-valuemin":i,"aria-valuemax":m,"aria-valuenow":g,ref:E,onKeyDown:L,...I},v)});_.__docgenInfo={description:"",methods:[],displayName:"SpinButton",props:{className:{required:!1,tsType:{name:"string"},description:""},onSpinButtonChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(value: number[], allowFocusNext?: boolean) => void",signature:{arguments:[{type:{name:"Array",elements:[{name:"number"}],raw:"number[]"},name:"value"},{type:{name:"boolean"},name:"allowFocusNext"}],return:{name:"void"}}},description:""},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},maxLength:{required:!0,tsType:{name:"number"},description:""},min:{required:!0,tsType:{name:"number"},description:""},max:{required:!0,tsType:{name:"number"},description:""},value:{required:!1,tsType:{name:"number"},description:""},nextSpinButton:{required:!1,tsType:{name:"ReactRefObject",raw:"React.RefObject<HTMLSpanElement>",elements:[{name:"HTMLSpanElement"}]},description:""},prevSpinButton:{required:!1,tsType:{name:"ReactRefObject",raw:"React.RefObject<HTMLSpanElement>",elements:[{name:"HTMLSpanElement"}]},description:""}}};const ne=({value:o})=>o<10?`0${o}`:o,fe=n.forwardRef(({value:o,locale:s,onClick:T},i)=>{const m=G(o)?`${A[s].CHANGE_DATE}, ${A[s].CHOSEN_DATE} ${o}`:A[s].CHOOSE_DATE;return n.createElement("button",{"data-testid":"datepicker-open",ref:i,onClick:T,className:"ffe-datepicker__button","aria-label":m,type:"button"},n.createElement(Re,{ariaLabel:A[s].CALENDAR_LABEL,fileUrl:"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgLTk2MCA5NjAgOTYwIiB3aWR0aD0iMjQiPjxwYXRoIGQ9Ik0yMTIuMzA5LTEwMC4wMDFxLTMwLjMwOCAwLTUxLjMwOC0yMXQtMjEtNTEuMzA4di01MzUuMzgycTAtMzAuMzA4IDIxLTUxLjMwOHQ1MS4zMDgtMjFoNTUuMzg1di01My44NDdxMC0xMy4xNTMgOC44MDgtMjEuOTYxIDguODA3LTguODA3IDIxLjk2MS04LjgwNyAxMy4xNTMgMCAyMS45NjEgOC44MDcgOC44MDcgOC44MDggOC44MDcgMjEuOTYxdjUzLjg0N2gzMDMuMDc2di01NC42MTZxMC0xMi43NjkgOC42MTUtMjEuMzg0dDIxLjM4NC04LjYxNXExMi43NjkgMCAyMS4zODQgOC42MTUgOC42MTYgOC42MTUgOC42MTYgMjEuMzg0djU0LjYxNmg1NS4zODVxMzAuMzA4IDAgNTEuMzA4IDIxdDIxIDUxLjMwOHY1MzUuMzgycTAgMzAuMzA4LTIxIDUxLjMwOHQtNTEuMzA4IDIxSDIxMi4zMDlabTAtNTkuOTk5aDUzNS4zODJxNC42MTYgMCA4LjQ2My0zLjg0NiAzLjg0Ni0zLjg0NyAzLjg0Ni04LjQ2M3YtMzc1LjM4MkgyMDB2Mzc1LjM4MnEwIDQuNjE2IDMuODQ2IDguNDYzIDMuODQ3IDMuODQ2IDguNDYzIDMuODQ2Wk0yMDAtNjA3LjY5aDU2MHYtMTAwLjAwMXEwLTQuNjE2LTMuODQ2LTguNDYzLTMuODQ3LTMuODQ2LTguNDYzLTMuODQ2SDIxMi4zMDlxLTQuNjE2IDAtOC40NjMgMy44NDYtMy44NDYgMy44NDctMy44NDYgOC40NjN2MTAwLjAwMVptMCAwVi03MjB2MTEyLjMxWm0yODAgMjEwLjc2N3EtMTQuNjkyIDAtMjUuMDM4LTEwLjM0NnQtMTAuMzQ2LTI1LjAzOHEwLTE0LjY5MiAxMC4zNDYtMjUuMDM4VDQ4MC00NjcuNjkxcTE0LjY5MiAwIDI1LjAzOCAxMC4zNDZ0MTAuMzQ2IDI1LjAzOHEwIDE0LjY5Mi0xMC4zNDYgMjUuMDM4VDQ4MC0zOTYuOTIzWm0tMTYwIDBxLTE0LjY5MiAwLTI1LjAzOC0xMC4zNDZ0LTEwLjM0Ni0yNS4wMzhxMC0xNC42OTIgMTAuMzQ2LTI1LjAzOFQzMjAtNDY3LjY5MXExNC42OTIgMCAyNS4wMzggMTAuMzQ2dDEwLjM0NiAyNS4wMzhxMCAxNC42OTItMTAuMzQ2IDI1LjAzOFQzMjAtMzk2LjkyM1ptMzIwIDBxLTE0LjY5MiAwLTI1LjAzOC0xMC4zNDZ0LTEwLjM0Ni0yNS4wMzhxMC0xNC42OTIgMTAuMzQ2LTI1LjAzOFQ2NDAtNDY3LjY5MXExNC42OTIgMCAyNS4wMzggMTAuMzQ2dDEwLjM0NiAyNS4wMzhxMCAxNC42OTItMTAuMzQ2IDI1LjAzOFQ2NDAtMzk2LjkyM1pNNDgwLTI0MHEtMTQuNjkyIDAtMjUuMDM4LTEwLjM0NnQtMTAuMzQ2LTI1LjAzOHEwLTE0LjY5MiAxMC4zNDYtMjUuMDM4IDEwLjM0Ni0xMC4zNDcgMjUuMDM4LTEwLjM0N3QyNS4wMzggMTAuMzQ3cTEwLjM0NiAxMC4zNDYgMTAuMzQ2IDI1LjAzOHQtMTAuMzQ2IDI1LjAzOFE0OTQuNjkyLTI0MCA0ODAtMjQwWm0tMTYwIDBxLTE0LjY5MiAwLTI1LjAzOC0xMC4zNDZ0LTEwLjM0Ni0yNS4wMzhxMC0xNC42OTIgMTAuMzQ2LTI1LjAzOCAxMC4zNDYtMTAuMzQ3IDI1LjAzOC0xMC4zNDd0MjUuMDM4IDEwLjM0N3ExMC4zNDYgMTAuMzQ2IDEwLjM0NiAyNS4wMzh0LTEwLjM0NiAyNS4wMzhRMzM0LjY5Mi0yNDAgMzIwLTI0MFptMzIwIDBxLTE0LjY5MiAwLTI1LjAzOC0xMC4zNDZ0LTEwLjM0Ni0yNS4wMzhxMC0xNC42OTIgMTAuMzQ2LTI1LjAzOCAxMC4zNDYtMTAuMzQ3IDI1LjAzOC0xMC4zNDd0MjUuMDM4IDEwLjM0N3ExMC4zNDYgMTAuMzQ2IDEwLjM0NiAyNS4wMzh0LTEwLjM0NiAyNS4wMzhRNjU0LjY5Mi0yNDAgNjQwLTI0MFoiLz48L3N2Zz4=",size:"md",className:"ffe-datepicker__icon"}))});fe.__docgenInfo={description:"",methods:[],displayName:"Button",props:{value:{required:!0,tsType:{name:"string"},description:""},locale:{required:!0,tsType:{name:"union",raw:"'nb' | 'nn' | 'en'",elements:[{name:"literal",value:"'nb'"},{name:"literal",value:"'nn'"},{name:"literal",value:"'en'"}]},description:""},onClick:{required:!0,tsType:{name:"ReactMouseEventHandler",raw:"React.MouseEventHandler<HTMLButtonElement>",elements:[{name:"HTMLButtonElement"}]},description:""}}};const Ye=o=>typeof o=="number"&&o>=1&&o<=12,be=({ariaInvalid:o,"aria-invalid":s,ariaDescribedby:T,"aria-describedby":i,onBlur:m,calendarAbove:g,id:c,maxDate:D,minDate:v,onChange:I,fullWidth:E,fieldMessage:y,labelId:L})=>{const{day:a,setDay:t,year:r,setYear:d,month:p,setMonth:b,locale:C,calendarActiveDate:W,setCalendarActiveDate:Z}=l.useContext(ye),[z,U]=l.useState(!1),[X,Ie]=l.useState(v),[K,Le]=l.useState(D),[V,J]=l.useState(""),P=l.useId(),R=l.useRef(null),h=l.useRef(null),w=l.useRef(null),S=l.useRef(null),ve=y?`${P}-fieldmessage`:void 0,x=l.useCallback(ke(e=>{e!==V&&G(e)&&(Z(e),J(e))},250),[V]),Ae=!!y;l.useEffect(()=>()=>{x.cancel()},[x]);const F=()=>{const e=`${a}.${p}.${r}`;Q(e,M=>{const f=D?Q(D):null;f!=null&&f.isBefore(M)&&Oe(e)&&M.adjust({period:"Y",offset:-100});const B=M.format();B!==e&&I(B),J(B)})};l.useEffect(()=>{(v!==X||D!==K)&&(Ie(v),Le(D),F()),x(`${a}.${p}.${r}`)},[v,D,a,p,r,x]);const ee=()=>{var e;U(!1),(e=R.current)==null||e.focus(),F()},ae=e=>{e.key==="Escape"&&ee()},te=e=>{z&&e.__datepickerID!==P&&ee()},Ce=()=>{window.addEventListener("click",te),window.addEventListener("keyup",ae)},re=()=>{window.removeEventListener("click",te),window.removeEventListener("keyup",ae)};l.useEffect(()=>(z?Ce():re(),()=>{re()}),[z]);const je=()=>{F(),U(!z)},Ee=e=>{const M=e.nativeEvent;M.__datepickerID=P},ze=e=>{var M;e.target!==S.current&&e.target!==R.current&&e.target!==h.current&&e.target!==w.current&&((M=h.current)==null||M.focus())},we=e=>{var f;const M=Q(e);M&&(t([M.date]),b([M.month+1]),d([M.year]),I(e),U(!1),Z(e),(f=R.current)==null||f.focus())},Y=()=>{const e=s==="true"||o;return e==="true"||e===!0?"true":void 0},$=()=>i??T;return n.createElement("div",{className:q("ffe-datepicker",{"ffe-datepicker--full-width":E,"ffe-input-group--message":Ae}),"data-testid":"date-picker",onClick:e=>{Ee(e),ze(e)},role:"group",id:c},n.createElement("div",{className:q("ffe-input-field","ffe-dateinput",{"ffe-input-field--invalid":Y()})},n.createElement(_,{ref:h,value:a??void 0,min:1,max:31,onSpinButtonChange:(e,M=!0)=>(I(`${e}.${p}.${r}`),M?t(e,()=>{var f;return(f=w.current)==null?void 0:f.focus({preventScroll:!0})}):t(e)),nextSpinButton:w,maxLength:2,"aria-invalid":Y(),"aria-valuenow":typeof a=="number"?a:void 0,"aria-valuetext":`${a}`,"aria-label":A[C].DAY,"aria-describedby":$(),"aria-labelledby":L},a?n.createElement(ne,{value:a}):"dd"),".",n.createElement(_,{ref:w,value:p??void 0,min:1,max:12,onSpinButtonChange:(e,M=!0)=>(I(`${e}.${p}.${r}`),M?b(e,()=>{var f;return(f=S.current)==null?void 0:f.focus({preventScroll:!0})}):b(e)),nextSpinButton:S,prevSpinButton:h,maxLength:2,"aria-invalid":Y(),"aria-valuenow":typeof p=="number"?p:void 0,"aria-valuetext":Ye(p)?`${p} - ${A[C][`MONTH_${p}`]}`:void 0,"aria-label":A[C].MONTH,"aria-describedby":$(),"aria-labelledby":L},p?n.createElement(ne,{value:p}):"mm"),".",n.createElement(_,{ref:S,className:"ffe-dateinput__field-year",value:r??void 0,min:1,max:9999,onSpinButtonChange:e=>{I(`${e}.${p}.${r}`),d(e)},prevSpinButton:w,maxLength:4,"aria-invalid":Y(),"aria-valuetext":`${r}`,"aria-valuenow":typeof r=="number"?r:void 0,"aria-label":A[C].YEAR,onBlur:m,"aria-describedby":$(),"aria-labelledby":L},r||"yyyy")),n.createElement(fe,{onClick:je,locale:C,value:W||"",ref:R}),z&&n.createElement(Ne,{calendarClassName:q("ffe-calendar ffe-calendar--datepicker",{"ffe-calendar--datepicker--above":g}),locale:C,maxDate:K,minDate:X,onDatePicked:we,selectedDate:W,focusOnMount:!0}),!!y&&n.createElement(he,{as:"p",id:ve},y))};be.__docgenInfo={description:"",methods:[],displayName:"DatepickerComp",props:{"aria-invalid":{required:!1,tsType:{name:"ReactComponentProps['aria-invalid']",raw:"React.ComponentProps<'input'>['aria-invalid']"},description:""},ariaInvalid:{required:!1,tsType:{name:"ReactComponentProps['aria-invalid']",raw:"React.ComponentProps<'input'>['aria-invalid']"},description:""},"aria-describedby":{required:!1,tsType:{name:"ReactComponentProps['aria-describedby']",raw:"React.ComponentProps<'input'>['aria-describedby']"},description:""},ariaDescribedby:{required:!1,tsType:{name:"ReactComponentProps['aria-describedby']",raw:"React.ComponentProps<'input'>['aria-describedby']"},description:""},onBlur:{required:!1,tsType:{name:"signature",type:"function",raw:"(evt: React.FocusEvent) => void",signature:{arguments:[{type:{name:"ReactFocusEvent",raw:"React.FocusEvent"},name:"evt"}],return:{name:"void"}}},description:"Blur used for e.g. validating the date. Triggered on blur of the last field, i.e. year."},calendarAbove:{required:!1,tsType:{name:"boolean"},description:""},id:{required:!1,tsType:{name:"string"},description:""},maxDate:{required:!1,tsType:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}]},description:""},minDate:{required:!1,tsType:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}]},description:""},onChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(date: string) => void",signature:{arguments:[{type:{name:"string"},name:"date"}],return:{name:"void"}}},description:""},fullWidth:{required:!1,tsType:{name:"boolean"},description:""},fieldMessage:{required:!1,tsType:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}]},description:""},labelId:{required:!0,tsType:{name:"string"},description:"Id of the label describing the datepicker. Required for UU-compatibility"}}};const j=({locale:o="nb",value:s,...T})=>n.createElement(Te,{locale:o,value:s},n.createElement(be,{...T}));j.__docgenInfo={description:"",methods:[],displayName:"Datepicker",props:{"aria-invalid":{required:!1,tsType:{name:"ReactComponentProps['aria-invalid']",raw:"React.ComponentProps<'input'>['aria-invalid']"},description:""},ariaInvalid:{required:!1,tsType:{name:"ReactComponentProps['aria-invalid']",raw:"React.ComponentProps<'input'>['aria-invalid']"},description:""},"aria-describedby":{required:!1,tsType:{name:"ReactComponentProps['aria-describedby']",raw:"React.ComponentProps<'input'>['aria-describedby']"},description:""},ariaDescribedby:{required:!1,tsType:{name:"ReactComponentProps['aria-describedby']",raw:"React.ComponentProps<'input'>['aria-describedby']"},description:""},onBlur:{required:!1,tsType:{name:"signature",type:"function",raw:"(evt: React.FocusEvent) => void",signature:{arguments:[{type:{name:"ReactFocusEvent",raw:"React.FocusEvent"},name:"evt"}],return:{name:"void"}}},description:"Blur used for e.g. validating the date. Triggered on blur of the last field, i.e. year."},calendarAbove:{required:!1,tsType:{name:"boolean"},description:""},id:{required:!1,tsType:{name:"string"},description:""},maxDate:{required:!1,tsType:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}]},description:""},minDate:{required:!1,tsType:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}]},description:""},onChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(date: string) => void",signature:{arguments:[{type:{name:"string"},name:"date"}],return:{name:"void"}}},description:""},fullWidth:{required:!1,tsType:{name:"boolean"},description:""},fieldMessage:{required:!1,tsType:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}]},description:""},labelId:{required:!0,tsType:{name:"string"},description:"Id of the label describing the datepicker. Required for UU-compatibility"},value:{required:!0,tsType:{name:"string"},description:""},locale:{required:!1,tsType:{name:"union",raw:"'nb' | 'nn' | 'en'",elements:[{name:"literal",value:"'nb'"},{name:"literal",value:"'nn'"},{name:"literal",value:"'en'"}]},description:"",defaultValue:{value:"'nb'",computed:!1}}}};const Qe={title:"Komponenter/Datepicker/Datepicker",component:j},u={args:{locale:"nb",maxDate:"31.12.2025",minDate:"01.01.2024",labelId:"datepicker-label"},render:function({value:s,onChange:T,...i}){var c;const[m,g]=l.useState("01.12.2024");return n.createElement(H,{label:"Dato",labelId:(c=u==null?void 0:u.args)==null?void 0:c.labelId},D=>n.createElement(j,{value:s??m,onChange:g,...D,...i}))}},N={args:{...u.args},render:function({value:s,onChange:T,...i}){var c;const[m,g]=l.useState("01.12.2024");return n.createElement(H,{label:"Dato","aria-invalid":!0,fieldMessage:"Ugyldig dato",labelId:(c=u==null?void 0:u.args)==null?void 0:c.labelId},D=>n.createElement(j,{value:s??m,onChange:g,...D,...i}))}},O={args:{...u.args,fullWidth:!0},render:function({value:s,onChange:T,...i}){var c;const[m,g]=l.useState("01.12.2024");return n.createElement(H,{label:"Dato",labelId:(c=u==null?void 0:u.args)==null?void 0:c.labelId},n.createElement(j,{value:s??m,onChange:g,...i}))}},k={args:{...u.args,calendarAbove:!0},render:function({value:s,onChange:T,...i}){var c;const[m,g]=l.useState("01.12.2024");return n.createElement(H,{label:"Dato",labelId:(c=u==null?void 0:u.args)==null?void 0:c.labelId},n.createElement(j,{value:s??m,onChange:g,...i}))}};var ie,se,le;u.parameters={...u.parameters,docs:{...(ie=u.parameters)==null?void 0:ie.docs,source:{originalSource:`{
  args: {
    locale: 'nb',
    maxDate: '31.12.2025',
    minDate: '01.01.2024',
    labelId: 'datepicker-label'
  },
  render: function Render({
    value,
    onChange,
    ...args
  }: DatepickerProps) {
    const [date, setDate] = useState('01.12.2024');
    return <InputGroup label="Dato" labelId={Standard?.args?.labelId}>
                {inputProps => <Datepicker value={value ?? date} onChange={setDate} {...inputProps} {...args} />}
            </InputGroup>;
  }
}`,...(le=(se=u.parameters)==null?void 0:se.docs)==null?void 0:le.source}}};var oe,de,ue;N.parameters={...N.parameters,docs:{...(oe=N.parameters)==null?void 0:oe.docs,source:{originalSource:`{
  args: {
    ...Standard.args
  },
  render: function Render({
    value,
    onChange,
    ...args
  }: DatepickerProps) {
    const [date, setDate] = useState('01.12.2024');
    return <InputGroup label="Dato" aria-invalid={true} fieldMessage={'Ugyldig dato'} labelId={Standard?.args?.labelId}>
                {inputProps => <Datepicker value={value ?? date} onChange={setDate} {...inputProps} {...args} />}
            </InputGroup>;
  }
}`,...(ue=(de=N.parameters)==null?void 0:de.docs)==null?void 0:ue.source}}};var ce,pe,Me;O.parameters={...O.parameters,docs:{...(ce=O.parameters)==null?void 0:ce.docs,source:{originalSource:`{
  args: {
    ...Standard.args,
    fullWidth: true
  },
  render: function Render({
    value,
    onChange,
    ...args
  }: DatepickerProps) {
    const [date, setDate] = useState('01.12.2024');
    return <InputGroup label="Dato" labelId={Standard?.args?.labelId}>
                <Datepicker value={value ?? date} onChange={setDate} {...args} />
            </InputGroup>;
  }
}`,...(Me=(pe=O.parameters)==null?void 0:pe.docs)==null?void 0:Me.source}}};var me,ge,De;k.parameters={...k.parameters,docs:{...(me=k.parameters)==null?void 0:me.docs,source:{originalSource:`{
  args: {
    ...Standard.args,
    calendarAbove: true
  },
  render: function Render({
    value,
    onChange,
    ...args
  }: DatepickerProps) {
    const [date, setDate] = useState('01.12.2024');
    return <InputGroup label="Dato" labelId={Standard?.args?.labelId}>
                <Datepicker value={value ?? date} onChange={setDate} {...args} />
            </InputGroup>;
  }
}`,...(De=(ge=k.parameters)==null?void 0:ge.docs)==null?void 0:De.source}}};const qe=["Standard","FieldMessageString","FullWidth","CalendarAbove"],We=Object.freeze(Object.defineProperty({__proto__:null,CalendarAbove:k,FieldMessageString:N,FullWidth:O,Standard:u,__namedExportsOrder:qe,default:Qe},Symbol.toStringTag,{value:"Module"}));export{We as D,u as S};
