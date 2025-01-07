import{r as l,R as o}from"./index-ne9I_3bB.js";import{v as X,g as h,i as A,C as he,a as ke}from"./Calendar-2AokGwns.js";import{c as P}from"./index-B6-3w37c.js";import{d as Re}from"./index-DD9qLvhm.js";import{I as xe}from"./Icon-D2PqKf0B.js";import{E as Se,I as F}from"./InputGroup-CX8SHRAV.js";const S=s=>{const r=s.filter(p=>typeof p=="number");return r.map((p,n)=>(p??1)*Math.pow(10,r.length-n-1)).reduce((p,n)=>p+n,0)},Te=l.createContext({day:null,month:null,year:null,setDay:()=>null,setMonth:()=>null,setYear:()=>null,locale:"nb",calendarActiveDate:"",setCalendarActiveDate:()=>null}),Ye=12,Qe=31,be=({children:s,value:r="",locale:p})=>{const n=X(r)?h(r):"",[M,d]=l.useState(n?n.date:null),[m,u]=l.useState(n?n.month+1:null),[I,L]=l.useState(n?n.year:null),[w,f]=l.useState((n==null?void 0:n.toString())??"");return o.createElement(Te.Provider,{value:{day:M,month:m,year:I,setDay:(T,a=void 0)=>{const y=T.slice(-2),[g,b]=y,t=S(y);t>Qe?a==null||a():g>3?(d(t),a==null||a()):(d(t),b!==void 0&&(a==null||a()))},setMonth:(T,a=void 0)=>{const y=T.slice(-2),[g,b]=y,t=S(y);t>Ye?a==null||a():g>1?(u(t),a==null||a()):(u(t),b!==void 0&&(a==null||a()))},setYear:T=>{L(S(T.slice(-4)))},calendarActiveDate:w,setCalendarActiveDate:T=>{f(T)},locale:p}},s)};be.__docgenInfo={description:"",methods:[],displayName:"DatepickerProvider",props:{locale:{required:!0,tsType:{name:"union",raw:"'nb' | 'nn' | 'en'",elements:[{name:"literal",value:"'nb'"},{name:"literal",value:"'nn'"},{name:"literal",value:"'en'"}]},description:""},value:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};const U=o.forwardRef(({className:s,onSpinButtonChange:r,maxLength:p,min:n,max:M,value:d,nextSpinButton:m,prevSpinButton:u,children:I,...L},w)=>{const f=l.useRef([]),T=a=>{var y,g,b;if(a.stopPropagation(),/\d/.test(a.key))f.current=f.current.length===p?f.current=[parseInt(a.key)]:f.current.concat(parseInt(a.key)),r(f.current);else if(a.key==="Backspace"||a.key==="Delete"){if(f.current=[],d===0){(y=u==null?void 0:u.current)==null||y.focus();return}const t=d==null?void 0:d.toString().slice(0,-1);r(t?[parseInt(t)]:[])}else if(a.key==="ArrowUp"){a.preventDefault();let t=(d??0)+1;t&&t!==null&&t>M&&(t=n),r([t],!1)}else if(a.key==="ArrowDown"){a.preventDefault();let t=(d??0)-1;t<n&&(t=M),r([t],!1)}else a.key==="ArrowLeft"?(a.preventDefault(),(g=u==null?void 0:u.current)==null||g.focus()):a.key==="ArrowRight"&&(a.preventDefault(),(b=m==null?void 0:m.current)==null||b.focus())};return o.createElement("span",{role:"spinbutton",inputMode:"numeric",className:P(s,"ffe-dateinput__field"),tabIndex:0,onFocus:()=>{f.current=[]},"aria-valuemin":n,"aria-valuemax":M,"aria-valuenow":d,ref:w,onKeyDown:T,...L},I)});U.__docgenInfo={description:"",methods:[],displayName:"SpinButton",props:{className:{required:!1,tsType:{name:"string"},description:""},onSpinButtonChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(value: number[], allowFocusNext?: boolean) => void",signature:{arguments:[{type:{name:"Array",elements:[{name:"number"}],raw:"number[]"},name:"value"},{type:{name:"boolean"},name:"allowFocusNext"}],return:{name:"void"}}},description:""},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},maxLength:{required:!0,tsType:{name:"number"},description:""},min:{required:!0,tsType:{name:"number"},description:""},max:{required:!0,tsType:{name:"number"},description:""},value:{required:!1,tsType:{name:"number"},description:""},nextSpinButton:{required:!1,tsType:{name:"ReactRefObject",raw:"React.RefObject<HTMLSpanElement>",elements:[{name:"HTMLSpanElement"}]},description:""},prevSpinButton:{required:!1,tsType:{name:"ReactRefObject",raw:"React.RefObject<HTMLSpanElement>",elements:[{name:"HTMLSpanElement"}]},description:""}}};const _=s=>s<10?`0${s}`:s,Le=o.forwardRef(({value:s,locale:r,onClick:p},n)=>{const M=X(s)?`${A[r].CHANGE_DATE}, ${A[r].CHOSEN_DATE} ${s}`:A[r].CHOOSE_DATE;return o.createElement("button",{"data-testid":"datepicker-open",ref:n,onClick:p,className:"ffe-datepicker__button","aria-label":M,type:"button"},o.createElement(xe,{ariaLabel:A[r].CALENDAR_LABEL,fileUrl:"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgLTk2MCA5NjAgOTYwIiB3aWR0aD0iMjQiPjxwYXRoIGQ9Ik0yMTIuMzA5LTEwMC4wMDFxLTMwLjMwOCAwLTUxLjMwOC0yMXQtMjEtNTEuMzA4di01MzUuMzgycTAtMzAuMzA4IDIxLTUxLjMwOHQ1MS4zMDgtMjFoNTUuMzg1di01My44NDdxMC0xMy4xNTMgOC44MDgtMjEuOTYxIDguODA3LTguODA3IDIxLjk2MS04LjgwNyAxMy4xNTMgMCAyMS45NjEgOC44MDcgOC44MDcgOC44MDggOC44MDcgMjEuOTYxdjUzLjg0N2gzMDMuMDc2di01NC42MTZxMC0xMi43NjkgOC42MTUtMjEuMzg0dDIxLjM4NC04LjYxNXExMi43NjkgMCAyMS4zODQgOC42MTUgOC42MTYgOC42MTUgOC42MTYgMjEuMzg0djU0LjYxNmg1NS4zODVxMzAuMzA4IDAgNTEuMzA4IDIxdDIxIDUxLjMwOHY1MzUuMzgycTAgMzAuMzA4LTIxIDUxLjMwOHQtNTEuMzA4IDIxSDIxMi4zMDlabTAtNTkuOTk5aDUzNS4zODJxNC42MTYgMCA4LjQ2My0zLjg0NiAzLjg0Ni0zLjg0NyAzLjg0Ni04LjQ2M3YtMzc1LjM4MkgyMDB2Mzc1LjM4MnEwIDQuNjE2IDMuODQ2IDguNDYzIDMuODQ3IDMuODQ2IDguNDYzIDMuODQ2Wk0yMDAtNjA3LjY5aDU2MHYtMTAwLjAwMXEwLTQuNjE2LTMuODQ2LTguNDYzLTMuODQ3LTMuODQ2LTguNDYzLTMuODQ2SDIxMi4zMDlxLTQuNjE2IDAtOC40NjMgMy44NDYtMy44NDYgMy44NDctMy44NDYgOC40NjN2MTAwLjAwMVptMCAwVi03MjB2MTEyLjMxWm0yODAgMjEwLjc2N3EtMTQuNjkyIDAtMjUuMDM4LTEwLjM0NnQtMTAuMzQ2LTI1LjAzOHEwLTE0LjY5MiAxMC4zNDYtMjUuMDM4VDQ4MC00NjcuNjkxcTE0LjY5MiAwIDI1LjAzOCAxMC4zNDZ0MTAuMzQ2IDI1LjAzOHEwIDE0LjY5Mi0xMC4zNDYgMjUuMDM4VDQ4MC0zOTYuOTIzWm0tMTYwIDBxLTE0LjY5MiAwLTI1LjAzOC0xMC4zNDZ0LTEwLjM0Ni0yNS4wMzhxMC0xNC42OTIgMTAuMzQ2LTI1LjAzOFQzMjAtNDY3LjY5MXExNC42OTIgMCAyNS4wMzggMTAuMzQ2dDEwLjM0NiAyNS4wMzhxMCAxNC42OTItMTAuMzQ2IDI1LjAzOFQzMjAtMzk2LjkyM1ptMzIwIDBxLTE0LjY5MiAwLTI1LjAzOC0xMC4zNDZ0LTEwLjM0Ni0yNS4wMzhxMC0xNC42OTIgMTAuMzQ2LTI1LjAzOFQ2NDAtNDY3LjY5MXExNC42OTIgMCAyNS4wMzggMTAuMzQ2dDEwLjM0NiAyNS4wMzhxMCAxNC42OTItMTAuMzQ2IDI1LjAzOFQ2NDAtMzk2LjkyM1pNNDgwLTI0MHEtMTQuNjkyIDAtMjUuMDM4LTEwLjM0NnQtMTAuMzQ2LTI1LjAzOHEwLTE0LjY5MiAxMC4zNDYtMjUuMDM4IDEwLjM0Ni0xMC4zNDcgMjUuMDM4LTEwLjM0N3QyNS4wMzggMTAuMzQ3cTEwLjM0NiAxMC4zNDYgMTAuMzQ2IDI1LjAzOHQtMTAuMzQ2IDI1LjAzOFE0OTQuNjkyLTI0MCA0ODAtMjQwWm0tMTYwIDBxLTE0LjY5MiAwLTI1LjAzOC0xMC4zNDZ0LTEwLjM0Ni0yNS4wMzhxMC0xNC42OTIgMTAuMzQ2LTI1LjAzOCAxMC4zNDYtMTAuMzQ3IDI1LjAzOC0xMC4zNDd0MjUuMDM4IDEwLjM0N3ExMC4zNDYgMTAuMzQ2IDEwLjM0NiAyNS4wMzh0LTEwLjM0NiAyNS4wMzhRMzM0LjY5Mi0yNDAgMzIwLTI0MFptMzIwIDBxLTE0LjY5MiAwLTI1LjAzOC0xMC4zNDZ0LTEwLjM0Ni0yNS4wMzhxMC0xNC42OTIgMTAuMzQ2LTI1LjAzOCAxMC4zNDYtMTAuMzQ3IDI1LjAzOC0xMC4zNDd0MjUuMDM4IDEwLjM0N3ExMC4zNDYgMTAuMzQ2IDEwLjM0NiAyNS4wMzh0LTEwLjM0NiAyNS4wMzhRNjU0LjY5Mi0yNDAgNjQwLTI0MFoiLz48L3N2Zz4=",size:"md",className:"ffe-datepicker__icon"}))});Le.__docgenInfo={description:"",methods:[],displayName:"Button",props:{value:{required:!0,tsType:{name:"string"},description:""},locale:{required:!0,tsType:{name:"union",raw:"'nb' | 'nn' | 'en'",elements:[{name:"literal",value:"'nb'"},{name:"literal",value:"'nn'"},{name:"literal",value:"'en'"}]},description:""},onClick:{required:!0,tsType:{name:"ReactMouseEventHandler",raw:"React.MouseEventHandler<HTMLButtonElement>",elements:[{name:"HTMLButtonElement"}]},description:""}}};const qe=s=>typeof s=="number"&&s>=1&&s<=12,Ie=({ariaInvalid:s,"aria-invalid":r,ariaDescribedby:p,"aria-describedby":n,onBlur:M,calendarAbove:d,id:m,maxDate:u,minDate:I,onChange:L,fullWidth:w,fieldMessage:f,labelId:T})=>{const{day:a,setDay:y,year:g,setYear:b,month:t,setMonth:z,locale:C,calendarActiveDate:K,setCalendarActiveDate:V}=l.useContext(Te),[N,$]=l.useState(!1),[J,Ae]=l.useState(I),[ee,Ce]=l.useState(u),[ae,te]=l.useState(""),G=l.useId(),Y=l.useRef(null),v=l.useRef(null),j=l.useRef(null),O=l.useRef(null),je=f?`${G}-fieldmessage`:void 0,Q=l.useCallback(Re(e=>{e!==ae&&X(e)&&(V(e),te(e))},250),[ae]),Ee=!!f;l.useEffect(()=>()=>{Q.cancel()},[Q]);const q=()=>{const e=`${a}.${t}.${g}`;h(e,i=>{const D=u?h(u):null;D!=null&&D.isBefore(i)&&ke(e)&&i.adjust({period:"Y",offset:-100});const Z=i.format();Z!==e&&(L(Z),y([i.date]),z([i.month+1]),b([i.year])),te(Z)})};l.useEffect(()=>{(I!==J||u!==ee)&&(Ae(I),Ce(u),q()),Q(`${a}.${t}.${g}`)},[I,u,a,t,g,Q]);const ne=()=>{var e;$(!1),(e=Y.current)==null||e.focus(),q()},re=e=>{e.key==="Escape"&&ne()},ie=e=>{N&&e.__datepickerID!==G&&ne()},we=()=>{window.addEventListener("click",ie),window.addEventListener("keyup",re)},se=()=>{window.removeEventListener("click",ie),window.removeEventListener("keyup",re)};l.useEffect(()=>(N?we():se(),()=>{se()}),[N]);const ze=()=>{q(),$(!N)},Ne=e=>{const i=e.nativeEvent;i.__datepickerID=G},ve=e=>{var i;e.target!==O.current&&e.target!==Y.current&&e.target!==v.current&&e.target!==j.current&&((i=v.current)==null||i.focus())},Oe=e=>{var D;const i=h(e);i&&(y([i.date]),z([i.month+1]),b([i.year]),L(e),$(!1),V(e),(D=Y.current)==null||D.focus())},H=()=>{const e=r==="true"||s;return e==="true"||e===!0?"true":void 0},W=()=>n??p,B=e=>{e.preventDefault();const i=(e.clipboardData||window.Clipboard).getData("text"),D=h(i);D&&(y([D.date]),z([D.month+1]),b([D.year]),L(`${a}.${t}.${g}`))};return o.createElement("div",{className:P("ffe-datepicker",{"ffe-datepicker--full-width":w,"ffe-input-group--message":Ee}),"data-testid":"date-picker",onClick:e=>{Ne(e),ve(e)},role:"group",id:m},o.createElement("div",{className:P("ffe-input-field","ffe-dateinput",{"ffe-input-field--invalid":H()}),onBlur:e=>{const i=e.relatedTarget;i!==O.current&&i!==v.current&&i!==j.current&&(M==null||M(e),q())}},o.createElement(U,{ref:v,value:a??void 0,min:1,max:31,onPaste:B,onSpinButtonChange:(e,i=!0)=>(L(`${_(S(e))}.${t}.${g}`),i?y(e,()=>{var D;return(D=j.current)==null?void 0:D.focus({preventScroll:!0})}):y(e)),nextSpinButton:j,maxLength:2,"aria-invalid":H(),"aria-valuenow":typeof a=="number"?a:void 0,"aria-valuetext":`${a}`,"aria-label":A[C].DAY,"aria-describedby":W(),"aria-labelledby":T},a?_(a):"dd"),".",o.createElement(U,{ref:j,value:t??void 0,min:1,max:12,onPaste:B,onSpinButtonChange:(e,i=!0)=>(L(`${a}.${_(S(e))}.${g}`),i?z(e,()=>{var D;return(D=O.current)==null?void 0:D.focus({preventScroll:!0})}):z(e)),nextSpinButton:O,prevSpinButton:v,maxLength:2,"aria-invalid":H(),"aria-valuenow":typeof t=="number"?t:void 0,"aria-valuetext":qe(t)?`${t} - ${A[C][`MONTH_${t}`]}`:void 0,"aria-label":A[C].MONTH,"aria-describedby":W(),"aria-labelledby":T},t?_(t):"mm"),".",o.createElement(U,{ref:O,className:"ffe-dateinput__field-year",value:g??void 0,min:1,max:9999,onPaste:B,onSpinButtonChange:e=>{L(`${a}.${t}.${e}`),b(e)},prevSpinButton:j,maxLength:4,"aria-invalid":H(),"aria-valuetext":`${g}`,"aria-valuenow":typeof g=="number"?g:void 0,"aria-label":A[C].YEAR,"aria-describedby":W(),"aria-labelledby":T},g||"yyyy")),o.createElement(Le,{onClick:ze,locale:C,value:K||"",ref:Y}),N&&o.createElement(he,{calendarClassName:P("ffe-calendar ffe-calendar--datepicker",{"ffe-calendar--datepicker--above":d}),locale:C,maxDate:ee,minDate:J,onDatePicked:Oe,selectedDate:K,focusOnMount:!0}),!!f&&o.createElement(Se,{as:"p",id:je},f))};Ie.__docgenInfo={description:"",methods:[],displayName:"DatepickerComp",props:{"aria-invalid":{required:!1,tsType:{name:"ReactComponentProps['aria-invalid']",raw:"React.ComponentProps<'input'>['aria-invalid']"},description:""},ariaInvalid:{required:!1,tsType:{name:"ReactComponentProps['aria-invalid']",raw:"React.ComponentProps<'input'>['aria-invalid']"},description:""},"aria-describedby":{required:!1,tsType:{name:"ReactComponentProps['aria-describedby']",raw:"React.ComponentProps<'input'>['aria-describedby']"},description:""},ariaDescribedby:{required:!1,tsType:{name:"ReactComponentProps['aria-describedby']",raw:"React.ComponentProps<'input'>['aria-describedby']"},description:""},onBlur:{required:!1,tsType:{name:"signature",type:"function",raw:"(evt: React.FocusEvent<HTMLElement>) => void",signature:{arguments:[{type:{name:"ReactFocusEvent",raw:"React.FocusEvent<HTMLElement>",elements:[{name:"HTMLElement"}]},name:"evt"}],return:{name:"void"}}},description:"Triggered when focus leaves one of the fields (dd, mm, yyyy), and the next focused element is not one of these fields."},calendarAbove:{required:!1,tsType:{name:"boolean"},description:""},id:{required:!1,tsType:{name:"string"},description:""},maxDate:{required:!1,tsType:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}]},description:""},minDate:{required:!1,tsType:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}]},description:""},onChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(date: string) => void",signature:{arguments:[{type:{name:"string"},name:"date"}],return:{name:"void"}}},description:""},fullWidth:{required:!1,tsType:{name:"boolean"},description:""},fieldMessage:{required:!1,tsType:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}]},description:""},labelId:{required:!0,tsType:{name:"string"},description:"Id of the label describing the datepicker. Required for UU-compatibility"}}};const E=({locale:s="nb",value:r,...p})=>o.createElement(be,{locale:s,value:r},o.createElement(Ie,{...p}));E.__docgenInfo={description:"",methods:[],displayName:"Datepicker",props:{"aria-invalid":{required:!1,tsType:{name:"ReactComponentProps['aria-invalid']",raw:"React.ComponentProps<'input'>['aria-invalid']"},description:""},ariaInvalid:{required:!1,tsType:{name:"ReactComponentProps['aria-invalid']",raw:"React.ComponentProps<'input'>['aria-invalid']"},description:""},"aria-describedby":{required:!1,tsType:{name:"ReactComponentProps['aria-describedby']",raw:"React.ComponentProps<'input'>['aria-describedby']"},description:""},ariaDescribedby:{required:!1,tsType:{name:"ReactComponentProps['aria-describedby']",raw:"React.ComponentProps<'input'>['aria-describedby']"},description:""},onBlur:{required:!1,tsType:{name:"signature",type:"function",raw:"(evt: React.FocusEvent<HTMLElement>) => void",signature:{arguments:[{type:{name:"ReactFocusEvent",raw:"React.FocusEvent<HTMLElement>",elements:[{name:"HTMLElement"}]},name:"evt"}],return:{name:"void"}}},description:"Triggered when focus leaves one of the fields (dd, mm, yyyy), and the next focused element is not one of these fields."},calendarAbove:{required:!1,tsType:{name:"boolean"},description:""},id:{required:!1,tsType:{name:"string"},description:""},maxDate:{required:!1,tsType:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}]},description:""},minDate:{required:!1,tsType:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}]},description:""},onChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(date: string) => void",signature:{arguments:[{type:{name:"string"},name:"date"}],return:{name:"void"}}},description:""},fullWidth:{required:!1,tsType:{name:"boolean"},description:""},fieldMessage:{required:!1,tsType:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}]},description:""},labelId:{required:!0,tsType:{name:"string"},description:"Id of the label describing the datepicker. Required for UU-compatibility"},value:{required:!0,tsType:{name:"string"},description:""},locale:{required:!1,tsType:{name:"union",raw:"'nb' | 'nn' | 'en'",elements:[{name:"literal",value:"'nb'"},{name:"literal",value:"'nn'"},{name:"literal",value:"'en'"}]},description:"",defaultValue:{value:"'nb'",computed:!1}}}};const He={title:"Komponenter/Datepicker/Datepicker",component:E},c={args:{locale:"nb",maxDate:"31.12.2025",minDate:"01.01.2024",labelId:"datepicker-label"},render:function({value:r,onChange:p,...n}){var m;const[M,d]=l.useState("01.12.2024");return o.createElement(F,{label:"Dato",labelId:(m=c==null?void 0:c.args)==null?void 0:m.labelId},u=>o.createElement(E,{value:r??M,onChange:d,...u,...n}))}},k={args:{...c.args},render:function({value:r,onChange:p,...n}){var m;const[M,d]=l.useState("01.12.2024");return o.createElement(F,{label:"Dato","aria-invalid":!0,fieldMessage:"Ugyldig dato",labelId:(m=c==null?void 0:c.args)==null?void 0:m.labelId},u=>o.createElement(E,{value:r??M,onChange:d,...u,...n}))}},R={args:{...c.args,fullWidth:!0},render:function({value:r,onChange:p,...n}){var m;const[M,d]=l.useState("01.12.2024");return o.createElement(F,{label:"Dato",labelId:(m=c==null?void 0:c.args)==null?void 0:m.labelId},o.createElement(E,{value:r??M,onChange:d,...n}))}},x={args:{...c.args,calendarAbove:!0},render:function({value:r,onChange:p,...n}){var m;const[M,d]=l.useState("01.12.2024");return o.createElement(F,{label:"Dato",labelId:(m=c==null?void 0:c.args)==null?void 0:m.labelId},o.createElement(E,{value:r??M,onChange:d,...n}))}};var le,oe,de;c.parameters={...c.parameters,docs:{...(le=c.parameters)==null?void 0:le.docs,source:{originalSource:`{
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
}`,...(de=(oe=c.parameters)==null?void 0:oe.docs)==null?void 0:de.source}}};var ue,ce,pe;k.parameters={...k.parameters,docs:{...(ue=k.parameters)==null?void 0:ue.docs,source:{originalSource:`{
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
}`,...(pe=(ce=k.parameters)==null?void 0:ce.docs)==null?void 0:pe.source}}};var Me,me,ge;R.parameters={...R.parameters,docs:{...(Me=R.parameters)==null?void 0:Me.docs,source:{originalSource:`{
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
}`,...(ge=(me=R.parameters)==null?void 0:me.docs)==null?void 0:ge.source}}};var De,fe,ye;x.parameters={...x.parameters,docs:{...(De=x.parameters)==null?void 0:De.docs,source:{originalSource:`{
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
}`,...(ye=(fe=x.parameters)==null?void 0:fe.docs)==null?void 0:ye.source}}};const _e=["Standard","FieldMessageString","FullWidth","CalendarAbove"],Ze=Object.freeze(Object.defineProperty({__proto__:null,CalendarAbove:x,FieldMessageString:k,FullWidth:R,Standard:c,__namedExportsOrder:_e,default:He},Symbol.toStringTag,{value:"Module"}));export{Ze as D,c as S};
