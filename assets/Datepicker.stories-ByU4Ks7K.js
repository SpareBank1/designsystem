import{r as n,R as t}from"./index-DQDNmYQF.js";import{v as ne,g as Q,i as L,a as ta,p as Me,C as ra,b as na}from"./Calendar-GdpSWRup.js";import{c as V}from"./index-D2FocPV0.js";import{d as sa}from"./index-D9tCDUwu.js";import{I as ia}from"./Icon-D_nm5xPy.js";import{E as la,I as E}from"./InputGroup-CsZXON4u.js";import{S as oa}from"./SecondaryButton-Boh02aDD.js";import{I as da}from"./Input-D-am7U86.js";const re=g=>{const r=g.filter(p=>typeof p=="number");return r.map((p,a)=>(p??1)*Math.pow(10,r.length-a-1)).reduce((p,a)=>p+a,0)},Ue=n.createContext({day:null,month:null,year:null,setDay:()=>null,setMonth:()=>null,setYear:()=>null,locale:"nb",calendarActiveDate:"",setCalendarActiveDate:()=>null,setLastChangedValue:()=>null}),ua=12,ca=31,Fe=({children:g,value:r="",locale:p})=>{const a=ne(r)?Q(r):"",[c,i]=n.useState(a?a.date:null),[d,l]=n.useState(a?a.month+1:null),[C,M]=n.useState(a?a.year:null),[w,D]=n.useState((a==null?void 0:a.toString())??""),[A,y]=n.useState(r??"");return n.useEffect(()=>{r!==A&&(i(a?a.date:null),l(a?a.month+1:null),M(a?a.year:null),D((a==null?void 0:a.toString())??""))},[r]),t.createElement(Ue.Provider,{value:{day:c,month:d,year:C,setDay:(T,o=void 0)=>{const f=T.slice(-2),[m,k]=f,b=re(f);b>ca?o==null||o():m>3?(i(b),o==null||o()):(i(b),k!==void 0&&(o==null||o()))},setMonth:(T,o=void 0)=>{const f=T.slice(-2),[m,k]=f,b=re(f);b>ua?o==null||o():m>1?(l(b),o==null||o()):(l(b),k!==void 0&&(o==null||o()))},setYear:T=>{M(re(T.slice(-4)))},calendarActiveDate:w,setCalendarActiveDate:T=>{D(T)},locale:p,setLastChangedValue:T=>{y(T)}}},g)};Fe.__docgenInfo={description:"",methods:[],displayName:"DatepickerProvider",props:{locale:{required:!0,tsType:{name:"union",raw:"'nb' | 'nn' | 'en'",elements:[{name:"literal",value:"'nb'"},{name:"literal",value:"'nn'"},{name:"literal",value:"'en'"}]},description:""},value:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};const Z=t.forwardRef(({className:g,onSpinButtonChange:r,maxLength:p,min:a,max:c,value:i,nextSpinButton:d,prevSpinButton:l,children:C,...M},w)=>{const D=n.useRef([]),A=y=>{var T,o,f;if(y.stopPropagation(),/\d/.test(y.key))D.current=D.current.length===p?D.current=[parseInt(y.key)]:D.current.concat(parseInt(y.key)),r(D.current);else if(y.key==="Backspace"||y.key==="Delete"){if(D.current=[],i===0){(T=l==null?void 0:l.current)==null||T.focus();return}const m=i==null?void 0:i.toString().slice(0,-1);D.current=m?m.split("").map(Number):[],r(D.current)}else if(y.key==="ArrowUp"){y.preventDefault();let m=(i??0)+1;m&&m!==null&&m>c&&(m=a),r([m],!1)}else if(y.key==="ArrowDown"){y.preventDefault();let m=(i??0)-1;m<a&&(m=c),r([m],!1)}else y.key==="ArrowLeft"?(y.preventDefault(),(o=l==null?void 0:l.current)==null||o.focus()):y.key==="ArrowRight"&&(y.preventDefault(),(f=d==null?void 0:d.current)==null||f.focus())};return t.createElement("span",{role:"spinbutton",inputMode:"numeric",className:V(g,"ffe-dateinput__field"),tabIndex:0,onFocus:()=>{D.current=[]},"aria-valuemin":a,"aria-valuemax":c,"aria-valuenow":i,ref:w,onKeyDown:A,...M},C)});Z.__docgenInfo={description:"",methods:[],displayName:"SpinButton",props:{className:{required:!1,tsType:{name:"string"},description:""},onSpinButtonChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(value: number[], allowFocusNext?: boolean) => void",signature:{arguments:[{type:{name:"Array",elements:[{name:"number"}],raw:"number[]"},name:"value"},{type:{name:"boolean"},name:"allowFocusNext"}],return:{name:"void"}}},description:""},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},maxLength:{required:!0,tsType:{name:"number"},description:""},min:{required:!0,tsType:{name:"number"},description:""},max:{required:!0,tsType:{name:"number"},description:""},value:{required:!1,tsType:{name:"number"},description:""},nextSpinButton:{required:!1,tsType:{name:"ReactRefObject",raw:"React.RefObject<HTMLSpanElement>",elements:[{name:"HTMLSpanElement"}]},description:""},prevSpinButton:{required:!1,tsType:{name:"ReactRefObject",raw:"React.RefObject<HTMLSpanElement>",elements:[{name:"HTMLSpanElement"}]},description:""}}};const He=t.forwardRef(({value:g,locale:r,onClick:p},a)=>{const c=ne(g)?`${L[r].CHANGE_DATE}, ${L[r].CHOSEN_DATE} ${g}`:L[r].CHOOSE_DATE;return t.createElement("button",{"data-testid":"datepicker-open",ref:a,onClick:p,className:"ffe-datepicker__button","aria-label":c,type:"button"},t.createElement(ia,{ariaLabel:L[r].CALENDAR_LABEL,fileUrl:"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgLTk2MCA5NjAgOTYwIiB3aWR0aD0iMjQiPjxwYXRoIGQ9Ik0yMTIuMzA5LTEwMC4wMDFxLTMwLjMwOCAwLTUxLjMwOC0yMXQtMjEtNTEuMzA4di01MzUuMzgycTAtMzAuMzA4IDIxLTUxLjMwOHQ1MS4zMDgtMjFoNTUuMzg1di01My44NDdxMC0xMy4xNTMgOC44MDgtMjEuOTYxIDguODA3LTguODA3IDIxLjk2MS04LjgwNyAxMy4xNTMgMCAyMS45NjEgOC44MDcgOC44MDcgOC44MDggOC44MDcgMjEuOTYxdjUzLjg0N2gzMDMuMDc2di01NC42MTZxMC0xMi43NjkgOC42MTUtMjEuMzg0dDIxLjM4NC04LjYxNXExMi43NjkgMCAyMS4zODQgOC42MTUgOC42MTYgOC42MTUgOC42MTYgMjEuMzg0djU0LjYxNmg1NS4zODVxMzAuMzA4IDAgNTEuMzA4IDIxdDIxIDUxLjMwOHY1MzUuMzgycTAgMzAuMzA4LTIxIDUxLjMwOHQtNTEuMzA4IDIxSDIxMi4zMDlabTAtNTkuOTk5aDUzNS4zODJxNC42MTYgMCA4LjQ2My0zLjg0NiAzLjg0Ni0zLjg0NyAzLjg0Ni04LjQ2M3YtMzc1LjM4MkgyMDB2Mzc1LjM4MnEwIDQuNjE2IDMuODQ2IDguNDYzIDMuODQ3IDMuODQ2IDguNDYzIDMuODQ2Wk0yMDAtNjA3LjY5aDU2MHYtMTAwLjAwMXEwLTQuNjE2LTMuODQ2LTguNDYzLTMuODQ3LTMuODQ2LTguNDYzLTMuODQ2SDIxMi4zMDlxLTQuNjE2IDAtOC40NjMgMy44NDYtMy44NDYgMy44NDctMy44NDYgOC40NjN2MTAwLjAwMVptMCAwVi03MjB2MTEyLjMxWm0yODAgMjEwLjc2N3EtMTQuNjkyIDAtMjUuMDM4LTEwLjM0NnQtMTAuMzQ2LTI1LjAzOHEwLTE0LjY5MiAxMC4zNDYtMjUuMDM4VDQ4MC00NjcuNjkxcTE0LjY5MiAwIDI1LjAzOCAxMC4zNDZ0MTAuMzQ2IDI1LjAzOHEwIDE0LjY5Mi0xMC4zNDYgMjUuMDM4VDQ4MC0zOTYuOTIzWm0tMTYwIDBxLTE0LjY5MiAwLTI1LjAzOC0xMC4zNDZ0LTEwLjM0Ni0yNS4wMzhxMC0xNC42OTIgMTAuMzQ2LTI1LjAzOFQzMjAtNDY3LjY5MXExNC42OTIgMCAyNS4wMzggMTAuMzQ2dDEwLjM0NiAyNS4wMzhxMCAxNC42OTItMTAuMzQ2IDI1LjAzOFQzMjAtMzk2LjkyM1ptMzIwIDBxLTE0LjY5MiAwLTI1LjAzOC0xMC4zNDZ0LTEwLjM0Ni0yNS4wMzhxMC0xNC42OTIgMTAuMzQ2LTI1LjAzOFQ2NDAtNDY3LjY5MXExNC42OTIgMCAyNS4wMzggMTAuMzQ2dDEwLjM0NiAyNS4wMzhxMCAxNC42OTItMTAuMzQ2IDI1LjAzOFQ2NDAtMzk2LjkyM1pNNDgwLTI0MHEtMTQuNjkyIDAtMjUuMDM4LTEwLjM0NnQtMTAuMzQ2LTI1LjAzOHEwLTE0LjY5MiAxMC4zNDYtMjUuMDM4IDEwLjM0Ni0xMC4zNDcgMjUuMDM4LTEwLjM0N3QyNS4wMzggMTAuMzQ3cTEwLjM0NiAxMC4zNDYgMTAuMzQ2IDI1LjAzOHQtMTAuMzQ2IDI1LjAzOFE0OTQuNjkyLTI0MCA0ODAtMjQwWm0tMTYwIDBxLTE0LjY5MiAwLTI1LjAzOC0xMC4zNDZ0LTEwLjM0Ni0yNS4wMzhxMC0xNC42OTIgMTAuMzQ2LTI1LjAzOCAxMC4zNDYtMTAuMzQ3IDI1LjAzOC0xMC4zNDd0MjUuMDM4IDEwLjM0N3ExMC4zNDYgMTAuMzQ2IDEwLjM0NiAyNS4wMzh0LTEwLjM0NiAyNS4wMzhRMzM0LjY5Mi0yNDAgMzIwLTI0MFptMzIwIDBxLTE0LjY5MiAwLTI1LjAzOC0xMC4zNDZ0LTEwLjM0Ni0yNS4wMzhxMC0xNC42OTIgMTAuMzQ2LTI1LjAzOCAxMC4zNDYtMTAuMzQ3IDI1LjAzOC0xMC4zNDd0MjUuMDM4IDEwLjM0N3ExMC4zNDYgMTAuMzQ2IDEwLjM0NiAyNS4wMzh0LTEwLjM0NiAyNS4wMzhRNjU0LjY5Mi0yNDAgNjQwLTI0MFoiLz48L3N2Zz4=",size:"md",className:"ffe-datepicker__icon"}))});He.__docgenInfo={description:"",methods:[],displayName:"Button",props:{value:{required:!0,tsType:{name:"string"},description:""},locale:{required:!0,tsType:{name:"union",raw:"'nb' | 'nn' | 'en'",elements:[{name:"literal",value:"'nb'"},{name:"literal",value:"'nn'"},{name:"literal",value:"'en'"}]},description:""},onClick:{required:!0,tsType:{name:"ReactMouseEventHandler",raw:"React.MouseEventHandler<HTMLButtonElement>",elements:[{name:"HTMLButtonElement"}]},description:""}}};const pa=g=>typeof g=="number"&&g>=1&&g<=12,_e=({ariaInvalid:g,"aria-invalid":r,ariaDescribedby:p,"aria-describedby":a,onBlur:c,calendarAbove:i,id:d,maxDate:l,minDate:C,onChange:M,fullWidth:w,fieldMessage:D,labelId:A,dropdownCaption:y,disabledDates:T})=>{const{day:o,setDay:f,year:m,setYear:k,month:b,setMonth:j,locale:h,calendarActiveDate:se,setCalendarActiveDate:ie,setLastChangedValue:le}=n.useContext(Ue),N=n.useCallback(()=>ta(o,b,m),[o,b,m]),[S,X]=n.useState(!1),[K,Pe]=n.useState(C),[J,We]=n.useState(l),[x,oe]=n.useState(N()),ee=n.useId(),G=n.useRef(null),O=n.useRef(null),z=n.useRef(null),R=n.useRef(null),Ge=()=>D?`${ee}-fieldmessage`:void 0,de=n.useCallback(e=>{le(e),M(e)},[M,le]),Be=Ge(),B=n.useCallback(sa(e=>{e!==x&&ne(e)&&(ie(e),oe(e))},250),[x]),$e=!!D;n.useEffect(()=>()=>{B.cancel()},[B]);const Y=n.useCallback(()=>{const e=N();Q(e,u=>{const v=l?Q(l):null;v!=null&&v.isBefore(u)&&na(e)&&u.adjust({period:"Y",offset:-100});const ge=u.format();ge!==e&&(f([u.date]),j([u.month+1]),k([u.year])),oe(ge)})},[N,l,f,j,k]);n.useEffect(()=>{(C!==K||l!==J)&&(Pe(C),We(l),Y()),B(N())},[C,l,N,B,K,J,Y]);const ue=()=>{var e;X(!1),(e=G.current)==null||e.focus(),Y()},ce=e=>{e.key==="Escape"&&ue()},pe=e=>{S&&e.__datepickerID!==ee&&ue()},Ve=()=>{window.addEventListener("click",pe),window.addEventListener("keyup",ce)},me=()=>{window.removeEventListener("click",pe),window.removeEventListener("keyup",ce)};n.useEffect(()=>(S?Ve():me(),()=>{me()}),[S]);const Ze=()=>{Y(),X(!S)},Xe=e=>{const u=e.nativeEvent;u.__datepickerID=ee},Ke=e=>{var u;e.target!==R.current&&e.target!==G.current&&e.target!==O.current&&e.target!==z.current&&((u=O.current)==null||u.focus())},Je=e=>{var v;const u=Q(e);u&&(f([u.date]),j([u.month+1]),k([u.year]),X(!1),ie(e),(v=G.current)==null||v.focus())},$=()=>{const e=r==="true"||g;return e==="true"||e===!0?"true":void 0},ae=()=>a??p,te=e=>{e.preventDefault();const u=(e.clipboardData||window.Clipboard).getData("text"),v=Q(u);v&&(f([v.date]),j([v.month+1]),k([v.year]))},[ea,aa]=n.useState(!0);return n.useEffect(()=>{if(ea){aa(!1);return}const[e,u,v]=x.split(".").map(Number);if(e*u*v>0){de(x);return}de("")},[x]),t.createElement("div",{className:V("ffe-datepicker","ffe-default-mode",{"ffe-datepicker--full-width":w,"ffe-input-group--message":$e,"ffe-datepicker--invalid":$()}),"data-testid":"date-picker",onClick:e=>{Xe(e),Ke(e)},role:"group",id:d},t.createElement("div",{className:V("ffe-dateinput"),onBlur:e=>{const u=e.relatedTarget;u!==R.current&&u!==O.current&&u!==z.current&&(c==null||c(e),Y())}},t.createElement(Z,{ref:O,value:o??void 0,min:1,max:31,onPaste:te,onSpinButtonChange:(e,u=!0)=>u?f(e,()=>{var v;return(v=z.current)==null?void 0:v.focus({preventScroll:!0})}):f(e),nextSpinButton:z,maxLength:2,"aria-invalid":$(),"aria-valuenow":typeof o=="number"?o:void 0,"aria-valuetext":`${o}`,"aria-label":L[h].DAY,"aria-describedby":ae(),"aria-labelledby":A},o?Me(o):"dd"),".",t.createElement(Z,{ref:z,value:b??void 0,min:1,max:12,onPaste:te,onSpinButtonChange:(e,u=!0)=>u?j(e,()=>{var v;return(v=R.current)==null?void 0:v.focus({preventScroll:!0})}):j(e),nextSpinButton:R,prevSpinButton:O,maxLength:2,"aria-invalid":$(),"aria-valuenow":typeof b=="number"?b:void 0,"aria-valuetext":pa(b)?`${b} - ${L[h][`MONTH_${b}`]}`:void 0,"aria-label":L[h].MONTH,"aria-describedby":ae(),"aria-labelledby":A},b?Me(b):"mm"),".",t.createElement(Z,{ref:R,className:"ffe-dateinput__field-year",value:m??void 0,min:1,max:9999,onPaste:te,onSpinButtonChange:e=>{k(e)},prevSpinButton:z,maxLength:4,"aria-invalid":$(),"aria-valuetext":`${m}`,"aria-valuenow":typeof m=="number"?m:void 0,"aria-label":L[h].YEAR,"aria-describedby":ae(),"aria-labelledby":A},m||"yyyy")),t.createElement(He,{onClick:Ze,locale:h,value:se||"",ref:G}),S&&t.createElement(ra,{calendarClassName:V("ffe-calendar ffe-calendar--datepicker",{"ffe-calendar--datepicker--above":i}),locale:h,onDatePicked:Je,selectedDate:se,focusOnMount:!0,dropdownCaption:y,minDate:K,maxDate:J,disabledDates:T}),!!D&&t.createElement(la,{as:"p",id:Be},D))};_e.__docgenInfo={description:"",methods:[],displayName:"DatepickerComp",props:{"aria-invalid":{required:!1,tsType:{name:"ReactComponentProps['aria-invalid']",raw:"React.ComponentProps<'input'>['aria-invalid']"},description:""},ariaInvalid:{required:!1,tsType:{name:"ReactComponentProps['aria-invalid']",raw:"React.ComponentProps<'input'>['aria-invalid']"},description:""},"aria-describedby":{required:!1,tsType:{name:"ReactComponentProps['aria-describedby']",raw:"React.ComponentProps<'input'>['aria-describedby']"},description:""},ariaDescribedby:{required:!1,tsType:{name:"ReactComponentProps['aria-describedby']",raw:"React.ComponentProps<'input'>['aria-describedby']"},description:""},onBlur:{required:!1,tsType:{name:"signature",type:"function",raw:"(evt: React.FocusEvent<HTMLElement>) => void",signature:{arguments:[{type:{name:"ReactFocusEvent",raw:"React.FocusEvent<HTMLElement>",elements:[{name:"HTMLElement"}]},name:"evt"}],return:{name:"void"}}},description:"Trigges når fokus forlater et av feltene (dd, mm, yyyy), og neste fokuserte element ikke er et av disse feltene."},calendarAbove:{required:!1,tsType:{name:"boolean"},description:""},id:{required:!1,tsType:{name:"string"},description:""},maxDate:{required:!1,tsType:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}]},description:`Seneste tillatte dato. Format: 'dd.mm.yyyy'

Merk: For å holde år-dropdownen håndterbar, begrenses årsintervallet automatisk til
maksimalt 10 år bakover eller fremover fra inneværende år, selv om minDate/maxDate
tillater et bredere intervall.`},minDate:{required:!1,tsType:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}]},description:`Tidligste tillatte dato. Format: 'dd.mm.yyyy'

Merk: For å holde år-dropdownen håndterbar, begrenses årsintervallet automatisk til
maksimalt 10 år bakover eller fremover fra inneværende år, selv om minDate/maxDate
tillater et bredere intervall.`},onChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(date: string) => void",signature:{arguments:[{type:{name:"string"},name:"date"}],return:{name:"void"}}},description:""},fullWidth:{required:!1,tsType:{name:"boolean"},description:""},fieldMessage:{required:!1,tsType:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}]},description:""},labelId:{required:!0,tsType:{name:"string"},description:"Id til labelen som beskriver datepicker. Påkrevd for UU-kompatibilitet"},dropdownCaption:{required:!1,tsType:{name:"boolean"},description:"Om måned- og år-dropdown skal vises i kalenderen"},disabledDates:{required:!1,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:"Liste over datoer som skal deaktiveres i kalenderen"}}};const I=({locale:g="nb",value:r,...p})=>t.createElement(Fe,{locale:g,value:r},t.createElement(_e,{...p}));I.__docgenInfo={description:"",methods:[],displayName:"Datepicker",props:{"aria-invalid":{required:!1,tsType:{name:"ReactComponentProps['aria-invalid']",raw:"React.ComponentProps<'input'>['aria-invalid']"},description:""},ariaInvalid:{required:!1,tsType:{name:"ReactComponentProps['aria-invalid']",raw:"React.ComponentProps<'input'>['aria-invalid']"},description:""},"aria-describedby":{required:!1,tsType:{name:"ReactComponentProps['aria-describedby']",raw:"React.ComponentProps<'input'>['aria-describedby']"},description:""},ariaDescribedby:{required:!1,tsType:{name:"ReactComponentProps['aria-describedby']",raw:"React.ComponentProps<'input'>['aria-describedby']"},description:""},onBlur:{required:!1,tsType:{name:"signature",type:"function",raw:"(evt: React.FocusEvent<HTMLElement>) => void",signature:{arguments:[{type:{name:"ReactFocusEvent",raw:"React.FocusEvent<HTMLElement>",elements:[{name:"HTMLElement"}]},name:"evt"}],return:{name:"void"}}},description:"Trigges når fokus forlater et av feltene (dd, mm, yyyy), og neste fokuserte element ikke er et av disse feltene."},calendarAbove:{required:!1,tsType:{name:"boolean"},description:""},id:{required:!1,tsType:{name:"string"},description:""},maxDate:{required:!1,tsType:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}]},description:`Seneste tillatte dato. Format: 'dd.mm.yyyy'

Merk: For å holde år-dropdownen håndterbar, begrenses årsintervallet automatisk til
maksimalt 10 år bakover eller fremover fra inneværende år, selv om minDate/maxDate
tillater et bredere intervall.`},minDate:{required:!1,tsType:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}]},description:`Tidligste tillatte dato. Format: 'dd.mm.yyyy'

Merk: For å holde år-dropdownen håndterbar, begrenses årsintervallet automatisk til
maksimalt 10 år bakover eller fremover fra inneværende år, selv om minDate/maxDate
tillater et bredere intervall.`},onChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(date: string) => void",signature:{arguments:[{type:{name:"string"},name:"date"}],return:{name:"void"}}},description:""},fullWidth:{required:!1,tsType:{name:"boolean"},description:""},fieldMessage:{required:!1,tsType:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}]},description:""},labelId:{required:!0,tsType:{name:"string"},description:"Id til labelen som beskriver datepicker. Påkrevd for UU-kompatibilitet"},dropdownCaption:{required:!1,tsType:{name:"boolean"},description:"Om måned- og år-dropdown skal vises i kalenderen"},disabledDates:{required:!1,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:"Liste over datoer som skal deaktiveres i kalenderen"},value:{required:!0,tsType:{name:"string"},description:""},locale:{required:!1,tsType:{name:"union",raw:"'nb' | 'nn' | 'en'",elements:[{name:"literal",value:"'nb'"},{name:"literal",value:"'nn'"},{name:"literal",value:"'en'"}]},description:"",defaultValue:{value:"'nb'",computed:!1}}}};const ma={title:"Komponenter/Datepicker/Datepicker",component:I,argTypes:{minDate:{control:"text"},maxDate:{control:"text"}}},s={args:{locale:"nb",labelId:"datepicker-label",minDate:"01.01.2020",maxDate:"31.12.2030"},render:function({value:r,onChange:p,...a}){var d;const[c,i]=n.useState("01.12.2024");return t.createElement(E,{label:"Dato",labelId:(d=s==null?void 0:s.args)==null?void 0:d.labelId},t.createElement(I,{value:r??c,onChange:l=>{i(l),console.log("Datepicker value:",l)},...a}))}},q={args:{...s.args},render:function({value:r,onChange:p,...a}){var d;const[c,i]=n.useState("01.12.2024");return t.createElement(E,{label:"Dato","aria-invalid":!0,fieldMessage:"Ugyldig dato",labelId:(d=s==null?void 0:s.args)==null?void 0:d.labelId},t.createElement(I,{value:r??c,onChange:i,...a}))}},U={args:{...s.args,fullWidth:!0},render:function({value:r,onChange:p,...a}){var d;const[c,i]=n.useState("01.12.2024");return t.createElement(E,{label:"Dato",labelId:(d=s==null?void 0:s.args)==null?void 0:d.labelId},t.createElement(I,{value:r??c,onChange:i,...a}))}},F={args:{...s.args,calendarAbove:!0},render:function({value:r,onChange:p,...a}){var d;const[c,i]=n.useState("01.12.2024");return t.createElement(E,{label:"Dato",labelId:(d=s==null?void 0:s.args)==null?void 0:d.labelId},t.createElement(I,{value:r??c,onChange:i,...a}))}},H={args:{...s.args,dropdownCaption:!0},render:function({value:r,onChange:p,...a}){var d;const[c,i]=n.useState("01.12.2024");return t.createElement(E,{label:"Dato med dropdowns for måned og år",labelId:(d=s==null?void 0:s.args)==null?void 0:d.labelId},t.createElement(I,{value:r??c,onChange:l=>{i(l)},...a}))}},_={args:{...s.args,locale:"nb"},render:function({...r}){var C;const[p,a]=n.useState("01.12.2024"),[c,i]=n.useState("initiell"),d=M=>{a(M),i("datepicker")},l=[{label:"I dag",value:()=>{const M=new Date;return`${String(M.getDate()).padStart(2,"0")}.${String(M.getMonth()+1).padStart(2,"0")}.${M.getFullYear()}`}},{label:"Begynnelsen av året",value:"01.01.2024"},{label:"Slutten av året",value:"31.12.2024"},{label:"Midten av året",value:"01.07.2024"}];return t.createElement("div",null,t.createElement(E,{label:"Dato",labelId:(C=s==null?void 0:s.args)==null?void 0:C.labelId},t.createElement(I,{...r,value:p,onChange:d})),t.createElement("div",{style:{marginTop:"20px"}},t.createElement("div",null,"Kontroller datepicker eksternt:"),t.createElement("div",{style:{display:"flex",gap:"10px",marginTop:"10px"}},l.map((M,w)=>t.createElement(oa,{key:w,onClick:()=>{const D=typeof M.value=="function"?M.value():M.value;a(D),i("ekstern")}},M.label))),t.createElement("div",{style:{marginTop:"20px"}},t.createElement("div",null,"Manuell ekstern input:"),t.createElement("div",{style:{display:"flex",gap:"10px",maxWidth:"200px",marginTop:"10px"}},t.createElement(da,{type:"text",value:p,onChange:M=>{a(M.target.value),i("manuell")},placeholder:"dd.mm.åååå"}))),t.createElement("div",{style:{marginTop:"20px"}},t.createElement("div",null,"Nåværende tilstand:"),t.createElement("div",null,"Dato: ",p),t.createElement("div",null,"Sist oppdatert av: ",c))))}},P={args:{...s.args},render:function({value:r,onChange:p,...a}){var d;const[c,i]=n.useState("01.12.2024");return t.createElement(E,{label:"Dato",labelId:(d=s==null?void 0:s.args)==null?void 0:d.labelId,description:"Dette er en beskrivelse av Datepicker-komponenten. Den gir ekstra informasjon om hvordan den skal brukes."},t.createElement(I,{value:r??c,onChange:l=>{i(l),console.log("Datepicker value:",l)},...a}))}},W={args:{...s.args,maxDate:"31.12.2024",disabledDates:["24.12.2024","25.12.2024","31.12.2024"]},render:function({value:r,onChange:p,...a}){var d;const[c,i]=n.useState("01.12.2024");return t.createElement(E,{label:"Dato",labelId:(d=s==null?void 0:s.args)==null?void 0:d.labelId},t.createElement(I,{value:r??c,onChange:l=>{i(l),console.log("Datepicker value:",l)},...a}))}};var De,ve,ye;s.parameters={...s.parameters,docs:{...(De=s.parameters)==null?void 0:De.docs,source:{originalSource:`{
  args: {
    locale: 'nb',
    labelId: 'datepicker-label',
    minDate: '01.01.2020',
    maxDate: '31.12.2030'
  },
  render: function Render({
    value,
    onChange,
    ...args
  }: DatepickerProps) {
    const [date, setDate] = useState('01.12.2024');
    return <InputGroup label="Dato" labelId={Standard?.args?.labelId}>
                <Datepicker value={value ?? date} onChange={date => {
        setDate(date);
        console.log('Datepicker value:', date);
      }} {...args} />
            </InputGroup>;
  }
}`,...(ye=(ve=s.parameters)==null?void 0:ve.docs)==null?void 0:ye.source}}};var be,fe,Te;q.parameters={...q.parameters,docs:{...(be=q.parameters)==null?void 0:be.docs,source:{originalSource:`{
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
                <Datepicker value={value ?? date} onChange={setDate} {...args} />
            </InputGroup>;
  }
}`,...(Te=(fe=q.parameters)==null?void 0:fe.docs)==null?void 0:Te.source}}};var Ce,Ie,ke;U.parameters={...U.parameters,docs:{...(Ce=U.parameters)==null?void 0:Ce.docs,source:{originalSource:`{
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
}`,...(ke=(Ie=U.parameters)==null?void 0:Ie.docs)==null?void 0:ke.source}}};var Le,Ee,we;F.parameters={...F.parameters,docs:{...(Le=F.parameters)==null?void 0:Le.docs,source:{originalSource:`{
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
}`,...(we=(Ee=F.parameters)==null?void 0:Ee.docs)==null?void 0:we.source}}};var Ae,je,he;H.parameters={...H.parameters,docs:{...(Ae=H.parameters)==null?void 0:Ae.docs,source:{originalSource:`{
  args: {
    ...Standard.args,
    dropdownCaption: true
  },
  render: function Render({
    value,
    onChange,
    ...args
  }: DatepickerProps) {
    const [date, setDate] = useState('01.12.2024');
    return <InputGroup label="Dato med dropdowns for måned og år" labelId={Standard?.args?.labelId}>
                <Datepicker value={value ?? date} onChange={date => {
        setDate(date);
      }} {...args} />
            </InputGroup>;
  }
}`,...(he=(je=H.parameters)==null?void 0:je.docs)==null?void 0:he.source}}};var ze,Ne,Se;_.parameters={..._.parameters,docs:{...(ze=_.parameters)==null?void 0:ze.docs,source:{originalSource:`{
  args: {
    ...Standard.args,
    locale: 'nb'
  },
  render: function Render({
    ...args
  }: DatepickerProps) {
    const [date, setDate] = useState('01.12.2024');
    const [lastUpdateSource, setLastUpdateSource] = useState('initiell');
    const handleDateChange = (newDate: string) => {
      setDate(newDate);
      setLastUpdateSource('datepicker');
    };
    const predefinedDates = [{
      label: 'I dag',
      value: () => {
        const today = new Date();
        return \`\${String(today.getDate()).padStart(2, '0')}.\${String(today.getMonth() + 1).padStart(2, '0')}.\${today.getFullYear()}\`;
      }
    }, {
      label: 'Begynnelsen av året',
      value: '01.01.2024'
    }, {
      label: 'Slutten av året',
      value: '31.12.2024'
    }, {
      label: 'Midten av året',
      value: '01.07.2024'
    }];
    return <div>
                <InputGroup label="Dato" labelId={Standard?.args?.labelId}>
                    <Datepicker {...args} value={date} onChange={handleDateChange} />
                </InputGroup>

                <div style={{
        marginTop: '20px'
      }}>
                    <div>Kontroller datepicker eksternt:</div>
                    <div style={{
          display: 'flex',
          gap: '10px',
          marginTop: '10px'
        }}>
                        {predefinedDates.map((presetDate, index) => <SecondaryButton key={index} onClick={() => {
            const newValue = typeof presetDate.value === 'function' ? presetDate.value() : presetDate.value;
            setDate(newValue);
            setLastUpdateSource('ekstern');
          }}>
                                {presetDate.label}
                            </SecondaryButton>)}
                    </div>

                    <div style={{
          marginTop: '20px'
        }}>
                        <div>Manuell ekstern input:</div>
                        <div style={{
            display: 'flex',
            gap: '10px',
            maxWidth: '200px',
            marginTop: '10px'
          }}>
                            <Input type="text" value={date} onChange={e => {
              setDate(e.target.value);
              setLastUpdateSource('manuell');
            }} placeholder="dd.mm.åååå" />
                        </div>
                    </div>

                    <div style={{
          marginTop: '20px'
        }}>
                        <div>Nåværende tilstand:</div>
                        <div>Dato: {date}</div>
                        <div>Sist oppdatert av: {lastUpdateSource}</div>
                    </div>
                </div>
            </div>;
  }
}`,...(Se=(Ne=_.parameters)==null?void 0:Ne.docs)==null?void 0:Se.source}}};var xe,Oe,Re;P.parameters={...P.parameters,docs:{...(xe=P.parameters)==null?void 0:xe.docs,source:{originalSource:`{
  args: {
    ...Standard.args
  },
  render: function Render({
    value,
    onChange,
    ...args
  }: DatepickerProps) {
    const [date, setDate] = useState('01.12.2024');
    return <InputGroup label="Dato" labelId={Standard?.args?.labelId} description="Dette er en beskrivelse av Datepicker-komponenten. Den gir ekstra informasjon om hvordan den skal brukes.">
                <Datepicker value={value ?? date} onChange={date => {
        setDate(date);
        console.log('Datepicker value:', date);
      }} {...args} />
            </InputGroup>;
  }
}`,...(Re=(Oe=P.parameters)==null?void 0:Oe.docs)==null?void 0:Re.source}}};var Ye,Qe,qe;W.parameters={...W.parameters,docs:{...(Ye=W.parameters)==null?void 0:Ye.docs,source:{originalSource:`{
  args: {
    ...Standard.args,
    maxDate: '31.12.2024',
    disabledDates: ['24.12.2024', '25.12.2024', '31.12.2024']
  },
  render: function Render({
    value,
    onChange,
    ...args
  }: DatepickerProps) {
    const [date, setDate] = useState('01.12.2024');
    return <InputGroup label="Dato" labelId={Standard?.args?.labelId}>
                <Datepicker value={value ?? date} onChange={date => {
        setDate(date);
        console.log('Datepicker value:', date);
      }} {...args} />
            </InputGroup>;
  }
}`,...(qe=(Qe=W.parameters)==null?void 0:Qe.docs)==null?void 0:qe.source}}};const ga=["Standard","FieldMessageString","FullWidth","CalendarAbove","WithDropdownCaption","TwoWayControlledComponent","WithDescription","WithDisabledDates"],Ia=Object.freeze(Object.defineProperty({__proto__:null,CalendarAbove:F,FieldMessageString:q,FullWidth:U,Standard:s,TwoWayControlledComponent:_,WithDescription:P,WithDisabledDates:W,WithDropdownCaption:H,__namedExportsOrder:ga,default:ma},Symbol.toStringTag,{value:"Module"}));export{Ia as D,s as S,H as W,P as a};
